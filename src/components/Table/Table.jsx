import Item from '../Item/Item';
import Input from '../Input/Input';
import Error from '../Error/Error';
import './Table.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context';

function Table() {
  const { dictionary, error } = useContext(DataContext);

  const navigate = useNavigate();
  const handleCardClick = (index) => {
    navigate(`/cards/${index}`);
  };

  return error === null ? (
    <main className="table">
      <Input forAdd={true} />
      {dictionary.map((i, index) => (
        <Item
          key={i.id}
          id={i.id}
          index={index}
          english={i.english}
          transcription={i.transcription}
          russian={i.russian}
          tags={i.tags}
          tags_json={i.tags_json}
          onCardClick={() => handleCardClick(index)}
        />
      ))}
    </main>
  ) : (
    <Error />
  );
}
export default Table;
