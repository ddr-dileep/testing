import React, { useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
} from "react-flow-renderer";
import CustomNode from "./customNode";

const initialElements = [
  {
    id: "1",
    type: "custom",
    data: { label: "EEE route step 1" },
    position: { x: 250, y: 5 },
  },
  {
    id: "2",
    type: "custom",
    data: { label: "EEE route step 2" },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "custom",
    data: { label: "EEE route step 3" },
    position: { x: 400, y: 100 },
  },
];

const FlowChart = () => {
  const [elements, setElements] = useState(initialElements);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onLoad = (rfi) => {
    if (!reactFlowInstance) {
      setReactFlowInstance(rfi);
      rfi.fitView();
    }
  };

  const nodeTypes = {
    custom: CustomNode,
  };

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlowProvider>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onLoad={onLoad}
          deleteKeyCode={46} /* 'delete'-key */
          snapToGrid={true}
          snapGrid={[16, 16]}
          style={{ width: "100%", height: "100%" }}
          nodeTypes={nodeTypes}
        >
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowChart;
