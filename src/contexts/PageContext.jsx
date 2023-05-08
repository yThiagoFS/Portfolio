import { createContext, useEffect, useContext, useState } from "react";

const PageContext = createContext();

const setDynamicProperties = (property, value) => {
  document.documentElement.style.setProperty(property, value);
};

const backgrounds = [
  "https://i.pinimg.com/originals/c1/a9/3a/c1a93a1d0de0059a3119b8b1a55ce582.gif",
  "https://media.tenor.com/ZAw_hz_GBBsAAAAd/rain.gif",
  "https://24.media.tumblr.com/83edd69c7fb6aff354676cb4b0ff998d/tumblr_mx4s1x0xd11szol4po1_500.gif",
  "https://i.pinimg.com/originals/e1/b4/a6/e1b4a60876593bc5c849b2a8e9029bec.gif",
];

const PageContextProvider = ({ children }) => {
  const [actualPage, setActualPage] = useState("");
  const [actualColor, setActualColor] = useState("#6f2da8");
  const [actualBackgroundImage, setActualBackgroundImage] = useState(
    backgrounds[0]
  );

  useEffect(() => {
    setDynamicProperties("--background-color", actualColor);
    setDynamicProperties(
      "--base-background",
      `url(${actualBackgroundImage})`
    );
  }, [actualColor, actualBackgroundImage]);

  const handleChangeColor = (color) => {
    setActualColor(color);
  };

  const handleChangeBackground = (index) => {
    setActualBackgroundImage(backgrounds[index]);
  };

  const contextValue = {
    actualPage,
    handleActualPage: setActualPage,
    actualColor,
    handleChangeColor,
    backgrounds,
    actualBackgroundImage,
    handleChangeBackground,
  };

  return <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>;
};

const usePageContext = () => useContext(PageContext);

export { PageContextProvider, usePageContext };
