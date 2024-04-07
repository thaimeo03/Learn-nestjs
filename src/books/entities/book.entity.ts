import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  author: string

  @Column()
  pages: number

  @Column({
    nullable: true
  })
  image: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
