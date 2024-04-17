## 함수 타입 정의 방법

- 타입표기 (Type Annotation) - 타입을 정의하는 방식
  - 표기법 ":"
  - `: number`
  - `: string`

## 타입스크립트 기본 타입

- string => const a: string = 'hi';
- number => const num: number = 10;
- boolean => const isLogin: boolean = true;
- array => const arr: number[] = [1,2,3];
- object => const product: object = { name: 'Shoes' };
- any => const result: any = 10 + { } + [ ];

## 리액트 이벤트 핸들러 타입 정의 방법

- 실무 코드에서는 자동으로 타입이 추론되는 경우엔 그대로 두는 것이 전반적인 기조라고 한다.

```tsx
// 예시
// 자동으로 타입 추론이되어 todo 는 string 타입을 가진다.
const [todo, setTodo] = useState('');
```

- 알아야 하는 타입스크립트 개념
  - 제네릭
  - 타입 호환

## 제네릭

- 타입을 함수의 파라미터처럼 사용하는 문법. 타입을 넘겨 타입을 받는다.

```ts
function getText<T>(ext: T) {
  return text;
}
const message = getText<string>('hi');
const userId = getText<number>(10);
```

- 타입의 중복을 줄이기 위해서 선언하는 시점에 타입을 넘겨서 원하는 타입으로 결과를 받겠다는 장점

- 추가로 학습해야할 주요 개념
  - 제네릭의 타입 제약
  - 제네릭에 제네릭 넘기기

## 타입 호환

- 타입 간의 호환 여부. 변수에 특정값을 할당할 수 있는지의 관점

```ts
let a: number = 10;
let b: string = 'hi';
b = a; // 에러 발생, 호환 X
```

```ts
let a: number = 10;
let b: any = 'hi';
b = a; // 에러 발생 안함, 호환 O
```

- 추가로 학습해야 할 주요 개념
  - 유니언(|), 인터섹션(&) 타입을 사용했을 때의 호환성
  - 타입에러 코드

## 리액트 프롭스 정의 방법

```ts
// 인터페이스 방식
interface AppHeaderProps {
  headerTitle: string;
}

// 타입 별칭 방식
type AppHeaderProps = { headerTitle: string };

function AppHeader(props: AppHeaderProps) {
  return (
    <h1>{props.headerTitle}</h1>;
  );
}
```

- 추가로 알아야하는 개념
  - 인터페이스
  - 타입 별칭

## 인터페이스

- 객체 모양의 타입을 정의할 때 유용한 문법.
- 프레임워크에서는 주로 API 응답, 프롭스, 변수, 함수를 정의할 때 자주 사용.
- 장점 : 상속, 확장 가능

```ts
interface Person {
  name: string;
  age: number;
}

const vision: Person = {
  name: '비전',
  age: 3,
};
```

- 학습해야 할 주요 개념
  - 인터페이스 상속
  - 인터페이스 선언 병합
  - 타입 별칭과 인터페이스의 차이점

## 타입 별칭

- 타입에 의미를 부여할 수 있는 문법.
- 타입의 변수화
- 하지만 재선언은 불가

```ts
// 기본 타입으로 선언한 경우
const a: string = 'abc';
// 타입 별칭으로 선언한 경우
type MyName = string;
const a: MyName = 'abc';
```

- 학습해야 할 주요 개념
  - 유니온 (|), 인터섹션(&)과 타입 별칭 사용하는 방법
  - 타입 별칭과 인터페이스의 차이점
    - 타입 별칭 : 유니온, 인터섹션 사용 가능 / 상속, 확장 불가
    - 인터페이스 : 유니온, 인터섹션 사용 불가 / 상속, 확장 가능
  - 유틸리티 타입과 맵드 타입
