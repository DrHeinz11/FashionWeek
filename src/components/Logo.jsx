import * as React from "react"

const Logo = (props,color) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={333} height={192} {...props}>
    <g data-name="Grupo 47">
      <path
        data-name="Trazado 33"
        d="M301.807 104.55c1.5 10.534 1.5 19.563 1.5 30.1s0 19.563-1.5 30.1c-1.5-10.534-1.5-19.563-1.5-30.1s0-21.071 1.5-30.1Z"
        fill="#2d2d2d"
      />
    </g>
    <g data-name="Grupo 48">
      <path
        data-name="Trazado 34"
        d="M331.909 134.642c-10.534 1.5-19.563 1.5-30.1 1.5s-19.563 0-30.1-1.5c10.54-1.5 19.569-1.5 30.106-1.5s19.56 0 30.094 1.5Z"
        fill="#2d2d2d"
      />
    </g>
    <g data-name="Grupo 49">
      <path
        data-name="Trazado 35"
        d="M286.763 148.19a135.68 135.68 0 0 0 13.544-15.048 135.677 135.677 0 0 1 15.048-13.544 135.675 135.675 0 0 0-13.544 15.048 135.677 135.677 0 0 1-15.048 13.544Z"
        fill="#2d2d2d"
      />
    </g>
    <g data-name="Grupo 50">
      <path
        data-name="Trazado 36"
        d="M315.355 148.19a135.675 135.675 0 0 0-15.048-13.544 135.675 135.675 0 0 1-13.544-15.048 135.673 135.673 0 0 0 15.048 13.544c4.515 4.514 9.029 10.534 13.544 15.048Z"
        fill="#2d2d2d"
      />
    </g>
    <circle
      data-name="Elipse 10"
      cx={3.01}
      cy={3.01}
      r={3.01}
      transform="translate(298.802 131.637)"
      fill="#2d2d2d"
      stroke="#575756"
      strokeMiterlimit={10}
      strokeWidth={0.25}
    />
    <text
      data-name="Fashion. Week"
      transform="translate(0 73)"
      fill="#2d2d2d"
      fontSize={89}
      fontFamily="Runalto"
    >
      <tspan x={0} y={0}>
        {"Fashion."}
      </tspan>
      <tspan x={0} y={93}>
        {"Week"}
      </tspan>
    </text>
  </svg>
)

export default Logo;
