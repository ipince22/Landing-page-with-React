import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(props) {
	return (
		<div className="card" style={{ width: "300px" }}>
			<img className="card-img-top" alt="..." src={props.img} />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.body}</p>
				<a href={props.link} className={"btn btn-" + props.buttoncolor}>
					Go somewhere
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.string,
	link: PropTypes.string,
	buttoncolor: PropTypes.string
};
//src="https://randomuser.me/api/portraits/women/24.jpg"
