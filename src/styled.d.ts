import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      [key: string]: string;
    }

    color: {
      [key: string]: string;
    };
  }
}
