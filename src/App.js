import { useState } from "react";
import "./App.css";

import { Container, CssBaseline } from "@mui/material";

import Title from "./components/Title";
import Media from "./components/Media";
import Details from "./components/Details";
import Social from "./components/Social";
import Initiatives from "./components/Initiatives";
import Tags from "./components/Tags";
import { business } from "./data/businessType";
import { initialChoixReseau } from "./data/socialNetworks";
import { initialChoixInitiative } from "./data/initiativesType";
// import { initialChoixTag } from "./data/tagsType";

function App() {
  // const [reseaux, setReseaux] = useState(selectReseauBox[0].value);
  // const [pseudoReseaux, setPseudoReseaux] = useState("");
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

  const [choixTag, setChoixTag] = useState([""]);

  const handleChoixTag = (tag, indexChoixTag) => {
    const tempChoixTag = [...choixTag];
    tempChoixTag[indexChoixTag] = tag;
    setChoixTag(tempChoixTag);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Title />
        {/* ----------------Container 1 ----------------------- */}
        <Media />

        {/* ----------------Container 2 ----------------------- */}
        <Details
          businessData={businessData}
          setBusinessData={setBusinessData}
        />

        {/* --------------- Container 3 ----------------------- */}
        <Social
          choixReseau={choixReseau}
          handleChoixReseau={handleChoixReseau}
          setChoixReseau={setChoixReseau}
        />
        <Initiatives
          choixInitiative={choixInitiative}
          handleChoixInitiative={handleChoixInitiative}
          setChoixInitiative={setChoixInitiative}
        />
        <Tags
          choixTag={choixTag}
          handleChoixTag={handleChoixTag}
          setChoixTag={setChoixTag}
        />
      </Container>
    </div>
  );
}

export default App;
