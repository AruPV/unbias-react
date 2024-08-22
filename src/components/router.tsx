import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom"
import App from "@/app.tsx"
import PublicFeed from "./views/public-feed"
import ArticleUploader from "./feed/article-uploader"
import ProtectedLayout from "./layouts/protected-layout"
import SignInPage from "./views/sign-in"
import SignUpPage from "./views/sign-up"
import Profile from "./views/profile"

 
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App/>}>
			<Route path="sign-in" element={<SignInPage/>}/>
			<Route path="sign-up" element={<SignUpPage/>}/>
			<Route index element={<PublicFeed />} />
			<Route element={<ProtectedLayout/>}>
				<Route path="new" element={<ArticleUploader/>} />
				<Route path=":user" element={<Profile/>} />
				<Route path="articles" element={<PublicFeed/>} >
				</Route>
			</Route>
		</Route>
	)
)

export default function Router(){
	return(
		<RouterProvider router={router} />
	)
}
