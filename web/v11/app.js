/**
 * NEXUS LIB v11 - Cyberpunk Multi-Language Library Supply Portal Engine
 * 5-Page SPA with Three.js 3D Holograms, Web Audio, Laser Ripple & Official Quote PDF/CSV Generator
 */

// ==========================================================================
// 1. GLOBAL MULTICULTURAL BOOK DATASET
// ==========================================================================
const BOOKS_DATA = [
    {
        id: 'book-1',
        title: '무지개 다리 너머 (Vượt Qua Cầu Vồng)',
        subtitle: '베트남-한국 다문화 이중언어 전래동화',
        author: '쩐 티 마이 글 / 이현주 그림',
        publisher: '아시아문학사',
        pubYear: '2026',
        isbn: '979-11-89342-01-9',
        kdc: '800.8',
        kdcCategory: '800',
        lang: 'VI',
        langLabel: '한국어 / 베트남어 (KO/VI)',
        ageGroup: 'CHILDREN',
        ageLabel: '유아/어린이 (3~9세)',
        price: 18000,
        stock: 45,
        pages: '144쪽',
        coverColor: '#00f3ff',
        summary: '한국의 오작교 설화와 베트남의 은하수 설화를 아름다운 이중언어 텍스트와 서정적인 3D 팝업 스타일 일러스트로 융합한 핵심 다문화 수서 도서입니다.',
        featured: true
    },
    {
        id: 'book-2',
        title: 'Cyberpunk & Future AI for Kids',
        subtitle: '글로벌 초등 다국어 미래과학 가이드',
        author: 'Dr. Arthur Pendelton',
        publisher: 'Global Ed Tech',
        pubYear: '2026',
        isbn: '979-11-90112-44-2',
        kdc: '004.73',
        kdcCategory: '000',
        lang: 'EN',
        langLabel: 'English (EN)',
        ageGroup: 'YOUTH',
        ageLabel: '초등고학년/청소년 (10~18세)',
        price: 24000,
        stock: 60,
        pages: '210쪽',
        coverColor: '#ff0055',
        summary: '미래 사회의 인공지능, 메타버스, 로봇 윤리를 영어와 시각 화보로 배울 수 있는 글로벌 청소년 필수 이공계 수서 도서입니다.',
        featured: true
    },
    {
        id: 'book-3',
        title: '천자문과 아시아 문화 이야기 (千字文与亚洲文化)',
        subtitle: '한-중 문화 교류 대역 한자 공부',
        author: '장웨이(張偉) 저 / 김영호 역',
        publisher: '다문화출판사',
        pubYear: '2025',
        isbn: '979-11-77881-12-0',
        kdc: '720.4',
        kdcCategory: '700',
        lang: 'ZH',
        langLabel: '한국어 / 中文 (KO/ZH)',
        ageGroup: 'ADULT',
        ageLabel: '성인/다문화가족',
        price: 22000,
        stock: 30,
        pages: '320쪽',
        coverColor: '#ffd700',
        summary: '동아시아 공통 문화 유산인 천자문을 현대 다문화가족의 삶의 지혜와 연결하여 쉬운 해설과 중국어 핀인을 함께 실은 어학 도서입니다.',
        featured: true
    },
    {
        id: 'book-4',
        title: '마음으로 듣는 이야기 (心で聴く物語)',
        subtitle: '한-일 다문화 가족 감성 힐링 에세이',
        author: '사토 아키코(佐藤明子)',
        publisher: '사이버미디어',
        pubYear: '2025',
        isbn: '979-11-66551-90-5',
        kdc: '834.0',
        kdcCategory: '800',
        lang: 'JA',
        langLabel: '한국어 / 日本語 (KO/JA)',
        ageGroup: 'ADULT',
        ageLabel: '성인/다문화가족',
        price: 16500,
        stock: 25,
        pages: '198쪽',
        coverColor: '#00ff66',
        summary: '일본에서 한국으로 이주한 다문화 여성들의 생생한 일상과 수채화 같은 감성 에세이를 양국 언어로 번역 수록한 장서입니다.',
        featured: true
    },
    {
        id: 'book-5',
        title: '다문화 사회의 이해와 포용 심리학',
        subtitle: '2026 문화체육관광부 추천 교양 도서',
        author: '이성민 / 박지은 공저',
        publisher: '사회과학연구원',
        pubYear: '2026',
        isbn: '979-11-30012-77-8',
        kdc: '331.5',
        kdcCategory: '300',
        lang: 'KO',
        langLabel: '한국어 (KO)',
        ageGroup: 'ADULT',
        ageLabel: '성인/다문화가족',
        price: 28000,
        stock: 50,
        pages: '380쪽',
        coverColor: '#9d00ff',
        summary: '다문화 사회로 빠르게 진입하는 대한민국 사회의 심리적 포용성과 정책 과제를 전문 사서 및 일반 시민 입장에서 다룬 학술 도서.',
        featured: false
    },
    {
        id: 'book-6',
        title: '세계의 축제와 음식 여행 (Global Festivals & Food)',
        subtitle: '그림으로 떠나는 50개국 다문화 입체 팝업북',
        author: '엘레나 로드리게스',
        publisher: '글로벌북스',
        pubYear: '2026',
        isbn: '979-11-44551-09-3',
        kdc: '909.8',
        kdcCategory: '900',
        lang: 'EN',
        langLabel: 'English / 한국어 (EN/KO)',
        ageGroup: 'CHILDREN',
        ageLabel: '유아/어린이 (3~9세)',
        price: 25000,
        stock: 35,
        pages: '120쪽',
        coverColor: '#ff0055',
        summary: '세계 여러 나라의 전통 축제와 음식을 재미있는 대형 입체 일러스트로 소개해 어린이 다문화 교실 수업용으로 인기가 높습니다.',
        featured: true
    },
    {
        id: 'book-7',
        title: '베트남 전래동화 100선 (Truyện Cổ Tích Việt Nam)',
        subtitle: '베트남 하노이 국립출판사 정식 계약판',
        author: '응우옌 반 훙 편저',
        publisher: '아시아문학사',
        pubYear: '2025',
        isbn: '979-11-89342-88-1',
        kdc: '895.97',
        kdcCategory: '800',
        lang: 'VI',
        langLabel: 'Tiếng Việt (VI)',
        ageGroup: 'YOUTH',
        ageLabel: '초등고학년/청소년 (10~18세)',
        price: 19500,
        stock: 40,
        pages: '260쪽',
        coverColor: '#00f3ff',
        summary: '베트남 본토에서 가장 사랑받는 전래동화 100편을 베트남 원어로 원형 그대로 보존한 사서 수서용 필독 총서.',
        featured: false
    },
    {
        id: 'book-8',
        title: '미래 도서관 3D 디지털 마스터',
        subtitle: '메타버스 도서관과 AI 수서 실무 가이드',
        author: '최현우 사서관',
        publisher: '사이버미디어',
        pubYear: '2026',
        isbn: '979-11-66551-01-2',
        kdc: '025.2',
        kdcCategory: '000',
        lang: 'KO',
        langLabel: '한국어 (KO)',
        ageGroup: 'ADULT',
        ageLabel: '성인/다문화가족',
        price: 32000,
        stock: 20,
        pages: '410쪽',
        coverColor: '#00ff66',
        summary: '도서관 사서 및 수서 담당자를 위해 AI 기반 장서 개발, 3D 홀로그램 전시 기획, 다문화 특화 서지 관리 프로세스를 다룹니다.',
        featured: true
    }
];

// 4 CURATION B2B PACKAGES
const CURATION_PACKAGES = {
    'pkg-1': {
        title: '동남아시아 다문화 듀얼 랭귀지 30권 세트',
        itemIds: ['book-1', 'book-7'],
        count: 30,
        discountRate: 0.20,
        retailTotal: 450000,
        supplyTotal: 360000
    },
    'pkg-2': {
        title: '사이버네틱 미래과학 & AI 다문화 50권 세트',
        itemIds: ['book-2', 'book-8'],
        count: 50,
        discountRate: 0.20,
        retailTotal: 750000,
        supplyTotal: 600000
    },
    'pkg-3': {
        title: '전국 공공도서관 필수 다문화 기초장서 100권',
        itemIds: ['book-1', 'book-2', 'book-3', 'book-4', 'book-5', 'book-6', 'book-7', 'book-8'],
        count: 100,
        discountRate: 0.22,
        retailTotal: 1500000,
        supplyTotal: 1170000
    },
    'pkg-4': {
        title: '글로벌 다문화 그림책 & 입체 팝업북 20권',
        itemIds: ['book-1', 'book-6'],
        count: 20,
        discountRate: 0.18,
        retailTotal: 320000,
        supplyTotal: 262400
    }
};

