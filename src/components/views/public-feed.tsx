import { Button } from "../ui/button";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { ArticleData } from "@/types";
import Article from "../feed/article";
import { useEffect, useState } from "react";

async function Articles(): Promise<ArticleData[]> {
	/**
		* Send post request to create article
		*/

	const response = await fetch(`${backendUrl}/articles`, {
		method: "GET",
		headers:{
			"Content-type": "application/json; charset=UTF-8"
		}
	});

	const data: ArticleData[] = await response.json();
	return data
}

export default function PublicFeed(){
	const [articles, setArticles] = useState<Array<ArticleData>>()

	useEffect(() =>{
		Articles().then(result =>{
			setArticles(result)
		})
	},[])

	return(
		<div className="flex flex-col items-center my-10">
			<h2 className="text-3xl font-bold text-primary">Public Unbiased</h2>
			{ articles !== undefined && articles.map(article=>(
				<Article data={article}/>
			))}

		</div>
	)
}
