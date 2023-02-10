import React, { useContext } from "react";
import FormContext from "../../components/form/context/FormContext";
import "./footer.css";
const Footer = () => {
	const { step, handleNextStep, handlePrevStep } = useContext(FormContext);
	if (step == 1) {
		return (
			<div className="footer">
				<button style={{ visibility: "hidden" }}></button>
				<button onClick={handleNextStep} className="nextBtn">
					Next Step
				</button>
			</div>
		);
	} else if (step == 2) {
		return (
			<div className="footer">
				<button onClick={handlePrevStep} className="backBtn">
					Go Back
				</button>

				<button onClick={handleNextStep} className="nextBtn">
					Next Step
				</button>
			</div>
		);
	} else if (step == 3) {
		return (
			<div className="footer">
				<button onClick={handlePrevStep} className="backBtn">
					Go Back
				</button>

				<button onClick={handleNextStep} className="nextBtn">
					Next Step
				</button>
			</div>
		);
	} else if (step == 4) {
		return (
			<div className="footer">
				<button onClick={handlePrevStep} className="backBtn">
					Go Back
				</button>

				<button onClick={handleNextStep} className="confirmBtn">
					Confirm
				</button>
			</div>
		);
	}
};

export default Footer;
