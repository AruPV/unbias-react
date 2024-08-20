import { useState } from "react";
import { Button } from "../ui/button";
import { ArticleData } from "@/types";
import { 
	Accordion, 
	AccordionContent, 
	AccordionItem, 
	AccordionTrigger 
} from "@radix-ui/react-accordion";

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
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-primary font-bold text-xl"> ~ Metrics </AccordionTrigger>
					<AccordionContent>
						<ul>
							<li>🌡️<b>Bias Score</b>: {data.bias_score}</li>
							<li>⚡<b>Shock Score</b>: {data.shock_score}</li>
							<li>🔝<b>Biased Terms</b>: <ul>{biased_terms.map(term =>(
								<li className="pl-8">• <i>{term}</i></li>
							))}</ul></li>
						</ul>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)	
}

export default Article
