import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  Node,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import CustomResizerNode from './components/CustomResizerNode';
import './App.css';

const nodeTypes = {
  CustomResizerNode,
};

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'CustomResizerNode',
    data: { label: 'Custom Resize Icon' },
    position: { x: 150, y: 150 },
    style: {
      background: '#fff',
      fontSize: 12,
      border: '1px solid black',
      padding: 5,
      borderRadius: 15,
      height: 100,
    },
  },
];

const initialEdges: Edge[] = [];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const addCard = () => {
    const newNode: Node = {
      id: `${nodes.length + 1}`,
      type: 'CustomResizerNode',
      data: { label: `Custom Resize Icon ${nodes.length + 1}` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      style: {
        background: '#fff',
        fontSize: 12,
        border: '1px solid black',
        padding: 5,
        borderRadius: 15,
        height: 100,
      },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const onConnect = (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds));

  return (
    <div className="canvas-container">
      <button onClick={addCard} className="add-card-button">
        Add Card
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        className="react-flow-node-resizer-example"
        minZoom={0.2}
        maxZoom={4}
        fitView
      >
        <Background variant={BackgroundVariant.Dots} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
