import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router-dom";
import { SidebarProvider, useSidebar } from "../contexts/SidebarContext";
import { HeaderProvider } from "../contexts/HeaderContext";

const LayoutContent = () => {
    const { isOpen } = useSidebar();

    return (
        <div className="min-h-screen bg-[#f9fafb] font-sans">
            <AppSidebar />
            <AppHeader />

            <main
                className={`pt-16 transition-all duration-300 ${isOpen ? "md:ml-64" : "md:ml-0"
                    }`}
            >
                <div className="min-h-[calc(100vh-4rem)] bg-white px-10 py-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

const AppLayout = () => {
    return (
        <SidebarProvider>
            <HeaderProvider>
                <LayoutContent />
            </HeaderProvider>
        </SidebarProvider>
    );
};

export default AppLayout;