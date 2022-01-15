import { createGlobalStyle, keyframes } from "styled-components";

// skeleton animation
const pulse = keyframes`
0% {
    opacity: 1;
}
50% {
    opacity: 0.6;
}
100% {
    opacity: 1;
}
`;

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "faFont";
    src: url("/fonts/Gandom.ttf") format('truetype');
}

* {
    list-style: none;
    text-decoration: none;
    outline: 0;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

*,
*::after,
*::before {
    box-sizing: border-box;
    font-family: "Poppins", "faFont";
}

html {
    direction: rtl;
}

body {
    font-size: 62.5%;
    direction: rtl;
    background: ${({ theme }) => theme.bgPrimary};
    overflow-x: hidden;
    transition: color 0.5s , background 0.5s;
}

#__next {
    overflow: hidden;
}

.slick-track {
    display: flex;
    align-items: center;
}

.container {
    width: 100%;

    &.center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &.space-top {
        margin-top: 7.5em;
    }

    &.space-bottom {
        margin-bottom: 7.5em;
    }
}

.full-screen {
    width: 100vw;
    height: 100vh;
}

.flex-wrapper {
    width: 100%;
    display: flex;
}

.flex-center {
    justify-content: center;
    align-items: center;
}

.gradiant-text {
    background: linear-gradient(95deg, #059dff 15%, #6549d5 45%, #e33fa1 75%, #fb5343) 98%/200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.latin{
    font-family: "Poppins", sans-serif;
}

.wrapper {
    width: 100%;
    padding: 0 2em;
    margin-left: auto;
    margin-right: auto;
}

@media (min-width: 576px) {
    .wrapper {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .wrapper {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .wrapper {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .wrapper {
        max-width: 1140px;
    }
}

.skeleton-element{
  background: ${({ theme }) => theme.skeletonBg};
  background-repeat: no-repeat;
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
  animation: ${pulse} 2s ease-in-out 0.5s infinite;

  &.strong-bg{
    background: ${({ theme }) => theme.skeletonStrongBg};
  }
}

.hot-toast-container{
    width: auto;
    max-width: 95%;
    font-size: 1.2rem;
    line-height: 1.8rem;
    font-weight: 700;
    padding: 1em 2em;
    background: ${({ theme }) => theme.bgQuinary};
    color: ${({ theme }) => theme.black};
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;

    @media(max-width:576px){
        font-size: 1rem;
    }
}

.not-found__text{
    text-align: center;
    padding: 12em 0 10em 0;

    & p{
        font-size: 2.2rem;
        color: ${({ theme }) => theme.textSecoundary};
    }
}

.grid-card-wrapper{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(8rem,1fr));
    grid-gap: 3em;

    @media (max-width:576px){
        grid-template-columns: repeat(auto-fill,minmax(4rem,1fr));
    }
}

`;

export default GlobalStyles;
