import * as React from "react"
const LockIcon = (props) => (
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
      d="M30 20h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V22c0-1.1-.9-2-2-2Zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm-3-9v-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6Z"
      clipRule="evenodd"
    />
  </svg>
)
export default LockIcon