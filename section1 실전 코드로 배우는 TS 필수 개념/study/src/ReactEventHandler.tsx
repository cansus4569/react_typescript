import { ChangeEvent, MouseEvent, useState } from 'react';
function ButtonHandler() {
  // 함수 표현식
  //   const showAlert = (event: MouseEvent<HTMLButtonElement>) => {
  //     console.log(event);
  //   };
  // 함수 선언문
  function showAlert(event: MouseEvent<HTMLButtonElement>) {
    console.log(event);
  }
  return <button onClick={showAlert}>Click me!</button>;
}

function InputHandler() {
  const [todo, setTodo] = useState<string>('');

  function updateTodo(event: ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value);
  }

  return <input type="text" value={todo} onChange={updateTodo} />;
}

export { ButtonHandler, InputHandler };
