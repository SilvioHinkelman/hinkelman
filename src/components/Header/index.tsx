import { Button } from "@/ui/button";
import ThemeSwitcher from "../SwitchTheme";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex bg-orange-200 justify-center p-1 md:p-5">
      <div className="flex w-full max-w-[1920px] justify-between items-center">
        <h1 className="text-gray-950">dsa</h1>
        <div className="flex gap-2">
          <Button size="icon">
            <IoLogoLinkedin size={20} />
          </Button>
          <Button size="icon">
            <BsGithub size={20} />
          </Button>

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
