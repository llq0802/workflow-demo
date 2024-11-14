import { CheckCircleOutlined, ExclamationCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import type { FC, ReactElement } from 'react';
import { cloneElement, memo, useMemo, useRef } from 'react';
import { NodeSourceHandle, NodeTargetHandle } from '../node-handle';
import type { NodeProps } from '@xyflow/react';
import './index.less';

type BaseNodeProps = {
  children: ReactElement;
} & NodeProps;

const BaseNode: FC<BaseNodeProps> = ({ id, data, children }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <div className='my-custom-node-container' data-custom-node-id={id} data-custom-node-type={data.type} ref={nodeRef}>
      <NodeTargetHandle id={id} data={data} handleId='target' />
      {cloneElement(children, { id, data })}
      <NodeSourceHandle id={id} data={data} handleId='source' />
    </div>
  );
};

export default memo(BaseNode);
