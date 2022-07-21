export interface Lala {
    to: string,
    userName: string
    objective: string
    kill: string
}

export interface SendEmailInitGame {
	sendEmailInitGame(payload: Lala): void
}
