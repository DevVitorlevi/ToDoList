import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./layout/layoutMain";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}