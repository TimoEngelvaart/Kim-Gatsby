import { createGlobalStyle } from 'styled-components';

import FuturaLight from '../assets/fonts/Futura-Light-font.woff';
import FuturaHeavy from '../assets/fonts/Futura-Heavy-font.woff';
import FuturaMedium from '../assets/fonts/futura-medium-bt.woff';

import font from '../assets/fonts/frenchfries.woff';

const Typography = createGlobalStyle`
 @font-face {
    font-family: FrenchFries;
    src: url(${font});
  }
  @font-face {
    font-family: FuturaLight;
    src: url(${FuturaLight});
  }
  @font-face {
    font-family: FuturaHeavy;
    src: url(${FuturaHeavy});
  }
  @font-face {
    font-family: FuturaMedium;
    src: url(${FuturaMedium});
  }


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: FuturaHeavy;
  font-size: 1rem;
  line-height: 1.4;
}

a {
  text-decoration: none;
}

.container {
  padding: 0 1rem;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
`;

export default Typography;
