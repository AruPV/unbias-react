import React from "react";

interface props{
	html: string,
}

function Article({html}: props){
	return(
		<>
		<div className="prose dark:prose-invert line-clamp-[9]" dangerouslySetInnerHTML={{__html: html}}/>
		</>
	)	
}

export default Article
