import { createContext, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("corporate");

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ChakraProvider>
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
    </ChakraProvider>
  );
};
