/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface UiIcon {
        "color": any;
        "icon": string;
        "size": any;
    }
}
declare global {
    interface HTMLUiIconElement extends Components.UiIcon, HTMLStencilElement {
    }
    var HTMLUiIconElement: {
        prototype: HTMLUiIconElement;
        new (): HTMLUiIconElement;
    };
    interface HTMLElementTagNameMap {
        "ui-icon": HTMLUiIconElement;
    }
}
declare namespace LocalJSX {
    interface UiIcon {
        "color"?: any;
        "icon"?: string;
        "size"?: any;
    }
    interface IntrinsicElements {
        "ui-icon": UiIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ui-icon": LocalJSX.UiIcon & JSXBase.HTMLAttributes<HTMLUiIconElement>;
        }
    }
}
