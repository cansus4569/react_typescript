## API 함수 예시

- https://jsonplaceholder.typicode.com/

- https://jsonplaceholder.typicode.com/todos

```ts
const apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// TODO: 아래 API 함수의 타입을 정의해 보세요.
async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

fetchTodos().then((todos) => todos.filter((item) => item.completed));
```

## ChatGPT를 대하는 프론트엔드 개발자의 자세

- https://joshua1988.github.io/web-development/frontend-development-with-chatgpt/
- https://joshua1988.github.io/web-development/opinions/how-to-use-chatgpt-part1/
