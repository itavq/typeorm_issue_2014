import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {QuestDraftApp} from "./questDraftApp";

@Entity("quest_drafts")
export class QuestDrafts {

    @Column("varchar",{
        nullable:false,
        length:50,
        primary:true,
        name:"Id"
        })
    Id:string;

    @Column("int",{
        nullable:false,
        primary:true,
        name:"Revision"
    })
    Revision:number;

    @OneToOne(type=>QuestDraftApp, quest_draft_app=>quest_draft_app.Id,{ onDelete: 'NO ACTION' })
    quest_draft_app:QuestDraftApp;

    @OneToOne(type=>QuestDraftApp, quest_draft_app2=>quest_draft_app2.Id,{ onDelete: 'NO ACTION' })
    quest_draft_app2:QuestDraftApp;
}
