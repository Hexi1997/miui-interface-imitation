import { useState } from "react";
import { useWindowScroll } from "react-use";
import cn from "classnames";
const menus = ["首页", "隐私", "无障碍", "小米社区", "云服务", "小米商城"];
export function Header() {
  const [isHoverOnMenu, setHoverOnMenu] = useState(false);
  const { y } = useWindowScroll();
  return (
    <header
      className={cn(
        "duration-200 z-10 overflow-hidden pl-20 absolute top-0 inset-x-0 pr-[104px] flex justify-between items-center text-black bg-white/80 backdrop-blur-2xl",
        y > 10 ? "h-0" : "h-14"
      )}
    >
      <img src="/assets/miui14-black.svg" className="w-[68px] h-[18px]" />
      <nav className="flex gap-x-[68px]">
        {menus.map((item) => (
          <span className="hover:text-[rgb(13,132,255)] cursor-pointer duration-200">
            {item}
          </span>
        ))}
      </nav>
      <div
        className="w-6 h-6 cursor-pointer"
        onMouseEnter={() => {
          setHoverOnMenu(true);
        }}
        onMouseLeave={() => {
          setHoverOnMenu(false);
        }}
        onClick={() => {
          setHoverOnMenu(!isHoverOnMenu);
        }}
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <rect
            width="74"
            height="6"
            x={isHoverOnMenu ? "26.2427" : "13"}
            y={isHoverOnMenu ? "22.3259" : "22"}
            rx="6"
            transform={isHoverOnMenu ? "rotate(45 26.2427 22.3259)" : ""}
            className="transition-all"
          ></rect>
          <rect
            width="74"
            height="6"
            x={isHoverOnMenu ? "22" : "13"}
            y={isHoverOnMenu ? "74.3259" : "47"}
            rx="6"
            transform={isHoverOnMenu ? "rotate(-45 22 74.3259)" : ""}
            className="transition-all"
          ></rect>
          <rect
            width="53"
            height="6"
            x="34"
            y={isHoverOnMenu ? "90" : "72"}
            opacity={isHoverOnMenu ? "0" : "1"}
            rx="6"
            className="transition-all"
          ></rect>
        </svg>
      </div>
    </header>
  );
}
