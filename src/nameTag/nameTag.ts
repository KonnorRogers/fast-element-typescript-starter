import { FASTElement, attr, customElement } from '@microsoft/fast-element';

@customElement("name-tag")
export class NameTag extends FASTElement {
  @attr greeting: string = "Hello, I'm a web component";

  greetingChanged() {
    this.shadowRoot!.innerHTML = this.greeting;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "name-tag": NameTag,
  }
}
