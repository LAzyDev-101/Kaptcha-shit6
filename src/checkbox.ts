import HtmlWebpackPlugin from "html-webpack-plugin";
import styles from "./assets/checkbocWidget.css";

export function createCheckbox() {
  const template = document.createElement("checkbox");
  /*html*/
  template.innerHTML = `
    <style>${styles.toString()}</style>

    <div class="captcha">
	<div class="spinner">
		<label>
			<input type="checkbox" onclick="$(this).attr('disabled','disabled');">
			<span class="checkmark"><span>&nbsp;</span></span>
		</label>
	</div>
	<div class="text">
		I'm not a robot
	</div>
	<div class="logo">
		<img src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/"/>
		<p>reCAPTCHA</p>
		<small>Privacy - Terms</small>
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
