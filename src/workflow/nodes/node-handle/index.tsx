import { PlusCircleFilled } from '@ant-design/icons';
import { Handle, Position } from '@xyflow/react';
import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import './index.less';

type NodeHandleProps = {
  handleId: string;
  handleClassName?: string;
  nodeSelectorClassName?: string;
} & Pick<Node, 'id' | 'data'>;

export const NodeTargetHandle = memo(({ id, data, handleId, handleClassName }: NodeHandleProps) => {
  return (
    <Handle
      className='my-custom-handle'
      data-handle-target-custom-node-id={id}
      id={handleId}
      type='target'
      position={Position.Left}
      isConnectable
      // hidden={data.type === BlockEnum.Start}
      onClick={(e) => {
        e.stopPropagation();
      }}
    ></Handle>
  );
});

export const NodeSourceHandle = memo(({ id, data, handleId, handleClassName }: NodeHandleProps) => {
  return (
    <Handle
      className='my-custom-handle'
      data-handle-source-custom-node-id={id}
      id={handleId}
      type='source'
      position={Position.Right}
      isConnectable
      // hidden={data.type === BlockEnum.End}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <PlusCircleFilled className='my-custom-handle-icon' />
    </Handle>
  );
});
