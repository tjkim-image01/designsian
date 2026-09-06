/* ==========================================================================
   WEB V5: MULTICULTURAL LIBRARY B2B/B2C PORTAL APPLICATION LOGIC
   3D Constellation Matrix, 3D Spiral Carousel Showcase, 360° Book Inspector,
   Multi-language i18n Engine, B2B Quote PDF/Excel Export, Micro-interactions.
   ========================================================================== */

// --- 1. MULTICULTURAL BOOK CATALOG DATASET ---
const BOOK_DATABASE = [
  {
    id: "book-1",
    title: "하노이의 별빛 이야기",
    originalTitle: "Câu chuyện vì sao Hà Nội",
    author: "Nguyen Van Anh / 김민준 역",
    publisher: "다문화글로벌출판사",
    lang: "VI",
    langName: "베트남어",
    targetAge: "아동",
    kdc: "810.9",
    kdcName: "문학 > 동화/소설",
    isbn: "979-11-89021-01-4",
    price: 15000,
    b2bPrice: 13500,
    stock: "수서가능",
    rating: 4.9,
    borrowRank: 1,
    coverColor: "#ef4444",
    coverGradient: "linear-gradient(135deg, #ef4444, #b91c1c)",
    description: "베트남 하노이의 전통 전설과 밤하늘의 별자리를 아름다운 그림과 함께 한국어·베트남어 이중언어로 구성한 우수 다문화 동화책입니다.",
    recommendation: "전국 공공도서관 및 다문화가족지원센터 필수 추천 도서 (2026)",
    curationTag: "2026 다문화 우수 도서"
  },
  {
    title: "방콕 달빛 신화와 연꽃",
    id: "book-2",
    originalTitle: "ตำนานแสงจันทร์และดอกบัวแห่งกรุงเทพฯ",
    author: "Somchai Prasert / 이지은 역",
    publisher: "아시아문화아카이브",
    lang: "TH",
    langName: "태국어",
    targetAge: "아동",
    kdc: "892.7",
    kdcName: "문학 > 설화/동화",
    isbn: "979-11-89021-02-1",
    price: 16000,
    b2bPrice: 14400,
    stock: "수서가능",
    rating: 4.8,
    borrowRank: 2,
    coverColor: "#f59e0b",
    coverGradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    description: "태국 방콕의 연꽃 축제와 달빛 신화를 생생한 판화로 담아낸 대표 어린이 문화서적입니다.",
    recommendation: "초등 다문화 교교 독서 모임 지정 도서",
    curationTag: "동남아 전래동화"
  },
  {
    id: "book-3",
    title: "상하이의 옛날이야기",
    originalTitle: "上海古老传说与诗歌",
    author: "Zhang Wei (张伟) / 박성호 역",
    publisher: "동방문학사",
    lang: "ZH",
    langName: "중국어",
    targetAge: "청소년",
    kdc: "820.8",
    kdcName: "문학 > 중국문학",
    isbn: "979-11-89021-03-8",
    price: 18000,
    b2bPrice: 16200,
    stock: "수서가능",
    rating: 4.9,
    borrowRank: 3,
    coverColor: "#ec4899",
    coverGradient: "linear-gradient(135deg, #ec4899, #be185d)",
    description: "중국 상하이의 문화유산과 현대 문학을 잇는 청소년용 원서 및 한국어 해설집입니다.",
    recommendation: "청소년 다문화 이해 교재 및 도서관 대출 1위",
    curationTag: "2026 다문화 우수 도서"
  },
  {
    id: "book-4",
    title: "푸른 초원의 몽골 전설",
    originalTitle: "Хөх thảoны Монгол домог",
    author: "Batar Erdene / 정수진 역",
    publisher: "유라시아 출판",
    lang: "MN",
    langName: "몽골어",
    targetAge: "아동",
    kdc: "890.1",
    kdcName: "문학 > 유라시아 문학",
    isbn: "979-11-89021-04-5",
    price: 15500,
    b2bPrice: 13950,
    stock: "수서가능",
    rating: 4.7,
    borrowRank: 4,
    coverColor: "#3b82f6",
    coverGradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    description: "몽골 대초원의 영웅 이야기와 말과의 우정을 서정적인 서사시 형태로 엮은 그림책입니다.",
    recommendation: "다문화 거점 도서관 우선 수서 도서",
    curationTag: "동남아 전래동화"
  },
  {
    id: "book-5",
    title: "글로벌 이중언어 동화: 세계의 친구들",
    originalTitle: "Friends Around the World (Bilingual)",
    author: "Sarah Jenkins / 강다은 역",
    publisher: "글로벌키즈북스",
    lang: "EN",
    langName: "영어",
    targetAge: "유아",
    kdc: "843",
    kdcName: "문학 > 영미동화",
    isbn: "979-11-89021-05-2",
    price: 14000,
    b2bPrice: 12600,
    stock: "수서가능",
    rating: 5.0,
    borrowRank: 5,
    coverColor: "#10b981",
    coverGradient: "linear-gradient(135deg, #10b981, #047857)",
    description: "세계 여러 나라 유아들의 일상과 언어를 쉬운 영어와 한국어로 만나는 팝업 그림책입니다.",
    recommendation: "유치원 및 어린이 도서관 최고 인기 수서 도서",
    curationTag: "이중언어 그림책"
  },
  {
    id: "book-6",
    title: "성인 이주민을 위한 실전 한국어 & 문화",
    originalTitle: "Practical Korean for Multicultural Families",
    author: "국립다문화교육원 편저",
    publisher: "한국다문화학회",
    lang: "KO",
    langName: "한국어",
    targetAge: "성인",
    kdc: "330.1",
    kdcName: "사회과학 > 다문화사회",
    isbn: "979-11-89021-06-9",
    price: 22000,
    b2bPrice: 19800,
    stock: "수서가능",
    rating: 4.9,
    borrowRank: 6,
    coverColor: "#8b5cf6",
    coverGradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    description: "다문화가정 성인을 위한 실생활 한국어 표현과 한국 사회 적응 가이드를 수록한 종합 교재입니다.",
    recommendation: "공공도서관 성인 다문화 교실 표준 교재",
    curationTag: "성인 이주민 교재"
  },
  {
    id: "book-7",
    title: "메콩강의 용과 소년",
    originalTitle: "Rồng sông Mê Kông và cậu bé",
    author: "Tran Minh Tri / 오현우 역",
    publisher: "다문화글로벌출판사",
    lang: "VI",
    langName: "베트남어",
    targetAge: "아동",
    kdc: "810.9",
    kdcName: "문학 > 베트남문학",
    isbn: "979-11-89021-07-6",
    price: 14500,
    b2bPrice: 13050,
    stock: "수서가능",
    rating: 4.8,
    borrowRank: 7,
    coverColor: "#06b6d4",
    coverGradient: "linear-gradient(135deg, #06b6d4, #0e7490)",
    description: "메콩강 수호신 용에 얽힌 따뜻한 신화 이야기로 환경 보존과 우정의 가치를 전달합니다.",
    recommendation: "동남아시아 문화 특화 코너 추천 도서",
    curationTag: "동남아 전래동화"
  },
  {
    id: "book-8",
    title: "치앙마이 코끼리 파란이",
    originalTitle: "ช้างสีฟ้าแห่งเชียงใหม่",
    author: "Kanyanat S. / 윤서연 역",
    publisher: "아시아문화아카이브",
    lang: "TH",
    langName: "태국어",
    targetAge: "유아",
    kdc: "892.7",
    kdcName: "문학 > 태국동화",
    isbn: "979-11-89021-08-3",
    price: 13500,
    b2bPrice: 12150,
    stock: "수서가능",
    rating: 4.9,
    borrowRank: 8,
    coverColor: "#6366f1",
    coverGradient: "linear-gradient(135deg, #6366f1, #4338ca)",
    description: "태국 치앙마이의 숲속 마을에서 태어난 파란 코끼리의 아기자기한 모험 동화입니다.",
    recommendation: "유아 다문화 그림책 코너 1순위 추천",
    curationTag: "이중언어 그림책"
  }
];

