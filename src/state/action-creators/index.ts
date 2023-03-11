import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOISTORIES,
    });

    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: term,
          },
        }
      );
      const packageNames = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPOISTORIES_SUCCESS,
        payload: packageNames,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOISTORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
