import type { ComponentType } from 'react';
import CustomEdge from './edges';
import { CustomNodeTypeEnum } from './enum';
import CustomNode from './nodes';
import StartNode from './nodes/start';

export const NodeComponentMap: Record<string, ComponentType<any>> = {
  [CustomNodeTypeEnum.Start]: StartNode,
  [CustomNodeTypeEnum.End]: StartNode,
  [CustomNodeTypeEnum.Code]: StartNode,
  [CustomNodeTypeEnum.HttpRequest]: StartNode,
  [CustomNodeTypeEnum.LLM]: StartNode,
  [CustomNodeTypeEnum.IfElse]: StartNode,
};

export const edgeTypes = {
  'custom-edge': CustomEdge,
};
export const nodeTypes = {
  'custom-node': CustomNode,
};
