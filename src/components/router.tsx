import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
  redirect,
} from "react-router-dom"
import AuthLayout from "@/components/layouts/auth-layout"
import NoAuthLayout from "@/components/layouts/no-auth-layout"
import HeaderFooterLayout from "@/components/layouts/header-footer-layout"


import PublicFeed from "@/components/views/public-feed"
import ArticleUploader from "@/components/feed/article-uploader"
import SignInPage from "@/components/views/sign-in"
import SignUpPage from "@/components/views/sign-up"
import Profile from "@/components/views/profile"
import WelcomeView from "@/components/views/welcome"

 
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<>
			<Route element={<HeaderFooterLayout/>}>
				<Route element={<AuthLayout/>}>
						<Route index element={<PublicFeed />} />
						<Route path="new" element={<ArticleUploader/>} />
						<Route path=":user" element={<Profile/>} />
				</Route>

				<Route element={<NoAuthLayout/>}>
					<Route path="welcome" element={<WelcomeView/>}/>
				</Route>
			</Route>

			<Route element={<NoAuthLayout/>}>
				<Route path="sign-in" element={<SignInPage/>}>
					<Route path="sso-callback" action={async ()=>{
						return redirect("/sign-up")
					}}>
					</Route>
				</Route>
				<Route path="sign-up" element={<SignUpPage/>}>
					<Route path="sso-callback" action={async ()=>{
						return redirect("/sign-in")
					}}>
					</Route>
				</Route>
			</Route>
			</>
		</Route>
	)
)

export default function Router(){
	return(
		<RouterProvider router={router} />
	)
}
