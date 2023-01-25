import { Combobox, Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { Hamburger, Logo } from "./assets/icons";

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
        console.log("Click!");
        setIsSearchbarOpen(!isSearchbarOpen);
    };

    const luoghi = [
        "",
        "Alberghetti (Via S. Benedetto) - Piano terra",
        "Alberghetti (Via S. Benedetto) - Piano primo",
        "Alberghetti (Via S. Benedetto) - Piano secondo",
        "Alberghetti (Via S. Benedetto) - Palestra",
        "Alberghetti (Viale Dante Alighieri) - Piano terra",
        "Alberghetti (Viale Dante Alighieri) - Piano primo",
        "Alberghetti (Viale Dante Alighieri) - Piano secondo",
        "Alberghetti (Viale Dante Alighieri) - Palestra",
        "Scarabelli Ghini - Piano terra",
        "Scarabelli Ghini - Piano primo",
        "Scarabelli Ghini - Piano secondo",
        "Scarabelli Ghini - Palestra",
        "Valeriani - Piano terra",
        "Valeriani - Piano primo",
        "Valeriani - Piano secondo",
        "Valeriani - Palestra",
        "Rambaldi - Piano terra",
        "Rambaldi - Piano primo",
        "Rambaldi - Piano secondo",
        "Rambaldi - Palestra",
    ];

    const [luogoSelezionato, setLuogoSelezionato] = useState(luoghi[0]);
    const [query, setQuery] = useState("");

    const luoghiFiltrati =
        query === ""
            ? luoghi
            : luoghi.filter((luogo) => {
                  return luogo.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <>
            <button
                className="searchbarToggleButton"
                onClick={handleSearchClick}
            >
                <FcSearch size={20} />
            </button>
            <Transition
                show={isSearchbarOpen}
                className="absolute inset-0 w-[100vw] h-[100vh]"
                enter="transition duration-500"
                enterFrom="backdrop-blur-none backdrop-brightness-100"
                enterTo="backdrop-blur-sm backdrop-brightness-50"
                leave="transition duration-500"
                leaveFrom="backdrop-blur-sm backdrop-brightness-50"
                leaveTo="backdrop-blur-none backdrop-brightness-100"
            >
                <Transition
                    show={isSearchbarOpen}
                    enter="transition ease-out duration-300 transform"
                    enterFrom="scale-75"
                    enterTo="scale-100"
                    leave="transition ease-in duration-300 transform"
                    leaveFrom="scale-100"
                    leaveTo="scale-75"
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
                                    className="w-full bg-white rounded p-2"
                                />
                                <div className="text-white">
                                    <Combobox.Options>
                                        {luoghiFiltrati.map((luogo) => (
                                            <Combobox.Option
                                                key={luogo}
                                                value={luogo}
                                            >
                                                {({ active }) => (
                                                    <div
                                                        className={`p-2 ${
                                                            active
                                                                ? "bg-gray-700"
                                                                : ""
                                                        }`}
                                                    >
                                                        {luogo}
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
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${isSticky ? "sticky" : "fixed"}  topbar`}>
            <div className="flex flex-wrap items-center flex-shrink-0">
                {/* Logo e titolo affianco */}
                <Logo /> {/* Logo del sito in svg */}
                <h1 className="website-title"> Demo Name </h1>
            </div>
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
