# 🎨 [Web v17~v19] 공통 디자인 방향 기획 & Stitch 마스터 프롬프트

> **"고급스럽지만 아이들이 먼저 손을 뻗는, 그리고 사서가 3초 안에 신뢰하는 도서 판매 사이트"**

---

## 1. 전반적인 웹사이트 느낌 기획 (Design Direction)

### 1-1. 3가지 감성 축의 균형

| 축 | 목표 감성 | 디자인 언어 |
|---|---|---|
| **고급스러움 (Premium)** | 문화재급 서점, 부티크 갤러리 | 넉넉한 여백, 세리프 디스플레이 서체, 저채도 딥 컬러 + 메탈릭 포인트(골드/브론즈), 얇은 1px 선, 은은한 그레인 텍스처 |
| **아이들이 좋아하는 느낌 (Playful)** | 팝업북을 펼친 순간의 설렘 | 둥근 모서리, 캔디톤 포인트 컬러, 통통 튀는 spring 모션, 살아 움직이는 3D 오브젝트(회전목마·해파리·반딧불이) |
| **흥미로움 (Curious)** | "다음 장이 궤도로 움직일 것 같은" 기대감 | Three.js 액티브 오브젝트, 스크롤/호버 반응 3D, 기획전마다 다른 전시 형태, 클릭마다 다른 파티클+사운드 |

### 1-2. 두 명의 사용자, 하나의 화면

* **B2C 보호자·아이:** 큰 표지, 3D 전시실, 다국어 원문 제목이 그대로 노출되어 "우리 말 책"을 즉시 발견.
* **사서(핵심):** 모든 도서 카드에 **ISBN · KDC · 언어 · 대상연령 · 납품가**가 항상 노출. 장바구니는 곧 **공문 견적함**(인쇄/PDF·엑셀). 사서 모드 토글로 서지 밀도 전환.

### 1-3. 공통 필수 구성 요소

1. **메인 배너:** 시인성 높은 타이포 + 배경에 액티브한 Three.js 오브젝트(마우스 패럴랙스, 자동 애니메이션).
2. **큐레이션 기획전:** 버전별 3D 전시실(회전목마 / 수족관 터널 / 나선형 트리하우스) + 각 기획전마다 다른 진열 형태(링·나선·파도·헬릭스·계단).
3. **신간 목록:** ① 정적 리스트(사서용 서지 밀도) ② 액티브 3D 형태(책이 떠다니거나 행진).
4. **5개 페이지:** 메인 / 도서검색 / 큐레이션 / 장바구니(공문 견적함) / 도서 상세.
5. **다국어:** 한국어·English·Tiếng Việt·中文·Русский·日本語 6개 언어 즉시 전환 (data-i18n).
6. **버튼 효과:** 버전 분위기에 맞는 파티클 + Web Audio 사운드 + spring 스케일 모션.

---

## 2. Stitch 마스터 프롬프트 (공통, 영문)

> Google Stitch 프로젝트 생성 시 첫 프롬프트로 사용. 각 버전 기획서의 개별 프롬프트와 조합.

```
Design a premium multilingual online bookstore that sells children's and multicultural books to public libraries (B2B librarians) and families (B2C).
Mood: luxurious like a boutique gallery, yet playful enough that a 7-year-old wants to touch the screen, and curious like opening a pop-up book.
Layout system: generous whitespace, 12-column grid, max-width 1440px, rounded 20px cards, 1px hairline borders, subtle paper grain texture.
Typography: an elegant serif display font for headlines (e.g. Cormorant Garamond / Playfair Display), a clean humanist sans for body (Inter / Noto Sans KR), tabular numerals for prices and ISBN.
Every book card must always show: cover, title in its original language + Korean title, author, language flag chip, age range chip, KDC code, ISBN-13, list price and library supply price (10% off).
Header: logo, nav (Home, Search, Curations, Quote Cart), a language switcher with 6 languages (KO, EN, VI, ZH, RU, JA), a "Librarian mode" toggle, and a cart button with a count badge.
Hero: a large high-contrast headline over a full-bleed animated 3D scene area (reserve the area for a WebGL canvas), one primary CTA and one ghost CTA.
Sections: "3D Exhibition Hall" curation tabs, "New Arrivals" with a list/3D toggle, "For Librarians" quick-quote strip, footer with institution info.
Pages to design: 1) Home, 2) Book Search with left filter rail (language, age, KDC, publisher, price), 3) Curation exhibitions, 4) Quote Cart with institution form and Print/PDF/Excel buttons, 5) Book Detail with 360° book viewer and bibliographic table.
Buttons: pill-shaped, tactile, with a soft glow on hover and a satisfying pressed state.
```

---

## 3. 버전별 테마 요약

| 버전 | 테마 | 팔레트 | 3D 전시실 형태 | 버튼 효과 |
|---|---|---|---|---|
| **v17** | 그랜드 스토리북 회전목마 (Grand Storybook Carousel) | 크림 · 부르고뉴 · 샴페인 골드 · 로즈 | 황금 회전목마 전시실 + 열기구 갤러리 | 골드 스파클 + 뮤직박스 차임 |
| **v18** | 심해 아쿠아리움 라이브러리 (Deep Ocean Aquarium) | 딥 네이비 · 틸 · 코랄 · 진주빛 | 수족관 터널 + 산호 정원 구체 | 물방울 파문 + 워터드롭 사운드 |
| **v19** | 마법의 숲 트리하우스 (Enchanted Forest Treehouse) | 딥 에메랄드 · 모스 · 허니 골드 · 크림 | 나선형 나무 서가 + 반딧불이 서클 | 반딧불이 버스트 + 우드 노크 차임 |

* 각 버전 상세 기획서: `wiki/web_v17_proposal.md`, `wiki/web_v18_proposal.md`, `wiki/web_v19_proposal.md`
* 구현 폴더: `web/v17`, `web/v18`, `web/v19` (통합 뷰어 `web/index.html` 드롭다운에서 선택)
