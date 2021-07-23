import { fixture, assert } from '@open-wc/testing'

// if this gets changed to `import "../src/my-counter` everything works.
import { MyCounter } from '../src/my-counter'

const tag = new MyCounter().tagName

describe('MyCounter', () => {
  it('increases the count on button click', async () => {
    const el = await fixture<MyCounter>(`<${tag}></${tag}>`)
    const button = el.shadowRoot?.querySelector('button[title="increment"]') as HTMLButtonElement
    button.click()
    assert.equal(el.count, 1)
    await assert.isAccessible(el)
  })

  it('decreases the count on button click', async () => {
    const el = await fixture<MyCounter>(`<${tag}></${tag}>`)
    const button = el.shadowRoot?.querySelector('button[title="decrement"]') as HTMLButtonElement
    button.click()

    assert.equal(el.count, -1)
  })

  it('resets to 0', async () => {
    const el = await fixture<MyCounter>(`<${tag} count="5"></${tag}>`)
    assert.equal(el.count, 5)

    const button = el.shadowRoot?.querySelector('button[title="reset"]') as HTMLButtonElement
    button.click()
    assert.equal(el.count, 0)
  })
})
