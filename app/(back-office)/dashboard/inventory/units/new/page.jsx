"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/dashboard/FormHeader";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewUnit({ initialData = {}, isUpdate = false }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);
  function redirect() {
    router.push("/dashboard/inventory/units");
  }
  async function onSubmit(data) {
    console.log(data);

    if (isUpdate) {
      // Atualizar pedido
      makePutRequest(
        setLoading,
        `api/units/${initialData.id}`,
        data,
        "Unidade",
        redirect,
        reset
      );
    } else {
      makePostRequest(setLoading, "api/units", data, "Unidade", reset);
    }
  }
  return (
    <div>
      {/* Cabeçalho */}
      <FormHeader
        title={isUpdate ? "Atualizar Unidade" : "Nova Unidade"}
        href="/dashboard/inventory/units"
      />
      {/* Formulário */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Título da Unidade"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Abreviação da Unidade"
            name="abbreviation"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          title={isUpdate ? "Unidade Atualizada" : "Nova Unidade"}
        />
      </form>
    </div>
  );
}
