vue js tutorial#12

Looping with v-for

- v-for를 사용하여 배열(array)이나 오브젝트(object)를 loop하는 방법에 대해서 학습한다.
- 지금까지는 vue instance에 간단한 데이터만 만들어봤다.(name: 'jang'과 같은)
- 이번에는 조금 더 복잡한 데이터 타입인 배열로 넘어가보자.
```
data: {
  characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
  ninjas: [
    { name: 'Ryu', age: 25 },
    { name: 'Yoshi', age: 35 },
    { name: 'Ken', age: 55 }
]
```
- characters와 ninjas는 모두 배열인데, 전자는 문자열(String)의 배열이고, 후자는 object의 배열이다.
- index.html로 넘어와서 characters 배열에 있는 단일한 요소를 output하고 싶으면, 아래와 같이 가능하다.
```
{{ characters[0] }}
{{ characters[1] }}
{{ characters[2] }}
{{ characters[3] }}
```
- 이렇게 하면 characters 배열에 있는 모든 요소들을 출력할 수 있다.
- 만약 배열 안에 얼마나 많은 요소들이 있는지 모른다면 우리가 필요한 어떤 수의 인덱스까지 높혀가야 하는지 모를 것이다.
- 두번째로 배열에 엄청 많은 데이터가 들어있다면, 공간 낭비가 심할 것이다.


v-for

- v-for 명령어를 사용하면 배열을 반복할 수 있는 더 좋은 방법이 된다.
- 이를 알아보기 위해 ul과 li 태그를 만들어보자.
- 각 li태그마다 characters 배열에 있는 값을 넣어주는 예제를 작생허보자.
- v-for 명령어를 입력하고, 내가 반복하고자하는 것을 넣으면 된다.
```
<ul>
  <li v-for="character in characters">{{ character }}</li>
</ul>
```
- 즉, 반복하고자 하는 배열을 in 뒤에 놓고, 거기서 하나씩 꺼내올 때 값을 저장할 변수를 character라는 이름으로 쓰는 것이다.
- 그래서 해당 값을 output하고 싶을 때는 {{ character }}와 같은 형식으로 사용한다.
- 만약 v-for="x in characters"와 같이 쓰면 x라는 변수를 통해 값을 불러올 수 있다.


array of obejct

- 이번에는 ninjas를 반복해보자. ninjas는 배열의 요소가 각각 obejct이다.
```
<ul>
  <li v-for="ninja in ninjas"></li>
</ul>
```
- 위의 반복문에서 우리는 ninja를 그대로 출력하면 보기 좋지 않다. ninja는 object이기 때문에 못생긴 형태로 출력이 된다.
- 각 object에서 직접 property의 값을 얻어보자.
- 우리는 property로 name과 age를 가지고 있는 것을 알고 있다. 따라서 {{ ninja.name }}, {{ ninja.age }}와 같이 접근할 수 있다.


index

- 반복문을 사용하면서 index를 같이 출력하고 싶으면 어떻게 해야할까?
- 단순히 ninja 부분을 ()로 감싸고, ninja 옆에 index를 추가하면 된다.
- 그럼 이 index는 해당 배열에서 해당 객체가 몇번째에 위치해 있는지에 대한 데이터를 넘겨주게 된다.
```
<li v-for="(ninja, index) in ninjas">{{ index }}. {{ ninja.name }} - {{ ninja.age }} </li>
```
- 이게 index를 출력하는 방법이다.


template

- 그런데 우리가 li 태그로 출력하고 싶지 않으면 어떻게 할까?
- 단순하게 div태그를 이용해서 출력할 수도 있다. 어떤 태그를 이용해서든 반복이 가능하다.
```
<div v-for="(ninja, index) in ninjas">
  <h3>{{ index }}. {{ ninja.name }}</h3>
  <p>{{ ninja.age }} </p>
</div>
```
- 이렇게 출력하면 배열의 각 요소들이 반복할 때마다 div 태그를 가지고 있게 된다.
- 그런데 각 요소가 div태그를 가질 필요가 없다고 생각한다면 우리는 div를 template으로 바꾸기만 하면 된다.
```
<template v-for="(ninja, index) in ninjas">
  <h3>{{ index }}. {{ ninja.name }}</h3>
  <p>{{ ninja.age }} </p>
</template>
```
- 이렇게 하면 vue js는 이것을 보고 있다가 "이건 template tag야 그러니깐 이 태그는 출력할 필요 없어"라고 말하게 된다.
- div 태그는 더이상 없어지고 조금 더 깔끔한 markup이 된 것을 볼 수 있다.


one more thing

- ninjas의 각 요소는 오브젝트로 두개의 다른 키, 벨류 쌍을 가지고 있다.
- 만약 ninja.name과 ninja.age와 같이 직접 접근하는 것이 아니라 각 object에 대해 모든 키와 값의 쌍을 반복하고 싶다면 어떻게 해야할까?
- 하나의 v-for문을 더 사용하면 된다.
```
<tempate v-for="ninja in ninjas">
  <div v-for="(val, key) in ninja">
    <p> {{ key }} - {{ val }} </p>
  </div>
</template>
```
- object에서 키, 값 쌍을 꺼낼 때는 value 값이 먼저 오게 된다.
- 먼저 우리는 array를 반복하면서 하나씩 값을 꺼내고, 그 다음 각 obejct에 대하여 key와 value에 대하여 한번 더 반복을 하게 된다.
- 즉, ninjas를 반복하며 돌고 있고, ninja라는 단일 요소를 반복하며 돌고 있는 셈이다.
- 이렇게 하면 우리는 object에 있는 key의 이름을 몰라도 값을 꺼내올 수 잇다.
