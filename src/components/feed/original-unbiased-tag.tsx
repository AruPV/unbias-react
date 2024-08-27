import { useState } from "react"
import Tag from "../ui/tag"

interface props{
	callback?: ()=>void
	active?: boolean
	inverted?: boolean
}

export default function VersionTag({callback, active = true, inverted = false}: props){
	const [isActive, setIsActive] = useState(active)
	const text = isActive ? "Unbiased" : "Original"

	const handleClick = ()=>{
		callback?.()
		setIsActive(!isActive)
	}

	return(
		<button className="m-0 p-0 px-0" onClick={handleClick}>
			<Tag inverted={inverted} active={isActive}>{text}</Tag>
		</button>
	)
}
