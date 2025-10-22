"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./Theme";

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
