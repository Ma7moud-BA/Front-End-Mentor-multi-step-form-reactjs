import React, { useContext, useState } from "react";
import checkmark from "../../../assets/images/icon-checkmark.svg";
import Footer from "../../../layout/footer/Footer";
import FormContext from "../context/FormContext";
import "./addOns.css";
const AddOns = () => {
	const { paymentMethod, addOns, handleSetAddOn } = useContext(FormContext);
	const handleSelectAddOn = (e) => {
		console.log(e.target);
		if (e.target.classList.contains("addon-option")) {
			const selectedId = e.target.id;
			handleSetAddOn(selectedId);
		}
		//select the id for the container of the addon option with the class fo "addon-option"
		else if (
			e.target.className === "addon-title" ||
			e.target.className === "addon-info" ||
			e.target.className === "checkmark-icon"
		) {
			// console.log(e.target.parentElement.parentElement.id);
			const selectedId = e.target.parentElement.parentElement.id;
			// console.log(selectedAddon.isChecked);
			handleSetAddOn(selectedId);

			// setAddOns([{...addOns, selectedAddon.isChecked}])
		} else if (e.target.className === "checkmark-icon-container") {
			console.log(e.target.parentElement.id);
			const selectedId = e.target.parentElement.id;
			handleSetAddOn(selectedId);
		}
	};

	return (
		<div className="pick-addons-container">
			<h1 className="title"> Pick add-ons</h1>
			<p className="desc">Add-ond help enhancce your gaming experience</p>
			<div className="addon-options">
				{addOns.map((addon) => {
					//render the elements with a checkmark if the is checked property is true
					if (addon.isChecked) {
						return (
							<div
								id={addon.id}
								className="addon-option checked"
								key={addon.title}
								onClick={handleSelectAddOn}
							>
								<div className="checkmark-icon-container checked">
									<img src={checkmark} className="checkmark-icon" />
								</div>
								<div className="addon-details">
									<div className="addon-title">{addon.title}</div>
									<div className="addon-info">{addon.desc}</div>
								</div>
								<div className="addon-expense">
									{paymentMethod == "yearly"
										? `+$${addon.price * 10}/yr`
										: `+$${addon.price}/mo`}
								</div>
							</div>
						);
					} else {
						return (
							<div
								id={addon.id}
								className="addon-option"
								key={addon.title}
								onClick={handleSelectAddOn}
							>
								<div className="checkmark-icon-container"></div>
								<div className="addon-details">
									<div className="addon-title">{addon.title}</div>
									<div className="addon-info">{addon.desc}</div>
								</div>
								<div className="addon-expense">
									{" "}
									{paymentMethod == "yearly"
										? `+$${addon.price * 10}/yr`
										: `+$${addon.price}/mo`}
								</div>
							</div>
						);
					}
				})}
			</div>

			<Footer showGoBack={true}> </Footer>
		</div>
	);
};

export default AddOns;