// --- 2. CURATION PACKAGES DATA ---
const CURATION_PACKAGES = [
  {
    id: "pkg-1",
    title: "2026 다문화 우수 교교 도서전 패키지 (50권 세트)",
    subtitle: "전국 도서관 수서 담당 사서가 선정한 2026 핵심 다문화 필독서 컬렉션",
    bookIds: ["book-1", "book-2", "book-3", "book-6"],
    totalBooks: 50,
    regularPrice: 780000,
    discountPrice: 650000,
    discountRate: "16.6% Off",
    badge: "사서 추천 1위",
    kdcSummary: "KDC 800번대(문학) 70%, 300번대(사회) 30%"
  },
  {
    id: "pkg-2",
    title: "동남아시아 5개국 전래동화 원서 기획전 (30권 세트)",
    subtitle: "베트남, 태국, 인도네시아, 필리핀, 캄보디아 원서 및 한국어 대역본",
    bookIds: ["book-1", "book-2", "book-7", "book-8"],
    totalBooks: 30,
    regularPrice: 450000,
    discountPrice: 380000,
    discountRate: "15.5% Off",
    badge: "원서 베스트셀러",
    kdcSummary: "KDC 810/890번대 동남아 아동문학"
  },
  {
    id: "pkg-3",
    title: "이중언어(Bilingual) 그림책 종합 패키지 (40권 세트)",
    subtitle: "유아 및 초등 저학년을 위한 한국어-원서 병기 이중언어 양장본 컬렉션",
    bookIds: ["book-1", "book-5", "book-8"],
    totalBooks: 40,
    regularPrice: 580000,
    discountPrice: 490000,
    discountRate: "15.5% Off",
    badge: "이중언어 특화",
    kdcSummary: "KDC 843/890번대 유아·아동 그림책"
  },
  {
    id: "pkg-4",
    title: "다문화 이주민 성인 한국어&원서 독서 교실 패키지 (60권 세트)",
    subtitle: "지자체 다문화 센터 및 공공도서관 성인 강좌용 교재 및 교양 서적",
    bookIds: ["book-3", "book-4", "book-6"],
    totalBooks: 60,
    regularPrice: 920000,
    discountPrice: 770000,
    discountRate: "16.3% Off",
    badge: "성인 강좌용",
    kdcSummary: "KDC 330번대 사회과학 & 한국어 교재"
  }
];

