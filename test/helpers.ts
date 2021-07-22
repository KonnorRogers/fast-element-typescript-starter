/**
 * This exists because the default `fixture` provided by @open-wc/test-helpers
 *   does not play nicely with FAST element.
 */
export async function fixture<Type extends HTMLElement> (html: string): Promise<Type> {
  const container = document.createElement('div')
  container.dataset.testId = 'test-container'
  container.innerHTML = html
  document.body.appendChild(container)

  window.customElements.upgrade(container)

  // Give the fixture a second to hook into the next microtask and upgrade in the DOM
  await nextMicrotask()

  return container.firstElementChild as Type
}

/**
 * Remove pesky containers we made.
 */
export function cleanUp (): void {
  document.querySelectorAll("[data-testId='test-container']").forEach((el) => {
    el.remove()
  })
}

// Easy helper methods to help us with different scheduled tasks.
export async function nextAnimationFrame (): Promise<void> {
  return await new Promise<void>(resolve => requestAnimationFrame(() => resolve()))
}

export async function nextEventLoopTick (): Promise<void> {
  return await new Promise<void>(resolve => setTimeout(() => resolve(), 0))
}

export async function nextMicrotask (): Promise<void> {
  return await Promise.resolve()
}
