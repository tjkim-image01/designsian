/* ==========================================================================
   MAGIC ACADEMY & SPELLBOOK PORTAL (v23) - MAIN APPLICATION ENGINE
   Includes: Three.js 3D Hero Spellbook & Crystal Orb, 3D Wizarding Library Vault,
   360° 3D Detail Viewer, Web Audio Crystal Orb Chime Synth, Magic Rune Sparkles,
   5-Language i18n (KO, EN, VI, ZH, DE), PDF Official Quote & SheetJS Excel Export.
   ========================================================================== */

(function () {
  'use strict';

  /* ==========================================================================
     1. MULTILINGUAL i18N DICTIONARY (KO, EN, VI, ZH, DE)
     ========================================================================== */
  const TRANSLATIONS = {
    KO: {
      brandTitle: '다문화도서관 수서 몰',
      navHome: '아카데미 메인',
      navSearch: '마법 도서 검색',
      navCuration: '서고 큐레이션',
      navCart: '공문 견적함',
      cartButton: '수서 장바구니',
      heroHudHint: '✦ 마우스를 움직여 3D 마법서와 회전 수정구의 마나 파티클을 관찰하세요',
      heroBadge: 'INTERACTIVE MAGIC ACADEMY PORTAL',
      heroTitle: '마법 학교 비밀 서고의 공중 부유 3D 마법서 수서 몰',
      heroSubtitle: '세계 각국의 판타지, 전래동화, 신화 및 탐험 서적 컬렉션을 신비로운 마법 서고에서 탐색하고 사서 전용 1-Click PDF/엑셀 견적을 발급받으세요.',
      btnBrowseSearch: '마법 서고 검색하기',
      btnBrowseCuration: '3D 큐레이션 패키지',
      statLangs: '다국어 도서 지원 (KO/EN/VI/ZH/DE)',
      statDiscount: '공공/학교 도서관 납품 할인',
      statPdf: '마법 인장 PDF 공문 자동 생성',
      vaultBadge: '3D WIZARDING LIBRARY VAULT',
      vaultTitle: '3D 마법 비밀 서고 전시관',
      vaultSubtitle: '빛나는 마법 룬 문자로 잠긴 비밀 서고 책장에서 원하는 다문화 마법서를 3D로 선택하여 탐색하세요.',
      newBadge: 'NEW RELEASES',
      newTitle: '2026 하반기 신간 다문화 마법서 목록',
      tabModeGrid: '3D 마법 카드',
      tabModeList: '클래식 서지목록',
      btnViewAllSearch: '전체 마법서 검색 및 수서하기',
      searchBadge: 'ARCANE SEARCH ENGINE',
      searchTitle: '마법 도서 검색 & 사서 수서 관제',
      searchSubtitle: '다국어 언어(KO, EN, VI, ZH, DE), 마법 판타지 태그, ISBN, KDC 한국십진분류표 정밀 필터링',
      labelFantasyTags: '마법 테마:',
      filterLang: '🌐 지원 언어',
      filterKDC: '📚 KDC 분류표',
      filterAge: '👶 Target Age',
      filterPublisher: '🏰 출판사',
      optAllLangs: '전체 언어 (ALL)',
      optAllAges: '전체 연령 (ALL)',
      optChildren: '유아/아동 (Children)',
      optYouth: '청소년 (Youth)',
      optAdult: '성인/일반 (Adult)',
      optAllKDC: '전체 분류 (ALL)',
      optAllPublishers: '전체 출판사 (ALL)',
      resultCountLabel: '검색된 도서:',
      resultCountUnit: '건',
      btnResetFilters: '필터 초기화',
      curationBadge: 'SPECIAL 3D MAGIC VAULT PACKAGES',
      curationTitle: '3D 마법 비밀 서고 큐레이션 기획전',
      curationSubtitle: '다문화 도서관 사서 수서 담당자를 위한 테마별 맞춤 마법 도서 패키지',
      btnAddPackageCart: '🔮 패키지 전체 장바구니 담기',
      cartBadge: 'LIBRARIAN CONSOLE',
      cartTitle: '아카데미 콘솔 사서 공문 견적함',
      cartSubtitle: '선택한 다문화 마법 도서의 수서 납품 견적 자동 산출 및 1클릭 공식 PDF/엑셀 사양서 즉시 다운로드',
      statTotalTitles: '총 선택 종수',
      statTotalCopies: '총 수서 권수',
      statRegularPrice: '정가 합계',
      statProcurementPrice: '사서 납품가 (10% 할인)',
      instFormTitle: '수서 기관 및 담당자 공문 정보 입력',
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
      emptyCartDesc: '마법 도서 검색이나 큐레이션 기획전에서 수서할 도서를 추가해 주세요.',
      btnGoSearch: '마법 도서 탐색하러 가기',
      quoteNoticeTitle: '📌 사서 전용 1-Click 마법 인장 공문 견적서 발급 시스템',
      quoteNoticeDesc: '본 포털은 행정 제출용 마법 아카데미 Official Seal이 포함된 PDF 공문 견적서 및 엑셀 수서 사양서를 1클릭으로 즉시 자동 생성합니다.',
      btnExportExcel: '📊 엑셀 사양서 다운로드 (.xlsx)',
      btnGeneratePDF: '📄 1-Click PDF 공문 견적서 발급',
      btnBackList: '이전 목록으로 돌아가기',
      canvas3dHint: '✦ 마우스 드래그로 3D 마법서를 360도 입체 회전하세요',
      btnAutoRotate: '자동 회전 토글',
      btnLaserScan: '⚡ 마법 스캔 시전',
      lblAuthor: '저자:',
      lblPublisher: '출판사:',
      lblChantTitle: '🔮 마법 주문 & 다국어 오디오 발췌 샘플',
      lblChantReady: '재생 버튼을 누르면 마법서 오디오 낭독이 재생됩니다.',
      lblChantPlaying: '⚡ 낭독 중: 마법 주문 오디오 시전 중...',
      lblRegularPrice: '정가:',
      lblSupplyPrice: '사서 납품가 (10% 할인):',
      btnAddCartDetail: '수서 장바구니에 담기',
      btnGoCart: '견적함 이동',
      lblMetaTitle: '📚 사서 수서용 표준 서지 상세 스펙',
      thIsbn: 'ISBN 번호',
      thKdcCode: 'KDC 분류코드',
      thPubDate: '발행년월',
      thPageCount: '페이지 수',
      thOrigLang: '원서 언어',
      thTags: '마법 테마',
      lblExcerptTitle: '다국어 서평 & 본문 발췌',
      btnViewDetail: '3D 상세 보기',
      btnAddCart: '장바구니 담기',
      footerDesc: '공공도서관 및 학교 미디어 센터 사서를 위한 다문화 마법서 수서 & 1-Click 공문 견적 생성 플랫폼',
      footerQuickNav: '빠른 이동',
      footerContact: '사서 수서 지원 센터'
    },
    EN: {
      brandTitle: 'Multicultural Library Portal',
      navHome: 'Academy Home',
      navSearch: 'Magic Book Search',
      navCuration: 'Vault Curation',
      navCart: 'Official Quote Cart',
      cartButton: 'Procurement Cart',
      heroHudHint: '✦ Move mouse to inspect 3D levitating spellbook & orb particles',
      heroBadge: 'INTERACTIVE MAGIC ACADEMY PORTAL',
      heroTitle: 'Levitating 3D Spellbook Portal for Library Procurement',
      heroSubtitle: 'Explore world fantasy, fairy tales, mythology & adventure books in an arcane library vault and generate 1-Click PDF/Excel quotes.',
      btnBrowseSearch: 'Search Magic Vault',
      btnBrowseCuration: '3D Curation Packages',
      statLangs: 'Multilingual Support (KO/EN/VI/ZH/DE)',
      statDiscount: '10% Library Procurement Discount',
      statPdf: 'Auto Magic Seal PDF Quote Generator',
      vaultBadge: '3D WIZARDING LIBRARY VAULT',
      vaultTitle: '3D Wizarding Secret Vault Exhibition',
      vaultSubtitle: 'Select and inspect glowing multicultural spellbooks on 3D magic vault shelves.',
      newBadge: 'NEW RELEASES',
      newTitle: 'Fall 2026 New Multicultural Spellbooks',
      tabModeGrid: '3D Magic Cards',
      tabModeList: 'Classic List',
      btnViewAllSearch: 'Browse All Spellbooks',
      searchBadge: 'ARCANE SEARCH ENGINE',
      searchTitle: 'Magic Book Search & Librarian Console',
      searchSubtitle: 'Filter by language (KO, EN, VI, ZH, DE), fantasy tags, ISBN, KDC classification & publisher',
      labelFantasyTags: 'Magic Theme:',
      filterLang: '🌐 Languages',
      filterKDC: '📚 KDC Code',
      filterAge: '👶 Target Age',
      filterPublisher: '🏰 Publisher',
      optAllLangs: 'All Languages (ALL)',
      optAllAges: 'All Ages (ALL)',
      optChildren: 'Children',
      optYouth: 'Youth',
      optAdult: 'Adults',
      optAllKDC: 'All Categories (ALL)',
      optAllPublishers: 'All Publishers (ALL)',
      resultCountLabel: 'Found Books:',
      resultCountUnit: 'items',
      btnResetFilters: 'Reset Filters',
      curationBadge: 'SPECIAL 3D MAGIC VAULT PACKAGES',
      curationTitle: '3D Secret Vault Curation Packages',
      curationSubtitle: 'Curated multicultural spellbook packages tailored for library collection development',
      btnAddPackageCart: '🔮 Add Entire Package to Cart',
      cartBadge: 'LIBRARIAN CONSOLE',
      cartTitle: 'Librarian Console & Official Quote Cart',
      cartSubtitle: 'Auto calculate procurement totals and download 1-click official PDF quotes and Excel specs.',
      statTotalTitles: 'Selected Titles',
      statTotalCopies: 'Total Copies',
      statRegularPrice: 'List Price Sum',
      statProcurementPrice: 'Supply Price (10% OFF)',
      instFormTitle: 'Institution & Librarian Info',
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
      btnGoSearch: 'Explore Magic Books',
      quoteNoticeTitle: '📌 1-Click Magic Seal Official PDF Quote Generator',
      quoteNoticeDesc: 'Instantly export official PDF quotes stamped with the Magic Academy Seal and Excel procurement spreadsheets.',
      btnExportExcel: '📊 Download Excel Spec (.xlsx)',
      btnGeneratePDF: '📄 1-Click PDF Official Quote',
      btnBackList: 'Back to Book List',
      canvas3dHint: '✦ Drag mouse to rotate 3D spellbook in 360°',
      btnAutoRotate: 'Toggle Auto Rotate',
      btnLaserScan: '⚡ Cast Magic Scan',
      lblAuthor: 'Author:',
      lblPublisher: 'Publisher:',
      lblChantTitle: '🔮 Magic Spell Chant & Audio Sample',
      lblChantReady: 'Click play to listen to synthesized audio chant preview.',
      lblChantPlaying: '⚡ Playing: Casting magic spell chant audio...',
      lblRegularPrice: 'List Price:',
      lblSupplyPrice: 'Librarian Supply Price (10% OFF):',
      btnAddCartDetail: 'Add to Procurement Cart',
      btnGoCart: 'Go to Cart',
      lblMetaTitle: '📚 Standard Bibliographic Metadata Specs',
      thIsbn: 'ISBN Code',
      thKdcCode: 'KDC Classification',
      thPubDate: 'Pub Date',
      thPageCount: 'Page Count',
      thOrigLang: 'Original Lang',
      thTags: 'Magic Theme',
      lblExcerptTitle: 'Multilingual Book Review & Synopsis',
      btnViewDetail: '3D Detail View',
      btnAddCart: 'Add to Cart',
      footerDesc: 'Multicultural Magic Library Supply & 1-Click Official Quote Generator Portal',
      footerQuickNav: 'Quick Navigation',
      footerContact: 'Librarian Support Center'
    },
    VI: {
      brandTitle: 'Thư Viện Đa Văn Hóa',
      navHome: 'Trang Chủ Học Viện',
      navSearch: 'Tìm Sách Phép Thuật',
      navCuration: 'Bộ Sưu Tập 3D',
      navCart: 'Báo Giá Công Văn',
      cartButton: 'Giỏ Sách Báo Giá',
      heroHudHint: '✦ Di chuyển chuột để xem sách phép 3D và hoa văn mana quanh quả cầu',
      heroBadge: 'INTERACTIVE MAGIC ACADEMY PORTAL',
      heroTitle: 'Cổng Sách Phép 3D Bay Cho Thư Viện Đa Văn Hóa',
      heroSubtitle: 'Khám phá bộ sưu tập thần thoại, cổ tích và phiêu lưu thế giới tại kho sách phép thuật 3D và xuất báo giá PDF/Excel 1-Click.',
      btnBrowseSearch: 'Tìm Trong Kho Phép Thuật',
      btnBrowseCuration: 'Gói Curation 3D',
      statLangs: 'Hỗ Trợ 5 Ngôn Ngữ (KO/EN/VI/ZH/DE)',
      statDiscount: 'Giảm 10% Cho Thư Viện',
      statPdf: 'Tạo Báo Giá PDF Dấu Ấn Phép Thuật',
      vaultBadge: '3D WIZARDING LIBRARY VAULT',
      vaultTitle: 'Triển Lãm Kho Sách Bí Mật 3D',
      vaultSubtitle: 'Chọn và xem chi tiết các cuốn sách phát sáng trên kệ sách 3D.',
      newBadge: 'NEW RELEASES',
      newTitle: 'Sách Phép Mới Mùa Thu 2026',
      tabModeGrid: 'Thẻ Phép Thuật 3D',
      tabModeList: 'Danh Sách Cổ Điển',
      btnViewAllSearch: 'Xem Tất Cả Sách',
      searchBadge: 'ARCANE SEARCH ENGINE',
      searchTitle: 'Tìm Sách & Quản Lý Thư Thư',
      searchSubtitle: 'Lọc theo ngôn ngữ, chủ đề phép thuật, ISBN, mã KDC & nhà xuất bản',
      labelFantasyTags: 'Chủ Đề Phép Thuật:',
      filterLang: '🌐 Ngôn Ngữ',
      filterKDC: '📚 Mã KDC',
      filterAge: '👶 Độ Tuổi',
      filterPublisher: '🏰 Nhà Xuất Bản',
      optAllLangs: 'Tất Cả Ngôn Ngữ',
      optAllAges: 'Tất Cả Độ Tuổi',
      optChildren: 'Trẻ Em',
      optYouth: 'Thanh Thiếu Niên',
      optAdult: 'Người Lớn',
      optAllKDC: 'Tất Cả Phân Loại',
      optAllPublishers: 'Tất Cả NXB',
      resultCountLabel: 'Số Sách Tìm Thấy:',
      resultCountUnit: 'cuốn',
      btnResetFilters: 'Đặt Lại Bộ Lọc',
      curationBadge: 'SPECIAL 3D MAGIC VAULT PACKAGES',
      curationTitle: 'Gói 3D Đặc Biệt Cho Thư Viện',
      curationSubtitle: 'Các gói sách phép thuật đa văn hóa dành riêng cho cán bộ thư viện',
      btnAddPackageCart: '🔮 Thêm Cả Gói Vào Giỏ',
      cartBadge: 'LIBRARIAN CONSOLE',
      cartTitle: 'Giỏ Báo Giá Công Văn Thư Thư',
      cartSubtitle: 'Tự động tính tổng tiền và tải báo giá PDF chính thức & bản Excel 1-Click.',
      statTotalTitles: 'Số Đầu Sách',
      statTotalCopies: 'Tổng Số Cuốn',
      statRegularPrice: 'Tổng Giá Niêm Yết',
      statProcurementPrice: 'Giá Cung Cấp (Giảm 10%)',
      instFormTitle: 'Thông Tin Cơ Quan & Cán Bộ',
      lblInstName: 'Tên Cơ Quan / Thư Viện:',
      lblLibrarianName: 'Tên Cán Bộ Thư Viện:',
      lblContact: 'Số Điện Thoại Liên Hệ:',
      lblEmail: 'Địa Chỉ Email:',
      btnSelectAll: 'Chọn Tất Cả',
      btnDeselectAll: 'Bỏ Chọn',
      btnDeleteSelected: 'Xóa Đã Chọn',
      btnClearCart: 'Xóa Toàn Bộ Giỏ',
      thCover: 'Bìa Sách',
      thBookInfo: 'Thông Tin Sách',
      thRegularPrice: 'Giá Niêm Yết',
      thSupplyPrice: 'Giá Giảm 10%',
      thQty: 'Số Lượng',
      thSubtotal: 'Thành Tiền',
      thRemove: 'Xóa',
      emptyCartTitle: 'Giỏ Báo Giá Đang Trống',
      emptyCartDesc: 'Vui lòng thêm sách từ mục tìm kiếm hoặc gói curation.',
      btnGoSearch: 'Khám Phá Sách Phép',
      quoteNoticeTitle: '📌 Hệ Thống Xuất Báo Giá PDF Con Dấu Phép Thuật 1-Click',
      quoteNoticeDesc: 'Xuất ngay báo giá PDF chính thức có dấu đỏ Học Viện và file Excel chi tiết.',
      btnExportExcel: '📊 Tải File Excel (.xlsx)',
      btnGeneratePDF: '📄 Xuất Báo Giá PDF 1-Click',
      btnBackList: 'Quay Lại Danh Sách',
      canvas3dHint: '✦ Kéo chuột để xoay sách phép 3D 360 độ',
      btnAutoRotate: 'Tự Động Xoay',
      btnLaserScan: '⚡ Quét Phép Thuật',
      lblAuthor: 'Tác Giả:',
      lblPublisher: 'NXB:',
      lblChantTitle: '🔮 Âm Thanh Đọc Sách Phép Thuật',
      lblChantReady: 'Nhấn nút phát để nghe mẫu âm thanh thần chú.',
      lblChantPlaying: '⚡ Đang Phát: Đang xướng âm thần chú...',
      lblRegularPrice: 'Giá Niêm Yết:',
      lblSupplyPrice: 'Giá Thư Viện (Giảm 10%):',
      btnAddCartDetail: 'Thêm Vào Giỏ Báo Giá',
      btnGoCart: 'Đến Giỏ Báo Giá',
      lblMetaTitle: '📚 Thông Số Thư Thư Chuẩn',
      thIsbn: 'Mã ISBN',
      thKdcCode: 'Phân Loại KDC',
      thPubDate: 'Ngày Xuất Bản',
      thPageCount: 'Số Trang',
      thOrigLang: 'Ngôn Ngữ Gốc',
      thTags: 'Chủ Đề Phép',
      lblExcerptTitle: 'Đánh Giá Sách & Trích Đoạn',
      btnViewDetail: 'Xem 3D Chi Tiết',
      btnAddCart: 'Thêm Vào Giỏ',
      footerDesc: 'Cổng Cung Cấp Sách Đa Văn Hóa & Tạo Báo Giá Công Văn 1-Click',
      footerQuickNav: 'Điều Hướng Nhanh',
      footerContact: 'Hỗ Trợ Thư Thư'
    },
    ZH: {
      brandTitle: '多文化图书馆采编馆',
      navHome: '学院主页',
      navSearch: '魔法图书检索',
      navCuration: '藏书阁策展',
      navCart: '公文报价函',
      cartButton: '采编购物车',
      heroHudHint: '✦ 移动鼠标观察3D悬浮魔法书与水晶球魔力粒子流',
      heroBadge: 'INTERACTIVE MAGIC ACADEMY PORTAL',
      heroTitle: '魔法学院秘密藏书阁 悬浮3D魔法书采编馆',
      heroSubtitle: '在神秘藏书阁中探索世界奇幻、童话、神话与探险图书，一键生成图书馆专用PDF/Excel采购报价单。',
      btnBrowseSearch: '检索魔法藏书',
      btnBrowseCuration: '3D策展套餐',
      statLangs: '多语种图书支持 (KO/EN/VI/ZH/DE)',
      statDiscount: '图书馆采购专享10%折扣',
      statPdf: '印章PDF公文自动生成',
      vaultBadge: '3D WIZARDING LIBRARY VAULT',
      vaultTitle: '3D魔法秘密藏书阁展示馆',
      vaultSubtitle: '在发光的 Rune 符文书架上3D选择并探索多元文化魔法书。',
      newBadge: 'NEW RELEASES',
      newTitle: '2026下半年新到多文化魔法书',
      tabModeGrid: '3D魔法卡片',
      tabModeList: '经典书目列表',
      btnViewAllSearch: '检索全部魔法书',
      searchBadge: 'ARCANE SEARCH ENGINE',
      searchTitle: '魔法图书检索与采编控制台',
      searchSubtitle: '多语种(KO, EN, VI, ZH, DE)、魔法奇幻标签、ISBN、KDC分类号精准筛选',
      labelFantasyTags: '魔法主题:',
      filterLang: '🌐 语种',
      filterKDC: '📚 KDC分类',
      filterAge: '👶 适合年龄',
      filterPublisher: '🏰 出版社',
      optAllLangs: '全部语种 (ALL)',
      optAllAges: '全部年龄 (ALL)',
      optChildren: '儿童',
      optYouth: '青少年',
      optAdult: '成人/通用',
      optAllKDC: '全部分类 (ALL)',
      optAllPublishers: '全部出版社 (ALL)',
      resultCountLabel: '检索结果:',
      resultCountUnit: '册',
      btnResetFilters: '重置筛选',
      curationBadge: 'SPECIAL 3D MAGIC VAULT PACKAGES',
      curationTitle: '3D魔法藏书阁主题策展',
      curationSubtitle: '专为多文化图书馆采编馆员量身定制的主题图书套餐',
      btnAddPackageCart: '🔮 整套批量加入购物车',
      cartBadge: 'LIBRARIAN CONSOLE',
      cartTitle: '学院控制台 图书馆员公文报价函',
      cartSubtitle: '自动计算采编供货折扣，一键下载加盖公章的PDF报价函及Excel规格表。',
      statTotalTitles: '已选种数',
      statTotalCopies: '采编总册数',
      statRegularPrice: '原价合计',
      statProcurementPrice: '供货价 (10%折扣)',
      instFormTitle: '采编机构与负责人公文信息',
      lblInstName: '机构名称 (图书馆名):',
      lblLibrarianName: '采编馆员姓名:',
      lblContact: '联系电话:',
      lblEmail: '电子邮箱:',
      btnSelectAll: '全选',
      btnDeselectAll: '取消全选',
      btnDeleteSelected: '删除选中',
      btnClearCart: '清空购物车',
      thCover: '封面',
      thBookInfo: '书目信息',
      thRegularPrice: '原价',
      thSupplyPrice: '供货价',
      thQty: '数量',
      thSubtotal: '小计金额',
      thRemove: '删除',
      emptyCartTitle: '报价购物车为空',
      emptyCartDesc: '请从图书检索或策展套餐中添加采编图书。',
      btnGoSearch: '前往探索魔法书',
      quoteNoticeTitle: '📌 馆员专用 1-Click 魔法印章公文报价生成系统',
      quoteNoticeDesc: '一键自动生成包含魔法学院行政印章的PDF报价函及Excel采购明细表。',
      btnExportExcel: '📊 下载Excel规格表 (.xlsx)',
      btnGeneratePDF: '📄 1-Click 生成PDF公文报价函',
      btnBackList: '返回书目列表',
      canvas3dHint: '✦ 拖动鼠标360度立体旋转3D魔法书',
      btnAutoRotate: '自动旋转开关',
      btnLaserScan: '⚡ 魔法扫描',
      lblAuthor: '作者:',
      lblPublisher: '出版社:',
      lblChantTitle: '🔮 魔法咒语与多语种音频试听',
      lblChantReady: '点击播放按钮试听合成的魔法吟诵音频。',
      lblChantPlaying: '⚡ 播放中: 正在吟诵魔法咒语...',
      lblRegularPrice: '原价:',
      lblSupplyPrice: '馆员供货价 (10% OFF):',
      btnAddCartDetail: '加入采编购物车',
      btnGoCart: '前往报价函',
      lblMetaTitle: '📚 图书馆采编标准书目详细规格',
      thIsbn: 'ISBN 号码',
      thKdcCode: 'KDC 分类号',
      thPubDate: '出版年月',
      thPageCount: '页数',
      thOrigLang: '原著语种',
      thTags: '魔法主题',
      lblExcerptTitle: '多语种书评与正文节选',
      btnViewDetail: '3D 详细查看',
      btnAddCart: '加入购物车',
      footerDesc: '公共图书馆及学校媒体中心采编专用 多文化魔法书采购平台',
      footerQuickNav: '快速导航',
      footerContact: '采编支持中心'
    },
    DE: {
      brandTitle: 'Interkulturelle Bibliothek',
      navHome: 'Akademie-Hauptseite',
      navSearch: 'Zauberbuch-Suche',
      navCuration: 'Tresor-Kuration',
      navCart: 'Angebot-Korb',
      cartButton: 'Beschaffungskorb',
      heroHudHint: '✦ Bewegen Sie die Maus, um das schwebende 3D-Zauberbuch zu betrachten',
      heroBadge: 'INTERACTIVE MAGIC ACADEMY PORTAL',
      heroTitle: 'Schwebendes 3D-Zauberbuch-Portal für Bibliotheken',
      heroSubtitle: 'Entdecken Sie Weltfantasy, Märchen und Abenteuerbücher im magischen Tresor und erstellen Sie 1-Klick PDF/Excel-Angebote.',
      btnBrowseSearch: 'Magischen Tresor durchsuchen',
      btnBrowseCuration: '3D-Kurationspakete',
      statLangs: 'Mehrsprachigkeit (KO/EN/VI/ZH/DE)',
      statDiscount: '10% Bibliotheksrabatt',
      statPdf: 'Magisches Siegel PDF-Angebot',
      vaultBadge: '3D WIZARDING LIBRARY VAULT',
      vaultTitle: '3D-Magische Geheimtresor-Ausstellung',
      vaultSubtitle: 'Wählen Sie leuchtende interkulturelle Zauberbücher auf 3D-Regalen aus.',
      newBadge: 'NEW RELEASES',
      newTitle: 'Herbst 2026 Neue Zauberbücher',
      tabModeGrid: '3D-Magiekarten',
      tabModeList: 'Klassische Liste',
      btnViewAllSearch: 'Alle Zauberbücher durchsuchen',
      searchBadge: 'ARCANE SEARCH ENGINE',
      searchTitle: 'Zauberbuchsuche & Bibliothekar-Konsole',
      searchSubtitle: 'Filtern nach Sprache (KO, EN, VI, ZH, DE), Fantasy-Tags, ISBN, KDC & Verlag',
      labelFantasyTags: 'Magiethema:',
      filterLang: '🌐 Sprachen',
      filterKDC: '📚 KDC-Code',
      filterAge: '👶 Zielalter',
      filterPublisher: '🏰 Verlag',
      optAllLangs: 'Alle Sprachen (ALL)',
      optAllAges: 'Alle Altersgruppen (ALL)',
      optChildren: 'Kinder',
      optYouth: 'Jugendliche',
      optAdult: 'Erwachsene',
      optAllKDC: 'Alle Kategorien (ALL)',
      optAllPublishers: 'Alle Verlage (ALL)',
      resultCountLabel: 'Gefundene Bücher:',
      resultCountUnit: 'Treffer',
      btnResetFilters: 'Filter zurücksetzen',
      curationBadge: 'SPECIAL 3D MAGIC VAULT PACKAGES',
      curationTitle: '3D-Geheimtresor Kurationspakete',
      curationSubtitle: 'Speziell zusammengestellte Buchpakete für den Bibliotheksaufbau',
      btnAddPackageCart: '🔮 Ganzes Paket in den Korb',
      cartBadge: 'LIBRARIAN CONSOLE',
      cartTitle: 'Bibliothekar-Konsole & Offizieller Angebotskorb',
      cartSubtitle: 'Automatische Berechnung des Lieferrabatts und 1-Klick-Download von PDF-Angeboten & Excel-Listen.',
      statTotalTitles: 'Gewählte Titel',
      statTotalCopies: 'Gesamtexemplare',
      statRegularPrice: 'Summe Listenpreis',
      statProcurementPrice: 'Lieferpreis (10% Rabatt)',
      instFormTitle: 'Institution & Bibliothekar-Informationen',
      lblInstName: 'Institution / Bibliotheksname:',
      lblLibrarianName: 'Name des Bibliothekars:',
      lblContact: 'Telefonnummer:',
      lblEmail: 'E-Mail-Adresse:',
      btnSelectAll: 'Alle auswählen',
      btnDeselectAll: 'Auswahl aufheben',
      btnDeleteSelected: 'Ausgewählte löschen',
      btnClearCart: 'Warenkorb leeren',
      thCover: 'Cover',
      thBookInfo: 'Bibliographische Info',
      thRegularPrice: 'Listenpreis',
      thSupplyPrice: 'Lieferpreis',
      thQty: 'Menge',
      thSubtotal: 'Zwischensumme',
      thRemove: 'Löschen',
      emptyCartTitle: 'Angebotskorb ist leer',
      emptyCartDesc: 'Bitte fügen Sie Bücher aus der Suche oder den Kurationspaketen hinzu.',
      btnGoSearch: 'Zauberbücher erkunden',
      quoteNoticeTitle: '📌 1-Klick Magie-Siegel Offizieller PDF-Angebotsgenerator',
      quoteNoticeDesc: 'Generieren Sie sofort offizielle PDF-Angebote mit dem Siegel der Akademie und Excel-Spezifikationsdateien.',
      btnExportExcel: '📊 Excel-Spezifikation (.xlsx)',
      btnGeneratePDF: '📄 1-Klick PDF-Angebot erstellen',
      btnBackList: 'Zurück zur Buchliste',
      canvas3dHint: '✦ Ziehen Sie die Maus, um das 3D-Zauberbuch um 360° zu drehen',
      btnAutoRotate: 'Auto-Rotation umschalten',
      btnLaserScan: '⚡ Zauberscan ausführen',
      lblAuthor: 'Autor:',
      lblPublisher: 'Verlag:',
      lblChantTitle: '🔮 Zauberspruch-Hörprobe & Audio-Sample',
      lblChantReady: 'Klicken Sie auf Wiedergabe für ein synthetisiertes Audio-Sample.',
      lblChantPlaying: '⚡ Wiedergabe: Zauberspruch-Audio wird abgespielt...',
      lblRegularPrice: 'Listenpreis:',
      lblSupplyPrice: 'Lieferpreis (10% Rabatt):',
      btnAddCartDetail: 'In den Angebotskorb legen',
      btnGoCart: 'Zum Angebotskorb',
      lblMetaTitle: '📚 Standardisierte bibliographische Spezifikationen',
      thIsbn: 'ISBN-Nummer',
      thKdcCode: 'KDC-Klassifikation',
      thPubDate: 'Erscheinungsdatum',
      thPageCount: 'Seitenzahl',
      thOrigLang: 'Originalsprache',
      thTags: 'Magiethema',
      lblExcerptTitle: 'Mehrsprachige Buchbewertung & Auszug',
      btnViewDetail: '3D-Detailansicht',
      btnAddCart: 'In den Korb',
      footerDesc: 'Portal für interkulturelle Bibliotheksbeschaffung & 1-Klick-Angebotserstellung',
      footerQuickNav: 'Schnellnavigation',
      footerContact: 'Bibliothekar-Support-Center'
    }
  };

  /* Current Active Language State */
  let currentLang = 'KO';

  /* ==========================================================================
     2. MULTICULTURAL BOOK DATABASE (12 RICH MAGIC SPELLBOOKS)
     ========================================================================== */
  const BOOK_DATABASE = [
    {
      id: 'B001',
      title: {
        KO: '마법 학교와 용의 심판',
        EN: "The Magic Academy & Dragon's Trial",
        VI: 'Học Viện Phép Thuật & Sự Xét Xử Của Rồng',
        ZH: '魔法学院与龙的审判',
        DE: 'Die Magie-Akademie und das Drachengericht'
      },
      subtitle: 'Vol 1. Secret Archives of the Arcane Realm',
      author: '에드워드 룬 (Edward Rune)',
      publisher: '아카데미 출판사',
      lang: 'EN',
      langDisplay: '🇺🇸 영어 (English)',
      kdc: '800',
      kdcCode: '800.1',
      age: 'Youth',
      ageDisplay: '청소년',
      isbn: '978-89-98123-01-4',
      pubDate: '2026-07',
      pages: 384,
      origLang: 'English',
      price: 18000,
      tags: ['#마법학교', '#신화탐험', '#판타지세계'],
      coverIcon: '🐉',
      bgGradient: 'linear-gradient(135deg, #3b0764 0%, #1e1b4b 100%)',
      synopsis: {
        KO: '전 세계 사서 추천 1위! 비밀 마법 학교의 신입생들이 고대 용의 심판을 통과하고 비밀 서고의 빛나는 룬 문자를 해독하는 스릴 넘치는 대서사시.',
        EN: 'Ranked #1 for library procurement! Freshmen at a secret academy overcome the ancient dragon trial to decipher glowing spell runes in the subterranean library.',
        VI: 'Được đề xuất số 1 cho thư viện! Các tân sinh viên học viện phép thuật bí mật vượt qua thử thách của rồng cổ đại để giải mã các ký tự rune phát sáng.',
        ZH: '全球图书馆采编推荐榜首！神秘魔法学院的新生穿过古代巨龙的审判，解开地下书库发光 Rune 符文的宏大长篇。',
        DE: 'Platz 1 der Bibliotheksempfehlungen! Erstsemester einer geheimen Magieakademie bestehen die Prüfung des alten Drachen, um leuchtende Runen zu entschlüsseln.'
      }
    },
    {
      id: 'B002',
      title: {
        KO: '달빛 숲의 그림자 요정',
        EN: 'Shadow Fairies of Moonlight Forest',
        VI: 'Tiên Bóng Đêm Rừng Trăng',
        ZH: '月光森林的影妖精',
        DE: 'Schattenfeen des Mondlichtwaldes'
      },
      subtitle: 'Multicultural Asian Fairy Tale Series',
      author: '응우옌 린 (Nguyen Linh)',
      publisher: '아시아 문학사',
      lang: 'VI',
      langDisplay: '🇻🇳 베트남어 (Vietnamese)',
      kdc: '300',
      kdcCode: '388.1',
      age: 'Children',
      ageDisplay: '유아/아동',
      isbn: '978-89-98123-02-1',
      pubDate: '2026-06',
      pages: 220,
      origLang: 'Vietnamese',
      price: 15000,
      tags: ['#전래동화', '#생태마법', '#탐험과모험'],
      coverIcon: '🧚‍♀️',
      bgGradient: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
      synopsis: {
        KO: '베트남 전래 동화의 신비로운 달빛 숲 속 그림자 요정과 아이들이 자연을 지키기 위해 펼치는 아름답고 신비로운 마법 이중언어 동화.',
        EN: 'A mesmerizing bilingual Vietnamese tale of shadow fairies in the moonlit forest teaching children to protect nature through nature magic.',
        VI: 'Câu chuyện thần thoại song ngữ Việt-Hàn về những nàng tiên bóng đêm trong rừng trăng dạy trẻ em bảo vệ thiên nhiên.',
        ZH: '融合越南传统童话与中韩双语对照，讲述月光森林中的影妖精与孩子们运用自然魔法守护大森林的惊奇故事。',
        DE: 'Ein faszinierendes zweisprachiges Märchen aus Vietnam über Schattenfeen im mondbeschienenen Wald, die Kindern Umweltmagie lehren.'
      }
    },
    {
      id: 'B003',
      title: {
        KO: '그림 형제 판타지 잔혹동화 원전',
        EN: 'Grimm Brothers Fantasy Tales',
        VI: 'Truyện Cổ Tích Grimm Phép Thuật',
        ZH: '格林兄弟幻想童话原典',
        DE: 'Grimms Märchen Zauberwelt'
      },
      subtitle: 'Original Unabridged German Classic Edition',
      author: '야콥 & 빌헬름 그림 (Brothers Grimm)',
      publisher: '그림 라이브러리',
      lang: 'DE',
      langDisplay: '🇩🇪 독일어 (German)',
      kdc: '800',
      kdcCode: '850.3',
      age: 'Youth',
      ageDisplay: '청소년',
      isbn: '978-89-98123-03-8',
      pubDate: '2026-05',
      pages: 450,
      origLang: 'German',
      price: 22000,
      tags: ['#전래동화', '#마법학교', '#판타지세계'],
      coverIcon: '🏰',
      bgGradient: 'linear-gradient(135deg, #450a0a 0%, #1c1917 100%)',
      synopsis: {
        KO: '독일 원전 그대로 수록된 그림 형제의 마법 전래 동화집. 흑림의 마녀와 룬 주술 문양이 가득한 클래식 환상 판타지.',
        EN: 'Original unabridged German edition of Grimm Brothers fairy tales, filled with Black Forest witches, enchanted mirrors, and runes.',
        VI: 'Bản gốc tiếng Đức không cắt gọt của truyện cổ tích anh em nhà Grimm với phù thủy Rừng Đen và các bùa phép cổ đại.',
        ZH: '德国原汁原味格林兄弟魔法童话合集，包含黑森林女巫、魔镜与古老符文咒语的全彩插图典藏版。',
        DE: 'Originalgetreue deutsche Gesamtausgabe der Grimmschen Zaubermärchen mit Hexen aus dem Schwarzwald und alten Runenzeichen.'
      }
    },
    {
      id: 'B004',
      title: {
        KO: '별빛 항해사와 코스믹 마법서',
        EN: 'Starlight Navigator & Cosmic Spellbook',
        VI: 'Nhà Hàng Hải Ánh Sao & Sách Phép Vũ Trụ',
        ZH: '星光航海士与宇宙魔法书',
        DE: 'Sternennavigator & Kosmisches Zauberbuch'
      },
      subtitle: 'Galactic Mythology & Astral Magic',
      author: '스텔라 호킹 (Stella Hawking)',
      publisher: '코스믹 월드',
      lang: 'EN',
      langDisplay: '🇺🇸 영어 (English)',
      kdc: '400',
      kdcCode: '440.5',
      age: 'Youth',
      ageDisplay: '청소년',
      isbn: '978-89-98123-04-5',
      pubDate: '2026-08',
      pages: 310,
      origLang: 'English',
      price: 19500,
      tags: ['#신화탐험', '#탐험과모험', '#판타지세계'],
      coverIcon: '✨',
      bgGradient: 'linear-gradient(135deg, #172554 0%, #090d16 100%)',
      synopsis: {
        KO: '은하수 별자리의 고대 도서관을 주행하며 별빛 마법서의 연금술 룬을 모으는 우주 탐험 청소년 판타지 문학.',
        EN: 'A cosmic YA fantasy about a starlight navigator sailing star constellations to collect astral spell runes from galactic archives.',
        VI: 'Chuyến phiêu lưu vũ trụ dành cho giới trẻ về nhà hàng hải ánh sao thu thập các bản rún ma thuật từ các tháp sao thiên văn.',
        ZH: '穿梭于银河系星宿古代图书馆，收集星光魔法书炼金符文的宇宙探索科幻奇幻文学。',
        DE: 'Ein kosmisches Jugend-Fantasybuch über einen Sternennavigator, der Alchemie-Runen in galaktischen Archiven sammelt.'
      }
    },
    {
      id: 'B005',
      title: {
        KO: '천년 서고의 연금술 비밀',
        EN: 'Alchemy Secrets of 1000-Year Library',
        VI: 'Bí Mật Luyện Kim Thư Viện Ngàn Năm',
        ZH: '千年书阁的炼金术秘密',
        DE: 'Alchemie-Geheimnisse der Tausendjährigen Bibliothek'
      },
      subtitle: 'Ancient Chinese Imperial Alchemy & Magic',
      author: '장웨이 (Zhang Wei)',
      publisher: '아시아 문학사',
      lang: 'ZH',
      langDisplay: '🇨🇳 중국어 (Chinese)',
      kdc: '900',
      kdcCode: '910.2',
      age: 'Adult',
      ageDisplay: '성인/일반',
      isbn: '978-89-98123-05-2',
      pubDate: '2026-04',
      pages: 410,
      origLang: 'Chinese',
      price: 24000,
      tags: ['#신화탐험', '#판타지세계', '#마법학교'],
      coverIcon: '📜',
      bgGradient: 'linear-gradient(135deg, #701a75 0%, #2e1065 100%)',
      synopsis: {
        KO: '천년 고도 서고에 숨겨진 연금술 마법 주문과 황금 비밀 양피지를 추적하는 흥미진진 동양 연금술 역사 판타지.',
        EN: 'An epic East Asian fantasy investigating imperial alchemy scrolls and 1,000-year-old library secrets hidden in ancient vaults.',
        VI: 'Bộ tiểu thuyết lịch sử phép thuật kỳ ảo tìm kiếm bí mật luyện金 trong thư viện cổ 1.000 năm.',
        ZH: '探寻隐藏于千年秘阁中的古老炼金术金丹咒语与羊皮纸密文的东方玄幻历史巨作。',
        DE: 'Ein epischer Ostasien-Fantasyroman über kaiserliche Alchemie-Schriftrollen und 1000 Jahre alte Bibliotheksgeheimnisse.'
      }
    },
    {
      id: 'B006',
      title: {
        KO: '바다 마녀와 무지개 비늘 용',
        EN: 'Sea Witch & Rainbow Scale Dragon',
        VI: 'Phù Thủy Biển & Rồng Vảy Ngũ Sắc',
        ZH: '海魔女与彩虹鳞龙',
        DE: 'Die Meereshexe und der Regenbochendrache'
      },
      subtitle: 'Oceanic Legends & Mermaid Spells',
      author: '팜 민 (Pham Minh)',
      publisher: '아시아 문학사',
      lang: 'VI',
      langDisplay: '🇻🇳 베트남어 (Vietnamese)',
      kdc: '300',
      kdcCode: '388.4',
      age: 'Children',
      ageDisplay: '유아/아동',
      isbn: '978-89-98123-06-9',
      pubDate: '2026-07',
      pages: 190,
      origLang: 'Vietnamese',
      price: 14000,
      tags: ['#전래동화', '#신화탐험', '#생태마법'],
      coverIcon: '🌊',
      bgGradient: 'linear-gradient(135deg, #0891b2 0%, #164e63 100%)',
      synopsis: {
        KO: '심해 해저 마법 서고에서 용왕의 무지개 비늘을 되찾기 위해 마법 주문을 외우는 아름다운 인어와 바다 마녀의 동화.',
        EN: 'An enchanting underwater fairy tale of a mermaid learning oceanic spells to recover rainbow dragon scales from the sea witch.',
        VI: 'Câu chuyện cổ tích dưới đáy biển huyền ảo về nàng tiên cá học phép thuật ocean để phục hồi vảy rồng ngũ sắc.',
        ZH: '在深海海底魔法书阁中，美丽人鱼为了寻回龙王的彩虹龙鳞，吟唱海洋魔法咒语的梦幻童话。',
        DE: 'Ein zauberhaftes Unterwasser-Märchen über eine Meerjungfrau, die Meereszauber lernt, um Regenbogen-Drachenschuppen zu bergen.'
      }
    },
    {
      id: 'B007',
      title: {
        KO: '검은 숲과 마나 수정의 비밀',
        EN: 'Black Forest & Mana Crystal Secrets',
        VI: 'Rừng Đen & Bí Mật Tinh Thể Mana',
        ZH: '黑森林与魔力水晶的秘密',
        DE: 'Der Schwarzwald und das Manakristall-Geheimnis'
      },
      subtitle: 'German High Fantasy Magic Quest',
      author: '카를 마이어 (Karl Meyer)',
      publisher: '그림 라이브러리',
      lang: 'DE',
      langDisplay: '🇩🇪 독일어 (German)',
      kdc: '800',
      kdcCode: '850.5',
      age: 'Youth',
      ageDisplay: '청소년',
      isbn: '978-89-98123-07-6',
      pubDate: '2026-03',
      pages: 360,
      origLang: 'German',
      price: 21000,
      tags: ['#판타지세계', '#탐험과모험', '#생태마법'],
      coverIcon: '🔮',
      bgGradient: 'linear-gradient(135deg, #14532d 0%, #052e16 100%)',
      synopsis: {
        KO: '독일 검은 숲 지하 동굴에 봉인된 거대 마나 수정 orb의 빛을 되살리기 위해 룬 서판을 찾아 떠나는 마법 탐험대 이야기.',
        EN: 'An adventure group travels into deep Black Forest caverns to restore energy to a sealed Mana Crystal Orb using rune tablets.',
        VI: 'Đoàn thám hiểm phép thuật đi vào hang động Rừng Đen để hồi sinh quả cầu tinh thể Mana bằng các phiến đá rune cổ.',
        ZH: '前往德国黑森林地下洞穴，寻找古老 Rune 符文石板以重焕封印魔力水晶 Orb 光芒的勇者冒险长篇。',
        DE: 'Eine Zauber-Expedition reist in tiefe Schwarzwaldhöhlen, um einer versiegelten Manakristall-Kugel Energie einzuhauchen.'
      }
    },
    {
      id: 'B008',
      title: {
        KO: '다문화 시간여행 탐험대',
        EN: 'Multicultural Time Travel Explorers',
        VI: 'Đội Thám Hiểm Du Hành Thời Gian Da Văn Hóa',
        ZH: '多文化时光旅行探险队',
        DE: 'Multikulturelle Zeitreise-Entdecker'
      },
      subtitle: 'Global 5-Language Polyglot Adventure',
      author: '다문화 도서 편집위원회',
      publisher: '아카데미 출판사',
      lang: 'KO',
      langDisplay: '🇰🇷 한국어 (Korean)',
      kdc: '300',
      kdcCode: '370.4',
      age: 'Children',
      ageDisplay: '유아/아동',
      isbn: '978-89-98123-08-3',
      pubDate: '2026-08',
      pages: 280,
      origLang: 'Korean/Polyglot',
      price: 17500,
      tags: ['#탐험과모험', '#마법학교', '#전래동화'],
      coverIcon: '⌛',
      bgGradient: 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)',
      synopsis: {
        KO: '5개국(한국, 미국, 베트남, 중국, 독일) 아이들이 시간여행 마법 시계를 타고 각국의 역사적 신화 시대로 들어가 우정을 나누는 다국어 학습 교재.',
        EN: 'Children from 5 countries time-travel into ancient mythical eras via magic clocks, building cross-cultural friendship.',
        VI: 'Trẻ em từ 5 quốc gia du hành thời gian về các thời kỳ thần thoại cổ đại thông qua chiếc đồng hồ phép thuật.',
        ZH: '来自韩国、美国、越南、中国、德国的五位少年借助时光魔法怀表穿越至各国古代神话时代，跨文化合璧冒险。',
        DE: 'Kinder aus 5 Ländern reisen mit magischen Uhren in alte Mythenepochen und schließen interkulturelle Freundschaften.'
      }
    },
    {
      id: 'B009',
      title: {
        KO: '황금 지팡이와 아카데미 사서',
        EN: 'Golden Staff & Academy Librarian',
        VI: 'Gậy Vàng & Thủ Thư Học Viện',
        ZH: '黄金魔杖与学院图书管理员',
        DE: 'Der Goldene Stab und der Akademie-Bibliothekar'
      },
      subtitle: 'Librarian Magic Portal Legend',
      author: '한수서 사서 (Han Su-seo)',
      publisher: '아카데미 출판사',
      lang: 'KO',
      langDisplay: '🇰🇷 한국어 (Korean)',
      kdc: '000',
      kdcCode: '020.1',
      age: 'Adult',
      ageDisplay: '성인/일반',
      isbn: '978-89-98123-09-0',
      pubDate: '2026-07',
      pages: 330,
      origLang: 'Korean',
      price: 20000,
      tags: ['#마법학교', '#판타지세계', '#신화탐험'],
      coverIcon: '🔱',
      bgGradient: 'linear-gradient(135deg, #854d0e 0%, #451a03 100%)',
      synopsis: {
        KO: '마법 아카데미의 사서가 황금 지팡이로 비밀 서고의 책들을 수서하고 봉인된 룬 주문서를 지켜내는 전 세계 사서 헌정 마법 소설.',
        EN: 'A homage fantasy to librarians where an academy librarian uses a golden staff to catalogue enchanted tomes and protect sealed runes.',
        VI: 'Tiểu thuyết phép thuật tri ân các cán bộ thư viện, nơi thủ thư học viện dùng gậy vàng để quản lý các cuốn sách bùa phép.',
        ZH: '致敬全球图书管理员的奇幻小说！魔法学院采编馆员拿着黄金魔杖编目解密秘密书阁中的符文魔法书。',
        DE: 'Eine Hommage-Fantasy an Bibliothekare: Ein Akademie-Bibliothekar nutzt den goldenen Stab, um Zauberbücher zu katalogisieren.'
      }
    },
    {
      id: 'B010',
      title: {
        KO: '유라시아 전설의 불새와 룬 문자',
        EN: 'Firebird & Runes of Eurasia',
        VI: 'Chim Lửa Huyền Thoại & Chữ Rune Eurasia',
        ZH: '欧亚传说之火鸟与 Rune 符文',
        DE: 'Der Feuervogel und die Runen von Eurasien'
      },
      subtitle: 'Eurasian Mythological Spellbook',
      author: '엘레나 체호프 (Elena Chekhov)',
      publisher: '그림 라이브러리',
      lang: 'DE',
      langDisplay: '🇩🇪 독일어 (German)',
      kdc: '900',
      kdcCode: '920.4',
      age: 'Youth',
      ageDisplay: '청소년',
      isbn: '978-89-98123-10-6',
      pubDate: '2026-05',
      pages: 295,
      origLang: 'German/Russian',
      price: 18500,
      tags: ['#신화탐험', '#전래동화', '#탐험과모험'],
      coverIcon: '🔥',
      bgGradient: 'linear-gradient(135deg, #9f1239 0%, #4c0519 100%)',
      synopsis: {
        KO: '황금 깃털을 가진 불새를 찾아 유라시아 대륙의 마법 서고를 누비며 고대 룬 문자를 풀어나가는 신비로운 신화 판타지.',
        EN: 'A mythical journey across Eurasian magic libraries deciphering ancient runes to track down the legendary golden Firebird.',
        VI: 'Hành trình huyền thoại qua các thư viện phép thuật Eurasia giải mã rún cổ để tìm kiếm Chim Lửa lông vàng.',
        ZH: '追寻拥有黄金羽毛的火鸟，穿行于欧亚大陆魔法书阁解开古老 Rune 符文的惊艳神话奇幻。',
        DE: 'Eine mythische Reise durch eurasische Magie-Bibliotheken auf der Suche nach dem legendären goldenen Feuervogel.'
      }
    },
    {
      id: 'B011',
      title: {
        KO: '비밀 서고의 영혼서',
        EN: 'Spellbook of Eternal Souls',
        VI: 'Sách Phép Linh Hồn Thư Viện Bí Mật',
        ZH: '秘密书阁的灵魂书',
        DE: 'Zauberbuch der Ewigen Seelen'
      },
      subtitle: 'Arcane Book of Lost Spells',
      author: '아서 펜드래곤 (Arthur Pendragon)',
      publisher: '코스믹 월드',
      lang: 'EN',
      langDisplay: '🇺🇸 영어 (English)',
      kdc: '800',
      kdcCode: '840.1',
      age: 'Adult',
      ageDisplay: '성인/일반',
      isbn: '978-89-98123-11-3',
      pubDate: '2026-08',
      pages: 420,
      origLang: 'English',
      price: 25000,
      tags: ['#마법학교', '#판타지세계', '#신화탐험'],
      coverIcon: '💎',
      bgGradient: 'linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)',
      synopsis: {
        KO: '천년 동안 비밀 서고 깊은 곳에 갇혀있던 영혼 마법서가 눈을 뜨고 사서와 함께 세계 문학의 상실된 문장을 되찾아가는 고품격 판타지.',
        EN: 'A sophisticated dark fantasy of an eternal soul spellbook awakening in the deepest vault to recover lost literary sentences with librarians.',
        VI: 'Cuốn sách phép linh hồn nghìn năm tỉnh giấc trong kho bí mật cùng các thủ thư khôi phục lại những câu văn bị lãng quên.',
        ZH: '沉睡于千年秘阁深处的灵魂魔法书苏醒，与图书管理员一同收复失落的世界文学名言的高雅奇幻巨作。',
        DE: 'Ein anspruchsvolles Dark-Fantasy-Buch über ein ewiges Seelen-Zauberbuch, das im tiefsten Tresor erwacht.'
      }
    },
    {
      id: 'B012',
      title: {
        KO: '세계의 전래마법 이야기 컬렉션',
        EN: 'World Folktale Magic Collection',
        VI: 'Bộ Sưu Tập Truyện Cổ Tích Phép Thuật Thế Giới',
        ZH: '世界传统魔法故事典藏',
        DE: 'Weltweite Zaubermärchen-Sammlung'
      },
      subtitle: 'Global Multicultural Fairy Tales 5-Lang Edition',
      author: '다문화 문학 연구소',
      publisher: '아시아 문학사',
      lang: 'KO',
      langDisplay: '🇰🇷 한국어 (Korean)',
      kdc: '300',
      kdcCode: '388.0',
      age: 'Children',
      ageDisplay: '유아/아동',
      isbn: '978-89-98123-12-0',
      pubDate: '2026-06',
      pages: 350,
      origLang: 'Korean/Multilingual',
      price: 23000,
      tags: ['#전래동화', '#생태마법', '#탐험과모험'],
      coverIcon: '🌍',
      bgGradient: 'linear-gradient(135deg, #047857 0%, #064e3b 100%)',
      synopsis: {
        KO: '한국, 영어권, 베트남, 중국, 독일의 신비로운 마법 전래 동화 30편을 5개 국어 원문 및 해설로 엮어낸 다문화 도서관 필수 수서 컬렉션.',
        EN: 'Essential multicultural library collection comprising 30 magical fairy tales across Korean, English, Vietnamese, Chinese, and German.',
        VI: 'Bộ sưu tập bắt buộc cho thư viện gồm 30 truyện cổ tích phép thuật bằng 5 ngôn ngữ Hàn, Anh, Việt, Trung, Đức.',
        ZH: '汇聚韩国、英语区、越南、中国、德国30篇神秘魔法民间童话的5语对照精装典藏，多文化图书馆必备选书。',
        DE: 'Unverzichtbare interkulturelle Sammlung von 30 Magiemärchen auf Koreanisch, Englisch, Vietnamesisch, Chinesisch und Deutsch.'
      }
    }
  ];

  /* ==========================================================================
     3. WEB AUDIO CRYSTAL ORB CHIME SYNTHESIZER
     ========================================================================= */
  const SoundEngine = {
    audioCtx: null,
    muted: false,

    init: function () {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContext();
      } catch (e) {
        console.warn('Web Audio API not supported in this browser.', e);
      }
    },

    resume: function () {
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    },

    playChimeSound: function () {
      if (this.muted) return;
      if (!this.audioCtx) this.init();
      this.resume();

      const ctx = this.audioCtx;
      if (!ctx) return;

      const now = ctx.currentTime;
      // Synthesize pentatonic crystal orb chord notes: C5 (523Hz), E5 (659Hz), G5 (784Hz), B5 (987Hz), D6 (1174Hz)
      const freqs = [523.25, 659.25, 783.99, 987.77, 1174.66];
      const noteOffset = Math.floor(Math.random() * 3);

      [freqs[noteOffset], freqs[noteOffset + 2]].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);

        gain.gain.setValueAtTime(0, now + i * 0.05);
        gain.gain.linearRampToValueAtTime(0.12, now + i * 0.05 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.85);
      });
    },

    playChantSynth: function (onEndCallback) {
      if (!this.audioCtx) this.init();
      this.resume();

      const ctx = this.audioCtx;
      if (!ctx) return;

      const now = ctx.currentTime;
      const melody = [440, 554.37, 659.25, 830.61, 987.77, 1108.73]; // Arcane scale
      
      melody.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.25);

        gain.gain.setValueAtTime(0, now + idx * 0.25);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.25 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.25 + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.25);
        osc.stop(now + idx * 0.25 + 0.55);
      });

      if (onEndCallback) {
        setTimeout(onEndCallback, melody.length * 250 + 200);
      }
    }
  };

  /* ==========================================================================
     4. MAGIC RUNE SPARKLE PARTICLE CANVAS SYSTEM
     ========================================================================== */
  const ParticleEngine = {
    canvas: null,
    ctx: null,
    particles: [],

    init: function () {
      this.canvas = document.getElementById('rune-sparkle-canvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');

      this.resize();
      window.addEventListener('resize', () => this.resize());

      // Spawn particles on cursor move and click
      window.addEventListener('pointermove', (e) => {
        if (Math.random() < 0.35) {
          this.spawnParticle(e.clientX, e.clientY);
        }
      });

      window.addEventListener('pointerdown', (e) => {
        SoundEngine.playChimeSound();
        for (let i = 0; i < 8; i++) {
          this.spawnParticle(e.clientX, e.clientY, true);
        }
      });

      this.animate();
    },

    resize: function () {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },

    spawnParticle: function (x, y, isBurst = false) {
      const runes = ['✨', '🔮', '⚡', '✦', '✧', '🌀', '✵'];
      const colors = ['#f59e0b', '#fbbf24', '#8b5cf6', '#a855f7', '#10b981', '#06b6d4'];
      const text = runes[Math.floor(Math.random() * runes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];

      this.particles.push({
        x: x + (Math.random() - 0.5) * (isBurst ? 40 : 10),
        y: y + (Math.random() - 0.5) * (isBurst ? 40 : 10),
        vx: (Math.random() - 0.5) * (isBurst ? 3 : 1),
        vy: -Math.random() * (isBurst ? 3 : 1.5) - 0.5,
        size: Math.random() * (isBurst ? 16 : 12) + 8,
        alpha: 1,
        life: Math.random() * 0.03 + 0.015,
        color: color,
        text: text
      });
    },

    animate: function () {
      if (!this.ctx) return;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.life;

        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.font = `${p.size}px serif`;
        this.ctx.fillStyle = p.color;
        this.ctx.fillText(p.text, p.x, p.y);
        this.ctx.restore();
      }

      requestAnimationFrame(() => this.animate());
    }
  };

  /* ==========================================================================
     5. THREE.JS 3D SCENE MANAGERS (HERO, VAULT & DETAIL 360°)
     ========================================================================== */
  const ThreeManager = {
    heroScene: null,
    heroCamera: null,
    heroRenderer: null,
    heroBookMesh: null,
    heroOrbMesh: null,
    heroParticles: null,

    vaultScene: null,
    vaultCamera: null,
    vaultRenderer: null,
    vaultBooks: [],

    detailScene: null,
    detailCamera: null,
    detailRenderer: null,
    detailBookMesh: null,
    detailAutoRotate: true,

    initHero: function () {
      const container = document.getElementById('hero-three-canvas');
      if (!container || container.children.length > 0) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      // 1. Scene, Camera, Renderer
      this.heroScene = new THREE.Scene();
      this.heroCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      this.heroCamera.position.set(0, 2, 8);

      this.heroRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.heroRenderer.setSize(width, height);
      this.heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(this.heroRenderer.domElement);

      // Ambient & Spot Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      this.heroScene.add(ambientLight);

      const goldSpotLight = new THREE.SpotLight(0xf59e0b, 2.5);
      goldSpotLight.position.set(5, 10, 5);
      this.heroScene.add(goldSpotLight);

      const purplePointLight = new THREE.PointLight(0x8b5cf6, 3, 20);
      purplePointLight.position.set(-4, -2, 4);
      this.heroScene.add(purplePointLight);

      // 2. Levitating 3D Spellbook Group
      const bookGroup = new THREE.Group();

      // Cover Geometry
      const coverGeo = new THREE.BoxGeometry(2.2, 3.0, 0.35);
      const coverMat = new THREE.MeshStandardMaterial({
        color: 0x2e1065,
        roughness: 0.3,
        metalness: 0.4
      });
      const coverMesh = new THREE.Mesh(coverGeo, coverMat);
      bookGroup.add(coverMesh);

      // Glowing Page Pages Geometry
      const pageGeo = new THREE.BoxGeometry(2.0, 2.8, 0.28);
      const pageMat = new THREE.MeshStandardMaterial({
        color: 0xfef08a,
        emissive: 0xf59e0b,
        emissiveIntensity: 0.4
      });
      const pageMesh = new THREE.Mesh(pageGeo, pageMat);
      pageMesh.position.x = 0.05;
      bookGroup.add(pageMesh);

      // Gold Spine & Corner Accents
      const spineGeo = new THREE.BoxGeometry(0.38, 3.02, 0.38);
      const spineMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.2 });
      const spineMesh = new THREE.Mesh(spineGeo, spineMat);
      spineMesh.position.x = -1.05;
      bookGroup.add(spineMesh);

      bookGroup.position.set(-1.8, 0, 0);
      bookGroup.rotation.y = 0.4;
      bookGroup.rotation.x = 0.2;
      this.heroScene.add(bookGroup);
      this.heroBookMesh = bookGroup;

      // 3. Central Magic Crystal Orb
      const orbGroup = new THREE.Group();
      const orbGeo = new THREE.SphereGeometry(1.0, 32, 32);
      const orbMat = new THREE.MeshPhysicalMaterial({
        color: 0x8b5cf6,
        emissive: 0x06b6d4,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        transmission: 0.9,
        thickness: 1.2
      });
      const orbMesh = new THREE.Mesh(orbGeo, orbMat);
      orbGroup.add(orbMesh);

      // Orbiting Wireframe Rings
      const ringGeo = new THREE.TorusGeometry(1.6, 0.03, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.9 });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 3;
      orbGroup.add(ringMesh);

      orbGroup.position.set(2.0, 0.5, -0.5);
      this.heroScene.add(orbGroup);
      this.heroOrbMesh = orbGroup;

      // 4. 500+ Mana Streams Particle Cloud
      const particleCount = 450;
      const particleGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorPool = [new THREE.Color(0xf59e0b), new THREE.Color(0x8b5cf6), new THREE.Color(0x06b6d4)];

      for (let i = 0; i < particleCount; i++) {
        const radius = 2.5 + Math.random() * 2.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);

        const col = colorPool[Math.floor(Math.random() * colorPool.length)];
        colors[i * 3] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;
      }

      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const particleMat = new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });

      this.heroParticles = new THREE.Points(particleGeo, particleMat);
      this.heroScene.add(this.heroParticles);

      // Mouse Parallax Tilt
      let mouseX = 0, mouseY = 0;
      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
        mouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
      });

      // Render Loop
      let clock = new THREE.Clock();
      const animateHero = () => {
        requestAnimationFrame(animateHero);
        const elapsedTime = clock.getElapsedTime();

        // Levitating floating animation
        if (this.heroBookMesh) {
          this.heroBookMesh.position.y = Math.sin(elapsedTime * 1.5) * 0.25;
          this.heroBookMesh.rotation.y = 0.4 + Math.sin(elapsedTime * 0.8) * 0.15;
        }

        if (this.heroOrbMesh) {
          this.heroOrbMesh.rotation.y = elapsedTime * 0.8;
          this.heroOrbMesh.rotation.z = elapsedTime * 0.5;
          this.heroOrbMesh.position.y = 0.5 + Math.cos(elapsedTime * 1.8) * 0.15;
        }

        if (this.heroParticles) {
          this.heroParticles.rotation.y = elapsedTime * 0.12;
        }

        // Camera tilt towards mouse
        this.heroCamera.position.x += (mouseX * 0.8 - this.heroCamera.position.x) * 0.05;
        this.heroCamera.position.y += (-mouseY * 0.8 + 2 - this.heroCamera.position.y) * 0.05;
        this.heroCamera.lookAt(0, 0, 0);

        this.heroRenderer.render(this.heroScene, this.heroCamera);
      };
      animateHero();
    },

    initVault: function () {
      const container = document.getElementById('vault-three-canvas');
      if (!container || container.children.length > 0) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      this.vaultScene = new THREE.Scene();
      this.vaultCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      this.vaultCamera.position.set(0, 1.5, 7);

      this.vaultRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.vaultRenderer.setSize(width, height);
      this.vaultRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(this.vaultRenderer.domElement);

      const light = new THREE.DirectionalLight(0xffffff, 1.2);
      light.position.set(2, 5, 5);
      this.vaultScene.add(light);
      this.vaultScene.add(new THREE.AmbientLight(0x8b5cf6, 0.5));

      // Build 3D Vault Shelf Backing
      const shelfGeo = new THREE.BoxGeometry(9, 0.2, 2);
      const shelfMat = new THREE.MeshStandardMaterial({ color: 0x1f1938, roughness: 0.5 });
      const shelf1 = new THREE.Mesh(shelfGeo, shelfMat);
      shelf1.position.set(0, -0.5, 0);
      this.vaultScene.add(shelf1);

      const shelf2 = new THREE.Mesh(shelfGeo, shelfMat);
      shelf2.position.set(0, 1.8, 0);
      this.vaultScene.add(shelf2);

      // Add 3D Glowing Spellbooks on Shelf
      this.vaultBooks = [];
      const bookColors = [0x701a75, 0x065f46, 0x1e3a8a, 0x831843, 0x854d0e, 0x1e1b4b];

      BOOK_DATABASE.slice(0, 6).forEach((bookData, idx) => {
        const bookGroup = new THREE.Group();
        const bGeo = new THREE.BoxGeometry(0.8, 2.2, 1.4);
        const bMat = new THREE.MeshStandardMaterial({
          color: bookColors[idx % bookColors.length],
          roughness: 0.3
        });
        const mesh = new THREE.Mesh(bGeo, bMat);
        bookGroup.add(mesh);

        // Position on shelves
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        bookGroup.position.set((col - 1) * 2.5, row * 2.3 + 0.6, 0);
        bookGroup.rotation.y = (Math.random() - 0.5) * 0.3;

        bookGroup.userData = bookData;
        this.vaultScene.add(bookGroup);
        this.vaultBooks.push(bookGroup);
      });

      // Raycaster for selecting vault books
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      container.addEventListener('click', (e) => {
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;

        raycaster.setFromCamera(mouse, this.vaultCamera);
        const intersects = raycaster.intersectObjects(this.vaultBooks.map(b => b.children[0]));

        if (intersects.length > 0) {
          const selectedGroup = intersects[0].object.parent;
          const bData = selectedGroup.userData;

          // Highlight selected book with rotation pulse
          selectedGroup.rotation.y += Math.PI * 2;
          SoundEngine.playChimeSound();

          // Update Vault Overlay UI
          document.getElementById('vault-book-lang').textContent = bData.langDisplay;
          document.getElementById('vault-book-title').textContent = bData.title[currentLang] || bData.title.KO;
          document.getElementById('vault-book-desc').textContent = bData.synopsis[currentLang] || bData.synopsis.KO;

          const btnDetail = document.getElementById('vault-btn-detail');
          const btnCart = document.getElementById('vault-btn-cart');

          btnDetail.onclick = () => { window.location.hash = `#detail?id=${bData.id}`; };
          btnCart.onclick = () => { CartManager.addItem(bData.id); };
        }
      });

      const animateVault = () => {
        requestAnimationFrame(animateVault);
        this.vaultRenderer.render(this.vaultScene, this.vaultCamera);
      };
      animateVault();
    },

    initDetail3D: function (bookData) {
      const container = document.getElementById('detail-three-canvas');
      if (!container) return;
      container.innerHTML = ''; // Reset previous model

      const width = container.clientWidth;
      const height = container.clientHeight;

      this.detailScene = new THREE.Scene();
      this.detailCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      this.detailCamera.position.set(0, 0, 5);

      this.detailRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.detailRenderer.setSize(width, height);
      this.detailRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(this.detailRenderer.domElement);

      const ambient = new THREE.AmbientLight(0xffffff, 0.7);
      this.detailScene.add(ambient);

      const spotLight = new THREE.SpotLight(0xf59e0b, 2.5);
      spotLight.position.set(5, 5, 5);
      this.detailScene.add(spotLight);

      // Detailed 3D Hardcover Book Model
      const bookGroup = new THREE.Group();

      const coverGeo = new THREE.BoxGeometry(2.4, 3.2, 0.4);
      const coverMat = new THREE.MeshStandardMaterial({
        color: 0x1e1b4b,
        metalness: 0.3,
        roughness: 0.4
      });
      const coverMesh = new THREE.Mesh(coverGeo, coverMat);
      bookGroup.add(coverMesh);

      // Gold Corners
      const cornerGeo = new THREE.BoxGeometry(0.3, 0.3, 0.42);
      const cornerMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9 });

      [[-1.1, 1.5], [1.1, 1.5], [-1.1, -1.5], [1.1, -1.5]].forEach(([cx, cy]) => {
        const cMesh = new THREE.Mesh(cornerGeo, cornerMat);
        cMesh.position.set(cx, cy, 0);
        bookGroup.add(cMesh);
      });

      this.detailScene.add(bookGroup);
      this.detailBookMesh = bookGroup;

      // Mouse Drag Rotation
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      container.addEventListener('pointerdown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener('pointermove', (e) => {
        if (!isDragging || !this.detailBookMesh) return;
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        this.detailBookMesh.rotation.y += deltaX * 0.01;
        this.detailBookMesh.rotation.x += deltaY * 0.01;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener('pointerup', () => { isDragging = false; });

      // Render loop
      const animateDetail = () => {
        requestAnimationFrame(animateDetail);
        if (this.detailBookMesh && this.detailAutoRotate && !isDragging) {
          this.detailBookMesh.rotation.y += 0.008;
        }
        this.detailRenderer.render(this.detailScene, this.detailCamera);
      };
      animateDetail();
    }
  };

  /* ==========================================================================
     6. CART MANAGEMENT & LIBRARIAN QUOTE SYSTEM (PDF & EXCEL)
     ========================================================================== */
  const CartManager = {
    items: [],

    init: function () {
      const saved = localStorage.getItem('v23_cart_items');
      if (saved) {
        try { this.items = JSON.parse(saved); } catch (e) { this.items = []; }
      } else {
        // Default sample cart items for librarians to test PDF quote generation out-of-the-box!
        this.items = [
          { bookId: 'B001', qty: 5, selected: true },
          { bookId: 'B002', qty: 3, selected: true },
          { bookId: 'B003', qty: 2, selected: true }
        ];
      }
      this.updateBadges();
    },

    save: function () {
      localStorage.setItem('v23_cart_items', JSON.stringify(this.items));
      this.updateBadges();
      this.renderCartTable();
    },

    addItem: function (bookId, qty = 1) {
      const existing = this.items.find(i => i.bookId === bookId);
      if (existing) {
        existing.qty += qty;
      } else {
        this.items.push({ bookId, qty, selected: true });
      }
      SoundEngine.playChimeSound();
      this.save();
      alert('🔮 선택한 도서가 수서 장바구니에 추가되었습니다!');
    },

    removeItem: function (bookId) {
      this.items = this.items.filter(i => i.bookId !== bookId);
      this.save();
    },

    updateQty: function (bookId, qty) {
      const item = this.items.find(i => i.bookId === bookId);
      if (item) {
        item.qty = Math.max(1, qty);
        this.save();
      }
    },

    updateBadges: function () {
      const totalCopies = this.items.reduce((sum, i) => sum + i.qty, 0);
      document.getElementById('nav-cart-badge').textContent = totalCopies;
      document.getElementById('header-cart-count').textContent = totalCopies;
    },

    renderCartTable: function () {
      const tbody = document.getElementById('cart-table-body');
      const emptyState = document.getElementById('cart-empty-state');
      const tableEl = document.getElementById('cart-table');
      if (!tbody) return;

      tbody.innerHTML = '';

      if (this.items.length === 0) {
        tableEl.classList.add('hidden');
        emptyState.classList.remove('hidden');
        this.updateStats(0, 0, 0, 0);
        return;
      }

      tableEl.classList.remove('hidden');
      emptyState.classList.add('hidden');

      let totalTitles = 0;
      let totalCopies = 0;
      let totalRegularSum = 0;
      let totalSupplySum = 0;

      this.items.forEach(item => {
        const book = BOOK_DATABASE.find(b => b.id === item.bookId);
        if (!book) return;

        const supplyPrice = Math.floor(book.price * 0.9);
        const subtotal = supplyPrice * item.qty;

        if (item.selected) {
          totalTitles += 1;
          totalCopies += item.qty;
          totalRegularSum += book.price * item.qty;
          totalSupplySum += subtotal;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="text-center">
            <input type="checkbox" class="cart-item-check" data-id="${book.id}" ${item.selected ? 'checked' : ''}>
          </td>
          <td>
            <div class="book-list-cover" style="height:50px; font-size:16px;">${book.coverIcon}</div>
          </td>
          <td>
            <strong>${book.title[currentLang] || book.title.KO}</strong>
            <div style="font-size:12px; color:var(--text-muted);">
              ${book.author} | ISBN: ${book.isbn} | KDC: ${book.kdcCode}
            </div>
          </td>
          <td class="text-right">${book.price.toLocaleString()}원</td>
          <td class="text-right gold-text">${supplyPrice.toLocaleString()}원</td>
          <td class="text-center">
            <div class="qty-control">
              <button class="qty-btn btn-minus" data-id="${book.id}">-</button>
              <input type="number" class="qty-input" data-id="${book.id}" value="${item.qty}" min="1">
              <button class="qty-btn btn-plus" data-id="${book.id}">+</button>
            </div>
          </td>
          <td class="text-right gold-text"><strong>${subtotal.toLocaleString()}원</strong></td>
          <td class="text-center">
            <button class="btn btn-xs btn-outline-danger btn-remove" data-id="${book.id}"><i data-lucide="trash-2"></i></button>
          </td>
        `;
        tbody.appendChild(tr);
      });

      lucide.createIcons();
      this.updateStats(totalTitles, totalCopies, totalRegularSum, totalSupplySum);
      this.bindCartEvents();
    },

    updateStats: function (titles, copies, regular, supply) {
      document.getElementById('cart-total-titles').textContent = `${titles} 종`;
      document.getElementById('cart-total-copies').textContent = `${copies} 권`;
      document.getElementById('cart-total-regular').textContent = `${regular.toLocaleString()} 원`;
      document.getElementById('cart-total-supply').textContent = `${supply.toLocaleString()} 원`;
    },

    bindCartEvents: function () {
      document.querySelectorAll('.btn-minus').forEach(btn => {
        btn.onclick = () => {
          const id = btn.dataset.id;
          const item = this.items.find(i => i.bookId === id);
          if (item && item.qty > 1) this.updateQty(id, item.qty - 1);
        };
      });

      document.querySelectorAll('.btn-plus').forEach(btn => {
        btn.onclick = () => {
          const id = btn.dataset.id;
          const item = this.items.find(i => i.bookId === id);
          if (item) this.updateQty(id, item.qty + 1);
        };
      });

      document.querySelectorAll('.qty-input').forEach(input => {
        input.onchange = (e) => {
          const id = input.dataset.id;
          const val = parseInt(e.target.value, 10);
          if (!isNaN(val) && val >= 1) this.updateQty(id, val);
        };
      });

      document.querySelectorAll('.cart-item-check').forEach(chk => {
        chk.onchange = (e) => {
          const id = chk.dataset.id;
          const item = this.items.find(i => i.bookId === id);
          if (item) {
            item.selected = e.target.checked;
            this.save();
          }
        };
      });

      document.querySelectorAll('.btn-remove').forEach(btn => {
        btn.onclick = () => { this.removeItem(btn.dataset.id); };
      });
    },

    generatePDF: function () {
      const { jsPDF } = window.jspdf;
      if (!jsPDF) {
        alert('jsPDF 라이브러리를 로드하는 중 오류가 발생했습니다.');
        return;
      }

      const doc = new jsPDF();
      const instName = document.getElementById('inst-name').value || '다문화도서관';
      const librarianName = document.getElementById('inst-librarian').value || '수서 담당자';
      const contact = document.getElementById('inst-contact').value || '02-1234-5678';

      // PDF Title & Header
      doc.setFontSize(18);
      doc.text('[공문] 다문화도서관 수서 납품 견적서', 14, 20);

      doc.setFontSize(10);
      doc.text(`발행일자: ${new Date().toLocaleDateString('ko-KR')}`, 14, 28);
      doc.text(`수신기관: ${instName} (${librarianName} 사서 귀하)`, 14, 34);
      doc.text(`발신처: (주)다문화도서관 수서 아카데미 (연락처: ${contact})`, 14, 40);

      doc.line(14, 44, 196, 44);

      // Table Header
      let y = 52;
      doc.setFontSize(10);
      doc.text('번호', 14, y);
      doc.text('도서명 (Title)', 30, y);
      doc.text('ISBN', 110, y);
      doc.text('수량', 145, y);
      doc.text('납품가(10%할인)', 165, y);
      y += 4;
      doc.line(14, y, 196, y);

      let totalCopies = 0;
      let totalPrice = 0;

      const selectedItems = this.items.filter(i => i.selected);

      selectedItems.forEach((item, index) => {
        const book = BOOK_DATABASE.find(b => b.id === item.bookId);
        if (!book) return;

        y += 8;
        const supplyPrice = Math.floor(book.price * 0.9);
        const subtotal = supplyPrice * item.qty;

        totalCopies += item.qty;
        totalPrice += subtotal;

        doc.text(`${index + 1}`, 14, y);
        doc.text(`${(book.title.KO || book.title.EN).substring(0, 24)}`, 30, y);
        doc.text(`${book.isbn}`, 110, y);
        doc.text(`${item.qty}권`, 145, y);
        doc.text(`${subtotal.toLocaleString()}원`, 165, y);

        if (y > 260) {
          doc.addPage();
          y = 20;
        }
      });

      y += 10;
      doc.line(14, y, 196, y);
      y += 8;

      doc.setFontSize(12);
      doc.text(`합계: 총 ${selectedItems.length}종 ${totalCopies}권 / 납품 총금액: ${totalPrice.toLocaleString()}원 (VAT 포함)`, 14, y);

      y += 20;
      doc.setFontSize(10);
      doc.text('위 금액으로 다문화도서관 납품 도서 견적서를 제출합니다.', 14, y);
      doc.text('(주)다문화도서관 수서 대표이사 직인', 130, y + 10);

      // Add Official Stamp Mark
      doc.setDrawColor(245, 158, 11);
      doc.setLineWidth(1);
      doc.circle(178, y + 8, 10);

      doc.save(`다문화도서관_수서_공문견적서_${Date.now()}.pdf`);
      SoundEngine.playChimeSound();
    },

    generateExcel: function () {
      if (!window.XLSX) {
        alert('SheetJS XLSX 라이브러리를 로드하는 중 오류가 발생했습니다.');
        return;
      }

      const selectedItems = this.items.filter(i => i.selected);
      const data = selectedItems.map((item, index) => {
        const book = BOOK_DATABASE.find(b => b.id === item.bookId);
        const supplyPrice = Math.floor(book.price * 0.9);
        return {
          '연번': index + 1,
          '도서명': book.title[currentLang] || book.title.KO,
          '저자': book.author,
          '출판사': book.publisher,
          '지원언어': book.langDisplay,
          'ISBN': book.isbn,
          'KDC코드': book.kdcCode,
          '정가(원)': book.price,
          '사서납품가(10%할인)': supplyPrice,
          '수량': item.qty,
          '합계금액(원)': supplyPrice * item.qty
        };
      });

      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, '수서도서목록');

      XLSX.writeFile(wb, `다문화도서관_수서사양서_${Date.now()}.xlsx`);
      SoundEngine.playChimeSound();
    }
  };

  /* ==========================================================================
     7. SEARCH & FILTER CONTROLLER
     ========================================================================== */
  const SearchController = {
    activeTag: 'ALL',

    init: function () {
      const searchInput = document.getElementById('search-input');
      const searchClearBtn = document.getElementById('search-clear-btn');
      const resetBtn = document.getElementById('reset-filters-btn');

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          if (searchClearBtn) {
            searchClearBtn.classList.toggle('hidden', e.target.value.length === 0);
          }
          this.render();
        });
      }

      if (searchClearBtn) {
        searchClearBtn.onclick = () => {
          searchInput.value = '';
          searchClearBtn.classList.add('hidden');
          this.render();
        };
      }

      // Tag filter pills
      document.querySelectorAll('#theme-tags-container .tag-pill').forEach(btn => {
        btn.onclick = () => {
          document.querySelectorAll('#theme-tags-container .tag-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.activeTag = btn.dataset.tag;
          this.render();
        };
      });

      // Dropdown filters
      ['filter-lang', 'filter-kdc', 'filter-age', 'filter-publisher'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', () => this.render());
      });

      if (resetBtn) {
        resetBtn.onclick = () => {
          if (searchInput) searchInput.value = '';
          if (searchClearBtn) searchClearBtn.classList.add('hidden');
          this.activeTag = 'ALL';
          document.querySelectorAll('#theme-tags-container .tag-pill').forEach(b => {
            b.classList.toggle('active', b.dataset.tag === 'ALL');
          });
          ['filter-lang', 'filter-kdc', 'filter-age', 'filter-publisher'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = 'ALL';
          });
          this.render();
        };
      }
    },

    render: function () {
      const grid = document.getElementById('search-results-grid');
      const countEl = document.getElementById('search-results-count');
      if (!grid) return;

      const query = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
      const langVal = document.getElementById('filter-lang')?.value || 'ALL';
      const kdcVal = document.getElementById('filter-kdc')?.value || 'ALL';
      const ageVal = document.getElementById('filter-age')?.value || 'ALL';
      const pubVal = document.getElementById('filter-publisher')?.value || 'ALL';

      const filtered = BOOK_DATABASE.filter(book => {
        // Query match
        const titleMatch = (book.title[currentLang] || book.title.KO).toLowerCase().includes(query);
        const authorMatch = book.author.toLowerCase().includes(query);
        const pubMatch = book.publisher.toLowerCase().includes(query);
        const isbnMatch = book.isbn.includes(query);
        const kdcMatch = book.kdcCode.includes(query);

        if (query && !(titleMatch || authorMatch || pubMatch || isbnMatch || kdcMatch)) return false;

        // Tag filter
        if (this.activeTag !== 'ALL' && !book.tags.includes(`#${this.activeTag}`)) return false;

        // Language filter
        if (langVal !== 'ALL' && book.lang !== langVal) return false;

        // KDC filter
        if (kdcVal !== 'ALL' && book.kdc !== kdcVal) return false;

        // Age filter
        if (ageVal !== 'ALL' && book.age !== ageVal) return false;

        // Publisher filter
        if (pubVal !== 'ALL' && book.publisher !== pubVal) return false;

        return true;
      });

      countEl.textContent = filtered.length;
      grid.innerHTML = '';

      filtered.forEach(book => {
        grid.appendChild(createBookCard(book));
      });
    }
  };

  /* Helper: Render Book Card Element */
  function createBookCard(book) {
    const supplyPrice = Math.floor(book.price * 0.9);
    const card = document.createElement('div');
    card.className = 'book-card magic-glass';
    card.innerHTML = `
      <div class="book-cover-wrapper" style="background:${book.bgGradient};">
        <span class="book-lang-badge">${book.langDisplay}</span>
        <span class="book-kdc-badge">KDC ${book.kdcCode}</span>
        <div class="book-cover-art">
          <div class="cover-rune-icon">${book.coverIcon}</div>
          <div class="cover-title-text">${book.title[currentLang] || book.title.KO}</div>
        </div>
      </div>
      <div class="book-info-body">
        <h3 class="book-card-title">${book.title[currentLang] || book.title.KO}</h3>
        <p class="book-card-author">${book.author} | ${book.publisher}</p>
        <div class="book-tags-row">
          ${book.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
        </div>
        <div class="book-price-row">
          <span class="regular-price">${book.price.toLocaleString()}원</span>
          <span class="supply-price">${supplyPrice.toLocaleString()}원</span>
        </div>
        <div class="book-card-actions">
          <button class="btn btn-sm btn-magic-gold btn-detail-trigger" data-id="${book.id}">
            <i data-lucide="eye"></i>
            <span>3D 상세</span>
          </button>
          <button class="btn btn-sm btn-magic-purple btn-cart-trigger" data-id="${book.id}">
            <i data-lucide="plus"></i>
            <span>장바구니</span>
          </button>
        </div>
      </div>
    `;

    card.querySelector('.btn-detail-trigger').onclick = () => {
      window.location.hash = `#detail?id=${book.id}`;
    };

    card.querySelector('.btn-cart-trigger').onclick = () => {
      CartManager.addItem(book.id);
    };

    return card;
  }

  /* ==========================================================================
     8. CURATION PACKAGES CONTROLLER
     ========================================================================== */
  const CurationController = {
    packages: [
      {
        id: 'P001',
        title: '세계 판타지 & 마법 전래동화 큐레이션 패키지',
        desc: '독일 그림 형제, 베트남 그림자 요정, 바다 마녀 이야기 등 전 세계 어린이/청소년을 위한 마법 전래동화 4종 결합 패키지.',
        bookIds: ['B001', 'B002', 'B003', 'B006']
      },
      {
        id: 'P002',
        title: '흥미진진 청소년 탐험 & 코스믹 신화 문학전',
        desc: '우주 마법서 항해, 불새와 룬 문자, 검은 숲 마나 수정을 탐험하는 청소년 수서 전용 프리미엄 패키지.',
        bookIds: ['B004', 'B007', 'B010', 'B011']
      },
      {
        id: 'P003',
        title: '유럽 & 독일 판타지 고전 특선 패키지',
        desc: '독일어 원서 수록 그림 형제 동화, 검은 숲 룬 마법 및 불새 전설로 구성된 고급 고전 서지 라인업.',
        bookIds: ['B003', 'B007', 'B010']
      },
      {
        id: 'P004',
        title: '동양 신화 & 다문화 글로벌 학습 컬렉션',
        desc: '천년 서고 연금술 비밀, 5개국 시간여행 탐험대 및 세계 전래동화 5-Lang 컬렉션.',
        bookIds: ['B005', 'B008', 'B009', 'B012']
      }
    ],

    render: function () {
      const container = document.getElementById('curation-packages-list');
      if (!container) return;
      container.innerHTML = '';

      this.packages.forEach(pkg => {
        const pkgBooks = pkg.bookIds.map(id => BOOK_DATABASE.find(b => b.id === id)).filter(Boolean);
        const totalPrice = pkgBooks.reduce((sum, b) => sum + Math.floor(b.price * 0.9), 0);

        const card = document.createElement('div');
        card.className = 'package-card magic-glass';
        card.innerHTML = `
          <div class="package-header">
            <div>
              <h2 class="package-title">${pkg.title}</h2>
              <p class="package-desc">${pkg.desc}</p>
            </div>
          </div>
          <div class="package-books-grid">
            ${pkgBooks.map(b => `
              <div class="book-card" style="padding:12px;">
                <div class="book-cover-wrapper" style="height:160px; background:${b.bgGradient};">
                  <div class="cover-rune-icon" style="font-size:24px;">${b.coverIcon}</div>
                </div>
                <h4 style="font-size:14px; font-weight:700; margin:6px 0;">${b.title[currentLang] || b.title.KO}</h4>
                <p style="font-size:12px; color:var(--text-muted);">${b.author}</p>
              </div>
            `).join('')}
          </div>
          <div class="package-footer">
            <div class="package-price-info">
              <span class="package-total-label">패키지 (4종) 납품 총금액:</span>
              <span class="package-total-price">${totalPrice.toLocaleString()}원</span>
            </div>
            <button class="btn btn-lg btn-magic-gold btn-add-pkg" data-id="${pkg.id}">
              <i data-lucide="package-plus"></i>
              <span data-i18n="btnAddPackageCart">🔮 패키지 전체 장바구니 담기</span>
            </button>
          </div>
        `;

        card.querySelector('.btn-add-pkg').onclick = () => {
          pkg.bookIds.forEach(id => CartManager.addItem(id, 1));
          alert(`🔮 [${pkg.title}] 전체 도서가 장바구니에 담겼습니다!`);
        };

        container.appendChild(card);
      });

      lucide.createIcons();
    }
  };

  /* ==========================================================================
     9. DETAIL PAGE VIEW CONTROLLER
     ========================================================================== */
  const DetailController = {
    currentBook: null,
    isPlayingChant: false,

    load: function (bookId) {
      const book = BOOK_DATABASE.find(b => b.id === bookId) || BOOK_DATABASE[0];
      this.currentBook = book;

      document.getElementById('detail-title').textContent = book.title[currentLang] || book.title.KO;
      document.getElementById('detail-subtitle').textContent = book.subtitle;
      document.getElementById('detail-author').textContent = book.author;
      document.getElementById('detail-publisher').textContent = book.publisher;
      document.getElementById('detail-lang-badge').textContent = book.langDisplay;
      document.getElementById('detail-kdc-badge').textContent = `KDC ${book.kdcCode}`;
      document.getElementById('detail-age-badge').textContent = book.ageDisplay;

      document.getElementById('detail-isbn').textContent = book.isbn;
      document.getElementById('detail-kdc-code').textContent = book.kdcCode;
      document.getElementById('detail-pub-date').textContent = book.pubDate;
      document.getElementById('detail-pages').textContent = `${book.pages} 페이지`;
      document.getElementById('detail-orig-lang').textContent = book.origLang;
      document.getElementById('detail-theme-tags').textContent = book.tags.join(' ');

      const supplyPrice = Math.floor(book.price * 0.9);
      document.getElementById('detail-regular-price').textContent = `${book.price.toLocaleString()}원`;
      document.getElementById('detail-supply-price').textContent = `${supplyPrice.toLocaleString()}원`;

      document.getElementById('detail-synopsis').textContent = book.synopsis[currentLang] || book.synopsis.KO;

      // Initialize 3D Spellbook Model
      ThreeManager.initDetail3D(book);

      // Bind detail action buttons
      document.getElementById('detail-add-cart-btn').onclick = () => {
        CartManager.addItem(book.id);
      };

      const chantBtn = document.getElementById('chant-play-btn');
      const chantText = document.getElementById('chant-status-text');

      chantBtn.onclick = () => {
        if (this.isPlayingChant) return;
        this.isPlayingChant = true;

        document.getElementById('chant-icon-play').classList.add('hidden');
        document.getElementById('chant-icon-stop').classList.remove('hidden');
        chantText.textContent = TRANSLATIONS[currentLang].lblChantPlaying;

        SoundEngine.playChantSynth(() => {
          this.isPlayingChant = false;
          document.getElementById('chant-icon-play').classList.remove('hidden');
          document.getElementById('chant-icon-stop').classList.add('hidden');
          chantText.textContent = TRANSLATIONS[currentLang].lblChantReady;
        });
      };

      const autoRotateBtn = document.getElementById('detail-auto-rotate-btn');
      if (autoRotateBtn) {
        autoRotateBtn.onclick = () => {
          ThreeManager.detailAutoRotate = !ThreeManager.detailAutoRotate;
          autoRotateBtn.classList.toggle('active', ThreeManager.detailAutoRotate);
        };
      }

      const scanBtn = document.getElementById('detail-laser-scan-btn');
      if (scanBtn) {
        scanBtn.onclick = () => {
          SoundEngine.playChimeSound();
          if (ThreeManager.detailBookMesh) {
            ThreeManager.detailBookMesh.rotation.x += Math.PI * 2;
          }
        };
      }
    }
  };

  /* ==========================================================================
     10. SPA ROUTER & APP INITIALIZATION
     ========================================================================== */
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (TRANSLATIONS[lang][key]) {
        el.textContent = TRANSLATIONS[lang][key];
      }
    });

    // Re-render active views
    SearchController.render();
    CurationController.render();
    CartManager.renderCartTable();

    if (DetailController.currentBook) {
      DetailController.load(DetailController.currentBook.id);
    }
  }

  function handleRoute() {
    const hash = window.location.hash || '#home';
    const page = hash.split('?')[0].replace('#', '') || 'home';

    document.querySelectorAll('.page-view').forEach(view => {
      view.classList.add('hidden');
      view.classList.remove('active');
    });

    const activeView = document.getElementById(`view-${page}`);
    if (activeView) {
      activeView.classList.remove('hidden');
      activeView.classList.add('active');
    }

    // Update Header Nav Active state
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.page === page);
    });

    window.scrollTo(0, 0);

    // Section specific initializations
    if (page === 'home') {
      ThreeManager.initHero();
      ThreeManager.initVault();
      renderHomeNewReleases();
    } else if (page === 'search') {
      SearchController.render();
    } else if (page === 'curation') {
      CurationController.render();
    } else if (page === 'cart') {
      CartManager.renderCartTable();
    } else if (page === 'detail') {
      const params = new URLSearchParams(hash.split('?')[1]);
      const bookId = params.get('id') || 'B001';
      DetailController.load(bookId);
    }
  }

  function renderHomeNewReleases() {
    const container = document.getElementById('home-new-releases-container');
    if (!container) return;
    container.innerHTML = '';

    BOOK_DATABASE.slice(0, 6).forEach(book => {
      container.appendChild(createBookCard(book));
    });
    lucide.createIcons();
  }

  function initApp() {
    // 1. Init Audio & Particle Engine
    SoundEngine.init();
    ParticleEngine.init();
    CartManager.init();

    // 2. Language Switcher listener
    const langSelect = document.getElementById('language-switcher');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
    }

    // 3. Sound Toggle Button
    const soundBtn = document.getElementById('sound-toggle-btn');
    if (soundBtn) {
      soundBtn.onclick = () => {
        SoundEngine.muted = !SoundEngine.muted;
        document.getElementById('sound-icon-on').classList.toggle('hidden', SoundEngine.muted);
        document.getElementById('sound-icon-off').classList.toggle('hidden', !SoundEngine.muted);
      };
    }

    // 4. Cart Export PDF / Excel Buttons
    const pdfBtn = document.getElementById('export-pdf-btn');
    if (pdfBtn) pdfBtn.onclick = () => CartManager.generatePDF();

    const excelBtn = document.getElementById('export-excel-btn');
    if (excelBtn) excelBtn.onclick = () => CartManager.generateExcel();

    // Select All / Deselect All / Clear Cart
    const selectAllBtn = document.getElementById('cart-select-all-btn');
    if (selectAllBtn) {
      selectAllBtn.onclick = () => {
        CartManager.items.forEach(i => i.selected = true);
        CartManager.save();
      };
    }

    const deselectAllBtn = document.getElementById('cart-deselect-all-btn');
    if (deselectAllBtn) {
      deselectAllBtn.onclick = () => {
        CartManager.items.forEach(i => i.selected = false);
        CartManager.save();
      };
    }

    const deleteSelectedBtn = document.getElementById('cart-delete-selected-btn');
    if (deleteSelectedBtn) {
      deleteSelectedBtn.onclick = () => {
        CartManager.items = CartManager.items.filter(i => !i.selected);
        CartManager.save();
      };
    }

    const clearCartBtn = document.getElementById('cart-clear-btn');
    if (clearCartBtn) {
      clearCartBtn.onclick = () => {
        if (confirm('견적 장바구니를 전체 비우시겠습니까?')) {
          CartManager.items = [];
          CartManager.save();
        }
      };
    }

    // View mode toggle (3D Grid vs Classic List)
    const gridBtn = document.getElementById('view-mode-grid-btn');
    const listBtn = document.getElementById('view-mode-list-btn');
    const newReleasesContainer = document.getElementById('home-new-releases-container');

    if (gridBtn && listBtn && newReleasesContainer) {
      gridBtn.onclick = () => {
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
        newReleasesContainer.className = 'grid-layout';
        renderHomeNewReleases();
      };
      listBtn.onclick = () => {
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
        newReleasesContainer.className = 'list-layout';
        renderHomeNewReleasesList();
      };
    }

    SearchController.init();

    // 5. Router Event Listener
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // Render Lucide Icons
    lucide.createIcons();
  }

  function renderHomeNewReleasesList() {
    const container = document.getElementById('home-new-releases-container');
    if (!container) return;
    container.innerHTML = '';

    BOOK_DATABASE.slice(0, 6).forEach(book => {
      const supplyPrice = Math.floor(book.price * 0.9);
      const item = document.createElement('div');
      item.className = 'book-list-item magic-glass';
      item.innerHTML = `
        <div class="book-list-cover">${book.coverIcon}</div>
        <div>
          <h4 style="font-family:var(--font-title); font-size:16px; font-weight:700;">${book.title[currentLang] || book.title.KO}</h4>
          <p style="font-size:13px; color:var(--text-muted);">${book.author} | ${book.publisher} | ${book.langDisplay}</p>
          <span style="font-size:11px; color:var(--accent-purple-light);">${book.tags.join(' ')}</span>
        </div>
        <div class="text-right">
          <div style="font-size:12px; color:var(--text-dim); text-decoration:line-through;">${book.price.toLocaleString()}원</div>
          <div style="font-size:17px; font-weight:800; color:var(--accent-gold-light);">${supplyPrice.toLocaleString()}원</div>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn btn-sm btn-magic-gold btn-detail-trg" data-id="${book.id}">3D 상세</button>
          <button class="btn btn-sm btn-magic-purple btn-cart-trg" data-id="${book.id}">장바구니</button>
        </div>
      `;

      item.querySelector('.btn-detail-trg').onclick = () => {
        window.location.hash = `#detail?id=${book.id}`;
      };

      item.querySelector('.btn-cart-trg').onclick = () => {
        CartManager.addItem(book.id);
      };

      container.appendChild(item);
    });
  }

  // DOM Content Loaded Initializer
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
