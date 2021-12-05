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

function Media() {
  const [storefrontAsFile, setStorefrontAsFile] = useState(null);
  const [storefrontUrl, setStorefrontUrl] = useState("");
  const [logoAsFile, setLogoAsFile] = useState(null);
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    if (storefrontAsFile !== null) {
      handleUpload(storefrontAsFile, setStorefrontAsFile, setStorefrontUrl);
    }
  }, [storefrontAsFile]);

  useEffect(() => {
    if (logoAsFile !== null) {
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
        <Grid item xs={6} direction="column">
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
        <Grid item xs={6} direction="column">
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
