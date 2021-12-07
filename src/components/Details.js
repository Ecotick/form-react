import React from "react";
import Box from "@mui/material/Box";
import { Grid, MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { contact } from "../data/contact";
import { business } from "../data/businessType";

function Details({ businessData, setBusinessData }) {
  return (
    // ---------- Container
    <Grid container spacing={2} sx={{ border: 1, borderRadius: 1 }}>
      {/* ---------- Title ---------- */}
      <Grid item xs={12}>
        <Box
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            my: "5",
          }}
        >
          Coordonnées
        </Box>
      </Grid>

      <Grid item container spacing={2}>
        {contact.map((item) => {
          return (
            <Grid item>
              <Grid item>
                {item.icon}
                <TextField
                  label={item.label}
                  sx={{
                    mx: 1,
                    my: 1,
                  }}
                  value={businessData[item.label]}
                  onChange={(event) =>
                    setBusinessData({
                      ...businessData,
                      [item.label]: event.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
          );
        })}
        <Grid item>
          <AssignmentIcon />
          <TextField
            select
            label="Type de commerce"
            value={businessData["Type de commerce"]}
            sx={{
              mx: 1,
              my: 1,
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
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Details;
