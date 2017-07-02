import { Status } from './status.enum';
export class ToDoItem {
  id :string;
  message: string;
  createdDate: Date;
  modifiedDate: Date;
  status: Status;

  public generate(message: string): this {
    this.message = message;
    this.createdDate = new Date();
    this.modifiedDate = new Date();
    this.status = Status.Due;

    return this;
  }
}
