/**
 * 🧸 StoryTree v22 - Whimsical Toybox Wonderland & Pop-Up Treehouse
 * Complete SPA Frontend Logic & Three.js 3D Engines
 */

// --- 1. MULTICULTURAL BOOK DATASET (15+ CURATED BOOKS) ---
const BOOKS_DATA = [
  {
    id: 'book-1',
    title: '알록달록 나무집 팝업 동화',
    titleEn: 'Whimsical Treehouse Pop-Up',
    author: '이슬비 글 / 박구름 그림',
    publisher: '몽당연필',
    isbn: '979-11-89012-01-3',
    kdc: '813.8',
    language: 'KO',
    languageLabel: '🇰🇷 한국어',
    ageGroup: 'Infant',
    ageGroupLabel: '유아(3~7세)',
    price: 18000,
    coverColor: '#b8e2d6',
    coverImg: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80',
    description: '3D 팝업 입체 장난감 나무집과 다양한 숲속 아동 동물 친구들의 이야기가 펼쳐지는 대표 다문화 이중언어 팝업 그림책입니다.',
    melodyFreqs: [523.25, 659.25, 783.99, 1046.50]
  },
  {
    id: 'book-2',
    title: 'Global Friends Storybook (세계 친구들)',
    titleEn: 'Global Friends Storybook',
    author: 'Sarah Jenkins / Kim Min',
    publisher: '글로벌스토리',
    isbn: '979-11-89012-02-0',
    kdc: '823.5',
    language: 'EN',
    languageLabel: '🇺🇸 영어',
    ageGroup: 'Elementary',
    ageGroupLabel: '초등저/고학년',
    price: 22000,
    coverColor: '#e7defc',
    coverImg: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=80',
    description: '영어와 한국어가 병기된 이중언어 동화책으로, 전 세계 10개국 어린이들의 우정과 문화 체험을 귀여운 일러스트로 풀어냈습니다.',
    melodyFreqs: [587.33, 739.99, 880.00, 1174.66]
  },
  {
    id: 'book-3',
    title: 'Những Câu Chuyện Cổ Tích (베트남 전래동화)',
    titleEn: 'Vietnamese Fairy Tales',
    author: 'Nguyễn Văn A / 이지은 역',
    publisher: '무지개아동',
    isbn: '979-11-89012-03-7',
    kdc: '892.3',
    language: 'VI',
    languageLabel: '🇻🇳 베트남어',
    ageGroup: 'Elementary',
    ageGroupLabel: '초등저/고학년',
    price: 19500,
    coverColor: '#f6d2b8',
    coverImg: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop&q=80',
    description: '베트남의 아름다운 은혜 갚은 바다거북과 별사탕 나무 이야기를 베트남어 및 한국어 팝업 그림으로 감상하는 대표 도서.',
    melodyFreqs: [659.25, 783.99, 987.77, 1318.51]
  },
  {
    id: 'book-4',
    title: '彩虹小火车 (무지개 칙칙폭폭 기차)',
    titleEn: 'The Rainbow Toy Train',
    author: '张伟 (Zhang Wei) / 王芳 그림',
    publisher: '세계동화나라',
    isbn: '979-11-89012-04-4',
    kdc: '895.1',
    language: 'ZH',
    languageLabel: '🇨🇳 중국어',
    ageGroup: 'Infant',
    ageGroupLabel: '유아(3~7세)',
    price: 17000,
    coverColor: '#fff3c4',
    coverImg: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&auto=format&fit=crop&q=80',
    description: '알록달록 무지개 기차를 타고 마을 사람들과 음식을 나누는 중국어-한국어 대역 그림책. 팝업 기차 모형 포함.',
    melodyFreqs: [523.25, 587.33, 659.25, 698.46, 783.99]
  },
  {
    id: 'book-5',
    title: 'El Tren Mágico de Cuentos (마법 동화 기차)',
    titleEn: 'The Magic Story Train',
    author: 'Carlos Gomez / Maria Silva',
    publisher: '글로벌스토리',
    isbn: '979-11-89012-05-1',
    kdc: '863.4',
    language: 'ES',
    languageLabel: '🇪🇸 스페인어',
    ageGroup: 'Youth',
    ageGroupLabel: '청소년/보호자',
    price: 24000,
    coverColor: '#c1ebdf',
    coverImg: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=80',
    description: '스페인과 남미 다문화 가정을 위한 정열적이고 환상적인 팝업 일러스트북. 스페인어 원문 수록.',
    melodyFreqs: [440.00, 554.37, 659.25, 880.00]
  },
  {
    id: 'book-6',
    title: '구름 위 장난감 마을 팝업 입체북',
    titleEn: 'Toy Village in the Clouds',
    author: '한바다 글 / 송빛나 그림',
    publisher: '몽당연필',
    isbn: '979-11-89012-06-8',
    kdc: '813.8',
    language: 'KO',
    languageLabel: '🇰🇷 한국어',
    ageGroup: 'Infant',
    ageGroupLabel: '유아(3~7세)',
    price: 16500,
    coverColor: '#e7defc',
    coverImg: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&auto=format&fit=crop&q=80',
    description: '구름 속 장난감 친구들이 펼치는 팝업 입체 퍼즐 북. 어린이가 손으로 직접 만지며 읽는 오감 발달 도서.',
    melodyFreqs: [523.25, 659.25, 783.99]
  },
  {
    id: 'book-7',
    title: 'The Magic Treehouse Library (마법 나무집 도서관)',
    titleEn: 'The Magic Treehouse Library',
    author: 'Emily Watson',
    publisher: '글로벌스토리',
    isbn: '979-11-89012-07-5',
    kdc: '823.5',
    language: 'EN',
    languageLabel: '🇺🇸 영어',
    ageGroup: 'Elementary',
    ageGroupLabel: '초등저/고학년',
    price: 21000,
    coverColor: '#f6d2b8',
    coverImg: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop&q=80',
    description: '초등학생을 위한 영어 탐험 소설. 비밀 나무집 도서관에서 시작되는 시공간 초월 세계 문화 모험 이야기.',
    melodyFreqs: [659.25, 830.61, 987.77]
  },
  {
    id: 'book-8',
    title: 'Chú Cuội Trên Cung Trăng (달나라 계손이)',
    titleEn: 'Tales of the Moon',
    author: 'Trần Thị B / 김민수 역',
    publisher: '무지개아동',
    isbn: '979-11-89012-08-2',
    kdc: '892.3',
    language: 'VI',
    languageLabel: '🇻🇳 베트남어',
    ageGroup: 'Infant',
    ageGroupLabel: '유아(3~7세)',
    price: 18500,
    coverColor: '#b8e2d6',
    coverImg: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=80',
    description: '베트남 추석(Trung Thu)의 전통 설화인 달나라 계손이 이야기를 담은 이중언어 팝업 그림책.',
    melodyFreqs: [523.25, 698.46, 880.00]
  },
  {
    id: 'book-9',
    title: '우리 마을 다문화 팝업 지도',
    titleEn: 'Multicultural Village Pop-up Map',
    author: '다문화도서 연구회',
    publisher: '몽당연필',
    isbn: '979-11-89012-09-9',
    kdc: '813.8',
    language: 'KO',
    languageLabel: '🇰🇷 한국어',
    ageGroup: 'Elementary',
    ageGroupLabel: '초등저/고학년',
    price: 25000,
    coverColor: '#fff3c4',
    coverImg: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=80',
    description: '대한민국 다문화 가정 아동들과 함께 만든 입체 지도 팝업북. 각국의 음식과 전통 의상을 체험합니다.',
    melodyFreqs: [587.33, 739.99, 880.00]
  },
  {
    id: 'book-10',
    title: '小手拉大手 世界童话 (다국어 손잡고 동화)',
    titleEn: 'Hand in Hand World Tales',
    author: '李明 (Li Ming)',
    publisher: '세계동화나라',
    isbn: '979-11-89012-10-5',
    kdc: '895.1',
    language: 'ZH',
    languageLabel: '🇨🇳 중국어',
    ageGroup: 'Elementary',
    ageGroupLabel: '초등저/고학년',
    price: 20500,
    coverColor: '#e7defc',
    coverImg: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&auto=format&fit=crop&q=80',
    description: '중국어 한자와 한글 발음 기호가 수록된 초등 다문화 수서 교재.',
    melodyFreqs: [523.25, 659.25, 783.99]
  }
];

