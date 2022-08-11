import {observer} from 'mobx-react-lite';
import {useCallback, useEffect, useState} from 'react';
import {Images} from '../../../assets/images';
import {FILTER_OPTIONS} from '../../../constants/options';
import todo from '../../../store/todo';
import {ToDoItem} from '../../../types/custom';
import {PCard} from '../../primitives/p-card';
import {PInput} from '../../primitives/p-input';
import {PSelect} from '../../primitives/p-select';
import {Empty, FilterPanel, Filter, List} from './page-list.styled';

export const PageList = observer(() => {
  const [list, setList] = useState<ToDoItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortValue, setSortValue] = useState(false);

  const handleSearchQuery = useCallback(
    (e: any) => {
      // TODO: refactor this array, move filter logic to store
      const filtered = !sortValue
        ? todo.todos.filter(t => t?.title?.toLowerCase().includes(e.target.value.toLowerCase().trim()))
        : todo.todos
            .filter(t => t?.title?.toLowerCase().includes(e.target.value.toLowerCase().trim()))
            .filter(t => t?.completed === sortValue);

      setSearchQuery(e.target.value);

      setList(filtered);
    },
    [sortValue]
  );

  const handleSorting = useCallback(
    (e: any) => {
      const completed = e.target.value === 'completed' && true;

      // TODO: refactor this array, move filter logic to store
      const sorted = completed
        ? todo.todos
            .filter(t => t?.completed === completed)
            .filter(t => t?.title?.toLowerCase().includes(searchQuery.toLowerCase().trim()))
        : todo.todos.filter(t => t?.title?.toLowerCase().includes(searchQuery.toLowerCase().trim()));

      setSortValue(completed);

      setList(sorted);
    },
    [searchQuery]
  );

  useEffect(() => {
    setList(todo.todos);
    // TODO: refactor this part for deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo.todos]);

  return (
    <>
      <FilterPanel>
        <h1>List of ToDo {list.length > 0 && `(${list.length})`}</h1>
        <Filter>
          <PInput
            placeholder="Search"
            value={searchQuery}
            onChange={e => {
              handleSearchQuery(e);
            }}
          />
          <PSelect
            placeholder="All"
            options={FILTER_OPTIONS}
            onChange={e => {
              handleSorting(e);
            }}
          />
        </Filter>
      </FilterPanel>

      <List>
        {todo.todos.length > 0 &&
          list.map((t: ToDoItem) => (
            <PCard
              key={t.id}
              itemEntity={t}
              onDelete={() => todo.remove(t.id!)}
              onComplete={() => todo.complete(t.id!)}
            />
          ))}
      </List>

      {list.length === 0 && (
        <Empty>
          <img src={Images.NotFound} alt="NotFound" />
          <h2>No Items yet</h2>
        </Empty>
      )}
    </>
  );
});
