### LG H800

## 2024-09-23 수정 내용

### LGAom

- 네트워크 설정 메뉴, 단말 정보 메뉴에서 저장시 유효성 검사 추가 (※ 공백이 아니면서 0~255이내의 숫자 값)
<br>

## 2024-07-26 수정 내용

### LGAom

- 검색 목록에 72번 버튼까지만 조회 가능한 현상 수정
- 버튼 설정 수정 후 변경 사항을 적용할 것인지에 대한 알림 창에서 '취소' 버튼을 누르면 새로고침이 되는 현상 수정
- 버튼 설정 수정 시 테두리 밖 배경을 클릭하게 되면 창이 안 닫히도록 수정
- 현재 글꼴 중 '바탕','돋움','명조','궁서'체 적용 시 글꼴 출력이 모두 같은 현상(글꼴 로드 실패 현상) 수정
- 버튼 수정 시 해당 버튼이 기존에 어떤 글꼴이었는지에 대한 정보가 노출 안 되던 현상 수정
- 버튼을 신규로 등록하는 경우에도 '삭제' 버튼이 노출되던 현상 수정
- 버튼 수정 시 버튼 기능 부분 (버튼 기능 타입, 번호) 값을 변경 후 최종 저장하기 전에 다시 클릭하여 재확인 하려고 할 때 변경 사항이 반영되어 있지 않는 현상(이전 정보가 여전히 보여지는 현상) 수정
- 73 (121)번 버튼부터 글꼴, 글꼴 크기 설정 및 버튼 색상이 적용 안 되는 현상 수정
- 버튼 색상 value 명칭 통일 (btn_type -> btn_type00)
- 송수신시 LED 상태인 cadence에 오류가 있을 경우 정상 값으로 대체 (0x07 -> 0x40)
<br>

## 2023-11-23 수정 내용

### LGAom
 - 녹취 정보 조회 관련 코드 수정
<br>

## 2023-11-22 수정 내용

### LGAom
 - 통화 중인 내선번호 목록 보여주는 기능 최종 소스 업로드
 - 녹취 정보 조회 관련 코드 수정
 - 0.0.48 버전 추가
<br>

## 2023-08-17 수정 내용 

### LGAom
 - 통화 중인 내선번호 목록 보여주는 기능 추가
 - 0.0.46 버전 추가
<br>

## 2023-05-26 수정 내용 

### LGAom
 - 버튼 배열 추가
 - 통화 중인 내선번호 목록 보여주는 기능 추가 중 (현재 UI만 있음)
 - 지역코드 관련 버그 수정
 - 0.0.45 버전 추가
<br>

## 2022-02-17 수정 내용 
### LGSettings
 - 녹취서버 지역코드 관련 코드 및 기능 추가
 - context 값 첨부하여 설정정보 요청하도록 수정
 - 0.0.5 버전 추가

### LGAom
 - 페이지4 추가
 - 메인화면의 착신전환 버튼삭제 및 전화기 단축키에 등록하도록 수정
 - 녹취서버 지역코드 관련 코드 및 기능 추가
 - context 값 첨부하여 설정정보 요청하도록 수정
 - 0.0.38 버전 추가

### LGInstaller
 - context 값 첨부하여 업데이트 파일 요청하도록 수정
 - 0.0.14 버전 추가
<br>

## 2022-02-17 수정 내용 
### LGAom
 - 버튼 LED DATA 처리하는 시리얼 정보를 잘못 처리하고 있어서 버튼 LED 상태를 제대로 갱신하지 못하던 문제 수정
<br>

## 2022-01-25 수정 내용 
### LGSettings
 - 백업 정보 탭에서 복구 클릭 시 팝업 창 실행 및 확인 선택 시 진행하도록 수정
 - 복구 실행 시 COLP, BOX 정보도 복구 할 수 있도록 /sdcard/ 에 임시 데이터 생성

### LGAom
 - 부팅 시 /sdcard/ 에 COLP, BOX 값 임시 데이터가 있으면 값 읽어서 적용 후 파일은 삭제하도록 기능 추가
 - 위 기능 관련으로 퍼미션 필요하여 앱 실행 시 퍼미션 요구하는 팝업 실행하도록 기능 추가
 - 스크립트에 버튼 관련 API 추가
 - 데이터 베이스에 저장된 BoxData 설정 값을 기준으로 UI 보여주도록 수정 (앱, 웹 서버)
 - 초기화 실행 시 버튼 UI 정보도 삭제하도록 코드 추가
<br>

## 2021-12-21 수정 내용 
### LGAom
 - 불필요한 코드 Block 및 수정
 - 백업 관련 기능 동작하도록 코드 수정
 - 하루에 한번 자동으로 설정 정보 저장 시 변경된 설정 값이 있을 때에만 저장하도록 수정

### LGSettings
 - 업데이트 탭 진입 시 간헐적으로 에러가 발생하던 문제 수정
<br>

## 2021-11-30 수정 내용 
### LGSerial
 - 빌드에러 수정

### 기타
 - settings.gradle, build.gradle 파일 내의 링크 경로 수정
 - 릴리즈 빌드 옵션 추가
<br>

## 2021-11-15 수정 내용 
### LGAom
 - 업데이트가 필요하여 앱 강제 종료 시 토스트 메시지 출력하도록 기능 추가

### LGInstaller
 - 인덱스 에러 수정
 - LGSettings에서 어떤 앱의 업데이트를 실행했는지 전달 받도록 코드 추가

### LGSettings
 - 업데이트 정보 메뉴 화면 UI 정리 및 패키지명, 날짜 항목 삭제
 - 업데이트 버튼 클릭 시 LGInstaller 실행 및 어떤 앱의 업데이트를 실행했는지 전달하도록 코드 추가
<br>

## 2021-11-11 수정 내용
### LGAom
 - 네트워크 설정의 MAC 주소 값 변경할 수 없도록 수정
 - 네트워크 설정에서 IP 입력 창에 3자리 숫자 입력 시 자동 포커스 전환하도록 수정
 - 화면보호기 진입하면서 앱이 종료되는 에러 수정
<br>

## 2021-11-05 수정 내용
### LGSettings
 - 네트워크 설정 시 입력 창에 3자리 숫자가 입력되면 다음 창으로 포커스가 전환되도록 수정
 - 백업 설정 시 AOM 서버 설정 값이 없으면 앱이 종료되던 문제 수정
<br>

## 2021-11-04 수정 내용
### LGSettings
 - 네트워크 설정 시 공백이 있으면 앱이 종료되던 문제 수정
<br>

## 2021-11-03 수정 내용
### LGAom
 - 밝기 설정 관련 버그 수정
 - 밝기 설정은 확인 버튼을 누르지 않아도 바로 저장되도록 수정

### LGSettings
 - 밝기 설정 관련 버그 수정
 - LGSettings의 밝기 설정 UI를 EditText에서 Seekbar로 변경
 - 화면보호기 설정 항목들의 백그라운드 이미지 삭제
 - 타임아웃 설정 값 에러 메시지의 텍스트 수정

### 기타
 - SystemVO에 저장되는 밝기 설정 값의 저장 범위를 0~255 에서 0~100으로 수정. 해당 설정 값을 시스템 설정에 반영 시 0~255로 변환하여 적용시킴
 - 각 APP들의 settings.gradle, build.gradle에 path 추가
 <br>
 
