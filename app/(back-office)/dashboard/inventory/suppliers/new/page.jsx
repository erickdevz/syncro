"use client";

import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/dashboard/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewSupplier({ initialData = {}, isUpdate = false }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialData });
  const [loading, setLoading] = useState(false);

  function redirect() {
    router.push("/dashboard/inventory/suppliers");
  }

  async function onSubmit(data) {
    console.log(data);
    if (isUpdate) {
      // Atualizar pedido
      makePutRequest(
        setLoading,
        `api/suppliers/${initialData.id}`,
        data,
        "Fornecedor",
        redirect,
        reset
      );
    } else {
      makePostRequest(setLoading, "api/suppliers", data, "Fornecedor", reset);
    }
  }

  return (
    <div>
      {/* Cabeçalho */}
      <FormHeader
        title={isUpdate ? "Atualizar Fornecedor" : "Novo Fornecedor"}
        href="/dashboard/inventory/suppliers"
      />
      {/* Formulário */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Nome do Fornecedor"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Telefone do Fornecedor"
            name="phone"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Email do Fornecedor"
            name="email"
            type="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Endereço do Fornecedor"
            name="address"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Pessoa de Contato do Fornecedor"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Código do Fornecedor"
            name="supplierCode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="CNPJ do Fornecedor"
            name="taxID"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Termos de Pagamento do Fornecedor"
            name="paymentTerms"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Notas"
            name="notes"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          title={isUpdate ? "Fornecedor Atualizado" : "Novo Fornecedor"}
        />
      </form>
    </div>
  );
}
