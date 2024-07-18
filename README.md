### H800

## 2024-07-18 수정 내용

### LG AOM

#### 1. 통화관련 사항
- 페이지 이동 관련 수정 : 신규로 추가된 페이지들의 패킷은 0x4B로 시작하는데 이에 대한 조건식 누락으로 led id가 전부 0으로 설정됨
 
**-> 해당 조건식 추가. PLedVO.java**
**double asterisks**

- 점등 관련 수정 : 위의 내역까지만 수정하면 발신 시 해당 버튼에 RED LED가 점등됨. GREEN LED로 점등되려면 시리얼로 전달 받은 ID값과 내가 클릭한 이벤트 버튼 ID값을 일치시켜줘야 함. 현재 이벤트가 들어갈 때 ID 128(129번째 177번 버튼)부터 오버플로우가 생겨 -128이 됨.

###### -> +128 +177를 더해서 양수 값으로 전환시켜 클릭된 기존 버튼 번호 값과 일치시킴. MainActivity.java


## 2024-06-17 수정 내용

##### 최초 업로드
