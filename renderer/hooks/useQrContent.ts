import React, { useEffect } from 'react';
import { exportSvg } from '../utils';

const useQrContent = (initialContent = "") => {

    const [content, setContent] = React.useState<string>(initialContent)

    useEffect(() => {
        // Every time there is a change on content, upload the download button
        console.log('updating download button... ');
        exportSvg("qr-code")
    }, [content])

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const newContent = e.target.value
        setContent(newContent)
    }

    const clearContent = (): void => {
        setContent("")
    }

    const contentIsJson = () => {
        try {
            if (!content) return false
            const json = JSON.parse(content)
            return true
        } catch (error) {
            return false
        }
    }

    const prettyJson = () => {
        if (!contentIsJson()) return

        const jsonContent = JSON.parse(content)
        const restringContent = JSON.stringify(jsonContent, null, 2)
        setContent(restringContent)
    }

    const parsePlainText = () => {
        if (!content) return
        const newContent = content.replace(/\s+/gmi, ' ')
        if (content === newContent) return

        setContent(newContent)
    }

    return {
        content,
        setContent,
        onChange,
        clearContent,
        prettyJson,
        parsePlainText,
    };
}

export default useQrContent;