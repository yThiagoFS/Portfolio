import { createContext, useEffect, useContext, useState } from "react";

const PageContext = createContext(null);

export const PageContextProvider = ({ children }) => {
  const [actualPage, setActualPage] = useState("");
  const [actualColor, setActualColor] = useState("#6f2da8");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-color",
      actualColor
    );
  }, [actualColor]);

  const handleActualPage = actualPage => {
    setActualPage(actualPage);
  };

  const handleChangeColor = color => {
    setActualColor(color);
  };

  return (
    <PageContext.Provider
      value={{ actualPage, handleActualPage, actualColor, handleChangeColor }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  return useContext(PageContext);
};