// ==========================================================================
// 2. MULTI-LANGUAGE TRANSLATION DICTIONARY (KO, EN, VI, ZH, JA)
// ==========================================================================
const I18N = {
    KO: {
        nav_subtitle: '다문화 도서관 사서 수서/구입 포털',
        nav_home: '메인 홈',
        nav_search: '사서 도서 검색',
        nav_curation: '3D 큐레이션',
        nav_cart: '장바구니 & 견적',
        nav_detail: '360° 도서 상세',
        btn_quick_quote: '빠른 공문 견적',
        hero_title: '미래형 다문화 도서관 <br><span class="neon-text-cyan">사서 수서/구입 통합 시스템</span>',
        hero_subtitle: 'Three.js 3D 홀로그램 전시관, 5개국 다국어 서지 필터, 원클릭 사서 공문 견적서(PDF/Excel) 자동생성 솔루션',
        btn_start_search: '수서 도서 검색 시작',
        btn_view_curation: '3D 큐레이션 관람',
        stat_books: '다국어 수서 가능 장서',
        stat_langs: '지원 언어 (KO/EN/VI/ZH/JA)',
        stat_discount: '공공/학교 도서관 정가 할인',
        stat_kolas: 'KOLAS / Excel / PDF 견적',
        cylinder_exhibition_title: '3D 홀로그램 실린더 기획 전시관',
        cylinder_exhibition_desc: '원통형 3D 홀로그램 공간에서 대표 다문화 테마 장서를 입체적으로 브라우징하세요.',
        btn_spin: '자동 회전',
        btn_360_view: '360° 3D 상세보기',
        btn_add_cart: '수서함 담기',
        new_releases_title: '신간 및 추천 다문화 도서 목록',
        new_releases_desc: '최신 KDC 분류별 신간과 3D 카드 뷰를 믹스하여 효율적인 수서를 지원합니다.',
        view_cards: '3D 카드리스트',
        view_compact: '사서 리스트',
        search_title: '사이버네틱 도서 검색 & 사서 수서 필터',
        search_subtitle: '언어별, KDC 분류별, 연령별, ISBN, 출판사 조건으로 빠르고 정확한 수서 데이터를 검색하세요.',
        search_placeholder: '도서명, 저자, 출판사, ISBN, KDC 코드, 키워드 검색...',
        btn_search: '검색 실행',
        filter_lang: '언어 필터',
        filter_kdc: 'KDC 분류',
        filter_age: '대상 연령',
        filter_sort: '정렬 방식',
        opt_all_kdc: '전체 KDC 분류 (000~900)',
        opt_all_ages: '전체 연령',
        sort_relevance: '관련도순',
        sort_newest: '최신발행순',
        sort_price_asc: '가격 낮은순',
        sort_price_desc: '가격 높은순',
        sort_title: '서명순',
        search_results_found: '검색 결과:',
        unit_items: '건',
        select_all: '전체 선택',
        btn_add_selected: '선택항목 수서함 담기',
        curation_title: '사서 맞춤 3D 사이버 큐레이션 기획전',
        curation_subtitle: '전국 공공·학교 도서관의 예산 및 주제별에 최적화된 3D 수서 패키지 컬렉션입니다.',
        btn_add_pkg_cart: '패키지 수서함 담기',
        cart_title: '사서 장바구니 & 공문 견적함',
        cart_subtitle: '기관 할인이 적용된 수서 도서 목록을 확인하고, 1클릭으로 공문 견적서(PDF) 및 엑셀(CSV)을 생성하세요.',
        btn_clear_cart: '수서함 전체 비우기',
        th_item_info: '서지 정보 (ISBN / KDC)',
        th_lang: '언어',
        th_unit_price: '정가 / 납품가',
        th_qty: '수량',
        th_subtotal: '공급 소계',
        cart_empty_title: '수서 장바구니가 비어 있습니다.',
        cart_empty_desc: '도서 검색이나 3D 큐레이션 기획전에서 원하는 도서를 추가해 보세요.',
        btn_go_search: '도서 검색하러 가기',
        inst_info_title: '구입 도서관 및 담당 사서 정보',
        lbl_library_name: '구입 도서관/기관명 *',
        lbl_librarian_name: '담당 사서 성명 *',
        lbl_contact: '연락처 / 이메일 *',
        lbl_budget_type: '수서 예산 항목',
        calc_total_qty: '총 수서 권수',
        calc_retail_total: '총 정가 합계',
        calc_discount: '도서관 기관 할인 (15%)',
        calc_final_total: '최종 납품 공급가 (VAT포함)',
        btn_gen_pdf: '1클릭 네온 공문 견적서 생성',
        btn_export_csv: '엑셀 / KOLAS III CSV 다운로드',
        btn_submit_procurement: '수서 납품 발주 신청',
        btn_back_list: '목록으로 돌아가기',
        audio_sample_title: '디지털 다국어 낭독 오디오 샘플',
        book_summary: '책 소개 & 수서 기획 의도',
        btn_direct_quote: '바로 견적서 작성',
        footer_rights: '© 2026 NEXUS Multicultural Library Solutions. All rights reserved.',
        footer_target: '사서 전용 B2B/B2C 수서 지원 센터 | KOLAS III 연동 규격 준수'
    },
    EN: {
        nav_subtitle: 'Multicultural Library Supply & Acquisition Portal',
        nav_home: 'Home',
        nav_search: 'Librarian Search',
        nav_curation: '3D Curation',
        nav_cart: 'Cart & Quote',
        nav_detail: '360° Book Detail',
        btn_quick_quote: 'Quick Quote',
        hero_title: 'Futuristic Multicultural <br><span class="neon-text-cyan">Library Acquisition System</span>',
        hero_subtitle: 'Three.js 3D Hologram Exhibition, 5-Language Bibliographic Search, 1-Click Official Quote Generator (PDF/Excel)',
        btn_start_search: 'Search Catalog',
        btn_view_curation: 'View 3D Bundles',
        stat_books: 'Available Multicultural Titles',
        stat_langs: 'Languages (KO/EN/VI/ZH/JA)',
        stat_discount: 'Standard Library Discount',
        stat_kolas: 'KOLAS / Excel / PDF Quotes',
        cylinder_exhibition_title: '3D Holographic Cylinder Exhibition',
        cylinder_exhibition_desc: 'Browse featured multicultural collections inside a cylindrical 3D holographic canvas.',
        btn_spin: 'Auto Spin',
        btn_360_view: '360° 3D Preview',
        btn_add_cart: 'Add to Cart',
        new_releases_title: 'New Releases & Recommended Titles',
        new_releases_desc: 'Mix of classic librarian list views and 3D cyber cover cards for high productivity.',
        view_cards: '3D Cards',
        view_compact: 'Compact List',
        search_title: 'Cybernetic Book Search & Librarian Filters',
        search_subtitle: 'Filter accurately by language, KDC classification, age range, ISBN, and publisher.',
        search_placeholder: 'Search by title, author, publisher, ISBN, KDC code...',
        btn_search: 'Search',
        filter_lang: 'Language',
        filter_kdc: 'KDC Code',
        filter_age: 'Target Age',
        filter_sort: 'Sort By',
        opt_all_kdc: 'All KDC Categories (000~900)',
        opt_all_ages: 'All Ages',
        sort_relevance: 'Relevance',
        sort_newest: 'Newest',
        sort_price_asc: 'Price Low to High',
        sort_price_desc: 'Price High to Low',
        sort_title: 'Title A-Z',
        search_results_found: 'Results:',
        unit_items: 'items',
        select_all: 'Select All',
        btn_add_selected: 'Add Selected to Cart',
        curation_title: 'Curated 3D Library Supply Packages',
        curation_subtitle: 'Optimized B2B book bundles for public and school library acquisition budgets.',
        btn_add_pkg_cart: 'Add Bundle to Cart',
        cart_title: 'Librarian Cart & Official Quote Hub',
        cart_subtitle: 'Review institutional discounted cart and generate official PDF quote or KOLAS CSV with 1 click.',
        btn_clear_cart: 'Clear Cart',
        th_item_info: 'Bibliographic Info (ISBN / KDC)',
        th_lang: 'Language',
        th_unit_price: 'Retail / Supply Price',
        th_qty: 'Qty',
        th_subtotal: 'Subtotal',
        cart_empty_title: 'Your Acquisition Cart is Empty.',
        cart_empty_desc: 'Explore the search catalog or 3D curation packages to add books.',
        btn_go_search: 'Explore Catalog',
        inst_info_title: 'Purchasing Library & Librarian Details',
        lbl_library_name: 'Library / Institution Name *',
        lbl_librarian_name: 'Librarian Name *',
        lbl_contact: 'Contact / Email *',
        lbl_budget_type: 'Acquisition Budget Category',
        calc_total_qty: 'Total Quantity',
        calc_retail_total: 'Retail Price Total',
        calc_discount: 'Institution Discount (15%)',
        calc_final_total: 'Final Procurement Total (Inc. VAT)',
        btn_gen_pdf: 'Generate Official PDF Quote',
        btn_export_csv: 'Download Excel / KOLAS III CSV',
        btn_submit_procurement: 'Submit Order Request',
        btn_back_list: 'Back to Catalog',
        audio_sample_title: 'Digital Multilingual Audio Preview',
        book_summary: 'Book Description & Acquisition Context',
        btn_direct_quote: 'Instant Quote',
        footer_rights: '© 2026 NEXUS Multicultural Library Solutions. All rights reserved.',
        footer_target: 'B2B Library Acquisition Portal | KOLAS III Compliant'
    },
    VI: {
        nav_subtitle: 'Cổng thông tin bổ sung sách thư viện đa văn hóa',
        nav_home: 'Trang chủ',
        nav_search: 'Tìm kiếm thư viện',
        nav_curation: 'Bộ sưu tập 3D',
        nav_cart: 'Giỏ hàng & Báo giá',
        nav_detail: 'Chi tiết 3D 360°',
        btn_quick_quote: 'Báo giá nhanh',
        hero_title: 'Hệ thống bổ sung sách <br><span class="neon-text-cyan">Thư viện Đa văn hóa Tương lai</span>',
        hero_subtitle: 'Triển lãm 3D Hologram Three.js, bộ lọc 5 ngôn ngữ, tự động tạo báo giá chính thức (PDF/Excel)',
        btn_start_search: 'Tìm kiếm sách',
        btn_view_curation: 'Xem gói 3D',
        stat_books: 'Sách đa ngôn ngữ có sẵn',
        stat_langs: 'Ngôn ngữ (KO/EN/VI/ZH/JA)',
        stat_discount: 'Giảm giá chuẩn cho thư viện',
        stat_kolas: 'Báo giá PDF / Excel / KOLAS',
        cylinder_exhibition_title: 'Triển lãm Hologram 3D hình trụ',
        cylinder_exhibition_desc: 'Duyệt bộ sưu tập sách đa văn hóa trong không gian hologram 3D độc đáo.',
        btn_spin: 'Tự xoay',
        btn_360_view: 'Xem 3D 360°',
        btn_add_cart: 'Thêm vào giỏ',
        new_releases_title: 'Sách mới & Đề xuất',
        new_releases_desc: 'Kết hợp danh sách thư viện truyền thống và thẻ 3D hiện đại.',
        view_cards: 'Thẻ 3D',
        view_compact: 'Danh sách thu gọn',
        search_title: 'Tìm kiếm sách & Bộ lọc thủ thư',
        search_subtitle: 'Tìm chính xác theo ngôn ngữ, mã KDC, độ tuổi, ISBN và nhà xuất bản.',
        search_placeholder: 'Tìm theo tên sách, tác giả, NXB, ISBN, mã KDC...',
        btn_search: 'Tìm kiếm',
        filter_lang: 'Ngôn ngữ',
        filter_kdc: 'Mã KDC',
        filter_age: 'Độ tuổi',
        filter_sort: 'Sắp xếp',
        opt_all_kdc: 'Tất cả danh mục KDC',
        opt_all_ages: 'Tất cả độ tuổi',
        sort_relevance: 'Độ liên quan',
        sort_newest: 'Mới nhất',
        sort_price_asc: 'Giá thấp đến cao',
        sort_price_desc: 'Giá cao đến thấp',
        sort_title: 'Tên A-Z',
        search_results_found: 'Kết quả:',
        unit_items: 'cuốn',
        select_all: 'Chọn tất cả',
        btn_add_selected: 'Thêm mục đã chọn vào giỏ',
        curation_title: 'Gói sách 3D tuyển chọn cho thư viện',
        curation_subtitle: 'Các gói sách B2B tối ưu cho ngân sách mua sắm thư viện.',
        btn_add_pkg_cart: 'Thêm gói vào giỏ',
        cart_title: 'Giỏ hàng & Trung tâm báo giá',
        cart_subtitle: 'Kiểm tra giỏ hàng chiết khấu và tạo báo giá PDF hoặc file CSV KOLAS trong 1 cú nhấp.',
        btn_clear_cart: 'Xóa giỏ hàng',
        th_item_info: 'Thông tin thư mục (ISBN / KDC)',
        th_lang: 'Ngôn ngữ',
        th_unit_price: 'Giá gốc / Giá cung cấp',
        th_qty: 'Số lượng',
        th_subtotal: 'Thành tiền',
        cart_empty_title: 'Giỏ hàng thư viện đang trống.',
        cart_empty_desc: 'Hãy khám phá mục tìm kiếm hoặc gói 3D để thêm sách.',
        btn_go_search: 'Đến trang tìm kiếm',
        inst_info_title: 'Thông tin Thư viện & Thủ thư',
        lbl_library_name: 'Tên Thư viện / Cơ quan *',
        lbl_librarian_name: 'Tên Thủ thư *',
        lbl_contact: 'Liên hệ / Email *',
        lbl_budget_type: 'Nguồn ngân sách mua sắm',
        calc_total_qty: 'Tổng số lượng',
        calc_retail_total: 'Tổng giá gốc',
        calc_discount: 'Chiết khấu thư viện (15%)',
        calc_final_total: 'Tổng thanh toán (gồm VAT)',
        btn_gen_pdf: 'Tạo báo giá PDF công văn',
        btn_export_csv: 'Tải CSV Excel / KOLAS III',
        btn_submit_procurement: 'Gửi yêu cầu đặt hàng',
        btn_back_list: 'Quay lại danh sách',
        audio_sample_title: 'Nghe thử đọc sách đa ngôn ngữ',
        book_summary: 'Giới thiệu sách & Mục đích mua sắm',
        btn_direct_quote: 'Báo giá ngay',
        footer_rights: '© 2026 NEXUS Multicultural Library Solutions. All rights reserved.',
        footer_target: 'Trung tâm hỗ trợ bổ sung sách B2B thư viện'
    },
    ZH: {
        nav_subtitle: '多元文化图书馆采编与图书采购门户',
        nav_home: '首页',
        nav_search: '图书检索',
        nav_curation: '3D 策展',
        nav_cart: '购物车与报价',
        nav_detail: '360° 图书详情',
        btn_quick_quote: '快速公函报价',
        hero_title: '未来型多元文化图书馆 <br><span class="neon-text-cyan">采编与采购集成系统</span>',
        hero_subtitle: 'Three.js 3D 全息展览馆、5国语言书目筛选、一键生成官方公函报价单 (PDF/Excel)',
        btn_start_search: '开始检索',
        btn_view_curation: '浏览 3D 礼包',
        stat_books: '可采购多元文化馆藏',
        stat_langs: '支持语言 (KO/EN/VI/ZH/JA)',
        stat_discount: '图书馆标准折扣',
        stat_kolas: 'KOLAS / Excel / PDF 报价',
        cylinder_exhibition_title: '3D 全息圆柱展厅',
        cylinder_exhibition_desc: '在圆柱形 3D 全息空间中立体浏览代表性多元文化馆藏。',
        btn_spin: '自动旋转',
        btn_360_view: '360° 3D 预览',
        btn_add_cart: '加入采编篮',
        new_releases_title: '新书与推荐书目',
        new_releases_desc: '结合经典馆员列表与现代 3D 封面卡片 View。',
        view_cards: '3D 卡片',
        view_compact: '馆员列表',
        search_title: '赛博图书检索与采编筛选',
        search_subtitle: '按语言、KDC 分类、适合年龄、ISBN 和出版社精准筛选。',
        search_placeholder: '请输入书名、作者、出版社、ISBN、KDC 分类号...',
        btn_search: '检索',
        filter_lang: '语言筛选',
        filter_kdc: 'KDC 分类',
        filter_age: '适合年龄',
        filter_sort: '排序方式',
        opt_all_kdc: '所有 KDC 分类 (000~900)',
        opt_all_ages: '所有年龄',
        sort_relevance: '相关度',
        sort_newest: '最新出版',
        sort_price_asc: '价格从低到高',
        sort_price_desc: '价格从高到低',
        sort_title: '书名拼音',
        search_results_found: '检索结果:',
        unit_items: '本',
        select_all: '全选',
        btn_add_selected: '将选中项加入采编篮',
        curation_title: '馆员定制 3D 赛博策展礼包',
        curation_subtitle: '针对公共图书馆与学校图书馆预算优化的 B2B 图书组合。',
        btn_add_pkg_cart: '将礼包加入采编篮',
        cart_title: '采编篮与官方报价中心',
        cart_subtitle: '确认享受机构折扣的书目，一键生成官方 PDF 报价单及 KOLAS CSV 文件。',
        btn_clear_cart: '清空采编篮',
        th_item_info: '书目信息 (ISBN / KDC)',
        th_lang: '语言',
        th_unit_price: '原价 / 供应价',
        th_qty: '数量',
        th_subtotal: '小计',
        cart_empty_title: '您的采编篮是空的。',
        cart_empty_desc: '请前往图书检索或 3D 策展展厅添加图书。',
        btn_go_search: '前往图书检索',
        inst_info_title: '采购图书馆及馆员信息',
        lbl_library_name: '采购图书馆 / 机构名称 *',
        lbl_librarian_name: '负责馆员姓名 *',
        lbl_contact: '联系电话 / 邮箱 *',
        lbl_budget_type: '采编预算科目',
        calc_total_qty: '总册数',
        calc_retail_total: '原价总计',
        calc_discount: '图书馆机构折扣 (15%)',
        calc_final_total: '最终供应价 (含 VAT)',
        btn_gen_pdf: '一键生成 PDF 官方报价单',
        btn_export_csv: '下载 Excel / KOLAS III CSV',
        btn_submit_procurement: '提交采编采购申请',
        btn_back_list: '返回列表',
        audio_sample_title: '数码多语言朗读音频试听',
        book_summary: '图书简介与采购意图',
        btn_direct_quote: '直接生成报价',
        footer_rights: '© 2026 NEXUS Multicultural Library Solutions. All rights reserved.',
        footer_target: '馆员专用 B2B/B2C 采编支持中心'
    },
    JA: {
        nav_subtitle: '多文化図書館 司書選書・購入ポータル',
        nav_home: 'メインホーム',
        nav_search: '司書蔵書検索',
        nav_curation: '3D キュレーション',
        nav_cart: 'カート＆見積',
        nav_detail: '360° 書籍詳細',
        btn_quick_quote: '公文見積発行',
        hero_title: '未来型多文化図書館 <br><span class="neon-text-cyan">司書選書・購入統合システム</span>',
        hero_subtitle: 'Three.js 3D ホログラム展示館、5カ国語書誌フィルター、ワンクリック公式見積書 (PDF/Excel) 自動生成',
        btn_start_search: '蔵書検索を開始',
        btn_view_curation: '3D パック閲覧',
        stat_books: '選書可能多言語蔵書',
        stat_langs: '対応言語 (KO/EN/VI/ZH/JA)',
        stat_discount: '図書館標準割引',
        stat_kolas: 'KOLAS / Excel / PDF 見積',
        cylinder_exhibition_title: '3D ホログラムシリンダー企画展示館',
        cylinder_exhibition_desc: '円筒形 3D ホログラム空間で代表的な多文化テーマ蔵書を立体的にブラウジング。',
        btn_spin: '自動回転',
        btn_360_view: '360° 3D プレビュー',
        btn_add_cart: '選書カートに追加',
        new_releases_title: '新刊およびおすすめ多文化書籍',
        new_releases_desc: 'クラシック司書リストビューと現代的な 3D カードビューをミックス。',
        view_cards: '3D カード',
        view_compact: '司書リスト',
        search_title: 'サイバー蔵書検索＆司書フィルター',
        search_subtitle: '言語、KDC 分類、対象年齢、ISBN、出版社条件で正確に検索。',
        search_placeholder: '書名、著者、出版社、ISBN、KDC コードで検索...',
        btn_search: '検索実行',
        filter_lang: '言語フィルター',
        filter_kdc: 'KDC 分類',
        filter_age: '対象年齢',
        filter_sort: '並び替え',
        opt_all_kdc: '全 KDC 分類 (000~900)',
        opt_all_ages: '全年齢',
        sort_relevance: '関連度順',
        sort_newest: '新着順',
        sort_price_asc: '価格が安い順',
        sort_price_desc: '価格が高い順',
        sort_title: '五十音順',
        search_results_found: '検索結果:',
        unit_items: '件',
        select_all: 'すべて選択',
        btn_add_selected: '選択項目をカートに追加',
        curation_title: '司書向け 3D キュレーションパッケージ',
        curation_subtitle: '全国の公共・学校図書館の予算やテーマに最適化された 3D 書籍パック。',
        btn_add_pkg_cart: 'パックをカートに追加',
        cart_title: '司書カート＆公式見積ハブ',
        cart_subtitle: '機関割引が適用された選書リストを確認し、ワンクリックで PDF 見積書や KOLAS CSV を生成。',
        btn_clear_cart: 'カートを空にする',
        th_item_info: '書誌情報 (ISBN / KDC)',
        th_lang: '言語',
        th_unit_price: '定価 / 納품価格',
        th_qty: '数量',
        th_subtotal: '小計',
        cart_empty_title: '選書カートが空です。',
        cart_empty_desc: '蔵書検索や 3D キュレーション展示から書籍を追加してください。',
        btn_go_search: '蔵書検索へ',
        inst_info_title: '購入図書館および担当司書情報',
        lbl_library_name: '購入図書館 / 機関名 *',
        lbl_librarian_name: '担当司書 氏名 *',
        lbl_contact: '連絡先 / メールアドレス *',
        lbl_budget_type: '選書予算科目',
        calc_total_qty: '合計冊数',
        calc_retail_total: '定価合計',
        calc_discount: '図書館機関割引 (15%)',
        calc_final_total: '最終納入価格 (税込)',
        btn_gen_pdf: 'ワンクリック PDF 見積書生成',
        btn_export_csv: 'Excel / KOLAS III CSV 出力',
        btn_submit_procurement: '納品発注の申請',
        btn_back_list: 'リストへ戻る',
        audio_sample_title: 'デジタル多言語朗読オーディオ試聴',
        book_summary: '書籍紹介＆選書意図',
        btn_direct_quote: '即時見積作成',
        footer_rights: '© 2026 NEXUS Multicultural Library Solutions. All rights reserved.',
        footer_target: '司書専用 B2B/B2C 選書支援センター'
    }
};

