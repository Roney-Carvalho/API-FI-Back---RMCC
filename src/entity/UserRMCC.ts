import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserRMCC {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    primeiroNome: string

    @Column()
    sobrenome: string

    @Column()
    idade: string

    @Column()
    registro: string

    @Column()
    endereco: string

}
