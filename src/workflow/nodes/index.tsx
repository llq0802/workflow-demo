import { memo } from 'react';
import { NodeComponentMap } from '../constant';
import BaseNode from './node-base';
import type { NodeProps } from '@xyflow/react';

const CustomNode = (props: NodeProps) => {
  const nodeData = props.data;
  const NodeComponent = NodeComponentMap[nodeData.type];
  return (
    <BaseNode {...props}>
      <NodeComponent />
    </BaseNode>
  );
};

export default memo(CustomNode);
