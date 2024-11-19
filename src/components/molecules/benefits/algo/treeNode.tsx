import {AnimatePresence, motion} from 'motion/react';
import {FC} from 'react';

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
}

export const NODE_SIZE_PX = 56;
const NODE_SPACING_Y = 120;  // Вертикальное расстояние между уровнями

// Величина горизонтального смещения уменьшается с увеличением глубины дерева
const getHorizontalSpacing = (level: number) => {
    return 200 / level;  // Чем глубже, тем меньше расстояние
};

// Функция для расчёта позиции узла с учётом родителя
const getXPosition = (parentX: number, isLeftChild: boolean, level: number) => {
    const spacing = getHorizontalSpacing(level);
    return isLeftChild ? parentX - spacing : parentX + spacing;
};

const TreeNodeComponent: FC<TreeNodeProps> = ({node, parentX, parentY, x, y, level, index}) => {
    const deltaX = NODE_SIZE_PX / 2;
    const deltaY = 2;

    return (
        <>
            {/* Соединение с родителем */}
            {parentX !== undefined && parentY !== undefined && (
                    <svg
                        className="absolute"
                        style={{top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible'}}
                    >
                        <motion.line
                            key={`${x}-${y}`}
                            x1={parentX + deltaX}
                            y1={parentY + NODE_SIZE_PX - deltaY}
                            x2={x + deltaX}
                            y2={y + deltaY}
                            initial={{pathLength: 0}}
                            animate={{pathLength: 1}}
                            exit={{pathLength: 0}}
                            className="stroke-main stroke-[4px]"
                        />
                    </svg>
            )}


            {/* Узел */}
            <motion.div
                key={`${x}-${y}-${node.value}`}
                className="absolute flex flex-col items-center"
                style={{top: y, left: x}}
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.5}}
                transition={{duration: 0.5}}
            >
                <div
                    style={{width: `${NODE_SIZE_PX}px`}}
                    className="bg-main text-white aspect-square flex justify-center items-center rounded-full shadow-md"
                >
                    {node.value}
                </div>
            </motion.div>

            <AnimatePresence>
                {/* Левые и правые дети */}
                {node.left && (
                    <TreeNodeComponent
                        node={node.left}
                        parentX={x}
                        parentY={y}
                        x={getXPosition(x, true, level + 1)}  // позиция левого ребёнка с учётом позиции родителя
                        y={y + NODE_SPACING_Y}
                        level={level + 1}
                        index={index * 2 - 1}
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {node.right && (
                    <TreeNodeComponent
                        node={node.right}
                        parentX={x}
                        parentY={y}
                        x={getXPosition(x, false, level + 1)}  // позиция правого ребёнка с учётом позиции родителя
                        y={y + NODE_SPACING_Y}
                        level={level + 1}
                        index={index * 2}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default TreeNodeComponent;
