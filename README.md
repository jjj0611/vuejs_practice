2019-05-20

vue js tutorial#1

what is vue js?
  - javascript-driven web application 개발을 위한 front end 프레임워크
  - 모든 vue js 코드는 브라우저에서 실행될 수 있다.
  - 페이지를 reload하거나 다른 페이지를 load하기 위해 서버를 조작할 필요가 없다.
  - react나 angular와 매우 비슷하고, 끊어짐 없는(seamless) 웹 애플리케이션 개발이 가능하다.


what makes vue js different?
  - 매우 가볍다. production version이 약 16 kb이다.
  - 따라서 매우 빠르게 load된다.
  - 또한 매우 좋은 run-time 시 퍼포먼스를 가지고 있다.
  - 매우 가벼움에도 component, filters, forms, data binding 등 frontend framework에서 기대하는 많은 기능들을 사용할 수 있다.
  - 라우팅이 분리된 패키지로 존재해서 뷰 위에 설치를 해야하지만, 그렇다 하더라도 매우 가볍다.


how to download(use) vue js
  - 우리가 vue js를 사용하려는 파일에 <script src="https://unpkg.com/vue"></script>를 추가하기만 하면 된다.


to learn
- routing에 대해 공부하기


vue js tutorial#2

atom-live-server or VS code live-server
  - local server를 열고 포트를 설정해서 해당 포트에 listen 할 수 있도록 한다.
  - 작성 중인 파일을 로컬 서버에 연결하여 열면 파일을 수정함에 따라 수정된 내용이 dynamic하게 적용이 된다.

vue instance
  - 뷰 인스턴스는 애플리케이션의 전체 부분(whole part) 혹은 일부분(a certain part)을 컨트롤하는 역할을 한다.
  - 즉, 전체 애플리케이션을 통제 하기 위해 단지 하나의 인스턴스만 가질 수도 있다.
  - 또는 웹사이트의 분리된 세 영역을 컨트롤하는 세개의 인스턴스를 가질 수도 있다.
  - vue instance에 해당 vue instance가 어떻게 애플리케이션을 컨트롤하는지에 대한 data를 만들거나, method를 만들어서 이것을 pass해줄 수 있다.

app.js
  - 이 파일에 vue instance를 만들 수 있다. #(hash) symbol은 id 값을 의미한다.
```
new Vue({
  el: '#app-vue'
})
```
  - 이렇게 설정하면 원하는 파일에서 app.js 파일을 추가하고, html의 id 값에 'app-vue'를 주면 해당 vue instance에 있는 내용을 사용할 수 있다.
  - 예를 들어 div 태그에서 사용하려면 아래와 같이 스크립트 태그를 추가하고, 사용하려는  div 태그의 id 값을 지정해주면 된다.
```
<script src="app.js"></script>
<div id='app-vue'>
</div>
```
  - 이렇게 설정해주면 div 태그와 vue instance의 커넥션을 생성해주고, div 태그 안에서 vue instance를 사용할 수 있게 된다.
  - 내보내고자하는 어떤 종류의 dynamic data, event handling 또는 data-binding의 상호작용도 이 instance에 의해 관리될 수 있다.
  
 
store data in vue instance
```
new Vue({
  el: '#app-vue',
  data: {
    name: 'jaeju'
  }
})
```
  - data 안에 key-value의 형태로 데이터를 저장할 수 있다.
  - 이렇게 저장한 데이터는 div id='app-vue'를 지정한 태그 안에서 {{name}}처럼 사용할 수 있다.
  - vue.name과 같이 지정할 필요가 없고, {{name}}으로 지정하면, vue에서 data에 name을 찾아서 해당 값을 넣어주게 된다.
  - 이와 같은 작업은 live server를 켠 상태로 live server에서 확인해야 한다.
```
<div id='app-vue'>
<p>{{name}}</p>
</div>
```


vue js tutorial#3

data
  - data {} 부분에 우리는 원하는 만큼의 데이터를 저장할 수 있다.
  - 예를 들면 또 다른 데이터 property를 추가해보자. job이라는 이름으로 student를 등록한다.
  - 그러면 다시 {{job}}이라는 형태로 해당 데이터를 output할 수 있다.


method
  - vue instance에 method 역시 추가할 수 있다.
  - data와 마찬가지로 우리가 원하는 만큼의 다른 method를 추가할 수 잇다.
  - greet이라는 이름의 메서드를 추가하고, DOM에 output할 수 있는 것을 return 하는 메서드로 정의해보자.
```
new Vue({
  el: '#app-vue',
  data: {
    name: 'jaeju',
    job: 'student'
  },
  methods: {
    greet: function() {
      return 'Good Morning'
    }
  }
});
```
  - 이렇게 하면 우리가 해야할 것은 해당 메서드를 호출하기만 하면 된다. 메서드를 호출할 때는 {{}}이 안에 넣어주면 된다.
```
<div id='app-vue'>
<p> {{greet()}} </p>
</div>
```
  - greet가 메서드인 것을 감안하면 parameter를 전달해 줄 수 있다는 것은 당연하다.
  - 또한 메서드 안에서 data에 있는 값을 사용할 수도 있다.
```
methods: {
  greet: function(time) {
    return 'Good ' + time + ' ' + this.name
  }
}
```
  - vue instance 내에 있는 데이터이므로 this로 접근이 가능하다.
  - this.data.name이 아니라 this.name으로 바로 접근 가능하다.


onemore thing
  - vue instance의 data나 method를 div tag 밖에서 접근하면 어떻게 될까?
  - vue instance의 el property를 기억해보자. 이것은 해당 instance가 el property에 정의된 곳을 control한다는 것이다.
  - 하지만 div tag 밖으로 나가게 되면 더이상 어떤 것도 컨트롤하지 못한다.
  - 따라서 'vue-app' id를 가진 div 태그 밖에서는 어떠한 data나 method도 사용할 수가 없다.


to learn
- this.data.name이 아니라 this.name으로 접근이 가능한 이유가 proxies them을 하기 떄문이라는데 이게 어떤 의미일까?
