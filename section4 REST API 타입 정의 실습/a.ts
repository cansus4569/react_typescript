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
  const data: Todo[] = await response.json();
  return data;
}

fetchTodos().then((todos) => todos.filter((item) => item.completed));
