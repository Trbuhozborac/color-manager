import React from "react";
import { Button } from "@mui/material";

const URL = "https://www.youtube.com/watch?v=vtSP8Rpvu8k";

export default function DoNotClickMe() {
  return (
    <Button
      sx={{ position: "absolute", right: 0, bottom: 0 }}
      onClick={() => window.open(URL, "_blank")}
    >
      Don't Click Me!
    </Button>
  );
}
