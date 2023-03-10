interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

export default function reducer(
  state: RepositoriesState,
  action: any
): RepositoriesState {
  switch (action.type) {
    case "search_repoistories":
      return { loading: true, error: null, data: [] };
    case "search_repoistories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repoistories_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
}
