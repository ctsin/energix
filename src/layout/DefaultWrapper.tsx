//@refresh
"use client";
import React from "react";
import { usePathname } from "next/navigation";
import FooterOne from "./footer/FooterOne";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import BacktoTop from "@/utils/BacktoTop";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();

  return (
    <>
      {(() => {
        switch (pathName) {
          case "/home-two":
            return <HeaderTwo />;
          default:
            return <HeaderOne />;
        }
      })()}
      {children}
      <FooterOne />
      <BacktoTop />
    </>
  );
};

export default Wrapper;
