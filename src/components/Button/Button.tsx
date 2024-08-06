import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'Button.css',
  shadow: true,
})
export class Button {
  @Prop() buttonText: string;
  @Prop() buttonDisabled: boolean;
  @Prop() buttonType: string;
  @Prop() buttonStyle: string;
  @Event({ bubbles: true, composed: true }) buttonClicked: EventEmitter;

  onButtonClick() {
    this.buttonClicked.emit();
  }

  render() {
    return (
      <button class={this.buttonStyle} disabled={this.buttonDisabled} onClick={this.onButtonClick.bind(this)}>
        {this.buttonText}
      </button>
    );
  }
}
