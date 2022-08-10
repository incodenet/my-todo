import {ToDoItem} from '../../../types/custom';

export type PCardProps = {
  className?: string;
  itemEntity?: ToDoItem;
  onDelete?: () => void;
  onComplete?: () => void;
};
