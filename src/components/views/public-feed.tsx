import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ArticlePairData } from "@/types";
import ArticlePair from "../feed/article-pair";
import backendRequest from "../utils/backend-requester";

async function getArticles(
	fetchHook: (body:{})=>Promise<Response>,
	callback: Dispatch<SetStateAction<ArticlePairData[] | undefined>>
): Promise<void> {
	
	const response = await fetchHook({})
	const json = await response.json()
	callback(json)
}

export default function PublicFeed(){
	const [articles, setArticles] = useState<Array<ArticlePairData>>()
	const AuthenticatedFetch = backendRequest()

	useEffect(() =>{
		getArticles(AuthenticatedFetch, setArticles)
	},[])

	return(
		<div className="flex flex-col items-center my-10">
			<h2 className="text-3xl font-bold text-primary">Public Unbiased</h2>
			<div className="transition transition-all ease-in-out flex flex-col space-y-8">
				{articles?.map(articlePair=>(
					articlePair !== undefined && <ArticlePair	articlePair={articlePair}/>
				))}
			</div>
		</div>
	)
}
