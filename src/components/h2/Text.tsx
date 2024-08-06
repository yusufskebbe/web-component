import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-text',

  shadow: true,
})
export class Button {
  render() {
    return <h2>Test Text</h2>;
  }
}
