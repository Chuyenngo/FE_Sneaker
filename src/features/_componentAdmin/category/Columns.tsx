import { ICategory } from "@/common/type";
import { Button } from "@/components/ui/button";
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
export const getColumns: ColumnDef<ICategory>[] = [
  {
    accessorKey: "name", // Đặt tên mới cho cột kết hợp
    header: "Tên sản phầm", // Tiêu đề cột
    cell: ({ row }) => {
      const name = row?.original.name; // Lấy tên sản phẩm

      return <div className="flex items-center">{name}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;

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
                if (category.id !== undefined) {
                  navigator.clipboard.writeText(category.id.toString());
                }
              }}
            >
              <Button style={{ width: "10px", margin: "0px", padding: "0px" }}>
                <i className="fa fa-trash"></i>
              </Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={`${category?.id}/edit`}>
                <i className="fa fa-pencil"></i>
              </Link>{" "}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
