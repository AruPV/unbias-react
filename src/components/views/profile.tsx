import { useParams } from "react-router-dom"

export default function Profile(){
	const params = useParams()
	console.log(params.user)
	return(
		<div className="">
			{ params.user }
		</div>
	)
}
