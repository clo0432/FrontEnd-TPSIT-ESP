import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";

const schools = [
    { id: 1, label: "Seleziona una scuola ...", unavailable: true },
    { id: 2, label: "Alberghetti (Via S. Benedetto)" },
    { id: 3, label: "Alberghetti (Viale Dante Alighieri)" },
    { id: 4, label: "Scarabelli Ghini" },
    { id: 5, label: "Valeriani" },
    { id: 6, label: "Rambaldi" },
];

const floor_departments = [
    { id: 1, label: "Seleziona un piano o reparto ...", unavailable: true },
    { id: 2, label: "Piano terra" },
    { id: 3, label: "Piano primo" },
    { id: 4, label: "Piano secondo" },
    { id: 5, label: "Palestra" },
];

const MainPage = () => {
    const [selectedSchool, setSelectedSchool] = useState(schools[0]);
    const [selectedFloor_departments, setSelectedFloor_departments] = useState(
        floor_departments[0]
    );

    return (
        <div id="mainpageContainer" className="px-5 pb-[1200px] h-full">
            {/* Titolo */}
            <title className="page-title-text">
                Benvenuto all'interno della demo!
            </title>

            {/* Selectors */}
            <div className="relative flex top-16 w-full items-center justify-center space-x-10">
                {/* Selector per scuola */}
                <Listbox value={selectedSchool} onChange={setSelectedSchool}>
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-72 cursor-default rounded-lg bg-secondaryDim text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">
                                {selectedSchool.label}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-white"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-secondaryDim py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {schools.map((school, schoolIndex) => (
                                    <Listbox.Option
                                        key={schoolIndex}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active
                                                    ? "bg-secondaryFlash text-white"
                                                    : "text-white"
                                            }`
                                        }
                                        value={school}
                                        disabled={school.unavailable}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    {school.label}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>

                {/* Selector per piano */}
                <Listbox
                    value={selectedFloor_departments}
                    onChange={setSelectedFloor_departments}
                >
                    <div className="relative mt-1">
                        <Listbox.Button className="relative w-48 cursor-default rounded-lg bg-secondaryDim text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                            <span className="block truncate">
                                {selectedFloor_departments.label}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-white"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-secondaryDim py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {floor_departments.map(
                                    (
                                        floor_department,
                                        floor_departmentIndex
                                    ) => (
                                        <Listbox.Option
                                            key={floor_departmentIndex}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                    active
                                                        ? "bg-secondaryFlash text-white"
                                                        : "text-white"
                                                }`
                                            }
                                            value={floor_department}
                                            disabled={
                                                floor_department.unavailable
                                            }
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${
                                                            selected
                                                                ? "font-medium"
                                                                : "font-normal"
                                                        }`}
                                                    >
                                                        {floor_department.label}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    )
                                )}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>

                {/* Pulsante per cercare */}
                <a className="goButton" href="/graph">
                    Vai
                </a>
            </div>
        </div>
    );
};

export default MainPage;
