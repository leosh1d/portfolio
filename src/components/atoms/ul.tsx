import {FC, ReactNode} from "react";

interface ULProps {
    children: ReactNode;
    className?: string;
}

export const UL: FC<ULProps> = ({ children, className = '' }) => {
    return (
        <ul className={`list-disc pl-6 ${className}`}>
            {children}
        </ul>
    );
};