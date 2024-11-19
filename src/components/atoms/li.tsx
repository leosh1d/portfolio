import {FC, ReactNode} from "react";

interface LIProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}
export const LI: FC<LIProps> = ({ children, className = '', onClick }) => {
    return (
        <li className={`mb-2 ${className}`} onClick={onClick}>
            {children}
        </li>
    );
};