import { useAuth } from '@clerk/clerk-react'
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default function backendRequest(verb: string = "FETCH"){
	/**
		* Send post request to create article
		*/
	const { getToken } = useAuth()
	
	const authenticatedRequest = async (body:{}) => {
		return fetch(`${backendUrl}/articles`, {
			method: verb,
			headers:{
				"Content-type": "application/json; charset=UTF-8",
				Authorization: `Bearer ${await getToken()}`,
			},
			body: JSON.stringify(body)
		})
	}

	return authenticatedRequest
}
