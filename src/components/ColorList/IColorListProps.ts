import { Dispatch, SetStateAction } from "react";
import { IColorProps } from "../../api/interfaces/IColorProps";

export interface IColorListProps {
  colors: IColorProps[];
  setColorToDeleteId: Dispatch<SetStateAction<number>>;
  setIsDeleteDialogOpen: Dispatch<SetStateAction<boolean>>;
}
