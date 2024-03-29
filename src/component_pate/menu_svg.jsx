import styled, { keyframes } from "styled-components";

const circlePulse = () => keyframes`
0% {
  stroke:transparent;
  transform: translate(5px, 5px);
  

}

100%{
    stroke:black;
    // transform: translate(5px, 5px);
    
  

}
`;



export default function MenuSvg(props) {
  var strokeWidth = 1;


  return (
    <>
      <div style={{ visibility: props.menuVisibility ? "visible" : "hidden" }}>
        
        <div onClick={props.onMouseDown}>
          <svg
            version="1.1"
            x="0px"
            y="0px"
            width="27.5px"
            height="26.3px"
            viewBox="0 0 27.5 26.3"
            id="svg_titre"
          >
            <g className="line-1">
              <path
                fill="#000"
                d="M2.7,7.2c-0.5,0-0.9-0.4-0.9-0.9l0,0V1.8H0.9C0.4,1.8,0,1.5-0.1,1S0.2,0,0.7,0c0.1,0,0.1,0,0.2,0h1.8
	c0.5,0,0.9,0.4,0.9,0.9v5.4C3.6,6.8,3.2,7.2,2.7,7.2z"
              ></path>
              <path
                fill="#000"
                className="line"
                d="M26.6,5.1H8.1c-0.5,0-0.9-0.3-1-0.8s0.3-0.9,0.8-1c0.1,0,0.1,0,0.2,0h18.5c0.5,0,0.9,0.3,1,0.8s-0.3,0.9-0.8,1
	C26.7,5.1,26.6,5.1,26.6,5.1L26.6,5.1z"
              ></path>
            </g>
            <g className="line-2">
              <path
                fill="#000"
                d="M3.9,16.8h-3c-0.5,0-0.9-0.4-0.9-0.9v-1.5c0-1.2,0.9-2.1,2.1-2.1h0.6C2.9,12.3,3,12.1,3,12l0,0v-0.3
	c0-0.2-0.1-0.3-0.3-0.3c0,0,0,0,0,0H0.9c-0.5,0-0.9-0.5-0.8-1c0-0.4,0.4-0.8,0.8-0.8h1.8c1.2,0,2.1,0.9,2.1,2.1V12
	c0,1.2-0.9,2.1-2.1,2.1H2.1c-0.2,0-0.3,0.1-0.3,0.3l0,0V15h2.1c0.5,0,0.9,0.5,0.8,1C4.7,16.4,4.3,16.7,3.9,16.8L3.9,16.8z"
              ></path>
              <path
                fill="#000"
                className="line line-2"
                d="M26.6,14.7H8.1c-0.5,0-0.9-0.3-1-0.8c0-0.5,0.3-0.9,0.8-1c0.1,0,0.1,0,0.2,0h18.5c0.5,0,0.9,0.3,1,0.8
	c0,0.5-0.3,0.9-0.8,1C26.7,14.7,26.6,14.7,26.6,14.7L26.6,14.7z"
              ></path>
            </g>
            <g className="line-3">
              <path
                fill="#000"
                d="M4.8,21.5c0,0.4-0.1,0.9-0.4,1.2c0.2,0.3,0.4,0.8,0.4,1.2v0.3c0,1.2-0.9,2.1-2.1,2.1H0.9c-0.5,0-0.9-0.3-1-0.8
	c-0.1-0.5,0.3-0.9,0.8-1h2c0.2,0,0.3-0.1,0.3-0.3v-0.3c0-0.2-0.1-0.3-0.3-0.3H1.5c-0.5,0-0.9-0.5-0.8-1c0-0.4,0.4-0.8,0.8-0.8h1.2
	c0.2,0,0.3-0.1,0.3-0.3v-0.3C3,21.1,2.8,21,2.7,21H0.9c-0.5,0-0.9-0.5-0.8-1c0-0.4,0.4-0.8,0.8-0.8h1.8c1.2,0,2.1,0.9,2.1,2.1V21.5z
	"
              ></path>
              <path
                fill="#000"
                className="line line-3"
                d="M26.6,24.2H8.1c-0.5,0-0.9-0.5-0.8-1c0-0.4,0.4-0.8,0.8-0.8h18.5c0.5,0,0.9,0.3,1,0.8c0,0.5-0.3,0.9-0.8,1
	C26.7,24.2,26.6,24.2,26.6,24.2L26.6,24.2z"
              ></path>
            </g>
          </svg>
        </div>

      </div>
    </>
  );
}
