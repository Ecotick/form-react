import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { business } from "../data/businessType";

function Localization({ businessData, setBusinessData }) {
  const [geoPoint, setGeoPoint] = useState({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isReady) {
      const coordinates = { ...geoPoint };
      console.log(coordinates);
      setBusinessData({ ...businessData, ...coordinates });
      console.log(coordinates.lng);
      console.log(coordinates.lat);
      setIsReady(false);
    }
  }, [isReady]);

  useEffect(() => {
    // RegEx \s -> any whitespace -- g -> global. All matches.
    if (businessData.Adresse && businessData["Code Postal"]?.length === 5) {
      console.log(businessData.Adresse);
      console.log(businessData["Code Postal"]);
      const queryString =
        businessData.Adresse?.replace(/\s/g, "+") +
        "&postcode=" +
        businessData["Code Postal"];
      const queryToFetch = `https://api-adresse.data.gouv.fr/search/?q=${queryString}`;
      const getJsonAdresses = (query) => fetch(query).then((res) => res.json());
      getJsonAdresses(queryToFetch)
        .then((res) => {
          setGeoPoint((geoPoint) => {
            return {
              ...geoPoint,
              geoPostal: res.features[0].properties.label,
            };
          });
          setGeoPoint((geoPoint) => {
            return {
              ...geoPoint,
              lng: res.features[0].geometry.coordinates[0],
            };
          });
          setGeoPoint((geoPoint) => {
            return {
              ...geoPoint,
              lat: res.features[0].geometry.coordinates[1],
            };
          });
          setIsReady(true);
        })
        .catch((err) => console.log(err));
    }
  }, [businessData.Adresse, businessData["Code Postal"]]);
  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 1,
      }}
    >
      <Grid container my={2} mx={2}>
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="Inconnue"
          value={geoPoint.geoPostal}
          label="Adresse prise en compte"
          margin="normal"
          sx={{ width: "90%" }}
        />
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="Inconnue"
          value={geoPoint.lng}
          label="Longitude"
          margin="normal"
        />
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="Inconnue"
          value={geoPoint.lat}
          label="Latitude"
          margin="normal"
        />
      </Grid>
    </Box>
  );
}

export default Localization;
