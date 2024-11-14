import { createContainer } from 'react-tracked';
import { useImmer } from 'use-immer';

export const initialFlowState = {
  activeKey: '1',
  workflowData: undefined,
};

export const {
  Provider: FlowStateProvider,
  useTracked: useFlowState,
  // useTrackedState,
  // useUpdate,
} = createContainer(() => useImmer(initialFlowState));

export const initialGraphState = {
  nodes: [],
  edges: [],
};

export const { Provider: GraphStateProvider, useTracked: useGraphState } = createContainer(() =>
  useImmer(initialGraphState)
);
