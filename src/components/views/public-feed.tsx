import { Link } from "react-router-dom"
import { Button } from "../ui/button";

export default function PublicFeed(){
	return(
		<div className="flex flex-col items-center">
			<p className="my-5 text-primary">
				<i className="">This page is a WIP (but the button works!)</i>
				<br />
				<i>Here will be the most recent articles</i>
			</p>

			<Link to={"/new"}>
				<Button>
					New
				</Button>
			</Link>
		</div>
	)
}
