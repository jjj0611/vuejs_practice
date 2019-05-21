vue js tutorial#4

data-binding
  - 지금까지 어떻게 DOM에 vue instance에 있는 data를 output해주는지 살펴 보았다.
  - 만약 vue instance에 website란 이름의 url을 가지고 있는 data가 있고, 이 데이터를 a 태그의 href의 속성 값으로 넣어주고 싶으면 어떻게 할까?
```
data: {
  name: 'jaeju',
  job: 'student',
  website: 'http://www.github.com/jjj0611'
}
```
```
<a href="website"></a>
<a href="{{website}}"></a>
<a href={{website}}></a>
```
  - 위와 같은 방법을 생각할 것이다. 하지만 어떠한 방법도 우리가 원하는 방식으로 동작하지 않는다.


how to data-binding
  - data-binding이라고 알려진 것을 사용해보자.
  - href와 같은 속성의 값을 bind해주기 위해서는 v-bind라고 불리는 것을 사용해야 한다. (v는 vue를 의미한다)
```
<a v-bind:href="website"></a>
```
  - 위와 같이 v-bind:href를 해주고 그 값으로 {{}}를 사용하지 않고, quatation 안에 data 이름을 넣어주면 된다.
```
<a:href="website"></a>
<input type='text' v-bind:value="name">
```
  - 위와 같이 a:href로 바로 사용해도 되고, 또 input 태그의 value 속성처럼 다른 속성에도 같은 방식으로 사용이 가능하다.
  

onemorething
- data에 html 태그를 그대로 가지고 있고, 그 태그 자체를 DOM에 뿌려주고 싶으면 어떻게 할까?
```
data: {
  ...
  websiteTag: '<a href="http://www.github.com/jjj0611">jaeju github</a>'
}
```
  - 만약 {{websiteTag}}와 같이면 사용하게 되면 해당 데이터의 내용이 string으로 그대로 DOM에 뿌려지게 된다.
  - 매우 간단히 p 태그를 만들어서 사용해보자. 이때 사용해야 하는 것은 v-html이다.
```
<p v-html="websiteTag"></p>
```
  - 위와 같이 사용하면 p 태그 안에 해당하는 a태그가 들어가는 식으로 구성이 된다.
