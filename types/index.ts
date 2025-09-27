import { StaticImageData } from "next/image";

export type Project = {
  id: string;
  image: StaticImageData;
  name: string;
  category: string;
};
