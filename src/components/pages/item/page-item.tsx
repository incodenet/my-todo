import {observer} from 'mobx-react-lite';
import {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Route} from '../../../constants/routes';
import todo from '../../../store/todo';
import {ToDoItem} from '../../../types/custom';
import {BackButton, Button} from '../../common';
import {Checkbox} from '../../primitives/p-card/p-card.styled';
import {Header, NavTitle, Title, Wrapper, Actions, Created} from './page-item.styled';

export const PageItem = observer(() => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [itemEntity, setItemEntity] = useState<ToDoItem>({});

  const getItem = useCallback(async () => {
    const item = todo.getToDoItem(Number(id));

    item ? setItemEntity(item!) : navigate(Route.list.path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, todo.todos]);

  useEffect(() => {
    getItem();
  }, [getItem]);

  return (
    <>
      <Header>
        <BackButton title="Back" onClick={() => navigate(-1)}>
          &#10094;
        </BackButton>
        <NavTitle>Todo item N:{itemEntity.id}</NavTitle>
      </Header>

      <Wrapper>
        <Title>{itemEntity.title}</Title>

        <Created>
          &#128197; <b>Created: </b> {itemEntity.created}
        </Created>
        <hr />
        <Actions>
          <Checkbox>
            Mark us {itemEntity?.completed ? 'undone' : 'done'}
            <input
              type="checkbox"
              checked={itemEntity?.completed || false}
              onChange={() => todo.complete(itemEntity.id!)}
            />
          </Checkbox>
          <Button
            className="secondary small"
            onClick={() => {
              todo.remove(itemEntity.id!);
              navigate(Route.list.path);
            }}
          >
            Remove
          </Button>
        </Actions>
      </Wrapper>
    </>
  );
});
