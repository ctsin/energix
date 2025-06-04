import { StaticImageData } from "next/image";
import React from "react";
// context api data type
export interface AppContextType {
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
  // new

  openLetterBox: boolean;
  setOpenLetterBox: React.Dispatch<React.SetStateAction<boolean>>;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openSearchBox: boolean;
  setopenSearchBox: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSideMenu: () => void;
  toggleSearchBar: () => void;

}

export interface idType {
  id: number;
}
export type NiceSelcetType = {
  id: number;
  option: string;
};

//

export type TblogData = {
  id: number;
  img: StaticImageData;
  date: string;
  designation: string;
  title: string;
  adminImg: StaticImageData;
  author: string;
  comment: string;
  commentLogo: StaticImageData;
  authorImg?: StaticImageData;
  details?:string;
  propsClass?:string;
  propsClassTwo?:string;
};
export type TprojectData = {
  id: number;
  title: string;
  details: string;
  img: StaticImageData;
  kwp?: string;
};

export type TtestimonialType = {
  id: number;
  review: string;
  name: string;
  title: string;
  img: StaticImageData;
};

// pricing plan type
export interface pricingPlan {
  id: number;
  title: string;
  price: string;
  package: string;
  img: StaticImageData;
}
