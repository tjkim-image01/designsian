# 🐚 [Web v18] 다문화 도서관 납품/구입 전문 플랫폼 기획서
## (Deep Ocean Aquarium Library · 심해 아쿠아리움 라이브러리)

> **"밤의 아쿠아리움을 통째로 어린이 도서관으로 바꾼, 해파리 등불이 떠다니는 유리 서점"**

공통 디자인 방향: [`web_v17_v19_design_brief.md`](./web_v17_v19_design_brief.md)

---

## 1. 컨셉 & 감성

| 축 | v18 해석 |
|---|---|
| 고급스러움 | 딥 네이비 유리, 진주빛 텍스트, 얇은 틸 라인, 물결 코스틱 라이트 |
| 아이들이 좋아하는 느낌 | 발광 해파리, 책 모양 물고기 떼, 올라가는 거품, 코랄 포인트 |
| 흥미로움 | 수족관 터널을 카메라가 통과하며 기획전 도서가 양옆 유리에 떠 있음 |

**팔레트:** Navy `#071A2F` · Teal `#1FB2A6` · Coral `#FF7A59` · Pearl `#EAF4F4` · Aqua Glow `#5EE7DF`

---

## 2. Google Stitch 연동

* **Stitch 프로젝트 ID:** `2041076198321111421`
* **Stitch 프롬프트 (HOME):**

```
HOME PAGE. Theme: Deep Ocean Aquarium Library. Palette: deep navy #071A2F background, teal #1FB2A6, coral #FF7A59, pearl #EAF4F4 text, soft aqua glow.
Hero 3D area: glowing jellyfish lanterns drifting, schools of small fish shaped like open books swimming, rising bubbles, light rays from above.
Exhibition tabs: Aquarium Tunnel, Coral Garden Sphere, Bubble Ring.
Overall feel: a luxurious night aquarium turned into a children's library, glass, water caustics, gentle glow. Dark mode.
+ (공통 마스터 프롬프트)
```

* **Stitch 생성 결과 (HOME 화면):** screen `d89656a2601949ad9b588dd5735c977b` — "Deep Ocean Aquarium Library - Home"
  * 디자인 시스템 자동 생성 및 홈 화면 1종 생성 완료 (`stitch-mcp tool generate_screen_from_text`)

![v18 Stitch 홈 시안](file:///Users/jatu/app/다문화도서관/wiki/img/v18_stitch_home.png)
*▲ Google Stitch가 생성한 v18 홈 화면 시안*

---

## 3. 5개 페이지 구성

1. **메인 (`#home`)**
   * **Three.js 메인 배너:** 발광 해파리(반구+촉수) 군집 + 책 물고기 떼(boids) + 거품 파티클 + 상부 광선. 마우스 따라 해파리가 유영.
   * **3D 수족관 전시실:** 기획전 탭 — 수족관 터널(카메라 전진) / 산호 정원 구체(구면 배치 회전) / 버블 링(수직 원형 링).
   * **신간 목록:** 서지 리스트 ↔ "책 거품" 3D(책이 거품에 담겨 떠오름) 토글.
2. **도서 검색 (`#search`)** — 언어·연령·KDC·출판사·가격 필터 + 결과 그리드.
3. **큐레이션 (`#curation`)** — "바다 건너 온 동화 터널전", "세계 해양 과학 산호전", "이중언어 물방울 그림책전".
4. **장바구니 · 공문 견적함 (`#cart`)** — 납품가 산출, 기관 정보, 인쇄(PDF)/엑셀.
5. **도서 상세 (`#detail`)** — 360° 3D 책 + 물결 반사, 서지정보.

---

## 4. 인터랙션 & 버튼 효과

* **클릭:** 물방울 파문(ripple ring) + 거품 파티클 + 워터드롭 사운드(사인파 피치 다운).
* **호버:** 카드에 코스틱 하이라이트가 흐름.
* **다국어:** KO · EN · VI · ZH · RU · JA.
