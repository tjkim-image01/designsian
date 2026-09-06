/* ==========================================================================
   Royal Golden Velvet & Midnight Observatory (Web v21)
   Main Application Architecture (SPA Logic, Three.js 3D, Web Audio, i18n, Quote)
   ========================================================================== */

// Global Application State
const AppState = {
  currentLang: 'KO',
  soundEnabled: true,
  currentRoute: 'home',
  selectedBookId: 'b01',
  cart: [
    { bookId: 'b01', qty: 2 },
    { bookId: 'b03', qty: 5 },
    { bookId: 'b07', qty: 3 }
  ],
  selectedSearchIds: new Set(),
  searchFilters: {
    text: '',
    lang: 'ALL',
    age: 'ALL',
    kdc: 'ALL',
    binding: 'ALL',
    sort: 'RECOMMEND'
  }
};

// --------------------------------------------------------------------------
// 1. Multicultural Book Catalog Dataset (18+ Rich Items across 5 Languages)
// --------------------------------------------------------------------------
const BOOKS = [
  {
    id: 'b01',
    title: '토지 (24K Gold-Leaf Special Edition)',
    titleEn: 'Land - Classic Korean Epic Novel',
    author: '박경리 (Park Kyung-ni)',
    translator: '로열 수서 번역위원회',
    publisher: '다문화도서출판',
    lang: 'KO',
    isbn: '978-89-01-28391-4',
    kdc: '813.7',
    kdcName: '813.7 (한국현대소설)',
    age: '전연령',
    price: 35000,
    pubYear: 2026,
    pages: 540,
    binding: '24K 금박 양장본',
    isGoldEdition: true,
    isFeatured: true,
    coverBg: '#2e1a47',
    summary: '한국 현대문학의 위대한 유산. 구한말부터 일제강점기까지 하동 평사리를 배경으로 다채로운 인간군상의 삶과 역사를 깊이있게 조명한 대하소설.',
    librarianNote: '다문화 가구 및 글로벌 입문자를 위한 필수 한국 현대문학 대표작. 24K 최고급 양장 제본으로 영구 보존용 특수 수서 서목으로 강력 추천함.'
  },
  {
    id: 'b02',
    title: 'Truyện Kiều (The Tale of Kieu - Gold Edition)',
    titleEn: 'The Tale of Kieu - Vietnamese Masterpiece',
    author: 'Nguyễn Du (응우옌 두)',
    translator: '안경환 옮김',
    publisher: '하노이 외국어출판사',
    lang: 'VI',
    isbn: '978-604-1-18290-1',
    kdc: '843',
    kdcName: '843 (베트남문학)',
    age: '성인',
    price: 28000,
    pubYear: 2025,
    pages: 420,
    binding: '24K 금박 양장본',
    isGoldEdition: true,
    isFeatured: true,
    coverBg: '#0d2818',
    summary: '베트남의 국민 시인이자 유네스코 세계 문화 인물 응우옌 두의 대서사시. 아름다운 기생 키에우의 수난과 사랑을 그린 베트남 문학의 최고 금자탑.',
    librarianNote: '국내 베트남 다문화 주민과 사서를 위한 최고 인기도서. 고급 금박 하드커버 제본으로 보존 가치 매우 높음.'
  },
  {
    id: 'b03',
    title: 'Le Petit Prince (어린 왕자 프랑스어 양장본)',
    titleEn: 'The Little Prince - French Luxury Illustrated Edition',
    author: 'Antoine de Saint-Exupéry',
    translator: '원서 (French Unabridged)',
    publisher: 'Gallimard / Royal Press',
    lang: 'FR',
    isbn: '978-207-0-61275-8',
    kdc: '863',
    kdcName: '863 (프랑스 소설)',
    age: '전연령',
    price: 32000,
    pubYear: 2026,
    pages: 160,
    binding: '24K 금박 양장본',
    isGoldEdition: true,
    isFeatured: true,
    coverBg: '#1a243a',
    summary: '사막에 불시착한 조종사와 다른 별에서 온 어린 왕자의 순수한 우정과 삶의 진리를 담은 전 세계인의 영원한 명작.',
    librarianNote: '프랑스어 다문화 컬렉션 필수 1순위 도서. 원화 일러스트 수록 고급 판본으로 공공도서관 수서 필수.'
  },
  {
    id: 'b04',
    title: '紅樓夢 (Dream of the Red Chamber - 4Vol Box Set)',
    titleEn: 'Dream of the Red Chamber - Chinese Classic',
    author: '曹雪芹 (Cao Xueqin)',
    translator: '원서 (Chinese Classic)',
    publisher: '인민문학출판사',
    lang: 'ZH',
    isbn: '978-702-0-00873-4',
    kdc: '892.7',
    kdcName: '892.7 (중국 고전문학)',
    age: '성인',
    price: 85000,
    pubYear: 2025,
    pages: 1480,
    binding: '24K 금박 양장본',
    isGoldEdition: true,
    isFeatured: true,
    coverBg: '#3a0e14',
    summary: '중국 4대 고전 명작 중 으뜸. 가보옥과 임대옥의 비극적 사랑과 청나라 가문의 흥망성쇠를 섬세하게 묘사한 백미.',
    librarianNote: '중국어권 다문화 가구 및 학술 연구용 최고급 보존본. 금박 양장 4권 세트 구성.'
  },
  {
    id: 'b05',
    title: 'To Kill a Mockingbird (앵무새 죽이기 양장본)',
    titleEn: 'To Kill a Mockingbird - English Masterpiece',
    author: 'Harper Lee',
    translator: '원서 (English Edition)',
    publisher: 'HarperCollins',
    lang: 'EN',
    isbn: '978-006-1-12008-4',
    kdc: '823',
    kdcName: '823 (영미소설)',
    age: '청소년',
    price: 26000,
    pubYear: 2025,
    pages: 384,
    binding: '일반 양장본',
    isGoldEdition: false,
    isFeatured: true,
    coverBg: '#2d240d',
    summary: '미국 문학의 불후의 명작. 1930년대 미국 남부 시골 마을을 배경으로 편견과 인종차별에 맞서는 정의와 양심을 그린 작품.',
    librarianNote: '청소년 및 다문화 영어 도서관 필수 수서 목록. 퓰리처상 수상작.'
  },
  {
    id: 'b06',
    title: '세계 다문화 전통 일러스트 동화집 (5개국어 병기)',
    titleEn: 'Global Multicultural Illustrated Fairy Tales',
    author: '다문화교육연구회 편저',
    translator: '5개국어 공동 번역',
    publisher: '글로벌아동문화원',
    lang: 'KO',
    isbn: '978-89-94-11029-3',
    kdc: '379.2',
    kdcName: '379.2 (다문화교육)',
    age: '유아/아동',
    price: 29000,
    pubYear: 2026,
    pages: 220,
    binding: '24K 금박 양장본',
    isGoldEdition: true,
    isFeatured: false,
    coverBg: '#2e1a47',
    summary: '한국, 베트남, 중국, 필리핀, 프랑스의 대표 전래동화를 5개 국어 다국어 텍스트와 금빛 일러스트로 한 권에 담은 도서.',
    librarianNote: '어린이 다문화 도서관 및 초등학교 다문화 교실 수서 1위 도서.'
  },
  {
    id: 'b07',
    title: 'Dế Mèn Phiêu Lưu Ký (시골 귀뚜라미의 모험)',
    titleEn: 'Adventures of a Cricket - Vietnamese Classic',
    author: 'Tô Hoài (토 호아이)',
    translator: '베트남 아동문학회',
    publisher: 'Kim Đồng Publishing',
    lang: 'VI',
    isbn: '978-604-2-08112-9',
    kdc: '843',
    kdcName: '843 (베트남문학)',
    age: '유아/아동',
    price: 21000,
    pubYear: 2025,
    pages: 180,
    binding: '일반 양장본',
    isGoldEdition: false,
    isFeatured: false,
    coverBg: '#0d2818',
    summary: '베트남의 국민 어린이 동화. 젊고 교만한 귀뚜라미가 세상으로 모험을 떠나 시련을 겪으며 우정과 평화의 소중함을 깨닫는 이야기.',
    librarianNote: '베트남 어린이 및 부모가 가장 선호하는 동화. 완역본.'
  },
  {
    id: 'b08',
    title: 'Les Misérables (레 미제라블 원서 24K 하드커버)',
    titleEn: 'Les Misérables - French Masterpiece',
    author: 'Victor Hugo',
    translator: '원서 (French Original)',
    publisher: 'Éditions Gallimard',
    lang: 'FR',
    isbn: '978-207-0-40918-1',
    kdc: '863',
    kdcName: '863 (프랑스 소설)',
    age: '성인',
    price: 45000,
    pubYear: 2026,
    pages: 980,
    binding: '24K 금박 양장본',
    isGoldEdition: true,
    isFeatured: true,
    coverBg: '#1a243a',
    summary: '빅토르 위고의 대작. 빵 한 조각을 훔친 죄로 19년 동안 감옥에 갇혔던 장발장의 구원과 사랑, 프랑스 혁명의 서사시.',
    librarianNote: '프랑스 문학 대표 대작. 학술 및 대학 도서관용 양장 서목.'
  },
  {
    id: 'b09',
    title: '西游记 (Journey to the West - Illustrated Edition)',
    titleEn: 'Journey to the West - Chinese Classical Epic',
    author: '吴承恩 (Wu Cheng\'en)',
    translator: '중국고전번역원',
    publisher: '외문출판사',
    lang: 'ZH',
    isbn: '978-711-9-04183-5',
    kdc: '892.7',
    kdcName: '892.7 (중국 고전문학)',
    age: '전연령',
    price: 38000,
    pubYear: 2025,
    pages: 620,
    binding: '24K 금박 양장본',
    isGoldEdition: true,
    isFeatured: false,
    coverBg: '#3a0e14',
    summary: '삼장법사, 손오공, 저팔계, 사오정이 서역으로 불경을 구하러 떠나며 펼쳐지는 81가지 시련과 신비로운 모험담.',
    librarianNote: '동아시아 다문화 문화 이해를 위한 최고 전연령 추천 도서.'
  },
  {
    id: 'b10',
    title: 'The Great Gatsby (위대한 개츠비 24K 양장본)',
    titleEn: 'The Great Gatsby - English Leatherbound Edition',
    author: 'F. Scott Fitzgerald',
    translator: '원서 (English Classic)',
    publisher: 'Scribner Luxury Press',
    lang: 'EN',
    isbn: '978-074-3-27356-5',
    kdc: '823',
    kdcName: '823 (영미소설)',
    age: '성인',
    price: 27000,
    pubYear: 2026,
    pages: 240,
    binding: '24K 금박 양장본',
    isGoldEdition: true,
    isFeatured: false,
    coverBg: '#2d240d',
    summary: '1920년대 미국의 풍요와 낭만, 그리고 잃어버린 아메리칸 드림을 감각적이고 아름다운 문체로 그려낸 문학적 명작.',
    librarianNote: '영미 문학 코너 필수 비치 도서. 24K 고급 금박 바인딩.'
  }
];

