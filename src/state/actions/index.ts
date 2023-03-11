import { ActionType } from "../action-types";

interface SearchRepoistoriesAction {
  type: ActionType.SEARCH_REPOISTORIES;
}

interface SearchRepoistoriesErrorAction {
  type: ActionType.SEARCH_REPOISTORIES_ERROR;
  payload: string;
}
interface SearchRepoistoriesSuccessAction {
  type: ActionType.SEARCH_REPOISTORIES_SUCCESS;
  payload: string[];
}

export type Action =
  | SearchRepoistoriesAction
  | SearchRepoistoriesErrorAction
  | SearchRepoistoriesSuccessAction;
