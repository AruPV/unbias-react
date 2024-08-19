import { useState } from "react";
import { Button } from "../ui/button";

interface props{
	html: string,
}

function Article({html}: props){
	const [showMore, setShowMore] = useState(false);
	
	const toggleShow = ()=>{
		setShowMore(!showMore)
	}

	return(
		<div className="">
			<div className={"prose dark:prose-invert " + (showMore? "" : "line-clamp-[8]")} dangerouslySetInnerHTML={{__html: html}}/>
			<Button className="my-2" variant={"secondary"} onClick={toggleShow}>
				{!showMore? "Show more" : "Show less"}
			</Button>
		</div>
	)	
}

export default Article
