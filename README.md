<div align=center> 
    <h1> 🛍️ 위풍댕댕 종합쇼핑몰 팀 프로젝트 </h1>
</div>
<p align="center"> 
  <img src="https://user-images.githubusercontent.com/101246806/194984547-fe6b0827-4aff-43fc-a3db-06c6f17915d9.png" width= "400"/>
</p>
<div align=center> 
    <h1> :dog: 멍멍아 야옹해봐 :cat: </h1>
  <div align=left>
  <h3> - 반려동물을 사랑하는 사람들을 위해 제작한 반려동물 종합쇼핑몰 사이트입니다. <br/>
       - 쇼핑몰 기능 외에 펫주인들의 소통을 위한 커뮤니티 기능을 추가하였습니다.
    <h3>
    </div>
</div>
    <h1> </h1>
<div align="center"> 
    <h3> 프로젝트 기간 : 2022.09.07(수) ~ 2022.10.09(일) </h3>
</div>
<br/>

# 💨 구현한 기능
### - 회원 도메인 및 로그인(+ 소셜) 기능
<p align="left"> 
  <img src="https://user-images.githubusercontent.com/101246806/211677738-4dc5c3f7-6566-4cea-b685-9a45ba9b0420.gif">
</p>

- 회원가입 시, 유효성 검사, 비밀번호 마스킹 처리
- 제출 버튼을 누르면 DB에 회원 정보가 저장되며, 로그인 시 이 데이터를 활용
- 로그인에 성공 시 발행한 토큰을 세션 스토리지에 저장 후 인가 처리에 사용
- 로그아웃 시 세션 스토리지를 비워주고, 백엔드 측에선 토큰 탈취를 고려하여 DB에 저장된 Refresh 토큰을 제거합니다.

 <br/>

### - 상품 도메인 기능
<p align="left"> 
  <img src="https://user-images.githubusercontent.com/101246806/211677908-1795e77b-d2b0-4067-b293-38fd3dc4bdef.gif">
</p> 

- 로그인을 한 유저의 화면에서만 상품 등록 버튼이 보입니다. (추후 권한 설정을 추가하여 관리자 계정일 때만 보이도록 수정 예정)
- 위와 같이 상품 정보를 입력 후, 제출 버튼을 누르면 상품이 메인 이미지와 함께 등록됩니다.
- 상품 삭제도 가능합니다.

 <br/>

### - 상품 찜 / 인기 상품 나열 기능
<p align="left"> 
  <img src="https://user-images.githubusercontent.com/101246806/211677966-d9a76b99-f336-4cc0-a6b5-62503a34ff07.gif">
</p> 

- 찜하기 버튼을 클릭하여 상품을 찜 할 수 있습니다.
- 마이페이지에서 찜 목록 버튼을 클릭하여 찜 목록을 확인할 수 있습니다.
- 상품들의 판매량을 기준으로 판매량이 높은 상위 8개의 상품이 인기상품에 나열되게 됩니다.

 <br/>

### - 상품 별 리뷰 / Q&A 기능
<p align="left"> 
  <img src="https://user-images.githubusercontent.com/101246806/211678018-77218f82-7ef9-4a9a-8f98-594796d73608.gif">
</p> 

- 상품 상세 페이지 Review탭에서 QnA와 Review를 등록할 수 있습니다.
- 휴지통 모양 버튼을 누르면, 삭제되어 사라집니다.

 <br/>

### - 주문 및 결제 기능
<p align="left"> 
  <img src="https://user-images.githubusercontent.com/101246806/211678096-efa92522-f337-4989-9f34-775f4d6945b4.gif">
</p> 

- 장바구니부터 주문하기까지 기능을 구현하였습니다.
- 결제 정보를 DB에 저장하여 조회할 수 있도록 가결제로 구현하였습니다.

 <br/>

### - 게시판 기능 (커뮤니티, 공지사항, FAQ)
<p align="left"> 
  <img src="https://user-images.githubusercontent.com/101246806/211678142-7189a682-8f26-4f36-a71d-16957d010f3b.gif">
</p> 

- 기본적인 게시판 기능을 구현하였습니다.
- 댓글 등록 또한 가능합니다.

 <br/>

### - 서버 에러 날 시, 개발자에게 메일링 기능
<p align="left"> 
  <img src="https://user-images.githubusercontent.com/101246806/211675295-14b75c48-ad51-4c58-bccc-fb58ddeb4047.png" width= "700"/>
</p> 

- 백엔드 서버에서 미리 핸들링되도록 설정하지 않은 에러가 발생 시, 등록한 개발자들의 이메일로 해당 에러의 내용을 메일 발송합니다.

 <br/>

# :information_desk_person: 팀 인원
<p align="center"> 
  <img src="https://user-images.githubusercontent.com/101246806/194975433-c69df4cd-0216-49e0-9d27-77fd1ae5cfbc.png">
</p> 
  
  <br/>
  <br/>
  <br/>
  
# :sparkler: 기술스택
![image](https://user-images.githubusercontent.com/101246806/194976176-6f171917-a783-4e8f-a2cc-90ec8cba53f6.png)
  
<br/>
  
# :green_book: 문서
  
## 🔎 [요구사항 명세서](https://docs.google.com/spreadsheets/d/10A_OVETxs4MMVz9bb-l9PbH-4gBJvXAy1vHKStk5auw/edit#gid=0)
## 💻 [테이블 명세서](https://docs.google.com/spreadsheets/d/1W4ntaUjgMV2KYUmQAwriEsGxL1W-KVYHuGzaB1rIwiY/edit#gid=136126072)
## 📂 [API 문서](https://shopforourpets.shop:8080/swagger-ui/index.html)  
<br/>
  
# 🙆 팀 문화
  ✔️ 우리는 팀원간의 상호존중을 기본으로 Play 하고 있습니다. 우여곡절이 많았던만큼 서로 보다 깊이 이해하며 프로젝트를 진행하고 있습니다.  
  ✔️ 부족한 부분이 있으면 서로 채워주고, 서포트 해주며 팀 전체의 성장을 지향하고 있습니다.  
  ✔️ 매일 아침 9시 회의를하며 프로젝트 진행 현황과 어려운 점 및 팀원의 건강과 컨디션을 체크하고 있습니다.  
  ✔️ 의견 제시는 자유롭게, 팀원들 다수에게 설득된다면 수용되도록 커뮤니케이션 하고있습니다.  
  ✔️ 작업 집중에 최우선을 두지만, 팀 전체의 분위기도 중요하기에 오버커뮤니케이션 또한 긍정적으로 생각하고 있습니다.  
  
