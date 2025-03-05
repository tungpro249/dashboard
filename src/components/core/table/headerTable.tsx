import React from 'react';
import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';

interface HeaderTableProps {
  title: string;
  isUpload?: boolean;
  isDownload?: boolean;
  isAdd?: boolean;
  onOpen?: () => void;
}

export function HeaderTable({ title, isUpload, isDownload, isAdd, onOpen }: HeaderTableProps) {
  return (
    <Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
      <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
        <Typography variant="h4">{title}</Typography>
        <Stack direction="row" spacing={1}>
          {isUpload && (
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Tải file lên
            </Button>
          )}
          {isDownload && (
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Xuất excel
            </Button>
          )}
        </Stack>
      </Stack>
      {isAdd && (
        <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained" onClick={onOpen}>
          Thêm mới
        </Button>
      )}
    </Stack>
  );
}
