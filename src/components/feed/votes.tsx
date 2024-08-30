import { ArrowUp, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"
import backendRequest from "../utils/backend-requester"

interface props{
	initialVotes: number,
	initialVoteState: number,
	articleID: number,
}

export default function Votes({initialVotes, initialVoteState, articleID}:props){
	const [ voteState, setVoteState ] = useState(initialVoteState)
	const [ votes, setVotes ] = useState(initialVotes)
	const patchRequest = backendRequest(`articles/${articleID}/vote`,"PATCH")
	// @ts-ignore
	const deleteRequest: ()=>Promise<void> = backendRequest(`articles/${articleID}/vote`, "DELETE")

	/*
	const handleRequest = () =>{
		switch (voteState){
			case (0):
				break;
			case (-1):
			case (+1):
		}
	}
	*/

	useEffect(()=>{
		console.log(voteState)
		if (!voteState){
			deleteRequest()	
			return
		}
		
		const isLike = voteState == 1 ? true : false
		patchRequest({"is_like": isLike})
	},[voteState])

	const handleUpvote = ()=>{
		const change = voteState == 1 ? -1 : (-voteState + 1)
		setVoteState(voteState + change)
		setVotes(votes + change)
	}

	const handleDownvote = ()=>{
		const change = voteState == -1 ? 1 : (-voteState - 1)
		setVoteState(voteState + change)
		setVotes(votes + change)
	}

	return(
		<div className="mt-5 flex flex-col items-center mr-3">
			<button onClick={handleUpvote}>
				<ArrowUp className={ `transition-all ease-in-out ${voteState == 1 ? "stroke-primary" : "stroke-secondary"}`}></ArrowUp>
			</button>
			<span className="text-primary font-bold">{votes}</span>
			<button onClick={handleDownvote}>
				<ArrowDown className={ `transition-all ease-in-out ${voteState == -1 ? "stroke-primary" : "stroke-secondary"}`}></ArrowDown>
			</button>
		</div>
	)
}
