"use client";

import {
  RiHomeLine,
  RiArrowRightDoubleFill,
  RiArrowLeftDoubleFill,
  RiTaskLine,
  RiChat3Line,
  RiAccountCircleLine,
  RiMailLine,
  RiMap2Line,
  RiSettingsLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Button } from "./ui/button";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown, Plus, X } from "lucide-react";

export interface NavLink {
  title: string;
  label?: string;
  href: string;
  icon: IconType;
}

export interface SideLink extends NavLink {
  sub?: NavLink[];
}

const links: SideLink[] = [
  {
    title: "Dashboard",
    label: "",
    href: "/",
    icon: RiHomeLine,
  },
  {
    title: "Tasks",
    label: "",
    href: "/tasks",
    icon: RiTaskLine,
  },
  {
    title: "Chats",
    label: "",
    href: "/chats",
    icon: RiChat3Line,
  },
  {
    title: "Authentication",
    label: "",
    href: "",
    icon: RiAccountCircleLine,
    sub: [
      {
        title: "Sign In (email + password)",
        label: "",
        href: "/sign-in",
        icon: RiMailLine,
      },
      {
        title: "Sign In (Box)",
        label: "",
        href: "/sign-in-2",
        icon: RiMap2Line,
      },
    ],
  },
  {
    title: "Settings",
    label: "",
    href: "/settings",
    icon: RiSettingsLine,
  },
];

const ArrowButtonSidebar = ({ isMinimize, handleMinimize }: { isMinimize: boolean; handleMinimize: () => void }) => {
  return (
    <Button onClick={() => handleMinimize()} className=" rounded-full p-0 w-8 h-8 absolute -right-4 top-[50%] translate-y-[-50%]">
      {isMinimize ? <RiArrowRightDoubleFill className="w-5 h-5" /> : <RiArrowLeftDoubleFill className="w-5 h-5" />}
    </Button>
  );
};

const LogoSidebar = ({ isMinimize }: { isMinimize: boolean }) => {
  return (
    <div className={cn("text-xl border-b font-semibold text-center flex justify-center items-center px-5  py-10")}>
      <h1 className="font-semibold text-xl text-center">CMS</h1>
      <h1
        className={cn("font-semibold text-xl ml-2", {
          "invisible w-0 ml-0": isMinimize,
        })}
      >
        Dasboard
      </h1>
    </div>
  );
};

const SideBar = () => {
  const [isMinimize, setIsMinimize] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMinimize = useCallback(() => {
    if (!isMinimize) {
      setIsOpen(false);
    }
    setIsMinimize(!isMinimize);
  }, [isMinimize]);

  return (
    <div
      className={cn("flex flex-col h-full relative md:w-64 transition-all", {
        "md:w-16": isMinimize,
      })}
    >
      <ArrowButtonSidebar isMinimize={isMinimize} handleMinimize={handleMinimize} />
      <LogoSidebar isMinimize={isMinimize} />

      <div className="overflow-y-auto flex-grow flex flex-col">
        {links.map((navLink, index) => {
          const LinkIcon = navLink.icon;
          if (!navLink.href) {
            return (
              <Collapsible key={index + 1} open={isOpen} onOpenChange={setIsOpen} className="cursor-pointer  space-y-2">
                <CollapsibleTrigger asChild className="group">
                  <div
                    className={cn(
                      "p-5 border-b cursor-pointer flex items-center gap-2",

                      {
                        "py-5 px-0 justify-center": isMinimize,
                      }
                    )}
                  >
                    <div
                      className={cn("flex items-center justify-between  w-full", {
                        "flex-none w-max": isMinimize,
                      })}
                    >
                      <div className={cn("flex items-center  gap-2")}>
                        <RiHomeLine className="w-5 h-5" /> {!isMinimize && <h1>{navLink.title}</h1>}
                      </div>
                      {!isMinimize && (
                        <RiArrowDownSLine className="w-5 h-5 transition-all group-data-[state='open']:-rotate-180" />
                      )}
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pl-5 collapsibleDropdown">
                  <div className=" px-4 py-3 font-mono text-sm border-l border-l-white hover:bg-slate-500">@radix-ui/colors</div>
                  <div className=" px-4 py-3 font-mono text-sm border-l border-l-white hover:bg-slate-500">@stitches/react</div>
                  <div className=" px-4 py-3 font-mono text-sm border-l border-l-white hover:bg-slate-500">@stitches/react</div>
                  <div className=" px-4 py-3 font-mono text-sm border-l border-l-white hover:bg-slate-500">@stitches/react</div>
                  <div className=" px-4 py-3 font-mono text-sm border-l border-l-white hover:bg-slate-500">@stitches/react</div>
                  <div className=" px-4 py-3 font-mono text-sm border-l border-l-white hover:bg-slate-500">@stitches/react</div>
                  <div className=" px-4 py-3 font-mono text-sm border-l border-l-white hover:bg-slate-500">@stitches/react</div>
                  <div className=" px-4 py-3 font-mono text-sm border-l border-l-white hover:bg-slate-500">@stitches/react</div>
                </CollapsibleContent>
              </Collapsible>
            );
          }
          return (
            <Link
              href={navLink.href}
              key={index + 1}
              className={cn("px-5 py-5 border-b  flex items-center gap-2", {
                " px-0 justify-center": isMinimize,
              })}
            >
              <LinkIcon className="w-5 h-5" /> {!isMinimize && <h1>{navLink.title}</h1>}
            </Link>
          );
        })}
        {/* {Array.from({ length: 10 }).map((test, index) => {
          return (
            <Link
              href={"/"}
              key={index + 1}
              className={cn(
                "px-5 py-5 border-b flex    items-center gap-2",
                {
                  "border-t": index === 0,
                },
                {
                  "px-0 justify-center": isMinimize,
                }
              )}
            >
              <RiHomeLine className="w-5 h-5" /> {!isMinimize && <h1>test</h1>}
            </Link>
          );
        })} */}
      </div>
    </div>
  );
};

export default SideBar;
