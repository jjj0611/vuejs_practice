2019-05-17
- the Net Ninza 채널을 이용해서 vuejs를 공부하기 위해 repository를 만들었다.
- 앞으로 수강을 하며 변경되는 코드들은 여기에 올릴 예정이다.

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

app.js
- 이 파일에 vue instance를 만들 수 있다.
```
new Vue({
  el: 'app-vue'
})
```
- 이렇게 설정하면 원하는 파일에서 app.js 파일을 추가하고, html의 id 값에 'app-vue'를 주면 해당 vue instance에 있는 내용을 사용할 수 있다.
- 예를 들어 div 태그에서 사용하려면 아래와 같이 스크립트 태그를 추가하고, 사용하려는  div 태그의 id 값을 지정해주면 된다.
```
<script src="app.js"></script>
<div id='app-vue'>
</div>
```
- 이렇게 설정해주면 div 태그 안에서 해당 vue instance를 사용할 수 있다.
