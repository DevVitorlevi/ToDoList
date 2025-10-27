import { BrowserRouter, Routes, Route } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./layout/layoutMain";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/home" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}