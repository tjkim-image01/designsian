/* ==========================================================================
   KENNEY PIXEL ADVENTURE 8-BIT RETRO LIBRARY PORTAL (v24) - APPLICATION ENGINE
   Target: B2B/B2C Multicultural Library Procurement Portal (사서 수서/구입 담당자)
   Features:
   - 5 SPA Pages (#home, #search, #curation, #cart, #detail)
   - Three.js 3D Voxel Pixel Floating Island & 360° 3D Voxel Book Viewer
   - 5-Language Switcher (KO, EN, VI, ZH, JA)
   - 8-Bit Web Audio Chiptune SFX & Narration Audio Synth
   - Pixel Starburst Particle Click FX
   - 1-Click Official PDF Quote Generator with Pixel Bit Seal & SheetJS Excel Export
   ========================================================================== */

(function () {
  'use strict';

  /* ==========================================================================
     1. MULTILINGUAL i18N DICTIONARY (KO, EN, VI, ZH, JA)
     ========================================================================== */
  const TRANSLATIONS = {
    KO: {
      brandTitle: '다문화 픽셀 도서관 수서 몰',
      brandSubtitle: 'Kenney Pixel Adventure 8-Bit Library Portal',
      navHome: '아케이드 메인',
      navSearch: '픽셀 수서 검색',
      navCuration: '던전 큐레이션',
      navCart: '공문 견적함',
      heroBadge: '👾 8-BIT RETRO MULTICULTURAL LIBRARY PORTAL',
      heroTitle: '3D Voxel Pixel Floating Island 다문화 도서관',
      heroSubtitle: '3D 픽셀 보물섬 위에서 세계 각국의 아동·청소년 다문화 도서를 탐색하고, 사서 전용 1-Click 픽셀 비트 직인 공문 견적서(PDF) 및 엑셀 수서 사양서를 무료로 발급받으세요.',
      btnBrowseSearch: '픽셀 도서 수서 탐색',
      btnBrowseCuration: '3D 던전 큐레이션',
      statBooks: '다문화 픽셀 도서',
      statLangs: 'KO / EN / VI / ZH / JA',
      statPdf: '픽셀 비트 직인 PDF 견적',
      heroHudHint: '🕹️ 마우스를 드래그하여 3D 보물섬과 8-Bit 코인/별 파티클을 관찰하세요',
      galleryTitle: '3D Pixel Arcade Dungeon Gallery Exhibition',
      gallerySubtitle: '레트로 아케이드 보관소 및 픽셀 전시대에서 엄선된 큐레이션 다문화 도서를 확인하세요.',
      newTitle: '2026 하반기 신간 다문화 픽셀 도서 목록',
      newSubtitle: '공공/학교 도서관 사서 납품 10% B2B 특별 할인 혜택이 적용됩니다.',
      tabModeGrid: '3D 카드',
      tabModeList: '클래식 목록',
      btnViewAllSearch: '전체 픽셀 도서 검색 & 수서하기',
      searchBadge: 'ARCANE SEARCH CONSOLE',
      searchTitle: 'Retro 8-Bit Arcade Search & Librarian Console',
      searchSubtitle: '언어(한국어, 영어, 베트남어, 중국어, 일본어), 대상 연령, KDC 분류, ISBN, 아케이드 퀘스트 태그 실시간 필터링',
      phSearchInput: '도서명, 저자, 출판사, ISBN 번호로 검색...',
      btnSearch: '검색',
      filterLang: '🌐 지원 언어',
      filterAge: '👶 Target Age',
      filterKDC: '📚 KDC 분류표',
      filterPublisher: '🏰 출판사',
      optAllLangs: '전체 언어 (ALL)',
      optAllAges: '전체 연령 (ALL)',
      optAllKDC: '전체 분류 (ALL)',
      optAllPublishers: '전체 출판사 (ALL)',
      optChildren: '유아/아동 (Children)',
      optYouth: '청소년 (Youth)',
      optAdult: '성인/일반 (Adult)',
      labelQuestTags: '🏷️ 아케이드 퀘스트 태그:',
      btnResetFilters: '필터 초기화',
      resultCountLabel: '🎮 검색된 픽셀 도서:',
      resultCountUnit: '건',
      btnBulkAddCart: '선택 도서 수서 장바구니 담기',
      curationBadge: 'SPECIAL 3D PIXEL DUNGEON PACKAGES',
      curationTitle: '3D Pixel Dungeon Curation Packages',
      curationSubtitle: '도서관 수서 담당 사서님을 위한 테마별 픽셀 도서 던전 기획전 패키지',
      btnAddPackageCart: '🔮 패키지 전체 장바구니 담기',
      cartBadge: 'LIBRARIAN CONSOLE',
      cartTitle: 'Arcade Librarian Bulk Order Cart & Quote Console',
      cartSubtitle: '사서 납품가(10% 할인) 자동 산출 및 행정 제출용 1-Click PDF 공문 견적서(비트 직인 포함)와 XLSX 엑셀 다운로드',
      statTotalTitles: '선택 도서 종수',
      statTotalCopies: '총 수서 권수',
      statRegularPrice: '정가 합계',
      statProcurementPrice: '사서 납품가 (10% 할인)',
      instFormTitle: '📋 수서 기관 및 담당 사서 공문 정보 입력',
      lblInstName: '기관명 (도서관명):',
      lblLibrarianName: '수서 담당 사서명:',
      lblContact: '연락처 / 직통전화:',
      lblEmail: '이메일 주소:',
      btnSelectAll: '전체 선택',
      btnDeselectAll: '선택 해제',
      btnDeleteSelected: '선택 삭제',
      btnClearCart: '장바구니 전체 비우기',
      thCover: '표지',
      thBookInfo: '서지 정보',
      thRegularPrice: '정가',
      thSupplyPrice: '사서 납품가',
      thQty: '수량',
      thSubtotal: '합계금액',
      thRemove: '삭제',
      emptyCartTitle: '견적 장바구니가 비어 있습니다.',
      emptyCartDesc: '픽셀 도서 검색이나 큐레이션 기획전에서 수서할 도서를 장바구니에 담아주세요.',
      btnGoSearch: '픽셀 도서 탐색하러 가기',
      quoteNoticeTitle: '📌 1-Click 픽셀 비트 직인 공식 PDF 견적서 & 엑셀 사양서 다운로드',
      quoteNoticeDesc: '행정 제출용 픽셀 비트 직인이 포함된 PDF 공문 견적서 및 KOLAS III 표준 엑셀 사양서를 즉시 생성합니다.',
      btnExportExcel: '📊 엑셀 사양서 다운로드 (.xlsx)',
      btnGeneratePDF: '📄 1-Click PDF 공문 견적서 발급',
      detailBadge: '360° 3D VOXEL PREVIEW',
      btnBackList: '이전 목록으로 돌아가기',
      canvas3dHint: '🕹️ 마우스를 드래그하여 3D Voxel 책을 360도 회전하세요',
      btnAutoRotate: '자동 회전',
      btnLaserScan: '픽셀 스캔',
      lblRegularPrice: '정가:',
      lblSupplyPrice: '사서 납품가 (10% 할인):',
      lblMetaTitle: '📚 사서 수서용 표준 서지 상세 스펙',
      lblAuthor: '저자:',
      lblPublisher: '출판사:',
      thIsbn: 'ISBN 번호',
      thKdcCode: 'KDC 분류코드',
      thPubDate: '발행년월',
      thPageCount: '페이지 수',
      thOrigLang: '원서 언어',
      thTags: '퀘스트 태그',
      lblAudioTitle: '🔮 8-Bit 칩튠 낭독 & 다국어 오디오 발췌 샘플',
      lblAudioReady: '재생 버튼을 누르면 8-bit 오디오 낭독 칩튠이 재생됩니다.',
      lblAudioPlaying: '⚡ 낭독 중: 8-Bit 칩튠 오디오 연주 중...',
      btnAddCartDetail: '수서 장바구니에 담기',
      lblExcerptTitle: '다국어 서평 & 본문 발췌',
      footerDesc: '공공도서관 및 학교 미디어 센터 사서를 위한 Kenney Pixel Adventure 8-Bit Retro 다문화 도서 수서 몰',
      footerQuickNav: '빠른 이동',
      footerContact: '사서 수서 지원 센터',
      toastAdded: '장바구니에 담겼습니다! 🪙',
      toastCleared: '장바구니가 비워졌습니다.',
      toastPdfSuccess: '1-Click 픽셀 비트 직인 PDF 견적서가 생성되었습니다! 📄',
      toastExcelSuccess: 'KOLAS III 엑셀 수서 사양서가 다운로드되었습니다! 📊'
    },
    EN: {
      brandTitle: 'Multicultural Pixel Library',
      brandSubtitle: 'Kenney Pixel Adventure 8-Bit Library Portal',
      navHome: 'Arcade Home',
      navSearch: 'Pixel Search',
      navCuration: 'Dungeon Curation',
      navCart: 'Official Quote Cart',
      heroBadge: '👾 8-BIT RETRO MULTICULTURAL LIBRARY PORTAL',
      heroTitle: '3D Voxel Pixel Floating Island Library',
      heroSubtitle: 'Explore global multicultural children & youth books on a 3D pixel floating island. Download 1-click official PDF quotes stamped with pixel bit seals & Excel procurement specs.',
      btnBrowseSearch: 'Explore Pixel Books',
      btnBrowseCuration: '3D Dungeon Curation',
      statBooks: 'Pixel Books',
      statLangs: 'KO / EN / VI / ZH / JA',
      statPdf: 'Bit Seal PDF Quote',
      heroHudHint: '🕹️ Drag mouse to inspect 3D Voxel Island & orbiting coin particles',
      galleryTitle: '3D Pixel Arcade Dungeon Gallery Exhibition',
      gallerySubtitle: 'Step into retro arcade pedestals & treasure chests showcasing curated multicultural pixel books.',
      newTitle: 'Fall 2026 New Multicultural Pixel Books',
      newSubtitle: '10% B2B library procurement discount applied automatically.',
      tabModeGrid: '3D Cards',
      tabModeList: 'Classic List',
      btnViewAllSearch: 'Search All Pixel Books',
      searchBadge: 'ARCANE SEARCH CONSOLE',
      searchTitle: 'Retro 8-Bit Arcade Search & Librarian Console',
      searchSubtitle: 'Filter books by Language (KO, EN, VI, ZH, JA), Target Age, KDC Classification, ISBN, and Quest Tags.',
      phSearchInput: 'Search by title, author, publisher, ISBN...',
      btnSearch: 'Search',
      filterLang: '🌐 Languages',
      filterAge: '👶 Target Age',
      filterKDC: '📚 KDC Code',
      filterPublisher: '🏰 Publisher',
      optAllLangs: 'All Languages (ALL)',
      optAllAges: 'All Ages (ALL)',
      optAllKDC: 'All Categories (ALL)',
      optAllPublishers: 'All Publishers (ALL)',
      optChildren: 'Children',
      optYouth: 'Youth',
      optAdult: 'Adults',
      labelQuestTags: '🏷️ Arcade Quest Tags:',
      btnResetFilters: 'Reset Filters',
      resultCountLabel: '🎮 Found Books:',
      resultCountUnit: 'items',
      btnBulkAddCart: 'Add Selected Books to Cart',
      curationBadge: 'SPECIAL 3D PIXEL DUNGEON PACKAGES',
      curationTitle: '3D Pixel Dungeon Curation Packages',
      curationSubtitle: 'Curated multicultural book packages tailored for library collection development.',
      btnAddPackageCart: '🔮 Add Entire Package to Cart',
      cartBadge: 'LIBRARIAN CONSOLE',
      cartTitle: 'Arcade Librarian Bulk Order Cart & Quote Console',
      cartSubtitle: 'Auto-calculate library 10% supply discount and export 1-click official PDF quotes with Bit Seals & XLSX spreadsheets.',
      statTotalTitles: 'Selected Titles',
      statTotalCopies: 'Total Copies',
      statRegularPrice: 'List Price Total',
      statProcurementPrice: 'Supply Price (10% OFF)',
      instFormTitle: '📋 Institution & Librarian Official Contact Info',
      lblInstName: 'Institution / Library Name:',
      lblLibrarianName: 'Librarian Name:',
      lblContact: 'Contact Phone:',
      lblEmail: 'Email Address:',
      btnSelectAll: 'Select All',
      btnDeselectAll: 'Deselect All',
      btnDeleteSelected: 'Delete Selected',
      btnClearCart: 'Clear Cart',
      thCover: 'Cover',
      thBookInfo: 'Bibliographic Info',
      thRegularPrice: 'List Price',
      thSupplyPrice: 'Supply Price',
      thQty: 'Qty',
      thSubtotal: 'Subtotal',
      thRemove: 'Delete',
      emptyCartTitle: 'Quote Cart is Empty',
      emptyCartDesc: 'Please add books from search or curation packages.',
      btnGoSearch: 'Explore Pixel Books',
      quoteNoticeTitle: '📌 1-Click Pixel Bit Seal Official PDF Quote & Excel Export',
      quoteNoticeDesc: 'Instantly generate official PDF quotes with red pixel bit seals and KOLAS III Excel spreadsheets.',
      btnExportExcel: '📊 Download Excel Spec (.xlsx)',
      btnGeneratePDF: '📄 1-Click PDF Official Quote',
      detailBadge: '360° 3D VOXEL PREVIEW',
      btnBackList: 'Back to Book List',
      canvas3dHint: '🕹️ Drag mouse to rotate 3D Voxel Book in 360°',
      btnAutoRotate: 'Auto Rotate',
      btnLaserScan: 'Pixel Scan',
      lblRegularPrice: 'List Price:',
      lblSupplyPrice: 'Supply Price (10% OFF):',
      lblMetaTitle: '📚 Standard Bibliographic Metadata Specs',
      lblAuthor: 'Author:',
      lblPublisher: 'Publisher:',
      thIsbn: 'ISBN Code',
      thKdcCode: 'KDC Code',
      thPubDate: 'Pub Date',
      thPageCount: 'Page Count',
      thOrigLang: 'Original Lang',
      thTags: 'Quest Tags',
      lblAudioTitle: '🔮 8-Bit Chiptune Narration Audio Sample',
      lblAudioReady: 'Click play to listen to synthesized 8-bit audio narration.',
      lblAudioPlaying: '⚡ Playing: Synthesizing 8-Bit chiptune audio...',
      btnAddCartDetail: 'Add to Procurement Cart',
      lblExcerptTitle: 'Multilingual Book Review & Synopsis',
      footerDesc: 'Kenney Pixel Adventure 8-Bit Multicultural Library Procurement Portal for public & school librarians.',
      footerQuickNav: 'Quick Links',
      footerContact: 'Librarian Support Center',
      toastAdded: 'Added to Procurement Cart! 🪙',
      toastCleared: 'Cart has been cleared.',
      toastPdfSuccess: '1-Click Bit Seal Official PDF Quote Generated! 📄',
      toastExcelSuccess: 'KOLAS III Excel Procurement Spec Downloaded! 📊'
    },
    VI: {
      brandTitle: 'Thư Viện Đa Văn Hóa Pixel',
      brandSubtitle: 'Kenney Pixel Adventure 8-Bit Library Portal',
      navHome: 'Trang Chủ Arcade',
      navSearch: 'Tìm Kiếm Pixel',
      navCuration: 'Bộ Sưu Tập 3D',
      navCart: 'Giỏ Báo Giá Công Văn',
      heroBadge: '👾 8-BIT RETRO MULTICULTURAL LIBRARY PORTAL',
      heroTitle: 'Thư Viện 3D Voxel Đảo Nổi Đa Văn Hóa',
      heroSubtitle: 'Khám phá sách thiếu nhi đa văn hóa 3D trên đảo nổi pixel và xuất báo giá PDF/Excel 1-Click có dấu ấn pixel bit.',
      btnBrowseSearch: 'Tìm Kiếm Sách Pixel',
      btnBrowseCuration: 'Bộ Sưu Tập 3D',
      statBooks: 'Sách Pixel Đa Dạng',
      statLangs: 'KO / EN / VI / ZH / JA',
      statPdf: 'PDF Dấu Ấn Pixel Bit',
      heroHudHint: '🕹️ Kéo chuột để xem đảo nổi 3D và các hạt xu pixel',
      galleryTitle: 'Triển Lãm Phòng Trưng Bày 3D Arcade',
      gallerySubtitle: 'Trải nghiệm kệ sách và rương báu pixel trưng bày các tác phẩm đa văn hóa chọn lọc.',
      newTitle: 'Sách Pixel Đa Văn Hóa Mới Mùa Thu 2026',
      newSubtitle: 'Tự động áp dụng chiết khấu 10% cho thư viện.',
      tabModeGrid: 'Thẻ 3D',
      tabModeList: 'Danh Sách Cổ Điển',
      btnViewAllSearch: 'Xem Tất Cả Sách Pixel',
      searchBadge: 'ARCANE SEARCH CONSOLE',
      searchTitle: 'Tìm Kiếm Arcade 8-Bit & Quản Lý Thư Thư',
      searchSubtitle: 'Lọc theo ngôn ngữ (KO, EN, VI, ZH, JA), độ tuổi, mã KDC, ISBN và thẻ quest arcade.',
      phSearchInput: 'Tìm theo tên sách, tác giả, nhà xuất bản, ISBN...',
      btnSearch: 'Tìm Kiếm',
      filterLang: '🌐 Ngôn Ngữ',
      filterAge: '👶 Độ Tuổi',
      filterKDC: '📚 Mã KDC',
      filterPublisher: '🏰 Nhà Xuất Bản',
      optAllLangs: 'Tất Cả Ngôn Ngữ',
      optAllAges: 'Tất Cả Độ Tuổi',
      optAllKDC: 'Tất Cả Phân Loại',
      optAllPublishers: 'Tất Cả NXB',
      optChildren: 'Trẻ Em (Children)',
      optYouth: 'Thanh Thiếu Niên',
      optAdult: 'Người Lớn',
      labelQuestTags: '🏷️ Thẻ Quest Arcade:',
      btnResetFilters: 'Đặt Lại Bộ Lọc',
      resultCountLabel: '🎮 Sách Tìm Thấy:',
      resultCountUnit: 'cuốn',
      btnBulkAddCart: 'Thêm Sách Đã Chọn Vào Giỏ',
      curationBadge: 'SPECIAL 3D PIXEL DUNGEON PACKAGES',
      curationTitle: 'Gói Curation 3D Pixel Dungeon',
      curationSubtitle: 'Các gói sách đa văn hóa được thiết kế riêng cho thư viện.',
      btnAddPackageCart: '🔮 Thêm Toàn Bộ Gói Vào Giỏ',
      cartBadge: 'LIBRARIAN CONSOLE',
      cartTitle: 'Giỏ Sách Báo Giá & Quản Lý Thư Thư',
      cartSubtitle: 'Tự động tính giảm giá 10% và xuất báo giá PDF có dấu ấn pixel bit & Excel.',
      statTotalTitles: 'Số Đầu Sách',
      statTotalCopies: 'Tổng Số Cuốn',
      statRegularPrice: 'Tổng Giá Bìa',
      statProcurementPrice: 'Giá Thư Viện (-10%)',
      instFormTitle: '📋 Thông Tin Thư Viện & Thủ Thư',
      lblInstName: 'Tên Thư Viện / Cơ Quan:',
      lblLibrarianName: 'Tên Thủ Thư:',
      lblContact: 'Số Điện Thoại:',
      lblEmail: 'Địa Chỉ Email:',
      btnSelectAll: 'Chọn Tất Cả',
      btnDeselectAll: 'Bỏ Chọn',
      btnDeleteSelected: 'Xóa Đã Chọn',
      btnClearCart: 'Xóa Sạch Giỏ Sách',
      thCover: 'Bìa',
      thBookInfo: 'Thông Tin Sách',
      thRegularPrice: 'Giá Bìa',
      thSupplyPrice: 'Giá Thư Viện',
      thQty: 'Số Lượng',
      thSubtotal: 'Thành Tiền',
      thRemove: 'Xóa',
      emptyCartTitle: 'Giỏ Sách Đang Trống',
      emptyCartDesc: 'Vui lòng thêm sách từ mục tìm kiếm hoặc gói curation.',
      btnGoSearch: 'Khám Phá Sách Pixel',
      quoteNoticeTitle: '📌 Tạo Báo Giá PDF Dấu Ấn Pixel Bit & Excel 1-Click',
      quoteNoticeDesc: 'Xuất ngay báo giá chính thức PDF có dấu đỏ pixel bit và tập tin Excel.',
      btnExportExcel: '📊 Tải Tập Tin Excel (.xlsx)',
      btnGeneratePDF: '📄 Tạo Báo Giá PDF 1-Click',
      detailBadge: '360° 3D VOXEL PREVIEW',
      btnBackList: 'Quay Lại Danh Sách',
      canvas3dHint: '🕹️ Kéo chuột để xoay sách 3D Voxel 360 độ',
      btnAutoRotate: 'Tự Xoay',
      btnLaserScan: 'Quét Pixel',
      lblRegularPrice: 'Giá Bìa:',
      lblSupplyPrice: 'Giá Thư Viện (-10%):',
      lblMetaTitle: '📚 Thông Số Thư Mục Tiêu Chuẩn',
      lblAuthor: 'Tác Giả:',
      lblPublisher: 'NXB:',
      thIsbn: 'Mã ISBN',
      thKdcCode: 'Mã KDC',
      thPubDate: 'Ngày Xuất Bản',
      thPageCount: 'Số Trang',
      thOrigLang: 'Ngôn Ngữ Gốc',
      thTags: 'Thẻ Quest',
      lblAudioTitle: '🔮 Mẫu Âm Thanh 8-Bit Nhạc Chiptune',
      lblAudioReady: 'Nhấn phát để nghe mẫu đọc âm thanh 8-bit.',
      lblAudioPlaying: '⚡ Đang Phát: Âm thanh 8-bit chiptune...',
      btnAddCartDetail: 'Thêm Vào Giỏ Sách',
      lblExcerptTitle: 'Tóm Tắt & Đánh Giá Đa Ngôn Ngữ',
      footerDesc: 'Cổng mua sắm sách đa văn hóa Kenney Pixel Adventure 8-Bit cho thủ thư.',
      footerQuickNav: 'Liên Kết Nhanh',
      footerContact: 'Trung Tâm Hỗ Trợ Thủ Thư',
      toastAdded: 'Đã thêm vào giỏ sách báo giá! 🪙',
      toastCleared: 'Giỏ sách đã được xóa.',
      toastPdfSuccess: 'Đã tạo báo giá PDF dấu ấn pixel bit! 📄',
      toastExcelSuccess: 'Đã tải tập tin Excel! 📊'
    },
    ZH: {
      brandTitle: '多元文化像素图书馆采编馆',
      brandSubtitle: 'Kenney Pixel Adventure 8-Bit Library Portal',
      navHome: '街机主页',
      navSearch: '像素检索',
      navCuration: '地牢策展',
      navCart: '公文报价函',
      heroBadge: '👾 8-BIT RETRO MULTICULTURAL LIBRARY PORTAL',
      heroTitle: '3D Voxel 像素浮空岛多元文化图书馆',
      heroSubtitle: '在3D像素浮空岛上探索全球儿童与青少年多元文化图书，一键生成印有像素红色印章的官方PDF报价单及Excel采编清单。',
      btnBrowseSearch: '探索像素图书',
      btnBrowseCuration: '3D 地牢策展',
      statBooks: '多元文化像素图书',
      statLangs: 'KO / EN / VI / ZH / JA',
      statPdf: '像素印章 PDF 报价',
      heroHudHint: '🕹️ 拖动鼠标观察3D浮空岛及环绕金币粒子',
      galleryTitle: '3D Pixel Arcade Dungeon Gallery Exhibition',
      gallerySubtitle: '走进复古街机展台与像素宝箱，浏览精心挑选的多元文化图书。',
      newTitle: '2026年秋季最新多元文化像素图书',
      newSubtitle: '自动享受图书馆采编 10% B2B 优惠折扣。',
      tabModeGrid: '3D 卡片',
      tabModeList: '经典列表',
      btnViewAllSearch: '检索所有像素图书',
      searchBadge: 'ARCANE SEARCH CONSOLE',
      searchTitle: 'Retro 8-Bit Arcade Search & Librarian Console',
      searchSubtitle: '按语言 (中/韩/英/越/日)、适读年龄、KDC分类、ISBN及街机任务标签实时筛选。',
      phSearchInput: '输入书名、作者、出版社或ISBN搜索...',
      btnSearch: '搜索',
      filterLang: '🌐 支持语言',
      filterAge: '👶 适读年龄',
      filterKDC: '📚 KDC 分类号',
      filterPublisher: '🏰 出版社',
      optAllLangs: '所有语言 (ALL)',
      optAllAges: '所有年龄 (ALL)',
      optAllKDC: '所有分类 (ALL)',
      optAllPublishers: '所有出版社 (ALL)',
      optChildren: '儿童/幼儿 (Children)',
      optYouth: '青少年 (Youth)',
      optAdult: '成人/通用 (Adult)',
      labelQuestTags: '🏷️ 街机任务标签:',
      btnResetFilters: '重置筛选',
      resultCountLabel: '🎮 检索到图书:',
      resultCountUnit: '本',
      btnBulkAddCart: '批量将选中图书加入采编清单',
      curationBadge: 'SPECIAL 3D PIXEL DUNGEON PACKAGES',
      curationTitle: '3D Pixel Dungeon Curation Packages',
      curationSubtitle: '专为图书馆采编人员打造的主题像素图书包。',
      btnAddPackageCart: '🔮 整包加入采编清单',
      cartBadge: 'LIBRARIAN CONSOLE',
      cartTitle: 'Arcade Librarian Bulk Order Cart & Quote Console',
      cartSubtitle: '自动计算10%采编折扣，一键导出带像素红色印章的官方PDF报价单及Excel清单。',
      statTotalTitles: '已选品种数',
      statTotalCopies: '总采编册数',
      statRegularPrice: '码洋合计',
      statProcurementPrice: '采编实洋 (9折)',
      instFormTitle: '📋 采编机构及馆员公文信息',
      lblInstName: '机构/图书馆名称:',
      lblLibrarianName: '采编馆员姓名:',
      lblContact: '联系电话:',
      lblEmail: '电子邮箱:',
      btnSelectAll: '全选',
      btnDeselectAll: '取消全选',
      btnDeleteSelected: '删除选中',
      btnClearCart: '清空清单',
      thCover: '封面',
      thBookInfo: '书目信息',
      thRegularPrice: '定价',
      thSupplyPrice: '采编价',
      thQty: '数量',
      thSubtotal: '小计',
      thRemove: '删除',
      emptyCartTitle: '采编清单为空',
      emptyCartDesc: '请从图书检索或主题策展中添加图书。',
      btnGoSearch: '前往探索像素图书',
      quoteNoticeTitle: '📌 一键导出像素红色印章PDF报价单及Excel清单',
      quoteNoticeDesc: '即时生成带有官方像素红色印章的行政PDF公文及KOLAS III标准Excel数据。',
      btnExportExcel: '📊 下载 Excel 清单 (.xlsx)',
      btnGeneratePDF: '📄 一键生成 PDF 官方报价单',
      detailBadge: '360° 3D VOXEL PREVIEW',
      btnBackList: '返回图书列表',
      canvas3dHint: '🕹️ 拖动鼠标360度旋转3D Voxel图书',
      btnAutoRotate: '自动旋转',
      btnLaserScan: '像素扫描',
      lblRegularPrice: '定价:',
      lblSupplyPrice: '采编价 (9折):',
      lblMetaTitle: '📚 标准馆藏书目详细参数',
      lblAuthor: '作者:',
      lblPublisher: '出版社:',
      thIsbn: 'ISBN 编号',
      thKdcCode: 'KDC 分类号',
      thPubDate: '出版年月',
      thPageCount: '页数',
      thOrigLang: '原书语言',
      thTags: '任务标签',
      lblAudioTitle: '🔮 8-Bit 芯片音效朗读试听',
      lblAudioReady: '点击播放试听 8-bit 复古音乐朗读。',
      lblAudioPlaying: '⚡ 播放中: 正在合成 8-Bit 芯片音乐...',
      btnAddCartDetail: '加入采编清单',
      lblExcerptTitle: '多语种书评及内容摘要',
      footerDesc: 'Kenney Pixel Adventure 8-Bit 多元文化图书馆采编服务平台。',
      footerQuickNav: '快速导航',
      footerContact: '采编服务中心',
      toastAdded: '已加入采编清单！🪙',
      toastCleared: '采编清单已清空。',
      toastPdfSuccess: '已生成带像素印章的 PDF 官方报价单！📄',
      toastExcelSuccess: '已下载 Excel 采编数据清单！📊'
    },
    JA: {
      brandTitle: '多文化ピクセル図書館選書モール',
      brandSubtitle: 'Kenney Pixel Adventure 8-Bit Library Portal',
      navHome: 'アーケードメイン',
      navSearch: 'ピクセル選書検索',
      navCuration: 'ダンジョン企画展',
      navCart: '公文見積書',
      heroBadge: '👾 8-BIT RETRO MULTICULTURAL LIBRARY PORTAL',
      heroTitle: '3D Voxel Pixel Floating Island 多文化図書館',
      heroSubtitle: '3Dピクセル浮遊島で世界各国の児童・青少年向け多文化図書を探索。司書専用の1-Clickピクセル印鑑付きPDF見積書およびExcel仕様書を即時発行できます。',
      btnBrowseSearch: 'ピクセル図書を探す',
      btnBrowseCuration: '3Dダンジョン企画展',
      statBooks: '多文化ピクセル図書',
      statLangs: 'KO / EN / VI / ZH / JA',
      statPdf: 'ピクセル印鑑PDF見積',
      heroHudHint: '🕹️ マウスドラッグで3D浮遊島と8-Bitコイン粒子を回転観測',
      galleryTitle: '3D Pixel Arcade Dungeon Gallery Exhibition',
      gallerySubtitle: 'レトロアーケード展示台と宝箱から厳選された多文化図書を体験してください。',
      newTitle: '2026年秋の最新多文化ピクセル図書',
      newSubtitle: '公共・学校図書館向け10% B2B特別割引が適用されます。',
      tabModeGrid: '3Dカード',
      tabModeList: 'クラシックリスト',
      btnViewAllSearch: 'すべてのピクセル図書を検索',
      searchBadge: 'ARCANE SEARCH CONSOLE',
      searchTitle: 'Retro 8-Bit Arcade Search & Librarian Console',
      searchSubtitle: '言語(韓国語、英語、ベトナム語、中国語、日本語)、対象年齢、KDC分類、ISBN、クエストタグでリアルタイム検索。',
      phSearchInput: 'タイトル、著者、出版社、ISBNで検索...',
      btnSearch: '検索',
      filterLang: '🌐 対応言語',
      filterAge: '👶 対象年齢',
      filterKDC: '📚 KDC分類',
      filterPublisher: '🏰 出版社',
      optAllLangs: 'すべての言語 (ALL)',
      optAllAges: 'すべての年齢 (ALL)',
      optAllKDC: 'すべての分類 (ALL)',
      optAllPublishers: 'すべての出版社 (ALL)',
      optChildren: '幼児・児童 (Children)',
      optYouth: '青少年 (Youth)',
      optAdult: '一般・成人 (Adult)',
      labelQuestTags: '🏷️ アーケードクエストタグ:',
      btnResetFilters: 'フィルターリセット',
      resultCountLabel: '🎮 検索結果:',
      resultCountUnit: '件',
      btnBulkAddCart: '選択図書を選書カートに追加',
      curationBadge: 'SPECIAL 3D PIXEL DUNGEON PACKAGES',
      curationTitle: '3D Pixel Dungeon Curation Packages',
      curationSubtitle: '司書様向けテーマ別ピクセル図書ダンジョンパッケージ。',
      btnAddPackageCart: '🔮 パッケージを一括カート追加',
      cartBadge: 'LIBRARIAN CONSOLE',
      cartTitle: 'Arcade Librarian Bulk Order Cart & Quote Console',
      cartSubtitle: '司書納品価格(10%割引)自動計算および行政提出用1-Click PDF見積書(ピクセル印鑑付き)＆Excelダウンロード。',
      statTotalTitles: '選択タイトル数',
      statTotalCopies: '総選書冊数',
      statRegularPrice: '定価合計',
      statProcurementPrice: '司書納品価格 (10% OFF)',
      instFormTitle: '📋 納品機関および担当司書情報入力',
      lblInstName: '機関名 (図書館名):',
      lblLibrarianName: '担当司書名:',
      lblContact: '連絡先 / 電話番号:',
      lblEmail: 'メールアドレス:',
      btnSelectAll: 'すべて選択',
      btnDeselectAll: '選択解除',
      btnDeleteSelected: '選択削除',
      btnClearCart: 'カートを空にする',
      thCover: '表紙',
      thBookInfo: '書誌情報',
      thRegularPrice: '定価',
      thSupplyPrice: '司書納品価格',
      thQty: '数量',
      thSubtotal: '小計金額',
      thRemove: '削除',
      emptyCartTitle: '見積カートが空です。',
      emptyCartDesc: '図書検索またはダンジョン企画展から図書を追加してください。',
      btnGoSearch: 'ピクセル図書を探す',
      quoteNoticeTitle: '📌 1-Click ピクセル印鑑付き公式PDF見積書＆Excelダウンロード',
      quoteNoticeDesc: '行政提出用ピクセル印鑑が含まれたPDF公文見積書およびKOLAS III規格Excel仕様書を即時作成します。',
      btnExportExcel: '📊 Excel仕様書ダウンロード (.xlsx)',
      btnGeneratePDF: '📄 1-Click PDF公式見積書発行',
      detailBadge: '360° 3D VOXEL PREVIEW',
      btnBackList: '前のリストに戻る',
      canvas3dHint: '🕹️ マウスドラッグで3D Voxel本を360度回転できます',
      btnAutoRotate: '自動回転',
      btnLaserScan: 'ピクセル走査',
      lblRegularPrice: '定価:',
      lblSupplyPrice: '司書納品価格 (10% OFF):',
      lblMetaTitle: '📚 司書選書用標準書誌詳細スペック',
      lblAuthor: '著者:',
      lblPublisher: '出版社:',
      thIsbn: 'ISBNコード',
      thKdcCode: 'KDC分類コード',
      thPubDate: '発行年月',
      thPageCount: 'ページ数',
      thOrigLang: '原書言語',
      thTags: 'クエストタグ',
      lblAudioTitle: '🔮 8-Bit チップチューン朗読オーディオ試聴',
      lblAudioReady: '再生ボタンを押すと8-bitオーディオ朗読が再生されます。',
      lblAudioPlaying: '⚡ 朗読中: 8-Bitチップチューン演奏中...',
      btnAddCartDetail: '選書カートに追加',
      lblExcerptTitle: '多言語書評および本文抜粋',
      footerDesc: 'Kenney Pixel Adventure 8-Bit レトロ多文化図書選書モール。',
      footerQuickNav: 'クイックリンク',
      footerContact: '司書選書サポートセンター',
      toastAdded: '選書カートに追加されました！🪙',
      toastCleared: 'カートが空になりました。',
      toastPdfSuccess: 'ピクセル印鑑付きPDF見積書が作成されました！📄',
      toastExcelSuccess: 'KOLAS III Excel仕様書がダウンロードされました！📊'
    }
  };

  /* ==========================================================================
     2. RICH MULTICULTURAL BOOK DATASET (12+ BOOKS)
     ========================================================================== */
  const BOOKS_DATA = [
    {
      id: 'bk-01',
      title: {
        KO: '픽셀 기사 호랑이의 전래동화 모험',
        EN: 'The Pixel Knight Tiger Folk Tales',
        VI: 'Cuộc Phiêu Lưu Cổ Tích Của Hổ Pixel',
        ZH: '像素骑士老虎的民间故事大冒险',
        JA: 'ピクセル騎士トラの昔話大冒険'
      },
      subtitle: {
        KO: '한국 전래동화의 호랑이와 8비트 용사의 만남',
        EN: 'Korean tiger folklore meets 8-bit hero legend',
        VI: 'Truyền thuyết hổ Hàn Quốc gặp gỡ anh hùng 8-bit',
        ZH: '韩国老虎民间传说与8位元勇士传奇',
        JA: '韓国の虎昔話と8ビット勇者の出会い'
      },
      author: { KO: '김호랑 글 / 이도트 그림', EN: 'Horang Kim / Dot Lee', VI: 'Kim Horang / Lee Dot', ZH: '金老虎 / 李多特', JA: '金ホラン / 李ドット' },
      publisher: '픽셀어드벤처북스',
      isbn: '979-11-8932-001-4',
      kdc: '813.8 (한국동화)',
      price: 15000,
      supplyPrice: 13500,
      language: 'KO',
      targetAge: 'Children',
      questTag: '세계전래',
      coverEmoji: '🐯',
      themeColor: 0xff9800,
      isNew: true,
      synopsis: {
        KO: '곶감을 무서워하는 전래동화 속 호랑이가 8비트 픽셀 갑옷을 입고 떡 하나 주면 안 잡아먹는 마법 던전 퀘스트를 수행하는 유쾌한 이중언어 픽셀 동화입니다.',
        EN: 'A delightful bilingual pixel fairy tale about the legendary tiger from Korean folklore wearing 8-bit pixel armor to explore magical dungeons.',
        VI: 'Câu chuyện cổ tích pixel song ngữ vui nhộn về chú hổ huyền thoại Hàn Quốc khoác giáp pixel 8-bit chinh phục các hầm ngục phép thuật.',
        ZH: '一部幽默的双语像素童话，讲述了韩国民间传说中害怕柿饼的老虎穿上8位元像素铠甲探险魔法地牢的故事。',
        JA: '干し柿を怖がる韓国昔話のトラが8ビットのピクセル甲冑を着て魔法のダンジョンを冒険する愉快な二言語ピクセル絵本です。'
      },
      audioNotes: [523.25, 659.25, 783.99, 1046.50]
    },
    {
      id: 'bk-02',
      title: {
        KO: '사이공의 픽셀 용과 무지개 거북이',
        EN: 'The Pixel Dragon of Saigon & Rainbow Turtle',
        VI: 'Rồng Pixel Sài Gòn Và Rùa Cầu Vồng',
        ZH: '西贡像素龙与彩虹巨龟',
        JA: 'サイゴンのピクセル竜と虹のウミガメ'
      },
      subtitle: {
        KO: '베트남 하노이 환검호 전설과 픽셀 그래픽의 환상 조화',
        EN: 'Vietnam Hanoi Hoan Kiem Lake legend in retro pixel art',
        VI: 'Huyền thoại Hồ Hoàn Kiếm Hà Nội qua nét vẽ pixel',
        ZH: '越南河内还剑湖传说与复古像素艺术的结合',
        JA: 'ベトナムのホアンキエム湖伝説とピクセルアート'
      },
      author: { KO: '응우옌 반 린 / 트란 응옥 그림', EN: 'Nguyen Van Linh / Tran Ngoc', VI: 'Nguyễn Văn Linh / Trần Ngọc', ZH: '阮文林 / 陈玉', JA: 'グエン・ヴァン・リン' },
      publisher: '글로벌다문화출판',
      isbn: '979-11-8932-002-1',
      kdc: '898.3 (베트남문학)',
      price: 16000,
      supplyPrice: 14400,
      language: 'VI',
      targetAge: 'Children',
      questTag: '세계전래',
      coverEmoji: '🐉',
      themeColor: 0x4caf50,
      isNew: true,
      synopsis: {
        KO: '베트남의 호안끼엠 호수 거북이 전설을 8비트 레트로 아케이드 픽셀 아트 스타일로 재해석하여 한국어와 베트남어 나란히 읽기를 지원하는 그림책입니다.',
        EN: 'Reinterprets the Vietnamese legend of Hoan Kiem Lake in 8-bit retro pixel art, supporting parallel reading in Korean and Vietnamese.',
        VI: 'Tái hiện huyền thoại Hồ Hoàn Kiếm Việt Nam theo phong cách pixel 8-bit với hai ngôn ngữ tiếng Việt và tiếng Hàn song song.',
        ZH: '采用8位元复古像素艺术风格重新诠释越南还剑湖的巨龟传说，支持中/韩/越三语平行对比阅读。',
        JA: 'ベトナムのホアンキエム湖の亀の伝説を8ビットピクセルアートで再現し、ベトナム語と韓国語の対訳が楽しめる絵本。'
      },
      audioNotes: [587.33, 739.99, 880.00, 1174.66]
    },
    {
      id: 'bk-03',
      title: {
        KO: '서유기: 8비트 손오공의 픽셀 대서양',
        EN: 'Journey to the West: 8-Bit Wukong Quest',
        VI: 'Tây Du Ký: Hành Trình Pixel 8-Bit Của Tôn Ngộ Không',
        ZH: '西游记：8位元孙悟空的像素大冒险',
        JA: '西遊記：8ビット孫悟空のピクセル大冒険'
      },
      subtitle: {
        KO: '여의봉을 든 픽셀 손오공과 삼장법사의 픽셀 서역 기행',
        EN: 'Monkey King Sun Wukong in retro 8-bit pixel quest',
        VI: 'Tôn Ngộ Không pixel 8-bit chinh phục Tây Trúc',
        ZH: '手持如意金箍棒的像素孙悟空西天取经故事',
        JA: '如意棒を持つピクセル孫悟空と天竺への旅'
      },
      author: { KO: '장웨이 / 오승은 원작', EN: 'Zhang Wei / Wu Cheng\'en', VI: 'Trương Vĩ / Ngô Thừa Ân', ZH: '张伟 / 吴承恩 原著', JA: '張偉 / 呉承恩' },
      publisher: '아시아동화서원',
      isbn: '979-11-8932-003-8',
      kdc: '892.3 (중국문학)',
      price: 18000,
      supplyPrice: 16200,
      language: 'ZH',
      targetAge: 'Youth',
      questTag: '레트로명작',
      coverEmoji: '🐒',
      themeColor: 0xe91e63,
      isNew: true,
      synopsis: {
        KO: '동양 최고의 고전 서유기를 픽셀 던전 스테이지 파이트 퀘스트 형식으로 구성하여 청소년들이 신나게 한자와 한문, 중국어를 익힐 수 있는 학습형 픽셀 서적입니다.',
        EN: 'The timeless classic Journey to the West formatted as a pixel dungeon stage quest, encouraging youth to learn Chinese through interactive pixel lore.',
        VI: 'Tác phẩm kinh điển Tây Du Ký được biên soạn theo phong cách vượt ải pixel dungeon giúp thanh thiếu niên dễ dàng tiếp thu chữ Hán và tiếng Trung.',
        ZH: '将名著《西游记》设计为像素地牢闯关关卡，让青少年在充满趣味的8位元画风中轻松学习精美中文与传统文化。',
        JA: '古典『西遊記』をピクセルダンジョンのステージ攻略風に構成し、青少年の中国語学習にも役立つ冒険絵本。'
      },
      audioNotes: [659.25, 783.99, 987.77, 1318.51]
    },
    {
      id: 'bk-04',
      title: {
        KO: '픽셀 사무라이와 벚꽃 서고의 비밀',
        EN: 'The Pixel Samurai & Secret Cherry Blossom Vault',
        VI: 'Samurai Pixel Và Bí Mật Kho Sách Hoa Anh Đào',
        ZH: '像素武士与樱花书库的秘密',
        JA: 'ピクセルサムライと桜書庫の秘密'
      },
      subtitle: {
        KO: '일본 전통 동화 잇순보시와 픽셀 아케이드의 환상 만남',
        EN: 'Japanese Issun-boshi folklore meets pixel arcade world',
        VI: 'Truyện cổ tích Nhật Bản Issun-boshi trong thế giới pixel',
        ZH: '日本传统童话一寸法师与像素街机世界的相遇',
        JA: '一寸法師の伝統昔話とピクセルアーケードの融合'
      },
      author: { KO: '타나카 켄지 / 사토 유키 그림', EN: 'Kenji Tanaka / Yuki Sato', VI: 'Tanaka Kenji / Sato Yuki', ZH: '田中健二 / 佐藤雪', JA: '田中健二 / 佐藤雪' },
      publisher: '8비트미디어',
      isbn: '979-11-8932-004-5',
      kdc: '891.3 (일본문학)',
      price: 15500,
      supplyPrice: 13950,
      language: 'JA',
      targetAge: 'Children',
      questTag: '세계전래',
      coverEmoji: '⚔️',
      themeColor: 0x9c27b0,
      isNew: true,
      synopsis: {
        KO: '한 치 작은 영웅 잇순보시가 픽셀 요술 바늘 검을 들고 벚꽃 비밀 서고의 오니 도깨비를 물리치는 아기자기한 8비트 일본 전래동화 그림책입니다.',
        EN: 'The tiny hero Issun-boshi wields a pixel needle sword to defeat demons in the secret cherry blossom library vault.',
        VI: 'Anh hùng tí hon Issun-boshi dùng kiếm kim pixel đánh bại quỷ Oni bảo vệ kho sách hoa anh đào bí mật.',
        ZH: '小巧英雄一寸法师挥舞像素针剑，在神秘的樱花书库中击退鬼怪，展现精彩的8位元日本民间故事。',
        JA: '一寸法師がピクセルの針の剣を手に、桜の秘密書庫を荒らす鬼を退治する和風8ビットピクセル絵本。'
      },
      audioNotes: [440.00, 554.37, 659.25, 880.00]
    },
    {
      id: 'bk-05',
      title: {
        KO: '우주 픽셀 도서관 탐험대',
        EN: 'The Cosmic Pixel Library Expedition',
        VI: 'Chuyến Thám Hiểm Thư Viện Pixel Vũ Trụ',
        ZH: '宇宙像素图书馆大探险',
        JA: '宇宙ピクセル図書館探検隊'
      },
      subtitle: {
        KO: '은하계 다국어 지식을 찾아 떠나는 픽셀 우주선 퀘스트',
        EN: 'Galactic multilingual spaceship quest searching for knowledge',
        VI: 'Hành trình phi thuyền pixel tìm kiếm tri thức đa ngôn ngữ',
        ZH: '寻找银河系多语言知识的像素飞船探索之旅',
        JA: '銀河の多言語知識を求めて旅立つピクセル宇宙船'
      },
      author: { KO: '앨리스 스미스 / 밥 픽셀 그림', EN: 'Alice Smith / Bob Pixel', VI: 'Alice Smith / Bob Pixel', ZH: '爱丽丝·史密斯', JA: 'アリス・スミス' },
      publisher: '픽셀어드벤처북스',
      isbn: '979-11-8932-005-2',
      kdc: '700 (언어학/영어)',
      price: 17000,
      supplyPrice: 15300,
      language: 'EN',
      targetAge: 'Youth',
      questTag: '픽셀모험',
      coverEmoji: '🚀',
      themeColor: 0x00e5ff,
      isNew: true,
      synopsis: {
        KO: '우주 정거장에 설립된 픽셀 아케이드 도서관에서 5개국어 픽셀 칩을 수집하며 영어를 익히는 SF 모험 다문화 청소년 영어 도서입니다.',
        EN: 'A sci-fi adventure English book for youth, collecting 5-language pixel chips in a space station arcade library.',
        VI: 'Cuốn sách tiếng Anh phiêu lưu viễn tưởng dành cho giới trẻ, thu thập các chip pixel 5 ngôn ngữ tại thư viện vũ trụ.',
        ZH: '一部适合青少年的科幻冒险英语读物，讲述在太空站像素街机图书馆中收集5语像素芯片的故事。',
        JA: '宇宙ステーションのピクセル図書館で5言語のピクセルチップを集めながら英語を学ぶSF冒険絵本。'
      },
      audioNotes: [523.25, 659.25, 783.99, 987.77]
    },
    {
      id: 'bk-06',
      title: {
        KO: '구름 위의 픽셀 동화 마을',
        EN: 'Pixel Fairy Tale Village Above Clouds',
        VI: 'Làng Cổ Tích Pixel Trên Mây',
        ZH: '云端上的像素童话村',
        JA: '雲の上のピクセル童話の村'
      },
      subtitle: {
        KO: '세계 각국의 어린이들이 만드는 8비트 무지개 마을',
        EN: '8-bit rainbow village built by children of the world',
        VI: 'Làng cầu vồng 8-bit do trẻ em khắp thế giới xây dựng',
        ZH: '世界各国儿童共同建设的8位元彩虹村庄',
        JA: '世界中の子供たちが作る8ビット虹の村'
      },
      author: { KO: '박미소 글 / 최도트 그림', EN: 'Miso Park / Dot Choi', VI: 'Park Miso / Choi Dot', ZH: '朴微笑 / 崔多特', JA: '朴ミソ / 崔ドット' },
      publisher: '글로벌다문화출판',
      isbn: '979-11-8932-006-9',
      kdc: '334 (다문화사회)',
      price: 14000,
      supplyPrice: 12600,
      language: 'KO',
      targetAge: 'Children',
      questTag: '다문화이해',
      coverEmoji: '☁️',
      themeColor: 0xffc825,
      isNew: false,
      synopsis: {
        KO: '서로 다른 언어와 문화 배경을 가진 아이들이 구름 위 픽셀 마을에 모여 도트 블록으로 학교와 도서관을 세우는 따뜻한 다문화 이해 그림책입니다.',
        EN: 'A heartwarming multicultural book about children from diverse backgrounds building schools and libraries with pixel blocks above clouds.',
        VI: 'Cuốn sách ấm áp về trẻ em từ nhiều văn hóa khác nhau cùng xây dựng trường học và thư viện bằng các khối pixel trên mây.',
        ZH: '一部温馨的多元文化理解绘本，讲述拥有不同语言背景的孩子们在云端像素村里用点阵积木建造学校与图书馆的故事。',
        JA: '多様な文化を持つ子供たちが雲の上のピクセル村に集まり、ドットブロックで学校や図書館を作る心温まる絵本。'
      },
      audioNotes: [392.00, 493.88, 587.33, 783.99]
    },
    {
      id: 'bk-07',
      title: {
        KO: '이중언어 픽셀 속담 전설 탐험',
        EN: 'Bilingual Pixel Proverbs & Legends Quest',
        VI: 'Khám Phá Tục Ngữ Cổ Tích Song Ngữ Pixel',
        ZH: '双语像素谚语与传奇大探索',
        JA: '二言語ピクセルことわざ・伝説探検'
      },
      subtitle: {
        KO: '한국어·영어·베트남어 3개국어로 즐기는 지혜 속담',
        EN: 'Wisdom proverbs in Korean, English, and Vietnamese',
        VI: 'Tục ngữ trí tuệ bằng 3 ngôn ngữ Hàn, Anh, Việt',
        ZH: '韩·英·越三语趣味智慧谚语故事',
        JA: '韓国語・英語・ベトナム語で楽しむことわざ'
      },
      author: { KO: '다문화교육연구회', EN: 'Multicultural Ed Society', VI: 'Hội Nghiên Cứu Giáo Dục Đa Văn Hóa', ZH: '多元文化教育研究会', JA: '多文化教育研究会' },
      publisher: '8비트미디어',
      isbn: '979-11-8932-007-6',
      kdc: '700 (언어학/이중언어)',
      price: 16500,
      supplyPrice: 14850,
      language: 'VI',
      targetAge: 'Children',
      questTag: '이중언어',
      coverEmoji: '📜',
      themeColor: 0x00bcd4,
      isNew: false,
      synopsis: {
        KO: '동남아시아와 한국의 닮은꼴 전래 속담을 8비트 아케이드 퀴즈와 픽셀 삽화로 풀이하여 다문화 가정 어린이들의 언어 학습을 돕습니다.',
        EN: 'Helps multicultural children learn languages through 8-bit arcade quizzes and pixel illustrations of Southeast Asian and Korean proverbs.',
        VI: 'Giúp trẻ em gia đình đa văn hóa học ngôn ngữ qua các trò chơi trắc nghiệm arcade 8-bit và hình ảnh pixel về tục ngữ Việt - Hàn.',
        ZH: '结合8位元街机问答游戏与像素插画，生动图解东南亚与韩国的相近谚语，助力多文化家庭儿童的语言学习。',
        JA: '東南アジアと韓国の類似ことわざを8ビットクイズとピクセル挿絵で解き明かす多言語学習書。'
      },
      audioNotes: [523.25, 587.33, 659.25, 698.46]
    },
    {
      id: 'bk-08',
      title: {
        KO: 'AI 레트로 미래 도서관 퀘스트',
        EN: 'AI Retro Future Library Quest',
        VI: 'Nhiệm Vụ Thư Viện Tương Lai Pixel AI',
        ZH: 'AI复古未来图书馆大冒险',
        JA: 'AIレトロ未来図書館クエスト'
      },
      subtitle: {
        KO: '인공지능과 픽셀 도서관 사서의 미래 협동 클리어',
        EN: 'Cooperative future quest between AI and pixel librarian',
        VI: 'Sự hợp tác tương lai giữa AI và thủ thư pixel',
        ZH: '人工智能与像素图书馆员的未来协同冒险',
        JA: 'AIとピクセル司書の未来協調クリア'
      },
      author: { KO: 'Antigravity AI Lab / 픽셀스튜디오', EN: 'Antigravity AI Lab / Pixel Studio', VI: 'Antigravity AI Lab / Pixel Studio', ZH: 'Antigravity AI Lab', JA: 'Antigravity AI Lab' },
      publisher: '픽셀어드벤처북스',
      isbn: '979-11-8932-008-3',
      kdc: '004 (컴퓨터/AI)',
      price: 19000,
      supplyPrice: 17100,
      language: 'KO',
      targetAge: 'Youth',
      questTag: 'AI미래',
      coverEmoji: '🤖',
      themeColor: 0x3f51b5,
      isNew: true,
      synopsis: {
        KO: '2026년 레트로 픽셀 아케이드 도서관을 배경으로 AI 로봇 사서와 인간 사서가 손잡고 빅데이터 도서를 분류하며 미래 기술 윤리를 익히는 모험 소설입니다.',
        EN: 'An adventure novel set in a 2026 retro pixel library, where an AI robot librarian and human librarian team up to organize big data books.',
        VI: 'Cuốn tiểu thuyết phiêu lưu lấy bối cảnh thư viện pixel 2026, nơi thủ thư AI và thủ thư con người cùng nhau quản lý dữ liệu.',
        ZH: '以2026年复古像素街机图书馆为背景，讲述AI机器人图书员与人类图书员合作进行大数据图书分类并探讨未来科技伦理的科幻小说。',
        JA: '2026年のレトロピクセル図書館を舞台に、AIロボット司書と人間司書が力を合わせて未来のIT倫理を学ぶ冒険小説。'
      },
      audioNotes: [659.25, 880.00, 987.77, 1318.51]
    },
    {
      id: 'bk-09',
      title: {
        KO: '중국 픽셀 십이지신 동화 퀘스트',
        EN: 'Chinese Pixel Zodiac Animal Tales',
        VI: 'Cổ Tích 12 Con Giáp Pixel Trung Quốc',
        ZH: '中国像素十二生肖传奇传说',
        JA: '中国ピクセル十二支昔話クエスト'
      },
      subtitle: {
        KO: '자축인묘 진사오미 신유술해 픽셀 아케이드 레이스',
        EN: 'The 12 Chinese Zodiac animals in 8-bit arcade race',
        VI: 'Cuộc đua 12 con giáp qua đồ họa pixel 8-bit',
        ZH: '十二生肖8位元街机竞速与传说故事',
        JA: '十二支の8ビットアーケードレースと昔話'
      },
      author: { KO: '왕린 / 류웨이 그림', EN: 'Wang Lin / Liu Wei', VI: 'Vương Lâm / Lưu Vĩ', ZH: '王林 / 刘伟', JA: '王林 / 劉偉' },
      publisher: '아시아동화서원',
      isbn: '979-11-8932-009-0',
      kdc: '892.3 (중국동화)',
      price: 15000,
      supplyPrice: 13500,
      language: 'ZH',
      targetAge: 'Children',
      questTag: '세계전래',
      coverEmoji: '🐲',
      themeColor: 0xff5722,
      isNew: false,
      synopsis: {
        KO: '십이지신 동물이 8비트 아케이드 달리기 경주를 펼치며 정직과 협동의 가치를 일깨워주는 유쾌한 중국 전래동화 픽셀 그림책입니다.',
        EN: 'A fun Chinese folklore pixel book where the 12 Zodiac animals compete in an 8-bit arcade race, teaching honesty and teamwork.',
        VI: 'Cuốn sách cổ tích pixel Trung Quốc hóm hỉnh về 12 con giáp đua tranh trong game 8-bit, dạy cho bé học về lòng trung thực.',
        ZH: '生动展示十二生肖展开8位元街机赛跑大比拼的幽默故事，引导孩子们感悟诚实与协作的价值。',
        JA: '十二支の動物たちが8ビットレースを繰り広げ、誠実さと協力の大切さを教える愉快な中国昔話絵本。'
      },
      audioNotes: [523.25, 659.25, 783.99, 880.00]
    },
    {
      id: 'bk-10',
      title: {
        KO: '일본 픽셀 종이접기 세계 전래',
        EN: 'Japanese Pixel Origami Folklore',
        VI: 'Cổ Tích Origami Pixel Nhật Bản',
        ZH: '日本像素折纸传统故事集',
        JA: '日本ピクセル折り紙世界昔話'
      },
      subtitle: {
        KO: '입체 픽셀 도트로 접어 만드는 8비트 종이 인형 동화',
        EN: '3D voxel origami papercraft fairy tales',
        VI: 'Truyện cổ tích nghệ thuật xếp hình origami pixel 3D',
        ZH: '用立体像素点阵折叠出的8位元纸偶童话',
        JA: '立体ピクセルドットで折る8ビット紙人形絵本'
      },
      author: { KO: '야마모토 하나 / 후지타 그림', EN: 'Hana Yamamoto / Fujita', VI: 'Yamamoto Hana / Fujita', ZH: '山本花 / 藤田', JA: '山本花 / 藤田' },
      publisher: '글로벌다문화출판',
      isbn: '979-11-8932-010-6',
      kdc: '780 (예술/공예)',
      price: 16000,
      supplyPrice: 14400,
      language: 'JA',
      targetAge: 'Children',
      questTag: '레트로명작',
      coverEmoji: '🎎',
      themeColor: 0xe91e63,
      isNew: false,
      synopsis: {
        KO: '종이접기 예술 종이가 픽셀 블록이 되어 생명력을 얻는 독창적인 스토리텔링과 직접 픽셀 인형을 접어볼 수 있는 공예 도록이 포함된 도서입니다.',
        EN: 'An innovative storytelling book where origami paper comes to life as pixel blocks, complete with DIY pixel papercraft guides.',
        VI: 'Cuốn sách sáng tạo kết hợp nghệ thuật origami và khối pixel, kèm hướng dẫn tự làm đồ thủ công pixel.',
        ZH: '一本创新的故事折纸书，折纸与像素方块互相转化，附带可亲动手折叠的像素纸偶指南。',
        JA: '折り紙がピクセルブロックとなって動き出すユニークな絵本。自分で折れるピクセル工作ガイド付き。'
      },
      audioNotes: [440.00, 523.25, 659.25, 783.99]
    },
    {
      id: 'bk-11',
      title: {
        KO: '다국어 픽셀 동요 그림책 퀘스트',
        EN: 'Multilingual Pixel Nursery Rhymes Quest',
        VI: 'Nhiệm Vụ Đồng Dao Pixel Đa Ngôn Ngữ',
        ZH: '多语言像素儿歌图画书大冒险',
        JA: '多言語ピクセル童謡絵本クエスト'
      },
      subtitle: {
        KO: '한국어·영어·베트남어·중국어·일본어 5개국어 픽셀 악보',
        EN: 'Pixel sheet music in Korean, English, Vietnamese, Chinese, Japanese',
        VI: 'Nốt nhạc pixel bằng 5 ngôn ngữ Hàn, Anh, Việt, Trung, Nhật',
        ZH: '韩·英·越·中·日5语像素乐谱与童谣',
        JA: '日・韓・英・越・中 5言語ピクセル楽譜絵本'
      },
      author: { KO: '세계아동음악협회', EN: 'World Kids Music Assoc', VI: 'Hiệp Hội Âm Nhạc Trẻ Em Thế Giới', ZH: '世界儿童音乐协会', JA: '世界児童音楽協会' },
      publisher: '8비트미디어',
      isbn: '979-11-8932-011-3',
      kdc: '670 (음악/동요)',
      price: 17500,
      supplyPrice: 15750,
      language: 'EN',
      targetAge: 'Children',
      questTag: '이중언어',
      coverEmoji: '🎵',
      themeColor: 0x9c27b0,
      isNew: true,
      synopsis: {
        KO: '5개국 전래 동요를 8비트 칩튠 멜로디와 각국의 언어로 노래하며 다문화 언어 감각을 키우는 오디오 연동 픽셀 음악 동화책입니다.',
        EN: 'An audio-interactive pixel music book for kids to learn 5-language nursery rhymes accompanied by 8-bit chiptune melodies.',
        VI: 'Cuốn sách âm nhạc pixel tương tác giúp bé vừa hát vừa học đồng dao 5 ngôn ngữ trên nền nhạc 8-bit chiptune.',
        ZH: '结合8位元芯片音乐旋律与5国传统儿歌的合唱图画书，让孩子们在欢歌笑语中培养多语言听觉与感悟。',
        JA: '5カ国の伝統童謡を8ビットチップチューンメロディと各国の言葉で歌いながら学ぶオーディオ絵本。'
      },
      audioNotes: [523.25, 659.25, 783.99, 1046.50]
    },
    {
      id: 'bk-12',
      title: {
        KO: '픽셀 퀘스트: 다문화 영웅들의 아케이드',
        EN: 'Pixel Quest: Arcade of Multicultural Heroes',
        VI: 'Nhiệm Vụ Pixel: Đấu Trường Anh Hùng Đa Văn Hóa',
        ZH: '像素任务：多元文化英雄街机大斗乱',
        JA: 'ピクセルクエスト：多文化ヒーローのアーク'
      },
      subtitle: {
        KO: '세계 위인들이 8비트 아케이드 팀을 이뤄 문제를 해결하는 동화',
        EN: 'Global historical heroes team up in 8-bit arcade to solve crisis',
        VI: 'Các anh hùng lịch sử thế giới lập đội pixel 8-bit giải cứu thế giới',
        ZH: '世界历史名人组建8位元街机战队解决危机的童话',
        JA: '世界の偉人たちが8ビットチームを組んで問題を解決する絵本'
      },
      author: { KO: '스콧 리 / 한유진 그림', EN: 'Scott Lee / Yujin Han', VI: 'Scott Lee / Yujin Han', ZH: '李史考特 / 韩有珍', JA: 'スコット・リー' },
      publisher: '픽셀어드벤처북스',
      isbn: '979-11-8932-012-0',
      kdc: '900 (역사/인물)',
      price: 18500,
      supplyPrice: 16650,
      language: 'EN',
      targetAge: 'Youth',
      questTag: '픽셀모험',
      coverEmoji: '👑',
      themeColor: 0xffc825,
      isNew: true,
      synopsis: {
        KO: '세종대왕, 린컨, 꽝찌에우 등 세계 역사속 명의와 정치가들이 픽셀 캐릭터로 등장하여 다양성과 인권, 자유의 가치를 선사하는 명작 역사 픽셀북입니다.',
        EN: 'A masterpiece historical pixel book features King Sejong, Lincoln, Quang Trung as pixel heroes teaching diversity and human rights.',
        VI: 'Tác phẩm truyền cảm hứng về các vĩ nhân lịch sử như Vua Sejong, Lincoln, Quang Trung dưới hình dạng anh hùng pixel.',
        ZH: '世宗大王、林肯、光中等世界历史名人在8位元街机世界中登场，向青少年传达多样性、人权与自由的杰出历史像素书。',
        JA: '世宗大王、リンカーン、クアンチュンなど世界の偉人たちがピクセルキャラとして登場する歴史絵本。'
      },
      audioNotes: [587.33, 739.99, 880.00, 1174.66]
    }
  ];

  /* ==========================================================================
     3. SPECIAL 3D PIXEL DUNGEON CURATION PACKAGES
     ========================================================================== */
  const CURATION_PACKAGES = [
    {
      id: 'pkg-01',
      title: {
        KO: '🏰 픽셀 속 세계 전래동화 탐험대 패키지 (5종)',
        EN: '🏰 World Folk Tales Pixel Quest Package (5 Books)',
        VI: '🏰 Gói Thám Hiểm Cổ Tích Thế Giới Pixel (5 Cuốn)',
        ZH: '🏰 像素中世界民间故事探索包 (5本)',
        JA: '🏰 ピクセル世界昔話探検隊パッケージ (5冊)'
      },
      reward: '⭐ +15% 사서 적립금 & 픽셀 북마크 증정',
      desc: {
        KO: '한국, 베트남, 중국, 일본의 대표 전래동화를 8비트 픽셀 그래픽으로 재해석한 초등 아동 수서 필독 패키지',
        EN: 'Must-read package for children reinterpreting folklore from Korea, Vietnam, China, and Japan in 8-bit pixel art.',
        VI: 'Bộ sách nên có dành cho trẻ em tái hiện các câu chuyện cổ tích Hàn, Việt, Trung, Nhật bằng đồ họa pixel 8-bit.',
        ZH: '用8位元像素重绘韩·越·中·日代表性民间故事的童书采编必选包。',
        JA: '日・韓・越・中の代表的昔話を8ビットピクセルで再解釈した児童必須パッケージ。'
      },
      bookIds: ['bk-01', 'bk-02', 'bk-04', 'bk-09', 'bk-10']
    },
    {
      id: 'pkg-02',
      title: {
        KO: '👾 레트로 도트 아동 문학 명작 패키지 (4종)',
        EN: '👾 Classic Pixel Children Literature Package (4 Books)',
        VI: '👾 Gói Văn Học Thiếu Nhi Pixel Cổ Điển (4 Cuốn)',
        ZH: '👾 复古点阵儿童文学名著包 (4本)',
        JA: '👾 レトロドット児童文学名作パッケージ (4冊)'
      },
      reward: '🎁 픽셀 아케이드 독서대 증정',
      desc: {
        KO: '서유기부터 전설의 서고 탐험까지 레트로 8비트 아케이드 감성의 문학 탐험 컬렉션',
        EN: 'Arcade literature collection from Journey to the West to secret library vault explorations.',
        VI: 'Bộ sưu tập văn học mang cảm hứng arcade 8-bit từ Tây Du Ký đến kho sách bí mật.',
        ZH: '从《西游记》到神秘书库探索，充满复古8位元街机情怀的文学探索合集。',
        JA: '西遊記から秘密の書庫探検まで、レトロアーケード感性の文学コレクション。'
      },
      bookIds: ['bk-03', 'bk-04', 'bk-10', 'bk-12']
    },
    {
      id: 'pkg-03',
      title: {
        KO: '🌏 다문화 이중언어 그림책 퀘스트 패키지 (4종)',
        EN: '🌏 Multilingual Picture Book Quest Package (4 Books)',
        VI: '🌏 Gói Truyện Tranh Song Ngữ Đa Văn Hóa (4 Cuốn)',
        ZH: '🌏 多文化双语绘本大冒险包 (4本)',
        JA: '🌏 多文化二言語絵本クエストパッケージ (4冊)'
      },
      reward: '📜 다국어 사서 라벨 스티커 팩',
      desc: {
        KO: '한국어와 베트남어, 영어, 중국어 나란히 읽기를 지원하여 언어 장벽을 허무는 다문화 가정 맞춤 패키지',
        EN: 'Tailored for multicultural families supporting side-by-side reading in KO, VI, EN, and ZH.',
        VI: 'Bộ sách dành riêng cho gia đình đa văn hóa đọc song song tiếng Hàn - Việt - Anh - Trung.',
        ZH: '支持韩·越·英·中对照阅读，打破语言障碍的多文化家庭专属包。',
        JA: '韓国語・ベトナム語・英語・中国語の対訳対応で言語の壁を無くす多文化パッケージ。'
      },
      bookIds: ['bk-02', 'bk-06', 'bk-07', 'bk-11']
    },
    {
      id: 'pkg-04',
      title: {
        KO: '⚔️ 청소년 픽셀 모험 & SF 미래관 패키지 (4종)',
        EN: '⚔️ Youth Pixel Adventure & Sci-Fi Package (4 Books)',
        VI: '⚔️ Gói Phiêu Lưu Pixel & Viễn Tưởng Cho Giới Trẻ (4 Cuốn)',
        ZH: '⚔️ 青少年像素冒险与科幻未来包 (4本)',
        JA: '⚔️ 青少年ピクセル冒険＆SF未来館パッケージ (4冊)'
      },
      reward: '🤖 픽셀 AI 로봇 마우스패드 증정',
      desc: {
        KO: 'AI 기술 윤리, 우주 도서관 탐험, 역사 속 위인 영웅들의 아케이드 퀘스트를 담은 청소년 추천 서적',
        EN: 'Recommended youth books covering AI ethics, cosmic libraries, and historical heroes in pixel quests.',
        VI: 'Sách hay cho giới trẻ về đạo đức AI, thư viện vũ trụ và vĩ nhân lịch sử.',
        ZH: '涵盖AI科技伦理、宇宙图书馆探索及历史名人的青少年推荐读物。',
        JA: 'AI倫理、宇宙図書館探検、歴史的偉人たちのクエストを掲載した青少年推奨書。'
      },
      bookIds: ['bk-05', 'bk-08', 'bk-11', 'bk-12']
    }
  ];

  /* ==========================================================================
     4. WEB AUDIO 8-BIT CHIPTUNE SFX ENGINE
     ========================================================================== */
  const SoundFX = (function () {
    let audioCtx = null;
    let enabled = true;

    function getAudioContext() {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    return {
      toggleSound: function () {
        enabled = !enabled;
        return enabled;
      },
      isEnabled: function () {
        return enabled;
      },
      playCoin: function () {
        if (!enabled) return;
        try {
          const ctx = getAudioContext();
          const now = ctx.currentTime;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'square';
          osc.frequency.setValueAtTime(987.77, now); // B5
          osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + 0.35);
        } catch (e) {
          console.warn('Audio play error:', e);
        }
      },
      playClick: function () {
        if (!enabled) return;
        try {
          const ctx = getAudioContext();
          const now = ctx.currentTime;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(220, now + 0.05);

          gain.gain.setValueAtTime(0.1, now);
          gain.gain.linearRampToValueAtTime(0.001, now + 0.05);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + 0.05);
        } catch (e) {
          console.warn('Audio play error:', e);
        }
      },
      playLevelUp: function () {
        if (!enabled) return;
        try {
          const ctx = getAudioContext();
          const now = ctx.currentTime;
          const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
          notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);

            gain.gain.setValueAtTime(0.12, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.2);
          });
        } catch (e) {
          console.warn('Audio play error:', e);
        }
      },
      playAudioNarrationSynth: function (notesArray, onComplete) {
        if (!enabled) {
          if (onComplete) onComplete();
          return null;
        }
        try {
          const ctx = getAudioContext();
          const now = ctx.currentTime;
          const notes = (notesArray && notesArray.length) ? notesArray : [523.25, 659.25, 783.99, 1046.50];
          
          let totalTime = 0;
          notes.forEach((freq, idx) => {
            const startTime = now + idx * 0.3;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'square';
            osc.frequency.setValueAtTime(freq, startTime);
            osc.frequency.linearRampToValueAtTime(freq * 1.05, startTime + 0.25);

            gain.gain.setValueAtTime(0.18, startTime);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.28);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(startTime);
            osc.stop(startTime + 0.28);

            totalTime = idx * 0.3 + 0.3;
          });

          if (onComplete) {
            setTimeout(onComplete, totalTime * 1000);
          }
        } catch (e) {
          console.warn('Audio synth error:', e);
          if (onComplete) onComplete();
        }
      }
    };
  })();

  /* ==========================================================================
     5. PIXEL STARBURST PARTICLE FX (CANVAS OVERLAY)
     ========================================================================== */
  const PixelStarburst = (function () {
    let canvas = null;
    let ctx = null;
    let particles = [];
    const colors = ['#ffc825', '#00e5ff', '#39ff14', '#e040fb', '#ff0055', '#ffffff'];

    function init() {
      canvas = document.getElementById('pixel-starburst-canvas');
      if (!canvas) return;
      ctx = canvas.getContext('2d');
      resize();
      window.addEventListener('resize', resize);
      requestAnimationFrame(loop);

      document.addEventListener('click', function (e) {
        spawnBurst(e.clientX, e.clientY);
      });
    }

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function spawnBurst(x, y) {
      const count = 12;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i + (Math.random() * 0.2);
        const speed = 2 + Math.random() * 4;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          size: Math.random() > 0.5 ? 4 : 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1.0,
          decay: 0.03 + Math.random() * 0.03
        });
      }
    }

    function loop() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.15; // Gravity
          p.life -= p.decay;

          if (p.life <= 0) {
            particles.splice(i, 1);
          } else {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.life;
            ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
          }
        }
        ctx.globalAlpha = 1.0;
      }
      requestAnimationFrame(loop);
    }

    return { init: init, spawnBurst: spawnBurst };
  })();

  /* ==========================================================================
     6. THREE.JS 3D VOXEL PIXEL GRAPHICS ENGINE
     ========================================================================== */
  // HERO 3D Scene: 3D Voxel Pixel Floating Island
  const Hero3D = (function () {
    let scene, camera, renderer, controls;
    let islandGroup, booksGroup, coinsGroup;
    let animFrameId = null;

    function init() {
      const container = document.getElementById('hero-3d-canvas');
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x130f24);

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 12, 22);

      renderer = new THREE.WebGLRenderer({ canvas: container, antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;

      // OrbitControls
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxPolarAngle = Math.PI / 2 + 0.1;
      controls.minDistance = 10;
      controls.maxDistance = 40;

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffc825, 1.0);
      dirLight.position.set(15, 25, 15);
      dirLight.castShadow = true;
      scene.add(dirLight);

      const pointLight = new THREE.PointLight(0x00e5ff, 1.2, 30);
      pointLight.position.set(-10, 10, -5);
      scene.add(pointLight);

      // Groups
      islandGroup = new THREE.Group();
      booksGroup = new THREE.Group();
      coinsGroup = new THREE.Group();
      scene.add(islandGroup);
      scene.add(booksGroup);
      scene.add(coinsGroup);

      buildVoxelIsland();
      buildFloatingVoxelBooks();
      buildOrbitingCoinsAndStars();

      window.addEventListener('resize', onWindowResize);

      const resetBtn = document.getElementById('btn-hero-3d-reset');
      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          camera.position.set(0, 12, 22);
          controls.target.set(0, 0, 0);
          controls.update();
        });
      }

      animate();
    }

    function buildVoxelIsland() {
      const boxGeo = new THREE.BoxGeometry(1, 1, 1);

      // Grass Materials
      const matTopGrass = new THREE.MeshStandardMaterial({ color: 0x39ff14, roughness: 0.6 });
      const matGrassSide = new THREE.MeshStandardMaterial({ color: 0x4caf50, roughness: 0.6 });
      const matDirt = new THREE.MeshStandardMaterial({ color: 0x795548, roughness: 0.8 });
      const matStone = new THREE.MeshStandardMaterial({ color: 0x607d8b, roughness: 0.5 });
      const matWood = new THREE.MeshStandardMaterial({ color: 0x5d4037, roughness: 0.7 });
      const matLeaves = new THREE.MeshStandardMaterial({ color: 0x00e676, roughness: 0.4 });

      // Create Island Voxels (Layered Pyramid/Floating Rock)
      const radius = 6;
      for (let x = -radius; x <= radius; x++) {
        for (let z = -radius; z <= radius; z++) {
          const dist = Math.sqrt(x * x + z * z);
          if (dist <= radius) {
            // Top layer (Grass)
            const meshTop = new THREE.Mesh(boxGeo, (x + z) % 2 === 0 ? matTopGrass : matGrassSide);
            meshTop.position.set(x, 0, z);
            meshTop.castShadow = true;
            meshTop.receiveShadow = true;
            islandGroup.add(meshTop);

            // Dirt layer
            if (dist <= radius - 0.5) {
              const meshDirt = new THREE.Mesh(boxGeo, matDirt);
              meshDirt.position.set(x, -1, z);
              islandGroup.add(meshDirt);
            }

            // Stone Underneath
            if (dist <= radius - 2) {
              const meshStone = new THREE.Mesh(boxGeo, matStone);
              meshStone.position.set(x, -2, z);
              islandGroup.add(meshStone);

              if (dist <= radius - 3.5) {
                const meshBottom = new THREE.Mesh(boxGeo, matStone);
                meshBottom.position.set(x, -3, z);
                islandGroup.add(meshBottom);
              }
            }
          }
        }
      }

      // Add Voxel Trees
      createTree(-3, 1, -3);
      createTree(4, 1, 2);
      createTree(-2, 1, 3);

      function createTree(tx, ty, tz) {
        // Trunk
        for (let h = 0; h < 3; h++) {
          const trunk = new THREE.Mesh(boxGeo, matWood);
          trunk.position.set(tx, ty + h, tz);
          islandGroup.add(trunk);
        }
        // Leaves
        for (let lx = -1; lx <= 1; lx++) {
          for (let lz = -1; lz <= 1; lz++) {
            for (let ly = 3; ly <= 4; ly++) {
              const leaf = new THREE.Mesh(boxGeo, matLeaves);
              leaf.position.set(tx + lx, ty + ly, tz + lz);
              islandGroup.add(leaf);
            }
          }
        }
      }
    }

    function buildFloatingVoxelBooks() {
      // 3 Voxel Books hovering over the island
      const colors = [0xffc825, 0x00e5ff, 0xe040fb];
      for (let i = 0; i < 3; i++) {
        const bookGroup = new THREE.Group();

        const coverGeo = new THREE.BoxGeometry(2.4, 0.4, 3.2);
        const coverMat = new THREE.MeshStandardMaterial({ color: colors[i], roughness: 0.3 });
        const cover = new THREE.Mesh(coverGeo, coverMat);

        const pageGeo = new THREE.BoxGeometry(2.2, 0.35, 3.0);
        const pageMat = new THREE.MeshStandardMaterial({ color: 0xfff4d1, roughness: 0.9 });
        const page = new THREE.Mesh(pageGeo, pageMat);
        page.position.set(0.1, 0, 0);

        bookGroup.add(cover);
        bookGroup.add(page);

        const angle = (Math.PI * 2 / 3) * i;
        bookGroup.position.set(Math.cos(angle) * 4.5, 3.5, Math.sin(angle) * 4.5);
        bookGroup.rotation.y = angle;

        bookGroup.userData = { angle: angle, speed: 0.015, baseY: 3.5 + i * 0.3 };
        booksGroup.add(bookGroup);
      }
    }

    function buildOrbitingCoinsAndStars() {
      const coinGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 8);
      const coinMat = new THREE.MeshStandardMaterial({ color: 0xffc825, metalness: 0.8, roughness: 0.2 });

      for (let i = 0; i < 8; i++) {
        const coin = new THREE.Mesh(coinGeo, coinMat);
        const angle = (Math.PI * 2 / 8) * i;
        coin.position.set(Math.cos(angle) * 7.5, 1.5 + Math.sin(i) * 1.0, Math.sin(angle) * 7.5);
        coin.rotation.x = Math.PI / 2;
        coin.userData = { angle: angle, speed: 0.02, radius: 7.5 };
        coinsGroup.add(coin);
      }
    }

    function onWindowResize() {
      const container = document.getElementById('hero-3d-canvas');
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function animate() {
      animFrameId = requestAnimationFrame(animate);

      if (islandGroup) {
        islandGroup.rotation.y += 0.003;
      }

      if (booksGroup) {
        const time = Date.now() * 0.002;
        booksGroup.children.forEach((bk, idx) => {
          bk.userData.angle += bk.userData.speed;
          bk.position.x = Math.cos(bk.userData.angle) * 4.8;
          bk.position.z = Math.sin(bk.userData.angle) * 4.8;
          bk.position.y = bk.userData.baseY + Math.sin(time + idx) * 0.4;
          bk.rotation.y += 0.02;
        });
      }

      if (coinsGroup) {
        coinsGroup.children.forEach((coin) => {
          coin.userData.angle += coin.userData.speed;
          coin.position.x = Math.cos(coin.userData.angle) * coin.userData.radius;
          coin.position.z = Math.sin(coin.userData.angle) * coin.userData.radius;
          coin.rotation.z += 0.05;
        });
      }

      controls.update();
      renderer.render(scene, camera);
    }

    return { init: init };
  })();

  // DETAIL 3D Scene: 360° 3D Voxel Pixel Book Preview
  const Detail3D = (function () {
    let scene, camera, renderer, controls;
    let bookMeshGroup, laserPlane;
    let isAutoRotate = true;
    let isScanning = false;
    let animFrameId = null;

    function init() {
      const container = document.getElementById('detail-3d-canvas');
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x130f24);

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 3, 10);

      renderer = new THREE.WebGLRenderer({ canvas: container, antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffc825, 1.2);
      dirLight.position.set(10, 15, 10);
      scene.add(dirLight);

      bookMeshGroup = new THREE.Group();
      scene.add(bookMeshGroup);

      // Laser Scan Plane
      const laserGeo = new THREE.PlaneGeometry(6, 6);
      const laserMat = new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide
      });
      laserPlane = new THREE.Mesh(laserGeo, laserMat);
      laserPlane.rotation.x = Math.PI / 2;
      scene.add(laserPlane);

      buildVoxelBookModel(0xffc825);

      window.addEventListener('resize', onWindowResize);

      // HUD Button Listeners
      const autoBtn = document.getElementById('btn-detail-auto-rotate');
      if (autoBtn) {
        autoBtn.addEventListener('click', function () {
          isAutoRotate = !isAutoRotate;
          autoBtn.classList.toggle('active', isAutoRotate);
          SoundFX.playClick();
        });
      }

      const laserBtn = document.getElementById('btn-detail-laser');
      if (laserBtn) {
        laserBtn.addEventListener('click', function () {
          triggerLaserScan();
          SoundFX.playCoin();
        });
      }

      const resetBtn = document.getElementById('btn-detail-reset-cam');
      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          camera.position.set(0, 3, 10);
          controls.target.set(0, 0, 0);
          controls.update();
          SoundFX.playClick();
        });
      }

      animate();
    }

    function buildVoxelBookModel(themeHex) {
      // Clear previous book
      while (bookMeshGroup.children.length > 0) {
        bookMeshGroup.remove(bookMeshGroup.children[0]);
      }

      const boxGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);

      const matCover = new THREE.MeshStandardMaterial({ color: themeHex, roughness: 0.3 });
      const matSpine = new THREE.MeshStandardMaterial({ color: 0x00e5ff, roughness: 0.4 });
      const matPage = new THREE.MeshStandardMaterial({ color: 0xfff4d1, roughness: 0.8 });
      const matEmblem = new THREE.MeshStandardMaterial({ color: 0xffe600, roughness: 0.2 });

      // Build Voxel Book (Dimensions: 14 x 18 x 3 voxels)
      const widthVoxels = 14;
      const heightVoxels = 18;
      const depthVoxels = 3;

      for (let x = -widthVoxels / 2; x < widthVoxels / 2; x++) {
        for (let y = -heightVoxels / 2; y < heightVoxels / 2; y++) {
          for (let z = -depthVoxels / 2; z < depthVoxels / 2; z++) {
            let mat = matCover;

            // Spine
            if (x === -widthVoxels / 2) {
              mat = matSpine;
            }
            // Inner Pages
            else if (x > -widthVoxels / 2 + 1 && (z === 0 || y === -heightVoxels / 2 + 1 || y === heightVoxels / 2 - 1 || x === widthVoxels / 2 - 1)) {
              if (z === 0 && x < widthVoxels / 2 - 1) {
                mat = matPage;
              }
            }
            // Front Cover Emblem
            if (z === depthVoxels / 2 - 1 && Math.abs(x) <= 2 && Math.abs(y) <= 2) {
              mat = matEmblem;
            }

            const voxel = new THREE.Mesh(boxGeo, mat);
            voxel.position.set(x * 0.3, y * 0.3, z * 0.3);
            bookMeshGroup.add(voxel);
          }
        }
      }
    }

    function updateThemeColor(colorHex) {
      if (bookMeshGroup) {
        buildVoxelBookModel(colorHex || 0xffc825);
      }
    }

    function triggerLaserScan() {
      if (!laserPlane) return;
      isScanning = true;
      laserPlane.position.y = 4;
      laserPlane.material.opacity = 0.8;
    }

    function onWindowResize() {
      const container = document.getElementById('detail-3d-canvas');
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function animate() {
      animFrameId = requestAnimationFrame(animate);

      if (bookMeshGroup && isAutoRotate) {
        bookMeshGroup.rotation.y += 0.01;
      }

      if (isScanning && laserPlane) {
        laserPlane.position.y -= 0.15;
        if (laserPlane.position.y < -4) {
          isScanning = false;
          laserPlane.material.opacity = 0;
        }
      }

      controls.update();
      renderer.render(scene, camera);
    }

    return { init: init, updateThemeColor: updateThemeColor };
  })();

  /* ==========================================================================
     7. APP STATE & I18N SYSTEM
     ========================================================================== */
  let currentLang = 'KO';
  let currentNav = 'home';
  let cartItems = []; // Array of { bookId, qty }
  let activeBookDetailId = 'bk-01';

  // Load cart state from localStorage
  try {
    const saved = localStorage.getItem('cart_v24');
    if (saved) cartItems = JSON.parse(saved);
  } catch (e) {
    cartItems = [];
  }

  function saveCart() {
    try {
      localStorage.setItem('cart_v24', JSON.stringify(cartItems));
    } catch (e) { }
  }

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;

    // Update active lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang][key]) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (TRANSLATIONS[lang][key]) {
        el.setAttribute('placeholder', TRANSLATIONS[lang][key]);
      }
    });

    // Re-render components that depend on lang
    renderNewReleases();
    renderGalleryExhibition();
    SearchEngine.render();
    renderCurationPackages();
    CartManager.renderTable();
    renderBookDetail(activeBookDetailId);
  }

  /* ==========================================================================
     8. TOAST NOTIFICATIONS
     ========================================================================== */
  function showToast(msg, type) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'pixel-toast ' + (type === 'success' ? 'toast-success' : 'toast-info');
    toast.innerHTML = '<span>👾</span> <span>' + msg + '</span>';

    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  /* ==========================================================================
     9. SEARCH ENGINE & FILTERS
     ========================================================================== */
  const SearchEngine = (function () {
    let currentTag = 'ALL';
    let currentViewMode = 'grid';

    function init() {
      const kwInput = document.getElementById('search-keyword');
      const langSel = document.getElementById('filter-lang');
      const ageSel = document.getElementById('filter-age');
      const kdcSel = document.getElementById('filter-kdc');
      const pubSel = document.getElementById('filter-publisher');
      const clearBtn = document.getElementById('btn-search-clear');
      const resetBtn = document.getElementById('btn-reset-filters');
      const submitBtn = document.getElementById('btn-search-submit');

      if (kwInput) kwInput.addEventListener('input', render);
      if (langSel) langSel.addEventListener('change', render);
      if (ageSel) ageSel.addEventListener('change', render);
      if (kdcSel) kdcSel.addEventListener('change', render);
      if (pubSel) pubSel.addEventListener('change', render);

      if (clearBtn && kwInput) {
        clearBtn.addEventListener('click', function () {
          kwInput.value = '';
          render();
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', function () {
          if (kwInput) kwInput.value = '';
          if (langSel) langSel.value = 'ALL';
          if (ageSel) ageSel.value = 'ALL';
          if (kdcSel) kdcSel.value = 'ALL';
          if (pubSel) pubSel.value = 'ALL';
          currentTag = 'ALL';
          updateQuestTagButtons();
          render();
          SoundFX.playClick();
        });
      }

      if (submitBtn) {
        submitBtn.addEventListener('click', function () {
          render();
          SoundFX.playClick();
        });
      }

      // Quest tag buttons
      document.querySelectorAll('.quest-tag-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          currentTag = btn.dataset.tag;
          updateQuestTagButtons();
          render();
          SoundFX.playClick();
        });
      });

      // View Mode Toggle in New Releases
      const gridBtn = document.getElementById('btn-view-grid');
      const listBtn = document.getElementById('btn-view-list');
      if (gridBtn && listBtn) {
        gridBtn.addEventListener('click', function () {
          currentViewMode = 'grid';
          gridBtn.classList.add('active');
          listBtn.classList.remove('active');
          renderNewReleases();
          SoundFX.playClick();
        });
        listBtn.addEventListener('click', function () {
          currentViewMode = 'list';
          listBtn.classList.add('active');
          gridBtn.classList.remove('active');
          renderNewReleases();
          SoundFX.playClick();
        });
      }

      // Bulk Add Selected to Cart
      const bulkBtn = document.getElementById('btn-bulk-add-cart');
      if (bulkBtn) {
        bulkBtn.addEventListener('click', function () {
          const filtered = getFilteredBooks();
          filtered.forEach(b => CartManager.addToCart(b.id, 1));
          showToast(TRANSLATIONS[currentLang].toastAdded, 'success');
          SoundFX.playCoin();
        });
      }
    }

    function updateQuestTagButtons() {
      document.querySelectorAll('.quest-tag-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tag === currentTag);
      });
    }

    function getFilteredBooks() {
      const kw = (document.getElementById('search-keyword')?.value || '').toLowerCase().trim();
      const lang = document.getElementById('filter-lang')?.value || 'ALL';
      const age = document.getElementById('filter-age')?.value || 'ALL';
      const kdc = document.getElementById('filter-kdc')?.value || 'ALL';
      const pub = document.getElementById('filter-publisher')?.value || 'ALL';

      return BOOKS_DATA.filter(bk => {
        // Keyword
        if (kw) {
          const titleStr = (bk.title[currentLang] || bk.title.KO || '').toLowerCase();
          const authorStr = (bk.author[currentLang] || bk.author.KO || '').toLowerCase();
          const pubStr = (bk.publisher || '').toLowerCase();
          const isbnStr = (bk.isbn || '').toLowerCase();
          if (!titleStr.includes(kw) && !authorStr.includes(kw) && !pubStr.includes(kw) && !isbnStr.includes(kw)) {
            return false;
          }
        }
        // Lang
        if (lang !== 'ALL' && bk.language !== lang) return false;
        // Age
        if (age !== 'ALL' && bk.targetAge !== age) return false;
        // KDC
        if (kdc !== 'ALL' && !bk.kdc.startsWith(kdc)) return false;
        // Publisher
        if (pub !== 'ALL' && bk.publisher !== pub) return false;
        // Tag
        if (currentTag !== 'ALL' && bk.questTag !== currentTag) return false;

        return true;
      });
    }

    function render() {
      const container = document.getElementById('search-results-grid');
      const countEl = document.getElementById('search-results-count');
      if (!container) return;

      const filtered = getFilteredBooks();
      if (countEl) countEl.textContent = filtered.length;

      container.innerHTML = filtered.map(bk => createBookCardHTML(bk)).join('');
      attachBookCardEvents(container);
    }

    return { init: init, render: render, getFilteredBooks: getFilteredBooks, getCurrentViewMode: function () { return currentViewMode; } };
  })();

  /* Helper HTML Generator for Book Card */
  function createBookCardHTML(bk) {
    const title = bk.title[currentLang] || bk.title.KO;
    const sub = bk.subtitle[currentLang] || bk.subtitle.KO;
    const author = bk.author[currentLang] || bk.author.KO;

    return `
      <div class="book-card" data-id="${bk.id}">
        <div class="book-card-top">
          <div class="book-cover-box" style="border-color: #${bk.themeColor.toString(16)}">
            <span class="book-cover-icon">${bk.coverEmoji}</span>
            <span class="book-cover-tag">${bk.language}</span>
          </div>
          <div class="book-card-info">
            <div class="book-badges-row">
              <span class="pixel-badge badge-cyan">${bk.targetAge}</span>
              <span class="pixel-badge badge-purple">#${bk.questTag}</span>
            </div>
            <h3 class="book-card-title">${title}</h3>
            <div class="book-card-sub">${sub}</div>
            <div class="book-meta-line">저자: ${author} | NXB: ${bk.publisher}</div>
            <div class="book-price-box">
              <span class="price-regular">${bk.price.toLocaleString()}원</span>
              <span class="price-supply">${bk.supplyPrice.toLocaleString()}원</span>
            </div>
          </div>
        </div>
        <div class="book-card-actions">
          <button class="pixel-btn pixel-btn-cyan btn-sm btn-card-detail" data-id="${bk.id}">
            <i data-lucide="eye"></i> 360° 3D 뷰
          </button>
          <button class="pixel-btn pixel-btn-gold btn-sm btn-card-add" data-id="${bk.id}">
            <i data-lucide="shopping-bag"></i> 담기
          </button>
        </div>
      </div>
    `;
  }

  function attachBookCardEvents(container) {
    if (!container) return;
    if (window.lucide) lucide.createIcons();

    container.querySelectorAll('.btn-card-detail').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const id = btn.dataset.id;
        navigateTo('detail', id);
        SoundFX.playClick();
      });
    });

    container.querySelectorAll('.btn-card-add').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const id = btn.dataset.id;
        CartManager.addToCart(id, 1);
        showToast(TRANSLATIONS[currentLang].toastAdded, 'success');
        SoundFX.playCoin();
      });
    });
  }

  /* Renders 3D Arcade Dungeon Gallery Exhibition on #home */
  function renderGalleryExhibition() {
    const container = document.getElementById('arcade-gallery-grid');
    if (!container) return;

    const featured = BOOKS_DATA.slice(0, 4);
    container.innerHTML = featured.map(bk => {
      const title = bk.title[currentLang] || bk.title.KO;
      const sub = bk.subtitle[currentLang] || bk.subtitle.KO;
      return `
        <div class="gallery-card pixel-panel">
          <div class="gallery-pedestal">
            <span>${bk.coverEmoji}</span>
          </div>
          <h3 class="gallery-book-title">${title}</h3>
          <p class="gallery-book-sub">${sub}</p>
          <button class="pixel-btn pixel-btn-gold btn-sm btn-card-detail" data-id="${bk.id}" style="width: 100%;">
            <i data-lucide="eye"></i> 3D Voxel 스펙 감상
          </button>
        </div>
      `;
    }).join('');

    attachBookCardEvents(container);
  }

  /* Renders New Releases on #home */
  function renderNewReleases() {
    const container = document.getElementById('new-releases-container');
    if (!container) return;

    const newBooks = BOOKS_DATA.filter(b => b.isNew);
    container.innerHTML = newBooks.map(bk => createBookCardHTML(bk)).join('');
    attachBookCardEvents(container);
  }

  /* Renders Curation Packages on #curation */
  function renderCurationPackages() {
    const container = document.getElementById('curation-packages-container');
    if (!container) return;

    container.innerHTML = CURATION_PACKAGES.map(pkg => {
      const title = pkg.title[currentLang] || pkg.title.KO;
      const desc = pkg.desc[currentLang] || pkg.desc.KO;
      const pkgBooks = pkg.bookIds.map(id => BOOKS_DATA.find(b => b.id === id)).filter(Boolean);
      const pkgSupplyTotal = pkgBooks.reduce((sum, b) => sum + b.supplyPrice, 0);

      return `
        <div class="package-card pixel-panel">
          <div class="package-header">
            <h3 class="package-title">${title}</h3>
            <span class="package-reward-badge">${pkg.reward}</span>
          </div>
          <p class="package-desc">${desc}</p>
          <div class="package-books-list">
            ${pkgBooks.map(b => `
              <div class="pkg-book-item">
                <span class="pkg-title">${b.coverEmoji} ${b.title[currentLang] || b.title.KO}</span>
                <span class="pkg-price">${b.supplyPrice.toLocaleString()}원</span>
              </div>
            `).join('')}
          </div>
          <div class="package-footer">
            <div class="package-total-box">
              <span class="pkg-total-label">패키지 사서 납품 특가:</span>
              <span class="pkg-total-price">${pkgSupplyTotal.toLocaleString()}원</span>
            </div>
            <button class="pixel-btn pixel-btn-purple btn-add-pkg" data-id="${pkg.id}">
              <i data-lucide="plus-circle"></i>
              <span>${TRANSLATIONS[currentLang].btnAddPackageCart}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();

    container.querySelectorAll('.btn-add-pkg').forEach(btn => {
      btn.addEventListener('click', function () {
        const pkgId = btn.dataset.id;
        const pkg = CURATION_PACKAGES.find(p => p.id === pkgId);
        if (pkg) {
          pkg.bookIds.forEach(id => CartManager.addToCart(id, 1));
          showToast(TRANSLATIONS[currentLang].toastAdded, 'success');
          SoundFX.playLevelUp();
        }
      });
    });
  }

  /* ==========================================================================
     10. CART MANAGER & PDF / EXCEL EXPORT
     ========================================================================== */
  const CartManager = (function () {
    function addToCart(bookId, qty) {
      const existing = cartItems.find(item => item.bookId === bookId);
      if (existing) {
        existing.qty += (qty || 1);
      } else {
        cartItems.push({ bookId: bookId, qty: qty || 1 });
      }
      saveCart();
      updateBadge();
      renderTable();
    }

    function removeFromCart(bookId) {
      cartItems = cartItems.filter(item => item.bookId !== bookId);
      saveCart();
      updateBadge();
      renderTable();
    }

    function updateQty(bookId, qty) {
      const item = cartItems.find(i => i.bookId === bookId);
      if (item) {
        item.qty = Math.max(1, qty);
        saveCart();
        updateBadge();
        renderTable();
      }
    }

    function updateBadge() {
      const badge = document.getElementById('cart-nav-badge');
      const totalCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
      if (badge) badge.textContent = totalCount;
    }

    function renderTable() {
      const body = document.getElementById('cart-table-body');
      const emptyBanner = document.getElementById('cart-empty-banner');
      if (!body) return;

      if (cartItems.length === 0) {
        body.innerHTML = '';
        if (emptyBanner) emptyBanner.style.display = 'block';
        updateStats(0, 0, 0, 0);
        return;
      }

      if (emptyBanner) emptyBanner.style.display = 'none';

      let totalTitles = cartItems.length;
      let totalCopies = 0;
      let totalRegular = 0;
      let totalSupply = 0;

      body.innerHTML = cartItems.map(item => {
        const bk = BOOKS_DATA.find(b => b.id === item.bookId);
        if (!bk) return '';

        const subtotalRegular = bk.price * item.qty;
        const subtotalSupply = bk.supplyPrice * item.qty;

        totalCopies += item.qty;
        totalRegular += subtotalRegular;
        totalSupply += subtotalSupply;

        const title = bk.title[currentLang] || bk.title.KO;
        const author = bk.author[currentLang] || bk.author.KO;

        return `
          <tr data-id="${bk.id}">
            <td class="col-chk"><input type="checkbox" class="chk-cart-item" data-id="${bk.id}" checked></td>
            <td class="col-cover">
              <div class="book-cover-box" style="width: 50px; height: 65px; border-color: #${bk.themeColor.toString(16)}">
                <span style="font-size: 1.5rem;">${bk.coverEmoji}</span>
              </div>
            </td>
            <td class="col-info">
              <div class="cart-book-title">${title}</div>
              <div class="cart-book-sub">ISBN: ${bk.isbn} | KDC: ${bk.kdc}</div>
              <div class="cart-book-meta">저자: ${author} | NXB: ${bk.publisher}</div>
            </td>
            <td class="col-price">${bk.price.toLocaleString()}원</td>
            <td class="col-discount">${bk.supplyPrice.toLocaleString()}원</td>
            <td class="col-qty">
              <div class="qty-control">
                <button class="qty-btn btn-cart-minus" data-id="${bk.id}">-</button>
                <input type="number" class="pixel-input-sm cart-qty-input" data-id="${bk.id}" value="${item.qty}" min="1">
                <button class="qty-btn btn-cart-plus" data-id="${bk.id}">+</button>
              </div>
            </td>
            <td class="col-subtotal">${subtotalSupply.toLocaleString()}원</td>
            <td class="col-action">
              <button class="pixel-btn-xs pixel-btn-red btn-cart-remove" data-id="${bk.id}"><i data-lucide="trash-2"></i></button>
            </td>
          </tr>
        `;
      }).join('');

      if (window.lucide) lucide.createIcons();
      updateStats(totalTitles, totalCopies, totalRegular, totalSupply);
      attachCartEvents();
    }

    function updateStats(titles, copies, regular, supply) {
      const elTitles = document.getElementById('cart-stat-titles');
      const elCopies = document.getElementById('cart-stat-copies');
      const elRegular = document.getElementById('cart-stat-regular');
      const elSupply = document.getElementById('cart-stat-supply');

      if (elTitles) elTitles.textContent = titles + '종';
      if (elCopies) elCopies.textContent = copies + '권';
      if (elRegular) elRegular.textContent = regular.toLocaleString() + '원';
      if (elSupply) elSupply.textContent = supply.toLocaleString() + '원';
    }

    function attachCartEvents() {
      const body = document.getElementById('cart-table-body');
      if (!body) return;

      body.querySelectorAll('.btn-cart-minus').forEach(btn => {
        btn.addEventListener('click', function () {
          const id = btn.dataset.id;
          const item = cartItems.find(i => i.bookId === id);
          if (item && item.qty > 1) updateQty(id, item.qty - 1);
        });
      });

      body.querySelectorAll('.btn-cart-plus').forEach(btn => {
        btn.addEventListener('click', function () {
          const id = btn.dataset.id;
          const item = cartItems.find(i => i.bookId === id);
          if (item) updateQty(id, item.qty + 1);
        });
      });

      body.querySelectorAll('.cart-qty-input').forEach(input => {
        input.addEventListener('change', function () {
          const id = input.dataset.id;
          const val = parseInt(input.value) || 1;
          updateQty(id, val);
        });
      });

      body.querySelectorAll('.btn-cart-remove').forEach(btn => {
        btn.addEventListener('click', function () {
          const id = btn.dataset.id;
          removeFromCart(id);
          SoundFX.playClick();
        });
      });
    }

    function generatePDF() {
      if (cartItems.length === 0) {
        showToast('장바구니가 비어 있습니다.', 'info');
        return;
      }

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      const instName = document.getElementById('inst-name')?.value || '국립다문화 어린이도서관';
      const librarianName = document.getElementById('librarian-name')?.value || '김사서 수서팀장';
      const contact = document.getElementById('inst-contact')?.value || '02-1234-5678';

      // PDF Title Header
      doc.setFillColor(15, 13, 27);
      doc.rect(0, 0, 210, 35, 'F');

      doc.setTextColor(255, 200, 37);
      doc.setFontSize(16);
      doc.text('MULTICULTURAL PIXEL LIBRARY OFFICIAL QUOTE', 15, 18);
      doc.setFontSize(10);
      doc.setTextColor(0, 229, 255);
      doc.text('[B2B OFFICIAL ACQUISITION SPECIFICATION SHEET v24]', 15, 26);

      // Info Block
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      doc.text(`Institution: ${instName}`, 15, 48);
      doc.text(`Librarian: ${librarianName}`, 15, 55);
      doc.text(`Contact: ${contact}`, 15, 62);
      doc.text(`Date: ${new Date().toISOString().split('T')[0]}`, 150, 48);

      // Table Header
      let y = 75;
      doc.setFillColor(230, 230, 250);
      doc.rect(15, y, 180, 10, 'F');
      doc.setFontSize(9);
      doc.text('No.', 18, y + 7);
      doc.text('Book Title & ISBN', 35, y + 7);
      doc.text('KDC', 115, y + 7);
      doc.text('Qty', 135, y + 7);
      doc.text('Price', 150, y + 7);
      doc.text('Subtotal', 172, y + 7);

      y += 12;
      let totalSupply = 0;

      cartItems.forEach((item, idx) => {
        const bk = BOOKS_DATA.find(b => b.id === item.bookId);
        if (!bk) return;

        const subtotal = bk.supplyPrice * item.qty;
        totalSupply += subtotal;

        const title = bk.title.KO || bk.title[currentLang];

        doc.text(`${idx + 1}`, 18, y);
        doc.text(`${title.substring(0, 28)} (${bk.isbn})`, 35, y);
        doc.text(`${bk.kdc}`, 115, y);
        doc.text(`${item.qty}`, 135, y);
        doc.text(`${bk.supplyPrice.toLocaleString()}W`, 150, y);
        doc.text(`${subtotal.toLocaleString()}W`, 172, y);

        y += 8;
        if (y > 250) {
          doc.addPage();
          y = 20;
        }
      });

      // Total Box
      y += 5;
      doc.setDrawColor(0, 0, 0);
      doc.rect(15, y, 180, 15);
      doc.setFontSize(12);
      doc.text(`Total Procurement Price (10% Discount): ${totalSupply.toLocaleString()} KRW`, 20, y + 10);

      // Official Pixel Bit Seal (Red Pixel Stamp)
      const sealX = 150;
      const sealY = y + 25;
      doc.setDrawColor(255, 0, 85);
      doc.setLineWidth(1.5);
      doc.rect(sealX, sealY, 40, 20);
      doc.setTextColor(255, 0, 85);
      doc.setFontSize(8);
      doc.text('PIXEL BIT SEAL', sealX + 5, sealY + 8);
      doc.text('픽셀 수서 직인', sealX + 6, sealY + 15);

      doc.save(`Multicultural_Library_Quote_v24_${new Date().toISOString().split('T')[0]}.pdf`);
      showToast(TRANSLATIONS[currentLang].toastPdfSuccess, 'success');
      SoundFX.playLevelUp();
    }

    function exportExcel() {
      if (cartItems.length === 0) {
        showToast('장바구니가 비어 있습니다.', 'info');
        return;
      }

      const rows = [
        ['No', 'ISBN', 'KDC Classification', 'Book Title', 'Author', 'Publisher', 'Target Age', 'List Price', '10% B2B Supply Price', 'Qty', 'Subtotal']
      ];

      cartItems.forEach((item, idx) => {
        const bk = BOOKS_DATA.find(b => b.id === item.bookId);
        if (!bk) return;

        const title = bk.title[currentLang] || bk.title.KO;
        const author = bk.author[currentLang] || bk.author.KO;

        rows.push([
          idx + 1,
          bk.isbn,
          bk.kdc,
          title,
          author,
          bk.publisher,
          bk.targetAge,
          bk.price,
          bk.supplyPrice,
          item.qty,
          bk.supplyPrice * item.qty
        ]);
      });

      const ws = XLSX.utils.aoa_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, '수서견적서_v24');

      XLSX.writeFile(wb, `KOLAS_III_Library_Spec_v24_${new Date().toISOString().split('T')[0]}.xlsx`);
      showToast(TRANSLATIONS[currentLang].toastExcelSuccess, 'success');
      SoundFX.playLevelUp();
    }

    return {
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      updateQty: updateQty,
      renderTable: renderTable,
      generatePDF: generatePDF,
      exportExcel: exportExcel,
      init: function () {
        updateBadge();

        const btnPdf = document.getElementById('btn-generate-pdf');
        if (btnPdf) btnPdf.addEventListener('click', generatePDF);

        const btnExcel = document.getElementById('btn-export-excel');
        if (btnExcel) btnExcel.addEventListener('click', exportExcel);

        const btnSelectAll = document.getElementById('btn-cart-select-all');
        const btnDeselectAll = document.getElementById('btn-cart-deselect-all');
        const btnDeleteSelected = document.getElementById('btn-cart-delete-selected');
        const btnClear = document.getElementById('btn-cart-clear');

        if (btnSelectAll) {
          btnSelectAll.addEventListener('click', function () {
            document.querySelectorAll('.chk-cart-item').forEach(c => c.checked = true);
          });
        }
        if (btnDeselectAll) {
          btnDeselectAll.addEventListener('click', function () {
            document.querySelectorAll('.chk-cart-item').forEach(c => c.checked = false);
          });
        }
        if (btnDeleteSelected) {
          btnDeleteSelected.addEventListener('click', function () {
            document.querySelectorAll('.chk-cart-item:checked').forEach(c => {
              removeFromCart(c.dataset.id);
            });
          });
        }
        if (btnClear) {
          btnClear.addEventListener('click', function () {
            cartItems = [];
            saveCart();
            updateBadge();
            renderTable();
            showToast(TRANSLATIONS[currentLang].toastCleared, 'info');
          });
        }
      }
    };
  })();

  /* ==========================================================================
     11. BOOK DETAIL VIEW & 8-BIT NARRATION AUDIO SYNTH PLAYER
     ========================================================================== */
  function renderBookDetail(bookId) {
    const bk = BOOKS_DATA.find(b => b.id === bookId);
    if (!bk) return;

    activeBookDetailId = bookId;

    const elTitle = document.getElementById('detail-book-title');
    const elSub = document.getElementById('detail-book-subtitle');
    const elReg = document.getElementById('detail-regular-price');
    const elSup = document.getElementById('detail-supply-price');
    const elAuthor = document.getElementById('detail-author');
    const elPublisher = document.getElementById('detail-publisher');
    const elIsbn = document.getElementById('detail-isbn');
    const elKdc = document.getElementById('detail-kdc');
    const elLang = document.getElementById('detail-lang');
    const elTags = document.getElementById('detail-tags');
    const elSynopsis = document.getElementById('detail-synopsis');
    const elBadges = document.getElementById('detail-badges-container');

    if (elTitle) elTitle.textContent = bk.title[currentLang] || bk.title.KO;
    if (elSub) elSub.textContent = bk.subtitle[currentLang] || bk.subtitle.KO;
    if (elReg) elReg.textContent = bk.price.toLocaleString() + '원';
    if (elSup) elSup.textContent = bk.supplyPrice.toLocaleString() + '원';
    if (elAuthor) elAuthor.textContent = bk.author[currentLang] || bk.author.KO;
    if (elPublisher) elPublisher.textContent = bk.publisher;
    if (elIsbn) elIsbn.textContent = bk.isbn;
    if (elKdc) elKdc.textContent = bk.kdc;
    if (elLang) elLang.textContent = bk.language;
    if (elTags) elTags.textContent = '#' + bk.questTag;
    if (elSynopsis) elSynopsis.textContent = bk.synopsis[currentLang] || bk.synopsis.KO;

    if (elBadges) {
      elBadges.innerHTML = `
        <span class="pixel-badge badge-gold">${bk.coverEmoji} ${bk.language}</span>
        <span class="pixel-badge badge-cyan">${bk.targetAge}</span>
        <span class="pixel-badge badge-purple">#${bk.questTag}</span>
      `;
    }

    // Update 3D Voxel Book Color
    Detail3D.updateThemeColor(bk.themeColor);

    // Attach Add to Cart on Detail Page
    const addBtn = document.getElementById('btn-detail-add-cart');
    const qtyInput = document.getElementById('detail-qty-input');
    const minusBtn = document.getElementById('btn-detail-qty-minus');
    const plusBtn = document.getElementById('btn-detail-qty-plus');

    if (minusBtn && qtyInput) {
      minusBtn.onclick = function () {
        let val = parseInt(qtyInput.value) || 1;
        if (val > 1) qtyInput.value = val - 1;
      };
    }
    if (plusBtn && qtyInput) {
      plusBtn.onclick = function () {
        let val = parseInt(qtyInput.value) || 1;
        qtyInput.value = val + 1;
      };
    }

    if (addBtn && qtyInput) {
      addBtn.onclick = function () {
        const qty = parseInt(qtyInput.value) || 1;
        CartManager.addToCart(bk.id, qty);
        showToast(TRANSLATIONS[currentLang].toastAdded, 'success');
        SoundFX.playCoin();
      };
    }

    // 8-Bit Audio Narration Player Synth
    const playAudioBtn = document.getElementById('btn-play-audio');
    const statusText = document.getElementById('audio-status-text');
    const visualizerBars = document.querySelectorAll('.v-bar');

    if (playAudioBtn) {
      playAudioBtn.onclick = function () {
        if (statusText) statusText.textContent = TRANSLATIONS[currentLang].lblAudioPlaying;
        visualizerBars.forEach(b => b.classList.add('playing'));

        SoundFX.playAudioNarrationSynth(bk.audioNotes, function () {
          if (statusText) statusText.textContent = TRANSLATIONS[currentLang].lblAudioReady;
          visualizerBars.forEach(b => b.classList.remove('playing'));
        });
      };
    }
  }

  /* ==========================================================================
     12. SPA ROUTER & APP INITIALIZATION
     ========================================================================== */
  function navigateTo(pageId, bookDetailId) {
    currentNav = pageId;

    document.querySelectorAll('.page-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const targetSec = document.getElementById('page-' + pageId);
    if (targetSec) {
      targetSec.classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.nav === pageId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pageId === 'search') {
      SearchEngine.render();
    } else if (pageId === 'curation') {
      renderCurationPackages();
    } else if (pageId === 'cart') {
      CartManager.renderTable();
    } else if (pageId === 'detail' && bookDetailId) {
      renderBookDetail(bookDetailId);
    }
  }

  function initRouter() {
    window.addEventListener('hashchange', function () {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (['home', 'search', 'curation', 'cart', 'detail'].includes(hash)) {
        navigateTo(hash, activeBookDetailId);
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function () {
        SoundFX.playClick();
      });
    });

    const backBtn = document.getElementById('btn-detail-back');
    if (backBtn) {
      backBtn.addEventListener('click', function () {
        window.history.back();
        SoundFX.playClick();
      });
    }
  }

  function initApp() {
    // 1. Init 8-Bit Pixel Starburst Canvas
    PixelStarburst.init();

    // 2. Init Sound FX Toggle
    const soundToggle = document.getElementById('btn-sound-toggle');
    const soundText = document.getElementById('sound-text');
    if (soundToggle) {
      soundToggle.addEventListener('click', function () {
        const enabled = SoundFX.toggleSound();
        if (soundText) soundText.textContent = enabled ? 'SFX ON' : 'SFX OFF';
        soundToggle.classList.toggle('pixel-btn-cyan', enabled);
        soundToggle.classList.toggle('pixel-btn-red', !enabled);
      });
    }

    // 3. Init Language Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const lang = btn.dataset.lang;
        setLanguage(lang);
        SoundFX.playClick();
      });
    });

    // 4. Init 3D Engines
    Hero3D.init();
    Detail3D.init();

    // 5. Init Search, Cart, Router
    SearchEngine.init();
    CartManager.init();
    initRouter();

    // 6. Initial Renders
    renderGalleryExhibition();
    renderNewReleases();
    renderCurationPackages();

    const initialHash = window.location.hash.replace('#', '') || 'home';
    navigateTo(initialHash, activeBookDetailId);

    if (window.lucide) lucide.createIcons();
  }

  // DOM Loaded Event
  document.addEventListener('DOMContentLoaded', initApp);
})();

