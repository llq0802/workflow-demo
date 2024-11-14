import { PlusCircleFilled } from '@ant-design/icons';
import type { EdgeProps } from '@xyflow/react';
import { BaseEdge, EdgeLabelRenderer, Position, getBezierPath } from '@xyflow/react';
import { intersection } from 'lodash-es';
import { memo, useCallback } from 'react';
import AddBlock from '../operator/add-block';
import type { BlockEnum, Edge } from '../types';
import styles from './index.less';

export type OnSelectBlock = (type: BlockEnum, toolDefaultValue?: any) => void;

const CustomEdge = ({
  id,
  data,
  source,
  sourceHandleId,
  target,
  targetHandleId,
  sourceX,
  sourceY,
  targetX,
  targetY,
  selected,
}: EdgeProps) => {

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX: sourceX - 8,
    sourceY,
    sourcePosition: Position.Right,
    targetX: targetX + 8,
    targetY,
    targetPosition: Position.Left,
    curvature: 0.16,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: selected || data?._connectedNodeIsHovering || data?._run ? '#2970FF' : '#D0D5DD',
          strokeWidth: 2,
          transition: 'stroke .2s',
        }}
      />
      <EdgeLabelRenderer>
        789
      </EdgeLabelRenderer>
    </>
  );
};

export default memo(CustomEdge);
