import React from "react";
import NavFootLayout from "./layouts/NavFootLayout";
import ScreenOne from "./screenOne";
import ScreenTwo from './screenTwo';
import ScreenThree from './screenThree';
import ScreenFour from './screenFour';

export default function Home() {
  return (
    <NavFootLayout>
      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
    </NavFootLayout>
  );
}
