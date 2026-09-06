# 🌳 [Web v19] 다문화 도서관 납품/구입 전문 플랫폼 기획서
## (Enchanted Forest Treehouse · 마법의 숲 트리하우스)

> **"해질 무렵 거대한 나무 둥치를 따라 나선형 서가가 올라가고, 반딧불이가 책을 비추는 숲속 서점"**

공통 디자인 방향: [`web_v17_v19_design_brief.md`](./web_v17_v19_design_brief.md)

---

## 1. 컨셉 & 감성

| 축 | v19 해석 |
|---|---|
| 고급스러움 | 딥 에메랄드, 황동 랜턴, 우드 그레인, 식물 세밀화 터치 |
| 아이들이 좋아하는 느낌 | 트리하우스, 반딧불이, 떨어지는 나뭇잎, 버섯 전시대, 허니 골드 |
| 흥미로움 | 나무를 타고 올라가는 나선형 서가, 클릭마다 반딧불이가 터져 나옴 |

**팔레트:** Emerald `#0F2E24` · Moss `#3F6B4E` · Honey Gold `#E3B341` · Cream `#F4EDDC` · Bark `#4A2F1E`

---

## 2. Google Stitch 연동

* **Stitch 프로젝트 ID:** `2323526545390980178`
* **Stitch 프롬프트 (HOME):**

```
HOME PAGE. Theme: Enchanted Forest Treehouse. Palette: deep emerald #0F2E24 background for hero, moss #3F6B4E, honey gold #E3B341, cream #F4EDDC surfaces, bark brown #4A2F1E text.
Hero 3D area: a giant tree with spiral treehouse bookshelves winding up the trunk, fireflies (small glowing particles) drifting, falling leaves, warm lantern light from windows.
Exhibition tabs: Spiral Treehouse Shelf, Firefly Circle, Mushroom Display Stands.
Overall feel: a premium storybook forest at dusk, wood grain, brass lanterns, botanical illustration touches.
+ (공통 마스터 프롬프트)
```

* **Stitch 생성 결과 (HOME 화면):** screen `78d0017f04f641fc814fa4bcb5ed462b` — "Silva Library Home Page"
  * 디자인 시스템 자동 생성 및 홈 화면 1종 생성 완료 (`stitch-mcp tool generate_screen_from_text`)

![v19 Stitch 홈 시안](file:///Users/jatu/app/다문화도서관/wiki/img/v19_stitch_home.png)
*▲ Google Stitch가 생성한 v19 홈 화면 시안*

---

## 3. 5개 페이지 구성

1. **메인 (`#home`)**
   * **Three.js 메인 배너:** 거대한 나무 둥치 + 나선형 서가에 꽂힌 3D 책 + 반딧불이 파티클 + 낙엽 + 랜턴 포인트 라이트. 마우스 패럴랙스.
   * **3D 트리하우스 전시실:** 기획전 탭 — 나선형 서가(헬릭스) / 반딧불이 서클(원형, 발광) / 버섯 전시대(높이 다른 스탠드 그리드).
   * **신간 목록:** 서지 리스트 ↔ "낙엽 책" 3D(책이 나뭇잎처럼 흔들리며 내려옴) 토글.
2. **도서 검색 (`#search`)** — 언어·연령·KDC·출판사·가격 필터 + 결과 그리드.
3. **큐레이션 (`#curation`)** — "세계 숲 이야기 나선전", "이중언어 자연 그림책 반딧불이전", "다문화 전래동화 버섯전".
4. **장바구니 · 공문 견적함 (`#cart`)** — 납품가 산출, 기관 정보, 인쇄(PDF)/엑셀.
5. **도서 상세 (`#detail`)** — 360° 3D 책 + 랜턴 라이트, 서지정보.

---

## 4. 인터랙션 & 버튼 효과

* **클릭:** 반딧불이 버스트(황금 점광 파티클) + 우드 노크 + 차임 사운드.
* **호버:** 카드 뒤에 랜턴 글로우가 켜짐.
* **다국어:** KO · EN · VI · ZH · RU · JA.
