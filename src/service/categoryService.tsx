import { ICategory } from "@/common/type";
import instance from "@/core/api";
import { AxiosResponse } from "axios";

export const getCategory = async () => {
  try {
    const response: AxiosResponse<ICategory[]> = await instance.get(
      "/categories"
    );
    return response.data || [];
  } catch (error) {
    console.log("[API_FETCHING_Category_ERROR]", error);
  }
};
export const getOneCategory = async (id: number) => {
  try {
    const response: AxiosResponse<ICategory> = await instance.get(
      `/categories/${id}`
    );
    return response.data || {};
  } catch (error) {
    console.log("[API_FETCHING_Category_ERROR]", error);
    throw error;
  }
};

export const addCategory = async (Category: ICategory) => {
  try {
    const response = await instance.post("/categories", Category);
    return response.data;
  } catch (error) {
    console.log("[API_CREATE_Category_ERROR]", error);
  }
};
export const editCategory = async (Category: ICategory) => {
  try {
    const response = await instance.patch(
      "/categories/" + Category.id,
      Category
    );
    return response.data;
  } catch (error) {
    console.log("[API_UPDATE_Category_ERROR]", error);
  }
};
export const deleteCategory = async (id: number) => {
  try {
    await instance.delete("/categories/" + id);
    return null;
  } catch (error) {
    console.log("[API_DELETE_Category_ERROR]", error);
  }
};
