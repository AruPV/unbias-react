import { useState } from "react";
import {Input} from "@/components/ui/input"
import { Button } from '@/components/ui/button'
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import Article from "./article";
import TestArticle from "./test-article";

async function postArticle(url: string, unbias: boolean): Promise<string> {
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

	const data = await response.json();
	const html = data.title + data.content
	return html
}

async function processURL(
	url: string,
	addArticles: (newArticle: string)=>void,
	isUnbias: boolean,
): Promise<void> {
	/**
		* Deal with async fetching and updating of articles
		*/
	const article = await postArticle(url, isUnbias)
	addArticles(article)
}


interface props{
	addArticlesCallback?: (article: string)=>void
}

export default function ArticleUploader({addArticlesCallback}: props){
	const [articles, setArticles] = useState<string[]>([])
	const [url, setUrl] =	 useState("")

	const	addArticles = (article:string)=>{
		if (addArticlesCallback !== undefined){
			addArticlesCallback(article)
		}
		setArticles([...articles, article])
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setUrl(event.target.value)
	}

	const handleSubmit = ()=>{
		setArticles([])
		processURL(url, addArticles, false)
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
				return <Article html={article} />
			})}
			{articles.length == 1 && 
				<Button onClick={handleUnbias} className="my-2">Unbias</Button>
			}
			<TestArticle/>
		</div>
  )
}