// --- 2. CURATION PACKAGES DATA ---
const CURATION_PACKAGES = [
  {
    id: 'pkg-1',
    title: '알록달록 세계 팝업 그림책 5종 세트',
    titleEn: 'World Pop-Up Picture Book 5-Set',
    badge: '👑 베스트셀러 팝업 세트',
    desc: '유아 및 초등저학년 도서관을 위한 베스트 팝업 입체 동화 5권 패키지.',
    books: ['book-1', 'book-3', 'book-4', 'book-6', 'book-8'],
    originalPrice: 94500,
    finalPrice: 80000,
    icon: 'fa-solid fa-gift'
  },
  {
    id: 'pkg-2',
    title: '어린이를 위한 다국어 입체 전래동화전',
    titleEn: 'Multilingual Folk Tales Pop-Up Set',
    badge: '🇻🇳🇨🇳🇺🇸 다국어 대역 우수',
    desc: '베트남, 중국, 스페인, 영미권 아동 전래동화를 3D 팝업으로 만나보는 수서 추천 세트.',
    books: ['book-2', 'book-3', 'book-4', 'book-5', 'book-8', 'book-10'],
    originalPrice: 131500,
    finalPrice: 110000,
    icon: 'fa-solid fa-globe'
  },
  {
    id: 'pkg-3',
    title: '3D 장난감 나무집 수서 특가 풀패키지',
    titleEn: 'Pop-Up Treehouse Full Collection',
    badge: '🔥 사서 최고 추천 (10종)',
    desc: '도서관 코너 신설 및 다문화 자료실을 한 번에 구비할 수 있는 전권 풀패키지.',
    books: ['book-1', 'book-2', 'book-3', 'book-4', 'book-5', 'book-6', 'book-7', 'book-8', 'book-9', 'book-10'],
    originalPrice: 204000,
    finalPrice: 165000,
    icon: 'fa-solid fa-tree-city'
  }
];

