import { ReactElement } from "react";

export type tRoute = {
  name: string;
  path: string;
  icons?: ReactElement[];
  hideSideMenu?: boolean;
};
