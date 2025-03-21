import { Dispatch, SetStateAction } from "react";
import { IColorProps } from "../../api/interfaces/IColorProps";

export interface ISearchColorsProps {
  colors: IColorProps[];
  setDisplayedColors: Dispatch<SetStateAction<IColorProps[]>>;
}
