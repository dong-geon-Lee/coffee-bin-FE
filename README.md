<img width="100" height="100" alt="bank" src="https://user-images.githubusercontent.com/69576865/210367299-f930afa5-8a3a-4ab2-9bd5-77c8fb62fe62.png">

## :mag_right: &nbsp; 프로젝트 소개 
> BISTOR 앱은 원활한 사용자 경험을 제공하는 전문 커피 판매 서비스입니다.</br> 
> React를 사용하여 구축되었고 사용자가 쉽게 커피를 고르고 주문 할 수 있는 다양한 기능을 구현했습니다.</br> 
> 책 형태의 디자인으로 사용자 친화적인 인터페이스를 구축했고 감각적인 디자인으로 앱을 만들었습니다.  

### [ 1 ] &nbsp;프로젝트 목적

- :white_check_mark: &nbsp; 랜딩 페이지 및 UI 설계 및 구현
- :white_check_mark: &nbsp; 로그인 & 로그아웃 구현
- :white_check_mark: &nbsp; 라우팅 경로 설계 및 리디렉션 구현
- :white_check_mark: &nbsp; 메뉴 필터 기능 구현
- :white_check_mark: &nbsp; '좋아요' 기능 구현 
- :white_check_mark: &nbsp; '장바구니' 기능 구현 
- :white_check_mark: &nbsp; '계좌충전' 기능 구현

</br>

### [ 2 ] &nbsp;프로젝트 설치 & 실행

#### 터미널에서 다음 명령어를 입력합니다.

```
$ git clone https://github.com/dong-geon-Lee/coffee-book-app.git
$ cd coffee-book-app
$ code .
$ npm install
$ npm start
```

<br/>

## :link: &nbsp; 배포 링크 
- https://dong-geon-lee.github.io/coffee-book-app/
<br/>
<br/>

## :alarm_clock: &nbsp; 프로젝트 기간
 - 2022.12.18 - 2023.01.03
<br/>
<br/>

