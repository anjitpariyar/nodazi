import styled, { keyframes } from "styled-components";
export default function Circle() {
  return (
    <svg
      version="1.1"
      id="레이어_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 120 120"
      xmlSpace="preserve"
      width="120"
      height="120"
    >
      <g>
        <circle cx="60" cy="60" r="60" fill="#002B60" />
      </g>
      <g style={{ transform: "translate(-137px, -126px)" }}>
        <Rotation>
          <path
            fill="#fff"
            d="M202.2,152.2c-0.6-0.1-1.2-0.2-1.7-0.5c-0.5-0.2-0.9-0.6-1.2-1s-0.5-0.9-0.7-1.4c-0.1-0.5-0.2-1.1-0.1-1.7
           c0.1-0.8,0.3-1.5,0.7-2.1c0.4-0.6,0.9-1,1.5-1.3c0.6-0.3,1.4-0.4,2.2-0.3c0.3,0,0.5,0.1,0.7,0.1c0.2,0.1,0.5,0.1,0.7,0.2
           s0.4,0.2,0.6,0.3c0.2,0.1,0.3,0.2,0.5,0.3l-0.3,1.4c-0.3-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.5-0.2-0.8-0.3c-0.2-0.1-0.5-0.1-0.7-0.1
           c-0.5,0-0.9,0-1.3,0.2c-0.4,0.2-0.7,0.5-1,0.9c-0.3,0.4-0.4,0.9-0.5,1.5c0,0.4,0,0.7,0.1,1.1c0.1,0.3,0.2,0.7,0.4,0.9
           c0.2,0.3,0.5,0.5,0.8,0.7s0.7,0.3,1.2,0.3c0.2,0,0.4,0,0.5,0c0.2,0,0.4,0,0.6-0.1s0.4-0.1,0.6-0.2c0.2-0.1,0.4-0.2,0.6-0.3
           l-0.1,1.4c-0.2,0.1-0.3,0.1-0.5,0.2c-0.2,0-0.4,0.1-0.6,0.1c-0.2,0-0.4,0-0.7,0C202.7,152.2,202.4,152.2,202.2,152.2z"
          />
          <path
            fill="#fff"
            d="M209.2,153.8c-0.7-0.2-1.2-0.5-1.6-0.9c-0.4-0.4-0.7-0.8-0.9-1.3s-0.3-1-0.3-1.5c0-0.5,0.1-1,0.3-1.6
           c0.2-0.7,0.6-1.3,1.1-1.8c0.5-0.5,1.1-0.8,1.8-1s1.4-0.1,2.3,0.2c0.6,0.2,1.2,0.5,1.6,0.9c0.4,0.4,0.7,0.8,0.9,1.2
           c0.2,0.5,0.3,1,0.3,1.5c0,0.5-0.1,1.1-0.3,1.6c-0.3,0.7-0.6,1.4-1.1,1.8c-0.5,0.5-1.1,0.8-1.8,0.9
           C210.7,154.2,210,154.1,209.2,153.8z M209.5,152.6c0.4,0.1,0.8,0.2,1.1,0.1c0.3,0,0.6-0.2,0.9-0.3c0.3-0.2,0.5-0.4,0.7-0.7
           c0.2-0.3,0.4-0.6,0.5-1c0.1-0.4,0.2-0.7,0.2-1.1c0-0.4,0-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.5-0.8s-0.5-0.4-0.9-0.5
           c-0.4-0.1-0.7-0.2-1.1-0.1c-0.3,0-0.6,0.2-0.9,0.3s-0.5,0.4-0.7,0.7c-0.2,0.3-0.4,0.6-0.5,1c-0.1,0.4-0.2,0.7-0.2,1.1
           c0,0.4,0,0.7,0.1,1s0.3,0.6,0.5,0.8C208.8,152.3,209.2,152.5,209.5,152.6z"
          />
          <path
            fill="#fff"
            d="M213.8,155.5c0.2-0.4,0.5-0.7,0.7-1.1c0.2-0.3,0.5-0.7,0.7-1.1l1.4-2.3c0.3-0.4,0.5-0.8,0.7-1.2
           s0.4-0.7,0.7-1.1l1.2,0.7c0,0.7,0.1,1.4,0.1,2c0,0.6,0,1.3,0.1,1.9l0.1,2.5l0.1,0.1l1.4-2.2c0.3-0.4,0.5-0.8,0.7-1.2
           s0.4-0.7,0.7-1.1l1.2,0.8c-0.2,0.4-0.5,0.7-0.7,1.1s-0.5,0.7-0.7,1.2l-1.4,2.3c-0.3,0.4-0.5,0.8-0.7,1.1c-0.2,0.3-0.4,0.7-0.7,1.1
           l-1.1-0.7c0-0.6,0-1.2-0.1-1.8c0-0.6-0.1-1.3-0.1-2.1l-0.1-2.5l-0.1-0.1l-1.5,2.3c-0.3,0.4-0.5,0.8-0.7,1.1
           c-0.2,0.3-0.4,0.7-0.7,1.1L213.8,155.5z"
          />
          <path
            fill="#fff"
            d="M220,159.5c0.4-0.2,0.8-0.4,1.3-0.6c0.4-0.2,0.9-0.4,1.3-0.6l2.6-1.3c0.5-0.2,0.9-0.4,1.3-0.6
           c0.4-0.2,0.8-0.4,1.1-0.6l1.4,1.4c-0.2,0.4-0.4,0.8-0.6,1.1c-0.2,0.4-0.4,0.8-0.6,1.2l-1.3,2.6c-0.2,0.4-0.4,0.8-0.6,1.3
           c-0.2,0.4-0.4,0.9-0.6,1.3l-1.1-1.1c0.2-0.4,0.4-0.8,0.7-1.2c0.2-0.4,0.4-0.8,0.6-1.2l1.9-3.6l-0.1-0.1l-3.6,1.9
           c-0.4,0.2-0.8,0.4-1.2,0.7c-0.4,0.2-0.8,0.4-1.2,0.7L220,159.5z M222.5,159.5l0.9-0.7l2.6,2.6l-0.7,0.9L222.5,159.5z"
          />
          <path
            fill="#fff"
            d="M227.6,168.6c-0.3-0.5-0.6-1.1-0.7-1.6c-0.1-0.5-0.1-1.1,0-1.6c0.1-0.5,0.3-1,0.6-1.4
           c0.3-0.4,0.7-0.8,1.2-1.1c0.7-0.4,1.3-0.7,2-0.7s1.4,0.1,2,0.4c0.6,0.3,1.2,0.8,1.6,1.5c0.1,0.2,0.3,0.4,0.4,0.7
           c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0.1,0.4,0.2,0.6s0.1,0.4,0.1,0.6l-1.3,0.7c0-0.3,0-0.6-0.1-0.9c-0.1-0.3-0.1-0.5-0.2-0.8
           c-0.1-0.2-0.2-0.5-0.3-0.6c-0.3-0.4-0.6-0.7-1-0.9c-0.4-0.2-0.8-0.3-1.3-0.2c-0.5,0-0.9,0.2-1.4,0.5c-0.3,0.2-0.6,0.4-0.8,0.7
           c-0.2,0.3-0.4,0.6-0.5,0.9s-0.1,0.7,0,1c0.1,0.4,0.2,0.7,0.5,1.1c0.1,0.1,0.2,0.3,0.3,0.4c0.1,0.1,0.2,0.3,0.4,0.4
           c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.6,0.3l-1.2,0.9c-0.2-0.1-0.3-0.2-0.5-0.3c-0.2-0.1-0.3-0.3-0.5-0.4
           c-0.2-0.2-0.3-0.3-0.4-0.5S227.7,168.8,227.6,168.6z"
          />
          <path
            fill="#fff"
            d="M230.1,173.3c0.4-0.2,0.8-0.3,1.2-0.5c0.4-0.1,0.8-0.3,1.2-0.5l2.3-0.9c0.5-0.2,0.9-0.4,1.3-0.5
           c0.4-0.1,0.8-0.3,1.2-0.5l-0.8,1l-0.4-0.9c-0.2-0.4-0.3-0.7-0.4-1.1s-0.2-0.6-0.3-0.9l1.3-0.5l2.4,6.1l-1.3,0.5
           c-0.1-0.3-0.2-0.6-0.3-0.9c-0.1-0.3-0.3-0.7-0.4-1.1l-0.4-0.9l1.3,0.1c-0.4,0.2-0.8,0.3-1.2,0.5c-0.4,0.2-0.8,0.3-1.3,0.5
           l-2.3,0.9c-0.5,0.2-0.9,0.3-1.2,0.5c-0.4,0.1-0.8,0.3-1.2,0.5L230.1,173.3z"
          />
          <path
            fill="#fff"
            d="M213.2,218.4c0.2,0.4,0.3,0.8,0.4,1.2c0.1,0.4,0.3,0.8,0.5,1.3l0.9,2.5c0.2,0.5,0.3,0.9,0.5,1.3
           c0.1,0.4,0.3,0.8,0.4,1.2l-1.3,0.5c-0.6-0.4-1.1-0.8-1.7-1.1c-0.5-0.4-1.1-0.7-1.6-1.1l-2.1-1.4l-0.1,0l0.9,2.5
           c0.2,0.5,0.3,0.9,0.5,1.3c0.1,0.4,0.3,0.8,0.4,1.2l-1.4,0.5c-0.2-0.4-0.3-0.8-0.4-1.2c-0.1-0.4-0.3-0.8-0.5-1.3l-0.9-2.5
           c-0.2-0.5-0.3-0.9-0.5-1.3c-0.1-0.4-0.3-0.8-0.4-1.2l1.3-0.5c0.5,0.3,1,0.7,1.5,1c0.5,0.4,1.1,0.8,1.7,1.2l2.1,1.4l0.1,0l-1-2.5
           c-0.2-0.5-0.3-0.9-0.5-1.3c-0.1-0.4-0.3-0.8-0.4-1.2L213.2,218.4z"
          />
          <path
            fill="#fff"
            d="M202.1,221.4c0.7-0.1,1.3-0.1,1.8,0.1c0.5,0.2,1,0.4,1.4,0.7s0.7,0.7,0.9,1.2c0.2,0.5,0.4,1,0.4,1.5
           c0.1,0.8,0,1.5-0.2,2.1c-0.2,0.7-0.6,1.2-1.2,1.6s-1.3,0.7-2.1,0.8c-0.7,0.1-1.3,0.1-1.8-0.1c-0.5-0.1-1-0.4-1.4-0.7
           c-0.4-0.3-0.7-0.7-0.9-1.2c-0.2-0.5-0.4-1-0.4-1.6c-0.1-0.8,0-1.5,0.2-2.1c0.2-0.7,0.6-1.2,1.2-1.6S201.3,221.5,202.1,221.4z
            M202.3,222.7c-0.4,0.1-0.8,0.2-1,0.4c-0.3,0.2-0.5,0.4-0.7,0.7c-0.2,0.3-0.3,0.6-0.3,1c-0.1,0.3-0.1,0.7,0,1.1
           c0,0.4,0.1,0.8,0.3,1.1c0.1,0.3,0.3,0.6,0.6,0.8c0.2,0.2,0.5,0.4,0.8,0.5s0.7,0.1,1.1,0.1c0.4,0,0.7-0.2,1-0.4
           c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.3-0.6,0.3-1s0.1-0.7,0-1.1c0-0.4-0.1-0.7-0.3-1c-0.1-0.3-0.3-0.6-0.6-0.8
           c-0.2-0.2-0.5-0.4-0.8-0.5C203.1,222.7,202.7,222.7,202.3,222.7z"
          />
          <path
            fill="#fff"
            d="M197.3,222c0,0.4-0.1,0.8-0.1,1.2c0,0.4-0.1,0.8-0.1,1.3l-0.3,2.7c-0.1,0.5-0.1,1-0.1,1.4
           c0,0.4-0.1,0.8-0.1,1.3c-0.3,0-0.6-0.1-1-0.1s-0.7-0.1-1-0.1c-0.3,0-0.7-0.1-1-0.1c-0.6-0.1-1.1-0.2-1.6-0.4
           c-0.5-0.2-0.8-0.5-1.1-0.9c-0.3-0.4-0.5-0.8-0.6-1.3c-0.1-0.5-0.1-1.1-0.1-1.7c0.1-0.6,0.2-1.1,0.4-1.5c0.2-0.5,0.5-0.9,0.8-1.2
           c0.4-0.3,0.8-0.6,1.4-0.7s1.2-0.2,2-0.1c0.3,0,0.7,0.1,1,0.1c0.3,0,0.6,0.1,0.9,0.1C196.7,221.9,197,221.9,197.3,222z M195.6,223
           l-1.1-0.1c-0.6-0.1-1.1,0-1.5,0.2c-0.4,0.2-0.7,0.5-0.9,0.9s-0.3,0.9-0.4,1.4c0,0.4,0,0.8,0,1.1c0.1,0.3,0.2,0.6,0.3,0.9
           c0.2,0.3,0.4,0.5,0.7,0.6c0.3,0.2,0.7,0.3,1.1,0.3l1.2,0.1c0-0.3,0.1-0.5,0.1-0.8c0-0.3,0.1-0.6,0.1-0.9l0.2-2
           c0-0.3,0.1-0.6,0.1-0.9S195.5,223.3,195.6,223z"
          />
          <path
            fill="#fff"
            d="M190.2,221.2c-0.3,0.4-0.6,0.7-0.9,1.1s-0.6,0.8-0.9,1.1l-1.7,2.3c-0.3,0.4-0.6,0.8-0.9,1.1
           c-0.3,0.3-0.5,0.7-0.8,1l-1.9-0.6c0-0.4,0-0.9,0-1.3s0-0.9,0-1.4l0-2.9c0-0.5,0-0.9,0-1.4c0-0.5,0-1,0-1.4l1.5,0.5
           c0,0.5,0,0.9,0,1.4c0,0.5,0,0.9,0,1.4l-0.1,4.1l0.1,0l2.4-3.3c0.3-0.4,0.5-0.7,0.8-1.1c0.3-0.4,0.6-0.8,0.8-1.1L190.2,221.2z
            M187.9,222.3l-0.5,1.1l-3.5-1.2l0.3-1.2L187.9,222.3z"
          />
          <path
            fill="#fff"
            d="M182.9,218.7l-0.4,0.7c-0.3,0.1-0.6,0.3-1,0.4c-0.4,0.1-0.7,0.3-1.1,0.4c-0.4,0.1-0.7,0.3-1,0.4l-4.2,1.7
           l0.1-0.5l1.8,1.1c0.4,0.2,0.8,0.5,1.2,0.7s0.8,0.5,1.3,0.8l-0.7,1.1l-5.5-3.3l0.5-0.9c0.5-0.2,1-0.4,1.4-0.6
           c0.5-0.2,0.9-0.4,1.4-0.5l4.4-1.7l-0.1,0.5l-1.6-1c-0.3-0.2-0.6-0.3-0.9-0.5c-0.3-0.2-0.6-0.4-0.9-0.6c-0.3-0.2-0.6-0.3-0.8-0.5
           l0.7-1.1L182.9,218.7z"
          />
          <path
            fill="#fff"
            d="M176.4,214.5c-0.3,0.3-0.5,0.7-0.8,1c-0.3,0.3-0.5,0.7-0.8,1l-1.7,2.1c-0.3,0.4-0.6,0.8-0.9,1.1
           c-0.3,0.3-0.5,0.6-0.8,1l-1.2-1c0.3-0.3,0.5-0.7,0.8-1s0.5-0.7,0.9-1.1l1.7-2.1c0.3-0.4,0.6-0.7,0.8-1s0.5-0.6,0.8-1L176.4,214.5z
           "
          />
          <path
            fill="#fff"
            d="M171.1,209.2c0.2,0.3,0.4,0.5,0.6,0.8s0.3,0.6,0.4,0.9c0.1,0.3,0.2,0.5,0.3,0.7l-1.2,0.8
           c-0.1-0.3-0.1-0.6-0.2-0.8s-0.2-0.5-0.4-0.8c-0.1-0.2-0.3-0.5-0.5-0.7c-0.2-0.2-0.4-0.4-0.6-0.5s-0.4-0.2-0.6-0.2
           s-0.4,0.1-0.5,0.2c-0.2,0.1-0.3,0.3-0.3,0.5c0,0.2,0,0.4,0.1,0.7c0.1,0.3,0.2,0.6,0.4,1c0.2,0.5,0.3,0.9,0.4,1.3s0.1,0.7,0,1.1
           c-0.1,0.3-0.3,0.6-0.7,0.9c-0.3,0.3-0.7,0.5-1.1,0.5s-0.8,0-1.2-0.2c-0.4-0.2-0.8-0.5-1.2-1c-0.2-0.2-0.3-0.4-0.4-0.6
           c-0.1-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.2-0.4-0.3-0.6c-0.1-0.2-0.1-0.4-0.2-0.5l1.2-0.8c0,0.3,0.1,0.5,0.2,0.8
           c0.1,0.3,0.2,0.5,0.3,0.7s0.2,0.4,0.4,0.6c0.2,0.2,0.3,0.3,0.5,0.5c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.5-0.2
           c0.2-0.1,0.3-0.3,0.3-0.5c0-0.2,0-0.4-0.1-0.6s-0.2-0.6-0.3-0.9c-0.3-0.6-0.4-1.1-0.5-1.5c-0.1-0.4-0.1-0.8,0.1-1.1
           c0.1-0.3,0.3-0.6,0.7-0.9c0.4-0.3,0.7-0.5,1.1-0.6s0.8,0,1.3,0.2C170.2,208.4,170.7,208.7,171.1,209.2z"
          />
          <path
            fill="#fff"
            d="M167.7,204.7c-0.4,0.2-0.7,0.4-1.1,0.6s-0.7,0.4-1.2,0.7l-2.1,1.2c-0.4,0.2-0.8,0.5-1.2,0.7
           c-0.4,0.2-0.7,0.4-1.1,0.6l0.7-1.1l0.5,0.9c0.2,0.4,0.4,0.7,0.6,1c0.2,0.3,0.3,0.6,0.5,0.8l-1.2,0.7l-3.2-5.7l1.2-0.7
           c0.1,0.3,0.3,0.5,0.5,0.8s0.3,0.6,0.6,1l0.5,0.9l-1.3,0c0.4-0.2,0.7-0.4,1.1-0.6c0.4-0.2,0.8-0.4,1.2-0.7l2.1-1.2
           c0.4-0.2,0.8-0.5,1.2-0.7s0.7-0.4,1.1-0.6L167.7,204.7z"
          />
          <path
            fill="#fff"
            d="M164.6,197.4c0.2,0.7,0.3,1.4,0.2,1.9c-0.1,0.5-0.3,1-0.7,1.3c-0.4,0.4-0.9,0.6-1.5,0.8
           c-0.1,0-0.3,0.1-0.6,0.2c-0.2,0.1-0.5,0.2-0.8,0.2c-0.3,0.1-0.6,0.2-0.8,0.3c-0.5,0.2-0.9,0.3-1.3,0.4c-0.4,0.1-0.8,0.3-1.2,0.4
           l-0.5-1.5c0.4-0.1,0.8-0.3,1.2-0.4c0.4-0.1,0.8-0.3,1.3-0.4l2.1-0.7c0.4-0.1,0.7-0.3,1-0.5c0.2-0.2,0.4-0.4,0.5-0.7s0-0.6-0.1-1
           c-0.1-0.4-0.3-0.7-0.5-0.9c-0.2-0.2-0.5-0.3-0.8-0.3c-0.3,0-0.7,0-1.1,0.2l-2.1,0.7c-0.5,0.2-0.9,0.3-1.3,0.4
           c-0.4,0.1-0.8,0.3-1.2,0.4l-0.5-1.5c0.4-0.1,0.8-0.3,1.2-0.4s0.8-0.3,1.3-0.4c0.3-0.1,0.6-0.2,0.8-0.3s0.5-0.2,0.8-0.2
           c0.2-0.1,0.4-0.1,0.6-0.2c0.6-0.2,1.2-0.2,1.7-0.2c0.5,0.1,1,0.3,1.4,0.7C164,196.1,164.4,196.6,164.6,197.4z"
          />
          <path
            fill="#fff"
            d="M163.2,193.1c-0.4,0-0.8,0.1-1.2,0.1c-0.4,0-0.8,0.1-1.3,0.1l-2.7,0.2c-0.5,0-1,0.1-1.4,0.1s-0.8,0.1-1.3,0.1
           c0-0.3-0.1-0.6-0.1-1c0-0.3-0.1-0.7-0.1-1s-0.1-0.7-0.1-1c-0.1-0.6,0-1.1,0.1-1.6c0.1-0.5,0.4-0.9,0.7-1.3
           c0.3-0.4,0.7-0.6,1.2-0.8s1-0.3,1.6-0.4c0.6,0,1.1,0,1.6,0.1c0.5,0.1,0.9,0.3,1.3,0.6c0.4,0.3,0.7,0.7,1,1.2
           c0.2,0.5,0.4,1.2,0.5,1.9c0,0.3,0.1,0.7,0.1,1c0,0.3,0.1,0.6,0.1,0.9C163.2,192.5,163.2,192.8,163.2,193.1z M161.8,191.7l-0.1-1.1
           c-0.1-0.6-0.2-1.1-0.5-1.5s-0.6-0.6-1-0.7s-0.9-0.2-1.4-0.1c-0.4,0-0.8,0.1-1.1,0.2c-0.3,0.1-0.6,0.3-0.8,0.5
           c-0.2,0.2-0.4,0.5-0.5,0.8c-0.1,0.3-0.1,0.7-0.1,1.1l0.1,1.2c0.3,0,0.5,0,0.8-0.1c0.3,0,0.6-0.1,0.9-0.1l2-0.2
           c0.3,0,0.6-0.1,0.9-0.1S161.6,191.7,161.8,191.7z"
          />
          <path
            fill="#fff"
            d="M162.8,185.2c-0.4,0-0.8-0.1-1.2-0.1s-0.8-0.1-1.3-0.1l-2.7-0.2c-0.5,0-1-0.1-1.4-0.1c-0.4,0-0.8-0.1-1.3-0.1
           l0.1-1.6c0.4,0,0.9,0.1,1.3,0.1s0.9,0.1,1.4,0.1l2.7,0.2c0.5,0,0.9,0.1,1.3,0.1c0.4,0,0.8,0.1,1.2,0.1L162.8,185.2z"
          />
          <path
            fill="#fff"
            d="M163.9,178.6c-0.2,0.7-0.4,1.2-0.7,1.7c-0.3,0.5-0.7,0.8-1.2,1c-0.4,0.2-0.9,0.4-1.4,0.4c-0.5,0-1,0-1.6-0.1
           c-0.7-0.2-1.4-0.5-1.9-0.9c-0.5-0.4-0.9-1-1.1-1.7c-0.2-0.7-0.2-1.4,0-2.3c0.2-0.7,0.4-1.2,0.7-1.6c0.3-0.4,0.7-0.8,1.2-1
           c0.4-0.2,0.9-0.4,1.5-0.4c0.5-0.1,1.1,0,1.6,0.1c0.8,0.2,1.4,0.5,1.9,0.9c0.5,0.4,0.9,1,1.1,1.7
           C164.1,177.1,164.1,177.8,163.9,178.6z M162.7,178.4c0.1-0.4,0.1-0.8,0-1.1c-0.1-0.3-0.2-0.6-0.4-0.9c-0.2-0.3-0.5-0.5-0.8-0.6
           c-0.3-0.2-0.6-0.3-1-0.4c-0.4-0.1-0.8-0.1-1.1-0.1c-0.4,0-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.6c-0.2,0.3-0.4,0.6-0.4,1
           c-0.1,0.4-0.1,0.8,0,1.1c0.1,0.3,0.2,0.6,0.4,0.9c0.2,0.3,0.5,0.5,0.8,0.7c0.3,0.2,0.6,0.3,1,0.4c0.4,0.1,0.7,0.1,1.1,0.1
           c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.6S162.6,178.8,162.7,178.4z"
          />
        </Rotation>
      </g>
    </svg>
  );
}

const roateAnimation = keyframes`
 0% { 
     transform:rotate(0deg) ;
 }
 
 100% {
  transform:rotate(360deg) ;

 }
`;

const Rotation = styled.g`
  transform-origin: 196px 186px;
  animation: ${roateAnimation} 15s linear 0s infinite;
`;
