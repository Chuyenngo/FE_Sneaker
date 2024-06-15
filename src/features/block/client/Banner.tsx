const Banner = () => {
  return (
    <div className="banner bg-black text-white  grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ">
      <div className="banner-text px-10 py-20">
        <div className="banner-text__description">
          <h1>Step into Greatness with Shoeflow- Your Path to Style</h1>
        </div>
        <div className="banner-text__name">
          <h3>Product 1</h3>
        </div>
        <div className="banner-text__button">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text"> Xem sản phẩm</span>
          </button>
        </div>
      </div>
      <div className="banner-image">
        <div className="banner-image__price ">
          <span>300.000 VND</span>
        </div>
        <div className="banner-image__main">
          <img src="/src/images/products/product1.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
