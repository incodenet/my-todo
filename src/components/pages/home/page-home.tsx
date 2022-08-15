import {useState} from 'react';
import {MIN_TEXT_SIZE} from '../../../constants/common';
import todo from '../../../store/todo';
import {getCurrentDateAndTime} from '../../../utils/get-current-date-and-time';
import {Button, Toast} from '../../common';
import {PInput} from '../../primitives/p-input';

export const PageHome = () => {
  const [name, setName] = useState('');
  const [toast, setToast] = useState<{type: string; text: string}>({
    type: '',
    text: '',
  });
  const [toastActive, setToastActive] = useState(false);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    if (todo.existed) {
      setToast({type: 'warning', text: 'Looks like item already existed...'});
    } else {
      setToast({type: 'success', text: 'ToDo item successfully created!'});
      setName('');
    }

    todo.add({
      id: Math.floor(Math.random() * 1000),
      title: name,
      created: `${getCurrentDateAndTime()}`,
      completed: false,
    });

    setToastActive(true);
    setTimeout(() => setToastActive(false), 3500);
  };

  return (
    <>
      <h1>Create your own ToDo list</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <PInput
          placeholder="Input the name of ToDo"
          autoFocus={true}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Button className="primary" title="Add" disabled={name.trim().length <= MIN_TEXT_SIZE}>
          +
        </Button>
      </form>
      <Toast className={`${toast.type} ${toastActive && 'active'}`}>{toast.text}</Toast>
    </>
  );
};
