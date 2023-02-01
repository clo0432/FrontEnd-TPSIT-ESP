import { Combobox, Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { Hamburger, Logo, SearchIcon } from "./assets/icons";

const SidebarToggleButton = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <button
            id="sidebarButtonData"
            className="sidebarToggleButton"
            aria-controls="sidebar"
            aria-expanded="false"
            onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
                const currentState =
                    sidebarButtonData.getAttribute("data-state");
                if (!currentState || currentState === "closed") {
                    sidebarButtonData.setAttribute("data-state", "opened");
                    sidebarButtonData.setAttribute("aria-expanded", "true");
                } else {
                    sidebarButtonData.setAttribute("data-state", "closed");
                    sidebarButtonData.setAttribute("aria-expanded", "false");
                }
            }}
        >
            <Hamburger /> {/* Icona hamburger per il menu in svg */}
        </button>
    );
};

const SearchbarToggleButton = ({ isSearchbarOpen, setIsSearchbarOpen }) => {
    const handleSearchClick = () => {
        setIsSearchbarOpen(!isSearchbarOpen);
    };

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            console.log("Click!");
            setIsSearchbarOpen(false);
        }
    };

    const luoghi = [
        { id: 1, name: "", unavailable: true },
        { id: 2, name: "Alberghetti (Via S. Benedetto) - Piano terra" },
        { id: 3, name: "Alberghetti (Via S. Benedetto) - Piano primo" },
        { id: 4, name: "Alberghetti (Via S. Benedetto) - Piano secondo" },
        { id: 5, name: "Alberghetti (Via S. Benedetto) - Palestra" },
        { id: 6, name: "Alberghetti (Viale Dante Alighieri) - Piano terra" },
        { id: 7, name: "Alberghetti (Viale Dante Alighieri) - Piano primo" },
        { id: 8, name: "Alberghetti (Viale Dante Alighieri) - Piano secondo" },
        { id: 9, name: "Alberghetti (Viale Dante Alighieri) - Palestra" },
        { id: 10, name: "Scarabelli Ghini - Piano terra" },
        { id: 11, name: "Scarabelli Ghini - Piano primo" },
        { id: 12, name: "Scarabelli Ghini - Piano secondo" },
        { id: 13, name: "Scarabelli Ghini - Palestra" },
        { id: 14, name: "Valeriani - Piano terra" },
        { id: 15, name: "Valeriani - Piano primo" },
        { id: 16, name: "Valeriani - Piano secondo" },
        { id: 17, name: "Valeriani - Palestra" },
        { id: 18, name: "Rambaldi - Piano terra" },
        { id: 19, name: "Rambaldi - Piano primo" },
        { id: 20, name: "Rambaldi - Piano secondo" },
        { id: 21, name: "Rambaldi - Palestra" },
    ];

    const [luogoSelezionato, setLuogoSelezionato] = useState(luoghi[0]);
    const [query, setQuery] = useState("");

    const luoghiFiltrati =
        query === ""
            ? luoghi
            : luoghi.filter((luogo) => {
                  return luogo.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <>
            <button
                className="searchbarToggleButton"
                onClick={handleSearchClick}
            >
                <SearchIcon />
            </button>
            <Transition
                show={isSearchbarOpen}
                onClick={handleOutsideClick}
                className="absolute inset-0 w-[100vw] h-[100vh] z-50"
                enter="transition duration-200"
                enterFrom="backdrop-blur-none backdrop-brightness-100"
                enterTo="backdrop-blur-sm backdrop-brightness-50"
                leave="transition duration-300"
                leaveFrom="backdrop-blur-sm backdrop-brightness-50"
                leaveTo="backdrop-blur-none backdrop-brightness-100"
            >
                <Transition
                    show={isSearchbarOpen}
                    enter="transition ease-out duration-200 transform"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-300 transform"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="w-2/5 mt-[10vh] ml-auto mr-auto">
                        <Combobox
                            value={luogoSelezionato}
                            onChange={setLuogoSelezionato}
                        >
                            <div className="text-black">
                                <Combobox.Input
                                    onChange={(event) =>
                                        setQuery(event.target.value)
                                    }
                                    displayValue={(luogo) => luogo.name}
                                    className="w-full bg-white rounded p-2"
                                />
                                <div className="text-white">
                                    <Combobox.Options>
                                        {luoghiFiltrati.map((luogo) => (
                                            <Combobox.Option
                                                key={luogo.id}
                                                value={luogo}
                                                disabled={luogo.unavailable}
                                            >
                                                {({ active }) => (
                                                    <div
                                                        className={`p-2 ${
                                                            active
                                                                ? "bg-gray-700"
                                                                : ""
                                                        }`}
                                                    >
                                                        {luogo.name}
                                                    </div>
                                                )}
                                            </Combobox.Option>
                                        ))}
                                    </Combobox.Options>
                                </div>
                            </div>
                        </Combobox>
                    </div>
                </Transition>
            </Transition>
        </>
    );
};

export const Topbar = ({
    isSidebarOpen,
    setIsSidebarOpen,
    isSearchbarOpen,
    setIsSearchbarOpen,
}) => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            var element = document.getElementById("topbar");
            if (window.scrollY > 0) {
                element.classList.add("background-topbar");
            } else {
                element.classList.remove("background-topbar");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav id="topbar" className="topbar">
            {/* Logo e titolo affianco */}
            <a href="/" className="flex flex-wrap items-center flex-shrink-0">
                <Logo />
                <h1 className="website-title"> Air quality </h1>
            </a>
            <div className="space-x-0">
                <SearchbarToggleButton
                    isSearchbarOpen={isSearchbarOpen}
                    setIsSearchbarOpen={setIsSearchbarOpen}
                />
                <SidebarToggleButton
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
            </div>
        </nav>
    );
};
