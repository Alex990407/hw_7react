import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return <button onClick={toggleLanguage}>Переключить язык</button>;
};

export default LanguageSwitcher;
