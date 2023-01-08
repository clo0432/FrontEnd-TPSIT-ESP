import React, { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const schools = [
    { id: 1, label: 'Seleziona una scuola', unavailable: true},
    { id: 2, label: 'Alberghetti (Via S. Benedetto)'},
    { id: 3, label: 'Alberghetti (Viale Dante Alighieri)'},
    { id: 4, label: 'Scarabelli Ghini'},
    { id: 5, label: 'Valeriani'},
    { id: 6, label: 'Rambaldi'},
]

const floor_departments = [
    { id: 1, label: 'Seleziona un piano o reparto', unavailable: true },
    { id: 2, label: 'Piano terra'},
    { id: 3, label: 'Piano primo'},
    { id: 4, label: 'Piano secondo'},
    { id: 5, label: 'Palestra'},
]

const MainPage = () => {
    const [selectedSchool, setSelectedSchool] = useState(schools[0])
    const [selectedFloor_departments, setSelectedFloor_departments] = useState(floor_departments[0])

    return (
            <div id="mainpageContainer" className ="px-5 pb-[250px] top-16">

                {/* Titolo */}
                <title className="page-title-text">
                    Benvenuto all'interno della demo!
                </title>

                {/* Selectors */}
                <div className="relative flex top-16 w-full items-center justify-center space-x-10">

                    {/* Selector per scuola */}
                    <Listbox value={selectedSchool} onChange={setSelectedSchool}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selectedSchool.label}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon 
                                        className="h-5 w-5 text-gray-400" 
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
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {schools.map((school, schoolIndex) => (
                                    <Listbox.Option
                                        key={schoolIndex}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={school}
                                        disabled={school.unavailable}
                                    >
                                        {({ selected }) => (
                                            <>
                                            <span
                                                className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                               {school.label}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                    <Listbox value={selectedFloor_departments} onChange={setSelectedFloor_departments}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selectedFloor_departments.label}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon 
                                        className="h-5 w-5 text-gray-400" 
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
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {floor_departments.map((floor_department, floor_departmentIndex) => (
                                    <Listbox.Option
                                        key={floor_departmentIndex}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={floor_department}
                                        disabled={floor_department.unavailable}
                                    >
                                        {({ selected }) => (
                                            <>
                                            <span
                                                className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                               {floor_department.label}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

                    {/* Pulsante per cercare */}
                    <button className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full">
                        Cerca
                    </button>
                </div>

                <p className="relative mt-96">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet eros non sodales semper. Maecenas non neque a urna rhoncus lobortis eget malesuada tortor. Proin in leo convallis, vestibulum magna in, blandit orci. Sed eget mi ullamcorper, aliquam nisi vel, blandit lacus. Sed pretium ex in fringilla feugiat. Pellentesque auctor eget nibh nec lacinia. Sed tincidunt placerat ex non tincidunt. In ac lacinia tellus, ac pretium dui. Nullam tortor odio, viverra in purus sed, accumsan tincidunt quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus neque ipsum, vitae blandit nunc porta sit amet. Morbi vel nisl sit amet mauris vestibulum sodales ut at sem. Ut congue risus vitae varius tempus. Nunc interdum auctor est vel volutpat.
                    Praesent dignissim, ante quis volutpat mollis, sapien tortor imperdiet leo, tincidunt varius eros metus et mi. Morbi purus velit, placerat in tellus iaculis, egestas aliquam tellus. Quisque ac dui eget magna scelerisque molestie. Integer condimentum vestibulum mauris id molestie. In hac habitasse platea dictumst. Nam porttitor quis lorem id luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque porttitor fermentum lacinia. Sed vitae lorem imperdiet, elementum tortor eu, semper metus.
                    Ut non orci tincidunt, ullamcorper lorem viverra, sodales ex. Vestibulum nisl lectus, tempus non iaculis quis, lobortis nec libero. Nunc commodo pretium eros eget scelerisque. Donec malesuada sodales erat. Sed mollis ligula sit amet sem sodales, sit amet lacinia massa porta. Suspendisse potenti. Aliquam eu neque lacinia diam eleifend tempor. Quisque ultricies ornare feugiat. Sed tincidunt fermentum ligula eu iaculis.
                    Donec viverra tortor vel dui egestas venenatis. Sed pellentesque sem sed magna hendrerit, pulvinar vehicula nulla pulvinar. In blandit sagittis lectus, quis ultrices augue tristique vel. Vivamus eleifend, lorem quis rutrum vestibulum, ligula augue cursus erat, consectetur dignissim ex justo at sem. Praesent massa augue, lacinia nec ornare vel, pharetra ut dui. Nulla at magna quis elit pellentesque imperdiet. Vivamus elementum dui sagittis semper feugiat. Proin sagittis ex sit amet sollicitudin interdum. Mauris at ornare ex, ac condimentum justo. Etiam lacus purus, scelerisque ut molestie ac, bibendum sed mi. Ut eget vestibulum dolor. Mauris est lectus, tristique ac nisi et, gravida hendrerit ipsum. Mauris a nisl pharetra, venenatis augue nec, auctor lacus. Nam malesuada justo rhoncus efficitur pulvinar. Praesent euismod velit sed eros mollis aliquet.
                    Nam non metus enim. Donec lobortis tortor ex, vitae tempor ante eleifend at. Integer et nisl nec quam posuere fermentum vel vitae ante. Vivamus tincidunt purus cursus ipsum malesuada pretium. In non lacus risus. Duis ullamcorper metus ac scelerisque volutpat. Sed erat nisi, sodales id est nec, pellentesque tempus nisl. Cras dapibus vestibulum aliquet. Vivamus auctor nulla tellus, non commodo ante venenatis ac. Sed congue, quam eget tincidunt sollicitudin, eros urna malesuada neque, ut maximus libero turpis a eros. Donec aliquet, ligula eu porttitor egestas, sem nibh interdum est, non egestas leo nibh sit amet purus.
                </p>

            </div>
    )
}

export default MainPage;