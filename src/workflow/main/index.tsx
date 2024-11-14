import { addEdge, Background, ReactFlow, useEdgesState, useNodesState, useReactFlow } from '@xyflow/react';
import { useMemoizedFn } from 'ahooks';
import { Flex } from 'antd';
import { initialEdges, initialNodes } from '../default';

const Main = () => {
  const reactFlow = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useMemoizedFn((connection) => {
    console.log('==onConnect-params====>', connection);
    const newEdge = { ...connection, type: 'custom-edge' };
    setEdges((eds) => addEdge(newEdge, eds));
    // setEdges((eds) => addEdge(connection, eds));
  });

  const handleNodesChange = useMemoizedFn((changes) => {
    // "dimensions"
    // "select"
    // "position"
    // "remove"
    console.log('==handleNodesChange====>', changes);
    // setNodes((olds) => applyNodeChanges(changes, olds));
    onNodesChange(changes);
  });
  const handleEdgesChange = useMemoizedFn((changes) => {
    console.log('==handleEdgesChange====>', changes);
    onEdgesChange(changes);
  });

  return (
    <Flex vertical flex='1 0 0' id='my-react-flow-container'>
      <ReactFlow
        className='my-react-flow'
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={onConnect}
        fitView
        onMoveEnd={(...args) => {
          // console.log('==args====>', args);
        }}
        // nodeTypes={nodeTypes}
        // edgeTypes={edgeTypes}
      >
        <Background style={{ background: '#f4f4f7' }} />
      </ReactFlow>
    </Flex>
  );
};

export default Main;
