# ⚓ [Web vc02] 다문화 도서관 납품/구입 전문 플랫폼 기획서
## (Pirate Harbor Book Voyage · 해적 항구 책 항해)

> **"세계의 책이 보물 상자에 실려 항구에 닿는다 — 아이는 캡틴이 되어 부두를 걷고, 사서는 보물 상자에서 공문 견적을 뽑는다"**

* 구현 폴더: `web/vc02/` (통합 뷰어 `web/index.html` 드롭다운 → vc02)
* 3D 에셋: **Pirate Kit by Quaternius** (Poly Pizza 번들 https://poly.pizza/bundle/Pirate-kit-0q5ulmIYqQ) — CC0, GLB 71종 → `web/vc02/assets/models/` (`index.json`, `LICENSE_Quaternius_CC0.txt`)
* 공통 디자인 방향: [`web_v17_v19_design_brief.md`](./web_v17_v19_design_brief.md) · 폰트 가이드: [`research/free_font_guide.md`](./research/free_font_guide.md)
* 시리즈 표기: `vc` 시리즈 2번째. vc01(2D 픽셀 타일) → vc02(로우폴리 3D 캐릭터 키트).

---

## 1. 기획 배경과 문제 정의

| 관찰 | 기획 대응 |
|---|---|
| Pirate Kit은 **애니메이션 캐릭터 6종**(캡틴·앤·헨리·마코·샤키·스켈레톤, Idle/Walk/Run/Wave 등 14클립)과 배·부두·보물 상자 등 환경 71종을 갖춘 완결형 키트다. | 캐릭터를 전면에: **플레이어 = 해적 캡틴**(WASD, Idle↔Walk 블렌딩), 전시실마다 **NPC 1명**(앤 Wave, 스켈레톤 Idle), 상어 Swim·크라켄 촉수 Idle 루프로 살아 있는 항구. |
| 모델마다 **스케일·원점이 제각각**(정점 바운딩 ≈0, 노드 스케일 의존). | 로드 시 `Box3`로 실측 → **최장변을 목표 크기로 자동 정규화**하고 바닥(min.y)을 y=0에 맞추는 `inst(name, x, y, z, ry, size)` 헬퍼. 부두는 실측 가로/세로로 방향 자동 판별. |
| "보물 = 책" 은유는 v20에서 검증됐지만 어두웠다. | **석양 항구**: 오렌지 하늘 + 터콰이즈 바다 + 모래. 라이트 모드 UI. |
| 스킨 메시는 `clone()` 시 스켈레톤이 깨진다. | 캐릭터는 `gltf.scene` 원본 1개만 사용(씬당 1인), 소품은 `clone(true)`로 다수 배치. |

**한 줄 컨셉:** *모험 그림책의 석양 항구 × 보물 상자 속 세계의 책 × 사서용 수서 데스크.*

---

## 2. 에셋 분석 (Quaternius Pirate Kit, 71 GLB)

| 분류 | 모델 | 사이트 내 역할 / 정규화 크기 |
|---|---|---|
| 캐릭터(스킨·애니) | `Pirate_Captain`, `Anne`, `Henry`, `Mako`, `Sharky`, `Skeleton`(×2) — 클립: Idle, Walk, Run, Wave, Jump, Sword, Yes/No, Duck, Punch, HitReact, Death | 캡틴 = 플레이어(2.1), 앤 = 보물 부두 NPC(Wave), 스켈레톤 = 해골섬 NPC(Idle) |
| 생물(애니) | `Shark`(Swim/Swim_Fast/Swim_Bite), `Tentacle`(Idle/Poke/Attack), `Bird`, `Fish_*` | 상어 원형 유영(4.5), 크라켄 촉수(6), 갈매기 3마리 궤도 비행(0.9) |
| 배·구조물 | `Ship`, `Small_Ship`, `Dock`, `Dock_Broken`, `House`(×3), `Sawmill`, `Post`, `Anchor`, `Cannon` | 큰 배(17~20) = 갑판 도서관, 작은 배(4.4~7) = 신간 항해, 부두(4.2) 연속 배치 |
| 보물·소품 | `Chest_Closed`, `Chest_Gold`, `Coins`, `Gold_Bag`, `Gem_Blue/Green/Pink`, `Barrel`, `Bucket`, `Lute`, `Paper`, `Red_X`, `Skull`(×2) | **닫힌 상자 ↔ 황금 상자 스왑**으로 개봉 연출, 보석·코인 회전, 붉은 X = 해골섬 트레일 표식 |
| 지형 | `Palm_Tree`(×3), `Rock`(×6), `Rocks`(×5) | 해안선·섬 장식 |
| 무기 등 미사용 | `Cutlass`, `Sword`, `Pistol`, `Rifle`, `Bomb`… | 어린이·도서관 톤 유지를 위해 **의도적으로 제외** |

* 모든 GLB는 텍스처 내장(외부 참조 없음). 총 13MB → 실제 로드는 36종(약 8MB).
* Poly Pizza는 모델 페이지마다 `static.poly.pizza/<uuid>.glb` 직링크를 노출하므로 번들 71개를 스크립트로 일괄 수집(10개는 Cloudflare 대기 후 재시도).

---

## 3. 시각 언어

**팔레트 (프리뷰 렌더에서 추출)**  
Sea `#1FB5C9`/`#3FD0E0` · Sunset `#F5A03A`/`#F26B3A` · Sand `#F4DCA8` · Wood `#8B5A2B` · Sail `#FFF4E0` · Stripe `#D64545` · Coin `#F5C542` · Ink `#1C2B3A` · Paper `#FFF8EC`

| 축 | vc02 해석 |
|---|---|
| 고급스러움 | 크림 종이, 여백, 1px 라인, 3D 무대는 우드 프레임. 헤드라인은 굵은 단일 웨이트로 절제 |
| 아이들이 좋아하는 느낌 | 통통한 로우폴리 캐릭터, 열리는 보물 상자, 갈매기·상어·촉수, 코인 튀는 버튼 |
| 흥미로움 | 캡틴을 직접 걷게 하고 부두 끝까지 가면 상자가 열림, 배 위 도서관, 붉은 X를 따라가는 섬 |

### 3-1. 타이포그래피 (무료 폰트 기획)
| 역할 | 폰트 | 선택 이유 | 로드 |
|---|---|---|---|
| 디스플레이(한글) | **Do Hyeon** | 굵고 둥근 한글 디스플레이. 모험·놀이 톤에 맞고 단일 웨이트라 절제된 고급감 유지 | Google Fonts |
| 디스플레이(영문·숫자) | **Alfa Slab One** | 해적 포스터·보물 지도 느낌의 슬랩 세리프. 가격·통계 숫자에 사용 | Google Fonts |
| 본문(한/영/숫자) | **Pretendard Variable** | 한글 본문 가독성, 키릴·베트남어 지원, 탭 숫자 | jsDelivr |
| 포인트 | **Bricolage Grotesque 800** | 아이브로우·배지·조작 힌트를 대문자 트래킹으로. 캐주얼하지만 픽셀 폰트보다 성숙 | Google Fonts |
* v17~v20의 Cormorant + Inter + Noto Sans KR 조합은 사용하지 않음.

**버튼 효과:** 금화 튀어오르기(타원 회전으로 코인 플립) + 물보라 방울(터콰이즈·흰) + 마림바 2음(E5→B5) + 하이패스 스프레이 노이즈.

---

## 4. 정보 구조 & 5개 페이지

```
#home ─ 히어로(걷는 석양 항구) → 항구 곳곳 기획전(3D) → 신간(리스트 ↔ 작은 배 항해 3D) → 사서 스트립
#search ─ 언어·연령·KDC·출판사·가격 필터 + 카드(ISBN·KDC 상시)
#curation ─ 보물 부두 / 갑판 도서관 / 해골섬 트레일 (3D) + 패키지 일괄 담기
#cart ─ 보물 상자 · 공문 견적함(납품가 -10%, 기관 정보, 인쇄/PDF, 엑셀)
#detail/:id ─ 부두 위 황금 상자 위 360° 책 + 서지 스펙 + 관련 도서
```

### 4-1. 히어로 — 걷는 석양 항구
* 바다(140×110 정점 파동 애니메이션) + 모래사장(둥근 사각 56×26) + **부두 5칸**(Dock 실측 방향 자동 정렬)으로 바다 위 21유닛 돌출.
* 큰 배(17) 정박, 작은 배, 야자수 8, 집 2, 바위, 배럴, 대포, 닻, 기둥, 금 주머니, 류트.
* **보물 상자 6개 = 도서 6권**(모래 4, 부두 2). 캡틴이 3.2유닛 이내 접근 → 닫힌 상자가 황금 상자로 바뀌고 책이 떠올라 회전 → 클릭 시 상세. 코인·보석 회전 부유.
* 상어가 항구 앞바다를 원형 유영(Swim), 크라켄 촉수가 오른쪽 바다에서 흔들림(Tentacle_Idle), 갈매기 3마리 궤도 비행.
* 조작: WASD/방향키. **이동 가능 영역 = 모래 + 부두**(바다 위 이동 차단, 축별 슬라이딩). 부두 위에서는 y +0.3.
* 카메라: 캡틴을 70% 가중으로 추적, 상공 15유닛 + 마우스 패럴랙스. 석양 방향광(오렌지) + 반구광(피치/터콰이즈), 그림자 맵 2048.

### 4-2. 항구 곳곳 기획전 (Exhibition Engine)
| 장소 | 진열 | 배경/NPC | 수록 |
|---|---|---|---|
| 보물 부두 | 긴 부두(가로) 위 황금 상자마다 책 부유, 기둥 | 모래 패치·야자수·배럴·작은 배, **앤(Wave)** | 세계 전래동화 9권 |
| 갑판 도서관 | 큰 배(20) 갑판 위 2줄 부유 | 갈매기 3, 상어 유영, 바위 | 청소년 세계문학 7권 |
| 해골섬 트레일 | S자 경로의 붉은 X마다 책 | 대형 해골, 바위, 야자수, 보석, **스켈레톤(Idle)**, 황금 상자 | 이중언어 그림책 6권 |
* 보물 부두는 ±28° 스윙, 나머지는 드래그 회전. 호버 툴팁, 클릭 상세. 홈·큐레이션 공용 엔진.

### 4-3. 신간 — 작은 배 책 항해 3D
* 신간 8권이 각각 작은 배(4.4)에 실려 파도에 흔들리며 항구를 지나감. 양옆 모래섬·야자수·바위, 갈매기 2.

### 4-4. 보물 상자 · 공문 견적함 / 4-5. 상세
* 사서 기능 동일(4개 스탯, 기관 정보, 인쇄/PDF, 엑셀). 상세는 부두 2칸 위 황금 상자 위에서 책 360° 회전, 보석·코인·야자수.

---

## 5. 다국어 (6개 언어)
KO · EN · VI · ZH · RU · JA. 항구 어휘 매핑: 보물 상자 → Treasure Chest / Rương báu vật / 宝箱 / Сундук / 宝箱, 보물 부두 → Treasure Dock / Bến Kho báu / 宝藏码头 / Причал сокровищ / 宝の桟橋.

---

## 6. 기술 구성
* Three.js r128 + GLTFLoader(jsDelivr). 36종 병렬 프리로드 → `ready` 후 빌드/`refresh()`.
* `inst()`: `Box3` 실측 → 최장변 = 목표 크기, 바닥 정렬, 중심 정렬. `character()`: 원본 씬 + `AnimationMixer`, 클립은 `name.split('|')`에 키워드 포함 여부로 탐색(`Idle`, `Walk`, `Wave`, `Swim`, `Tentacle_Idle`).
* 바다: `PlaneGeometry` 정점 z를 사인 합성으로 매 프레임 갱신. 모래: `ShapeGeometry` 둥근 사각.
* 상태 `localStorage`(`mlmc02_*`), 표지 Canvas 절차 생성, 엑셀 SheetJS, 공문 인쇄 `@media print`.

---

## 7. Google Stitch 연동
* Stitch 프로젝트 ID: `9273516288638271703`
* 프롬프트(HOME): "Pirate Harbor Book Voyage — Quaternius Pirate Kit 스타일 석양 항구(부두·줄무늬 돛 배·야자수·황금 보물 상자·앵무새 캡틴·상어·핑크 크라켄 촉수)를 프리미엄 어린이·다문화 서점으로. 부두의 보물 상자 = 나라별 책, 배 = 세계 항해 큐레이션. 팔레트 #1FB5C9/#3FD0E0/#F5A03A/#F26B3A/#F4DCA8/#8B5A2B/#FFF4E0/#D64545/#1C2B3A/#FFF8EC. 탭 Treasure Dock / Ship Deck Library / Skull Island Trail. 라이트 모드, 개성 있는 디스플레이 세리프 + 둥근 굵은 한글 포인트 + 휴머니스트 산세리프 본문" + 공통 마스터 프롬프트.
* **Stitch 생성 결과 (HOME 화면):** screen `52f07291ae014ac2bb6d382473b24052` — "Pirate Harbor Book Voyage Home Page" (디자인 시스템 자동 생성)

![vc02 Stitch 홈 시안](file:///Users/jatu/app/다문화도서관/wiki/img/vc02_stitch_home.png)
*▲ Google Stitch가 생성한 vc02 홈 화면 시안*

---

## 8. 참고 이미지

![Pirate Kit 프리뷰 1](file:///Users/jatu/app/다문화도서관/wiki/img/vc02_quaternius_preview.jpg)
*▲ Quaternius Pirate Kit 공식 프리뷰 — 팔레트·구성 레퍼런스*

![Pirate Kit 프리뷰 2](file:///Users/jatu/app/다문화도서관/wiki/img/vc02_quaternius_preview2.jpg)
*▲ 캐릭터·소품 구성*
