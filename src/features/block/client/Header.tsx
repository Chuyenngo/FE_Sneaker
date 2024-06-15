import { TbSearch } from "react-icons/tb";

const Header = () => {
  return (
    <div className="header ">
      <div className="header-left flex justify-between items-center ">
        <div className="header-left__logo mr-72">
          <img src="/src/images/main/logo.png" alt="" width={"80%"} />
        </div>
        <div className="header-search w-7/12 ">
          <form>
            <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
              <input
                className="text-lg flex-grow outline-none px-3 pt-5 pb-5 "
                type="text"
                placeholder="Bạn cần tìm gì ?"
              />
              <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                <button className="bg-black text-white text-base rounded-lg px-4 py-4 font-thin hover:bg-red-500 animate-out">
                  <TbSearch fontSize={"25px"} />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="header-right flex items-center ">
          <div className="ml-40">
            <img
              src="https://cdn.prod.website-files.com/66312dcf103b5edc9ccc1113/66433ab699f2348f63aa3c38_headphones.webp"
              alt=""
              width={"70%"}
            />
          </div>
          <div className=" text-white text-2xl ">
            <h3>Liên hệ </h3>
            <p>0975404518</p>
          </div>

          <div className="ml-10">
            <img
              src="	https://cdn.prod.website-files.com/66312dcf103b5edc9ccc1113/66348d48f95f40d7af7cb8da_user%20(1).webp"
              width={"35%"}
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn.prod.website-files.com/66312dcf103b5edc9ccc1113/66348d7190ceb2adf0754ea5_shopping-bag.webp"
              alt=""
              width={"35%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
