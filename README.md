### H800

## 2024-07-18 수정 내용

### LG AOM

#### 1. 통화관련
- 97 (145)번 버튼부터 전화 발신, 수신 시 점등 기능과 해당 버튼이 위치한 페이지로 이동되는 기능이 작동 안 하는 현상 수정
신규로 추가된 페이지들의 패킷은 0x4B로 시작하는데 이에 대한 조건식 누락으로 led id가 전부 0으로 설정됨   
**-> 해당 조건식 추가. PLedVO.java**   
   
위의 수정내역 적용시 발신 시 해당 버튼에 RED LED가 점등 됨. GREEN LED로 점등되려면 시리얼로 전달 받은 ID값과 클릭한 이벤트 버튼 ID값을 일치시켜줘야 하는데 현재 이벤트가 들어갈 때 ID 128(129번째 177번 버튼)부터 오버플로우가 생겨 -128이 됨을 확인
**-> +128 +177를 더해서 양수 값으로 전환시켜 클릭된 기존 버튼 번호 값과 일치시킴. MainActivity.java**

- 검색 목록에 72번 버튼까지만 조회 가능한 현상 수정: 72번 까지만 리스트 생성 반복문이 실행되고 있음을 확인   
**-> 144번까지 확장. 10_search.html**

#### 2. 기타 편의
- 버튼 설정 수정 후 변경 사항을 적용할 것인지에 대한 알림 창에서 '취소'버튼을 누르면 새로고침이 되는 현상: '취소' 버튼을 클릭했을 때 프로비저닝이 실행 되면서 새로고침이 됨
**-> 취소의 경우엔 getProvisioning()가 실행되지 않게 수정 script.js**

## 2024-06-17 수정 내용

##### 최초 업로드
