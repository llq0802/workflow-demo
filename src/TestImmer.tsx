import { useImmer } from 'use-immer';

const initState = {
  count: 0,
  list: [
    {
      name: 'llq',
      age: 0,
    },
  ],
};

const TestImmer = () => {
  const [immer, setImmer] = useImmer(initState);

  return (
    <div>
      <h1>count == {immer.count}</h1>
      <hr />
      <button
        onClick={() =>
          setImmer((draft) => {
            draft.count += 1;
          })
        }
      >
        add count
      </button>

      <button
        onClick={() => {
          setImmer(() => initState);
        }}
      >
        reset
      </button>
      <hr />

      <button
        onClick={() => {
          setImmer((draft) => {
            draft.list.push({ name: 'llq', age: draft.list.length });
          });
        }}
      >
        add list
      </button>
      <button
        onClick={() => {
          setImmer((draft) => {
            draft.list = [];
          });
        }}
      >
        reset list
      </button>
      <button
        onClick={() => {
          setImmer(initState);
        }}
      >
        reset
      </button>

      {immer.list.map((item, index) => {
        return (
          <p key={index}>
            {item.name} - {item.age}
          </p>
        );
      })}
    </div>
  );
};

export default TestImmer;
