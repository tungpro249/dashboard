import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { UploadSimple } from "@phosphor-icons/react/dist/ssr/UploadSimple";

interface UploadFileProps {
  multiple?: boolean;
  onUpload?: (files: File | File[]) => void;
}

const UploadFile: React.FC<UploadFileProps> = ({ multiple = false, onUpload }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedFiles = Array.from(event.target.files);
    const filePreviews = selectedFiles.map((file) => URL.createObjectURL(file));

    setFiles(multiple ? selectedFiles : [selectedFiles[0]]);
    setPreviews(multiple ? filePreviews : [filePreviews[0]]);

    if (onUpload) {
      onUpload(multiple ? selectedFiles : selectedFiles[0]);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Button variant="contained" component="label" startIcon={<UploadSimple />}>
        Upload {multiple ? "Images" : "Image"}
        <input type="file" hidden accept="image/*" multiple={multiple} onChange={handleFileChange} />
      </Button>

      <Box display="flex" gap={2} flexWrap="wrap">
        {previews.map((src, index) => (
          <Box key={index} position="relative" width={100} height={100} border="1px solid #ccc" borderRadius={2} overflow="hidden">
            <img src={src} alt={`preview-${index}`} width="100%" height="100%" style={{ objectFit: "cover" }} />
          </Box>
        ))}
      </Box>

      <Box>
        {files.map((file, index) => (
          <Typography key={index} variant="body2">
            {file.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default UploadFile;
