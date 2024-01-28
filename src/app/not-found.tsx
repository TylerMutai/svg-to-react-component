"use client";

import { useRouter } from "next/navigation";
import React from "react";
import CustomImg from "../components/Img/CustomImg";
import CustomButton from "../components/CustomButton/CustomButton";

function Index() {
  const router = useRouter();
  const handleRedirect = () => {
    router.back();
  };

  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center gap-10 px-10 py-10">
      <CustomImg
        width={150}
        height={75}
        className="object-contain"
        src="/logo.png"
        alt="logo"
      />
      <h6 className="text-center">
        The page you&apos;re trying to access could not be found.{" "}
      </h6>
      <CustomButton onClick={handleRedirect}>Go Back</CustomButton>
    </div>
  );
}

export default Index;