// --- 3. I18N MULTI-LANGUAGE DICTIONARY ---
const I18N_DICTIONARY = {
  KO: {
    navHome: "메인 관",
    navSearch: "도서 검색 & 수서",
    navCuration: "3D 큐레이션",
    navCart: "견적함 & 장바구니",
    navDetail: "3D 상세 관",
    b2bTag: "도서관 수서 담당자 전용",
    heroBadge: "3D Constellation Matrix & Kinetic Wave",
    heroTitle: "세계 문학의 별자리를 이어주는 디지털 수서 & 3D 나선형 큐레이션",
    heroDesc: "전 세계 24개국 원서 다문화 서적 수서, KDC 자동 분류, B2B 견적서 1초 발급까지 도서관 수서 담당 사서님을 위한 가장 스마트한 솔루션입니다.",
    heroCtaSearch: "도서 검색 & 수서 시작하기",
    heroCtaCuration: "3D 큐레이션 기획전 관람",
    stat1: "전 세계 다문화 원서 보유",
    stat2: "전국 공공·학교 도서관 납품",
    stat3: "KDC/MARC 자동 데이터 연동",
    spiralTitle: "3D 나선형 도서 캐러셀 (Spiral Showcase)",
    spiralSubtitle: "나선형 3D 컬렉션을 마우스로 드래그하여 다문화 추천 도서를 360도로 탐색하세요.",
    spiralHint: "마우스 드래그로 3D 회전 | 도서 클릭 시 3D 상세 보기",
    viewAll: "전체보기",
    newReleasesTitle: "이달의 다문화 신간 & 사서 추천 도서",
    newReleasesSubtitle: "베트남, 태국, 중국, 몽골, 영어권 최신 수서 인기 목록",
    gridMode: "3D 카드 그리드",
    listMode: "사서 전용 리스트",
    searchPageTitle: "도서 검색 & 통합 수서 관",
    searchPageSubtitle: "언어별, 연령별, KDC 분류기호, ISBN으로 원하시는 다문화 도서를 실시간 검색하세요.",
    filterHeader: "수서 필터",
    resetFilters: "초기화",
    filterLang: "언어 (Language)",
    filterAge: "대상 연령 (Target Age)",
    filterKdc: "KDC 분류기호",
    searchPlaceholder: "도서명, 저자, ISBN, KDC 번호로 검색...",
    sortPopular: "도서관 대출 인기순",
    sortNewest: "최신 출간순",
    sortPriceAsc: "납품가 낮은순",
    totalResults: "검색 결과",
    items: "건",
    addSelectedToCart: "선택 항목 견적함에 담기",
    curationTitle: "3D 나선형 큐레이션 기획전 관",
    curationSubtitle: "2026년 도서관 수서 담당 사서님을 위한 맞춤형 다문화 기획 패키지 컬렉션",
    cartTitle: "장바구니 & 도서관 수서 견적함",
    cartSubtitle: "선택하신 수서목록을 확인하고, 1초 만에 PDF 공식 견적서 및 Excel 납품 데이터로 다운로드하세요.",
    clearCart: "견적함 비우기",
    tableBookInfo: "도서 서지정보",
    tableIsbn: "ISBN / KDC",
    tablePrice: "정가",
    tableB2bPrice: "도서관 납품가 (10% Off)",
    tableQty: "수량",
    tableSubtotal: "소계",
    quoteSummaryTitle: "수서 견적서 작성 & 발급",
    formInstitution: "도서관 / 기관명",
    formLibrarian: "수서 담당 사서성함",
    formContact: "연락처 / 이메일",
    formDeliveryDate: "납품 희망일",
    subtotalRegular: "총 정가 합계:",
    b2bDiscount: "도서관 B2B 특별 할인 (10%):",
    shippingFee: "배송료 (10만원 이상 무료):",
    netTotal: "최종 납품 견적금액:",
    btnExportPdf: "PDF 공식 견적서 발급 (인쇄/저장)",
    btnExportExcel: "Excel / MARC 데이터 다운로드",
    detail3dHint: "360° 마우스 드래그로 3D 책 회전 & 입체 확인",
    addToCartBtn: "장바구니 견적함 담기",
    instantQuoteBtn: "바로 견적서 작성",
    samplePreviewBtn: "원서 샘플 미리보기"
  },
  EN: {
    navHome: "Home",
    navSearch: "Search & Acquisition",
    navCuration: "3D Curation",
    navCart: "Quote & Cart",
    navDetail: "3D Detail",
    b2bTag: "Librarian B2B Portal",
    heroBadge: "3D Constellation Matrix & Kinetic Wave",
    heroTitle: "Digital Acquisition & 3D Spiral Curation for World Literature Stars",
    heroDesc: "The smartest B2B procurement solution for librarians, featuring 150,000+ multicultural titles across 24 countries, auto-KDC classification, and 1-second official quote generation.",
    heroCtaSearch: "Start Book Search & Procurement",
    heroCtaCuration: "Explore 3D Curation Exhibitions",
    stat1: "Global Multicultural Books",
    stat2: "Public Libraries Supplied",
    stat3: "KDC/MARC Automated Cataloging",
    spiralTitle: "3D Spiral Showcase Carousel",
    spiralSubtitle: "Drag the helical 3D spiral collection to explore recommended multicultural books in 360 degrees.",
    spiralHint: "Drag mouse to rotate 3D spiral | Click book for 3D inspection",
    viewAll: "View All",
    newReleasesTitle: "Monthly Multicultural New Releases",
    newReleasesSubtitle: "Latest acquisitions in Vietnamese, Thai, Chinese, Mongolian, and English",
    gridMode: "3D Card Grid",
    listMode: "Librarian Table View",
    searchPageTitle: "Book Search & Acquisition Hub",
    searchPageSubtitle: "Real-time search by language, age, KDC classification, and ISBN.",
    filterHeader: "Procurement Filters",
    resetFilters: "Reset",
    filterLang: "Language",
    filterAge: "Target Age",
    filterKdc: "KDC Classification",
    searchPlaceholder: "Search title, author, ISBN, KDC...",
    sortPopular: "Most Popular",
    sortNewest: "Newest Releases",
    sortPriceAsc: "Price: Low to High",
    totalResults: "Search Results",
    items: "items",
    addSelectedToCart: "Add Selected to Cart",
    curationTitle: "3D Spiral Curation Exhibitions",
    curationSubtitle: "Curated B2B multicultural packages designed for library acquisition officers",
    cartTitle: "Cart & B2B Quote Command Center",
    cartSubtitle: "Review your acquisition cart and generate official PDF quotes or Excel MARC exports instantly.",
    clearCart: "Clear Cart",
    tableBookInfo: "Book Metadata",
    tableIsbn: "ISBN / KDC",
    tablePrice: "List Price",
    tableB2bPrice: "Library Price (10% Off)",
    tableQty: "Qty",
    tableSubtotal: "Subtotal",
    quoteSummaryTitle: "Generate Official B2B Quote",
    formInstitution: "Library / Institution Name",
    formLibrarian: "Acquisition Librarian",
    formContact: "Contact / Email",
    formDeliveryDate: "Desired Delivery Date",
    subtotalRegular: "Regular Total:",
    b2bDiscount: "B2B Library Discount (10%):",
    shippingFee: "Shipping Fee:",
    netTotal: "Net Procurement Total:",
    btnExportPdf: "Generate Official PDF Quote",
    btnExportExcel: "Download Excel / MARC Data",
    detail3dHint: "360° Drag to inspect 3D book object",
    addToCartBtn: "Add to Procurement Cart",
    instantQuoteBtn: "Create Instant Quote",
    samplePreviewBtn: "Sample Preview"
  },
  VI: {
    navHome: "Trang chủ",
    navSearch: "Tìm kiếm sách",
    navCuration: "Triển lãm 3D",
    navCart: "Giỏ hàng & Báo giá",
    navDetail: "Chi tiết 3D",
    b2bTag: "Dành cho Thủ thư",
    heroBadge: "3D Constellation Matrix & Kinetic Wave",
    heroTitle: "Giải pháp thu mua sách đa văn hóa kỹ thuật số & 3D Spiral Curation",
    heroDesc: "Cung cấp hơn 150.000 đầu sách từ 24 quốc gia, tự động phân loại KDC và tạo báo giá B2B chính thức trong 1 giây.",
    heroCtaSearch: "Bắt đầu tìm kiếm sách",
    heroCtaCuration: "Xem bộ sưu tập 3D",
    stat1: "Sách đa văn hóa toàn cầu",
    stat2: "Thư viện đã cung cấp",
    stat3: "Tự động phân loại KDC/MARC",
    spiralTitle: "Bộ sưu tập 3D Spiral Showcase",
    spiralSubtitle: "Kéo xoắn ốc 3D để khám phá sách đa văn hóa được đề xuất 360 độ.",
    spiralHint: "Kéo chuột để xoay 3D | Nhấp vào sách để xem chi tiết",
    viewAll: "Xem tất cả",
    newReleasesTitle: "Sách mới xuất bản hàng tháng",
    newReleasesSubtitle: "Danh sách mua sắm mới nhất về tiếng Việt, Thái, Trung, Mông Cổ và Anh",
    gridMode: "Lưới thẻ 3D",
    listMode: "Danh sách thủ thư",
    searchPageTitle: "Trung tâm tìm kiếm & Thu mua sách",
    searchPageSubtitle: "Tìm kiếm thời gian thực theo ngôn ngữ, độ tuổi, mã KDC và ISBN.",
    filterHeader: "Bộ lọc thu mua",
    resetFilters: "Đặt lại",
    filterLang: "Ngôn ngữ (Language)",
    filterAge: "Độ tuổi (Target Age)",
    filterKdc: "Mã phân loại KDC",
    searchPlaceholder: "Tìm theo tên sách, tác giả, ISBN, KDC...",
    sortPopular: "Phổ biến nhất",
    sortNewest: "Mới nhất",
    sortPriceAsc: "Giá: Thấp đến Cao",
    totalResults: "Kết quả tìm kiếm",
    items: "sách",
    addSelectedToCart: "Thêm mục chọn vào báo giá",
    curationTitle: "Triển lãm 3D Spiral Curation",
    curationSubtitle: "Gói sách đa văn hóa B2B thiết kế riêng cho các thư viện năm 2026",
    cartTitle: "Giỏ hàng & Báo giá thư viện",
    cartSubtitle: "Kiểm tra danh sách và xuất báo giá PDF chính thức hoặc tệp Excel MARC.",
    clearCart: "Xóa giỏ hàng",
    tableBookInfo: "Thông tin sách",
    tableIsbn: "ISBN / KDC",
    tablePrice: "Giá niêm yết",
    tableB2bPrice: "Giá thư viện (Giảm 10%)",
    tableQty: "Số lượng",
    tableSubtotal: "Thành tiền",
    quoteSummaryTitle: "Tạo báo giá chính thức",
    formInstitution: "Tên thư viện / Cơ quan",
    formLibrarian: "Thủ thư phụ trách",
    formContact: "Liên hệ / Email",
    formDeliveryDate: "Ngày giao hàng mong muốn",
    subtotalRegular: "Tổng giá niêm yết:",
    b2bDiscount: "Chiết khấu thư viện (10%):",
    shippingFee: "Phí vận chuyển:",
    netTotal: "Tổng thanh toán:",
    btnExportPdf: "Xuất báo giá PDF chính thức",
    btnExportExcel: "Tải xuống dữ liệu Excel/MARC",
    detail3dHint: "Kéo 360° để kiểm tra sách 3D",
    addToCartBtn: "Thêm vào giỏ hàng",
    instantQuoteBtn: "Tạo báo giá ngay",
    samplePreviewBtn: "Xem thử mẫu"
  },
  ZH: {
    navHome: "主页",
    navSearch: "图书搜索与采购",
    navCuration: "3D 策展展厅",
    navCart: "报价单与购物车",
    navDetail: "3D 详情页",
    b2bTag: "图书馆员专享",
    heroBadge: "3D Constellation Matrix & Kinetic Wave",
    heroTitle: "连接世界文学星空 数字采购与3D螺旋策展解决方案",
    heroDesc: "面向图书馆采编部门的高效B2B采购平台，拥有24国原版多元文化图书，支持KDC自动分类与1秒一键生成官方报价单。",
    heroCtaSearch: "开始图书搜索与采购",
    heroCtaCuration: "浏览3D策展特展",
    stat1: "全球多元文化原版书",
    stat2: "全国合作图书馆",
    stat3: "KDC/MARC自动编目",
    spiralTitle: "3D 螺旋展示柜 (Spiral Showcase)",
    spiralSubtitle: "拖动3D螺旋展架，360度全景探索推荐的多元文化图书。",
    spiralHint: "拖动鼠标旋转3D螺旋 | 点击图书查看3D详情",
    viewAll: "查看全部",
    newReleasesTitle: "本月多元文化新书推荐",
    newReleasesSubtitle: "越南语、泰语、中文、蒙古语、英语最新采购热榜",
    gridMode: "3D 卡片网格",
    listMode: "馆员专用列表",
    searchPageTitle: "图书搜索与综合采购馆",
    searchPageSubtitle: "按语种、年龄段、KDC分类号及ISBN实时检索多元文化图书。",
    filterHeader: "采购筛选器",
    resetFilters: "重置",
    filterLang: "语种 (Language)",
    filterAge: "目标年龄 (Target Age)",
    filterKdc: "KDC 分类号",
    searchPlaceholder: "按书名、作者、ISBN、KDC检索...",
    sortPopular: "借阅热门度",
    sortNewest: "最新出版",
    sortPriceAsc: "采购价由低到高",
    totalResults: "搜索结果",
    items: "本",
    addSelectedToCart: "将选中项加入报价单",
    curationTitle: "3D 螺旋策展特展馆",
    curationSubtitle: "为2026年图书馆采编部门量身定制的多元文化采购套餐",
    cartTitle: "购物车与图书馆采购报价单",
    cartSubtitle: "确认采购清单，1秒一键导出PDF官方报价单及Excel编目数据。",
    clearCart: "清空报价单",
    tableBookInfo: "图书书目信息",
    tableIsbn: "ISBN / KDC",
    tablePrice: "原价",
    tableB2bPrice: "图书馆采购价 (9折)",
    tableQty: "数量",
    tableSubtotal: "小计",
    quoteSummaryTitle: "填写并生成采购报价单",
    formInstitution: "图书馆 / 机构名称",
    formLibrarian: "采编馆员姓名",
    formContact: "联系电话 / 邮箱",
    formDeliveryDate: "期望送达日期",
    subtotalRegular: "原价总额:",
    b2bDiscount: "图书馆B2B优惠 (10%):",
    shippingFee: "运费:",
    netTotal: "最终采购报价:",
    btnExportPdf: "生成PDF官方报价单 (打印/保存)",
    btnExportExcel: "下载 Excel / MARC 数据",
    detail3dHint: "360° 拖动鼠标旋转查看3D立体图书",
    addToCartBtn: "加入采购购物车",
    instantQuoteBtn: "立即生成报价单",
    samplePreviewBtn: "试读试看"
  },
  TH: {
    navHome: "หน้าแรก",
    navSearch: "ค้นหาและจัดซื้อหนังสือ",
    navCuration: "นิทรรศการ 3D",
    navCart: "ตะกร้าและใบเสนอราคา",
    navDetail: "รายละเอียด 3D",
    b2bTag: "สำหรับบรรณารักษ์",
    heroBadge: "3D Constellation Matrix & Kinetic Wave",
    heroTitle: "โซลูชันการจัดซื้อดิจิทัลและ 3D Spiral Curation เพื่อเชื่อมโยงวรรณกรรมโลก",
    heroDesc: "แพลตฟอร์มจัดซื้อสำหรับบรรณารักษ์ รวบรวมหนังสือหลากหลายวัฒนธรรมจาก 24 ประเทศ พร้อมระบบจัดหมวดหมู่ KDC อัตโนมัติและสร้างใบเสนอราคา B2B ใน 1 วินาที",
    heroCtaSearch: "เริ่มค้นหาและจัดซื้อหนังสือ",
    heroCtaCuration: "เข้าชมนิทรรศการ 3D",
    stat1: "หนังสือหลากหลายวัฒนธรรมทั่วโลก",
    stat2: "ห้องสมุดที่ได้รับการจัดส่ง",
    stat3: "เชื่อมโยงข้อมูล KDC/MARC อัตโนมัติ",
    spiralTitle: "3D Spiral Showcase",
    spiralSubtitle: "ลากหมุนวงเกลียว 3D เพื่อสำรวจหนังสือแนะนำแบบ 360 องศา",
    spiralHint: "ลากเมาส์เพื่อหมุน 3D | คลิกที่หนังสือเพื่อดูรายละเอียด 3D",
    viewAll: "ดูทั้งหมด",
    newReleasesTitle: "หนังสือใหม่ประจำเดือน",
    newReleasesSubtitle: "รายการหนังสือล่าสุดภาษาเวียดนาม ไทย จีน มองโกเลีย และอังกฤษ",
    gridMode: "ตารางการ์ด 3D",
    listMode: "รายการสำหรับบรรณารักษ์",
    searchPageTitle: "ศูนย์ค้นหาและจัดซื้อหนังสือ",
    searchPageSubtitle: "ค้นหาแบบเรียลไทม์ตามภาษา ช่วงอายุ รหัส KDC และ ISBN",
    filterHeader: "ตัวกรองการจัดซื้อ",
    resetFilters: "รีเซ็ต",
    filterLang: "ภาษา (Language)",
    filterAge: "ช่วงอายุ (Target Age)",
    filterKdc: "รหัส KDC",
    searchPlaceholder: "ค้นหาตามชื่อหนังสือ ผู้แต่ง ISBN รหัส KDC...",
    sortPopular: "ยอดนิยมในห้องสมุด",
    sortNewest: "ตีพิมพ์ล่าสุด",
    sortPriceAsc: "ราคา: ต่ำไปสูง",
    totalResults: "ผลการค้นหา",
    items: "เล่ม",
    addSelectedToCart: "เพิ่มรายการที่เลือกในใบเสนอราคา",
    curationTitle: "นิทรรศการ 3D Spiral Curation",
    curationSubtitle: "แพ็กเกจหนังสือหลากหลายวัฒนธรรม B2B ออกแบบเป็นพิเศษสำหรับห้องสมุดปี 2026",
    cartTitle: "ตะกร้าสินค้าและใบเสนอราคาห้องสมุด",
    cartSubtitle: "ตรวจสอบรายการและดาวน์โหลดใบเสนอราคา PDF หรือไฟล์ Excel MARC ได้ทันที",
    clearCart: "ล้างตะกร้า",
    tableBookInfo: "ข้อมูลบรรณานุกรม",
    tableIsbn: "ISBN / KDC",
    tablePrice: "ราคาปกติ",
    tableB2bPrice: "ราคาห้องสมุด (ลด 10%)",
    tableQty: "จำนวน",
    tableSubtotal: "รวม",
    quoteSummaryTitle: "สร้างใบเสนอราคา B2B",
    formInstitution: "ชื่อห้องสมุด / สถาบัน",
    formLibrarian: "ชื่อบรรณารักษ์ผู้รับผิดชอบ",
    formContact: "เบอร์โทรศัพท์ / อีเมล",
    formDeliveryDate: "วันที่ต้องการให้จัดส่ง",
    subtotalRegular: "ราคารวมปกติ:",
    b2bDiscount: "ส่วนลด B2B (10%):",
    shippingFee: "ค่าจัดส่ง:",
    netTotal: "ราคารวมสุทธิ:",
    btnExportPdf: "ออกใบเสนอราคา PDF สด",
    btnExportExcel: "ดาวน์โหลดข้อมูล Excel / MARC",
    detail3dHint: "ลาก 360° เพื่อหมุนดูหนังสือ 3D",
    addToCartBtn: "เพิ่มลงตะกร้าจัดซื้อ",
    instantQuoteBtn: "สร้างใบเสนอราคาทันที",
    samplePreviewBtn: "ดูตัวอย่างหนังสือ"
  }
};