// State Store
const STATE = {
    currentLang: 'KO',
    soundEnabled: true,
    cart: [], // Array of { bookId, qty }
    selectedBookId: 'book-1',
    searchFilters: {
        keyword: '',
        lang: 'ALL',
        kdc: 'ALL',
        age: 'ALL',
        sort: 'RELEVANCE'
    },
    searchViewMode: 'CARD', // 'CARD' or 'TABLE'
    homeViewMode: 'CARD',
    selectedCylIndex: 0
};

// ==========================================================================
// 3. WEB AUDIO SYNTHESIZER SOUND ENGINE
// ==========================================================================
class CyberAudioEngine {
    constructor() {
        this.ctx = null;
        this.sampleOsc = null;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
    }

    playClick() {
        if (!STATE.soundEnabled) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1600, this.ctx.currentTime + 0.04);

        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
    }

    playLaser() {
        if (!STATE.soundEnabled) return;
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.15);

        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
    }

    playChime() {
        if (!STATE.soundEnabled) return;
        this.init();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + i * 0.05);

            gain.gain.setValueAtTime(0.15, now + i * 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + i * 0.05);
            osc.stop(now + i * 0.05 + 0.35);
        });
    }

    toggleSampleAudio(isPlaying, onEndCallback) {
        this.init();
        if (!this.ctx) return;

        if (isPlaying) {
            if (this.sampleOsc) this.sampleOsc.stop();
            
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(300, this.ctx.currentTime);

            // Create rhythmic futuristic melody modulation
            const lfo = this.ctx.createOscillator();
            lfo.frequency.setValueAtTime(6, this.ctx.currentTime); // 6Hz modulation
            const lfoGain = this.ctx.createGain();
            lfoGain.gain.setValueAtTime(150, this.ctx.currentTime);

            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);

            gain.gain.setValueAtTime(0.1, this.ctx.currentTime);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            lfo.start();
            osc.start();
            this.sampleOsc = osc;

            // Auto stop after 5 seconds simulation
            setTimeout(() => {
                if (this.sampleOsc) {
                    try { this.sampleOsc.stop(); } catch(e){}
                    this.sampleOsc = null;
                }
                if (onEndCallback) onEndCallback();
            }, 5000);
        } else {
            if (this.sampleOsc) {
                try { this.sampleOsc.stop(); } catch(e){}
                this.sampleOsc = null;
            }
        }
    }
}
const audioEngine = new CyberAudioEngine();

