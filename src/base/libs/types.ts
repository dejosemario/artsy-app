import { navLinks } from "./data";

// extracting the type of the links array
export type SectionName = (typeof navLinks)[number]["name"]; 
