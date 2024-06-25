import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { GoBellFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io"; // Import IoMdSync for spinning icon
import { MdOutlineWbSunny } from "react-icons/md";
import { PiDiamondsFourDuotone } from "react-icons/pi";
import { RiApps2Line } from "react-icons/ri";
import "../../../assets/style/admin.scss";
const Header = () => {
  return (
    <div>
      <div className="headerAmin flex justify-between ">
        <div className="relative flex-1 md:grow-0 ">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-full bg-background pl-8 md:w-[200px] lg:w-[336px] hover:bg-gray-100 "
          />
        </div>
        <div className="listSetting">
          <nav className="listIcons flex p-3">
            <li className="list-none ">
              <RiApps2Line className="icon" />
            </li>
            <li className="list-none">
              <MdOutlineWbSunny className="icon" />
            </li>
            <li className="list-none">
              <IoMdSettings className="icon" id="icons_setting" />
            </li>
            <li className="list-none">
              <PiDiamondsFourDuotone className="icon" />
            </li>
            <li className="list-none">
              <GoBellFill className="icon" />
            </li>
            <li className="list-none ">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </li>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
