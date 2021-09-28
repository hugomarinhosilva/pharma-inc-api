import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import IUsersRepository from "../repositories/IUsersRepository";
import User from "../entities/User";

interface IRequest {
    name: string
    email: string
    password: string
}

@injectable ()
export default class CreateUsersService {
    constructor(
        @inject('ExamsRepository')
        private usersRepository: IUsersRepository,
    ) {}
public async execute(request: IRequest[]): Promise<User[]|User>{
    const users = await Promise.all(
        requests.map(async request => {
            
        })
    )
}
}


