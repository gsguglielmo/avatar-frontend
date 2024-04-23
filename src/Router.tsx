import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App/App";
import Page2 from "./pages/Page2/Page2";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/page2" element={<Page2/>} />
            </Routes>
        </BrowserRouter>
    );
}