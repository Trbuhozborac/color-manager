import { Dispatch, SetStateAction } from "react";

export interface IAddColorDialogProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