## :seedling: &nbsp; 기술 스택  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=fff)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=fff)
![TYPESCRIPT](https://img.shields.io/badge/TypeScript-212121?style=for-the-badge&logo=TypeScript&logoColor=0A9EDC)  
![React](https://img.shields.io/badge/React-444444?style=for-the-badge&logo=React)
![Recoil](https://img.shields.io/badge/Recoil-00A4DC?style=for-the-badge&logo=Relay&logoColor=fff)
![styled-components](https://img.shields.io/badge/styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=fff)

### [ 3 ] &nbsp;사용 기술 안내

- <strong>HTML-CSS-TypeScript</strong> </br>
  이 기술들은 웹 개발의 기본적인 요소라서 선택하였습니다. HTML은 웹 페이지의 구조와 콘텐츠를 제공합니다. </br>
  CSS는 스타일 적용이 가능하며 TypeScript는 정적 타입 검사가 가능하여 코드의 안정성과 유지 관리성을 향상시키는데 도움이 됩니다. 

- <strong>React</strong> </br>
  React는 UI 컴포넌트를 쉽고 효율적으로 생성할 수 있는 기능 때문에 선택했습니다. </br>
  컴포넌트를 사용하면 한 컴포넌트의 변경 사항이 다른 컴포넌트에 영향을 미치지 않는 모듈식 및 예측 가능한 개발이 가능합니다.  
  또한 React의 가상 DOM과 효율적인 렌더링 방법은 고성능 애플리케이션을 제공합니다.

- <strong>Recoil</strong> </br>
  Recoil은 복잡한 애플리케이션 상태의 관리를 단순화하고 코드 유지 관리를 용이하게 하기 때문에 상태 관리 라이브러리로 선택했습니다. </br>
  atom과 selector 함수와 같은 기능은 각 컴포넌트에서 상태관리 할 때 사용되어 복잡한 상태를 관리하는데 유연성과 효율성을 제공합니다. 
  전반적으로 Recoil은 개발 프로세스를 간소화하고 애플리케이션의 성능과 유지 관리성을 향상시킵니다.
  
- <strong>Styled-components</strong> </br>
  CSS 충돌 방지 기능과 높은 재사용성 때문에 스타일링 라이브러리로 선택했습니다. </br>
  해당 라이브러리는 각 컴포넌트에서 스타일을 모듈화하여 유지 관리가 더 쉬워지는 장점이 있습니다.  
  또한 동적 스타일 및 테마를 사용할 수 있으므로 보다 유연하고 반응이 빠른 디자인이 가능합니다.
<br/>
<br/>

## :notebook_with_decorative_cover: &nbsp; 프로젝트 구조

<img width="208" alt="스크린샷 2023-03-16 오후 3 26 32" src="https://user-images.githubusercontent.com/69576865/227779747-3716179d-2ae1-42f6-bb50-10fa2198b09c.png">

<h3>@types</h3> TypeScript 인터페이스 유형이 포함되어 있으며, 이는 더 나은 코드 구성을 위해 별도로 관리됩니다. </br>    

<h3>assets</h3> 프로젝트에서 사용되는 이미지 및 로고 파일을 관리합니다. </br>    

<h3>components</h3> 모든 컴포넌트 요소의 파일 및 스타일을 관리합니다. </br>    
모듈식 및 재사용 가능한 방식으로 컴포넌트를 구성함으로써 효율적이고 일관성 있는 프로세스를 보장됩니다.

<h3>constants</h3> 응용 프로그램 전체에서 사용되는 고정 값을 관리하는 데 사용됩니다. </br> 
constants 폴더는 이러한 값을 나열하여 코드 가독성과 유지 관리성을 향상시키는 데 도움이 됩니다. </br>

<h3>data</h3> 프로젝트와 관련된 모든 더미 데이터를 관리합니다.

<h3>helpers</h3> 프로젝트 내에서 특정 작업이나 계산을 수행하는 데 사용되는 유틸리티 함수들이 포함되어 있습니다. </br> 
이러한 기능을 기본 코드베이스와 별도로 유지함으로써 helpers 폴더는 보다 체계적이고 모듈화된 개발 접근 방식을 촉진합니다

<h3>pages</h3> 완료된 컴포넌트를 나열하여 전체 사용자 인터페이스를 동적으로 생성하는 데 사용됩니다. </br> 
pages 폴더는 UI를 더 작고 재사용 가능한 구성 요소로 분해하여 개발 프로세스를 단순화하고 각 페이지의 모양과 기능이 일관되도록 합니다. </br>

<h3>recoils</h3> 전역 상태를 관리하는 프로젝트 상태 관리 시스템의 중요한 부분입니다. </br>
여기에는 프로젝트에서 사용되는 atom과 selector 함수를 관리합니다. 

<h3>styles</h3> styled-components 글로벌 스타일 폴더로 해당 프로젝트의 글꼴, 색상 및 레이아웃과 같은 모든 전역 스타일을 관리합니다. </br>    
단일 위치에 스타일을 집중하여 일관성을 높이고 프로젝트의 전체적인 형태를 업데이트하는 과정을 단순화합니다. </br>
</br>
</br>

## :eyes: &nbsp; 프로젝트 시연
<details>
<summary>랜딩 페이지 & 로그인 페이지</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/210474883-9b735544-85bf-4190-abad-51919e84e8f7.gif">
</details>

<details>
<summary>로그인 & 로그아웃</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/210475491-6168a7be-0b52-426c-b5c8-2b0c9eed2aee.gif">
</details>

<details>
<summary>유효성 검사 & 게스트 로그인</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/210476028-1a503393-0995-4926-b4ed-7990d0c1bc85.gif">
</details>

<details>
<summary>네비게이션</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/210476579-b71da3ba-9672-4e36-bf4c-c8b188a58d4e.gif">
</details>

<details>
<summary>커피 메뉴 필터링</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/210476905-0ada2d37-9d52-494a-a395-c747d64f976f.gif">
</details>

<details>
<summary>장바구니 추가 & 제거</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/210477930-4806f877-7a8d-4255-8ec5-a69c6d56226b.gif">
</details>

<details>
<summary>좋아요 추가 & 제거</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/210478290-702bf118-b811-4150-b3dd-7de26acd9be4.gif">
</details>

<details>
<summary>계좌선택 & 계좌충전</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/210479541-2abc4fdf-0a56-4740-a286-f56cb903b6f7.gif">
</details> 

<details>
<summary>결제하기 & 결제내역</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/210479874-093b094a-6929-4c53-b0e3-2c9222212162.gif">
</details> 
</br>

## :herb: &nbsp; 프로젝트 설명
<h3>[ 5 ] 상세 설명</h3>
이 서비스는 사용자가 원하는 커피를 고르고 구매할 수 있는 플랫폼을 제공하는 웹 애플리케이션입니다. 
사용자가 로그인하면 사용 가능한 모든 제품을 표시하는 홈 페이지로 리디렉션됩니다.


</br>
</br>

## :bust_in_silhouette: &nbsp; Crew
Crew | Role | GitHub
----- | ----- | -----
💻 이동건 | Front-end | https://github.com/dong-geon-Lee
<br/>
# coffee-bin-FE
