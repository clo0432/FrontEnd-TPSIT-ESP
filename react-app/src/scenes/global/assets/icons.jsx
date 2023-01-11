import React from "react";

export const Logo = () => {
    return (
        <svg
            className="logo"
            width="67.5"
            height="42"
            viewBox="0 0 415 221"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_3_8)">
                <path d="M44.7574 111.244C47.1005 113.587 50.8995 113.587 53.2426 111.244L91.4264 73.0601C93.7695 70.717 93.7695 66.918 91.4264 64.5748C89.0833 62.2317 85.2843 62.2317 82.9411 64.5748L49 98.516L15.0589 64.5748C12.7157 62.2317 8.91674 62.2317 6.57359 64.5748C4.23044 66.918 4.23044 70.717 6.57359 73.0601L44.7574 111.244ZM410.556 107.002C410.556 103.688 407.869 101.002 404.556 101.002C401.242 101.002 398.556 103.688 398.556 107.002H410.556ZM232.779 107.002C232.779 72.2712 221.168 45.5588 203.265 27.4748C185.418 9.44596 161.646 0.332501 137.926 0.187938C114.203 0.0433539 90.3994 8.87098 72.5225 26.8567C54.5948 44.8937 43 71.757 43 107.001L55 107.001C55 74.4949 65.6276 50.816 81.0335 35.3162C96.4904 19.7652 117.132 12.0614 137.853 12.1877C158.578 12.314 179.251 20.2737 194.737 35.9171C210.169 51.5055 220.779 75.0646 220.779 107.002H232.779ZM398.556 107.002C398.556 138.936 387.947 162.345 372.535 177.757C357.068 193.225 336.405 201 315.667 201C294.93 201.001 274.267 193.226 258.8 177.759C243.388 162.348 232.779 138.938 232.779 107.002H220.779C220.779 141.733 232.393 168.323 250.314 186.244C268.18 204.109 291.961 213.001 315.668 213C339.374 213 363.155 204.107 381.021 186.242C398.942 168.32 410.556 141.731 410.556 107.002H398.556Z" />
            </g>
            <defs>
                <filter
                    id="filter0_d_3_8"
                    x="0.816231"
                    y="0.186188"
                    width="413.739"
                    height="220.814"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_3_8"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_3_8"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export const Hamburger = () => {
    return (
        <svg id="hamburger" viewBox="0 0 100 100" width="35">
            <rect
                className="line top"
                width="70"
                height="7"
                x="14"
                y="27.5"
                rx="5"
            ></rect>
            <rect
                className="line middle"
                width="70"
                height="7"
                x="14"
                y="47.5"
                rx="5"
            ></rect>
            <rect
                className="line bottom"
                width="70"
                height="7"
                x="14"
                y="67.5"
                rx="5"
            ></rect>
        </svg>
    );
};
