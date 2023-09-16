import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "../actions/login";
import { login } from "./login";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};
describe("login reducer", () => {

  test("should return isLoading:true", () => {
    const expected = {
      ...initialState,
      isLoading: true,
    };
    const received = login(initialState, {
      type: GET_LOGIN_REQUEST,
    });
    expect(received).toEqual(expected);
  });
//    test("should return login", () => {
//      const expected = {
//        ...initialState,
//        isLoading: false,
//        data:null;
//      };
//      const received = login(initialState, {
//        type: GET_LOGIN_SUCCESS,
//      });
//      expect(received).toEqual(expected);
//    });
//     test("check LOGIN", () => {
//       const expected = {
//         ...initialState,
//         isLoading: true,
//       };
//       const received = login(initialState, {
//         type: GET_LOGIN_ERROR,
//         isLoading: true,
//       });
//       expect(received).toEqual(expected);
//     });
});
