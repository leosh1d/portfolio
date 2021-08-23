import React from "react"

const MAK = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <rect width="30" height="30" rx="10" fill="url(#paing_mak)" />
        <g filter="url(#filter0_d)">
          <path
            d="M12 12C12 11.4696 12.2107 10.9609 12.5858 10.5858C12.9609 10.2107 13.4696 10 14 10H20C20.5304 10 21.0391 10.2107 21.4142 10.5858C21.7893 10.9609 22 11.4696 22 12V21C22 21.5304 21.7893 22.0391 21.4142 22.4142C21.0391 22.7893 20.5304 23 20 23H14C13.4696 23 12.9609 22.7893 12.5858 22.4142C12.2107 22.0391 12 21.5304 12 21V12Z"
            fill="white"
          />
        </g>
        <path
          d="M10 6C10 6 8.99999 6.00001 8.49999 6.49999C7.99024 7.00974 8 8 8 8V17.5858C8 18.1162 8.21071 18.6249 8.58579 19C8.96086 19.3751 9.46957 19.5858 10 19.5858V10C10 8.89543 10.8954 8 12 8H18C18 7.46957 17.7893 6.96086 17.4142 6.58579C17.0391 6.21071 16.5304 6 16 6H10Z"
          fill="white"
          fillOpacity="0.6"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="7"
          y="10"
          width="20"
          height="23"
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
          <feColorMatrix type="matrix" values="0 0 0 0 0.509804 0 0 0 0 0.054902 0 0 0 0 0.192157 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id="paing_mak" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DD1350" />
          <stop offset="1" stopColor="#FA5688" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="30" height="30" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default MAK
