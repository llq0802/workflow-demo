import React, { memo } from 'react';
import {
  Handle,
  useStore,
  Position,
  useNodesData,
  useConnection,
  useNodeId,
  useEdges,
  useNodes,
  useReactFlow,
  getOutgoers,
  useStoreApi,
  getIncomers,
  useInternalNode,
  useHandleConnections,
} from '@xyflow/react';

const CircleNode = memo((props) => {
  const { id, isConnectable } = props;
  const { setNodes } = useReactFlow();
  const label = useStore((s) => {
    // console.log('==s====>', s);
    const node = s.nodeLookup.get(id);
    if (!node) {
      return null;
    }
    return `position x:${parseInt(node.position.x)} y:${parseInt(node.position.y)}`;
  });
  const nodeId = useNodeId()!;
  const nodes = useNodes();
  const edges = useEdges();
  const storeApi = useStoreApi();
  //当前node的出边的节点集合
  const outgoers = getOutgoers({ id: nodeId }, nodes, edges);
  //当前node的出边的节点集合
  const incomers = getIncomers({ id: nodeId }, nodes, edges);
  // 仅包含data的node
  const nodeData = useNodesData(nodeId);
  // node内部所有东西
  const internalNode = useInternalNode(nodeId);
  // 当前把柄连接的边的集合
  const connections = useHandleConnections({ type: 'target' });
  // 连接的边的过程状态
  const connection = useConnection();
  return (
    <>
      <div className='wrapper gradient'>
        <div className='inner'>{label || 'no node connected'}</div>
      </div>
      <Handle id='xxx-1' type='target' position={Position.Left} isConnectable={isConnectable} />
      <Handle id='xxx-3' type='target' position={Position.Left} isConnectable={isConnectable} />
      <Handle id='xxx-2' type='source' position={Position.Right} isConnectable={isConnectable} />
    </>
  );
});
export default CircleNode;
