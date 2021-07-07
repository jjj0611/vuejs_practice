vue js tutorial#8


- 먼저 지난 시간에 했던 코드를 조금 수정해보자.
```
<label>Name : </label>
<input type="text" v-on:keyup="logName"> <span> {{ name }} </span> <br>
<label>Age : </label>
<input type="text v-on:keyup="logAge"> <span> {{ age }} </span>
```
- 우리는 input에 입력된 내용이 span 태그 안의 name으로 들어가는 기능을 원한다.
- 일단 vue instance에 name과 age가 없으니 해당 데이터를 만들어주자.
```
data: {
  name:'',
  age:''
}
```


two way data-binding

- 그럼 어떻게, 그리고 어떤 이벤트에 대해 name과 age 변수에 변화를 줄 수 있을까?
- this.name= 과 같은 방식으로 할당하는 방법을 생각하겠지만, 사실 이렇게 할 필요가 없다.
- 간단하게 v-model을 사용하면 된다.
```
<input type="text" v-model="name">
<input type="text" v-model="age">
```
- v-model은 input에 어떤 내용이 들어오든 vue instance의 name이라는 변수에 데이터가 전달된다.
- name이라는 것의 데이터가 바뀌게 되면 DOM에서 name을 사용하는 곳의 데이터에도 반영된다.
```
<span>{{ name }}</span>
<span>{{ age }}</span>
```
- 즉, input태그에서 변경된 데이터가 vue instance로 전달되고,
- 또한, vue instance에서 변경된 데이터의 내용이 다시 DOM의 {{ name }} {{ age }}로 전달된다.
- DOM에서 vue instance로, vue instance에서 다시 DOM으로 데이터가 전달되는 것이 two way data binding이다.


how to use

- 이것은 매우 다양한 곳에서 사용될 수 있다.
- 예를 들어 블로그의 글쓰기 기능을 생각해보자.
- 지금 쓰고 있는 글에 대한 preview를 제공해주고 싶을 때와 같은 상황에서 쓸 수 있다.
- 이때 해야할 일은 단순히 v-model을 추가해주기만 하면 된다.


