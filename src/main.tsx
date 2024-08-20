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
			<ClerkProvider 
				publishableKey={PUBLISHABLE_KEY}
				appearance={{
					variables: {
						colorPrimary: 'hsl(142.1 76.2% 36.3%)' // To match shadcn theme. from https://github.com/stormynight9/clerk-shadcn-theme
					},
				}}
				>
				<Router/>
			</ClerkProvider>
		</ThemeProvider>
  </StrictMode>,
)
