import { ResponsiveLine } from "@nivo/line";
import React from "react";
import data from "./data.json";
import theme from "./theme.json";

const MyResponsiveLine = ({ data, theme }) => (
    <ResponsiveLine
        data={data}
        theme={theme}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
        }}
        axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
        }}
        colors={{ scheme: "purple_orange" }}
        lineWidth={4}
        pointSize={10}
        pointColor={{ theme: "background" }}
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

const GraphPage = () => {
    return (
        <div className="h-full w-[100vw] pt-10 justify-end">
            <div className="relative flex h-[500px] w-[60vw] align-middle justify-center">
                <MyResponsiveLine data={data} theme={theme} />
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

export default GraphPage;
