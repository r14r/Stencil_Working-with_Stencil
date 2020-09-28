/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        "first": string;
        "last": string;
        "middle": string;
    }
    interface RatingComponent {
        "maxValue": number;
        "value": number;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLRatingComponentElement extends Components.RatingComponent, HTMLStencilElement {
    }
    var HTMLRatingComponentElement: {
        prototype: HTMLRatingComponentElement;
        new (): HTMLRatingComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "rating-component": HTMLRatingComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        "first"?: string;
        "last"?: string;
        "middle"?: string;
    }
    interface RatingComponent {
        "maxValue"?: number;
        "value"?: number;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "rating-component": RatingComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "rating-component": LocalJSX.RatingComponent & JSXBase.HTMLAttributes<HTMLRatingComponentElement>;
        }
    }
}
