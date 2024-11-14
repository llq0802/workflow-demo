import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  ReactFlowProvider,
  ControlButton,
  NodeToolbar,
  useReactFlow,
} from '@xyflow/react';
import { nodes as initialNodes } from './nodes';
import { edges as initialEdges } from './edges';
import AnnotationNode from './AnnotationNode';
import ToolbarNode from './ToolbarNode';
import ResizerNode from './ResizerNode';
import CircleNode from './CircleNode';
import TextNode from './TextNode';
import ButtonEdge from './ButtonEdge';
// import '@xyflow/react/dist/style.css';
// import './overview.css';
import { useMemoizedFn } from 'ahooks';
import WorkflowWarp from './workflow';

const nodeTypes = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextNode,
};

const edgeTypes = {
  button: ButtonEdge,
};

const nodeClassName = (node) => node.type;

const OverviewFlow = () => {
  const reactFlow = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useMemoizedFn((params) => {
    console.log('==onConnect-params====>', params);
    setEdges((eds) => addEdge(params, eds));
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
    <div style={{ height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        className='overview'
      >
        <MiniMap zoomable pannable nodeClassName={nodeClassName} />
        <Controls>
          <ControlButton onClick={() => alert('Something magical just happened. ✨')}>test</ControlButton>

          <ControlButton
            onClick={() => {
              // reactFlow.screenToFlowPosition({
              //   x: 100,
              //   y: 100,
              // });
              // const ret = reactFlow.flowToScreenPosition({
              //   x: 0,
              //   y: 0,
              // });

              reactFlow.setCenter(0, 0);
            }}
          >
            pingyi
          </ControlButton>
        </Controls>

        <Background />
      </ReactFlow>
    </div>
  );
};

export default function App() {
  return (
    // <ReactFlowProvider>
    //   <OverviewFlow />
    // </ReactFlowProvider>
    <WorkflowWarp />
  );
}
