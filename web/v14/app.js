/* ==========================================================================
   OASIS | 3D Safari Caravan & Silk Road Oasis Library Portal (Web v14)
   Main Application Script
   ========================================================================== */

(function() {
  'use strict';

  // ==========================================================================
  // 1. MULTICULTURAL BOOKS DATASET
  // ==========================================================================
  const BOOKS_DATA = [
    {
      id: "b1",
      title: "비단길 사막의 신비한 낙타",
      originalTitle: "The Mysterious Camel of the Silk Road",
      lang: "KO",
      langLabel: "🇰🇷 한국어",
      author: "김유진 저 / 아미르 그림",
      publisher: "오아시스미디어",
      isbn: "978-89-12345-01-2",
      kdc: "813.8 (한국 아동문학)",
      age: "ELEM",
      ageLabel: "초등 (8~13세)",
      price: 15000,
      color: 0xC86D51,
      desc: "비단길을 따라 오아시스 마을을 지키는 꼬마 낙타 사드의 흥미진진한 탐험 이야기. 아동 도서관 및 학교 다문화 서가 수서 필독서.",
      audioText: "옛날 옛적, 실크로드의 거대한 오아시스 마을에는 노란 별 모양 무늬를 가진 꼬마 낙타 사드가 살고 있었어요..."
    },
    {
      id: "b2",
      title: "The Oasis of Golden Dreams",
      originalTitle: "The Oasis of Golden Dreams",
      lang: "EN",
      langLabel: "🇺🇸 영어",
      author: "Sarah Jenkins",
      publisher: "글로벌다문화",
      isbn: "978-1-56619-909-4",
      kdc: "843 (영미 아동문학)",
      age: "ELEM",
      ageLabel: "초등 (8~13세)",
      price: 18000,
      color: 0x2A9D8F,
      desc: "A beautiful bilingual tale set in a desert oasis, exploring cross-cultural friendship and environmental protection.",
      audioText: "Far across the golden sand dunes, hidden beneath palm trees, lies a magical library where books read themselves..."
    },
    {
      id: "b3",
      title: "Quả Dưa Hấu Kỳ Diệu (신비한 수박)",
      originalTitle: "Sự Tích Quả Dưa Hấu",
      lang: "VI",
      langLabel: "🇻🇳 베트남어",
      author: "Nguyễn Văn A",
      publisher: "비단길출판사",
      isbn: "978-604-1-12345-6",
      kdc: "895.973 (베트남 전래동화)",
      age: "INFANT",
      ageLabel: "유아 (0~7세)",
      price: 14000,
      color: 0xE07A5F,
      desc: "베트남 대표 전래동화 마이 안 티엠(Mai An Tiêm)과 신비한 수박 이야기. 한국어-베트남어 이중언어 그림책.",
      audioText: "Ngày xửa ngày xưa, ở nước Văn Lang có một người tên là Mai An Tiêm, rất chăm chỉ và thông minh..."
    },
    {
      id: "b4",
      title: "絲綢之路的波斯毯 (실크로드 양단 비단)",
      originalTitle: "The Persian Carpet of Silk Road",
      lang: "ZH",
      langLabel: "🇨🇳 중국어",
      author: "王微 (Wang Wei)",
      publisher: "아시아아동문학",
      isbn: "978-7-100-09876-5",
      kdc: "892.3 (중국 전래동화)",
      age: "ELEM",
      ageLabel: "초등 (8~13세)",
      price: 16500,
      color: 0xD4AF37,
      desc: "장안에서 페르시아까지 이어지는 실크로드 상인들의 꿈과 비단 양단 카펫에 얽힌 감동적인 역사 이야기.",
      audioText: "在古老的長安城里，有一位年輕的商人準備踏上通往西域的絲綢之路..."
    },
    {
      id: "b5",
      title: "ألف ليلة وليلة للاطفال (어린이 천일야화)",
      originalTitle: "One Thousand and One Nights for Children",
      lang: "AR",
      langLabel: "🇸🇦 아랍어",
      author: "Tariq Al-Mansoor",
      publisher: "오아시스미디어",
      isbn: "978-977-11-2233-4",
      kdc: "892.7 (아랍 문학)",
      age: "ELEM",
      ageLabel: "초등 (8~13세)",
      price: 19000,
      color: 0x1D2D44,
      desc: "알라딘과 신드바드의 모험이 담긴 중동 대표 고전 천일야화 다국어 아동판. 서지 화려한 일러스트 판본.",
      audioText: "كان يا ما كان في قديم الزمان وسالف العصر والآن، 성스러운 사막 오아시스에서 전해지는 신비로운 모험 이야기..."
    },
    {
      id: "b6",
      title: "다문화 도서관 수서 및 운영 실무 가이드",
      originalTitle: "Multicultural Library Procurement & Service Guide",
      lang: "KO",
      langLabel: "🇰🇷 한국어",
      author: "한국다문화도서관학회 편",
      publisher: "글로벌다문화",
      isbn: "978-89-99887-10-1",
      kdc: "025 (도서관 운영/수서)",
      age: "ADULT",
      ageLabel: "일반 (사서용)",
      price: 25000,
      color: 0x3D405B,
      desc: "공공 및 학교 도서관 사서를 위한 다국어 도서 수서, MARC 입력, 분류기호 적용 실무 매뉴얼.",
      audioText: "다문화 도서관 수서 업무는 대상 공동체의 언어 비율과 요구사항을 정확히 분석하는 것에서 시작합니다..."
    },
    {
      id: "b7",
      title: "Tales of the Desert Lantern",
      originalTitle: "Tales of the Desert Lantern",
      lang: "EN",
      langLabel: "🇺🇸 영어",
      author: "Robert Frost Jr.",
      publisher: "비단길출판사",
      isbn: "978-0-14-044913-6",
      kdc: "843 (영미 청소년 문학)",
      age: "YA",
      ageLabel: "청소년 (14~19세)",
      price: 17500,
      color: 0xA64B2A,
      desc: "A gripping YA fantasy exploring young scholars journeying through ancient Silk Road archives.",
      audioText: "The lantern flickered softly inside the tent as ancient manuscripts whispered their forgotten secrets..."
    },
    {
      id: "b8",
      title: "Chú Cuội Trên Cung Trăng (달나라 주꾸오이)",
      originalTitle: "Chú Cuội Cung Trăng",
      lang: "VI",
      langLabel: "🇻🇳 베트남어",
      author: "Lê Thị B",
      publisher: "아시아아동문학",
      isbn: "978-604-5-88990-1",
      kdc: "895.973 (베트남 민담)",
      age: "INFANT",
      ageLabel: "유아 (0~7세)",
      price: 13500,
      color: 0x2A9D8F,
      desc: "베트남 추석(Tết Trung Thu) 명절 민담. 달나무를 타고 달나라로 간 주꾸오이 전설 그림책.",
      audioText: "Ở một làng nọ, có một người tiều phu tên là Cuội. Một lần vào rừng, Cuội phát hiện ra một cây thuốc quý..."
    },
    {
      id: "b9",
      title: "敦煌壁畫里的飛天童話 (돈황 벽화의 비천)",
      originalTitle: "Dunhuang Apsaras Myths",
      lang: "ZH",
      langLabel: "🇨🇳 중국어",
      author: "李明 (Li Ming)",
      publisher: "비단길출판사",
      isbn: "978-7-500-11223-9",
      kdc: "759 (동양 미술/동화)",
      age: "ELEM",
      ageLabel: "초등 (8~13세)",
      price: 21000,
      color: 0xD4AF37,
      desc: "돈황 석굴 벽화 속에 등장하는 하늘을 나는 비천의 아름다운 선율과 예술 문화를 담은 아동 도서.",
      audioText: "莫高窟的壁畫上，飛天仙女手持琵琶，在雲彩與花雨中翩翩起舞..."
    },
    {
      id: "b10",
      title: "شجرة الزيتون المباركة (축복받은 올리브 나무)",
      originalTitle: "The Blessed Olive Tree",
      lang: "AR",
      langLabel: "🇸🇦 아랍어",
      author: "Fatima Al-Zahra",
      publisher: "오아시스미디어",
      isbn: "978-977-33-4455-6",
      kdc: "892.7 (아랍 아동문학)",
      age: "ELEM",
      ageLabel: "초등 (8~13세)",
      price: 16000,
      color: 0x1D6F65,
      desc: "중동 오아시스 마을에서 백 년 동안 평화를 지켜온 올리브 나무와 아이들의 평화 이야기.",
      audioText: "تستقر شجرة الزيتون العتيقة في وسط القرية، تقدم ظلها وثمارها لكل عابر سبيل..."
    }
  ];

  // ==========================================================================
  // 2. MULTI-LANGUAGE TRANSLATION DICTIONARY (i18n)
  // ==========================================================================
  const I18N = {
    KO: {
      brandTitle: "OASIS",
      brandSub: "다문화 도서관 수서/구입 몰",
      navHome: "오아시스 3D관",
      navSearch: "사막 수서검색",
      navCuration: "비단길 큐레이션",
      navCart: "공문 견적함",
      navDetail: "3D 서지 상세",
      hudLocation: "오아시스 중앙 라이브러리 (주행 탐험)",
      hudKeys: "또는 화살표 키로 3D 책 수집 카라반 조종",
      bellBtn: "카라반 벨 🔔",
      resetCaravan: "원위치",
      heroTitle: "비단길 사막 오아시스 다문화 수서관",
      heroSub: "3D 책 수집 카라반을 조종하여 다국어 도서를 탐험하고 공문 견적서를 1클릭 발급받으세요.",
      btnSearchStart: "수서 검색 시작",
      btnCurationView: "3D 큐레이션관",
      bazaarTag: "SILK ROAD BAZAAR 🕌",
      bazaarTitle: "비단길 실크로드 테마 기획전",
      bazaarDesc: "동서양 문화가 만나는 사막 바자르에 펼쳐진 특별 수서 기획 전시",
      bazaarCard1Title: "아시아/중동 전래동화전",
      bazaarCard1Desc: "천년 동안 전해 내려온 아시아와 중동의 지혜가 담긴 그림책 컬렉션",
      bazaarCard2Title: "쌍방향 언어 그림책관",
      bazaarCard2Desc: "한국어와 베트남어, 중국어, 아랍어가 병기된 다문화 다국어 픽처북",
      bazaarCard3Title: "신설 도서관 희망도서 풀세트",
      bazaarCard3Desc: "다문화 특화 공공/학교 도서관 개관을 위한 필수 수서 풀패키지",
      addPkgCart: "패키지 장바구니 담기",
      newBooksTag: "NEW ARRIVALS 📚",
      newBooksTitle: "이달의 추천 수서 신간",
      viewAllBooks: "전체 수서도서 보기",
      searchTag: "MULTICULTURAL SEARCH 🔍",
      searchTitle: "사막 다국어 도서 통합 수서 검색관",
      searchDesc: "언어별, 연령별, KDC 분류기호, ISBN, 출판사별 정밀 필터링으로 필요한 수서 도서를 간편하게 검색하세요.",
      searchPlaceholder: "도서명, 저자, 출판사, ISBN-13 검색...",
      searchBtn: "검색",
      filterLang: "다국어 언어",
      chipAll: "전체",
      filterAge: "대상 연령",
      optAllAge: "전체 연령",
      filterKDC: "KDC 분류기호",
      optAllKDC: "전체 KDC",
      filterPublisher: "출판사",
      optAllPub: "전체 출판사",
      searchResultTotal: "검색 결과:",
      booksUnit: "권",
      sortNew: "최신 등록순",
      sortPopular: "사서 추천순",
      sortPriceLow: "낮은 가격순",
      sortPriceHigh: "높은 가격순",
      curationTag: "SPECIAL PACKAGES 🎁",
      curationTitle: "실크로드 3D 다문화 테마 큐레이션관",
      curationDesc: "사서 수서 업무의 효율을 극대화하는 전문가 맞춤형 묶음 구입 패키지",
      pkg1Badge: "인기 수서 1위",
      pkg1Title: "🐫 비단길 전래동화 특별 컬렉션 (20종)",
      pkg1Sub: "베트남, 중국, 아랍, 중앙아시아 대표 구전 동화 완역 판본",
      pkg1Feat1: "한국어 & 원어 병기 이중언어 양장본",
      pkg1Feat2: "KDC 800번대 아동 문학 분류 완료",
      pkg1Feat3: "공공도서관 및 학교도서관 강력 추천",
      pkg1Feat4: "MARC/KOLAS 서지 데이터 무료 제공",
      pkg2Badge: "다구어 추천",
      pkg2Title: "🌴 오아시스 쌍방향 다국어 그림책 (15종)",
      pkg2Sub: "유아 및 초등 저학년을 위한 세이펜/오디오 호환 다국어 책",
      pkg2Feat1: "5개 언어 (KO, EN, VI, ZH, AR) 오디오 수록",
      pkg2Feat2: "선명한 고급 3D 세이프 모서리 양장",
      pkg2Feat3: "어린이 다문화 문화체험 독서교실용",
      pkg2Feat4: "독서 활동지 PDF 템플릿 포함",
      pkg3Badge: "학술/인문",
      pkg3Title: "🕌 아시아-중동 교양 인문학 세트 (30종)",
      pkg3Sub: "청소년 및 성인 다문화 지역 연구를 위한 전문 서적",
      pkg3Feat1: "실크로드 역사, 지리, 예술, 철학 총망라",
      pkg3Feat2: "KDC 100, 300, 900번대 심층 서지",
      pkg3Feat3: "대학 및 공공 전문자료실 수서 적합",
      pkg3Feat4: "해설판 수서 라벨 스티커 동봉",
      pkg4Badge: "개관 특화 풀세트",
      pkg4Title: "📚 신규 도서관 희망도서 풀패키지 (50종)",
      pkg4Sub: "다문화 서가 구축에 필요한 최고의 신간 및 베스트셀러 엄선",
      pkg4Feat1: "전 계층/전 언어 종합 수서 솔루션",
      pkg4Feat2: "KOLAS III 서지/소장 바코드 데이터 즉시 납품",
      pkg4Feat3: "납품 시 장정/띠지 무료 가공 지원",
      pkg4Feat4: "공문 견적서 1클릭 자동 정산",
      cartTag: "PROCUREMENT CART 🛒",
      cartTitle: "사서 수서 관제소 & 공문 견적함",
      clearCart: "장바구니 비우기",
      thBookInfo: "수서 도서 정보",
      thKDC: "KDC/ISBN",
      thUnitPrice: "정가",
      thQty: "수량",
      thSubtotal: "합계금액",
      emptyCartText: "장바구니에 담긴 수서 도서가 없습니다.",
      btnGoSearch: "도서 검색하러 가기",
      summaryTitle: "수서 구입 예산 견적 요약",
      sumTotalItems: "총 수서 종수:",
      sumOriginalTotal: "도서 정가 총액:",
      sumDiscount: "사서 납품 할인 (10%):",
      sumTax: "부가세 (면세 도서):",
      sumFinalTotal: "최종 납품 견적가:",
      btnGenQuote: "1클릭 공문 견적서 생성",
      btnExportExcel: "엑셀 / CSV 서지 다운로드",
      summaryNote: "KOLAS III 표준 서지 호환 및 도서관 납품 정산 표준 양식 지원",
      backToSearch: "수서 검색 목록으로",
      canvas3DHint: "마우스로 360도 회전 및 책 펼침 가능",
      toggleCover: "표지 펼치기/접기",
      metaAuthor: "저자 / 역자",
      metaPublisher: "출판사",
      metaISBN: "ISBN-13",
      metaKDC: "KDC 분류기호",
      metaAge: "대상 연령",
      metaBinding: "제본 형태",
      audioSampleTitle: "다국어 낭독 오디오 샘플 미리듣기",
      audioSampleSub: "원어로 녹음된 아동 낭독 사운드를 확인하세요",
      btnPlayAudio: "샘플 오디오 재생 🔊",
      descHeading: "도서 요약 및 수서 가이드",
      detailPriceLabel: "납품 수서가",
      addToCart: "수서 장바구니 담기",
      quoteModalTitle: "공문 견적서 및 수서 요청서 생성",
      btnPrintQuote: "인쇄 / PDF 저장하기",
      btnClose: "닫기"
    },
    EN: {
      brandTitle: "OASIS",
      brandSub: "Multicultural Library Supply Portal",
      navHome: "3D Oasis World",
      navSearch: "Desert Search",
      navCuration: "Silk Road Packages",
      navCart: "Quote & Cart",
      navDetail: "3D Bibliographic Detail",
      hudLocation: "Oasis Central Library (Explore & Drive)",
      hudKeys: "Use WASD or Arrow keys to drive 3D Caravan",
      bellBtn: "Caravan Bell 🔔",
      resetCaravan: "Reset Position",
      heroTitle: "Silk Road Desert Oasis Library Portal",
      heroSub: "Drive the 3D book collection caravan, explore multi-lingual books, and generate official PDF quotes in 1-click.",
      btnSearchStart: "Start Book Search",
      btnCurationView: "Explore Packages",
      bazaarTag: "SILK ROAD BAZAAR 🕌",
      bazaarTitle: "Silk Road Exhibition Stalls",
      bazaarDesc: "Curated library exhibitions in the desert bazaar where East meets West",
      bazaarCard1Title: "Asia & Middle-East Folklore",
      bazaarCard1Desc: "Folk tale picture books passed down for thousands of years",
      bazaarCard2Title: "Bilingual Picture Books",
      bazaarCard2Desc: "Multilingual picture books with parallel Korean, English, Vietnamese, Arabic texts",
      bazaarCard3Title: "New Library Core Starter Set",
      bazaarCard3Desc: "Essential procurement set for newly opened multicultural public libraries",
      addPkgCart: "Add Package to Cart",
      newBooksTag: "NEW ARRIVALS 📚",
      newBooksTitle: "Recommended New Arrivals",
      viewAllBooks: "View All Catalog",
      searchTag: "MULTICULTURAL SEARCH 🔍",
      searchTitle: "Desert Multilingual Procurement Search",
      searchDesc: "Filter books by language, age group, KDC code, ISBN, and publisher with precision.",
      searchPlaceholder: "Search title, author, publisher, ISBN-13...",
      searchBtn: "Search",
      filterLang: "Language",
      chipAll: "All",
      filterAge: "Age Group",
      optAllAge: "All Ages",
      filterKDC: "KDC Classification",
      optAllKDC: "All KDC",
      filterPublisher: "Publisher",
      optAllPub: "All Publishers",
      searchResultTotal: "Results:",
      booksUnit: " books",
      sortNew: "Newest Arrivals",
      sortPopular: "Librarian Pick",
      sortPriceLow: "Price: Low to High",
      sortPriceHigh: "Price: High to Low",
      curationTag: "SPECIAL PACKAGES 🎁",
      curationTitle: "Silk Road 3D Procurement Packages",
      curationDesc: "Curated librarian bulk purchasing packages to streamline your library budget",
      pkg1Badge: "#1 Best Supply",
      pkg1Title: "🐫 Silk Road Folklore Collection (20 Books)",
      pkg1Sub: "Vietnamese, Chinese, Arabic, Central Asian representative folklore",
      pkg1Feat1: "Parallel bilingual hardcover editions",
      pkg1Feat2: "KDC 800 Children Literature categorized",
      pkg1Feat3: "Recommended for public & school libraries",
      pkg1Feat4: "Free MARC / KOLAS metadata included",
      pkg2Badge: "Multilingual Pick",
      pkg2Title: "🌴 Oasis Bilingual Picture Books (15 Books)",
      pkg2Sub: "Audio-compatible picture books for toddlers & primary students",
      pkg2Feat1: "5 Languages audio recordings included",
      pkg2Feat2: "High quality rounded 3D hardcover corners",
      pkg2Feat3: "Ideal for multicultural reading classes",
      pkg2Feat4: "Includes reading activity PDF sheets",
      pkg3Badge: "Humanities & Study",
      pkg3Title: "🕌 Asia-Middle East Humanities Set (30 Books)",
      pkg3Sub: "Specialized humanities & history collection for young adults & adults",
      pkg3Feat1: "Comprehensive coverage of Silk Road history & arts",
      pkg3Feat2: "KDC 100, 300, 900 classified",
      pkg3Feat3: "Perfect for research & university libraries",
      pkg3Feat4: "Includes labeled library spine stickers",
      pkg4Badge: "Master Starter Set",
      pkg4Title: "📚 New Library Core Full Package (50 Books)",
      pkg4Sub: "Top new arrivals & bestsellers for establishing a multicultural bookshelf",
      pkg4Feat1: "All-in-one multi-age & multi-language solution",
      pkg4Feat2: "Instant KOLAS III cataloging & barcodes",
      pkg4Feat3: "Free library spine reinforcement & plastic wrapping",
      pkg4Feat4: "1-Click automated official quote calculation",
      cartTag: "PROCUREMENT CART 🛒",
      cartTitle: "Librarian Cart & Official Quote Office",
      clearCart: "Clear Cart",
      thBookInfo: "Book Info",
      thKDC: "KDC / ISBN",
      thUnitPrice: "Unit Price",
      thQty: "Qty",
      thSubtotal: "Subtotal",
      emptyCartText: "Your procurement cart is empty.",
      btnGoSearch: "Go to Book Search",
      summaryTitle: "Procurement Budget Summary",
      sumTotalItems: "Total Titles:",
      sumOriginalTotal: "List Price Total:",
      sumDiscount: "Library Discount (10%):",
      sumTax: "VAT (Tax-Free Books):",
      sumFinalTotal: "Final Net Quote:",
      btnGenQuote: "1-Click Official Quote (PDF)",
      btnExportExcel: "Download CSV (KOLAS Format)",
      summaryNote: "KOLAS III standard bibliographic metadata & library billing compliant",
      backToSearch: "Back to Book Search",
      canvas3DHint: "Drag to rotate 360° or open pages",
      toggleCover: "Toggle Cover Open/Close",
      metaAuthor: "Author / Translator",
      metaPublisher: "Publisher",
      metaISBN: "ISBN-13",
      metaKDC: "KDC Classification",
      metaAge: "Target Age",
      metaBinding: "Binding Type",
      audioSampleTitle: "Multilingual Audio Sample",
      audioSampleSub: "Listen to native audio narration preview",
      btnPlayAudio: "Play Audio Sample 🔊",
      descHeading: "Summary & Procurement Guide",
      detailPriceLabel: "Net Supply Price",
      addToCart: "Add to Procurement Cart",
      quoteModalTitle: "Official Procurement Quote Generator",
      btnPrintQuote: "Print / Save PDF",
      btnClose: "Close"
    },
    VI: {
      brandTitle: "OASIS",
      brandSub: "Cổng Cung Cấp Sách Đa Văn Hóa",
      navHome: "Thế Giới 3D",
      navSearch: "Tìm Kiếm Sách",
      navCuration: "Gói Tuyển Chọn",
      navCart: "Báo Giá & Giỏ Sách",
      navDetail: "Chi Tiết 3D",
      hudLocation: "Thư Viện Trung Tâm Oasis (Khám Phá)",
      hudKeys: "Dùng phím WASD hoặc Mũi tên để lái Xe Caravan 3D",
      bellBtn: "Chuông Xe 🔔",
      resetCaravan: "Đặt Lại Vị Trí",
      heroTitle: "Cổng Thư Viện Đa Văn Hóa Oasis Con Đường Tơ Lụa",
      heroSub: "Lái xe caravan thu thập sách 3D, khám phá sách đa ngôn ngữ và tạo báo giá chính thức trong 1 cú nhấp.",
      btnSearchStart: "Bắt Đầu Tìm Kiếm",
      btnCurationView: "Xem Gói Tuyển Chọn",
      bazaarTag: "SILK ROAD BAZAAR 🕌",
      bazaarTitle: "Gian Hàng Triển Lãm Tơ Lụa",
      bazaarDesc: "Bộ sưu tập sách đặc sắc tại chợ sa mạc giao thoa văn hóa Đông Tây",
      bazaarCard1Title: "Truyện Cổ Tích Châu Á & Trung Đông",
      bazaarCard1Desc: "Bộ truyện tranh cổ tích truyền miệng ngàn năm tuổi",
      bazaarCard2Title: "Sách Tranh Song Ngữ",
      bazaarCard2Desc: "Sách tranh đa ngôn ngữ tiếng Hàn, Anh, Việt, Ả Rập",
      bazaarCard3Title: "Bộ Khởi Đầu Thư Viện Mới",
      bazaarCard3Desc: "Gói sách thiết yếu cho thư viện công cộng đa văn hóa mới thành lập",
      addPkgCart: "Thêm Gói Vào Giỏ",
      newBooksTag: "NEW ARRIVALS 📚",
      newBooksTitle: "Sách Mới Đề Xuất Tháng Này",
      viewAllBooks: "Xem Tất Cả Sách",
      searchTag: "MULTICULTURAL SEARCH 🔍",
      searchTitle: "Tìm Kiếm Bổ Sung Sách Đa Ngôn Ngữ",
      searchDesc: "Lọc sách chính xác theo ngôn ngữ, độ tuổi, mã KDC, ISBN và nhà xuất bản.",
      searchPlaceholder: "Tìm tên sách, tác giả, NXB, ISBN-13...",
      searchBtn: "Tìm Kiếm",
      filterLang: "Ngôn Ngữ",
      chipAll: "Tất Cả",
      filterAge: "Độ Tuổi",
      optAllAge: "Mọi Độ Tuổi",
      filterKDC: "Phân Loại KDC",
      optAllKDC: "Tất Cả KDC",
      filterPublisher: "Nhà Xuất Bản",
      optAllPub: "Tất Cả NXB",
      searchResultTotal: "Kết quả:",
      booksUnit: " cuốn",
      sortNew: "Mới Nhất",
      sortPopular: "Đề Xuất Thu Thư",
      sortPriceLow: "Giá: Thấp Đến Cao",
      sortPriceHigh: "Giá: Cao Đến Thấp",
      curationTag: "SPECIAL PACKAGES 🎁",
      curationTitle: "Gói Bổ Sung Sách Đa Văn Hóa 3D",
      curationDesc: "Các gói sách bổ sung chuyên nghiệp giúp tối ưu hóa ngân sách thư viện",
      pkg1Badge: "Bán Chạy Nhất",
      pkg1Title: "🐫 Bộ Truyện Cổ Tích Con Đường Tơ Lụa (20 Cuốn)",
      pkg1Sub: "Truyện dân gian tiêu biểu Việt Nam, Trung Quốc, Ả Rập",
      pkg1Feat1: "Bìa cứng song ngữ tiếng Hàn & nguyên bản",
      pkg1Feat2: "Đã phân loại KDC 800 Văn học thiếu nhi",
      pkg1Feat3: "Khuyên dùng cho thư viện công cộng & trường học",
      pkg1Feat4: "Tặng kèm dữ liệu biên mục MARC / KOLAS",
      pkg2Badge: "Đề Xuất Đa Ngôn Ngữ",
      pkg2Title: "🌴 Sách Tranh Song Ngữ Oasis (15 Cuốn)",
      pkg2Sub: "Sách tranh hỗ trợ âm thanh cho trẻ mầm non & tiểu học",
      pkg2Feat1: "Tích hợp âm thanh 5 ngôn ngữ",
      pkg2Feat2: "Bìa cứng bo tròn góc an toàn 3D cao cấp",
      pkg2Feat3: "Phù hợp lớp học trải nghiệm văn hóa đa dạng",
      pkg2Feat4: "Kèm tệp PDF phiếu hoạt động đọc sách",
      pkg3Badge: "Nhân Văn & Nghiên Cứu",
      pkg3Title: "🕌 Bộ Nhân Văn Châu Á - Trung Đông (30 Cuốn)",
      pkg3Sub: "Bộ sách nhân văn & lịch sử chuyên sâu cho thanh thiếu niên & người lớn",
      pkg3Feat1: "Bao quát lịch sử & nghệ thuật Con Đường Tơ Lụa",
      pkg3Feat2: "Phân loại KDC 100, 300, 900",
      pkg3Feat3: "Hoàn hảo cho thư viện nghiên cứu & đại học",
      pkg3Feat4: "Kèm nhãn nhãn gáy sách thư viện",
      pkg4Badge: "Gói Toàn Diện Mới",
      pkg4Title: "📚 Bộ Sách Đầy Đủ Cho Thư Viện Mới (50 Cuốn)",
      pkg4Sub: "Tuyển tập sách mới & bán chạy nhất để xây dựng tủ sách đa văn hóa",
      pkg4Feat1: "Giải pháp toàn diện mọi độ tuổi & ngôn ngữ",
      pkg4Feat2: "Biên mục & mã vạch KOLAS III tức thì",
      pkg4Feat3: "Miễn phí bọc nilon bảo vệ gáy sách",
      pkg4Feat4: "Tự động tính báo giá chính thức trong 1 cú nhấp",
      cartTag: "PROCUREMENT CART 🛒",
      cartTitle: "Giỏ Sách & Phòng Báo Giá Chính Thức",
      clearCart: "Xóa Giỏ Sách",
      thBookInfo: "Thông Tin Sách",
      thKDC: "KDC / ISBN",
      thUnitPrice: "Đơn Giá",
      thQty: "SL",
      thSubtotal: "Thành Tiền",
      emptyCartText: "Giỏ sách của bạn đang trống.",
      btnGoSearch: "Đến Tìm Kiếm Sách",
      summaryTitle: "Tóm Tắt Ngân Sách Bổ Sung",
      sumTotalItems: "Tổng Số Đầu Sách:",
      sumOriginalTotal: "Tổng Giá Niêm Yết:",
      sumDiscount: "Giảm Giá Thư Viện (10%):",
      sumTax: "Thuế VAT (Miễn Thuế):",
      sumFinalTotal: "Tổng Thanh Toán:",
      btnGenQuote: "Tạo Báo Giá Chính Thức (PDF)",
      btnExportExcel: "Tải Dữ Liệu CSV (KOLAS)",
      summaryNote: "Tương thích chuẩn biên mục KOLAS III & thủ tục thư viện",
      backToSearch: "Quay Lại Tìm Kiếm",
      canvas3DHint: "Xoay 360° hoặc mở trang sách bằng chuột",
      toggleCover: "Mở / Đóng Bìa Sách",
      metaAuthor: "Tác Giả / Dịch Giả",
      metaPublisher: "Nhà Xuất Bản",
      metaISBN: "ISBN-13",
      metaKDC: "Mã Phân Loại KDC",
      metaAge: "Độ Tuổi Phù Hợp",
      metaBinding: "Hình Thức Đóng Sách",
      audioSampleTitle: "Nghe Thử Âm Thanh Đa Ngôn Ngữ",
      audioSampleSub: "Nghe đọc bản xứ mẫu",
      btnPlayAudio: "Phát Âm Thanh Mẫu 🔊",
      descHeading: "Tóm Tắt & Hướng Dẫn Bổ Sung",
      detailPriceLabel: "Giá Bổ Sung Thực Tế",
      addToCart: "Thêm Vào Giỏ Sách",
      quoteModalTitle: "Tạo Báo Giá Bổ Sung Sách Chính Thức",
      btnPrintQuote: "In / Lưu File PDF",
      btnClose: "Đóng"
    },
    ZH: {
      brandTitle: "OASIS",
      brandSub: "多元文化图书馆采购门户",
      navHome: "3D绿洲馆",
      navSearch: "沙漠图书检索",
      navCuration: "丝绸之路主题包",
      navCart: "公文报价单",
      navDetail: "3D书目详情",
      hudLocation: "绿洲中央图书馆（驾驶探索）",
      hudKeys: "使用WASD或方向键驾驶3D藏书大篷车",
      bellBtn: "篷车铃铛 🔔",
      resetCaravan: "重置位置",
      heroTitle: "丝绸之路沙漠绿洲多元文化图书馆",
      heroSub: "驾驶3D藏书大篷车探索多语言图书，一键生成官方PDF采购报价单。",
      btnSearchStart: "开始检索",
      btnCurationView: "查看主题包",
      bazaarTag: "SILK ROAD BAZAAR 🕌",
      bazaarTitle: "丝绸之路主题特展",
      bazaarDesc: "沙漠集市上展现东西方文化交融的特色馆藏展览",
      bazaarCard1Title: "亚洲与中东民间故事展",
      bazaarCard1Desc: "流传千年的亚洲与中东智慧绘本系列",
      bazaarCard2Title: "双向语言绘本馆",
      bazaarCard2Desc: "韩语、英语、越南语、阿拉伯语对照多元文化绘本",
      bazaarCard3Title: "新设图书馆推荐图书全集",
      bazaarCard3Desc: "面向新开馆多元文化图书馆的必备采购全包",
      addPkgCart: "添加主题包",
      newBooksTag: "NEW ARRIVALS 📚",
      newBooksTitle: "本月推荐采购新书",
      viewAllBooks: "查看全部图书",
      searchTag: "MULTICULTURAL SEARCH 🔍",
      searchTitle: "沙漠多语言图书综合采购检索",
      searchDesc: "按语言、年龄、KDC分类号、ISBN及出版社精准筛选所需图书。",
      searchPlaceholder: "搜索书名、作者、出版社、ISBN-13...",
      searchBtn: "检索",
      filterLang: "多语言",
      chipAll: "全部",
      filterAge: "适合年龄",
      optAllAge: "全部年龄",
      filterKDC: "KDC分类号",
      optAllKDC: "全部KDC",
      filterPublisher: "出版社",
      optAllPub: "全部出版社",
      searchResultTotal: "检索结果:",
      booksUnit: " 册",
      sortNew: "最新上架",
      sortPopular: "馆员推荐",
      sortPriceLow: "价格从低到高",
      sortPriceHigh: "价格从高到低",
      curationTag: "SPECIAL PACKAGES 🎁",
      curationTitle: "丝绸之路3D多元文化采购主题包",
      curationDesc: "专业定制的组合采购包，极大提升图书馆采编效率",
      pkg1Badge: "热销第1名",
      pkg1Title: "🐫 丝绸之路民间故事特别典藏（20册）",
      pkg1Sub: "越南、中国、阿拉伯及中亚代表性口头传说全译本",
      pkg1Feat1: "韩语与原语双语对照精装本",
      pkg1Feat2: "已完成KDC 800类儿童文学分类",
      pkg1Feat3: "公共图书馆及学校图书馆强烈推荐",
      pkg1Feat4: "免费提供MARC/KOLAS书目数据",
      pkg2Badge: "多语言推荐",
      pkg2Title: "🌴 绿洲双向多语言绘本（15册）",
      pkg2Sub: "适合学龄前及小学低年级的音频兼容多语言绘本",
      pkg2Feat1: "收录5种语言音频朗读",
      pkg2Feat2: "高清3D圆角安全精装",
      pkg2Feat3: "适用于儿童多元文化体验阅读课",
      pkg3Badge: "学术/人文",
      pkg3Title: "🕌 亚洲-中东人文通识丛书（30册）",
      pkg3Sub: "面向青少年及成人的多元文化区域研究专业书籍",
      pkg3Feat1: "囊括丝绸之路历史、地理、艺术与哲学",
      pkg3Feat2: "KDC 100、300、900类深度书目",
      pkg3Feat3: "适合高校及公共专业资料室采购",
      pkg4Badge: "开馆特供全集",
      pkg4Title: "📚 新设图书馆推荐图书全包（50册）",
      pkg4Sub: "建构多元文化书架所需的最佳新书与畅销书精选",
      pkg4Feat1: "全年龄段/全语言综合采购解决方案",
      pkg4Feat2: "即时交付KOLAS III编目及条形码数据",
      pkg4Feat3: "免费提供图书包角与塑封加工",
      pkg4Feat4: "一键自动计算公文报价单",
      cartTag: "PROCUREMENT CART 🛒",
      cartTitle: "采编控制台与公文报价箱",
      clearCart: "清空购物车",
      thBookInfo: "图书信息",
      thKDC: "KDC / ISBN",
      thUnitPrice: "单价",
      thQty: "数量",
      thSubtotal: "小计",
      emptyCartText: "购物车中暂无采购图书。",
      btnGoSearch: "前往检索图书",
      summaryTitle: "采购预算报价汇总",
      sumTotalItems: "总品种数:",
      sumOriginalTotal: "图书码洋总额:",
      sumDiscount: "馆员采购折扣 (10%):",
      sumTax: "增值税 (免税图书):",
      sumFinalTotal: "最终采购实洋:",
      btnGenQuote: "一键生成公文报价单 (PDF)",
      btnExportExcel: "导出CSV (KOLAS格式)",
      summaryNote: "兼容KOLAS III标准书目及图书馆采购结算规范",
      backToSearch: "返回图书检索",
      canvas3DHint: "可使用鼠标360度旋转及翻开书页",
      toggleCover: "展开 / 折叠封面",
      metaAuthor: "作者 / 译者",
      metaPublisher: "出版社",
      metaISBN: "ISBN-13",
      metaKDC: "KDC分类号",
      metaAge: "适合年龄",
      metaBinding: "装帧形式",
      audioSampleTitle: "多语言朗读音频试听",
      audioSampleSub: "试听母语配音朗读音频",
      btnPlayAudio: "播放音频试听 🔊",
      descHeading: "图书摘要与采购指南",
      detailPriceLabel: "采购实洋价",
      addToCart: "加入采购购物车",
      quoteModalTitle: "生成官方采购报价单",
      btnPrintQuote: "打印 / 保存PDF",
      btnClose: "关闭"
    },
    AR: {
      brandTitle: "OASIS",
      brandSub: "بوابة توريد المكتبات متعددة الثقافات",
      navHome: "عالم الواحة 3D",
      navSearch: "بحث الصحراء",
      navCuration: "باقات طريق الحرير",
      navCart: "سلة التوريد والطلب",
      navDetail: "تفاصيل 3D",
      hudLocation: "مكتبة الواحة المركزية (استكشاف 3D)",
      hudKeys: "استخدم WASD أو الأسهم لقيادة القافلة 3D",
      bellBtn: "جرس القافلة 🔔",
      resetCaravan: "إعادة تعيين",
      heroTitle: "مكتبة الواحة متعددة الثقافات على طريق الحرير",
      heroSub: "قد قافلة جمع الكتب ثلاثية الأبعاد واستكشف كتبًا متعددة اللغات واحصل على عرض أسعار رسمي بنقرة واحدة.",
      btnSearchStart: "بدء البحث",
      btnCurationView: "عرض الباقات",
      bazaarTag: "SILK ROAD BAZAAR 🕌",
      bazaarTitle: "معرض بازار طريق الحرير",
      bazaarDesc: "معارض كتب مخصصة في بازار الصحراء حيث يلتفي الشرق بالغرب",
      bazaarCard1Title: "حكايات آسيا والشرق الأوسط الشعبية",
      bazaarCard1Desc: "مجموعة كتب مصورة للحكايات الشعبية المتوارثة منذ ألف عام",
      bazaarCard2Title: "كتب مصورة ثنائية اللغة",
      bazaarCard2Desc: "كتب قصص مصورة متعددة اللغات بالكورية والإنجليزية والفييتنامية والعربية",
      bazaarCard3Title: "مجموعة المكتبات الجديدة الشاملة",
      bazaarCard3Desc: "باقة توريد أساسية لتأسيس المكتبات العامة متعددة الثقافات",
      addPkgCart: "إضافة الباقة للسلة",
      newBooksTag: "NEW ARRIVALS 📚",
      newBooksTitle: "الإصدارات الجديدة الموصى بها",
      viewAllBooks: "عرض كل الكتب",
      searchTag: "MULTICULTURAL SEARCH 🔍",
      searchTitle: "البحث الشامل للكتب متعددة اللغات",
      searchDesc: "تصفية دقيقة حسب اللغة والتصنيف والعمري ورمز KDC والناشر.",
      searchPlaceholder: "البحث عن العنوان، المؤلف، الناشر، ISBN...",
      searchBtn: "بحث",
      filterLang: "اللغات",
      chipAll: "الكل",
      filterAge: "الفئة العمرية",
      optAllAge: "جميع الأعمار",
      filterKDC: "تصنيف KDC",
      optAllKDC: "كل التصنيفات",
      filterPublisher: "دار النشر",
      optAllPub: "كل الناشرين",
      searchResultTotal: "النتائج:",
      booksUnit: " كتاب",
      sortNew: "الأحدث",
      sortPopular: "توصية أمين المكتبة",
      sortPriceLow: "السعر: من الأقل للأعلى",
      sortPriceHigh: "السعر: من الأعلى للأقل",
      curationTag: "SPECIAL PACKAGES 🎁",
      curationTitle: "باقات توريد طريق الحرير 3D",
      curationDesc: "باقات شراء مخصصة لأمناء المكتبات لتوفير ميزانية الشراء",
      pkg1Badge: "الأكثر مبيعًا #1",
      pkg1Title: "🐫 باقة حكايات طريق الحرير الشعبية (20 كتابًا)",
      pkg1Sub: "حكايات شعبية مترجمة من فيتنام والصين والشرق الأوسط",
      pkg1Feat1: "طبعات مقواة ثنائية اللغة",
      pkg1Feat2: "مصنفة في تصنيف KDC 800 لأدب الأطفال",
      pkg1Feat3: "موصى بها للمكتبات العامة والمدارس",
      pkg1Feat4: "تتضمن بيانات MARC/KOLAS مجانًا",
      pkg2Badge: "توصية اللغات",
      pkg2Title: "🌴 كتب الواحة المصورة التفاعلية (15 كتابًا)",
      pkg2Sub: "كتب مصورة مزودة بملفات صوتية للأطفال",
      pkg2Feat1: "تسجيلات صوتية بـ 5 لغات",
      pkg2Feat2: "غلاف مقوى فاخر بزوايا آمنة 3D",
      pkg2Feat3: "مناسبة لورش القراءة متعددة الثقافات",
      pkg3Badge: "العلوم الإنسانية",
      pkg3Title: "🕌 باقة العلوم الإنسانية لآسيا والشرق الأوسط (30 كتابًا)",
      pkg3Sub: "كتب متخصصة في الدراسات الإقليمية للشباب والكبار",
      pkg3Feat1: " تغطية شاملة لتاريخ وفنون طريق الحرير",
      pkg3Feat2: "تصنيف KDC 100, 300, 900",
      pkg3Feat3: "مثالية للمكتبات الجامعية والبحثية",
      pkg4Badge: "الباقة الشاملة",
      pkg4Title: "📚 الباقة الشاملة للمكتبات الجديدة (50 كتابًا)",
      pkg4Sub: "أفضل الكتب الجديدة والأكثر مبيعًا لتأسيس رفوف متعددة الثقافات",
      pkg4Feat1: "حل توريد شامل لجميع الأعمار واللغات",
      pkg4Feat2: "تسليم فوري لبيانات KOLAS III والباركود",
      pkg4Feat3: "تغليف ودعم مجاني لأغلفة الكتب",
      pkg4Feat4: "حساب تلقائي لعرض الأسعار بنقرة واحدة",
      cartTag: "PROCUREMENT CART 🛒",
      cartTitle: "سلة التوريد ومكتب الطلبات الرسمية",
      clearCart: "تفريغ السلة",
      thBookInfo: "معلومات الكتاب",
      thKDC: "KDC / ISBN",
      thUnitPrice: "سعر الوحدة",
      thQty: "الكمية",
      thSubtotal: "الإجمالي",
      emptyCartText: "سلة التوريد فارغة حالياً.",
      btnGoSearch: "الذهاب للبحث عن كتب",
      summaryTitle: "ملخص ميزانية التوريد",
      sumTotalItems: "إجمالي العناوين:",
      sumOriginalTotal: "إجمالي السعر الأصلي:",
      sumDiscount: "خصم المكتبات (10%):",
      sumTax: "الضريبة (معفى من الضريبة):",
      sumFinalTotal: "إجمالي عرض الأسعار النهائي:",
      btnGenQuote: "إنشاء عرض أسعار رسمي (PDF)",
      btnExportExcel: "تحميل ملف CSV (KOLAS)",
      summaryNote: "متوافق مع المعايير الببليوجرافية KOLAS III وإجراءات المكتبات",
      backToSearch: "العودة للبحث",
      canvas3DHint: "اسحب للتدوير 360 درجة أو فتح الصفحات",
      toggleCover: "فتح / إغلاق الغلاف",
      metaAuthor: "المؤلف / المترجم",
      metaPublisher: "دار النشر",
      metaISBN: "ISBN-13",
      metaKDC: "رمز تصنيف KDC",
      metaAge: "الفئة العمرية",
      metaBinding: "نوع التجليد",
      audioSampleTitle: "معاينة الاستماع الصوتي",
      audioSampleSub: "استمع إلى قراءة صوتية باللغة الأصلية",
      btnPlayAudio: "تشغيل العينة الصوتية 🔊",
      descHeading: "ملخص الكتاب ودليل التوريد",
      detailPriceLabel: "سعر التوريد الصافي",
      addToCart: "إضافة لسلة التوريد",
      quoteModalTitle: "إنشاء عرض أسعار توريد رسمي",
      btnPrintQuote: "طباعة / حفظ PDF",
      btnClose: "إغلاق"
    }
  };

  // State Management
  let currentLang = "KO";
  let cartItems = [];
  let selectedDetailBookId = "b1";
  let isSoundEnabled = true;
  let currentView = "home";

  // Filter State
  let filterState = {
    keyword: "",
    lang: "ALL",
    age: "ALL",
    kdc: "ALL",
    publisher: "ALL",
    sort: "NEW"
  };

  // View Layout Mode (grid or list)
  let searchViewMode = "grid";

  // ==========================================================================
  // 3. WEB AUDIO CARAVAN BELL & SOUND ENGINE
  // ==========================================================================
  const SoundEngine = {
    audioCtx: null,

    init() {
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    },

    playBellSound() {
      if (!isSoundEnabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;

      // Primary metallic chime tone
      const osc1 = this.audioCtx.createOscillator();
      const gain1 = this.audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(1480, now); // F6 high metallic bell chime
      osc1.frequency.exponentialRampToValueAtTime(1470, now + 1.2);

      gain1.gain.setValueAtTime(0.4, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc1.connect(gain1);
      gain1.connect(this.audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 1.2);

      // Harmonic overtone tone
      const osc2 = this.audioCtx.createOscillator();
      const gain2 = this.audioCtx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(2960, now);
      osc2.frequency.exponentialRampToValueAtTime(2940, now + 0.8);

      gain2.gain.setValueAtTime(0.2, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      osc2.connect(gain2);
      gain2.connect(this.audioCtx.destination);
      osc2.start(now);
      osc2.stop(now + 0.8);
    },

    playWaterSplash() {
      if (!isSoundEnabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.25);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    },

    playPageFlip() {
      if (!isSoundEnabled) return;
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  };

  // ==========================================================================
  // 4. WATER RIPPLE CANVAS ENGINE
  // ==========================================================================
  const RippleEngine = {
    canvas: null,
    ctx: null,
    ripples: [],

    init() {
      this.canvas = document.getElementById('rippleCanvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.resize();

      window.addEventListener('resize', () => this.resize());
      window.addEventListener('pointerdown', (e) => this.addRipple(e.clientX, e.clientY));

      this.animate();
    },

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },

    addRipple(x, y) {
      this.ripples.push({
        x: x,
        y: y,
        radius: 4,
        maxRadius: 60 + Math.random() * 30,
        alpha: 0.8,
        speed: 2 + Math.random() * 1.5
      });
      SoundEngine.playWaterSplash();
    },

    animate() {
      requestAnimationFrame(() => this.animate());
      if (!this.ctx) return;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.ripples.length - 1; i >= 0; i--) {
        const r = this.ripples[i];
        r.radius += r.speed;
        r.alpha -= 0.015;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          this.ripples.splice(i, 1);
          continue;
        }

        this.ctx.beginPath();
        this.ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        this.ctx.strokeStyle = `rgba(42, 157, 143, ${r.alpha})`;
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2);
        this.ctx.strokeStyle = `rgba(212, 175, 55, ${r.alpha * 0.5})`;
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
      }
    }
  };

  // ==========================================================================
  // 5. THREE.JS 3D OASIS & CARAVAN ENGINE (#home)
  // ==========================================================================
  const OasisEngine = {
    scene: null,
    camera: null,
    renderer: null,
    caravan: null,
    wheels: [],
    dustParticles: null,

    // Driving physics
    caravanPos: { x: 0, z: 0 },
    caravanAngle: 0,
    speed: 0,
    maxSpeed: 0.45,
    acceleration: 0.018,
    friction: 0.95,
    turnSpeed: 0.04,

    // Key states
    keys: { w: false, a: false, s: false, d: false, up: false, left: false, down: false, right: false },

    init() {
      const container = document.getElementById('oasis-canvas-container');
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      // 1. Scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xd4edda);
      this.scene.fog = new THREE.FogExp2(0xd4edda, 0.012);

      // 2. Camera
      this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      this.camera.position.set(0, 14, 26);

      // 3. Renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(this.renderer.domElement);

      // 4. Lights
      const ambientLight = new THREE.AmbientLight(0xfff5e6, 0.7);
      this.scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xfffaed, 1.1);
      sunLight.position.set(30, 40, 20);
      sunLight.castShadow = true;
      sunLight.shadow.mapSize.width = 1024;
      sunLight.shadow.mapSize.height = 1024;
      sunLight.shadow.camera.near = 0.5;
      sunLight.shadow.camera.far = 150;
      const d = 40;
      sunLight.shadow.camera.left = -d;
      sunLight.shadow.camera.right = d;
      sunLight.shadow.camera.top = d;
      sunLight.shadow.camera.bottom = -d;
      this.scene.add(sunLight);

      // 5. Build Environment (Desert Dunes, Oasis Pool, Palms, Bazaar)
      this.buildDesertWorld();

      // 6. Build Low-Poly Book Caravan Vehicle
      this.buildCaravanVehicle();

      // 7. Event Listeners for Controls
      this.setupControls();

      // 8. Window Resize Listener
      window.addEventListener('resize', () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
      });

      // 9. Start Render Loop
      this.animate();
    },

    buildDesertWorld() {
      // Sand Terrain Plane
      const terrainGeo = new THREE.PlaneGeometry(160, 160, 48, 48);
      terrainGeo.rotateX(-Math.PI / 2);

      const pos = terrainGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const vx = pos.getX(i);
        const vz = pos.getZ(i);
        // Create soft sand dune undulations
        const distFromCenter = Math.sqrt(vx * vx + vz * vz);
        let height = Math.sin(vx * 0.1) * Math.cos(vz * 0.1) * 1.5;
        if (distFromCenter < 18) {
          height = -0.5; // flatten center oasis pond area
        }
        pos.setY(i, height);
      }
      terrainGeo.computeVertexNormals();

      const terrainMat = new THREE.MeshStandardMaterial({
        color: 0xfaedcd,
        roughness: 0.9,
        metalness: 0.1,
        flatShading: true
      });
      const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
      terrainMesh.receiveShadow = true;
      this.scene.add(terrainMesh);

      // Central Oasis Pond (Water surface)
      const pondGeo = new THREE.CircleGeometry(14, 32);
      pondGeo.rotateX(-Math.PI / 2);
      const pondMat = new THREE.MeshStandardMaterial({
        color: 0x2a9d8f,
        roughness: 0.1,
        metalness: 0.8,
        transparent: true,
        opacity: 0.85
      });
      const pondMesh = new THREE.Mesh(pondGeo, pondMat);
      pondMesh.position.set(0, -0.4, 0);
      this.scene.add(pondMesh);

      // Oasis Palm Trees Around Pond
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 16 + Math.random() * 4;
        const px = Math.cos(angle) * radius;
        const pz = Math.sin(angle) * radius;
        this.createPalmTree(px, pz);
      }

      // Silk Road Bazaar Tents (Checkpoints)
      this.createBazaarTent(-22, 18, 0xc86d51, "비단길 전래동화관");
      this.createBazaarTent(24, -18, 0x1d6f65, "쌍방향 다국어관");
      this.createBazaarTent(-24, -22, 0xd4af37, "희망도서 풀세트관");
      this.createOasisFountain(0, 0);
    },

    createPalmTree(x, z) {
      const palmGroup = new THREE.Group();
      palmGroup.position.set(x, 0, z);

      // Trunk
      const trunkGeo = new THREE.CylinderGeometry(0.3, 0.5, 6, 7);
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0x8a5a44, roughness: 0.9 });
      const trunk = new THREE.Mesh(trunkGeo, trunkMat);
      trunk.position.y = 3;
      trunk.castShadow = true;
      palmGroup.add(trunk);

      // Leaves
      const leafMat = new THREE.MeshStandardMaterial({ color: 0x2a9d8f, flatShading: true });
      for (let i = 0; i < 5; i++) {
        const leafGeo = new THREE.ConeGeometry(2, 4, 4);
        leafGeo.rotateX(Math.PI / 3);
        const leaf = new THREE.Mesh(leafGeo, leafMat);
        leaf.position.set(0, 6, 0);
        leaf.rotation.y = (i / 5) * Math.PI * 2;
        palmGroup.add(leaf);
      }
      this.scene.add(palmGroup);
    },

    createBazaarTent(x, z, colorHex, label) {
      const tentGroup = new THREE.Group();
      tentGroup.position.set(x, 0, z);

      // Tent Roof
      const roofGeo = new THREE.ConeGeometry(5, 4, 6);
      const roofMat = new THREE.MeshStandardMaterial({ color: colorHex, flatShading: true });
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.y = 4.5;
      roof.castShadow = true;
      tentGroup.add(roof);

      // Tent Poles
      const poleMat = new THREE.MeshStandardMaterial({ color: 0x5a3e2b });
      for (let i = 0; i < 4; i++) {
        const poleGeo = new THREE.CylinderGeometry(0.1, 0.1, 3);
        const pole = new THREE.Mesh(poleGeo, poleMat);
        const a = (i / 4) * Math.PI * 2;
        pole.position.set(Math.cos(a) * 3, 1.5, Math.sin(a) * 3);
        tentGroup.add(pole);
      }

      this.scene.add(tentGroup);
    },

    createOasisFountain(x, z) {
      // Floating Stacked 3D Books Fountain Centerpiece
      const fountainGroup = new THREE.Group();
      fountainGroup.position.set(x, 0.5, z);

      const baseGeo = new THREE.CylinderGeometry(3, 3.5, 0.8, 12);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.5 });
      const base = new THREE.Mesh(baseGeo, baseMat);
      fountainGroup.add(base);

      // Floating Book Stack
      const colors = [0xc86d51, 0x2a9d8f, 0x1d2d44, 0xe07a5f];
      for (let i = 0; i < 4; i++) {
        const bookGeo = new THREE.BoxGeometry(2.4, 0.4, 1.8);
        const bookMat = new THREE.MeshStandardMaterial({ color: colors[i] });
        const book = new THREE.Mesh(bookGeo, bookMat);
        book.position.set(0, 0.8 + i * 0.45, 0);
        book.rotation.y = i * 0.4;
        fountainGroup.add(book);
      }

      this.scene.add(fountainGroup);
    },

    buildCaravanVehicle() {
      this.caravan = new THREE.Group();
      this.wheels = [];

      // Cart Chassis (Wagon Body)
      const bodyGeo = new THREE.BoxGeometry(3.2, 1.4, 2.2);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0x8a5a44, roughness: 0.8 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 1.2;
      body.castShadow = true;
      this.caravan.add(body);

      // Caravan Canopy Roof
      const canopyGeo = new THREE.CylinderGeometry(1.6, 1.6, 3.2, 12, 1, false, 0, Math.PI);
      canopyGeo.rotateZ(Math.PI / 2);
      const canopyMat = new THREE.MeshStandardMaterial({ color: 0xc86d51, flatShading: true });
      const canopy = new THREE.Mesh(canopyGeo, canopyMat);
      canopy.position.set(0, 2.3, 0);
      canopy.castShadow = true;
      this.caravan.add(canopy);

      // Stacked 3D Books on Top of Caravan
      const bookColors = [0x2a9d8f, 0xd4af37, 0x1d2d44, 0xe07a5f];
      for (let i = 0; i < 3; i++) {
        const bg = new THREE.BoxGeometry(1.4, 0.3, 1.0);
        const bm = new THREE.MeshStandardMaterial({ color: bookColors[i] });
        const bMesh = new THREE.Mesh(bg, bm);
        bMesh.position.set(-0.4 + i * 0.3, 3.1 + i * 0.32, 0);
        bMesh.rotation.y = i * 0.2;
        this.caravan.add(bMesh);
      }

      // Wheels
      const wheelGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.3, 12);
      wheelGeo.rotateX(Math.PI / 2);
      const wheelMat = new THREE.MeshStandardMaterial({ color: 0x3d405b });

      const wheelPositions = [
        { x: -1.1, y: 0.6, z: 1.2 },
        { x: 1.1, y: 0.6, z: 1.2 },
        { x: -1.1, y: 0.6, z: -1.2 },
        { x: 1.1, y: 0.6, z: -1.2 }
      ];

      wheelPositions.forEach(p => {
        const wheel = new THREE.Mesh(wheelGeo, wheelMat);
        wheel.position.set(p.x, p.y, p.z);
        wheel.castShadow = true;
        this.caravan.add(wheel);
        this.wheels.push(wheel);
      });

      // Caravan Lantern Front Light
      const lanternGeo = new THREE.SphereGeometry(0.3, 8, 8);
      const lanternMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
      const lantern = new THREE.Mesh(lanternGeo, lanternMat);
      lantern.position.set(1.7, 1.5, 0);
      this.caravan.add(lantern);

      const lanternLight = new THREE.PointLight(0xffd700, 1.5, 8);
      lanternLight.position.set(1.7, 1.5, 0);
      this.caravan.add(lanternLight);

      this.scene.add(this.caravan);
    },

    setupControls() {
      window.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        if (key === 'w' || key === 'arrowup') this.keys.w = true;
        if (key === 's' || key === 'arrowdown') this.keys.s = true;
        if (key === 'a' || key === 'arrowleft') this.keys.a = true;
        if (key === 'd' || key === 'arrowright') this.keys.d = true;
      });

      window.addEventListener('keyup', (e) => {
        const key = e.key.toLowerCase();
        if (key === 'w' || key === 'arrowup') this.keys.w = false;
        if (key === 's' || key === 'arrowdown') this.keys.s = false;
        if (key === 'a' || key === 'arrowleft') this.keys.a = false;
        if (key === 'd' || key === 'arrowright') this.keys.d = false;
      });

      // Mobile Touch D-Pad Events
      const dpadBtns = document.querySelectorAll('.dpad-btn');
      dpadBtns.forEach(btn => {
        const dir = btn.getAttribute('data-dir');
        btn.addEventListener('touchstart', (e) => {
          e.preventDefault();
          if (dir === 'up') this.keys.w = true;
          if (dir === 'down') this.keys.s = true;
          if (dir === 'left') this.keys.a = true;
          if (dir === 'right') this.keys.d = true;
        });
        btn.addEventListener('touchend', (e) => {
          e.preventDefault();
          if (dir === 'up') this.keys.w = false;
          if (dir === 'down') this.keys.s = false;
          if (dir === 'left') this.keys.a = false;
          if (dir === 'right') this.keys.d = false;
        });
      });

      // Reset Button
      const resetBtn = document.getElementById('reset-caravan-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.caravanPos = { x: 0, z: 0 };
          this.caravanAngle = 0;
          this.speed = 0;
          SoundEngine.playBellSound();
        });
      }

      // Bell Button
      const bellBtn = document.getElementById('caravan-bell-btn');
      if (bellBtn) {
        bellBtn.addEventListener('click', () => SoundEngine.playBellSound());
      }
    },

    updatePhysics() {
      // Acceleration & Steering
      if (this.keys.w) {
        this.speed += this.acceleration;
        if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
      } else if (this.keys.s) {
        this.speed -= this.acceleration * 0.7;
        if (this.speed < -this.maxSpeed * 0.5) this.speed = -this.maxSpeed * 0.5;
      } else {
        this.speed *= this.friction;
      }

      if (Math.abs(this.speed) > 0.01) {
        const dir = this.speed > 0 ? 1 : -1;
        if (this.keys.a) this.caravanAngle += this.turnSpeed * dir;
        if (this.keys.d) this.caravanAngle -= this.turnSpeed * dir;
      }

      // Update position
      this.caravanPos.x += Math.cos(this.caravanAngle) * this.speed;
      this.caravanPos.z -= Math.sin(this.caravanAngle) * this.speed;

      // Update 3D mesh position & rotation
      if (this.caravan) {
        this.caravan.position.x = this.caravanPos.x;
        this.caravan.position.z = this.caravanPos.z;
        this.caravan.rotation.y = this.caravanAngle;

        // Spin wheels
        this.wheels.forEach(w => {
          w.rotation.x += this.speed * 0.3;
        });
      }

      // Smooth Camera Follow
      if (this.camera && this.caravan) {
        const camDist = 18;
        const camHeight = 10;
        const targetX = this.caravanPos.x - Math.cos(this.caravanAngle) * camDist;
        const targetZ = this.caravanPos.z + Math.sin(this.caravanAngle) * camDist;

        this.camera.position.x += (targetX - this.camera.position.x) * 0.08;
        this.camera.position.z += (targetZ - this.camera.position.z) * 0.08;
        this.camera.position.y += (camHeight - this.camera.position.y) * 0.08;
        this.camera.lookAt(this.caravanPos.x, 1.5, this.caravanPos.z);
      }

      // Update HUD
      const speedDisplay = document.getElementById('speed-display');
      if (speedDisplay) {
        const kmh = Math.round(Math.abs(this.speed) * 80);
        speedDisplay.innerText = kmh;
      }

      // Location Check
      const locText = document.getElementById('caravan-location-text');
      if (locText) {
        const distBazaar1 = Math.hypot(this.caravanPos.x - (-22), this.caravanPos.z - 18);
        const distBazaar2 = Math.hypot(this.caravanPos.x - 24, this.caravanPos.z - (-18));
        const distCenter = Math.hypot(this.caravanPos.x, this.caravanPos.z);

        if (distBazaar1 < 8) {
          locText.innerText = "🕌 비단길 전래동화 기획전 파빌리온";
        } else if (distBazaar2 < 8) {
          locText.innerText = "🌴 오아시스 쌍방향 다국어관";
        } else if (distCenter < 10) {
          locText.innerText = "⛲ 오아시스 도서 샘터 수서 센터";
        } else {
          locText.innerText = "🐫 사막 실크로드 주행 도로";
        }
      }
    },

    animate() {
      requestAnimationFrame(() => this.animate());
      if (currentView === 'home') {
        this.updatePhysics();
        if (this.renderer && this.scene && this.camera) {
          this.renderer.render(this.scene, this.camera);
        }
      }
    }
  };

  // ==========================================================================
  // 6. THREE.JS 360° 3D BOOK VIEWER (#detail)
  // ==========================================================================
  const Book3DEngine = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    bookGroup: null,
    coverMesh: null,
    isCoverOpen: false,
    isAutoRotate: true,

    init() {
      const container = document.getElementById('book-3d-canvas-container');
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      // Scene
      this.scene = new THREE.Scene();

      // Camera
      this.camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
      this.camera.position.set(0, 3, 10);

      // Renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.shadowMap.enabled = true;
      container.appendChild(this.renderer.domElement);

      // Controls
      if (typeof THREE.OrbitControls !== 'undefined') {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.autoRotate = this.isAutoRotate;
        this.controls.autoRotateSpeed = 2.0;
      }

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      this.scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xfffaed, 1.2);
      dirLight.position.set(10, 15, 10);
      dirLight.castShadow = true;
      this.scene.add(dirLight);

      // Build 3D Hardcover Book Model
      this.buildBookModel(0xc86d51);

      // Controls buttons listeners
      const rotateBtn = document.getElementById('btn-rotate-3d');
      if (rotateBtn) {
        rotateBtn.addEventListener('click', () => {
          this.isAutoRotate = !this.isAutoRotate;
          if (this.controls) this.controls.autoRotate = this.isAutoRotate;
        });
      }

      const coverBtn = document.getElementById('btn-toggle-cover');
      if (coverBtn) {
        coverBtn.addEventListener('click', () => {
          this.toggleCoverOpen();
          SoundEngine.playPageFlip();
        });
      }

      const resetBtn = document.getElementById('btn-reset-3d');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (this.controls) this.controls.reset();
        });
      }

      window.addEventListener('resize', () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
      });

      this.animate();
    },

    buildBookModel(colorHex) {
      if (this.bookGroup) this.scene.remove(this.bookGroup);

      this.bookGroup = new THREE.Group();

      // Pages Block (Gold Foil Edges)
      const pagesGeo = new THREE.BoxGeometry(3.6, 4.8, 0.7);
      const pagesMat = new THREE.MeshStandardMaterial({ color: 0xfffdf5, roughness: 0.7 });
      const pages = new THREE.Mesh(pagesGeo, pagesMat);
      pages.position.set(0.1, 0, 0);
      pages.castShadow = true;
      this.bookGroup.add(pages);

      // Back Cover
      const backGeo = new THREE.BoxGeometry(3.8, 5.0, 0.08);
      const coverMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.4 });
      const backCover = new THREE.Mesh(backGeo, coverMat);
      backCover.position.set(0, 0, -0.38);
      backCover.castShadow = true;
      this.bookGroup.add(backCover);

      // Spine
      const spineGeo = new THREE.BoxGeometry(0.08, 5.0, 0.84);
      const spine = new THREE.Mesh(spineGeo, coverMat);
      spine.position.set(-1.86, 0, 0);
      this.bookGroup.add(spine);

      // Front Cover Pivot Group (for opening book cover)
      const coverPivot = new THREE.Group();
      coverPivot.position.set(-1.86, 0, 0.38);

      const frontGeo = new THREE.BoxGeometry(3.8, 5.0, 0.08);
      this.coverMesh = new THREE.Mesh(frontGeo, coverMat);
      this.coverMesh.position.set(1.9, 0, 0);
      this.coverMesh.castShadow = true;
      coverPivot.add(this.coverMesh);

      // Decorative Gold Foil Frame on Cover
      const foilGeo = new THREE.BoxGeometry(3.0, 4.2, 0.09);
      const foilMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8, roughness: 0.2 });
      const foil = new THREE.Mesh(foilGeo, foilMat);
      foil.position.set(1.9, 0, 0.01);
      coverPivot.add(foil);

      this.bookGroup.add(coverPivot);
      this.coverPivotGroup = coverPivot;

      this.scene.add(this.bookGroup);
    },

    updateBookColor(colorHex) {
      this.buildBookModel(colorHex);
    },

    toggleCoverOpen() {
      this.isCoverOpen = !this.isCoverOpen;
      const targetAngle = this.isCoverOpen ? -Math.PI * 0.75 : 0;

      // Simple smooth transition
      let currentAngle = this.coverPivotGroup.rotation.y;
      const animateOpen = () => {
        currentAngle += (targetAngle - currentAngle) * 0.15;
        this.coverPivotGroup.rotation.y = currentAngle;
        if (Math.abs(targetAngle - currentAngle) > 0.01) {
          requestAnimationFrame(animateOpen);
        }
      };
      animateOpen();
    },

    animate() {
      requestAnimationFrame(() => this.animate());
      if (currentView === 'detail') {
        if (this.controls) this.controls.update();
        if (this.renderer && this.scene && this.camera) {
          this.renderer.render(this.scene, this.camera);
        }
      }
    }
  };

  // ==========================================================================
  // 7. SPA HASH ROUTER & APP CONTROLLER
  // ==========================================================================
  function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  function handleRoute() {
    const hash = window.location.hash || '#home';
    const pageName = hash.replace('#', '');
    currentView = pageName;

    // Update Nav Tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      if (tab.getAttribute('data-page') === pageName) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update View Sections Visibility
    document.querySelectorAll('.page-view').forEach(view => {
      view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${pageName}`);
    if (targetView) {
      targetView.classList.add('active');
    } else {
      document.getElementById('view-home').classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Page Specific Init Trigger
    if (pageName === 'detail') {
      renderDetailPage(selectedDetailBookId);
    }
  }

  // ==========================================================================
  // 8. MULTI-LANGUAGE TRANSLATOR (i18n)
  // ==========================================================================
  function updateLanguage(lang) {
    currentLang = lang;
    const dict = I18N[lang] || I18N.KO;

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerText = dict[key];
      }
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Re-render dynamic pages
    renderSearchPage();
    renderFeaturedHomeBooks();
    renderCartPage();
    renderDetailPage(selectedDetailBookId);
  }

  // ==========================================================================
  // 9. HOME PAGE & SEARCH PAGE RENDERERS
  // ==========================================================================
  function renderFeaturedHomeBooks() {
    const container = document.getElementById('home-featured-books');
    if (!container) return;

    const featured = BOOKS_DATA.slice(0, 4);
    container.innerHTML = featured.map(book => createBookCardHTML(book)).join('');
    attachBookCardListeners(container);
  }

  function renderSearchPage() {
    const container = document.getElementById('search-results-grid');
    if (!container) return;

    // Filter Logic
    let filtered = BOOKS_DATA.filter(book => {
      // Keyword
      if (filterState.keyword) {
        const q = filterState.keyword.toLowerCase();
        const matchTitle = book.title.toLowerCase().includes(q);
        const matchAuthor = book.author.toLowerCase().includes(q);
        const matchPub = book.publisher.toLowerCase().includes(q);
        const matchIsbn = book.isbn.includes(q);
        if (!matchTitle && !matchAuthor && !matchPub && !matchIsbn) return false;
      }
      // Language
      if (filterState.lang !== 'ALL' && book.lang !== filterState.lang) return false;
      // Age
      if (filterState.age !== 'ALL' && book.age !== filterState.age) return false;
      // KDC
      if (filterState.kdc !== 'ALL' && !book.kdc.startsWith(filterState.kdc)) return false;
      // Publisher
      if (filterState.publisher !== 'ALL' && book.publisher !== filterState.publisher) return false;

      return true;
    });

    // Sorting Logic
    if (filterState.sort === 'PRICE_LOW') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filterState.sort === 'PRICE_HIGH') {
      filtered.sort((a, b) => b.price - a.price);
    }

    // Update Results Count
    const countEl = document.getElementById('search-count');
    if (countEl) countEl.innerText = filtered.length;

    // Render Grid vs List Layout
    container.className = searchViewMode === 'list' ? 'search-grid-layout list-view' : 'search-grid-layout';

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-light);">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 40px; margin-bottom: 12px;"></i>
          <p>검색 조건에 일치하는 수서 도서가 없습니다.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(book => createBookCardHTML(book)).join('');
      attachBookCardListeners(container);
    }
  }

  function createBookCardHTML(book) {
    const dict = I18N[currentLang] || I18N.KO;

    return `
      <div class="book-card 3d-tilt" data-id="${book.id}">
        <div class="book-cover-stage">
          <div class="book-cover-mock" style="background-color: #${book.color.toString(16)};">
            <div class="book-spine-effect"></div>
            <div class="book-cover-title">${book.title}</div>
            <div class="book-cover-author">${book.author}</div>
          </div>
          <span class="book-lang-badge">${book.langLabel}</span>
        </div>
        <div class="book-card-body">
          <div class="book-card-kdc">${book.kdc}</div>
          <h3 class="book-card-title">${book.title}</h3>
          <p class="book-card-author">${book.author} | ${book.publisher}</p>
          <div class="book-card-footer">
            <span class="book-price">₩${book.price.toLocaleString()}</span>
            <div style="display: flex; gap: 6px;">
              <button class="oasis-btn secondary sm btn-view-detail" data-id="${book.id}">
                <i class="fa-solid fa-eye"></i> 3D 상세
              </button>
              <button class="oasis-btn primary sm btn-add-cart" data-id="${book.id}">
                <i class="fa-solid fa-cart-plus"></i> 담기
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function attachBookCardListeners(container) {
    // Add to Cart
    container.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        addToCart(id);
      });
    });

    // View 3D Detail
    container.querySelectorAll('.btn-view-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        selectedDetailBookId = id;
        window.location.hash = '#detail';
      });
    });
  }

  // ==========================================================================
  // 10. CART & PROCUREMENT QUOTE CONTROLLER (#cart)
  // ==========================================================================
  function addToCart(bookId, qty = 1) {
    const existing = cartItems.find(item => item.book.id === bookId);
    if (existing) {
      existing.qty += qty;
    } else {
      const book = BOOKS_DATA.find(b => b.id === bookId);
      if (book) {
        cartItems.push({ book: book, qty: qty, selected: true });
      }
    }
    SoundEngine.playBellSound();
    updateCartBadge();
    renderCartPage();
  }

  function addPackageToCart(packageId) {
    if (packageId === "1") {
      addToCart("b1", 5);
      addToCart("b3", 5);
      addToCart("b4", 5);
      addToCart("b5", 5);
    } else if (packageId === "2") {
      addToCart("b2", 5);
      addToCart("b3", 5);
      addToCart("b8", 5);
    } else if (packageId === "3") {
      addToCart("b4", 10);
      addToCart("b5", 10);
      addToCart("b6", 10);
    } else if (packageId === "4") {
      BOOKS_DATA.forEach(b => addToCart(b.id, 5));
    }
    window.location.hash = '#cart';
  }

  function updateCartBadge() {
    const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const badge = document.getElementById('nav-cart-badge');
    if (badge) badge.innerText = totalCount;
  }

  function renderCartPage() {
    const tbody = document.getElementById('cart-table-body');
    const emptyMsg = document.getElementById('cart-empty-message');
    if (!tbody) return;

    if (cartItems.length === 0) {
      tbody.innerHTML = '';
      if (emptyMsg) emptyMsg.style.display = 'block';
    } else {
      if (emptyMsg) emptyMsg.style.display = 'none';

      tbody.innerHTML = cartItems.map((item, idx) => {
        const subtotal = item.book.price * item.qty;
        return `
          <tr>
            <td>
              <input type="checkbox" class="cart-item-select" data-idx="${idx}" ${item.selected ? 'checked' : ''}>
            </td>
            <td>
              <div class="cart-book-cell">
                <div class="cart-book-cover-sm">📖</div>
                <div>
                  <div class="cart-book-title">${item.book.title}</div>
                  <div class="cart-book-lang">${item.book.langLabel} | ${item.book.author}</div>
                </div>
              </div>
            </td>
            <td style="font-family: var(--font-mono); font-size: 12px;">
              <div>${item.book.kdc}</div>
              <div style="color: var(--text-light);">${item.book.isbn}</div>
            </td>
            <td style="font-family: var(--font-mono);">₩${item.book.price.toLocaleString()}</td>
            <td>
              <div class="qty-stepper">
                <button class="qty-btn btn-qty-minus" data-idx="${idx}">-</button>
                <input type="text" class="qty-input" value="${item.qty}" readonly>
                <button class="qty-btn btn-qty-plus" data-idx="${idx}">+</button>
              </div>
            </td>
            <td style="font-family: var(--font-mono); font-weight: 700; color: var(--primary-amber-dark);">
              ₩${subtotal.toLocaleString()}
            </td>
            <td>
              <button class="icon-btn btn-remove-item" data-idx="${idx}" title="삭제">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        `;
      }).join('');

      attachCartTableListeners();
    }

    updateCartTotals();
  }

  function attachCartTableListeners() {
    document.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        if (cartItems[idx].qty > 1) {
          cartItems[idx].qty--;
          updateCartBadge();
          renderCartPage();
        }
      });
    });

    document.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        cartItems[idx].qty++;
        updateCartBadge();
        renderCartPage();
      });
    });

    document.querySelectorAll('.btn-remove-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'));
        cartItems.splice(idx, 1);
        updateCartBadge();
        renderCartPage();
      });
    });

    document.querySelectorAll('.cart-item-select').forEach(chk => {
      chk.addEventListener('change', () => {
        const idx = parseInt(chk.getAttribute('data-idx'));
        cartItems[idx].selected = chk.checked;
        updateCartTotals();
      });
    });
  }

  function updateCartTotals() {
    const selectedItems = cartItems.filter(i => i.selected);
    const totalTitles = selectedItems.length;
    const totalQty = selectedItems.reduce((sum, i) => sum + i.qty, 0);
    const originalTotal = selectedItems.reduce((sum, i) => sum + (i.book.price * i.qty), 0);

    const discountAmount = Math.round(originalTotal * 0.10); // 10% librarian discount
    const finalTotal = originalTotal - discountAmount;

    document.getElementById('sum-items-count').innerText = `${totalTitles}종 (${totalQty}권)`;
    document.getElementById('sum-original-total').innerText = `₩${originalTotal.toLocaleString()}`;
    document.getElementById('sum-discount-total').innerText = `-₩${discountAmount.toLocaleString()}`;
    document.getElementById('sum-final-total').innerText = `₩${finalTotal.toLocaleString()}`;
  }

  // Official Quote Printable Modal
  function generateOfficialQuote() {
    const selectedItems = cartItems.filter(i => i.selected);
    if (selectedItems.length === 0) {
      alert("공문 견적서를 생성할 수서 도서를 장바구니에서 선택해 주세요.");
      return;
    }

    const modal = document.getElementById('quote-modal');
    const tableBody = document.getElementById('quote-table-body');
    if (!modal || !tableBody) return;

    let originalSum = 0;
    let finalSum = 0;
    let qtySum = 0;

    tableBody.innerHTML = selectedItems.map((item, idx) => {
      const origSub = item.book.price * item.qty;
      const finalSub = Math.round(origSub * 0.90);
      originalSum += origSub;
      finalSum += finalSub;
      qtySum += item.qty;

      return `
        <tr>
          <td>${idx + 1}</td>
          <td style="font-family: var(--font-mono);">${item.book.isbn}</td>
          <td style="text-align: left;"><strong>${item.book.title}</strong></td>
          <td>${item.book.lang}</td>
          <td>${item.book.author}</td>
          <td>${item.book.publisher}</td>
          <td>${item.qty}</td>
          <td>₩${item.book.price.toLocaleString()}</td>
          <td class="highlight-price">₩${finalSub.toLocaleString()}</td>
        </tr>
      `;
    }).join('');

    document.getElementById('quote-total-qty').innerText = `${qtySum}권`;
    document.getElementById('quote-total-original').innerText = `₩${originalSum.toLocaleString()}`;
    document.getElementById('quote-total-final').innerText = `₩${finalSum.toLocaleString()}`;

    // Draw Seal Stamp Graphic
    drawSealStamp();

    modal.style.display = 'flex';
  }

  function drawSealStamp() {
    const canvas = document.getElementById('sealCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 70, 70);

    // Red seal circle
    ctx.strokeStyle = '#c00';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(35, 35, 30, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#c00';
    ctx.font = 'bold 11px Noto Serif KR';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('오아시스', 35, 26);
    ctx.fillText('도서인', 35, 44);
  }

  function exportCSV() {
    const selectedItems = cartItems.filter(i => i.selected);
    if (selectedItems.length === 0) {
      alert("다운로드할 수서 도서를 선택해 주세요.");
      return;
    }

    let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
    csvContent += "ISBN-13,KDC,Title,Language,Author,Publisher,Price,Quantity,Subtotal\n";

    selectedItems.forEach(i => {
      const subtotal = i.book.price * i.qty;
      csvContent += `"${i.book.isbn}","${i.book.kdc}","${i.book.title}","${i.book.lang}","${i.book.author}","${i.book.publisher}",${i.book.price},${i.qty},${subtotal}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `OASIS_Procurement_Quote_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ==========================================================================
  // 11. DETAIL PAGE RENDERER (#detail)
  // ==========================================================================
  function renderDetailPage(bookId) {
    const book = BOOKS_DATA.find(b => b.id === bookId) || BOOKS_DATA[0];

    document.getElementById('detail-title').innerText = book.title;
    document.getElementById('detail-original-title').innerText = book.originalTitle;
    document.getElementById('detail-author').innerText = book.author;
    document.getElementById('detail-publisher').innerText = book.publisher;
    document.getElementById('detail-isbn').innerText = book.isbn;
    document.getElementById('detail-kdc').innerText = book.kdc;
    document.getElementById('detail-age').innerText = book.ageLabel;
    document.getElementById('detail-price').innerText = `₩${book.price.toLocaleString()}`;
    document.getElementById('detail-desc-text').innerText = book.desc;

    // Tags
    const tagsContainer = document.getElementById('detail-tags');
    if (tagsContainer) {
      tagsContainer.innerHTML = `
        <span class="badge-tag">${book.langLabel}</span>
        <span class="badge-tag" style="background: var(--bg-sand); color: var(--primary-amber-dark);">${book.ageLabel}</span>
      `;
    }

    // Update 3D Book Color
    Book3DEngine.updateBookColor(book.color);

    // Audio sample button setup
    const playAudioBtn = document.getElementById('play-audio-sample-btn');
    if (playAudioBtn) {
      playAudioBtn.onclick = () => {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(book.audioText);
          utterance.rate = 0.9;
          window.speechSynthesis.speak(utterance);
        } else {
          SoundEngine.playBellSound();
        }
      };
    }

    // Detail Add to Cart Button setup
    const detailAddBtn = document.getElementById('detail-add-cart-btn');
    if (detailAddBtn) {
      detailAddBtn.onclick = () => addToCart(book.id, 1);
    }
  }

  // ==========================================================================
  // 12. INITIALIZATION & EVENT BINDINGS
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Engines
    RippleEngine.init();
    OasisEngine.init();
    Book3DEngine.init();

    // 2. Initialize Hash Router
    initRouter();

    // 3. Render Initial Datasets
    renderFeaturedHomeBooks();
    renderSearchPage();

    // 4. Global Event Bindings
    // Language Switcher
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
      });
    }

    // Sound Toggle Button
    const soundToggleBtn = document.getElementById('sound-toggle-btn');
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        isSoundEnabled = !isSoundEnabled;
        const icon = document.getElementById('sound-icon');
        if (icon) {
          icon.className = isSoundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
        }
      });
    }

    // Search Input listeners
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        filterState.keyword = e.target.value;
        renderSearchPage();
      });
    }

    const searchClearBtn = document.getElementById('search-clear-btn');
    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        filterState.keyword = '';
        renderSearchPage();
      });
    }

    // Language Chips
    document.querySelectorAll('#lang-chips .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('#lang-chips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        filterState.lang = chip.getAttribute('data-lang');
        renderSearchPage();
      });
    });

    // Select Filters
    const ageSelect = document.getElementById('filter-age');
    if (ageSelect) {
      ageSelect.addEventListener('change', (e) => {
        filterState.age = e.target.value;
        renderSearchPage();
      });
    }

    const kdcSelect = document.getElementById('filter-kdc');
    if (kdcSelect) {
      kdcSelect.addEventListener('change', (e) => {
        filterState.kdc = e.target.value;
        renderSearchPage();
      });
    }

    const pubSelect = document.getElementById('filter-publisher');
    if (pubSelect) {
      pubSelect.addEventListener('change', (e) => {
        filterState.publisher = e.target.value;
        renderSearchPage();
      });
    }

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        filterState.sort = e.target.value;
        renderSearchPage();
      });
    }

    // View Toggle
    const btnGrid = document.getElementById('btn-view-grid');
    const btnList = document.getElementById('btn-view-list');
    if (btnGrid && btnList) {
      btnGrid.addEventListener('click', () => {
        searchViewMode = 'grid';
        btnGrid.classList.add('active');
        btnList.classList.remove('active');
        renderSearchPage();
      });
      btnList.addEventListener('click', () => {
        searchViewMode = 'list';
        btnList.classList.add('active');
        btnGrid.classList.remove('active');
        renderSearchPage();
      });
    }

    // Package Add Buttons
    document.querySelectorAll('.add-package-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pkgId = btn.getAttribute('data-package');
        addPackageToCart(pkgId);
      });
    });

    // Cart Page Action Buttons
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', () => {
        cartItems = [];
        updateCartBadge();
        renderCartPage();
      });
    }

    const genQuoteBtn = document.getElementById('generate-quote-btn');
    if (genQuoteBtn) {
      genQuoteBtn.addEventListener('click', generateOfficialQuote);
    }

    const exportExcelBtn = document.getElementById('export-excel-btn');
    if (exportExcelBtn) {
      exportExcelBtn.addEventListener('click', exportCSV);
    }

    // Modal Close Buttons
    const closeQuoteBtn = document.getElementById('close-quote-modal');
    const cancelQuoteBtn = document.getElementById('cancel-quote-modal');
    if (closeQuoteBtn) {
      closeQuoteBtn.addEventListener('click', () => {
        document.getElementById('quote-modal').style.display = 'none';
      });
    }
    if (cancelQuoteBtn) {
      cancelQuoteBtn.addEventListener('click', () => {
        document.getElementById('quote-modal').style.display = 'none';
      });
    }

    const printQuoteBtn = document.getElementById('print-quote-btn');
    if (printQuoteBtn) {
      printQuoteBtn.addEventListener('click', () => {
        // Sync input fields for printing
        const libInp = document.getElementById('input-client-lib');
        const nameInp = document.getElementById('input-client-name');
        if (libInp) document.getElementById('print-client-lib').innerText = libInp.value;
        if (nameInp) document.getElementById('print-client-name').innerText = nameInp.value;

        window.print();
      });
    }
  });

})();

