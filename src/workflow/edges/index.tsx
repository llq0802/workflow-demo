import { CloseCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import type { EdgeProps } from '@xyflow/react';
import { BaseEdge, EdgeLabelRenderer, Position, getBezierPath, useReactFlow } from '@xyflow/react';
import { memo } from 'react';
import { produce } from 'immer';
import './index.less';

const CustomEdge = (props: EdgeProps) => {
  const { id, data, source, sourceHandleId, target, targetHandleId, sourceX, sourceY, targetX, targetY, selected } =
    props;
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    targetX: targetX - 2,
    sourceY,
    targetY,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    // curvature: 0.18,
  });
  const { setEdges } = useReactFlow();
  return (
    <>
      <BaseEdge
        {...props}
        id={id}
        path={edgePath}
        style={{
          stroke: selected ? '#2970FF' : '#D0D5DD',
          strokeWidth: selected ? 3 : 1.5,
          transition: 'stroke .2s',
        }}
      />
      <EdgeLabelRenderer>
        <div
          className='my-custom-edge-label-icon'
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
          }}
        >
          <PlusCircleFilled className='add-icon' />

          <CloseCircleFilled
            className='add-icon'
            onClick={() => {
              setEdges((es) => es.filter((e) => e.id !== id));
            }}
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export default memo(CustomEdge);
