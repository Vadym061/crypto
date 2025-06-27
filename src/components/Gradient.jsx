import React from "react";

function Gradient() {
  return (
    <div>
      <div className="svg-bg">
        <svg
          viewBox="0 0 1329 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.34">
            <g filter="url(#filter0_f)">
              <path
                d="M1149 450L-53.9995 12.6571V887.343L1149 450Z"
                fill="#27ECD3"
              />
            </g>
            <g filter="url(#filter1_f)">
              <path
                d="M881.667 450L-120.833 85.5475L-120.833 814.452L881.667 450Z"
                fill="#2ECBEE"
              />
              <path
                d="M-104.833 108.388L-104.833 791.612L834.838 450L-104.833 108.388Z"
                stroke="white"
                strokeWidth="32"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="-234"
              y="-167.343"
              width="1563"
              height="1234.69"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="90" />
            </filter>
            <filter
              id="filter1_f"
              x="-220.833"
              y="-14.4525"
              width="1202.5"
              height="928.905"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur stdDeviation="50" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="svg-bg2">
        <svg
          viewBox="0 0 640 799"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.26" filter="url(#filter0_f_1_1862)">
            <g filter="url(#filter1_f_1_1862)">
              <path
                d="M180 399.5L781.5 180.829V618.171L180 399.5Z"
                fill="#27ECD3"
              />
            </g>
            <g filter="url(#filter2_f_1_1862)">
              <path
                d="M313.667 399.5L814.917 217.274V581.726L313.667 399.5Z"
                fill="#2ECBEE"
              />
              <path
                d="M798.917 240.115V558.885L360.496 399.501L798.917 240.115Z"
                stroke="white"
                stroke-width="32"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_1_1862"
              x="100"
              y="100.829"
              width="794.917"
              height="597.343"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="40"
                result="effect1_foregroundBlur_1_1862"
              />
            </filter>
            <filter
              id="filter1_f_1_1862"
              x="0.000488281"
              y="0.828522"
              width="961.5"
              height="797.343"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="90"
                result="effect1_foregroundBlur_1_1862"
              />
            </filter>
            <filter
              id="filter2_f_1_1862"
              x="213.667"
              y="117.274"
              width="701.25"
              height="564.452"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_1_1862"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Gradient;