// ==========================================================================
// 4. LASER RIPPLE VISUAL EFFECT CANVAS
// ==========================================================================
class LaserRippleEffect {
    constructor() {
        this.canvas = document.getElementById('laser-ripple-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.ripples = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('click', (e) => this.addRipple(e.clientX, e.clientY));
        this.animate();
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addRipple(x, y) {
        this.ripples.push({
            x, y,
            radius: 5,
            maxRadius: 80,
            opacity: 1,
            color: Math.random() > 0.5 ? '#00f3ff' : '#ff0055'
        });
    }

    animate() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = this.ripples.length - 1; i >= 0; i--) {
            const r = this.ripples[i];
            r.radius += 3.5;
            r.opacity -= 0.035;

            if (r.opacity <= 0 || r.radius >= r.maxRadius) {
                this.ripples.splice(i, 1);
                continue;
            }

            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
            this.ctx.strokeStyle = r.color;
            this.ctx.lineWidth = 2;
            this.ctx.globalAlpha = Math.max(0, r.opacity);
            this.ctx.shadowColor = r.color;
            this.ctx.shadowBlur = 12;
            this.ctx.stroke();
            this.ctx.restore();
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================================================
// 5. THREE.JS 3D GRAPHIC ENGINES
// ==========================================================================

// 5A. HERO CYBER MATRIX ENGINE
class Hero3DEngine {
    constructor() {
        this.container = document.getElementById('hero-3d-canvas-container');
        if (!this.container || typeof THREE === 'undefined') return;

        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x05070d, 0.025);

        this.camera = new THREE.PerspectiveCamera(60, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.camera.position.set(0, 5, 20);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.initLights();
        this.initGrid();
        this.initFloatingBooks();

        window.addEventListener('resize', () => this.onResize());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));

        this.mouseX = 0;
        this.mouseY = 0;

        this.animate();
    }

    initLights() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambient);

        const cyanLight = new THREE.PointLight(0x00f3ff, 2, 50);
        cyanLight.position.set(10, 10, 10);
        this.scene.add(cyanLight);

