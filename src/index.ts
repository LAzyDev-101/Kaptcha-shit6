import { createTemplate } from './template';

const WC_TAG_NAME = 'greeter-widget';
export default function createComponent(greeting: string) {
    const template = createTemplate(greeting);
    class GreeterWidgetElement extends HTMLElement {
        constructor() {
            super();
            const shadowDOM = this.attachShadow({ mode: 'open' });
            shadowDOM.appendChild(template.content.cloneNode(true));
            //set kaptcha_id on session storage
            sessionStorage.setItem('kaptcha_id',generateString(5))
        }
        get greeting(): string {
            const greetingEl = this.shadowRoot?.querySelector('.greeting');
            return greetingEl?.textContent || '';
        }
        set greeting(val: string) {
            const greetingEl = this.shadowRoot?.querySelector('.greeting');
            if (greetingEl) {
                greetingEl.textContent = val;
            }
        }
    }
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const generateString = (length:number) => {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }

    if (!customElements.get(WC_TAG_NAME)) {
        customElements.define(WC_TAG_NAME, GreeterWidgetElement);
    }
    // create an instance of the component
    const componentInstance = document.createElement(WC_TAG_NAME, {
        is: WC_TAG_NAME,
    });
    // mount the component instance in the body element
    const container = document.body;
    container.appendChild(componentInstance);
    // returning the instance will be useful later
    return componentInstance;
}
