// import { challenge } from './global';
import { createTemplate } from './template';


const WC_TAG_NAME = 'challenge-widget';

const stupid_run: challenge = {
    name: "stupid_run",
    rule: "Test rule",
    winCondition: "test message",
};

const stupid_block: challenge = {
    name: "stupid_block",
    rule: "Test rule",
    winCondition: "test message",
};

const stupid_bird: challenge = {
    name: "stupid_bird",
    rule: "Test rule",
    winCondition: "test message",
};

const stupid_memory: challenge = {
    name: "stupid_memory",
    rule: "Test rule",
    winCondition: "test message",
};

const challengeObjectByName = new Map();
challengeObjectByName.set(stupid_memory.name, stupid_memory);
challengeObjectByName.set(stupid_bird.name, stupid_bird);
challengeObjectByName.set(stupid_block.name, stupid_block);
challengeObjectByName.set(stupid_run.name, stupid_run);



const defaultChallenge = stupid_memory;
export default function createComponent(challenge: challenge) {
    // //add default challenge
    if (challenge == null)
        // challenge = challengeObjectByName.get(getRandomChallengeKey());
        challenge = stupid_bird
    const template = createTemplate(challenge)
    class ChallengeWidgetElement extends HTMLElement {
        constructor() {
            super();
            const shadowDOM = this.attachShadow({ mode: 'open' });
            shadowDOM.appendChild(template.content.cloneNode(true));

        }
        
        get challenge(): challenge {
            return {
                name: this.shadowRoot?.querySelector('.challenge-name')?.textContent || '',
                rule: this.shadowRoot?.querySelector('.challenge-name')?.textContent || '',
                winCondition: this.shadowRoot?.querySelector('.challenge-name')?.textContent || '',
                // src: this.shadowRoot?.querySelector('.challenge-content')?.getAttribute('src') || ''
            }
        }
        set challenge(val: challenge) {
            var challengeName = this.shadowRoot?.querySelector('.challenge-name');
            if (challengeName) {
                challengeName.textContent = val.name;
            }
            var challengeRule = this.shadowRoot?.querySelector('.challenge-rule');
            if (challengeRule) {
                challengeRule.textContent = val.rule;
            }
            var challengeWinCondition = this.shadowRoot?.querySelector('.challenge-win-condition');
            if (challengeWinCondition) {
                challengeWinCondition.textContent = val.winCondition;
            }
            // var challengeContent = this.shadowRoot?.querySelector('.challenge-content');
            // if (challengeContent) {
            //     challengeContent.setAttribute('src', val.src);
            // }
        }

        reset() {
            console.log('reset');
            template.remove();   
        }
    }

    if (!customElements.get(WC_TAG_NAME)) {
        customElements.define(WC_TAG_NAME, ChallengeWidgetElement);
    }
    // create an instance of the component
    // ? we want to swap it to append child
    const componentInstance = document.createElement(WC_TAG_NAME, {
        is: WC_TAG_NAME,
    });

    // mount the component instance in the body element
    const container = document.body;
    container.appendChild(componentInstance);
    // returning the instance will be useful later
    return componentInstance;
}
// get random item from a Set
function getRandomChallengeKey() {
    let items = Array.from(challengeObjectByName.keys());
    return items[Math.floor(Math.random() * items.length)];
}
