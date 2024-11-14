import { MarkerType, type Edge, type Node } from '@xyflow/react';

export const initialNodes = [
  {
    id: '1-1',
    type: 'input',
    data: {
      label: 'Input Node',
    },
    position: { x: 150, y: 0 },
  },
  {
    id: '1-2',
    type: 'default',
    data: {
      label: 'Default Node',
    },
    position: { x: 0, y: 100 },
  },
  {
    id: '1-3',
    type: 'output',
    data: {
      label: 'Output Node',
    },
    position: { x: 300, y: 100 },
  },
] as Node[];

export const initialEdges = [
  {
    id: '1-1#1-2',
    source: '1-1',
    target: '1-2',
    label: 'edge',
    type: 'smoothstep',
  },
  {
    id: '1-1#1-3',
    source: '1-1',
    target: '1-3',
    animated: true,
    label: 'animated edge',
  },
] as Edge[];