// --------------------------------------------------------------------------
// 2. Curation Packages Dataset
// --------------------------------------------------------------------------
const CURATIONS = [
  {
    id: 'c01',
    title: '세계 다문화 문학 거장 24K 양장 컬렉션 (20권 세트)',
    tag: 'ROYAL MASTERPIECE BUNDLE',
    languages: 'KO, EN, VI, ZH, FR',
    kdcCoverage: '800 (문학), 900 (역사)',
    totalBooks: 20,
    origPrice: 650000,
    discountPrice: 585000,
    summary: '한국, 베트남, 프랑스, 중국, 영미권의 세계적 문학 거장 대표작만을 엄선하여 24K 금박 양장본으로 구성한 도서관 보존용 최고급 기획전.',
    bookIds: ['b01', 'b02', 'b03', 'b04', 'b05', 'b08', 'b09']
  },
  {
    id: 'c02',
    title: '글로벌 다문화 아동/청소년 일러스트 필독서 세트 (35권)',
    tag: 'MULTICULTURAL YOUTH BUNDLE',
    languages: 'KO, VI, ZH, EN',
    kdcCoverage: '300 (사회과학), 800 (문학)',
    totalBooks: 35,
    origPrice: 720000,
    discountPrice: 648000,
    summary: '어린이 도서관 및 다문화 센터를 위한 각국의 전통 동화, 일러스트 명작, 다국어 아동 도서 모음집.',
    bookIds: ['b06', 'b07', 'b03', 'b09']
  },
  {
    id: 'c03',
    title: '유럽 명작 & 사서 추천 프리미엄 예술 원서 컬렉션 (15권)',
    tag: 'EUROPEAN CLASSICS BUNDLE',
    languages: 'FR, EN',
    kdcCoverage: '600 (예술), 800 (문학)',
    totalBooks: 15,
    origPrice: 480000,
    discountPrice: 432000,
    summary: '프랑스 및 영미권 명작 원서와 예술 양장본으로 구성된 고급 연구/전문 학술 정보관 전용 컬렉션.',
    bookIds: ['b03', 'b05', 'b08', 'b10']
  },
  {
    id: 'c04',
    title: '동남아 및 동아시아 대표 전통 한중일/베트남 컬렉션 (25권)',
    tag: 'EAST ASIAN HERITAGE BUNDLE',
    languages: 'VI, ZH, KO',
    kdcCoverage: '800 (문학), 900 (역사)',
    totalBooks: 25,
    origPrice: 590000,
    discountPrice: 531000,
    summary: '베트남, 중국, 한국의 유서 깊은 전통 고전과 현대 문학 대표작을 망라한 국립 다문화 도서관 특화 패키지.',
    bookIds: ['b01', 'b02', 'b04', 'b07', 'b09']
  }
];