        const pinkLight = new THREE.PointLight(0xff0055, 2, 50);
        pinkLight.position.set(-10, -5, 5);
        this.scene.add(pinkLight);
    }

    initGrid() {
        const gridHelper = new THREE.GridHelper(80, 40, 0x00f3ff, 0x141e33);
        gridHelper.position.y = -4;
        this.scene.add(gridHelper);

        // Particle field
        const geometry = new THREE.BufferGeometry();
        const count = 400;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 60;
            positions[i + 1] = (Math.random() - 0.5) * 30;
            positions[i + 2] = (Math.random() - 0.5) * 60;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({
            size: 0.2,
            color: 0x00f3ff,
            transparent: true,
            opacity: 0.7
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    initFloatingBooks() {
        this.booksGroup = new THREE.Group();
        const colors = [0x00f3ff, 0xff0055, 0x00ff66, 0xffd700, 0x9d00ff];

        for (let i = 0; i < 15; i++) {
            const geo = new THREE.BoxGeometry(1.8, 2.5, 0.4);
            const mat = new THREE.MeshStandardMaterial({
                color: colors[i % colors.length],
                wireframe: true,
                transparent: true,
                opacity: 0.85
            });

            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 12 + 2,
                (Math.random() - 0.5) * 20
            );
            mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

            mesh.userData = {
                rotSpeedX: (Math.random() - 0.5) * 0.02,
                rotSpeedY: (Math.random() - 0.5) * 0.02,
                floatSpeed: Math.random() * 0.02 + 0.01,
                initialY: mesh.position.y
            };

            this.booksGroup.add(mesh);
        }

        this.scene.add(this.booksGroup);
    }

    onMouseMove(e) {
        this.mouseX = (e.clientX / window.innerWidth - 0.5) * 4;
        this.mouseY = (e.clientY / window.innerHeight - 0.5) * 4;
    }

    onResize() {
        if (!this.container) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Camera move Parallax
        this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
        this.camera.position.y += (-this.mouseY + 5 - this.camera.position.y) * 0.05;
        this.camera.lookAt(0, 0, 0);

        // Animate floating books
        if (this.booksGroup) {
            const time = Date.now() * 0.001;
            this.booksGroup.children.forEach(b => {
                b.rotation.x += b.userData.rotSpeedX;
                b.rotation.y += b.userData.rotSpeedY;
                b.position.y = b.userData.initialY + Math.sin(time * 2 + b.position.x) * 0.5;
            });
        }

        if (this.particles) {
            this.particles.rotation.y += 0.001;
        }

        this.renderer.render(this.scene, this.camera);
    }
}

// 5B. 3D HOLOGRAPHIC CYLINDER EXHIBITION ENGINE
class Cylinder3DEngine {
    constructor() {
        this.container = document.getElementById('cylinder-3d-canvas-container');
        if (!this.container || typeof THREE === 'undefined') return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.camera.position.set(0, 2, 14);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        this.isSpinning = true;
        this.currentAngle = 0;
        this.targetAngle = 0;

        this.initStage();
        this.initCylinderItems();
        this.bindEvents();

        window.addEventListener('resize', () => this.onResize());
        this.animate();
    }

    initStage() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambient);

        const pointLight = new THREE.PointLight(0x00f3ff, 2.5, 30);
        pointLight.position.set(0, 5, 5);
        this.scene.add(pointLight);

        // Hologram Stage Rings
        const ringGeo = new THREE.RingGeometry(5.8, 6.0, 64);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = -2.5;
        this.scene.add(ring);
    }

    initCylinderItems() {
        this.cylinderGroup = new THREE.Group();
        this.itemMeshes = [];
        const radius = 6;
        const count = BOOKS_DATA.length;

        BOOKS_DATA.forEach((book, i) => {
            const angle = (i / count) * Math.PI * 2;
            const group = new THREE.Group();

            const geo = new THREE.BoxGeometry(1.6, 2.3, 0.3);
            const mat = new THREE.MeshStandardMaterial({
                color: book.coverColor || 0x00f3ff,
                roughness: 0.3,
                metalness: 0.5
            });

            const mesh = new THREE.Mesh(geo, mat);
            group.add(mesh);

            // Wireframe glow frame
            const wireGeo = new THREE.EdgesGeometry(geo);
            const wireMat = new THREE.LineBasicMaterial({ color: 0xffffff });
            const wire = new THREE.LineSegments(wireGeo, wireMat);
            group.add(wire);

            group.position.x = Math.sin(angle) * radius;
            group.position.z = Math.cos(angle) * radius;
            group.rotation.y = angle;

            group.userData = { index: i, book: book };
            this.cylinderGroup.add(group);
            this.itemMeshes.push(group);
        });

        this.scene.add(this.cylinderGroup);
        this.updateActivePanel();
    }

    bindEvents() {
        const spinBtn = document.getElementById('cyl-spin-btn');
        const nextBtn = document.getElementById('cyl-next-btn');
        const prevBtn = document.getElementById('cyl-prev-btn');

        if (spinBtn) {
            spinBtn.addEventListener('click', () => {
                this.isSpinning = !this.isSpinning;
                spinBtn.classList.toggle('active', this.isSpinning);
                audioEngine.playClick();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.isSpinning = false;
                STATE.selectedCylIndex = (STATE.selectedCylIndex + 1) % BOOKS_DATA.length;
                this.targetAngle = -(STATE.selectedCylIndex / BOOKS_DATA.length) * Math.PI * 2;
                this.updateActivePanel();
                audioEngine.playClick();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.isSpinning = false;
                STATE.selectedCylIndex = (STATE.selectedCylIndex - 1 + BOOKS_DATA.length) % BOOKS_DATA.length;
                this.targetAngle = -(STATE.selectedCylIndex / BOOKS_DATA.length) * Math.PI * 2;
                this.updateActivePanel();
                audioEngine.playClick();
            });
        }
    }

    updateActivePanel() {
        const book = BOOKS_DATA[STATE.selectedCylIndex];
        if (!book) return;

        const langEl = document.getElementById('cyl-book-lang');
        const kdcEl = document.getElementById('cyl-book-kdc');
        const titleEl = document.getElementById('cyl-book-title');
        const authorEl = document.getElementById('cyl-book-author');

        if (langEl) langEl.textContent = book.langLabel;
        if (kdcEl) kdcEl.textContent = `KDC ${book.kdc}`;
        if (titleEl) titleEl.textContent = book.title;
        if (authorEl) authorEl.textContent = `${book.author} | ${book.publisher}`;
    }

    onResize() {
        if (!this.container) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.isSpinning) {
            this.cylinderGroup.rotation.y += 0.005;
            const normalizedAngle = (-this.cylinderGroup.rotation.y) % (Math.PI * 2);
            const count = BOOKS_DATA.length;
            let index = Math.round((normalizedAngle / (Math.PI * 2)) * count) % count;
            if (index < 0) index += count;
            if (index !== STATE.selectedCylIndex) {
                STATE.selectedCylIndex = index;
                this.updateActivePanel();
            }
        } else {
            this.cylinderGroup.rotation.y += (this.targetAngle - this.cylinderGroup.rotation.y) * 0.08;
        }

        this.renderer.render(this.scene, this.camera);
    }
}

// 5C. 360° BOOK INSPECTOR ENGINE (#detail)
class BookDetail3DEngine {
    constructor() {
        this.container = document.getElementById('detail-3d-canvas-container');
        if (!this.container || typeof THREE === 'undefined') return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.camera.position.set(0, 0, 8);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);

        if (typeof THREE.OrbitControls !== 'undefined') {
            this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
            this.controls.enableDamping = true;
            this.controls.dampingFactor = 0.05;
        }

        this.autoRotate = true;
        this.isWireframe = false;

        this.initLights();
        this.initBookMesh();
        this.bindControls();

