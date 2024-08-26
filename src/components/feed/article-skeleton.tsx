import { Skeleton } from "../ui/skeleton";

function TitleSkeleton(){
	return(
		<div className="my-3 w-full max-w-prose">
			<Skeleton className="w-full h-[30px] rounded-full my-2"/>
			<Skeleton className="w-1/3 h-[30px] rounded-full mt-3"/>
		</div>
	)
}

function ProseSkeleton(){
	return(
		<Skeleton className="w-full max-w-prose h-[20px] rounded-full my-1"/>
	)
}

export default function ArticleSkeleton(){
	return(
		<div className="">
			<TitleSkeleton/>
			<ProseSkeleton/>
			<ProseSkeleton/>
			<ProseSkeleton/>
			<ProseSkeleton/>
		</div>
	)
}