// --- 3. MULTI-LANGUAGE DICTIONARY (KO, EN, VI, ZH, ES) ---
const I18N = {
  KO: {
    nav_home: '메인 홈',
    nav_search: '도서 검색/수서',
    nav_curation: '3D 팝업 큐레이션',
    nav_cart: '수서 견적함',
    hero_chip: '🎈 3D Pop-Up Treehouse & Toy Train',
    hero_title: '아이들이 사랑하는<br>알록달록 다문화 팝업 도서관',
    hero_desc: '3D 팝업 나무집과 칙칙폭폭 장난감 기차가 반겨주는 어린이 수서 공간! 사서 선생님을 위한 1클릭 병아리 직인 공문 견적서 발급 및 맞춤 큐레이션을 확인하세요.',
    btn_explore_books: '도서 탐험하기',
    btn_view_curation: '3D 팝업 큐레이션 보기',
    feat_lang_title: '5개 국어 이중언어',
    feat_lang_desc: '한국어, 영어, 베트남어, 중국어, 스페인어 원서 지원',
    feat_pop_title: '360° 팝업북 입체뷰',
    feat_pop_desc: '3D로 펼쳐지는 입체 동화책 360도 수서 검수',
    feat_quote_title: '1클릭 공문 견적서',
    feat_quote_desc: '귀여운 병아리 직인 PDF & 엑셀 즉시 발급',
    tag_sandbox: '🎨 Interactive Sandbox',
    title_sandbox: '3D 장난감 상자 기획전관',
    sub_sandbox: '마우스 호버 시 카드 3D 입체 틸트 및 팝업 효과가 작동합니다.',
    tag_new_releases: '🌟 New Arrivals',
    title_new_releases: '이번 달 다문화 신간 추천 목록',
    link_view_all: '전체보기',
    search_page_title: '🔍 다문화 도서 수서 & 통합 검색',
    search_page_sub: '언어, 연령대, KDC 분류, 출판사, ISBN으로 사서 선생님께 필요한 맞춤 도서를 손쉽게 찾으세요.',
    filter_heading: '수서 필터',
    btn_reset: '초기화',
    filter_keyword_label: '도서명 / 저자 / ISBN',
    filter_lang_label: '언어 (Language)',
    filter_age_label: '권장 연령대 (Age Group)',
    filter_kdc_label: 'KDC 십진분류 (Class)',
    filter_publisher_label: '출판사 (Publisher)',
    filter_all: '전체',
    age_infant: '유아(3~7세)',
    age_elem: '초등저/고학년',
    age_youth: '청소년/보호자',
    text_total: '총',
    text_count_unit: '권의 도서가 검색되었습니다.',
    curation_page_title: '사서 선생님을 위한 3D 팝업 테마 큐레이션',
    curation_page_sub: '예산과 도서관 연령층에 맞춰 한 번에 수서할 수 있는 팝업 상자 큐레이션 세트입니다.',
    cart_page_title: '🛒 수서 장바구니 & 공문 견적서 발급',
    cart_page_sub: '담긴 수서 도서 목록을 확인하고, 1클릭으로 귀여운 병아리 직인이 찍힌 PDF 견적서 및 엑셀 명세서를 다운로드하세요.',
    th_book_info: '도서 정보',
    th_kdc: 'KDC/언어',
    th_price: '단가',
    th_qty: '수량',
    th_subtotal: '합계',
    th_action: '삭제',
    btn_clear_selected: '선택 삭제',
    btn_add_more: '도서 추가하기',
    title_order_summary: '수서 견적 합계',
    sum_total_items: '총 도서 권수',
    sum_total_amount: '도서 총 금액',
    sum_discount: '사서 할인가 (기관 10%)',
    sum_grand_total: '최종 견적 금액',
    title_librarian_info: '공문 견적 발급 정보',
    lbl_institution: '도서관 / 기관명',
    lbl_librarian: '수서 담당 사서명',
    lbl_stamp_type: '직인 스타일 선택',
    btn_pdf_quote: '🐥 1클릭 병아리 직인 공문 PDF 견적서',
    btn_excel_download: '📊 엑셀 수서 목록 다운로드',
    btn_back_to_list: '검색 목록으로 돌아가기',
    audio_sample_title: '🎵 실로폰 입체 동화 멜로디 샘플',
    audio_sample_sub: '아이들이 책과 함께 들을 수 있는 오디오 오르골 음원',
    btn_play_audio: '실로폰 연주 듣기',
    lbl_author: '저자/그림',
    lbl_publisher: '출판사',
    lbl_isbn: 'ISBN',
    lbl_kdc: 'KDC 분류',
    lbl_language: '언어/이중언어',
    lbl_age_group: '권장 연령',
    title_synopsis: '📖 도서 내용 및 수서 추천 사유',
    lbl_price: '정가',
    lbl_order_qty: '수서 수량',
    btn_add_to_cart: '수서 장바구니에 담기',
    btn_quick_quote: '바로 견적 확인'
  },
  EN: {
    nav_home: 'Home',
    nav_search: 'Book Search',
    nav_curation: '3D Curation',
    nav_cart: 'Cart & Quote',
    hero_chip: '🎈 3D Pop-Up Treehouse & Toy Train',
    hero_title: 'Whimsical Pop-Up<br>Multicultural Children Library',
    hero_desc: 'Welcome to the colorful treehouse portal! Explore 3D pop-up storybooks, orbiting toy trains, and 1-click official quotes with cute chick seals.',
    btn_explore_books: 'Explore Books',
    btn_view_curation: 'View 3D Curation',
    feat_lang_title: '5 Languages',
    feat_lang_desc: 'Bilingual books in KO, EN, VI, ZH, ES',
    feat_pop_title: '360° Pop-Up View',
    feat_pop_desc: 'Inspect 3D pop-up books interactively',
    feat_quote_title: '1-Click PDF Quote',
    feat_quote_desc: 'Download official PDF & Excel with Chick Stamp',
    tag_sandbox: '🎨 Interactive Sandbox',
    title_sandbox: '3D Toybox Sandbox Gallery',
    sub_sandbox: 'Hover over cards to experience 3D pop-up tilt effects.',
    tag_new_releases: '🌟 New Arrivals',
    title_new_releases: 'Monthly New Arrivals',
    link_view_all: 'View All',
    search_page_title: '🔍 Multicultural Book Search',
    search_page_sub: 'Filter by language, age group, KDC code, publisher, and ISBN.',
    filter_heading: 'Procurement Filter',
    btn_reset: 'Reset',
    filter_keyword_label: 'Title / Author / ISBN',
    filter_lang_label: 'Language',
    filter_age_label: 'Age Group',
    filter_kdc_label: 'KDC Classification',
    filter_publisher_label: 'Publisher',
    filter_all: 'All',
    age_infant: 'Infant (3-7)',
    age_elem: 'Elementary',
    age_youth: 'Youth/Guardians',
    text_total: 'Total',
    text_count_unit: ' books found.',
    curation_page_title: '3D Pop-Up Theme Curation for Librarians',
    curation_page_sub: 'Pre-packaged curation sets tailored for multicultural library budgets.',
    cart_page_title: '🛒 Procurement Cart & Official Quote',
    cart_page_sub: 'Review your selected items and issue a 1-click PDF official quote with Chick Stamp.',
    th_book_info: 'Book Info',
    th_kdc: 'KDC/Lang',
    th_price: 'Unit Price',
    th_qty: 'Qty',
    th_subtotal: 'Subtotal',
    th_action: 'Action',
    btn_clear_selected: 'Delete Selected',
    btn_add_more: 'Add More Books',
    title_order_summary: 'Quote Summary',
    sum_total_items: 'Total Items',
    sum_total_amount: 'Total Amount',
    sum_discount: 'Librarian Discount (10%)',
    sum_grand_total: 'Final Quote Amount',
    title_librarian_info: 'Official Quote Information',
    lbl_institution: 'Library / Institution Name',
    lbl_librarian: 'Librarian Name',
    lbl_stamp_type: 'Select Stamp Style',
    btn_pdf_quote: '🐥 1-Click Chick Stamp PDF Quote',
    btn_excel_download: '📊 Download Excel Order Sheet',
    btn_back_to_list: 'Back to Search List',
    audio_sample_title: '🎵 Xylophone Melody Sample',
    audio_sample_sub: 'Playful music sample accompanying the 3D book',
    btn_play_audio: 'Play Xylophone',
    lbl_author: 'Author/Illustrator',
    lbl_publisher: 'Publisher',
    lbl_isbn: 'ISBN',
    lbl_kdc: 'KDC Code',
    lbl_language: 'Language',
    lbl_age_group: 'Age Group',
    title_synopsis: '📖 Book Description',
    lbl_price: 'Price',
    lbl_order_qty: 'Order Quantity',
    btn_add_to_cart: 'Add to Cart',
    btn_quick_quote: 'Quick Quote'
  },
  VI: {
    nav_home: 'Trang chủ',
    nav_search: 'Tìm kiếm sách',
    nav_curation: 'Bộ sưu tập 3D',
    nav_cart: 'Giỏ hàng & Báo giá',
    hero_chip: '🎈 Nhà cây 3D & Tàu hỏa đồ chơi',
    hero_title: 'Thư viện đa văn hóa 3D<br>Dành cho trẻ em',
    hero_desc: 'Khám phá sách nổi 3D, tàu hỏa lượn quanh và tải báo giá chính thức có dấu con gà con dễ thương!',
    btn_explore_books: 'Khám phá sách',
    btn_view_curation: 'Xem bộ sưu tập 3D',
    feat_lang_title: '5 Ngôn ngữ',
    feat_lang_desc: 'Sách song ngữ Hàn, Anh, Việt, Trung, Tây Ban Nha',
    feat_pop_title: 'Xem sách 3D 360°',
    feat_pop_desc: 'Trải nghiệm sách nổi 3D sống động',
    feat_quote_title: 'Báo giá PDF 1-Click',
    feat_quote_desc: 'Tải công văn PDF & Excel có con dấu Chick',
    tag_sandbox: '🎨 Thư viện 3D',
    title_sandbox: 'Hộp đồ chơi sách nổi 3D',
    sub_sandbox: 'Rê chuột để xem hiệu ứng lật sách 3D.',
    tag_new_releases: '🌟 Sách mới',
    title_new_releases: 'Sách mới tháng này',
    link_view_all: 'Xem tất cả',
    search_page_title: '🔍 Tìm kiếm sách đa văn hóa',
    search_page_sub: 'Lọc theo ngôn ngữ, độ tuổi, mã KDC và nhà xuất bản.',
    filter_heading: 'Bộ lọc mua sắm',
    btn_reset: 'Đặt lại',
    filter_keyword_label: 'Tên sách / Tác giả / ISBN',
    filter_lang_label: 'Ngôn ngữ',
    filter_age_label: 'Độ tuổi',
    filter_kdc_label: 'Phân loại KDC',
    filter_publisher_label: 'Nhà xuất bản',
    filter_all: 'Tất cả',
    age_infant: 'Mẫu giáo (3-7)',
    age_elem: 'Tiểu học',
    age_youth: 'Thanh thiếu niên',
    text_total: 'Tổng cộng',
    text_count_unit: ' cuốn sách được tìm thấy.',
    curation_page_title: 'Bộ sưu tập sách nổi 3D dành cho thủ thư',
    curation_page_sub: 'Các gói sách nổi được lựa chọn sẵn phù hợp cho thư viện.',
    cart_page_title: '🛒 Giỏ hàng & Báo giá chính thức',
    cart_page_sub: 'Kiểm tra sách đã chọn và xuất báo giá PDF có dấu gà con.',
    th_book_info: 'Thông tin sách',
    th_kdc: 'KDC/Ngôn ngữ',
    th_price: 'Đơn giá',
    th_qty: 'Số lượng',
    th_subtotal: 'Thành tiền',
    th_action: 'Xóa',
    btn_clear_selected: 'Xóa mục đã chọn',
    btn_add_more: 'Thêm sách',
    title_order_summary: 'Tóm tắt báo giá',
    sum_total_items: 'Tổng số sách',
    sum_total_amount: 'Tổng tiền',
    sum_discount: 'Giảm giá thủ thư (10%)',
    sum_grand_total: 'Tổng thành tiền',
    title_librarian_info: 'Thông tin báo giá',
    lbl_institution: 'Tên thư viện / Cơ quan',
    lbl_librarian: 'Tên thủ thư',
    lbl_stamp_type: 'Chọn kiểu con dấu',
    btn_pdf_quote: '🐥 Báo giá PDF con dấu Chick',
    btn_excel_download: '📊 Tải file Excel',
    btn_back_to_list: 'Quay lại danh sách',
    audio_sample_title: '🎵 Âm thanh đàn Xylophone',
    audio_sample_sub: 'Giai điệu vui tươi đi kèm sách 3D',
    btn_play_audio: 'Phát nhạc',
    lbl_author: 'Tác giả/Họa sĩ',
    lbl_publisher: 'Nhà xuất bản',
    lbl_isbn: 'ISBN',
    lbl_kdc: 'Mã KDC',
    lbl_language: 'Ngôn ngữ',
    lbl_age_group: 'Độ tuổi',
    title_synopsis: '📖 Tóm tắt nội dung',
    lbl_price: 'Giá',
    lbl_order_qty: 'Số lượng mua',
    btn_add_to_cart: 'Thêm vào giỏ hàng',
    btn_quick_quote: 'Xem báo giá nhanh'
  },
  ZH: {
    nav_home: '首页',
    nav_search: '图书检索',
    nav_curation: '3D Pop-Up策展',
    nav_cart: '采购清单',
    hero_chip: '🎈 3D Pop-Up Treehouse & Toy Train',
    hero_title: '孩子们喜爱的<br>多元文化立体绘本馆',
    hero_desc: '欢迎来到3D树屋与小火车图书探索空间！图书管理员可一键生成带有可爱小鸡印章的官方PDF报价单。',
    btn_explore_books: '探索图书',
    btn_view_curation: '查看3D策展',
    feat_lang_title: '5种语言',
    feat_lang_desc: '支持韩、英、越、中、西双语图书',
    feat_pop_title: '360° 立体预览',
    feat_pop_desc: '3D交互式审查立体绘本',
    feat_quote_title: '一键生成PDF报价',
    feat_quote_desc: '即时下载带小鸡印章的PDF和Excel',
    tag_sandbox: '🎨 3D 展馆',
    title_sandbox: '3D玩具箱立体展馆',
    sub_sandbox: '悬停卡片体验3D立体翻页效果。',
    tag_new_releases: '🌟 新书推荐',
    title_new_releases: '本月新书推荐',
    link_view_all: '查看全部',
    search_page_title: '🔍 多元文化图书检索与采购',
    search_page_sub: '按语言、年龄段、KDC分类、出版社及ISBN快速检索。',
    filter_heading: '采购筛选',
    btn_reset: '重置',
    filter_keyword_label: '书名 / 作者 / ISBN',
    filter_lang_label: '语言',
    filter_age_label: '适合年龄',
    filter_kdc_label: 'KDC分类',
    filter_publisher_label: '出版社',
    filter_all: '全部',
    age_infant: '幼儿(3-7岁)',
    age_elem: '小学',
    age_youth: '青少年',
    text_total: '共找到',
    text_count_unit: ' 本图书。',
    curation_page_title: '图书管理员专属 3D Pop-Up 主题策展',
    curation_page_sub: '专为多元文化图书馆预算量身定制的立体书套装。',
    cart_page_title: '🛒 采购购物车与公文报价单',
    cart_page_sub: '确认采购清单，一键下载带小鸡印章的PDF与Excel。',
    th_book_info: '图书信息',
    th_kdc: 'KDC/语言',
    th_price: '单价',
    th_qty: '数量',
    th_subtotal: '小计',
    th_action: '操作',
    btn_clear_selected: '删除选中',
    btn_add_more: '添加图书',
    title_order_summary: '报价汇总',
    sum_total_items: '图书总册数',
    sum_total_amount: '图书总金额',
    sum_discount: '馆员优惠 (10%)',
    sum_grand_total: '最终报价金额',
    title_librarian_info: '公文报价单信息',
    lbl_institution: '图书馆 / 机构名称',
    lbl_librarian: '采购馆员姓名',
    lbl_stamp_type: '选择印章样式',
    btn_pdf_quote: '🐥 下载小鸡印章PDF报价单',
    btn_excel_download: '📊 下载Excel清单',
    btn_back_to_list: '返回检索列表',
    audio_sample_title: '🎵 木琴立体音乐试听',
    audio_sample_sub: '伴随3D绘本的欢快木琴旋律',
    btn_play_audio: '播放试听',
    lbl_author: '作者/绘图',
    lbl_publisher: '出版社',
    lbl_isbn: 'ISBN',
    lbl_kdc: 'KDC 分类',
    lbl_language: '语言',
    lbl_age_group: '适合年龄',
    title_synopsis: '📖 内容简介',
    lbl_price: '定价',
    lbl_order_qty: '采购数量',
    btn_add_to_cart: '加入购物车',
    btn_quick_quote: '快速报价'
  },
  ES: {
    nav_home: 'Inicio',
    nav_search: 'Buscar Libros',
    nav_curation: 'Curaduría 3D',
    nav_cart: 'Carrito y Cotización',
    hero_chip: '🎈 Casa en el Árbol 3D y Tren de Juguete',
    hero_title: 'Biblioteca Infantil Multicultural<br>con Libros Pop-Up 3D',
    hero_desc: '¡Bienvenidos al portal de la casa en el árbol! Explore libros desplegables 3D y genere cotizaciones en 1 clic con sellos de pollito.',
    btn_explore_books: 'Explorar Libros',
    btn_view_curation: 'Ver Curaduría 3D',
    feat_lang_title: '5 Idiomas',
    feat_lang_desc: 'Libros bilingües en KO, EN, VI, ZH, ES',
    feat_pop_title: 'Vista Pop-Up 360°',
    feat_pop_desc: 'Inspeccione libros 3D desplegables',
    feat_quote_title: 'Cotización PDF en 1 Clic',
    feat_quote_desc: 'Descargue PDF oficial y Excel con Sello de Pollito',
    tag_sandbox: '🎨 Galería 3D',
    title_sandbox: 'Galería Interactiva 3D Pop-Up',
    sub_sandbox: 'Pase el ratón para ver el efecto 3D.',
    tag_new_releases: '🌟 Novedades',
    title_new_releases: 'Novedades del Mes',
    link_view_all: 'Ver Todo',
    search_page_title: '🔍 Búsqueda de Libros Multiculturas',
    search_page_sub: 'Filtre por idioma, edad, código KDC, editorial e ISBN.',
    filter_heading: 'Filtros de Compra',
    btn_reset: 'Reiniciar',
    filter_keyword_label: 'Título / Autor / ISBN',
    filter_lang_label: 'Idioma',
    filter_age_label: 'Grupo de Edad',
    filter_kdc_label: 'Clasificación KDC',
    filter_publisher_label: 'Editorial',
    filter_all: 'Todos',
    age_infant: 'Infantil (3-7)',
    age_elem: 'Primaria',
    age_youth: 'Jóvenes',
    text_total: 'Total',
    text_count_unit: ' libros encontrados.',
    curation_page_title: 'Curaduría 3D Pop-Up para Bibliotecarios',
    curation_page_sub: 'Paquetes de libros desplegables diseñados para presupuestos de bibliotecas.',
    cart_page_title: '🛒 Carrito y Cotización Oficial',
    cart_page_sub: 'Revise su pedido y genere una cotización PDF con el Sello de Pollito.',
    th_book_info: 'Información',
    th_kdc: 'KDC/Idioma',
    th_price: 'Precio',
    th_qty: 'Cant.',
    th_subtotal: 'Subtotal',
    th_action: 'Acción',
    btn_clear_selected: 'Eliminar Seleccionados',
    btn_add_more: 'Agregar Más Libros',
    title_order_summary: 'Resumen de Cotización',
    sum_total_items: 'Total Libros',
    sum_total_amount: 'Monto Total',
    sum_discount: 'Descuento Bibliotecario (10%)',
    sum_grand_total: 'Monto Final',
    title_librarian_info: 'Datos de la Cotización',
    lbl_institution: 'Nombre de la Biblioteca',
    lbl_librarian: 'Nombre del Bibliotecario',
    lbl_stamp_type: 'Estilo de Sello',
    btn_pdf_quote: '🐥 Cotización PDF con Sello Chick',
    btn_excel_download: '📊 Descargar Excel',
    btn_back_to_list: 'Volver a la Lista',
    audio_sample_title: '🎵 Muestra de Xilófono',
    audio_sample_sub: 'Música alegre que acompaña el libro 3D',
    btn_play_audio: 'Reproducir',
    lbl_author: 'Autor/Ilustrador',
    lbl_publisher: 'Editorial',
    lbl_isbn: 'ISBN',
    lbl_kdc: 'Código KDC',
    lbl_language: 'Idioma',
    lbl_age_group: 'Edad',
    title_synopsis: '📖 Resumen',
    lbl_price: 'Precio',
    lbl_order_qty: 'Cantidad',
    btn_add_to_cart: 'Agregar al Carrito',
    btn_quick_quote: 'Cotización Rápida'
  }
};

