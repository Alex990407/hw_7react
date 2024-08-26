import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const buttonText =
    language === "en" ? "Switch to Russian" : "Переключить на английский";

  return <button onClick={toggleLanguage}>{buttonText}</button>;
};

export default LanguageSwitcher;