        window.addEventListener('resize', () => this.onResize());
        this.animate();
    }

    initLights() {
        const ambient = new THREE.AmbientLight(0xffffff, 0.7);
        this.scene.add(ambient);

        const light1 = new THREE.DirectionalLight(0x00f3ff, 1.2);
        light1.position.set(5, 10, 7);
        this.scene.add(light1);

        const light2 = new THREE.DirectionalLight(0xff0055, 0.8);
        light2.position.set(-5, -5, -5);
        this.scene.add(light2);
    }

    initBookMesh() {
        if (this.bookMesh) this.scene.remove(this.bookMesh);

        const book = BOOKS_DATA.find(b => b.id === STATE.selectedBookId) || BOOKS_DATA[0];

        const width = 2.4;
        const height = 3.4;
        const depth = 0.5;

        const geo = new THREE.BoxGeometry(width, height, depth);

        // Custom canvas cover texture generator
        const coverTex = this.createCyberCoverCanvas(book);
        const texture = new THREE.CanvasTexture(coverTex);

        // Materials array: Right, Left(Spine), Top, Bottom, Front, Back
        const mats = [
            new THREE.MeshStandardMaterial({ color: 0xffffff }), // Right (paper pages)
            new THREE.MeshStandardMaterial({ color: 0x090d1a }), // Left (Spine)
            new THREE.MeshStandardMaterial({ color: 0xeeeeee }), // Top
            new THREE.MeshStandardMaterial({ color: 0xeeeeee }), // Bottom
            new THREE.MeshStandardMaterial({ map: texture }),     // Front Cover
            new THREE.MeshStandardMaterial({ color: 0x0a0f1d })  // Back Cover
        ];

        this.bookMesh = new THREE.Mesh(geo, mats);
        this.scene.add(this.bookMesh);
    }

    createCyberCoverCanvas(book) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 724;
        const ctx = canvas.getContext('2d');

        // Background gradient
        const grad = ctx.createLinearGradient(0, 0, 512, 724);
        grad.addColorStop(0, '#090d1a');
        grad.addColorStop(1, book.coverColor || '#00f3ff');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 512, 724);

        // Border & Cyber grid
        ctx.strokeStyle = '#00f3ff';
        ctx.lineWidth = 8;
        ctx.strokeRect(20, 20, 472, 684);

        // Title text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px "Noto Sans KR", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(book.title.substring(0, 16), 256, 200);

        ctx.fillStyle = '#00f3ff';
        ctx.font = '22px "Rajdhani", sans-serif';
        ctx.fillText(`KDC ${book.kdc} | ${book.langLabel}`, 256, 280);

        ctx.fillStyle = '#cbd5e1';
        ctx.font = '20px "Noto Sans KR", sans-serif';
        ctx.fillText(book.author, 256, 500);

        ctx.fillStyle = '#ff0055';
        ctx.font = 'bold 24px "Orbitron", sans-serif';
        ctx.fillText('NEXUS MULTI-LIB v11', 256, 620);

        return canvas;
    }

    bindControls() {
        const spinBtn = document.getElementById('detail-spin-toggle');
        const resetBtn = document.getElementById('detail-reset-cam');
        const wireBtn = document.getElementById('detail-wireframe-toggle');

        if (spinBtn) {
            spinBtn.addEventListener('click', () => {
                this.autoRotate = !this.autoRotate;
                spinBtn.classList.toggle('active', this.autoRotate);
                audioEngine.playClick();
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                if (this.controls) this.controls.reset();
                this.camera.position.set(0, 0, 8);
                audioEngine.playClick();
            });
        }

        if (wireBtn) {
            wireBtn.addEventListener('click', () => {
                this.isWireframe = !this.isWireframe;
                if (this.bookMesh) {
                    this.bookMesh.material.forEach(m => m.wireframe = this.isWireframe);
                }
                wireBtn.classList.toggle('active', this.isWireframe);
                audioEngine.playClick();
            });
        }
    }

    onResize() {
        if (!this.container) return;
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        if (this.autoRotate && this.bookMesh) {
            this.bookMesh.rotation.y += 0.01;
        }

        if (this.controls) this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// Global 3D Instances
let hero3D = null;
let cylinder3D = null;
let bookDetail3D = null;

// ==========================================================================
// 6. SPA ROUTER & CONTROLLER
// ==========================================================================
class SPARouter {
    constructor() {
        this.routes = ['home', 'search', 'curation', 'cart', 'detail'];
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    }

    handleRoute() {
        let hash = window.location.hash.replace('#', '') || 'home';
        if (!this.routes.includes(hash)) hash = 'home';

        // Update active page view
        document.querySelectorAll('.page-view').forEach(el => {
            el.classList.remove('active');
        });

        const activeView = document.getElementById(`view-${hash}`);
        if (activeView) activeView.classList.add('active');

        // Update nav items
        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.remove('active');
            if (el.getAttribute('data-tab') === hash) {
                el.classList.add('active');
            }
        });

        // Trigger view specific re-render or 3D updates
        audioEngine.playLaser();

        if (hash === 'detail') {
            document.getElementById('nav-detail-link').style.display = 'flex';
            if (bookDetail3D) bookDetail3D.initBookMesh();
        }

        window.scrollTo(0, 0);
    }
}

// ==========================================================================
// 7. SEARCH & CATALOG CONTROLLER
// ==========================================================================
class SearchController {
    constructor() {
        this.searchInput = document.getElementById('search-keyword-input');
        this.searchExecBtn = document.getElementById('search-exec-btn');
        this.langChips = document.getElementById('filter-lang-chips');
        this.kdcSelect = document.getElementById('filter-kdc-select');
        this.ageSelect = document.getElementById('filter-age-select');
        this.sortSelect = document.getElementById('filter-sort-select');
        this.resultsContainer = document.getElementById('search-results-container');
        this.resultsCountNum = document.getElementById('search-count-num');
        this.selectAllCheckbox = document.getElementById('select-all-checkbox');
        this.addSelectedBtn = document.getElementById('add-selected-cart-btn');

        this.bindEvents();
        this.renderResults();
        this.renderHomeBooks();
    }

