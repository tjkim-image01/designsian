# 🏰 [Web v20] 다문화 도서관 납품/구입 전문 플랫폼 기획서
## (Mini Dungeon Library Quest · 미니 던전 라이브러리 퀘스트)

> **"보물 상자를 열면 세계의 책이 나온다 — 아이는 던전을 탐험하고, 사서는 인벤토리에서 공문 견적을 뽑는 도서 판매 사이트"**

* 구현 폴더: `web/v20/` (통합 뷰어 `web/index.html` 드롭다운 → v20)
* 3D 에셋: **Kenney · Mini Dungeon 2.0** (https://kenney.nl/assets/mini-dungeon) — CC0 라이선스, `web/v20/assets/models/` 에 GLB 30종 + `colormap.png` 동봉 (`assets/LICENSE_Kenney_CC0.txt`)
* 공통 디자인 방향: [`web_v17_v19_design_brief.md`](./web_v17_v19_design_brief.md) (고급스러움 · 아이들이 좋아하는 느낌 · 흥미로움)

---

## 1. 기획 배경과 문제 정의

| 관찰 | 기획 대응 |
|---|---|
| v17~v19는 "감상형" 3D였다. 아이가 **직접 조작**할 요소가 부족했다. | 히어로를 **플레이 가능한 던전 방**으로 설계. 키보드로 기사를 움직여 상자를 열면 책이 나온다. |
| 사서는 게임 요소가 과하면 신뢰를 잃는다. | 게임 언어는 **히어로·전시실·버튼 효과에만** 국한. 도서 카드·검색·견적함은 서지 밀도를 그대로 유지(ISBN·KDC·납품가 상시 노출). |
| 자체 모델링은 비용이 크고 품질 편차가 있다. | 검증된 **CC0 로우폴리 에셋(Kenney)** 을 GLB로 로드. 일관된 톤(라벤더 스톤 + 오렌지 우드 + 골드 코인)이 곧 브랜드 팔레트가 된다. |
| 다국어 전환 시 게임 용어가 어색해질 수 있다. | "인벤토리/보물 창고/층(Floor)" 등 게임 어휘를 6개 언어 모두 **현지 게임 관용어**로 번역. |

**한 줄 컨셉:** *보드게임 상자의 고급감 × 아이가 손을 뻗는 던전 놀이 × 사서용 수서 데스크.*

---

## 2. 에셋 분석 (Kenney Mini Dungeon 2.0)

| 분류 | 파일 | 규격(타일 단위) | 사이트 내 역할 |
|---|---|---|---|
| 바닥/벽 | `floor`, `floor-detail`, `wall`, `wall-half`, `wall-narrow`, `wall-opening`, `gate` | 1×1 타일, 벽 높이 1.0~1.1 | 방 구조. 1타일 = 3 world unit(`TS=3`)으로 스케일 |
| 구조물 | `column`(0.5×1.1), `wood-structure`, `wood-support`, `stairs`(1×0.9×1) | 기둥 상단에 토치 포인트라이트 | 기둥 회랑 · 계단 탑 전시실 |
| 소품 | `chest`(애니 `open/close`), `barrel`, `pot`, `table`, `chair`, `banner`, `stones`, `rocks`, `trap` | chest 0.5×0.3×0.7 | **상자 = 책 컨테이너**. 열리면 책이 떠오름 |
| 아이템 | `coin`, `key`, `potion`, `shield-*`, `weapon-*` | 0.3~0.6 | 장식 · 코인은 회전 애니메이션 |
| 캐릭터 | `character-human`, `character-orc` (스킨 메시, 애니 `idle/walk/sprint/jump/pick-up…`) | 높이 0.76 | 히어로의 **플레이어 기사**(idle↔walk 블렌딩) |

* GLB는 텍스처를 외부 참조(`Textures/colormap.png`)하므로 폴더 구조를 그대로 유지.
* 스킨 메시(캐릭터)는 `clone()` 시 스켈레톤이 깨지므로 **원본 `gltf.scene` 1개만** 사용. 상자/기둥 등은 `scene.clone(true)`로 다수 배치하고 `AnimationMixer`를 클론별로 붙임.

---

## 3. 시각 언어 (Design Language)

**팔레트 (에셋 컬러맵에서 추출)**  
Slate `#2B2A3A` (배경) · Stone `#B9BEE6`/`#8F94C4` (돌) · Wood `#E2803B` (목재) · Coin `#F5C542` (골드) · Cream `#F4EFE6` (텍스트)

| 축 | v20 해석 |
|---|---|
| 고급스러움 | 세리프 디스플레이(Cormorant Garamond) 헤드라인, 다크 슬레이트 + 소량의 골드, 넉넉한 여백, 얇은 1px 라인 |
| 아이들이 좋아하는 느낌 | 청키한 로우폴리 3D, **3D 눌림 버튼(하단 그림자 5px → 클릭 시 2px)**, 픽셀 코인 스파클, 8비트 블립 사운드 |
| 흥미로움 | WASD로 직접 걸어가 상자를 여는 히어로, 층마다 다른 던전 방, 통로를 지나가는 신간 컨베이어 |

**버튼 효과:** 클릭 시 사각 픽셀 골드 스파클 + 사각 링 확산 + `square` 파형 2음(987.8→1318.5Hz) 8비트 블립. 버튼은 3D 눌림(translateY 3px).

---

## 4. 정보 구조 & 5개 페이지

```
#home ─ 히어로(플레이어블 던전) → 던전 층별 기획전(3D) → 신간(리스트 ↔ 코인 컨베이어 3D) → 사서 안내 스트립
#search ─ 언어·연령·KDC·출판사·가격 필터 레일 + 결과 카드(ISBN·KDC 상시)
#curation ─ 1층 보물 창고 / 2층 기둥 회랑 / 3층 계단 탑 (3D) + 패키지 일괄 담기
#cart ─ 인벤토리 · 공문 견적함(수량, 납품가 -10%, 기관 정보, 인쇄/PDF, 엑셀)
#detail/:id ─ 열린 보물 상자 위 360° 책 + 서지 스펙 테이블 + 관련 도서
```

### 4-1. 메인 히어로 — 플레이어블 던전 방 (11×8 타일)
* 바닥 `floor`/`floor-detail` 그리드, 뒷벽(`wall` + 중앙 `wall-opening`+`gate`), 좌측벽, 코너 `column` + 토치 라이트, `banner` 2개.
* 소품: `wood-structure`, `barrel`, `pot`, `stones`, `rocks`, `table`+`chair`(테이블 위에 펼쳐진 책), `potion`, `key`, `shield-round`.
* **보물 상자 6개**에 다문화 도서 6권 배정. 기사가 1.3타일 이내로 접근 → `open` 애니메이션 + 책이 떠올라 회전 → 클릭하면 상세. 멀어지면 `close`.
* 조작: WASD/방향키(입력 필드 포커스 시 무시). 카메라는 기사 위치를 35% 가중으로 따라가고 마우스 패럴랙스.
* 코인 5개 회전 부유(놀이 감각), 그림자 맵 2048.

### 4-2. 던전 층별 기획전 (Exhibition Engine, 3개 방)
| 층 | 방 | 진열 방식 | 수록 |
|---|---|---|---|
| 1층 | 보물 창고 | 3×3 열린 상자 위에 책 부유, 뒷벽 배너, 코너 토치 | 세계 전래동화 9권 |
| 2층 | 기둥 회랑 | 기둥 2열 사이 공중 부유(교차 높이), 반벽 + 배너 3개 | 이중언어 그림책 6권 |
| 3층 | 계단 탑 | `stairs` 7개 나선 상승, 중앙 `wood-structure` 3단, 계단마다 책 | 청소년 세계문학 7권 |
* 드래그로 방 회전, 호버 툴팁(언어·연령·KDC·납품가), 클릭 → 상세. 홈과 큐레이션 페이지가 같은 엔진 공유.

### 4-3. 신간 — 코인 컨베이어 3D
* 서지 리스트(사서용) ↔ 3D 토글. 3D는 던전 통로(바닥 3열 + 반벽 + 기둥 토치) 위로 신간 8권이 통통 튀며 지나가고 코인이 뒤따름.

### 4-4. 인벤토리 · 공문 견적함
* 카드/리스트 어디서든 "견적함 담기" → 인벤토리 배지 증가. 견적함에서는 종수·권수·정가 합계·납품가(-10%) 4개 스탯, 기관/담당/연락처/이메일 입력, **공문 양식 인쇄(PDF)** 와 **엑셀 사양서** 다운로드.

### 4-5. 도서 상세
* 열린 `chest` 위에 책이 부유·회전(드래그 360°), 옆에 `potion`·`key`·`coin`. 서지 스펙(ISBN·KDC·언어·연령·출판사·연도·장정) 테이블, 관련 도서 4권.

---

## 5. 다국어 (6개 언어)
KO · EN · VI · ZH · RU · JA. 게임 어휘 매핑 예: 인벤토리 → Inventory / Túi đồ / 背包 / Инвентарь / インベントリ, 보물 창고 → Treasure Vault / Kho báu / 宝库 / Сокровищница / 宝物庫.  
모든 도서 제목은 6개 언어 + 원어 병기. 언어 전환 시 3D 전시실 캡션·툴팁도 즉시 갱신.

---

## 6. 기술 구성
* Three.js r128 + `GLTFLoader`(jsDelivr `three@0.128.0/examples/js/loaders`) · `AnimationMixer`(상자·캐릭터) · Raycaster 호버/클릭 · 그림자 맵.
* 모델 26종 병렬 프리로드(`Promise.all`) → `ready.then(build)`; 로드 전에는 책만 렌더, 로드 후 `refresh()`.
* 표지 이미지는 Canvas로 절차 생성(외부 이미지 0), `sRGBEncoding` 텍스처.
* 상태: `localStorage`(`mlm20_cart`, `mlm20_lang`, `mlm20_lib`, `mlm20_sound`). 엑셀은 SheetJS, 공문 인쇄는 `@media print` 전용 레이아웃.

---

## 7. Google Stitch 연동
* Stitch 프로젝트 ID: `18119739034924715123`
* Stitch 프롬프트(HOME): "Mini Dungeon Library Quest — Kenney Mini Dungeon 스타일 로우폴리 던전을 프리미엄 어린이·다문화 서점으로… 팔레트 #2B2A3A/#B9BEE6/#E2803B/#F5C542/#F4EFE6, 아이소메트릭 던전 룸 히어로(기사·열린 보물 상자 속 책·코인·배너), 탭 Treasure Vault / Column Gallery / Stair Tower, 보드게임 박스 × 어린이 도서관, 다크 모드 + 토치 라이트" + 공통 마스터 프롬프트.
* **Stitch 생성 결과 (HOME 화면):** screen `486a02c1a90a4be790fe94e118e90ab6` — "Dungeon Library Home Page" (디자인 시스템 "Dungeon Library Quest" 자동 생성)

![v20 Stitch 홈 시안](file:///Users/jatu/app/다문화도서관/wiki/img/v20_stitch_home.png)
*▲ Google Stitch가 생성한 v20 홈 화면 시안 — 다크 슬레이트 + 오렌지/골드 CTA, 인벤토리·사서 토글 헤더*

---

## 8. 참고 이미지

![Kenney Mini Dungeon 프리뷰](file:///Users/jatu/app/다문화도서관/wiki/img/v20_kenney_preview.png)
*▲ Kenney Mini Dungeon 2.0 에셋 프리뷰 (CC0)*

![Kenney Mini Dungeon 샘플 씬](file:///Users/jatu/app/다문화도서관/wiki/img/v20_kenney_sample.png)
*▲ 에셋 조합 샘플 — 히어로 던전 방 구성의 레퍼런스*
