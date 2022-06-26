import HtmlWebpackPlugin from 'html-webpack-plugin';
import styles from './assets/index.css';

export function createTemplate(greeting: string) {
    const template = document.createElement('template');
    template.innerHTML = `
    <style>${styles.toString()}</style>
    <div class="widget">
      <p class="greeting">${greeting}</p>
      <iframe src="https://sit.tanakorn.space/game1/" title="description"></iframe>
    </div>
  `;
    return template;
}
