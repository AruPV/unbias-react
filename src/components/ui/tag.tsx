interface props{
	inverted?: boolean
	active?: boolean
	children: string
}

export default function Tag({ inverted = false, active = true, children}:props){
	const direction = inverted ? "rotate-180" : ""
	const activity = active ? "text-background bg-primary" : "text-foreground bg-background border border-l-transparent"


	return(
			<span className={`transition transition-all ease-linear ${activity} self-start pl-1 py-3 w-8 min-h-28 [writing-mode:vertical-lr] ${direction} rounded-r-xl text-center`}>
				<p className="rotate-180 font-semibold">{children}</p>
			</span>
	)
}
