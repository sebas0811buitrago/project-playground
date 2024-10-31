import { config } from "dotenv";
config({ path: ".env" });

import { LicenseManager } from "ag-grid-enterprise";
LicenseManager.setLicenseKey(
  String(process.env.NEXT_PUBLIC_AGGRID_LICENSE ?? "")
);

// const AgEnterprise = require("ag-grid-enterprise");

// AgEnterprise.LicenseManager.setLicenseKey(
//   String(process.env.NEXT_PUBLIC_AGGRID_LICENSE ?? "")
// );
