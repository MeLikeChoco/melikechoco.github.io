import { ElementRef } from "@angular/core";
import { NgcCookieConsentConfig } from "ngx-cookieconsent";
import { environment } from "./environments/environment";

export const cookieConsentConfig: NgcCookieConsentConfig = {
    "cookie": {
        "domain": environment.production ? "melikechoco.github.io" : "localhost"
    },
    "position": "top-left",
    "theme": "classic",
    "palette": {
        "popup": {
            "background": "#000000",
            "text": "#ffffff",
            "link": "#ffffff"
        },
        "button": {
            "background": "#f1d600",
            "text": "#000000",
            "border": "transparent"
        }
    },
    "type": "info",
    "content": {
        "message": "The only cookie we use is for site theming purposes.",
        "dismiss": "Got it!",
        "deny": "Refuse cookies",
        "link": "Learn more",
        "href": "https://cookiesandyou.com",
        "policy": "Cookie Policy"
    }
};

export class MockElementRef extends ElementRef {
    constructor() {
        super(undefined);
    }
}