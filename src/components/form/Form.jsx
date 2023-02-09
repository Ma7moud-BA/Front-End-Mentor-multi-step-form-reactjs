import React, { useContext, useState } from "react";
import NavBar from "../../layout/NavBar";
import ThankYou from "../thank-you/ThankYou";
import FormContext from "./context/FormContext";
import PresonalInfo from "./form-part-1/PresonalInfo";
import SelectPlan from "./form-part-2/SelectPlan";
import AddOns from "./form-part-3/AddOns";
import Summary from "./form-part-4/Summary";

const Form = () => {
	const { step } = useContext(FormContext);
	// step number to change the form steps

	switch (step) {
		case 1:
			return (
				<>
					<NavBar step={step}></NavBar>
					<PresonalInfo></PresonalInfo>
					{step}
				</>
			);
			break;
		case 2:
			return (
				<>
					<NavBar step={step}></NavBar>
					<SelectPlan></SelectPlan>
				</>
			);
		case 3:
			return (
				<>
					<NavBar step={step}></NavBar>
					<AddOns></AddOns>
				</>
			);
		case 4:
			return (
				<>
					<NavBar step={step}></NavBar>
					<Summary></Summary>
				</>
			);
		case 5:
			return <ThankYou></ThankYou>;
	}
};

export default Form;
