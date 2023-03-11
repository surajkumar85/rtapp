interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

enum ActionType {
  SEARCH_REPOISTORIES = "search_repoistories",
  SEARCH_REPOISTORIES_ERROR = "search_repoistories_error",
  SEARCH_REPOISTORIES_SUCCESS = "search_repoistories_success",
}

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

type Action =
  | SearchRepoistoriesAction
  | SearchRepoistoriesErrorAction
  | SearchRepoistoriesSuccessAction;

export default function reducer(
  state: RepositoriesState,
  action: Action
): RepositoriesState {
  switch (action.type) {
    case ActionType.SEARCH_REPOISTORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOISTORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOISTORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
}