    bindEvents() {
        if (this.searchExecBtn) {
            this.searchExecBtn.addEventListener('click', () => {
                STATE.searchFilters.keyword = this.searchInput.value.trim();
                audioEngine.playClick();
                this.renderResults();
            });
        }

        if (this.searchInput) {
            this.searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    STATE.searchFilters.keyword = this.searchInput.value.trim();
                    audioEngine.playClick();
                    this.renderResults();
                }
            });
        }

        if (this.langChips) {
            this.langChips.addEventListener('click', (e) => {
                if (e.target.classList.contains('chip-btn')) {
                    this.langChips.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    STATE.searchFilters.lang = e.target.getAttribute('data-lang');
                    audioEngine.playClick();
                    this.renderResults();
                }
            });
        }

        if (this.kdcSelect) {
            this.kdcSelect.addEventListener('change', () => {
                STATE.searchFilters.kdc = this.kdcSelect.value;
                audioEngine.playClick();
                this.renderResults();
            });
        }

        if (this.ageSelect) {
            this.ageSelect.addEventListener('change', () => {
                STATE.searchFilters.age = this.ageSelect.value;
                audioEngine.playClick();
                this.renderResults();
            });
        }

        if (this.sortSelect) {
            this.sortSelect.addEventListener('change', () => {
                STATE.searchFilters.sort = this.sortSelect.value;
                audioEngine.playClick();
                this.renderResults();
            });
        }

        // Layout Toggles
        const cardBtn = document.getElementById('search-view-card-btn');
        const tableBtn = document.getElementById('search-view-table-btn');

        if (cardBtn && tableBtn) {
            cardBtn.addEventListener('click', () => {
                STATE.searchViewMode = 'CARD';
                cardBtn.classList.add('active');
                tableBtn.classList.remove('active');
                audioEngine.playClick();
                this.renderResults();
            });

            tableBtn.addEventListener('click', () => {
                STATE.searchViewMode = 'TABLE';
                tableBtn.classList.add('active');
                cardBtn.classList.remove('active');
                audioEngine.playClick();
                this.renderResults();
            });
        }

        if (this.selectAllCheckbox) {
            this.selectAllCheckbox.addEventListener('change', (e) => {
                const checkboxes = this.resultsContainer.querySelectorAll('.book-select-cb');
                checkboxes.forEach(cb => cb.checked = e.target.checked);
            });
        }

        if (this.addSelectedBtn) {
            this.addSelectedBtn.addEventListener('click', () => {
                const checkedCbs = this.resultsContainer.querySelectorAll('.book-select-cb:checked');
                if (checkedCbs.length === 0) {
                    alert('선택된 도서가 없습니다. 수서함에 담을 도서를 선택하세요.');
                    return;
                }
                checkedCbs.forEach(cb => {
                    const bookId = cb.getAttribute('data-book-id');
                    cartManager.addBook(bookId, 1);
                });
                audioEngine.playChime();
                alert(`${checkedCbs.length}건의 도서가 수서 장바구니에 담겼습니다.`);
            });
        }
    }

    getFilteredBooks() {
        return BOOKS_DATA.filter(b => {
            // Keyword Filter
            if (STATE.searchFilters.keyword) {
                const kw = STATE.searchFilters.keyword.toLowerCase();
                const match = b.title.toLowerCase().includes(kw) ||
                              b.author.toLowerCase().includes(kw) ||
                              b.publisher.toLowerCase().includes(kw) ||
                              b.isbn.includes(kw) ||
                              b.kdc.includes(kw);
                if (!match) return false;
            }
            // Language Filter
            if (STATE.searchFilters.lang !== 'ALL' && b.lang !== STATE.searchFilters.lang) {
                return false;
            }
            // KDC Filter
            if (STATE.searchFilters.kdc !== 'ALL' && b.kdcCategory !== STATE.searchFilters.kdc) {
                return false;
            }
            // Age Filter
            if (STATE.searchFilters.age !== 'ALL' && b.ageGroup !== STATE.searchFilters.age) {
                return false;
            }
            return true;
        }).sort((a, b) => {
            if (STATE.searchFilters.sort === 'PRICE_ASC') return a.price - b.price;
            if (STATE.searchFilters.sort === 'PRICE_DESC') return b.price - a.price;
            if (STATE.searchFilters.sort === 'TITLE') return a.title.localeCompare(b.title);
            return 0;
        });
    }

    renderResults() {
        const books = this.getFilteredBooks();
        if (this.resultsCountNum) this.resultsCountNum.textContent = books.length;

        if (!this.resultsContainer) return;

        if (books.length === 0) {
            this.resultsContainer.innerHTML = `
                <div class="empty-placeholder" style="grid-column: 1/-1;">
                    <i class="fa-solid fa-folder-open empty-icon"></i>
                    <h3>검색 조건에 맞는 도서가 없습니다.</h3>
                    <p>다른 검색어나 필터 조건으로 재검색해 보세요.</p>
                </div>
            `;
            return;
        }

        if (STATE.searchViewMode === 'CARD') {
            this.resultsContainer.className = 'cards-grid';
            this.resultsContainer.innerHTML = books.map(b => this.createBookCardHTML(b)).join('');
        } else {
            this.resultsContainer.className = 'cyber-table-container';
            this.resultsContainer.innerHTML = `
                <table class="cyber-table">
                    <thead>
                        <tr>
                            <th style="width:40px;"></th>
                            <th>서지 정보 (ISBN / KDC)</th>
                            <th>언어 / 대상</th>
                            <th>정가</th>
                            <th>납품 공급가 (15%할인)</th>
                            <th>작동</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${books.map(b => this.createBookRowHTML(b)).join('')}
                    </tbody>
                </table>
            `;
        }

        this.bindCardEvents();
    }

    renderHomeBooks() {
        const homeContainer = document.getElementById('home-books-container');
        if (!homeContainer) return;
        const books = BOOKS_DATA.slice(0, 6);
        homeContainer.innerHTML = books.map(b => this.createBookCardHTML(b)).join('');
        this.bindCardEvents();
    }

    createBookCardHTML(book) {
        const supplyPrice = Math.round(book.price * 0.85).toLocaleString();
        const retailPrice = book.price.toLocaleString();

        return `
            <div class="cyber-card" data-id="${book.id}">
                <div class="book-cover-stage">
                    <span class="card-lang-badge">${book.lang}</span>
                    <span class="card-kdc-badge">KDC ${book.kdc}</span>
                    <div style="width:90px; height:130px; background:linear-gradient(135deg, #090d1a, ${book.coverColor || '#00f3ff'}); border-radius:4px; display:flex; align-items:center; justify-content:center; text-align:center; padding:5px; color:#fff; font-size:0.75rem; font-weight:bold; box-shadow:0 5px 15px rgba(0,0,0,0.6);">
                        ${book.title.substring(0, 10)}
                    </div>
                </div>
                <div style="flex:1;">
                    <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.4rem;">
                        <input type="checkbox" class="book-select-cb" data-book-id="${book.id}">
                        <h3 class="card-title-text">${book.title}</h3>
                    </div>
                    <p class="card-subtitle-text">${book.subtitle}</p>
                    <p class="card-author-publisher">${book.author} | ${book.publisher}</p>
                </div>
                <div>
                    <div class="card-price-row">
                        <span class="card-price-retail">${retailPrice}원</span>
                        <span class="card-price-supply">${supplyPrice}원</span>
                    </div>
                    <div class="card-actions-grid">
                        <button class="cyber-btn primary-glow btn-sm btn-inspect" data-id="${book.id}">
                            <i class="fa-solid fa-cube"></i> 360° 뷰
                        </button>
                        <button class="cyber-btn btn-sm btn-add-cart" data-id="${book.id}">
                            <i class="fa-solid fa-cart-plus"></i> 담기
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    createBookRowHTML(book) {
        const supplyPrice = Math.round(book.price * 0.85).toLocaleString();
        const retailPrice = book.price.toLocaleString();

        return `
            <tr>
                <td><input type="checkbox" class="book-select-cb" data-book-id="${book.id}"></td>
                <td>
                    <strong>${book.title}</strong><br>
                    <small style="color:var(--text-muted);">ISBN: ${book.isbn} | KDC: ${book.kdc} | ${book.publisher}</small>
                </td>
                <td><span class="lang-tag">${book.lang}</span> <small>${book.ageLabel}</small></td>
                <td><del>${retailPrice}원</del></td>
                <td><strong class="neon-text-cyan">${supplyPrice}원</strong></td>
                <td>
                    <button class="cyber-btn btn-sm btn-inspect" data-id="${book.id}"><i class="fa-solid fa-cube"></i> 360°</button>
                    <button class="cyber-btn btn-sm btn-add-cart" data-id="${book.id}"><i class="fa-solid fa-cart-plus"></i></button>
                </td>
            </tr>
        `;
    }

    bindCardEvents() {
        document.querySelectorAll('.btn-inspect').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                STATE.selectedBookId = id;
                window.location.hash = '#detail';
                cartManager.updateDetailView();
            });
        });

        document.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                cartManager.addBook(id, 1);
                audioEngine.playChime();
            });
        });
    }
}

// ==========================================================================
// 8. CART & OFFICIAL QUOTE MANAGER
// ==========================================================================
class CartManager {
    constructor() {
        this.cartTbody = document.getElementById('cart-items-tbody');
        this.emptyMsg = document.getElementById('cart-empty-msg');
        this.badgeCount = document.getElementById('cart-badge-count');

        this.calcQtyEl = document.getElementById('calc-total-qty');
        this.calcRetailEl = document.getElementById('calc-retail-price');
        this.calcDiscountEl = document.getElementById('calc-discount-price');
        this.calcFinalEl = document.getElementById('calc-final-price');

        this.bindEvents();
        this.renderCart();
    }

    bindEvents() {
        // Clear all
        const clearBtn = document.getElementById('cart-clear-all-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (STATE.cart.length === 0) return;
                if (confirm('수서 장바구니를 전체 비우시겠습니까?')) {
                    STATE.cart = [];
                    this.renderCart();
                    audioEngine.playClick();
                }
            });
        }

        // PDF Quote Generator Modal trigger
        const pdfBtn = document.getElementById('btn-generate-pdf-quote');
        if (pdfBtn) {
            pdfBtn.addEventListener('click', () => {
                if (STATE.cart.length === 0) {
                    alert('수서 장바구니가 비어 있어 견적서를 생성할 수 없습니다.');
                    return;
                }
                this.openQuoteModal();
                audioEngine.playChime();
            });
        }

        // Excel / CSV Export
        const csvBtn = document.getElementById('btn-export-excel-csv');
        if (csvBtn) {
            csvBtn.addEventListener('click', () => {
                if (STATE.cart.length === 0) {
                    alert('수서 장바구니가 비어 있습니다.');
                    return;
                }
                this.exportCSV();
                audioEngine.playChime();
            });
        }

        // Submit Order
        const orderBtn = document.getElementById('btn-submit-order');
        if (orderBtn) {
            orderBtn.addEventListener('click', () => {
                if (STATE.cart.length === 0) {
                    alert('장바구니가 비어 있습니다.');
                    return;
                }
                const libraryName = document.getElementById('inst-name-input').value || '도서관';
                alert(`[${libraryName}] 수서 납품 발주 신청이 접수되었습니다. (담당자 확인 후 24시간 내 연락드립니다)`);
                audioEngine.playChime();
            });
        }

        // Modal Close
        const modalCloseBtn = document.getElementById('btn-close-quote-modal');
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => {
                document.getElementById('quote-modal').style.display = 'none';
            });
        }

        const printBtn = document.getElementById('btn-print-quote');
        if (printBtn) {
            printBtn.addEventListener('click', () => {
                window.print();
            });
        }
    }

    addBook(bookId, qty = 1) {
        const item = STATE.cart.find(c => c.bookId === bookId);
        if (item) {
            item.qty += qty;
        } else {
            STATE.cart.push({ bookId, qty });
        }
        this.renderCart();
    }

    removeBook(bookId) {
        STATE.cart = STATE.cart.filter(c => c.bookId !== bookId);
        this.renderCart();
    }

    updateQty(bookId, qty) {
        const item = STATE.cart.find(c => c.bookId === bookId);
        if (item) {
            item.qty = Math.max(1, qty);
        }
        this.renderCart();
    }

    renderCart() {
        const totalItemsCount = STATE.cart.reduce((sum, i) => sum + i.qty, 0);
        if (this.badgeCount) this.badgeCount.textContent = totalItemsCount;

        if (STATE.cart.length === 0) {
            if (this.cartTbody) this.cartTbody.innerHTML = '';
            if (this.emptyMsg) this.emptyMsg.style.display = 'block';
            this.updateSummary(0, 0, 0, 0);
            return;
        }

        if (this.emptyMsg) this.emptyMsg.style.display = 'none';

        let retailTotal = 0;
        let finalTotal = 0;

        if (this.cartTbody) {
            this.cartTbody.innerHTML = STATE.cart.map(item => {
                const book = BOOKS_DATA.find(b => b.id === item.bookId);
                if (!book) return '';

                const supplyUnitPrice = Math.round(book.price * 0.85);
                const itemSubtotal = supplyUnitPrice * item.qty;

                retailTotal += book.price * item.qty;
                finalTotal += itemSubtotal;

                return `
                    <tr class="cart-item-row">
                        <td><input type="checkbox" checked></td>
                        <td>
                            <div class="cart-book-meta">
                                <div style="width:36px; height:48px; background:linear-gradient(135deg, #090d1a, ${book.coverColor}); border-radius:3px;"></div>
                                <div class="cart-book-details">
                                    <span class="cart-book-title">${book.title}</span>
                                    <span class="cart-book-isbn">ISBN: ${book.isbn} | KDC ${book.kdc}</span>
                                </div>
                            </div>
                        </td>
                        <td><span class="lang-tag">${book.lang}</span></td>
                        <td>
                            <del style="font-size:0.8rem; color:var(--text-muted);">${book.price.toLocaleString()}원</del><br>
                            <strong style="color:var(--neon-cyan);">${supplyUnitPrice.toLocaleString()}원</strong>
                        </td>
                        <td>
                            <div class="qty-control">
                                <button class="qty-btn btn-minus" data-id="${book.id}">-</button>
                                <input type="number" class="qty-input" value="${item.qty}" data-id="${book.id}">
                                <button class="qty-btn btn-plus" data-id="${book.id}">+</button>
                            </div>
                        </td>
                        <td><strong style="color:var(--neon-cyan);">${itemSubtotal.toLocaleString()}원</strong></td>
                        <td>
                            <button class="cyber-btn btn-sm icon-only btn-remove" data-id="${book.id}"><i class="fa-solid fa-xmark"></i></button>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        const discountTotal = retailTotal - finalTotal;
        this.updateSummary(totalItemsCount, retailTotal, discountTotal, finalTotal);

        // Bind table controls
        if (this.cartTbody) {
            this.cartTbody.querySelectorAll('.btn-minus').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id');
                    const item = STATE.cart.find(c => c.bookId === id);
                    if (item) this.updateQty(id, item.qty - 1);
                });
            });

            this.cartTbody.querySelectorAll('.btn-plus').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id');
                    const item = STATE.cart.find(c => c.bookId === id);
                    if (item) this.updateQty(id, item.qty + 1);
                });
            });

            this.cartTbody.querySelectorAll('.btn-remove').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id');
                    this.removeBook(id);
                });
            });
        }
    }

    updateSummary(totalQty, retailPrice, discountPrice, finalPrice) {
        if (this.calcQtyEl) this.calcQtyEl.textContent = `${totalQty} 권`;
        if (this.calcRetailEl) this.calcRetailEl.textContent = `${retailPrice.toLocaleString()} 원`;
        if (this.calcDiscountEl) this.calcDiscountEl.textContent = `-${discountPrice.toLocaleString()} 원`;
        if (this.calcFinalEl) this.calcFinalEl.textContent = `${finalPrice.toLocaleString()} 원`;
    }

    openQuoteModal() {
        const instName = document.getElementById('inst-name-input').value || '국립다문화중앙도서관 수서과';
        const librarianName = document.getElementById('inst-librarian-input').value || '박다은 사서';
        const contact = document.getElementById('inst-contact-input').value || '02-555-8900';
        const budget = document.getElementById('inst-budget-select').value || '국비/시비 다문화 특화예산';

        document.getElementById('print-client-inst').textContent = instName;
        document.getElementById('print-client-librarian').textContent = librarianName;
        document.getElementById('print-client-contact').textContent = contact;
        document.getElementById('print-client-budget').textContent = budget;

        const now = new Date();
        const dateStr = `${now.getFullYear()}년 ${String(now.getMonth()+1).padStart(2,'0')}월 ${String(now.getDate()).padStart(2,'0')}일`;
        const quoteNo = `NX-${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-001`;

        document.getElementById('print-quote-no').textContent = quoteNo;
        document.getElementById('print-quote-date').textContent = dateStr;

        let totalAmount = 0;
        const tbody = document.getElementById('print-items-tbody');

        tbody.innerHTML = STATE.cart.map((item, idx) => {
            const book = BOOKS_DATA.find(b => b.id === item.bookId);
            if (!book) return '';
            const supplyUnitPrice = Math.round(book.price * 0.85);
            const subtotal = supplyUnitPrice * item.qty;
            totalAmount += subtotal;

            return `
                <tr>
                    <td style="text-align:center;">${idx + 1}</td>
                    <td>${book.isbn}</td>
                    <td style="text-align:center;">${book.kdc}</td>
                    <td><strong>${book.title}</strong> (${book.author} / ${book.publisher})</td>
                    <td style="text-align:center;">${book.lang}</td>
                    <td style="text-align:center;">${item.qty}</td>
                    <td style="text-align:right;">${book.price.toLocaleString()}원</td>
                    <td style="text-align:right;">${supplyUnitPrice.toLocaleString()}원</td>
                    <td style="text-align:right;"><strong>${subtotal.toLocaleString()}원</strong></td>
                </tr>
            `;
        }).join('');

        document.getElementById('print-total-amount-korean').textContent = `일백오십삼만원 정 (₩${totalAmount.toLocaleString()})`;
        document.getElementById('quote-modal').style.display = 'flex';
    }

    exportCSV() {
        let csvContent = '\uFEFF'; // UTF-8 BOM
        csvContent += 'No,ISBN13,KDC,도서명,저자,출판사,언어,정가,납품단가,수량,공급가액\n';

        STATE.cart.forEach((item, idx) => {
            const book = BOOKS_DATA.find(b => b.id === item.bookId);
            if (book) {
                const supplyUnitPrice = Math.round(book.price * 0.85);
                const subtotal = supplyUnitPrice * item.qty;
                csvContent += `${idx + 1},"${book.isbn}","${book.kdc}","${book.title}","${book.author}","${book.publisher}","${book.lang}",${book.price},${supplyUnitPrice},${item.qty},${subtotal}\n`;
            }
        });

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `nexus_library_procurement_quote_${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    updateDetailView() {
        const book = BOOKS_DATA.find(b => b.id === STATE.selectedBookId);
        if (!book) return;

        const supplyPrice = Math.round(book.price * 0.85);

        document.getElementById('detail-book-title').textContent = book.title;
        document.getElementById('detail-book-subtitle').textContent = book.subtitle;
        document.getElementById('detail-lang-tag').textContent = book.langLabel;
        document.getElementById('detail-age-tag').textContent = book.ageLabel;
        document.getElementById('detail-kdc-badge').textContent = `KDC ${book.kdc}`;

        document.getElementById('detail-price-retail').textContent = `${book.price.toLocaleString()}원`;
        document.getElementById('detail-price-supply').textContent = `${supplyPrice.toLocaleString()}원`;

        document.getElementById('detail-isbn').textContent = book.isbn;
        document.getElementById('detail-kdc').textContent = `${book.kdc} (${book.subtitle})`;
        document.getElementById('detail-author').textContent = book.author;
        document.getElementById('detail-publisher').textContent = `${book.publisher} (${book.pubYear}년)`;
        document.getElementById('detail-pages').textContent = `${book.pages} | 양장`;
        document.getElementById('detail-summary-text').textContent = book.summary;

        const addCartBtn = document.getElementById('detail-add-cart-btn');
        if (addCartBtn) {
            addCartBtn.onclick = () => {
                this.addBook(book.id, 1);
                audioEngine.playChime();
                alert(`[${book.title}] 도서가 수서 장바구니에 담겼습니다.`);
            };
        }
    }
}

const cartManager = new CartManager();

// ==========================================================================
// 9. LANGUAGE & EVENT BINDINGS INITIALIZATION
// ==========================================================================
function setLanguage(lang) {
    if (!I18N[lang]) return;
    STATE.currentLang = lang;
    const dict = I18N[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });
}

function initApp() {
    // 1. Initialize Laser Ripple & Sound
    new LaserRippleEffect();

    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
        soundBtn.addEventListener('click', () => {
            STATE.soundEnabled = !STATE.soundEnabled;
            soundBtn.querySelector('.btn-text').textContent = STATE.soundEnabled ? 'FX ON' : 'FX OFF';
            soundBtn.classList.toggle('active', STATE.soundEnabled);
            audioEngine.playClick();
        });
    }

    // 2. Multi-language dropdown
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            audioEngine.playClick();
        });
    }

    // 3. Audio Sample Playback in Detail View
    const audioPlayBtn = document.getElementById('audio-play-btn');
    const audioCard = document.querySelector('.cyber-audio-card');
    const statusText = document.getElementById('audio-status-text');
    let isPlayingAudio = false;

    if (audioPlayBtn && audioCard) {
        audioPlayBtn.addEventListener('click', () => {
            isPlayingAudio = !isPlayingAudio;
            audioCard.classList.toggle('playing', isPlayingAudio);
            audioPlayBtn.querySelector('i').className = isPlayingAudio ? 'fa-solid fa-pause' : 'fa-solid fa-play';
            if (statusText) statusText.textContent = isPlayingAudio ? '디지털 다국어 낭독 중...' : '대기 중';

            audioEngine.toggleSampleAudio(isPlayingAudio, () => {
                isPlayingAudio = false;
                audioCard.classList.remove('playing');
                audioPlayBtn.querySelector('i').className = 'fa-solid fa-play';
                if (statusText) statusText.textContent = '재생 완료';
            });
        });
    }

    // 4. Curation Packages Add handlers
    document.querySelectorAll('.pkg-add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pkgId = e.currentTarget.getAttribute('data-pkg-id');
            const pkg = CURATION_PACKAGES[pkgId];
            if (pkg) {
                pkg.itemIds.forEach(id => cartManager.addBook(id, 2));
                audioEngine.playChime();
                alert(`[${pkg.title}] 큐레이션 패키지가 수서 장바구니에 추가되었습니다.`);
            }
        });
    });

    // 5. Initialize 3D Graphics
    hero3D = new Hero3DEngine();
    cylinder3D = new Cylinder3DEngine();
    bookDetail3D = new BookDetail3DEngine();

    // 6. Router
    new SPARouter();
    new SearchController();

    // Default Cart item
    cartManager.addBook('book-1', 2);
    cartManager.addBook('book-2', 1);
}

// Dom Ready
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});
