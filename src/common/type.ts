export interface IProduct {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  category_id: number;
}
export interface ICategory {
  id: number;

  name: string;
}
