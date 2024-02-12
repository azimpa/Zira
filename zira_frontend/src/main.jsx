import React from "react";
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement, { suppressDeprecationWarnings: true });

document.body.style.backgroundImage = 'url("https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=996&t=st=1707572795~exp=1707573395~hmac=3d11be299c50794d0ea86b881bb876bfba41a04261bb4b67609e11f9b453342e")';
document.body.style.backgroundSize = 'cover';

root.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
