import { Flex } from 'antd';
import Header from './header';
import Main from './main';
import '@xyflow/react/dist/style.css';
// import '@xyflow/react/dist/base.css';
import './index.less';
import { FlowStateProvider, GraphStateProvider } from './store';
import { ReactFlowProvider } from '@xyflow/react';
function WorkflowWarp() {
  return (
    <Flex vertical className='my-workflow-warp'>
      <Header></Header>
      <Main></Main>
    </Flex>
  );
}

export default function Flow() {
  return (
    <FlowStateProvider>
      <ReactFlowProvider>
        <GraphStateProvider>
          <WorkflowWarp />
        </GraphStateProvider>
      </ReactFlowProvider>
    </FlowStateProvider>
  );
}
