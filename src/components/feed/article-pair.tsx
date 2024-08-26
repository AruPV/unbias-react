import VersionTag from "./original-unbiased-tag" 
import { ArticlePairData } from "@/types"
import Article from "./article"
import { useState } from "react"

interface props{
	articlePair: ArticlePairData
}

export default function ArticlePair({ articlePair }:props){
	const [showOriginal, setShowOriginal] = useState(false)
	const currentArticle = (!showOriginal && articlePair.unbiased !== undefined) ? articlePair.unbiased : articlePair.original

	const switchArticle = ()=>{
		setShowOriginal(!showOriginal)
	}

	return(
		<div className="flex flex-row items-start divide-solid">
			<Article data={currentArticle} className="border-r transition transition-all ease-in-out pr-4"/>
			<VersionTag callback={switchArticle}/>
		</div>
	)
}
