# create-next-app

# style-component가 적용되기 전에 렌더링되서 적용이 안되는 문제

- .babelrc 설정

```

{
    "presets": [
        "next/babel"
    ],
    "plugins": [
        [
            "styled-components",
            {
                "ssr": true,
                "displayName": true,
                "preprocess": false
            }
        ]
    ]
}

```

# Scss 혹은 css-Modules 사용

- next.config.js

```
const withSass = require('@zeit/next-sass');
module.exports = withSass({
    sassLoaderOptions: {
        cssModules: true,
        includePaths: ["absolute/path/a", "absolute/path/b"]
      }
});
```


# express 서버 라우트 분리

- require로 불러옴

```
app.use('/post',postRouter);
```

# mysql 연결

- mysql2 <= 드라이버

# next.js 에서 이미지 사용

```
const withImages = require('next-images');

module.exports = withImages(withSass({
  webpack(config, option){
    return config;
  },
    sassLoaderOptions: {
        cssModules: true,
        includePaths: ["absolute/path/a", "absolute/path/b"]
      }
}));
```

# redux 설정

- configureStore store 정의
```
 const store = createStore(reducer, enhancer);
```
- enhancer devtools 사용
```
const enhancer = process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(
        applyMiddleware(...middlewares)
      );
```
- next-redux-wrapper 를 사용

# getStaticProps 

- 언제 렌더링되더라도 변할 일 없을때

# getServerSideProps

- 접속한 상황에 따라 바뀌어야 할 떄