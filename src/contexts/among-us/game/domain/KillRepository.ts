import { Kill } from "./Kill";

export interface KillRepository {
	getAll(): Promise<Kill[]>
}
