import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FlowChart from "./FlowChart";

export const DND = () => (
  <DndProvider backend={HTML5Backend}>
    <FlowChart />
  </DndProvider>
);
