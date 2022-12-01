import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { UserRMCC } from "./entity/UserRMCC"
import { SistemaRMCC } from "./entity/SistemaRMCC"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    const cors=require('cors');

    app.use(bodyParser.json())
    app.use(cors());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserRMCC, {
            primeiroNome: "Julio",
            sobrenome: "Ribeiro",
            idade: "32",
            registro: "1234567",
            endereco: "Rua Maria izabel, n33"
    
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserRMCC, {
            primeiroNome: "Guilherme",
            sobrenome: "Matos",
            idade: "25",
            registro: "7654321",
            endereco: "Rua D Pedro I, n436"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaRMCC, {
            titulo: "A ida que não foi",
            autor: "Carlos Tavares",
            ano: "2002",
            isbn: "6549872"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(SistemaRMCC, {
            titulo: "Pois não!",
            autor: "Carolina Leme",
            ano: "2020",
            isbn: "98321321"
        })
    )


    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
