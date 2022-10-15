import React from "react"

export interface ContentTextAreaProps {
    content: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    clearContent: () => void;
    prettyJson: () => void;
    parsePlainText: ()=> void;
}