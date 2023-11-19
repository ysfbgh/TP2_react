import ImageSlider from "./components/ImageSlider";
import React from "react";

const App = () => {
  const slides = [
    { URL: "/img/6512eb15010a6.jpeg", title: "jon jhones" },
    { URL: "/img/16771948460814.jpg", title: "conor" },
    { URL: "/img/maxresdefault (2).jpg", title: "khamzat" },
    {
      URL: "/img/new-mythical-fighter-world-peace-khamzat-chimaev-v0-gurzkptb0mvb1.webp",
      title: "khabib",
    },
    { URL: "/img/skysports-khabib-nurmagomedov_5116546.jpg", title: "idk" },
  ];

  const containerStyles = {
    width: "550px",
    height: "450px",
    margin: "0 auto",
  };

  const bodyStyles = {
    background: "linear-gradient(to right, red, black)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const h1Styles = {
    color: "#fff",
  };

  return (
    <div style={bodyStyles}>
      <h1 style={h1Styles}>Slider</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
