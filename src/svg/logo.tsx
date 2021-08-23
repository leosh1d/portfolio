import React from "react"

const Logo = () => {
  return (
    <svg width="58" height="62" viewBox="0 0 58 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.9422 11.5567L43.1503 18.6082C44.4451 19.3505 45 20.4639 45 21.9485V36.0515C45 37.5361 44.4451 38.6495 43.1503 39.3918L30.9422 46.4433C29.8324 47.1856 28.3526 47.1856 27.0578 46.4433L14.8497 39.3918C13.7399 38.6495 13 37.5361 13 36.0515V21.9485C13 20.4639 13.7399 19.3505 14.8497 18.6082L27.0578 11.5567C28.3526 10.8144 29.8324 10.8144 30.9422 11.5567Z"
          fill="#518DDF"
        />
      </g>
      <path
        d="M34.7589 23.1001C34.9246 23.1001 35.0589 23.2344 35.0589 23.4001V34.7001C35.0589 34.8658 34.9246 35.0001 34.7589 35.0001H32.3329C32.1672 35.0001 32.0329 34.8658 32.0329 34.7001V29.9862C32.0329 29.6631 31.5922 29.5683 31.4594 29.8629L29.2058 34.8606C29.1675 34.9455 29.0831 35 28.99 35C28.8968 35 28.8123 34.9453 28.7741 34.8604L26.5375 29.8843C26.405 29.5894 25.9639 29.684 25.9639 30.0073V34.7001C25.9639 34.8658 25.8296 35.0001 25.6639 35.0001H23.2209C23.0552 35.0001 22.9209 34.8658 22.9209 34.7001V23.4001C22.9209 23.2344 23.0552 23.1001 23.2209 23.1001H25.7934C25.8991 23.1001 25.997 23.1558 26.0511 23.2466L28.7328 27.7513C28.849 27.9464 29.1314 27.9468 29.248 27.7519L31.9456 23.246C31.9997 23.1555 32.0975 23.1001 32.203 23.1001H34.7589Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d"
          x="0"
          y="0"
          width="58"
          height="62"
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
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="6.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.317647 0 0 0 0 0.552941 0 0 0 0 0.87451 0 0 0 0.28 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default Logo
