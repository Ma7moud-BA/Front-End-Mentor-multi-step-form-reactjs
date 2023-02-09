import React from "react";
import checkmark from "../../../assets/images/icon-checkmark.svg";
import Footer from "../../../layout/footer/Footer";
import "./addOns.css";
const AddOns = () => {
	return (
		<div className="pick-addons-container">
			<h1 className="title"> Pick add-ons</h1>
			<p className="description">
				Add-ond help enhancce your gaming experience
			</p>
			<div className="addon-options">
				<div className="addon-option">
					<div className="checkmark-icon-container">
						<img src={checkmark} className="checkmark-icon" />
					</div>
					<div className="addon-details">
						<div className="addon-title">Online service</div>
						<div className="addon-info">Access to multiplyer games</div>
					</div>
					<div className="addon-expense">+$1/mo</div>
				</div>
				<div className="addon-option">
					<div className="checkmark-icon-container">
						<img src={checkmark} className="checkmark-icon" />
					</div>
					<div className="addon-details">
						<div className="addon-title">Larger storage</div>
						<div className="addon-info">Extra 1TB of cloud save</div>
					</div>
					<div className="addon-expense">+$2/mo</div>
				</div>
				<div className="addon-option">
					<div className="checkmark-icon-container">
						<img src={checkmark} className="checkmark-icon" />
					</div>
					<div className="addon-details">
						<div className="addon-title">Customizable Profile</div>
						<div className="addon-info">Custome theme on you profile</div>
					</div>
					<div className="addon-expense">+$1/mo</div>
				</div>
			</div>
			<Footer showGoBack={true}> </Footer>
		</div>
	);
};

export default AddOns;
