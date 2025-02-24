import { DataTable } from "@/components/core/table";
import { CustomersFilters } from "@/components/dashboard/customers/customers-filters";
import { Button, Stack, Typography } from "@mui/material";
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import React from "react";

export default function Page(): React.JSX.Element {
  const rows = React.useMemo(() => [
    {
      id: "1",
      name: "Product 1",
      price: "$10",
      category: "Category 1",
      brand: "Brand 1",
    },
    {
      id: "2",
      name: "Product 2",
      price: "$20",
      category: "Category 2",
      brand: "Brand 2",
    },
    {
      id: "3",
      name: "Product 3",
      price: "$30",
      category: "Category 3",
      brand: "Brand 3",
    },
  ], []);
  const columns = React.useMemo(() => [
    { key: "name", label: "Name" },
    { key: "price", label: "Price" },
    { key: "category", label: "Category" },
    { key: "brand", label: "Brand" },
  ], []);
  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Customers</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <DataTable columns={columns} rows={rows} count={10} page={0} rowsPerPage={10} />
    </Stack>
  );
}