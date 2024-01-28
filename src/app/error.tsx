"use client";

import React from "react";
import CustomImg from "../components/Img/CustomImg";
import CustomButton from "../components/CustomButton/CustomButton";

function Index({ error }: Readonly<{ error: Error & { digest?: string } }>) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center gap-10 px-10 py-10">
      <CustomImg
        width={150}
        height={75}
        className="object-contain"
        src="/logo.png"
        style={{ width: "auto" }}
        alt="logo"
      />
      <h6 className="text-red-900 text-center">
        How the hell you got here also perplexes me. Why the hell I wouldn't
        want you here, and still serve you this page perplexes me even more.
        Anyway, science is such a thing of beauty isn't it? (
        {error?.message ? error?.message : "No additional details reported."})
      </h6>
      <p className="text-[14px] font-bold font-italic">
        Light is still a wave and a particle. Don't believe me? You don't need
        to. This isn't religion. Find out more here:{" "}
        <a
          href="mailto:brianbaliach+free_wisdom@gmail.com"
          className="underline font-bold text-blue-900 uppercase"
        >
          Free Wisdom
        </a>
      </p>
      <CustomButton
        onClick={handleRefresh}
        color="error"
        className="text-[18px]"
      >
        Refresh
      </CustomButton>
    </div>
  );
}

export default Index;
