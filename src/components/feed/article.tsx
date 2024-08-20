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

	const biased_terms:string[] = data.top_biased_words.slice(0,5)

	return(
		<div className="">
			<div className={"prose dark:prose-invert my-4 " + (showMore? "" : "line-clamp-[8]")} dangerouslySetInnerHTML={{__html: html}}/>
			<Button className="my-2" variant={"secondary"} onClick={toggleShow}>
				{!showMore? "Show more" : "Show less"}
			</Button>
			<h3 className="text-xl font-bold my-2 text-primary">~ Metrics </h3>
			<ul>
				<li>🌡️<b>Bias Score</b>: {data.bias_score}</li>
				<li>⚡<b>Shock Score</b>: {data.shock_score}</li>
				<li>🔝<b>Biased Terms</b>: <ul>{biased_terms.map(term =>(
					<li className="pl-8">• <i>{term}</i></li>
				))}</ul></li>
			</ul>
		</div>
	)	
}

export default Article
