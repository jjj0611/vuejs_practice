vue js tutorial#6

- 지난 시간에 이벤트에 대한 처리를 어떻게 하는지 살펴 봤다.
- 이번 시간에는 v-on을 사용하여 만드는 이벤트 리스너들에 대해 부가 기능을 주기 위해 어떤 제어자를 사용할 수 있는지를 살펴 보자.


event modifier(이벤트 제어자)

- 지난시간에 만든 age를 높이는 버튼을 단 한번만 사용할 수 있도록 만들어보자.
- 이는 너무 간단히 구현되어 있는데 단지 해당 이벤트에 .(dot)을 사용하여 once만 적어주면 된다.
```
<button v-on:onclick.once="add(1)">add a Year</div>
```

prevent

- 예를 들어 a태그 하나를 생각해보자.
```
<a href="http://www.github.com/jjj0611" v-on:click="click">jjj0611</a>
```
```
methods: {
  click = function() {
    alert('You click me');
  }
}
```
- 위 태그를 DOM에서 클릭할 때, click이라는 메서드만 실행되게 하고, 해당 url로 이동하지 않도록 만들고 싶다.
- 저렇게 만든다면 alert가 실행되고 난 후 여전히 페이지는 이동할 것이다.
- 우리가 할 수 있는 것은 a태그가 가지고 있는 기본적인 행동(default behavior)을 막는 것(prevent)이다.
```
<a href="http://www.github.com/jjj0611" v-on:click.prevent="click">jjj0611</a>
```
- 간단하게 위와 같이 prevent를 적어주면 a태그의 기본 액션을 막아주게 된다.


https://vuejs.org/v2/guide/events.html
- vue js 페이지에 가면 여러 modifier에 대해서 살펴볼 수 있을 것이다.
