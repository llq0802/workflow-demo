import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  Panel,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import TestImmer from './TestImmer';

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback((connection) => setEdges((edges) => addEdge(connection, edges)), [setEdges]);

  return (
    <ReactFlow
      // colorMode='dark'

      className='my-react-flow-clx'
      style={{
        // '--xy-background-color-default': 'red',
        background: 'transparent',
      }}
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onConnect={onConnect}
      fitView
      onNodeDrag={(e, node) => {
        // console.log('==node ====>', node);
      }}
      onNodesDelete={(ev) => {
        // console.log('==ev====>', ev);
      }}
      // snapToGrid
      // attributionPosition={false}
      // noDragClassName='nodrag'
      // onNodeDrag={}
      // connectionLineComponent
      // onNodeClick={(e, node) => {
      //   console.log('click', node);
      // }}
      // onSelectionChange={(params) => {
      //   console.log('==onSelectionChange====>', params);
      // }}
    >
      {/* <Background /> */}
      <Panel position='top-left'>top-left</Panel>
      <Panel position='top-center'>top-center</Panel>
      <Panel position='top-right'>top-right</Panel>
      <Panel position='bottom-left'>bottom-left</Panel>
      <Panel position='bottom-center'>bottom-center</Panel>
      <Panel position='bottom-right'>bottom-right</Panel>
      <Background id='1' gap={10} color='#f1f1f1' variant={BackgroundVariant.Lines} />
      <Background id='2' gap={100} color='#ccc' variant={BackgroundVariant.Lines} />
      {/* <MiniMap /> */}
      <Controls />
    </ReactFlow>

    // <TestImmer />
  );
}
