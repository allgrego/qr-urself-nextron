import { downloadButtonId } from "../../utils"

const DownloadButton = ({ className = "" }) => {

    const now = new Date()

    const year = String(now.getFullYear()).padStart(4, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    const fileName = `qr-urlsef-${year}${month}${day}${hours}${minutes}${seconds}`


    return (
        <a id={downloadButtonId}
            download={fileName}
            className="w-2/3 mx-auto block items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-indigo-800"
        >
            Download
        </a>
    );
}

export default DownloadButton;