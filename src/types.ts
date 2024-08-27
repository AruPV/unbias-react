export type ArticleData = {
	username: string
	title: string,
	content: string,
	shock_score: number,
	bias_score: number,
	top_biased_words: string[]
} 

export type ArticlePairData = {
	original: ArticleData,
	unbiased: ArticleData | undefined
} 

export type UserData = {
	username: string,
	image: string,
}

export type UserProfileData = {
	user: UserData,
	articles: ArticlePairData[],
}
