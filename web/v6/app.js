/* ==========================================================================
   WEB V6: MULTICULTURAL LIBRARY BOOK SUPPLY PORTAL (App Engine)
   Features:
   - 5-Page Hash SPA Router (#home, #search, #curation, #cart, #detail)
   - Three.js 3D Origami Cultural Portal & Unfolding Landmarks
   - Three.js 360-Degree Interactive 3D Book Model Preview
   - Web Audio Procedural Paper-Fold Sound Synthesizer
   - 5-Language i18n Engine (KO, EN, VI, ZH, PH)
   - Librarian Bulk Cart & Official PDF/Excel Quote Exporter
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. i18n Multi-Language Translation Dictionary (KO, EN, VI, ZH, PH)
// --------------------------------------------------------------------------
const I18N_DICTIONARY = {
  KO: {
    brand_subtitle: "B2B/B2C 수서 & 납품 전문 플랫폼",
    nav_home: "메인 포털",
    nav_search: "도서 검색/수서",
    nav_curation: "3D 팝업 큐레이션",
    nav_cart: "수서 장바구니 & 견적",
    hero_badge_text: "국가/공공 도서관 우선 납품 서지 데이터베이스",
    hero_title: "세계 문화 랜드마크가 입체로 펼쳐지는<br><span class='highlight-text'>B2B/B2C 프리미엄 다문화 수서 몰</span>",
    hero_desc: "베트남, 중국, 필리핀, 영미권 등 15개국 다국어 이중언어 아동 그림책부터 성인 학술 서적까지, 사서 담당자를 위한 원스톱 KDC 서지 필터링과 실시간 3D 도서 검수를 지원합니다.",
    btn_explore_search: "도서 수서 검색 시작",
    btn_view_curation: "3D 팝업 큐레이션 팩",
    origami_landmark_label: "입체 랜드마크 변경:",
    stat_languages: "원어/이중언어 지원 국가",
    stat_books: "보증 검수 서지 데이터",
    stat_libraries: "전국 납품 수서 기관",
    stat_guarantee: "공식 KDC/MARC 보증 지원",
    tag_exhibition: "3D FLIP EXHIBITION",
    title_exhibition: "세계 문화 입체 기획전관",
    subtitle_exhibition: "카드를 클릭하여 3D로 뒤집고 기획전 서지 구성을 확인하세요.",
    tag_new_releases: "NEW ARRIVALS",
    title_new_releases: "다문화 신간 도서 목록",
    link_view_all: "전체 수서 목록 보기",
    tag_catalog: "LIBRARIAN SEARCH ENGINE",
    title_search: "도서 검색 및 수서 필터링",
    desc_search: "KDC 십진분류, 이중언어 언어별, 대상연령별 다문화 도서를 정밀 검색하세요.",
    btn_reset_filters: "필터 초기화",
    filter_lang: "언어구분",
    filter_age: "대상 연령",
    filter_kdc: "KDC 분류",
    filter_stock: "납품 가능 상태",
    opt_all_lang: "전체 언어",
    opt_all_age: "전체 연령",
    opt_toddler: "유아 (0~7세)",
    opt_elementary: "초등 (8~13세)",
    opt_teen: "청소년 (14~19세)",
    opt_adult: "성인/부모교육",
    opt_all_kdc: "전체 KDC 분류",
    opt_all_stock: "전체 상태",
    opt_in_stock: "즉시 출고 가능 (재고보유)",
    opt_preorder: "수입 예약 수서 (3~5일)",
    text_search_result: "검색 결과",
    unit_items: "건",
    label_sort: "정렬 방식:",
    opt_sort_newest: "최신 발행순",
    opt_sort_title: "서명 가나다순",
    opt_sort_price_asc: "낮은 가격순",
    opt_sort_price_desc: "높은 가격순",
    tag_curation: "SPECIAL 3D ORIGAMI PACKAGES",
    title_curation: "3D 팝업 테마 큐레이션 기획전",
    desc_curation: "다문화 도서관 전문 사서가 직접 엄선한 국적별/주제별 입체 수서 큐레이션 패키지입니다.",
    tag_cart: "LIBRARIAN BULK ORDER & QUOTE",
    title_cart: "사서 수서 장바구니 및 납품 견적서",
    desc_cart: "수서 품목 목록 확인, 기관 할인율 자동 산정, 공식 견적서(PDF/Excel) 출력이 가능합니다.",
    th_cover: "표지",
    th_info: "도서 및 서지 정보",
    th_kdc: "KDC 분류",
    th_price: "정가",
    th_qty: "수량",
    th_subtotal: "공급 소계",
    btn_remove_selected: "선택 항목 삭제",
    btn_add_more: "도서 추가 수서하기",
    title_quote_calc: "수서 견적 계산서",
    label_institution_type: "납품 기관 구분 (할인율 적용):",
    lbl_subtotal: "총 수서 정가 합계:",
    lbl_discount: "기관 지정 수서 할인:",
    lbl_shipping: "도서관 정기 배송비:",
    val_free_shipping: "무료 (0원)",
    lbl_final_amount: "최종 납품 청구액 (VAT 포함):",
    btn_pdf_quote: "공식 수서 견적서 출력 (PDF)",
    btn_excel_quote: "수서 목록 Excel 다운로드 (.xlsx)",
    btn_back_list: "도서 검색 목록으로 돌아가기",
    audio_enabled: "종이 접힘 사운드 효과가 활성화되었습니다.",
    btn_add_to_cart: "수서 장바구니 담기",
    btn_view_detail: "3D 상세 서지 검수"
  },

  EN: {
    brand_subtitle: "B2B/B2C Multicultural Library Procurement Portal",
    nav_home: "Home",
    nav_search: "Book Catalog",
    nav_curation: "3D Curation",
    nav_cart: "Cart & Quote",
    hero_badge_text: "Official Bibliographic Database for Libraries",
    hero_title: "Global Cultural Landmarks Unfold in 3D<br><span class='highlight-text'>Premium Multicultural Supply Portal</span>",
    hero_desc: "One-stop KDC filtering and real-time 3D book inspection for librarians covering 15 languages including Vietnamese, Chinese, Tagalog, and English.",
    btn_explore_search: "Explore Book Catalog",
    btn_view_curation: "View 3D Curation Packs",
    origami_landmark_label: "Switch 3D Landmark:",
    stat_languages: "Supported Languages",
    stat_books: "Verified Book Titles",
    stat_libraries: "Partner Libraries",
    stat_guarantee: "KDC / MARC Certified",
    tag_exhibition: "3D FLIP EXHIBITION",
    title_exhibition: "Global Cultural Exhibition Showcase",
    subtitle_exhibition: "Click cards to flip in 3D and explore collection details.",
    tag_new_releases: "NEW ARRIVALS",
    title_new_releases: "New Multicultural Releases",
    link_view_all: "View All Catalog",
    tag_catalog: "LIBRARIAN SEARCH ENGINE",
    title_search: "Book Search & Catalog Filter",
    desc_search: "Search multicultural books by KDC classification, bilingual language, and target age.",
    btn_reset_filters: "Reset Filters",
    filter_lang: "Language",
    filter_age: "Target Age",
    filter_kdc: "KDC Category",
    filter_stock: "Availability",
    opt_all_lang: "All Languages",
    opt_all_age: "All Ages",
    opt_toddler: "Children (0-7)",
    opt_elementary: "Elementary (8-13)",
    opt_teen: "Young Adult (14-19)",
    opt_adult: "Adult & Education",
    opt_all_kdc: "All KDC Categories",
    opt_all_stock: "All Stock",
    opt_in_stock: "In Stock (Immediate Shipping)",
    opt_preorder: "Pre-order (3-5 Days)",
    text_search_result: "Results found",
    unit_items: "items",
    label_sort: "Sort by:",
    opt_sort_newest: "Newest Arrivals",
    opt_sort_title: "Title (A-Z)",
    opt_sort_price_asc: "Price: Low to High",
    opt_sort_price_desc: "Price: High to Low",
    tag_curation: "SPECIAL 3D ORIGAMI PACKAGES",
    title_curation: "3D Theme Curation Packages",
    desc_curation: "Curated book packages hand-selected by professional multicultural librarians.",
    tag_cart: "LIBRARIAN BULK ORDER & QUOTE",
    title_cart: "Bulk Cart & Official Quote",
    desc_cart: "Review selected items, calculate institutional discounts, and generate official PDF/Excel quotes.",
    th_cover: "Cover",
    th_info: "Book Information & ISBN",
    th_kdc: "KDC Code",
    th_price: "List Price",
    th_qty: "Qty",
    th_subtotal: "Subtotal",
    btn_remove_selected: "Remove Selected",
    btn_add_more: "Add More Books",
    title_quote_calc: "Procurement Quote Summary",
    label_institution_type: "Institution Type (Discount Rate):",
    lbl_subtotal: "Subtotal Price:",
    lbl_discount: "Institutional Discount:",
    lbl_shipping: "Library Express Freight:",
    val_free_shipping: "FREE ($0)",
    lbl_final_amount: "Total Amount (Inc. VAT):",
    btn_pdf_quote: "Print Official Quote (PDF)",
    btn_excel_quote: "Export Order to Excel (.xlsx)",
    btn_back_list: "Back to Book Catalog",
    audio_enabled: "Paper fold sound effect activated.",
    btn_add_to_cart: "Add to Cart",
    btn_view_detail: "Inspect 3D Metadata"
  },

  VI: {
    brand_subtitle: "Cổng thông tin cung cấp sách đa văn hóa B2B/B2C",
    nav_home: "Trang chủ",
    nav_search: "Tìm kiếm sách",
    nav_curation: "Bộ sưu tập 3D",
    nav_cart: "Giỏ hàng & Báo giá",
    hero_badge_text: "Cơ sở dữ liệu thư viện đa ngôn ngữ chính thức",
    hero_title: "Biểu tượng văn hóa thế giới mở ra trong 3D<br><span class='highlight-text'>Cổng mua sắm sách đa văn hóa cao cấp</span>",
    hero_desc: "Bộ lọc KDC một điểm dừng và kiểm tra sách 3D thời gian thực cho thủ thư hỗ trợ 15 ngôn ngữ bao gồm Tiếng Việt, Trung, Philippines và Tiếng Anh.",
    btn_explore_search: "Khám phá danh mục sách",
    btn_view_curation: "Xem gói 3D Curation",
    origami_landmark_label: "Đổi kiến trúc 3D:",
    stat_languages: "Quốc gia & Ngôn ngữ",
    stat_books: "Đầu sách đã xác minh",
    stat_libraries: "Thư viện đối tác",
    stat_guarantee: "Chứng nhận KDC / MARC",
    tag_exhibition: "3D FLIP EXHIBITION",
    title_exhibition: "Triển lãm văn hóa thế giới 3D",
    subtitle_exhibition: "Nhấp vào thẻ để lật 3D và xem chi tiết danh mục.",
    tag_new_releases: "NEW ARRIVALS",
    title_new_releases: "Sách đa văn hóa mới xuất bản",
    link_view_all: "Xem toàn bộ danh mục",
    tag_catalog: "LIBRARIAN SEARCH ENGINE",
    title_search: "Tìm kiếm & Lọc danh mục",
    desc_search: "Tìm kiếm sách đa văn hóa theo phân loại KDC, ngôn ngữ song ngữ và độ tuổi.",
    btn_reset_filters: "Đặt lại bộ lọc",
    filter_lang: "Ngôn ngữ",
    filter_age: "Độ tuổi",
    filter_kdc: "Mã KDC",
    filter_stock: "Tình trạng",
    opt_all_lang: "Tất cả ngôn ngữ",
    opt_all_age: "Tất cả độ tuổi",
    opt_toddler: "Mẫu giáo (0-7 tuổi)",
    opt_elementary: "Tiểu học (8-13 tuổi)",
    opt_teen: "Thanh thiếu niên (14-19 tuổi)",
    opt_adult: "Người lớn & Cha mẹ",
    opt_all_kdc: "Tất cả mã KDC",
    opt_all_stock: "Tất cả trạng thái",
    opt_in_stock: "Có sẵn trong kho",
    opt_preorder: "Đặt trước (3-5 ngày)",
    text_search_result: "Kết quả tìm kiếm",
    unit_items: "cuốn",
    label_sort: "Sắp xếp theo:",
    opt_sort_newest: "Mới nhất",
    opt_sort_title: "Tên sách (A-Z)",
    opt_sort_price_asc: "Giá: Thấp đến Cao",
    opt_sort_price_desc: "Giá: Cao đến Thấp",
    tag_curation: "SPECIAL 3D ORIGAMI PACKAGES",
    title_curation: "Gói tuyển chọn 3D Curation",
    desc_curation: "Các gói sách được tuyển chọn bởi các thủ thư đa văn hóa chuyên nghiệp.",
    tag_cart: "LIBRARIAN BULK ORDER & QUOTE",
    title_cart: "Giỏ hàng & Báo giá chính thức",
    desc_cart: "Xem danh sách đã chọn, tính chiết khấu cho thư viện và xuất báo giá PDF/Excel.",
    th_cover: "Bìa",
    th_info: "Thông tin sách & ISBN",
    th_kdc: "Mã KDC",
    th_price: "Giá niêm yết",
    th_qty: "Số lượng",
    th_subtotal: "Thành tiền",
    btn_remove_selected: "Xóa mục đã chọn",
    btn_add_more: "Thêm sách khác",
    title_quote_calc: "Bảng tính báo giá mua sắm",
    label_institution_type: "Loại hình cơ quan (Tỷ lệ chiết khấu):",
    lbl_subtotal: "Tổng giá niêm yết:",
    lbl_discount: "Chiết khấu cơ quan:",
    lbl_shipping: "Phí vận chuyển thư viện:",
    val_free_shipping: "MIỄN PHÍ (0đ)",
    lbl_final_amount: "Tổng thanh toán (gồm VAT):",
    btn_pdf_quote: "In báo giá chính thức (PDF)",
    btn_excel_quote: "Tải danh sách Excel (.xlsx)",
    btn_back_list: "Quay lại danh mục sách",
    audio_enabled: "Đã bật hiệu ứng âm thanh gập giấy.",
    btn_add_to_cart: "Thêm vào giỏ",
    btn_view_detail: "Xem chi tiết 3D"
  },

  ZH: {
    brand_subtitle: "B2B/B2C 多文化图书采购与供货专业平台",
    nav_home: "主页",
    nav_search: "图书检索与采购",
    nav_curation: "3D主题策展",
    nav_cart: "采购购物车与报价",
    hero_badge_text: "国家/公共图书馆优先供货书目数据库",
    hero_title: "世界文化地标立体展开<br><span class='highlight-text'>B2B/B2C 高端多文化图书采购网</span>",
    hero_desc: "为图书管理员提供涵盖越南语、中文、菲律宾语、英语等15种语言的双语绘本至成人学术书籍的一站式 KDC 分类检索与实时 3D 图书审视。",
    btn_explore_search: "开始检索图书",
    btn_view_curation: "查看 3D 立体策展包",
    origami_landmark_label: "切换立体地标:",
    stat_languages: "支持语言与国家",
    stat_books: "已验证书目数据",
    stat_libraries: "全国合作图书馆",
    stat_guarantee: "官方 KDC/MARC 认证",
    tag_exhibition: "3D FLIP EXHIBITION",
    title_exhibition: "世界文化立体特展馆",
    subtitle_exhibition: "点击卡片进行 3D 翻转，查看特展书目构成。",
    tag_new_releases: "NEW ARRIVALS",
    title_new_releases: "多文化新书目录",
    link_view_all: "查看全部书目",
    tag_catalog: "LIBRARIAN SEARCH ENGINE",
    title_search: "图书检索与分类筛选",
    desc_search: "精确检索基于 KDC 十进分类、双语语言及目标年龄段的多文化图书。",
    btn_reset_filters: "重置筛选",
    filter_lang: "语言分类",
    filter_age: "目标年龄",
    filter_kdc: "KDC 分类",
    filter_stock: "供货状态",
    opt_all_lang: "全部语言",
    opt_all_age: "全部年龄段",
    opt_toddler: "幼儿 (0~7岁)",
    opt_elementary: "小学 (8~13岁)",
    opt_teen: "青少年 (14~19岁)",
    opt_adult: "成人/家长教育",
    opt_all_kdc: "全部 KDC 分类",
    opt_all_stock: "全部状态",
    opt_in_stock: "现货 (立即发货)",
    opt_preorder: "预订采购 (3~5天)",
    text_search_result: "检索结果",
    unit_items: "本",
    label_sort: "排序方式:",
    opt_sort_newest: "最新出版",
    opt_sort_title: "书名音序",
    opt_sort_price_asc: "价格: 从低到高",
    opt_sort_price_desc: "价格: 从高到低",
    tag_curation: "SPECIAL 3D ORIGAMI PACKAGES",
    title_curation: "3D 弹出式主题策展展",
    desc_curation: "由多文化图书馆专业图书员精选的按国籍/主题划分的立体采购策展包。",
    tag_cart: "LIBRARIAN BULK ORDER & QUOTE",
    title_cart: "图书员采购购物车与报价单",
    desc_cart: "确认采购清单、自动计算机构折扣率并打印官方报价单 (PDF/Excel)。",
    th_cover: "封面",
    th_info: "图书及书目信息",
    th_kdc: "KDC 编码",
    th_price: "原价",
    th_qty: "数量",
    th_subtotal: "小计",
    btn_remove_selected: "删除选中项",
    btn_add_more: "继续添加图书",
    title_quote_calc: "采购报价计算书",
    label_institution_type: "采购机构分类 (折扣率):",
    lbl_subtotal: "原价总合计:",
    lbl_discount: "机构专项折扣:",
    lbl_shipping: "图书馆定期运费:",
    val_free_shipping: "免费 (0元)",
    lbl_final_amount: "最终结算金额 (含税):",
    btn_pdf_quote: "打印官方采购报价单 (PDF)",
    btn_excel_quote: "下载采购清单 Excel (.xlsx)",
    btn_back_list: "返回图书检索列表",
    audio_enabled: "折纸音效已激活。",
    btn_add_to_cart: "加入购物车",
    btn_view_detail: "3D 详细书目审阅"
  },

  PH: {
    brand_subtitle: "B2B/B2C Multicultural Library Procurement Platform",
    nav_home: "Tahanan",
    nav_search: "Katalogo",
    nav_curation: "3D Kuretsyon",
    nav_cart: "Kart & Kinyota",
    hero_badge_text: "Opisyal na Bibliographic Database para sa mga Aklatan",
    hero_title: "Lumalabas sa 3D ang mga Landmark sa Mundo<br><span class='highlight-text'>Premium Multicultural Supply Portal</span>",
    hero_desc: "Isang-hinto na KDC filtering at real-time na 3D book inspection para sa mga librarian na sumasaklaw sa 15 wika tulad ng Tagalog, Vietnamese, Tsino, at Ingles.",
    btn_explore_search: "Tingnan ang Katalogo",
    btn_view_curation: "Tingnan ang 3D Packs",
    origami_landmark_label: "Palitan ang 3D Landmark:",
    stat_languages: "Mga Sinusuportahang Wika",
    stat_books: "Na-verify na mga Aklat",
    stat_libraries: "Kasosyong Aklatan",
    stat_guarantee: "KDC / MARC Sertipikado",
    tag_exhibition: "3D FLIP EXHIBITION",
    title_exhibition: "Pandaigdigang Eksibisyon ng Kultura sa 3D",
    subtitle_exhibition: "I-click ang kard upang i-flip sa 3D at tingnan ang mga detalye.",
    tag_new_releases: "NEW ARRIVALS",
    title_new_releases: "Bagong Inilabas na mga Aklat",
    link_view_all: "Tingnan Lahat",
    tag_catalog: "LIBRARIAN SEARCH ENGINE",
    title_search: "Paghahanap at Filter ng Aklat",
    desc_search: "Maghanap ng mga aklat sa iba't ibang wika ayon sa KDC classification at edad.",
    btn_reset_filters: "I-reset ang Filter",
    filter_lang: "Wika",
    filter_age: "Edad",
    filter_kdc: "KDC Code",
    filter_stock: "Status",
    opt_all_lang: "Lahat ng Wika",
    opt_all_age: "Lahat ng Edad",
    opt_toddler: "Bata (0-7)",
    opt_elementary: "Elementarya (8-13)",
    opt_teen: "Kabataan (14-19)",
    opt_adult: "Matalinghagang Magulang",
    opt_all_kdc: "Lahat ng KDC Code",
    opt_all_stock: "Lahat ng Status",
    opt_in_stock: "Nasa Stock (Agad na Ipapadala)",
    opt_preorder: "Pre-order (3-5 Araw)",
    text_search_result: "Nahanap na resulta",
    unit_items: "aklat",
    label_sort: "Pagsunud-sunurin:",
    opt_sort_newest: "Pinakabagong Labas",
    opt_sort_title: "Pamagat (A-Z)",
    opt_sort_price_asc: "Presyo: Mababa hanggang Mataas",
    opt_sort_price_desc: "Presyo: Mataas hanggang Mababa",
    tag_curation: "SPECIAL 3D ORIGAMI PACKAGES",
    title_curation: "3D Kuretsyon na Pakete",
    desc_curation: "Piniling mga pakete ng aklat ng mga propesyonal na multicultural librarian.",
    tag_cart: "LIBRARIAN BULK ORDER & QUOTE",
    title_cart: "Kart at Opisyal na Kinyota",
    desc_cart: "Suriin ang mga napiling aklat, kalkulahin ang diskwento, at mag-download ng PDF/Excel.",
    th_cover: "Pabalat",
    th_info: "Impormasyon ng Aklat & ISBN",
    th_kdc: "KDC Code",
    th_price: "Presyo",
    th_qty: "Dami",
    th_subtotal: "Subtotal",
    btn_remove_selected: "Alisin ang Napili",
    btn_add_more: "Magdagdag ng Aklat",
    title_quote_calc: "Kalkulasyon ng Kinyota",
    label_institution_type: "Uri ng Institusyon (Diskwento):",
    lbl_subtotal: "Kabuuan ng Presyo:",
    lbl_discount: "Diskwento sa Institusyon:",
    lbl_shipping: "Kargamento ng Aklatan:",
    val_free_shipping: "LIBRE ($0)",
    lbl_final_amount: "Huling Halaga (kasama ang VAT):",
    btn_pdf_quote: "I-print ang Kinyota (PDF)",
    btn_excel_quote: "I-export sa Excel (.xlsx)",
    btn_back_list: "Bumalik sa Katalogo",
    audio_enabled: "Naka-activate ang sound effect ng pagtatali ng papel.",
    btn_add_to_cart: "Idagdag sa Kart",
    btn_view_detail: "Suriin sa 3D"
  }
};

let currentLang = 'KO';

// --------------------------------------------------------------------------
// 2. Rich Multicultural Book Catalog Database (12 Books)
// --------------------------------------------------------------------------
const BOOK_DATABASE = [
  {
    id: "BK-001",
    title: "달을 품은 아오자이 (Ao Dai under the Moon)",
    originalTitle: "Áo Dài Dưới Ánh Trăng",
    author: "응우옌 티 마이 (Nguyễn Thị Mai)",
    publisher: "다문화아동출판사",
    pubDate: "2026-03-15",
    lang: "VI",
    langLabel: "🇻🇳 베트남어-한국어 이중언어",
    targetAge: "초등",
    kdc: "895.9",
    isbn: "978-89-98201-01-4",
    price: 16500,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    colorHex: 0x10b981,
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80",
    audioSampleText: "Xin chào! Đây là cuốn sách truyện cổ tích song ngữ Việt-Hàn tuyệt đẹp dành cho các em nhỏ.",
    synopsis: "베트남 전통 의상 아오자이에 담긴 가족의 사랑과 하노이의 달빛 축제 이야기를 따뜻한 수채화 패브릭 질감으로 담아낸 아동 그림책입니다."
  },
  {
    id: "BK-002",
    title: "황금룡과 만리장성의 비밀 (The Secret of Golden Dragon)",
    originalTitle: "金龙与长城的秘密",
    author: "왕 웨이 (Wang Wei)",
    publisher: "동아시아문학사",
    pubDate: "2026-01-20",
    lang: "ZH",
    langLabel: "🇨🇳 중국어-한국어 대역본",
    targetAge: "초등",
    kdc: "892.3",
    isbn: "978-89-98201-02-1",
    price: 18000,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #e47d21 0%, #b91c1c 100%)",
    colorHex: 0xe47d21,
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80",
    audioSampleText: "你好！这是一本融合中国传统节日与万里长城黑科技探险的儿童科普小说。",
    synopsis: "중국 춘절 전통 명절과 만리장성에 숨겨진 용의 전설을 현대적 3D 페이퍼아트 기법으로 재해석한 입체 그림책입니다."
  },
  {
    id: "BK-003",
    title: "마닐라의 무지개 지프니 (Manila's Rainbow Jeepney)",
    originalTitle: "Ang Makulay na Jeepney ni Berto",
    author: "마리아 산토스 (Maria Santos)",
    publisher: "태평양도서출판",
    pubDate: "2025-11-10",
    lang: "PH",
    langLabel: "🇵🇭 필리핀/타갈로그어-한국어",
    targetAge: "유아",
    kdc: "899.2",
    isbn: "978-89-98201-03-8",
    price: 15000,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #0284c7 0%, #1e3a8a 100%)",
    colorHex: 0x0284c7,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
    audioSampleText: "Magandang araw! Ang librong ito ay nagkukuwento tungkol sa kultura ng Pilipinas.",
    synopsis: "필리핀의 대표적인 이동 수단인 지프니를 알록달록 무지개 빛깔로 꾸미며 이웃 간의 협동과 온정을 배우는 동화입니다."
  },
  {
    id: "BK-004",
    title: "세계 문화 랜드마크 3D 건축 탐험 (Global Landmark Origami 3D)",
    originalTitle: "Global Architectural Heritage for Young Scholars",
    author: "제임스 윌슨 (James Wilson)",
    publisher: "글로벌리더북스",
    pubDate: "2026-02-01",
    lang: "EN",
    langLabel: "🇺🇸 영어 원서 (English Original)",
    targetAge: "청소년",
    kdc: "600",
    isbn: "978-89-98201-04-5",
    price: 24000,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #1a237e 0%, #000666 100%)",
    colorHex: 0x1a237e,
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80",
    audioSampleText: "Explore the architectural wonders of the world, from Eiffel Tower to Sungnyemun Gate in 3D paper precision.",
    synopsis: "숭례문, 타지마할, 에펠탑 등 세계 대표 랜드마크의 역사적 도면과 종이 조형 기법을 다룬 청소년용 건축 문화 교양서입니다."
  },
  {
    id: "BK-005",
    title: "메콩강의 반딧불이 밤소풍 (Night Picnic on Mekong)",
    originalTitle: "Đêm Đom Đốm Trên Sông Mê Kông",
    author: "레 반 남 (Lê Văn Nam)",
    publisher: "다문화아동출판사",
    pubDate: "2026-04-05",
    lang: "VI",
    langLabel: "🇻🇳 베트남어-한국어 이중언어",
    targetAge: "유아",
    kdc: "895.9",
    isbn: "978-89-98201-05-2",
    price: 14500,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #059669 0%, #064e3b 100%)",
    colorHex: 0x059669,
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80",
    audioSampleText: "Cùng khám phá thiên nhiên tươi đẹp vùng sông nước Mê Kông qua từng trang sách nhé!",
    synopsis: "메콩강 줄기를 따라 퍼지는 반딧불이의 따뜻한 빛과 야간 수상 시장의 아름다운 조화를 그린 생태 이중언어 그림책입니다."
  },
  {
    id: "BK-006",
    title: "다문화 가정 사서 지침서: 글로벌 수서 실무 (Multicultural Library Manual)",
    originalTitle: "Librarian's Guide to Global Collection Development",
    author: "한국다문화도서관학회",
    pubPublisher: "국립중앙도서관수서연구회",
    pubDate: "2026-01-05",
    lang: "KO",
    langLabel: "🇰🇷 한국어 전문서",
    targetAge: "성인",
    kdc: "300",
    isbn: "978-89-98201-06-9",
    price: 28000,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #475569 0%, #1e293b 100%)",
    colorHex: 0x475569,
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80",
    audioSampleText: "전국 공공도서관 사서 담당자를 위한 다문화 수서 관리, MARC 데이터 변환 및 납품 지침서입니다.",
    synopsis: "공공도서관 및 학교도서관 사서 수서 담당자를 위해 KDC/MARC 분류, 국가별 정식 납품 절차, 이중언어 서지 보증 검수 가이드를 수록한 필수 전문서입니다."
  },
  {
    id: "BK-007",
    title: "경극 가면 뒤의 작은 꼬마 (The Kid Behind Beijing Opera Mask)",
    originalTitle: "京剧面具后的秘密",
    author: "리 링 (Li Ling)",
    publisher: "동아시아문학사",
    pubDate: "2025-10-18",
    lang: "ZH",
    langLabel: "🇨🇳 중국어-한국어 대역본",
    targetAge: "초등",
    kdc: "600",
    isbn: "978-89-98201-07-6",
    price: 17500,
    stockStatus: "PRE_ORDER",
    stockLead: "수입 예약 (3~5일 소요)",
    coverGradient: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
    colorHex: 0xdc2626,
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80",
    audioSampleText: "感受中国传统的京剧艺术与多彩的面具文化魅力。",
    synopsis: "중국 전통 경극 가면의 화려한 오색 문양에 담긴 인물의 희로애락을 아이들의 눈높이에 맞춰 유쾌하게 풀어낸 그림책입니다."
  },
  {
    id: "BK-008",
    title: "보라카이의 야자수 바람 소리 (Boracay Coconut Breeze)",
    originalTitle: "Ang Hangin sa Punong Niyog sa Boracay",
    author: "후안 크루즈 (Juan Cruz)",
    publisher: "태평양도서출판",
    pubDate: "2026-03-01",
    lang: "PH",
    langLabel: "🇵🇭 필리핀/타갈로그어-한국어",
    targetAge: "초등",
    kdc: "899.2",
    isbn: "978-89-98201-08-3",
    price: 16000,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #0d9488 0%, #115e59 100%)",
    colorHex: 0x0d9488,
    coverImage: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&q=80",
    audioSampleText: "Isang masayang kuwento tungkol sa kalikasan at pamilya sa tabing-dagat.",
    synopsis: "필리핀 에메랄드빛 바다와 야자수 숲 속 동물 친구들의 따뜻한 모험 이야기를 담은 아동 이중언어 서적입니다."
  },
  {
    id: "BK-009",
    title: "세계 민담 오리가미 팝업 북 (World Folk Tales Pop-up)",
    originalTitle: "Origami World Folklore Anthology",
    author: "에밀리 블레이크 (Emily Blake)",
    publisher: "글로벌리더북스",
    pubDate: "2026-02-14",
    lang: "EN",
    langLabel: "🇺🇸 영어 원서 (English Original)",
    targetAge: "초등",
    kdc: "800",
    isbn: "978-89-98201-09-0",
    price: 22000,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #9333ea 0%, #581c87 100%)",
    colorHex: 0x9333ea,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80",
    audioSampleText: "Step into the magical world of 3D papercraft and global fairy tales.",
    synopsis: "아시아, 유럽, 아프리카의 입으로 전해 내려오는 세계 대표 민담을 3D 입체 종이 오리가미 예술로 구현한 화제작입니다."
  },
  {
    id: "BK-010",
    title: "쌀국수 한 그릇에 담긴 하노이 이야기 (A Bowl of Pho)",
    originalTitle: "Một Bát Phở Hà Nội",
    author: "팜 앙 투안 (Phạm Anh Tuấn)",
    publisher: "다문화아동출판사",
    pubDate: "2025-12-01",
    lang: "VI",
    langLabel: "🇻🇳 베트남어-한국어 이중언어",
    targetAge: "초등",
    kdc: "300",
    isbn: "978-89-98201-10-6",
    price: 15500,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #b45309 0%, #78350f 100%)",
    colorHex: 0xb45309,
    coverImage: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&q=80",
    audioSampleText: "Thưởng thức hương vị truyền thống và văn hóa ẩm thực Việt Nam.",
    synopsis: "베트남의 국민 음식 쌀국수에 얽힌 정겨운 가족사 및 음식 문화 인문학 교양 그림책입니다."
  },
  {
    id: "BK-011",
    title: "세계 이중언어 아동문학 수상작 모음 (Bilingual Award Winners)",
    originalTitle: "Global Bilingual Children's Literature",
    author: "국제아동도서협의회 (IBBY)",
    publisher: "글로벌리더북스",
    pubDate: "2026-03-20",
    lang: "KO",
    langLabel: "🇰🇷 다국어 통합본",
    targetAge: "초등",
    kdc: "800",
    isbn: "978-89-98201-11-3",
    price: 32000,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #1e40af 0%, #1e1b4b 100%)",
    colorHex: 0x1e40af,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
    audioSampleText: "전 세계 아동문학 비엔날레 수상작을 이중언어로 감상해보세요.",
    synopsis: "세계 각국의 최고 권위 아동문학상 수상작 중 이중언어로 번역 출판된 우수 도서 5편을 엄선한 수서 팩 책자입니다."
  },
  {
    id: "BK-012",
    title: "다문화 부모를 위한 한글 문해력 백과 (Hangul Literacy for Parents)",
    originalTitle: "한글 문해력과 한국 문화 적응 가이드",
    author: "김수현 / 이정은",
    publisher: "국립중앙도서관수서연구회",
    pubDate: "2026-01-15",
    lang: "KO",
    langLabel: "🇰🇷 다국어 주석본 (KO/VI/ZH/PH)",
    targetAge: "성인",
    kdc: "300",
    isbn: "978-89-98201-12-0",
    price: 25000,
    stockStatus: "IN_STOCK",
    stockLead: "즉시 출고 (24시간 이내)",
    coverGradient: "linear-gradient(135deg, #0f766e 0%, #134e4a 100%)",
    colorHex: 0x0f766e,
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80",
    audioSampleText: "다문화 가정 부모님들의 한국어 읽기, 쓰기 및 자녀 교육을 위한 실용 문해력 백과입니다.",
    synopsis: "한국에 정착한 다문화 가정 부모를 위해 필수 한국어 실생활 문해력과 자녀 독서 지도법을 4개국 주석과 함께 제공합니다."
  }
];

// Curation Packages Data
const CURATION_PACKAGES = [
  {
    id: "PACK-01",
    title: "🇻🇳 베트남 다문화 가정 이중언어 그림책 5종 팩",
    subtitle: "하노이·메콩강 문화 탐구 & 아오자이 수채화 시리즈",
    discountTag: "사서 특별 15% 수서 할인",
    books: ["BK-001", "BK-05", "BK-010"],
    originalPrice: 46500,
    discountPrice: 39500,
    badge: "인기 1위 수서 팩"
  },
  {
    id: "PACK-02",
    title: "🇨🇳 동아시아 랜드마크 & 전통문화 탐구 세트",
    subtitle: "황금룡 만리장성 + 경극 가면 3D 페이퍼 아트 컬렉션",
    discountTag: "사서 특별 15% 수서 할인",
    books: ["BK-002", "BK-007"],
    originalPrice: 35500,
    discountPrice: 30100,
    badge: "초등 필독 수서"
  },
  {
    id: "PACK-03",
    title: "🌏 3D 오리가미 세계 문화 랜드마크 입체 팩",
    subtitle: "숭례문·타지마할·에펠탑 3D 건축 모형 & 세계 민담",
    discountTag: "사서 특별 15% 수서 할인",
    books: ["BK-004", "BK-009"],
    originalPrice: 46000,
    discountPrice: 39100,
    badge: "입체 3D 추천"
  }
];

// Global Cart State (Persisted in localStorage)
let cartState = JSON.parse(localStorage.getItem('web_v6_cart')) || [
  { bookId: "BK-001", qty: 3, checked: true },
  { bookId: "BK-002", qty: 2, checked: true },
  { bookId: "BK-004", qty: 5, checked: true }
];

// Audio Sound Effect Enabled State
let isSoundEnabled = true;
let audioCtx = null;

// --------------------------------------------------------------------------
// 3. Web Audio Procedural Paper-Fold Sound Synthesizer
// --------------------------------------------------------------------------
function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playPaperSound(type = 'fold') {
  if (!isSoundEnabled) return;
  try {
    initAudioContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;

    // Create Noise Buffer for Paper Crease / Texture
    const bufferSize = audioCtx.sampleRate * (type === 'unfold' ? 0.2 : 0.12);
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = buffer;

    // Filter for crisp paper sound
    const filter = audioCtx.createBiquadFilter();
    filter.type = type === 'tab' ? 'highpass' : 'bandpass';
    filter.frequency.setValueAtTime(type === 'unfold' ? 1200 : 1800, now);
    filter.Q.setValueAtTime(1.5, now);

    // Gain Envelope
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(type === 'tab' ? 0.08 : 0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (type === 'unfold' ? 0.2 : 0.12));

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    whiteNoise.start(now);
  } catch (e) {
    // Audio context fallback silent fail
  }
}

function toggleSound() {
  isSoundEnabled = !isSoundEnabled;
  const icon = document.getElementById('sound-icon');
  if (icon) {
    icon.className = isSoundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
  }
  const toast = document.getElementById('audio-toast');
  if (toast) {
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2500);
  }
  if (isSoundEnabled) playPaperSound('click');
}

// --------------------------------------------------------------------------
// 4. i18n Language Switcher
// --------------------------------------------------------------------------
function changeLanguage(langKey) {
  if (!I18N_DICTIONARY[langKey]) return;
  currentLang = langKey;
  playPaperSound('fold');

  const dict = I18N_DICTIONARY[langKey];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Re-render active view to update dynamically formatted text
  renderActiveView();
}

// --------------------------------------------------------------------------
// 5. Three.js 3D Origami Cultural Portal (Hero Scene)
// --------------------------------------------------------------------------
let heroScene, heroCamera, heroRenderer, heroGroup, landmarkMeshGroup;
let activeLandmarkType = 'sungnyemun';
let heroAnimId = null;

function initHeroThreeScene() {
  const container = document.getElementById('three-hero-canvas-container');
  if (!container || container.children.length > 0) return;

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || 540;

  heroScene = new THREE.Scene();
  heroScene.fog = new THREE.FogExp2(0x071e27, 0.04);

  heroCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  heroCamera.position.set(0, 5, 22);

  heroRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  heroRenderer.setSize(width, height);
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  heroRenderer.shadowMap.enabled = true;
  container.appendChild(heroRenderer.domElement);

  // Lighting Setup
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  heroScene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xe47d21, 1.2);
  dirLight.position.set(15, 25, 15);
  heroScene.add(dirLight);

  const pointLight = new THREE.PointLight(0x10b981, 1.5, 30);
  pointLight.position.set(-10, 5, 10);
  heroScene.add(pointLight);

  heroGroup = new THREE.Group();
  heroScene.add(heroGroup);

  // Create Background Origami Geometric Facet Ring
  const facetGeo = new THREE.ConeGeometry(8, 4, 6);
  const facetMat = new THREE.MeshPhongMaterial({
    color: 0x1a237e,
    flatShading: true,
    transparent: true,
    opacity: 0.8,
    wireframe: false
  });

  const portalRing = new THREE.Mesh(facetGeo, facetMat);
  portalRing.rotation.x = Math.PI;
  portalRing.position.y = -2;
  heroGroup.add(portalRing);

  // Floating paper triangular facets
  for (let i = 0; i < 24; i++) {
    const triGeo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      -1, -1, 0,
       1, -1, 0,
       0,  1, 0
    ]);
    triGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    triGeo.computeVertexNormals();

    const triMat = new THREE.MeshPhongMaterial({
      color: i % 2 === 0 ? 0xe47d21 : 0x10b981,
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: 0.65
    });

    const triMesh = new THREE.Mesh(triGeo, triMat);
    triMesh.position.set(
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 20
    );
    triMesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    triMesh.scale.setScalar(0.6 + Math.random() * 0.8);
    heroGroup.add(triMesh);
  }

  // Landmark Mesh Container
  landmarkMeshGroup = new THREE.Group();
  heroGroup.add(landmarkMeshGroup);

  buildLandmarkMesh('sungnyemun');

  // Window Resize
  window.addEventListener('resize', () => {
    if (!container || !heroCamera || !heroRenderer) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    heroCamera.aspect = w / h;
    heroCamera.updateProjectionMatrix();
    heroRenderer.setSize(w, h);
  });

  // Animation Loop
  function animateHero() {
    heroAnimId = requestAnimationFrame(animateHero);
    if (heroGroup) {
      heroGroup.rotation.y += 0.005;
    }
    if (landmarkMeshGroup) {
      landmarkMeshGroup.rotation.y += 0.008;
    }
    heroRenderer.render(heroScene, heroCamera);
  }
  animateHero();
}

function buildLandmarkMesh(type) {
  if (!landmarkMeshGroup) return;
  // Clear previous landmark
  while (landmarkMeshGroup.children.length > 0) {
    landmarkMeshGroup.remove(landmarkMeshGroup.children[0]);
  }

  const matParchment = new THREE.MeshPhongMaterial({ color: 0xf9f8f3, flatShading: true });
  const matIndigo = new THREE.MeshPhongMaterial({ color: 0x1a237e, flatShading: true });
  const matSaffron = new THREE.MeshPhongMaterial({ color: 0xe47d21, flatShading: true });

  if (type === 'sungnyemun') {
    // Sungnyemun Gate Geometric Origami Structure
    const baseGeo = new THREE.BoxGeometry(7, 2.5, 4);
    const baseMesh = new THREE.Mesh(baseGeo, matParchment);
    baseMesh.position.y = 0;
    landmarkMeshGroup.add(baseMesh);

    const roofGeo = new THREE.ConeGeometry(5.5, 2, 4);
    const roofMesh = new THREE.Mesh(roofGeo, matIndigo);
    roofMesh.position.y = 2.25;
    roofMesh.rotation.y = Math.PI / 4;
    landmarkMeshGroup.add(roofMesh);

    const pillarGeo = new THREE.CylinderGeometry(0.3, 0.3, 2, 6);
    for (let x = -2.5; x <= 2.5; x += 2.5) {
      const pillar = new THREE.Mesh(pillarGeo, matSaffron);
      pillar.position.set(x, 1.25, 1.8);
      landmarkMeshGroup.add(pillar);
    }
  } else if (type === 'tajmahal') {
    // Taj Mahal Geometric Origami Structure
    const baseGeo = new THREE.BoxGeometry(6, 3, 6);
    const baseMesh = new THREE.Mesh(baseGeo, matParchment);
    landmarkMeshGroup.add(baseMesh);

    const domeGeo = new THREE.SphereGeometry(2, 8, 8);
    const domeMesh = new THREE.Mesh(domeGeo, matParchment);
    domeMesh.position.y = 3;
    landmarkMeshGroup.add(domeMesh);

    // 4 Minarets
    const minaretGeo = new THREE.CylinderGeometry(0.25, 0.35, 5, 6);
    const positions = [[-3.5, -3.5], [3.5, -3.5], [-3.5, 3.5], [3.5, 3.5]];
    positions.forEach(([x, z]) => {
      const minaret = new THREE.Mesh(minaretGeo, matSaffron);
      minaret.position.set(x, 1, z);
      landmarkMeshGroup.add(minaret);
    });
  } else if (type === 'eiffel') {
    // Eiffel Tower Geometric Structure
    const legGeo = new THREE.ConeGeometry(3, 8, 4);
    const towerMesh = new THREE.Mesh(legGeo, matSaffron);
    towerMesh.position.y = 2;
    landmarkMeshGroup.add(towerMesh);

    const spireGeo = new THREE.CylinderGeometry(0.1, 0.6, 4, 4);
    const spireMesh = new THREE.Mesh(spireGeo, matIndigo);
    spireMesh.position.y = 7;
    landmarkMeshGroup.add(spireMesh);
  } else if (type === 'pagoda') {
    // Pagoda Geometric Structure
    for (let level = 0; level < 4; level++) {
      const size = 5 - level * 1.1;
      const roof = new THREE.Mesh(new THREE.ConeGeometry(size, 1.2, 4), matIndigo);
      roof.position.y = level * 1.8;
      roof.rotation.y = Math.PI / 4;
      landmarkMeshGroup.add(roof);

      const body = new THREE.Mesh(new THREE.BoxGeometry(size * 0.7, 1, size * 0.7), matParchment);
      body.position.y = level * 1.8 - 0.5;
      landmarkMeshGroup.add(body);
    }
  }
}

function switchLandmark(type) {
  activeLandmarkType = type;
  playPaperSound('unfold');
  buildLandmarkMesh(type);

  document.querySelectorAll('.origami-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('onclick').includes(type));
  });
}

// --------------------------------------------------------------------------
// 6. Three.js 360-Degree 3D Book Model Preview (#detail View)
// --------------------------------------------------------------------------
let detailScene, detailCamera, detailRenderer, detailBookGroup, detailControls;
let detailAnimId = null;
let isBookOpen = false;

function initDetailThreeBookScene(book) {
  const container = document.getElementById('canvas-3d-book-container');
  if (!container) return;
  container.innerHTML = '';

  const width = container.clientWidth || 440;
  const height = container.clientHeight || 420;

  detailScene = new THREE.Scene();

  detailCamera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  detailCamera.position.set(0, 2, 9);

  detailRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  detailRenderer.setSize(width, height);
  detailRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  detailRenderer.shadowMap.enabled = true;
  container.appendChild(detailRenderer.domElement);

  if (THREE.OrbitControls) {
    detailControls = new THREE.OrbitControls(detailCamera, detailRenderer.domElement);
    detailControls.enableDamping = true;
    detailControls.dampingFactor = 0.05;
  }

  // Lighting
  const ambLight = new THREE.AmbientLight(0xffffff, 0.8);
  detailScene.add(ambLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
  dirLight.position.set(5, 10, 7);
  detailScene.add(dirLight);

  detailBookGroup = new THREE.Group();
  detailScene.add(detailBookGroup);

  // Hardcover Book Mesh Construction
  const coverColor = book.colorHex || 0x1a237e;
  const matCover = new THREE.MeshPhongMaterial({ color: coverColor, flatShading: true });
  const matPages = new THREE.MeshPhongMaterial({ color: 0xf3f7fa, flatShading: true });

  // Main Page Block
  const pagesGeo = new THREE.BoxGeometry(3.6, 4.8, 0.6);
  const pagesMesh = new THREE.Mesh(pagesGeo, matPages);
  pagesMesh.position.set(0.1, 0, 0);
  detailBookGroup.add(pagesMesh);

  // Back Cover
  const backCoverGeo = new THREE.BoxGeometry(3.8, 5.0, 0.08);
  const backCoverMesh = new THREE.Mesh(backCoverGeo, matCover);
  backCoverMesh.position.set(0.1, 0, -0.34);
  detailBookGroup.add(backCoverMesh);

  // Front Cover (Animatable pivot)
  const frontCoverPivot = new THREE.Group();
  frontCoverPivot.position.set(-1.8, 0, 0.34);

  const frontCoverGeo = new THREE.BoxGeometry(3.8, 5.0, 0.08);
  const frontCoverMesh = new THREE.Mesh(frontCoverGeo, matCover);
  frontCoverMesh.position.set(1.9, 0, 0);
  frontCoverPivot.add(frontCoverMesh);

  detailBookGroup.add(frontCoverPivot);
  detailBookGroup.frontPivot = frontCoverPivot;

  // Spine
  const spineGeo = new THREE.BoxGeometry(0.08, 5.0, 0.76);
  const spineMesh = new THREE.Mesh(spineGeo, matCover);
  spineMesh.position.set(-1.8, 0, 0);
  detailBookGroup.add(spineMesh);

  detailBookGroup.rotation.y = 0.4;
  detailBookGroup.rotation.x = 0.1;

  function animateDetailBook() {
    detailAnimId = requestAnimationFrame(animateDetailBook);
    if (detailControls) detailControls.update();
    if (!detailControls && detailBookGroup) {
      detailBookGroup.rotation.y += 0.005;
    }
    detailRenderer.render(detailScene, detailCamera);
  }
  animateDetailBook();
}

function toggle3DBookOpen() {
  if (!detailBookGroup || !detailBookGroup.frontPivot) return;
  isBookOpen = !isBookOpen;
  playPaperSound(isBookOpen ? 'unfold' : 'fold');

  const targetAngle = isBookOpen ? -Math.PI * 0.75 : 0;
  detailBookGroup.frontPivot.rotation.y = targetAngle;
}

function reset3DBookRotation() {
  if (!detailBookGroup) return;
  playPaperSound('click');
  detailBookGroup.rotation.set(0.1, 0.4, 0);
  if (detailControls) detailControls.reset();
}

// --------------------------------------------------------------------------
// 7. SPA Router & View Rendering (#home, #search, #curation, #cart, #detail)
// --------------------------------------------------------------------------
function router() {
  const hash = window.location.hash || '#home';
  const cleanHash = hash.split('?')[0];

  // Update Nav Tabs Active State
  document.querySelectorAll('.nav-tab').forEach(tab => {
    const tabName = tab.getAttribute('data-tab');
    tab.classList.toggle('active', `#${tabName}` === cleanHash);
  });

  // Switch View Visibility
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });

  if (cleanHash === '#home') {
    document.getElementById('view-home').classList.add('active');
    renderHomeView();
    initHeroThreeScene();
  } else if (cleanHash === '#search') {
    document.getElementById('view-search').classList.add('active');
    renderSearchView();
  } else if (cleanHash === '#curation') {
    document.getElementById('view-curation').classList.add('active');
    renderCurationView();
  } else if (cleanHash === '#cart') {
    document.getElementById('view-cart').classList.add('active');
    renderCartView();
  } else if (cleanHash === '#detail') {
    document.getElementById('view-detail').classList.add('active');
    const urlParams = new URLSearchParams(hash.split('?')[1] || '');
    const bookId = urlParams.get('id') || 'BK-001';
    renderDetailView(bookId);
  }

  window.scrollTo(0, 0);
}

function renderActiveView() {
  router();
}

// --------------------------------------------------------------------------
// 8. PAGE 1: Render #home View
// --------------------------------------------------------------------------
function renderHomeView() {
  // Render 3D Flip Exhibition Cards
  const exhibitionContainer = document.getElementById('flip-exhibition-container');
  if (exhibitionContainer) {
    const exhibitions = [
      {
        tag: "EXHIBITION 01",
        title: "세계 랜드마크 건축 3D 입체 기획전",
        desc: "숭례문, 에펠탑, 타지마할의 역사와 종이 오리가미 도면을 다룬 종합 서지 팩",
        bg: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
        books: ["세계 문화 랜드마크 3D 건축 탐험", "세계 민담 오리가미 팝업 북"]
      },
      {
        tag: "EXHIBITION 02",
        title: "동남아시아 이중언어 아동 그림책 특별전",
        desc: "베트남, 필리핀 전래동화와 전통 문화를 수채화로 풀어낸 다국어 세트",
        bg: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&q=80",
        books: ["달을 품은 아오자이", "메콩강의 반딧불이 밤소풍", "마닐라의 무지개 지프니"]
      },
      {
        tag: "EXHIBITION 03",
        title: "동아시아 전통문화 & 페이퍼 아트전",
        desc: "중국 춘절 황금룡 전설과 경극 가면의 비밀을 담은 입체 기획전",
        bg: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80",
        books: ["황금룡과 만리장성의 비밀", "경극 가면 뒤의 작은 꼬마"]
      }
    ];

    exhibitionContainer.innerHTML = exhibitions.map(ex => `
      <div class="flip-card-wrapper" onclick="this.classList.toggle('flipped'); playPaperSound('fold');">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background-image: url('${ex.bg}')">
            <div class="flip-card-front-overlay"></div>
            <div class="flip-front-content">
              <span class="exhibition-tag">${ex.tag}</span>
              <div>
                <h3 class="exhibition-title">${ex.title}</h3>
                <span class="flip-hint"><i class="fa-solid fa-arrows-rotate"></i> 클릭하여 3D 카드를 뒤집으세요</span>
              </div>
            </div>
          </div>
          <div class="flip-card-back">
            <div class="back-header">
              <h3 class="back-title">${ex.title}</h3>
            </div>
            <p class="back-desc">${ex.desc}</p>
            <ul class="back-book-preview-list">
              ${ex.books.map(b => `<li class="back-book-item"><i class="fa-solid fa-check text-saffron"></i> ${b}</li>`).join('')}
            </ul>
            <a href="#search" class="btn btn-secondary bevel-btn btn-block mt-auto" onclick="event.stopPropagation(); playPaperSound('unfold');">
              <i class="fa-solid fa-magnifying-glass"></i> 기획전 서지 검색하기
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render New Releases Showcase (Left 3D Card + Right Classic List)
  const featured3DCard = document.getElementById('home-featured-3d-card');
  const classicReleaseList = document.getElementById('home-classic-release-list');

  const featuredBook = BOOK_DATABASE[0]; // BK-001
  if (featured3DCard) {
    featured3DCard.innerHTML = `
      <div class="featured-release-card bevel-box">
        <span class="exhibition-tag mb-3" style="align-self: flex-start;">FEATURED NEW RELEASE</span>
        <div class="featured-cover-box" style="background: ${featuredBook.coverGradient}">
          <img src="${featuredBook.coverImage}" alt="${featuredBook.title}" class="featured-cover-img">
        </div>
        <div class="book-kdc-badge">KDC ${featuredBook.kdc} • ${featuredBook.langLabel}</div>
        <h3 class="book-card-title">${featuredBook.title}</h3>
        <p class="book-card-author">${featuredBook.author} | ${featuredBook.publisher}</p>
        <div class="book-card-footer mt-3">
          <span class="book-price">${featuredBook.price.toLocaleString()}원</span>
          <a href="#detail?id=${featuredBook.id}" class="btn btn-primary bevel-btn btn-sm" onclick="playPaperSound('unfold')">
            <i class="fa-solid fa-cube"></i> 3D 상세검수
          </a>
        </div>
      </div>
    `;
  }

  if (classicReleaseList) {
    const listBooks = BOOK_DATABASE.slice(1, 6);
    classicReleaseList.innerHTML = listBooks.map(bk => `
      <div class="release-list-item">
        <div class="item-left-info">
          <span class="item-lang-badge">${bk.lang}</span>
          <div class="item-title-box">
            <span class="item-title">${bk.title}</span>
            <span class="item-meta">${bk.author} • ${bk.publisher} • KDC ${bk.kdc}</span>
          </div>
        </div>
        <div class="d-flex align-items-center gap-3">
          <span class="book-price">${bk.price.toLocaleString()}원</span>
          <a href="#detail?id=${bk.id}" class="btn btn-outline-sm" onclick="playPaperSound('tab')">
            <i class="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    `).join('');
  }
}

// --------------------------------------------------------------------------
// 9. PAGE 2: Render #search View
// --------------------------------------------------------------------------
function renderSearchView() {
  applySearchFilters();
}

function applySearchFilters() {
  const keyword = (document.getElementById('filter-keyword')?.value || '').toLowerCase().trim();
  const lang = document.getElementById('filter-lang')?.value || 'ALL';
  const age = document.getElementById('filter-age')?.value || 'ALL';
  const kdc = document.getElementById('filter-kdc')?.value || 'ALL';
  const stock = document.getElementById('filter-stock')?.value || 'ALL';
  const sort = document.getElementById('sort-select')?.value || 'NEWEST';

  let filtered = BOOK_DATABASE.filter(bk => {
    // Keyword match
    if (keyword) {
      const matchTitle = bk.title.toLowerCase().includes(keyword);
      const matchAuthor = bk.author.toLowerCase().includes(keyword);
      const matchIsbn = bk.isbn.includes(keyword);
      const matchPub = bk.publisher.toLowerCase().includes(keyword);
      if (!matchTitle && !matchAuthor && !matchIsbn && !matchPub) return false;
    }
    // Language match
    if (lang !== 'ALL' && bk.lang !== lang) return false;
    // Age match
    if (age !== 'ALL' && bk.targetAge !== age) return false;
    // KDC match
    if (kdc !== 'ALL' && !bk.kdc.startsWith(kdc.substring(0, 1))) return false;
    // Stock match
    if (stock !== 'ALL' && bk.stockStatus !== stock) return false;

    return true;
  });

  // Sorting
  if (sort === 'TITLE') {
    filtered.sort((a, b) => a.title.localeCompare(b.title, 'ko'));
  } else if (sort === 'PRICE_ASC') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'PRICE_DESC') {
    filtered.sort((a, b) => b.price - a.price);
  } else {
    // NEWEST
    filtered.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
  }

  // Update Count
  const countNum = document.getElementById('search-count-num');
  if (countNum) countNum.textContent = filtered.length;

  // Render Grid
  const grid = document.getElementById('search-results-grid');
  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-5">
          <i class="fa-solid fa-box-open font-size-3rem text-neutral-slate mb-3"></i>
          <h3>일치하는 다문화 도서 서지가 없습니다.</h3>
          <p class="text-neutral-slate">검색어나 필터 조건을 변경하여 다시 검색해 주세요.</p>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(bk => `
        <div class="book-card">
          <div class="book-cover-container" style="background: ${bk.coverGradient}">
            <span class="book-lang-tag">${bk.lang}</span>
            <span class="book-stock-tag">${bk.stockStatus === 'IN_STOCK' ? '즉시출고' : '예약수서'}</span>
            <img src="${bk.coverImage}" alt="${bk.title}" class="book-cover-img">
          </div>
          <div class="book-card-body">
            <div>
              <div class="book-kdc-badge">KDC ${bk.kdc} | ${bk.targetAge}</div>
              <h3 class="book-card-title">${bk.title}</h3>
              <p class="book-card-author">${bk.author}</p>
            </div>
            <div class="book-card-footer">
              <span class="book-price">${bk.price.toLocaleString()}원</span>
              <div class="book-card-actions">
                <button class="btn btn-outline-sm" title="장바구니 담기" onclick="addToCart('${bk.id}')">
                  <i class="fa-solid fa-cart-plus"></i>
                </button>
                <a href="#detail?id=${bk.id}" class="btn btn-primary btn-outline-sm" onclick="playPaperSound('unfold')">
                  3D 검수
                </a>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

function resetSearchFilters() {
  playPaperSound('click');
  const kw = document.getElementById('filter-keyword');
  if (kw) kw.value = '';
  const lang = document.getElementById('filter-lang');
  if (lang) lang.value = 'ALL';
  const age = document.getElementById('filter-age');
  if (age) age.value = 'ALL';
  const kdc = document.getElementById('filter-kdc');
  if (kdc) kdc.value = 'ALL';
  const stock = document.getElementById('filter-stock');
  if (stock) stock.value = 'ALL';
  applySearchFilters();
}

// --------------------------------------------------------------------------
// 10. PAGE 3: Render #curation View
// --------------------------------------------------------------------------
function renderCurationView() {
  const container = document.getElementById('curation-packages-container');
  if (!container) return;

  container.innerHTML = CURATION_PACKAGES.map(pack => {
    const packBooks = pack.books.map(id => BOOK_DATABASE.find(b => b.id === id)).filter(Boolean);
    return `
      <div class="curation-pack-card">
        <div class="pack-header-banner">
          <span class="pack-badge">${pack.badge}</span>
          <h3 class="pack-title">${pack.title}</h3>
          <p class="pack-subtitle">${pack.subtitle}</p>
        </div>
        <div class="pack-body">
          <div class="pack-included-books">
            ${packBooks.map(bk => `
              <div class="pack-book-row">
                <img src="${bk.coverImage}" alt="${bk.title}" class="pack-book-thumb">
                <div class="pack-book-info">
                  <span class="pack-book-title">${bk.title}</span>
                  <span class="pack-book-meta">${bk.publisher} • KDC ${bk.kdc}</span>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="pack-footer">
            <div class="pack-price-box">
              <span class="pack-original-price">정가 ${pack.originalPrice.toLocaleString()}원</span>
              <span class="pack-discount-price">${pack.discountPrice.toLocaleString()}원</span>
            </div>
            <button class="btn btn-secondary bevel-btn" onclick="addCurationPackToCart('${pack.id}')">
              <i class="fa-solid fa-boxes-packing"></i> 패키지 수서 담기
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function addCurationPackToCart(packId) {
  const pack = CURATION_PACKAGES.find(p => p.id === packId);
  if (!pack) return;
  playPaperSound('unfold');

  pack.books.forEach(bId => {
    const existing = cartState.find(item => item.bookId === bId);
    if (existing) {
      existing.qty += 1;
    } else {
      cartState.push({ bookId: bId, qty: 1, checked: true });
    }
  });

  saveCart();
  alert(`[${pack.title}] 구성 도서가 장바구니에 담겼습니다.`);
}

// --------------------------------------------------------------------------
// 11. PAGE 4: Render #cart View (Librarian Bulk Cart & Quotes)
// --------------------------------------------------------------------------
function renderCartView() {
  const tbody = document.getElementById('cart-table-body');
  if (!tbody) return;

  if (cartState.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="text-center py-5">
          <i class="fa-solid fa-cart-flatbed font-size-3rem text-neutral-slate mb-3"></i>
          <h3>수서 장바구니가 비어 있습니다.</h3>
          <a href="#search" class="btn btn-primary bevel-btn mt-3" onclick="playPaperSound('tab')">
            도서 수서 검색하러 가기
          </a>
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = cartState.map((item, idx) => {
      const book = BOOK_DATABASE.find(b => b.id === item.bookId);
      if (!book) return '';

      const subtotal = book.price * item.qty;

      return `
        <tr>
          <td>
            <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleCartCheck(${idx}, this.checked)">
          </td>
          <td>
            <img src="${book.coverImage}" alt="${book.title}" style="width: 50px; height: 65px; object-fit: cover;">
          </td>
          <td>
            <div class="cart-item-title">${book.title}</div>
            <div class="cart-item-meta">ISBN: ${book.isbn} | 저자: ${book.author} | 출판사: ${book.publisher}</div>
          </td>
          <td><span class="font-mono text-saffron font-weight-bold">KDC ${book.kdc}</span></td>
          <td><span class="font-mono">${book.price.toLocaleString()}원</span></td>
          <td>
            <div class="qty-input-group">
              <button class="qty-btn" onclick="updateCartQty(${idx}, ${item.qty - 1})">-</button>
              <input type="text" class="qty-field" value="${item.qty}" readonly>
              <button class="qty-btn" onclick="updateCartQty(${idx}, ${item.qty + 1})">+</button>
            </div>
          </td>
          <td><span class="font-mono font-weight-bold text-indigo">${subtotal.toLocaleString()}원</span></td>
          <td>
            <button class="btn btn-outline-sm text-danger" onclick="removeCartItem(${idx})" title="삭제">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  recalculateCartSummary();
  updateCartBadge();
}

function updateCartQty(idx, newQty) {
  if (newQty < 1) return;
  playPaperSound('click');
  cartState[idx].qty = newQty;
  saveCart();
  renderCartView();
}

function removeCartItem(idx) {
  playPaperSound('click');
  cartState.splice(idx, 1);
  saveCart();
  renderCartView();
}

function toggleCartCheck(idx, isChecked) {
  cartState[idx].checked = isChecked;
  saveCart();
  recalculateCartSummary();
}

function toggleSelectAllCart(isChecked) {
  cartState.forEach(item => item.checked = isChecked);
  saveCart();
  renderCartView();
}

function clearSelectedCartItems() {
  playPaperSound('click');
  cartState = cartState.filter(item => !item.checked);
  saveCart();
  renderCartView();
}

function addToCart(bookId) {
  playPaperSound('fold');
  const existing = cartState.find(item => item.bookId === bookId);
  if (existing) {
    existing.qty += 1;
  } else {
    cartState.push({ bookId, qty: 1, checked: true });
  }
  saveCart();
  updateCartBadge();

  const book = BOOK_DATABASE.find(b => b.id === bookId);
  alert(`[${book?.title || '도서'}] 가 수서 장바구니에 담겼습니다.`);
}

function saveCart() {
  localStorage.setItem('web_v6_cart', JSON.stringify(cartState));
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  if (badge) {
    const totalCount = cartState.reduce((acc, item) => acc + item.qty, 0);
    badge.textContent = totalCount;
  }
}

function recalculateCartSummary() {
  const instSelect = document.getElementById('cart-institution-type');
  const discountRate = parseFloat(instSelect?.value || '0.15');

  let subtotalOriginal = 0;
  cartState.forEach(item => {
    if (item.checked) {
      const bk = BOOK_DATABASE.find(b => b.id === item.bookId);
      if (bk) subtotalOriginal += bk.price * item.qty;
    }
  });

  const discountAmount = Math.round(subtotalOriginal * discountRate);
  const finalAmount = subtotalOriginal - discountAmount;

  const totalOrigEl = document.getElementById('summary-total-original');
  if (totalOrigEl) totalOrigEl.textContent = `${subtotalOriginal.toLocaleString()}원`;

  const totalDiscEl = document.getElementById('summary-total-discount');
  if (totalDiscEl) totalDiscEl.textContent = `-${discountAmount.toLocaleString()}원`;

  const totalFinalEl = document.getElementById('summary-total-final');
  if (totalFinalEl) totalFinalEl.textContent = `${finalAmount.toLocaleString()}원`;
}

// --------------------------------------------------------------------------
// 12. Official PDF / Excel Quote Generator
// --------------------------------------------------------------------------
function generatePDFQuote() {
  const checkedItems = cartState.filter(item => item.checked);
  if (checkedItems.length === 0) {
    alert('수서 견적서를 출력할 도서를 선택하세요.');
    return;
  }

  playPaperSound('unfold');

  const instSelect = document.getElementById('cart-institution-type');
  const discountRate = parseFloat(instSelect?.value || '0.15');
  const instName = instSelect?.options[instSelect.selectedIndex]?.text || '공공도서관';

  let subtotalOriginal = 0;
  const itemRows = checkedItems.map((item, idx) => {
    const bk = BOOK_DATABASE.find(b => b.id === item.bookId);
    const lineTotal = bk.price * item.qty;
    subtotalOriginal += lineTotal;
    return `
      <tr>
        <td style="text-align:center;">${idx + 1}</td>
        <td>${bk.title} (${bk.originalTitle})</td>
        <td style="text-align:center;">${bk.isbn}</td>
        <td style="text-align:center;">KDC ${bk.kdc}</td>
        <td style="text-align:right;">${bk.price.toLocaleString()}원</td>
        <td style="text-align:center;">${item.qty}</td>
        <td style="text-align:right;">${lineTotal.toLocaleString()}원</td>
      </tr>
    `;
  }).join('');

  const discountAmount = Math.round(subtotalOriginal * discountRate);
  const finalAmount = subtotalOriginal - discountAmount;
  const quoteSerial = `QT-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  const printDoc = document.getElementById('quote-print-document');
  if (printDoc) {
    printDoc.innerHTML = `
      <h1 class="quote-doc-title">공식 도서 수서 및 납품 견적서</h1>
      
      <table class="quote-meta-table">
        <tr>
          <td><strong>견적 번호:</strong> ${quoteSerial}</td>
          <td><strong>발행 일자:</strong> 2026년 09월 06일</td>
        </tr>
        <tr>
          <td><strong>수신 기관:</strong> ${instName}</td>
          <td><strong>공급 사업자:</strong> 글로벌 다문화 도서관 수서본부</td>
        </tr>
        <tr>
          <td><strong>납품 지정:</strong> 전국 KDC 보증 규격 완비</td>
          <td><strong>사업자번호:</strong> 214-88-92019</td>
        </tr>
      </table>

      <table class="quote-items-table">
        <thead>
          <tr>
            <th width="40">연번</th>
            <th>도서명 및 서지정보</th>
            <th width="130">ISBN-13</th>
            <th width="80">KDC</th>
            <th width="90">정가</th>
            <th width="50">수량</th>
            <th width="100">공급가액</th>
          </tr>
        </thead>
        <tbody>
          ${itemRows}
        </tbody>
      </table>

      <div style="text-align:right; font-size:1.1rem; line-height:1.8;">
        <div>총 정가 합계: <strong>${subtotalOriginal.toLocaleString()}원</strong></div>
        <div>기관 특별 할인금액: <strong style="color:#d97b5c;">-${discountAmount.toLocaleString()}원</strong></div>
        <div style="font-size:1.3rem; margin-top:8px;">최종 청구 금액 (VAT 포함): <strong style="color:#1a237e;">${finalAmount.toLocaleString()}원</strong></div>
      </div>

      <div style="margin-top:40px; border-top:1px solid #000; padding-top:16px; font-size:0.85rem; color:#555; text-align:center;">
        위 도서 품목에 대하여 국립중앙도서관 수서협력 표준 규격에 준하여 정식 납품을 견적합니다.<br>
        (직인 생략 / 전자 교부 문서)
      </div>
    `;
  }

  const modal = document.getElementById('print-quote-modal');
  if (modal) modal.classList.remove('hidden');
}

function closePrintQuoteModal() {
  const modal = document.getElementById('print-quote-modal');
  if (modal) modal.classList.add('hidden');
}

function generateExcelQuote() {
  const checkedItems = cartState.filter(item => item.checked);
  if (checkedItems.length === 0) {
    alert('Excel로 다운로드할 수서 도서를 선택하세요.');
    return;
  }

  playPaperSound('unfold');

  if (typeof XLSX === 'undefined') {
    alert('SheetJS (XLSX) 라이브러리를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
    return;
  }

  const excelData = checkedItems.map((item, idx) => {
    const bk = BOOK_DATABASE.find(b => b.id === item.bookId);
    return {
      "연번": idx + 1,
      "도서명": bk.title,
      "원서명": bk.originalTitle,
      "저자": bk.author,
      "출판사": bk.publisher,
      "언어": bk.langLabel,
      "KDC 분류": bk.kdc,
      "ISBN-13": bk.isbn,
      "정가(원)": bk.price,
      "수량": item.qty,
      "합계금액(원)": bk.price * item.qty
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(excelData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "수서목록");

  XLSX.writeFile(workbook, `Multicultural_Library_Quote_2026.xlsx`);
}

// --------------------------------------------------------------------------
// 13. PAGE 5: Render #detail View (3D Book & Bibliographic Metadata)
// --------------------------------------------------------------------------
function renderDetailView(bookId) {
  const book = BOOK_DATABASE.find(b => b.id === bookId) || BOOK_DATABASE[0];
  const container = document.getElementById('detail-main-content');
  if (!container) return;

  container.innerHTML = `
    <!-- 3D Interactive Book Model Viewer Column (Left) -->
    <div class="3d-viewer-container bevel-box">
      <span class="exhibition-tag mb-3" style="align-self: flex-start;">360° INTERACTIVE 3D INSPECTOR</span>
      <div id="canvas-3d-book-container" class="canvas-3d-box">
        <!-- Three.js Canvas Injected Here -->
      </div>
      <div class="viewer-controls-bar">
        <button class="btn btn-outline-sm" onclick="toggle3DBookOpen()">
          <i class="fa-solid fa-book-open"></i> 표지 펼치기/덮기
        </button>
        <button class="btn btn-outline-sm" onclick="reset3DBookRotation()">
          <i class="fa-solid fa-rotate-left"></i> 회전 리셋
        </button>
      </div>
    </div>

    <!-- Bibliographic Metadata & Order Info Column (Right) -->
    <div class="detail-info-box">
      <div class="detail-kdc-tag">KDC ${book.kdc} • ${book.langLabel}</div>
      <h1 class="detail-title">${book.title}</h1>
      <p class="detail-subtitle">${book.originalTitle}</p>

      <div class="detail-meta-grid">
        <div class="meta-item"><span class="meta-label">저자:</span> <span class="meta-val">${book.author}</span></div>
        <div class="meta-item"><span class="meta-label">출판사:</span> <span class="meta-val">${book.publisher}</span></div>
        <div class="meta-item"><span class="meta-label">ISBN-13:</span> <span class="meta-val font-mono">${book.isbn}</span></div>
        <div class="meta-item"><span class="meta-label">발행일:</span> <span class="meta-val font-mono">${book.pubDate}</span></div>
        <div class="meta-item"><span class="meta-label">대상연령:</span> <span class="meta-val">${book.targetAge}</span></div>
        <div class="meta-item"><span class="meta-label">출고상태:</span> <span class="meta-val text-jade">${book.stockLead}</span></div>
      </div>

      <!-- Multi-Language Audio Sample Preview Widget -->
      <div class="audio-preview-widget bevel-box">
        <div class="audio-info">
          <i class="fa-solid fa-circle-play font-size-1.5rem text-indigo"></i>
          <div>
            <strong>다국어 원어 낭독 음성 샘플 (Audio Preview)</strong>
            <div class="font-size-0.82rem text-neutral-slate">${book.audioSampleText}</div>
          </div>
        </div>
        <button class="audio-btn bevel-btn" onclick="playAudioSample('${book.audioSampleText}')">
          <i class="fa-solid fa-volume-high"></i> 샘플 낭독 들으기
        </button>
      </div>

      <div class="detail-synopsis-box">
        <h3 class="synopsis-title">도서 서지 개요 및 사서 평가</h3>
        <p class="synopsis-text">${book.synopsis}</p>
      </div>

      <div class="d-flex align-items-center justify-content-space-between mt-auto pt-4 border-top">
        <div>
          <span class="font-size-0.85rem text-neutral-slate display-block">공식 납품 정가</span>
          <span class="font-mono font-size-1.8rem font-weight-bold text-indigo">${book.price.toLocaleString()}원</span>
        </div>
        <button class="btn btn-primary bevel-btn btn-lg" onclick="addToCart('${book.id}')">
          <i class="fa-solid fa-cart-plus"></i> 수서 장바구니 담기
        </button>
      </div>
    </div>
  `;

  initDetailThreeBookScene(book);
}

function playAudioSample(sampleText) {
  playPaperSound('unfold');
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(sampleText);
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } else {
    alert(`[음성 낭독 샘플]: "${sampleText}"`);
  }
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) drawer.classList.toggle('hidden');
}

// --------------------------------------------------------------------------
// 14. Global Initializer & Event Listeners
// --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', router);
  router();
  updateCartBadge();
});
