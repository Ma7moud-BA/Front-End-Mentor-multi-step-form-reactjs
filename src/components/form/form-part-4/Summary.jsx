import React, { useCallback, useContext } from "react";
import Footer from "../../../layout/footer/Footer";
import FormContext from "../context/FormContext";
import "./summary.css";
const Summary = () => {
	const { plan, handlesetStep } = useContext(FormContext);
	return (
		<div className="summary-container">
			<h1 className="title">Finishing up</h1>
			<p className="desc">
				Double-check everything looks OK before confirming.
			</p>
			<div className="selected">
				<div className="plan-selection">
					<div>
						<div className="plan-title">{plan.name}</div>
						<button onClick={handlesetStep}>change</button>
					</div>
					<div className="plan-price">{plan.price}</div>
				</div>
				<div className="addons-selection"></div>
			</div>
			<div className="total">
				<span> Total(per month)</span>
				<span className="total-price">{plan.price}</span>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Summary;
