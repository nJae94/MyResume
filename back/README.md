# Mysql 한글 및 이모티콘 사용

```
 charset: 'utf8mb4',
 collate: 'utf8mb4_general_ci',
```
# db 생성

```
npx sequelize db:create
```

# passport 

```
passport.authenticate('local',(err, user, info)=>{
    ```

- authenticate 시 선택한 전략에 따라 데이터를 반환 => passport.login() 실행 => serializeUser를 통해 쿠키랑 유저 id만 보관