import React, { useEffect, useState } from "react";
import "./navbar.css";
const NavBar = ({ step }) => {
	useEffect(() => {
		changeActiveStep();
	}, [step]);
	const changeActiveStep = () => {
		// console.log(step);
		const nav_step_num = document.querySelectorAll(".nav-page-num");
		nav_step_num.forEach((stepNum) => {
			stepNum.classList.remove("active");
		});

		nav_step_num[step - 1].classList.add("active");
	};
	return (
		<nav className="nav-bar  ">
			<div className="nav-page-container">
				<div className="nav-page-num ">1</div>
				<div className="page-info">
					<span>STEP 1</span>
					<p>YOUR INFO</p>
				</div>
			</div>
			<div className="nav-page-container">
				<div className="nav-page-num">2</div>
				<div className="page-info">
					<span>STEP 2</span>
					<p>SELECT PLAN</p>
				</div>
			</div>
			<div className="nav-page-container">
				<div className="nav-page-num">3</div>
				<div className="page-info">
					<span>STEP 3</span>
					<p>ADD-ONS</p>
				</div>
			</div>
			<div className="nav-page-container">
				<div className="nav-page-num">4</div>
				<div className="page-info">
					<span>STEP 4</span>
					<p>SUMMARY</p>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
