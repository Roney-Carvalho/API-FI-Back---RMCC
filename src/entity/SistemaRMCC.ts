import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SistemaRMCC {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titulo: string

    @Column()
    autor: string

    @Column()
    ano: string

    @Column()
    isbn: string

}
