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
						body={
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
						}
						title={"Laura Sosa"}
						link={"http://www.google.com"}
						buttoncolor={"primary"}
					/>
					<Card
						img={"https://randomuser.me/api/portraits/women/25.jpg"}
						body={
							"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
						}
						title={"Lesli Perona"}
						link={"http://www.reactjs.org"}
						buttoncolor={"info"}
					/>
					<Card
						img={"https://randomuser.me/api/portraits/women/26.jpg"}
						body={
							"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet"
						}
						title={"Martha Sanchez"}
						link={"http://www.amazon.com"}
						buttoncolor={"success"}
					/>
					<Card
						img={"https://randomuser.me/api/portraits/women/27.jpg"}
						body={
							"t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,"
						}
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
