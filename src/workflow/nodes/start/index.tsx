import { CheckSquareOutlined } from '@ant-design/icons';
import type { FC } from 'react';
import React from 'react';

export type NodeProps<T = unknown> = { id: string; data: T };

const Node: FC<NodeProps<StartNodeType>> = ({ id, data }) => {
  return <div className='my-start-node'>789</div>;
};

export default React.memo(Node);
