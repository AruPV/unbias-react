import { useState } from 'react'
import {Input} from "@/components/ui/input"
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import { Button } from '@/components/ui/button'
import TestArticle from './components/feed/test-article'
const backendUrl = import.meta.env.VITE_BACKEND_URL;

async function postArticle(url: string) {

	console.log("postArticle start");

	const response = await fetch(`http://${backendUrl}/articles`, {
		method: "POST",
		body: JSON.stringify({
			url: url,
		}),
	});

	console.log("postArticle result");

	const data = await response.json();
	console.log(data)
}

function App() {

	const [url, setUrl] =	 useState("")

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
		setUrl(event.target.value)
	}

	const handleFetchClick = ()=>{
		postArticle(url)
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
					<TestArticle/>
        </div>
      </div>
		</ThemeProvider>
  )
}

export default App
