import React from "react"

const Home = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <rect width="30" height="30" rx="10" fill="url(#paing_home)" />
        <g filter="url(#filter0_d)">
          <path
            d="M11.625 7C11.3266 7 11.0405 7.11332 10.8295 7.31504C10.6185 7.51676 10.5 7.79036 10.5 8.07563C10.5 8.36091 10.6185 8.6345 10.8295 8.83622C11.0405 9.03794 11.3266 9.15126 11.625 9.15126H18.375C18.6734 9.15126 18.9595 9.03794 19.1705 8.83622C19.3815 8.6345 19.5 8.36091 19.5 8.07563C19.5 7.79036 19.3815 7.51676 19.1705 7.31504C18.9595 7.11332 18.6734 7 18.375 7H11.625ZM8.25 11.3025C8.25 11.0172 8.36853 10.7437 8.5795 10.5419C8.79048 10.3402 9.07663 10.2269 9.375 10.2269H20.625C20.9234 10.2269 21.2095 10.3402 21.4205 10.5419C21.6315 10.7437 21.75 11.0172 21.75 11.3025C21.75 11.5878 21.6315 11.8614 21.4205 12.0631C21.2095 12.2648 20.9234 12.3782 20.625 12.3782H9.375C9.07663 12.3782 8.79048 12.2648 8.5795 12.0631C8.36853 11.8614 8.25 11.5878 8.25 11.3025ZM6 15.605C6 15.0345 6.23705 14.4873 6.65901 14.0839C7.08097 13.6804 7.65326 13.4538 8.25 13.4538H21.75C22.3467 13.4538 22.919 13.6804 23.341 14.0839C23.7629 14.4873 24 15.0345 24 15.605V20.8487C24 21.4193 23.7629 21.9665 23.341 22.3699C22.919 22.7733 22.3467 23 21.75 23H8.25C7.65326 23 7.08097 22.7733 6.65901 22.3699C6.23705 21.9665 6 21.4193 6 20.8487V15.605Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="1"
          y="7"
          width="28"
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
          <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.243137 0 0 0 0 0.541176 0 0 0 0.4 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id="paing_home" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5C8FDC" />
          <stop offset="1" stopColor="#4282E4" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="30" height="30" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Home
