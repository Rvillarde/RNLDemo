import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

const SampleComponent = () => {
    return (
        <div>
            <h1 className="text-[20px] font-medium text-[#b91c1c]">Hello World</h1>
        </div>
    );
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<SampleComponent />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;