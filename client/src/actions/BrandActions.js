import * as BrandApi from "../api/BrandRequests";
export const getBrand = (id) => async (dispatch) => {
  try {
    const { data } = await BrandApi.getBrand(id);
    dispatch({ type: "GET_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
  }
};