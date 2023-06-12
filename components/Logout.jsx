import {Fragment} from "react";
import Avatar from "@/components/Avatar";
import Text from "@/components/Text";
import Image from "next/image";
import {useRouter} from "next/router";


const Logout = ({
                    firstLetter,
    userName = "",
    handleLogOut = () => { },
    toggleClick = () => { },
    width = "min-w-[200px]",
    position = "top-[50px] right-0",
    basePath = process.env.NEXT_PUBLIC_BASE_PATH
}) => {
 const router = useRouter();


    return (
        <Fragment>
             <div className={`absolute z-10 ${width} ${position}`}>
            <div
                id="modal"
                className="fixed inset-0 bg-transparent bg-opacity-5 transition-opacity h-full w-full"
                onClick={toggleClick} />
            <div
                className={`relative z-10 border border-gray-200 bg-white rounded-lg shadow-lg`}
            >
                <div className="flex items-center px-4 py-3 gap-2 bg-white border-b border-gray-200 hover:bg-gray-100 cursor-pointer ">
                    <Avatar size="small" fontSize="text-xs" firstLetter={firstLetter} />
                    <Text className="text-xs font-medium leading-7 text-gray-500 truncate">
                        {userName}
                    </Text>
                </div>
                <div
                    className="flex items-center px-4 py-3 gap-2 bg-white hover:bg-gray-100 cursor-pointer "
                    onClick={handleLogOut}
                >
                    <div className="w-6">
                        <Image
                            src="/images/icons/logout.svg"
                            width={18}
                            height={18}
                            alt="logout"
                        />
                    </div>

                    <Text className="text-sm font-normal leading-7 text-gray-500" onClick= {() => {
                        // removeAuth();
                        router.push('/');
                    }} >
                        Logout
                    </Text>
                </div>
            </div>
        </div>
        </Fragment>
    )

}


export default Logout;