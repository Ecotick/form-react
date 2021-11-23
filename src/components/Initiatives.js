import React from "react";
import  Box  from "@mui/material/Box";
import  TextField  from "@mui/material/TextField";
import  MenuItem  from "@mui/material/MenuItem";

import AddButton from "./AddButton";
import { selectInitiativeBox, initialChoixInitiative } from "../data/initiativesType";

function Initiatives({choixInitiative, handleChoixInitiative, setChoixInitiative}) {
  const handleButton = () => {
    setChoixInitiative([...choixInitiative, { ...initialChoixInitiative() }]);
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
        Sélectionner vos initiatives
      </Box>
      {choixInitiative.map(({ initiative, tempId}, indexChoixInitiative) => (
        <div key={tempId}>
          <TextField margin="dense"
            select
            label="Choisir une initiative"
            value={initiative}
            sx={{
              mx: 1,
              width:150
            }}
            onChange={(event) =>
              handleChoixInitiative(event, "initiative", indexChoixInitiative)
            }
          >
            {selectInitiativeBox.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            ""
          </TextField>

          <TextField margin="dense"
          />
          {choixInitiative.length === indexChoixInitiative + 1 && (
            <AddButton onClick={handleButton} color="primary" />
          )}

        </div>
      ))}
    </Box>

  );
}

export default Initiatives;
  