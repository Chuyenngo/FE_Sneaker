import { getCategory, getOneCategory } from "@/service/categoryService";
import { getOneProduct, getProducts } from "@/service/productService";
import { useQuery } from "@tanstack/react-query";

export const useProductQuery = (id?: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => (id ? await getOneProduct(id) : await getProducts()),
  });

  return { data, ...rest };
};

export const useCategoryQuery = (id?: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ["CATEGORY_KEY", id],
    queryFn: async () => (id ? await getOneCategory(id) : await getCategory()),
  });

  return { data, ...rest };
};
