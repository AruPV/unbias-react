interface props{
	children: any
	className?: string
}

export default function BrutalistButton({className = "", children = ""}: props){
	return(
		<button className={`outline outline-1 outline-secondary drop-shadow dark:outline-secondary/80 outline-offset-2 rounded-lg bg-secondary transition-all hover:bg-primary px-4 py-1 hover:outline-primary/40 font-roboto hover:text-background text-base w-max h-max ${className}`}> 
		{children}
		</button>
	)
}
