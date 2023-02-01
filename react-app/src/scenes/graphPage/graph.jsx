import { Switch } from "@headlessui/react";
import { ResponsiveLine } from "@nivo/line";
import React, { useState } from "react";
import data from "./data.json";
import theme from "./theme.json";

const Graph = ({ data, theme }) => (
    <ResponsiveLine
        data={data}
        theme={theme}
        margin={{ top: 20, right: 90, bottom: 50, left: 60 }}
        enableCrosshair={true}
        xScale={{ type: "point" }}
        yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 40,
            legendPosition: "middle",
        }}
        axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -45,
            legendPosition: "middle",
        }}
        colors={{ scheme: "oranges" }}
        lineWidth={4}
        pointSize={10}
        pointBorderWidth={3}
        pointBorderColor={{ from: "serieColor", modifiers: [] }}
        pointLabelYOffset={-12}
        areaOpacity={0.1}
        useMesh={true}
        legends={[
            {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemBackground: "rgba(0, 0, 0, .03)",
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ]}
    />
);

const ToggleSwitchCar = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
                enabled ? "bg-accent" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
            <span className="sr-only">Enable car</span>
            <span
                className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
        </Switch>
    );
};

const DataTable = () => {
    return (
        <table
            className="table-fixed border border-slate-500 text-white font-mono
                       justify-center w-[1000px]"
        >
            <thead>
                <tr>
                    <th className="border border-slate-600">Song</th>
                    <th className="border border-slate-600">Artist</th>
                    <th className="border border-slate-600">Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-slate-700">
                        The Sliding Mr. Bones (Next Stop, Pottersville)
                    </td>
                    <td className="border border-slate-700">Malcolm Lockyer</td>
                    <td className="border border-slate-700">1961</td>
                </tr>
                <tr>
                    <td className="border border-slate-700">Witchy Woman</td>
                    <td className="border border-slate-700">The Eagles</td>
                    <td className="border border-slate-700">1972</td>
                </tr>
                <tr>
                    <td className="border border-slate-700">Shining Star</td>
                    <td className="border border-slate-700">
                        Earth, Wind, and Fire
                    </td>
                    <td className="border border-slate-700"> 1975</td>
                </tr>
            </tbody>
        </table>
    );
};

const GraphPage = () => {
    return (
        <div className="pb-[800px]">
            <div className="flex h-full w-full pt-10 justify-start">
                {/* Div contenente gli switch per abilitare e disabilitare degli oggetti nel grafico */}
                <div className="space-y-3 m-10">
                    <div className="grid grid-cols-2 space-x-10">
                        <p className="text-white text-xl">Car</p>
                        <ToggleSwitchCar />
                    </div>
                    <div className="grid grid-cols-2 space-x-10">
                        <p className="text-white text-xl">Plane</p>
                        <ToggleSwitchCar />
                    </div>
                    <div className="grid grid-cols-2 space-x-10">
                        <p className="text-white text-xl">Horse</p>
                        <ToggleSwitchCar />
                    </div>
                </div>

                {/* Div contenente il grafico */}
                <div className="h-[600px] w-[90vw]">
                    <Graph data={data} theme={theme} />
                </div>
            </div>
            {/* Div contenente la tabella */}
            <div className="h-[800px] w-full justify-center pt-10 mx-auto">
                <DataTable />
            </div>
        </div>
    );
};

export default GraphPage;
