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
      const filtered = list.filter(
        t => t?.title?.toLowerCase().includes(e.target.value.toLowerCase().trim()) && t?.completed === sortValue
      );

      setSearchQuery(e.target.value);

      e.target.value.length > 0 ? setList(filtered) : setList(todo.todos);
    },
    [list, sortValue]
  );

  const handleSorting = useCallback(
    (e: any) => {
      let completed = e.target.value === 'completed' ? true : false;

      const sorted = list.filter(
        t => t?.completed === completed && t?.title?.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );

      setSortValue(completed);

      e.target.value !== '' ? setList(sorted) : setList(todo.todos);
    },
    [list, searchQuery]
  );

  useEffect(() => {
    setList(todo.todos);
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
        {list.length ? (
          list.map((t: ToDoItem) => (
            <PCard
              key={t.id}
              itemEntity={t}
              onDelete={() => todo.remove(t.id!)}
              onComplete={() => todo.complete(t.id!)}
            />
          ))
        ) : (
          <Empty>
            <img src={Images.NotFound} alt="NotFound" />
            <h2>No Items yet</h2>
          </Empty>
        )}
      </List>
    </>
  );
});
