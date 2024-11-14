import { createContext, useRef } from 'react';

type WorkflowStore = ReturnType<typeof createWorkflowStore>;

export const WorkflowContext = createContext<WorkflowStore | null>(null!);

type GraphContextProviderProps = {
  children: React.ReactNode;
};

export const GraphContextProvider = ({ children }: GraphContextProviderProps) => {
  const storeRef = useRef<WorkflowStore>();

  if (!storeRef.current) storeRef.current = createWorkflowStore();

  return <WorkflowContext.Provider value={storeRef.current}>{children}</WorkflowContext.Provider>;
};
