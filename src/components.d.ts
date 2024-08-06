/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
        "buttonDisabled": boolean;
        "buttonStyle": string;
        "buttonText": string;
        "buttonType": string;
    }
}
export interface MyButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyButtonElement;
}
declare global {
    interface HTMLMyButtonElementEventMap {
        "buttonClicked": any;
    }
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyButtonElementEventMap>(type: K, listener: (this: HTMLMyButtonElement, ev: MyButtonCustomEvent<HTMLMyButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyButtonElementEventMap>(type: K, listener: (this: HTMLMyButtonElement, ev: MyButtonCustomEvent<HTMLMyButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        "buttonDisabled"?: boolean;
        "buttonStyle"?: string;
        "buttonText"?: string;
        "buttonType"?: string;
        "onButtonClicked"?: (event: MyButtonCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
        }
    }
}
