import React, { useState, useRef } from "react";
import Footer from "../../../layout/footer/Footer";
import NavBar from "../../../layout/NavBar";
import "./personalInfo.css";
const PresonalInfo = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const phoneNumberRef = useRef();
	// const nameValue = nameRef.current.value;
	// const emailValue = emailRef.current.value;
	// const phoneNumberValue = phoneNumberRef.current.value;

	return (
		<div className="form-container">
			<h1 className="title">Personal info</h1>
			<p className="desc">
				Please provide your name, email address, and phone number.
			</p>
			<label htmlFor="name">Name</label>
			<input
				type="text"
				name="name"
				ref={nameRef}
				placeholder="e.g MahmoudBA"
			/>
			<label htmlFor="email">Email Address</label>
			<input
				type="text"
				name="email"
				ref={emailRef}
				placeholder="mahmoudbanyamer@gmail.com"
			/>
			<label htmlFor="phoneNumber">Phone Number</label>
			<input
				type="text"
				name="phoneNumber"
				ref={phoneNumberRef}
				placeholder="e.g +1 234 567 890"
			/>
			<Footer showGoBack={false}> </Footer>
		</div>
	);
};

export default PresonalInfo;
