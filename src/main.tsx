import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/components/theme-provider'
import './index.css'
import Router from './components/router'
import { ClerkProvider } from '@clerk/clerk-react'

// Clerk
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY){
	throw new Error("Missing Publishable Key")
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
		<div className="bg-background">
			<ClerkProvider 
				publishableKey={PUBLISHABLE_KEY}
				appearance={{
					variables: {
					},
				}}
				>
				<Router/>
			</ClerkProvider>
		</div>
		</ThemeProvider>
  </StrictMode>,
)
