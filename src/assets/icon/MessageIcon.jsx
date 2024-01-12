import * as React from "react"
const MessageIcon = (props) => (
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
      d="M32 15H16c-1.1 0-1.99.9-1.99 2L14 35l4-4h14c1.1 0 2-.9 2-2V17c0-1.1-.9-2-2-2Zm-13 7h10c.55 0 1 .45 1 1s-.45 1-1 1H19c-.55 0-1-.45-1-1s.45-1 1-1Zm6 5h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1Zm4-6H19c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1Z"
      clipRule="evenodd"
    />
  </svg>
)
export default MessageIcon