// --------------------------------------------------------------------------
// 3. i18n Translations Dictionary (KO, EN, VI, ZH, FR)
// --------------------------------------------------------------------------
const I18N = {
  KO: {
    navSub: '다문화도서관 수서 파빌리온',
    navHome: '천구관 (홈)',
    navSearch: '도서 검색 & 수서',
    navCuration: '황금 큐레이션',
    navCart: '공문 견적함',
    heroBadge: 'ROYAL B2B PROCUREMENT PORTAL',
    heroTitle: 'Royal Golden Velvet &\nMidnight Observatory',
    heroDesc: '전 세계 5개국 언어 최고급 명작 수서 서집 컬렉션. 사서 수서/구입 담당자를 위한 24K 천구의 궤도속 로열 수서 솔루션.',
    heroCtaSearch: '수서 도서 검색하기',
    heroCtaCuration: '황금 큐레이션 기획전',
    statBooks: '보유 다문화 서목',
    statLangs: 'KO / EN / VI / ZH / FR',
    statQuote: '공문 견적서 & KOLAS 엑셀',
    galleryTag: 'EXHIBITION PAVILION',
    galleryTitle: '3D Golden Velvet Gallery Exhibition',
    gallerySub: '벨벳 전시 받침대 위 3D 회전하는 프리미엄 다문화 대표 양장본 서집관',
    newTag: 'RECENT ARRIVALS & SELECTIONS',
    newTitle: '신간 및 추천 수서 목록',
    btnViewAll: '전체 도서 보기',
    searchTag: 'LIBRARIAN SEARCH & PROCUREMENT',
    searchTitle: '도서 검색 & 수서 통합 검색관',
    searchSub: '언어, KDC 분류기호, ISBN, 출판사, 연령대별 실시간 사서 맞춤 수서 필터링',
    searchPh: '도서명, 저자, 출판사, ISBN, KDC 코드로 검색...',
    btnSearch: '검색',
    filterLang: '언어 (Language):',
    filterAll: '전체 (ALL)',
    filterAge: '대상 연령 (Age):',
    filterKdc: 'KDC 분류기호:',
    filterBinding: '제본/에디션 (Edition):',
    filterSort: '정렬 (Sort):',
    searchResult: '검색 결과',
    itemsCount: '건',
    btnSelectAll: '전체 선택',
    btnBulkCart: '선택 항목 장바구니 담기',
    curationTag: '3D GOLDEN CURATION PACKAGES',
    curationTitle: '특집 3D 황금 큐레이션 기획전',
    curationSub: '도서관 사서 및 수서 담당자를 위해 엄선된 주제별/언어별 프리미엄 맞춤 수서 패키지',
    cartTag: 'ROYAL LIBRARIAN BULK ORDER & QUOTE',
    cartTitle: '사서 공문 견적함 & 수서 신청',
    btnClearCart: '견적함 비우기',
    thInfo: '도서 서지 정보',
    thKdc: 'KDC 분류',
    thPrice: '정가',
    thQty: '수량',
    thTotal: '합계 금액',
    thAction: '관리',
    cartEmptyTitle: '공문 견적함이 비어있습니다.',
    cartEmptySub: '도서 검색 또는 큐레이션관에서 수서할 도서를 담아주세요.',
    btnGoSearch: '도서 검색하러 가기',
    summaryTitle: '기관 수서 정보 입력',
    labelOrg: '기관/도서관명 *',
    labelOfficer: '담당 사서 성명 *',
    labelContact: '연락처 및 이메일 *',
    labelPurpose: '수서 목적 및 예산 항목 *',
    costItemCount: '선택 도서 종수:',
    costTotalQty: '총 수서 수량:',
    costSubtotal: '도서 정가 총액:',
    costDiscount: '기관 납품 할인가 (10%):',
    costGrandTotal: '최종 납품 예정가:',
    btnPdfQuote: '1클릭 로열 골드 직인 공문 견적서',
    btnExcelExport: 'KOLAS 연동 엑셀/CSV 명세서 다운로드',
    btnBackList: '목록으로 돌아가기',
    detailCanvasHint: '마우스 드래그로 360도 회전 및 3D 금박 양장 질감 확인',
    btnOpenBook: '책 펼쳐보기',
    btnResetView: '시점 초기화',
    detailPriceLabel: '기관 납품 수서가',
    specIsbn: 'ISBN-13',
    specKdc: 'KDC 분류기호',
    specPublisher: '출판사',
    specPubYear: '발행년도',
    specPages: '페이지 수',
    btnAddCart: '공문 견적함에 담기',
    librarianNoteTitle: '사서 추천 및 수서 가치 평가 (Procurement Value)',
    summaryHeading: '서지 줄거리 및 설명'
  },
  EN: {
    navSub: 'Multicultural Library Procurement Pavilion',
    navHome: 'Observatory (Home)',
    navSearch: 'Search & Procurement',
    navCuration: 'Golden Curation',
    navCart: 'Official Quote Cart',
    heroBadge: 'ROYAL B2B PROCUREMENT PORTAL',
    heroTitle: 'Royal Golden Velvet &\nMidnight Observatory',
    heroDesc: 'Premium multicultural book collection across 5 global languages. 24K celestial orbit procurement solution for professional librarians.',
    heroCtaSearch: 'Search Book Catalog',
    heroCtaCuration: 'Golden Curations',
    statBooks: 'Curated Titles',
    statLangs: 'KO / EN / VI / ZH / FR',
    statQuote: '1-Click PDF & Excel Quote',
    galleryTag: 'EXHIBITION PAVILION',
    galleryTitle: '3D Golden Velvet Gallery Exhibition',
    gallerySub: 'Interactive 3D leatherbound masterpieces displayed on luxury velvet pedestals.',
    newTag: 'RECENT ARRIVALS & SELECTIONS',
    newTitle: 'New Releases & Featured Procurement Books',
    btnViewAll: 'View All Catalog',
    searchTag: 'LIBRARIAN SEARCH & PROCUREMENT',
    searchTitle: 'Integrated Library Procurement Search',
    searchSub: 'Filter in real time by language, KDC classification code, ISBN, publisher, and target age.',
    searchPh: 'Search by Title, Author, Publisher, ISBN, KDC...',
    btnSearch: 'Search',
    filterLang: 'Language:',
    filterAll: 'ALL',
    filterAge: 'Target Age:',
    filterKdc: 'KDC Classification:',
    filterBinding: 'Binding Edition:',
    filterSort: 'Sort By:',
    searchResult: 'Search Results',
    itemsCount: 'items',
    btnSelectAll: 'Select All',
    btnBulkCart: 'Add Selected to Cart',
    curationTag: '3D GOLDEN CURATION PACKAGES',
    curationTitle: 'Special 3D Golden Curation Bundles',
    curationSub: 'Curated institutional bundles specifically assembled for multicultural library procurement.',
    cartTag: 'ROYAL LIBRARIAN BULK ORDER & QUOTE',
    cartTitle: 'Librarian Official Quote & Cart',
    btnClearCart: 'Clear Cart',
    thInfo: 'Bibliographic Info',
    thKdc: 'KDC Code',
    thPrice: 'List Price',
    thQty: 'Qty',
    thTotal: 'Total',
    thAction: 'Action',
    cartEmptyTitle: 'Your Quote Cart is empty.',
    cartEmptySub: 'Please browse the catalog or curations to add items.',
    btnGoSearch: 'Go to Book Search',
    summaryTitle: 'Institution Procurement Meta',
    labelOrg: 'Institution / Library Name *',
    labelOfficer: 'Librarian Officer Name *',
    labelContact: 'Contact & Email *',
    labelPurpose: 'Procurement Purpose / Budget *',
    costItemCount: 'Selected Titles:',
    costTotalQty: 'Total Quantity:',
    costSubtotal: 'Catalog Subtotal:',
    costDiscount: 'Institutional Discount (10%):',
    costGrandTotal: 'Final Total Amount:',
    btnPdfQuote: '1-Click Royal Gold Official PDF Quote',
    btnExcelExport: 'Export KOLAS CSV/Excel Metadata',
    btnBackList: 'Back to Catalog',
    detailCanvasHint: 'Drag mouse to rotate 360° and inspect 3D gold-leaf leather texture',
    btnOpenBook: 'Open Book View',
    btnResetView: 'Reset Camera View',
    detailPriceLabel: 'Institutional Supply Price',
    specIsbn: 'ISBN-13',
    specKdc: 'KDC Classification',
    specPublisher: 'Publisher',
    specPubYear: 'Publication Year',
    specPages: 'Total Pages',
    btnAddCart: 'Add to Procurement Cart',
    librarianNoteTitle: 'Librarian Review & Procurement Evaluation',
    summaryHeading: 'Bibliographic Summary & Synopsis'
  },
  VI: {
    navSub: 'Gian Hàng Thu Mua Sách Đa Văn Hóa Royal',
    navHome: 'Trang Chủ Observatory',
    navSearch: 'Tìm Kiếm & Thu Mua',
    navCuration: 'Bộ Sưu Tập Vàng',
    navCart: 'Giỏ Báo Giá Công Văn',
    heroBadge: 'CỔNG THU MUA B2B DÀNH CHO THƯ VIỆN',
    heroTitle: 'Royal Golden Velvet &\nMidnight Observatory',
    heroDesc: 'Bộ sưu tập sách đa văn hóa cao cấp 5 ngôn ngữ. Giải pháp thu mua sách hoàng gia 24K dành cho thủ thư.',
    heroCtaSearch: 'Tìm Kiếm Sách',
    heroCtaCuration: 'Bộ Sưu Tập Vàng',
    statBooks: 'Hơn 5,400 Đầu Sách',
    statLangs: 'KO / EN / VI / ZH / FR',
    statQuote: 'Tạo Báo Giá PDF & Excel 1 Click',
    galleryTag: 'GIAN HÀNG TRIỂN LÃM 3D',
    galleryTitle: 'Triển Lãm 3D Golden Velvet Gallery',
    gallerySub: 'Xem xoay 3D các tác phẩm kinh điển bọc da mạ vàng 24K trên bệ nhung sang trọng.',
    newTag: 'SÁCH MỚI & ĐỀ XUẤT',
    newTitle: 'Danh Sách Sách Mới & Đề Xuất Thu Mua',
    btnViewAll: 'Xem Tất Cả Sách',
    searchTag: 'TÌM KIẾM & THU MUA DÀNH CHO THỦ THƯ',
    searchTitle: 'Cổng Tìm Kiếm Thu Mua Tích Hợp',
    searchSub: 'Lọc thời gian thực theo ngôn ngữ, mã phân loại KDC, ISBN, nhà xuất bản.',
    searchPh: 'Tìm theo tên sách, tác giả, NXB, ISBN, KDC...',
    btnSearch: 'Tìm Kiếm',
    filterLang: 'Ngôn Ngữ:',
    filterAll: 'Tất Cả',
    filterAge: 'Lứa Tuổi:',
    filterKdc: 'Mã KDC:',
    filterBinding: 'Đóng Sách:',
    filterSort: 'Sắp Xếp:',
    searchResult: 'Kết Quả Tìm Kiếm',
    itemsCount: 'mục',
    btnSelectAll: 'Chọn Tất Cả',
    btnBulkCart: 'Thêm Mục Đã Chọn Vào Giỏ',
    curationTag: 'GÓI BỘ SƯU TẬP 3D HOÀNG GIA',
    curationTitle: 'Các Gói Bộ Sưu Tập Vàng 3D',
    curationSub: 'Các gói sách được tuyển chọn đặc biệt dành cho thư viện đa văn hóa.',
    cartTag: 'GIỎ BÁO GIÁ CÔNG VĂN THỦ THƯ',
    cartTitle: 'Giỏ Báo Giá & Đăng Ký Thu Mua',
    btnClearCart: 'Xóa Giỏ Sách',
    thInfo: 'Thông Tin Thư Mục',
    thKdc: 'Mã KDC',
    thPrice: 'Giá Niêm Yết',
    thQty: 'Số Lượng',
    thTotal: 'Thành Tiền',
    thAction: 'Thao Tác',
    cartEmptyTitle: 'Giỏ Báo Giá Đang Trống.',
    cartEmptySub: 'Vui lòng chọn sách từ trang tìm kiếm hoặc bộ sưu tập.',
    btnGoSearch: 'Đến Trang Tìm Sách',
    summaryTitle: 'Thông Tin Cơ Quan Thu Mua',
    labelOrg: 'Tên Thư Viện / Cơ Quan *',
    labelOfficer: 'Họ Tên Thủ Thư *',
    labelContact: 'Liên Hệ & Email *',
    labelPurpose: 'Mục Đích / Ngân Sách *',
    costItemCount: 'Số Đầu Sách:',
    costTotalQty: 'Tổng Số Lượng:',
    costSubtotal: 'Tổng Giá Bìa:',
    costDiscount: 'Chiết Khấu Thư Viện (10%):',
    costGrandTotal: 'Tổng Thanh Toán:',
    btnPdfQuote: 'Tạo Báo Giá PDF Công Văn 1 Click',
    btnExcelExport: 'Tải Xuất File Excel/CSV KOLAS',
    btnBackList: 'Quay Lại Danh Sách',
    detailCanvasHint: 'Kéo chuột để xoay 360° và xem chất liệu bìa da mạ vàng 3D',
    btnOpenBook: 'Mở Sách Xem',
    btnResetView: 'Đặt Lại Góc Nhìn',
    detailPriceLabel: 'Giá Cung Cấp Thư Viện',
    specIsbn: 'ISBN-13',
    specKdc: 'Phân Loại KDC',
    specPublisher: 'Nhà Xuất Bản',
    specPubYear: 'Năm Xuất Bản',
    specPages: 'Số Trang',
    btnAddCart: 'Thêm Vào Giỏ Báo Giá',
    librarianNoteTitle: 'Đánh Giá & Đề Xuất Của Thủ Thư',
    summaryHeading: 'Tóm Tắt Nội Dung Sách'
  },
  ZH: {
    navSub: '皇家多元文化图书馆采编馆',
    navHome: '天球馆 (首页)',
    navSearch: '图书检索与采编',
    navCuration: '黄金策展馆',
    navCart: '公文报价函',
    heroBadge: 'ROYAL B2B PROCUREMENT PORTAL',
    heroTitle: 'Royal Golden Velvet &\nMidnight Observatory',
    heroDesc: '涵盖全球5种语言的高级典藏图书与采编解决方案。专为馆员打造的24K天球轨迹采编系统。',
    heroCtaSearch: '检索采编图书',
    heroCtaCuration: '黄金特展',
    statBooks: '5,400+ 馆藏书目',
    statLangs: 'KO / EN / VI / ZH / FR',
    statQuote: '一键生成PDF公文与KOLAS表格',
    galleryTag: 'EXHIBITION PAVILION',
    galleryTitle: '3D Golden Velvet Gallery Exhibition',
    gallerySub: '在奢华天鹅绒展台上3D立体展示全球经典烫金精装典藏书目。',
    newTag: 'RECENT ARRIVALS & SELECTIONS',
    newTitle: '新书与推荐采编书目',
    btnViewAll: '查看全部书目',
    searchTag: 'LIBRARIAN SEARCH & PROCUREMENT',
    searchTitle: '图书检索与采编综合馆',
    searchSub: '实时按语种、KDC分类号、ISBN、出版商及适用年龄精确筛选。',
    searchPh: '按书名、作者、出版商、ISBN、KDC编码检索...',
    btnSearch: '检索',
    filterLang: '语种 (Language):',
    filterAll: '全部 (ALL)',
    filterAge: '适用年龄:',
    filterKdc: 'KDC分类号:',
    filterBinding: '装帧/版本:',
    filterSort: '排序方式:',
    searchResult: '检索结果',
    itemsCount: '册',
    btnSelectAll: '全选',
    btnBulkCart: '将选中项加入采编函',
    curationTag: '3D GOLDEN CURATION PACKAGES',
    curationTitle: '3D黄金主题策展包',
    curationSub: '专为多元文化图书馆及学术机构量身定制的主题采编套装。',
    cartTag: 'ROYAL LIBRARIAN BULK ORDER & QUOTE',
    cartTitle: '馆员采编公文报价函',
    btnClearCart: '清空采编函',
    thInfo: '图书书目信息',
    thKdc: 'KDC分类',
    thPrice: '定价',
    thQty: '数量',
    thTotal: '小计',
    thAction: '管理',
    cartEmptyTitle: '采编报价函暂无图书。',
    cartEmptySub: '请前往图书检索或策展馆挑选采编书目。',
    btnGoSearch: '前往图书检索',
    summaryTitle: '采编机构信息填写',
    labelOrg: '机构 / 图书馆名称 *',
    labelOfficer: '采编馆员姓名 *',
    labelContact: '联系电话及邮箱 *',
    labelPurpose: '采编目的与预算项目 *',
    costItemCount: '选中种数:',
    costTotalQty: '总采购册数:',
    costSubtotal: '图书定价总额:',
    costDiscount: '机构采购优惠 (10%):',
    costGrandTotal: '最终采购预计金额:',
    btnPdfQuote: '一键生成皇家金印公文报价单',
    btnExcelExport: '下载KOLAS联动Excel/CSV书目明细',
    btnBackList: '返回书目列表',
    detailCanvasHint: '拖动鼠标可360度旋转并检视3D烫金皮革质感',
    btnOpenBook: '翻开试阅',
    btnResetView: '重置视角',
    detailPriceLabel: '机构采购供应价',
    specIsbn: 'ISBN-13',
    specKdc: 'KDC分类号',
    specPublisher: '出版商',
    specPubYear: '出版年份',
    specPages: '页数',
    btnAddCart: '加入采编报价函',
    librarianNoteTitle: '馆员推荐与采编价值评估',
    summaryHeading: '图书内容提要'
  },
  FR: {
    navSub: 'Pavillon d\'Acquisition de Bibliothèque Multiculturelle',
    navHome: 'Observatoire (Accueil)',
    navSearch: 'Recherche & Acquisition',
    navCuration: 'Curation d\'Or',
    navCart: 'Panier de Devis Officiel',
    heroBadge: 'PORTAIL D\'ACQUISITION B2B ROYAL',
    heroTitle: 'Royal Golden Velvet &\nMidnight Observatory',
    heroDesc: 'Collection de livres multiculturels haut de gamme en 5 langues. Solution royale d\'acquisition pour bibliothécaires.',
    heroCtaSearch: 'Rechercher le Catalogue',
    heroCtaCuration: 'Expositions d\'Or',
    statBooks: 'Plus de 5,400 Titres',
    statLangs: 'KO / EN / VI / ZH / FR',
    statQuote: 'Devis PDF & Export Excel',
    galleryTag: 'PAVILLON D\'EXPOSITION 3D',
    galleryTitle: 'Exhibition 3D Golden Velvet Gallery',
    gallerySub: 'Présentation 3D interactive de chefs-d\'œuvre reliés cuirs et dorés à l\'or 24K.',
    newTag: 'NOUVEAUTÉS & SÉLECTIONS',
    newTitle: 'Nouveautés et Livres d\'Acquisition Recommandés',
    btnViewAll: 'Voir Tout le Catalogue',
    searchTag: 'RECHERCHE & ACQUISITION BIBLIOTHÉCAIRE',
    searchTitle: 'Portail de Recherche d\'Acquisition',
    searchSub: 'Filtrage en temps réel par langue, classification KDC, ISBN, éditeur et âge cible.',
    searchPh: 'Rechercher par Titre, Auteur, Éditeur, ISBN, KDC...',
    btnSearch: 'Rechercher',
    filterLang: 'Langue:',
    filterAll: 'TOUT',
    filterAge: 'Âge Cible:',
    filterKdc: 'Code KDC:',
    filterBinding: 'Reliure:',
    filterSort: 'Trier par:',
    searchResult: 'Résultats de recherche',
    itemsCount: 'articles',
    btnSelectAll: 'Tout Sélectionner',
    btnBulkCart: 'Ajouter la Sélection au Panier',
    curationTag: 'PACKS DE CURATION 3D D\'OR',
    curationTitle: 'Packs Spéciaux de Curation d\'Or 3D',
    curationSub: 'Packs thématiques spécialement conçus pour les acquisitions de bibliothèques.',
    cartTag: 'COMMANDES & DEVIS BIBLIOTHÉCAIRE',
    cartTitle: 'Panier de Devis Officiel Bibliothécaire',
    btnClearCart: 'Vider le Panier',
    thInfo: 'Informations Bibliographiques',
    thKdc: 'Code KDC',
    thPrice: 'Prix Public',
    thQty: 'Qté',
    thTotal: 'Total',
    thAction: 'Action',
    cartEmptyTitle: 'Votre panier de devis est vide.',
    cartEmptySub: 'Veuillez parcourir la recherche ou les curations.',
    btnGoSearch: 'Aller à la Recherche',
    summaryTitle: 'Métadonnées d\'Acquisition Institutionnelle',
    labelOrg: 'Nom de l\'Institution / Bibliothèque *',
    labelOfficer: 'Nom du Bibliothécaire Responsable *',
    labelContact: 'Contact & Email *',
    labelPurpose: 'Objet / Budget d\'Acquisition *',
    costItemCount: 'Titres Sélectionnés:',
    costTotalQty: 'Quantité Totale:',
    costSubtotal: 'Sous-total Prix Public:',
    costDiscount: 'Remise Institutionnelle (10%):',
    costGrandTotal: 'Montant Total Final:',
    btnPdfQuote: 'Générer Devis Officiel PDF en 1-Clic',
    btnExcelExport: 'Exporter Fichier CSV/Excel KOLAS',
    btnBackList: 'Retour au Catalogue',
    detailCanvasHint: 'Faites glisser la souris pour pivoter à 360° et inspecter la dorure 3D',
    btnOpenBook: 'Ouvrir le Livre',
    btnResetView: 'Réinitialiser la Vue',
    detailPriceLabel: 'Prix de Fourniture Institutionnelle',
    specIsbn: 'ISBN-13',
    specKdc: 'Classification KDC',
    specPublisher: 'Éditeur',
    specPubYear: 'Année de Publication',
    specPages: 'Nombre de Pages',
    btnAddCart: 'Ajouter au Panier de Devis',
    librarianNoteTitle: 'Évaluation & Avis du Bibliothécaire',
    summaryHeading: 'Résumé Bibliographique'
  }
};

