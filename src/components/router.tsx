import * as ReactDOM from "react-dom"
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom"
import App from "@/app.tsx"
import PublicFeed from "./views/public-feed"
import ArticleUploader from "./feed/article-uploader"

 
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route 
			path="/"
			element={<App/>}
		>
			<Route index element={<PublicFeed />} />
			<Route 
				path="new"
				element={<ArticleUploader/>} //This is, ideally, a pop-up at some point
			/>
		</Route>
	)
)

export default function Router(){
	return(
		<RouterProvider router={router} />
	)
}
