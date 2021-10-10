import { css } from '@microsoft/fast-element'

export const normalize = css`
  :host {
    position: relative;
    box-sizing: border-box;
  }
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
  [hidden] {
    display: none !important;
  }
  button {
    cursor: pointer;
  }
`
