"use client";

import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/dashboard/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewWarehouse({ initialData = {}, isUpdate = false }) {
  const router = useRouter();
  const selectOptions = [
    {
      title: "Principal",
      id: "main",
    },
    {
      title: "Filial",
      id: "branch",
    },
  ];
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialData });
  const [loading, setLoading] = useState(false);
  function redirect() {
    router.push("/dashboard/inventory/warehouse");
  }
  async function onSubmit(data) {
    console.log(data);
    if (isUpdate) {
      // Atualizar pedido
      makePutRequest(
        setLoading,
        `api/warehouse/${initialData.id}`,
        data,
        "Armazém",
        redirect,
        reset
      );
    } else {
      makePostRequest(setLoading, "api/warehouse", data, "Armazém", reset);
    }
  }
  return (
    <div>
      {/* Cabeçalho */}
      <FormHeader
        title={isUpdate ? "Atualizar Armazém" : "Novo Armazém"}
        href="/dashboard/inventory/warehouse"
      />
      {/* Formulário */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <SelectInput
            name="type"
            label="Selecione o Tipo de Armazém"
            register={register}
            className="w-full"
            options={selectOptions}
          />
          <TextInput
            label="Título do Armazém"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Localização do Armazém"
            name="location"
            register={register}
            errors={errors}
          />

          <TextareaInput
            label="Descrição do Armazém"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          title={isUpdate ? "Armazém Atualizado" : "Novo Armazém"}
        />
      </form>
    </div>
  );
}
