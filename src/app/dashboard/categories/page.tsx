'use client';

import React from 'react';
import { Box, Button, Stack } from '@mui/material';

import { categoriesData } from '@/data/categories';
import { DataTable } from '@/components/core/table';
import { HeaderTable } from '@/components/core/table/headerTable';
import CategoryAddForm from '@/components/dashboard/categories/CategoryAddForm';

interface Categories {
  id: string;
  name: string;
  description: string;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface CategoriesRow {
  id: React.ReactNode;
  name: React.ReactNode;
  description: React.ReactNode;
  image: React.ReactNode;
  status: React.ReactNode;
  created_at: React.ReactNode;
  updated_at: React.ReactNode;
  actions: React.ReactNode;
}

export default function Page(): React.JSX.Element {
  const [rows, setRows] = React.useState<CategoriesRow[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleDelete = (id: string) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleEdit = (id: string) => {
    // Thực hiện logic mở form chỉnh sửa ở đây
  };

  const convertCategories = (category: Categories) => ({
    id: <Box>{category.id}</Box>,
    name: <Box>{category.name}</Box>,
    description: <Box>{category.description}</Box>,
    image: <Box>{category.image}</Box>,
    status: <Box color={category.status === 'active' ? 'success' : 'error'}>{category.status}</Box>,
    created_at: <Box>{category.created_at}</Box>,
    updated_at: <Box>{category.updated_at}</Box>,
    actions: (
      <Box>
        <Button onClick={() => handleEdit(category.id)}>Sửa</Button>
        <Button onClick={() => handleDelete(category.id)}>Xóa</Button>
      </Box>
    ),
  });

  React.useEffect(() => {
    setRows(categoriesData?.map((item) => convertCategories(item)));
  }, []);

  const columns = React.useMemo(
    () => [
      { key: 'id', label: 'STT' },
      { key: 'name', label: 'Tên danh mục' },
      { key: 'description', label: 'Mô tả' },
      { key: 'image', label: 'Hình ảnh' },
      { key: 'status', label: 'Trang thái' },
      { key: 'created_at', label: 'Ngày tạo' },
      { key: 'updated_at', label: 'Ngày cập nhật' },
      { key: 'actions', label: 'Thao tác' },
    ],
    []
  );

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Stack spacing={2}>
      <HeaderTable title="Danh sách danh mục" isUpload isDownload isAdd onOpen={handleOpen} />
      <DataTable columns={columns} rows={rows} count={rows.length} page={0} rowsPerPage={10} />
      <CategoryAddForm open={open} handleClose={handleClose} />
    </Stack>
  );
}
