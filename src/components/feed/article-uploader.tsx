import { useState } from "react";
import {Input} from "@/components/ui/input"
import { Button } from '@/components/ui/button'
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import Article from "./article";
import { ArticleData } from "@/types";

async function postArticle(url: string, unbias: boolean): Promise<ArticleData> {
	/**
		* Send post request to create article
		*/

	const response = await fetch(`https://${backendUrl}/articles`, {
		method: "POST",
		headers:{
			"Content-type": "application/json; charset=UTF-8"
		},
		body: JSON.stringify({
			unbias: unbias,
			url: url,
		}),
	});

	const data: ArticleData = await response.json();
	return data
}

async function processURL(
	url: string,
	addArticles: (newArticle: ArticleData)=>void,
	isUnbias: boolean,
): Promise<void> {
	/**
		* Deal with async fetching and updating of articles
		*/
	const article = await postArticle(url, isUnbias)
	addArticles(article)
}


interface props{
	addArticlesCallback?: (article: ArticleData)=>void
}

export default function ArticleUploader({addArticlesCallback}: props){
	const [articles, setArticles] = useState<ArticleData[]>([])
	const [url, setUrl] =	 useState("")

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
		setArticles([])
		processURL(url, clearAddArticles, false)
	}

	const handleUnbias = ()=>{
		processURL(url, addArticles, true)
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
				<Button onClick={handleSubmit} variant={'default'}> Fetch </Button>
			</div>
			{articles.map(article=>{
				return <Article data={article} />
			})}
			{articles.length == 1 && 
				<Button onClick={handleUnbias} className="my-2">Unbias</Button>
			}
		</div>
  )
}
