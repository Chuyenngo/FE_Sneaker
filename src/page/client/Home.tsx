import Banner from "@/features/block/client/Banner";
import SlideBrand from "@/features/block/client/SlideBrand";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../../assets/style/client.scss";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refLatestTitle, inViewLatestTitle] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewLatestTitle) {
      document.querySelector(".latest-title").classList.add("animate");
    }
  }, [inViewLatestTitle]);

  return (
    <div>
      <Banner />
      <SlideBrand />
      <main>
        <div className="top bg-black">
          <div className="top-title">
            <h1 className="text-red-500 m text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold">
              <TypeAnimation
                sequence={["Sản phẩm", 1000, "Thương hiệu", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div className="top-product grid grid-cols-3 gap-4">
            <div className="top-product__1">
              <div ref={ref1}>
                <Card
                  shadow={false}
                  className={`card relative grid h-[50rem] w-full items-end justify-center overflow-hidden text-center ${
                    inView1 ? "slide-in" : ""
                  }`}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center card-bg"
                    style={{
                      backgroundImage:
                        "url('public/top_products/product1.webp')",
                    }}
                  >
                    <div className="absolute inset-0 h-full w-full bg-gradient bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </CardHeader>
                  <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                      variant="h2"
                      color="white"
                      className="mb-6 font-medium leading-[1.5]"
                    >
                      Summit Sneakers
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                      Hottest Deals Of The Month
                    </Typography>
                  </CardBody>
                  <div className="card-border" />
                </Card>
              </div>
            </div>
            <div className="top-product__1 grid grid-rows-2 gap-4">
              <div ref={ref2}>
                <Card
                  shadow={false}
                  className={`card relative grid h-[24rem] w-full items-end justify-center overflow-hidden text-center ${
                    inView2 ? "slide-in" : ""
                  }`}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center card-bg"
                    style={{
                      backgroundImage:
                        "url('public/top_products/product2.webp')",
                    }}
                  >
                    <div className="absolute inset-0 h-full w-full bg-gradient bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </CardHeader>
                  <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                      variant="h2"
                      color="white"
                      className="mb-6 font-medium leading-[1.5]"
                    >
                      Summit Sneakers
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                      Hottest Deals Of The Month
                    </Typography>
                  </CardBody>
                  <div className="card-border" />
                </Card>
              </div>
              <div ref={ref3}>
                <Card
                  shadow={false}
                  className={`card relative grid h-[24rem] w-full items-end justify-center overflow-hidden text-center ${
                    inView3 ? "slide-in" : ""
                  }`}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center card-bg"
                    style={{
                      backgroundImage:
                        "url('public/top_products/product3.webp')",
                    }}
                  >
                    <div className="absolute inset-0 h-full w-full bg-gradient bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </CardHeader>
                  <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                      variant="h2"
                      color="white"
                      className="mb-6 font-medium leading-[1.5]"
                    >
                      How we design and code open-source projects?
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                      Tania Andrew
                    </Typography>
                  </CardBody>
                  <div className="card-border" />
                </Card>
              </div>
            </div>
            <div className="top-product__1">
              <div ref={ref4}>
                <Card
                  shadow={false}
                  className={`card relative grid h-[50rem] w-full items-end justify-center overflow-hidden text-center ${
                    inView4 ? "slide-in" : ""
                  }`}
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center card-bg"
                    style={{
                      backgroundImage:
                        "url('public/top_products/product4.webp')",
                    }}
                  >
                    <div className="absolute inset-0 h-full w-full bg-gradient bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </CardHeader>
                  <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                      variant="h2"
                      color="white"
                      className="mb-6 font-medium leading-[1.5]"
                    >
                      How we design and code open-source projects?
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                      Tania Andrew
                    </Typography>
                  </CardBody>
                  <div className="card-border" />
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div ref={refLatestTitle} className="latest">
          <div className={`latest-title ${inViewLatestTitle ? "animate" : ""}`}>
            <h1 className="text-red-500 m text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold">
              <TypeAnimation
                sequence={["Sản phẩm", 1000, "Mới nhất", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div className="latest-products">
            <div className="latest-products__content">
              <div className="latest-products__info">
                <h2 className="text-white text-2xl font-bold mb-2">
                  Product Title
                </h2>
                <p className="text-gray-300 text-sm mb-4">
                  Product description lorem ipsum dolor sit amet.
                </p>
                <div className="buttons hidden">
                  <button className="bg-white text-black px-4 py-2 rounded mr-2">
                    Button 1
                  </button>
                  <button className="bg-white text-black px-4 py-2 rounded">
                    Button 2
                  </button>
                </div>
              </div>
              <div className="card-image">
                <img src="public/top_products/product2.webp" alt="Product" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
