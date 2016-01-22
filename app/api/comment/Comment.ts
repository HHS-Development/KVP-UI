export class Comment {
  public id: string;
  public ticketId: string;
  public date: string;
  public ownerId;
  public content;

  constructor(
    id: string,
    ticketId: string,
    date: string,
    ownerId: string,
    content: string
  ){
    this.id = id;
    this.ticketId = ticketId;
    this.date = date;
    this.ownerId = ownerId;
    this.content = content;
  }
}
