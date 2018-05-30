# ImHome_React_DOM


# 2018-05-30 Error Catch

config/webpack.config.dev.js 파일에서 css정의하는 쪽을 물리적 경로로 잡아놔서 에러가 잡힘

```

options: {
    sourceMap: true,
    data: `@import "이부분을 수정";`
}

```

- ImHome_React_DOM/src/config/_variables.scss 
요부분을 자신의 물리적 주소로 바꿔주면 실행됨
- 원래는 상대적 경로로 잡아줘야하는데 아직 방법을 못찾음
- C드라이브부터 경로를 줘야함


