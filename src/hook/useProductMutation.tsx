import { SubmitHandler, useForm } from "react-hook-form";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addProduct,
  deleteProduct,
  editProduct,
} from "@/service/productService";
import { IProduct } from "@/common/type";

type FormControlType = {
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
  defaultValues?: IProduct;
  onSuccess?: () => void;
};
export const useProductMutation = ({
  action,
  defaultValues = {
    id: "",
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  },
  onSuccess,
}: useProductMutationProps) => {
  const queryClient = useQueryClient();

  const form = useForm<FormControlType>({
    defaultValues,
  });
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "CREATE":
          return await addProduct(product);
        case "UPDATE":
          return await editProduct(product);
        case "DELETE":
          return await deleteProduct(product.id!);
        default:
          return null;
      }
    },
    onSuccess: () => {
      console.log(1);

      // thêm | cập nhật | Xóa thành công
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
      onSuccess && onSuccess();
    },
  });
  const onSubmit: SubmitHandler<FormControlType> = (values) => {
    console.log(1);
    mutate(values as IProduct);
  };
  const onRemove = (product: IProduct) => {
    mutate(product);
  };
  return {
    form,
    onSubmit,
    onRemove,
    ...rest,
  };
};
