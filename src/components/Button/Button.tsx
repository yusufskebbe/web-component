import { Component, h } from '@stencil/core';
//Prop, h, Event, EventEmitter;
@Component({
  tag: 'my-button',
  styleUrl: 'Button.css',
  shadow: true,
})
export class Button {
  // @Prop() buttonText: string;
  // @Prop() buttonDisabled: boolean;
  // @Prop() buttonType: string;
  // @Prop() buttonStyle: string;
  // @Event({ bubbles: true, composed: true }) buttonClicked: EventEmitter;

  // onButtonClick() {
  //   this.buttonClicked.emit();
  // }

  render() {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }
}
