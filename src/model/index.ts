export interface IMatchState {
	red: IOpponent;
	blue: IOpponent;
	ready?: boolean
}

export interface IOpponent {
	data: IStarship | IPerson,
	strength: string,
	isWinner: boolean
}

export interface IDataState {
	starships: Array<IStarship>;
	people: Array<IPerson>;
	loading: boolean;
}

export interface IResultState {
	results: IMatchState[]
}

export interface IStarship {
	name: string;
	crew: string;
	model?: string;
	starship_class?: string;
	manufacturer?: string;
	cost_in_credits?: string;
	length?: string;
	passengers?: string;
	max_atmosphering_speed?: string;
	hyperdrive_rating?: string;
	MGLT?: string;
	cargo_capacity?: string;
	consumables?: string;
	films?: any[];
	pilots?: any[];
	url?: string;
	created?: string;
	edited?: string;
}

export interface IPerson {
	name: string;
	mass: string;
	birth_year?: string;
	eye_color?: string;
	gender?: string;
	hair_color?: string;
	height?: string;
	skin_color?: string;
	homeworld?: string;
	films?: any[];
	species?: any[];
	starships?: any[];
	vehicles?: any[];
	url?: string;
	created?: string;
	edited?: string;
}