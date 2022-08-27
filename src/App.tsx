import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUserName(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hello', userName);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={userName}
          onChange={onChange}
          type='text'
          placeholder='username'
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
