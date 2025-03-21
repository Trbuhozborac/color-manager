import React from "react";
import useColorStore from "../../store/useColorsStore";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { IAddColorDialogProps } from "./IAddColorDialogProps";
import { useSnackbar } from "notistack";
import { FormikValues, useFormik } from "formik";
import { IAddColorProps } from "../../api/interfaces/IAddColorProps";
import { addColorFormikForm } from "./addColorFormikForm";

export function AddColorDialog({ isOpen, setIsOpen }: IAddColorDialogProps) {
  const { enqueueSnackbar } = useSnackbar();
  const { fetchColors, addColor } = useColorStore();

  const formikAddColorForm: FormikValues = useFormik(
    addColorFormikForm(handleSubmit)
  );

  const handleCloseDialog = () => {
    setIsOpen(false);
    formikAddColorForm.resetForm();
  };

  function handleSubmit() {
    addColor(formikAddColorForm.values as IAddColorProps);
    fetchColors();
    enqueueSnackbar("Color added successfully!", { variant: "success" });
    handleCloseDialog();
  }

  return (
    <Dialog open={isOpen}>
      <form onSubmit={formikAddColorForm.handleSubmit}>
        <DialogTitle>Add Color</DialogTitle>
        <DialogContent>
          <Box className="flex flex-col gap-[2vh] p-[2vh]">
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formikAddColorForm.values.name}
              onChange={formikAddColorForm.handleChange}
              error={
                formikAddColorForm.touched.name &&
                Boolean(formikAddColorForm.errors.name)
              }
              helperText={
                formikAddColorForm.touched.name &&
                formikAddColorForm.errors.name
              }
            />
            <TextField
              fullWidth
              id="hex"
              name="hex"
              label="Hex"
              value={formikAddColorForm.values.hex}
              onChange={formikAddColorForm.handleChange}
              error={
                formikAddColorForm.touched.hex &&
                Boolean(formikAddColorForm.errors.hex)
              }
              helperText={
                formikAddColorForm.touched.hex && formikAddColorForm.errors.hex
              }
            />
          </Box>
          <DialogActions className="flex justify-between">
            <Button
              variant="contained"
              color="error"
              onClick={handleCloseDialog}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  );
}
