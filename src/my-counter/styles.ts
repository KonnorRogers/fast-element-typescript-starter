import { css } from '@microsoft/fast-element'

export const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    padding: 1em;
  }

  button {
    min-width: 100px;
    padding: 0.25em;
    margin: 0.5em;
  }
`