// --- 4. WEB AUDIO XYLOPHONE SYNTHESIZER ---
class XylophoneSynth {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChime(freq = 523.25, type = 'chime') {
    if (this.isMuted) return;
    try {
      this.initContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      // Wooden/metal Xylophone timbre
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Envelope
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.4, this.ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.65);
    } catch (e) {
      console.warn('Audio Context Error:', e);
    }
  }

  playMelody(freqs = [523.25, 659.25, 783.99, 1046.50]) {
    if (this.isMuted) return;
    freqs.forEach((f, idx) => {
      setTimeout(() => {
        this.playChime(f);
      }, idx * 180);
    });
  }
}

const audioSynth = new XylophoneSynth();

// --- 5. PASTEL CONFETTI LAUNCHER ---
function launchPastelConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#b8e2d6', '#e7defc', '#f6d2b8', '#fff3c4', '#ffd84d']
    });
  }
}

// --- 6. GLOBAL STATE MANAGEMENT ---
const AppState = {
  currentLang: 'KO',
  cart: [
    { bookId: 'book-1', qty: 3 },
    { bookId: 'book-2', qty: 2 }
  ],
  filters: {
    keyword: '',
    language: 'ALL',
    ageGroup: 'ALL',
    kdc: 'ALL',
    publisher: 'ALL',
    sort: 'newest'
  },
  selectedBookId: 'book-1'
};

// --- 7. THREE.JS 3D SCENE MANAGERS ---

// A. Hero 3D Pop-Up Treehouse & Orbiting Toy Train Scene
class TreehouseSceneManager {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.trainGroup = null;
    this.trainAngle = 0;
    this.floatingBooks = [];
    this.animId = null;

