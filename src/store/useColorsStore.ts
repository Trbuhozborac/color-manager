import { create, StoreApi, UseBoundStore } from "zustand";
import { getColors, addColor, deleteColor } from "../api/colorService";
import { IColorProps } from "../api/interfaces/IColorProps";
import { IAddColorProps } from "../api/interfaces/IAddColorProps";

interface ColorStore {
  colors: IColorProps[];
  fetchColors: () => Promise<void>;
  addColor: (color: IAddColorProps) => Promise<void>;
  removeColor: (id: number) => Promise<void>;
}

const useColorStore: UseBoundStore<StoreApi<ColorStore>> = create<ColorStore>(
  (set) => ({
    colors: [],
    fetchColors: async () => {
      const colors: IColorProps[] = await getColors();
      set({ colors });
    },
    addColor: async (color: IAddColorProps) => {
      const newColor = await addColor(color);
      newColor && set((state) => ({ colors: [...state.colors, newColor] }));
    },
    removeColor: async (id: number) => {
      await deleteColor(id);
      set((state) => ({ colors: state.colors.filter((c) => c.id !== id) }));
    },
  })
);

export default useColorStore;
