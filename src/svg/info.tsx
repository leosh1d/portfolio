import React from "react"

const Info = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <rect width="30" height="30" rx="10" fill="url(#paing_info)" />
        <g filter="url(#filter0_d)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 15C23 17.1217 22.1571 19.1566 20.6569 20.6569C19.1566 22.1571 17.1217 23 15 23C12.8783 23 10.8434 22.1571 9.34315 20.6569C7.84285 19.1566 7 17.1217 7 15C7 12.8783 7.84285 10.8434 9.34315 9.34315C10.8434 7.84285 12.8783 7 15 7C17.1217 7 19.1566 7.84285 20.6569 9.34315C22.1571 10.8434 23 12.8783 23 15ZM16 11C16 11.2652 15.8946 11.5196 15.7071 11.7071C15.5196 11.8946 15.2652 12 15 12C14.7348 12 14.4804 11.8946 14.2929 11.7071C14.1054 11.5196 14 11.2652 14 11C14 10.7348 14.1054 10.4804 14.2929 10.2929C14.4804 10.1054 14.7348 10 15 10C15.2652 10 15.5196 10.1054 15.7071 10.2929C15.8946 10.4804 16 10.7348 16 11ZM14 14C13.7348 14 13.4804 14.1054 13.2929 14.2929C13.1054 14.4804 13 14.7348 13 15C13 15.2652 13.1054 15.5196 13.2929 15.7071C13.4804 15.8946 13.7348 16 14 16V19C14 19.2652 14.1054 19.5196 14.2929 19.7071C14.4804 19.8946 14.7348 20 15 20H16C16.2652 20 16.5196 19.8946 16.7071 19.7071C16.8946 19.5196 17 19.2652 17 19C17 18.7348 16.8946 18.4804 16.7071 18.2929C16.5196 18.1054 16.2652 18 16 18V15C16 14.7348 15.8946 14.4804 15.7071 14.2929C15.5196 14.1054 15.2652 14 15 14H14Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="2"
          y="7"
          width="26"
          height="26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.576471 0 0 0 0 0.286275 0 0 0 0 0.0901961 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id="paing_info" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FEA466" />
          <stop offset="1" stopColor="#FFC196" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="30" height="30" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Info
