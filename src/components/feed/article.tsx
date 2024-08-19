import { useState } from "react";
import { Button } from "../ui/button";
import { ArticleData } from "@/types";

interface props{
	data: ArticleData
}

function Article({data}:props){
	const [showMore, setShowMore] = useState(false);
	const html = data.title + data.content

	console.log(data.shock_score)
	
	const toggleShow = ()=>{
		setShowMore(!showMore)
	}

	const biased_terms:string = data.top_biased_words.join(', ')

	return(
		<div className="prose dark:prose-invert my-4">
			<div className={"" + (showMore? "" : "line-clamp-[8]")} dangerouslySetInnerHTML={{__html: html}}/>
			<Button className="my-2" variant={"secondary"} onClick={toggleShow}>
				{!showMore? "Show more" : "Show less"}
			</Button>
			<p>Bias Score: {data.bias_score}</p>
			<p>Shock Score: {data.shock_score}</p>
			<p>Top Biased Terms: {biased_terms}</p>
		</div>
	)	
}

export default Article
