

export class Ticket {

    private _id: number;
    private _title: string;
    private _description: string;
    private _votes: number;

    constructor(id:number, title:string, description:string, votes:number) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._votes = votes;
    }


    get id():number {
        return this._id;
    }

    set id(value:number) {
        this._id = value;
    }

    get title():string {
        return this._title;
    }

    set title(value:string) {
        this._title = value;
    }

    get description():string {
        return this._description;
    }

    set description(value:string) {
        this._description = value;
    }

    get votes():number {
        return this._votes;
    }

    set votes(value:number) {
        this._votes = value;
    }
}