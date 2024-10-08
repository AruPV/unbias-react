import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'

export default function HeaderFooterLayout() {

  return (
		<div className="flex flex-col min-h-screen">
      <Header/>
			<div className="flex-grow">
				<Outlet/>
				<Toaster/>
			</div>
			<Footer/>
		</div>
  )
}
