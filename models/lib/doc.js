import { validate, validateOrReject } from 'class-validator';
import * as firebase from 'firebase/app'
import 'firebase/firestore'

export class Doc {

    constructor(id=null){

        // The document ID
        this.id = id;

        // An array of fields that comprise the document
        this.fields = [];

        // Our database connection
        // this.db = firebase.app().firestore();
    }

    toString(){
        let output = '';
        for(const i in this.fields){
            output += `${this.fields[i]}: ${this[this.fields[i]]}`;
        }
        return output;
    }

    fetch(){
        if(this.id && this.collection){

        }
    }

    insert(){

    }

    delete(){

    }

    validate(){
        return validateOrReject(this);
    }

}
