import React from "react";
import { createRoot } from "react-dom/client";
import "./tailwind-output.css";
import VeerendraPortfolio from "./veerendra_dwivedi_portfolio";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<VeerendraPortfolio />);