    this.init();
  }

  init() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight || 440;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = null;

    // Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 8, 18);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    // OrbitControls
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2.1;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfff8ea, 0.9);
    dirLight.position.set(10, 18, 12);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    // Build 3D Treehouse & Train Objects
    this.buildTreehouse();
    this.buildToyTrain();
    this.buildFloatingStorybooks();

    // Window resize handler
    window.addEventListener('resize', () => this.onResize());

    // Start animation loop
    this.animate();
  }

  buildTreehouse() {
    const treehouseGroup = new THREE.Group();

    // 1. Base Island / Pop-Up Book Base
    const bookBaseGeo = new THREE.BoxGeometry(9, 0.6, 7);
    const bookBaseMat = new THREE.MeshStandardMaterial({ color: 0xe7defc, roughness: 0.4 });
    const bookBase = new THREE.Mesh(bookBaseGeo, bookBaseMat);
    bookBase.position.y = -0.3;
    treehouseGroup.add(bookBase);

    // Book pages thickness
    const pageGeo = new THREE.BoxGeometry(8.8, 0.4, 6.8);
    const pageMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const pages = new THREE.Mesh(pageGeo, pageMat);
    pages.position.y = -0.1;
    treehouseGroup.add(pages);

    // 2. Wooden Tree Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.7, 1.1, 5, 8);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x735945, roughness: 0.8 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 2.5;
    treehouseGroup.add(trunk);

    // 3. Treehouse House Box
    const houseGeo = new THREE.BoxGeometry(2.4, 2.0, 2.4);
    const houseMat = new THREE.MeshStandardMaterial({ color: 0xfff3c4, roughness: 0.5 });
    const house = new THREE.Mesh(houseGeo, houseMat);
    house.position.set(0, 4.5, 0);
    treehouseGroup.add(house);

    // Roof (Pyramid)
    const roofGeo = new THREE.ConeGeometry(2.2, 1.4, 4);
    const roofMat = new THREE.MeshStandardMaterial({ color: 0xff9f43, roughness: 0.4 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.set(0, 6.0, 0);
    roof.rotation.y = Math.PI / 4;
    treehouseGroup.add(roof);

    // Door & Windows
    const doorGeo = new THREE.BoxGeometry(0.6, 1.0, 0.1);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x5a422f });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(0, 4.0, 1.21);
    treehouseGroup.add(door);

    // 4. Foliage Canopy (Fluffy Pastel Mint/Green Spheres)
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x3f665c, roughness: 0.6 });
    const foliageMat2 = new THREE.MeshStandardMaterial({ color: 0xb8e2d6, roughness: 0.5 });

    const posArray = [
      [1.6, 5.2, 0.8, 1.5],
      [-1.6, 5.0, -0.8, 1.6],
      [0, 5.8, -1.5, 1.7],
      [-1.2, 5.6, 1.2, 1.4],
      [1.4, 5.5, -1.2, 1.4]
    ];

    posArray.forEach((p, idx) => {
      const geo = new THREE.IcosahedronGeometry(p[3], 1);
      const mesh = new THREE.Mesh(geo, idx % 2 === 0 ? foliageMat : foliageMat2);
      mesh.position.set(p[0], p[1], p[2]);
      treehouseGroup.add(mesh);
    });

    this.scene.add(treehouseGroup);
  }

  buildToyTrain() {
    this.trainGroup = new THREE.Group();

    // Train Track Ring (Circular line)
    const trackGeo = new THREE.RingGeometry(5.2, 5.5, 32);
    const trackMat = new THREE.MeshBasicMaterial({ color: 0xdce2f3, side: THREE.DoubleSide });
    const track = new THREE.Mesh(trackGeo, trackMat);
    track.rotation.x = Math.PI / 2;
    track.position.y = 0.02;
    this.scene.add(track);

    // Engine Locomotive
    const engineGeo = new THREE.BoxGeometry(1.2, 0.8, 0.7);
    const engineMat = new THREE.MeshStandardMaterial({ color: 0xff9f43 });
    const engine = new THREE.Mesh(engineGeo, engineMat);
    engine.position.set(0, 0.4, 0);
    this.trainGroup.add(engine);

    // Chimney
    const chimneyGeo = new THREE.CylinderGeometry(0.12, 0.15, 0.5, 8);
    const chimneyMat = new THREE.MeshStandardMaterial({ color: 0x274e45 });
    const chimney = new THREE.Mesh(chimneyGeo, chimneyMat);
    chimney.position.set(0.4, 0.9, 0);
    this.trainGroup.add(chimney);

    // Wagon 1 (Pastel Mint)
    const wagon1Geo = new THREE.BoxGeometry(1.0, 0.6, 0.65);
    const wagon1Mat = new THREE.MeshStandardMaterial({ color: 0xb8e2d6 });
    const wagon1 = new THREE.Mesh(wagon1Geo, wagon1Mat);
    wagon1.position.set(-1.3, 0.35, 0);
    this.trainGroup.add(wagon1);

    // Wagon 2 (Pastel Lavender)
    const wagon2Geo = new THREE.BoxGeometry(1.0, 0.6, 0.65);
    const wagon2Mat = new THREE.MeshStandardMaterial({ color: 0xe7defc });
    const wagon2 = new THREE.Mesh(wagon2Geo, wagon2Mat);
    wagon2.position.set(-2.5, 0.35, 0);
    this.trainGroup.add(wagon2);

    this.scene.add(this.trainGroup);
  }

  buildFloatingStorybooks() {
    const bookColors = [0xb8e2d6, 0xe7defc, 0xf6d2b8, 0xffd84d];
    for (let i = 0; i < 6; i++) {
      const group = new THREE.Group();
      const coverGeo = new THREE.BoxGeometry(0.8, 1.1, 0.15);
      const coverMat = new THREE.MeshStandardMaterial({ color: bookColors[i % bookColors.length] });
      const cover = new THREE.Mesh(coverGeo, coverMat);
      group.add(cover);

      const angle = (i / 6) * Math.PI * 2;
      const radius = 3.5 + Math.random() * 0.8;
      group.position.set(Math.cos(angle) * radius, 2.5 + Math.sin(i) * 0.8, Math.sin(angle) * radius);
      group.userData = { initialY: group.position.y, speed: 0.02 + Math.random() * 0.02, offset: i };

      this.floatingBooks.push(group);
      this.scene.add(group);
    }
  }

  animate() {
    this.animId = requestAnimationFrame(() => this.animate());

    // Orbit Train along circular track radius 5.3
    this.trainAngle += 0.015;
    const radius = 5.35;
    const x = Math.cos(this.trainAngle) * radius;
    const z = Math.sin(this.trainAngle) * radius;
    if (this.trainGroup) {
      this.trainGroup.position.set(x, 0.05, z);
      this.trainGroup.rotation.y = -this.trainAngle + Math.PI / 2;
    }

    // Sinusoidal floating books animation
    this.floatingBooks.forEach((book, idx) => {
      book.position.y = book.userData.initialY + Math.sin(Date.now() * 0.002 + book.userData.offset) * 0.3;
      book.rotation.y += 0.01;
    });

    if (this.controls) this.controls.update();
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight || 440;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}

// B. 360-Degree Pastel Pop-Up Book Preview Scene (#detail)
class DetailBookSceneManager {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.bookGroup = null;
    this.leftPage = null;
    this.rightPage = null;
    this.popUpStructure = null;
    this.isOpen = false;

