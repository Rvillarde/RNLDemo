import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";
import { useHeader } from "../contexts/HeaderContext";

const AppHeader = () => {
    const { toggleSidebar, isOpen } = useSidebar();
    const { isOpen: isUserMenuOpen, toggleUserMenu, closeUserMenu } = useHeader();
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                closeUserMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closeUserMenu]);

    return (
        <header
            className={`fixed top-0 right-0 z-40 h-16 border-b border-[#374151] bg-[#111827] transition-all duration-300 ${isOpen ? "left-0 md:left-64" : "left-0"
                }`}
        >
            <div className="flex h-full items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={toggleSidebar}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#d1d5db] hover:bg-[#1f2937] hover:text-white"
                    >
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        onClick={toggleUserMenu}
                        className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[#4b5563]"
                    >
                        <img
                            className="h-full w-full object-cover"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="user"
                        />
                    </button>

                    {isUserMenuOpen && (
                        <div className="absolute right-0 top-12 z-50 w-64 overflow-hidden rounded-xl border border-[#374151] bg-[#1f2937] shadow-2xl">
                            <div className="border-b border-[#374151] px-5 py-4">
                                <p className="text-[15px] font-semibold text-white">Neil Sims</p>
                                <p className="truncate text-[14px] text-[#d1d5db]">
                                    neil.sims@flowbite.com
                                </p>
                            </div>

                            <ul className="py-2 text-[15px] text-[#d1d5db]">
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-5 py-3 hover:bg-[#374151] hover:text-white"
                                    >
                                        Sign out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default AppHeader;