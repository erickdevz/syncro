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

export default function NewCategory({ initialData = {}, isUpdate = false }) {
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
    router.push("/dashboard/inventory/categories");
  }

  async function onSubmit(data) {
    console.log(data);
    if (isUpdate) {
      // Atualizar pedido
      makePutRequest(
        setLoading,
        `api/categories/${initialData.id}`,
        data,
        "Categoria",
        redirect,
        reset
      );
    } else {
      makePostRequest(setLoading, "api/categories", data, "Categoria", reset);
    }
  }

  return (
    <div>
      {/* Cabeçalho */}
      <FormHeader
        title={isUpdate ? "Atualizar Categoria" : "Nova Categoria"}
        href="/dashboard/inventory/categories"
      />
      {/* Formulário */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Título da Categoria"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Descrição da Categoria"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          title={isUpdate ? "Categoria Atualizada" : "Nova Categoria"}
        />
      </form>
    </div>
  );
}
