import React, { useContext, useState } from "react";
import NavBar from "../../layout/NavBar";
import ThankYou from "../thank-you/ThankYou";
import FormContext from "./context/FormContext";
import PresonalInfo from "./form-part-1/PresonalInfo";
import SelectPlan from "./form-part-2/SelectPlan";
import AddOns from "./form-part-3/AddOns";
import Summary from "./form-part-4/Summary";

import "./form.css";
const Form = () => {
	const { step } = useContext(FormContext);
	// step number to change the form steps

	switch (step) {
		case 1:
			return (
				<div className="form">
					<NavBar step={step}></NavBar>
					<PresonalInfo></PresonalInfo>
				</div>
			);
			break;
		case 2:
			return (
				<div className="form">
					<NavBar step={step}></NavBar>
					<SelectPlan></SelectPlan>
				</div>
			);
		case 3:
			return (
				<div className="form">
					<NavBar step={step}></NavBar>
					<AddOns></AddOns>
				</div>
			);
		case 4:
			return (
				<div className="form">
					<NavBar step={step}></NavBar>
					<Summary></Summary>
				</div>
			);
		case 5:
			return (
				<div className="form">
					<ThankYou></ThankYou>
				</div>
			);
	}
};

export default Form;
