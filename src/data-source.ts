import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserRMCC } from "./entity/UserRMCC"
import { SistemaRMCC } from "./entity/SistemaRMCC"

/*
export const AppDataSource = new DataSource({
    
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
*/

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "Faculdade",
    entities: [UserRMCC, SistemaRMCC],
    synchronize: true,
    logging:false
    
})