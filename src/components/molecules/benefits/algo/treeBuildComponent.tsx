import React, {useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import TreeNodeComponent, {NODE_SIZE_PX, TreeNode} from "./treeNode";
import ChatBtn from "../../contact/chat_btn";
import Heading from "../../../atoms/heading";
import {useInView} from "react-intersection-observer";
import {d_benefits} from "../../../dictionary";
import {useRouter} from "next/router";

const MAX_TREE_DEPTH = 4;

const TreeBuildComponent = () => {
    const [root, setRoot] = useState<TreeNode | null>(null);
    const [isFull, setIsFull] = useState(false);  // Состояние для блокировки кнопки

    const addNode = (root: TreeNode, value: number) => {
        if (!root) return;

        const queue: { node: TreeNode; depth: number }[] = [{node: root, depth: 1}];

        while (queue.length > 0) {
            const {node, depth} = queue.shift()!;

            if (depth >= MAX_TREE_DEPTH) {
                console.warn(`Max depth reached at depth ${depth}. Searching for a node at level 3 or above.`);
                return;
            }

            if (!node.left) {
                node.left = {value};
                return;
            } else {
                queue.push({node: node.left, depth: depth + 1});
            }

            if (!node.right) {
                node.right = {value};
                return;
            } else {
                queue.push({node: node.right, depth: depth + 1});
            }
        }
    };

    const calculateDepth = (node: TreeNode | null | undefined): number => {
        if (!node) return 0;
        const leftDepth = calculateDepth(node?.left);
        const rightDepth = calculateDepth(node?.right);
        return Math.max(leftDepth, rightDepth) + 1;
    };

    const removeRandomLeaf = (root: TreeNode | null): boolean => {
        if (!root) return false;

        const leaves: { parent: TreeNode; isLeft: boolean }[] = [];
        const queue: { node: TreeNode; parent?: TreeNode; isLeft?: boolean }[] = [{node: root}];

        while (queue.length > 0) {
            const {node, parent, isLeft} = queue.shift()!;

            if (!node.left && !node.right) {
                if (parent) leaves.push({parent, isLeft: isLeft!});
            } else {
                if (node.left) queue.push({node: node.left, parent: node, isLeft: true});
                if (node.right) queue.push({node: node.right, parent: node, isLeft: false});
            }
        }

        if (leaves.length === 0) return false;

        const randomLeaf = leaves[Math.floor(Math.random() * leaves.length)];
        if (randomLeaf.isLeft) {
            randomLeaf.parent.left = undefined;
        } else {
            randomLeaf.parent.right = undefined;
        }

        return true;
    };

    const isTreeFull = (node: TreeNode | null, depth: number): boolean => {
        if (!node) return false;
        if (depth >= MAX_TREE_DEPTH) return true;  // Если достигли максимальной глубины
        if (!node.left || !node.right) return false;  // Если есть свободные места, возвращаем false
        return isTreeFull(node.left, depth + 1) && isTreeFull(node.right, depth + 1);
    };

    const handleAddNode = () => {
        calcXCenter();
        const newValue = Math.floor(Math.random() * 100);
        console.warn(root)
        if (root === null) {
            setRoot({value: newValue});
        } else {
            const newRoot = {...root};
            addNode(newRoot, newValue);
            setRoot(newRoot);
        }
    };

    const handleRemoveNode = () => {
        calcXCenter();
        if (root !== null) {
            const newRoot = {...root};
            const nodeRemoved = removeRandomLeaf(newRoot);

            if (nodeRemoved) {
                setRoot(newRoot);  // Обновляем состояние, если узел был удален
            } else {
                setRoot(null);
            }
        }
    };

    const parentRef = useRef<HTMLDivElement>(null);
    const [treeXCenter, setTreeXCenter] = useState(0);

    const calcXCenter = () => {
        const elem = parentRef.current;
        if (elem)
            setTreeXCenter(elem.offsetWidth / 2 - NODE_SIZE_PX / 2);
    };

    useEffect(() => {
        calcXCenter();
    }, [calcXCenter]);

    // Эффект для проверки состояния кнопки
    useEffect(() => {
        const depth = calculateDepth(root);
        const full = isTreeFull(root, 1);
        setIsFull(depth >= MAX_TREE_DEPTH && full);
    }, [calculateDepth, isTreeFull, root]);

    const [ref, inView] = useInView({threshold: 0.9, triggerOnce: true})

    useEffect(() => {
        if (inView) {
            let addedNodes = 0;
            const interval = setInterval(() => {
                if (addedNodes < 6) {
                    setRoot((prevRoot) => {
                        const newValue = Math.floor(Math.random() * 100);
                        const updatedRoot = prevRoot ? {...prevRoot} : {value: newValue};
                        if (prevRoot) {
                            addNode(updatedRoot, newValue);
                        }
                        addedNodes++;
                        return updatedRoot;
                    });
                } else {
                    clearInterval(interval);
                }
            }, 600);

            return () => clearInterval(interval);
        }
    }, [inView]);

    const lang = useRouter().locale || "en"

    return (
        <motion.div
            ref={ref}
            layout
            className="rounded-3xl flex flex-col md:text-xl overflow-hidden relative w-full h-full justify-between bg-gray_medium dark:bg-black_medium duration-200 transition-colors">
            <motion.div layout='position' className="flex gap-4 p-4 lg:p-6 items-start justify-between">
                <Heading>
                    {d_benefits.algo[lang]}
                </Heading>
                <div className=' flex flex-col gap-4'>

                <ChatBtn
                    onClick={handleAddNode}
                    disabled={isFull}
                >
                    {d_benefits.add_node[lang]}
                </ChatBtn>
                <ChatBtn
                    disabled={root === null}
                    onClick={handleRemoveNode}
                >
                    {d_benefits.remove_node[lang]}
                </ChatBtn>
                </div>

            </motion.div>
            <div className="relative w-full h-[500px]">
                <AnimatePresence>
                    {root && (
                        <div ref={parentRef} className="relative w-full h-[500px]">
                            <TreeNodeComponent node={root} x={treeXCenter} y={0} level={0} index={0}/>
                        </div>
                    )}
                </AnimatePresence>

            </div>

        </motion.div>
    );
};

export default TreeBuildComponent;
