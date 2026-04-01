import { useSidebar } from "../contexts/SidebarContext";
import { Link } from "react-router-dom"; // ✅ ADD THIS

const AppSidebar = () => {
    const { isOpen, closeSidebar } = useSidebar();

    const sidebarItems = [
        {
            path: "#",
            text: "Gender List",
        },
        {
            path: "#",
            text: "User List",
        },
    ];

    const linkClass =
        "flex items-center rounded-lg px-3 py-3 text-[#d1d5db] hover:bg-[#1f2937] hover:text-white";

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={closeSidebar}
                />
            )}

            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-64 border-r border-[#374151] bg-[#111827] transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex h-16 items-center border-b border-[#374151] px-6">
                    <a href="https://flowbite.com/" className="flex items-center gap-3">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 w-8"
                            alt="Flowbite Logo"
                        />
                        <span className="text-[24px] font-semibold tracking-tight text-white">
                            Flowbite
                        </span>
                    </a>
                </div>

                <div className="px-4 py-6">
                    <ul className="space-y-2">
                        {sidebarItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={linkClass}
                                    onClick={closeSidebar}
                                >
                                    <span className="ms-4 text-[18px] font-medium">
                                        {item.text}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default AppSidebar;