import { useState } from "react";
import "./App.css";

import { Container, CssBaseline, Grid } from "@mui/material";
import { Box } from "@mui/system";

import Title from "./components/Title";
import Media from "./components/Media";
import Details from "./components/Details";
import Social from "./components/Social";
import Initiatives from "./components/Initiatives";
import Tags from "./components/Tags";
import { business } from "./data/businessType";
import { initialChoixReseau } from "./data/socialNetworks";
import { initialChoixInitiative } from "./data/initiativesType";
import { initialChoixTag } from "./data/tagsType";
import Localization from "./components/Localization";

function App() {
  const [storefrontUrl, setStorefrontUrl] = useState("");

  const [logoUrl, setLogoUrl] = useState("");

  const [businessData, setBusinessData] = useState({
    "Type de commerce": business[0],
  });

  const [choixReseau, setChoixReseau] = useState([{ ...initialChoixReseau() }]);
  const handleChoixReseau = (event, target, currentIndex) => {
    const tempChoixReseau = [...choixReseau];
    tempChoixReseau[currentIndex][target] = event.target.value;
    setChoixReseau(tempChoixReseau);
  };

  const [choixInitiative, setChoixInitiative] = useState([
    { ...initialChoixInitiative() },
  ]);
  const handleChoixInitiative = (event, target, currentIndex) => {
    const tempChoixInitiative = [...choixInitiative];
    tempChoixInitiative[currentIndex][target] = event.target.value;
    setChoixInitiative(tempChoixInitiative);
  };

  const [choixTag, setChoixTag] = useState([{ ...initialChoixTag() }]);

  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Title />
        </Grid>
        {/* ---------------- Media Conponent ----------------------- */}
        <Grid item xs={4}>
          <Media
            {...{ storefrontUrl, setStorefrontUrl, logoUrl, setLogoUrl }}
          />{" "}
        </Grid>

        {/* ---------------- Contact Details Component ----------------------- */}
        <Grid item xs={5}>
          <Details
            businessData={businessData}
            setBusinessData={setBusinessData}
          />{" "}
        </Grid>

        {/* --------------- Initiatives Component ----------------------- */}
        <Grid item xs={3}>
          <Initiatives
            choixInitiative={choixInitiative}
            handleChoixInitiative={handleChoixInitiative}
            setChoixInitiative={setChoixInitiative}
          />{" "}
        </Grid>

        {/* --------------- Social Network Component ----------------------- */}
        <Grid item xs={4}>
          <Social
            choixReseau={choixReseau}
            handleChoixReseau={handleChoixReseau}
            setChoixReseau={setChoixReseau}
          />{" "}
        </Grid>

        {/* --------------- Tags Component ----------------------- */}
        <Grid item xs={4}>
          <Tags choixTag={choixTag} setChoixTag={setChoixTag} />{" "}
        </Grid>

        {/* --------------- Localization Component ----------------------- */}
        <Grid item xs={4}>
          <Localization {...{ businessData, setBusinessData }} />{" "}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