    this.init();
  }

  init() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight || 480;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    this.camera.position.set(0, 5, 8);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    this.scene.add(dirLight);

    this.build3DBook();
    this.animate();

    window.addEventListener('resize', () => this.onResize());
  }

  build3DBook() {
    this.bookGroup = new THREE.Group();

    // Spine
    const spineGeo = new THREE.CylinderGeometry(0.2, 0.2, 3.2, 16);
    const spineMat = new THREE.MeshStandardMaterial({ color: 0x3f665c });
    const spine = new THREE.Mesh(spineGeo, spineMat);
    spine.rotation.x = Math.PI / 2;
    this.bookGroup.add(spine);

    // Left Cover / Page
    this.leftPage = new THREE.Group();
    const leftCoverMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.15, 3.2),
      new THREE.MeshStandardMaterial({ color: 0xb8e2d6, roughness: 0.4 })
    );
    leftCoverMesh.position.set(-1.1, 0, 0);
    this.leftPage.add(leftCoverMesh);

    // Right Cover / Page
    this.rightPage = new THREE.Group();
    const rightCoverMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.15, 3.2),
      new THREE.MeshStandardMaterial({ color: 0xe7defc, roughness: 0.4 })
    );
    rightCoverMesh.position.set(1.1, 0, 0);
    this.rightPage.add(rightCoverMesh);

    // 3D Pop-Up Structure (Miniature Pop-Up Castle / Treehouse)
    this.popUpStructure = new THREE.Group();

    const popCastleGeo = new THREE.ConeGeometry(0.8, 1.6, 5);
    const popCastleMat = new THREE.MeshStandardMaterial({ color: 0xff9f43 });
    const popCastle = new THREE.Mesh(popCastleGeo, popCastleMat);
    popCastle.position.set(0, 0.8, 0);
    this.popUpStructure.add(popCastle);

    const popTreeGeo = new THREE.SphereGeometry(0.6, 8, 8);
    const popTreeMat = new THREE.MeshStandardMaterial({ color: 0x3f665c });
    const popTree = new THREE.Mesh(popTreeGeo, popTreeMat);
    popTree.position.set(0.7, 0.6, 0.4);
    this.popUpStructure.add(popTree);

    this.popUpStructure.scale.set(0.001, 0.001, 0.001); // hidden when closed
    this.bookGroup.add(this.popUpStructure);

    this.bookGroup.add(this.leftPage);
    this.bookGroup.add(this.rightPage);

    this.scene.add(this.bookGroup);
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    const targetAngle = this.isOpen ? 0.35 : 0;
    const targetScale = this.isOpen ? 1 : 0.001;

    let start = null;
    const duration = 600;

    const animateOpen = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // Ease Out Cubic

      if (this.leftPage && this.rightPage && this.popUpStructure) {
        this.leftPage.rotation.z = ease * targetAngle;
        this.rightPage.rotation.z = -ease * targetAngle;
        const currentScale = targetScale === 1 ? 0.001 + ease * 0.999 : 1 - ease * 0.999;
        this.popUpStructure.scale.set(currentScale, currentScale, currentScale);
      }

      if (progress < 1) {
        requestAnimationFrame(animateOpen);
      }
    };

    requestAnimationFrame(animateOpen);
    return this.isOpen;
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.bookGroup && !this.isOpen) {
      this.bookGroup.rotation.y += 0.005;
    }

    if (this.controls) this.controls.update();
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight || 480;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}

// Global scene handles
let heroTreehouseScene = null;
let detailBookScene = null;

// --- 8. UI RENDERERS & EVENT HANDLERS ---

// Update UI Text Translations
function updateTranslations(lang = AppState.currentLang) {
  const dict = I18N[lang] || I18N.KO;
  document.querySelectorAll('[data-i18n]').forEach((elem) => {
    const key = elem.getAttribute('data-i18n');
    if (dict[key]) {
      elem.innerHTML = dict[key];
    }
  });
}

// Render Sandbox Exhibition Cards (#home)
function renderSandboxGrid() {
  const container = document.getElementById('sandbox-grid');
  if (!container) return;

  container.innerHTML = BOOKS_DATA.slice(0, 4).map((book) => `
    <div class="toy-card-3d" onclick="navigateToDetail('${book.id}')">
      <div class="toy-card-cover" style="background-image: url('${book.coverImg}');">
        <span class="toy-card-badge">${book.languageLabel}</span>
      </div>
      <h4 class="toy-card-title">${book.title}</h4>
      <div class="toy-card-meta">
        <span>${book.publisher}</span>
        <span>${book.kdc}</span>
      </div>
      <div class="toy-card-price">${book.price.toLocaleString()} 원</div>
    </div>
  `).join('');
}

// Render New Releases (#home)
function renderHomeNewReleases() {
  const featuredBox = document.getElementById('home-featured-3d');
  const classicBox = document.getElementById('home-classic-list');

  if (featuredBox && BOOKS_DATA[0]) {
    const b = BOOKS_DATA[0];
    featuredBox.innerHTML = `
      <div style="text-align: center;">
        <span class="hero-chip">🔥 이달의 대표 수서 도서</span>
        <div style="height: 180px; background-image: url('${b.coverImg}'); background-size: cover; background-position: center; border-radius: 12px; margin: 16px 0;"></div>
        <h4>${b.title}</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">${b.description}</p>
        <button class="btn-squishy btn-primary btn-block" onclick="addToCart('${b.id}')">
          <i class="fa-solid fa-basket-shopping"></i> 바로 장바구니 담기
        </button>
      </div>
    `;
  }

  if (classicBox) {
    classicBox.innerHTML = BOOKS_DATA.slice(1, 5).map((b) => `
      <div class="classic-item-row" onclick="navigateToDetail('${b.id}')">
        <div class="classic-item-left">
          <div class="classic-thumb" style="background-image: url('${b.coverImg}');"></div>
          <div class="classic-info">
            <h5>${b.title}</h5>
            <p>${b.publisher} | ${b.languageLabel}</p>
          </div>
        </div>
        <strong>${b.price.toLocaleString()}원</strong>
      </div>
    `).join('');
  }
}

// Render Search Results (#search)
function renderSearchResults() {
  const container = document.getElementById('search-books-grid');
  const countNum = document.getElementById('search-count-num');
  if (!container) return;

  const { keyword, language, ageGroup, kdc, publisher, sort } = AppState.filters;

  let filtered = BOOKS_DATA.filter((b) => {
    // Keyword match
    if (keyword) {
      const kw = keyword.toLowerCase();
      const matchTitle = b.title.toLowerCase().includes(kw);
      const matchAuthor = b.author.toLowerCase().includes(kw);
      const matchIsbn = b.isbn.toLowerCase().includes(kw);
      if (!matchTitle && !matchAuthor && !matchIsbn) return false;
    }
    // Language
    if (language !== 'ALL' && b.language !== language) return false;
    // Age Group
    if (ageGroup !== 'ALL' && b.ageGroup !== ageGroup) return false;
    // KDC
    if (kdc !== 'ALL' && !b.kdc.startsWith(kdc.substring(0, 2))) return false;
    // Publisher
    if (publisher !== 'ALL' && b.publisher !== publisher) return false;

    return true;
  });

  // Sort
  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (countNum) countNum.innerText = filtered.length;

  container.innerHTML = filtered.map((b) => `
    <div class="book-card">
      <div class="book-cover" style="background-image: url('${b.coverImg}');">
        <span class="lang-tag">${b.languageLabel}</span>
      </div>
      <h4 class="book-title">${b.title}</h4>
      <div class="book-author">${b.author}</div>
      <div class="book-kdc-badge">KDC ${b.kdc} | ${b.publisher}</div>
      <div class="book-bottom">
        <span class="book-price">${b.price.toLocaleString()}원</span>
        <button class="btn-squishy btn-primary btn-sm" onclick="addToCart('${b.id}')">
          <i class="fa-solid fa-cart-plus"></i> 담기
        </button>
      </div>
    </div>
  `).join('');
}

// Render Curation Packages (#curation)
function renderCurationPackages() {
  const container = document.getElementById('curation-packages-grid');
  if (!container) return;

  container.innerHTML = CURATION_PACKAGES.map((pkg) => `
    <div class="curation-package-card">
      <span class="package-badge">${pkg.badge}</span>
      <div class="package-icon"><i class="${pkg.icon}"></i></div>
      <h3 class="package-title">${pkg.title}</h3>
      <p class="package-desc">${pkg.desc}</p>

      <ul class="package-item-list">
        ${pkg.books.map((bId) => {
          const book = BOOKS_DATA.find((x) => x.id === bId);
          return book ? `<li><i class="fa-solid fa-check text-mint"></i> ${book.title}</li>` : '';
        }).join('')}
      </ul>

      <div class="package-price-row">
        <span class="package-original-price">${pkg.originalPrice.toLocaleString()}원</span>
        <span class="package-final-price">${pkg.finalPrice.toLocaleString()}원</span>
      </div>

      <button class="btn-squishy btn-primary btn-block" onclick="addPackageToCart('${pkg.id}')">
        <i class="fa-solid fa-box-open"></i> 패키지 1클릭 수서 담기
      </button>
    </div>
  `).join('');
}

