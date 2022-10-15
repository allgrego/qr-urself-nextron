import { FC } from "react";
import { ContentTextAreaProps } from "./contentTextArea.types";

const ContentTextArea: FC<ContentTextAreaProps> = ({ content, onChange, prettyJson, parsePlainText }) => {
    return (
        <form>
            <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200  ">
                <div className="flex justify-between items-center py-1 px-3 border-b bg-slate-100">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x">
                        <div className="flex items-center space-x-1 sm:pr-4">

                            <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-white hover:bg-indigo-400"
                                onClick={parsePlainText}
                                title="Parse as plain text"
                            >
                                <span className="text-xs">TXT</span>
                            </button>

                        </div>
                        <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                        <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-white hover:bg-blue-400"
                                onClick={prettyJson}
                                title="Parse as pretty JSON if it's a valid one"
                            >
                                <span className="text-xs">JSON</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-2 px-4 bg-white rounded-b-lg ">
                    <label htmlFor="editor" className="sr-only">Publish post</label>
                    <textarea id="editor"
                        className="block resize-none px-2 pt-2 w-full text-sm text-gray-800 bg-white border-0  focus:ring-1" 
                        placeholder="Write the QR content here..." 
                        rows={4}
                        onChange={onChange}
                        value={content}
                    />
                </div>
            </div>
        </form>

    );
}

export default ContentTextArea;