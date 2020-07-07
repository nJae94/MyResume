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