import React from "react";
import useColorStore from "../../store/useColorsStore";
import { IDeleteColorDialogProps } from "./IDeleteColorDialogProps";
import { enqueueSnackbar } from "notistack";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function DeleteColorDialog({
  isDeleteDialogOpen,
  setIsDeleteDialogOpen,
  colorToDeleteId,
  setColorToDeleteId,
}: IDeleteColorDialogProps) {
  const { fetchColors, removeColor } = useColorStore();

  const handleDeleteColor = () => {
    removeColor(colorToDeleteId);
    fetchColors();
    enqueueSnackbar("Color deleted successfully!", { variant: "success" });
    handleDialogClose();
  };

  const handleDialogClose = () => {
    setIsDeleteDialogOpen(false);
    setColorToDeleteId(0);
  };

  return (
    <Dialog open={isDeleteDialogOpen}>
      <DialogTitle>Delete Color</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure that you want to delete this color?
        </DialogContentText>
        <DialogActions>
          <Button variant="contained" onClick={handleDeleteColor}>
            Yes
          </Button>
          <Button variant="contained" color="error" onClick={handleDialogClose}>
            No
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
