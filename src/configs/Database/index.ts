export interface IUsuarioProps {
	nome?: string;
	email: string;
	senha: string;
	confirmSenha?: string;
	recados?: any;
}

export const Usuario: IUsuarioProps[] = [];
