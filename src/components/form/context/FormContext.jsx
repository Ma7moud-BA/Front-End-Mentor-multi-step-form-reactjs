import React, { useState, useEffect } from "react";
const FormContext = React.createContext();

export const FormProvide = ({ children }) => {
	//start step context and its handlers
	const [step, setStep] = useState(1);
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
	const [plan, setPlan] = useState({ name: "arcade", price: 9 });
	const [paymentMethod, setPaymentMethod] = useState("yearly");
	const handleSetPlan = (newPlan, price) => {
		if (paymentMethod === "yearly") {
			switch (newPlan) {
				case "arcade":
					setPlan({ name: newPlan, price: price });
					break;
				case "advanced":
					setPlan({ name: newPlan, price: price });
					break;
				case "pro":
					setPlan({ name: newPlan, price: price });
					break;
			}
		} else {
			switch (newPlan) {
				case "arcade":
					setPlan({ name: newPlan, price: price });
					break;
				case "advanced":
					setPlan({ name: newPlan, price: price });
					break;
				case "pro":
					setPlan({ name: newPlan, price: price });
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

	let [addOns, setAddOns] = useState([
		{
			id: 1,
			title: "Online sevice",
			desc: "Access to multiplyer games",
			price: 1,
			isChecked: false,
		},
		{
			id: 2,
			title: "Larger storage",
			desc: "Extra 1TB of cloud save",
			price: 2,
			isChecked: true,
		},
		{
			id: 3,
			title: "Customizable profile",
			desc: "Custome theme on you profile",
			price: 1,
			isChecked: false,
		},
	]);
	const handleSetAddOn = (selected) => {
		console.log(selected);
		// get the selected addon from the AddOns.jsx components then updated the a
		// toggle the is checked property then make a newAddons array
		// note: i think there is a better approach but it works for now
		let selectedAddon = addOns.find((addon) => addon.id == selected);
		selectedAddon.isChecked = !selectedAddon.isChecked;
		const newAddOns = addOns.map((addon) => {
			if (addon == selected) {
				return { ...addon };
			} else {
				return addon;
			}
		});
		setAddOns(newAddOns);
	};

	//end pick add-ons context

	//summary
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let result = 0;
		addOns.forEach((addon) =>
			addon.isChecked ? (result += addon.price) : (result += 0)
		);
		// console.log(result);
		setTotalPrice(result);
	}, [addOns]);
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
				addOns: addOns,
				handleSetAddOn: handleSetAddOn,
				totalPrice: totalPrice,
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormContext;