// --- 4. GLOBAL APPLICATION STATE ---
const appState = {
  currentLang: "KO",
  currentRoute: "home",
  cart: [
    { bookId: "book-1", qty: 10 },
    { bookId: "book-2", qty: 5 },
    { bookId: "book-5", qty: 8 }
  ],
  selectedBookForDetail: "book-1",
  viewMode: "grid", // "grid" or "list"
  filters: {
    keyword: "",
    languages: [],
    ages: [],
    kdcCodes: [],
    sort: "popular"
  },
  selectedSearchIds: new Set()
};

// --- 5. APP INITIALIZATION & NAVIGATION ---
document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initRouter();
  initThreeHeroBackground();
  initThreeSpiralCarousel();
  initThreeDetailBookInspector();
  initClickParticleEffect();
  initEventListeners();
  renderApp();
  
  // Re-render Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Router Initialization
function initRouter() {
  window.addEventListener("hashchange", handleRoute);
  handleRoute();
}

function handleRoute() {
  let hash = window.location.hash.replace("#", "") || "home";
  
  // Check if route has query params like detail?id=book-2
  if (hash.includes("?")) {
    const parts = hash.split("?");
    hash = parts[0];
    const params = new URLSearchParams(parts[1]);
    if (params.has("id")) {
      appState.selectedBookForDetail = params.get("id");
    }
  }

  appState.currentRoute = hash;

  // Show/Hide Page Sections
  const pages = document.querySelectorAll(".page-section");
  pages.forEach(page => {
    if (page.id === `page-${hash}`) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });

  // Update Nav Links Active State
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    if (item.dataset.nav === hash) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Show Detail Nav Link if on detail page
  const detailNavLink = document.getElementById("nav-detail-link");
  if (detailNavLink) {
    if (hash === "detail") {
      detailNavLink.style.display = "flex";
    }
  }

  // Trigger page-specific re-renders
  if (hash === "home") {
    renderHomeBooks();
  } else if (hash === "search") {
    renderSearchResults();
  } else if (hash === "curation") {
    renderCurationPackages();
  } else if (hash === "cart") {
    renderCartTable();
  } else if (hash === "detail") {
    renderBookDetail();
    updateDetail3DTexture();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// i18n Translation Engine
function initI18n() {
  const langSelect = document.getElementById("lang-switcher");
  if (langSelect) {
    langSelect.value = appState.currentLang;
    langSelect.addEventListener("change", (e) => {
      appState.currentLang = e.target.value;
      updateLanguageUI();
    });
  }
}

function updateLanguageUI() {
  const dict = I18N_DICTIONARY[appState.currentLang] || I18N_DICTIONARY.KO;
  
  // Translate elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate placeholders with data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Re-render active views to reflect translated labels
  renderApp();
}

function renderApp() {
  updateCartBadge();
  if (appState.currentRoute === "home") renderHomeBooks();
  else if (appState.currentRoute === "search") renderSearchResults();
  else if (appState.currentRoute === "curation") renderCurationPackages();
  else if (appState.currentRoute === "cart") renderCartTable();
  else if (appState.currentRoute === "detail") renderBookDetail();
}

// --- 6. EVENT LISTENERS ---
function initEventListeners() {
  // Reset Filters Button
  const btnReset = document.getElementById("btn-reset-filters");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      appState.filters = { keyword: "", languages: [], ages: [], kdcCodes: [], sort: "popular" };
      document.getElementById("search-keyword-input").value = "";
      document.querySelectorAll(".filter-sidebar input[type='checkbox']").forEach(cb => cb.checked = false);
      renderSearchResults();
    });
  }

  // Search keyword input
  const searchInput = document.getElementById("search-keyword-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.filters.keyword = e.target.value.trim();
      renderSearchResults();
    });
  }

  // Sort Selector
  const sortSelect = document.getElementById("search-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      appState.filters.sort = e.target.value;
      renderSearchResults();
    });
  }

  // View Mode Switcher (Grid vs List)
  const btnGrid = document.getElementById("view-mode-grid");
  const btnList = document.getElementById("view-mode-list");
  if (btnGrid && btnList) {
    btnGrid.addEventListener("click", () => {
      appState.viewMode = "grid";
      btnGrid.classList.add("active");
      btnList.classList.remove("active");
      renderHomeBooks();
    });
    btnList.addEventListener("click", () => {
      appState.viewMode = "list";
      btnList.classList.add("active");
      btnGrid.classList.remove("active");
      renderHomeBooks();
    });
  }

  // Add Selected Search Items to Cart
  const btnAddSelected = document.getElementById("btn-add-selected-cart");
  if (btnAddSelected) {
    btnAddSelected.addEventListener("click", () => {
      if (appState.selectedSearchIds.size === 0) {
        showToast("견적함에 담을 도서를 선택해주세요.", "info");
        return;
      }
      appState.selectedSearchIds.forEach(id => addToCart(id, 1, false));
      appState.selectedSearchIds.clear();
      updateCartBadge();
      renderSearchResults();
      showToast("선택된 도서가 견적함에 추가되었습니다!", "success");
    });
  }

  // Clear Cart
  const btnClearCart = document.getElementById("btn-clear-cart");
  if (btnClearCart) {
    btnClearCart.addEventListener("click", () => {
      if (confirm("견적함의 모든 항목을 비우시겠습니까?")) {
        appState.cart = [];
        updateCartBadge();
        renderCartTable();
        showToast("견적함이 비워졌습니다.", "info");
      }
    });
  }

  // PDF Export
  const btnPdf = document.getElementById("btn-export-pdf");
  if (btnPdf) {
    btnPdf.addEventListener("click", openPdfQuoteModal);
  }

  // Excel Export
  const btnExcel = document.getElementById("btn-export-excel");
  if (btnExcel) {
    btnExcel.addEventListener("click", exportCartToExcelCSV);
  }

  // Close Quote Modal
  const btnCloseModal = document.getElementById("btn-close-modal");
  if (btnCloseModal) {
    btnCloseModal.addEventListener("click", () => {
      document.getElementById("quote-modal").classList.remove("active");
    });
  }

  // Print Now
  const btnPrintNow = document.getElementById("btn-print-now");
  if (btnPrintNow) {
    btnPrintNow.addEventListener("click", () => {
      window.print();
    });
  }

  // Sidebar Filter Checkboxes Event Delegation
  const filterLangContainer = document.getElementById("filter-lang-options");
  if (filterLangContainer) {
    filterLangContainer.addEventListener("change", updateFilterStateAndRender);
  }
  const filterAgeContainer = document.getElementById("filter-age-options");
  if (filterAgeContainer) {
    filterAgeContainer.addEventListener("change", updateFilterStateAndRender);
  }
  const filterKdcContainer = document.getElementById("filter-kdc-options");
  if (filterKdcContainer) {
    filterKdcContainer.addEventListener("change", updateFilterStateAndRender);
  }
}

