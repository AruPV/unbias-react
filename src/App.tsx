import { useState } from 'react'
import {Input} from "@/components/ui/input"
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/ui/mode-toggle'

function App() {

  return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<ModeToggle></ModeToggle>
			<Input type='url' placeholder='Article URL'/>
		</ThemeProvider>
  )
}

export default App
