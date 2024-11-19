import { AnimatePresence, motion } from 'motion/react';
import { FC, useEffect, useState } from 'react';

export type TreeNode = {
    value: number;
    left?: TreeNode;
    right?: TreeNode;
};

interface TreeNodeProps {
    node: TreeNode;
    parentX?: number;
    parentY?: number;
    x: number;
    y: number;
    level: number;
    index: number;
    nodeSizePxRelative: number;
}

export const NODE_SIZE_PX = 56;
const NODE_SPACING_Y = 120;

const getHorizontalSpacing = (level: number, isMobile: boolean) => {
    const baseSpacing = isMobile ? 80 : 200;
    return baseSpacing / Math.pow(level, 1.5);
};

const getXPosition = (parentX: number, isLeftChild: boolean, level: number, isMobile: boolean) => {
    const spacing = getHorizontalSpacing(level, isMobile);
    return isLeftChild ? parentX - spacing : parentX + spacing;
};

export const TreeNodeComponent: FC<TreeNodeProps> = ({
                                                         node,
                                                         parentX,
                                                         parentY,
                                                         x,
                                                         y,
                                                         level,
                                                         index,
                                                         nodeSizePxRelative,
                                                     }) => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' && window.innerWidth <= 768
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const deltaX = nodeSizePxRelative / 2;
    const deltaY = 2;

    console.warn(isMobile );

    return (
        <>
            {parentX !== undefined && parentY !== undefined && (
                <svg
                    className="absolute"
                    style={{ top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible' }}
                >
                    <motion.line
                        key={`${x}-${y}`}
                        x1={parentX + deltaX}
                        y1={parentY + nodeSizePxRelative - deltaY}
                        x2={x + deltaX}
                        y2={y + deltaY}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        exit={{ pathLength: 0 }}
                        className="stroke-main stroke-[3px] md:stroke-[4px]"
                    />
                </svg>
            )}

            <motion.div
                key={`${x}-${y}-${node.value}`}
                className="absolute flex flex-col items-center"
                style={{ top: y, left: x }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    style={{ width: `${nodeSizePxRelative}px` }}
                    className="bg-main text-white aspect-square flex justify-center items-center rounded-full shadow-md text-sm md:text-base"
                >
                    {isMobile ? '' : node.value}
                </div>
            </motion.div>

            <AnimatePresence>
                {node.left && (
                    <TreeNodeComponent
                        nodeSizePxRelative={nodeSizePxRelative}
                        node={node.left}
                        parentX={x}
                        parentY={y}
                        x={getXPosition(x, true, level + 1, isMobile)}
                        y={y + (isMobile ? NODE_SPACING_Y / 1.5 : NODE_SPACING_Y)}
                        level={level + 1}
                        index={index * 2 - 1}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {node.right && (
                    <TreeNodeComponent
                        nodeSizePxRelative={nodeSizePxRelative}
                        node={node.right}
                        parentX={x}
                        parentY={y}
                        x={getXPosition(x, false, level + 1, isMobile)}
                        y={y + (isMobile ? NODE_SPACING_Y / 1.5 : NODE_SPACING_Y)}
                        level={level + 1}
                        index={index * 2}
                    />
                )}
            </AnimatePresence>
        </>
    );
};