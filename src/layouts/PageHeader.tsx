import {
  Menu,
  Youtube,
  Upload,
  Bell,
  User,
  Mic,
  Search,
  ArrowLeft,
} from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <>
      <div className="flex justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4">
        <div
          className={` items-center flex-shrink-0 gap-4 ${
            showFullWidthSearch ? "hidden" : "flex"
          }`}
        >
          <Button variant="ghost" size="icon" className="bg-red-500">
            <Menu />
          </Button>
          <a href="/">
            <div className="flex justify-between items-center">
              <Youtube className="text-red-600" />
              <p>
                <span className=" text-red-600 font-semibold text-xl">You</span>
                <span className=" text-slate-400 font-semibold  text-xl">
                  Tube
                </span>
              </p>
            </div>
          </a>
        </div>
        <form
          className={`gap-4 flex-grow justify-center ${
            showFullWidthSearch ? "flex" : "hidden md:flex "
          }`}
        >
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            variant="ghost"
            size="icon"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
          <div className="flex flex-grow max-w-[600px]">
            <input
              type="search"
              placeholder="Search"
              className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary
              py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
            />
            <Button className="py-2 px-4  rounded-r-full border border-l-0 border-secondary-border flex-shrink-0">
              <Search />
            </Button>
          </div>
          <Button size="icon" className="flex-shrink-0">
            <Mic />
          </Button>
        </form>
        <div
          className={`flex-shrink-0 md:gap-2 ${
            showFullWidthSearch ? "hidden" : "flex"
          }`}
        >
          <Button
            onClick={() => setShowFullWidthSearch(true)}
            size="icon"
            variant="ghost"
            className="md:hidden"
          >
            <Search />
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Mic />
          </Button>
          <Button size="icon" variant="ghost">
            <Upload />
          </Button>
          <Button size="icon" variant="ghost">
            <Bell />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
        </div>
      </div>
    </>
  );
}
