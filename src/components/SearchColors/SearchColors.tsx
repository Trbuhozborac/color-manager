import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { InputAdornment, TextField, Tooltip } from "@mui/material";
import { IColorProps } from "../../api/interfaces/IColorProps";
import { ISearchColorsProps } from "./ISearchColorsProps";

export default function SearchColors({
  colors,
  setDisplayedColors,
}: ISearchColorsProps) {
  const [search, setSearch] = React.useState<string>("");

  React.useEffect(() => {
    if (search.length === 0) {
      setDisplayedColors(colors);
    } else {
      setDisplayedColors(
        colors.filter(
          (color: IColorProps) =>
            color.name.includes(search) || color.hex.includes(search)
        )
      );
    }
  }, [search]);

  return (
    <TextField
      id="search"
      name="search"
      label="Search"
      placeholder="Search colors by name or hex"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip title="Clear search">
                <CloseIcon
                  onClick={() => setSearch("")}
                  className="cursor-pointer"
                />
              </Tooltip>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
