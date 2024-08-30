import { ArrowUp, ArrowDown } from "lucide-react"
import { useState } from "react"

interface props{
	initialVotes: number
	initialVoteState: number
}

export default function Votes({initialVotes, initialVoteState}:props){
	const [ voteState, setVoteState ] = useState(initialVoteState)
	const [ votes, setVotes ] = useState(initialVotes)

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

	const handleUpvote = ()=>{
		const change = voteState == 1 ? -1 : (-voteState + 1)
		setVoteState(voteState + change)
		setVotes(votes + change)
	}

	const handleDownvote = ()=>{
		const change = voteState == -1 ? +1 : (-voteState - 1)
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
