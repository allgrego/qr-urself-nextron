import { FC } from "react";
import { MainLayoutProps } from "./mainLayout.types";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="relative bg-gradient-to-br from-sky-900  to-violet-400 w-full min-h-screen z-0">
            <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-60 z-10">
                <div className="blur-[106px] h-56 bg-gradient-to-tr from-blue-900 to-blue-300 "></div>
                <div className="blur-[106px] h-32 bg-gradient-to-br from-cyan-400 to-sky-200"></div>
            </div>
            <div className="absolute inset-0 z-50 h-screen">
                {children}
            </div>
        </div>
    );
}

export default MainLayout;