// Render Cart (#cart)
function renderCart() {
  const tableBody = document.getElementById('cart-table-body');
  const badgeCount = document.getElementById('cart-badge-count');
  const totalQtyElem = document.getElementById('sum-total-qty');
  const totalAmountElem = document.getElementById('sum-total-amount');
  const discountElem = document.getElementById('sum-discount-amount');
  const grandTotalElem = document.getElementById('sum-grand-total');

  let totalQty = 0;
  let totalAmount = 0;

  if (tableBody) {
    if (AppState.cart.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 48px; color: var(--text-muted);">
            <i class="fa-solid fa-basket-shopping" style="font-size: 2.5rem; margin-bottom: 12px; display: block;"></i>
            장바구니가 비어 있습니다. 도서 검색에서 수서할 책을 담아주세요.
          </td>
        </tr>
      `;
    } else {
      tableBody.innerHTML = AppState.cart.map((item) => {
        const book = BOOKS_DATA.find((b) => b.id === item.bookId);
        if (!book) return '';
        const itemTotal = book.price * item.qty;
        totalQty += item.qty;
        totalAmount += itemTotal;

        return `
          <tr>
            <td><input type="checkbox" class="cart-item-check" data-id="${book.id}" checked></td>
            <td>
              <div class="cart-item-info">
                <div class="cart-item-thumb" style="background-image: url('${book.coverImg}');"></div>
                <div>
                  <div class="cart-item-title">${book.title}</div>
                  <div class="cart-item-publisher">${book.publisher} | ${book.isbn}</div>
                </div>
              </div>
            </td>
            <td><span class="badge-chick">${book.kdc}</span> ${book.languageLabel}</td>
            <td>${book.price.toLocaleString()}원</td>
            <td>
              <div class="qty-box">
                <button class="qty-btn" onclick="updateCartQty('${book.id}', ${item.qty - 1})">-</button>
                <input type="number" class="qty-input" value="${item.qty}" readonly>
                <button class="qty-btn" onclick="updateCartQty('${book.id}', ${item.qty + 1})">+</button>
              </div>
            </td>
            <td><strong>${itemTotal.toLocaleString()}원</strong></td>
            <td>
              <button class="btn-text-sm" onclick="removeFromCart('${book.id}')"><i class="fa-solid fa-trash text-muted"></i></button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  const discount = Math.round(totalAmount * 0.1);
  const grandTotal = totalAmount - discount;

  if (badgeCount) badgeCount.innerText = totalQty;
  if (totalQtyElem) totalQtyElem.innerText = `${totalQty} 권`;
  if (totalAmountElem) totalAmountElem.innerText = `${totalAmount.toLocaleString()} 원`;
  if (discountElem) discountElem.innerText = `-${discount.toLocaleString()} 원`;
  if (grandTotalElem) grandTotalElem.innerText = `${grandTotal.toLocaleString()} 원`;
}

// Render Book Detail (#detail)
function renderBookDetail(bookId = AppState.selectedBookId) {
  const book = BOOKS_DATA.find((b) => b.id === bookId) || BOOKS_DATA[0];
  AppState.selectedBookId = book.id;

  const titleElem = document.getElementById('detail-book-title');
  const subTitleElem = document.getElementById('detail-book-subtitle');
  const authorElem = document.getElementById('detail-author');
  const pubElem = document.getElementById('detail-publisher');
  const isbnElem = document.getElementById('detail-isbn');
  const kdcElem = document.getElementById('detail-kdc');
  const langElem = document.getElementById('detail-language');
  const ageElem = document.getElementById('detail-age');
  const descElem = document.getElementById('detail-description');
  const priceElem = document.getElementById('detail-price');

  if (titleElem) titleElem.innerText = book.title;
  if (subTitleElem) subTitleElem.innerText = book.titleEn;
  if (authorElem) authorElem.innerText = book.author;
  if (pubElem) pubElem.innerText = book.publisher;
  if (isbnElem) isbnElem.innerText = book.isbn;
  if (kdcElem) kdcElem.innerText = book.kdc;
  if (langElem) langElem.innerText = book.languageLabel;
  if (ageElem) ageElem.innerText = book.ageGroupLabel;
  if (descElem) descElem.innerText = book.description;
  if (priceElem) priceElem.innerText = `${book.price.toLocaleString()}원`;
}

// --- 9. CART ACTIONS & CHICK STAMP OFFICIAL QUOTE ---
function addToCart(bookId) {
  audioSynth.playChime(783.99);
  launchPastelConfetti();

  const existing = AppState.cart.find((c) => c.bookId === bookId);
  if (existing) {
    existing.qty += 1;
  } else {
    AppState.cart.push({ bookId, qty: 1 });
  }
  renderCart();
}

function addPackageToCart(pkgId) {
  audioSynth.playMelody([523.25, 659.25, 783.99, 1046.50]);
  launchPastelConfetti();

  const pkg = CURATION_PACKAGES.find((p) => p.id === pkgId);
  if (pkg) {
    pkg.books.forEach((bId) => {
      const existing = AppState.cart.find((c) => c.bookId === bId);
      if (existing) {
        existing.qty += 1;
      } else {
        AppState.cart.push({ bookId: bId, qty: 1 });
      }
    });
  }
  renderCart();
  window.location.hash = '#cart';
}

function updateCartQty(bookId, newQty) {
  if (newQty <= 0) {
    removeFromCart(bookId);
    return;
  }
  const item = AppState.cart.find((c) => c.bookId === bookId);
  if (item) {
    item.qty = newQty;
    renderCart();
  }
}

function removeFromCart(bookId) {
  AppState.cart = AppState.cart.filter((c) => c.bookId !== bookId);
  renderCart();
}

function navigateToDetail(bookId) {
  AppState.selectedBookId = bookId;
  renderBookDetail(bookId);
  window.location.hash = '#detail';
}

// Draw Authentic Red Chick Stamp on HTML5 Canvas (귀여운 병아리 직인)
function drawChickStamp() {
  const canvas = document.getElementById('pdf-chick-stamp-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = 60;
  const centerY = 60;
  const radius = 50;

  // Outer Red Circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#d93838';
  ctx.stroke();

  // Inner Ring
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius - 6, 0, Math.PI * 2);
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = '#d93838';
  ctx.stroke();

  // Stamp Circular Text
  ctx.font = 'bold 9px Quicksand, sans-serif';
  ctx.fillStyle = '#d93838';
  ctx.textAlign = 'center';
  ctx.fillText('STORYTREE LIB', centerX, 24);
  ctx.fillText('공식 수서 직인', centerX, 102);

  // Center Chick Icon (🐥 Draw Cute Chick Face)
  // Chick Head
  ctx.beginPath();
  ctx.arc(centerX, centerY - 2, 16, 0, Math.PI * 2);
  ctx.fillStyle = '#ffd84d';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#d93838';
  ctx.stroke();

  // Eyes
  ctx.beginPath();
  ctx.arc(centerX - 5, centerY - 6, 2, 0, Math.PI * 2);
  ctx.arc(centerX + 5, centerY - 6, 2, 0, Math.PI * 2);
  ctx.fillStyle = '#d93838';
  ctx.fill();

  // Beak
  ctx.beginPath();
  ctx.moveTo(centerX - 3, centerY - 1);
  ctx.lineTo(centerX + 3, centerY - 1);
  ctx.lineTo(centerX, centerY + 5);
  ctx.closePath();
  ctx.fillStyle = '#ff9f43';
  ctx.fill();
  ctx.strokeStyle = '#d93838';
  ctx.lineWidth = 1;
  ctx.stroke();
}

// Generate PDF Modal Preview
function openPdfQuoteModal() {
  audioSynth.playMelody([523.25, 659.25, 783.99]);
  launchPastelConfetti();

  const modal = document.getElementById('quote-modal');
  const instInput = document.getElementById('quote-inst-name');
  const libInput = document.getElementById('quote-librarian-name');

  const pdfInst = document.getElementById('pdf-inst-name');
  const pdfLib = document.getElementById('pdf-librarian-name');
  const pdfTableBody = document.getElementById('pdf-table-body');
  const pdfSubtotal = document.getElementById('pdf-subtotal-val');
  const pdfDiscount = document.getElementById('pdf-discount-val');
  const pdfGrand = document.getElementById('pdf-grand-val');

  if (pdfInst) pdfInst.innerText = instInput ? instInput.value : '서울 다문화 어린이 도서관';
  if (pdfLib) pdfLib.innerText = libInput ? libInput.value : '김사서 주무관';

  let subtotal = 0;
  if (pdfTableBody) {
    pdfTableBody.innerHTML = AppState.cart.map((item, idx) => {
      const book = BOOKS_DATA.find((b) => b.id === item.bookId);
      if (!book) return '';
      const lineTotal = book.price * item.qty;
      subtotal += lineTotal;
      return `
        <tr>
          <td style="text-align: center;">${idx + 1}</td>
          <td>${book.title}</td>
          <td style="text-align: center;">${book.isbn}</td>
          <td style="text-align: center;">${book.kdc} / ${book.language}</td>
          <td style="text-align: right;">${book.price.toLocaleString()}원</td>
          <td style="text-align: center;">${item.qty}</td>
          <td style="text-align: right;">${lineTotal.toLocaleString()}원</td>
        </tr>
      `;
    }).join('');
  }

  const discount = Math.round(subtotal * 0.1);
  const grandTotal = subtotal - discount;

  if (pdfSubtotal) pdfSubtotal.innerText = `${subtotal.toLocaleString()}원`;
  if (pdfDiscount) pdfDiscount.innerText = `-${discount.toLocaleString()}원`;
  if (pdfGrand) pdfGrand.innerText = `${grandTotal.toLocaleString()}원`;

  drawChickStamp();

  if (modal) modal.classList.add('active');
}

function closePdfQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (modal) modal.classList.remove('active');
}

// Export Cart to Excel Sheet
function downloadCartExcel() {
  audioSynth.playChime(880.00);
  launchPastelConfetti();

  const data = AppState.cart.map((item, idx) => {
    const book = BOOKS_DATA.find((b) => b.id === item.bookId);
    return {
      No: idx + 1,
      도서명: book ? book.title : '',
      출판사: book ? book.publisher : '',
      ISBN: book ? book.isbn : '',
      KDC분류: book ? book.kdc : '',
      언어: book ? book.language : '',
      단가: book ? book.price : 0,
      수량: item.qty,
      합계금액: book ? book.price * item.qty : 0
    };
  });

  if (typeof XLSX !== 'undefined') {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, '수서견적목록');
    XLSX.writeFile(wb, 'StoryTree_v22_다문화도서_수서견적서.xlsx');
  } else {
    alert('SheetJS 라이브러리가 로드되지 않았습니다.');
  }
}

