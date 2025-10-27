import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import LayoutMain from "./layout/layoutMain";

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