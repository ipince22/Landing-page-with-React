import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<div class="container">
				<Navbar />
				<Jumbotron />
				<div className="d-flex justify-content-center">
					<Card
						img={"https://randomuser.me/api/portraits/women/24.jpg"}
						body={"my firts card"}
						title={"Laura Sosa"}
						link={"http://www.google.com"}
						buttoncolor={"primary"}
					/>
					<Card
						img={"https://randomuser.me/api/portraits/women/25.jpg"}
						body={"my second card"}
						title={"Lesli Perona"}
						link={"http://www.reactjs.org"}
						buttoncolor={"info"}
					/>
					<Card
						img={"https://randomuser.me/api/portraits/women/26.jpg"}
						body={"my third card"}
						title={"Martha Sanchez"}
						link={"http://www.amazon.com"}
						buttoncolor={"success"}
					/>
					<Card
						img={"https://randomuser.me/api/portraits/women/27.jpg"}
						body={"my fourth card"}
						title={"Ana Laura Cepeda"}
						link={"http://www.github.com"}
						buttoncolor={"danger"}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
}
