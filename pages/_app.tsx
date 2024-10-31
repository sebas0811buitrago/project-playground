import { LicenseManager } from "ag-grid-enterprise";

LicenseManager.setLicenseKey(
  String(process.env.NEXT_PUBLIC_AGGRID_LICENSE ?? "")
);
console.log(
  "process.env.AGGRID_LICENSE",
  process.env.NEXT_PUBLIC_AGGRID_LICENSE
);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AppProps } from "next/app";

LicenseManager.setLicenseKey(process.env.REACT_APP_AG_GRID_KEY as string);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
