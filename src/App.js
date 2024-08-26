import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Text from "./components/Text";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <LanguageSwitcher />
        <Text />
      </div>
    </LanguageProvider>
  );
}

export default App;
