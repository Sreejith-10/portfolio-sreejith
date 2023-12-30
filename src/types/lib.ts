export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type CardData = {
	projectId: string;
	projectImg: string;
	projectTitle: string;
	tech: string[];
	description: string;
	features: string[];
	images: string[];
	github: string;
	live: string;
}
