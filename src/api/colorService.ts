import { IColorProps } from "./interfaces/IColorProps";
import { IAddColorProps } from "./interfaces/IAddColorProps";

// default colors are defined here and represent mock data from the database
let colors: IColorProps[] = [
  { id: 1, name: "red", hex: "#ff0000" },
  { id: 2, name: "blue", hex: "#0000FF" },
  { id: 3, name: "white", hex: "#ffffff" },
];

export const getColors = async (): Promise<IColorProps[]> => {
  return new Promise<IColorProps[]>((resolve) => {
    resolve(colors);
  });
};

export const addColor = async (color: IAddColorProps): Promise<IColorProps> => {
  return new Promise((resolve) => {
    const newColor: IColorProps = {
      id: colors.length + 1,
      name: color.name,
      hex: color.hex,
    };
    colors.push(newColor);
    resolve(newColor);
  });
};

export const deleteColor = async (id: number) => {
  return new Promise<void>((resolve) => {
    colors = colors.filter((color) => color.id !== id);
    resolve();
  });
};
