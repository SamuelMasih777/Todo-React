import React from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import { useState } from 'react';

interface TodoRowProps {
  label: string;
  completed: boolean;
  onToggle: (completed: boolean) => void;
  onDelete: () => void;
}

const TodoRow: React.FC<TodoRowProps> = ({ label, completed, onToggle, onDelete }) => {
    const [hovered, setHovered] = useState(false);
  return (
    <div className="flex items-center justify-between py-2 gap-2" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Checkbox label={label} checked={completed} onChange={onToggle} />
      <div className={`transition-opacity ${hovered ? 'opacity-100' : 'opacity-0'}`}>
        <Button variant="small" onClick={onDelete}>
          X
        </Button>
      </div>
    </div>
  );
};

export default TodoRow;