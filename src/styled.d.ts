import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
        base: string;
        upperbase: string;
        semibase: string;
        semilarge: string;
        formsHeading:string;
        large: string;
        medium: string;
        small: string;
    }

    color: {
      whisper: string;
      whisper2: string;
      nero: string;
      nero2: string;
      white: string;
      black: string;
      tangerine: string;
      carrotOrange: string;
      whiteSmoke: string;
      eclipse: string;
      pinkSwan: string;
      gray: string;
      darkerGray: string;
    };
  }
}
