import React, { useContext, useEffect } from "react";
import Footer from "../../../layout/footer/Footer";
import "./SelectPlan.css";
//icons
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";
import FormContext from "../context/FormContext";
const SelectPlan = () => {
	const { plan, paymentMethod, handleSetPlan, handleSetPaymentMethod } =
		useContext(FormContext);
	useEffect(() => {
		const offers = document.querySelectorAll(".offer");
		const arcadePayment = document.getElementById("arcadeInfo");
		const advancedPayment = document.getElementById("advancedInfo");
		const proPayment = document.getElementById("proInfo");
		if (paymentMethod === "yearly") {
			offers.forEach((offer) => {
				offer.classList.remove("hidden");
			});
			arcadePayment.innerText = "$90/yr";
			advancedPayment.innerText = "$120/yr";
			proPayment.innerText = "$150/yr";
		} else {
			offers.forEach((offer) => {
				offer.classList.add("hidden");
			});
			arcadePayment.innerText = "$9/mo";
			advancedPayment.innerText = "$12/mo";
			proPayment.innerText = "$15/mo";
		}
	}, [paymentMethod]);
	const handleChoosePlan = (e) => {
		const divId = e.target.id;
		const arcade = document.getElementById("arcade");
		const advanced = document.getElementById("advanced");
		const pro = document.getElementById("pro");
		const plan_container = document.querySelectorAll(".plan-container");
		plan_container.forEach((container) => {
			container.classList.remove("active");
		});
		switch (divId) {
			case "arcade":
				arcade.classList.add("active");
				handleSetPlan("arcade", 9);
				break;
			case "advanced":
				advanced.classList.add("active");
				handleSetPlan("advanced", 12);
				break;
			case "pro":
				pro.classList.add("active");
				handleSetPlan("pro", 15);
				break;
		}
	};
	return (
		<div className="select-your-plan-container">
			<h1>Select your plan </h1>
			<p>You have the option of monthly or yearly billing</p>
			<div className="plans-container">
				<div
					className="plan-container active"
					onClick={handleChoosePlan}
					id="arcade"
				>
					<div className="plan-icon">
						<img src={arcade} alt="arcade" />
					</div>
					<div className="plan-type">Arcade</div>
					<div className="plan-info" id="arcadeInfo"></div>

					<div className="offer ">2 months free</div>
				</div>
				<div
					className="plan-container"
					onClick={handleChoosePlan}
					id="advanced"
				>
					<div className="plan-icon">
						{" "}
						<img src={advanced} alt="advanced" />
					</div>
					<div className="plan-type">Advanced</div>
					<div className="plan-info" id="advancedInfo"></div>
					<div className="offer">2 months free</div>
				</div>
				<div className="plan-container" onClick={handleChoosePlan} id="pro">
					<div className="plan-icon">
						{" "}
						<img src={pro} alt="pro" />
					</div>
					<div className="plan-type">Pro</div>
					<div className="plan-info" id="proInfo"></div>
					<div className="offer">2 months free</div>
				</div>
			</div>
			<div className="switch-container">
				<span>monthly</span>
				<input
					type="checkbox"
					name="selectPlan"
					onChange={() => {
						handleSetPaymentMethod();
					}}
				/>
				<span>yearly/</span>
			</div>
			<Footer showGoBack={true}></Footer>
		</div>
	);
};

export default SelectPlan;
