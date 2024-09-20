"use client";

import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";

import { makePostRequest, makePutRequest, fetchData } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function CreateItemForm({
  categories,
  units,
  brands,
  suppliers,
  initialData = {},
  isUpdate = false,
  itemId, // ID do item para edição
}) {
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");
  const router = useRouter();
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);

  // Função de redirecionamento após a operação de sucesso
  function redirect() {
    router.push("/dashboard/inventory/items");
  }

  // Carregar os dados do item existente (se estiver em modo de atualização)
  useEffect(() => {
    if (isUpdate && itemId) {
      fetchData(`api/items/${itemId}`, (data) => {
        setImageUrl(data.imageUrl); // Preenche o campo de imagem
        // Atualiza os campos do formulário com os dados recebidos
        for (const [key, value] of Object.entries(data)) {
          setValue(key, value);
        }
      });
    }
  }, [isUpdate, itemId, setValue]);

  // Submissão do formulário
  async function onSubmit(data) {
    data.slug = generateSlug(data.title);
    data.imageUrl = imageUrl; // Adiciona a URL da imagem ao objeto de dados

    if (isUpdate) {
      // Update request (edição de item)
      await makePutRequest(
        setLoading,
        `api/items/${itemId}`, // Endpoint para atualização
        data,
        "Item",
        redirect,
        reset
      );
    } else {
      // Create request (criação de novo item)
      await makePostRequest(setLoading, "api/items", data, "Item", reset);
      setImageUrl(""); // Reseta o campo de imagem após a criação
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Título do Item"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          name="categoryId"
          label="Selecione a Categoria do Item"
          register={register}
          className="w-full"
          options={categories}
        />
        <TextInput
          label="SKU do Item"
          name="sku"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Código de Barras do Item"
          name="barcode"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Quantidade do Item"
          name="qty"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          name="unitId"
          label="Selecione a Unidade do Item"
          register={register}
          className="w-full"
          options={units}
        />
        <SelectInput
          name="brandId"
          label="Selecione a Marca do Item"
          register={register}
          className="w-full"
          options={brands}
        />
        <TextInput
          label="Preço de Compra"
          name="buyingPrice"
          register={register}
          errors={errors}
          type="number"
          className="w-full"
        />
        <TextInput
          label="Preço de Venda"
          name="sellingPrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          name="supplierId"
          label="Selecione o Fornecedor do Item"
          register={register}
          className="w-full"
          options={suppliers}
        />
        <TextInput
          label="Ponto de Reordem"
          name="reOrderPoint"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Peso do Item em Kgs"
          name="weight"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Dimensões do Item em cm (20 x 30 x 100)"
          name="dimensions"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Taxa de Imposto do Item em %"
          name="taxRate"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextareaInput
          label="Descrição do Item"
          name="description"
          register={register}
          errors={errors}
        />
        <TextareaInput
          label="Notas do Item"
          name="notes"
          register={register}
          errors={errors}
        />
        <ImageInput
          label="Imagem do Item"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="imageUploader"
        />
      </div>
      <SubmitButton
        isLoading={loading}
        title={isUpdate ? "Atualizar Item" : "Criar Novo Item"}
      />
    </form>
  );
}