// --------------------------------------------------------------------------
// 4. Web Audio API Harp Synthesizer (Realistic Gold Harp Chords)
// --------------------------------------------------------------------------
class HarpAudioSynthesizer {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChord(type = 'gold') {
    if (!AppState.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Notes frequencies (Hz) for shimmering gold harp chords
    let notes = [261.63, 329.63, 392.00, 493.88, 587.33, 783.99]; // C4, E4, G4, B4, D5, G5
    if (type === 'select') notes = [329.63, 392.00, 493.88, 659.25, 783.99];
    if (type === 'cart') notes = [392.00, 493.88, 587.33, 783.99, 987.77, 1174.66];
    if (type === 'quote') notes = [261.63, 392.00, 523.25, 659.25, 783.99, 1046.50];

    notes.forEach((freq, idx) => {
      const delay = idx * 0.045; // Arpeggio stagger
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Pluck timbre: Sine + slight detuned triangle for body
      osc.type = (idx % 2 === 0) ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + delay);

      // Lowpass resonant filter simulating wooden harp body decay
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, now + delay);
      filter.frequency.exponentialRampToValueAtTime(300, now + delay + 1.2);

      // Exponential gain decay envelope
      gain.gain.setValueAtTime(0.0001, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.25, now + delay + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.6);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + delay);
      osc.stop(now + delay + 1.7);
    });
  }
}

