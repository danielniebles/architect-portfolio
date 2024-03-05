const COMMON_STYLE: React.CSSProperties = {
  strokeOpacity: 0,
  strokeWidth: 1,
  strokeDasharray: 'none',
  strokeLinecap: 'round',
  strokeDashoffset: 0,
  strokeLinejoin: 'round',
  strokeMiterlimit: 10,
  fill: 'none',
  fillRule: 'nonzero',
  opacity: 1,
};

const HexagonLeaf = ({
  hexagonColor,
  leafColor,
}: {
  hexagonColor: string;
  leafColor: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="100"
    height="100"
    viewBox="-100 -80 550 500"
  >
    <desc>Created with Fabric.js 3.6.6</desc>
    <defs></defs>
    <g transform="matrix(1 0 0 1 112.71 183.25)">
      <g>
        <g transform="matrix(1 0 0 1 -150.2 182.75)">
          <path
            style={{
              fill: leafColor,
              ...COMMON_STYLE,
            }}
            transform=" translate(-144, -411)"
            d="M 143.999 411 L 144.001 411"
            strokeLinecap="round"
          />
        </g>
        <g transform="matrix(1 0 0 1 -203.2 183.75)">
          <path
            style={{
              fill: leafColor,
              ...COMMON_STYLE,
            }}
            transform=" translate(-91, -412)"
            d="M 90.999 412 L 91.001 412"
            strokeLinecap="round"
          />
        </g>
        <g transform="matrix(0.88 0 0 0.88 50.66 -7.81)">
          <polygon
            style={{
              stroke: 'none',
              ...COMMON_STYLE,
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 4,
              fill: `var(--${hexagonColor})`,
            }}
            points="173.21,100 0,200 -173.21,100 -173.21,-100 0,-200 173.21,-100 "
          />
        </g>
        <g transform="matrix(1.06 -1.39 -1.39 -1.06 50.82 -25.96)">
          <g>
            <g transform="matrix(1 0 0 1 -0.14 -10.69)">
              <path
                style={{
                  stroke: 'none',
                  strokeWidth: 1,
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeDashoffset: 0,
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  fillRule: 'nonzero',
                  opacity: 1,
                  fill: leafColor,
                }}
                transform=" translate(-200.36, -606.9)"
                d="M 256.77 593.68 l -21.66 2.72 l -3.58 0.19 c -0.69 0 -1.47 0.07 -2.3 0.14 l -2.72 0.27 l -3.08 0.32 c -1.09 0.12 -2.22 0.32 -3.41 0.49 s -2.43 0.34 -3.71 0.57 l -3.94 0.78 l -2.07 0.42 l -2.09 0.51 c -1.4 0.36 -2.85 0.7 -4.31 1.09 c -2.89 0.87 -5.93 1.7 -8.91 2.81 s -6 2.29 -9 3.5 s -5.95 2.66 -8.77 4.19 s -5.59 3.08 -8.27 4.62 c -1.3 0.8 -2.57 1.64 -3.82 2.44 l -1.85 1.19 l -1.75 1.24 l -3.36 2.4 c -1.07 0.79 -2.06 1.61 -3 2.37 s -1.92 1.48 -2.8 2.22 l -2.47 2.15 l -2.18 1.9 c -0.38 0.33 -0.71 0.66 -1 1 c -0.1 -0.22 -0.21 -0.44 -0.3 -0.66 c -0.14 -0.38 -0.29 -0.76 -0.44 -1.12 c -4.71 -11.65 -0.11 -23.47 -0.11 -23.47 c 23.61 -50 105.23 -16.67 111 -14.24"
                strokeLinecap="round"
              />
            </g>
            <g transform="matrix(1 0 0 1 4.7 6.52)">
              <path
                style={{
                  stroke: 'none',
                  strokeWidth: 1,
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeDashoffset: 0,
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: 4,
                  fillRule: 'nonzero',
                  opacity: 1,
                  fill: leafColor,
                }}
                transform=" translate(-205.21, -624.11)"
                d="M 164.52 631.18 l 2.83 -2.59 c 0.49 -0.45 1 -0.9 1.49 -1.35 s 1 -0.88 1.58 -1.32 c 1.07 -0.88 2.15 -1.8 3.28 -2.71 c 2.31 -1.72 4.66 -3.59 7.21 -5.25 s 5.16 -3.34 7.8 -5 s 5.42 -3.07 8.21 -4.37 s 5.54 -2.56 8.23 -3.75 c 1.36 -0.55 2.72 -1 4 -1.55 l 2 -0.75 l 2 -0.64 l 3.75 -1.23 c 1.22 -0.38 2.41 -0.68 3.55 -1 s 2.24 -0.63 3.29 -0.9 l 3 -0.67 l 2.65 -0.6 c 0.81 -0.16 1.57 -0.28 2.26 -0.4 l 4.31 -0.76 l -0.64 0 l 21.5 -2.72 l 0.34 0.14 s -12.16 -1.17 -42.28 37.93 a 113 113 0 0 1 -12.36 13.73 a 35 35 0 0 1 -49.26 -2 l 1.35 -1.64 c 0.44 -0.52 0.93 -1.15 1.46 -1.75 l 1.71 -1.89 l 1.94 -2.15 c 0.71 -0.75 1.5 -1.52 2.3 -2.34 s 1.65 -1.67 2.55 -2.52"
                strokeLinecap="round"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default HexagonLeaf;
