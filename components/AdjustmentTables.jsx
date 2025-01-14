import React from "react";

export default function AdjustmentTables() {
  return (
    <div>
      {/* Header */}
      <FixedHeader
        title="Adjustments"
        newLink="/dashboard/inventory/adjustments/new"
      />
      {/* Table */}
      <div className="my-4 p-8">
        <h2 className="py-4 text-xl font-semibold">
          Ajustes de Incrementos de Estoque
        </h2>
        <DataTable
          data={addAdjustments}
          columns={addColumns}
          resourceTitle="adjustments/add"
        />
      </div>
      <div className="my-4 p-8">
        <h2 className="py-4 text-xl font-semibold">
          Ajustes de Transferência de Estoque
        </h2>
        <DataTable
          data={transferAdjustments}
          columns={transferColumns}
          resourceTitle="adjustments/transfer"
        />
      </div>
    </div>
  );
}
