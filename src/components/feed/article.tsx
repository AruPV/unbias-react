interface props{
	html: string,
}

function Article({html}: props){
	return(
		<>
		<div className="prose dark:prose-invert " dangerouslySetInnerHTML={{__html: html}}/>
		</>
	)	
}

export default Article
