import { IProduct } from "@/common/type";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
export const getColumns = (
  onRemove: (product: IProduct) => void
): ColumnDef<IProduct>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "name", // Đặt tên mới cho cột kết hợp
    header: "Tên sản phầm", // Tiêu đề cột
    cell: ({ row }) => {
      const product = row?.original.image;
      const name = row?.original.name; // Lấy tên sản phẩm

      return (
        <div className="flex items-center">
          {" "}
          {/* Canh chỉnh ảnh và tên trên cùng 1 dòng */}
          <img src={`/` + product} alt="" className="w-10 mr-5" />
          {name}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Giá sản phẩm",
    cell: ({ row }) => {
      const price = row?.original.price;

      return (
        <div className="flex items-center">
          <span>{price}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Loại",

    cell: ({ row }) => {
      const cate = row?.original.category_id;

      return (
        <div className="flex items-center">
          <span>{cate}</span>
        </div>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                if (product.id !== undefined) {
                  navigator.clipboard.writeText(product.id.toString());
                }
              }}
            >
              <Button
                style={{ width: "10px", margin: "0px", padding: "0px" }}
                onClick={() => {
                  window.confirm("Bạn có chắc chắn xóa không?") &&
                    onRemove(product);
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={`${product?.id}/edit`}>
                <i className="fa fa-pencil"></i>
              </Link>{" "}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
