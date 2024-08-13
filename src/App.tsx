import { useState } from 'react'
import {Input} from "@/components/ui/input"
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/ui/header'
import { Button } from '@/components/ui/button'
import TestArticle from './components/feed/test-article'

function App() {

  return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header/>
      <div className="my-3 flex flex-row justify-center">
        <div className="">
          <div className='my-3 flex flex-row items-center'>
            <Input type='url' placeholder='Article URL' className='m-2'/>
            <Button variant={'default'}> Fetch </Button>
          </div>
					<TestArticle/>
        </div>
      </div>
		</ThemeProvider>
  )
}

export default App
