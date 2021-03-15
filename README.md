# 배달의 민족 클론코딩

## 배민 어플로 서브웨이 배달 주문 UI(음식 주문하는 소비자 측) 분석

### 1차 UI
1. header
- [ ] 서브웨이 매장 이름이 스크롤 되면 header 부분에 타이틀이 올라감
2. body
- [ ] 배달 시간 소요 예상 ? 클릭시, 팝업 메세지가 뜨고 3초후에 없어지거나, 다시 팝업창을 클릭하면 없어진다. 
- [ ] 배달팁 자세히를 누르면 주변이 어두워지면서 팝업 메세지가 뜨고, 확인버튼을 누르면 사라진다.
- [ ] 스크롤 되면서 메뉴 부분이 헤더 부분에 닿을때를 기점으로, 메뉴 카테코리별 키워드가 생기고, 해당 카테코리 영역에 하이라이트 된다. 
- [ ] 키워드 목록의 처음과 끝 사이 안에서 화면 중간에 현재의 카테코리 영역을 배치시킨다. -> 애니메이션
- [ ] 각 메뉴 카테고리 마다, 토글 버튼을 주어 메뉴 항목을 숨기고 보일수 있다.(default: 보임)
- [ ] 장바구니 아이콘은 스크롤을 내려도 고정되어있다.
- [ ] 원산지 표기를 클릭하면 footer로 스크롤이 내려가면서 footer의 원산지 표기 항목이 토클이 펼쳐진 상태로 보여진다. 

3. footer
- [ ] 원산지표기: 토글로 2줄까지만 default값을 보여지고, 토글 버튼 클릭시, 전체항목이 보여진다. 

### 2차 UI(index.html 안의 html)
0. 1차 -> 2차 ui 이동 
- 메뉴 클릭시, 해당 섹션이 mousedown 1단계로 해당 부분이 어두어 졌다가, mouseup 할때 더욱 어두워지며 화면이동
1. header
- 스크롤 내릴때 일정부분 넘어갈때, imageurl이 사라지면서 title 고정됨
2. body
 - 메뉴별 체크박스 구현
    - [ ] 빵: 1개만 선택가능, 선택필수 
    - [ ] 치즈: 1개만 선택가능, 선택필수 
    - [ ] 빵 토스팅: 1개만 선택가능, 선택필수 
    - [ ] 쿠키/칩,음료(세트일 경우): 1개만 선택가능, 선택필수
    - [ ] 재료 추가선택: 전부다 선택가능, 옵션
    - [ ] 야채 제외: 전부 선택가능, 옵션
    - [ ] 소스: 1~3개까지 선택가능, 선택 필수
    - [ ] chessy 웨지, Bacon chessy 웨지, 수프 : 재료추가 전부, 옵션
 - 추가기능
    - [ ] 아래 비활성화된 "갯수"담기"가격" 버튼은 가격, 수량 변경될때 마다 최신화 되고, 필수 선택사항을 전부 선택했을때 활성화 된다. 
    - [ ] 소스 3개 초과로 선택시, 3개까지 선택 가능 합니다. 팝업이 2초 동안 떳다가 사라진다. 
    - [ ] 활성화된 담기 버튼을 누르면 서브웨이 메인화면으로 돌아간다. 
    - [ ] 장바구니 아이콘클릭 하면 주문정보가 나오고 수량변경이 가능하다.
    - [ ] 수량 변경할때, 아래 "가격" 배달 주문하기 버튼 data 최신화 된다. 
    - [ ] +더담으러가기 버튼 누르면 메인으로 이동한다.
    - [ ] 장바구니 클릭 상태에서, 장바구니 전체삭제를 클릭하면 모두 삭제하시겠습니까? 라는 팝업창이 뜨고 확인을 누르면 장바구니 데이터가 리셋된다. 
    - 메뉴를 다 고를 후 배달 주문하기 버튼 누름
    - [ ] 주소와 결제 수단은 필수로 입력
    - [ ] 요청사항, 라이더님께는 선택이며, 다음에도 사용으로 저장가능
    - [ ] 라이더님께 입력 텍스트는 미리 완성되어 있는 문구 선택과, 직접입력으로 입력 변경 가능(default: 문구선택 - "조심히 안전하게 와주세요 :)")
    - [ ] 필수 사항 전부 입력하면 '가격' 결제하기 버튼 활성화, 이부분에서 배달비가 음식값에 추가되어진 가격으로 나옴
 
 ---
 ### subway 매장측 UI (수신)
 1. 주문 접수(tab)
    - [ ] 소비자가 결제하기 버튼을 누르면, 3초 후에 접수대기에 주문이 추가 된다.
    - [ ] 주문 접수의 처리중 탭에 '수신시간', '메뉴', '주소', '날짜', '주문번호' 로 구성된 ui 노출
    - [ ] 해당 섹션을 클릭하면 접수대기 정보가 보이고, 주문거부, 주문접수 버튼중 선택
    - [ ] 해당 섹션의 주문표 인쇄를 누르면 주문표 탭에 주문 영수증이 쌓인다.
    - [ ] 주문 접수를 선택시 배달 예상 시간을 선택하고 알림톡을 보낸다.
    - [ ] 주문 거부를 선택시, 거부 옵션을 선택하고 알림톡을 보낸다.
    - [ ] 주문 접수 알림톡 구성: '배달예상시간', '주문일시', '주문번호', '가게', '메뉴', '배달주소'
    - [ ] 주문 거부 알림톡 구성: '거부 옵션', '주문일시', '가게', '메뉴', '배달주소', '사유'
    - [ ] 주문 접수 사이트 탭에 접수대기, 처리중, 완료 탭 별로 건수를 숫자로 표기
    - [ ] 주문을 접수했을 경우, 접수대기 상태에서 처리중으로 건수가 옮겨간다. 
    - [ ] 매장에서 기사님이 음식을 해당 배달지로 배달을 완료하면, 처리중에 있는 건을 완료처리한다. 
    - [ ] 완료하면 완료 알림톡을 소비자에게 보낸다. 
    - [ ] 처리중 상태에서 배달을 취소할때 취소 옵션을('고객요청', '가게사정', '배달불가','재료소진') 선택하고 주문취소 알림톡을 보낸다.  
 2. 주문표(tab) UI
    - header
        - 서브웨이 타이틀
        - 매장주소
        - 대표자: 이름 , 전화번호, 사이트
        - 요청사항 
        - 소비자주소
        - 주문 고객 연락체
    - body 
        - 품목명 + 옵션
        - 배달비
        - 합계
    - footer
        - 주문매장, 주문일시, 주문번호, 주문업체
        - 결제정보




