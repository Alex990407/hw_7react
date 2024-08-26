import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Text = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: "Hello, world! I want to tell you how I learn React.",
    ru: "Привет, мир! Я хочу рассаказать вам о том, как я учу React.",
  };

  return <p>{texts[language]}</p>;
};

export default Text;
