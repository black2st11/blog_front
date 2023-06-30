# 프로젝트 설명

개인 블로그 용이자 개인 피력 사이트

## 버전 변경

### 2023-06-30

- 백엔드 API 구조 변경으로 인한 데이터 포맷 변경

- 전체적인 컬러 변경

- 개인정보에서 민감한 정보는 삭제

- 기존 md, html 을 통해서 보여주던 POST 는 현재 RichText 로 변경

## 설계

### 프론트(https://blog.black2st11.com)

- 언어 : JS

- 프레임워크 : Next.js

- 라이브러리 : axios(통신용), date-fns(데이트 포맷 변경), antd(디자인 라이브러리)

- 배포 :
  이전(S3 + CloudFront + ACM +Route53)
  현재(Github + Vercel)
  변경 이유 : 해당 부분 CI/CD 고려 중에 Github Actions 를 이용해야 했는데 Vercel은
  배포하기 위해 Github 연결을 해야하는데 해당 부분에서 CI/CD 적용이 되고
  테스트 목적을 위해서 해봤는데 취미 목적으로는 유지보수가 용이해서 적용하게 되어짐

### 백엔드(프라이빗 프로젝트로 올림)

- 리포지토리: (https://github.com/black2st11/my_blog_backend)[백엔드 리포지토리] 참고

### 전략

#### 초기 전략

##### 간략

프론트만으로 해당하는 프로젝트를 구성 및 배포 할 예정이었음

##### 페이지 구성

- 메인(한번에 보는 용도)

- 소개 페이지(개인 정보 관련 나열)

- 경력(경력 사항 나열)

- 경험(프로젝트 위주로 나열)

##### 문제점

경력 수정이 필요할 때마다 번거롭게 코드 수정 및 데이터 추가가 코드내에서 이뤄져야함

기능에 대한 부분이 프론트에서만 해야하다보니 제한이 되어짐

####

#### 현재 전략

##### 간략

프론트와 백엔드를 구성 프론트에서는 데이터를 보여주는 역할을 담당
백엔드의 경우 데이터 서빙 및 계산 관련(경력 계산 및 프로젝트 기간 계산) + 어드민 페이지를 통한 DB 데이터 삽입

##### 페이지 구성

- 메인(한번에 간략하게 보는 용도, 현재 각각 페이지에 해당하는 최대 3개의 콘텐츠만 보여줌)

- 소개 페이지(개인 정보 관련 나열)

- 경력(경력 사항 나열)

- 경험(프로젝트 위주로 나열)

- 던전? (업무 진행 시 어려웠던 부분 나열)

- 공략(공부했던 부분을 나열)

- 메시지(Q&A 형식으로 메시지를 받으면 답장해주는 형식)

##### 세부 기능

- ~~공략 : 작성해놓은 md 파일을 => html 파일로 변환 S3에 저장 후 URL을 전송 해당하는 부분을 페이지내에서 보여주는 형식~~(deprecated)

- 메시지 : 대댓글 형식으로 답변(댓글을 0으로 가정 후, 뎁스는 1번 대댓글 하나) + 하루에 IP 관련으로 해서 5회 초과 등록 불가

- 계산 관련 : 기간이 기입되어 있는 부분은 계산을 통해서 개월 수로 변환
