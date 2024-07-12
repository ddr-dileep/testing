import React from 'react';
import { useDrag } from 'react-dnd';

const CustomNode = ({ id, data }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, type: 'node' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div style={{ padding: '10px', border: '1px solid black', backgroundColor: 'white' }}>
        <p>{data.label}</p>
        <button>Manage</button>
      </div>
    </div>
  );
};

export default CustomNode;
