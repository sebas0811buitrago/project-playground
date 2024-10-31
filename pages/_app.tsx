import { LicenseManager } from "ag-grid-enterprise";

LicenseManager.setLicenseKey(
  "Using_this_AG_Grid_Enterprise_key_( AG-050444 )_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_changing_this_key_please_contact_( info@ag-grid.com )___( Purplelab, Inc. )_is_granted_a_( Multiple Applications )_Developer_License_for_( 5 )_Front-End_JavaScript_developers___All_Front-End_JavaScript_developers_need_to_be_licensed_in_addition_to_the_ones_working_with_AG_Grid_Enterprise___This_key_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_AG_Grid_Enterprise_versions_released_before_( 28 January 2025 )____[v2]_MTczODAyMjQwMDAwMA==74348a20b07a408059e6957b80419f70"
);

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AppProps } from "next/app";

LicenseManager.setLicenseKey(process.env.REACT_APP_AG_GRID_KEY as string);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
