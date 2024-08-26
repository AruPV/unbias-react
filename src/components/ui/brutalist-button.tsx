interface props{
	children: any
}

export default function BrutalistButton({children = ""}: props){
	return(
		<button className="outline outline-1 outline-secondary drop-shadow dark:outline-secondary/80 outline-offset-2 rounded-lg bg-secondary transition-all hover:bg-primary w-20 m-4 p-1 hover:outline-primary/40 font-roboto hover:text-background"> 
		{children}
		</button>
	)
}
