import React, { useContext } from "react";
import FormContext from "../../components/form/context/FormContext";

const Footer = () => {
	const { step, handleNextStep, handlePrevStep } = useContext(FormContext);
	if (step == 1) {
		return (
			<div className="footer">
				<button onClick={handleNextStep}> Next Step</button>
			</div>
		);
	} else if (step == 2) {
		return (
			<div className="footer">
				<button onClick={handlePrevStep}>Go Back</button>

				<button onClick={handleNextStep}>Next Step</button>
			</div>
		);
	} else if (step == 3) {
		return (
			<div className="footer">
				<button onClick={handlePrevStep}>Go Back</button>

				<button onClick={handleNextStep}>Next Step</button>
			</div>
		);
	} else if (step == 4) {
		return (
			<div className="footer">
				<button onClick={handlePrevStep}>Go Back</button>

				<button onClick={handleNextStep}>Confirm</button>
			</div>
		);
	}
};

export default Footer;