function updateFilterStateAndRender() {
  const langChecked = Array.from(document.querySelectorAll("#filter-lang-options input:checked")).map(i => i.value);
  const ageChecked = Array.from(document.querySelectorAll("#filter-age-options input:checked")).map(i => i.value);
  const kdcChecked = Array.from(document.querySelectorAll("#filter-kdc-options input:checked")).map(i => i.value);

  appState.filters.languages = langChecked;
  appState.filters.ages = ageChecked;
  appState.filters.kdcCodes = kdcChecked;

  renderSearchResults();
}

// --- 7. CART & TOAST HELPERS ---
function addToCart(bookId, qty = 1, showToastNotify = true) {
  const existing = appState.cart.find(item => item.bookId === bookId);
  if (existing) {
    existing.qty += qty;
  } else {
    appState.cart.push({ bookId, qty });
  }
  updateCartBadge();
  if (showToastNotify) {
    const book = BOOK_DATABASE.find(b => b.id === bookId);
    showToast(`'${book ? book.title : "도서"}'가 견적함에 담겼습니다!`, "success");
  }
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count-badge");
  if (badge) {
    const totalQty = appState.cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = totalQty;
  }
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}" style="color:${type === 'success' ? 'var(--data-emerald)' : 'var(--accent-cyan)'}"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// --- 8. RENDERERS FOR SPA PAGES ---

