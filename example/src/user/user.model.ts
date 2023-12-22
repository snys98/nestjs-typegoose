import { prop, Ref } from '@typegoose/typegoose';
import { Cat } from 'src/cat/cat.model';

export class User {
  @prop({ required: true })
  public name: string;

  @prop({ required: true, ref: () => Cat })
  public cats: Ref<Cat>[];
}
