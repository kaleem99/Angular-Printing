export interface HousingLocation {
  id: number;
  name: string;
  color: boolean; // true for color printers, false for monochrome
  functions: string[]; // e.g., ['copy', 'print', 'scan', 'fax']
  specs: {
    printSpeed: string;
    paperSize?: string | null; // e.g., 'A4' or 'A3'
    display?: string | null; // Display type or description
    memory?: string | null; // Memory size, e.g., '6GB max'
    scanFeatures: string[]; // Array of scanning features
    additionalFeatures: string[]; // Array of additional features
  };
  imageSrc?: string; // Path to the printer image, if needed
}
