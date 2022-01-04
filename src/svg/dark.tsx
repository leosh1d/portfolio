import React from "react"

import { useTheme } from "next-themes"

const Dark = () => {
  const { resolvedTheme } = useTheme()

  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 6C21.615 6 27 11.385 27 18C27 24.615 21.615 30 15 30C14.49 30 13.98 29.97 13.485 29.895C16.35 26.655 18 22.425 18 18C18 13.575 16.35 9.345 13.485 6.105C13.98 6.03 14.49 6 15 6ZM15 3C12.27 3 9.705 3.75 7.5 5.025C11.985 7.62 15 12.45 15 18C15 23.55 11.985 28.38 7.5 30.975C9.705 32.25 12.27 33 15 33C23.28 33 30 26.28 30 18C30 9.72 23.28 3 15 3Z"
        fill={resolvedTheme === "dark" ? "white" : "#1C1F22"}
      />
    </svg>
  )
}

export default Dark
