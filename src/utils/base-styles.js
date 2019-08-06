import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

const DefaultStyles = createGlobalStyle`
  :root {
    --baseFont: system-ui;
    --lightgray: #f6f6f6;
    --gray: #E3E3E3;
    --darkgray: #9B9B9B;
    --black: #474747 };
    --danger: #ff7b6d;
    --warning: #ffa003;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 1rem;
    font-family: var(--baseFont);
    color: var(--black);
    -webkit-tap-highlight-color: transparent;
  }
  a {
    text-decoration: none;
  }
  input {
    font-family: var(--baseFont);
  }
  button {
    user-select: none;
    &:active {
      transform: scale(0.95);
    }
  }
  .switch-wrapper {
    position: relative;
    & > div {
      position: absolute;
      width: 100%;
    }
  }


`;

const BaseStyles = () => (
  <Fragment>
    <DefaultStyles/>
  </Fragment>
);

export default BaseStyles;
