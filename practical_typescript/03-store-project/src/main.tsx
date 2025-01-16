import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </StrictMode>
);
