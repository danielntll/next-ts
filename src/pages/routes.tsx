import { tRoute } from "@/types/tRoutes";


import {
  IoHomeOutline,
  IoHome,
  IoInformationCircleOutline,
  IoInformationCircle,
  IoMailOutline,
  IoMail,
  IoNewspaperOutline,
  IoNewspaper,
  IoImagesOutline,
  IoImages,
  IoPersonOutline,
  IoPerson
} from "react-icons/io5";

export const Routes: tRoute[] = [
  {
    name: "Home",
    path: "/",
    icons: [
      <IoHomeOutline size={24} />,
      <IoHome size={24} />
    ],
  },
  {
    name: "Locations",
    path: "/locations",
    icons: [
      <IoImagesOutline size={24} />,
      <IoImages size={24} />
    ],
  },
  {
    name: "About",
    path: "/about",
    icons: [
      <IoInformationCircleOutline size={24} />,
      <IoInformationCircle size={24} />
    ],
  },
  {
    name: "Contacts",
    path: "/contacts",
    icons: [
      <IoMailOutline size={24} />,
      <IoMail size={24} />
    ],
  },
  {
    name: "News",
    path: "/news",
    icons: [
      <IoNewspaperOutline size={24} />,
      <IoNewspaper size={24} />
    ],
  },
  {
    name: "User Profile",
    path: "/user",
    icons: [
      <IoPersonOutline size={24} />,
      <IoPerson size={24} />
    ],
  },
]