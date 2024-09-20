"use client";
import {
  BaggageClaim,
  ChevronLeft,
  ExternalLink,
  Files,
  Home,
  ShoppingBasket,
  ShoppingCart,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";


import SidebarDropdownLink from "./SidebarDropdownLink";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  console.log(showSidebar);
  const inventoryLinks = [
    {
      title: "Todos",
      href: "/dashboard/inventory",
    },
    {
      title: "Itens",
      href: "/dashboard/inventory/items",
    },
    {
      title: "Categorias",
      href: "/dashboard/inventory/categories",
    },
    {
      title: "Marcas",
      href: "/dashboard/inventory/brands",
    },
    {
      title: "Unidades",
      href: "/dashboard/inventory/units",
    },
    {
      title: "Armazém",
      href: "/dashboard/inventory/warehouse",
    },
    {
      title: "Ajuste de Inventário",
      href: "/dashboard/inventory/adjustments",
    },
    {
      title: "Fornecedor",
      href: "/dashboard/inventory/suppliers",
    },
  ];
  return (
    <div
      className={`${
        showSidebar
          ? "w-60 min-h-screen bg-slate-800 text-slate-50 fixed lg:block z-50"
          : "w-60 min-h-screen bg-slate-800 text-slate-50 fixed hidden lg:block z-50"
      }`}
    >
      {/* Parte Superior */}

      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex justify-between">
          <Link
            href="/dashboard/home/overview"
            className="bg-slate-950 flex space-x-2 items-center py-3 px-2 w-full"
          >
            <ShoppingCart />
            <span className=" text-xl font-semibold">Syncro</span>
          </Link>
          <button
            className="bg-slate-950 py-3 px-4 lg:hidden"
            onClick={() => setShowSidebar(false)}
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
        {/* Links */}

        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            href="/dashboard/home/overview"
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md"
          >
            <Home className="w-4 h-4" />
            <span>Início</span>
          </Link>
          <SidebarDropdownLink
            items={inventoryLinks}
            title="Inventário"
            icon={BaggageClaim}
            setShowSidebar={setShowSidebar}
          />
          <Link href="https://docs.google.com/document/d/1siBBiKarnSMtcCK7VgkgAialEemAXhDYq3h_dCyQ01I/edit#heading=h.oyje4yf4k0px" className="flex items-center space-x-2 p-2 ">
            <Files className="w-4 h-4" />
            <span>Documentos</span>
          </Link>
          <Link
            href={process.env.NEXT_PUBLIC_BASE_URL}
            className="flex items-center space-x-2 p-2 "
          >
            <ExternalLink className="w-4 h-4" />
            <span>Página Inicial</span>
          </Link>
        </nav>
      </div>

      {/* Parte Inferior */}
      <div className="flex flex-col">
        <button
          onClick={() => setShowSidebar(false)}
          className="bg-slate-950 flex space-x-2  justify-center py-3 px-2"
        >
          <ChevronLeft />
        </button>
      </div>
    </div>
  );
}
