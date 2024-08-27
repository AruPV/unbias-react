import { useParams } from "react-router-dom"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import BrutalistButton from "../ui/brutalist-button"
import { UserProfileData } from "@/types"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import backendRequest from "../utils/backend-requester"
import { ArticlePairData } from "@/types"

async function fetchProfileInfo(
	fetchHook: (body:{})=>Promise<Response>,
	callback: Dispatch<SetStateAction<UserProfileData | undefined>>
): Promise<void> {
	const response = await fetchHook({})
	const json: UserProfileData = await response.json()
	const validArticles = json.articles
												.filter((articlePair: ArticlePairData) => articlePair.unbiased?.title !== undefined)
												.reverse()
	const cleanUserData = {user: json.user, articles: validArticles}

	callback(cleanUserData)
}



export default function Profile(){
	const params = useParams()
	const user = params.user
	const [userProfile, setUserProfile] = useState<UserProfileData>()
	const backendFetch = backendRequest(`/users/${user}`)

	useEffect(()=>{
		fetchProfileInfo(backendFetch, setUserProfile)
	},[])

	return(
		<div className="h-svh flex flex-col items-center text-primary px-2 pt-10 space-y-8">
			<div className="h-max p-4 border rounded-sm max-w-prose w-full grid grid-cols-4 items-center bg-secondary bg-secondary/0 dark:border-primary/20 justify-between "> 
				<div className="flex flex-row col-start-1 col-end-4">
					<Avatar>
						<AvatarImage src={userProfile?.user.image}></AvatarImage>
						<AvatarFallback>:)</AvatarFallback>
					</Avatar>
					<div className="px-2">
						<p className="font-semibold text-3xl">{userProfile? userProfile.user.username : "..."}</p>
						<p className="font-light text-sm">{`@${user}`}</p>
					</div>
				</div>
				<BrutalistButton className="justify-self-end" >Follow</BrutalistButton>
			</div>
			<div className="h-32 p-4 border rounded-sm max-w-prose w-full flex flex-row items-center bg-secondary dark:bg-secondary/0 dark:border-primary/20"> 
			</div>
		</div>
	)
}
