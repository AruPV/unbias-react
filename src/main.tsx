import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/components/theme-provider'
import './index.css'
import Router from './components/router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Router/>
		</ThemeProvider>
  </StrictMode>,
)
