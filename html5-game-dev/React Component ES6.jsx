"use strict";

import React from "react";
import PropTypes from "prop-types";

//import { Button } from "react-bootstrap";
//import "./style.css";

//@observer
export default class Component extends React.Component {
	constructor(props) {
		super(props);
	}

	clickHandler = () => {
		console.log("I have been clicked!");
	};

	render() {
		return (
			<div className="parent-container">
				<div className="child-container" onClick={this.clickHandler}>
					{this.props}
				</div>
			</div>
		);
	}
}
