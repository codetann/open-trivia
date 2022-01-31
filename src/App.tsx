import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SelectCategory } from "./features/quiz";

/**
 * @component
 *
 * @description
 *  Main entry point for the application.
 *  Handles routing for the application.
 *
 * @returns {JSX.Element}
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectCategory />} />
        <Route path="/setup/:category" element={<h1>hi</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
