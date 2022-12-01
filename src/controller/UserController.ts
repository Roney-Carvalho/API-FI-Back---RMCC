import { getRepository } from "typeorm"
import { NextFunction, Request, Response } from "express"
import { UserRMCC } from "../entity/UserRMCC"
import { AppDataSource } from "../data-source"
import { SistemaRMCC } from "../entity/SistemaRMCC"

export class UserController {

    private userRepository = AppDataSource.getRepository(UserRMCC)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.userRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })      
        await this.userRepository.remove(userToRemove)
    }

}

export class SistemaRMCCController {

    private SistemaRMCCRepository = AppDataSource.getRepository(SistemaRMCC)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.SistemaRMCCRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.SistemaRMCCRepository.findOneBy({ id: request.params.id })
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.SistemaRMCCRepository.save(request.body)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let SistemaRMCCToRemove = await this.SistemaRMCCRepository.findOneBy({ id: request.params.id })      
        await this.SistemaRMCCRepository.remove(SistemaRMCCToRemove)
    }

}