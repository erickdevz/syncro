"use client";
import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import {
  Diff,
  Factory,
  LayoutGrid,
  LayoutPanelTop,
  Scale,
  Slack,
  Warehouse,
} from "lucide-react";
import { useSession } from "next-auth/react";

export default function Inventory() {
  const optionCards = [
    {
      title: "Itens",
      description: "Crie itens e serviços autônomos que você compra e vende",
      link: "/dashboard/inventory/items/new",
      linkTitle: "Novo Item",
      enabled: true,
      icon: LayoutGrid,
    },
    {
      title: "Categorias",
      description: "Agrupe diferentes itens e venda-os como kits",
      link: "/dashboard/inventory/categories/new",
      linkTitle: "Nova Categoria",
      enabled: true,
      icon: LayoutPanelTop,
    },
    {
      title: "Marcas",
      description:
        "Ajuste os preços dos itens para contatos ou transações específicas",
      link: "/dashboard/inventory/brands/new",
      linkTitle: "Nova Marca",
      enabled: true,
      icon: Slack,
    },
    {
      title: "Armazém",
      description:
        "Ajuste os preços dos itens para contatos ou transações específicas",
      link: "/dashboard/inventory/warehouse/new",
      linkTitle: "Novo Armazém",
      enabled: true,
      icon: Warehouse,
    },
    {
      title: "Unidades",
      description:
        "Ajuste os preços dos itens para contatos ou transações específicas",
      link: "/dashboard/inventory/units/new",
      linkTitle: "Nova Unidade",
      enabled: true,
      icon: Scale,
    },
    {
      title: "Fornecedores",
      description:
        "Ajuste os preços dos itens para contatos ou transações específicas",
      link: "/dashboard/inventory/suppliers/new",
      linkTitle: "Novo Fornecedor",
      enabled: true,
      icon: Factory,
    },
    {
      title: "Ajuste de Inventário",
      description: "Transfira o estoque do Armazém Principal",
      link: "/dashboard/inventory/adjustments/new",
      linkTitle: "Novo Ajuste",
      enabled: true,
      icon: Diff,
    },
  ];
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <FixedHeader newLink="/dashboard/inventory/items/new" />
      <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 py-8 px-16 gap-6">
        {optionCards.map((card, i) => {
          return <OptionCard optionData={card} key={i} />;
        })}
      </div>
    </div>
  );
}