// Render Home Page Books Grid / List
function renderHomeBooks() {
  const container = document.getElementById("home-books-container");
  if (!container) return;

  container.innerHTML = "";

  if (appState.viewMode === "list") {
    container.className = "books-list-view";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "0.75rem";

    BOOK_DATABASE.forEach(book => {
      const row = document.createElement("div");
      row.className = "glass-card";
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.justifyContent = "space-between";
      row.style.padding = "1rem 1.5rem";
      row.innerHTML = `
        <div style="display:flex; align-items:center; gap:1.25rem;">
          <div style="width:40px; height:55px; border-radius:3px; background:${book.coverGradient}; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:800; font-size:0.8rem; box-shadow:0 4px 8px rgba(0,0,0,0.5);">
            ${book.lang}
          </div>
          <div>
            <a href="#detail?id=${book.id}" style="font-weight:700; color:#fff; text-decoration:none; font-size:1.05rem;">${book.title}</a>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-top:0.2rem;">
              ${book.originalTitle} | ${book.author} | ${book.publisher}
            </div>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:2rem;">
          <div class="chip chip-kdc">KDC ${book.kdc}</div>
          <div style="text-align:right;">
            <div class="price-regular">${book.price.toLocaleString()}원</div>
            <div class="price-b2b">${book.b2bPrice.toLocaleString()}원</div>
          </div>
          <button class="btn-neon btn-sm" onclick="addToCart('${book.id}', 1)">
            <i data-lucide="shopping-cart" style="width:14px;height:14px;"></i>
            담기
          </button>
        </div>
      `;
      container.appendChild(row);
    });
  } else {
    container.className = "books-grid";
    container.style.display = "grid";

    BOOK_DATABASE.forEach(book => {
      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML = `
        <div class="book-card-cover-wrapper" style="background: radial-gradient(circle at center, rgba(30,41,59,0.8), #000);">
          <span class="chip chip-lang book-card-badge-lang">${book.langName}</span>
          <div class="book-card-cover-img" style="background:${book.coverGradient}; display:flex; flex-direction:column; justify-content:space-between; padding:0.85rem; color:#fff;">
            <span style="font-size:0.65rem; font-family:var(--font-mono); opacity:0.8;">KDC ${book.kdc}</span>
            <div style="font-weight:800; font-size:0.95rem; line-height:1.2;">${book.title}</div>
            <span style="font-size:0.65rem; text-align:right; font-family:var(--font-mono); opacity:0.8;">${book.isbn}</span>
          </div>
        </div>

        <div class="book-card-body">
          <a href="#detail?id=${book.id}" class="book-card-title" style="text-decoration:none;">${book.title}</a>
          <div class="book-card-author">${book.author} | ${book.publisher}</div>
          
          <div class="book-card-meta">
            <span class="chip chip-kdc">${book.targetAge}</span>
            <span class="chip chip-stock">${book.stock}</span>
          </div>

          <div class="book-card-price-row">
            <div class="price-box">
              <span class="price-regular">${book.price.toLocaleString()}원</span>
              <span class="price-b2b">${book.b2bPrice.toLocaleString()}원</span>
            </div>
            
            <button class="btn-neon btn-sm" onclick="addToCart('${book.id}', 1)">
              <i data-lucide="shopping-cart" style="width:14px;height:14px;"></i>
              수서 담기
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  if (window.lucide) window.lucide.createIcons();
}

// Render Search Page Results
function renderSearchResults() {
  const container = document.getElementById("search-results-container");
  const countEl = document.getElementById("search-results-count");
  if (!container) return;

  let filtered = BOOK_DATABASE.filter(book => {
    // Keyword Filter
    if (appState.filters.keyword) {
      const kw = appState.filters.keyword.toLowerCase();
      const matchTitle = book.title.toLowerCase().includes(kw);
      const matchOrig = book.originalTitle.toLowerCase().includes(kw);
      const matchAuthor = book.author.toLowerCase().includes(kw);
      const matchIsbn = book.isbn.includes(kw);
      const matchKdc = book.kdc.includes(kw);
      if (!matchTitle && !matchOrig && !matchAuthor && !matchIsbn && !matchKdc) {
        return false;
      }
    }

    // Language Filter
    if (appState.filters.languages.length > 0) {
      if (!appState.filters.languages.includes(book.lang)) return false;
    }

    // Age Filter
    if (appState.filters.ages.length > 0) {
      if (!appState.filters.ages.includes(book.targetAge)) return false;
    }

    // KDC Filter
    if (appState.filters.kdcCodes.length > 0) {
      const mainKdc = book.kdc.split(".")[0];
      const match = appState.filters.kdcCodes.some(code => mainKdc.startsWith(code.substring(0, 1)));
      if (!match) return false;
    }

    return true;
  });

  // Sort
  if (appState.filters.sort === "popular") {
    filtered.sort((a, b) => a.borrowRank - b.borrowRank);
  } else if (appState.filters.sort === "newest") {
    filtered.sort((a, b) => b.id.localeCompare(a.id));
  } else if (appState.filters.sort === "price-asc") {
    filtered.sort((a, b) => a.b2bPrice - b.b2bPrice);
  }

  if (countEl) countEl.textContent = filtered.length;

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 4rem; text-align: center; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--glass-border);">
        <i data-lucide="search-x" style="width:48px; height:48px; margin-bottom:1rem; color:var(--text-dim);"></i>
        <h3>검색 조건에 맞는 도서가 없습니다.</h3>
        <p style="font-size:0.9rem; margin-top:0.5rem;">필터를 초기화하거나 검색어를 수정해보세요.</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  filtered.forEach(book => {
    const isChecked = appState.selectedSearchIds.has(book.id);
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <div class="book-card-cover-wrapper" style="background: radial-gradient(circle at center, rgba(30,41,59,0.8), #000);">
        <input type="checkbox" class="search-select-cb" data-id="${book.id}" ${isChecked ? 'checked' : ''} style="position:absolute; top:0.75rem; right:0.75rem; z-index:10; width:18px; height:18px; accent-color:var(--primary-indigo); cursor:pointer;">
        <span class="chip chip-lang book-card-badge-lang">${book.langName}</span>
        <div class="book-card-cover-img" style="background:${book.coverGradient}; display:flex; flex-direction:column; justify-content:space-between; padding:0.85rem; color:#fff;">
          <span style="font-size:0.65rem; font-family:var(--font-mono); opacity:0.8;">KDC ${book.kdc}</span>
          <div style="font-weight:800; font-size:0.95rem; line-height:1.2;">${book.title}</div>
          <span style="font-size:0.65rem; text-align:right; font-family:var(--font-mono); opacity:0.8;">${book.isbn}</span>
        </div>
      </div>

      <div class="book-card-body">
        <a href="#detail?id=${book.id}" class="book-card-title" style="text-decoration:none;">${book.title}</a>
        <div class="book-card-author">${book.author}</div>
        
        <div class="book-card-meta">
          <span class="chip chip-kdc">KDC ${book.kdc}</span>
          <span class="chip chip-stock">${book.stock}</span>
        </div>

        <div class="book-card-price-row">
          <div class="price-box">
            <span class="price-regular">${book.price.toLocaleString()}원</span>
            <span class="price-b2b">${book.b2bPrice.toLocaleString()}원</span>
          </div>
          
          <button class="btn-neon btn-sm" onclick="addToCart('${book.id}', 1)">
            <i data-lucide="shopping-cart" style="width:14px;height:14px;"></i>
            담기
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // Listen to search checkboxes
  document.querySelectorAll(".search-select-cb").forEach(cb => {
    cb.addEventListener("change", (e) => {
      const id = e.target.dataset.id;
      if (e.target.checked) appState.selectedSearchIds.add(id);
      else appState.selectedSearchIds.delete(id);
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

// Render Curation Packages Page
function renderCurationPackages() {
  const container = document.getElementById("curation-packages-container");
  if (!container) return;

  container.innerHTML = "";

  CURATION_PACKAGES.forEach(pkg => {
    const card = document.createElement("div");
    card.className = "curation-card glass-card";
    
    // Build stack thumbnails
    let stackThumbs = "";
    pkg.bookIds.forEach(id => {
      const b = BOOK_DATABASE.find(item => item.id === id);
      if (b) {
        stackThumbs += `<div class="stack-book-thumb" style="background:${b.coverGradient}; padding:0.4rem; color:#fff; font-size:0.65rem; font-weight:700;">${b.title}</div>`;
      }
    });

    card.innerHTML = `
      <div class="curation-badge">${pkg.badge} | ${pkg.discountRate}</div>
      <h3 class="curation-title">${pkg.title}</h3>
      <p class="curation-desc">${pkg.subtitle}</p>

      <div class="curation-preview-stack">
        ${stackThumbs}
      </div>

      <div style="font-size:0.8rem; color:var(--text-muted); font-family:var(--font-mono); margin-bottom:1.25rem;">
        <i data-lucide="info" style="width:12px;height:12px; display:inline;"></i> ${pkg.kdcSummary}
      </div>

      <div style="margin-top:auto; display:flex; align-items:center; justify-content:space-between; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1);">
        <div>
          <div style="font-size:0.75rem; color:var(--text-dim); text-decoration:line-through; font-family:var(--font-mono);">${pkg.regularPrice.toLocaleString()}원</div>
          <div style="font-size:1.3rem; font-weight:800; color:var(--accent-cyan); font-family:var(--font-mono);">${pkg.discountPrice.toLocaleString()}원</div>
        </div>

        <button class="btn-cyan btn-sm" onclick="addPackageToCart('${pkg.id}')">
          <i data-lucide="package-check"></i>
          패키지 전체 담기
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

function addPackageToCart(pkgId) {
  const pkg = CURATION_PACKAGES.find(p => p.id === pkgId);
  if (!pkg) return;

  pkg.bookIds.forEach(id => addToCart(id, 5, false));
  updateCartBadge();
  showToast(`'${pkg.title}' 세트가 견적함에 담겼습니다!`, "success");
}

// Render Cart Table & Totals
function renderCartTable() {
  const tbody = document.getElementById("cart-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  if (appState.cart.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align:center; padding:3rem; color:var(--text-muted);">
          <i data-lucide="shopping-bag" style="width:40px; height:40px; margin-bottom:0.5rem; color:var(--text-dim);"></i>
          <p>견적함에 담긴 도서가 없습니다.</p>
        </td>
      </tr>
    `;
    updateCartTotals(0, 0);
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let totalRegular = 0;
  let totalDiscount = 0;

  appState.cart.forEach((item, index) => {
    const book = BOOK_DATABASE.find(b => b.id === item.bookId);
    if (!book) return;

    const subtotalReg = book.price * item.qty;
    const subtotalB2b = book.b2bPrice * item.qty;
    totalRegular += subtotalReg;
    totalDiscount += subtotalB2b;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="checkbox" checked></td>
      <td>
        <div class="cart-book-info">
          <div class="cart-book-thumb" style="background:${book.coverGradient}; padding:0.4rem; color:#fff; font-size:0.65rem; font-weight:700;">
            ${book.lang}
          </div>
          <div>
            <a href="#detail?id=${book.id}" style="font-weight:700; color:#fff; text-decoration:none;">${book.title}</a>
            <div style="font-size:0.75rem; color:var(--text-muted);">${book.originalTitle} | ${book.publisher}</div>
          </div>
        </div>
      </td>
      <td class="font-mono" style="font-size:0.8rem;">
        <div>${book.isbn}</div>
        <div style="color:var(--accent-cyan);">KDC ${book.kdc}</div>
      </td>
      <td class="font-mono">${book.price.toLocaleString()}원</td>
      <td class="font-mono" style="color:var(--data-emerald); font-weight:700;">${book.b2bPrice.toLocaleString()}원</td>
      <td>
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
          <input type="number" class="qty-input" value="${item.qty}" onchange="setCartQty(${index}, this.value)">
          <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
        </div>
      </td>
      <td class="font-mono" style="font-weight:700; color:var(--accent-cyan);">${subtotalB2b.toLocaleString()}원</td>
      <td>
        <button style="background:none; border:none; color:var(--accent-rose); cursor:pointer;" onclick="removeCartItem(${index})">
          <i data-lucide="x" style="width:16px;height:16px;"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  updateCartTotals(totalRegular, totalDiscount);
  if (window.lucide) window.lucide.createIcons();
}

function updateCartQty(index, delta) {
  if (appState.cart[index]) {
    appState.cart[index].qty = Math.max(1, appState.cart[index].qty + delta);
    updateCartBadge();
    renderCartTable();
  }
}

function setCartQty(index, val) {
  const qty = parseInt(val) || 1;
  if (appState.cart[index]) {
    appState.cart[index].qty = Math.max(1, qty);
    updateCartBadge();
    renderCartTable();
  }
}

function removeCartItem(index) {
  appState.cart.splice(index, 1);
  updateCartBadge();
  renderCartTable();
  showToast("항목이 삭제되었습니다.", "info");
}

function updateCartTotals(regularTotal, b2bTotal) {
  const discountAmount = regularTotal - b2bTotal;
  const shipping = b2bTotal >= 100000 || b2bTotal === 0 ? 0 : 3000;
  const finalNet = b2bTotal + shipping;

  const regEl = document.getElementById("summary-regular-price");
  const discEl = document.getElementById("summary-discount-price");
  const shipEl = document.getElementById("summary-shipping-fee");
  const finalEl = document.getElementById("summary-final-price");

  if (regEl) regEl.textContent = `${regularTotal.toLocaleString()}원`;
  if (discEl) discEl.textContent = `-${discountAmount.toLocaleString()}원`;
  if (shipEl) shipEl.textContent = `${shipping.toLocaleString()}원`;
  if (finalEl) finalEl.textContent = `${finalNet.toLocaleString()}원`;
}

// Render Book Detail Page
function renderBookDetail() {
  const container = document.getElementById("detail-info-container");
  if (!container) return;

  const book = BOOK_DATABASE.find(b => b.id === appState.selectedBookForDetail) || BOOK_DATABASE[0];

  container.innerHTML = `
    <div>
      <div style="display:flex; gap:0.5rem; margin-bottom:0.75rem;">
        <span class="chip chip-lang">${book.langName}</span>
        <span class="chip chip-kdc">KDC ${book.kdc} (${book.kdcName})</span>
        <span class="chip chip-stock">${book.stock}</span>
      </div>

      <h1 class="detail-title-main">${book.title}</h1>
      <div class="detail-title-orig">${book.originalTitle}</div>
    </div>

    <div class="detail-metadata-grid font-mono">
      <div>
        <div class="meta-item-label">저자 / 역자</div>
        <div class="meta-item-val">${book.author}</div>
      </div>
      <div>
        <div class="meta-item-label">출판사</div>
        <div class="meta-item-val">${book.publisher}</div>
      </div>
      <div>
        <div class="meta-item-label">국제표준도서번호 (ISBN)</div>
        <div class="meta-item-val">${book.isbn}</div>
      </div>
      <div>
        <div class="meta-item-label">대상 연령 / 대출순위</div>
        <div class="meta-item-val">${book.targetAge} | 도서관 ${book.borrowRank}위</div>
      </div>
      <div>
        <div class="meta-item-label">시중 정가</div>
        <div class="meta-item-val" style="text-decoration:line-through; color:var(--text-dim);">${book.price.toLocaleString()}원</div>
      </div>
      <div>
        <div class="meta-item-label">도서관 B2B 특별 납품가 (10% Off)</div>
        <div class="meta-item-val" style="color:var(--data-emerald); font-size:1.1rem; font-weight:800;">${book.b2bPrice.toLocaleString()}원</div>
      </div>
    </div>

    <div style="margin-bottom:1.5rem;">
      <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.4rem; color:var(--accent-cyan);">줄거리 요약 (Synopsis)</h4>
      <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.6;">${book.description}</p>
    </div>

    <div style="background:rgba(6,182,212,0.1); border:1px solid var(--accent-cyan); padding:0.85rem 1rem; border-radius:var(--radius-md); margin-bottom:1.5rem;">
      <div style="font-size:0.8rem; font-weight:700; color:var(--accent-cyan); margin-bottom:0.2rem;">💡 사서 수서 추천 사유</div>
      <div style="font-size:0.85rem; color:var(--text-main);">${book.recommendation}</div>
    </div>

    <div class="detail-actions-row">
      <button class="btn-neon" onclick="addToCart('${book.id}', 1)">
        <i data-lucide="shopping-cart"></i>
        <span>견적함에 담기</span>
      </button>
      <a href="#cart" class="btn-emerald">
        <i data-lucide="file-text"></i>
        <span>바로 견적서 작성</span>
      </a>
      <button class="btn-outline" onclick="showToast('원서 PDF 샘플 미리보기를 준비 중입니다.', 'info')">
        <i data-lucide="book-open"></i>
        <span>샘플 미리보기</span>
      </button>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

// --- 9. PDF QUOTE GENERATOR & EXCEL EXPORT ---

function openPdfQuoteModal() {
  const modal = document.getElementById("quote-modal");
  const container = document.getElementById("pdf-printable-content");
  if (!modal || !container) return;

  const instName = document.getElementById("quote-inst-name").value || "국립다문화중앙도서관";
  const librarian = document.getElementById("quote-librarian-name").value || "홍길동 사서";
  const contact = document.getElementById("quote-contact").value || "02-1234-5678";
  const deliveryDate = document.getElementById("quote-delivery-date").value || "2026-09-15";

  let totalReg = 0;
  let totalB2b = 0;
  let tableRows = "";

  appState.cart.forEach((item, i) => {
    const b = BOOK_DATABASE.find(x => x.id === item.bookId);
    if (!b) return;
    const subReg = b.price * item.qty;
    const subB2b = b.b2bPrice * item.qty;
    totalReg += subReg;
    totalB2b += subB2b;

    tableRows += `
      <tr style="border-bottom:1px solid #e2e8f0; font-size:0.85rem;">
        <td style="padding:0.6rem;">${i + 1}</td>
        <td style="padding:0.6rem; font-weight:600;">${b.title} (${b.originalTitle})</td>
        <td style="padding:0.6rem; font-family:monospace;">${b.isbn}</td>
        <td style="padding:0.6rem; font-family:monospace;">${b.kdc}</td>
        <td style="padding:0.6rem; text-align:right;">${b.price.toLocaleString()}원</td>
        <td style="padding:0.6rem; text-align:right; font-weight:700; color:#047857;">${b.b2bPrice.toLocaleString()}원</td>
        <td style="padding:0.6rem; text-align:center;">${item.qty}</td>
        <td style="padding:0.6rem; text-align:right; font-weight:700;">${subB2b.toLocaleString()}원</td>
      </tr>
    `;
  });

  const discount = totalReg - totalB2b;

  container.innerHTML = `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-bottom:1.5rem; font-size:0.85rem; border:1px solid #cbd5e1; padding:1rem; border-radius:6px;">
      <div>
        <div style="margin-bottom:0.3rem;"><strong>공급 받는 기관:</strong> ${instName}</div>
        <div style="margin-bottom:0.3rem;"><strong>수서 담당 사서:</strong> ${librarian} 님</div>
        <div><strong>연락처 / 이메일:</strong> ${contact}</div>
      </div>
      <div>
        <div style="margin-bottom:0.3rem;"><strong>공급처:</strong> 다문화도서관 3D 수서사업부</div>
        <div style="margin-bottom:0.3rem;"><strong>납품 예정일:</strong> ${deliveryDate}</div>
        <div><strong>결제 조건:</strong> 도서관 수서 후불/지자체 정산</div>
      </div>
    </div>

    <table style="width:100%; border-collapse:collapse; text-align:left; margin-bottom:1.5rem;">
      <thead>
        <tr style="background:#f1f5f9; border-bottom:2px solid #0f172a; font-size:0.8rem; font-family:monospace;">
          <th style="padding:0.6rem;">NO</th>
          <th style="padding:0.6rem;">도서 서명 (원서명)</th>
          <th style="padding:0.6rem;">ISBN</th>
          <th style="padding:0.6rem;">KDC</th>
          <th style="padding:0.6rem; text-align:right;">정가</th>
          <th style="padding:0.6rem; text-align:right;">도서관 할인가</th>
          <th style="padding:0.6rem; text-align:center;">수량</th>
          <th style="padding:0.6rem; text-align:right;">소계</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>

    <div style="background:#f8fafc; padding:1.25rem; border-radius:6px; border:1px solid #cbd5e1; display:flex; justify-content:space-between; align-items:center;">
      <div style="font-size:0.85rem; color:#475569;">
        * 본 견적서는 도서관 납품용 공식 B2B 할인율(10%)이 적용된 금액입니다.
      </div>
      <div style="text-align:right;">
        <div style="font-size:0.85rem; color:#64748b;">총 정가: ${totalReg.toLocaleString()}원 | 할인금액: -${discount.toLocaleString()}원</div>
        <div style="font-size:1.4rem; font-weight:800; color:#0f172a; margin-top:0.2rem;">
          합계 금액: <span style="color:#0284c7;">${totalB2b.toLocaleString()}원</span> (VAT 면세)
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function exportCartToExcelCSV() {
  if (appState.cart.length === 0) {
    showToast("견적함이 비어있어 Excel을 다운로드할 수 없습니다.", "info");
    return;
  }

  let csvContent = "\uFEFF"; // UTF-8 BOM
  csvContent += "NO,도서ID,ISBN,KDC분류,도서서명,원서명,저자,출판사,언어,수량,정가,도서관할인가,총액\n";

  appState.cart.forEach((item, i) => {
    const b = BOOK_DATABASE.find(x => x.id === item.bookId);
    if (!b) return;
    const subtotal = b.b2bPrice * item.qty;
    csvContent += `"${i + 1}","${b.id}","${b.isbn}","${b.kdc}","${b.title}","${b.originalTitle}","${b.author}","${b.publisher}","${b.langName}",${item.qty},${b.price},${b.b2bPrice},${subtotal}\n`;
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `Multicultural_Library_Acquisition_Quote_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast("Excel/MARC 데이터 CSV 파일 다운로드가 시작되었습니다.", "success");
}

// --- 10. THREE.JS 3D VISUALIZATIONS ---

// A. Hero 3D Constellation & Kinetic Wave
let heroScene, heroCamera, heroRenderer, heroParticles, heroLines, heroWaveMesh;
let mouseX = 0, mouseY = 0;

function initThreeHeroBackground() {
  const canvas = document.getElementById("hero-3d-canvas");
  if (!canvas) return;

  heroScene = new THREE.Scene();
  heroCamera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  heroCamera.position.z = 120;

  heroRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  heroRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles
  const particleCount = 200;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 200;
    positions[i + 1] = (Math.random() - 0.5) * 150;
    positions[i + 2] = (Math.random() - 0.5) * 150;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const pMaterial = new THREE.PointsMaterial({
    color: 0x38bdf8,
    size: 2.2,
    transparent: true,
    opacity: 0.8
  });

  heroParticles = new THREE.Points(geometry, pMaterial);
  heroScene.add(heroParticles);

  // Constellation Lines
  const lineMat = new THREE.LineBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.25 });
  const lineGeo = new THREE.BufferGeometry();
  const linePositions = new Float32Array(particleCount * particleCount * 3);
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  heroLines = new THREE.LineSegments(lineGeo, lineMat);
  heroScene.add(heroLines);

  // Mouse Listener
  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
  });

  animateHero();
}

function animateHero() {
  requestAnimationFrame(animateHero);
  if (!heroScene || !heroRenderer) return;

  const time = Date.now() * 0.001;

  if (heroParticles) {
    heroParticles.rotation.y = time * 0.05 + mouseX * 0.002;
    heroParticles.rotation.x = mouseY * 0.002;
  }

  heroRenderer.render(heroScene, heroCamera);
}

// B. 3D Spiral Carousel Showcase
let spiralScene, spiralCamera, spiralRenderer, spiralGroup;
let isDraggingSpiral = false, previousMouseX = 0;

function initThreeSpiralCarousel() {
  const canvas = document.getElementById("spiral-3d-canvas");
  if (!canvas) return;

  spiralScene = new THREE.Scene();
  spiralCamera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  spiralCamera.position.set(0, 10, 50);

  spiralRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  spiralRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
  spiralRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  spiralGroup = new THREE.Group();
  spiralScene.add(spiralGroup);

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  spiralScene.add(ambientLight);
  const dirLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
  dirLight.position.set(20, 30, 40);
  spiralScene.add(dirLight);

  // Build Helix Spiral of 3D Books
  const radius = 18;
  const heightStep = 2.2;
  const count = BOOK_DATABASE.length;

  BOOK_DATABASE.forEach((book, i) => {
    const angle = i * 0.65;
    const y = (i - count / 2) * heightStep;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    // 3D Book Geometry
    const bookGeo = new THREE.BoxGeometry(4, 5.5, 0.7);
    const matColor = new THREE.Color(book.coverColor);
    const bookMat = new THREE.MeshStandardMaterial({
      color: matColor,
      roughness: 0.3,
      metalness: 0.2
    });

    const bookMesh = new THREE.Mesh(bookGeo, bookMat);
    bookMesh.position.set(x, y, z);
    bookMesh.rotation.y = -angle + Math.PI / 2;
    bookMesh.userData = { bookId: book.id };

    spiralGroup.add(bookMesh);
  });

  // Drag Controls
  canvas.addEventListener("mousedown", (e) => {
    isDraggingSpiral = true;
    previousMouseX = e.clientX;
  });
  window.addEventListener("mouseup", () => isDraggingSpiral = false);
  canvas.addEventListener("mousemove", (e) => {
    if (isDraggingSpiral && spiralGroup) {
      const deltaX = e.clientX - previousMouseX;
      spiralGroup.rotation.y += deltaX * 0.008;
      previousMouseX = e.clientX;
    }
  });

  // Click Raycaster to navigate to #detail
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / canvas.clientWidth) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / canvas.clientHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, spiralCamera);
    const intersects = raycaster.intersectObjects(spiralGroup.children);

    if (intersects.length > 0) {
      const hitBook = intersects[0].object;
      if (hitBook.userData && hitBook.userData.bookId) {
        window.location.hash = `#detail?id=${hitBook.userData.bookId}`;
      }
    }
  });

  animateSpiral();
}

