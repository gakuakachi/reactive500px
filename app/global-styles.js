import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Raleway', sans-serif;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Raleway', sans-seri !important;
    font-weight: 200;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font-family: 'Raleway', sans-serif !important;
      font-weight: 200;
      font: inherit;
      vertical-align: baseline;
      box-sizing: border-box;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  a {
      color: #000000;
      text-decoration: none !important;
      &:hover, &:visited, &:link {
          text-decoration: none !important;
          opacity: none !important;
      }
  }


`;
