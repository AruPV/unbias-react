import Header from '@/components/ui/header'
import Footer from './components/ui/footer'
import { Outlet } from 'react-router-dom'



function App() {

  return (
		<>
      <Header/>
			<Outlet/>
			<Footer/>
		</>
  )
}

export default App
