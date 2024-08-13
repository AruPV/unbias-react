import { useState } from 'react'
import {Input} from "@/components/ui/input"
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/ui/mode-toggle'
import Header from './components/ui/header'
import { Button } from './components/ui/button'

function App() {

  return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header/>
      <div className="flex flex-row justify-center">
        <div className="">
          <ModeToggle/>
          <div className='flex flex-row items-center'>
            <Input type='url' placeholder='Article URL' className='my-2'/>
            <Button variant={'default'}> Fetch </Button>
          </div>
        </div>
      </div>
		</ThemeProvider>
  )
}

export default App
