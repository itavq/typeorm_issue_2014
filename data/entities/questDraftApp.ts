import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {QuestDrafts} from "./questDrafts";

@Entity("quest_draft_app")
export class QuestDraftApp {

    @OneToOne(type=>QuestDrafts, Id=>Id.quest_draft_app,{ primary:true, nullable:false,onDelete: 'NO ACTION',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'Id'})
    Id:QuestDrafts;

    @Column("int",{
        nullable:false,
        primary:true,
        name:"Revision"
        })
    Revision:number;
}
