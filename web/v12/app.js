/**
 * ==========================================================================
 * 다문화 에코 온실 라이브러리 (v12) - APPLICATION ENGINE (app.js)
 * B2B/B2C Multicultural Library Acquisition Portal
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. DATASETS & I18N DICTIONARY
// --------------------------------------------------------------------------

const BOOKS_DATA = [
  {
    id: 1,
    title: "지구를 품은 무지개 나무",
    subTitle: "The Rainbow Tree Embracing Earth",
    author: "에코그린 작가 / 김다은 역",
    publisher: "다문화온실출판사",
    isbn: "979-11-89001-01-2",
    kdc: "800 (문학 > 아동문학)",
    languages: ["KO", "EN", "VI"],
    category: "eco",
    age: "elem",
    price: 15000,
    summary: "세계 각국의 어린이들이 함께 가꾸어 나가는 초록빛 숲 이야기. 자연의 연대와 생태 존중의 가치를 전달하는 글로벌 환경 동화입니다.",
    coverColor: "#047857",
    ecoTheme: "forest"
  },
  {
    id: 2,
    title: "베트남에서 온 바람의 노래",
    subTitle: "Song of the Vietnamese Breeze",
    author: "응우옌 반 민 / 리엔 번역팀",
    publisher: "아시아문화재단",
    isbn: "979-11-89001-02-9",
    kdc: "800 (문학 > 전래동화)",
    languages: ["KO", "VI"],
    category: "folk",
    age: "child",
    price: 14000,
    summary: "메콩강 줄기를 따라 퍼지는 베트남의 아름다운 서정시와 전래동화. 다문화 가정이 함께 읽는 따뜻한 소통의 바람소리 책입니다.",
    coverColor: "#0d9488",
    ecoTheme: "ocean"
  },
  {
    id: 3,
    title: "초록 바다의 작은 파도",
    subTitle: "Little Waves in the Green Ocean",
    author: "루시아 산토스 / 이현주 역",
    publisher: "에코라이프북스",
    isbn: "979-11-89001-03-6",
    kdc: "400 (자연과학 > 생태학)",
    languages: ["KO", "EN", "ES"],
    category: "eco",
    age: "toddler",
    price: 16000,
    summary: "바닷속 산호초와 해양 생물들이 기후변화에 맞서 터전을 지켜내는 감동적인 이야기. 3개국어 번역이 병기되어 있습니다.",
    coverColor: "#0284c7",
    ecoTheme: "ocean"
  },
  {
    id: 4,
    title: "달빛 아래 숲속 다문화 축제",
    subTitle: "Multicultural Forest Festival under Moonlight",
    author: "왕웨이 / 박지민 역",
    publisher: "한중문화교류사",
    isbn: "979-11-89001-04-3",
    kdc: "300 (사회과학 > 다문화)",
    languages: ["KO", "ZH"],
    category: "multi",
    age: "elem",
    price: 13500,
    summary: "서로 다른 언어와 문화 배경을 가진 동물 친구들이 숲속 달빛 축제에서 우정을 나누는 따뜻한 다문화 공존 동화입니다.",
    coverColor: "#7c3aed",
    ecoTheme: "forest"
  },
  {
    id: 5,
    title: "할머니의 구름 정원",
    subTitle: "Grandma's Cloud Garden",
    author: "엠마 왓슨 / 정유진 역",
    publisher: "그린버드",
    isbn: "979-11-89001-05-0",
    kdc: "800 (문학 > 아동문학)",
    languages: ["KO", "EN"],
    category: "eco",
    age: "toddler",
    price: 15500,
    summary: "도시 옥상에서 빗물을 모아 자그마한 온실 정원을 가꾸는 할머니와 손녀의 따뜻한 생태 일상 이야기.",
    coverColor: "#16a34a",
    ecoTheme: "recycle"
  },
  {
    id: 6,
    title: "아마존에서 날아온 유색 새",
    subTitle: "Colorful Birds from the Amazon",
    author: "카를로스 고메스 / 이은비 역",
    publisher: "남미생태문고",
    isbn: "979-11-89001-06-7",
    kdc: "400 (자연과학 > 조류학)",
    languages: ["KO", "ES"],
    category: "eco",
    age: "youth",
    price: 17000,
    summary: "아마존 열대우림의 다양성과 생물 보호의 중요성을 다채로운 일러스트와 스페인어 병기 텍스트로 다룬 생태 그림책.",
    coverColor: "#ea580c",
    ecoTheme: "climate"
  },
  {
    id: 7,
    title: "용감한 사막 여우의 생태 여행",
    subTitle: "Brave Desert Fox's Eco Journey",
    author: "알렉스 테일러 / 한성민 역",
    publisher: "글로벌에코",
    isbn: "979-11-89001-07-4",
    kdc: "400 (자연과학 > 지구과학)",
    languages: ["KO", "EN"],
    category: "eco",
    age: "child",
    price: 14500,
    summary: "사막화되어 가는 지구의 오아시스를 찾아 여행을 떠나는 사막여우의 기후 위기 극복 탐험기.",
    coverColor: "#d97706",
    ecoTheme: "climate"
  },
  {
    id: 8,
    title: "하노이의 별빛 전래동화",
    subTitle: "Starlight Folktales of Hanoi",
    author: "쩐 찌 끄엉 / 강수진 역",
    publisher: "아시아다문화센타",
    isbn: "979-11-89001-08-1",
    kdc: "300 (사회과학 > 민속학)",
    languages: ["KO", "VI"],
    category: "folk",
    age: "elem",
    price: 16500,
    summary: "베트남 하노이 옛 거리의 오래된 버드나무 아래 전해 내려오는 지혜로운 옛 이야기 모음집.",
    coverColor: "#059669",
    ecoTheme: "forest"
  },
  {
    id: 9,
    title: "북극곰의 다문화 초록 편지",
    subTitle: "Polar Bear's Green Letter",
    author: "스벤 닐슨 / 박민수 역",
    publisher: "북유럽에코출판",
    isbn: "979-11-89001-09-8",
    kdc: "400 (자연과학 > 기후학)",
    languages: ["KO", "EN", "ZH"],
    category: "eco",
    age: "child",
    price: 15000,
    summary: "빙하가 녹아내리는 북극에서 전 세계 어린이들에게 보내는 북극곰의 친환경 메시지 편지.",
    coverColor: "#0891b2",
    ecoTheme: "climate"
  },
  {
    id: 10,
    title: "메콩강의 비밀 정원",
    subTitle: "Secret Garden of the Mekong",
    author: "레 티 후엉 / 김선우 역",
    publisher: "동남아문화연구소",
    isbn: "979-11-89001-10-4",
    kdc: "800 (문학 > 아동문학)",
    languages: ["KO", "VI"],
    category: "multi",
    age: "elem",
    price: 14000,
    summary: "동남아의 젖줄 메콩강 연안의 자원 생태계와 희귀 식물들을 탐험하는 아름다운 입체 동화책.",
    coverColor: "#15803d",
    ecoTheme: "forest"
  },
  {
    id: 11,
    title: "태양을 품은 안데스 이야기",
    subTitle: "Andean Tales of the Sun",
    author: "디에고 로페스 / 윤서연 역",
    publisher: "라틴아메리카출판",
    isbn: "979-11-89001-11-1",
    kdc: "900 (역사 > 지리)",
    languages: ["KO", "ES"],
    category: "folk",
    age: "youth",
    price: 16000,
    summary: "잉카 문명의 발상지 안데스 산맥 대자연과 고대 사람들이 지켜온 생태 수호 신화.",
    coverColor: "#b45309",
    ecoTheme: "forest"
  },
  {
    id: 12,
    title: "동화로 읽는 다문화 지구환경",
    subTitle: "Multicultural Earth Eco Stories",
    author: "글로벌에코연구회",
    publisher: "다문화온실출판사",
    isbn: "979-11-89001-12-8",
    kdc: "300 (사회과학 > 다문화)",
    languages: ["KO", "EN", "VI", "ZH", "ES"],
    category: "multi",
    age: "elem",
    price: 18000,
    summary: "5개국어가 동시 표기된 최고급 수서용 에코 옴니버스 책. 사서 추천 1위 환경 다문화 종합서.",
    coverColor: "#047857",
    ecoTheme: "recycle"
  }
];

const CURATION_PACKAGES = [
  {
    id: "cur-1",
    title: "지구를 살리는 다문화 환경 동화전 (10권 세트)",
    subTitle: "Eco-Multicultural Earth Saver Collection",
    desc: "기후변화, 해양생태, 리사이클링을 테마로 한 10권의 글로벌 다국어 동화 구성 세트. 기관 수서 시 15% 특별 할인과 전용 서가 라벨을 증정합니다.",
    origPrice: 158000,
    discPrice: 134300,
    booksCount: 10,
    targetAge: "어린이~초등 저학년",
    icon: "fa-earth-americas",
    items: [
      "지구를 품은 무지개 나무 (KO/EN/VI)",
      "초록 바다의 작은 파도 (KO/EN/ES)",
      "북극곰의 다문화 초록 편지 (KO/EN/ZH)",
      "할머니의 구름 정원 (KO/EN)",
      "외 6권의 환경 동화 모음집"
    ]
  },
  {
    id: "cur-2",
    title: "세계 자연 전래동화전 (8개국 수록 세트)",
    subTitle: "Global Nature Folklore Collection",
    desc: "베트남, 중국, 남미, 북유럽 등 세계 주요국의 자연관과 옛 지혜가 담긴 전래동화 8권 세트. QR 오디오북 포함.",
    origPrice: 128000,
    discPrice: 108800,
    booksCount: 8,
    targetAge: "전 연령대",
    icon: "fa-feather-pointed",
    items: [
      "베트남에서 온 바람의 노래 (KO/VI)",
      "하노이의 별빛 전래동화 (KO/VI)",
      "태양을 품은 안데스 이야기 (KO/ES)",
      "외 5권의 다국어 전래 세트"
    ]
  },
  {
    id: "cur-3",
    title: "초록빛 우정: 다문화 공존 대표도서 세트",
    subTitle: "Green Friendship: Multicultural Coexistence Set",
    desc: "다문화 가정과 일반 아동이 서로의 문화를 자연스럽게 배우며 생태적 연대감을 키우는 베스트셀러 6권 기획전.",
    origPrice: 97000,
    discPrice: 82450,
    booksCount: 6,
    targetAge: "유아~어린이",
    icon: "fa-people-roof",
    items: [
      "달빛 아래 숲속 다문화 축제 (KO/ZH)",
      "동화로 읽는 다문화 지구환경 (5개국어 병기)",
      "메콩강의 비밀 정원 (KO/VI)",
      "외 3권의 공존 동화 세트"
    ]
  }
];

const I18N = {
  KO: {
    topMsg: "공공도서관·학교도서관·다문화복지센터 사서 수서/구입 전용 포털 | 2026 에코 다문화 신간 수서 혜택 진행 중",
    navTitle: "다문화 에코 온실 라이브러리",
    navHome: "메인 온실",
    navSearch: "수서 검색",
    navCuration: "3D 큐레이션",
    navCart: "수서 장바구니",
    navDetail: "360° 서지관",
    heroBadge: "3D Botanical Glasshouse Bio-Dome",
    heroTitle: "자연과 에메랄드 온실 속에서<br>피어나는 <span class='highlight-emerald'>에코 다문화 도서 수서</span>",
    heroDesc: "전 세계 10개국 이상의 다문화 다언어 동화책과 기후·생태 환경 도서를 한눈에.<br>공공 및 학교 도서관 사서 선생님을 위한 맞춤형 3D 온실 큐레이션 및 1클릭 공문 견적 서비스를 경험하세요.",
    btnSearchNow: "수서 도서 검색하기",
    btnViewPavilion: "3D 큐레이션관 이동",
    statBooks: "다문화 수서 보유도서",
    statLangs: "원서 및 번역 병기본",
    statLibs: "전국 납품 도서관",
    statQuotes: "자동 공문 견적 지원",
    pavilionTitle: "3D 유리 파빌리온 특별 전시관",
    pavilionSub: "마우스로 화면을 드래그하여 파빌리온 전시장 내부를 360도로 둘러보세요.",
    newTitle: "사서 추천 에코 다문화 신간",
    catAll: "전체",
    catEco: "에코/생태 동화",
    catFolk: "다국어 전래",
    catMulti: "다문화 공존",
    filterTitle: "사서 맞춤 수서 필터",
    filterKeyword: "도서명 / 저자 / ISBN",
    filterLang: "수록 언어",
    filterAge: "대상 연령",
    filterKdc: "KDC 한국십진분류표",
    filterEco: "에코/환경 테마",
    searchResults: "검색된 수서 도서",
    btnAddSelected: "선택 항목 장바구니 추가",
    curationTitle: "3D 보타니컬 테마 큐레이션 기획전",
    curationSub: "공공/학교 도서관 수서 담당 사서님을 위해 구성된 맞춤형 다문화·환경 테마 패키지 세트입니다.",
    cartTitle: "사서 수서 장바구니 & 견적 계산기",
    btnClearCart: "장바구니 전체 비우기",
    thCover: "서찰",
    thInfo: "도서 서지정보",
    thKdc: "KDC 분류",
    thPrice: "정가",
    thQty: "수량",
    thSubtotal: "합계",
    thAction: "삭제",
    cartEmpty: "수서 장바구니가 비어 있습니다.<br>수서 검색 또는 큐레이션 관에서 도서를 추가해 주세요.",
    goSearch: "도서 검색하러 가기",
    summaryTitle: "기관 수서 견적 계산",
    lblInstitution: "납품/구입 기관 구분",
    lblEcoPackaging: "에코 친환경 포장 옵션",
    lblInstName: "기관명 (공문 표기용)",
    lblSubtotal: "정가 소계",
    lblDiscount: "기관 할인금액",
    lblShipping: "배송비 (도서관 직배송)",
    lblFinalTotal: "최종 수서 예산액",
    btnGenerateQuote: "1클릭 공문 견적서 발급",
    btnExportCsv: "서지/견적 엑셀 다운로드",
    btnAddCart: "수서 장바구니 담기"
  },
  EN: {
    topMsg: "B2B Acquisition Portal for Public & School Librarians | 2026 Eco-Multicultural Book Benefits Active",
    navTitle: "Emerald Botanical Library",
    navHome: "Home Glasshouse",
    navSearch: "Acquisition Search",
    navCuration: "3D Curations",
    navCart: "Cart & Quotes",
    navDetail: "360° Book Preview",
    heroBadge: "3D Botanical Glasshouse Bio-Dome",
    heroTitle: "Eco Multicultural Books<br>Blossoming in <span class='highlight-emerald'>Emerald Glasshouse</span>",
    heroDesc: "Explore multilingual books in 10+ languages and eco climate stories.<br>Enjoy 3D botanical curation and one-click official PDF quotes for librarians.",
    btnSearchNow: "Search Books",
    btnViewPavilion: "Explore 3D Pavilion",
    statBooks: "Acquisition Titles",
    statLangs: "Languages Available",
    statLibs: "Partner Libraries",
    statQuotes: "Instant PDF Quote",
    pavilionTitle: "3D Glass Pavilion Exhibition",
    pavilionSub: "Drag mouse to explore the interior of the glass pavilion in 360 degrees.",
    newTitle: "Librarian Recommended Titles",
    catAll: "All",
    catEco: "Eco & Nature",
    catFolk: "Folktales",
    catMulti: "Coexistence",
    filterTitle: "Librarian Filters",
    filterKeyword: "Title / Author / ISBN",
    filterLang: "Languages",
    filterAge: "Target Age",
    filterKdc: "KDC Classification",
    filterEco: "Eco Themes",
    searchResults: "Acquisition Books Found",
    btnAddSelected: "Add Selected to Cart",
    curationTitle: "3D Botanical Curation Packages",
    curationSub: "Tailored multicultural & ecological package sets designed for public and school libraries.",
    cartTitle: "Librarian Cart & Quote Calculator",
    btnClearCart: "Clear Cart",
    thCover: "Cover",
    thInfo: "Bibliographic Info",
    thKdc: "KDC Code",
    thPrice: "List Price",
    thQty: "Qty",
    thSubtotal: "Subtotal",
    thAction: "Remove",
    cartEmpty: "Your acquisition cart is empty.<br>Please add books from search or curation pages.",
    goSearch: "Go to Search",
    summaryTitle: "Quote Calculation",
    lblInstitution: "Institution Type",
    lblEcoPackaging: "Eco Packaging Options",
    lblInstName: "Library / Institution Name",
    lblSubtotal: "Subtotal",
    lblDiscount: "Institutional Discount",
    lblShipping: "Library Direct Shipping",
    lblFinalTotal: "Estimated Budget",
    btnGenerateQuote: "Generate Official Quote (PDF)",
    btnExportCsv: "Export MARC / Excel",
    btnAddCart: "Add to Acquisition Cart"
  },
  VI: {
    topMsg: "Cổng thông tin mua sách thư viện đa văn hóa & sinh thái cho Thủ thư | Ưu đãi 2026",
    navTitle: "Thư viện Nhà kính Ngọc Lục Bảo",
    navHome: "Nhà kính Chính",
    navSearch: "Tìm kiếm Sách",
    navCuration: "Triển lãm 3D",
    navCart: "Giỏ hàng & Báo giá",
    navDetail: "Xem 3D 360°",
    heroBadge: "3D Botanical Glasshouse Bio-Dome",
    heroTitle: "Sách Đa văn hóa Sinh thái<br>Bừng nở tại <span class='highlight-emerald'>Nhà kính Ngọc Lục Bảo</span>",
    heroDesc: "Khám phá sách thiếu nhi đa ngôn ngữ và truyện sinh thái môi trường.<br>Hỗ trợ thủ thư báo giá chính thức 1-click và triển lãm 3D.",
    btnSearchNow: "Tìm kiếm Sách ngay",
    btnViewPavilion: "Xem Triển lãm 3D",
    statBooks: "Đầu sách mua sắm",
    statLangs: "Ngôn ngữ hỗ trợ",
    statLibs: "Thư viện đối tác",
    statQuotes: "Báo giá PDF Tự động",
    pavilionTitle: "Triển lãm Nhà kính 3D",
    pavilionSub: "Kéo chuột để xoay triển lãm nhà kính 360 độ.",
    newTitle: "Sách Mới Thủ Thư Khuyên Dùng",
    catAll: "Tất cả",
    catEco: "Sinh thái",
    catFolk: "Cổ tích",
    catMulti: "Đa văn hóa",
    filterTitle: "Bộ lọc Thủ thư",
    filterKeyword: "Tên / Tác giả / ISBN",
    filterLang: "Ngôn ngữ",
    filterAge: "Độ tuổi",
    filterKdc: "Phân loại KDC",
    filterEco: "Chủ đề Sinh thái",
    searchResults: "Số lượng sách tìm thấy",
    btnAddSelected: "Thêm mục đã chọn vào giỏ",
    curationTitle: "Gói Tuyển chọn 3D Sinh thái",
    curationSub: "Các bộ sách đa văn hóa và môi trường được thiết kế dành riêng cho các thư viện.",
    cartTitle: "Giỏ hàng & Máy tính Báo giá",
    btnClearCart: "Xóa toàn bộ giỏ hàng",
    thCover: "Bìa",
    thInfo: "Thông tin Thư목",
    thKdc: "KDC",
    thPrice: "Giá niêm yết",
    thQty: "Số lượng",
    thSubtotal: "Tổng phụ",
    thAction: "Xóa",
    cartEmpty: "Giỏ hàng thư viện của bạn đang trống.<br>Vui lòng thêm sách từ trang tìm kiếm.",
    goSearch: "Đến trang tìm kiếm",
    summaryTitle: "Tính Báo giá Thư viện",
    lblInstitution: "Loại hình Cơ quan",
    lblEcoPackaging: "Đóng gói Sinh thái",
    lblInstName: "Tên Thư viện / Cơ quan",
    lblSubtotal: "Tổng tiền gốc",
    lblDiscount: "Chiết khấu Cơ quan",
    lblShipping: "Giao hàng Trực tiếp Thư viện",
    lblFinalTotal: "Ngân sách Dự toán",
    btnGenerateQuote: "Tạo Báo giá Chính thức (PDF)",
    btnExportCsv: "Tải file Excel / MARC",
    btnAddCart: "Thêm vào Giỏ Mua Sắm"
  },
  ZH: {
    topMsg: "面向公共及学校图书馆员的多文化生态图书采编采购门户 | 2026年特惠",
    navTitle: "翡翠温室多文化图书馆",
    navHome: "主温室",
    navSearch: "图书采编",
    navCuration: "3D策展",
    navCart: "采编购物车",
    navDetail: "360°书目馆",
    heroBadge: "3D Botanical Glasshouse Bio-Dome",
    heroTitle: "盛开在翡翠温室中的<br><span class='highlight-emerald'>生态多文化图书采编</span>",
    heroDesc: "一站式探索10余种语言的多文化童话与气候生态图书。<br>为图书馆员提供一键式公文报价单与3D温室策展体验。",
    btnSearchNow: "立即搜索图书",
    btnViewPavilion: "进入3D展馆",
    statBooks: "采编馆藏图书",
    statLangs: "多国语言对照",
    statLibs: "全国合作图书馆",
    statQuotes: "自动生成公文报价",
    pavilionTitle: "3D玻璃展馆特别展览",
    pavilionSub: "拖动鼠标360度环视玻璃展馆内部。",
    newTitle: "馆员推荐生态多文化新书",
    catAll: "全部",
    catEco: "生态童话",
    catFolk: "多语民间故事",
    catMulti: "多文化共存",
    filterTitle: "馆员定制筛选",
    filterKeyword: "书名 / 作者 / ISBN",
    filterLang: "语种",
    filterAge: "适用年龄",
    filterKdc: "KDC分类号",
    filterEco: "生态主题",
    searchResults: "已搜索到的图书",
    btnAddSelected: "添加选中项至购物车",
    curationTitle: "3D植物主题策展套装",
    curationSub: "专为公共及学校图书馆采编量身定制的多文化与环境主题套装。",
    cartTitle: "采编购物车与报价计算器",
    btnClearCart: "清空购物车",
    thCover: "封面",
    thInfo: "书目信息",
    thKdc: "KDC分类",
    thPrice: "原价",
    thQty: "数量",
    thSubtotal: "小计",
    thAction: "删除",
    cartEmpty: "您的采编购物车为空。<br>请从搜索或策展页面添加图书。",
    goSearch: "前往搜索",
    summaryTitle: "机构采编报价计算",
    lblInstitution: "采编机构类别",
    lblEcoPackaging: "环保包装选项",
    lblInstName: "机构名称 (公文抬头)",
    lblSubtotal: "码洋小计",
    lblDiscount: "机构折扣金额",
    lblShipping: "图书馆直邮配送",
    lblFinalTotal: "最终采编预算",
    btnGenerateQuote: "一键生成官方报价单(PDF)",
    btnExportCsv: "下载书目/报价Excel",
    btnAddCart: "加入采编购物车"
  },
  ES: {
    topMsg: "Portal de Adquisiciones para Bibliotecarios | Beneficios Eco-Multiculturales 2026",
    navTitle: "Biblioteca Botánica Esmeralda",
    navHome: "Invernadero Principal",
    navSearch: "Búsqueda Libros",
    navCuration: "Curaduría 3D",
    navCart: "Carrito y Cotización",
    navDetail: "Vista 360° Book",
    heroBadge: "3D Botanical Glasshouse Bio-Dome",
    heroTitle: "Libros Eco Multiculturales<br>en el <span class='highlight-emerald'>Invernadero Esmeralda</span>",
    heroDesc: "Explore libros infantiles multilingües y cuentos ecológicos.<br>Genere cotizaciones oficiales en PDF con 1-clic y explore la curaduría 3D.",
    btnSearchNow: "Buscar Libros Ahora",
    btnViewPavilion: "Ver Pabellón 3D",
    statBooks: "Títulos de Adquisición",
    statLangs: "Idiomas Disponibles",
    statLibs: "Bibliotecas Socias",
    statQuotes: "Cotización PDF Automática",
    pavilionTitle: "Pabellón de Cristal 3D",
    pavilionSub: "Arrastre el mouse para explorar el pabellón de cristal en 360 grados.",
    newTitle: "Novedades Recomendadas",
    catAll: "Todos",
    catEco: "Eco y Naturaleza",
    catFolk: "Cuentos Populares",
    catMulti: "Coexistencia",
    filterTitle: "Filtros para Bibliotecarios",
    filterKeyword: "Título / Autor / ISBN",
    filterLang: "Idiomas",
    filterAge: "Edad",
    filterKdc: "Clasificación KDC",
    filterEco: "Temas Ecológicos",
    searchResults: "Libros Encontrados",
    btnAddSelected: "Añadir Seleccionados",
    curationTitle: "Paquetes 3D Botánicos",
    curationSub: "Colecciones temáticas adaptadas para bibliotecas públicas y escolares.",
    cartTitle: "Carrito de Adquisición y Calculadora",
    btnClearCart: "Vaciar Carrito",
    thCover: "Portada",
    thInfo: "Información Bibliográfica",
    thKdc: "KDC",
    thPrice: "Precio Lista",
    thQty: "Cant.",
    thSubtotal: "Subtotal",
    thAction: "Eliminar",
    cartEmpty: "Su carrito de adquisición está vacío.<br>Añada libros desde la búsqueda o curaduría.",
    goSearch: "Ir a Búsqueda",
    summaryTitle: "Cálculo de Cotización",
    lblInstitution: "Tipo de Institución",
    lblEcoPackaging: "Empaque Ecológico",
    lblInstName: "Nombre de la Biblioteca",
    lblSubtotal: "Subtotal",
    lblDiscount: "Descuento Institucional",
    lblShipping: "Envío Directo a Biblioteca",
    lblFinalTotal: "Presupuesto Estimado",
    btnGenerateQuote: "Generar Cotización Oficial (PDF)",
    btnExportCsv: "Exportar MARC / Excel",
    btnAddCart: "Añadir al Carrito"
  }
};

// --------------------------------------------------------------------------
// 2. STATE MANAGEMENT & APP VARS
// --------------------------------------------------------------------------

let currentLang = "KO";
let cartItems = [
  { bookId: 1, qty: 5 },
  { bookId: 12, qty: 3 }
];
let currentSearchMode = "grid"; // 'grid' | 'table'
let currentActiveBook = BOOKS_DATA[0];

// Audio State
let audioCtx = null;
let isAudioActive = false;

// Three.js Renderers & Scenes
let heroScene, heroCamera, heroRenderer, heroDomeMesh, heroCrystalBooks = [];
let pavilionScene, pavilionCamera, pavilionRenderer, pavilionGroup;
let book3dScene, book3dCamera, book3dRenderer, book3dMesh, isBookSpinning = true;

// --------------------------------------------------------------------------
// 3. THREE.JS GRAPHICS ENGINES
// --------------------------------------------------------------------------

function initHeroScene() {
  const container = document.getElementById("hero-canvas");
  if (!container) return;

  heroScene = new THREE.Scene();
  heroCamera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  heroCamera.position.set(0, 5, 28);

  heroRenderer = new THREE.WebGLRenderer({ canvas: container, alpha: true, antialias: true });
  heroRenderer.setSize(container.clientWidth, container.clientHeight);
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  heroScene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0x34d399, 1.2);
  dirLight.position.set(15, 25, 20);
  heroScene.add(dirLight);

  const pointLight = new THREE.PointLight(0x10b981, 2, 50);
  pointLight.position.set(0, 0, 0);
  heroScene.add(pointLight);

  // 1. Geodesic Bio-Dome (Icosahedron Wireframe + Glass Fill)
  const domeGeo = new THREE.IcosahedronGeometry(12, 3);
  const domeMat = new THREE.MeshPhysicalMaterial({
    color: 0x047857,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
    roughness: 0.1,
    metalness: 0.1
  });
  heroDomeMesh = new THREE.Mesh(domeGeo, domeMat);
  heroScene.add(heroDomeMesh);

  // Inner Botanical Tree Trunk & Foliage
  const trunkGeo = new THREE.CylinderGeometry(0.6, 1.2, 8, 8);
  const trunkMat = new THREE.MeshLambertMaterial({ color: 0x064e3b });
  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.y = -3;
  heroScene.add(trunk);

  const foliageGeo = new THREE.DodecahedronGeometry(4, 1);
  const foliageMat = new THREE.MeshStandardMaterial({
    color: 0x10b981,
    roughness: 0.3,
    metalness: 0.2,
    emissive: 0x047857,
    emissiveIntensity: 0.4
  });
  const foliage = new THREE.Mesh(foliageGeo, foliageMat);
  foliage.position.y = 2;
  heroScene.add(foliage);

  // 2. Orbiting Emerald Crystal Books
  heroCrystalBooks = [];
  const crystalMat = new THREE.MeshPhongMaterial({
    color: 0x34d399,
    shininess: 100,
    transparent: true,
    opacity: 0.85
  });

  for (let i = 0; i < 8; i++) {
    const bookGeo = new THREE.BoxGeometry(1.6, 2.2, 0.4);
    const crystalBook = new THREE.Mesh(bookGeo, crystalMat);
    
    const angle = (i / 8) * Math.PI * 2;
    const radius = 16;
    crystalBook.position.x = Math.cos(angle) * radius;
    crystalBook.position.z = Math.sin(angle) * radius;
    crystalBook.position.y = Math.sin(i * 2) * 2;
    crystalBook.rotation.y = angle;
    crystalBook.rotation.z = 0.2;

    heroScene.add(crystalBook);
    heroCrystalBooks.push({ mesh: crystalBook, angle: angle, radius: radius, speed: 0.005 + i * 0.001 });
  }

  // Animation Loop
  function animateHero() {
    requestAnimationFrame(animateHero);

    if (heroDomeMesh) {
      heroDomeMesh.rotation.y += 0.002;
    }

    if (foliage) {
      foliage.rotation.y += 0.005;
    }

    heroCrystalBooks.forEach(item => {
      item.angle += item.speed;
      item.mesh.position.x = Math.cos(item.angle) * item.radius;
      item.mesh.position.z = Math.sin(item.angle) * item.radius;
      item.mesh.position.y = Math.sin(item.angle * 3) * 2.5;
      item.mesh.rotation.y += 0.01;
    });

    heroRenderer.render(heroScene, heroCamera);
  }

  animateHero();

  // Mouse Parallax Effect
  window.addEventListener("mousemove", (e) => {
    const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    if (heroCamera) {
      heroCamera.position.x += (mouseX * 4 - heroCamera.position.x) * 0.05;
      heroCamera.position.y += (-mouseY * 3 + 5 - heroCamera.position.y) * 0.05;
      heroCamera.lookAt(0, 0, 0);
    }
  });
}

function initPavilionScene() {
  const container = document.getElementById("pavilion-canvas");
  if (!container) return;

  pavilionScene = new THREE.Scene();
  pavilionCamera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  pavilionCamera.position.set(0, 6, 20);

  pavilionRenderer = new THREE.WebGLRenderer({ canvas: container, alpha: true, antialias: true });
  pavilionRenderer.setSize(container.clientWidth, container.clientHeight);
  pavilionRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 20, 10);
  pavilionScene.add(light);
  pavilionScene.add(new THREE.AmbientLight(0x10b981, 0.8));

  pavilionGroup = new THREE.Group();
  pavilionScene.add(pavilionGroup);

  // Pavilion Glass Floor
  const floorGeo = new THREE.CylinderGeometry(10, 10, 0.4, 32);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x064e3b,
    roughness: 0.1,
    metalness: 0.8
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.position.y = -2;
  pavilionGroup.add(floor);

  // Glass Showcase Pedestals & Featured Books
  for (let i = 0; i < 3; i++) {
    const pedGeo = new THREE.CylinderGeometry(1.2, 1.2, 3, 16);
    const pedMat = new THREE.MeshPhysicalMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.4,
      roughness: 0.2
    });
    const ped = new THREE.Mesh(pedGeo, pedMat);
    const angle = (i / 3) * Math.PI * 2;
    ped.position.set(Math.cos(angle) * 5, -0.5, Math.sin(angle) * 5);
    pavilionGroup.add(ped);

    // Book Cover Mock
    const bookGeo = new THREE.BoxGeometry(1.4, 2, 0.3);
    const bookMat = new THREE.MeshPhongMaterial({ color: 0x10b981 });
    const book = new THREE.Mesh(bookGeo, bookMat);
    book.position.set(Math.cos(angle) * 5, 2, Math.sin(angle) * 5);
    book.rotation.y = angle + Math.PI / 2;
    pavilionGroup.add(book);
  }

  // Interactive Rotation via Mouse Drag
  let isDragging = false;
  let previousMouseX = 0;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    previousMouseX = e.clientX;
  });

  window.addEventListener("mouseup", () => isDragging = false);

  window.addEventListener("mousemove", (e) => {
    if (isDragging && pavilionGroup) {
      const deltaX = e.clientX - previousMouseX;
      pavilionGroup.rotation.y += deltaX * 0.008;
      previousMouseX = e.clientX;
    }
  });

  document.getElementById("btn-pavilion-reset")?.addEventListener("click", () => {
    if (pavilionGroup) pavilionGroup.rotation.y = 0;
  });

  function animatePavilion() {
    requestAnimationFrame(animatePavilion);
    if (!isDragging && pavilionGroup) {
      pavilionGroup.rotation.y += 0.003;
    }
    pavilionRenderer.render(pavilionScene, pavilionCamera);
  }

  animatePavilion();
}

function initBook3DPreview(book) {
  const container = document.getElementById("book-3d-canvas");
  if (!container) return;

  book3dScene = new THREE.Scene();
  book3dCamera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  book3dCamera.position.set(0, 0, 7);

  book3dRenderer = new THREE.WebGLRenderer({ canvas: container, alpha: true, antialias: true });
  book3dRenderer.setSize(container.clientWidth, container.clientHeight);
  book3dRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Lighting
  const ambLight = new THREE.AmbientLight(0xffffff, 0.9);
  book3dScene.add(ambLight);

  const dirLight = new THREE.DirectionalLight(0x34d399, 1.5);
  dirLight.position.set(5, 10, 7);
  book3dScene.add(dirLight);

  // 3D Book Geometry (Box)
  const bookGeo = new THREE.BoxGeometry(2.4, 3.4, 0.5);

  // Cover Texture Color based on book
  const hexColor = parseInt((book.coverColor || "#047857").replace("#", "0x"));

  const materials = [
    new THREE.MeshStandardMaterial({ color: 0xffffff }), // Right Pages
    new THREE.MeshStandardMaterial({ color: hexColor }), // Left Spine
    new THREE.MeshStandardMaterial({ color: 0xffffff }), // Top Pages
    new THREE.MeshStandardMaterial({ color: 0xffffff }), // Bottom Pages
    new THREE.MeshStandardMaterial({ color: hexColor, roughness: 0.3, metalness: 0.2 }), // Front Cover
    new THREE.MeshStandardMaterial({ color: hexColor, roughness: 0.3 })  // Back Cover
  ];

  book3dMesh = new THREE.Mesh(bookGeo, materials);
  book3dScene.add(book3dMesh);

  // Orbit Controls Simulation via Mouse Drag
  let isDragging = false;
  let prevX = 0, prevY = 0;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });

  window.addEventListener("mouseup", () => isDragging = false);

  window.addEventListener("mousemove", (e) => {
    if (isDragging && book3dMesh) {
      const deltaX = e.clientX - prevX;
      const deltaY = e.clientY - prevY;

      book3dMesh.rotation.y += deltaX * 0.01;
      book3dMesh.rotation.x += deltaY * 0.01;

      prevX = e.clientX;
      prevY = e.clientY;
    }
  });

  function animateBook3D() {
    requestAnimationFrame(animateBook3D);
    if (isBookSpinning && !isDragging && book3dMesh) {
      book3dMesh.rotation.y += 0.01;
    }
    book3dRenderer.render(book3dScene, book3dCamera);
  }

  animateBook3D();
}

// --------------------------------------------------------------------------
// 4. INTERACTIVE LEAF PARTICLE SYSTEM (CANVAS 2D)
// --------------------------------------------------------------------------

function initLeafParticles() {
  const canvas = document.getElementById("leaf-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const leafColors = ["#10b981", "#34d399", "#059669", "#6ee7b7", "#a7f3d0"];

  for (let i = 0; i < 25; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 4,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1.5 + 0.5,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.03,
      color: leafColors[Math.floor(Math.random() * leafColors.length)]
    });
  }

  function spawnLeaf(x, y) {
    particles.push({
      x: x,
      y: y,
      size: Math.random() * 10 + 6,
      speedX: (Math.random() - 0.5) * 3,
      speedY: Math.random() * 2 + 1,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.05,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      life: 100
    });
  }

  window.addEventListener("click", (e) => {
    for (let i = 0; i < 6; i++) {
      spawnLeaf(e.clientX, e.clientY);
    }
  });

  function drawLeaf(ctx, p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.moveTo(0, -p.size);
    ctx.quadraticCurveTo(p.size, 0, 0, p.size);
    ctx.quadraticCurveTo(-p.size, 0, 0, -p.size);
    ctx.fill();
    ctx.restore();
  }

  function renderLeaves() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, idx) => {
      p.x += p.speedX + Math.sin(p.y * 0.01) * 0.5;
      p.y += p.speedY;
      p.angle += p.spin;

      if (p.life !== undefined) {
        p.life--;
        if (p.life <= 0) particles.splice(idx, 1);
      }

      if (p.y > height) {
        p.y = -10;
        p.x = Math.random() * width;
      }

      drawLeaf(ctx, p);
    });

    requestAnimationFrame(renderLeaves);
  }

  renderLeaves();
}

// --------------------------------------------------------------------------
// 5. WEB AUDIO BREEZE SOUND SYNTHESIZER
// --------------------------------------------------------------------------

function initWebAudioBreeze() {
  const audioBtn = document.getElementById("btn-audio-toggle");
  const audioIcon = document.getElementById("audio-icon");

  audioBtn?.addEventListener("click", () => {
    if (!audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioCtx();
    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    isAudioActive = !isAudioActive;

    if (isAudioActive) {
      audioBtn.classList.add("active");
      audioIcon.className = "fa-solid fa-volume-high";
      playBreezeSound();
      showToast("🍃 자연의 바람 소리가 켜졌습니다 (Web Audio)");
    } else {
      audioBtn.classList.remove("active");
      audioIcon.className = "fa-solid fa-volume-xmark";
      showToast("🔇 오디오 효과음이 켜졌습니다/꺼졌습니다.");
    }
  });
}

function playBreezeSound() {
  if (!audioCtx || !isAudioActive) return;

  // Create White Noise Buffer for Leaf Breeze
  const bufferSize = audioCtx.sampleRate * 2;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  // BiquadFilter for Lowpass Wind Sound
  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(400, audioCtx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 1);
  filter.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 2);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.8);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  noise.start();
  noise.stop(audioCtx.currentTime + 2);
}

// --------------------------------------------------------------------------
// 6. SPA ROUTER & UI RENDERERS
// --------------------------------------------------------------------------

function handleRoute() {
  const hash = window.location.hash || "#home";
  const views = document.querySelectorAll(".page-view");
  const navLinks = document.querySelectorAll(".nav-link");

  let targetViewId = "view-home";
  let activeTab = "home";

  if (hash.startsWith("#search")) {
    targetViewId = "view-search";
    activeTab = "search";
    renderSearchPage();
  } else if (hash.startsWith("#curation")) {
    targetViewId = "view-curation";
    activeTab = "curation";
    renderCurationPage();
  } else if (hash.startsWith("#cart")) {
    targetViewId = "view-cart";
    activeTab = "cart";
    renderCartPage();
  } else if (hash.startsWith("#detail")) {
    targetViewId = "view-detail";
    activeTab = "detail";
    const urlParams = new URLSearchParams(hash.split("?")[1] || "");
    const bookId = parseInt(urlParams.get("id")) || 1;
    currentActiveBook = BOOKS_DATA.find(b => b.id === bookId) || BOOKS_DATA[0];
    renderDetailPage(currentActiveBook);
  } else {
    targetViewId = "view-home";
    activeTab = "home";
    renderHomePage();
  }

  views.forEach(v => v.classList.remove("active"));
  document.getElementById(targetViewId)?.classList.add("active");

  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.tab === activeTab);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Language Update Engine
function updateLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  const dict = I18N[lang] || I18N.KO;
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.dataset.i18n;
    if (dict[key]) {
      elem.innerHTML = dict[key];
    }
  });

  // Re-render current page
  handleRoute();
}

// --------------------------------------------------------------------------
// 7. PAGE RENDERERS
// --------------------------------------------------------------------------

// PAGE 1: HOME
function renderHomePage() {
  const gridContainer = document.getElementById("home-book-grid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";
  BOOKS_DATA.slice(0, 6).forEach(book => {
    gridContainer.appendChild(createBookCard(book));
  });
}

function createBookCard(book) {
  const card = document.createElement("div");
  card.className = "book-card";

  const langBadges = book.languages.map(l => `<span class="badge badge-lang">${l}</span>`).join(" ");

  card.innerHTML = `
    <div class="card-thumb">
      <div class="book-cover-mock" style="background: ${book.coverColor || '#047857'}">
        <span class="cover-kdc-badge">${book.kdc.split(" ")[0]}</span>
        <span class="cover-title-text">${book.title}</span>
      </div>
    </div>
    <div class="card-body">
      <div class="card-badges">
        <span class="badge badge-kdc">KDC ${book.kdc.split(" ")[0]}</span>
        ${langBadges}
      </div>
      <h3 class="card-title">${book.title}</h3>
      <p class="card-author">${book.author}</p>
      <div class="card-meta-row">
        <span><i class="fa-solid fa-barcode"></i> ${book.isbn.substring(0, 13)}</span>
        <span><i class="fa-solid fa-building"></i> ${book.publisher}</span>
      </div>
      <div class="card-footer">
        <span class="card-price">${book.price.toLocaleString()}원</span>
        <div class="card-btns">
          <button class="btn btn-emerald-sm btn-add-cart" data-id="${book.id}">
            <i class="fa-solid fa-cart-plus"></i> 담기
          </button>
          <a href="#detail?id=${book.id}" class="btn btn-glass-sm">3D 상세</a>
        </div>
      </div>
    </div>
  `;

  card.querySelector(".btn-add-cart")?.addEventListener("click", (e) => {
    e.stopPropagation();
    addToCart(book.id);
    playBreezeSound();
  });

  return card;
}

// PAGE 2: ECO SEARCH
function renderSearchPage() {
  const searchInput = document.getElementById("search-input");
  const ageSelect = document.getElementById("filter-age");
  const kdcSelect = document.getElementById("filter-kdc");
  const langCbs = document.querySelectorAll("input[name='f-lang']:checked");
  const ecoCbs = document.querySelectorAll("input[name='f-eco']:checked");

  const keyword = (searchInput?.value || "").toLowerCase().trim();
  const selectedAge = ageSelect?.value || "all";
  const selectedKdc = kdcSelect?.value || "all";
  const selectedLangs = Array.from(langCbs).map(cb => cb.value);
  const selectedEco = Array.from(ecoCbs).map(cb => cb.value);

  const filtered = BOOKS_DATA.filter(book => {
    // Keyword Filter
    if (keyword) {
      const matchTitle = book.title.toLowerCase().includes(keyword);
      const matchSub = book.subTitle.toLowerCase().includes(keyword);
      const matchAuthor = book.author.toLowerCase().includes(keyword);
      const matchIsbn = book.isbn.includes(keyword);
      if (!matchTitle && !matchSub && !matchAuthor && !matchIsbn) return false;
    }

    // Age Filter
    if (selectedAge !== "all" && book.age !== selectedAge) return false;

    // KDC Filter
    if (selectedKdc !== "all" && !book.kdc.startsWith(selectedKdc)) return false;

    // Language Filter
    if (selectedLangs.length > 0) {
      const hasLang = book.languages.some(l => selectedLangs.includes(l));
      if (!hasLang) return false;
    }

    // Eco Theme Filter
    if (selectedEco.length > 0 && !selectedEco.includes(book.ecoTheme)) return false;

    return true;
  });

  document.getElementById("search-total-count").textContent = filtered.length;
  const container = document.getElementById("search-results-container");
  if (!container) return;

  container.innerHTML = "";

  if (currentSearchMode === "grid") {
    container.className = "book-grid";
    filtered.forEach(book => container.appendChild(createBookCard(book)));
  } else {
    // Acquisition Table View for Librarians
    container.className = "search-table-wrapper";
    const table = document.createElement("table");
    table.className = "acq-table";
    table.innerHTML = `
      <thead>
        <tr>
          <th><input type="checkbox" id="cb-select-all-search"></th>
          <th>ISBN-13</th>
          <th>도서명 (Title)</th>
          <th>저자/역자</th>
          <th>출판사</th>
          <th>KDC</th>
          <th>수록 언어</th>
          <th>정가</th>
          <th>수서 선택</th>
        </tr>
      </thead>
      <tbody>
        ${filtered.map(b => `
          <tr>
            <td><input type="checkbox" class="cb-search-item" value="${b.id}"></td>
            <td><code>${b.isbn}</code></td>
            <td><strong><a href="#detail?id=${b.id}" style="color:#fff;">${b.title}</a></strong></td>
            <td>${b.author}</td>
            <td>${b.publisher}</td>
            <td><span class="badge badge-kdc">${b.kdc.split(" ")[0]}</span></td>
            <td>${b.languages.join(", ")}</td>
            <td><strong>${b.price.toLocaleString()}원</strong></td>
            <td>
              <button class="btn btn-emerald-sm btn-table-add" data-id="${b.id}">
                <i class="fa-solid fa-plus"></i> 추가
              </button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    `;

    table.querySelectorAll(".btn-table-add").forEach(btn => {
      btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.id)));
    });

    container.appendChild(table);
  }
}

// PAGE 3: CURATION
function renderCurationPage() {
  const container = document.getElementById("curation-container");
  if (!container) return;

  container.innerHTML = "";

  CURATION_PACKAGES.forEach(pkg => {
    const card = document.createElement("div");
    card.className = "curation-card";
    card.innerHTML = `
      <div class="curation-visual">
        <div class="curation-icon-box">
          <i class="fa-solid ${pkg.icon}"></i>
        </div>
        <span class="badge badge-eco">${pkg.targetAge}</span>
        <h4 style="margin-top:10px; color:#fff;">${pkg.booksCount}권 세트 구성</h4>
      </div>
      <div class="curation-info">
        <h3>${pkg.title}</h3>
        <p class="curation-desc">${pkg.desc}</p>
        <div class="curation-items-list">
          <h4><i class="fa-solid fa-list-check"></i> 주요 포함 수서 목록</h4>
          ${pkg.items.map(item => `<div class="c-item-row"><span>${item}</span><i class="fa-solid fa-check" style="color:var(--mint-accent);"></i></div>`).join("")}
        </div>
        <div class="curation-price-bar">
          <div class="c-price-box">
            <span class="c-orig-price">정가 ${pkg.origPrice.toLocaleString()}원</span>
            <span class="c-disc-price">기관 특가 ${pkg.discPrice.toLocaleString()}원</span>
          </div>
          <button class="btn btn-emerald btn-add-pkg" data-id="${pkg.id}">
            <i class="fa-solid fa-cart-plus"></i> 패키지 전체 장바구니 담기
          </button>
        </div>
      </div>
    `;

    card.querySelector(".btn-add-pkg")?.addEventListener("click", () => {
      // Add first 4 books as bundle
      BOOKS_DATA.slice(0, 4).forEach(b => addToCart(b.id, 2));
      showToast(`📦 '${pkg.title}' 패키지가 수서 장바구니에 추가되었습니다.`);
      playBreezeSound();
    });

    container.appendChild(card);
  });
}

// PAGE 4: CART & QUOTE CALCULATOR
function renderCartPage() {
  const body = document.getElementById("cart-items-body");
  const emptyMsg = document.getElementById("cart-empty-msg");
  if (!body) return;

  body.innerHTML = "";

  if (cartItems.length === 0) {
    emptyMsg.style.display = "block";
    updateQuoteSummary(0, 0);
    return;
  }

  emptyMsg.style.display = "none";
  let subtotal = 0;

  cartItems.forEach(item => {
    const book = BOOKS_DATA.find(b => b.id === item.bookId);
    if (!book) return;

    const itemSub = book.price * item.qty;
    subtotal += itemSub;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="checkbox" checked></td>
      <td>
        <div class="cart-thumb-img" style="background:${book.coverColor || '#047857'}">
          ${book.kdc.split(" ")[0]}
        </div>
      </td>
      <td>
        <strong>${book.title}</strong><br>
        <small style="color:var(--jade-light);">${book.author} | ${book.isbn}</small>
      </td>
      <td><span class="badge badge-kdc">${book.kdc.split(" ")[0]}</span></td>
      <td>${book.price.toLocaleString()}원</td>
      <td>
        <div class="qty-control">
          <button class="qty-btn btn-minus" data-id="${book.id}">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn btn-plus" data-id="${book.id}">+</button>
        </div>
      </td>
      <td><strong>${itemSub.toLocaleString()}원</strong></td>
      <td>
        <button class="btn-text-danger btn-remove" data-id="${book.id}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;

    tr.querySelector(".btn-minus")?.addEventListener("click", () => updateCartQty(book.id, -1));
    tr.querySelector(".btn-plus")?.addEventListener("click", () => updateCartQty(book.id, 1));
    tr.querySelector(".btn-remove")?.addEventListener("click", () => removeFromCart(book.id));

    body.appendChild(tr);
  });

  const instRate = parseFloat(document.getElementById("select-institution")?.value || 0.15);
  updateQuoteSummary(subtotal, instRate);
}

function updateQuoteSummary(subtotal, rate) {
  const discount = Math.round(subtotal * rate);
  const finalTotal = subtotal - discount;

  document.getElementById("summary-subtotal").textContent = `${subtotal.toLocaleString()}원`;
  document.getElementById("summary-discount").textContent = `-${discount.toLocaleString()}원`;
  document.getElementById("summary-final-total").textContent = `${finalTotal.toLocaleString()}원`;
  document.getElementById("cart-count").textContent = cartItems.reduce((acc, i) => acc + i.qty, 0);
}

// PAGE 5: 360° BOOK DETAIL
function renderDetailPage(book) {
  if (!book) return;

  document.getElementById("detail-title").textContent = book.title;
  document.getElementById("detail-subtitle").textContent = book.subTitle;
  document.getElementById("detail-author").textContent = book.author;
  document.getElementById("detail-publisher").textContent = book.publisher;
  document.getElementById("detail-isbn").textContent = book.isbn;
  document.getElementById("detail-kdc").innerHTML = `<span class="kdc-chip">${book.kdc}</span>`;
  document.getElementById("detail-languages").textContent = book.languages.join(", ");
  document.getElementById("detail-price").textContent = `${book.price.toLocaleString()}원`;
  document.getElementById("detail-summary").textContent = book.summary;

  const tagsContainer = document.getElementById("detail-tags");
  if (tagsContainer) {
    tagsContainer.innerHTML = `
      <span class="badge badge-kdc">KDC ${book.kdc.split(" ")[0]}</span>
      <span class="badge badge-eco">에코 도서</span>
      ${book.languages.map(l => `<span class="badge badge-lang">${l}</span>`).join(" ")}
    `;
  }

  // Re-init 3D book canvas model
  initBook3DPreview(book);
}

// --------------------------------------------------------------------------
// 8. CART & QUOTE MODAL LOGIC
// --------------------------------------------------------------------------

function addToCart(bookId, qty = 1) {
  const existing = cartItems.find(i => i.bookId === bookId);
  if (existing) {
    existing.qty += qty;
  } else {
    cartItems.push({ bookId, qty });
  }

  const book = BOOKS_DATA.find(b => b.id === bookId);
  showToast(`📚 '${book ? book.title : "도서"}' 수서 장바구니 추가 완료!`);
  renderCartPage();
}

function updateCartQty(bookId, delta) {
  const item = cartItems.find(i => i.bookId === bookId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(bookId);
    } else {
      renderCartPage();
    }
  }
}

function removeFromCart(bookId) {
  cartItems = cartItems.filter(i => i.bookId !== bookId);
  renderCartPage();
  showToast("🗑️ 수서 항목이 삭제되었습니다.");
}

function openOfficialQuoteModal() {
  const modal = document.getElementById("quote-modal");
  const instName = document.getElementById("input-inst-name")?.value || "서울중앙다문화도서관";
  const rate = parseFloat(document.getElementById("select-institution")?.value || 0.15);

  document.getElementById("qm-inst").textContent = `${instName} 귀하`;
  document.getElementById("qm-no").textContent = `LIB-${new Date().toISOString().slice(0,10).replace(/-/g,"")}-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById("qm-date").textContent = new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "long", day: "numeric" });

  const tbody = document.getElementById("qm-items-body");
  tbody.innerHTML = "";

  let subtotal = 0;

  cartItems.forEach((item, idx) => {
    const book = BOOKS_DATA.find(b => b.id === item.bookId);
    if (!book) return;

    const listPriceTotal = book.price * item.qty;
    const discPriceTotal = Math.round(listPriceTotal * (1 - rate));
    subtotal += listPriceTotal;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td><code>${book.isbn}</code></td>
      <td><strong>${book.title}</strong></td>
      <td>${book.author} / ${book.publisher}</td>
      <td>${book.kdc.split(" ")[0]}</td>
      <td class="text-right">${book.price.toLocaleString()}원</td>
      <td class="text-right">${item.qty}</td>
      <td class="text-right">${discPriceTotal.toLocaleString()}원</td>
    `;
    tbody.appendChild(tr);
  });

  const discount = Math.round(subtotal * rate);
  const finalTotal = subtotal - discount;

  document.getElementById("qm-subtotal").textContent = `${subtotal.toLocaleString()}원`;
  document.getElementById("qm-discount").textContent = `-${discount.toLocaleString()}원`;
  document.getElementById("qm-final-total").textContent = `${finalTotal.toLocaleString()}원`;

  modal.classList.add("active");
}

function exportCsvQuote() {
  let csv = "\uFEFFNo,ISBN,Title,Author,Publisher,KDC,Price,Qty,Subtotal\n";

  cartItems.forEach((item, idx) => {
    const book = BOOKS_DATA.find(b => b.id === item.bookId);
    if (book) {
      csv += `${idx + 1},${book.isbn},"${book.title}","${book.author}","${book.publisher}",${book.kdc.split(" ")[0]},${book.price},${item.qty},${book.price * item.qty}\n`;
    }
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Acquisition_Quote_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("📊 엑셀/CSV 명세서 다운로드가 시작되었습니다.");
}

function showToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--mint-accent);"></i> ${msg}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --------------------------------------------------------------------------
// 9. INITIALIZATION & EVENT LISTENERS
// --------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Init SPA Router
  window.addEventListener("hashchange", handleRoute);
  handleRoute();

  // Init 3D Scenes & Animations
  initHeroScene();
  initPavilionScene();
  initLeafParticles();
  initWebAudioBreeze();

  // Language Switchers
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => updateLanguage(btn.dataset.lang));
  });

  // Search Page Event Listeners
  document.getElementById("search-input")?.addEventListener("input", renderSearchPage);
  document.getElementById("filter-age")?.addEventListener("change", renderSearchPage);
  document.getElementById("filter-kdc")?.addEventListener("change", renderSearchPage);
  document.querySelectorAll("input[name='f-lang'], input[name='f-eco']").forEach(cb => {
    cb.addEventListener("change", renderSearchPage);
  });

  document.getElementById("btn-reset-filters")?.addEventListener("click", () => {
    document.getElementById("search-input").value = "";
    document.getElementById("filter-age").value = "all";
    document.getElementById("filter-kdc").value = "all";
    document.querySelectorAll("input[name='f-lang'], input[name='f-eco']").forEach(cb => cb.checked = false);
    renderSearchPage();
  });

  document.getElementById("btn-view-grid")?.addEventListener("click", () => {
    currentSearchMode = "grid";
    document.getElementById("btn-view-grid").classList.add("active");
    document.getElementById("btn-view-table").classList.remove("active");
    renderSearchPage();
  });

  document.getElementById("btn-view-table")?.addEventListener("click", () => {
    currentSearchMode = "table";
    document.getElementById("btn-view-table").classList.add("active");
    document.getElementById("btn-view-grid").classList.remove("active");
    renderSearchPage();
  });

  document.getElementById("btn-add-selected")?.addEventListener("click", () => {
    const checkedBoxes = document.querySelectorAll(".cb-search-item:checked");
    if (checkedBoxes.length === 0) {
      showToast("⚠️ 추가할 수서 항목을 선택해 주세요.");
      return;
    }
    checkedBoxes.forEach(cb => addToCart(parseInt(cb.value)));
    showToast(`선택한 ${checkedBoxes.length}권의 도서가 장바구니에 추가되었습니다.`);
  });

  // Cart & Quote Event Listeners
  document.getElementById("select-institution")?.addEventListener("change", renderCartPage);
  document.getElementById("btn-clear-cart")?.addEventListener("click", () => {
    cartItems = [];
    renderCartPage();
    showToast("🧹 장바구니를 전체 비웠습니다.");
  });

  document.getElementById("btn-open-quote")?.addEventListener("click", openOfficialQuoteModal);
  document.getElementById("btn-export-csv")?.addEventListener("click", exportCsvQuote);
  document.getElementById("btn-close-quote")?.addEventListener("click", () => {
    document.getElementById("quote-modal").classList.remove("active");
  });
  document.getElementById("btn-print-quote")?.addEventListener("click", () => {
    window.print();
  });

  // Detail Page Event Listeners
  document.getElementById("btn-spin-book")?.addEventListener("click", () => {
    isBookSpinning = !isBookSpinning;
  });

  document.getElementById("btn-reset-book")?.addEventListener("click", () => {
    if (book3dMesh) {
      book3dMesh.rotation.set(0, 0, 0);
    }
  });

  document.getElementById("btn-play-sample")?.addEventListener("click", () => {
    playBreezeSound();
    showToast("🔊 보타니컬 오디오 낭독 샘플 재생 중...");
  });

  document.getElementById("btn-detail-add-cart")?.addEventListener("click", () => {
    if (currentActiveBook) {
      addToCart(currentActiveBook.id);
    }
  });

  document.getElementById("btn-detail-download-marc")?.addEventListener("click", () => {
    showToast("💾 MARC 21 서지 데이터 레코드가 다운로드되었습니다.");
  });
});

