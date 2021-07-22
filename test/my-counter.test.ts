// import { assert } from '@open-wc/testing'
// import { fixture } from './helpers'

// if this gets changed to `import "../src/my-counter` everything works.
import { MyCounter } from '../src/my-counter'

describe('MyCounter', () => {
  it('increases the count on button click', async () => {
    // Uncomment below, "button" / shadowRoot will be defined.
    // console.log(MyCounter)
    const container = document.createElement('div')
    container.dataset.testId = 'test-container'
    container.innerHTML = '<my-counter></my-counter>'
    document.body.appendChild(container)

    const el = container.firstElementChild as MyCounter
    const button = el?.shadowRoot?.querySelector('button[title="increment"]') as HTMLButtonElement
    button.click()
  })

  // it('decreases the count on button click', async () => {
  //   const el = await fixture<MyCounter>('<my-counter></my-counter>')
  //   const button = el.shadowRoot?.querySelector('button[title="decrement"]') as HTMLButtonElement
  //   button.click()

  //   assert.equal(el.count, -1)
  // })

  // it('resets to 0', async () => {
  //   const el = await fixture<MyCounter>('<my-counter count="5"></my-counter>')
  //   assert.equal(el.count, 5)
  //   const button = el.shadowRoot?.querySelector('button[title="reset"]') as HTMLButtonElement
  //   button.click()
  //   assert.equal(el.count, 0)
  // })
})
