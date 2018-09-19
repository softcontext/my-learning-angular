# 개발환경에서 사용되는 기술

개발 중에는 하루에 100번을 수행;;

.ts ==.html(.js)==> Browser

개발 중에는 실제 파일은 만들지 않고 
메모리에 해당 파일정보를 유지하면 보다 빠르게
브라우저에게 재 배포할 수 있다.

npm start ==> ng serve ==> @angular/cli
==> babel 트랜스파일링, webpack 빌딩 ==> webpack-dev-server

webpack 빌딩 결과:

<script type="text/javascript" src="runtime.js"></script>
  
<script type="text/javascript" src="polyfills.js"></script>
  
<script type="text/javascript" src="styles.js"></script>
  
<script type="text/javascript" src="vendor.js"></script>
  
<script type="text/javascript" src="main.js"></script>

index.html에 위 스크립트 태그를 동적으로 추가한다.

webpack-dev-server <== http://localhost:4200/ 브라우저 접근

webpack-dev-server ==> index.html 배포 to 브라우저




프로젝트 src 폴더 밑 index.html
-------------------------------

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularCliExample</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

실제로 브라우저에게 배포 된 index.html
-------------------------------

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngularCliExample</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
  
  <script type="text/javascript" src="runtime.js"></script>
  <script type="text/javascript" src="polyfills.js"></script>
  <script type="text/javascript" src="styles.js"></script>
  <script type="text/javascript" src="vendor.js"></script>
  <script type="text/javascript" src="main.js"></script>

</body>
</html>
```

개발자가 작성한 코드가 main.js안에 위치한다.

브라우저가 main.js를 처리하면 동적으로 HTML 엘리먼트가 
<app-root></app-root> 밑으로 배치된다.


개발자 로직의 처리순서
-------------------------------

main.ts ==> AppModule ==> AppComponent


Component 3 요소
-------------------
1. HTML
2. CSS
3. JavaScript
