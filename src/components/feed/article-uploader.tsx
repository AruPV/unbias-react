import { useState, Dispatch, SetStateAction} from "react";
import {Input} from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import Article from "./article";
import { ArticleData } from "@/types";
import ArticleSkeleton from "./article-skeleton";
import { toast } from "sonner";
import backendRequest from "../utils/backend-requester";

async function processURL(
	url: string,
	addArticles: (newArticle: ArticleData)=>void,
	setIsLoading: Dispatch<SetStateAction<boolean>>,
	isUnbias: boolean,
	authenticatedPost: (body: {}) => Promise<any>,
): Promise<void> {
	/**
		* Deal with async fetching and updating of articles
		*/
	const body = { unbias: isUnbias, url: url }
	setIsLoading(true)

	try{
		toast("Retrieving Article")
		const response = await authenticatedPost(body)
		const data: ArticleData = await response.json()
		addArticles(data)
		toast("Article Retrieved!")
	} catch (error) {
		console.log(error)
		toast("An error ocurred. The article might not be parseable, but do feel free to try again!")
	} finally {
		setIsLoading(false)
	}
}


interface props{ addArticlesCallback?: (article: ArticleData)=>void
}

export default function ArticleUploader({addArticlesCallback}: props){
	const [articles, setArticles] = useState<ArticleData[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [url, setUrl] =	 useState("")
	const authenticatedPost = backendRequest("articles", "POST")

	const	addArticles = (article:ArticleData)=>{
		if (addArticlesCallback !== undefined){
			addArticlesCallback(article)
		}
		setArticles([...articles, article])
	}

	const clearAddArticles = (article:ArticleData) =>{
		if (addArticlesCallback !== undefined){
			addArticlesCallback(article)
		}
		console.log(article)
		setArticles([article])
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setUrl(event.target.value)
	}

	const handleSubmit = ()=>{
		if(isLoading){return}
		setArticles([])
		processURL(url, clearAddArticles, setIsLoading, false, authenticatedPost)
	}


	const handleUnbias = ()=>{
		if(isLoading){return}
		processURL(url, addArticles, setIsLoading, true, authenticatedPost)
	}

  return (
		<div className="flex flex-col items-center">
				<div className='my-3 flex flex-row items-center '>
				<Input 
					onSubmit={handleSubmit} 
					onChange={handleInputChange} 
					type='url' 
					placeholder='Article URL' 
					className='m-2'
				/>
				<Button 
					onClick={handleSubmit} 
					variant={isLoading ? "ghost" : "default"}
				>
					Fetch 
				</Button>
			</div>
			<div className="flex flex-col divide-y space-y-4 divide-dashed">
				{articles.map(article=>{
					return <Article data={article} />
				})}
				{isLoading && <ArticleSkeleton/>}
			</div>
			{articles.length == 1 && 
				<Button 
					onClick={handleUnbias} 
					variant={isLoading ? "ghost" : "default"} 
					className="my-2"
				>
					Unbias
				</Button>
			}
		</div>
  )
}
