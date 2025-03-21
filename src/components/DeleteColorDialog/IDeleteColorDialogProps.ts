import { Dispatch, SetStateAction } from "react";

export interface IDeleteColorDialogProps {
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: Dispatch<SetStateAction<boolean>>;
  colorToDeleteId: number;
  setColorToDeleteId: Dispatch<SetStateAction<number>>;
}
