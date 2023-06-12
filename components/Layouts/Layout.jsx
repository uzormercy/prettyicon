import Avatar from "@/components/Avatar";
import {useState} from "react";
import Image from "next/image";
import Logout from "@/components/Logout";



const Layout = ({children}) => {
      const [showLogout, setShowLogout] = useState(false);

  const toggleClick = (e) => {
    e.stopPropagation();
    if (e.target.id === 'modal') {
      setShowLogout(false);
    }
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH
    return (
        <div className="flex flex-row item-stretch">
            <div className="bg-blue-900 w-60 min-w-[240px] px-6 py-4 min-h-screen">
                <h4 className="text-2xl cursor-pointer font-medium select-none">PrettyIcon</h4>
            </div>
            <div className="w-full">
                <div className="w-ful space-x-4 shadow-nav px-6 py-2 flex flex-row items-center bg-white w-full min-h-[66px]">
                     <div
        className="relative flex items-center  cursor-pointer ml-auto"
        onClick={() => setShowLogout(true)}
                     >
                         <Avatar
                          size="large"
                          className="mr-2"
                          imgSrc={"/images/01.jpg"}
                          firstLetter="P"
                        />
                         <span
                      className={`flex items-center ml-2 transform duration-300 h-4 ${showLogout ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      <Image
                        src="/images/icons/angle-down.svg"
                        width={14}
                        height={14}
                        alt="arrow down"
                      />
                    </span>
                    {showLogout && (
                      <Logout
                        userName="Pretty Icon"
                        firstLetter="p"
                        handleLogOut={() => {}}
                        toggleClick={toggleClick}
                        basePath={basePath}
                      />
                    )}
                     </div>

                </div>
                {children}
            </div>
        </div>
    )
}

export  default  Layout;