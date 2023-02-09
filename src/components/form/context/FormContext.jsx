import React, { useState, useEffect } from "react";
const FormContext = React.createContext();
export const FormProvide = ({ children }) => {
	//start step context and its handlers
	const [step, setStep] = useState(3);
	const handleNextStep = () => {
		setStep(step + 1);
	};
	const handlePrevStep = () => {
		setStep(step - 1);
	};
	const handlesetStep = () => {
		setStep(2);
	};
	// end step context
	// start personalInfo context and its handlres
	//TODO: fill the personalinfo state from the PersonalInfo component
	const [personalInfo, setPersonalInfo] = useState({
		name: "",
		email: "",
		phoneNumber: "",
	});
	const handleSetPersonalInfo = (nameValue, emailValue, phoneNumberValue) => {
		setPersonalInfo({
			...personalInfo,
			name: nameValue,
			email: emailValue,
			phoneNumber: phoneNumberValue,
		});
	};
	//start Select Plan contexts
	//FIXME: make it dynamic later by making an object for each plan in the SelectPlan component but it works for now
	const [plan, setPlan] = useState({ name: "arcade", price: `$90/yr` });
	const [paymentMethod, setPaymentMethod] = useState("yearly");
	const handleSetPlan = (newPlan, price) => {
		if (paymentMethod === "yearly") {
			switch (newPlan) {
				case "arcade":
					setPlan({ name: newPlan, price: `$${price}/yr` });
					break;
				case "advanced":
					setPlan({ name: newPlan, price: `$${price}/yr` });
					break;
				case "pro":
					setPlan({ name: newPlan, price: `$${price}/yr` });
					break;
			}
		} else {
			switch (newPlan) {
				case "arcade":
					setPlan({ name: newPlan, price: `$${price / 10}/mo` });
					break;
				case "advanced":
					setPlan({ name: newPlan, price: `$${price / 10}/mo` });
					break;
				case "pro":
					setPlan({ name: newPlan, price: `$${price / 10}/mo` });
					break;
			}
		}
	};
	const handleSetPaymentMethod = () => {
		paymentMethod == "yearly"
			? setPaymentMethod("monthly")
			: setPaymentMethod("yearly");
	};
	//end select plan context
	//start pick add-ons context
	const [addonOption, setAddonOption] = useState([
		{ name: "online_service", expense: 1, checked: false },
		{ name: "larger_storage", expense: 2, checked: false },
		{ name: "customizable_profile", expense: 1, checked: false },
	]);
	//FIXME: let this function recievers the add on option and toggle its checked status
	// const handleSetAddonOption = (selectedOpption) => {
	// 	setAddonOption({ ...addonOption, checked: !checked });
	// };

	//end pick add-ons context

	return (
		<FormContext.Provider
			value={{
				step: step,
				handleNextStep: handleNextStep,
				handlePrevStep: handlePrevStep,
				handlesetStep: handlesetStep,
				personalInfo: personalInfo,
				handleSetPersonalInfo: handleSetPersonalInfo,
				plan: plan,
				paymentMethod: paymentMethod,
				handleSetPlan: handleSetPlan,
				handleSetPaymentMethod: handleSetPaymentMethod,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormContext;
