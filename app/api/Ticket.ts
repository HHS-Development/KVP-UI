export class Ticket {
  public id: string;
  public subject: string;
  public proposal: string;
  public status: string;
  public createdDate: string;
  public creatorId: string;
  public ownerId: string;

  constructor(
    id: string,
    subject: string,
    proposal: string,
    status: string,
    createdDate: string,
    creatorId: string,
    ownerId: string
  ) {
    this.id = id;
    this.subject = subject;
    this.proposal = proposal;
    this.status = status;
    this.createdDate = createdDate;
    this.creatorId = creatorId;
    this.ownerId = ownerId;
  }
}