// Download PDF using html2pdf
function downloadPdfDocument() {
  const element = document.getElementById('pdf-print-area');
  if (!element) return;

  if (typeof html2pdf !== 'undefined') {
    const opt = {
      margin: 10,
      filename: 'StoryTree_v22_공문견적서_병아리직인.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  } else {
    window.print();
  }
}

// --- 10. ROUTER & EVENT INITIALIZATION ---
function handleNavigation() {
  const hash = window.location.hash || '#home';
  const pageSections = document.querySelectorAll('.page-section');
  const navTabs = document.querySelectorAll('.nav-tab');

  pageSections.forEach((sec) => sec.classList.remove('active'));
  navTabs.forEach((tab) => tab.classList.remove('active'));

  const targetTab = hash.substring(1);
  const targetSec = document.getElementById(`page-${targetTab}`);
  const activeNav = document.querySelector(`.nav-tab[data-tab="${targetTab}"]`);

  if (targetSec) targetSec.classList.add('active');
  if (activeNav) activeNav.classList.add('active');

  audioSynth.playChime(659.25);

  // Lazy Initialization of Three.js Scenes
  if (targetTab === 'home') {
    if (!heroTreehouseScene) {
      heroTreehouseScene = new TreehouseSceneManager('treehouse-canvas-wrapper');
    }
  } else if (targetTab === 'detail') {
    if (!detailBookScene) {
      detailBookScene = new DetailBookSceneManager('detail-book-canvas-wrapper');
    }
    renderBookDetail();
  }
}

// Global Event Listeners Setup
document.addEventListener('DOMContentLoaded', () => {
  // Initialize UI Text
  updateTranslations();
  renderSandboxGrid();
  renderHomeNewReleases();
  renderSearchResults();
  renderCurationPackages();
  renderCart();

  // Hash Navigation
  window.addEventListener('hashchange', handleNavigation);
  handleNavigation(); // initial route

  // Language Switcher
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      AppState.currentLang = e.target.value;
      updateTranslations(AppState.currentLang);
      audioSynth.playChime(783.99);
    });
  }

  // Sound Toggle
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundStatus = document.getElementById('txt-sound-status');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      audioSynth.isMuted = !audioSynth.isMuted;
      soundStatus.innerText = audioSynth.isMuted ? '사운드 OFF' : '사운드 ON';
    });
  }

  // Filter Listeners (#search)
  const kwInput = document.getElementById('filter-keyword');
  if (kwInput) {
    kwInput.addEventListener('input', (e) => {
      AppState.filters.keyword = e.target.value;
      renderSearchResults();
    });
  }

  const langChips = document.getElementById('filter-lang-chips');
  if (langChips) {
    langChips.querySelectorAll('.chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        langChips.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        AppState.filters.language = chip.getAttribute('data-value');
        renderSearchResults();
      });
    });
  }

  const ageChips = document.getElementById('filter-age-chips');
  if (ageChips) {
    ageChips.querySelectorAll('.chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        ageChips.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        AppState.filters.ageGroup = chip.getAttribute('data-value');
        renderSearchResults();
      });
    });
  }

  const kdcSelect = document.getElementById('filter-kdc');
  if (kdcSelect) {
    kdcSelect.addEventListener('change', (e) => {
      AppState.filters.kdc = e.target.value;
      renderSearchResults();
    });
  }

  const pubSelect = document.getElementById('filter-publisher');
  if (pubSelect) {
    pubSelect.addEventListener('change', (e) => {
      AppState.filters.publisher = e.target.value;
      renderSearchResults();
    });
  }

  const sortSelect = document.getElementById('search-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.filters.sort = e.target.value;
      renderSearchResults();
    });
  }

  const btnReset = document.getElementById('btn-reset-filters');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      AppState.filters = { keyword: '', language: 'ALL', ageGroup: 'ALL', kdc: 'ALL', publisher: 'ALL', sort: 'newest' };
      if (kwInput) kwInput.value = '';
      if (kdcSelect) kdcSelect.value = 'ALL';
      if (pubSelect) pubSelect.value = 'ALL';
      renderSearchResults();
    });
  }

  // Cart Page Buttons (#cart)
  const btnPdf = document.getElementById('btn-generate-pdf');
  if (btnPdf) btnPdf.addEventListener('click', openPdfQuoteModal);

  const btnExcel = document.getElementById('btn-download-excel');
  if (btnExcel) btnExcel.addEventListener('click', downloadCartExcel);

  const btnCloseModal = document.getElementById('btn-close-modal');
  if (btnCloseModal) btnCloseModal.addEventListener('click', closePdfQuoteModal);

  const btnModalDownload = document.getElementById('btn-modal-download-pdf');
  if (btnModalDownload) btnModalDownload.addEventListener('click', downloadPdfDocument);

  const btnModalPrint = document.getElementById('btn-modal-print');
  if (btnModalPrint) btnModalPrint.addEventListener('click', () => window.print());

  // Detail Page Controls (#detail)
  const btnToggleBook = document.getElementById('btn-toggle-book-open');
  const txtBookBtn = document.getElementById('txt-book-open-btn');
  if (btnToggleBook) {
    btnToggleBook.addEventListener('click', () => {
      if (detailBookScene) {
        const isOpen = detailBookScene.toggleOpen();
        if (txtBookBtn) txtBookBtn.innerText = isOpen ? '3D 팝업북 닫기' : '3D 팝업북 펼치기';
        audioSynth.playChime(isOpen ? 880.00 : 523.25);
      }
    });
  }

  const btnPlayXylophone = document.getElementById('btn-play-xylophone');
  if (btnPlayXylophone) {
    btnPlayXylophone.addEventListener('click', () => {
      const book = BOOKS_DATA.find((b) => b.id === AppState.selectedBookId);
      audioSynth.playMelody(book ? book.melodyFreqs : [523.25, 659.25, 783.99, 1046.50]);
    });
  }

  const btnDetailAddCart = document.getElementById('btn-detail-add-cart');
  if (btnDetailAddCart) {
    btnDetailAddCart.addEventListener('click', () => {
      addToCart(AppState.selectedBookId);
    });
  }

  const btnDetailQuickQuote = document.getElementById('btn-detail-quick-quote');
  if (btnDetailQuickQuote) {
    btnDetailQuickQuote.addEventListener('click', () => {
      addToCart(AppState.selectedBookId);
      window.location.hash = '#cart';
    });
  }
});
