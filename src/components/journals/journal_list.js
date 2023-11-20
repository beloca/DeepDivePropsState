
import React, {Component} from "react";
import {JournalEntry} from "./journal-entry";

const rawJournalData=[
    { title: "Post One", content: "Post content", status: "draft" },
    { title: "Post Two", content: "More content", status: "published" },
    { title: "Post Three", content: "More content", status: "published" },
    { title: "Post Four", content: "More content", status: "published" }
];

export default class JournalList extends Component{
    constructor(props){
        super();

        this.state={
            journalData: rawJournalData,
            greeting:'Hi there',
            isOpen: true //Para poder crear luego btn y mostrar esconder o cambiar los datos rawjournaldata
        };
    }

    clearEntries = () => {
    this.setState({ journalData: [], isOpen: false });
    };

    showAllEntries =() => {
        this.setState({journalData:rawJournalData, isOpen:true });
    };

    toogleStatus =() =>{
        if(this.state.isOpen){
            this.setState({journalData:[], isOpen:false});
        }else{
            this.setState({journalData:rawJournalData, isOpen:true});
        }
    };

    render(){
        const journalEntries=this.state.journalData.map(journalEntry=>{
            return(
                <div key={journalEntry.title}>
                    <JournalEntry 
                        title={journalEntry.title} 
                        content={journalEntry.content}
                    />
                </div>
            )
        })
        return(
            <div>
                <h2>{this.props.heading}</h2>
                {journalEntries}

                <button onClick={this.clearEntries}>Clear Journal Entries</button>
                <button onClick={this.showAllEntries}>Show all Entries</button>
                <button onClick={this.toogleStatus}>Toogle Entries</button>
            </div>
        );
    }
}