const harpSynth = new HarpAudioSynthesizer();

// --------------------------------------------------------------------------
// 5. Gold Dust Ripple Particle Visual Effect
// --------------------------------------------------------------------------
class GoldDustFX {
  constructor() {
    this.canvas = document.getElementById('gold-dust-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    
    // Global listener for click sparkles
    window.addEventListener('pointerdown', (e) => {
      this.spawnParticles(e.clientX, e.clientY, 25);
      harpSynth.playChord('gold');
    });

    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  spawnParticles(x, y, count = 20) {
    const colors = ['#ffd700', '#d4af37', '#fff5c0', '#e6ca65'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.8,
        size: Math.random() * 4 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1.0,
        decay: Math.random() * 0.02 + 0.015,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.1
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.03; // gravity
      p.vx *= 0.98; // drag
      p.alpha -= p.decay;
      p.rotation += p.spin;

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = 'rgba(255, 215, 0, 0.8)';
      this.ctx.fillStyle = p.color;
      
      // Draw 4-point star sparkle shape
      this.ctx.beginPath();
      const s = p.size;
      this.ctx.moveTo(0, -s);
      this.ctx.lineTo(s * 0.3, -s * 0.3);
      this.ctx.lineTo(s, 0);
      this.ctx.lineTo(s * 0.3, s * 0.3);
      this.ctx.lineTo(0, s);
      this.ctx.lineTo(-s * 0.3, s * 0.3);
      this.ctx.lineTo(-s, 0);
      this.ctx.lineTo(-s * 0.3, -s * 0.3);
      this.ctx.closePath();
      this.ctx.fill();

      this.ctx.restore();
    }

    requestAnimationFrame(() => this.animate());
  }
}

// --------------------------------------------------------------------------
// 6. Three.js 3D Celestial Armillary Sphere Hero Widget (#home)
// --------------------------------------------------------------------------
class Hero3DSphere {
  constructor() {
    this.canvas = document.getElementById('hero-3d-canvas');
    if (!this.canvas) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 14);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.sphereGroup = new THREE.Group();
    this.orbitingBooksGroup = new THREE.Group();
    this.scene.add(this.sphereGroup);
    this.scene.add(this.orbitingBooksGroup);

    this.initLights();
    this.buildArmillarySphere();
    this.buildOrbitingBooks();
    this.buildStarfield();

    window.addEventListener('resize', () => this.onResize());
    this.animate();
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xffd700, 2.5, 30);
    goldPointLight.position.set(0, 0, 0);
    this.scene.add(goldPointLight);

    const dirLight = new THREE.DirectionalLight(0xffe088, 1.2);
    dirLight.position.set(10, 15, 10);
    this.scene.add(dirLight);
  }

  buildArmillarySphere() {
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.25,
      wireframe: false
    });

    // Outer equatorial ring
    const ringGeo1 = new THREE.TorusGeometry(4.2, 0.08, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, goldMat);
    this.sphereGroup.add(ring1);

    // Meridian ring
    const ringGeo2 = new THREE.TorusGeometry(3.8, 0.06, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, goldMat);
    ring2.rotation.x = Math.PI / 2;
    this.sphereGroup.add(ring2);

    // Oblique Ecliptic Ring
    const ringGeo3 = new THREE.TorusGeometry(3.4, 0.05, 16, 100);
    const ring3 = new THREE.Mesh(ringGeo3, goldMat);
    ring3.rotation.x = Math.PI / 4;
    ring3.rotation.y = Math.PI / 6;
    this.sphereGroup.add(ring3);

    // Central Glowing Astrolabe Core
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      emissive: 0x997510,
      wireframe: true
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    this.sphereGroup.add(core);
    this.coreMesh = core;
  }

  buildOrbitingBooks() {
    const bookGeo = new THREE.BoxGeometry(0.5, 0.7, 0.15);
    const bookMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.8,
      roughness: 0.3
    });

    const bookCount = 6;
    const radius = 5.5;

    for (let i = 0; i < bookCount; i++) {
      const angle = (i / bookCount) * Math.PI * 2;
      const bookMesh = new THREE.Mesh(bookGeo, bookMat);

      bookMesh.position.x = Math.cos(angle) * radius;
      bookMesh.position.z = Math.sin(angle) * radius;
      bookMesh.position.y = Math.sin(angle * 2) * 1.0;

      bookMesh.rotation.y = -angle;
      bookMesh.userData = { angle: angle, radius: radius, speed: 0.005 };

      this.orbitingBooksGroup.add(bookMesh);
    }
  }

  buildStarfield() {
    const starGeo = new THREE.BufferGeometry();
    const count = 300;
    const posArr = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      posArr[i] = (Math.random() - 0.5) * 30;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffd700,
      size: 0.08,
      transparent: true,
      opacity: 0.8
    });

    const starField = new THREE.Points(starGeo, starMat);
    this.scene.add(starField);
  }

  onResize() {
    if (!this.canvas) return;
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Rotate Armillary Sphere rings
    this.sphereGroup.rotation.y += 0.003;
    this.sphereGroup.rotation.x += 0.001;

    if (this.coreMesh) {
      this.coreMesh.rotation.y -= 0.01;
    }

    // Update orbiting books
    this.orbitingBooksGroup.children.forEach((book, idx) => {
      book.userData.angle += book.userData.speed;
      const a = book.userData.angle;
      const r = book.userData.radius;
      book.position.x = Math.cos(a) * r;
      book.position.z = Math.sin(a) * r;
      book.position.y = Math.sin(a * 2) * 1.0;
      book.rotation.y = -a + Math.PI / 2;
    });

    this.renderer.render(this.scene, this.camera);
  }
}

// --------------------------------------------------------------------------
// 7. Three.js 3D Golden Velvet Gallery Exhibition (#home)
// --------------------------------------------------------------------------
class Gallery3DPavilion {
  constructor() {
    this.canvas = document.getElementById('gallery-3d-canvas');
    if (!this.canvas) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(40, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
    this.camera.position.set(0, 2, 7);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    this.pedestals = [];
    this.currentIndex = 0;

    this.initScene();
    window.addEventListener('resize', () => this.onResize());
    this.animate();
  }

  initScene() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffd700, 2.0);
    spotLight.position.set(0, 8, 4);
    spotLight.angle = Math.PI / 4;
    this.scene.add(spotLight);

    // Create 3 Velvet Pedestals with Leatherbound Books
    const featured = [BOOKS[0], BOOKS[1], BOOKS[2]];
    const spacing = 3.5;

    featured.forEach((book, idx) => {
      const group = new THREE.Group();
      group.position.x = (idx - 1) * spacing;

      // Pedestal Base (Cylinder with Gold Trim)
      const pedGeo = new THREE.CylinderGeometry(1.0, 1.2, 1.2, 32);
      const pedMat = new THREE.MeshStandardMaterial({
        color: 0x2e1a47,
        roughness: 0.8,
        metalness: 0.2
      });
      const pedestal = new THREE.Mesh(pedGeo, pedMat);
      pedestal.position.y = -0.6;
      group.add(pedestal);

      // Gold Trim Ring
      const trimGeo = new THREE.TorusGeometry(1.02, 0.03, 16, 32);
      const trimMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9 });
      const trim = new THREE.Mesh(trimGeo, trimMat);
      trim.rotation.x = Math.PI / 2;
      trim.position.y = 0.0;
      group.add(trim);

