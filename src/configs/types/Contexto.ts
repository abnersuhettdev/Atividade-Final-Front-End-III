export type Contexto = 'cadastro' | 'login';

export interface IUser {
	nome?: string;
	email: string;
	senha: string;
}
