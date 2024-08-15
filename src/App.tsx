import { SetStateAction, useState } from 'react'
import {Input} from "@/components/ui/input"
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import { Button } from '@/components/ui/button'
import TestArticle from './components/feed/test-article'
import Article from './components/feed/article'
const backendUrl = import.meta.env.VITE_BACKEND_URL;

async function postArticle(url: string) {

	const response = await fetch(`http://${backendUrl}/articles`, {
		method: "POST",
		headers:{
			"Content-type": "application/json; charset=UTF-8"
		},
		body: JSON.stringify({
			url: url,
		}),
	});

	const data = await response.json();
	const html = data.title + data.content
	return html
}

async function handleArticleSubmission(
	url: string,
	articles:string[], 
	setArticles:React.Dispatch<React.SetStateAction<string[]>>
) {
	const article = await postArticle(url)
	setArticles([...articles, article])
}

function App() {
	
	const [url, setUrl] =	 useState("")
	const [articles, setArticles] = useState<string[]>([""])

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setUrl(event.target.value)
	}

	const handleFetchClick = ()=>{
		handleArticleSubmission(url, articles, setArticles)
	}

  return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header/>
      <div className="my-3 flex flex-row justify-center">
        <div className="">
          <div className='my-3 flex flex-row items-center'>
            <Input onChange={handleInputChange} type='url' placeholder='Article URL' className='m-2'/>
            <Button onClick={handleFetchClick} variant={'default'}> Fetch </Button>
          </div>
					{articles.map(article=>{
						return <Article html={article} />
					})}

        </div>
      </div>
		</ThemeProvider>
  )
}

export default App
