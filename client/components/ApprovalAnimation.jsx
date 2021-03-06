import React from 'react'

export default function Approval({animate, primaryColor, width, height}) {
  return <svg id="approval" width={width} height={height}>
    <g transform="translate(-50, -50)">
      <path id="approval_merge"
            d="m199.5,209c102,1 102,-27 95,-116"
            className={animate ? 'grow' : ''}
            strokeDasharray="200"
            strokeDashoffset="200"
            strokeWidth="4"
            stroke={primaryColor}
            fill="#fff"/>
      <path id="approval_branch"
            className={animate ? 'grow' : ''}
            d="m89.5,97c0,78 18,115 100.5,111"
            strokeDasharray="200"
            strokeDashoffset="200"
            strokeWidth="2"
            stroke="#000"
            fill="none"/>
      <line y2="94"
            x2="190.5"
            y1="94"
            x1="76.5"
            strokeWidth="2"
            stroke="#000"
            fill="none"/>
      <line strokeDasharray="200"
            strokeDashoffset="200"
            id="approval_master"
            className={animate ? 'grow' : ''}
            y2="94"
            x2="304.5"
            y1="94"
            x1="190.5"
            strokeWidth="2"
            stroke="#000"
            fill="none"/>
      <ellipse ry="25"
               rx="25"
               id="svg_1"
               cy="92.5"
               cx="89.5"
               strokeWidth="2"
               stroke="#000"
               fill="#fff"/>
      <ellipse ry="25"
               rx="25"
               id="svg_2"
               cy="92.5"
               cx="89.5"
               strokeWidth="2"
               stroke="#000"
               fill="#fff"/>
      <ellipse ry="25"
               rx="25"
               id="svg_4"
               cy="92.5"
               cx="190.506577"
               strokeWidth="2"
               stroke="#000"
               fill="#fff"/>
      <ellipse ry="10"
               rx="10"
               id="approval_mastercommit"
               className={animate ? 'grow' : ''}
               cy="92.5"
               cx="291.5"
               strokeWidth="2"
               stroke="#000"
               fill="#fff"/>
      <ellipse stroke="#000"
               className={animate ? 'grow' : ''}
               ry="10"
               rx="10"
               id="approval_commit"
               cy="205.5"
               cx="191.5"
               strokeWidth="2"
               fill="#fff"/>
    </g>
  </svg>
}
