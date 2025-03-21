import React from "react";
import SearchColors from "./SearchColors/SearchColors";
import ColorsList from "./ColorsList/ColorsList";
import DeleteColorDialog from "./DeleteColorDialog/DeleteColorDialog";
import useColorStore from "../store/useColorsStore";
import { Box, Button, Typography } from "@mui/material";
import { AddColorDialog } from "./AddColorDialog/AddColorDialog";
import { IColorProps } from "../api/interfaces/IColorProps";

export default function ColorsManager() {
  const { colors, fetchColors } = useColorStore();
  const [displayedColors, setDisplayedColors] =
    React.useState<IColorProps[]>(colors);
  const [colorToDeleteId, setColorToDeleteId] = React.useState<number>(0);
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState<boolean>(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    fetchColors();
    setDisplayedColors(colors);
  }, [colors, fetchColors]);

  return (
    <>
      <Box className="flex flex-col items-center justify-center h-[70vh] min-h-[400px] w-[40vw] mx-auto relative">
        <Typography
          variant="h4"
          className="text-4xl bg-gradient-to-r from-red-600 via-blue-600 to-white bg-clip-text text-transparent p-2"
        >
          Colors Management
        </Typography>
        <SearchColors colors={colors} setDisplayedColors={setDisplayedColors} />
        <ColorsList
          colors={displayedColors}
          setColorToDeleteId={setColorToDeleteId}
          setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        />
        <Button
          variant="contained"
          className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
          onClick={() => setIsAddDialogOpen(true)}
        >
          Add Color
        </Button>
        {isAddDialogOpen && (
          <AddColorDialog
            isOpen={isAddDialogOpen}
            setIsOpen={setIsAddDialogOpen}
          />
        )}
        {isDeleteDialogOpen && (
          <DeleteColorDialog
            isDeleteDialogOpen={isDeleteDialogOpen}
            setIsDeleteDialogOpen={setIsDeleteDialogOpen}
            colorToDeleteId={colorToDeleteId}
            setColorToDeleteId={setColorToDeleteId}
          />
        )}
      </Box>
    </>
  );
}
