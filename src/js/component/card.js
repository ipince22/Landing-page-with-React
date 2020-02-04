import React from "react";

//create your first component
export function Card() {
	return (
		<div className="card" style={{ width: "300px" }}>
			<img
				className="card-img-top"
				alt="..."
				src="https://randomuser.me/api/portraits/women/24.jpg"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
