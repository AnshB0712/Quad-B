import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowAll from "./components/ShowAll";
import Details from "./components/Details";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ShowAll />} />
          <Route path="/desc/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
