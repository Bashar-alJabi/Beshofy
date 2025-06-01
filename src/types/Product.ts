export type Product = {
	id: number;
	name: string;
	image: string;
	category: string;
	price: string;
	isFree: boolean;
	isNew?: boolean;
	isTrending?: boolean;
	isPremium?: boolean;
	downloadLink?: string;
	gumroadLink?: string;
};
