import React, {FC, useState} from 'react';
import { ITask } from '../types/types';

interface ITaskProps {
  task: ITask;
}

const TaskItem: FC<ITaskProps> = ({task}) => {
  const [checked, setChecked] = useState(task.completed)

  return (
    <div style={{border: '2px solid yellow', padding: 15, marginTop: '10px'}}>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
      {task.id}. {task.title}
    </div>
  )
}

export default TaskItem;