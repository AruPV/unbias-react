import { useState } from "react";
import { Button } from "../ui/button";
import { ArticleData } from "@/types";
import { 
	Accordion, 
	AccordionContent, 
	AccordionItem, 
	AccordionTrigger 
} from "@/components/ui/accordion";

interface props{
	data: ArticleData
	className?: string
}

function Article({data, className}:props){
	const [showMore, setShowMore] = useState(false);
	const html = data.title + data.content

	console.log(data.shock_score)
	
	const toggleShow = ()=>{
		setShowMore(!showMore)
	}

	const isValid = (val:any) =>{
		if (val === undefined) return false
		if (val === null) return false
		return true
	}

	const biased_terms:string[] = isValid(data.top_biased_words) ? data.top_biased_words.slice(0,5) : []

	return(
		<div className={className}>
			<div className={"prose dark:prose-invert my-4 " + (showMore? "" : "line-clamp-[8]")} dangerouslySetInnerHTML={{__html: html}}/>
			<Button className="my-2" variant={"secondary"} onClick={toggleShow}>
				{!showMore? "Show more" : "Show less"}
			</Button>
			<Accordion type="single" defaultValue="item-1" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger className="text-primary font-bold text-xl"> ~ Metrics </AccordionTrigger>
					<AccordionContent className="text-primary">
						<ul>
							<li>🌡️<b>Bias Score</b>: {isValid(data.bias_score) && data.bias_score}</li>
							<li>⚡<b>Shock Score</b>: {isValid(data.shock_score) && data.shock_score}</li>
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
