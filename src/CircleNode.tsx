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
  const connection = useConnection();
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

  return (
    <>
      <div className='wrapper gradient'>
        <div className='inner'>{label || 'no node connected'}</div>
      </div>
      <Handle type='target' position={Position.Left} isConnectable={isConnectable} />
    </>
  );
});
export default CircleNode;
