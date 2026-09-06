# 🔤 무료 폰트 선택 가이드 (다문화도서관 수서 몰 · 웹 시안용)

> 원칙: **한글 디스플레이 1종 + 한/영 본문 1종 + 포인트 1종**. 모두 무료(SIL OFL / CC0 / 상업 사용 가능) · CDN 즉시 로드 · `font-display: swap`.
> v17~v20까지 반복 사용한 Cormorant Garamond + Inter + Noto Sans KR 조합은 이후 버전에서 **기본값으로 쓰지 않는다**. 테마마다 폰트를 기획 단계에서 함께 고른다.

---

## 1. 역할별 후보 (모두 무료)

### 1-1. 한글 디스플레이(헤드라인)
| 폰트 | 성격 | 어울리는 테마 | 로드 |
|---|---|---|---|
| **Gowun Batang** (고운바탕) | 따뜻한 명조, 동화책 본문 같은 온기 | 스토리북·마을·숲·서정 | Google Fonts |
| **Song Myung** (송명) | 날카롭고 고전적인 명조 | 클래식·아카이브·고급 | Google Fonts |
| **Nanum Myeongjo** | 표준 명조, 신뢰감 | 공공기관·사서용 문서 톤 | Google Fonts |
| **Black Han Sans** (검은고딕) | 두껍고 힘 있는 산세리프 | 키즈·게임·던전·포스터 | Google Fonts |
| **Do Hyeon** (도현) | 굵고 둥근 산세리프 | 어린이·활기 | Google Fonts |
| **Jua** (주아) | 둥글둥글 귀여운 손글씨 느낌 | 유아·놀이·회전목마 | Google Fonts |
| **Gaegu / Hi Melody / Gamja Flower** | 손글씨 | 캡션·말풍선 포인트에만 | Google Fonts |
| **Gothic A1** | 9단계 굵기의 정갈한 고딕 | 미니멀·프리미엄 산세리프 헤드라인 | Google Fonts |
| **Galmuri11 / Galmuri9** | 픽셀 비트맵(한·영·일) | 픽셀 아트·레트로 배지 | jsDelivr `galmuri` |

### 1-2. 본문(한/영/숫자 가독성)
| 폰트 | 비고 | 로드 |
|---|---|---|
| **Pretendard Variable** | 한글 본문 사실상 표준. Inter 계열 골격 + 완성도 높은 한글, 가변 굵기, 탭 숫자 지원 | jsDelivr `orioncactus/pretendard` (dynamic-subset) |
| **Gowun Dodum** (고운돋움) | 부드러운 돋움, 동화 톤과 잘 맞음 | Google Fonts |
| **IBM Plex Sans KR** | 기술적·중립, 서지 데이터 표 | Google Fonts |
| **Noto Sans KR** | 무난. 단독 사용 시 "기본값" 느낌이라 디스플레이와 꼭 대비시킬 것 | Google Fonts |

### 1-3. 라틴 디스플레이·숫자 포인트(한글 폰트와 페어링)
| 폰트 | 성격 | 페어링 예 |
|---|---|---|
| **Fraunces** | 부드러운 올드스타일 세리프, 가변축(SOFT/WONK)으로 동화적 표정 | Gowun Batang과 숫자/영문 포인트 |
| **Playfair Display** | 하이 콘트라스트, 잡지 | Song Myung |
| **DM Serif Display** | 굵고 우아 | Nanum Myeongjo |
| **Bricolage Grotesque** | 개성 있는 그로테스크 | Black Han Sans, Do Hyeon |
| **Space Grotesk / JetBrains Mono** | 숫자·코드(ISBN·KDC) | 사서 모드 표 |
| **Press Start 2P / DotGothic16** | 픽셀 라틴/일문 | Galmuri |

---

## 2. 테마별 추천 조합 (기존 버전 리디자인 시 참고)

| 버전 | 테마 | 디스플레이 | 본문 | 포인트 |
|---|---|---|---|---|
| v17 | 황금 회전목마 | Song Myung + Playfair Display | Pretendard | Jua(어린이 배지) |
| v18 | 심해 아쿠아리움 | Gothic A1 800 + Fraunces italic | Pretendard | IBM Plex Sans KR(서지) |
| v19 | 마법의 숲 | Gowun Batang + Fraunces | Gowun Dodum | Gaegu(캡션) |
| v20 | 미니 던전 | Black Han Sans + Bricolage Grotesque | Pretendard | Galmuri11 / Press Start 2P(배지) |
| **vc01** | **타이니 타운** | **Gowun Batang + Fraunces** | **Pretendard Variable** | **Galmuri11(픽셀 배지·힌트·아이브로우)** |

---

## 3. 로드 스니펫

```html
<!-- Google Fonts (필요 굵기만) -->
<link href="https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&family=Fraunces:ital,wght@0,500;0,700;1,500&display=swap" rel="stylesheet">
<!-- Pretendard Variable (dynamic subset: 사용 글자만 로드) -->
<link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" rel="stylesheet">
<!-- Galmuri (픽셀) -->
<link href="https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css" rel="stylesheet">
```
```css
--serif:'Gowun Batang','Fraunces',serif;
--sans:'Pretendard Variable','Pretendard','Gowun Dodum',sans-serif;
--pixel:'Galmuri11','Galmuri9',monospace;
```

## 4. 체크리스트
- [ ] 디스플레이/본문 대비가 분명한가(명조↔고딕, 굵기 차)
- [ ] 한글·영문·숫자가 한 줄에 섞였을 때 x-height가 맞는가(Pretendard+Fraunces OK)
- [ ] 가격·ISBN은 `font-variant-numeric: tabular-nums`
- [ ] 포인트 폰트는 배지·아이브로우·힌트 등 **소량**에만
- [ ] 6개 언어(VI 성조 부호, RU 키릴, JA 가나) 글리프 확인 — Pretendard는 키릴 포함, 베트남어 부호 지원; 일문은 Noto Sans JP 폴백 추가 권장
