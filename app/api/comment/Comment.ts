export class Comment {
  public id: string;
  public ticketId: string;
  public ownerId;
  public content;

  constructor(
    id: string,
    ticketId: string,
    ownerId: string,
    content: string
  ){
    this.id = id;
    this.ticketId = ticketId;
    this.ownerId = ownerId;
    this.content = content;
  }
}
