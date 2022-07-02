import HtmlWebpackPlugin from "html-webpack-plugin";
import styles from "./assets/challangeWidget.css";
// import { challenge } from './global';

// const host = 'https://dev.tanakorn.space/';
const host = 'http://localhost:3000/static/';

export function createTemplate(challenge: challenge) {
  const template = document.createElement("template");
  /*html*/
  template.innerHTML = `
    <style>${styles.toString()}</style>

    <div class="widget">
    <div class="container">
    <header>
      <small class="challenge-rule">${challenge.rule}</small> <strong id="content" class="challenge-name">${challenge.name}</strong>
      <small class="challenge-win-condition">${challenge.winCondition}</small>
    </header>
    <div class="widget-content-wrapper">
    <iframe class="challenge-content" height="600px" width="900px" src="${host}${challenge.name}" title="description"></iframe>
    </div>
    </div>
    <div class="footer">
      <div class="icons">
        <span class="material-icons-outlined"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />
    </svg></span>
        <span class="material-icons"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 16.97,1 12,1Z" />
    </svg></span>
        <span class="material-icons-outlined"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
    </svg></span>
      </div>
      <button type="button">Skip</button>
    </div>
    </div>
  </div>
  `;

  //   template.innerHTML = `
  //   <style>${styles.toString()}</style>
  //   <div class="widget">
  //     <p class="challenge">${challenge}</p>
  //     <iframe src="https://dev.tanakorn.space/game1/" title="description"></iframe>
  //   </div>
  // `;
  return template;
}
