import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import AddButton from "./AddButton";
import { initialChoixTag } from "../data/tagsType";

function Tags({ choixTag, setChoixTag }) {
  const handleChoixTag = (tag, indexChoixTag) => {
    const tempChoixTag = [...choixTag];
    tempChoixTag[indexChoixTag].tag = tag;
    setChoixTag(tempChoixTag);
  };

  const handleButton = () => {
    setChoixTag([...choixTag, { ...initialChoixTag() }]);
  };
  return (
    <Box
      sx={{
        textAlign: "center",
        border: 1,
        my: 3,
        p: 3,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          my: 2,
        }}
      >
        Tags
      </Box>
      {choixTag.map(function ({ tag, tempId }, indexChoixTag) {
        return (
          <div key={tempId}>
            <TextField
              margin="dense"
              value={tag}
              onChange={(event) =>
                handleChoixTag(event.target.value, indexChoixTag)
              }
            />
            {choixTag.length === indexChoixTag + 1 && (
              <AddButton onClick={handleButton} color="primary" />
            )}
          </div>
        );
      })}
    </Box>
  );
}

export default Tags;
