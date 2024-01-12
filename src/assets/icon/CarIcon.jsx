import * as React from "react"
const CarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <circle cx={24} cy={24} r={24} fill="#DEE2E7" />
    <path
      fill="#8B96A5"
      fillRule="evenodd"
      d="M31.5 20H29v-2c0-1.1-.9-2-2-2H15c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2 0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h1c.55 0 1-.45 1-1v-3.33c0-.43-.14-.85-.4-1.2l-2.3-3.07c-.19-.25-.49-.4-.8-.4ZM18 30c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm13.5-8.5 1.96 2.5H29v-2.5h2.5ZM30 30c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CarIcon