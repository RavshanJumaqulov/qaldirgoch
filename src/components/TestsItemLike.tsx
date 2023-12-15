
import { SavedIcon } from "@/app/SvgIcons/Icons";
import useVisiblity from "@/hooks/useVisiblity";
import { IconButton } from "@mui/material";
import React from "react";

export default function TestsItemLike() {
    const like = useVisiblity()

    const likeHandler = async () => {
        like.toggle()
    }
  return (
    <IconButton onClick={likeHandler}>
      <SavedIcon sx={{ color: "#fff", fill: like.visiblity ? "#FF5C00" : "none" }} />
    </IconButton>
  );
}
