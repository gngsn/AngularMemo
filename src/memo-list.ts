import { Memo } from './memo';

const memo1 = '우리는 반복을 컴파일했다. 직접 반복하지 않았다. 위 규칙들은 서로 연관성이 없는 규칙들이고, 그래서 연관을 맺게 만들지 않았다는 점을 기억하는 것이 여기서 중요하다. 이 규칙들은 연관성이 없고, 단지 우연히 몇몇 특성을 공유하게 된 것이다. 그래서 이 반복은 합리적이고 예측 가능한 것이다. 우리는 이 선언들을 여러 곳에서 사용하길 원하며 따라서 여러 군데 나타나게 만들었다.\n' +
  '\n' +
  '인자값 없는 믹스인은 유일한 진리의 근원을 유지하면서 똑같은 선언들을 반복해서 뱉어내게 하는 데 아주 좋다. 이 믹스인을 클립보드 복사/붙여넣기 기능의 멋진 확장판처럼 생각하라. 몇몇 문자열을 다른 데서 미리 저장했다가 붙여넣기 위해 사용하기만 하면 된다. 유일한 진리의 근원을 확보한 것이고, 이제 한 군데만 수동으로 고치면 모든 선언을 바꿀 수 있다. 아주 DRY하다.\n' +
  '\n' +
  'Gzip이 반복을 좋아하므로 조금 늘어나는 파일 용량도 대부분 무효화된다는 점도 강조할 만하다.\n' +
  '\n';
export const MEMOS: Memo[] = [
  { id: 0, userName: 'Anne Marie', content: 'Hi, my name is Marie', created: Date.now() },
  { id: 1, userName: 'user1', content: 'Hi, my name is gngsn', created: Date.now() },
  { id: 2, userName: 'Jinsuu', content: 'Im so tired', created: Date.now() },
  { id: 3, userName: 'Doctor Who', content: 'doctor....who!', created: Date.now() },
  { id: 4, userName: 'sherlock', content: 'think, think,think...', created: Date.now() },
  { id: 5, userName: 'user1', content: 'Hi, my name is Marie', created: Date.now() },
  { id: 6, userName: 'gngsn', content: 'Hi, my name is gngsn', created: Date.now() },
  { id: 7, userName: 'Anne Marie', content: 'Hi, my name is Marie', created: Date.now() },
  { id: 8, userName: 'gngsn', content: 'Hi, my name is gngsn', created: Date.now() },
  { id: 9, userName: 'user1', content: 'Im so tired', created: Date.now() },
  { id: 10, userName: 'Doctor Who', content: 'doctor....who!', created: Date.now() },
];
