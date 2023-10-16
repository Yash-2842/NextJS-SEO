"use client";
import React from "react";
import { Button } from "../../../../node_modules/@mui/material/index";

const IFrameLoader = () => {
  const clickHandler = () => {
    console.log("clicked");
    const iFrame = document.createElement("iframe");
    iFrame.src = "./iFrame.html";
    document.body.appendChild(iFrame);
  };
  return <Button onClick={clickHandler}>Load Page</Button>;
};

export default IFrameLoader;
