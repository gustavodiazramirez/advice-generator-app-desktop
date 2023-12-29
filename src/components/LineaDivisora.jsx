import * as React from "react"
const LineaDivisora = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={444} height={16} {...props}>
    <g fill="none" fillRule="evenodd">
      <path fill="#4F5D74" d="M0 8h196v1H0zm248 0h196v1H248z" />
      <g fill="#CEE3E9" transform="translate(212)">
        <rect width={6} height={16} rx={3} />
        <rect width={6} height={16} x={14} rx={3} />
      </g>
    </g>
  </svg>
)
export default LineaDivisora
