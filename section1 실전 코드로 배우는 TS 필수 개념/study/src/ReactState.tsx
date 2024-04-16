import { useState } from 'react';

function ReactState() {
  const [counter, setCounter] = useState(0); // 타입 추론 number로 추론됨
  const [name, setName] = useState<string>('hi'); // 제네릭

  return (
    <div>
      {counter}
      {name}
    </div>
  );
}

export default ReactState;
