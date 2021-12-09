import React, { useState, useEffect } from "react";
import { Grid, Box, ButtonBase, Paper } from "@mui/material";
import { height } from "@mui/system";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { handleUpload } from "../firebase";

const Input = styled("input")({
  display: "none",
});

function Media({ storefrontUrl, setStorefrontUrl, logoUrl, setLogoUrl }) {
  const [storefrontAsFile, setStorefrontAsFile] = useState(null);
  const [logoAsFile, setLogoAsFile] = useState(null);

  useEffect(() => {
    // Nullish coalescing operator (??) means --> when storefrontAsFile is null or undefined return false
    // otherwise return storefrontAsFile
    if (storefrontAsFile ?? false) {
      handleUpload(storefrontAsFile, setStorefrontAsFile, setStorefrontUrl);
    }
  }, [storefrontAsFile]);

  useEffect(() => {
    // Nullish coalescing operator (??) means --> when logoAsFile is null or undefined return false
    // otherwise return logoAsFile
    if (logoAsFile ?? false) {
      handleUpload(logoAsFile, setLogoAsFile, setLogoUrl);
    }
  }, [logoAsFile]);

  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          my: 1,
        }}
      >
        Medias
      </Box>
      <Grid container>
        {/* ------------ Storefront ---------- */}
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 245 }}>
            {/* <CardActionArea onClick={() => alert("Click")}> */}
            <div
              style={{
                height: 200,
                backgroundSize: "cover",
                backgroundImage: storefrontUrl
                  ? `url(${storefrontUrl})`
                  : 'url("/media/nopicture.jpg")',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Façade
              </Typography>
              <label htmlFor="contained-button-frontstore">
                <Input
                  accept="image/*"
                  id="contained-button-frontstore"
                  multiple
                  type="file"
                  onChange={(event) =>
                    setStorefrontAsFile(event.target.files[0])
                  }
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </CardContent>
            {/* </CardActionArea> */}
          </Card>
        </Grid>

        {/* ---------- Logo ---------- */}
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 245 }}>
            {/* <CardActionArea onClick={() => alert("Click")}> */}
            <div
              style={{
                height: 200,
                backgroundSize: "cover",
                backgroundImage: logoUrl
                  ? `url(${logoUrl})`
                  : 'url("/media/no_logo.jpg")',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Logo
              </Typography>
              <label htmlFor="contained-button-logo">
                <Input
                  accept="image/*"
                  id="contained-button-logo"
                  multiple
                  type="file"
                  onChange={(event) => setLogoAsFile(event.target.files[0])}
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </CardContent>
            {/* </CardActionArea> */}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Media;