function animateSpiral() {
  requestAnimationFrame(animateSpiral);
  if (!spiralScene || !spiralRenderer) return;

  if (spiralGroup && !isDraggingSpiral) {
    spiralGroup.rotation.y += 0.003;
  }

  spiralRenderer.render(spiralScene, spiralCamera);
}

// C. 360° 3D Book Inspector (#detail)
let detailScene, detailCamera, detailRenderer, detailBookMesh;
let isDraggingDetail = false, prevDetailX = 0, prevDetailY = 0;

function initThreeDetailBookInspector() {
  const canvas = document.getElementById("detail-3d-canvas");
  if (!canvas) return;

  detailScene = new THREE.Scene();
  detailCamera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  detailCamera.position.set(0, 0, 8);

  detailRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  detailRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
  detailRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Ambient & Directional Lights
  const ambLight = new THREE.AmbientLight(0xffffff, 0.9);
  detailScene.add(ambLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
  dirLight.position.set(5, 10, 7);
  detailScene.add(dirLight);

  // Book Box Mesh
  const geo = new THREE.BoxGeometry(2.4, 3.4, 0.4);
  const mat = new THREE.MeshStandardMaterial({ color: 0x6366f1, roughness: 0.3 });
  detailBookMesh = new THREE.Mesh(geo, mat);
  detailScene.add(detailBookMesh);

  // Mouse Drag to Rotate Book in 3D
  canvas.addEventListener("mousedown", (e) => {
    isDraggingDetail = true;
    prevDetailX = e.clientX;
    prevDetailY = e.clientY;
  });
  window.addEventListener("mouseup", () => isDraggingDetail = false);
  canvas.addEventListener("mousemove", (e) => {
    if (isDraggingDetail && detailBookMesh) {
      const deltaX = e.clientX - prevDetailX;
      const deltaY = e.clientY - prevDetailY;

      detailBookMesh.rotation.y += deltaX * 0.01;
      detailBookMesh.rotation.x += deltaY * 0.01;

      prevDetailX = e.clientX;
      prevDetailY = e.clientY;
    }
  });

  animateDetail3D();
}

function updateDetail3DTexture() {
  if (!detailBookMesh) return;
  const book = BOOK_DATABASE.find(b => b.id === appState.selectedBookForDetail) || BOOK_DATABASE[0];
  if (detailBookMesh.material) {
    detailBookMesh.material.color.set(book.coverColor);
  }
}

function animateDetail3D() {
  requestAnimationFrame(animateDetail3D);
  if (!detailScene || !detailRenderer) return;

  if (detailBookMesh && !isDraggingDetail) {
    detailBookMesh.rotation.y += 0.005;
  }

  detailRenderer.render(detailScene, detailCamera);
}

// D. Click Burst Micro-interaction Particle Effect
function initClickParticleEffect() {
  const canvas = document.getElementById("click-particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  window.addEventListener("click", (e) => {
    for (let i = 0; i < 16; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 2;
      particles.push({
        x: e.clientX,
        y: e.clientY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 3 + 2,
        alpha: 1,
        color: Math.random() > 0.5 ? "#06b6d4" : "#6366f1"
      });
    }
  });

  function renderParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.03;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(renderParticles);
  }

  renderParticles();
}

