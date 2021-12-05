import React from "react";
import Box from "@mui/material/Box";
import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { contact } from "../data/contact";
import { business } from "../data/businessType";

function Details({ businessData, setBusinessData }) {
  return (
    // ---------- Container
    <Box
      component="form"
      sx={{
        mx: "auto",
        width: 400,
        my: 2,
        border: 1,
        borderRadius: 1,
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {/* ---------- Title */}
      <Box
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          my: 1,
        }}
      >
        Coordonnées
      </Box>

      <Box
        sx={{
          textAlign: "center",
        }}
      >
        {contact.map((item) => {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
              <TextField
                label={item.label}
                sx={{
                  mx: 1,
                  width: 150,
                }}
                value={businessData[item.label]}
                onChange={(event) =>
                  setBusinessData({
                    ...businessData,
                    [item.label]: event.target.value,
                  })
                }
              />
            </Box>
          );
        })}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AssignmentIcon />
          <TextField
            select
            label="Type de commerce"
            value={businessData["Type de commerce"]}
            sx={{
              mx: 1,
              width: 150,
            }}
            onChange={(event) =>
              setBusinessData({
                ...businessData,
                "Type de commerce": event.target.value,
              })
            }
          >
            {business.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
            ""
          </TextField>

          {/* <TextField
              value={url}
              onChange={(event) =>
                handleChoixReseau(event, "url", indexChoixReseau)
              }
            /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Details;
