# BookBook Server

<div align="center">

![로고](https://github.com/ppyom/bookbook/raw/main/src/assets/images/logo.svg)

[Demo](https://bookbook-rho.vercel.app/)

![Nodejs](https://img.shields.io/badge/Node.js-ffffff?style=flat-square&logo=Node.js&logoColor=ffffff&labelColor=3c873a&color=3c873a)
![Express](https://img.shields.io/badge/Express-ffffff?style=flat-square&logo=Express&logoColor=ffffff&labelColor=000000&color=000000)

</div>

알라딘 Open API를 사용해 도서 조회 웹 어플리케이션([BookBook](https://github.com/ppyom/bookbook))을 만들던 중 CORS 오류 해결을 위해 만든 서버입니다.

## ▶️ 실행 방법

1. `npm i`를 입력해 필요한 라이브러리를 설치합니다.
   - express, dotenv, cors
   - nodemon, prettier
2. `.env` 파일을 생성하고 아래 내용을 입력합니다.
   ```bash
   CLIENT_URL=# client url
   API_KEY=#발급받은 알라딘 API KEY
   PORT=#사용할 port 번호
   ```
3. `npm run dev`를 입력해 서버를 실행합니다.

## 🧾 API 명세

> [알라딘 Open API](https://blog.aladin.co.kr/openapi) 중 `상품 검색 API`, `상품 리스트 API`, `상품 조회 API`를 사용했습니다.

> Response는 [알라딘 Open API 매뉴얼](https://docs.google.com/document/d/1mX-WxuoGs8Hy-QalhHcvuV17n50uGI2Sg_GHofgiePE/edit)의 `응답 (Response)`부분을 참고해주세요!

### `GET` /itemList

책 목록을 반환합니다.

#### Request

```
https://example.com/itemList
```

##### Query

| 파라미터 | 필수여부 | 기본값     |
| -------- | -------- | ---------- |
| type     | false    | ItemNewAll |
| page     | false    | 1          |
| sort     | false    | Accuracy   |

### `GET` /search

query에 따른 책 검색 결과를 반환합니다.

#### Request

```
https://example.com/search
```

##### Query

| 파라미터 | 필수여부 | 기본값   |
| -------- | -------- | -------- |
| query    | true     |          |
| page     | false    | 1        |
| sort     | false    | Accuracy |

### `GET` /item/:id

id에 해당하는 책을 반환합니다.

#### Request

```
https://example.com/item/{id}
```

- `id`: 책의 고유 ID(ISBN13) 입니다.

##### Query

| 파라미터 | 필수여부 | 기본값   |
| -------- | -------- | -------- |
| page     | false    | 1        |
| sort     | false    | Accuracy |
