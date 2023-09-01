import { testFeed } from "../../utils/test";
import { GET_FEED } from "../actions/feed";
const initialState = {
  data: testFeed,
  error: null,
  isLoading: false,
};
export const feed = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_FEED:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