      // 3D Leatherbound Book on pedestal
      const bookGeo = new THREE.BoxGeometry(1.1, 1.5, 0.25);
      const bookMat = new THREE.MeshStandardMaterial({
        color: idx === 0 ? 0x2e1a47 : idx === 1 ? 0x0d2818 : 0x1a243a,
        metalness: 0.3,
        roughness: 0.4
      });
      const bookMesh = new THREE.Mesh(bookGeo, bookMat);
      bookMesh.position.y = 0.85;
      bookMesh.rotation.x = 0.2;
      group.add(bookMesh);

      group.userData = { book: book, bookMesh: bookMesh };
      this.scene.add(group);
      this.pedestals.push(group);
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.pedestals.length;
    this.updateInfo();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.pedestals.length) % this.pedestals.length;
    this.updateInfo();
  }

  updateInfo() {
    const book = this.pedestals[this.currentIndex].userData.book;
    const titleEl = document.getElementById('gallery-title');
    const authorEl = document.getElementById('gallery-author');
    if (titleEl) titleEl.textContent = book.title;
    if (authorEl) authorEl.textContent = `${book.author} · KDC ${book.kdc}`;
  }

  onResize() {
    if (!this.canvas) return;
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Rotate active center book slowly
    this.pedestals.forEach((p, idx) => {
      const targetX = (idx - this.currentIndex) * 3.5;
      p.position.x += (targetX - p.position.x) * 0.08;

      if (idx === this.currentIndex) {
        p.userData.bookMesh.rotation.y += 0.01;
      }
    });

    this.renderer.render(this.scene, this.camera);
  }
}

// --------------------------------------------------------------------------
// 8. Three.js 360-Degree Book Previewer (#detail)
// --------------------------------------------------------------------------
class Detail3DViewer {
  constructor() {
    this.canvas = document.getElementById('detail-3d-canvas');
    if (!this.canvas) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(40, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 5.5);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    // OrbitControls
    if (window.THREE && window.THREE.OrbitControls) {
      this.controls = new THREE.OrbitControls(this.camera, this.canvas);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
    }

    this.isOpen = false;
    this.initBookMesh();
    window.addEventListener('resize', () => this.onResize());
    this.animate();
  }

  initBookMesh() {
    this.bookGroup = new THREE.Group();

    // Main Closed Book Body
    const bookGeo = new THREE.BoxGeometry(1.8, 2.4, 0.35);
    
    // Create multi-material for gold foil spine, leather covers, and page edges
    const materials = [
      new THREE.MeshStandardMaterial({ color: 0xfff8dc, roughness: 0.9 }), // Right pages edge
      new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 }), // Left Spine gold
      new THREE.MeshStandardMaterial({ color: 0xfff8dc, roughness: 0.9 }), // Top pages
      new THREE.MeshStandardMaterial({ color: 0xfff8dc, roughness: 0.9 }), // Bottom pages
      new THREE.MeshStandardMaterial({ color: 0x2e1a47, metalness: 0.4, roughness: 0.3 }), // Front cover
      new THREE.MeshStandardMaterial({ color: 0x2e1a47, metalness: 0.4, roughness: 0.3 })  // Back cover
    ];

    this.bookMesh = new THREE.Mesh(bookGeo, materials);
    this.bookGroup.add(this.bookMesh);

    // Gold Foil Emblem on Front Cover
    const emblemGeo = new THREE.TorusGeometry(0.3, 0.02, 16, 32);
    const emblemMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9 });
    const emblem = new THREE.Mesh(emblemGeo, emblemMat);
    emblem.position.set(0, 0.2, 0.18);
    this.bookGroup.add(emblem);

    this.scene.add(this.bookGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffd700, 1.5);
    dirLight.position.set(5, 5, 5);
    this.scene.add(dirLight);
  }

  updateBookColor(colorHex) {
    if (!this.bookMesh) return;
    const c = new THREE.Color(colorHex);
    this.bookMesh.material[4].color = c;
    this.bookMesh.material[5].color = c;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    return this.isOpen;
  }

  resetView() {
    this.camera.position.set(0, 0, 5.5);
    if (this.controls) this.controls.reset();
  }

  onResize() {
    if (!this.canvas) return;
    this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.controls) this.controls.update();

    // Open/Close Animation Rotation
    const targetRotY = this.isOpen ? Math.PI / 4 : 0;
    this.bookGroup.rotation.y += (targetRotY - this.bookGroup.rotation.y) * 0.1;

    this.renderer.render(this.scene, this.camera);
  }
}

let galleryInstance = null;
let detail3DInstance = null;

// --------------------------------------------------------------------------
// 9. SPA Router & Renderer
// --------------------------------------------------------------------------
function navigateToRoute(route) {
  const targetRoute = route ? route.replace('#', '') : 'home';
  AppState.currentRoute = targetRoute;

  // Update Nav Active links
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.nav === targetRoute);
  });

  // Toggle View Sections
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });

  const activeView = document.getElementById(`view-${targetRoute}`) || document.getElementById('view-home');
  activeView.classList.add('active');

  // Trigger view specific re-renders
  if (targetRoute === 'home') renderHomeFeaturedGrid();
  if (targetRoute === 'search') renderSearchResults();
  if (targetRoute === 'curation') renderCurationPackages();
  if (targetRoute === 'cart') renderCartTable();
  if (targetRoute === 'detail') renderBookDetail(AppState.selectedBookId);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Home Featured Book Grid
function renderHomeFeaturedGrid() {
  const container = document.getElementById('home-featured-grid');
  if (!container) return;

  const featured = BOOKS.slice(0, 6);
  container.innerHTML = featured.map(b => createBookCardHTML(b)).join('');
}

// Render Search & Filter Results Grid
function renderSearchResults() {
  const container = document.getElementById('search-results-grid');
  const countNum = document.getElementById('search-count-num');
  if (!container) return;

  let filtered = BOOKS.filter(b => {
    // Text search
    const q = AppState.searchFilters.text.toLowerCase();
    const matchText = !q || b.title.toLowerCase().includes(q) || 
                      b.author.toLowerCase().includes(q) || 
                      b.publisher.toLowerCase().includes(q) || 
                      b.isbn.includes(q) || 
                      b.kdc.includes(q);

    // Language filter
    const matchLang = AppState.searchFilters.lang === 'ALL' || b.lang === AppState.searchFilters.lang;

    // Age filter
    const matchAge = AppState.searchFilters.age === 'ALL' || b.age === AppState.searchFilters.age;

    // KDC filter
    const matchKdc = AppState.searchFilters.kdc === 'ALL' || b.kdc.startsWith(AppState.searchFilters.kdc);

    // Binding filter
    const matchBinding = AppState.searchFilters.binding === 'ALL' ||
      (AppState.searchFilters.binding === 'GOLD' && b.isGoldEdition) ||
      (AppState.searchFilters.binding === 'HARD' && b.binding.includes('양장')) ||
      (AppState.searchFilters.binding === 'PAPER' && !b.binding.includes('양장'));

    return matchText && matchLang && matchAge && matchKdc && matchBinding;
  });

  // Sorting
  const sort = AppState.searchFilters.sort;
  if (sort === 'PRICE_ASC') filtered.sort((a, b) => a.price - b.price);
  if (sort === 'PRICE_DESC') filtered.sort((a, b) => b.price - a.price);
  if (sort === 'NEWEST') filtered.sort((a, b) => b.pubYear - a.pubYear);

  if (countNum) countNum.textContent = filtered.length;
  container.innerHTML = filtered.map(b => createBookCardHTML(b, true)).join('');
}

// Create Card HTML Helper
function createBookCardHTML(book, isSelectable = false) {
  const isSelected = AppState.selectedSearchIds.has(book.id);
  const langFlag = { KO: '🇰🇷 KO', EN: '🇺🇸 EN', VI: '🇻🇳 VI', ZH: '🇨🇳 ZH', FR: '🇫🇷 FR' }[book.lang] || book.lang;

  return `
    <div class="book-card" data-id="${book.id}">
      ${book.isGoldEdition ? `<span class="book-badge-top">24K GOLD</span>` : ''}
      
      <div class="book-cover-box" onclick="openDetailView('${book.id}')">
        <div class="book-cover-art" style="--cover-bg: ${book.coverBg};">
          <div class="cover-gold-border"></div>
          <span class="cover-lang-badge">${langFlag}</span>
          <span class="cover-title-text">${book.title}</span>
          <i class="fa-solid fa-crown cover-gold-seal"></i>
        </div>
      </div>

      <div class="book-info">
        <span class="book-kdc-tag">KDC ${book.kdc}</span>
        <h3 class="book-title" onclick="openDetailView('${book.id}')">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        
        <div class="book-meta-row">
          <span>${book.publisher}</span>
          <span>${book.pubYear}년</span>
        </div>

        <div class="book-price-row">
          <span class="book-price">${book.price.toLocaleString()} 원</span>
          ${isSelectable ? `
            <input type="checkbox" class="search-item-cb" data-id="${book.id}" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); toggleSearchSelect('${book.id}')">
          ` : ''}
        </div>

        <div class="book-card-actions">
          <button class="btn btn-gold btn-sm" onclick="addToCart('${book.id}')">
            <i class="fa-solid fa-cart-plus"></i> 견적함
          </button>
          <button class="btn btn-outline btn-sm" onclick="openDetailView('${book.id}')">
            상세보기
          </button>
        </div>
      </div>
    </div>
  `;
}

