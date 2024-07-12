import React from 'react';
import { ArcherContainer, ArcherElement } from 'react-archer';

const App = () => {
  const children = [
    { id: 'child1', label: 'Child 1' },
    { id: 'child2', label: 'Child 2' },
    { id: 'child3', label: 'Child 3' },
    { id: 'child4', label: 'Child 4' },
    { id: 'child11', label: 'Child 11' },
    { id: 'child21', label: 'Child 12' },
    { id: 'child13', label: 'Child 31' },
    { id: 'child41', label: 'Child 14' },
  ];

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ArcherContainer strokeColor="red">
        <div style={{ position: 'relative', width: '400px', height: '400px' }}>
          {children.map((child, index) => (
            <ArcherElement
              key={child.id}
              id={child.id}
              relations={[
                {
                  targetId: 'parent',
                  targetAnchor: 'middle',
                  sourceAnchor: 'middle',
                  style: { strokeColor: 'red', strokeWidth: 2 },
                  label: `T${index + 1}`,
                },
              ]}
            >
              <div
                style={{
                  position: 'absolute',
                  top: `${50 + 30 * Math.sin((2 * Math.PI * index) / children.length)}%`,
                  left: `${50 + 30 * Math.cos((2 * Math.PI * index) / children.length)}%`,
                  transform: 'translate(-50%, -50%)',
                  padding: '10px',
                  border: '1px solid black',
                  backgroundColor: 'white',
                }}
              >
                {child.label}
              </div>
            </ArcherElement>
          ))}

          <ArcherElement id="parent">
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '20px',
                border: '2px solid black',
                backgroundColor: 'white',
              }}
            >
              Parent
            </div>
          </ArcherElement>
        </div>
      </ArcherContainer>
    </div>
  );
};

export default App;
