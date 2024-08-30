import { useAuth } from '@clerk/clerk-react'
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function backendRequest(
	endpoint: string = "articles",
	verb: string = "GET"
):(()=>Promise<Response>) | (({})=>Promise<Response>){
	/**
		* Send post request to create article
		*/
	const { getToken } = useAuth()

	const authenticatedNoBody = async () => {
		return fetch(`${backendUrl}/${endpoint}`, {
			method: verb,
			headers:{
				"Content-type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${await getToken()}`,
			}
		})
	}
	
	const authenticatedRequest = async (body:{}) => {
		return fetch(`${backendUrl}/${endpoint}`, {
			method: verb,
			headers:{
				"Content-type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${await getToken()}`,
			},
			body: JSON.stringify(body)
		})
	}

	switch (verb){
		case "GET":
			return authenticatedNoBody
		case "DELETE":
			return authenticatedNoBody
		default:
			return authenticatedRequest
	}
}
