/* =====================================================================
   Multicultural Library Mall vc02 — Pirate Harbor Book Voyage
   Quaternius Pirate Kit (CC0, via Poly Pizza) GLB assets · walkable harbor hero · 3 harbor places
   6-language i18n · librarian mode · quote cart (print / xlsx)
   ===================================================================== */
(function () {
  'use strict';

  /* ---------------- 1. i18n ---------------- */
  const I18N = {
    KO: {
      brand: '다문화도서관 수서 몰', navHome: '메인', navSearch: '도서 검색', navCuration: '큐레이션', navCart: '공문 견적함', librarianMode: '사서 모드', cartBtn: '보물 상자',
      heroEyebrow: 'MULTICULTURAL LIBRARY COLLECTION · 2026', heroTitle: '세계의 이야기가<br>보물 상자에 실려 항구에 닿습니다', heroSub: '다문화 도서관을 위한 원서·이중언어 그림책 큐레이션. 사서를 위한 서지정보와 공문 견적을 한 화면에서.', heroCta1: '3D 전시실 입장', heroCta2: '도서 검색하기', statTitles: '보유 종수', statLangs: '지원 언어', statLibs: '납품 도서관', heroHint: '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> 로 캡틴을 움직여 보물 상자를 열어보세요 · 책 클릭 시 상세',
      exhibEyebrow: '3D EXHIBITION HALL', exhibTitle: '항구 곳곳 기획전', exhibSub: '보물 부두·갑판 도서관·해골섬 트레일, 항구의 세 장소에 책이 진열됩니다. 드래그로 둘러보고 책을 클릭하세요.',
      newEyebrow: 'NEW ARRIVALS', newTitle: '2026 하반기 신간', viewList: '서지 리스트', viewParade: '작은 배 책 항해 3D', paradeCaption: '신간 도서가 작은 배를 타고 항구를 지나갑니다 — 클릭하면 상세로',
      libEyebrow: 'FOR LIBRARIANS', libTitle: '수서 담당 사서를 위한 1클릭 공문 견적', libSub: '장바구니에 담은 도서는 납품가(정가 10% 할인)로 자동 산출되어 공문 양식 견적서(인쇄/PDF)와 엑셀 사양서로 내려받을 수 있습니다.', libF1: '모든 카드에 상시 노출', libF2: '도서관 납품가 자동 적용', libF3: '공문 견적서 즉시 출력', libCta: '견적함 열기',
      searchEyebrow: 'BOOK SEARCH', searchTitle: '도서 검색 & 수서', searchSub: '언어·연령·KDC·출판사·가격으로 정밀 검색. ISBN 직접 입력도 가능합니다.', searchPlaceholder: '도서명, 저자, 출판사, ISBN, KDC 입력…', searchBtn: '검색', fLang: '언어', fAge: '대상 연령', fKdc: 'KDC 분류', fPub: '출판사', fPrice: '최대 정가', fReset: '필터 초기화', resultCount: '검색 결과',
      curEyebrow: 'CURATION EXHIBITIONS', curTitle: '기획전 3D 전시실', curSub: '보물 부두·갑판 도서관·해골섬 트레일, 항구 세 장소의 기획전. 사서 패키지 일괄 담기(보물 상자)를 지원합니다.',
      cartEyebrow: 'QUOTE CART', cartTitle: '장바구니 · 공문 견적함', cartSub: '납품가(정가 -10%) 기준으로 자동 산출됩니다. 기관 정보를 입력하면 공문 양식으로 출력됩니다.', cartClear: '전체 비우기', instTitle: '수서 기관 정보', instName: '기관명', instLibrarian: '담당 사서', instContact: '연락처', instEmail: '이메일', btnPrint: '공문 견적서 인쇄 / PDF', btnXlsx: '엑셀 사양서 다운로드',
      back: '← 목록으로', detailHint: '드래그하여 책을 360° 돌려보세요', related: '함께 보면 좋은 도서', footerDesc: '공공·학교 다문화 도서관 납품 전문 · 원서 및 이중언어 도서 · 사서 공문 견적 지원',
      all: '전체', ageInfant: '유아 (0–6)', ageChild: '아동 (7–12)', ageYouth: '청소년 (13+)', addCart: '견적함 담기', added: '견적함에 담았습니다', detail: '상세', supply: '납품가', listPrice: '정가',
      thCover: '표지', thInfo: '서지 정보', thLang: '언어', thAge: '연령', thKdc: 'KDC', thIsbn: 'ISBN', thList: '정가', thSupply: '납품가', thQty: '수량', thSubtotal: '합계', thPub: '출판사', remove: '삭제',
      statSelTitles: '선택 종수', statCopies: '총 권수', statList: '정가 합계', statSupply: '납품가 합계', emptyCart: '견적함이 비어 있습니다. 기획전이나 검색에서 도서를 담아보세요.', goSearch: '도서 검색으로', addAll: '기획전 전체 담기', curBooks: '수록 도서', curLayout: '전시 형태', curPrice: '패키지 납품가',
      layoutCarousel: '보물 부두', layoutBalloon: '갑판 도서관', layoutStairs: '해골섬 트레일', hintDrag: '드래그하여 회전 · 책 클릭 시 상세',
      pages: '쪽', year: '출판연도', binding: '양장/무선', publisher: '출판사', language: '언어', ageRange: '대상 연령', kdc: 'KDC', isbn: 'ISBN', total: '총 납품가', subtotal: '소계', discount: '도서관 할인(10%)', printTitle: '도서 납품 견적서', printMeta1: '수신', printMeta2: '담당', printMeta3: '연락처', printMeta4: '견적일', printSeal: '다문화도서관 수서 몰 (직인)', xlsxDone: '엑셀 사양서를 내려받았습니다', needInst: '기관명을 입력하면 공문에 반영됩니다', cleared: '견적함을 비웠습니다', removed: '삭제했습니다'
    },
    EN: {
      brand: 'Multicultural Library Mall', navHome: 'Home', navSearch: 'Search', navCuration: 'Curations', navCart: 'Quote Cart', librarianMode: 'Librarian', cartBtn: 'Treasure Chest',
      heroEyebrow: 'MULTICULTURAL LIBRARY COLLECTION · 2026', heroTitle: 'Stories of the world<br>arrive at the harbor in treasure chests', heroSub: 'Original-language and bilingual picture books curated for multicultural libraries. Bibliographic data and official quotes for librarians, on one screen.', heroCta1: 'Enter 3D Hall', heroCta2: 'Search books', statTitles: 'Titles', statLangs: 'Languages', statLibs: 'Libraries served', heroHint: 'Move the captain with <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> to open chests · click a book for detail',
      exhibEyebrow: '3D EXHIBITION HALL', exhibTitle: 'Around-the-Harbor Exhibitions', exhibSub: 'Three places in the harbor: the treasure dock, the ship deck library, the skull island trail. Drag to look around, click a book.',
      newEyebrow: 'NEW ARRIVALS', newTitle: 'New Titles · Fall 2026', viewList: 'Bibliographic list', viewParade: 'Small-Ship Voyage 3D', paradeCaption: 'New titles sail past the harbor on small ships — click to open',
      libEyebrow: 'FOR LIBRARIANS', libTitle: 'One-click official quotes for acquisition librarians', libSub: 'Books in your cart are priced at library supply price (10% off list) and can be exported as an official quote (print/PDF) and an Excel spec sheet.', libF1: 'Always visible on every card', libF2: 'Library supply price applied', libF3: 'Official quote instantly', libCta: 'Open quote cart',
      searchEyebrow: 'BOOK SEARCH', searchTitle: 'Search & Acquire', searchSub: 'Filter by language, age, KDC, publisher and price. ISBN lookup supported.', searchPlaceholder: 'Title, author, publisher, ISBN, KDC…', searchBtn: 'Search', fLang: 'Language', fAge: 'Age range', fKdc: 'KDC class', fPub: 'Publisher', fPrice: 'Max list price', fReset: 'Reset filters', resultCount: 'Results',
      curEyebrow: 'CURATION EXHIBITIONS', curTitle: '3D Exhibition Halls', curSub: 'New titles sail past the harbor on small ships — click to open',
      cartEyebrow: 'QUOTE CART', cartTitle: 'Cart · Official Quote', cartSub: 'Calculated at library supply price (-10%). Fill in institution details to print an official quote.', cartClear: 'Clear all', instTitle: 'Institution', instName: 'Institution', instLibrarian: 'Librarian', instContact: 'Phone', instEmail: 'Email', btnPrint: 'Print / PDF quote', btnXlsx: 'Download Excel spec',
      back: '← Back to list', detailHint: 'Drag to rotate the book 360°', related: 'You may also like', footerDesc: 'Supplying public & school multicultural libraries · Original & bilingual books · Official quotes for librarians',
      all: 'All', ageInfant: 'Infant (0–6)', ageChild: 'Children (7–12)', ageYouth: 'Youth (13+)', addCart: 'Add to quote', added: 'Added to quote cart', detail: 'Detail', supply: 'Supply', listPrice: 'List',
      thCover: 'Cover', thInfo: 'Bibliographic info', thLang: 'Lang', thAge: 'Age', thKdc: 'KDC', thIsbn: 'ISBN', thList: 'List', thSupply: 'Supply', thQty: 'Qty', thSubtotal: 'Subtotal', thPub: 'Publisher', remove: 'Remove',
      statSelTitles: 'Titles', statCopies: 'Copies', statList: 'List total', statSupply: 'Supply total', emptyCart: 'Your quote cart is empty. Add books from exhibitions or search.', goSearch: 'Go to search', addAll: 'Add whole exhibition', curBooks: 'Books', curLayout: 'Display form', curPrice: 'Package supply price',
      layoutCarousel: 'Treasure Dock', layoutBalloon: 'Ship Deck Library', layoutStairs: 'Skull Island Trail', hintDrag: 'Drag to rotate · click a book for detail',
      pages: 'pages', year: 'Year', binding: 'Binding', publisher: 'Publisher', language: 'Language', ageRange: 'Age range', kdc: 'KDC', isbn: 'ISBN', total: 'Total supply', subtotal: 'Subtotal', discount: 'Library discount (10%)', printTitle: 'Book Supply Quotation', printMeta1: 'To', printMeta2: 'Attn', printMeta3: 'Contact', printMeta4: 'Date', printSeal: 'Multicultural Library Mall (seal)', xlsxDone: 'Excel spec downloaded', needInst: 'Enter the institution name to include it in the quote', cleared: 'Cart cleared', removed: 'Removed'
    },
    VI: {
      brand: 'Thư viện Đa văn hóa Mall', navHome: 'Trang chủ', navSearch: 'Tìm sách', navCuration: 'Triển lãm', navCart: 'Giỏ báo giá', librarianMode: 'Thủ thư', cartBtn: 'Rương báu vật',
      heroEyebrow: 'BỘ SƯU TẬP THƯ VIỆN ĐA VĂN HÓA · 2026', heroTitle: 'Những câu chuyện thế giới<br>cập bến trong những rương báu vật', heroSub: 'Sách tranh nguyên bản và song ngữ được tuyển chọn cho thư viện đa văn hóa. Thông tin thư mục và báo giá công văn cho thủ thư trên một màn hình.', heroCta1: 'Vào phòng 3D', heroCta2: 'Tìm sách', statTitles: 'Đầu sách', statLangs: 'Ngôn ngữ', statLibs: 'Thư viện', heroHint: 'Dùng <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> di chuyển thuyền trưởng để mở rương · nhấp sách để xem',
      exhibEyebrow: 'PHÒNG TRIỂN LÃM 3D', exhibTitle: 'Triển lãm quanh bến cảng', exhibSub: 'Mỗi triển lãm trưng bày sách theo hình thức khác nhau. Nhấp vào sách để xem chi tiết.',
      newEyebrow: 'SÁCH MỚI', newTitle: 'Sách mới · Cuối 2026', viewList: 'Danh sách thư mục', viewParade: 'Hải trình thuyền nhỏ 3D', paradeCaption: 'Sách mới lướt qua bến cảng trên thuyền nhỏ — nhấp để mở',
      libEyebrow: 'DÀNH CHO THỦ THƯ', libTitle: 'Báo giá công văn một cú nhấp cho thủ thư', libSub: 'Sách trong giỏ được tính theo giá cung ứng thư viện (giảm 10%) và xuất ra báo giá (in/PDF) cùng bảng kê Excel.', libF1: 'Luôn hiển thị trên mọi thẻ', libF2: 'Áp dụng giá cung ứng thư viện', libF3: 'Xuất báo giá ngay', libCta: 'Mở giỏ báo giá',
      searchEyebrow: 'TÌM SÁCH', searchTitle: 'Tìm kiếm & Đặt mua', searchSub: 'Lọc theo ngôn ngữ, độ tuổi, KDC, nhà xuất bản và giá. Hỗ trợ tra ISBN.', searchPlaceholder: 'Tên sách, tác giả, NXB, ISBN, KDC…', searchBtn: 'Tìm', fLang: 'Ngôn ngữ', fAge: 'Độ tuổi', fKdc: 'Phân loại KDC', fPub: 'Nhà xuất bản', fPrice: 'Giá bìa tối đa', fReset: 'Đặt lại', resultCount: 'Kết quả',
      curEyebrow: 'TRIỂN LÃM TUYỂN CHỌN', curTitle: 'Phòng triển lãm 3D', curSub: 'Sách mới lướt qua bến cảng trên thuyền nhỏ — nhấp để mở',
      cartEyebrow: 'GIỎ BÁO GIÁ', cartTitle: 'Giỏ hàng · Báo giá công văn', cartSub: 'Tính theo giá cung ứng thư viện (-10%). Nhập thông tin cơ quan để in báo giá.', cartClear: 'Xóa tất cả', instTitle: 'Thông tin cơ quan', instName: 'Tên cơ quan', instLibrarian: 'Thủ thư', instContact: 'Điện thoại', instEmail: 'Email', btnPrint: 'In / PDF báo giá', btnXlsx: 'Tải bảng kê Excel',
      back: '← Quay lại', detailHint: 'Kéo để xoay sách 360°', related: 'Sách liên quan', footerDesc: 'Cung ứng thư viện đa văn hóa công cộng & trường học · Sách nguyên bản & song ngữ · Báo giá cho thủ thư',
      all: 'Tất cả', ageInfant: 'Mẫu giáo (0–6)', ageChild: 'Thiếu nhi (7–12)', ageYouth: 'Thiếu niên (13+)', addCart: 'Thêm vào giỏ', added: 'Đã thêm vào giỏ báo giá', detail: 'Chi tiết', supply: 'Giá cung ứng', listPrice: 'Giá bìa',
      thCover: 'Bìa', thInfo: 'Thông tin thư mục', thLang: 'Ngôn ngữ', thAge: 'Tuổi', thKdc: 'KDC', thIsbn: 'ISBN', thList: 'Giá bìa', thSupply: 'Giá CƯ', thQty: 'SL', thSubtotal: 'Thành tiền', thPub: 'NXB', remove: 'Xóa',
      statSelTitles: 'Đầu sách', statCopies: 'Số cuốn', statList: 'Tổng giá bìa', statSupply: 'Tổng cung ứng', emptyCart: 'Giỏ báo giá trống. Hãy thêm sách từ triển lãm hoặc tìm kiếm.', goSearch: 'Đi tìm sách', addAll: 'Thêm cả triển lãm', curBooks: 'Sách', curLayout: 'Hình thức', curPrice: 'Giá gói cung ứng',
      layoutCarousel: 'Bến Kho báu', layoutBalloon: 'Thư viện Boong tàu', layoutStairs: 'Đường mòn Đảo Đầu lâu', hintDrag: 'Kéo để xoay · nhấp sách để xem',
      pages: 'trang', year: 'Năm XB', binding: 'Bìa', publisher: 'NXB', language: 'Ngôn ngữ', ageRange: 'Độ tuổi', kdc: 'KDC', isbn: 'ISBN', total: 'Tổng cung ứng', subtotal: 'Tạm tính', discount: 'Giảm thư viện (10%)', printTitle: 'Báo giá cung ứng sách', printMeta1: 'Kính gửi', printMeta2: 'Người nhận', printMeta3: 'Liên hệ', printMeta4: 'Ngày', printSeal: 'Multicultural Library Mall (dấu)', xlsxDone: 'Đã tải bảng kê Excel', needInst: 'Nhập tên cơ quan để đưa vào báo giá', cleared: 'Đã xóa giỏ', removed: 'Đã xóa'
    },
    ZH: {
      brand: '多文化图书馆采购商城', navHome: '首页', navSearch: '图书检索', navCuration: '策展', navCart: '公文报价单', librarianMode: '馆员模式', cartBtn: '宝箱',
      heroEyebrow: '多文化图书馆馆藏 · 2026', heroTitle: '世界的故事<br>装在宝箱里抵达港口', heroSub: '为多文化图书馆精选的原版与双语绘本。馆员所需的书目信息与公文报价，一屏搞定。', heroCta1: '进入3D展厅', heroCta2: '检索图书', statTitles: '藏书种数', statLangs: '支持语言', statLibs: '供货图书馆', heroHint: '用 <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> 移动船长打开宝箱 · 点击图书查看详情',
      exhibEyebrow: '3D 展厅', exhibTitle: '港口各处特展', exhibSub: '每个特展以不同形式陈列图书。点击图书查看详情。',
      newEyebrow: '新书上架', newTitle: '2026 下半年新书', viewList: '书目列表', viewParade: '小船书航 3D', paradeCaption: '新书乘小船驶过港口 — 点击查看',
      libEyebrow: '馆员专区', libTitle: '为采购馆员提供一键公文报价', libSub: '购物车中的图书按馆配价（定价9折）自动计算，可导出公文格式报价单（打印/PDF）及Excel清单。', libF1: '所有卡片常显', libF2: '自动应用馆配价', libF3: '即时导出公文报价', libCta: '打开报价单',
      searchEyebrow: '图书检索', searchTitle: '检索与采购', searchSub: '按语言、年龄、KDC、出版社、价格精确筛选，支持ISBN直接输入。', searchPlaceholder: '书名、作者、出版社、ISBN、KDC…', searchBtn: '检索', fLang: '语言', fAge: '适读年龄', fKdc: 'KDC 分类', fPub: '出版社', fPrice: '最高定价', fReset: '重置筛选', resultCount: '检索结果',
      curEyebrow: '策展特展', curTitle: '特展 3D 展厅', curSub: '新书乘小船驶过港口 — 点击查看',
      cartEyebrow: '报价购物车', cartTitle: '购物车 · 公文报价单', cartSub: '按馆配价（定价-10%）自动计算。填写机构信息后可按公文格式输出。', cartClear: '清空', instTitle: '采购机构信息', instName: '机构名称', instLibrarian: '负责馆员', instContact: '联系电话', instEmail: '邮箱', btnPrint: '打印 / PDF 报价单', btnXlsx: '下载Excel清单',
      back: '← 返回列表', detailHint: '拖动可360°旋转图书', related: '相关推荐', footerDesc: '公共及学校多文化图书馆供货 · 原版及双语图书 · 馆员公文报价支持',
      all: '全部', ageInfant: '幼儿 (0–6)', ageChild: '儿童 (7–12)', ageYouth: '青少年 (13+)', addCart: '加入报价单', added: '已加入报价单', detail: '详情', supply: '馆配价', listPrice: '定价',
      thCover: '封面', thInfo: '书目信息', thLang: '语言', thAge: '年龄', thKdc: 'KDC', thIsbn: 'ISBN', thList: '定价', thSupply: '馆配价', thQty: '数量', thSubtotal: '小计', thPub: '出版社', remove: '删除',
      statSelTitles: '已选种数', statCopies: '总册数', statList: '定价合计', statSupply: '馆配价合计', emptyCart: '报价单为空。请从特展或检索中添加图书。', goSearch: '去检索', addAll: '加入整个特展', curBooks: '收录图书', curLayout: '陈列形式', curPrice: '套餐馆配价',
      layoutCarousel: '宝藏码头', layoutBalloon: '甲板图书馆', layoutStairs: '骷髅岛小径', hintDrag: '拖动旋转 · 点击图书查看详情',
      pages: '页', year: '出版年', binding: '装帧', publisher: '出版社', language: '语言', ageRange: '适读年龄', kdc: 'KDC', isbn: 'ISBN', total: '馆配总价', subtotal: '小计', discount: '图书馆折扣(10%)', printTitle: '图书供货报价单', printMeta1: '致', printMeta2: '经办', printMeta3: '联系', printMeta4: '日期', printSeal: '多文化图书馆采购商城（印）', xlsxDone: '已下载Excel清单', needInst: '填写机构名称后将体现在公文中', cleared: '已清空', removed: '已删除'
    },
    RU: {
      brand: 'Мультикультурная библиотека', navHome: 'Главная', navSearch: 'Поиск книг', navCuration: 'Выставки', navCart: 'Смета', librarianMode: 'Библиотекарь', cartBtn: 'Сундук',
      heroEyebrow: 'КОЛЛЕКЦИЯ МУЛЬТИКУЛЬТУРНОЙ БИБЛИОТЕКИ · 2026', heroTitle: 'Истории мира<br>прибывают в гавань в сундуках с сокровищами', heroSub: 'Оригинальные и двуязычные книжки-картинки для мультикультурных библиотек. Библиографические данные и официальная смета для библиотекаря на одном экране.', heroCta1: 'Войти в 3D-зал', heroCta2: 'Искать книги', statTitles: 'Наименований', statLangs: 'Языков', statLibs: 'Библиотек', heroHint: 'Ведите капитана клавишами <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd>, чтобы открыть сундуки · клик по книге',
      exhibEyebrow: '3D ВЫСТАВОЧНЫЙ ЗАЛ', exhibTitle: 'Выставки по всей гавани', exhibSub: 'Каждая выставка показывает книги по-своему. Нажмите на книгу, чтобы открыть карточку.',
      newEyebrow: 'НОВИНКИ', newTitle: 'Новинки · осень 2026', viewList: 'Библиографический список', viewParade: 'Книжный конвой лодок 3D', paradeCaption: 'Новинки проплывают мимо гавани на лодках — нажмите, чтобы открыть',
      libEyebrow: 'ДЛЯ БИБЛИОТЕКАРЕЙ', libTitle: 'Официальная смета в один клик', libSub: 'Книги в корзине рассчитываются по библиотечной цене (скидка 10%) и экспортируются как официальная смета (печать/PDF) и спецификация Excel.', libF1: 'Всегда видны на карточке', libF2: 'Библиотечная цена применена', libF3: 'Смета мгновенно', libCta: 'Открыть смету',
      searchEyebrow: 'ПОИСК КНИГ', searchTitle: 'Поиск и комплектование', searchSub: 'Фильтры по языку, возрасту, KDC, издательству и цене. Поиск по ISBN.', searchPlaceholder: 'Название, автор, издательство, ISBN, KDC…', searchBtn: 'Поиск', fLang: 'Язык', fAge: 'Возраст', fKdc: 'Класс KDC', fPub: 'Издательство', fPrice: 'Макс. цена', fReset: 'Сбросить', resultCount: 'Результаты',
      curEyebrow: 'КУРАТОРСКИЕ ВЫСТАВКИ', curTitle: '3D выставочные залы', curSub: 'Новинки проплывают мимо гавани на лодках — нажмите, чтобы открыть',
      cartEyebrow: 'КОРЗИНА СМЕТЫ', cartTitle: 'Корзина · Официальная смета', cartSub: 'Расчёт по библиотечной цене (-10%). Заполните данные учреждения для печати сметы.', cartClear: 'Очистить', instTitle: 'Учреждение', instName: 'Название', instLibrarian: 'Библиотекарь', instContact: 'Телефон', instEmail: 'Email', btnPrint: 'Печать / PDF сметы', btnXlsx: 'Скачать Excel',
      back: '← К списку', detailHint: 'Перетащите, чтобы вращать книгу на 360°', related: 'Похожие книги', footerDesc: 'Поставки в публичные и школьные мультикультурные библиотеки · Оригинальные и двуязычные книги · Сметы для библиотекарей',
      all: 'Все', ageInfant: 'Малыши (0–6)', ageChild: 'Дети (7–12)', ageYouth: 'Подростки (13+)', addCart: 'В смету', added: 'Добавлено в смету', detail: 'Подробнее', supply: 'Библ. цена', listPrice: 'Цена',
      thCover: 'Обложка', thInfo: 'Библиография', thLang: 'Язык', thAge: 'Возраст', thKdc: 'KDC', thIsbn: 'ISBN', thList: 'Цена', thSupply: 'Библ. цена', thQty: 'Кол-во', thSubtotal: 'Сумма', thPub: 'Изд-во', remove: 'Удалить',
      statSelTitles: 'Наименований', statCopies: 'Экземпляров', statList: 'Итого по цене', statSupply: 'Итого библ.', emptyCart: 'Корзина пуста. Добавьте книги из выставок или поиска.', goSearch: 'К поиску', addAll: 'Добавить всю выставку', curBooks: 'Книг', curLayout: 'Форма показа', curPrice: 'Цена пакета',
      layoutCarousel: 'Причал сокровищ', layoutBalloon: 'Палубная библиотека', layoutStairs: 'Тропа острова Черепа', hintDrag: 'Перетащите для вращения · клик по книге',
      pages: 'стр.', year: 'Год', binding: 'Переплёт', publisher: 'Издательство', language: 'Язык', ageRange: 'Возраст', kdc: 'KDC', isbn: 'ISBN', total: 'Итого', subtotal: 'Подытог', discount: 'Скидка библиотеке (10%)', printTitle: 'Смета на поставку книг', printMeta1: 'Кому', printMeta2: 'Вниманию', printMeta3: 'Контакт', printMeta4: 'Дата', printSeal: 'Multicultural Library Mall (печать)', xlsxDone: 'Excel загружен', needInst: 'Укажите учреждение для сметы', cleared: 'Корзина очищена', removed: 'Удалено'
    },
    JA: {
      brand: '多文化図書館 選書モール', navHome: 'ホーム', navSearch: '図書検索', navCuration: 'キュレーション', navCart: '公文見積', librarianMode: '司書モード', cartBtn: '宝箱',
      heroEyebrow: '多文化図書館コレクション · 2026', heroTitle: '世界の物語が<br>宝箱に乗って港に届く', heroSub: '多文化図書館のための原書・バイリンガル絵本キュレーション。司書のための書誌情報と公文見積をひとつの画面で。', heroCta1: '3D展示室へ', heroCta2: '図書を検索', statTitles: '所蔵点数', statLangs: '対応言語', statLibs: '納入図書館', heroHint: '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> でキャプテンを動かして宝箱を開けよう · 本をクリックで詳細',
      exhibEyebrow: '3D 展示ホール', exhibTitle: '港のあちこち企画展', exhibSub: '企画展ごとに異なる陳列形式。本をクリックすると詳細へ。',
      newEyebrow: '新刊', newTitle: '2026 下半期 新刊', viewList: '書誌リスト', viewParade: '小舟の本の航海 3D', paradeCaption: '新刊が小舟に乗って港を通り過ぎる — クリックで詳細',
      libEyebrow: '司書のために', libTitle: '選書担当司書のためのワンクリック公文見積', libSub: 'カートの図書は納入価（定価10%引）で自動計算され、公文形式の見積書（印刷/PDF）とExcel仕様書に出力できます。', libF1: 'すべてのカードに常時表示', libF2: '図書館納入価を自動適用', libF3: '公文見積を即時出力', libCta: '見積カートを開く',
      searchEyebrow: '図書検索', searchTitle: '図書検索 & 選書', searchSub: '言語・年齢・KDC・出版社・価格で精密検索。ISBN直接入力も可能。', searchPlaceholder: '書名、著者、出版社、ISBN、KDC…', searchBtn: '検索', fLang: '言語', fAge: '対象年齢', fKdc: 'KDC分類', fPub: '出版社', fPrice: '最大定価', fReset: 'リセット', resultCount: '検索結果',
      curEyebrow: 'キュレーション企画展', curTitle: '企画展 3D 展示室', curSub: '宝の桟橋・甲板の図書館・スカル島の小径、港の3つの場所。パッケージ一括宝箱追加に対応。',
      cartEyebrow: '見積カート', cartTitle: 'カート · 公文見積', cartSub: '納入価（定価-10%）で自動計算。機関情報を入力すると公文形式で出力できます。', cartClear: 'すべて削除', instTitle: '選書機関情報', instName: '機関名', instLibrarian: '担当司書', instContact: '連絡先', instEmail: 'メール', btnPrint: '公文見積書 印刷 / PDF', btnXlsx: 'Excel仕様書ダウンロード',
      back: '← 一覧へ', detailHint: 'ドラッグして本を360°回転', related: 'あわせて読みたい', footerDesc: '公共・学校の多文化図書館納入専門 · 原書およびバイリンガル図書 · 司書向け公文見積対応',
      all: 'すべて', ageInfant: '乳幼児 (0–6)', ageChild: '児童 (7–12)', ageYouth: 'ヤングアダルト (13+)', addCart: '見積に追加', added: '見積カートに追加しました', detail: '詳細', supply: '納入価', listPrice: '定価',
      thCover: '表紙', thInfo: '書誌情報', thLang: '言語', thAge: '年齢', thKdc: 'KDC', thIsbn: 'ISBN', thList: '定価', thSupply: '納入価', thQty: '数量', thSubtotal: '小計', thPub: '出版社', remove: '削除',
      statSelTitles: '選択点数', statCopies: '総冊数', statList: '定価合計', statSupply: '納入価合計', emptyCart: '見積カートは空です。企画展や検索から図書を追加してください。', goSearch: '図書検索へ', addAll: '企画展をすべて追加', curBooks: '収録図書', curLayout: '陳列形式', curPrice: 'パッケージ納入価',
      layoutCarousel: '宝の桟橋', layoutBalloon: '甲板の図書館', layoutStairs: 'スカル島の小径', hintDrag: 'ドラッグで回転 · 本をクリックで詳細',
      pages: 'ページ', year: '出版年', binding: '装丁', publisher: '出版社', language: '言語', ageRange: '対象年齢', kdc: 'KDC', isbn: 'ISBN', total: '納入総額', subtotal: '小計', discount: '図書館割引(10%)', printTitle: '図書納入見積書', printMeta1: '宛先', printMeta2: '担当', printMeta3: '連絡先', printMeta4: '見積日', printSeal: '多文化図書館 選書モール（印）', xlsxDone: 'Excel仕様書をダウンロードしました', needInst: '機関名を入力すると公文に反映されます', cleared: 'カートを空にしました', removed: '削除しました'
    }
  };
  const LANG_NAMES = { KO: '한국어', EN: 'English', VI: 'Tiếng Việt', ZH: '中文', RU: 'Русский', JA: '日本語', TL: 'Filipino', MN: 'Монгол', TH: 'ไทย', UZ: 'Oʻzbek' };
  const FLAGS = { KO: '🇰🇷', EN: '🇺🇸', VI: '🇻🇳', ZH: '🇨🇳', RU: '🇷🇺', JA: '🇯🇵', TL: '🇵🇭', MN: '🇲🇳', TH: '🇹🇭', UZ: '🇺🇿' };

  /* ---------------- 2. Data ---------------- */
  const BOOKS = [
    { id: 'b01', t: { KO: '달을 먹은 호랑이', EN: 'The Tiger Who Ate the Moon', VI: 'Con Hổ Ăn Mặt Trăng', ZH: '吃掉月亮的老虎', RU: 'Тигр, который съел луну', JA: '月を食べた虎' }, orig: 'Con Hổ Ăn Mặt Trăng', author: 'Nguyễn Thị Lan', lang: 'VI', age: 'infant', kdc: '813.8', isbn: '9791168450011', pub: '무지개책방', price: 15000, year: 2026, pages: 40, color: ['#6B1F2E', '#C9A961'], desc: '베트남 북부 산골 마을의 전래동화. 달을 삼킨 호랑이가 마을에 빛을 되돌려주는 이야기. 베트남어 원문과 한국어 병기.' },
    { id: 'b02', t: { KO: '봄바람 편지', EN: 'Letters on the Spring Wind', VI: 'Thư gửi gió xuân', ZH: '春风的信', RU: 'Письма весеннего ветра', JA: '春風の手紙' }, orig: '春风的信', author: '林小雨', lang: 'ZH', age: 'child', kdc: '813.8', isbn: '9791168450028', pub: '무지개책방', price: 15000, year: 2026, pages: 56, color: ['#2F5D62', '#E8B4B8'], desc: '중국 강남 마을에서 봄바람에 편지를 띄우는 소녀의 이야기. 간체 원문과 한국어 번역 수록.' },
    { id: 'b03', t: { KO: '눈의 여왕과 사모바르', EN: 'The Snow Queen and the Samovar', VI: 'Nữ hoàng Tuyết và ấm Samovar', ZH: '雪女王与茶炊', RU: 'Снежная королева и самовар', JA: '雪の女王とサモワール' }, orig: 'Снежная королева и самовар', author: 'Ольга Петрова', lang: 'RU', age: 'child', kdc: '892.8', isbn: '9791168450035', pub: '세계숲', price: 18000, year: 2025, pages: 72, color: ['#1F3A5F', '#DCE7F5'], desc: '러시아 겨울 민담을 현대적으로 재해석한 그림 동화. 러시아어 원문·한국어 이중언어.' },
    { id: 'b04', t: { KO: '도쿄의 작은 서점', EN: 'A Little Bookshop in Tokyo', VI: 'Tiệm sách nhỏ ở Tokyo', ZH: '东京的小书店', RU: 'Маленькая книжная лавка в Токио', JA: '東京の小さな本屋' }, orig: '東京の小さな本屋', author: '佐藤ゆき', lang: 'JA', age: 'youth', kdc: '833.6', isbn: '9791168450042', pub: '세계숲', price: 16000, year: 2026, pages: 168, color: ['#3E3A4A', '#F2C4A0'], desc: '고등학생이 할아버지의 서점을 이어받으며 겪는 성장 소설. 일본어 원서.' },
    { id: 'b05', t: { KO: '레인보우 김치', EN: 'Rainbow Kimchi', VI: 'Kim chi Cầu vồng', ZH: '彩虹泡菜', RU: 'Радужное кимчи', JA: 'レインボーキムチ' }, orig: 'Rainbow Kimchi', author: 'Grace Park', lang: 'EN', age: 'infant', kdc: '843', isbn: '9791168450059', pub: '별빛출판', price: 17000, year: 2026, pages: 36, color: ['#B23A48', '#F7D488'], desc: '다문화 가정 아이가 할머니와 함께 일곱 빛깔 김치를 담그는 영어 그림책. 한국어 병기.' },
    { id: 'b06', t: { KO: '마닐라의 종이배', EN: 'Paper Boats of Manila', VI: 'Thuyền giấy Manila', ZH: '马尼拉的纸船', RU: 'Бумажные кораблики Манилы', JA: 'マニラの紙の船' }, orig: 'Ang Bangkang Papel ng Maynila', author: 'Maria Santos', lang: 'TL', age: 'child', kdc: '899', isbn: '9791168450066', pub: '별빛출판', price: 14000, year: 2025, pages: 48, color: ['#1B6CA8', '#FFD166'], desc: '필리핀 마닐라 바닷가 마을 아이들의 종이배 경주. 타갈로그어·한국어 이중언어.' },
    { id: 'b07', t: { KO: '초원의 말과 소년', EN: 'The Steppe Horse and the Boy', VI: 'Ngựa thảo nguyên và cậu bé', ZH: '草原的马与男孩', RU: 'Степной конь и мальчик', JA: '草原の馬と少年' }, orig: 'Талын морь ба хүү', author: 'Батбаяр Дорж', lang: 'MN', age: 'child', kdc: '899.9', isbn: '9791168450073', pub: '세계숲', price: 16500, year: 2026, pages: 60, color: ['#3F6B4E', '#E3B341'], desc: '몽골 초원에서 말과 우정을 쌓는 소년의 이야기. 몽골어 원문·한국어 병기.' },
    { id: 'b08', t: { KO: '방콕 골목의 코끼리', EN: 'The Elephant in a Bangkok Alley', VI: 'Chú voi trong ngõ Bangkok', ZH: '曼谷小巷的大象', RU: 'Слон в переулке Бангкока', JA: 'バンコクの路地の象' }, orig: 'ช้างในตรอกกรุงเทพ', author: 'สมชาย วงศ์ดี', lang: 'TH', age: 'infant', kdc: '899.1', isbn: '9791168450080', pub: '무지개책방', price: 15500, year: 2025, pages: 40, color: ['#7B2D8E', '#F4A261'], desc: '방콕 골목에 나타난 작은 코끼리와 아이들의 하루. 태국어·한국어 이중언어 그림책.' },
    { id: 'b09', t: { KO: '사마르칸트의 별 지도', EN: 'Star Map of Samarkand', VI: 'Bản đồ sao Samarkand', ZH: '撒马尔罕的星图', RU: 'Звёздная карта Самарканда', JA: 'サマルカンドの星図' }, orig: 'Samarqand yulduz xaritasi', author: 'Dilnoza Karimova', lang: 'UZ', age: 'youth', kdc: '998', isbn: '9791168450097', pub: '지식나무', price: 21000, year: 2026, pages: 144, color: ['#0F2E4A', '#C9A961'], desc: '중세 사마르칸트 천문대를 배경으로 한 청소년 역사 소설. 우즈베크어 원문·한국어 번역.' },
    { id: 'b10', t: { KO: '우리말 우리 노래 이중언어 동요집', EN: 'Bilingual Songbook: Our Words, Our Songs', VI: 'Tập bài hát song ngữ Việt–Hàn', ZH: '韩越双语童谣集', RU: 'Двуязычный песенник', JA: 'バイリンガル童謡集' }, orig: 'Bài ca song ngữ Việt–Hàn', author: '김하늘 · Trần Minh', lang: 'KO', age: 'infant', kdc: '673.5', isbn: '9791168450103', pub: '별빛출판', price: 19000, year: 2026, pages: 64, color: ['#C9A961', '#6B1F2E'], desc: '한국어·베트남어로 함께 부르는 동요 24곡. 악보와 QR 음원 수록.' },
    { id: 'b11', t: { KO: '세계 어린이 인권 이야기', EN: "Children's Rights Around the World", VI: 'Quyền trẻ em trên thế giới', ZH: '世界儿童权利故事', RU: 'Права детей во всём мире', JA: '世界の子どもの権利' }, orig: "Children's Rights Around the World", author: 'Amara Okafor', lang: 'EN', age: 'youth', kdc: '342', isbn: '9791168450110', pub: '지식나무', price: 22000, year: 2025, pages: 192, color: ['#264653', '#E76F51'], desc: '12개국 어린이의 목소리로 읽는 유엔아동권리협약. 영어 원서·한국어 해설.' },
    { id: 'b12', t: { KO: '하노이 아침 시장', EN: 'Hanoi Morning Market', VI: 'Chợ sáng Hà Nội', ZH: '河内的早市', RU: 'Утренний рынок Ханоя', JA: 'ハノイの朝市' }, orig: 'Chợ sáng Hà Nội', author: 'Phạm Quang Huy', lang: 'VI', age: 'child', kdc: '981', isbn: '9791168450127', pub: '지식나무', price: 14500, year: 2026, pages: 52, color: ['#E76F51', '#2A9D8F'], desc: '하노이 아침 시장을 따라가는 지리·문화 그림책. 베트남어·한국어 병기.' }
  ];
  const CURATIONS = [
    { id: 'c1', layout: 'carousel', t: { KO: '세계 전래동화 보물 부두전', EN: 'World Folk Tales Treasure Dock', VI: 'Bến Kho báu Cổ tích Thế giới', ZH: '世界民间故事宝藏码头展', RU: 'Причал сокровищ сказок мира', JA: '世界の民話 宝の桟橋展' }, d: { KO: '긴 부두 위 황금 보물 상자마다 아시아·유럽 전래동화가 한 권씩 담겨 있습니다. 앤 선원이 손을 흔들며 맞이합니다.', EN: 'Along the long dock, every golden chest holds a folk tale from Asia or Europe. Sailor Anne waves you in.', VI: 'Dọc cầu tàu dài, mỗi rương vàng chứa một cổ tích Á–Âu.', ZH: '长长的码头上，每个金宝箱装着一本亚洲或欧洲民间故事。', RU: 'Вдоль длинного причала в каждом золотом сундуке — сказка Азии или Европы.', JA: '長い桟橋の金の宝箱ごとにアジア・ヨーロッパの民話が一冊。' }, books: ['b01', 'b02', 'b03', 'b07', 'b08', 'b06', 'b12', 'b05', 'b10'] },
    { id: 'c2', layout: 'balloon', t: { KO: '청소년 세계문학 갑판 도서관전', EN: 'Youth World Literature Ship Deck Library', VI: 'Thư viện Boong tàu Văn học Thiếu niên', ZH: '青少年世界文学甲板图书馆展', RU: 'Палубная библиотека подростковой литературы', JA: 'YA世界文学 甲板の図書館展' }, d: { KO: '큰 배의 갑판 위에 청소년 소설과 논픽션이 두 줄로 떠 있습니다. 갈매기와 상어가 함께 항해합니다. 학교도서관 추천.', EN: 'Youth novels and non-fiction float in two rows above the deck of the great ship. Recommended for school libraries.', VI: 'Tiểu thuyết và phi hư cấu thiếu niên bay hai hàng trên boong tàu lớn.', ZH: '青少年小说与非虚构在大船甲板上方分两排悬浮。学校图书馆推荐。', RU: 'Подростковые романы и нон-фикшн в два ряда над палубой большого корабля.', JA: '大きな船の甲板の上にYA小説とノンフィクションが二列に浮かぶ。' }, books: ['b04', 'b09', 'b11', 'b03', 'b07', 'b02', 'b12'] },
    { id: 'c3', layout: 'stairs', t: { KO: '이중언어 그림책 해골섬 트레일전', EN: 'Bilingual Picture Book Skull Island Trail', VI: 'Đường mòn Đảo Đầu lâu Sách tranh Song ngữ', ZH: '双语绘本骷髅岛小径展', RU: 'Тропа острова Черепа: двуязычные книжки', JA: 'バイリンガル絵本 スカル島の小径展' }, d: { KO: '해골섬의 붉은 X 표시를 따라가면 이중언어 그림책이 한 권씩 나타납니다. 다문화 가정 첫 책 추천.', EN: 'Follow the red X marks across Skull Island and a bilingual picture book appears at each. First books for multicultural families.', VI: 'Theo dấu X đỏ trên Đảo Đầu lâu, mỗi dấu một sách tranh song ngữ.', ZH: '沿着骷髅岛的红X标记前行，每处出现一本双语绘本。', RU: 'Идите по красным крестам острова Черепа — у каждого двуязычная книжка.', JA: 'スカル島の赤いXをたどるとバイリンガル絵本が一冊ずつ。' }, books: ['b05', 'b10', 'b01', 'b08', 'b06', 'b12'] }
  ];
  const NEW_IDS = ['b01', 'b02', 'b04', 'b05', 'b07', 'b09', 'b10', 'b12'];
  const SUPPLY = 0.9;

  /* ---------------- 3. State ---------------- */
  let lang = localStorage.getItem('mlmc02_lang') || 'KO';
  let soundOn = localStorage.getItem('mlmc02_sound') !== 'off';
  let cart = JSON.parse(localStorage.getItem('mlmc02_cart') || '{}');
  const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.KO[k] || k;
  const bookTitle = (b) => b.t[lang] || b.t.KO;
  const byId = (id) => BOOKS.find((b) => b.id === id);
  const won = (n) => n.toLocaleString('ko-KR') + '원';
  const ageKey = (a) => ({ infant: 'ageInfant', child: 'ageChild', youth: 'ageYouth' }[a]);
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------------- 4. Cover generator ---------------- */
  const coverCache = {};
  function makeCover(b) {
    if (coverCache[b.id]) return coverCache[b.id];
    const c = document.createElement('canvas'); c.width = 360; c.height = 480;
    const g = c.getContext('2d');
    const grad = g.createLinearGradient(0, 0, 360, 480); grad.addColorStop(0, b.color[0]); grad.addColorStop(1, shade(b.color[0], -30));
    g.fillStyle = grad; g.fillRect(0, 0, 360, 480);
    // decorative arcs
    g.globalAlpha = .18; g.fillStyle = b.color[1];
    for (let i = 0; i < 5; i++) { g.beginPath(); g.arc(300 - i * 20, 90 + i * 35, 120 - i * 18, 0, Math.PI * 2); g.fill(); }
    g.globalAlpha = 1;
    // frame
    g.strokeStyle = b.color[1]; g.lineWidth = 3; g.strokeRect(18, 18, 324, 444);
    g.lineWidth = 1; g.strokeRect(28, 28, 304, 424);
    // title
    g.fillStyle = '#FFF8EC'; g.font = '700 34px "Noto Serif KR","Cormorant Garamond",serif'; g.textBaseline = 'top';
    wrap(g, b.t.KO, 40, 70, 280, 42);
    g.fillStyle = b.color[1]; g.font = 'italic 500 18px "Cormorant Garamond","Noto Sans KR",serif';
    wrap(g, b.orig, 40, 250, 280, 24);
    g.fillStyle = 'rgba(255,248,236,.85)'; g.font = '500 16px "Inter","Noto Sans KR",sans-serif';
    g.fillText(b.author, 40, 400);
    g.fillStyle = b.color[1]; g.fillRect(40, 430, 60, 3);
    g.font = '700 12px Inter'; g.fillStyle = 'rgba(255,248,236,.7)'; g.fillText(b.pub + ' · ' + b.year, 40, 442);
    const url = c.toDataURL('image/png');
    coverCache[b.id] = { url, canvas: c };
    return coverCache[b.id];
  }
  function wrap(g, text, x, y, maxW, lh) {
    const chars = text.split(''); let line = '';
    for (const ch of chars) { const test = line + ch; if (g.measureText(test).width > maxW && line) { g.fillText(line, x, y); line = ch; y += lh; } else line = test; }
    g.fillText(line, x, y);
  }
  function shade(hex, amt) { const n = parseInt(hex.slice(1), 16); let r = (n >> 16) + amt, gg = ((n >> 8) & 255) + amt, b = (n & 255) + amt; r = Math.max(0, Math.min(255, r)); gg = Math.max(0, Math.min(255, gg)); b = Math.max(0, Math.min(255, b)); return '#' + ((r << 16) | (gg << 8) | b).toString(16).padStart(6, '0'); }

  /* ---------------- 5. FX: gold coins + sea spray, marimba plink ---------------- */
  const fx = $('#fx-canvas'); const fxg = fx.getContext('2d'); let parts = [];
  function sizeFx() { fx.width = innerWidth * devicePixelRatio; fx.height = innerHeight * devicePixelRatio; fxg.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); }
  sizeFx(); addEventListener('resize', sizeFx);
  function burst(x, y) {
    for (let i = 0; i < 14; i++) { const a = Math.random() * Math.PI * 2, s = 2 + Math.random() * 4; parts.push({ coin: true, x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 4, life: 1, r: 3 + Math.random() * 3, ph: Math.random() * 6 }); }
    for (let i = 0; i < 16; i++) { const a = -Math.PI / 2 + (Math.random() - .5) * 2.2, s = 3 + Math.random() * 5; parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, r: 1.5 + Math.random() * 2.5, c: Math.random() < .6 ? '#3FD0E0' : '#FFFFFF' }); }
  }
  (function fxLoop() {
    fxg.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter((p) => p.life > 0);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy; p.vy += .28; p.vx *= .98; p.life -= .024; p.ph = (p.ph || 0) + .25;
      fxg.globalAlpha = Math.max(0, p.life);
      if (p.coin) { const w = Math.abs(Math.cos(p.ph)) * p.r; fxg.fillStyle = '#F5C542'; fxg.beginPath(); fxg.ellipse(p.x, p.y, Math.max(.5, w), p.r, 0, 0, Math.PI * 2); fxg.fill(); fxg.fillStyle = '#B98A1E'; fxg.beginPath(); fxg.ellipse(p.x, p.y, Math.max(.3, w * .5), p.r * .5, 0, 0, Math.PI * 2); fxg.fill(); }
      else { fxg.fillStyle = p.c; fxg.beginPath(); fxg.arc(p.x, p.y, Math.max(0, p.r * p.life), 0, Math.PI * 2); fxg.fill(); }
    }
    fxg.globalAlpha = 1; requestAnimationFrame(fxLoop);
  })();
  let actx, spray;
  function chime() {
    if (!soundOn) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const now = actx.currentTime;
      if (!spray) { spray = actx.createBuffer(1, actx.sampleRate * .25, actx.sampleRate); const d = spray.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2) * .6; }
      const src = actx.createBufferSource(); src.buffer = spray; const hp = actx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2400; const g0 = actx.createGain(); g0.gain.value = .18; src.connect(hp).connect(g0).connect(actx.destination); src.start(now);
      [[659.25, 0], [987.77, .09]].forEach(([f, d]) => { const o = actx.createOscillator(), g = actx.createGain(); o.type = 'sine'; o.frequency.value = f; g.gain.setValueAtTime(0, now + d); g.gain.linearRampToValueAtTime(.16, now + d + .006); g.gain.exponentialRampToValueAtTime(.0001, now + d + .5); o.connect(g).connect(actx.destination); o.start(now + d); o.stop(now + d + .55); });
    } catch (e) { /* ignore */ }
  }
  document.addEventListener('click', (e) => {
    const el = e.target.closest('.btn, .fx-btn, .exhib-tab, .seg-btn, .qty button, .tbl-remove, .book-card');
    if (!el) return;
    burst(e.clientX, e.clientY); chime();
    el.classList.add('pressed'); setTimeout(() => el.classList.remove('pressed'), 160);
  });
  function toast(msg) { const el = $('#toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('show'), 1800); }

  /* ---------------- 6. i18n apply ---------------- */
  function applyI18n() {
    document.documentElement.lang = lang.toLowerCase();
    $$('[data-i18n]').forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    $$('[data-i18n-placeholder]').forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    $('#lang-select').value = lang;
    renderAll();
  }

  /* ---------------- 7. Three.js helpers ---------------- */
  const texCache = {};
  function coverTexture(b) { if (!texCache[b.id]) { const tx = new THREE.CanvasTexture(makeCover(b).canvas); tx.anisotropy = 4; tx.encoding = THREE.sRGBEncoding; texCache[b.id] = tx; } return texCache[b.id]; }
  function bookMesh(b, scale = 1) {
    const geo = new THREE.BoxGeometry(1.4 * scale, 1.9 * scale, .22 * scale);
    const pages = new THREE.MeshStandardMaterial({ color: 0xF7F1E6, roughness: .9 });
    const spine = new THREE.MeshStandardMaterial({ color: new THREE.Color(b.color[0]).multiplyScalar(.8), roughness: .6 });
    const cover = new THREE.MeshStandardMaterial({ map: coverTexture(b), roughness: .45, metalness: .05 });
    const back = new THREE.MeshStandardMaterial({ color: new THREE.Color(b.color[0]), roughness: .6 });
    const m = new THREE.Mesh(geo, [pages, spine, pages, pages, cover, back]);
    m.userData.book = b; m.castShadow = true;
    return m;
  }
  function makeRenderer(canvas, alpha = true) {
    const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha });
    r.setPixelRatio(Math.min(devicePixelRatio, 2)); r.outputEncoding = THREE.sRGBEncoding; r.shadowMap.enabled = true;
    return r;
  }
  function fit(renderer, camera, canvas) {
    const w = canvas.clientWidth || 1, h = canvas.clientHeight || 1;
    if (canvas.width !== Math.floor(w * renderer.getPixelRatio()) || canvas.height !== Math.floor(h * renderer.getPixelRatio())) { renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); }
  }
  const visible = (el) => { if (!el || el.offsetParent === null) return false; const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < innerHeight; };
  const clock = new THREE.Clock();

  /* ---------------- 8. Quaternius Pirate Kit loader (auto-normalized GLB) ---------------- */
  const MODELS = {}; const gltfLoader = new THREE.GLTFLoader();
  const MODEL_NAMES = ['Dock', 'Dock_Broken', 'Ship', 'Small_Ship', 'Palm_Tree', 'Palm_Tree_2', 'Palm_Tree_3', 'House', 'House_2', 'Rock', 'Rock_3', 'Rocks_2', 'Rocks_3', 'Chest_Closed', 'Chest_Gold', 'Barrel', 'Post', 'Coins', 'Gem_Blue', 'Gem_Green', 'Gem_Pink', 'Gold_Bag', 'Anchor', 'Cannon', 'Bucket', 'Red_X', 'Skull_2', 'Lute', 'Paper', 'Bird', 'Shark', 'Tentacle', 'Pirate_Captain', 'Anne', 'Henry', 'Skeleton'];
  const ready = Promise.all(MODEL_NAMES.map((n) => new Promise((res) => gltfLoader.load(`assets/models/${n}.glb`, (g) => { g.scene.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; if (o.material) { o.material.roughness = Math.min(1, (o.material.roughness ?? .8) + .1); } } }); const box = new THREE.Box3().setFromObject(g.scene); g.box = box; g.size = box.getSize(new THREE.Vector3()); MODELS[n] = g; res(); }, undefined, () => { console.warn('model missing', n); res(); }))));
  const anim = (g, key) => g && g.animations.find((a) => a.name.split('|').includes(key));
  const KEEP_ORIGIN = new Set(['Dock', 'Dock_Broken', 'Post']); // models whose origin sits at deck level (posts extend below water)
  // place a model so its longest side = size (world units), base on y, centered at x/z
  function inst(name, x = 0, y = 0, z = 0, ry = 0, size = 2, useOriginal = false) {
    const g = MODELS[name]; if (!g) return new THREE.Group();
    const obj = useOriginal ? g.scene : g.scene.clone(true);
    const maxDim = Math.max(g.size.x, g.size.y, g.size.z) || 1; const s = size / maxDim;
    const holder = new THREE.Group(); obj.scale.setScalar(s); obj.position.set(-(g.box.min.x + g.size.x / 2) * s, KEEP_ORIGIN.has(name) ? 0 : -g.box.min.y * s, -(g.box.min.z + g.size.z / 2) * s);
    holder.add(obj); holder.position.set(x, y, z); holder.rotation.y = ry; holder.userData.footprint = { w: g.size.x * s, d: g.size.z * s, h: g.size.y * s }; holder.userData.inner = obj;
    return holder;
  }
  function character(name, x, y, z, ry, size, clipKey) { const g = MODELS[name]; const h = inst(name, x, y, z, ry, size, true); if (!g) return { h, mixer: null }; const mixer = new THREE.AnimationMixer(g.scene); const c = anim(g, clipKey) || g.animations[0]; if (c) mixer.clipAction(c).play(); return { h, mixer, g }; }
  function water(parent, w, d, x = 0, z = 0, y = -.5) { const geo = new THREE.PlaneGeometry(w, d, Math.min(90, Math.round(w / 1.5)), Math.min(70, Math.round(d / 1.5))); const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x1FB5C9, roughness: .35, metalness: .1, transparent: true, opacity: .92 })); m.rotation.x = -Math.PI / 2; m.position.set(x, y, z); m.receiveShadow = true; parent.add(m); m.userData.tick = (el) => { const p = geo.attributes.position; for (let i = 0; i < p.count; i++) { const px = p.getX(i), py = p.getY(i); p.setZ(i, Math.sin(px * .35 + el * 1.3) * .18 + Math.cos(py * .45 + el * .9) * .14); } p.needsUpdate = true; }; return m; }
  function sand(parent, w, d, x = 0, z = 0, r = 6) { const shape = new THREE.Shape(); const N = 72, n = 4; for (let i = 0; i < N; i++) { const a = (i / N) * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a); const px = Math.sign(c) * Math.pow(Math.abs(c), 2 / n) * w / 2, py = Math.sign(sn) * Math.pow(Math.abs(sn), 2 / n) * d / 2; if (i === 0) shape.moveTo(px, py); else shape.lineTo(px, py); } shape.closePath(); const m = new THREE.Mesh(new THREE.ShapeGeometry(shape), new THREE.MeshStandardMaterial({ color: 0xF4DCA8, roughness: 1 })); m.rotation.x = -Math.PI / 2; m.position.set(x, .02, z); m.receiveShadow = true; parent.add(m); return m; }
  function pier(parent, x0, z0, dir, count, size = 4) { const items = []; for (let i = 0; i < count; i++) { const g = MODELS.Dock; const d = inst(i === count - 1 && MODELS.Dock_Broken ? 'Dock' : 'Dock', 0, 0, 0, 0, size); const fp = d.userData.footprint; const alongX = dir === 'x'; if ((fp.w > fp.d) !== alongX) d.rotation.y = Math.PI / 2; const len = Math.max(fp.w, fp.d); d.position.set(alongX ? x0 + i * len : x0, 0, alongX ? z0 : z0 - i * len); parent.add(d); items.push(d); } return items; }
  function chestWithBook(parent, b, x, z, ry = 0) {
    const closed = inst('Chest_Closed', x, 0, z, ry, 1.5), open = inst('Chest_Gold', x, 0, z, ry, 1.5); open.visible = false; parent.add(closed); parent.add(open);
    const m = bookMesh(b, .8); m.position.set(x, 1.1, z); m.rotation.y = ry; m.visible = false; parent.add(m);
    return { closed, open, m, x, z, isOpen: false, baseY: 1.1, ph: Math.random() * 6, setOpen(v) { this.isOpen = v; closed.visible = !v; open.visible = v; } };
  }

  /* ---------------- 9. Hero: walkable pirate harbor ---------------- */
  const hero = (() => {
    const canvas = $('#hero-canvas'); const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); scene.fog = new THREE.Fog(0xF9C98A, 60, 130);
    const camera = new THREE.PerspectiveCamera(38, 2, .1, 300);
    scene.add(new THREE.HemisphereLight(0xFFE0B8, 0x1FB5C9, .8));
    const sun = new THREE.DirectionalLight(0xFFC98A, 1.15); sun.position.set(-20, 26, -18); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.camera.left = sun.shadow.camera.bottom = -45; sun.shadow.camera.right = sun.shadow.camera.top = 45; sun.shadow.camera.far = 120; scene.add(sun);
    const world = new THREE.Group(); scene.add(world);
    let built = false, chests = [], tickers = [], mixers = [], cap = null, actIdle = null, actWalk = null, walking = 0, bird = null, shark = null, gulls = [], gems = [];
    const keys = {}; const pos = new THREE.Vector3(2, 0, 10); const camT = pos.clone(); let rot = Math.PI;
    function onLand(p) { return (p.z > 0 && Math.abs(p.x) < 26 && p.z < 24) || (p.z <= 0 && p.z > -21 && Math.abs(p.x) < 1.9); }
    function build() {
      tickers.push(water(world, 140, 110, 0, -20));
      sand(world, 56, 26, 0, 12.5, 8);
      pier(world, 0, 0, 'z', 5, 4.2);
      world.add(inst('Ship', 15, -.2, -16, -.5, 17)); world.add(inst('Small_Ship', -13, -.1, -9, .9, 7));
      [[-24, 3], [-19, 1.5], [22, 2.5], [17, 1], [-25, 22], [24, 21], [8, 22], [-6, 23]].forEach(([x, z], i) => world.add(inst(['Palm_Tree', 'Palm_Tree_2', 'Palm_Tree_3'][i % 3], x, 0, z, i * 1.3, 5.5 + (i % 2))));
      world.add(inst('House', -18, 0, 15, .35, 7)); world.add(inst('House_2', 19, 0, 16, -.4, 6.5));
      world.add(inst('Rocks_2', -26, 0, 12, 0, 6)); world.add(inst('Rocks_3', 26, 0, 9, .8, 5)); world.add(inst('Barrel', -12, 0, 22, 0, 1.2)); world.add(inst('Bucket', 12, 0, 20, .5, .9));
      world.add(inst('Barrel', -15, 0, 11, 0, 1.2)); world.add(inst('Barrel', -13.8, 0, 12, .6, 1.2)); world.add(inst('Cannon', -7, 0, 2.2, Math.PI, 2)); world.add(inst('Anchor', 3.2, 0, 1.2, .4, 1.6)); world.add(inst('Bucket', 15, 0, 12, 0, .8)); world.add(inst('Post', -2.6, 0, .6, 0, 2)); world.add(inst('Post', 2.6, 0, .6, 0, 2)); world.add(inst('Gold_Bag', 16.5, 0, 11.5, 0, 1.1)); world.add(inst('Lute', -16.8, 0, 12.6, 1, 1.1));
      [[BOOKS[0], -8, 6, .3], [BOOKS[1], -2.5, 9, 0], [BOOKS[4], 4.5, 9.5, -.2], [BOOKS[5], 10, 6, -.4], [BOOKS[6], 0, -7.5, Math.PI], [BOOKS[7], 0, -16, Math.PI]].forEach(([b, x, z, ry]) => chests.push(chestWithBook(world, b, x, z, ry)));
      [['Coins', -6.4, 6.8], ['Gem_Blue', -1, 9.8], ['Gem_Pink', 5.8, 8.7], ['Gem_Green', 11.2, 6.8], ['Coins', 1.1, -6.6]].forEach(([n, x, z], i) => { const g = inst(n, x, 0, z, i, .8); g.userData.ph = i; world.add(g); gems.push(g); });
      const c = character('Pirate_Captain', pos.x, 0, pos.z, rot, 2.1, 'Idle'); cap = c.h; scene.add(cap);
      if (c.g) { actIdle = c.mixer.clipAction(anim(c.g, 'Idle')); actWalk = c.mixer.clipAction(anim(c.g, 'Walk') || anim(c.g, 'Run')); actIdle.play(); actWalk.play(); actWalk.setEffectiveWeight(0); mixers.push(c.mixer); }
      const sh = character('Shark', -8, -.35, -16, 0, 4.5, 'Swim'); shark = sh.h; world.add(shark); if (sh.mixer) mixers.push(sh.mixer);
      const tn = character('Tentacle', 24, -.6, -6, .4, 6, 'Tentacle_Idle'); world.add(tn.h); if (tn.mixer) mixers.push(tn.mixer);
      for (let i = 0; i < 3; i++) { const b = inst('Bird', 0, 9 + i, 0, 0, .9); b.userData.ph = i * 2.1; b.userData.r = 10 + i * 3; world.add(b); gulls.push(b); }
      built = true;
    }
    ready.then(build);
    let mx = 0, my = 0, tx = 0, ty = 0;
    $('.hero').addEventListener('mousemove', (e) => { const r = e.currentTarget.getBoundingClientRect(); tx = ((e.clientX - r.left) / r.width - .5) * 2; ty = ((e.clientY - r.top) / r.height - .5) * 2; });
    addEventListener('keydown', (e) => { if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd', 'W', 'A', 'S', 'D'].includes(e.key) && visible(canvas) && !(e.target && e.target.matches && e.target.matches('input,select,textarea'))) { keys[e.key.toLowerCase()] = true; e.preventDefault(); } });
    addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(-9, -9); let hovered = null;
    canvas.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); });
    canvas.addEventListener('click', (e) => { if (hovered) { burst(e.clientX, e.clientY); chime(); goDetail(hovered.userData.book); } });
    return { render(dt, el) {
      fit(renderer, camera, canvas);
      mx += (tx - mx) * .04; my += (ty - my) * .04;
      if (built) {
        let dx = 0, dz = 0; if (keys.w || keys.arrowup) dz -= 1; if (keys.s || keys.arrowdown) dz += 1; if (keys.a || keys.arrowleft) dx -= 1; if (keys.d || keys.arrowright) dx += 1;
        const moving = dx || dz;
        if (moving) { const len = Math.hypot(dx, dz); dx /= len; dz /= len; const np = pos.clone(); np.x += dx * dt * 6; np.z += dz * dt * 6; if (onLand(np)) pos.copy(np); else if (onLand(new THREE.Vector3(np.x, 0, pos.z))) pos.x = np.x; else if (onLand(new THREE.Vector3(pos.x, 0, np.z))) pos.z = np.z; rot = Math.atan2(dx, dz); }
        cap.position.set(pos.x, 0, pos.z); cap.rotation.y += (((rot - cap.rotation.y + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI) * .18;
        if (actWalk) { walking += ((moving ? 1 : 0) - walking) * .15; actWalk.setEffectiveWeight(walking); actIdle.setEffectiveWeight(1 - walking); }
        mixers.forEach((m) => m.update(dt)); tickers.forEach((t) => t.userData.tick(el));
        chests.forEach((c) => { const near = Math.hypot(c.x - pos.x, c.z - pos.z) < 3.2; if (near !== c.isOpen) c.setOpen(near); const ty2 = near ? c.baseY + 1.6 + Math.sin(el * 2 + c.ph) * .2 : c.baseY - .6; c.m.position.y += (ty2 - c.m.position.y) * .1; c.m.visible = c.m.position.y > c.baseY - .3; if (near) c.m.rotation.y += dt * 1.8; });
        gems.forEach((g) => { g.rotation.y = el * 1.4 + g.userData.ph; g.position.y = .15 + Math.abs(Math.sin(el * 2.2 + g.userData.ph)) * .25; });
        if (shark) { const a = el * .35; shark.position.set(-8 + Math.cos(a) * 9, -.35, -18 + Math.sin(a) * 6); shark.rotation.y = -a + Math.PI / 2 + Math.PI; }
        gulls.forEach((b) => { const a = el * .5 + b.userData.ph; b.position.set(Math.cos(a) * b.userData.r, 9 + Math.sin(el + b.userData.ph) * .8 + b.userData.ph * .4, -4 + Math.sin(a) * b.userData.r * .6); b.rotation.y = -a; });
        camT.lerp(pos, .06);
        camera.position.set(camT.x * .7 + mx * 3, 15, camT.z * .7 + 6 + 19 - my * 2); camera.lookAt(camT.x * .7, .8, camT.z * .7 + 6 - 6);
        ray.setFromCamera(mouse, camera); const hits = ray.intersectObjects(chests.filter((c) => c.m.visible).map((c) => c.m)); const h = hits.length ? hits[0].object : null;
        if (h !== hovered) { if (hovered) hovered.scale.setScalar(1); hovered = h; if (h) h.scale.setScalar(1.15); canvas.style.cursor = h ? 'pointer' : 'default'; }
      }
      renderer.render(scene, camera);
    } };
  })();

  /* ---------------- 10. Exhibition engine: treasure dock / ship deck / skull island ---------------- */
  function Exhibition(canvas, captionEl, tooltipEl, onPick) {
    const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); scene.fog = new THREE.Fog(0xF9C98A, 45, 110);
    const camera = new THREE.PerspectiveCamera(40, 2, .1, 300);
    scene.add(new THREE.HemisphereLight(0xFFE0B8, 0x1FB5C9, .85));
    const sun = new THREE.DirectionalLight(0xFFC98A, 1.1); sun.position.set(-18, 26, -14); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.camera.left = sun.shadow.camera.bottom = -40; sun.shadow.camera.right = sun.shadow.camera.top = 40; sun.shadow.camera.far = 120; scene.add(sun);
    const world = new THREE.Group(); scene.add(world);
    let items = [], tickers = [], mixers = [], layout = 'carousel', rotY = 0, targetRot = 0, dragging = false, lx = 0, hovered = null, cur = null, camY = 12, camZ = 26, lookY = 2;
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(-9, -9);
    function clear() { while (world.children.length) world.remove(world.children[0]); items = []; tickers = []; mixers = []; }
    function npc(name, x, z, ry, clipKey) { const c = character(name, x, 0, z, ry, 2.1, clipKey); world.add(c.h); if (c.mixer) mixers.push(c.mixer); }
    function set(curation) {
      cur = curation; clear(); layout = curation.layout;
      const books = curation.books.map(byId); const n = books.length;
      if (!MODELS.Dock) { captionEl.innerHTML = ''; return; }
      tickers.push(water(world, 120, 90));
      if (layout === 'carousel') { // treasure dock
        const half = (n - 1) / 2; pier(world, -half * 2.8 - 3, 0, 'x', Math.ceil(n * 2.8 / 4.2) + 2, 4.2);
        sand(world, 14, 12, -half * 2.8 - 9, 0, 5); world.add(inst('Palm_Tree', -half * 2.8 - 12, 0, -3, .3, 5.5)); world.add(inst('Palm_Tree_2', -half * 2.8 - 8, 0, 3.5, 1.2, 5)); world.add(inst('Barrel', -half * 2.8 - 10, 0, 1.5, 0, 1.2));
        books.forEach((b, i) => { const x = (i - half) * 2.8; world.add(inst('Chest_Gold', x, 0, .4, 0, 1.4)); const m = bookMesh(b, .85); m.position.set(x, 2.4, .4); items.push({ m, ph: i, spin: true }); world.add(m); if (i % 3 === 1) world.add(inst('Post', x + 1.4, 0, -1.5, 0, 2)); });
        world.add(inst('Small_Ship', half * 2.8 + 9, -.1, -8, .8, 7)); npc('Anne', -half * 2.8 - 5, 0, .3, Math.PI / 2, 'Wave');
        [[-half * 2.8 - 1, -3.5], [half * 2.8 + 2, 3]].forEach(([x, z], i) => { const g = inst('Coins', x, 0, z, 0, .9); g.userData.ph = i; world.add(g); items.push({ coin: g }); });
        camY = 10; camZ = 24; lookY = 1.6;
      } else if (layout === 'balloon') { // ship deck library
        world.add(inst('Ship', 0, -.2, -2, 0, 20));
        const rows = 2, per = Math.ceil(n / rows);
        books.forEach((b, i) => { const r = Math.floor(i / per), c = i % per, cnt = Math.min(per, n - r * per); const x = (c - (cnt - 1) / 2) * 2.6; const m = bookMesh(b, .85); m.position.set(x, 6.2 + r * 2.1, -2 + (r ? -1.6 : 1.4)); items.push({ m, ph: i, spin: true }); world.add(m); });
        for (let i = 0; i < 3; i++) { const bd = inst('Bird', 0, 11 + i, 0, 0, .9); bd.userData.ph = i * 2; bd.userData.r = 9 + i * 2; world.add(bd); items.push({ gull: bd }); }
        world.add(inst('Rocks_3', -20, -.2, -14, .3, 6)); world.add(inst('Rocks_3', 19, -.2, -12, 0, 4));
        const sh = character('Shark', 12, -.35, 8, 0, 4.5, 'Swim'); world.add(sh.h); if (sh.mixer) mixers.push(sh.mixer); items.push({ shark: sh.h });
        camY = 12; camZ = 28; lookY = 4.5;
      } else { // skull island trail
        sand(world, 34, 26, 0, 0, 10);
        world.add(inst('Skull_2', 0, 0, -8, 0, 5)); world.add(inst('Rocks_2', -13, 0, -7, .4, 6)); world.add(inst('Rocks_3', 13, 0, -6, -.6, 5));
        [[-14, 6], [14, 7], [-9, -10], [10, -10], [4, 11]].forEach(([x, z], i) => world.add(inst(['Palm_Tree', 'Palm_Tree_2', 'Palm_Tree_3'][i % 3], x, 0, z, i, 5.5)));
        const path = []; for (let i = 0; i < n; i++) { const tt = i / Math.max(1, n - 1); path.push([Math.sin(tt * Math.PI * 1.6) * 9, 8 - tt * 14]); }
        path.forEach(([x, z], i) => { world.add(inst('Red_X', x, .04, z, 0, 1.6)); const m = bookMesh(books[i], .85); m.position.set(x, 2.4, z); items.push({ m, ph: i, spin: true }); world.add(m); if (i % 2) world.add(inst(['Gem_Blue', 'Gem_Green', 'Gem_Pink'][i % 3], x + 1.3, .05, z + .8, i, .7)); });
        world.add(inst('Post', 3, 0, 10, -.4, 2)); world.add(inst('Paper', -3, 0, 10.5, .5, 1.1)); world.add(inst('Chest_Gold', -5, 0, -1, .6, 1.5)); npc('Skeleton', 6, -4, -.6, 'Idle');
        camY = 14; camZ = 24; lookY = 1;
      }
      captionEl.innerHTML = `<small>${t('layout' + layout[0].toUpperCase() + layout.slice(1))} · ${t('hintDrag')}</small>${cur.t[lang] || cur.t.KO}`;
    }
    canvas.addEventListener('pointerdown', (e) => { dragging = true; lx = e.clientX; canvas.style.cursor = 'grabbing'; });
    addEventListener('pointerup', () => { dragging = false; canvas.style.cursor = 'grab'; });
    canvas.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); if (dragging) { targetRot += (e.clientX - lx) * .008; lx = e.clientX; } tooltipEl.style.left = (e.clientX - r.left) + 'px'; tooltipEl.style.top = (e.clientY - r.top) + 'px'; });
    canvas.addEventListener('pointerleave', () => { mouse.set(-9, -9); tooltipEl.hidden = true; });
    canvas.addEventListener('click', (e) => { if (hovered) { burst(e.clientX, e.clientY); chime(); onPick(hovered.userData.book); } });
    function render(dt, el) {
      fit(renderer, camera, canvas);
      if (!dragging) targetRot += dt * .1; rotY += (targetRot - rotY) * .08; world.rotation.y = layout === 'carousel' ? Math.sin(rotY * .6) * .5 : rotY;
      mixers.forEach((m) => m.update(dt)); tickers.forEach((tk) => tk.userData.tick(el));
      items.forEach((it) => { if (it.coin) { it.coin.rotation.y = el * 1.4 + it.coin.userData.ph; return; } if (it.gull) { const a = el * .5 + it.gull.userData.ph; it.gull.position.set(Math.cos(a) * it.gull.userData.r, 11 + Math.sin(el + it.gull.userData.ph), -2 + Math.sin(a) * it.gull.userData.r * .6); it.gull.rotation.y = -a; return; } if (it.shark) { const a = el * .4; it.shark.position.set(Math.cos(a) * 14, -.35, 4 + Math.sin(a) * 9); it.shark.rotation.y = -a + Math.PI * 1.5; return; } it.m.position.y += Math.sin(el * 1.5 + it.ph) * .004; if (it.spin) it.m.rotation.y += dt * .6; });
      camera.position.set(0, camY, camZ); camera.lookAt(0, lookY, 0);
      ray.setFromCamera(mouse, camera); const hits = ray.intersectObjects(items.filter((i) => i.m).map((i) => i.m));
      const h = hits.length ? hits[0].object : null;
      if (h !== hovered) { if (hovered) hovered.scale.setScalar(1); hovered = h; if (h) { h.scale.setScalar(1.12); const b = h.userData.book; tooltipEl.innerHTML = `<b>${bookTitle(b)}</b><span class="meta">${FLAGS[b.lang]} ${LANG_NAMES[b.lang]} · ${t(ageKey(b.age))} · KDC ${b.kdc}</span><br>${t('supply')} <strong>${won(b.price * SUPPLY)}</strong>`; tooltipEl.hidden = false; canvas.style.cursor = 'pointer'; } else { tooltipEl.hidden = true; canvas.style.cursor = dragging ? 'grabbing' : 'grab'; } }
      renderer.render(scene, camera);
    }
    return { set, render, refresh() { if (cur) set(cur); } };
  }
  const goDetail = (b) => { location.hash = '#detail/' + b.id; };
  const homeEx = Exhibition($('#exhib-canvas'), $('#exhib-caption'), $('#exhib-tooltip'), goDetail);
  const curEx = Exhibition($('#cur-canvas'), $('#cur-caption'), $('#cur-tooltip'), goDetail);
  let homeCur = CURATIONS[0], curCur = CURATIONS[0];
  ready.then(() => { homeEx.refresh(); curEx.refresh(); });

  /* ---------------- 11. Small-ship book convoy (new arrivals 3D) ---------------- */
  const parade = (() => {
    const canvas = $('#parade-canvas'); const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); scene.fog = new THREE.Fog(0xF9C98A, 40, 90);
    const camera = new THREE.PerspectiveCamera(34, 2, .1, 200); camera.position.set(0, 9, 22); camera.lookAt(0, 1.5, 0);
    scene.add(new THREE.HemisphereLight(0xFFE0B8, 0x1FB5C9, .9)); const sun = new THREE.DirectionalLight(0xFFC98A, 1); sun.position.set(-14, 22, -10); sun.castShadow = true; sun.shadow.camera.left = sun.shadow.camera.bottom = -40; sun.shadow.camera.right = sun.shadow.camera.top = 40; sun.shadow.camera.far = 100; scene.add(sun);
    const items = NEW_IDS.map((id, i) => { const m = bookMesh(byId(id), .95); m.position.set(i * 4.6 - 16, 2.4, 0); scene.add(m); return { m, x: i * 4.6 - 16, ph: i, boat: null }; });
    let wtr = null;
    ready.then(() => { wtr = water(scene, 90, 50, 0, -8); items.forEach((it) => { it.boat = inst('Small_Ship', it.x, -.1, 0, Math.PI / 2, 4.4); scene.add(it.boat); }); [[-18, -12], [14, -14]].forEach(([x, z], i) => { sand(scene, 12, 8, x, z, 4); scene.add(inst(['Palm_Tree', 'Palm_Tree_3'][i], x - 2, 0, z, i, 5)); scene.add(inst('Barrel', x + 3, 0, z + 1, 0, 1.1)); }); for (let i = 0; i < 2; i++) { const b = inst('Bird', 0, 8, 0, 0, .9); b.userData.ph = i * 3; scene.add(b); items.push({ gull: b }); } });
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(-9, -9); let hovered = null;
    canvas.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); });
    canvas.addEventListener('pointerleave', () => mouse.set(-9, -9));
    canvas.addEventListener('click', (e) => { if (hovered) { burst(e.clientX, e.clientY); chime(); goDetail(hovered.userData.book); } });
    return { render(dt, el) {
      fit(renderer, camera, canvas); if (wtr) wtr.userData.tick(el);
      items.forEach((it) => { if (it.gull) { const a = el * .5 + it.gull.userData.ph; it.gull.position.set(Math.cos(a) * 12, 8 + Math.sin(el + it.gull.userData.ph), -6 + Math.sin(a) * 5); it.gull.rotation.y = -a; return; } it.x += dt * 1.6; if (it.x > 20) it.x -= 4.6 * 8; const bob = Math.sin(el * 1.6 + it.ph) * .18; it.m.position.set(it.x, 2.4 + bob, 0); it.m.rotation.y = Math.sin(el * .8 + it.ph) * .4; it.m.rotation.z = Math.sin(el * 1.6 + it.ph) * .05; if (it.boat) { it.boat.position.set(it.x, -.1 + bob, 0); it.boat.rotation.z = Math.sin(el * 1.6 + it.ph) * .05; } });
      ray.setFromCamera(mouse, camera); const hits = ray.intersectObjects(items.filter((i) => i.m).map((i) => i.m)); const h = hits.length ? hits[0].object : null;
      if (h !== hovered) { if (hovered) hovered.scale.setScalar(1); hovered = h; if (h) h.scale.setScalar(1.15); canvas.style.cursor = h ? 'pointer' : 'default'; }
      renderer.render(scene, camera);
    } };
  })();

  /* ---------------- 11b. Detail: book over a golden chest on the dock ---------------- */
  const detail3d = (() => {
    const canvas = $('#detail-canvas'); const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(32, 2, .1, 100); camera.position.set(0, 4, 10); camera.lookAt(0, 1.6, 0);
    scene.add(new THREE.HemisphereLight(0xFFE0B8, 0x1FB5C9, 1)); const s = new THREE.DirectionalLight(0xFFC98A, .9); s.position.set(-6, 12, -6); s.castShadow = true; scene.add(s);
    let mesh = null, rot = 0, vel = .6, dragging = false, lx = 0, wtr = null, gems = [];
    ready.then(() => { wtr = water(scene, 40, 30, 0, -4, -.55); pier(scene, 0, 3, 'z', 2, 4.2); scene.add(inst('Chest_Gold', 0, 0, -.4, 0, 1.6)); scene.add(inst('Palm_Tree_2', -3.6, -.3, -3, .4, 5)); scene.add(inst('Post', 1.8, 0, 1.4, 0, 1.8)); [['Gem_Blue', -1.4, 1.2], ['Coins', 1.3, -1.3]].forEach(([n, x, z], i) => { const g = inst(n, x, 0, z, i, .7); g.userData.ph = i; scene.add(g); gems.push(g); }); });
    canvas.addEventListener('pointerdown', (e) => { dragging = true; lx = e.clientX; }); addEventListener('pointerup', () => { dragging = false; });
    canvas.addEventListener('pointermove', (e) => { if (dragging) { vel = (e.clientX - lx) * .25; lx = e.clientX; } });
    return { set(b) { if (mesh) scene.remove(mesh); mesh = bookMesh(b, 1.25); scene.add(mesh); }, render(dt, el) { fit(renderer, camera, canvas); if (wtr) wtr.userData.tick(el); gems.forEach((g) => { g.rotation.y = el + g.userData.ph; }); if (mesh) { rot += vel * dt; if (!dragging) vel += (.6 - vel) * .04; mesh.rotation.y = rot; mesh.position.set(0, 2.6 + Math.sin(el * 1.2) * .12, -.4); } renderer.render(scene, camera); } };
  })();

  /* ---------------- 12. Render loop ---------------- */
  (function loop() {
    requestAnimationFrame(loop);
    const dt = Math.min(clock.getDelta(), .05), el = clock.elapsedTime;
    if (visible($('#hero-canvas'))) hero.render(dt, el);
    if (visible($('#exhib-canvas'))) homeEx.render(dt, el);
    if (visible($('#parade-canvas'))) parade.render(dt, el);
    if (visible($('#cur-canvas'))) curEx.render(dt, el);
    if (visible($('#detail-canvas'))) detail3d.render(dt, el);
  })();

  /* ---------------- 13. DOM rendering ---------------- */
  function cardHTML(b) {
    return `<article class="book-card" data-id="${b.id}">
      <div class="cover"><img src="${makeCover(b).url}" alt="${bookTitle(b)}"><span class="flag">${FLAGS[b.lang]} ${b.lang}</span></div>
      <div><h3 class="book-title">${bookTitle(b)}</h3><div class="book-orig">${b.orig}</div><div class="book-author">${b.author} · ${b.pub}</div></div>
      <div class="chips"><span class="chip">${t(ageKey(b.age))}</span><span class="chip gold">KDC ${b.kdc}</span></div>
      <div class="biblio">ISBN ${b.isbn}<br>${b.year} · ${b.pages}${t('pages')} · ${LANG_NAMES[b.lang]}</div>
      <div class="price-row"><span class="price-list">${won(b.price)}</span><span class="price-supply">${won(b.price * SUPPLY)}<small>-10%</small></span></div>
      <div class="card-actions"><button class="btn btn-primary btn-sm add-btn" data-id="${b.id}">${t('addCart')}</button><a class="btn btn-ghost btn-sm" href="#detail/${b.id}">${t('detail')}</a></div>
    </article>`;
  }
  function tableHTML(books, withQty) {
    return `<table class="book-table"><thead><tr><th>${t('thCover')}</th><th>${t('thInfo')}</th><th>${t('thLang')}</th><th>${t('thAge')}</th><th>${t('thKdc')}</th><th>${t('thIsbn')}</th><th>${t('thList')}</th><th>${t('thSupply')}</th>${withQty ? `<th>${t('thQty')}</th><th>${t('thSubtotal')}</th><th></th>` : '<th></th>'}</tr></thead><tbody>
    ${books.map((b) => { const q = cart[b.id] || 0; return `<tr><td><img class="mini-cover" src="${makeCover(b).url}" alt=""></td><td><span class="t-title" data-go="${b.id}">${bookTitle(b)}</span><span class="t-orig">${b.orig} · ${b.author} · ${b.pub}</span></td><td>${FLAGS[b.lang]} ${b.lang}</td><td>${t(ageKey(b.age))}</td><td class="mono">${b.kdc}</td><td class="mono">${b.isbn}</td><td>${won(b.price)}</td><td><strong>${won(b.price * SUPPLY)}</strong></td>${withQty ? `<td><span class="qty"><button data-q="-1" data-id="${b.id}">−</button><span>${q}</span><button data-q="1" data-id="${b.id}">+</button></span></td><td><strong>${won(b.price * SUPPLY * q)}</strong></td><td><button class="tbl-remove" data-rm="${b.id}">${t('remove')}</button></td>` : `<td><button class="btn btn-primary btn-sm add-btn" data-id="${b.id}">${t('addCart')}</button></td>`}</tr>`; }).join('')}
    </tbody></table>`;
  }
  function renderNew() { $('#new-list').innerHTML = tableHTML(NEW_IDS.map(byId), false); $('#parade-caption').textContent = t('paradeCaption'); }
  function renderTabs(container, active, onSel) {
    container.innerHTML = CURATIONS.map((c) => `<button class="exhib-tab ${c.id === active.id ? 'active' : ''}" data-cid="${c.id}"><small>${t('layout' + c.layout[0].toUpperCase() + c.layout.slice(1))}</small>${c.t[lang] || c.t.KO}</button>`).join('');
    $$('.exhib-tab', container).forEach((btn) => btn.addEventListener('click', () => onSel(CURATIONS.find((c) => c.id === btn.dataset.cid))));
  }
  function renderHome() {
    const onSel = (c) => { homeCur = c; homeEx.set(c); renderTabs($('#home-exhib-tabs'), homeCur, onSel); };
    renderTabs($('#home-exhib-tabs'), homeCur, onSel);
    homeEx.set(homeCur); renderNew();
  }
  // filters
  function fillFilters() {
    const opt = (v, l) => `<option value="${v}">${l}</option>`;
    const langs = [...new Set(BOOKS.map((b) => b.lang))]; const pubs = [...new Set(BOOKS.map((b) => b.pub))]; const kdcs = [...new Set(BOOKS.map((b) => b.kdc.split('.')[0][0] + '00'))].sort();
    const keep = (id) => $(id).value;
    const kl = keep('#f-lang'), ka = keep('#f-age'), kk = keep('#f-kdc'), kp = keep('#f-pub');
    $('#f-lang').innerHTML = opt('', t('all')) + langs.map((l) => opt(l, FLAGS[l] + ' ' + LANG_NAMES[l])).join('');
    $('#f-age').innerHTML = opt('', t('all')) + ['infant', 'child', 'youth'].map((a) => opt(a, t(ageKey(a)))).join('');
    $('#f-kdc').innerHTML = opt('', t('all')) + kdcs.map((k) => opt(k, 'KDC ' + k)).join('');
    $('#f-pub').innerHTML = opt('', t('all')) + pubs.map((p) => opt(p, p)).join('');
    $('#f-lang').value = kl || ''; $('#f-age').value = ka || ''; $('#f-kdc').value = kk || ''; $('#f-pub').value = kp || '';
  }
  function renderSearch() {
    const q = $('#search-input').value.trim().toLowerCase(); const fl = $('#f-lang').value, fa = $('#f-age').value, fk = $('#f-kdc').value, fp = $('#f-pub').value, mp = +$('#f-price').value;
    $('#f-price-out').textContent = won(mp);
    const res = BOOKS.filter((b) => (!fl || b.lang === fl) && (!fa || b.age === fa) && (!fk || b.kdc[0] === fk[0]) && (!fp || b.pub === fp) && b.price <= mp && (!q || [bookTitle(b), b.t.KO, b.orig, b.author, b.pub, b.isbn, b.kdc].join(' ').toLowerCase().includes(q)));
    $('#result-count').textContent = res.length; $('#search-grid').innerHTML = res.length ? res.map(cardHTML).join('') : `<div class="empty">—</div>`;
  }
  function renderCuration() {
    renderTabs($('#cur-exhib-tabs'), curCur, (c) => { curCur = c; renderCuration(); });
    curEx.set(curCur);
    const books = curCur.books.map(byId); const pkg = books.reduce((s, b) => s + b.price * SUPPLY, 0);
    $('#cur-detail').innerHTML = `<div class="cur-intro"><p class="eyebrow">${t('layout' + curCur.layout[0].toUpperCase() + curCur.layout.slice(1))}</p><h3>${curCur.t[lang] || curCur.t.KO}</h3><p>${curCur.d[lang] || curCur.d.KO}</p>
      <div class="kv"><span>${t('curBooks')}</span><b>${books.length}</b></div><div class="kv"><span>${t('curLayout')}</span><b>${t('layout' + curCur.layout[0].toUpperCase() + curCur.layout.slice(1))}</b></div><div class="kv"><span>${t('curPrice')}</span><b>${won(pkg)}</b></div>
      <button class="btn btn-primary add-all-btn">${t('addAll')}</button></div><div class="book-grid">${books.map(cardHTML).join('')}</div>`;
    $('.add-all-btn').addEventListener('click', () => { books.forEach((b) => { cart[b.id] = (cart[b.id] || 0) + 1; }); saveCart(); toast(t('added')); });
  }
  function renderCart() {
    const ids = Object.keys(cart).filter((id) => cart[id] > 0); const books = ids.map(byId);
    const copies = ids.reduce((s, id) => s + cart[id], 0); const listT = ids.reduce((s, id) => s + byId(id).price * cart[id], 0); const supT = listT * SUPPLY;
    $('#cart-stats').innerHTML = [[t('statSelTitles'), ids.length], [t('statCopies'), copies], [t('statList'), won(listT)], [t('statSupply'), won(supT)]].map(([l, v]) => `<div class="stat"><span>${l}</span><strong>${v}</strong></div>`).join('');
    $('#cart-table').innerHTML = ids.length ? tableHTML(books, true) : `<div class="empty">${t('emptyCart')}<br><a href="#search" class="btn btn-primary btn-sm">${t('goSearch')}</a></div>`;
    $('#cart-total').innerHTML = `<div><span>${t('subtotal')}</span><span>${won(listT)}</span></div><div><span>${t('discount')}</span><span>− ${won(listT - supT)}</span></div><div class="grand"><span>${t('total')}</span><span>${won(supT)}</span></div>`;
  }
  function renderDetail(id) {
    const b = byId(id); if (!b) { location.hash = '#search'; return; }
    detail3d.set(b);
    $('#detail-info').innerHTML = `<p class="eyebrow">${FLAGS[b.lang]} ${LANG_NAMES[b.lang]} · ${t(ageKey(b.age))}</p><h2>${bookTitle(b)}</h2><div class="orig">${b.orig}</div><div class="author">${b.author} · ${b.pub} · ${b.year}</div>
      <div class="chips"><span class="chip gold">KDC ${b.kdc}</span><span class="chip">ISBN ${b.isbn}</span><span class="chip">${b.pages}${t('pages')}</span></div>
      <p class="desc">${b.desc}</p>
      <div class="detail-price"><span class="price-list">${t('listPrice')} ${won(b.price)}</span><span class="price-supply">${won(b.price * SUPPLY)}<small>${t('supply')} -10%</small></span></div>
      <div class="detail-actions"><button class="btn btn-primary add-btn" data-id="${b.id}">${t('addCart')}</button><a href="#cart" class="btn btn-ghost">${t('navCart')}</a></div>
      <table class="spec"><tr><th>${t('isbn')}</th><td>${b.isbn}</td></tr><tr><th>${t('kdc')}</th><td>${b.kdc}</td></tr><tr><th>${t('language')}</th><td>${LANG_NAMES[b.lang]} (${b.lang})</td></tr><tr><th>${t('ageRange')}</th><td>${t(ageKey(b.age))}</td></tr><tr><th>${t('publisher')}</th><td>${b.pub}</td></tr><tr><th>${t('year')}</th><td>${b.year}</td></tr><tr><th>${t('binding')}</th><td>${b.age === 'youth' ? 'Paperback' : 'Hardcover'} · ${b.pages}${t('pages')}</td></tr></table>`;
    $('#related-grid').innerHTML = BOOKS.filter((x) => x.id !== b.id && (x.lang === b.lang || x.age === b.age)).slice(0, 4).map(cardHTML).join('');
  }
  function updateBadges() { const n = Object.values(cart).reduce((s, v) => s + v, 0); $('#nav-cart-count').textContent = n; $('#header-cart-count').textContent = n; }
  function saveCart() { localStorage.setItem('mlmc02_cart', JSON.stringify(cart)); updateBadges(); if (currentPage === 'cart') renderCart(); }
  function renderAll() { fillFilters(); renderHome(); renderSearch(); renderCuration(); renderCart(); updateBadges(); homeEx.refresh(); curEx.refresh(); if (currentPage === 'detail' && currentId) renderDetail(currentId); }

  /* ---------------- 14. Router ---------------- */
  let currentPage = 'home', currentId = null;
  function route() {
    const h = location.hash.replace('#', '') || 'home'; const [page, id] = h.split('/');
    const valid = ['home', 'search', 'curation', 'cart', 'detail'].includes(page) ? page : 'home';
    currentPage = valid; currentId = id || null;
    $$('.page').forEach((p) => p.classList.toggle('active', p.id === 'page-' + valid));
    $$('.nav-link').forEach((a) => a.classList.toggle('active', a.dataset.page === valid));
    if (valid === 'detail') renderDetail(id); if (valid === 'cart') renderCart(); if (valid === 'curation') renderCuration();
    scrollTo({ top: 0, behavior: 'smooth' });
  }
  addEventListener('hashchange', route);

  /* ---------------- 15. Events ---------------- */
  document.addEventListener('click', (e) => {
    const add = e.target.closest('.add-btn'); if (add) { cart[add.dataset.id] = (cart[add.dataset.id] || 0) + 1; saveCart(); toast(t('added')); return; }
    const q = e.target.closest('[data-q]'); if (q) { const id = q.dataset.id; cart[id] = Math.max(0, (cart[id] || 0) + +q.dataset.q); if (!cart[id]) delete cart[id]; saveCart(); return; }
    const rm = e.target.closest('[data-rm]'); if (rm) { delete cart[rm.dataset.rm]; saveCart(); toast(t('removed')); return; }
    const go = e.target.closest('[data-go]'); if (go) { goDetail(byId(go.dataset.go)); return; }
    const card = e.target.closest('.book-card'); if (card && !e.target.closest('a,button')) goDetail(byId(card.dataset.id));
  });
  $('#lang-select').addEventListener('change', (e) => { lang = e.target.value; localStorage.setItem('mlmc02_lang', lang); applyI18n(); });
  $('#librarian-toggle').addEventListener('change', (e) => { document.body.classList.toggle('librarian', e.target.checked); localStorage.setItem('mlmc02_lib', e.target.checked ? '1' : '0'); });
  if (localStorage.getItem('mlmc02_lib') === '1') { $('#librarian-toggle').checked = true; document.body.classList.add('librarian'); }
  $('#sound-toggle').addEventListener('click', () => { soundOn = !soundOn; localStorage.setItem('mlmc02_sound', soundOn ? 'on' : 'off'); $('#sound-on').hidden = !soundOn; $('#sound-off').hidden = soundOn; });
  $('#sound-on').hidden = !soundOn; $('#sound-off').hidden = soundOn;
  ['#search-input', '#f-lang', '#f-age', '#f-kdc', '#f-pub', '#f-price'].forEach((s) => $(s).addEventListener('input', renderSearch));
  $('#search-btn').addEventListener('click', renderSearch);
  $('#f-reset').addEventListener('click', () => { $('#search-input').value = ''; ['#f-lang', '#f-age', '#f-kdc', '#f-pub'].forEach((s) => ($(s).value = '')); $('#f-price').value = 40000; renderSearch(); });
  $$('#new-view-seg .seg-btn').forEach((b) => b.addEventListener('click', () => { $$('#new-view-seg .seg-btn').forEach((x) => x.classList.toggle('active', x === b)); $('#new-list').hidden = b.dataset.view !== 'list'; $('#new-3d').hidden = b.dataset.view !== '3d'; }));
  $('#cart-clear').addEventListener('click', () => { cart = {}; saveCart(); toast(t('cleared')); });
  $('#btn-print').addEventListener('click', () => {
    const ids = Object.keys(cart).filter((id) => cart[id] > 0); if (!ids.length) { toast(t('emptyCart')); return; }
    const inst = $('#inst-name').value || '—'; if (inst === '—') toast(t('needInst'));
    const listT = ids.reduce((s, id) => s + byId(id).price * cart[id], 0);
    $('#print-area').innerHTML = `<h1>${t('printTitle')}</h1><div class="meta"><div>${t('printMeta1')}: ${inst}</div><div>${t('printMeta2')}: ${$('#inst-lib').value || '—'}</div><div>${t('printMeta3')}: ${$('#inst-tel').value || '—'} / ${$('#inst-email').value || '—'}</div><div>${t('printMeta4')}: ${new Date().toLocaleDateString('ko-KR')}</div></div>
      <table><thead><tr><th>#</th><th>${t('thInfo')}</th><th>${t('thLang')}</th><th>${t('thKdc')}</th><th>${t('thIsbn')}</th><th>${t('thPub')}</th><th>${t('thList')}</th><th>${t('thSupply')}</th><th>${t('thQty')}</th><th>${t('thSubtotal')}</th></tr></thead><tbody>
      ${ids.map((id, i) => { const b = byId(id); return `<tr><td>${i + 1}</td><td>${bookTitle(b)}<br><small>${b.orig} · ${b.author}</small></td><td>${b.lang}</td><td>${b.kdc}</td><td>${b.isbn}</td><td>${b.pub}</td><td>${won(b.price)}</td><td>${won(b.price * SUPPLY)}</td><td>${cart[id]}</td><td>${won(b.price * SUPPLY * cart[id])}</td></tr>`; }).join('')}
      <tr><td colspan="9" style="text-align:right"><b>${t('subtotal')}</b></td><td>${won(listT)}</td></tr><tr><td colspan="9" style="text-align:right"><b>${t('discount')}</b></td><td>− ${won(listT * .1)}</td></tr><tr><td colspan="9" style="text-align:right"><b>${t('total')}</b></td><td><b>${won(listT * SUPPLY)}</b></td></tr></tbody></table><div class="seal">${t('printSeal')}</div>`;
    print();
  });
  $('#btn-xlsx').addEventListener('click', () => {
    const ids = Object.keys(cart).filter((id) => cart[id] > 0); if (!ids.length) { toast(t('emptyCart')); return; }
    const rows = ids.map((id, i) => { const b = byId(id); return { No: i + 1, Title: bookTitle(b), Original: b.orig, Author: b.author, Publisher: b.pub, Language: b.lang, Age: t(ageKey(b.age)), KDC: b.kdc, ISBN: b.isbn, Year: b.year, ListPrice: b.price, SupplyPrice: b.price * SUPPLY, Qty: cart[id], Subtotal: b.price * SUPPLY * cart[id] }; });
    const ws = XLSX.utils.json_to_sheet(rows); const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, 'Quote'); XLSX.writeFile(wb, `library_quote_vc02_${Date.now()}.xlsx`); toast(t('xlsxDone'));
  });

  /* ---------------- 16. Boot ---------------- */
  applyI18n(); route();
})();
