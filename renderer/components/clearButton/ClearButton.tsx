import { FC } from "react";
import { ClearButtonProps } from "./clearButton.types";

const ClearButton: FC<ClearButtonProps> = ({ onClick }) => {
    return (
        <div
            className="w-2/3 mx-auto items-center px-5 py-2.5 text-sm font-medium text-center text-white border-4 border-indigo-600 bg-transparent rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-indigo-400 cursor-pointer"
            onClick={onClick}
        >
            Clear
        </div>
    );
}

export default ClearButton;