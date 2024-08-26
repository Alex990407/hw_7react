import React, { createContext, useState } from "react";

// Создаем контекст
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Используем useState для управления текущим языком
  const [language, setLanguage] = useState("en");

  // Функция для переключения языка
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ru" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
