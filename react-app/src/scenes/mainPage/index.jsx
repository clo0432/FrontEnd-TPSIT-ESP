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
        <div id="mainpageContainer" className="px-5 pb-[250px] h-full">
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
                <button className="goButton">Vai</button>
            </div>

            <p className="relative mt-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                facilisis, eros eu congue pellentesque, leo risus volutpat nisi,
                vel finibus tellus sapien maximus elit. Aliquam congue libero
                elementum, pharetra eros sit amet, pharetra eros. Maecenas id
                nunc eu elit sagittis maximus quis quis dolor. Integer ipsum
                nibh, feugiat in porttitor volutpat, accumsan mollis risus.
                Aliquam et libero fringilla, porta ligula et, tristique turpis.
                Fusce vehicula condimentum porta. Sed in tempus purus. Fusce in
                quam rhoncus, convallis ex eu, feugiat tellus. Pellentesque
                congue semper ullamcorper. Suspendisse ut mi scelerisque,
                sollicitudin quam et, iaculis orci. Ut dui massa, sollicitudin
                quis consequat nec, facilisis eget metus. In hac habitasse
                platea dictumst. Suspendisse at ipsum volutpat, lacinia neque
                et, condimentum purus. Fusce sit amet sollicitudin enim.
                Maecenas at tincidunt felis. Aenean placerat dolor id velit
                vulputate mattis. Curabitur id faucibus augue. Aliquam venenatis
                eros eget lacus fringilla aliquet. Donec lobortis nibh ut auctor
                bibendum. Nunc id vehicula orci. Aenean tempus ligula nec sapien
                fermentum, nec porta sapien tristique. Morbi posuere justo eget
                interdum volutpat. Praesent mi nisl, dapibus in mattis et,
                gravida in arcu. Morbi volutpat quis velit in ultricies.
                Suspendisse id elementum dui, eget sagittis turpis. Suspendisse
                porttitor ante at libero volutpat convallis. Ut ac condimentum
                risus. Nullam eleifend nunc id purus ornare consequat. Morbi sit
                amet fringilla ligula. In at mauris risus. Nullam eros risus,
                mollis pharetra ligula eu, mollis pharetra ligula. Praesent
                finibus metus blandit ante bibendum hendrerit. Quisque dolor
                eros, euismod sed interdum eu, faucibus sed lectus. Integer
                sapien est, ullamcorper ut auctor in, volutpat vitae lectus.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Fusce nec urna tincidunt,
                eleifend tortor vel, dapibus nunc. Aenean id ipsum et erat
                rutrum iaculis quis a felis. Donec auctor nulla eu justo
                feugiat, ac feugiat nibh eleifend. Cras auctor risus ac nulla
                sodales auctor. Aliquam erat volutpat. Donec efficitur maximus
                suscipit. In a venenatis augue, nec eleifend sem. Ut maximus,
                nisl quis egestas pretium, neque tellus euismod nulla, id
                placerat augue orci eu nisi. Nam scelerisque euismod ex,
                ullamcorper accumsan orci consequat eget. Aliquam condimentum
                lorem vel quam dapibus sodales. Sed sit amet vehicula purus, in
                mollis purus. Mauris quis semper ipsum, in facilisis ligula.
                Nulla bibendum mattis ipsum. Nulla accumsan metus vel magna
                tempus, vitae pulvinar mauris placerat. Aliquam sit amet dui at
                lacus pulvinar consectetur nec sit amet tortor. Nulla vel
                venenatis velit. Integer rutrum dui ut leo bibendum bibendum.
                Nam accumsan mauris ornare auctor rhoncus. Maecenas porta tortor
                eu molestie commodo. Cras vel mi ac arcu facilisis blandit. Duis
                consequat nisi nunc, eget accumsan sem iaculis non. Vestibulum
                vitae mi odio. Vestibulum efficitur diam tellus, vel suscipit mi
                ullamcorper nec. Nunc bibendum neque est, varius ultrices libero
                lobortis quis. In et dignissim justo, vel convallis libero.
                Nullam non commodo est. Suspendisse nulla leo, hendrerit et
                feugiat a, interdum eu turpis. Quisque malesuada ante in tortor
                iaculis pulvinar. Integer nec sagittis elit. Nullam et felis non
                nibh accumsan gravida. Nulla quis lorem aliquam, hendrerit nisi
                vel, fermentum turpis. Curabitur pretium eros elit, luctus
                fermentum magna fringilla quis. Mauris maximus in nulla sed
                luctus. Duis vitae laoreet turpis, id elementum justo. Mauris
                fermentum sed est at ultrices. Maecenas vel est auctor, interdum
                tellus et, aliquam leo. Suspendisse luctus ante in luctus
                accumsan. Suspendisse pretium enim ut suscipit placerat. Cras
                tortor risus, auctor vitae congue eget, tempus ac nulla. Quisque
                ut augue dui. Phasellus vitae enim aliquet, blandit felis eu,
                auctor magna. Proin in quam eget ligula fringilla consequat.
                Integer in ipsum id odio imperdiet consequat eget a ante.
                Integer maximus sodales blandit. Sed non nisi consequat,
                venenatis ante ac, pulvinar arcu. Nam urna urna, fermentum vitae
                vehicula eu, viverra a dolor. Sed eros sem, auctor sed velit
                quis, fringilla placerat erat. Sed ut risus at nunc blandit
                congue luctus in justo. Morbi vestibulum pretium tortor, eget
                vestibulum nisi fringilla vel. Vestibulum lobortis nec eros id
                porta. Suspendisse vestibulum sed eros sed sagittis. Quisque
                scelerisque neque ligula, ac ultrices nulla fringilla et. Proin
                massa nibh, egestas non mi at, tincidunt pellentesque nulla.
                Phasellus tristique diam nec ex lobortis viverra. Nam
                sollicitudin ultrices dui non ullamcorper. In hac habitasse
                platea dictumst. Curabitur mauris nisl, eleifend vel felis nec,
                interdum blandit erat. Suspendisse potenti. Mauris sit amet
                risus at felis facilisis luctus sit amet non ligula. Ut commodo
                libero diam, in varius turpis tempor sed. Donec sapien nisi,
                imperdiet id diam sed, vulputate malesuada ex. Donec feugiat
                arcu et ex ornare, ut accumsan velit vehicula. Morbi quis
                blandit felis, at tempus felis. Praesent vel diam lacus. Integer
                gravida gravida sodales. Praesent urna eros, rhoncus eget
                rhoncus ultrices, mattis sed sem. Fusce lobortis et massa eu
                malesuada. Suspendisse porttitor mi tortor, eget tempus orci
                facilisis vitae. In vitae orci sit amet est sollicitudin blandit
                quis at orci. Nam vel porttitor augue. Ut neque velit,
                ullamcorper et consequat mollis, pulvinar quis massa. Sed porta
                odio ut porta consectetur. Pellentesque et magna quis orci
                euismod eleifend. Donec id neque nec lorem gravida tristique.
                Donec dapibus nunc ac ipsum viverra, sit amet rhoncus elit
                malesuada. Phasellus eleifend orci nec tristique mattis. Etiam
                euismod nunc ipsum, a suscipit lorem imperdiet at. Donec
                molestie nibh eu ornare euismod. Donec eget tincidunt ex, quis
                rhoncus sapien.
            </p>
        </div>
    );
};

export default MainPage;
