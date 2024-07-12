import React, { useState, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'EEE route step 1' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    data: { label: 'EEE route step 2' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'EEE route step 3' },
    position: { x: 400, y: 100 },
  },
];

const FlowChart = () => {
  const [elements, setElements] = useState(initialElements);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onLoad = (rfi) => {
    if (!reactFlowInstance) {
      setReactFlowInstance(rfi);
      rfi.fitView();
    }
  };

  return (
    <div style={{ height: '100vh' }}>
      <ReactFlowProvider>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onLoad={onLoad}
          deleteKeyCode={46} /* 'delete'-key */
          snapToGrid={true}
          snapGrid={[16, 16]}
          style={{ width: '100%', height: '100%' }}
        >
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowChart;
