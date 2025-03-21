import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { IColorListProps } from "./IColorListProps";

export default function ColorList({
  colors,
  setColorToDeleteId,
  setIsDeleteDialogOpen,
}: IColorListProps) {
  const handleDeleteColor = (id: number) => {
    setColorToDeleteId(id);
    setIsDeleteDialogOpen(true);
  };
  return (
    <Box className="p-4 flex flex-col gap-[2vh] h-[40vh] overflow-scroll min-w-[300px]">
      {colors.length === 0 ? (
        <Typography textAlign="center">
          There is no any color defined yet, click Add Color button to add some
          :)
        </Typography>
      ) : (
        colors.map((color) => (
          <Box
            key={color.id}
            className="flex items-center gap-4 p-2 border rounded"
          >
            <Box
              className="w-6 h-6 rounded"
              style={{ backgroundColor: color.hex }}
            ></Box>
            <Typography className="w-[190px] overflow-hidden whitespace-nowrap text-ellipsis">
              {color.name}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDeleteColor(color.id)}
              className="ml-auto bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </Button>
          </Box>
        ))
      )}
    </Box>
  );
}
