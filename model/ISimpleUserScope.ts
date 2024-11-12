import { ITagSets } from "./ITagSets";
import { UserResource } from "./UserResource";

type UserResourceFilter = {
  [key in UserResource]?: ITagSets | null;
};

export interface ISimpleUserScope extends UserResourceFilter {
  tags: ITagSets;
}
