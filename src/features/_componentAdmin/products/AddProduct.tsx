import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IoIosInformationCircle } from "react-icons/io";
import { PiCurrencyDollarSimpleLight } from "react-icons/pi";

const AddProduct = () => {
  return (
    <div>
      <div className="breadCrumb pt-4 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>List Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="namePage text-3xl font-bold">
        <h1>Add New Product</h1>
      </div>
      <form action="">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel className="mr-10">
            <Card style={{ borderRadius: "30px", backgroundColor: "white" }}>
              <CardHeader>
                <CardTitle>Sản phẩm</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Tên sản phẩm</Label>
                      <Input id="name" placeholder="Nhập tên sản phẩm" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Brand</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Brand 1</SelectItem>
                          <SelectItem value="sveltekit">Brand 2</SelectItem>
                          <SelectItem value="astro">Brand 3</SelectItem>
                          <SelectItem value="nuxt">Brand 4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Category</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Label>Mô tả</Label>
                    <Textarea
                      placeholder="Mô tả"
                      style={{
                        border: "1px solid #DBE0E5",
                        borderRadius: "10px",
                        height: "100px",
                      }}
                    ></Textarea>
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
                marginTop: "20px",
              }}
            >
              <CardHeader>
                <CardTitle>Định giá</CardTitle>
              </CardHeader>
              <CardContent>
                <form action="">
                  <div className="grid w-full items-center gap-4">
                    <div className="grid grid-cols-2 mt-2 ">
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex">
                          <Label htmlFor="name" className="mr-2">
                            Giá
                          </Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <IoIosInformationCircle />
                              </TooltipTrigger>
                              <TooltipContent
                                style={{ borderRadius: "10px" }}
                                className="bg-black text-white"
                              >
                                <p>Giá</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>

                        <div className="relative flex-1 md:grow-0  ">
                          <PiCurrencyDollarSimpleLight
                            style={{
                              borderRadius: "10px 0 0 10px",
                              borderRight: "1px solid #F4F7FA ",
                            }}
                            className="absolute h-full w-10 text-xs p-2  bg-[#F4F7FA] rounded-lg"
                          />
                          <Input
                            type="number"
                            placeholder="Giá"
                            className="w-full rounded-full bg-background pl-11 md:w-[200px] lg:w-[336px]  hover:bg-gray-100 "
                          />
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <div className="flex">
                          <Label htmlFor="name" className="mr-2">
                            Giảm giá
                          </Label>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <IoIosInformationCircle />
                              </TooltipTrigger>
                              <TooltipContent
                                style={{ borderRadius: "10px" }}
                                className="bg-black text-white"
                              >
                                <p>Giảm giá</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>

                        <div className="relative flex-1 md:grow-0  ">
                          <PiCurrencyDollarSimpleLight
                            style={{
                              borderRadius: "10px 0 0 10px",
                              borderRight: "1px solid #F4F7FA ",
                            }}
                            className="absolute h-full w-10 text-xs p-2  bg-[#F4F7FA] rounded-lg"
                          />
                          <Input
                            type="text"
                            placeholder="Giảm giá"
                            className="w-full rounded-full bg-background pl-11 md:w-[200px] lg:w-[336px]  hover:bg-gray-100 "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="items-top flex space-x-2">
                      <Checkbox
                        id="terms1"
                        style={{ borderRadius: "4px" }}
                        className="border-[gray-700]"
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Bao gồm cả thuế
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex">
                        <Label htmlFor="name" className="mr-2">
                          Chi phí
                        </Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <IoIosInformationCircle />
                            </TooltipTrigger>
                            <TooltipContent
                              style={{ borderRadius: "10px" }}
                              className="bg-black text-white"
                            >
                              <p>Chi phí cho mỗi mặt hàng</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>

                      <div className="relative  md:grow-0  ">
                        <PiCurrencyDollarSimpleLight
                          style={{
                            borderRadius: "10px 0 0 10px",
                            borderRight: "1px solid #F4F7FA ",
                          }}
                          className="absolute h-full w-10 text-xs p-2  bg-[#F4F7FA] rounded-lg"
                        />
                        <Input
                          type="text"
                          placeholder="Chi phí"
                          className="w-full rounded-full bg-background pl-11 md:w-[200px] lg:w-[336px]  hover:bg-gray-100 "
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
                marginTop: "20px",
              }}
            >
              <CardHeader>
                <CardTitle>Hàng tồn kho</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Số lượng</Label>
                      <Input id="name" placeholder="Số lượng" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Mã hàng (Tùy chọn)</Label>
                      <Input id="name" placeholder="Mã hàng" />
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </ResizablePanel>

          <ResizablePanel>
            <Card
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
              }}
            >
              <CardHeader>
                <CardTitle>Loại hình bán hàng</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms1"
                          style={{ borderRadius: "4px" }}
                          className="border-[gray-700]"
                        />
                        <label
                          htmlFor="terms1"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Chỉ bán online
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms2"
                          style={{ borderRadius: "4px" }}
                          className="border-[gray-700]"
                        />
                        <label
                          htmlFor="terms2"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Chỉ bán tại của hàng
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms3"
                          style={{ borderRadius: "4px" }}
                          className="border-[gray-700]"
                        />
                        <label
                          htmlFor="terms3"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Để tặng
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms3"
                          style={{ borderRadius: "4px" }}
                          className="border-[gray-700]"
                        />
                        <label
                          htmlFor="terms3"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Bán cả trên online và cửa hàng
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
                marginTop: "20px",
              }}
            >
              <CardHeader>
                <CardTitle>Mã màu</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Màu sắc</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Color 1</SelectItem>
                        <SelectItem value="sveltekit">Color 2</SelectItem>
                        <SelectItem value="astro">Color 3</SelectItem>
                        <SelectItem value="nuxt">Color 4</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
                marginTop: "20px",
              }}
            >
              <CardHeader>
                <CardTitle>Kích cỡ</CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="framework">Kích cỡ sản phẩm</Label>
                <ToggleGroup size={"sm"} type="multiple">
                  <ToggleGroupItem value="default " aria-label="Toggle ">
                    <p className="h-4 w-4">31</p>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="default" aria-label="Toggle ">
                    <p className="h-4 w-4">32</p>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="33" aria-label="Toggle ">
                    <p className="h-4 w-4">33</p>
                  </ToggleGroupItem>
                </ToggleGroup>
              </CardContent>
            </Card>
            <Card
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
                marginTop: "20px",
              }}
            >
              <CardHeader>
                <CardTitle>Ảnh sản phẩm</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Ảnh Chính</Label>
                      <input type="file" name="" id="" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Ảnh liên quan</Label>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
                marginTop: "20px",
              }}
            >
              <CardHeader>
                <CardTitle> Vận chuyển và giao hàng</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4"></div>
                </form>
              </CardContent>
            </Card>
            <Card
              style={{
                borderRadius: "30px",
                backgroundColor: "white",
                marginTop: "20px",
              }}
            >
              <CardHeader>
                <CardTitle> Trạng thái</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Trạng thái</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </form>
              </CardContent>
            </Card>
          </ResizablePanel>
        </ResizablePanelGroup>
        <div
          style={{ borderRadius: "30px", border: "1px solid #DBE0E5" }}
          className="bg-white w-full h-30 flex justify-end p-10 mt-10"
        >
          <Button
            style={{ borderRadius: "10%", marginRight: "10px" }}
            variant="black"
          >
            Lưu
          </Button>
          <Button
            style={{ borderRadius: "10px", marginRight: "10px" }}
            variant="outline"
          >
            Outline
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