// Open Book Detail View
function openDetailView(bookId) {
  AppState.selectedBookId = bookId;
  window.location.hash = `#detail`;
}

// Render Book Detail View (#detail)
function renderBookDetail(bookId) {
  const book = BOOKS.find(b => b.id === bookId) || BOOKS[0];

  const titleEl = document.getElementById('detail-title');
  const origTitleEl = document.getElementById('detail-orig-title');
  const authorEl = document.getElementById('detail-author');
  const priceEl = document.getElementById('detail-price');
  const bindingTagEl = document.getElementById('detail-binding-tag');
  const isbnEl = document.getElementById('detail-isbn');
  const kdcEl = document.getElementById('detail-kdc');
  const kdcBadgeEl = document.getElementById('detail-kdc-badge');
  const pubEl = document.getElementById('detail-publisher');
  const pubYearEl = document.getElementById('detail-pubyear');
  const pagesEl = document.getElementById('detail-pages');
  const noteEl = document.getElementById('detail-librarian-note');
  const summaryEl = document.getElementById('detail-summary-text');
  const langTagEl = document.getElementById('detail-lang-tag');

  if (titleEl) titleEl.textContent = book.title;
  if (origTitleEl) origTitleEl.textContent = book.titleEn;
  if (authorEl) authorEl.textContent = `${book.author} 지음 · ${book.publisher}`;
  if (priceEl) priceEl.textContent = `${book.price.toLocaleString()} 원`;
  if (bindingTagEl) bindingTagEl.textContent = book.binding;
  if (isbnEl) isbnEl.textContent = book.isbn;
  if (kdcEl) kdcEl.textContent = book.kdcName;
  if (kdcBadgeEl) kdcBadgeEl.textContent = `KDC ${book.kdc}`;
  if (pubEl) pubEl.textContent = book.publisher;
  if (pubYearEl) pubYearEl.textContent = `${book.pubYear}년`;
  if (pagesEl) pagesEl.textContent = `${book.pages} 쪽`;
  if (noteEl) noteEl.textContent = book.librarianNote;
  if (summaryEl) summaryEl.textContent = book.summary;
  
  const langFlag = { KO: '🇰🇷 한국어', EN: '🇺🇸 English', VI: '🇻🇳 Tiếng Việt', ZH: '🇨🇳 中文', FR: '🇫🇷 Français' }[book.lang] || book.lang;
  if (langTagEl) langTagEl.textContent = langFlag;

  // Add event listener for Add to Cart button in detail view
  const addBtn = document.getElementById('btn-detail-add-cart');
  if (addBtn) {
    addBtn.onclick = () => addToCart(book.id);
  }

  // Update 3D Model color
  if (detail3DInstance) {
    detail3DInstance.updateBookColor(book.coverBg);
  }
}

