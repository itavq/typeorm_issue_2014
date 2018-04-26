const express = require('express');
import {createConnection} from "typeorm";
import {QuestDraftApp} from "./data/entities/questDraftApp";

const app = express();

/*
create schema issue2014;
CREATE TABLE issue2014.`quest_drafts` (
	`Id` VARCHAR(50) NOT NULL,
    `Revision` int(11) NOT NULL,
    PRIMARY KEY (`Id`, `Revision`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE issue2014.`quest_draft_app` (
	`Id` VARCHAR(50) NOT NULL,
    `Revision` int(11) NOT NULL,
    PRIMARY KEY (`Id`, `Revision`),
    CONSTRAINT `quest_draft_app_pk` FOREIGN KEY (`Id`, `Revision`) REFERENCES `quest_drafts` (`Id`, `Revision`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
 */

app.listen(3000, function(){
    console.log("server started on port 3000 :)");
    createConnection("default").then(async connection => {

        let pQuests = await connection.manager.find(QuestDraftApp);
        console.log("All pQuest from the db: ", pQuests);
        connection.close();
    }).catch(error => console.log(error));
});
