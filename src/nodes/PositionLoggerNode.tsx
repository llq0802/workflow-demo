import {
  Handle,
  NodeResizer,
  NodeToolbar,
  Position,
  useConnection,
  useNodeId,
  useNodes,
  useNodesData,
  useReactFlow,
  useStore,
  getOutgoers,
  type NodeProps,
  useEdges,
  useStoreApi,
} from '@xyflow/react';

import { type PositionLoggerNode } from './types';

export function PositionLoggerNode(props: NodeProps<PositionLoggerNode>) {
  const { positionAbsoluteX, positionAbsoluteY, data, width, height } = props;
  const x = `${Math.round(positionAbsoluteX)}px`;
  const y = `${Math.round(positionAbsoluteY)}px`;
  const connection = useConnection();
  const nodeId = useNodeId()!;
  const nodes = useNodes();
  const edges = useEdges();
  const nodeData = useNodesData(nodeId);
  // console.log('==nodeData====>', nodeData);
  const storeApi = useStoreApi();

  // console.log('==props====>', props);

  const outgoers = getOutgoers({ id: nodeId }, nodes, edges);
  // console.log('==outgoers====>', outgoers);
  // const nodesLength = useStore();
  const { setNodes } = useReactFlow();

  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div style={{ border: '1px solid red' }}>
      {/* <NodeResizer minWidth={100} minHeight={30} /> */}
      <NodeToolbar isVisible>
        <button
          onClick={() => {
            const newNodes = nodes.filter((v) => v.id !== nodeId);
            console.log('==newNodes====>', newNodes);
            setNodes(newNodes);
          }}
        >
          delete
        </button>
        <button
          onClick={() => {
            const newNodes = nodes.filter((v) => v.id !== nodeId);
            console.log('==newNodes====>', newNodes);
            storeApi.getState().setNodes(newNodes);
          }}
        >
          storeApi
        </button>
        <button>expand</button>
      </NodeToolbar>
      {data.label && <div>{data.label}</div>}
      <div>
        {nodeId} = {x} - {y}
      </div>
      <Handle type='source' position={Position.Bottom} id='a' />
      <Handle
        type='target'
        position={Position.Bottom}
        id='b'
        style={{
          left: 10,
        }}
      />
    </div>
  );
}
