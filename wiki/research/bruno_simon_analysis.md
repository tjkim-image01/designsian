# 🚗 Bruno Simon 3D 포트폴리오 웹사이트 심층 분석 보고서
## (Analysis of https://bruno-simon.com/)

> **"웹 브라우저를 하나의 감각적인 3D 물리 플레이그라운드로 승화시킨 전설적인 인터랙티브 3D 웹사이트"**

---

## 1. 핵심 개요 및 그래픽 컨셉 (Core Concept)

* **사이트 개요:** 웹 3D 개발자 Bruno Simon의 인공지능/3D 웹 포트폴리오로, 사용자가 3D 장난감 차(Toy Car)를 직접 마우스/키보드로 조종하며 3D 월드를 탐험하는 인터랙티브 파크.
* **디자인 스타일:** **Low-Poly Pastel Clay Art** (부드러운 파스텔 톤의 로우폴리 찰흙/장난감 아날로그 감성).
* **주요 경험:** 단순 스크롤이 아닌, 차를 타고 3D 공간의 각 영역(프로젝트, 경력, 소셜, 사서/도서 공간)을 직접 주행하고 부딪히며 인터랙션하는 즐거움 선사.

---

## 2. 테크놀로지 스택 및 파이프라인 (Tech Stack & Architecture)

| 파트 | 핵심 기술 | 역할 및 주요 특징 |
| :--- | :--- | :--- |
| **3D Rendering** | **Three.js** (WebGL/WebGPU) | 3D 장면, 오브젝트 렌더링, 카메라 조작, 실시간 조명 및 반사 |
| **Physics Engine** | **Cannon.js / Rapier** | 3D 자동차 주행 물리, 중력, 충돌 감지(Rigid Body), 3D 바운스 연출 |
| **3D Modeling** | **Blender & GLTF/GLB** | 전체 3D 씬 및 메쉬를 Blender에서 제작 후 GLTF 포맷으로 내보내기 |
| **Naming Convention** | **Blender Mesh Naming** | Blender 내 오브젝트 이름(예: `refPhysical...`)으로 코드가 자동으로 물리 바디 파싱 |
| **Baked Lighting** | **Texture Baking** | 무거운 실시간 조명 대신 Blender에서 빛/그림자를 미리 텍스처로 지져내어(Bake) 최상의 프레임 유지 |
| **Audio Synthesizer**| **Howler.js / Web Audio** | 자동차 엔진 소리, 3D 충돌 효과음, 배경 음악 3D 앰비언트 연출 |

---

## 3. 핵심 인터랙션 요소 (Interactive Mechanics)

1. **카메라 추적 시스템 (Camera Tracking):**
   * 자동차 위치를 중심으로 부드러운 직교/원근(Orthographic/Perspective) 카메라가 시차(Parallax)를 두고 추적.
2. **물리 기반 충돌 (Physics Interaction):**
   * 벽, 알파벳 블록, 3D 책, 핀볼 장치 등과 자동차가 실제로 부딪히며 3D 오브젝트들이 튕겨 나감.
3. **영역별 공간 반응 (Zone Triggering):**
   * 차량이 특정 3D 전시 바닥 구역(Zone)에 진입하면 카메라가 해당 영역의 텍스트/미디어를 클로즈업.

---

## 4. 다문화 도서관 수서 플랫폼(`v14` ~ `v16`)에의 적용 포인트

1. **3D 공간 탐험형 도서관 몰 (3D Driving/Exploring Library):**
   * 사용자가 3D 카트/탐사선/카라반을 조종하여 세계 문화 구역을 여행하며 수서 도서를 수집.
2. **Blender GLB 파이프라인 연동:**
   * Blender에서 제작된 입체 도서관 건물, 문화 랜드마크, 서가 GLB 모델을 Three.js로 직접 로드.
3. **사서 맞춤 B2B 수서 인터랙션:**
   * 3D 수서 수집 구역에 진입하면 3D 도서 묶음이 장바구니/공문 견적함으로 자동 수집되는 쾌감 선사.

