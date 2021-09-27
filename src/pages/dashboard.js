import React, { useEffect } from "react";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
