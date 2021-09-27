import React, { useEffect } from "react";
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Not Found";
  }, []);

  return (
    <div className="bg-gray h-screen flex flex-col">
      <Header className="w-full" />
      <div className="m-auto flex justify-center items-center">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
      <Footer className="flex items-end" />
    </div>
  );
}
