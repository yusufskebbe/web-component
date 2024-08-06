import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-text',
  styleUrl: 'Text.css',

  shadow: true,
})
export class Button {
  render() {
    return (
      <h2>
        <slot></slot>
      </h2>
    );
  }
}
