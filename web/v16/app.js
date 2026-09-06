/* ==========================================================================
   GALAXY MULTICULTURAL LIBRARY PORTAL (v16) - MAIN APPLICATION ENGINE
   Includes: Bruno Simon 3D Lunar Rover, 3D Planetary Orbit, Web Audio Synth,
   5-Language i18n (KO, EN, VI, ZH, RU), 360° 3D Book, PDF/Excel Quote Generator.
   ========================================================================== */

(function () {
  'use strict';

  /* ==========================================================================
     1. MULTILINGUAL i18N DICTIONARY (KO, EN, VI, ZH, RU)
     ========================================================================== */
  const TRANSLATIONS = {
    KO: {
      brandTitle: '다문화도서관 수서 몰',
      navHome: '탐사 메인',
      navSearch: '도서 검색',
      navCuration: '은하 큐레이션',
      navCart: '공문 견적함',
      cartButton: '견적 장바구니',
      heroTitle: '3D 우주 로버 월면 탐사 수서 몰',
      heroSubtitle: 'WASD 또는 방향키로 3D 달 표면 로버를 직접 주행하여 다문화 도서 캡슐을 수집하고 레이저 빔을 발사하세요!',
      hudControlsTitle: '🎮 로버 조작 가이드',
      hudTelemetry: '📡 로버 텔레메트리',
      btnLaser: '⚡ 레이저 포 발사',
      btnResetRover: '로버 위치 리셋',
      orbitBadge: '3D PLANETARY EXHIBITION',
      orbitTitle: '행성 궤도 3D 다문화 테마 기획전',
      orbitDesc: '우주 행성 궤도를 회전하는 테마를 클릭하여 맞춤 도서를 탐색하세요.',
      planetAsiaTitle: '🌏 아시아 전통 & 현대 명작 궤도',
      planetAsiaDesc: '베트남, 중국, 필리핀 등 아시아 주요국의 이중언어 원서 및 번역 서적 수서 컬렉션.',
      planetSlavicTitle: '🌌 슬라브 & 중앙아시아 성좌',
      planetSlavicDesc: '러시아어, 우즈베크어 및 유라시아 문화권 고전 및 동화 원서 라인업.',
      planetGlobalTitle: '⭐ 글로벌 영미권 아동 문학 행성',
      planetGlobalDesc: '전 세계 아동용 명작 동화, 그림책 및 다국어 학습 교재 시리즈.',
      btnBrowseCategory: '컬렉션 도서 보기',
      newBadge: 'NEW ARRIVALS',
      newTitle: '2026 하반기 신간 다문화 도서 목록',
      btnViewAll: '전체 도서 검색하기',
      searchTitle: '우주 도서 검색 & 사서 수서 관제',
      searchSubtitle: '다국어 언어, ISBN, KDC 한국십진분류표, 연령별, 출판사별 정밀 필터링 시스템',
      searchPlaceholder: '도서명, 저자, 출판사, ISBN, KDC 코드로 검색하세요...',
      filterLang: '언어 (Language)',
      filterAge: '대상 연령 (Age)',
      filterKDC: 'KDC 분류 (Category)',
      filterPublisher: '출판사 (Publisher)',
      optAllLangs: '전체 언어 (ALL)',
      optAllAges: '전체 연령 (ALL)',
      optChildren: '유아/아동 (Children)',
      optYouth: '청소년 (Youth)',
      optAdult: '성인/일반 (Adult)',
      optAllKDC: '전체 KDC 분류 (ALL)',
      optAllPublishers: '전체 출판사 (ALL)',
      resultCountLabel: '검색 결과:',
      resultCountUnit: '건',
      btnResetFilters: '필터 초기화',
      curationBadge: 'SPECIAL GALAXY PACKAGES',
      curationTitle: '은하수 특별 3D 큐레이션 기획전',
      curationSubtitle: '공공 및 학교 다문화 도서관 수서 담당 사서를 위한 테마별 맞춤 도서 패키지',
      cartTitle: '사서 은하 관제 공문 견적함',
      cartSubtitle: '선택한 다문화 도서의 납품 견적 자동 산출 및 1클릭 공식 공문 PDF/엑셀 사양서 생성',
      statTotalTitles: '총 선택 종수',
      statTotalCopies: '총 권수',
      statRegularPrice: '정가 합계',
      statProcurementPrice: '납품가 (10% 할인)',
      instFormTitle: '수서 기관 및 담당자 공문 정보 입력',
      lblInstName: '기관명 (도서관명):',
      lblLibrarianName: '수서 담당 사서명:',
      lblContact: '연락처 / 직통전화:',
      lblEmail: '이메일 주소:',
      btnSelectAll: '전체 선택',
      btnDeselectAll: '선택 해제',
      btnDeleteSelected: '선택 삭제',
      btnClearCart: '전체 비우기',
      thCover: '표지',
      thBookInfo: '서지 정보',
      thRegularPrice: '정가',
      thSupplyPrice: '납품가',
      thQty: '수량',
      thSubtotal: '합계금액',
      thRemove: '삭제',
      emptyCartTitle: '견적함이 비어 있습니다.',
      emptyCartDesc: '도서 목록 또는 큐레이션에서 수서할 도서를 추가해 주세요.',
      btnGoSearch: '도서 탐색하러 가기',
      quoteNoticeTitle: '📌 사서 전용 1-Click 견적서 출력 시스템',
      quoteNoticeDesc: '본 도서관 납품 포털은 행정 제출용 공식 직인이 포함된 PDF 공문 견적서 및 엑셀 수서 사양서를 즉시 생성합니다.',
      btnExportExcel: '📊 엑셀 사양서 다운로드 (.xlsx)',
      btnGeneratePDF: '📄 1-Click PDF 공문 견적서 발급',
      btnBackList: '이전 목록으로 돌아가기',
      canvas3dHint: '마우스 드래그로 3D 도서를 360도 회전하세요',
      btnAutoRotate: '자동 회전 정지',
      btnLaserScan: '⚡ 3D 레이저 서지 스캔',
      lblExcerptTitle: '다국어 서평 & 본문 발췌',
      lblMetaTitle: '📚 사서 수서용 표준 서지 상세 스펙',
      lblRegularPrice: '정가:',
      lblSupplyPrice: '사서 납품가 (10% 할인):',
      btnAddCartDetail: '견적 장바구니에 담기',
      btnAddCart: '장바구니 담기',
      btnViewDetail: '3D 상세 보기'
    },
    EN: {
      brandTitle: 'Multicultural Library Portal',
      navHome: 'Lunar Hero',
      navSearch: 'Book Search',
      navCuration: 'Galaxy Curation',
      navCart: 'Quote Cart',
      cartButton: 'Procurement Cart',
      heroTitle: '3D Lunar Rover Library Portal',
      heroSubtitle: 'Drive the 3D Lunar Rover on the moon surface with WASD/Arrows, collect multicultural book capsules, and fire laser beams!',
      hudControlsTitle: '🎮 Rover Driving Controls',
      hudTelemetry: '📡 Rover Telemetry',
      btnLaser: '⚡ Fire Laser Canon',
      btnResetRover: 'Reset Rover Pos',
      orbitBadge: '3D PLANETARY EXHIBITION',
      orbitTitle: '3D Planetary Multicultural Exhibition',
      orbitDesc: 'Click revolving planetary themes in 3D orbit to explore customized book collections.',
      planetAsiaTitle: '🌏 Asian Heritage & Masterpiece Orbit',
      planetAsiaDesc: 'Bilingual and translated literature from Vietnam, China, Philippines, and Asia.',
      planetSlavicTitle: '🌌 Slavic & Central Asian Constellation',
      planetSlavicDesc: 'Russian, Uzbek, and Eurasian classic literature and children tales.',
      planetGlobalTitle: '⭐ Global English Children Literature Planet',
      planetGlobalDesc: 'World classics, picture books, and multilingual educational series for children.',
      btnBrowseCategory: 'Explore Collection',
      newBadge: 'NEW ARRIVALS',
      newTitle: '2026 New Multicultural Releases',
      btnViewAll: 'View All Books',
      searchTitle: 'Cosmic Search & Librarian Control',
      searchSubtitle: 'Precision filtering by Language, ISBN, KDC Decimal Code, Age, and Publisher',
      searchPlaceholder: 'Search by Title, Author, Publisher, ISBN, or KDC Code...',
      filterLang: 'Language',
      filterAge: 'Target Age',
      filterKDC: 'KDC Classification',
      filterPublisher: 'Publisher',
      optAllLangs: 'All Languages (ALL)',
      optAllAges: 'All Ages (ALL)',
      optChildren: 'Children',
      optYouth: 'Youth',
      optAdult: 'Adult',
      optAllKDC: 'All KDC Classes',
      optAllPublishers: 'All Publishers',
      resultCountLabel: 'Results:',
      resultCountUnit: 'books',
      btnResetFilters: 'Reset Filters',
      curationBadge: 'SPECIAL GALAXY PACKAGES',
      curationTitle: 'Galaxy Curation Packages',
      curationSubtitle: 'Customized book bundles designed for public and school library procurement librarians',
      cartTitle: 'Librarian Quote & Official Invoice Console',
      cartSubtitle: 'Automated procurement quote calculation & 1-Click official PDF invoice / Excel specification generator',
      statTotalTitles: 'Selected Titles',
      statTotalCopies: 'Total Copies',
      statRegularPrice: 'Regular Total',
      statProcurementPrice: 'Procurement Total (-10%)',
      instFormTitle: 'Library Institution & Official Details',
      lblInstName: 'Library Institution Name:',
      lblLibrarianName: 'Librarian Name:',
      lblContact: 'Phone / Contact:',
      lblEmail: 'Official Email:',
      btnSelectAll: 'Select All',
      btnDeselectAll: 'Deselect All',
      btnDeleteSelected: 'Delete Selected',
      btnClearCart: 'Clear Cart',
      thCover: 'Cover',
      thBookInfo: 'Bibliographic Metadata',
      thRegularPrice: 'Regular',
      thSupplyPrice: 'Supply',
      thQty: 'Qty',
      thSubtotal: 'Subtotal',
      thRemove: 'Remove',
      emptyCartTitle: 'Your Quote Cart is Empty',
      emptyCartDesc: 'Please add books from search or curation packages.',
      btnGoSearch: 'Explore Books',
      quoteNoticeTitle: '📌 Official 1-Click Quote & PDF Export System',
      quoteNoticeDesc: 'Generates official PDF invoices with digital seal stamps and Excel specifications for government procurement.',
      btnExportExcel: '📊 Export Excel Spec (.xlsx)',
      btnGeneratePDF: '📄 1-Click Official PDF Quote',
      btnBackList: 'Back to Search List',
      canvas3dHint: 'Drag mouse to rotate 3D book in 360 degrees',
      btnAutoRotate: 'Stop Auto Rotate',
      btnLaserScan: '⚡ 3D Laser Metadata Scan',
      lblExcerptTitle: 'Multilingual Review & Excerpt',
      lblMetaTitle: '📚 Library Bibliographic Specifications',
      lblRegularPrice: 'List Price:',
      lblSupplyPrice: 'Discounted Supply Price (10% Off):',
      btnAddCartDetail: 'Add to Procurement Cart',
      btnAddCart: 'Add to Cart',
      btnViewDetail: '3D Preview'
    },
    VI: {
      brandTitle: 'Cổng Thư Viện Đa Văn Hóa',
      navHome: 'Khám Phá 3D',
      navSearch: 'Tìm Sách',
      navCuration: 'Bộ Sách Độc Quyền',
      navCart: 'Báo Giá PDF',
      cartButton: 'Giỏ Báo Giá',
      heroTitle: 'Cổng Thư Viện Xe Thám Hiểm Mặt Trăng 3D',
      heroSubtitle: 'Điều khiển xe thám hiểm 3D trên mặt trăng bằng WASD/Mũi tên, thu thập viên nang sách đa văn hóa và bắn tia laser!',
      hudControlsTitle: '🎮 Hướng Dẫn Lái Xe',
      hudTelemetry: '📡 Dữ Liệu Xe Thám Hiểm',
      btnLaser: '⚡ Bắn Tia Laser',
      btnResetRover: 'Đặt Lại Vị Trí',
      orbitBadge: 'TRIỂN LÃM HÀNH TINH 3D',
      orbitTitle: 'Triển Lãm Đa Văn Hóa Quỹ Đạo Hành Tinh 3D',
      orbitDesc: 'Nhấp vào các chủ đề hành tinh đang quay để khám phá bộ sưu tập sách phù hợp.',
      planetAsiaTitle: '🌏 Quỹ Đạo Kiệt Tác Châu Á',
      planetAsiaDesc: 'Bộ sưu tập sách song ngữ và dịch thuật từ Việt Nam, Trung Quốc, Philippines.',
      planetSlavicTitle: '🌌 Chòm Sao Slavia & Trung Á',
      planetSlavicDesc: 'Sách cổ điển và truyện cổ tích bằng tiếng Nga và tiếng Uzbek.',
      planetGlobalTitle: '⭐ Hành Tinh Văn Học Thiếu Nhi Anh Mỹ',
      planetGlobalDesc: 'Truyện cổ tích, sách tranh và bộ sách giáo dục đa ngôn ngữ cho trẻ em.',
      btnBrowseCategory: 'Xem Bộ Sưu Tập',
      newBadge: 'SÁCH MỚI',
      newTitle: 'Danh Mục Sách Đa Văn Hóa Mới 2026',
      btnViewAll: 'Tìm Tất Cả Sách',
      searchTitle: 'Tìm Kiếm Sách Vũ Trụ & Quản Lý Thư Viện',
      searchSubtitle: 'Hệ thống lọc chính xác theo Ngôn ngữ, ISBN, Mã KDC, Lứa tuổi và Nhà xuất bản',
      searchPlaceholder: 'Tìm kiếm theo Tên sách, Tác giả, Nhà xuất bản, ISBN, KDC...',
      filterLang: 'Ngôn Ngữ',
      filterAge: 'Lứa Tuổi',
      filterKDC: 'Phân Loại KDC',
      filterPublisher: 'Nhà Xuất Bản',
      optAllLangs: 'Tất Cả Ngôn Ngữ',
      optAllAges: 'Tất Cả Lứa Tuổi',
      optChildren: 'Trẻ Em / Mầm Non',
      optYouth: 'Thanh Thiếu Niên',
      optAdult: 'Người Lớn',
      optAllKDC: 'Tất Cả Mã KDC',
      optAllPublishers: 'Tất Cả NXB',
      resultCountLabel: 'Kết quả:',
      resultCountUnit: 'cuốn',
      btnResetFilters: 'Đặt Lại Bộ Lọc',
      curationBadge: 'GÓI SÁCH VŨ TRỤ',
      curationTitle: 'Chương Trình Tuyển Chọn Đặc Biệt',
      curationSubtitle: 'Các gói sách tùy chỉnh dành cho thủ thư cung cấp sách thư viện công cộng và trường học',
      cartTitle: 'Bảng Báo Giá & Công Văn Thư Viện',
      cartSubtitle: 'Tự động tính toán báo giá và tạo báo giá công văn PDF / Excel 1-click',
      statTotalTitles: 'Số Tên Sách',
      statTotalCopies: 'Tổng Số Cuốn',
      statRegularPrice: 'Tổng Giá Bìa',
      statProcurementPrice: 'Giá Cung Cấp (-10%)',
      instFormTitle: 'Thông Tin Cơ Quan & Thủ Thư',
      lblInstName: 'Tên Thư Viện / Cơ Quan:',
      lblLibrarianName: 'Họ Tên Thủ Thư:',
      lblContact: 'Số Điện Thoại:',
      lblEmail: 'Email Công Việc:',
      btnSelectAll: 'Chọn Tất Cả',
      btnDeselectAll: 'Bỏ Chọn Tất Cả',
      btnDeleteSelected: 'Xóa Đã Chọn',
      btnClearCart: 'Xóa Toàn Bộ Giỏ',
      thCover: 'Bìa',
      thBookInfo: 'Thông Tin Sách',
      thRegularPrice: 'Giá Bìa',
      thSupplyPrice: 'Giá Cung Cấp',
      thQty: 'Số Lượng',
      thSubtotal: 'Thành Tiền',
      thRemove: 'Xóa',
      emptyCartTitle: 'Giỏ Báo Giá Đang Trống',
      emptyCartDesc: 'Vui lòng thêm sách từ mục tìm kiếm hoặc gói tuyển chọn.',
      btnGoSearch: 'Tìm Sách Ngay',
      quoteNoticeTitle: '📌 Hệ Thống Xuất Báo Giá PDF Công Văn 1-Click',
      quoteNoticeDesc: 'Tạo báo giá PDF chính thức có con dấu và tệp bảng tính Excel phục vụ thu mua thư viện.',
      btnExportExcel: '📊 Tải File Excel Spec (.xlsx)',
      btnGeneratePDF: '📄 Xuất Báo Giá PDF 1-Click',
      btnBackList: 'Quay Lại Danh Sách',
      canvas3dHint: 'Kéo chuột để xoay sách 3D 360 độ',
      btnAutoRotate: 'Tắt Tự Tự Xoay',
      btnLaserScan: '⚡ Quét Laser Thư Mục 3D',
      lblExcerptTitle: 'Đánh Giá & Trích Đoạn Đa Ngôn Ngữ',
      lblMetaTitle: '📚 Thông Số Thư Mục Tiêu Chuẩn Thư Viện',
      lblRegularPrice: 'Giá Bìa:',
      lblSupplyPrice: 'Giá Cung Cấp Thư Viện (Giảm 10%):',
      btnAddCartDetail: 'Thêm Vào Giỏ Báo Giá',
      btnAddCart: 'Thêm Giỏ',
      btnViewDetail: 'Xem 3D Chi Tiết'
    },
    ZH: {
      brandTitle: '多元文化图书馆采编门户',
      navHome: '探险主页',
      navSearch: '图书检索',
      navCuration: '银河策展',
      navCart: '公文报价函',
      cartButton: '采编购物车',
      heroTitle: '3D太空月球漫游车采编门户',
      heroSubtitle: '使用WASD或方向盘驾驶3D月球漫游车，收集多元文化图书胶囊，发射激光束！',
      hudControlsTitle: '🎮 漫游车驾驶指南',
      hudTelemetry: '📡 遥测数据',
      btnLaser: '⚡ 发射激光炮',
      btnResetRover: '重置位置',
      orbitBadge: '3D PLANETARY EXHIBITION',
      orbitTitle: '行星轨道3D多元文化主题展',
      orbitDesc: '点击在轨道上旋转的主题行星，探索定制图书典藏。',
      planetAsiaTitle: '🌏 亚洲传统与现代名著轨道',
      planetAsiaDesc: '包含越南、中国、菲律宾等亚洲主要国家双语原版与翻译图书。',
      planetSlavicTitle: '🌌 斯拉夫与中亚星座',
      planetSlavicDesc: '俄语、乌兹别克语及欧亚文化圈经典与童话原版书系。',
      planetGlobalTitle: '⭐ 全球英美儿童文学行星',
      planetGlobalDesc: '世界儿童名著童话、绘本及多语言学习教材系列。',
      planetBrowseCategory: '查看典藏图书',
      newBadge: 'NEW ARRIVALS',
      newTitle: '2026下半年新到多元文化图书书目',
      btnViewAll: '检索全部图书',
      searchTitle: '宇宙图书检索与采编控制台',
      searchSubtitle: '按语言、ISBN、KDC分类码、年龄段及出版社精细筛选',
      searchPlaceholder: '请输入书名、作者、出版社、ISBN或KDC代码进行检索...',
      filterLang: '语言 (Language)',
      filterAge: '目标年龄 (Age)',
      filterKDC: 'KDC分类 (Category)',
      filterPublisher: '出版社 (Publisher)',
      optAllLangs: '全部语言 (ALL)',
      optAllAges: '全部年龄 (ALL)',
      optChildren: '儿童/幼儿 (Children)',
      optYouth: '青少年 (Youth)',
      optAdult: '成人/通用 (Adult)',
      optAllKDC: '全部KDC分类',
      optAllPublishers: '全部出版社',
      resultCountLabel: '检索结果：',
      resultCountUnit: '册',
      btnResetFilters: '重置筛选',
      curationBadge: 'SPECIAL GALAXY PACKAGES',
      curationTitle: '银河特别3D策展特展',
      curationSubtitle: '面向公共与学校图书馆采编馆员的主题定制图书包',
      cartTitle: '馆员银河控制台公文报价函',
      cartSubtitle: '自动计算采编供货报价，一键生成官方PDF公文及Excel采购规范书',
      statTotalTitles: '选中书种',
      statTotalCopies: '总册数',
      statRegularPrice: '码洋合计',
      statProcurementPrice: '实洋供货价 (15%折扣)',
      instFormTitle: '采编机构及馆员信息输入',
      lblInstName: '机构名称 (图书馆名):',
      lblLibrarianName: '采编负责馆员:',
      lblContact: '联系电话:',
      lblEmail: '工作电子邮箱:',
      btnSelectAll: '全选',
      btnDeselectAll: '取消全选',
      btnDeleteSelected: '删除选中',
      btnClearCart: '清空购物车',
      thCover: '封面',
      thBookInfo: '书目信息 (书名/ISBN/KDC/语言)',
      thRegularPrice: '定价',
      thSupplyPrice: '供货价',
      thQty: '数量',
      thSubtotal: '小计金额',
      thRemove: '删除',
      emptyCartTitle: '报价函购物车为空',
      emptyCartDesc: '请从图书列表或主题策展包中添加需采购的图书。',
      btnGoSearch: '前往探索图书',
      quoteNoticeTitle: '📌 馆员专用一键PDF公文报价系统',
      quoteNoticeDesc: '本采编门户可立即生成带有公章的PDF官方报价公文及Excel采购细目表。',
      btnExportExcel: '📊 导出Excel规范书 (.xlsx)',
      btnGeneratePDF: '📄 一键生成PDF官方报价函',
      btnBackList: '返回上一列表',
      canvas3dHint: '按住鼠标拖拽可360度旋转3D图书',
      btnAutoRotate: '停止自动旋转',
      btnLaserScan: '⚡ 3D激光书目扫描',
      lblExcerptTitle: '多语言书评与正文摘录',
      lblMetaTitle: '📚 馆员采编标准书目详细规格',
      lblRegularPrice: '正价:',
      lblSupplyPrice: '馆员采编供货价 (10%优惠):',
      btnAddCartDetail: '加入采编购物车',
      btnAddCart: '加入购物车',
      btnViewDetail: '3D详情预览'
    },
    RU: {
      brandTitle: 'Мультикультурный Библиотечный Портал',
      navHome: 'Исследования 3D',
      navSearch: 'Поиск Книг',
      navCuration: 'Галактические Подборки',
      navCart: 'Официальная Смета',
      cartButton: 'Корзина Закупок',
      heroTitle: '3D Портал Лунохода Мультикультурной Библиотеки',
      heroSubtitle: 'Управляйте 3D луноходом с помощью WASD/стрелок, собирайте капсулы с книгами и стреляйте лазерным лучом!',
      hudControlsTitle: '🎮 Управление Луноходом',
      hudTelemetry: '📡 Телеметрия Лунохода',
      btnLaser: '⚡ Лазерный Выстрел',
      btnResetRover: 'Сброс Позиции',
      orbitBadge: '3D PLANETARY EXHIBITION',
      orbitTitle: '3D Планетарная Мультикультурная Выставка',
      orbitDesc: 'Нажмите на вращающуюся планету, чтобы открыть тематическую коллекцию книг.',
      planetAsiaTitle: '🌏 Орбита Азиатских Шедевров',
      planetAsiaDesc: 'Двуязычные и переведенные книги из Вьетнама, Китая, Филиппин.',
      planetSlavicTitle: '🌌 Созвездие Славянской и Центральноазиатской Литературы',
      planetSlavicDesc: 'Классика и детские сказки на русском и узбекском языках.',
      planetGlobalTitle: '⭐ Планета Мировой Детской Литературы',
      planetGlobalDesc: 'Шедевры детской литературы, иллюстрированные книги со всего мира.',
      btnBrowseCategory: 'Смотреть Коллекцию',
      newBadge: 'NEW ARRIVALS',
      newTitle: 'Новые Мультикультурные Поступления 2026',
      btnViewAll: 'Искать Все Книги',
      searchTitle: 'Космический Поиск и Комплектование Библиотек',
      searchSubtitle: 'Фильтрация по языку, ISBN, коду KDC, возрасту и издательству',
      searchPlaceholder: 'Поиск по названию, автору, издательству, ISBN или коду KDC...',
      filterLang: 'Язык (Language)',
      filterAge: 'Возраст (Age)',
      filterKDC: 'Классификация KDC',
      filterPublisher: 'Издательство (Publisher)',
      optAllLangs: 'Все Языки (ALL)',
      optAllAges: 'Все Возраста (ALL)',
      optChildren: 'Дети / Дошкольники',
      optYouth: 'Молодежь',
      optAdult: 'Взрослые',
      optAllKDC: 'Все Классы KDC',
      optAllPublishers: 'Все Издательства',
      resultCountLabel: 'Результаты:',
      resultCountUnit: 'книг',
      btnResetFilters: 'Сбросить Фильтры',
      curationBadge: 'SPECIAL GALAXY PACKAGES',
      curationTitle: 'Специальные Галактические Наборы',
      curationSubtitle: 'Тематические комплекты книг для библиотекарей публичных и школьных библиотек',
      cartTitle: 'Консоль Комплектования и Официальных Смет',
      cartSubtitle: 'Автоматический расчет сметы закупок и генерация PDF / Excel документов в 1 клик',
      statTotalTitles: 'Наименований',
      statTotalCopies: 'Всего Экземпляров',
      statRegularPrice: 'Сумма Без Скидки',
      statProcurementPrice: 'Закупочная Цена (-10%)',
      instFormTitle: 'Данные Учреждения и Библиотекаря',
      lblInstName: 'Название Библиотеки:',
      lblLibrarianName: 'ФИО Библиотекаря:',
      lblContact: 'Телефон:',
      lblEmail: 'Рабочий Email:',
      btnSelectAll: 'Выбрать Все',
      btnDeselectAll: 'Снять Выделение',
      btnDeleteSelected: 'Удалить Выбранное',
      btnClearCart: 'Очистить Корзину',
      thCover: 'Обложка',
      thBookInfo: 'Библиографическая Информация',
      thRegularPrice: 'Цена',
      thSupplyPrice: 'Со Скидкой',
      thQty: 'Кол-во',
      thSubtotal: 'Итого',
      thRemove: 'Удалить',
      emptyCartTitle: 'Корзина Смет Пуста',
      emptyCartDesc: 'Пожалуйста, добавьте книги из поиска или подборок.',
      btnGoSearch: 'Перейти к Поиску',
      quoteNoticeTitle: '📌 Генерация Официальной Сметы PDF в 1 Клик',
      quoteNoticeDesc: 'Создает официальный документ PDF с печатью и таблицу Excel для государственных закупок.',
      btnExportExcel: '📊 Скачать Спецификацию Excel (.xlsx)',
      btnGeneratePDF: '📄 Выдать PDF Смету в 1 Клик',
      btnBackList: 'Назад к Списку',
      canvas3dHint: 'Зажмите мышь для вращения 3D книги на 360 градусов',
      btnAutoRotate: 'Остановить Вращение',
      btnLaserScan: '⚡ 3D Лазерный Сканер Спецификации',
      lblExcerptTitle: 'Многоязычная Рецензия и Отрывок',
      lblMetaTitle: '📚 Стандартные Библиографические Данные',
      lblRegularPrice: 'Розничная Цена:',
      lblSupplyPrice: 'Закупочная Цена (Скидка 10%):',
      btnAddCartDetail: 'Добавить в Корзину Закупок',
      btnAddCart: 'В Корзину',
      btnViewDetail: '3D Просмотр'
    }
  };

  /* ==========================================================================
     2. MULTICULTURAL CATALOG DATABASE (16 Books with KO, EN, VI, ZH, RU)
     ========================================================================== */
  const BOOKS_CATALOG = [
    {
      id: 'book-1',
      title: 'Truyện Kiều - Nguyễn Du (베트남 림 앤틱 이중언어 양장본)',
      title_i18n: {
        KO: '키우전 (Truyện Kiều) 베트남 문학 이중언어 양장본',
        EN: 'The Tale of Kieu - Nguyen Du (Bilingual Edition)',
        VI: 'Truyện Kiều - Nguyễn Du (Bản bọc da song ngữ)',
        ZH: '金云翘传 (阮攸 越南古典名著中越双语)',
        RU: 'Повесть о Кьеу - Нгуен Зу (Двуязычное издание)'
      },
      author: 'Nguyễn Du (응우옌 두)',
      publisher: '하노이 문학출판사',
      isbn: '978-60-4987-112-3',
      kdc: '890',
      kdcName: '800 문학 / 동남아문학',
      language: 'VI',
      age: 'YOUTH',
      price: 28000,
      discountPrice: 25200,
      year: 2026,
      coverColor: '#1d3326',
      accentColor: '#00f3ff',
      rating: 4.9,
      curationCategory: 'asia',
      excerpt: {
        KO: '백 년의 인간 세상에 재능과 운명은 서로 시기하기 마련이다. 오동나무 잎에 가을비 소리 내릴 때 키우의 아픔은 짙어졌다.',
        EN: 'A hundred years in the realm of men, talent and fate are ever at odds. The rain falls gently on the parasol trees.',
        VI: 'Trăm năm trong cõi người ta, Chữ tài chữ mệnh khéo là ghét nhau. Trải qua một cuộc bể dâu, Những điều trông thấy mà đau đớn lòng.',
        ZH: '百年人世间，才华与命运自古相嫉。梧桐叶上雨声淅沥，金云翘之痛绵绵无绝。',
        RU: 'Сто лет в мире людском талант и судьба всегда в разладе. Осенний дождь тихо падает на листья утонченного дерева.'
      }
    },
    {
      id: 'book-2',
      title: '삼국지 (三國志) 앤틱 10권 완역 양장 세트',
      title_i18n: {
        KO: '삼국지 (三國志) 앤틱 10권 완역 양장 세트',
        EN: 'Romance of the Three Kingdoms (10-Vol Hardcover)',
        VI: 'Tam Quốc Diễn Nghĩa (Bộ 10 tập cổ điển)',
        ZH: '三国演义 (十卷全译古细精装全集)',
        RU: 'Троецарствие (Комплект из 10 томов)'
      },
      author: '나관중 (羅貫中)',
      publisher: '동양고전아카이브',
      isbn: '978-89-9876-543-2',
      kdc: '823',
      kdcName: '800 문학 / 동양문학',
      language: 'ZH',
      age: 'ADULT',
      price: 180000,
      discountPrice: 162000,
      year: 2025,
      coverColor: '#3a1717',
      accentColor: '#ffd700',
      rating: 5.0,
      curationCategory: 'asia',
      excerpt: {
        KO: '천하의 대세는 오래 나누어지면 반드시 합하게 되고, 오래 합쳐져 있으면 반드시 나누어지게 된다.',
        EN: 'The empire, long divided, must unite; long united, must divide. Such is the way of the universe under heaven.',
        VI: 'Thế lớn trong thiên hạ, phân lâu ắt hợp, hợp lâu ắt phân.',
        ZH: '话说天下大势，分久必合，合久必分。',
        RU: 'Великие силы под небесами: то, что долго было разделено, объединяется; то, что долго было единым, разделяется.'
      }
    },
    {
      id: 'book-3',
      title: 'Евгений Онегин - Пушкин (러시아 문학 성좌 양장본)',
      title_i18n: {
        KO: '예브게니 오네긴 - 푸시킨 (러시아 문학 성좌 양장본)',
        EN: 'Eugene Onegin - Alexander Pushkin (Masterpiece Edition)',
        VI: 'Eugene Onegin - Alexander Pushkin (Tác phẩm kinh điển)',
        ZH: '叶甫盖尼·奥涅金 - 普希金 (俄语诗体小说精装本)',
        RU: 'Евгений Онегин - А. С. Пушкин (Коллекционное издание)'
      },
      author: 'Александр Пушкин (알렉산드르 푸시킨)',
      publisher: '모스크바 국립문학',
      isbn: '978-5-02003-881-1',
      kdc: '892',
      kdcName: '800 문학 / 슬라브문학',
      language: 'RU',
      age: 'ADULT',
      price: 32000,
      discountPrice: 28800,
      year: 2026,
      coverColor: '#1e293b',
      accentColor: '#9d4edd',
      rating: 4.9,
      curationCategory: 'slavic',
      excerpt: {
        KO: '나의 숙부는 가장 정직한 규칙을 가진 분이셨다. 그가 중병에 걸렸을 때, 그는 자신을 존중받게 만들었다.',
        EN: 'My uncle, man of firmest principle, when fall’n in earnest sore diseased, has made his virtue recognized.',
        VI: 'Chú tôi, một người luôn giữ nguyên tắc, khi lâm bệnh nặng đã khiến mọi người phải kính trọng.',
        ZH: '我的叔叔规规矩矩，当他重病不起的时候，他逼得大家对他肃然起敬。',
        RU: 'Мой дядя самых честных правил, Когда не в шутку занемог, Он уважать себя заставил И лучше выдумать не мог.'
      }
    },
    {
      id: 'book-4',
      title: 'The Little Prince (영미권/프랑스 이중언어 별빛 양장)',
      title_i18n: {
        KO: '어린 왕자 (The Little Prince) 우주 이중언어 양장본',
        EN: 'The Little Prince (Cosmic Collector Edition)',
        VI: 'Hoàng Tử Bé (Bản đẹp vũ trụ)',
        ZH: '小王子 (星空版 中英双语精装)',
        RU: 'Маленький принц (Космическое коллекционное издание)'
      },
      author: 'Antoine de Saint-Exupéry',
      publisher: 'GALAXY Kids',
      isbn: '978-0-15-601219-5',
      kdc: '843',
      kdcName: '800 문학 / 아동문학',
      language: 'EN',
      age: 'CHILDREN',
      price: 22000,
      discountPrice: 19800,
      year: 2026,
      coverColor: '#0f172a',
      accentColor: '#00f3ff',
      rating: 5.0,
      curationCategory: 'global',
      excerpt: {
        KO: '가장 중요한 것은 눈에 보이지 않아. 마음으로 보아야만 정확하게 볼 수 있는 거야.',
        EN: 'One sees clearly only with the heart. What is essential is invisible to the eye.',
        VI: 'Người ta chỉ nhìn rõ được bằng trái tim. Những gì cốt lõi thì mắt thường không thấy được.',
        ZH: '只有用心才能看清本质。真正通透的东西，用眼睛是看不见的。',
        RU: 'Зорко одно лишь сердце. Самого главного глазами не увидишь.'
      }
    },
    {
      id: 'book-5',
      title: 'Dế Mèn Phiêu Lưu Ký (베트남 아동 문학 - Dế Mèn의 모험)',
      title_i18n: {
        KO: '귀뚜라미의 모험 (Dế Mèn Phiêu Lưu Ký) 베트남 아동 명작',
        EN: 'Adventures of a Cricket - To Hoai (Vietnam Classic)',
        VI: 'Dế Mèn Phiêu Lưu Ký - Tô Hoài (Bản minh họa màu)',
        ZH: '蟋蟀流浪记 (苏怀 越南儿童文学名著)',
        RU: 'Приключения Кузнечика - То Хоай (Вьетнамская сказка)'
      },
      author: 'Tô Hoài (토 호아이)',
      publisher: 'Kim Đồng (김동 출판사)',
      isbn: '978-60-4218-990-2',
      kdc: '890',
      kdcName: '800 문학 / 아동동화',
      language: 'VI',
      age: 'CHILDREN',
      price: 18000,
      discountPrice: 16200,
      year: 2025,
      coverColor: '#14532d',
      accentColor: '#4ade80',
      rating: 4.8,
      curationCategory: 'asia',
      excerpt: {
        KO: '나는 건장하고 당당한 젊은 귀뚜라미였다. 내 두 다리는 날카롭고 억센 가시로 가득 차 있었다.',
        EN: 'I was a sturdy young cricket. My two hind legs were lined with strong, sharp spurs.',
        VI: 'Bởi tôi ăn uống độ lượng và làm việc có chừng mực nên tôi chóng lớn lắm. Chẳng bao lâu tôi đã trở thành một chàng dế mèn cường tráng.',
        ZH: '我是一只壮实的大蟋蟀。我的后腿粗壮坚硬，上面长满了锋利的刺。',
        RU: 'Я был крепким и сильным молодым сверчком. Мои задние лапки были усыпаны острыми шипами.'
      }
    },
    {
      id: 'book-6',
      title: '西游记 (서유기) 손오공의 우주 모험 4권 에디션',
      title_i18n: {
        KO: '서유기 (西游记) 손오공 입체 삽화본 (4권 완결)',
        EN: 'Journey to the West (Illustrated 4-Vol Set)',
        VI: 'Tây Du Ký (Bộ 4 tập minh họa thần thoại)',
        ZH: '西游记 (美猴王大闹天宫全彩精装四卷)',
        RU: 'Путешествие на Запад (4 тома с иллюстрациями)'
      },
      author: '오승은 (吳承恩)',
      publisher: '인민문학출판사',
      isbn: '978-7-02000-114-9',
      kdc: '823',
      kdcName: '800 문학 / 고전문학',
      language: 'ZH',
      age: 'CHILDREN',
      price: 65000,
      discountPrice: 58500,
      year: 2026,
      coverColor: '#7f1d1d',
      accentColor: '#f59e0b',
      rating: 4.9,
      curationCategory: 'asia',
      excerpt: {
        KO: '여래부처님의 손바닥 안에서 근두운을 타고 십만 팔천 리를 날아갔으나 여래의 손가락 기둥을 벗어나지 못했다.',
        EN: 'Sun Wukong somersaulted a hundred and eight thousand leagues on the cloud, yet remained within Buddha’s palm.',
        VI: 'Tôn Ngộ Không lộn một vòng mây mười vạn tám ngàn dặm, nhưng vẫn không bay khỏi bàn tay Phật Tổ.',
        ZH: '孙悟空一筋斗云翻了十万八千里，却仍停留在如来佛祖的掌心之中。',
        RU: 'Сунь Укун перевернулся на облаке на 108 000 ли, но так и не смог вылететь из ладони Будды.'
      }
    },
    {
      id: 'book-7',
      title: 'Сказка о царе Салтане (Салтан 왕 이야기 그림책)',
      title_i18n: {
        KO: '살탄 왕 이야기 (Пушкин 그림책 이중언어)',
        EN: 'The Tale of Tsar Saltan - Alexander Pushkin',
        VI: 'Truyện Vua Saltan - Pushkin (Sách tranh)',
        ZH: '萨尔坦王的故事 (普希金全彩绘本)',
        RU: 'Сказка о царе Салтане - А. С. Пушкин (Иллюстрированная)'
      },
      author: 'Александр Пушкин (알렉산드르 푸시킨)',
      publisher: 'Детская литература',
      isbn: '978-5-08005-442-7',
      kdc: '892',
      kdcName: '800 문학 / 슬라브동화',
      language: 'RU',
      age: 'CHILDREN',
      price: 24000,
      discountPrice: 21600,
      year: 2026,
      coverColor: '#1e1b4b',
      accentColor: '#818cf8',
      rating: 4.9,
      curationCategory: 'slavic',
      excerpt: {
        KO: '창가에서 세 자매가 밤늦도록 실을 잣고 있었다. 첫째가 말하길: "내가 왕비가 된다면..."',
        EN: 'Three fair maidens by the window spun late into the evening. Said the first: "If I were Tsaritsa..."',
        VI: 'Ba cô gái bên cửa sổ ngồi kéo sợi đến đêm muộn. Cô chị nói: "Nếu em là Hoàng hậu..."',
        ZH: '三位姑娘坐在窗前，纺纱纺到深夜。老大说：“要是我能当上王后……”',
        RU: 'Три девицы под окном Пряли поздно вечерком. «Кабы я была царица, — Говорит одна девица...»'
      }
    },
    {
      id: 'book-8',
      title: 'Harry Potter and the Sorcerer\'s Stone (Cosmic Collector)',
      title_i18n: {
        KO: '해리 포터와 마법사의 돌 (영미권 원서 하드커버)',
        EN: 'Harry Potter and the Sorcerer’s Stone',
        VI: 'Harry Potter và Hòn Đá Phù Thủy (Bản tiếng Anh)',
        ZH: '哈利·波特与魔法石 (英文原版精装)',
        RU: 'Гарри Поттер и философский камень (Английское издание)'
      },
      author: 'J.K. Rowling',
      publisher: 'Bloomsbury Childrens',
      isbn: '978-1-40885-565-2',
      kdc: '843',
      kdcName: '800 문학 / 판타지소설',
      language: 'EN',
      age: 'YOUTH',
      price: 29000,
      discountPrice: 26100,
      year: 2025,
      coverColor: '#312e81',
      accentColor: '#a855f7',
      rating: 5.0,
      curationCategory: 'global',
      excerpt: {
        KO: '프리벳 가 4번지에 살고 있는 더즐리 부부는 자신들이 지극히 정상적이라고 말하는 것을 자랑스러워했다.',
        EN: 'Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.',
        VI: 'Ông bà Dursley, sống ở nhà số 4 đường Privet Drive, luôn tự hào tuyên bố rằng họ hoàn toàn bình thường.',
        ZH: '住在德思礼路4号的德思礼夫妇总是自豪地说，他们是非常规矩的正常人。',
        RU: 'Мистер и миссис Дурсли проживали в доме номер четыре по Бирючинной улице и гордились тем, что они совершенно нормальные.'
      }
    },
    {
      id: 'book-9',
      title: '우주 시대로 가는 다문화 미래 동화 (KDC 800 아동 삼중언어)',
      title_i18n: {
        KO: '우주 시대로 가는 다문화 미래 동화 (한/영/베 삼중언어)',
        EN: 'Multicultural Future Tales for Space Era (Trilingual)',
        VI: 'Truyện Cổ Tích Đa Văn Hóa Vươn Ra Vũ Trụ (Ba ngôn ngữ)',
        ZH: '面向太空时代的多元文化未来童话 (韩英越三语)',
        RU: 'Мультикультурные Сказки Космической Эры (Три языка)'
      },
      author: '다문화아동문학위원회',
      publisher: '코스믹도서출판',
      isbn: '978-89-7001-998-1',
      kdc: '813',
      kdcName: '800 문학 / 창작동화',
      language: 'KO',
      age: 'CHILDREN',
      price: 20000,
      discountPrice: 18000,
      year: 2026,
      coverColor: '#0284c7',
      accentColor: '#38bdf8',
      rating: 4.8,
      curationCategory: 'asia',
      excerpt: {
        KO: '달 표면 기지에서 자란 지우와 하노이에서 온 응우옌은 서로 다른 언어를 사용했지만 은하수 별빛 아래서 친구가 되었다.',
        EN: 'Jiu, who grew up on the moon base, and Nguyen from Hanoi spoke different languages, but became best friends under galaxy stars.',
        VI: 'Jiu lớn lên ở căn cứ mặt trăng và Nguyễn đến từ Hà Nội nói hai ngôn ngữ khác nhau, nhưng đã trở thành bạn thân dưới ánh sao.',
        ZH: '在月球基地长大的智宇和来自河内的阮氏虽然使用不同的语言，但在银河星光下成为了最好的朋友。',
        RU: 'Чжиу, выросший на лунной базе, и Нгуен из Ханоя говорили на разных языках, но стали лучшими друзьями под звездами.'
      }
    },
    {
      id: 'book-10',
      title: 'Мастер и Маргарита - Булгаков (거장 앤틱 양장본)',
      title_i18n: {
        KO: '거장과 마рга리타 - 불 가코프 (러시아 문학 앤틱)',
        EN: 'The Master and Margarita - Mikhail Bulgakov',
        VI: 'Nghệ Sĩ Và Margarita - Mikhail Bulgakov',
        ZH: '大师与玛格丽特 - 布尔加科夫 (俄语名著精装)',
        RU: 'Мастер и Маргарита - М. А. Булгаков (Подарочное)'
      },
      author: 'Михаил Булгаков (미ха일 불가코프)',
      publisher: 'АСТ 출판사',
      isbn: '978-5-17118-320-2',
      kdc: '892',
      kdcName: '800 문학 / 슬라브소설',
      language: 'RU',
      age: 'ADULT',
      price: 35000,
      discountPrice: 31500,
      year: 2026,
      coverColor: '#0f172a',
      accentColor: '#ec4899',
      rating: 5.0,
      curationCategory: 'slavic',
      excerpt: {
        KO: '원고는 타지 않는다. 패트리아크 호수에서 일몰 무렵 이상한 두 신사가 나타났다.',
        EN: 'Manuscripts don’t burn. At the hour of the hot spring sunset two citizens appeared at the Patriarchs’ Ponds.',
        VI: 'Bản thảo không bao giờ cháy. Vào một buổi chiều tà, hai người đàn ông xuất hiện ở Hồ Patriarch.',
        ZH: '原稿是不会烧毁的。在一个温暖的黄昏，两位公民出现在总主教池塘。',
        RU: 'Рукописи не горят. В час жаркого весеннего заката на Патриарших прудах появились два гражданина.'
      }
    },
    {
      id: 'book-11',
      title: 'Red Scarf Girl - Ji-li Jiang (중국 다문화 청소년 자전 소설)',
      title_i18n: {
        KO: '붉은 스카프의 소녀 - 장지리 (중국 다문화 자전 소설)',
        EN: 'Red Scarf Girl: A Memoir of the Cultural Revolution',
        VI: 'Cô Gái Khăn Quàng Đỏ - Ji-li Jiang',
        ZH: '红领巾女孩 - 姜姬立 (中英双语自传体小说)',
        RU: 'Девочка в красном галстуке - Цзили Цзян'
      },
      author: 'Ji-li Jiang (장지리)',
      publisher: 'HarperCollins',
      isbn: '978-0-06446-208-2',
      kdc: '823',
      kdcName: '800 문학 / 청소년소설',
      language: 'ZH',
      age: 'YOUTH',
      price: 25000,
      discountPrice: 22500,
      year: 2025,
      coverColor: '#881337',
      accentColor: '#fda4af',
      rating: 4.7,
      curationCategory: 'asia',
      excerpt: {
        KO: '1966년 상하이에서 나는 12살이었고, 밝은 미래가 내 앞에 펼쳐져 있다고 믿었다.',
        EN: 'In 1966 Shanghai, I was twelve years old, and I believed that a bright future lay ahead of me.',
        VI: 'Năm 1966 tại Thượng Hải, tôi 12 tuổi và tin rằng tương lai tươi sáng đang chờ đón mình.',
        ZH: '1966年的上海，我只有12岁，坚信自己有着无比光明美好的未来。',
        RU: 'В 1966 году в Шанхае мне было двенадцать лет, и я верила, что впереди меня ждет светлое будущее.'
      }
    },
    {
      id: 'book-12',
      title: 'Charlotte\'s Web (샬롯의 거미줄 영미 아동 문학 명작)',
      title_i18n: {
        KO: '샬롯의 거미줄 (Charlotte\'s Web) 영미 아동 일러스트본',
        EN: 'Charlotte’s Web - E.B. White',
        VI: 'Mạng Nhện Của Charlotte - E.B. White',
        ZH: '夏洛的网 - E.B. 怀特 (英文插图版)',
        RU: 'Паутинка Шарлотты - Э. Б. Уайт'
      },
      author: 'E.B. White',
      publisher: 'HarperFestival',
      isbn: '978-0-06440-055-8',
      kdc: '843',
      kdcName: '800 문학 / 아동문학',
      language: 'EN',
      age: 'CHILDREN',
      price: 21000,
      discountPrice: 18900,
      year: 2026,
      coverColor: '#065f46',
      accentColor: '#34d399',
      rating: 4.9,
      curationCategory: 'global',
      excerpt: {
        KO: '아빠는 도끼를 들고 어디로 가시는 거예요? 펀이 엄마에게 물었다.',
        EN: '"Where’s Papa going with that axe?" said Fern to her mother as they were setting the table for breakfast.',
        VI: '"Bố cầm rìu đi đâu đấy hả mẹ?" Fern hỏi mẹ khi đang dọn bàn ăn sáng.',
        ZH: '“爸爸拿着斧头要到哪儿去？”芬在摆早餐桌子时问妈妈。',
        RU: '«Куда папа пошел с топором?» — спросила Ферн у матери, накрывая на стол к завтраку.'
      }
    }
  ];

  /* ==========================================================================
     3. APP STATE MANAGEMENT
     ========================================================================== */
  const state = {
    currentLang: 'KO',
    soundEnabled: true,
    cart: [
      { bookId: 'book-1', quantity: 2, checked: true },
      { bookId: 'book-3', quantity: 1, checked: true },
      { bookId: 'book-4', quantity: 3, checked: true }
    ],
    searchFilters: {
      keyword: '',
      lang: 'ALL',
      age: 'ALL',
      kdc: 'ALL',
      publisher: 'ALL'
    },
    activeDetailBook: BOOKS_CATALOG[0],
    detailQty: 1,
    roverScore: 0,
    activePage: 'home'
  };

  /* ==========================================================================
     4. WEB AUDIO SYNTHESIZER ENGINE (No external audio assets needed!)
     ========================================================================== */
  let audioCtx = null;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playBeepSound(freq = 600, duration = 0.08) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  function playLaserSound() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      // Laser synth pitch sweep down
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.25);
      
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
      console.warn('Laser sound error:', e);
    }
  }

  function playQuoteSound() {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
      freqs.forEach((f, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime + index * 0.08);
        gain.gain.setValueAtTime(0.2, ctx.currentTime + index * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + index * 0.08);
        osc.stop(ctx.currentTime + index * 0.08 + 0.5);
      });
    } catch (e) {}
  }

  /* ==========================================================================
     5. LASER BEAM VISUAL FX OVERLAY (Canvas-based)
     ========================================================================== */
  class LaserEffectManager {
    constructor() {
      this.canvas = document.getElementById('laser-effect-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.particles = [];
      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.animate();
    }

    resize() {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }

    triggerBeam(startX, startY, endX, endY, color = '#00f3ff') {
      // Add laser line and explosion particles
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 2;
        this.particles.push({
          x: endX,
          y: endY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1.0,
          color: Math.random() > 0.5 ? color : '#ff007f',
          size: Math.random() * 4 + 2
        });
      }
    }

    animate() {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.03;
        if (p.life <= 0) {
          this.particles.splice(i, 1);
          continue;
        }
        this.ctx.save();
        this.ctx.globalAlpha = p.life;
        this.ctx.fillStyle = p.color;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = p.color;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }
      requestAnimationFrame(() => this.animate());
    }
  }

  const laserFx = new LaserEffectManager();

  /* ==========================================================================
     6. THREE.JS BRUNO SIMON 3D LUNAR ROVER SIMULATION ENGINE
     ========================================================================== */
  class LunarRoverEngine {
    constructor() {
      this.container = document.getElementById('lunar-canvas-wrapper');
      this.canvas = document.getElementById('lunar-canvas');
      if (!this.container || !this.canvas) return;

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x04050a);
      this.scene.fog = new THREE.FogExp2(0x04050a, 0.015);

      this.camera = new THREE.PerspectiveCamera(55, this.container.clientWidth / this.container.clientHeight, 0.1, 500);
      this.camera.position.set(0, 8, 14);

      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.shadowMap.enabled = true;

      // Lights
      const ambientLight = new THREE.AmbientLight(0xdbeafe, 0.3);
      this.scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0x00f3ff, 1.2);
      dirLight.position.set(20, 40, 20);
      dirLight.castShadow = true;
      this.scene.add(dirLight);

      const moonGlowLight = new THREE.DirectionalLight(0x9d4edd, 0.6);
      moonGlowLight.position.set(-20, 30, -20);
      this.scene.add(moonGlowLight);

      // Controls State
      this.keys = { forward: false, backward: false, left: false, right: false };
      this.roverSpeed = 0;
      this.roverAngle = 0;
      this.collectibles = [];
      this.lasers = [];

      this.initTerrain();
      this.initRover();
      this.initCollectibles();
      this.initStarfield();
      this.setupControls();

      window.addEventListener('resize', () => this.onResize());
      this.animate();
    }

    initTerrain() {
      // Crater heightmap mesh
      const geo = new THREE.PlaneGeometry(160, 160, 80, 80);
      geo.rotateX(-Math.PI / 2);
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        // Simple crater noise simulation
        const distFromCenter = Math.sqrt(x*x + z*z);
        let y = Math.sin(x * 0.1) * Math.cos(z * 0.1) * 0.8;
        if (Math.abs(x - 15) < 10 && Math.abs(z - 15) < 10) {
          y -= 2.0 * (1 - Math.sqrt((x-15)*(x-15) + (z-15)*(z-15))/10);
        }
        if (Math.abs(x + 25) < 12 && Math.abs(z + 10) < 12) {
          y -= 2.5 * (1 - Math.sqrt((x+25)*(x+25) + (z+10)*(z+10))/12);
        }
        pos.setY(i, y);
      }
      geo.computeVertexNormals();

      const mat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.95,
        metalness: 0.1,
        flatShading: true
      });
      const terrain = new THREE.Mesh(geo, mat);
      terrain.receiveShadow = true;
      this.scene.add(terrain);

      // Grid line helper overlay for sci-fi look
      const grid = new THREE.GridHelper(160, 40, 0x00f3ff, 0x1e293b);
      grid.position.y = 0.05;
      this.scene.add(grid);
    }

    initRover() {
      this.roverGroup = new THREE.Group();

      // Main Chassis
      const bodyGeo = new THREE.BoxGeometry(2.2, 0.8, 3.2);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.8, roughness: 0.2 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 0.8;
      body.castShadow = true;
      this.roverGroup.add(body);

      // Gold Foil Trim
      const trimGeo = new THREE.BoxGeometry(2.3, 0.3, 1.5);
      const trimMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.1 });
      const trim = new THREE.Mesh(trimGeo, trimMat);
      trim.position.set(0, 1.1, 0.2);
      this.roverGroup.add(trim);

      // Solar Panel Wings
      const wingGeo = new THREE.BoxGeometry(3.6, 0.05, 1.2);
      const wingMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.9 });
      const wings = new THREE.Mesh(wingGeo, wingMat);
      wings.position.set(0, 1.25, -0.4);
      this.roverGroup.add(wings);

      // Laser Cannon Turret
      const turretGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.6, 16);
      const turretMat = new THREE.MeshStandardMaterial({ color: 0xff007f, metalness: 0.8 });
      this.turret = new THREE.Mesh(turretGeo, turretMat);
      this.turret.position.set(0, 1.4, 0.8);
      this.roverGroup.add(this.turret);

      const barrelGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.8, 8);
      barrelGeo.rotateX(Math.PI / 2);
      const barrelMat = new THREE.MeshStandardMaterial({ color: 0x00f3ff, emissive: 0x00f3ff, emissiveIntensity: 0.8 });
      const barrel = new THREE.Mesh(barrelGeo, barrelMat);
      barrel.position.set(0, 1.4, 1.2);
      this.roverGroup.add(barrel);

      // 6 Wheels
      this.wheels = [];
      const wheelGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.35, 16);
      wheelGeo.rotateZ(Math.PI / 2);
      const wheelMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });

      const wheelPositions = [
        [-1.3, 0.45, 1.1], [1.3, 0.45, 1.1],
        [-1.3, 0.45, 0.0], [1.3, 0.45, 0.0],
        [-1.3, 0.45, -1.1], [1.3, 0.45, -1.1]
      ];

      wheelPositions.forEach(pos => {
        const w = new THREE.Mesh(wheelGeo, wheelMat);
        w.position.set(...pos);
        w.castShadow = true;
        this.wheels.push(w);
        this.roverGroup.add(w);
      });

      this.scene.add(this.roverGroup);
    }

    initCollectibles() {
      // Create 6 glowing 3D book items on lunar surface
      const bookColors = [0x00f3ff, 0x9d4edd, 0xffd700, 0xff007f, 0x10b981, 0x3b82f6];
      const positions = [
        [8, 1, 10], [-12, 1, 8], [15, 1, -14],
        [-18, 1, -12], [4, 1, -22], [-6, 1, 20]
      ];

      positions.forEach((pos, idx) => {
        const group = new THREE.Group();
        const bookGeo = new THREE.BoxGeometry(1.2, 1.6, 0.3);
        const bookMat = new THREE.MeshStandardMaterial({
          color: bookColors[idx],
          emissive: bookColors[idx],
          emissiveIntensity: 0.6,
          metalness: 0.5,
          roughness: 0.2
        });
        const book = new THREE.Mesh(bookGeo, bookMat);
        group.add(book);

        // Ring aura
        const ringGeo = new THREE.RingGeometry(1.0, 1.2, 32);
        ringGeo.rotateX(-Math.PI / 2);
        const ringMat = new THREE.MeshBasicMaterial({ color: bookColors[idx], side: THREE.DoubleSide });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.y = -0.7;
        group.add(ring);

        group.position.set(...pos);
        group.userData = { id: idx, bookData: BOOKS_CATALOG[idx % BOOKS_CATALOG.length], collected: false };

        this.scene.add(group);
        this.collectibles.push(group);
      });
    }

    initStarfield() {
      const starGeo = new THREE.BufferGeometry();
      const count = 1200;
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i += 3) {
        pos[i] = (Math.random() - 0.5) * 300;
        pos[i+1] = Math.random() * 150 + 10;
        pos[i+2] = (Math.random() - 0.5) * 300;
      }
      starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.8, transparent: true, opacity: 0.8 });
      const stars = new THREE.Points(starGeo, starMat);
      this.scene.add(stars);
    }

    setupControls() {
      window.addEventListener('keydown', (e) => {
        if (state.activePage !== 'home') return;
        if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') this.keys.forward = true;
        if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') this.keys.backward = true;
        if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') this.keys.left = true;
        if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') this.keys.right = true;
        if (e.code === 'Space') {
          e.preventDefault();
          this.fireLaser();
        }
      });

      window.addEventListener('keyup', (e) => {
        if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') this.keys.forward = false;
        if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') this.keys.backward = false;
        if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') this.keys.left = false;
        if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') this.keys.right = false;
      });

      // Mobile Touch D-Pad
      const bindTouch = (id, key) => {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.addEventListener('touchstart', (e) => { e.preventDefault(); this.keys[key] = true; });
        btn.addEventListener('touchend', (e) => { e.preventDefault(); this.keys[key] = false; });
        btn.addEventListener('mousedown', () => { this.keys[key] = true; });
        btn.addEventListener('mouseup', () => { this.keys[key] = false; });
      };

      bindTouch('dpad-up', 'forward');
      bindTouch('dpad-down', 'backward');
      bindTouch('dpad-left', 'left');
      bindTouch('dpad-right', 'right');

      const fireBtn = document.getElementById('btn-rover-laser');
      if (fireBtn) fireBtn.addEventListener('click', () => this.fireLaser());
      const dpadFire = document.getElementById('dpad-fire');
      if (dpadFire) dpadFire.addEventListener('click', () => this.fireLaser());

      const resetBtn = document.getElementById('btn-rover-reset');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.roverGroup.position.set(0, 0, 0);
          this.roverAngle = 0;
          this.roverSpeed = 0;
          playBeepSound(400);
        });
      }
    }

    fireLaser() {
      playLaserSound();
      const laserGeo = new THREE.CylinderGeometry(0.08, 0.08, 3, 8);
      laserGeo.rotateX(Math.PI / 2);
      const laserMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
      const laser = new THREE.Mesh(laserGeo, laserMat);

      const roverPos = this.roverGroup.position.clone();
      laser.position.set(roverPos.x, roverPos.y + 1.4, roverPos.z);
      laser.rotation.y = this.roverAngle;

      this.scene.add(laser);
      this.lasers.push({ mesh: laser, angle: this.roverAngle, life: 40 });

      // Laser canvas overlay effect
      const screenPos = this.toScreenPosition(roverPos);
      laserFx.triggerBeam(screenPos.x, screenPos.y, screenPos.x + Math.sin(this.roverAngle)*150, screenPos.y - Math.cos(this.roverAngle)*150);
    }

    toScreenPosition(pos) {
      const vector = pos.clone().project(this.camera);
      return {
        x: (vector.x * 0.5 + 0.5) * window.innerWidth,
        y: (-(vector.y * 0.5) + 0.5) * window.innerHeight
      };
    }

    updatePhysics() {
      // Acceleration & Steering
      if (this.keys.forward) this.roverSpeed = Math.min(this.roverSpeed + 0.015, 0.25);
      else if (this.keys.backward) this.roverSpeed = Math.max(this.roverSpeed - 0.015, -0.12);
      else this.roverSpeed *= 0.94; // Friction

      if (Math.abs(this.roverSpeed) > 0.005) {
        const turnDir = this.roverSpeed > 0 ? 1 : -1;
        if (this.keys.left) this.roverAngle += 0.035 * turnDir;
        if (this.keys.right) this.roverAngle -= 0.035 * turnDir;
      }

      this.roverGroup.rotation.y = this.roverAngle;
      this.roverGroup.position.x += Math.sin(this.roverAngle) * this.roverSpeed;
      this.roverGroup.position.z += Math.cos(this.roverAngle) * this.roverSpeed;

      // Rotate wheels
      this.wheels.forEach(w => w.rotation.x += this.roverSpeed * 2);

      // Camera Smooth Follow
      const camOffset = new THREE.Vector3(
        -Math.sin(this.roverAngle) * 9,
        5,
        -Math.cos(this.roverAngle) * 9
      );
      const targetCamPos = this.roverGroup.position.clone().add(camOffset);
      this.camera.position.lerp(targetCamPos, 0.08);
      this.camera.lookAt(this.roverGroup.position.clone().add(new THREE.Vector3(0, 1.2, 0)));

      // Collectible Collision Detection
      this.collectibles.forEach(c => {
        if (c.userData.collected) return;
        c.rotation.y += 0.02;
        const dist = this.roverGroup.position.distanceTo(c.position);
        if (dist < 2.2) {
          c.userData.collected = true;
          c.visible = false;
          state.roverScore++;
          playBeepSound(880, 0.2);
          showToast(`🚀 [달 표면 캡슐 수집!] ${c.userData.bookData.title}`, 'success');
          
          // Telemetry Update
          const scoreEl = document.getElementById('rover-score-val');
          if (scoreEl) scoreEl.textContent = `${state.roverScore} / 6 권`;
        }
      });

      // Update Lasers
      for (let i = this.lasers.length - 1; i >= 0; i--) {
        const l = this.lasers[i];
        l.mesh.position.x += Math.sin(l.angle) * 0.8;
        l.mesh.position.z += Math.cos(l.angle) * 0.8;
        l.life--;
        if (l.life <= 0) {
          this.scene.remove(l.mesh);
          this.lasers.splice(i, 1);
        }
      }

      // Update Telemetry Display
      const spdEl = document.getElementById('rover-speed-val');
      const posEl = document.getElementById('rover-pos-val');
      if (spdEl) spdEl.textContent = `${(Math.abs(this.roverSpeed) * 120).toFixed(1)} km/h`;
      if (posEl) posEl.textContent = `X: ${this.roverGroup.position.x.toFixed(1)} | Z: ${this.roverGroup.position.z.toFixed(1)}`;
    }

    onResize() {
      if (!this.container || !this.renderer) return;
      this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate() {
      requestAnimationFrame(() => this.animate());
      if (state.activePage === 'home') {
        this.updatePhysics();
        this.renderer.render(this.scene, this.camera);
      }
    }
  }

  /* ==========================================================================
     7. THREE.JS 3D PLANETARY ORBIT EXHIBITION ENGINE
     ========================================================================== */
  class OrbitEngine {
    constructor() {
      this.container = document.getElementById('orbit-canvas-wrapper');
      this.canvas = document.getElementById('orbit-canvas');
      if (!this.container || !this.canvas) return;

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(50, this.container.clientWidth / this.container.clientHeight, 0.1, 100);
      this.camera.position.set(0, 10, 22);
      this.camera.lookAt(0, 0, 0);

      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

      const ambLight = new THREE.AmbientLight(0xffffff, 0.6);
      this.scene.add(ambLight);

      const pointLight = new THREE.PointLight(0x00f3ff, 2, 50);
      pointLight.position.set(0, 0, 0);
      this.scene.add(pointLight);

      // Central Galaxy Sun Core
      const sunGeo = new THREE.SphereGeometry(2.5, 32, 32);
      const sunMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, wireframe: true });
      this.sun = new THREE.Mesh(sunGeo, sunMat);
      this.scene.add(this.sun);

      // Orbit Planets
      this.planets = [];
      const planetData = [
        { name: 'asia', color: 0x00f3ff, radius: 6, speed: 0.015, size: 1.1 },
        { name: 'slavic', color: 0x9d4edd, radius: 9.5, speed: 0.01, size: 1.3 },
        { name: 'global', color: 0xffd700, radius: 13, speed: 0.007, size: 1.0 }
      ];

      planetData.forEach(pd => {
        const pGroup = new THREE.Group();
        const pGeo = new THREE.SphereGeometry(pd.size, 32, 32);
        const pMat = new THREE.MeshStandardMaterial({ color: pd.color, roughness: 0.3, metalness: 0.8 });
        const mesh = new THREE.Mesh(pGeo, pMat);
        pGroup.add(mesh);

        // Ring
        const ringGeo = new THREE.RingGeometry(pd.size * 1.3, pd.size * 1.8, 32);
        ringGeo.rotateX(Math.PI / 3);
        const ringMat = new THREE.MeshBasicMaterial({ color: pd.color, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        pGroup.add(ring);

        // Orbit Line
        const orbitLineGeo = new THREE.RingGeometry(pd.radius - 0.05, pd.radius + 0.05, 64);
        orbitLineGeo.rotateX(Math.PI / 2);
        const orbitLineMat = new THREE.MeshBasicMaterial({ color: pd.color, transparent: true, opacity: 0.25, side: THREE.DoubleSide });
        const orbitLine = new THREE.Mesh(orbitLineGeo, orbitLineMat);
        this.scene.add(orbitLine);

        pGroup.userData = { ...pd, angle: Math.random() * Math.PI * 2 };
        this.scene.add(pGroup);
        this.planets.push(pGroup);
      });

      this.animate();
    }

    animate() {
      requestAnimationFrame(() => this.animate());
      if (state.activePage === 'home') {
        this.sun.rotation.y += 0.005;
        this.planets.forEach(p => {
          p.userData.angle += p.userData.speed;
          p.position.x = Math.cos(p.userData.angle) * p.userData.radius;
          p.position.z = Math.sin(p.userData.angle) * p.userData.radius;
          p.children[0].rotation.y += 0.02;
        });
        this.renderer.render(this.scene, this.camera);
      }
    }
  }

  /* ==========================================================================
     8. THREE.JS 360° GLOWING BOOK PREVIEW ENGINE (For #detail)
     ========================================================================== */
  class DetailBook3DEngine {
    constructor() {
      this.container = document.getElementById('detail-3d-canvas-container');
      this.canvas = document.getElementById('detail-3d-canvas');
      if (!this.container || !this.canvas) return;

      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(45, this.container.clientWidth / this.container.clientHeight, 0.1, 100);
      this.camera.position.set(0, 0, 7);

      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);

      const ambLight = new THREE.AmbientLight(0xffffff, 0.8);
      this.scene.add(ambLight);

      const dirLight = new THREE.DirectionalLight(0x00f3ff, 1.2);
      dirLight.position.set(5, 5, 5);
      this.scene.add(dirLight);

      this.autoRotate = true;
      this.isDragging = false;
      this.previousMousePosition = { x: 0, y: 0 };

      this.initBookMesh();
      this.setupMouseEvents();
      this.animate();
    }

    initBookMesh() {
      this.bookGroup = new THREE.Group();

      // Main Book Mesh
      const bookGeo = new THREE.BoxGeometry(2.4, 3.2, 0.5);
      const materials = [
        new THREE.MeshStandardMaterial({ color: 0x00f3ff }), // Right pages edge
        new THREE.MeshStandardMaterial({ color: 0x1d3326 }), // Left spine
        new THREE.MeshStandardMaterial({ color: 0xffffff }), // Top pages
        new THREE.MeshStandardMaterial({ color: 0xffffff }), // Bottom pages
        new THREE.MeshStandardMaterial({ color: 0x1d3326, roughness: 0.3 }), // Front cover
        new THREE.MeshStandardMaterial({ color: 0x1d3326, roughness: 0.3 })  // Back cover
      ];
      this.bookMesh = new THREE.Mesh(bookGeo, materials);
      this.bookGroup.add(this.bookMesh);

      // Glowing outline frame
      const wireGeo = new THREE.BoxGeometry(2.45, 3.25, 0.55);
      const wireMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, wireframe: true });
      this.wireframe = new THREE.Mesh(wireGeo, wireMat);
      this.bookGroup.add(this.wireframe);

      // Laser Scan Beam Line (Hidden initially)
      const scanGeo = new THREE.PlaneGeometry(2.8, 0.08);
      const scanMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, side: THREE.DoubleSide, transparent: true, opacity: 0 });
      this.scanBeam = new THREE.Mesh(scanGeo, scanMat);
      this.scanBeam.position.z = 0.3;
      this.bookGroup.add(this.scanBeam);

      this.scene.add(this.bookGroup);
    }

    updateBookColor(colorHex) {
      if (!this.bookMesh) return;
      const mat = this.bookMesh.material;
      mat[1].color.setHex(colorHex);
      mat[4].color.setHex(colorHex);
      mat[5].color.setHex(colorHex);
    }

    triggerLaserScan() {
      playLaserSound();
      this.scanBeam.material.opacity = 1.0;
      this.scanBeam.position.y = 1.6;
      let step = 0;
      const scanInterval = setInterval(() => {
        this.scanBeam.position.y -= 0.08;
        step++;
        if (step > 40) {
          clearInterval(scanInterval);
          this.scanBeam.material.opacity = 0;
          showToast('⚡ [서지 스캔 완료] ISBN 및 KDC 서지 정밀 검증 성공!', 'info');
        }
      }, 30);
    }

    setupMouseEvents() {
      this.canvas.addEventListener('mousedown', (e) => {
        this.isDragging = true;
        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      });

      this.canvas.addEventListener('mousemove', (e) => {
        if (!this.isDragging) return;
        const deltaX = e.clientX - this.previousMousePosition.x;
        const deltaY = e.clientY - this.previousMousePosition.y;

        this.bookGroup.rotation.y += deltaX * 0.01;
        this.bookGroup.rotation.x += deltaY * 0.01;

        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener('mouseup', () => { this.isDragging = false; });

      const toggleBtn = document.getElementById('btn-3d-rotate-toggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          this.autoRotate = !this.autoRotate;
          const lbl = document.getElementById('lbl-auto-rotate');
          if (lbl) lbl.textContent = this.autoRotate ? '자동 회전 정지' : '자동 회전 시작';
          playBeepSound(500);
        });
      }

      const scanBtn = document.getElementById('btn-3d-laser-scan');
      if (scanBtn) {
        scanBtn.addEventListener('click', () => this.triggerLaserScan());
      }
    }

    animate() {
      requestAnimationFrame(() => this.animate());
      if (state.activePage === 'detail') {
        if (this.autoRotate && !this.isDragging) {
          this.bookGroup.rotation.y += 0.01;
        }
        this.renderer.render(this.scene, this.camera);
      }
    }
  }

  let lunarRoverEngine = null;
  let orbitEngine = null;
  let detailBookEngine = null;

  /* ==========================================================================
     9. UI RENDERING & I18N UPDATES
     ========================================================================== */
  function updateI18nTexts() {
    const dict = TRANSLATIONS[state.currentLang] || TRANSLATIONS.KO;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.placeholder = dict[key];
    });

    // Re-render catalog cards with selected language titles
    renderBooksGrid();
    renderCurationPackages();
    renderCartTable();
    if (state.activeDetailBook) renderDetailView(state.activeDetailBook);
  }

  function getBookTitle(book) {
    if (book.title_i18n && book.title_i18n[state.currentLang]) {
      return book.title_i18n[state.currentLang];
    }
    return book.title;
  }

  function getBookExcerpt(book) {
    if (book.excerpt && book.excerpt[state.currentLang]) {
      return book.excerpt[state.currentLang];
    }
    return book.excerpt ? book.excerpt.KO : '';
  }

  /* Render Book Card HTML */
  function createBookCardHTML(book) {
    const title = getBookTitle(book);
    const regularPriceFormatted = book.price.toLocaleString('ko-KR') + '원';
    const discountPriceFormatted = book.discountPrice.toLocaleString('ko-KR') + '원';

    return `
      <div class="book-card" data-id="${book.id}">
        <div class="book-cover-wrapper" style="background: radial-gradient(circle, ${book.coverColor} 0%, #000 100%);">
          <span class="cover-lang-badge">${book.language}</span>
          <div class="book-cover-3d-sim" style="background-color: ${book.coverColor}; border-color: ${book.accentColor};">
            <div class="book-cover-title">${title}</div>
            <div class="book-cover-author">${book.author}</div>
          </div>
        </div>
        <div class="book-info-body">
          <div class="book-meta-tags">
            <span class="tag-badge tag-kdc">KDC ${book.kdc}</span>
            <span class="tag-badge tag-age">${book.age}</span>
            <span class="tag-badge">${book.publisher}</span>
          </div>
          <h3 class="book-card-title">${title}</h3>
          <p class="book-card-author">${book.author}</p>
          <div class="book-card-price-row">
            <span class="regular-price">${regularPriceFormatted}</span>
            <span class="discount-price">${discountPriceFormatted}</span>
          </div>
          <div class="book-card-actions">
            <button class="btn-sm btn-outline btn-card-detail" data-id="${book.id}" data-i18n="btnViewDetail">3D 상세 보기</button>
            <button class="btn-sm btn-primary btn-card-add-cart" data-id="${book.id}" data-i18n="btnAddCart">장바구니 담기</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderBooksGrid() {
    // Home New Releases (Max 6)
    const homeGrid = document.getElementById('home-books-grid');
    if (homeGrid) {
      homeGrid.innerHTML = BOOKS_CATALOG.slice(0, 6).map(b => createBookCardHTML(b)).join('');
    }

    // Search Results Grid
    const searchGrid = document.getElementById('search-books-grid');
    if (searchGrid) {
      const filtered = BOOKS_CATALOG.filter(b => {
        const kw = state.searchFilters.keyword.toLowerCase();
        const matchesKw = !kw || 
          b.title.toLowerCase().includes(kw) || 
          b.author.toLowerCase().includes(kw) || 
          b.isbn.includes(kw) || 
          b.kdc.includes(kw) ||
          b.publisher.toLowerCase().includes(kw);

        const matchesLang = state.searchFilters.lang === 'ALL' || b.language === state.searchFilters.lang;
        const matchesAge = state.searchFilters.age === 'ALL' || b.age === state.searchFilters.age;
        const matchesKDC = state.searchFilters.kdc === 'ALL' || b.kdc.startsWith(state.searchFilters.kdc.substring(0, 1));
        const matchesPublisher = state.searchFilters.publisher === 'ALL' || b.publisher === state.searchFilters.publisher;

        return matchesKw && matchesLang && matchesAge && matchesKDC && matchesPublisher;
      });

      searchGrid.innerHTML = filtered.map(b => createBookCardHTML(b)).join('');

      const countNum = document.getElementById('search-count-num');
      if (countNum) countNum.textContent = filtered.length;
    }

    bindBookCardEvents();
  }

  function bindBookCardEvents() {
    document.querySelectorAll('.btn-card-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const book = BOOKS_CATALOG.find(b => b.id === id);
        if (book) {
          state.activeDetailBook = book;
          location.hash = '#detail';
          renderDetailView(book);
        }
      });
    });

    document.querySelectorAll('.btn-card-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        addToCart(id, 1);
      });
    });
  }

  /* Curation Packages Render */
  function renderCurationPackages() {
    const container = document.getElementById('curation-packages-container');
    if (!container) return;

    const packages = [
      {
        id: 'pkg-1',
        tag: '🇻🇳 베트남 다문화 미래 동화 패키지',
        title: '베트남 원서 & 이중언어 아동 동화 수서 5종 세트',
        desc: '키우전 이중언어 양장본, 귀뚜라미의 모험, 미래 다문화 동화 등 베트남 다문화 아동 및 청소년용 맞춤 도서 패키지',
        bookIds: ['book-1', 'book-5', 'book-9']
      },
      {
        id: 'pkg-2',
        tag: '🇨🇳 중국 고전 & 현대 수서 에디션',
        title: '중국 문학 성좌 4종 세트 (삼국지, 서유기, 붉은 스카프의 소녀)',
        desc: '동양 고전 명작 완역본 및 청소년용 자전 소설 컬렉션',
        bookIds: ['book-2', 'book-6', 'book-11']
      },
      {
        id: 'pkg-3',
        tag: '🇷🇺 슬라브 & 러시아 문학 성좌 패키지',
        title: '러시아 유라시아 문학 대작 4종 패키지',
        desc: '푸시킨, 불 가코프 등 슬라브 문화권 거장 명작 시리즈',
        bookIds: ['book-3', 'book-7', 'book-10']
      },
      {
        id: 'pkg-4',
        tag: '🇺🇸 영미권 아동 문학 은하 패키지',
        title: '글로벌 영미권 명작 아동 동화 세트',
        desc: '어린 왕자, 해리 포터, 샬롯의 거미줄 등 세계 아동 문학 컬렉션',
        bookIds: ['book-4', 'book-8', 'book-12']
      }
    ];

    container.innerHTML = packages.map(pkg => {
      const pkgBooks = BOOKS_CATALOG.filter(b => pkg.bookIds.includes(b.id));
      const totalDisc = pkgBooks.reduce((sum, b) => sum + b.discountPrice, 0);

      return `
        <div class="curation-package-card">
          <div class="package-header">
            <div class="package-title-group">
              <span class="package-tag">${pkg.tag}</span>
              <h2>${pkg.title}</h2>
              <p class="section-desc">${pkg.desc}</p>
            </div>
          </div>
          <div class="package-items-grid">
            ${pkgBooks.map(b => `
              <div class="package-book-item">
                <div class="package-book-mini-cover" style="background-color: ${b.coverColor};"></div>
                <div class="package-book-info">
                  <h4>${getBookTitle(b)}</h4>
                  <p>${b.author} | KDC ${b.kdc}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="package-footer-bar">
            <div class="package-price-info">
              <span>패키지 특별 납품가:</span>
              <span class="package-total-price">${totalDisc.toLocaleString('ko-KR')}원</span>
            </div>
            <button class="btn-primary btn-pkg-add-cart" data-pkg-id="${pkg.id}" data-books='${JSON.stringify(pkg.bookIds)}'>
              <i data-lucide="shopping-bag"></i> 1-Click 패키지 전체 담기
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Re-initialize lucide icons inside innerHTML
    if (window.lucide) window.lucide.createIcons();

    document.querySelectorAll('.btn-pkg-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const bookIds = JSON.parse(e.currentTarget.getAttribute('data-books'));
        bookIds.forEach(id => addToCart(id, 1, false));
        showToast('🛒 [패키지 담기 완료] 큐레이션 패키지가 장바구니에 추가되었습니다!', 'success');
        updateCartBadge();
        playBeepSound(800);
      });
    });
  }

  /* Render Detail View */
  function renderDetailView(book) {
    if (!book) return;
    state.activeDetailBook = book;

    const titleEl = document.getElementById('detail-title');
    const authorEl = document.getElementById('detail-author');
    const regPriceEl = document.getElementById('detail-regular-price');
    const discPriceEl = document.getElementById('detail-discount-price');
    const excerptEl = document.getElementById('detail-excerpt');
    const isbnEl = document.getElementById('detail-isbn');
    const kdcEl = document.getElementById('detail-kdc');
    const pubEl = document.getElementById('detail-publisher');
    const yearEl = document.getElementById('detail-year');
    const ageEl = document.getElementById('detail-age');
    const langEl = document.getElementById('detail-lang');
    const kdcBadge = document.getElementById('detail-kdc-badge');

    if (titleEl) titleEl.textContent = getBookTitle(book);
    if (authorEl) authorEl.textContent = book.author;
    if (regPriceEl) regPriceEl.textContent = book.price.toLocaleString('ko-KR') + '원';
    if (discPriceEl) discPriceEl.textContent = book.discountPrice.toLocaleString('ko-KR') + '원';
    if (excerptEl) excerptEl.textContent = `"${getBookExcerpt(book)}"`;
    if (isbnEl) isbnEl.textContent = book.isbn;
    if (kdcEl) kdcEl.textContent = `${book.kdc} (${book.kdcName})`;
    if (pubEl) pubEl.textContent = book.publisher;
    if (yearEl) yearEl.textContent = `${book.year}년 발행`;
    if (ageEl) ageEl.textContent = book.age;
    if (langEl) langEl.textContent = book.language;
    if (kdcBadge) kdcBadge.textContent = `KDC ${book.kdc} | ${book.kdcName}`;

    // Update 3D Book Color
    if (detailBookEngine && book.coverColor) {
      const colorHex = parseInt(book.coverColor.replace('#', '0x'), 16);
      detailBookEngine.updateBookColor(colorHex);
    }
  }

  /* Cart Operations & Rendering */
  function addToCart(bookId, qty = 1, notify = true) {
    const existing = state.cart.find(item => item.bookId === bookId);
    if (existing) {
      existing.quantity += qty;
    } else {
      state.cart.push({ bookId, quantity: qty, checked: true });
    }
    updateCartBadge();
    playBeepSound(700);
    if (notify) {
      const book = BOOKS_CATALOG.find(b => b.id === bookId);
      showToast(`🛒 [견적함 추가] ${book ? getBookTitle(book) : ''}`, 'success');
    }
  }

  function updateCartBadge() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const navBadge = document.getElementById('nav-cart-badge');
    const headerBadge = document.getElementById('header-cart-count');
    if (navBadge) navBadge.textContent = totalCount;
    if (headerBadge) headerBadge.textContent = totalCount;
  }

  function renderCartTable() {
    const tbody = document.getElementById('cart-table-body');
    const emptyMsg = document.getElementById('cart-empty-message');
    if (!tbody) return;

    if (state.cart.length === 0) {
      tbody.innerHTML = '';
      if (emptyMsg) emptyMsg.classList.remove('hidden');
      updateCartSummary();
      return;
    } else {
      if (emptyMsg) emptyMsg.classList.add('hidden');
    }

    tbody.innerHTML = state.cart.map(item => {
      const book = BOOKS_CATALOG.find(b => b.id === item.bookId);
      if (!book) return '';

      const title = getBookTitle(book);
      const subtotal = book.discountPrice * item.quantity;

      return `
        <tr>
          <td><input type="checkbox" class="cart-row-check" data-id="${book.id}" ${item.checked ? 'checked' : ''}></td>
          <td><div class="cart-mini-cover" style="background-color: ${book.coverColor};"></div></td>
          <td>
            <div class="cart-book-title">${title}</div>
            <div class="cart-book-meta">ISBN: ${book.isbn} | KDC ${book.kdc} | 언어: ${book.language}</div>
          </td>
          <td>${book.price.toLocaleString('ko-KR')}원</td>
          <td><strong class="text-cyan">${book.discountPrice.toLocaleString('ko-KR')}원</strong></td>
          <td>
            <div class="qty-control">
              <button class="qty-btn-sm cart-qty-minus" data-id="${book.id}">-</button>
              <input type="number" class="qty-input-sm cart-qty-val" data-id="${book.id}" value="${item.quantity}" min="1">
              <button class="qty-btn-sm cart-qty-plus" data-id="${book.id}">+</button>
            </div>
          </td>
          <td><strong class="text-gold">${subtotal.toLocaleString('ko-KR')}원</strong></td>
          <td><button class="btn-sm btn-ghost text-red cart-row-delete" data-id="${book.id}"><i data-lucide="trash"></i></button></td>
        </tr>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
    bindCartEvents();
    updateCartSummary();
  }

  function bindCartEvents() {
    document.querySelectorAll('.cart-row-check').forEach(input => {
      input.addEventListener('change', (e) => {
        const id = e.target.getAttribute('data-id');
        const item = state.cart.find(i => i.bookId === id);
        if (item) item.checked = e.target.checked;
        updateCartSummary();
      });
    });

    document.querySelectorAll('.cart-qty-minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const item = state.cart.find(i => i.bookId === id);
        if (item && item.quantity > 1) {
          item.quantity--;
          renderCartTable();
        }
      });
    });

    document.querySelectorAll('.cart-qty-plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const item = state.cart.find(i => i.bookId === id);
        if (item) {
          item.quantity++;
          renderCartTable();
        }
      });
    });

    document.querySelectorAll('.cart-row-delete').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        state.cart = state.cart.filter(i => i.bookId !== id);
        renderCartTable();
        updateCartBadge();
      });
    });
  }

  function updateCartSummary() {
    const checkedItems = state.cart.filter(i => i.checked);
    const totalTitles = checkedItems.length;
    const totalCopies = checkedItems.reduce((sum, i) => sum + i.quantity, 0);

    let totalReg = 0;
    let totalDisc = 0;

    checkedItems.forEach(item => {
      const book = BOOKS_CATALOG.find(b => b.id === item.bookId);
      if (book) {
        totalReg += book.price * item.quantity;
        totalDisc += book.discountPrice * item.quantity;
      }
    });

    const statTitles = document.getElementById('cart-stat-titles');
    const statCopies = document.getElementById('cart-stat-copies');
    const statReg = document.getElementById('cart-stat-regular');
    const statDisc = document.getElementById('cart-stat-discount');

    if (statTitles) statTitles.textContent = `${totalTitles}종`;
    if (statCopies) statCopies.textContent = `${totalCopies}권`;
    if (statReg) statReg.textContent = `${totalReg.toLocaleString('ko-KR')}원`;
    if (statDisc) statDisc.textContent = `${totalDisc.toLocaleString('ko-KR')}원`;
  }

  /* ==========================================================================
     10. OFFICIAL B2B PDF & EXCEL QUOTE GENERATOR
     ========================================================================== */
  function generatePDFQuote() {
    const checkedItems = state.cart.filter(i => i.checked);
    if (checkedItems.length === 0) {
      showToast('⚠️ [견적 생성 불가] 견적함에서 1개 이상의 도서를 선택하세요.', 'error');
      return;
    }

    playQuoteSound();

    const instName = document.getElementById('inst-name')?.value || '국립다문화도서관';
    const librarian = document.getElementById('inst-librarian')?.value || '김수서 사서';
    const contact = document.getElementById('inst-contact')?.value || '02-555-0199';

    if (window.jspdf && window.jspdf.jsPDF) {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      // Official Invoice Header
      doc.setFontSize(20);
      doc.text('도 서 구 입 수 서 공 문 견 적 서', 105, 20, { align: 'center' });

      doc.setFontSize(10);
      doc.text(`발행일자: ${new Date().toLocaleDateString('ko-KR')}`, 15, 32);
      doc.text(`문서번호: GALAXY-2026-${Math.floor(1000 + Math.random()*9000)}`, 15, 38);

      doc.line(15, 42, 195, 42);

      // Customer Info Box
      doc.setFontSize(11);
      doc.text(`수신 기관명: ${instName}`, 15, 50);
      doc.text(`수서 담당자: ${librarian} (연락처: ${contact})`, 15, 57);
      doc.text(`공급자: 다문화도서관 수서 몰 (사업자번호: 124-81-09876)`, 110, 50);

      doc.line(15, 63, 195, 63);

      // Table Header
      let y = 72;
      doc.setFontSize(10);
      doc.text('NO', 15, y);
      doc.text('도서명 (Title)', 30, y);
      doc.text('출판사', 110, y);
      doc.text('정가', 145, y);
      doc.text('수량', 170, y);
      doc.text('납품금액', 185, y);

      doc.line(15, y + 3, 195, y + 3);

      let totalSum = 0;
      checkedItems.forEach((item, index) => {
        const book = BOOKS_CATALOG.find(b => b.id === item.bookId);
        if (!book) return;
        y += 8;
        const sub = book.discountPrice * item.quantity;
        totalSum += sub;

        doc.text(`${index + 1}`, 15, y);
        doc.text(book.title.substring(0, 26), 30, y);
        doc.text(book.publisher.substring(0, 12), 110, y);
        doc.text(`${book.price.toLocaleString()}`, 145, y);
        doc.text(`${item.quantity}`, 172, y);
        doc.text(`${sub.toLocaleString()}`, 185, y);
      });

      doc.line(15, y + 5, 195, y + 5);

      // Grand Total
      y += 15;
      doc.setFontSize(13);
      doc.text(`총 납품 합계금액 (VAT 포함): ${totalSum.toLocaleString()} 원`, 15, y);

      // Official Stamp Circle Simulation
      doc.setDrawColor(220, 38, 38);
      doc.setLineWidth(1);
      doc.circle(165, y - 5, 12);
      doc.setFontSize(8);
      doc.setTextColor(220, 38, 38);
      doc.text('수서공급원', 165, y - 6, { align: 'center' });
      doc.text('직인생략', 165, y - 1, { align: 'center' });

      doc.save(`다문화도서관_공문견적서_${instName}.pdf`);
      showToast('📄 [PDF 생성 완료] 1-Click 공식 공문 견적서가 다운로드 되었습니다!', 'success');
    } else {
      window.print();
    }
  }

  function exportExcelSpec() {
    const checkedItems = state.cart.filter(i => i.checked);
    if (checkedItems.length === 0) {
      showToast('⚠️ [엑셀 내보내기 불가] 선택된 도서가 없습니다.', 'error');
      return;
    }

    if (window.XLSX) {
      const data = checkedItems.map((item, index) => {
        const book = BOOKS_CATALOG.find(b => b.id === item.bookId);
        return {
          '순번': index + 1,
          '도서명': getBookTitle(book),
          '저자': book.author,
          '출판사': book.publisher,
          'ISBN': book.isbn,
          'KDC분류': book.kdc,
          '언어': book.language,
          '정가(원)': book.price,
          '납품가(원)': book.discountPrice,
          '수량': item.quantity,
          '합계금액(원)': book.discountPrice * item.quantity
        };
      });

      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, '도서수서사양서');
      XLSX.writeFile(workbook, '다문화도서관_수서_도서사양서.xlsx');

      showToast('📊 [Excel 다운로드] 엑셀 수서 사양서가 다운로드 되었습니다.', 'success');
      playBeepSound(650);
    }
  }

  /* ==========================================================================
     11. TOAST NOTIFICATION SYSTEM
     ========================================================================== */
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  /* ==========================================================================
     12. INITIALIZATION & ROUTER BINDINGS
     ========================================================================== */
  function handleHashRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    state.activePage = hash;

    document.querySelectorAll('.page-view').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(`page-${hash}`);
    if (targetPage) targetPage.classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-page') === hash) link.classList.add('active');
      else link.classList.remove('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger Three.js resize updates
    if (hash === 'home' && lunarRoverEngine) lunarRoverEngine.onResize();
    if (hash === 'cart') renderCartTable();
    if (hash === 'curation') renderCurationPackages();
  }

  function initApp() {
    // 1. Language Selector
    const langSelect = document.getElementById('language-switcher');
    if (langSelect) {
      langSelect.value = state.currentLang;
      langSelect.addEventListener('change', (e) => {
        state.currentLang = e.target.value;
        updateI18nTexts();
        playBeepSound(500);
      });
    }

    // 2. Sound FX Toggle
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        document.getElementById('sound-icon-on').classList.toggle('hidden', !state.soundEnabled);
        document.getElementById('sound-icon-off').classList.toggle('hidden', state.soundEnabled);
        showToast(state.soundEnabled ? '🔊 사운드 이펙트 ON' : '🔇 사운드 이펙트 OFF', 'info');
      });
    }

    // 3. Search Filters Binding
    const searchKw = document.getElementById('search-keyword');
    const filterLang = document.getElementById('filter-lang');
    const filterAge = document.getElementById('filter-age');
    const filterKDC = document.getElementById('filter-kdc');
    const filterPub = document.getElementById('filter-publisher');

    // Populate Publishers Filter options
    if (filterPub) {
      const pubs = Array.from(new Set(BOOKS_CATALOG.map(b => b.publisher)));
      pubs.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p;
        opt.textContent = p;
        filterPub.appendChild(opt);
      });
    }

    const onFilterChange = () => {
      state.searchFilters.keyword = searchKw ? searchKw.value.trim() : '';
      state.searchFilters.lang = filterLang ? filterLang.value : 'ALL';
      state.searchFilters.age = filterAge ? filterAge.value : 'ALL';
      state.searchFilters.kdc = filterKDC ? filterKDC.value : 'ALL';
      state.searchFilters.publisher = filterPub ? filterPub.value : 'ALL';
      renderBooksGrid();
    };

    if (searchKw) searchKw.addEventListener('input', onFilterChange);
    if (filterLang) filterLang.addEventListener('change', onFilterChange);
    if (filterAge) filterAge.addEventListener('change', onFilterChange);
    if (filterKDC) filterKDC.addEventListener('change', onFilterChange);
    if (filterPub) filterPub.addEventListener('change', onFilterChange);

    const resetFiltersBtn = document.getElementById('reset-filters-btn');
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', () => {
        if (searchKw) searchKw.value = '';
        if (filterLang) filterLang.value = 'ALL';
        if (filterAge) filterAge.value = 'ALL';
        if (filterKDC) filterKDC.value = 'ALL';
        if (filterPub) filterPub.value = 'ALL';
        onFilterChange();
        playBeepSound(400);
      });
    }

    // 4. Detail Quantity Controls
    const qtyMinus = document.getElementById('detail-qty-minus');
    const qtyPlus = document.getElementById('detail-qty-plus');
    const qtyVal = document.getElementById('detail-qty-val');
    const addCartDetail = document.getElementById('detail-add-cart-btn');

    if (qtyMinus) {
      qtyMinus.addEventListener('click', () => {
        if (state.detailQty > 1) {
          state.detailQty--;
          if (qtyVal) qtyVal.value = state.detailQty;
        }
      });
    }

    if (qtyPlus) {
      qtyPlus.addEventListener('click', () => {
        state.detailQty++;
        if (qtyVal) qtyVal.value = state.detailQty;
      });
    }

    if (addCartDetail) {
      addCartDetail.addEventListener('click', () => {
        if (state.activeDetailBook) {
          addToCart(state.activeDetailBook.id, state.detailQty);
        }
      });
    }

    const detailBack = document.getElementById('detail-back-btn');
    if (detailBack) {
      detailBack.addEventListener('click', () => {
        window.history.back();
      });
    }

    // 5. Quote Export Buttons
    const btnPdf = document.getElementById('btn-generate-pdf');
    if (btnPdf) btnPdf.addEventListener('click', generatePDFQuote);

    const btnExcel = document.getElementById('btn-export-excel');
    if (btnExcel) btnExcel.addEventListener('click', exportExcelSpec);

    const btnSelectAll = document.getElementById('btn-select-all');
    if (btnSelectAll) {
      btnSelectAll.addEventListener('click', () => {
        state.cart.forEach(i => i.checked = true);
        renderCartTable();
      });
    }

    const btnDeselectAll = document.getElementById('btn-deselect-all');
    if (btnDeselectAll) {
      btnDeselectAll.addEventListener('click', () => {
        state.cart.forEach(i => i.checked = false);
        renderCartTable();
      });
    }

    const btnDeleteSelected = document.getElementById('btn-delete-selected');
    if (btnDeleteSelected) {
      btnDeleteSelected.addEventListener('click', () => {
        state.cart = state.cart.filter(i => !i.checked);
        renderCartTable();
        updateCartBadge();
      });
    }

    const btnClearCart = document.getElementById('btn-clear-cart');
    if (btnClearCart) {
      btnClearCart.addEventListener('click', () => {
        state.cart = [];
        renderCartTable();
        updateCartBadge();
      });
    }

    // 6. Init Router & Views
    window.addEventListener('hashchange', handleHashRoute);
    handleHashRoute();

    // 7. Init 3D Engines
    if (window.THREE) {
      lunarRoverEngine = new LunarRoverEngine();
      orbitEngine = new OrbitEngine();
      detailBookEngine = new DetailBook3DEngine();
    }

    // 8. Render Initial Views
    updateI18nTexts();
    updateCartBadge();

    // 9. Lucide Icons Init
    if (window.lucide) window.lucide.createIcons();
  }

  window.addEventListener('DOMContentLoaded', initApp);
})();

