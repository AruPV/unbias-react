import Header from '@/components/ui/header'
import Footer from './components/ui/footer'
import { Outlet } from 'react-router-dom'



function App() {

  return (
		<div className="flex flex-col min-h-screen">
      <Header/>
			<div className="flex-grow">
				<Outlet/>
			</div>
			<Footer/>
		</div>
  )
}

export default App
