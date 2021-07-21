import { FASTElement, html, attr, customElement } from '@microsoft/fast-element'
import type { ViewTemplate } from '@microsoft/fast-element'

import { styles } from './styles'

const template: ViewTemplate = html<MyCounter>`
  <div class="counter__current">
    Count: ${x => x.count}
  </div>

  <button @click="${x => x.increment()}" class="counter__increment">
    Add
  </button>

  <button @click="${x => x.decrement()}" class="counter__decrement">
    Subtract
  </button>

  <button @click="${x => x.reset()}" class="counter__reset">
    Reset
  </button>
`

@customElement({
  name: 'my-counter',
  template,
  styles
})
export class MyCounter extends FASTElement {
  @attr count: number = 0

  increment (): void {
    this.count += 1
  }

  decrement (): void {
    this.count -= 1
  }

  reset (): void {
    this.count = 0
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-counter': MyCounter
  }
}
