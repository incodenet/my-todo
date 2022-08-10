import {observer} from 'mobx-react-lite';
import {memo} from 'react';
import {Images} from '../../../assets/images';
import {Button} from '../../common';
import {PCardProps} from './p-card-types';
import {Actions, Card, Checkbox, Title} from './p-card.styled';

const PCard = observer((props: PCardProps) => {
  return (
    <Card>
      <Title>
        <img src={Images.List} alt="List" width={35} />
        {props.itemEntity?.title}
      </Title>
      <Actions>
        <Checkbox>
          Mark us {props.itemEntity?.completed ? 'undone' : 'done'}
          <input type="checkbox" checked={props.itemEntity?.completed} onChange={props.onComplete} />
        </Checkbox>
        <Button className="secondary small" onClick={props.onDelete}>
          Remove
        </Button>
      </Actions>
    </Card>
  );
});

export const PCardMemoized = memo(PCard);
