import { createTemplate } from './template';


const WC_TAG_NAME = 'challenge-widget';
export default function createComponent(challenge: challenge) {
    const template = createTemplate(challenge);
    class ChallengeWidgetElement extends HTMLElement {
        constructor() {
            super();
            const shadowDOM = this.attachShadow({ mode: 'open' });
            shadowDOM.appendChild(template.content.cloneNode(true));
        }
        get challenge(): string {
            const challengeEl = this.shadowRoot?.querySelector('.challenge-name');
            return challengeEl?.textContent || '';
        }
        set challenge(val: string) {
            var challengeEl = this.shadowRoot?.querySelector('.challenge-name');
            if (challengeEl) {
                challengeEl.textContent = val;
            }
        }
    }
    if (!customElements.get(WC_TAG_NAME)) {
        customElements.define(WC_TAG_NAME, ChallengeWidgetElement);
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