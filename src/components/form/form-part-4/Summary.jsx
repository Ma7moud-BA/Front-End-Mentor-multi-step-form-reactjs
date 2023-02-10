import React, { useCallback, useContext } from "react";
import Footer from "../../../layout/footer/Footer";
import FormContext from "../context/FormContext";
import "./summary.css";
const Summary = () => {
	const { plan, handlesetStep, paymentMethod, addOns, totalPrice } =
		useContext(FormContext);
	return (
		<div className="summary-container">
			<h1 className="title">Finishing up</h1>
			<p className="desc">
				Double-check everything looks OK before confirming.
			</p>
			<div className="selected">
				<div className="plan-selection">
					<div>
						<div className="plan-title">
							{plan.name}({paymentMethod})
						</div>
						<button onClick={handlesetStep}>change</button>
					</div>
					<div className="plan-price">
						{" "}
						{paymentMethod == "yearly"
							? `+$${plan.price * 10}/yr`
							: `+$${plan.price}/mo`}
					</div>
				</div>
				<div className="addons-selection">
					{addOns.map((addon) =>
						addon.isChecked ? (
							<div className="addon-summary-container" key={addon.id}>
								<div className="addon-title">{addon.title}</div>
								<div className="addon-price">
									{" "}
									{paymentMethod == "yearly"
										? `+$${addon.price * 10}/yr`
										: `+$${addon.price}/mo`}
								</div>
							</div>
						) : null
					)}
				</div>
			</div>
			<div className="total">
				{paymentMethod == "yearly" ? (
					<div className="total-container">
						<span className="total-title">Total(yearly)</span>
						<span className="total-price">{`+$${
							(totalPrice + plan.price) * 10
						}/yr`}</span>
					</div>
				) : (
					<div className="total-container">
						<span className="total-title">Total(monthly)</span>
						<span className="total-price">{`+$${
							totalPrice + plan.price
						}/mo`}</span>
					</div>
				)}
			</div>
			<Footer showGoBack={true}></Footer>
		</div>
	);
};

export default Summary;
