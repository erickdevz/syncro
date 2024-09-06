import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Brands() {
  const brands = await getData("brands");
  const columns = ["title", "createdAt", "updatedAt"];
  return (
    <div>
      {/* Header */}
      <FixedHeader title="Marcas" newLink="/dashboard/inventory/brands/new" />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable data={brands} columns={columns} resourceTitle="brands" />
      </div>
    </div>
  );
}
