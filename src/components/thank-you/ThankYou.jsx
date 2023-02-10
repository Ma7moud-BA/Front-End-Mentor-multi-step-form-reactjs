import React from "react";
import "./thankYou.css";
import thankYouIcon from "../../assets/images/icon-thank-you.svg";
const ThankYou = () => {
	return (
		<div className="thank-you-container">
			<div className="thank-you-icon">
				<img src={thankYouIcon} alt="" />
			</div>
			<div className="title">Thank you!</div>
			<p className="desc">
				Thanks for confirming you subscription! We hope you have fun using our
				platform. if you ever need support, please feel free to email us at
				mahmoudbanyamer@gmail.com
			</p>
		</div>
	);
};

export default ThankYou;
