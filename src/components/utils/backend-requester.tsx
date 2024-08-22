import { useAuth } from '@clerk/clerk-react'
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function backendRequest(endpoint: string = "articles", verb: string = "GET"){
	/**
		* Send post request to create article
		*/
	const { getToken } = useAuth()

	const authenticatedGet = async () => {
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

	return verb == "GET" ? authenticatedGet : authenticatedRequest
}