// Render Curation Packages (#curation)
function renderCurationPackages() {
  const container = document.getElementById('curation-packages-list');
  if (!container) return;

  container.innerHTML = CURATIONS.map(c => `
    <div class="curation-card">
      <div class="curation-3d-box">
        <i class="fa-solid fa-boxes-packing curation-stack-icon"></i>
        <span class="celestial-badge">${c.tag}</span>
      </div>

      <div class="curation-content">
        <div>
          <div class="curation-header-row">
            <h3 class="curation-title">${c.title}</h3>
          </div>
          <p class="curation-desc">${c.summary}</p>
          
          <div class="curation-meta-grid">
            <div class="meta-item">
              <span class="meta-label">포함 언어:</span>
              <span class="meta-value">${c.languages}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">KDC 커버리지:</span>
              <span class="meta-value">${c.kdcCoverage}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">총 구성 권수:</span>
              <span class="meta-value">${c.totalBooks} 권 세트</span>
            </div>
          </div>
        </div>

        <div class="curation-footer">
          <div class="curation-price-box">
            <span class="orig-price">${c.origPrice.toLocaleString()}원</span>
            <span class="discount-price">${c.discountPrice.toLocaleString()} 원</span>
          </div>

          <button class="btn btn-gold btn-md" onclick="addCurationToCart('${c.id}')">
            <i class="fa-solid fa-cart-plus"></i> 패키지 전체 견적함 담기
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 10. Cart Management & Official Quote Generator
// --------------------------------------------------------------------------
function addToCart(bookId, qty = 1) {
  const existing = AppState.cart.find(item => item.bookId === bookId);
  if (existing) {
    existing.qty += qty;
  } else {
    AppState.cart.push({ bookId: bookId, qty: qty });
  }
  updateCartBadge();
  showToast('선택하신 도서가 공문 견적함에 추가되었습니다.');
  harpSynth.playChord('cart');
}

function addCurationToCart(curationId) {
  const curation = CURATIONS.find(c => c.id === curationId);
  if (!curation) return;

  curation.bookIds.forEach(id => {
    addToCart(id, 1);
  });
  showToast(`'${curation.title}' 패키지 전체가 견적함에 담겼습니다.`);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge-count');
  const totalQty = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = totalQty;
}

function updateCartQty(bookId, delta) {
  const item = AppState.cart.find(i => i.bookId === bookId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      AppState.cart = AppState.cart.filter(i => i.bookId !== bookId);
    }
  }
  updateCartBadge();
  renderCartTable();
}

function removeCartItem(bookId) {
  AppState.cart = AppState.cart.filter(i => i.bookId !== bookId);
  updateCartBadge();
  renderCartTable();
  showToast('항목이 삭제되었습니다.');
}

function clearCart() {
  if (confirm('공문 견적함을 모두 비우시겠습니까?')) {
    AppState.cart = [];
    updateCartBadge();
    renderCartTable();
  }
}

function renderCartTable() {
  const tbody = document.getElementById('cart-table-body');
  const emptyMsg = document.getElementById('cart-empty-msg');
  if (!tbody) return;

  if (AppState.cart.length === 0) {
    tbody.innerHTML = '';
    if (emptyMsg) emptyMsg.classList.add('show');
    updateCartSummary(0, 0, 0);
    return;
  }

  if (emptyMsg) emptyMsg.classList.remove('show');

  let subtotal = 0;
  let totalQty = 0;

  tbody.innerHTML = AppState.cart.map(item => {
    const book = BOOKS.find(b => b.id === item.bookId);
    if (!book) return '';

    const itemTotal = book.price * item.qty;
    subtotal += itemTotal;
    totalQty += item.qty;

    return `
      <tr>
        <td>
          <div class="cart-book-info">
            <div class="cart-book-thumb">
              <i class="fa-solid fa-book"></i>
            </div>
            <div class="cart-book-details">
              <span class="cart-book-title">${book.title}</span>
              <span class="cart-book-isbn">ISBN: ${book.isbn} · ${book.publisher}</span>
            </div>
          </div>
        </td>
        <td><span class="book-kdc-tag">${book.kdc}</span></td>
        <td>${book.price.toLocaleString()} 원</td>
        <td>
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty('${book.id}', -1)">-</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${book.id}', 1)">+</button>
          </div>
        </td>
        <td><strong class="gold-text">${itemTotal.toLocaleString()} 원</strong></td>
        <td>
          <button class="btn btn-outline btn-sm danger" onclick="removeCartItem('${book.id}')">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  updateCartSummary(AppState.cart.length, totalQty, subtotal);
}

function updateCartSummary(typesCount, totalQty, subtotal) {
  const itemTypesEl = document.getElementById('cost-item-types');
  const totalQtyEl = document.getElementById('cost-total-qty');
  const subtotalEl = document.getElementById('cost-subtotal-price');
  const discountEl = document.getElementById('cost-discount-price');
  const grandTotalEl = document.getElementById('cost-grand-total');

  const discount = Math.round(subtotal * 0.1); // 10% Institutional Discount
  const grandTotal = subtotal - discount;

  if (itemTypesEl) itemTypesEl.textContent = `${typesCount} 종`;
  if (totalQtyEl) totalQtyEl.textContent = `${totalQty} 권`;
  if (subtotalEl) subtotalEl.textContent = `${subtotal.toLocaleString()} 원`;
  if (discountEl) discountEl.textContent = `-${discount.toLocaleString()} 원`;
  if (grandTotalEl) grandTotalEl.textContent = `${grandTotal.toLocaleString()} 원`;
}

// 1-Click PDF Official Quote Generator
function generateOfficialQuote() {
  if (AppState.cart.length === 0) {
    alert('공문 견적함이 비어있습니다. 도서를 담은 후 생성해주세요.');
    return;
  }

  const orgName = document.getElementById('input-org-name').value || '서울시립 다문화도서관';
  const officerName = document.getElementById('input-officer-name').value || '김은영 사서관';
  
  const dateStr = new Date().toISOString().split('T')[0];
  const quoteNo = `RGO-${dateStr.replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;

  document.getElementById('qm-date').textContent = dateStr;
  document.getElementById('qm-sig-date').textContent = `${dateStr.split('-')[0]}년 ${dateStr.split('-')[1]}월 ${dateStr.split('-')[2]}일`;
  document.getElementById('qm-no').textContent = quoteNo;
  document.getElementById('qm-org').textContent = orgName;
  document.getElementById('qm-officer').textContent = officerName;

  let totalQty = 0;
  let subtotal = 0;

  const tbody = document.getElementById('quote-print-tbody');
  tbody.innerHTML = AppState.cart.map((item, idx) => {
    const book = BOOKS.find(b => b.id === item.bookId);
    if (!book) return '';

    const itemTotal = Math.round(book.price * item.qty * 0.9); // Applied discount
    subtotal += itemTotal;
    totalQty += item.qty;

    return `
      <tr>
        <td style="text-align:center;">${idx + 1}</td>
        <td style="text-align:center;">${book.kdc}</td>
        <td style="text-align:center;">${book.isbn}</td>
        <td><strong>${book.title}</strong></td>
        <td>${book.author} / ${book.publisher}</td>
        <td style="text-align:center;">${book.lang}</td>
        <td style="text-align:right;">${book.price.toLocaleString()}원</td>
        <td style="text-align:center;">${item.qty}</td>
        <td style="text-align:right;">${itemTotal.toLocaleString()}원</td>
      </tr>
    `;
  }).join('');

  document.getElementById('qm-summary-count').textContent = `${AppState.cart.length}종 / ${totalQty}권`;
  document.getElementById('qm-grand-total').textContent = `${subtotal.toLocaleString()} 원`;

  // Show Modal
  document.getElementById('quote-modal-overlay').classList.add('show');
  harpSynth.playChord('quote');
}

// 1-Click Excel / CSV Exporter for KOLAS Library Management System
function exportExcelCSV() {
  if (AppState.cart.length === 0) {
    alert('공문 견적함이 비어있습니다. 도서를 담은 후 다운로드 해주세요.');
    return;
  }

  let csvContent = '\uFEFF'; // UTF-8 BOM for Korean Excel compatibility
  csvContent += '"순번","ISBN","KDC","도서명","저자","출판사","발행년도","언어","정가(원)","수서수량","공급가액(원)"\n';

  AppState.cart.forEach((item, idx) => {
    const b = BOOKS.find(x => x.id === item.bookId);
    if (!b) return;

    const supplyPrice = Math.round(b.price * item.qty * 0.9);
    csvContent += `"${idx + 1}","${b.isbn}","${b.kdc}","${b.title}","${b.author}","${b.publisher}","${b.pubYear}","${b.lang}","${b.price}","${item.qty}","${supplyPrice}"\n`;
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Royal_Library_Procurement_Quote_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('KOLAS 연동 엑셀/CSV 명세서 다운로드가 시작되었습니다.');
}

// Toast helper
function showToast(msg) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = msg;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// --------------------------------------------------------------------------
// 11. Event Listeners & i18n Updater
// --------------------------------------------------------------------------
function updateLanguage(langCode) {
  if (!I18N[langCode]) return;
  AppState.currentLang = langCode;
  const dict = I18N[langCode];

  document.getElementById('current-lang-code').textContent = langCode;

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update elements with data-i18n-ph (placeholders)
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update active option styling
  document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === langCode);
  });
}

function toggleSearchSelect(id) {
  if (AppState.selectedSearchIds.has(id)) {
    AppState.selectedSearchIds.delete(id);
  } else {
    AppState.selectedSearchIds.add(id);
  }
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Visual FX
  new GoldDustFX();

  // Initialize Three.js scenes
  setTimeout(() => {
    new Hero3DSphere();
    galleryInstance = new Gallery3DPavilion();
    detail3DInstance = new Detail3DViewer();
  }, 100);

  // Router Hash Handler
  window.addEventListener('hashchange', () => {
    navigateToRoute(window.location.hash);
  });
  navigateToRoute(window.location.hash);

  // Language Dropdown Toggle
  const langBtn = document.getElementById('current-lang-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });

    document.querySelectorAll('.lang-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
      });
    });
  }

  // Sound Toggle Button
  const soundBtn = document.getElementById('btn-sound-toggle');
  const soundIcon = document.getElementById('sound-icon');
  const soundLabel = document.getElementById('sound-label');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      AppState.soundEnabled = !AppState.soundEnabled;
      if (soundLabel) soundLabel.textContent = AppState.soundEnabled ? 'ON' : 'OFF';
      if (soundIcon) soundIcon.style.opacity = AppState.soundEnabled ? '1' : '0.4';
    });
  }

  // Gallery Controls
  const gPrev = document.getElementById('btn-gallery-prev');
  const gNext = document.getElementById('btn-gallery-next');
  if (gPrev) gPrev.addEventListener('click', () => galleryInstance && galleryInstance.prev());
  if (gNext) gNext.addEventListener('click', () => galleryInstance && galleryInstance.next());

  // Search Filters
  const searchInput = document.getElementById('search-input-text');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchFilters.text = e.target.value;
      renderSearchResults();
    });
  }

  document.querySelectorAll('[data-filter-lang]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-lang]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.searchFilters.lang = pill.dataset.filterLang;
      renderSearchResults();
    });
  });

  const ageSelect = document.getElementById('filter-age-select');
  if (ageSelect) {
    ageSelect.addEventListener('change', (e) => {
      AppState.searchFilters.age = e.target.value;
      renderSearchResults();
    });
  }

  const kdcSelect = document.getElementById('filter-kdc-select');
  if (kdcSelect) {
    kdcSelect.addEventListener('change', (e) => {
      AppState.searchFilters.kdc = e.target.value;
      renderSearchResults();
    });
  }

  const bindingSelect = document.getElementById('filter-binding-select');
  if (bindingSelect) {
    bindingSelect.addEventListener('change', (e) => {
      AppState.searchFilters.binding = e.target.value;
      renderSearchResults();
    });
  }

  const sortSelect = document.getElementById('filter-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.searchFilters.sort = e.target.value;
      renderSearchResults();
    });
  }

  // Bulk Actions
  const btnSelectAll = document.getElementById('btn-select-all');
  if (btnSelectAll) {
    btnSelectAll.addEventListener('click', () => {
      BOOKS.forEach(b => AppState.selectedSearchIds.add(b.id));
      renderSearchResults();
    });
  }

  const btnBulkCart = document.getElementById('btn-bulk-add-cart');
  if (btnBulkCart) {
    btnBulkCart.addEventListener('click', () => {
      if (AppState.selectedSearchIds.size === 0) {
        alert('선택된 항목이 없습니다.');
        return;
      }
      AppState.selectedSearchIds.forEach(id => addToCart(id, 1));
      AppState.selectedSearchIds.clear();
      renderSearchResults();
      showToast('선택한 항목이 장바구니에 추가되었습니다.');
    });
  }

  // Detail View 3D controls
  const toggleOpenBtn = document.getElementById('btn-toggle-open-book');
  const toggleOpenText = document.getElementById('toggle-open-text');
  if (toggleOpenBtn && detail3DInstance) {
    toggleOpenBtn.addEventListener('click', () => {
      const isOpen = detail3DInstance.toggleOpen();
      if (toggleOpenText) toggleOpenText.textContent = isOpen ? '책 덮기' : '책 펼쳐보기';
    });
  }

  const resetViewBtn = document.getElementById('btn-reset-3d-view');
  if (resetViewBtn && detail3DInstance) {
    resetViewBtn.addEventListener('click', () => detail3DInstance.resetView());
  }

  // Cart Buttons
  const clearCartBtn = document.getElementById('btn-clear-cart');
  if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

  const btnGenerateQuote = document.getElementById('btn-generate-quote');
  if (btnGenerateQuote) btnGenerateQuote.addEventListener('click', generateOfficialQuote);

  const btnExportExcel = document.getElementById('btn-export-excel');
  if (btnExportExcel) btnExportExcel.addEventListener('click', exportExcelCSV);

  // Quote Modal Close & Print
  const modalOverlay = document.getElementById('quote-modal-overlay');
  const btnCloseModal = document.getElementById('btn-close-quote-modal');
  const btnCloseModalBottom = document.getElementById('btn-close-modal-bottom');
  const btnPrintNow = document.getElementById('btn-print-now');

  if (btnCloseModal && modalOverlay) {
    btnCloseModal.addEventListener('click', () => modalOverlay.classList.remove('show'));
  }
  if (btnCloseModalBottom && modalOverlay) {
    btnCloseModalBottom.addEventListener('click', () => modalOverlay.classList.remove('show'));
  }
  if (btnPrintNow) {
    btnPrintNow.addEventListener('click', () => window.print());
  }
});
