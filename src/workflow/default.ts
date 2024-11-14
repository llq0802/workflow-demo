import { MarkerType, type Edge, type Node } from '@xyflow/react';
import { CustomNodeTypeEnum } from './enum';

export const initialNodes = [
  {
    id: '1-1',
    type: 'custom-node',
    data: {
      type: CustomNodeTypeEnum.Start,
    },
    position: { x: 150, y: 0 },
  },
  {
    id: '1-2',
    type: 'custom-node',
    data: {
      type: CustomNodeTypeEnum.Start,
    },
    position: { x: 0, y: 100 },
  },
  {
    id: '1-3',
    type: 'custom-node',
    data: {
      type: CustomNodeTypeEnum.Start,
    },
    position: { x: 300, y: 100 },
  },
] as Node[];

export const initialEdges = [
  {
    id: '1-1#1-2',
    type: 'custom-edge',
    source: '1-1',
    target: '1-2',
    label: 'edge',
  },
  {
    id: '1-1#1-3',
    type: 'custom-edge',
    source: '1-1',
    target: '1-3',
    animated: true,
    label: 'animated edge',
  },
] as Edge[];
