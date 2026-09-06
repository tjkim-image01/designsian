/* =====================================================================
   Multicultural Library Mall v18 — Deep Ocean Aquarium Library
   Three.js jellyfish hero · 3D exhibition engine (tunnel / coral sphere / bubble ring)
   6-language i18n · librarian mode · quote cart (print / xlsx)
   ===================================================================== */
(function () {
  'use strict';

  /* ---------------- 1. i18n ---------------- */
  const I18N = {
    KO: {
      brand: '다문화도서관 수서 몰', navHome: '메인', navSearch: '도서 검색', navCuration: '큐레이션', navCart: '공문 견적함', librarianMode: '사서 모드', cartBtn: '견적 장바구니',
      heroEyebrow: 'MULTICULTURAL LIBRARY COLLECTION · 2026', heroTitle: '세계의 이야기가<br>심해 아쿠아리움을 헤엄칩니다', heroSub: '다문화 도서관을 위한 원서·이중언어 그림책 큐레이션. 사서를 위한 서지정보와 공문 견적을 한 화면에서.', heroCta1: '3D 전시실 입장', heroCta2: '도서 검색하기', statTitles: '보유 종수', statLangs: '지원 언어', statLibs: '납품 도서관', heroHint: '마우스를 움직여 해파리를 따라가 보세요',
      exhibEyebrow: '3D EXHIBITION HALL', exhibTitle: '심해 아쿠아리움 기획전', exhibSub: '기획전마다 다른 진열 형태로 책을 만나보세요. 책을 클릭하면 상세로 이동합니다.',
      newEyebrow: 'NEW ARRIVALS', newTitle: '2026 하반기 신간', viewList: '서지 리스트', viewParade: '책 거품 3D', paradeCaption: '신간 도서가 거품에 담겨 떠오릅니다 — 클릭하면 상세로',
      libEyebrow: 'FOR LIBRARIANS', libTitle: '수서 담당 사서를 위한 1클릭 공문 견적', libSub: '장바구니에 담은 도서는 납품가(정가 10% 할인)로 자동 산출되어 공문 양식 견적서(인쇄/PDF)와 엑셀 사양서로 내려받을 수 있습니다.', libF1: '모든 카드에 상시 노출', libF2: '도서관 납품가 자동 적용', libF3: '공문 견적서 즉시 출력', libCta: '견적함 열기',
      searchEyebrow: 'BOOK SEARCH', searchTitle: '도서 검색 & 수서', searchSub: '언어·연령·KDC·출판사·가격으로 정밀 검색. ISBN 직접 입력도 가능합니다.', searchPlaceholder: '도서명, 저자, 출판사, ISBN, KDC 입력…', searchBtn: '검색', fLang: '언어', fAge: '대상 연령', fKdc: 'KDC 분류', fPub: '출판사', fPrice: '최대 정가', fReset: '필터 초기화', resultCount: '검색 결과',
      curEyebrow: 'CURATION EXHIBITIONS', curTitle: '기획전 3D 전시실', curSub: '수족관 터널·산호 정원 구체·버블 링, 세 가지 3D 전시 형태의 기획전. 사서 패키지 일괄 담기를 지원합니다.',
      cartEyebrow: 'QUOTE CART', cartTitle: '장바구니 · 공문 견적함', cartSub: '납품가(정가 -10%) 기준으로 자동 산출됩니다. 기관 정보를 입력하면 공문 양식으로 출력됩니다.', cartClear: '전체 비우기', instTitle: '수서 기관 정보', instName: '기관명', instLibrarian: '담당 사서', instContact: '연락처', instEmail: '이메일', btnPrint: '공문 견적서 인쇄 / PDF', btnXlsx: '엑셀 사양서 다운로드',
      back: '← 목록으로', detailHint: '드래그하여 책을 360° 돌려보세요', related: '함께 보면 좋은 도서', footerDesc: '공공·학교 다문화 도서관 납품 전문 · 원서 및 이중언어 도서 · 사서 공문 견적 지원',
      all: '전체', ageInfant: '유아 (0–6)', ageChild: '아동 (7–12)', ageYouth: '청소년 (13+)', addCart: '견적함 담기', added: '견적함에 담았습니다', detail: '상세', supply: '납품가', listPrice: '정가',
      thCover: '표지', thInfo: '서지 정보', thLang: '언어', thAge: '연령', thKdc: 'KDC', thIsbn: 'ISBN', thList: '정가', thSupply: '납품가', thQty: '수량', thSubtotal: '합계', thPub: '출판사', remove: '삭제',
      statSelTitles: '선택 종수', statCopies: '총 권수', statList: '정가 합계', statSupply: '납품가 합계', emptyCart: '견적함이 비어 있습니다. 기획전이나 검색에서 도서를 담아보세요.', goSearch: '도서 검색으로', addAll: '기획전 전체 담기', curBooks: '수록 도서', curLayout: '전시 형태', curPrice: '패키지 납품가',
      layoutCarousel: '수족관 터널', layoutBalloon: '산호 정원 구체', layoutStairs: '버블 링', hintDrag: '드래그하여 회전 · 책 클릭 시 상세',
      pages: '쪽', year: '출판연도', binding: '양장/무선', publisher: '출판사', language: '언어', ageRange: '대상 연령', kdc: 'KDC', isbn: 'ISBN', total: '총 납품가', subtotal: '소계', discount: '도서관 할인(10%)', printTitle: '도서 납품 견적서', printMeta1: '수신', printMeta2: '담당', printMeta3: '연락처', printMeta4: '견적일', printSeal: '다문화도서관 수서 몰 (직인)', xlsxDone: '엑셀 사양서를 내려받았습니다', needInst: '기관명을 입력하면 공문에 반영됩니다', cleared: '견적함을 비웠습니다', removed: '삭제했습니다'
    },
    EN: {
      brand: 'Multicultural Library Mall', navHome: 'Home', navSearch: 'Search', navCuration: 'Curations', navCart: 'Quote Cart', librarianMode: 'Librarian', cartBtn: 'Quote Cart',
      heroEyebrow: 'MULTICULTURAL LIBRARY COLLECTION · 2026', heroTitle: 'Stories of the world<br>swim through the deep-sea aquarium', heroSub: 'Original-language and bilingual picture books curated for multicultural libraries. Bibliographic data and official quotes for librarians, on one screen.', heroCta1: 'Enter 3D Hall', heroCta2: 'Search books', statTitles: 'Titles', statLangs: 'Languages', statLibs: 'Libraries served', heroHint: 'Move your mouse to follow the jellyfish',
      exhibEyebrow: '3D EXHIBITION HALL', exhibTitle: 'Deep Ocean Aquarium Exhibitions', exhibSub: 'Every exhibition displays books in a different form. Click a book to open its detail.',
      newEyebrow: 'NEW ARRIVALS', newTitle: 'New Titles · Fall 2026', viewList: 'Bibliographic list', viewParade: 'Book Bubbles 3D', paradeCaption: 'New titles rise in bubbles — click to open',
      libEyebrow: 'FOR LIBRARIANS', libTitle: 'One-click official quotes for acquisition librarians', libSub: 'Books in your cart are priced at library supply price (10% off list) and can be exported as an official quote (print/PDF) and an Excel spec sheet.', libF1: 'Always visible on every card', libF2: 'Library supply price applied', libF3: 'Official quote instantly', libCta: 'Open quote cart',
      searchEyebrow: 'BOOK SEARCH', searchTitle: 'Search & Acquire', searchSub: 'Filter by language, age, KDC, publisher and price. ISBN lookup supported.', searchPlaceholder: 'Title, author, publisher, ISBN, KDC…', searchBtn: 'Search', fLang: 'Language', fAge: 'Age range', fKdc: 'KDC class', fPub: 'Publisher', fPrice: 'Max list price', fReset: 'Reset filters', resultCount: 'Results',
      curEyebrow: 'CURATION EXHIBITIONS', curTitle: '3D Exhibition Halls', curSub: 'Aquarium tunnel, coral sphere and bubble ring — three 3D display forms. Add a whole package in one click.',
      cartEyebrow: 'QUOTE CART', cartTitle: 'Cart · Official Quote', cartSub: 'Calculated at library supply price (-10%). Fill in institution details to print an official quote.', cartClear: 'Clear all', instTitle: 'Institution', instName: 'Institution', instLibrarian: 'Librarian', instContact: 'Phone', instEmail: 'Email', btnPrint: 'Print / PDF quote', btnXlsx: 'Download Excel spec',
      back: '← Back to list', detailHint: 'Drag to rotate the book 360°', related: 'You may also like', footerDesc: 'Supplying public & school multicultural libraries · Original & bilingual books · Official quotes for librarians',
      all: 'All', ageInfant: 'Infant (0–6)', ageChild: 'Children (7–12)', ageYouth: 'Youth (13+)', addCart: 'Add to quote', added: 'Added to quote cart', detail: 'Detail', supply: 'Supply', listPrice: 'List',
      thCover: 'Cover', thInfo: 'Bibliographic info', thLang: 'Lang', thAge: 'Age', thKdc: 'KDC', thIsbn: 'ISBN', thList: 'List', thSupply: 'Supply', thQty: 'Qty', thSubtotal: 'Subtotal', thPub: 'Publisher', remove: 'Remove',
      statSelTitles: 'Titles', statCopies: 'Copies', statList: 'List total', statSupply: 'Supply total', emptyCart: 'Your quote cart is empty. Add books from exhibitions or search.', goSearch: 'Go to search', addAll: 'Add whole exhibition', curBooks: 'Books', curLayout: 'Display form', curPrice: 'Package supply price',
      layoutCarousel: 'Aquarium Tunnel', layoutBalloon: 'Coral Garden Sphere', layoutStairs: 'Bubble Ring', hintDrag: 'Drag to rotate · click a book for detail',
      pages: 'pages', year: 'Year', binding: 'Binding', publisher: 'Publisher', language: 'Language', ageRange: 'Age range', kdc: 'KDC', isbn: 'ISBN', total: 'Total supply', subtotal: 'Subtotal', discount: 'Library discount (10%)', printTitle: 'Book Supply Quotation', printMeta1: 'To', printMeta2: 'Attn', printMeta3: 'Contact', printMeta4: 'Date', printSeal: 'Multicultural Library Mall (seal)', xlsxDone: 'Excel spec downloaded', needInst: 'Enter the institution name to include it in the quote', cleared: 'Cart cleared', removed: 'Removed'
    },
    VI: {
      brand: 'Thư viện Đa văn hóa Mall', navHome: 'Trang chủ', navSearch: 'Tìm sách', navCuration: 'Triển lãm', navCart: 'Giỏ báo giá', librarianMode: 'Thủ thư', cartBtn: 'Giỏ báo giá',
      heroEyebrow: 'BỘ SƯU TẬP THƯ VIỆN ĐA VĂN HÓA · 2026', heroTitle: 'Những câu chuyện thế giới<br>bơi qua thủy cung biển sâu', heroSub: 'Sách tranh nguyên bản và song ngữ được tuyển chọn cho thư viện đa văn hóa. Thông tin thư mục và báo giá công văn cho thủ thư trên một màn hình.', heroCta1: 'Vào phòng 3D', heroCta2: 'Tìm sách', statTitles: 'Đầu sách', statLangs: 'Ngôn ngữ', statLibs: 'Thư viện', heroHint: 'Di chuyển chuột để theo đàn sứa',
      exhibEyebrow: 'PHÒNG TRIỂN LÃM 3D', exhibTitle: 'Triển lãm Thủy cung Biển sâu', exhibSub: 'Mỗi triển lãm trưng bày sách theo hình thức khác nhau. Nhấp vào sách để xem chi tiết.',
      newEyebrow: 'SÁCH MỚI', newTitle: 'Sách mới · Cuối 2026', viewList: 'Danh sách thư mục', viewParade: 'Bong bóng sách 3D', paradeCaption: 'Sách mới nổi lên trong bong bóng — nhấp để mở',
      libEyebrow: 'DÀNH CHO THỦ THƯ', libTitle: 'Báo giá công văn một cú nhấp cho thủ thư', libSub: 'Sách trong giỏ được tính theo giá cung ứng thư viện (giảm 10%) và xuất ra báo giá (in/PDF) cùng bảng kê Excel.', libF1: 'Luôn hiển thị trên mọi thẻ', libF2: 'Áp dụng giá cung ứng thư viện', libF3: 'Xuất báo giá ngay', libCta: 'Mở giỏ báo giá',
      searchEyebrow: 'TÌM SÁCH', searchTitle: 'Tìm kiếm & Đặt mua', searchSub: 'Lọc theo ngôn ngữ, độ tuổi, KDC, nhà xuất bản và giá. Hỗ trợ tra ISBN.', searchPlaceholder: 'Tên sách, tác giả, NXB, ISBN, KDC…', searchBtn: 'Tìm', fLang: 'Ngôn ngữ', fAge: 'Độ tuổi', fKdc: 'Phân loại KDC', fPub: 'Nhà xuất bản', fPrice: 'Giá bìa tối đa', fReset: 'Đặt lại', resultCount: 'Kết quả',
      curEyebrow: 'TRIỂN LÃM TUYỂN CHỌN', curTitle: 'Phòng triển lãm 3D', curSub: 'Đường hầm thủy cung, quả cầu san hô, vòng bong bóng — ba hình thức trưng bày 3D.',
      cartEyebrow: 'GIỎ BÁO GIÁ', cartTitle: 'Giỏ hàng · Báo giá công văn', cartSub: 'Tính theo giá cung ứng thư viện (-10%). Nhập thông tin cơ quan để in báo giá.', cartClear: 'Xóa tất cả', instTitle: 'Thông tin cơ quan', instName: 'Tên cơ quan', instLibrarian: 'Thủ thư', instContact: 'Điện thoại', instEmail: 'Email', btnPrint: 'In / PDF báo giá', btnXlsx: 'Tải bảng kê Excel',
      back: '← Quay lại', detailHint: 'Kéo để xoay sách 360°', related: 'Sách liên quan', footerDesc: 'Cung ứng thư viện đa văn hóa công cộng & trường học · Sách nguyên bản & song ngữ · Báo giá cho thủ thư',
      all: 'Tất cả', ageInfant: 'Mẫu giáo (0–6)', ageChild: 'Thiếu nhi (7–12)', ageYouth: 'Thiếu niên (13+)', addCart: 'Thêm vào giỏ', added: 'Đã thêm vào giỏ báo giá', detail: 'Chi tiết', supply: 'Giá cung ứng', listPrice: 'Giá bìa',
      thCover: 'Bìa', thInfo: 'Thông tin thư mục', thLang: 'Ngôn ngữ', thAge: 'Tuổi', thKdc: 'KDC', thIsbn: 'ISBN', thList: 'Giá bìa', thSupply: 'Giá CƯ', thQty: 'SL', thSubtotal: 'Thành tiền', thPub: 'NXB', remove: 'Xóa',
      statSelTitles: 'Đầu sách', statCopies: 'Số cuốn', statList: 'Tổng giá bìa', statSupply: 'Tổng cung ứng', emptyCart: 'Giỏ báo giá trống. Hãy thêm sách từ triển lãm hoặc tìm kiếm.', goSearch: 'Đi tìm sách', addAll: 'Thêm cả triển lãm', curBooks: 'Sách', curLayout: 'Hình thức', curPrice: 'Giá gói cung ứng',
      layoutCarousel: 'Đường hầm Thủy cung', layoutBalloon: 'Quả cầu San hô', layoutStairs: 'Vòng Bong bóng', hintDrag: 'Kéo để xoay · nhấp sách để xem',
      pages: 'trang', year: 'Năm XB', binding: 'Bìa', publisher: 'NXB', language: 'Ngôn ngữ', ageRange: 'Độ tuổi', kdc: 'KDC', isbn: 'ISBN', total: 'Tổng cung ứng', subtotal: 'Tạm tính', discount: 'Giảm thư viện (10%)', printTitle: 'Báo giá cung ứng sách', printMeta1: 'Kính gửi', printMeta2: 'Người nhận', printMeta3: 'Liên hệ', printMeta4: 'Ngày', printSeal: 'Multicultural Library Mall (dấu)', xlsxDone: 'Đã tải bảng kê Excel', needInst: 'Nhập tên cơ quan để đưa vào báo giá', cleared: 'Đã xóa giỏ', removed: 'Đã xóa'
    },
    ZH: {
      brand: '多文化图书馆采购商城', navHome: '首页', navSearch: '图书检索', navCuration: '策展', navCart: '公文报价单', librarianMode: '馆员模式', cartBtn: '报价购物车',
      heroEyebrow: '多文化图书馆馆藏 · 2026', heroTitle: '世界的故事<br>游过深海水族馆', heroSub: '为多文化图书馆精选的原版与双语绘本。馆员所需的书目信息与公文报价，一屏搞定。', heroCta1: '进入3D展厅', heroCta2: '检索图书', statTitles: '藏书种数', statLangs: '支持语言', statLibs: '供货图书馆', heroHint: '移动鼠标追随水母',
      exhibEyebrow: '3D 展厅', exhibTitle: '深海水族馆特展', exhibSub: '每个特展以不同形式陈列图书。点击图书查看详情。',
      newEyebrow: '新书上架', newTitle: '2026 下半年新书', viewList: '书目列表', viewParade: '图书气泡 3D', paradeCaption: '新书乘着气泡上升 — 点击查看',
      libEyebrow: '馆员专区', libTitle: '为采购馆员提供一键公文报价', libSub: '购物车中的图书按馆配价（定价9折）自动计算，可导出公文格式报价单（打印/PDF）及Excel清单。', libF1: '所有卡片常显', libF2: '自动应用馆配价', libF3: '即时导出公文报价', libCta: '打开报价单',
      searchEyebrow: '图书检索', searchTitle: '检索与采购', searchSub: '按语言、年龄、KDC、出版社、价格精确筛选，支持ISBN直接输入。', searchPlaceholder: '书名、作者、出版社、ISBN、KDC…', searchBtn: '检索', fLang: '语言', fAge: '适读年龄', fKdc: 'KDC 分类', fPub: '出版社', fPrice: '最高定价', fReset: '重置筛选', resultCount: '检索结果',
      curEyebrow: '策展特展', curTitle: '特展 3D 展厅', curSub: '水族馆隧道、珊瑚花园球、气泡环——三种3D陈列形式。支持一键加入整套套餐。',
      cartEyebrow: '报价购物车', cartTitle: '购物车 · 公文报价单', cartSub: '按馆配价（定价-10%）自动计算。填写机构信息后可按公文格式输出。', cartClear: '清空', instTitle: '采购机构信息', instName: '机构名称', instLibrarian: '负责馆员', instContact: '联系电话', instEmail: '邮箱', btnPrint: '打印 / PDF 报价单', btnXlsx: '下载Excel清单',
      back: '← 返回列表', detailHint: '拖动可360°旋转图书', related: '相关推荐', footerDesc: '公共及学校多文化图书馆供货 · 原版及双语图书 · 馆员公文报价支持',
      all: '全部', ageInfant: '幼儿 (0–6)', ageChild: '儿童 (7–12)', ageYouth: '青少年 (13+)', addCart: '加入报价单', added: '已加入报价单', detail: '详情', supply: '馆配价', listPrice: '定价',
      thCover: '封面', thInfo: '书目信息', thLang: '语言', thAge: '年龄', thKdc: 'KDC', thIsbn: 'ISBN', thList: '定价', thSupply: '馆配价', thQty: '数量', thSubtotal: '小计', thPub: '出版社', remove: '删除',
      statSelTitles: '已选种数', statCopies: '总册数', statList: '定价合计', statSupply: '馆配价合计', emptyCart: '报价单为空。请从特展或检索中添加图书。', goSearch: '去检索', addAll: '加入整个特展', curBooks: '收录图书', curLayout: '陈列形式', curPrice: '套餐馆配价',
      layoutCarousel: '水族馆隧道', layoutBalloon: '珊瑚花园球', layoutStairs: '气泡环', hintDrag: '拖动旋转 · 点击图书查看详情',
      pages: '页', year: '出版年', binding: '装帧', publisher: '出版社', language: '语言', ageRange: '适读年龄', kdc: 'KDC', isbn: 'ISBN', total: '馆配总价', subtotal: '小计', discount: '图书馆折扣(10%)', printTitle: '图书供货报价单', printMeta1: '致', printMeta2: '经办', printMeta3: '联系', printMeta4: '日期', printSeal: '多文化图书馆采购商城（印）', xlsxDone: '已下载Excel清单', needInst: '填写机构名称后将体现在公文中', cleared: '已清空', removed: '已删除'
    },
    RU: {
      brand: 'Мультикультурная библиотека', navHome: 'Главная', navSearch: 'Поиск книг', navCuration: 'Выставки', navCart: 'Смета', librarianMode: 'Библиотекарь', cartBtn: 'Корзина сметы',
      heroEyebrow: 'КОЛЛЕКЦИЯ МУЛЬТИКУЛЬТУРНОЙ БИБЛИОТЕКИ · 2026', heroTitle: 'Истории мира<br>плывут сквозь глубоководный аквариум', heroSub: 'Оригинальные и двуязычные книжки-картинки для мультикультурных библиотек. Библиографические данные и официальная смета для библиотекаря на одном экране.', heroCta1: 'Войти в 3D-зал', heroCta2: 'Искать книги', statTitles: 'Наименований', statLangs: 'Языков', statLibs: 'Библиотек', heroHint: 'Двигайте мышью, чтобы следовать за медузами',
      exhibEyebrow: '3D ВЫСТАВОЧНЫЙ ЗАЛ', exhibTitle: 'Выставки глубоководного аквариума', exhibSub: 'Каждая выставка показывает книги по-своему. Нажмите на книгу, чтобы открыть карточку.',
      newEyebrow: 'НОВИНКИ', newTitle: 'Новинки · осень 2026', viewList: 'Библиографический список', viewParade: 'Пузыри книг 3D', paradeCaption: 'Новинки поднимаются в пузырях — нажмите, чтобы открыть',
      libEyebrow: 'ДЛЯ БИБЛИОТЕКАРЕЙ', libTitle: 'Официальная смета в один клик', libSub: 'Книги в корзине рассчитываются по библиотечной цене (скидка 10%) и экспортируются как официальная смета (печать/PDF) и спецификация Excel.', libF1: 'Всегда видны на карточке', libF2: 'Библиотечная цена применена', libF3: 'Смета мгновенно', libCta: 'Открыть смету',
      searchEyebrow: 'ПОИСК КНИГ', searchTitle: 'Поиск и комплектование', searchSub: 'Фильтры по языку, возрасту, KDC, издательству и цене. Поиск по ISBN.', searchPlaceholder: 'Название, автор, издательство, ISBN, KDC…', searchBtn: 'Поиск', fLang: 'Язык', fAge: 'Возраст', fKdc: 'Класс KDC', fPub: 'Издательство', fPrice: 'Макс. цена', fReset: 'Сбросить', resultCount: 'Результаты',
      curEyebrow: 'КУРАТОРСКИЕ ВЫСТАВКИ', curTitle: '3D выставочные залы', curSub: 'Тоннель аквариума, коралловая сфера и кольцо пузырей — три формы 3D-показа.',
      cartEyebrow: 'КОРЗИНА СМЕТЫ', cartTitle: 'Корзина · Официальная смета', cartSub: 'Расчёт по библиотечной цене (-10%). Заполните данные учреждения для печати сметы.', cartClear: 'Очистить', instTitle: 'Учреждение', instName: 'Название', instLibrarian: 'Библиотекарь', instContact: 'Телефон', instEmail: 'Email', btnPrint: 'Печать / PDF сметы', btnXlsx: 'Скачать Excel',
      back: '← К списку', detailHint: 'Перетащите, чтобы вращать книгу на 360°', related: 'Похожие книги', footerDesc: 'Поставки в публичные и школьные мультикультурные библиотеки · Оригинальные и двуязычные книги · Сметы для библиотекарей',
      all: 'Все', ageInfant: 'Малыши (0–6)', ageChild: 'Дети (7–12)', ageYouth: 'Подростки (13+)', addCart: 'В смету', added: 'Добавлено в смету', detail: 'Подробнее', supply: 'Библ. цена', listPrice: 'Цена',
      thCover: 'Обложка', thInfo: 'Библиография', thLang: 'Язык', thAge: 'Возраст', thKdc: 'KDC', thIsbn: 'ISBN', thList: 'Цена', thSupply: 'Библ. цена', thQty: 'Кол-во', thSubtotal: 'Сумма', thPub: 'Изд-во', remove: 'Удалить',
      statSelTitles: 'Наименований', statCopies: 'Экземпляров', statList: 'Итого по цене', statSupply: 'Итого библ.', emptyCart: 'Корзина пуста. Добавьте книги из выставок или поиска.', goSearch: 'К поиску', addAll: 'Добавить всю выставку', curBooks: 'Книг', curLayout: 'Форма показа', curPrice: 'Цена пакета',
      layoutCarousel: 'Тоннель аквариума', layoutBalloon: 'Коралловая сфера', layoutStairs: 'Кольцо пузырей', hintDrag: 'Перетащите для вращения · клик по книге',
      pages: 'стр.', year: 'Год', binding: 'Переплёт', publisher: 'Издательство', language: 'Язык', ageRange: 'Возраст', kdc: 'KDC', isbn: 'ISBN', total: 'Итого', subtotal: 'Подытог', discount: 'Скидка библиотеке (10%)', printTitle: 'Смета на поставку книг', printMeta1: 'Кому', printMeta2: 'Вниманию', printMeta3: 'Контакт', printMeta4: 'Дата', printSeal: 'Multicultural Library Mall (печать)', xlsxDone: 'Excel загружен', needInst: 'Укажите учреждение для сметы', cleared: 'Корзина очищена', removed: 'Удалено'
    },
    JA: {
      brand: '多文化図書館 選書モール', navHome: 'ホーム', navSearch: '図書検索', navCuration: 'キュレーション', navCart: '公文見積', librarianMode: '司書モード', cartBtn: '見積カート',
      heroEyebrow: '多文化図書館コレクション · 2026', heroTitle: '世界の物語が<br>深海のアクアリウムを泳ぐ', heroSub: '多文化図書館のための原書・バイリンガル絵本キュレーション。司書のための書誌情報と公文見積をひとつの画面で。', heroCta1: '3D展示室へ', heroCta2: '図書を検索', statTitles: '所蔵点数', statLangs: '対応言語', statLibs: '納入図書館', heroHint: 'マウスを動かしてクラゲを追いかけよう',
      exhibEyebrow: '3D 展示ホール', exhibTitle: '深海アクアリウム企画展', exhibSub: '企画展ごとに異なる陳列形式。本をクリックすると詳細へ。',
      newEyebrow: '新刊', newTitle: '2026 下半期 新刊', viewList: '書誌リスト', viewParade: 'ブックバブル 3D', paradeCaption: '新刊が泡に包まれて浮かび上がる — クリックで詳細',
      libEyebrow: '司書のために', libTitle: '選書担当司書のためのワンクリック公文見積', libSub: 'カートの図書は納入価（定価10%引）で自動計算され、公文形式の見積書（印刷/PDF）とExcel仕様書に出力できます。', libF1: 'すべてのカードに常時表示', libF2: '図書館納入価を自動適用', libF3: '公文見積を即時出力', libCta: '見積カートを開く',
      searchEyebrow: '図書検索', searchTitle: '図書検索 & 選書', searchSub: '言語・年齢・KDC・出版社・価格で精密検索。ISBN直接入力も可能。', searchPlaceholder: '書名、著者、出版社、ISBN、KDC…', searchBtn: '検索', fLang: '言語', fAge: '対象年齢', fKdc: 'KDC分類', fPub: '出版社', fPrice: '最大定価', fReset: 'リセット', resultCount: '検索結果',
      curEyebrow: 'キュレーション企画展', curTitle: '企画展 3D 展示室', curSub: '水族館トンネル・サンゴ球・バブルリング、3つの3D陳列形式。パッケージ一括追加に対応。',
      cartEyebrow: '見積カート', cartTitle: 'カート · 公文見積', cartSub: '納入価（定価-10%）で自動計算。機関情報を入力すると公文形式で出力できます。', cartClear: 'すべて削除', instTitle: '選書機関情報', instName: '機関名', instLibrarian: '担当司書', instContact: '連絡先', instEmail: 'メール', btnPrint: '公文見積書 印刷 / PDF', btnXlsx: 'Excel仕様書ダウンロード',
      back: '← 一覧へ', detailHint: 'ドラッグして本を360°回転', related: 'あわせて読みたい', footerDesc: '公共・学校の多文化図書館納入専門 · 原書およびバイリンガル図書 · 司書向け公文見積対応',
      all: 'すべて', ageInfant: '乳幼児 (0–6)', ageChild: '児童 (7–12)', ageYouth: 'ヤングアダルト (13+)', addCart: '見積に追加', added: '見積カートに追加しました', detail: '詳細', supply: '納入価', listPrice: '定価',
      thCover: '表紙', thInfo: '書誌情報', thLang: '言語', thAge: '年齢', thKdc: 'KDC', thIsbn: 'ISBN', thList: '定価', thSupply: '納入価', thQty: '数量', thSubtotal: '小計', thPub: '出版社', remove: '削除',
      statSelTitles: '選択点数', statCopies: '総冊数', statList: '定価合計', statSupply: '納入価合計', emptyCart: '見積カートは空です。企画展や検索から図書を追加してください。', goSearch: '図書検索へ', addAll: '企画展をすべて追加', curBooks: '収録図書', curLayout: '陳列形式', curPrice: 'パッケージ納入価',
      layoutCarousel: '水族館トンネル', layoutBalloon: 'サンゴ庭園の球', layoutStairs: 'バブルリング', hintDrag: 'ドラッグで回転 · 本をクリックで詳細',
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
    { id: 'c1', layout: 'carousel', t: { KO: '바다 건너 온 동화 터널전', EN: 'Tales Across the Sea Tunnel', VI: 'Đường hầm Cổ tích vượt biển', ZH: '漂洋过海的童话隧道展', RU: 'Тоннель сказок из-за моря', JA: '海を渡った童話トンネル展' }, d: { KO: '수족관 터널을 걸으며 양옆 유리 너머의 세계 전래동화를 만납니다.', EN: 'Walk the aquarium tunnel and meet world folk tales behind the glass.', VI: 'Đi qua đường hầm thủy cung và gặp cổ tích thế giới sau lớp kính.', ZH: '穿过水族馆隧道，与玻璃后的世界民间故事相遇。', RU: 'Пройдите тоннель аквариума и встретьте сказки мира за стеклом.', JA: '水族館トンネルを歩きながら世界の民話に出会う。' }, books: ['b01', 'b02', 'b03', 'b07', 'b08', 'b06', 'b12', 'b05'] },
    { id: 'c2', layout: 'balloon', t: { KO: '세계 바다·과학 산호 정원전', EN: 'Ocean & Science Coral Garden', VI: 'Vườn san hô Biển & Khoa học', ZH: '世界海洋·科学珊瑚花园展', RU: 'Коралловый сад: океан и наука', JA: '世界の海・科学サンゴ庭園展' }, d: { KO: '지리·과학·논픽션 도서가 산호 정원 구체 위에 피어납니다. 학교도서관 추천.', EN: 'Geography, science and non-fiction bloom on a coral sphere. Recommended for school libraries.', VI: 'Sách địa lý, khoa học nở trên quả cầu san hô.', ZH: '地理、科学与非虚构图书在珊瑚球上绽放。学校图书馆推荐。', RU: 'География, наука и нон-фикшн расцветают на коралловой сфере.', JA: '地理・科学・ノンフィクションがサンゴ球の上に咲く。' }, books: ['b12', 'b09', 'b11', 'b04', 'b07', 'b02'] },
    { id: 'c3', layout: 'stairs', t: { KO: '이중언어 물방울 그림책전', EN: 'Bilingual Bubble Picture Books', VI: 'Sách tranh Song ngữ Bong bóng', ZH: '双语水泡绘本展', RU: 'Двуязычные книжки в пузырях', JA: 'バイリンガル水玉絵本展' }, d: { KO: '두 언어로 읽는 첫 그림책이 거품 링을 타고 돌아갑니다. 다문화 가정 첫 책 추천.', EN: 'First bilingual picture books ride the bubble ring. First books for multicultural families.', VI: 'Sách tranh song ngữ đầu đời quay trên vòng bong bóng.', ZH: '第一本双语绘本乘着气泡环旋转。多文化家庭的第一本书。', RU: 'Первые двуязычные книжки кружатся на кольце пузырей.', JA: '初めてのバイリンガル絵本がバブルリングで回る。' }, books: ['b05', 'b10', 'b01', 'b08', 'b06', 'b12', 'b03'] }
  ];
  const NEW_IDS = ['b01', 'b02', 'b04', 'b05', 'b07', 'b09', 'b10', 'b12'];
  const SUPPLY = 0.9;

  /* ---------------- 3. State ---------------- */
  let lang = localStorage.getItem('mlm18_lang') || 'KO';
  let soundOn = localStorage.getItem('mlm18_sound') !== 'off';
  let cart = JSON.parse(localStorage.getItem('mlm18_cart') || '{}');
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

  /* ---------------- 5. FX: bubbles + ripple + water-drop sound ---------------- */
  const fx = $('#fx-canvas'); const fxg = fx.getContext('2d'); let parts = [];
  function sizeFx() { fx.width = innerWidth * devicePixelRatio; fx.height = innerHeight * devicePixelRatio; fxg.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); }
  sizeFx(); addEventListener('resize', sizeFx);
  function burst(x, y) {
    parts.push({ type: 'ring', x, y, r: 6, life: 1 }); parts.push({ type: 'ring', x, y, r: 2, life: 1.25 });
    for (let i = 0; i < 18; i++) { const a = Math.random() * Math.PI * 2, s = .6 + Math.random() * 2.2; parts.push({ type: 'bub', x: x + Math.cos(a) * 6, y: y + Math.sin(a) * 6, vx: Math.cos(a) * s * .6, vy: -1.4 - Math.random() * 2.2, life: 1, r: 2 + Math.random() * 5, c: Math.random() < .75 ? '#5EE7DF' : '#FFA58C', ph: Math.random() * 6 }); }
  }
  (function fxLoop() {
    fxg.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter((p) => p.life > 0);
    for (const p of parts) {
      if (p.type === 'ring') { p.life -= .03; p.r += 3.2; fxg.globalAlpha = Math.max(0, p.life) * .8; fxg.strokeStyle = '#5EE7DF'; fxg.lineWidth = 2; fxg.beginPath(); fxg.arc(p.x, p.y, p.r, 0, Math.PI * 2); fxg.stroke(); continue; }
      p.x += p.vx + Math.sin(p.ph + p.life * 8) * .6; p.y += p.vy; p.vy *= .985; p.life -= .016;
      fxg.globalAlpha = Math.max(0, p.life) * .9; fxg.strokeStyle = p.c; fxg.lineWidth = 1.5; fxg.beginPath(); fxg.arc(p.x, p.y, Math.max(0, p.r), 0, Math.PI * 2); fxg.stroke();
      fxg.fillStyle = 'rgba(255,255,255,.7)'; fxg.beginPath(); fxg.arc(p.x - p.r * .35, p.y - p.r * .35, Math.max(0, p.r * .25), 0, Math.PI * 2); fxg.fill();
    }
    fxg.globalAlpha = 1; requestAnimationFrame(fxLoop);
  })();
  let actx;
  function chime() {
    if (!soundOn) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const now = actx.currentTime;
      const o = actx.createOscillator(), g = actx.createGain(); o.type = 'sine';
      o.frequency.setValueAtTime(420, now); o.frequency.exponentialRampToValueAtTime(1100, now + .09); o.frequency.exponentialRampToValueAtTime(600, now + .3);
      g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(.22, now + .015); g.gain.exponentialRampToValueAtTime(.0001, now + .45);
      o.connect(g).connect(actx.destination); o.start(now); o.stop(now + .5);
      const o2 = actx.createOscillator(), g2 = actx.createGain(); o2.type = 'triangle'; o2.frequency.value = 1568;
      g2.gain.setValueAtTime(0, now + .12); g2.gain.linearRampToValueAtTime(.06, now + .14); g2.gain.exponentialRampToValueAtTime(.0001, now + .9);
      o2.connect(g2).connect(actx.destination); o2.start(now + .12); o2.stop(now + 1);
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

  /* ---------------- 8. Hero: jellyfish lanterns & book-fish ---------------- */
  function jellyfish(color, scale = 1) {
    const g = new THREE.Group();
    const dome = new THREE.Mesh(new THREE.SphereGeometry(1 * scale, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshPhysicalMaterial({ color, emissive: color, emissiveIntensity: .55, transparent: true, opacity: .55, roughness: .2, transmission: .3, side: THREE.DoubleSide }));
    g.add(dome);
    const inner = new THREE.Mesh(new THREE.SphereGeometry(.55 * scale, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .35 })); inner.position.y = .2 * scale; g.add(inner);
    const tent = [];
    for (let i = 0; i < 9; i++) { const a = (i / 9) * Math.PI * 2, r = .7 * scale; const tm = new THREE.Mesh(new THREE.CylinderGeometry(.02 * scale, .005, 2.6 * scale, 6), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .55 })); tm.position.set(Math.cos(a) * r, -1.3 * scale, Math.sin(a) * r); g.add(tm); tent.push({ m: tm, a }); }
    const light = new THREE.PointLight(color, .9, 9 * scale); light.position.y = .3; g.add(light);
    g.userData.tent = tent; g.userData.dome = dome; return g;
  }
  const hero = (() => {
    const canvas = $('#hero-canvas'); const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x061A30, .05);
    const camera = new THREE.PerspectiveCamera(46, 2, .1, 100); camera.position.set(4, 1.5, 14);
    scene.add(new THREE.AmbientLight(0x2E6C8C, .5));
    const top = new THREE.DirectionalLight(0x9FE8FF, .9); top.position.set(2, 14, 4); scene.add(top);
    const coralL = new THREE.PointLight(0xFF7A59, .6, 30); coralL.position.set(-8, -2, 4); scene.add(coralL);
    // light rays
    for (let i = 0; i < 7; i++) { const ray = new THREE.Mesh(new THREE.PlaneGeometry(1.2 + Math.random() * 1.5, 26), new THREE.MeshBasicMaterial({ color: 0x9FE8FF, transparent: true, opacity: .05 + Math.random() * .05, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide })); ray.position.set(-8 + i * 3.2 + Math.random(), 6, -6 - Math.random() * 6); ray.rotation.z = -.25 + Math.random() * .1; scene.add(ray); }
    // sea floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(80, 60, 40, 30), new THREE.MeshStandardMaterial({ color: 0x0B2A44, roughness: 1 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -6;
    const fp = floor.geometry.attributes.position; for (let i = 0; i < fp.count; i++) fp.setZ(i, Math.sin(fp.getX(i) * .4) * .6 + Math.cos(fp.getY(i) * .3) * .5); floor.geometry.computeVertexNormals(); scene.add(floor);
    // corals
    for (let i = 0; i < 16; i++) { const c = new THREE.Mesh(new THREE.ConeGeometry(.3 + Math.random() * .5, 1.5 + Math.random() * 2.5, 7), new THREE.MeshStandardMaterial({ color: [0xFF7A59, 0x1FB2A6, 0x7B2D8E, 0xFFA58C][i % 4], roughness: .8 })); c.position.set(-14 + Math.random() * 30, -5.2, -14 + Math.random() * 10); scene.add(c); }
    // jellyfish
    const jellies = []; const jcol = [0x5EE7DF, 0xFFA58C, 0x9FE8FF, 0xFF7A59, 0x5EE7DF];
    for (let i = 0; i < 5; i++) { const j = jellyfish(jcol[i], .8 + Math.random() * .7); j.position.set(-2 + i * 3.4 + Math.random(), -1 + Math.random() * 5, -4 + Math.random() * 6); j.userData.ph = Math.random() * 6; j.userData.y0 = j.position.y; scene.add(j); jellies.push(j); }
    // book-fish schools
    const fish = [];
    BOOKS.forEach((b, i) => { const m = bookMesh(b, .55); m.userData.r = 5 + (i % 4) * 1.6; m.userData.sp = .25 + Math.random() * .25; m.userData.ph = i * .55; m.userData.y = -2 + (i % 5) * 1.3; scene.add(m); fish.push(m); });
    // bubbles
    const N = 500, pos = new Float32Array(N * 3); for (let i = 0; i < N; i++) { pos[i * 3] = (Math.random() - .5) * 40; pos[i * 3 + 1] = -6 + Math.random() * 18; pos[i * 3 + 2] = -12 + Math.random() * 20; }
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xBFEFFF, size: .09, transparent: true, opacity: .7 })));
    let mx = 0, my = 0, tx = 0, ty = 0;
    $('.hero').addEventListener('mousemove', (e) => { const r = e.currentTarget.getBoundingClientRect(); tx = ((e.clientX - r.left) / r.width - .5) * 2; ty = ((e.clientY - r.top) / r.height - .5) * 2; });
    return { render(dt, el) {
      fit(renderer, camera, canvas);
      mx += (tx - mx) * .04; my += (ty - my) * .04;
      camera.position.x = 4 + mx * 2.5; camera.position.y = 1.5 - my * 1.5; camera.lookAt(3, .6, 0);
      jellies.forEach((j) => { const p = Math.sin(el * 1.4 + j.userData.ph); j.userData.dome.scale.set(1 + p * .08, 1 - p * .1, 1 + p * .08); j.position.y = j.userData.y0 + Math.sin(el * .5 + j.userData.ph) * .8; j.position.x += Math.sin(el * .3 + j.userData.ph) * .004 + mx * .01; j.userData.tent.forEach((tt, k) => { tt.m.rotation.x = Math.sin(el * 2 + k) * .25; tt.m.rotation.z = Math.cos(el * 1.6 + k + tt.a) * .22; }); });
      fish.forEach((m) => { const u = m.userData, a = el * u.sp + u.ph; m.position.set(3 + Math.cos(a) * u.r, u.y + Math.sin(el * 1.3 + u.ph) * .5, Math.sin(a) * u.r * .55 - 2); m.rotation.y = -a + Math.PI; m.rotation.z = Math.sin(el * 5 + u.ph) * .12; });
      const a = pg.attributes.position.array; for (let i = 0; i < N; i++) { a[i * 3 + 1] += dt * (.4 + (i % 5) * .15); a[i * 3] += Math.sin(el + i) * .004; if (a[i * 3 + 1] > 12) a[i * 3 + 1] = -6; } pg.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    } };
  })();

  /* ---------------- 9. Exhibition engine: tunnel / coral sphere / bubble ring ---------------- */
  function Exhibition(canvas, captionEl, tooltipEl, onPick) {
    const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x041224, .04);
    const camera = new THREE.PerspectiveCamera(46, 2, .1, 100); camera.position.set(0, 3, 15);
    scene.add(new THREE.AmbientLight(0x2E6C8C, .6));
    const top = new THREE.DirectionalLight(0x9FE8FF, 1); top.position.set(0, 14, 6); scene.add(top);
    const c1 = new THREE.PointLight(0x5EE7DF, .9, 40); c1.position.set(-10, 4, 6); scene.add(c1);
    const c2 = new THREE.PointLight(0xFF7A59, .7, 40); c2.position.set(10, 2, -4); scene.add(c2);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(18, 64), new THREE.MeshStandardMaterial({ color: 0x0B2A44, roughness: .3, metalness: .3 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -3; scene.add(floor);
    const glass = new THREE.MeshPhysicalMaterial({ color: 0x9FE8FF, transparent: true, opacity: .16, roughness: .05, metalness: .1, side: THREE.DoubleSide });
    const world = new THREE.Group(); scene.add(world);
    let items = [], deco = [], layout = 'carousel', rotY = 0, targetRot = 0, camZ = 0, targetZ = 0, dragging = false, lx = 0, hovered = null, cur = null;
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(-9, -9);
    function clear() { items.forEach((i) => world.remove(i.g || i.m)); deco.forEach((d) => world.remove(d)); items = []; deco = []; world.rotation.set(0, 0, 0); }
    function set(curation) {
      cur = curation; clear(); layout = curation.layout;
      const books = curation.books.map(byId); const n = books.length;
      if (layout === 'carousel') { // aquarium tunnel
        for (let z = 8; z >= -24; z -= 4) { const arch = new THREE.Mesh(new THREE.TorusGeometry(5.2, .12, 10, 40, Math.PI), new THREE.MeshStandardMaterial({ color: 0x1FB2A6, metalness: .6, roughness: .3 })); arch.position.set(0, -2.8, z); world.add(arch); deco.push(arch); const pane = new THREE.Mesh(new THREE.CylinderGeometry(5.1, 5.1, 4, 40, 1, true, 0, Math.PI), glass); pane.rotation.z = Math.PI / 2; pane.rotation.y = Math.PI / 2; pane.position.set(0, -2.8, z - 2); pane.rotation.x = 0; world.add(pane); deco.push(pane); }
        const path = new THREE.Mesh(new THREE.BoxGeometry(3, .1, 36), new THREE.MeshStandardMaterial({ color: 0x0F3E5E })); path.position.set(0, -2.9, -8); world.add(path); deco.push(path);
        books.forEach((b, i) => { const side = i % 2 ? 1 : -1; const m = bookMesh(b, 1.1); m.position.set(side * 3.6, -.4 + (i % 3) * .9, 5 - i * 3.4); m.rotation.y = -side * Math.PI / 2 + side * .35; items.push({ m, ph: i }); world.add(m); });
        for (let i = 0; i < 24; i++) { const f = new THREE.Mesh(new THREE.ConeGeometry(.12, .5, 5), new THREE.MeshBasicMaterial({ color: 0xFFA58C })); f.rotation.z = Math.PI / 2; f.position.set(-4.5 + Math.random() * 9, -2 + Math.random() * 5, 6 - Math.random() * 32); f.userData.ph = Math.random() * 6; world.add(f); deco.push(f); }
      } else if (layout === 'balloon') { // coral garden sphere
        const core = new THREE.Mesh(new THREE.SphereGeometry(2.4, 32, 32), new THREE.MeshPhysicalMaterial({ color: 0x1FB2A6, emissive: 0x0B4F4A, transparent: true, opacity: .35, roughness: .1 })); world.add(core); deco.push(core);
        for (let i = 0; i < 14; i++) { const a = (i / 14) * Math.PI * 2; const c = new THREE.Mesh(new THREE.ConeGeometry(.35, 1.4 + Math.random() * 2, 7), new THREE.MeshStandardMaterial({ color: [0xFF7A59, 0x1FB2A6, 0xFFA58C, 0x7B2D8E][i % 4] })); c.position.set(Math.cos(a) * 7.5, -2.3, Math.sin(a) * 7.5); world.add(c); deco.push(c); }
        books.forEach((b, i) => { const k = (i + .5) / n, phi = Math.acos(1 - 2 * k), th = Math.PI * (1 + Math.sqrt(5)) * i; const r = 5.4; const m = bookMesh(b, 1.05); m.position.set(r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi) * .75 + .5, r * Math.sin(phi) * Math.sin(th)); m.lookAt(0, .5, 0); m.rotateY(Math.PI); items.push({ m, ph: i }); world.add(m); });
      } else { // bubble ring (ferris wheel)
        const hub = new THREE.Mesh(new THREE.TorusGeometry(5.6, .1, 12, 80), new THREE.MeshStandardMaterial({ color: 0x5EE7DF, metalness: .7, roughness: .2 })); hub.position.y = 2.6; world.add(hub); deco.push(hub);
        books.forEach((b, i) => { const a = (i / n) * Math.PI * 2; const g = new THREE.Group(); const bub = new THREE.Mesh(new THREE.SphereGeometry(1.5, 24, 24), new THREE.MeshPhysicalMaterial({ color: 0xBFEFFF, transparent: true, opacity: .18, roughness: 0, metalness: .1, clearcoat: 1 })); g.add(bub); const m = bookMesh(b, .95); g.add(m); g.position.set(Math.cos(a) * 5.6, 2.6 + Math.sin(a) * 5.6, 0); world.add(g); items.push({ m, g, a, ph: i }); });
      }
      captionEl.innerHTML = `<small>${t('layout' + layout[0].toUpperCase() + layout.slice(1))} · ${t('hintDrag')}</small>${cur.t[lang] || cur.t.KO}`;
    }
    canvas.addEventListener('pointerdown', (e) => { dragging = true; lx = e.clientX; canvas.style.cursor = 'grabbing'; });
    addEventListener('pointerup', () => { dragging = false; canvas.style.cursor = 'grab'; });
    canvas.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); if (dragging) { if (layout === 'carousel') targetZ -= (e.clientX - lx) * .03; else targetRot += (e.clientX - lx) * .008; lx = e.clientX; } tooltipEl.style.left = (e.clientX - r.left) + 'px'; tooltipEl.style.top = (e.clientY - r.top) + 'px'; });
    canvas.addEventListener('pointerleave', () => { mouse.set(-9, -9); tooltipEl.hidden = true; });
    canvas.addEventListener('click', (e) => { if (hovered) { burst(e.clientX, e.clientY); chime(); onPick(hovered.userData.book); } });
    function render(dt, el) {
      fit(renderer, camera, canvas);
      if (layout === 'carousel') {
        if (!dragging) targetZ -= dt * .9; if (targetZ < -26) targetZ += 30; camZ += (targetZ - camZ) * .06;
        camera.position.set(Math.sin(el * .3) * .4, .4, 12 + camZ); camera.lookAt(0, -.4, camZ - 6);
        items.forEach((it) => { it.m.position.y += Math.sin(el * 1.2 + it.ph) * .003; it.m.rotation.x = Math.sin(el + it.ph) * .05; });
        deco.forEach((d) => { if (d.userData.ph !== undefined) { d.position.x += Math.sin(el * .8 + d.userData.ph) * .01; d.position.z += dt * .6; if (d.position.z > 8) d.position.z = -26; } });
      } else {
        if (!dragging) targetRot += dt * .16; rotY += (targetRot - rotY) * .08;
        if (layout === 'stairs') { world.rotation.z = rotY; items.forEach((it) => { it.g.rotation.z = -rotY; it.g.position.y = 2.6 + Math.sin(it.a) * 5.6; }); camera.position.set(0, 2.6, 15); camera.lookAt(0, 2.6, 0); }
        else { world.rotation.y = rotY; items.forEach((it) => { it.m.position.y += Math.sin(el * 1.5 + it.ph) * .002; }); camera.position.set(0, 2.5, 15); camera.lookAt(0, .5, 0); }
      }
      ray.setFromCamera(mouse, camera); const hits = ray.intersectObjects(items.map((i) => i.m));
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

  /* ---------------- 10. Rising book bubbles (new arrivals 3D) ---------------- */
  const parade = (() => {
    const canvas = $('#parade-canvas'); const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x061A30, .045);
    const camera = new THREE.PerspectiveCamera(36, 2, .1, 100); camera.position.set(0, 0, 13); camera.lookAt(0, 0, 0);
    scene.add(new THREE.AmbientLight(0x2E6C8C, .7)); const dl = new THREE.DirectionalLight(0x9FE8FF, 1); dl.position.set(2, 10, 6); scene.add(dl); const pl = new THREE.PointLight(0xFF7A59, .6, 30); pl.position.set(-6, -4, 4); scene.add(pl);
    const items = NEW_IDS.map((id, i) => { const g = new THREE.Group(); const bub = new THREE.Mesh(new THREE.SphereGeometry(1.45, 24, 24), new THREE.MeshPhysicalMaterial({ color: 0xBFEFFF, transparent: true, opacity: .16, roughness: 0, clearcoat: 1 })); g.add(bub); const m = bookMesh(byId(id), .95); g.add(m); g.position.set(-9 + (i % 4) * 6 + (i > 3 ? 3 : 0), -6 + Math.random() * 12, i > 3 ? -3 : 0); g.userData = { sp: .6 + Math.random() * .6, ph: i }; scene.add(g); return { m, g }; });
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(-9, -9); let hovered = null;
    canvas.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); });
    canvas.addEventListener('pointerleave', () => mouse.set(-9, -9));
    canvas.addEventListener('click', (e) => { if (hovered) { burst(e.clientX, e.clientY); chime(); goDetail(hovered.userData.book); } });
    return { render(dt, el) {
      fit(renderer, camera, canvas);
      items.forEach((it) => { const u = it.g.userData; it.g.position.y += dt * u.sp; if (it.g.position.y > 7) it.g.position.y = -7; it.g.position.x += Math.sin(el * .8 + u.ph) * .006; it.m.rotation.y = Math.sin(el * .7 + u.ph) * .6; it.m.rotation.z = Math.sin(el * 1.1 + u.ph) * .1; });
      ray.setFromCamera(mouse, camera); const hits = ray.intersectObjects(items.map((i) => i.m)); const h = hits.length ? hits[0].object : null;
      if (h !== hovered) { if (hovered) hovered.scale.setScalar(1); hovered = h; if (h) h.scale.setScalar(1.15); canvas.style.cursor = h ? 'pointer' : 'default'; }
      renderer.render(scene, camera);
    } };
  })();

  /* ---------------- 11. Detail 3D book ---------------- */
  const detail3d = (() => {
    const canvas = $('#detail-canvas'); const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(32, 2, .1, 100); camera.position.set(0, .4, 6.2); camera.lookAt(0, 0, 0);
    scene.add(new THREE.AmbientLight(0x2E6C8C, .7)); const s = new THREE.SpotLight(0x9FE8FF, 1.6, 40, .7, .6); s.position.set(3, 7, 6); scene.add(s); const p = new THREE.PointLight(0xFF7A59, .8, 20); p.position.set(-4, 2, 3); scene.add(p);
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, .25, 48), new THREE.MeshPhysicalMaterial({ color: 0x5EE7DF, metalness: .3, roughness: .1, transparent: true, opacity: .5 })); pedestal.position.y = -1.6; scene.add(pedestal);
    let mesh = null, rot = 0, vel = .6, dragging = false, lx = 0;
    canvas.addEventListener('pointerdown', (e) => { dragging = true; lx = e.clientX; }); addEventListener('pointerup', () => { dragging = false; });
    canvas.addEventListener('pointermove', (e) => { if (dragging) { vel = (e.clientX - lx) * .25; lx = e.clientX; } });
    return { set(b) { if (mesh) scene.remove(mesh); mesh = bookMesh(b, 1.5); scene.add(mesh); }, render(dt, el) { fit(renderer, camera, canvas); if (mesh) { rot += vel * dt; if (!dragging) vel += (.6 - vel) * .04; mesh.rotation.y = rot; mesh.position.y = Math.sin(el * 1.2) * .08 - .2; } renderer.render(scene, camera); } };
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
  function saveCart() { localStorage.setItem('mlm18_cart', JSON.stringify(cart)); updateBadges(); if (currentPage === 'cart') renderCart(); }
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
  $('#lang-select').addEventListener('change', (e) => { lang = e.target.value; localStorage.setItem('mlm18_lang', lang); applyI18n(); });
  $('#librarian-toggle').addEventListener('change', (e) => { document.body.classList.toggle('librarian', e.target.checked); localStorage.setItem('mlm18_lib', e.target.checked ? '1' : '0'); });
  if (localStorage.getItem('mlm18_lib') === '1') { $('#librarian-toggle').checked = true; document.body.classList.add('librarian'); }
  $('#sound-toggle').addEventListener('click', () => { soundOn = !soundOn; localStorage.setItem('mlm18_sound', soundOn ? 'on' : 'off'); $('#sound-on').hidden = !soundOn; $('#sound-off').hidden = soundOn; });
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
    const ws = XLSX.utils.json_to_sheet(rows); const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, 'Quote'); XLSX.writeFile(wb, `library_quote_v18_${Date.now()}.xlsx`); toast(t('xlsxDone'));
  });

  /* ---------------- 16. Boot ---------------- */
  applyI18n(); route();
})();
