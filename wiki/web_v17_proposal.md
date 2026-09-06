# 🎠 [Web v17] 다문화 도서관 납품/구입 전문 플랫폼 기획서
## (Grand Storybook Carousel · 그랜드 스토리북 회전목마)

> **"벨 에포크 극장의 황금 회전목마 위에 책이 앉아 있는, 고급스럽지만 아이가 먼저 손을 뻗는 서점"**

공통 디자인 방향: [`web_v17_v19_design_brief.md`](./web_v17_v19_design_brief.md)

---

## 1. 컨셉 & 감성

| 축 | v17 해석 |
|---|---|
| 고급스러움 | 크림 종이 질감, 부르고뉴 벨벳, 샴페인 골드 라인, 세리프 디스플레이(Cormorant Garamond) |
| 아이들이 좋아하는 느낌 | 황금 회전목마, 열기구, 통통 튀는 스프링 모션, 로즈 핑크 포인트 |
| 흥미로움 | 회전목마 좌석이 책으로 되어 있고, 마우스에 따라 회전 속도가 변함. 신간이 퍼레이드처럼 행진 |

**팔레트:** Cream `#F7F1E6` · Burgundy `#6B1F2E` · Champagne Gold `#C9A961` · Dusty Rose `#E8B4B8` · Ink `#2B1B1E`

---

## 2. Google Stitch 연동

* **Stitch 프로젝트 ID:** `1532221968786527610`
* **Stitch 프롬프트 (HOME):**

```
HOME PAGE. Theme: Grand Storybook Carousel. Palette: warm cream #F7F1E6 background, burgundy #6B1F2E, champagne gold #C9A961, dusty rose #E8B4B8 accents, ink #2B1B1E text.
Hero 3D area: a golden carousel (merry-go-round) whose seats are floating open books, tiny hot-air balloons drifting behind, soft gold confetti sparkles.
Exhibition tabs: Golden Carousel, Hot-Air Balloon Gallery, Storybook Staircase.
Overall feel: a grand boutique children's bookstore in a Belle Epoque theatre.
+ (공통 마스터 프롬프트)
```

* **Stitch 생성 결과 (HOME 화면):** screen `b02d148ed53a4028b1181c1bc0422dcd` — "The Grand Narrative - Home Page"
  * 디자인 시스템 자동 생성 및 홈 화면 1종 생성 완료 (`stitch-mcp tool generate_screen_from_text`)

![v17 Stitch 홈 시안](file:///Users/jatu/app/다문화도서관/wiki/img/v17_stitch_home.png)
*▲ Google Stitch가 생성한 v17 홈 화면 시안*

---

## 3. 5개 페이지 구성

1. **메인 (`#home`)**
   * **Three.js 메인 배너:** 황금 회전목마(기둥·천막·회전 플랫폼) + 좌석마다 펼쳐진 3D 책 + 뒤편 열기구 + 골드 컨페티. 마우스 패럴랙스.
   * **3D 회전목마 전시실:** 기획전 탭 전환 시 진열 형태 변경 — 회전목마 링 / 열기구 갤러리(위아래 부유) / 스토리북 계단(나선 계단).
   * **신간 목록:** 사서용 서지 리스트 ↔ "책 퍼레이드" 3D(책들이 무대 위로 행진) 토글.
2. **도서 검색 (`#search`)** — 언어·연령·KDC·출판사·가격 필터 레일 + 결과 그리드/리스트.
3. **큐레이션 (`#curation`)** — "세계 동화 회전목마전", "이중언어 그림책 열기구전", "다문화 가정 첫 책 계단전" 3D 전시.
4. **장바구니 · 공문 견적함 (`#cart`)** — 수량 조정, 납품가(-10%) 자동 산출, 기관/담당자 입력, 인쇄(PDF)/엑셀 출력.
5. **도서 상세 (`#detail`)** — 360° 3D 책 회전, 서지정보 테이블, 관련 도서.

---

## 4. 인터랙션 & 버튼 효과

* **클릭:** 골드 스파클 파티클 버스트 + 뮤직박스 차임(Web Audio 3음 아르페지오) + 스프링 스케일.
* **호버:** 카드가 살짝 떠오르며 골드 하이라이트 라인.
* **다국어:** KO · EN · VI · ZH · RU · JA 즉시 전환.
