/* =====================================================================
   Multicultural Library Mall v17 — Grand Storybook Carousel
   Three.js hero carousel · 3D exhibition engine (carousel / balloon / stairs)
   6-language i18n · librarian mode · quote cart (print / xlsx)
   ===================================================================== */
(function () {
  'use strict';

  /* ---------------- 1. i18n ---------------- */
  const I18N = {
    KO: {
      brand: '다문화도서관 수서 몰', navHome: '메인', navSearch: '도서 검색', navCuration: '큐레이션', navCart: '공문 견적함', librarianMode: '사서 모드', cartBtn: '견적 장바구니',
      heroEyebrow: 'MULTICULTURAL LIBRARY COLLECTION · 2026', heroTitle: '세계의 이야기가<br>황금 회전목마에 올라탑니다', heroSub: '다문화 도서관을 위한 원서·이중언어 그림책 큐레이션. 사서를 위한 서지정보와 공문 견적을 한 화면에서.', heroCta1: '3D 전시실 입장', heroCta2: '도서 검색하기', statTitles: '보유 종수', statLangs: '지원 언어', statLibs: '납품 도서관', heroHint: '마우스를 움직여 회전목마를 돌려보세요',
      exhibEyebrow: '3D EXHIBITION HALL', exhibTitle: '황금 회전목마 기획전', exhibSub: '기획전마다 다른 진열 형태로 책을 만나보세요. 책을 클릭하면 상세로 이동합니다.',
      newEyebrow: 'NEW ARRIVALS', newTitle: '2026 하반기 신간', viewList: '서지 리스트', viewParade: '책 퍼레이드 3D', paradeCaption: '신간 도서가 무대 위를 행진합니다 — 클릭하면 상세로',
      libEyebrow: 'FOR LIBRARIANS', libTitle: '수서 담당 사서를 위한 1클릭 공문 견적', libSub: '장바구니에 담은 도서는 납품가(정가 10% 할인)로 자동 산출되어 공문 양식 견적서(인쇄/PDF)와 엑셀 사양서로 내려받을 수 있습니다.', libF1: '모든 카드에 상시 노출', libF2: '도서관 납품가 자동 적용', libF3: '공문 견적서 즉시 출력', libCta: '견적함 열기',
      searchEyebrow: 'BOOK SEARCH', searchTitle: '도서 검색 & 수서', searchSub: '언어·연령·KDC·출판사·가격으로 정밀 검색. ISBN 직접 입력도 가능합니다.', searchPlaceholder: '도서명, 저자, 출판사, ISBN, KDC 입력…', searchBtn: '검색', fLang: '언어', fAge: '대상 연령', fKdc: 'KDC 분류', fPub: '출판사', fPrice: '최대 정가', fReset: '필터 초기화', resultCount: '검색 결과',
      curEyebrow: 'CURATION EXHIBITIONS', curTitle: '기획전 3D 전시실', curSub: '회전목마·열기구·계단, 세 가지 3D 전시 형태의 기획전. 사서 패키지 일괄 담기를 지원합니다.',
      cartEyebrow: 'QUOTE CART', cartTitle: '장바구니 · 공문 견적함', cartSub: '납품가(정가 -10%) 기준으로 자동 산출됩니다. 기관 정보를 입력하면 공문 양식으로 출력됩니다.', cartClear: '전체 비우기', instTitle: '수서 기관 정보', instName: '기관명', instLibrarian: '담당 사서', instContact: '연락처', instEmail: '이메일', btnPrint: '공문 견적서 인쇄 / PDF', btnXlsx: '엑셀 사양서 다운로드',
      back: '← 목록으로', detailHint: '드래그하여 책을 360° 돌려보세요', related: '함께 보면 좋은 도서', footerDesc: '공공·학교 다문화 도서관 납품 전문 · 원서 및 이중언어 도서 · 사서 공문 견적 지원',
      all: '전체', ageInfant: '유아 (0–6)', ageChild: '아동 (7–12)', ageYouth: '청소년 (13+)', addCart: '견적함 담기', added: '견적함에 담았습니다', detail: '상세', supply: '납품가', listPrice: '정가',
      thCover: '표지', thInfo: '서지 정보', thLang: '언어', thAge: '연령', thKdc: 'KDC', thIsbn: 'ISBN', thList: '정가', thSupply: '납품가', thQty: '수량', thSubtotal: '합계', thPub: '출판사', remove: '삭제',
      statSelTitles: '선택 종수', statCopies: '총 권수', statList: '정가 합계', statSupply: '납품가 합계', emptyCart: '견적함이 비어 있습니다. 기획전이나 검색에서 도서를 담아보세요.', goSearch: '도서 검색으로', addAll: '기획전 전체 담기', curBooks: '수록 도서', curLayout: '전시 형태', curPrice: '패키지 납품가',
      layoutCarousel: '황금 회전목마', layoutBalloon: '열기구 갤러리', layoutStairs: '스토리북 계단', hintDrag: '드래그하여 회전 · 책 클릭 시 상세',
      pages: '쪽', year: '출판연도', binding: '양장/무선', publisher: '출판사', language: '언어', ageRange: '대상 연령', kdc: 'KDC', isbn: 'ISBN', total: '총 납품가', subtotal: '소계', discount: '도서관 할인(10%)', printTitle: '도서 납품 견적서', printMeta1: '수신', printMeta2: '담당', printMeta3: '연락처', printMeta4: '견적일', printSeal: '다문화도서관 수서 몰 (직인)', xlsxDone: '엑셀 사양서를 내려받았습니다', needInst: '기관명을 입력하면 공문에 반영됩니다', cleared: '견적함을 비웠습니다', removed: '삭제했습니다'
    },
    EN: {
      brand: 'Multicultural Library Mall', navHome: 'Home', navSearch: 'Search', navCuration: 'Curations', navCart: 'Quote Cart', librarianMode: 'Librarian', cartBtn: 'Quote Cart',
      heroEyebrow: 'MULTICULTURAL LIBRARY COLLECTION · 2026', heroTitle: 'Stories of the world<br>ride the golden carousel', heroSub: 'Original-language and bilingual picture books curated for multicultural libraries. Bibliographic data and official quotes for librarians, on one screen.', heroCta1: 'Enter 3D Hall', heroCta2: 'Search books', statTitles: 'Titles', statLangs: 'Languages', statLibs: 'Libraries served', heroHint: 'Move your mouse to spin the carousel',
      exhibEyebrow: '3D EXHIBITION HALL', exhibTitle: 'Golden Carousel Exhibitions', exhibSub: 'Every exhibition displays books in a different form. Click a book to open its detail.',
      newEyebrow: 'NEW ARRIVALS', newTitle: 'New Titles · Fall 2026', viewList: 'Bibliographic list', viewParade: 'Book Parade 3D', paradeCaption: 'New titles parade across the stage — click to open',
      libEyebrow: 'FOR LIBRARIANS', libTitle: 'One-click official quotes for acquisition librarians', libSub: 'Books in your cart are priced at library supply price (10% off list) and can be exported as an official quote (print/PDF) and an Excel spec sheet.', libF1: 'Always visible on every card', libF2: 'Library supply price applied', libF3: 'Official quote instantly', libCta: 'Open quote cart',
      searchEyebrow: 'BOOK SEARCH', searchTitle: 'Search & Acquire', searchSub: 'Filter by language, age, KDC, publisher and price. ISBN lookup supported.', searchPlaceholder: 'Title, author, publisher, ISBN, KDC…', searchBtn: 'Search', fLang: 'Language', fAge: 'Age range', fKdc: 'KDC class', fPub: 'Publisher', fPrice: 'Max list price', fReset: 'Reset filters', resultCount: 'Results',
      curEyebrow: 'CURATION EXHIBITIONS', curTitle: '3D Exhibition Halls', curSub: 'Carousel, balloon and staircase — three 3D display forms. Add a whole package to your cart in one click.',
      cartEyebrow: 'QUOTE CART', cartTitle: 'Cart · Official Quote', cartSub: 'Calculated at library supply price (-10%). Fill in institution details to print an official quote.', cartClear: 'Clear all', instTitle: 'Institution', instName: 'Institution', instLibrarian: 'Librarian', instContact: 'Phone', instEmail: 'Email', btnPrint: 'Print / PDF quote', btnXlsx: 'Download Excel spec',
      back: '← Back to list', detailHint: 'Drag to rotate the book 360°', related: 'You may also like', footerDesc: 'Supplying public & school multicultural libraries · Original & bilingual books · Official quotes for librarians',
      all: 'All', ageInfant: 'Infant (0–6)', ageChild: 'Children (7–12)', ageYouth: 'Youth (13+)', addCart: 'Add to quote', added: 'Added to quote cart', detail: 'Detail', supply: 'Supply', listPrice: 'List',
      thCover: 'Cover', thInfo: 'Bibliographic info', thLang: 'Lang', thAge: 'Age', thKdc: 'KDC', thIsbn: 'ISBN', thList: 'List', thSupply: 'Supply', thQty: 'Qty', thSubtotal: 'Subtotal', thPub: 'Publisher', remove: 'Remove',
      statSelTitles: 'Titles', statCopies: 'Copies', statList: 'List total', statSupply: 'Supply total', emptyCart: 'Your quote cart is empty. Add books from exhibitions or search.', goSearch: 'Go to search', addAll: 'Add whole exhibition', curBooks: 'Books', curLayout: 'Display form', curPrice: 'Package supply price',
      layoutCarousel: 'Golden Carousel', layoutBalloon: 'Balloon Gallery', layoutStairs: 'Storybook Staircase', hintDrag: 'Drag to rotate · click a book for detail',
      pages: 'pages', year: 'Year', binding: 'Binding', publisher: 'Publisher', language: 'Language', ageRange: 'Age range', kdc: 'KDC', isbn: 'ISBN', total: 'Total supply', subtotal: 'Subtotal', discount: 'Library discount (10%)', printTitle: 'Book Supply Quotation', printMeta1: 'To', printMeta2: 'Attn', printMeta3: 'Contact', printMeta4: 'Date', printSeal: 'Multicultural Library Mall (seal)', xlsxDone: 'Excel spec downloaded', needInst: 'Enter the institution name to include it in the quote', cleared: 'Cart cleared', removed: 'Removed'
    },
    VI: {
      brand: 'Thư viện Đa văn hóa Mall', navHome: 'Trang chủ', navSearch: 'Tìm sách', navCuration: 'Triển lãm', navCart: 'Giỏ báo giá', librarianMode: 'Thủ thư', cartBtn: 'Giỏ báo giá',
      heroEyebrow: 'BỘ SƯU TẬP THƯ VIỆN ĐA VĂN HÓA · 2026', heroTitle: 'Những câu chuyện thế giới<br>lên vòng quay ngựa gỗ vàng', heroSub: 'Sách tranh nguyên bản và song ngữ được tuyển chọn cho thư viện đa văn hóa. Thông tin thư mục và báo giá công văn cho thủ thư trên một màn hình.', heroCta1: 'Vào phòng 3D', heroCta2: 'Tìm sách', statTitles: 'Đầu sách', statLangs: 'Ngôn ngữ', statLibs: 'Thư viện', heroHint: 'Di chuyển chuột để quay vòng ngựa gỗ',
      exhibEyebrow: 'PHÒNG TRIỂN LÃM 3D', exhibTitle: 'Triển lãm Vòng quay Vàng', exhibSub: 'Mỗi triển lãm trưng bày sách theo hình thức khác nhau. Nhấp vào sách để xem chi tiết.',
      newEyebrow: 'SÁCH MỚI', newTitle: 'Sách mới · Cuối 2026', viewList: 'Danh sách thư mục', viewParade: 'Diễu hành sách 3D', paradeCaption: 'Sách mới diễu hành trên sân khấu — nhấp để mở',
      libEyebrow: 'DÀNH CHO THỦ THƯ', libTitle: 'Báo giá công văn một cú nhấp cho thủ thư', libSub: 'Sách trong giỏ được tính theo giá cung ứng thư viện (giảm 10%) và xuất ra báo giá (in/PDF) cùng bảng kê Excel.', libF1: 'Luôn hiển thị trên mọi thẻ', libF2: 'Áp dụng giá cung ứng thư viện', libF3: 'Xuất báo giá ngay', libCta: 'Mở giỏ báo giá',
      searchEyebrow: 'TÌM SÁCH', searchTitle: 'Tìm kiếm & Đặt mua', searchSub: 'Lọc theo ngôn ngữ, độ tuổi, KDC, nhà xuất bản và giá. Hỗ trợ tra ISBN.', searchPlaceholder: 'Tên sách, tác giả, NXB, ISBN, KDC…', searchBtn: 'Tìm', fLang: 'Ngôn ngữ', fAge: 'Độ tuổi', fKdc: 'Phân loại KDC', fPub: 'Nhà xuất bản', fPrice: 'Giá bìa tối đa', fReset: 'Đặt lại', resultCount: 'Kết quả',
      curEyebrow: 'TRIỂN LÃM TUYỂN CHỌN', curTitle: 'Phòng triển lãm 3D', curSub: 'Vòng quay, khinh khí cầu, cầu thang — ba hình thức trưng bày 3D. Thêm cả gói vào giỏ một lần.',
      cartEyebrow: 'GIỎ BÁO GIÁ', cartTitle: 'Giỏ hàng · Báo giá công văn', cartSub: 'Tính theo giá cung ứng thư viện (-10%). Nhập thông tin cơ quan để in báo giá.', cartClear: 'Xóa tất cả', instTitle: 'Thông tin cơ quan', instName: 'Tên cơ quan', instLibrarian: 'Thủ thư', instContact: 'Điện thoại', instEmail: 'Email', btnPrint: 'In / PDF báo giá', btnXlsx: 'Tải bảng kê Excel',
      back: '← Quay lại', detailHint: 'Kéo để xoay sách 360°', related: 'Sách liên quan', footerDesc: 'Cung ứng thư viện đa văn hóa công cộng & trường học · Sách nguyên bản & song ngữ · Báo giá cho thủ thư',
      all: 'Tất cả', ageInfant: 'Mẫu giáo (0–6)', ageChild: 'Thiếu nhi (7–12)', ageYouth: 'Thiếu niên (13+)', addCart: 'Thêm vào giỏ', added: 'Đã thêm vào giỏ báo giá', detail: 'Chi tiết', supply: 'Giá cung ứng', listPrice: 'Giá bìa',
      thCover: 'Bìa', thInfo: 'Thông tin thư mục', thLang: 'Ngôn ngữ', thAge: 'Tuổi', thKdc: 'KDC', thIsbn: 'ISBN', thList: 'Giá bìa', thSupply: 'Giá CƯ', thQty: 'SL', thSubtotal: 'Thành tiền', thPub: 'NXB', remove: 'Xóa',
      statSelTitles: 'Đầu sách', statCopies: 'Số cuốn', statList: 'Tổng giá bìa', statSupply: 'Tổng cung ứng', emptyCart: 'Giỏ báo giá trống. Hãy thêm sách từ triển lãm hoặc tìm kiếm.', goSearch: 'Đi tìm sách', addAll: 'Thêm cả triển lãm', curBooks: 'Sách', curLayout: 'Hình thức', curPrice: 'Giá gói cung ứng',
      layoutCarousel: 'Vòng quay Vàng', layoutBalloon: 'Khinh khí cầu', layoutStairs: 'Cầu thang truyện', hintDrag: 'Kéo để xoay · nhấp sách để xem',
      pages: 'trang', year: 'Năm XB', binding: 'Bìa', publisher: 'NXB', language: 'Ngôn ngữ', ageRange: 'Độ tuổi', kdc: 'KDC', isbn: 'ISBN', total: 'Tổng cung ứng', subtotal: 'Tạm tính', discount: 'Giảm thư viện (10%)', printTitle: 'Báo giá cung ứng sách', printMeta1: 'Kính gửi', printMeta2: 'Người nhận', printMeta3: 'Liên hệ', printMeta4: 'Ngày', printSeal: 'Multicultural Library Mall (dấu)', xlsxDone: 'Đã tải bảng kê Excel', needInst: 'Nhập tên cơ quan để đưa vào báo giá', cleared: 'Đã xóa giỏ', removed: 'Đã xóa'
    },
    ZH: {
      brand: '多文化图书馆采购商城', navHome: '首页', navSearch: '图书检索', navCuration: '策展', navCart: '公文报价单', librarianMode: '馆员模式', cartBtn: '报价购物车',
      heroEyebrow: '多文化图书馆馆藏 · 2026', heroTitle: '世界的故事<br>登上金色旋转木马', heroSub: '为多文化图书馆精选的原版与双语绘本。馆员所需的书目信息与公文报价，一屏搞定。', heroCta1: '进入3D展厅', heroCta2: '检索图书', statTitles: '藏书种数', statLangs: '支持语言', statLibs: '供货图书馆', heroHint: '移动鼠标转动旋转木马',
      exhibEyebrow: '3D 展厅', exhibTitle: '金色旋转木马特展', exhibSub: '每个特展以不同形式陈列图书。点击图书查看详情。',
      newEyebrow: '新书上架', newTitle: '2026 下半年新书', viewList: '书目列表', viewParade: '图书巡游 3D', paradeCaption: '新书在舞台上巡游 — 点击查看',
      libEyebrow: '馆员专区', libTitle: '为采购馆员提供一键公文报价', libSub: '购物车中的图书按馆配价（定价9折）自动计算，可导出公文格式报价单（打印/PDF）及Excel清单。', libF1: '所有卡片常显', libF2: '自动应用馆配价', libF3: '即时导出公文报价', libCta: '打开报价单',
      searchEyebrow: '图书检索', searchTitle: '检索与采购', searchSub: '按语言、年龄、KDC、出版社、价格精确筛选，支持ISBN直接输入。', searchPlaceholder: '书名、作者、出版社、ISBN、KDC…', searchBtn: '检索', fLang: '语言', fAge: '适读年龄', fKdc: 'KDC 分类', fPub: '出版社', fPrice: '最高定价', fReset: '重置筛选', resultCount: '检索结果',
      curEyebrow: '策展特展', curTitle: '特展 3D 展厅', curSub: '旋转木马、热气球、阶梯——三种3D陈列形式。支持一键加入整套馆员套餐。',
      cartEyebrow: '报价购物车', cartTitle: '购物车 · 公文报价单', cartSub: '按馆配价（定价-10%）自动计算。填写机构信息后可按公文格式输出。', cartClear: '清空', instTitle: '采购机构信息', instName: '机构名称', instLibrarian: '负责馆员', instContact: '联系电话', instEmail: '邮箱', btnPrint: '打印 / PDF 报价单', btnXlsx: '下载Excel清单',
      back: '← 返回列表', detailHint: '拖动可360°旋转图书', related: '相关推荐', footerDesc: '公共及学校多文化图书馆供货 · 原版及双语图书 · 馆员公文报价支持',
      all: '全部', ageInfant: '幼儿 (0–6)', ageChild: '儿童 (7–12)', ageYouth: '青少年 (13+)', addCart: '加入报价单', added: '已加入报价单', detail: '详情', supply: '馆配价', listPrice: '定价',
      thCover: '封面', thInfo: '书目信息', thLang: '语言', thAge: '年龄', thKdc: 'KDC', thIsbn: 'ISBN', thList: '定价', thSupply: '馆配价', thQty: '数量', thSubtotal: '小计', thPub: '出版社', remove: '删除',
      statSelTitles: '已选种数', statCopies: '总册数', statList: '定价合计', statSupply: '馆配价合计', emptyCart: '报价单为空。请从特展或检索中添加图书。', goSearch: '去检索', addAll: '加入整个特展', curBooks: '收录图书', curLayout: '陈列形式', curPrice: '套餐馆配价',
      layoutCarousel: '金色旋转木马', layoutBalloon: '热气球画廊', layoutStairs: '故事书阶梯', hintDrag: '拖动旋转 · 点击图书查看详情',
      pages: '页', year: '出版年', binding: '装帧', publisher: '出版社', language: '语言', ageRange: '适读年龄', kdc: 'KDC', isbn: 'ISBN', total: '馆配总价', subtotal: '小计', discount: '图书馆折扣(10%)', printTitle: '图书供货报价单', printMeta1: '致', printMeta2: '经办', printMeta3: '联系', printMeta4: '日期', printSeal: '多文化图书馆采购商城（印）', xlsxDone: '已下载Excel清单', needInst: '填写机构名称后将体现在公文中', cleared: '已清空', removed: '已删除'
    },
    RU: {
      brand: 'Мультикультурная библиотека', navHome: 'Главная', navSearch: 'Поиск книг', navCuration: 'Выставки', navCart: 'Смета', librarianMode: 'Библиотекарь', cartBtn: 'Корзина сметы',
      heroEyebrow: 'КОЛЛЕКЦИЯ МУЛЬТИКУЛЬТУРНОЙ БИБЛИОТЕКИ · 2026', heroTitle: 'Истории мира<br>садятся на золотую карусель', heroSub: 'Оригинальные и двуязычные книжки-картинки для мультикультурных библиотек. Библиографические данные и официальная смета для библиотекаря на одном экране.', heroCta1: 'Войти в 3D-зал', heroCta2: 'Искать книги', statTitles: 'Наименований', statLangs: 'Языков', statLibs: 'Библиотек', heroHint: 'Двигайте мышью, чтобы вращать карусель',
      exhibEyebrow: '3D ВЫСТАВОЧНЫЙ ЗАЛ', exhibTitle: 'Выставки золотой карусели', exhibSub: 'Каждая выставка показывает книги по-своему. Нажмите на книгу, чтобы открыть карточку.',
      newEyebrow: 'НОВИНКИ', newTitle: 'Новинки · осень 2026', viewList: 'Библиографический список', viewParade: 'Парад книг 3D', paradeCaption: 'Новинки маршируют по сцене — нажмите, чтобы открыть',
      libEyebrow: 'ДЛЯ БИБЛИОТЕКАРЕЙ', libTitle: 'Официальная смета в один клик', libSub: 'Книги в корзине рассчитываются по библиотечной цене (скидка 10%) и экспортируются как официальная смета (печать/PDF) и спецификация Excel.', libF1: 'Всегда видны на карточке', libF2: 'Библиотечная цена применена', libF3: 'Смета мгновенно', libCta: 'Открыть смету',
      searchEyebrow: 'ПОИСК КНИГ', searchTitle: 'Поиск и комплектование', searchSub: 'Фильтры по языку, возрасту, KDC, издательству и цене. Поиск по ISBN.', searchPlaceholder: 'Название, автор, издательство, ISBN, KDC…', searchBtn: 'Поиск', fLang: 'Язык', fAge: 'Возраст', fKdc: 'Класс KDC', fPub: 'Издательство', fPrice: 'Макс. цена', fReset: 'Сбросить', resultCount: 'Результаты',
      curEyebrow: 'КУРАТОРСКИЕ ВЫСТАВКИ', curTitle: '3D выставочные залы', curSub: 'Карусель, воздушные шары и лестница — три формы 3D-показа. Добавьте весь пакет одним кликом.',
      cartEyebrow: 'КОРЗИНА СМЕТЫ', cartTitle: 'Корзина · Официальная смета', cartSub: 'Расчёт по библиотечной цене (-10%). Заполните данные учреждения для печати сметы.', cartClear: 'Очистить', instTitle: 'Учреждение', instName: 'Название', instLibrarian: 'Библиотекарь', instContact: 'Телефон', instEmail: 'Email', btnPrint: 'Печать / PDF сметы', btnXlsx: 'Скачать Excel',
      back: '← К списку', detailHint: 'Перетащите, чтобы вращать книгу на 360°', related: 'Похожие книги', footerDesc: 'Поставки в публичные и школьные мультикультурные библиотеки · Оригинальные и двуязычные книги · Сметы для библиотекарей',
      all: 'Все', ageInfant: 'Малыши (0–6)', ageChild: 'Дети (7–12)', ageYouth: 'Подростки (13+)', addCart: 'В смету', added: 'Добавлено в смету', detail: 'Подробнее', supply: 'Библ. цена', listPrice: 'Цена',
      thCover: 'Обложка', thInfo: 'Библиография', thLang: 'Язык', thAge: 'Возраст', thKdc: 'KDC', thIsbn: 'ISBN', thList: 'Цена', thSupply: 'Библ. цена', thQty: 'Кол-во', thSubtotal: 'Сумма', thPub: 'Изд-во', remove: 'Удалить',
      statSelTitles: 'Наименований', statCopies: 'Экземпляров', statList: 'Итого по цене', statSupply: 'Итого библ.', emptyCart: 'Корзина пуста. Добавьте книги из выставок или поиска.', goSearch: 'К поиску', addAll: 'Добавить всю выставку', curBooks: 'Книг', curLayout: 'Форма показа', curPrice: 'Цена пакета',
      layoutCarousel: 'Золотая карусель', layoutBalloon: 'Галерея шаров', layoutStairs: 'Сказочная лестница', hintDrag: 'Перетащите для вращения · клик по книге',
      pages: 'стр.', year: 'Год', binding: 'Переплёт', publisher: 'Издательство', language: 'Язык', ageRange: 'Возраст', kdc: 'KDC', isbn: 'ISBN', total: 'Итого', subtotal: 'Подытог', discount: 'Скидка библиотеке (10%)', printTitle: 'Смета на поставку книг', printMeta1: 'Кому', printMeta2: 'Вниманию', printMeta3: 'Контакт', printMeta4: 'Дата', printSeal: 'Multicultural Library Mall (печать)', xlsxDone: 'Excel загружен', needInst: 'Укажите учреждение для сметы', cleared: 'Корзина очищена', removed: 'Удалено'
    },
    JA: {
      brand: '多文化図書館 選書モール', navHome: 'ホーム', navSearch: '図書検索', navCuration: 'キュレーション', navCart: '公文見積', librarianMode: '司書モード', cartBtn: '見積カート',
      heroEyebrow: '多文化図書館コレクション · 2026', heroTitle: '世界の物語が<br>黄金のメリーゴーランドに乗る', heroSub: '多文化図書館のための原書・バイリンガル絵本キュレーション。司書のための書誌情報と公文見積をひとつの画面で。', heroCta1: '3D展示室へ', heroCta2: '図書を検索', statTitles: '所蔵点数', statLangs: '対応言語', statLibs: '納入図書館', heroHint: 'マウスを動かしてメリーゴーランドを回そう',
      exhibEyebrow: '3D 展示ホール', exhibTitle: '黄金のメリーゴーランド企画展', exhibSub: '企画展ごとに異なる陳列形式。本をクリックすると詳細へ。',
      newEyebrow: '新刊', newTitle: '2026 下半期 新刊', viewList: '書誌リスト', viewParade: 'ブックパレード 3D', paradeCaption: '新刊が舞台をパレード — クリックで詳細',
      libEyebrow: '司書のために', libTitle: '選書担当司書のためのワンクリック公文見積', libSub: 'カートの図書は納入価（定価10%引）で自動計算され、公文形式の見積書（印刷/PDF）とExcel仕様書に出力できます。', libF1: 'すべてのカードに常時表示', libF2: '図書館納入価を自動適用', libF3: '公文見積を即時出力', libCta: '見積カートを開く',
      searchEyebrow: '図書検索', searchTitle: '図書検索 & 選書', searchSub: '言語・年齢・KDC・出版社・価格で精密検索。ISBN直接入力も可能。', searchPlaceholder: '書名、著者、出版社、ISBN、KDC…', searchBtn: '検索', fLang: '言語', fAge: '対象年齢', fKdc: 'KDC分類', fPub: '出版社', fPrice: '最大定価', fReset: 'リセット', resultCount: '検索結果',
      curEyebrow: 'キュレーション企画展', curTitle: '企画展 3D 展示室', curSub: 'メリーゴーランド・熱気球・階段、3つの3D陳列形式。パッケージ一括カート追加に対応。',
      cartEyebrow: '見積カート', cartTitle: 'カート · 公文見積', cartSub: '納入価（定価-10%）で自動計算。機関情報を入力すると公文形式で出力できます。', cartClear: 'すべて削除', instTitle: '選書機関情報', instName: '機関名', instLibrarian: '担当司書', instContact: '連絡先', instEmail: 'メール', btnPrint: '公文見積書 印刷 / PDF', btnXlsx: 'Excel仕様書ダウンロード',
      back: '← 一覧へ', detailHint: 'ドラッグして本を360°回転', related: 'あわせて読みたい', footerDesc: '公共・学校の多文化図書館納入専門 · 原書およびバイリンガル図書 · 司書向け公文見積対応',
      all: 'すべて', ageInfant: '乳幼児 (0–6)', ageChild: '児童 (7–12)', ageYouth: 'ヤングアダルト (13+)', addCart: '見積に追加', added: '見積カートに追加しました', detail: '詳細', supply: '納入価', listPrice: '定価',
      thCover: '表紙', thInfo: '書誌情報', thLang: '言語', thAge: '年齢', thKdc: 'KDC', thIsbn: 'ISBN', thList: '定価', thSupply: '納入価', thQty: '数量', thSubtotal: '小計', thPub: '出版社', remove: '削除',
      statSelTitles: '選択点数', statCopies: '総冊数', statList: '定価合計', statSupply: '納入価合計', emptyCart: '見積カートは空です。企画展や検索から図書を追加してください。', goSearch: '図書検索へ', addAll: '企画展をすべて追加', curBooks: '収録図書', curLayout: '陳列形式', curPrice: 'パッケージ納入価',
      layoutCarousel: '黄金のメリーゴーランド', layoutBalloon: '熱気球ギャラリー', layoutStairs: '絵本の階段', hintDrag: 'ドラッグで回転 · 本をクリックで詳細',
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
    { id: 'c1', layout: 'carousel', t: { KO: '세계 동화 회전목마전', EN: 'World Tales Carousel', VI: 'Vòng quay Cổ tích Thế giới', ZH: '世界童话旋转木马展', RU: 'Карусель сказок мира', JA: '世界の童話メリーゴーランド展' }, d: { KO: '아시아·유럽 전래동화를 회전목마 좌석에 앉혀 한 바퀴 돌아봅니다.', EN: 'Folk tales from Asia and Europe seated on a golden carousel.', VI: 'Cổ tích Á–Âu ngồi trên vòng quay ngựa gỗ vàng.', ZH: '亚洲与欧洲的民间故事坐上金色旋转木马。', RU: 'Сказки Азии и Европы на золотой карусели.', JA: 'アジアとヨーロッパの民話が黄金の回転木馬に。' }, books: ['b01', 'b02', 'b03', 'b07', 'b08', 'b06', 'b12', 'b05'] },
    { id: 'c2', layout: 'balloon', t: { KO: '이중언어 그림책 열기구전', EN: 'Bilingual Picture Book Balloons', VI: 'Khinh khí cầu Sách song ngữ', ZH: '双语绘本热气球展', RU: 'Двуязычные книжки на шарах', JA: 'バイリンガル絵本 熱気球展' }, d: { KO: '두 언어로 읽는 그림책이 열기구를 타고 떠오릅니다. 다문화 가정 첫 책 추천.', EN: 'Picture books read in two languages float up on balloons. First books for multicultural families.', VI: 'Sách tranh song ngữ bay lên cùng khinh khí cầu.', ZH: '双语绘本乘着热气球升空。多文化家庭的第一本书。', RU: 'Двуязычные книжки взлетают на шарах.', JA: '二つの言語で読む絵本が熱気球で浮かぶ。' }, books: ['b05', 'b10', 'b01', 'b08', 'b06', 'b12'] },
    { id: 'c3', layout: 'stairs', t: { KO: '청소년 세계문학 계단전', EN: 'Youth World Literature Staircase', VI: 'Cầu thang Văn học Thiếu niên', ZH: '青少年世界文学阶梯展', RU: 'Лестница мировой литературы', JA: 'YA世界文学 階段展' }, d: { KO: '한 계단씩 올라가며 만나는 청소년 소설과 논픽션. 학교도서관 추천 패키지.', EN: 'Youth novels and non-fiction met step by step. Recommended for school libraries.', VI: 'Tiểu thuyết và phi hư cấu cho thiếu niên, từng bậc thang.', ZH: '拾级而上遇见青少年小说与非虚构。学校图书馆推荐。', RU: 'Подростковые романы и нон-фикшн, ступень за ступенью.', JA: '一段ずつ出会うYA小説とノンフィクション。' }, books: ['b04', 'b09', 'b11', 'b03', 'b07', 'b02', 'b12'] }
  ];
  const NEW_IDS = ['b01', 'b02', 'b04', 'b05', 'b07', 'b09', 'b10', 'b12'];
  const SUPPLY = 0.9;

  /* ---------------- 3. State ---------------- */
  let lang = localStorage.getItem('mlm17_lang') || 'KO';
  let soundOn = localStorage.getItem('mlm17_sound') !== 'off';
  let cart = JSON.parse(localStorage.getItem('mlm17_cart') || '{}');
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

  /* ---------------- 5. FX: sparkles + music-box chime ---------------- */
  const fx = $('#fx-canvas'); const fxg = fx.getContext('2d'); let parts = [];
  function sizeFx() { fx.width = innerWidth * devicePixelRatio; fx.height = innerHeight * devicePixelRatio; fxg.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); }
  sizeFx(); addEventListener('resize', sizeFx);
  function burst(x, y) {
    for (let i = 0; i < 26; i++) {
      const a = Math.random() * Math.PI * 2, s = 2 + Math.random() * 5;
      parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 2, life: 1, r: 2 + Math.random() * 3, star: Math.random() < .55, c: Math.random() < .7 ? '#C9A961' : '#E8B4B8', rot: Math.random() * 6 });
    }
  }
  function drawStar(x, y, r, rot) { fxg.beginPath(); for (let i = 0; i < 8; i++) { const rr = i % 2 ? r * .45 : r; const a = rot + i * Math.PI / 4; fxg.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } fxg.closePath(); fxg.fill(); }
  (function fxLoop() {
    fxg.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter((p) => p.life > 0);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy; p.vy += .12; p.vx *= .98; p.life -= .022; p.rot += .1;
      fxg.globalAlpha = Math.max(0, p.life); fxg.fillStyle = p.c;
      if (p.star) drawStar(p.x, p.y, p.r * 1.6, p.rot); else { fxg.beginPath(); fxg.arc(p.x, p.y, Math.max(0, p.r * p.life), 0, Math.PI * 2); fxg.fill(); }
    }
    fxg.globalAlpha = 1; requestAnimationFrame(fxLoop);
  })();
  let actx;
  function chime() {
    if (!soundOn) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const notes = [1046.5, 1318.5, 1568]; const now = actx.currentTime;
      notes.forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain(); o.type = 'triangle'; o.frequency.value = f;
        g.gain.setValueAtTime(0, now + i * .07); g.gain.linearRampToValueAtTime(.16, now + i * .07 + .01); g.gain.exponentialRampToValueAtTime(.0001, now + i * .07 + .9);
        o.connect(g).connect(actx.destination); o.start(now + i * .07); o.stop(now + i * .07 + 1);
      });
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

  /* ---------------- 8. Hero carousel ---------------- */
  const hero = (() => {
    const canvas = $('#hero-canvas'); const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); scene.fog = new THREE.Fog(0xEFE2C9, 18, 40);
    const camera = new THREE.PerspectiveCamera(44, 2, .1, 100); camera.position.set(6, 3.2, 14);
    scene.add(new THREE.HemisphereLight(0xFFF6E5, 0xC9A961, .9));
    const key = new THREE.DirectionalLight(0xFFF2D6, 1.25); key.position.set(8, 12, 8); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); scene.add(key);
    const warm = new THREE.PointLight(0xE8B4B8, .8, 30); warm.position.set(-6, 4, 6); scene.add(warm);
    const gold = new THREE.MeshStandardMaterial({ color: 0xC9A961, metalness: .85, roughness: .25 });
    const burg = new THREE.MeshStandardMaterial({ color: 0x6B1F2E, roughness: .5 });
    const rose = new THREE.MeshStandardMaterial({ color: 0xE8B4B8, roughness: .6 });
    const group = new THREE.Group(); group.position.set(3.2, -2.4, 0); scene.add(group);
    // floor
    const floor = new THREE.Mesh(new THREE.CircleGeometry(7, 64), new THREE.MeshStandardMaterial({ color: 0xE9D6B4, roughness: 1 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -.05; floor.receiveShadow = true; group.add(floor);
    // platform & pole & roof
    const plat = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.4, .35, 48), burg); plat.receiveShadow = true; group.add(plat);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(5.3, .08, 12, 64), gold); rim.rotation.x = Math.PI / 2; rim.position.y = .2; group.add(rim);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(.18, .22, 6.4, 24), gold); pole.position.y = 3.3; group.add(pole);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(5.8, 2.2, 16, 1, true), burg); roof.position.y = 7.4; group.add(roof);
    for (let i = 0; i < 16; i++) { const s = new THREE.Mesh(new THREE.ConeGeometry(5.9, 2.25, 16, 1, true, i * Math.PI / 8, Math.PI / 16), i % 2 ? rose : gold); s.position.y = 7.38; group.add(s); }
    const finial = new THREE.Mesh(new THREE.SphereGeometry(.4, 24, 24), gold); finial.position.y = 8.7; group.add(finial);
    const roofRim = new THREE.Mesh(new THREE.TorusGeometry(5.8, .1, 12, 64), gold); roofRim.rotation.x = Math.PI / 2; roofRim.position.y = 6.3; group.add(roofRim);
    // seats: books on poles
    const spinner = new THREE.Group(); group.add(spinner);
    const seats = [];
    BOOKS.slice(0, 10).forEach((b, i) => {
      const a = (i / 10) * Math.PI * 2, r = 4.1;
      const p = new THREE.Mesh(new THREE.CylinderGeometry(.05, .05, 6, 10), gold); p.position.set(Math.cos(a) * r, 3.2, Math.sin(a) * r); spinner.add(p);
      const m = bookMesh(b, 1.05); m.position.set(Math.cos(a) * r, 2.2, Math.sin(a) * r); m.rotation.y = -a + Math.PI / 2; m.rotation.z = .12; spinner.add(m);
      seats.push({ m, phase: i * .7 });
    });
    // balloons
    const balloons = [];
    for (let i = 0; i < 6; i++) {
      const g = new THREE.Group();
      const env = new THREE.Mesh(new THREE.SphereGeometry(.9, 24, 24), new THREE.MeshStandardMaterial({ color: [0x6B1F2E, 0xC9A961, 0xE8B4B8, 0x2F5D62, 0xE76F51, 0xF7D488][i], roughness: .5 })); env.scale.y = 1.15; g.add(env);
      const basket = new THREE.Mesh(new THREE.BoxGeometry(.4, .3, .4), new THREE.MeshStandardMaterial({ color: 0x8B5A2B })); basket.position.y = -1.5; g.add(basket);
      for (let k = 0; k < 4; k++) { const rope = new THREE.Mesh(new THREE.CylinderGeometry(.01, .01, .8), gold); rope.position.set(k < 2 ? -.15 : .15, -1.1, k % 2 ? -.15 : .15); g.add(rope); }
      g.position.set(-8 + Math.random() * 16, 4 + Math.random() * 6, -10 - Math.random() * 8); g.userData = { sp: .15 + Math.random() * .2, ph: Math.random() * 6, x0: g.position.x };
      scene.add(g); balloons.push(g);
    }
    // confetti
    const N = 400, pos = new Float32Array(N * 3), col = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) { pos[i * 3] = (Math.random() - .5) * 30; pos[i * 3 + 1] = Math.random() * 14; pos[i * 3 + 2] = (Math.random() - .5) * 20; const c = new THREE.Color(Math.random() < .6 ? 0xC9A961 : 0xE8B4B8); col.set([c.r, c.g, c.b], i * 3); }
    const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); pg.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const pts = new THREE.Points(pg, new THREE.PointsMaterial({ size: .09, vertexColors: true, transparent: true, opacity: .85 })); scene.add(pts);
    let mx = 0, my = 0, tx = 0, ty = 0;
    $('.hero').addEventListener('mousemove', (e) => { const r = e.currentTarget.getBoundingClientRect(); tx = ((e.clientX - r.left) / r.width - .5) * 2; ty = ((e.clientY - r.top) / r.height - .5) * 2; });
    let spin = 0;
    return { render(dt, el) {
      fit(renderer, camera, canvas);
      mx += (tx - mx) * .04; my += (ty - my) * .04;
      spin += dt * (.35 + Math.abs(mx) * .9);
      spinner.rotation.y = spin;
      seats.forEach((s) => { s.m.position.y = 2.2 + Math.sin(el * 1.6 + s.phase) * .35; });
      camera.position.x = 6 + mx * 2.2; camera.position.y = 3.2 - my * 1.2; camera.lookAt(3.2, 1.6, 0);
      balloons.forEach((b) => { b.position.y += Math.sin(el * b.userData.sp + b.userData.ph) * .004; b.position.x = b.userData.x0 + Math.sin(el * .2 + b.userData.ph) * 1.2; b.rotation.y += dt * .1; });
      const a = pg.attributes.position.array; for (let i = 0; i < N; i++) { a[i * 3 + 1] -= dt * .5; if (a[i * 3 + 1] < -1) a[i * 3 + 1] = 14; a[i * 3] += Math.sin(el + i) * .003; } pg.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    } };
  })();

  /* ---------------- 9. Exhibition engine ---------------- */
  function Exhibition(canvas, captionEl, tooltipEl, onPick) {
    const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x22090F, .035);
    const camera = new THREE.PerspectiveCamera(42, 2, .1, 100); camera.position.set(0, 4, 15);
    scene.add(new THREE.AmbientLight(0xFFE9D0, .55));
    const spot = new THREE.SpotLight(0xFFF0D8, 1.6, 60, .6, .5); spot.position.set(0, 14, 8); spot.castShadow = true; scene.add(spot);
    const fill = new THREE.PointLight(0xE8B4B8, .7, 40); fill.position.set(-10, 5, 5); scene.add(fill);
    const rim = new THREE.PointLight(0xC9A961, .9, 40); rim.position.set(10, 6, -6); scene.add(rim);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(16, 64), new THREE.MeshStandardMaterial({ color: 0x3A1520, roughness: .35, metalness: .2 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -.5; floor.receiveShadow = true; scene.add(floor);
    const ring = new THREE.Mesh(new THREE.RingGeometry(7.8, 8, 64), new THREE.MeshBasicMaterial({ color: 0xC9A961, transparent: true, opacity: .5, side: THREE.DoubleSide })); ring.rotation.x = -Math.PI / 2; ring.position.y = -.48; scene.add(ring);
    const gold = new THREE.MeshStandardMaterial({ color: 0xC9A961, metalness: .85, roughness: .25 });
    const world = new THREE.Group(); scene.add(world);
    let items = [], deco = [], layout = 'carousel', rotY = 0, targetRot = 0, dragging = false, lx = 0, hovered = null, cur = null;
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(-9, -9);
    function clear() { items.forEach((i) => world.remove(i.m)); deco.forEach((d) => world.remove(d)); items = []; deco = []; }
    function set(curation) {
      cur = curation; clear(); layout = curation.layout;
      const books = curation.books.map(byId); const n = books.length;
      if (layout === 'carousel') {
        const plat = new THREE.Mesh(new THREE.CylinderGeometry(6.2, 6.4, .3, 48), new THREE.MeshStandardMaterial({ color: 0x6B1F2E, roughness: .5 })); plat.position.y = -.35; world.add(plat); deco.push(plat);
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(.14, .18, 7, 20), gold); pole.position.y = 3; world.add(pole); deco.push(pole);
        const roof = new THREE.Mesh(new THREE.ConeGeometry(6.8, 2, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0x8A2B3D, side: THREE.DoubleSide })); roof.position.y = 7.2; world.add(roof); deco.push(roof);
        books.forEach((b, i) => { const a = (i / n) * Math.PI * 2; const m = bookMesh(b, 1.15); m.position.set(Math.cos(a) * 4.8, 1.2 + (i % 2) * .8, Math.sin(a) * 4.8); m.rotation.y = -a + Math.PI / 2; items.push({ m, a, ph: i }); world.add(m); const p = new THREE.Mesh(new THREE.CylinderGeometry(.04, .04, 6.6, 8), gold); p.position.set(Math.cos(a) * 4.8, 2.9, Math.sin(a) * 4.8); world.add(p); deco.push(p); });
      } else if (layout === 'balloon') {
        books.forEach((b, i) => {
          const g = new THREE.Group(); const col = [0x6B1F2E, 0xC9A961, 0xE8B4B8, 0x2F5D62, 0xE76F51, 0xF7D488][i % 6];
          const env = new THREE.Mesh(new THREE.SphereGeometry(1.1, 24, 24), new THREE.MeshStandardMaterial({ color: col, roughness: .45 })); env.scale.y = 1.2; env.position.y = 3.1; g.add(env);
          for (let k = 0; k < 3; k++) { const r = new THREE.Mesh(new THREE.CylinderGeometry(.012, .012, 1.6), gold); r.position.set((k - 1) * .35, 1.85, 0); g.add(r); }
          const m = bookMesh(b, 1.1); g.add(m); m.position.y = 0;
          const cols = 4, row = Math.floor(i / cols), c = i % cols; g.position.set((c - (cols - 1) / 2) * 3.4, row * -1.2 + 1.2, row * -3.5 + 1.5);
          g.userData.ph = i * 1.3; world.add(g); items.push({ m, g, ph: i * 1.3 });
        });
      } else {
        books.forEach((b, i) => {
          const a = i * .78, r = 4.6, y = i * .72 - .2;
          const step = new THREE.Mesh(new THREE.BoxGeometry(2.6, .28, 1.6), new THREE.MeshStandardMaterial({ color: 0x6B1F2E, roughness: .5 })); step.position.set(Math.cos(a) * r, y - .3, Math.sin(a) * r); step.rotation.y = -a; step.receiveShadow = true; world.add(step); deco.push(step);
          const trim = new THREE.Mesh(new THREE.BoxGeometry(2.62, .04, 1.62), gold); trim.position.copy(step.position); trim.position.y += .16; trim.rotation.y = -a; world.add(trim); deco.push(trim);
          const m = bookMesh(b, 1.05); m.position.set(Math.cos(a) * r, y + .85, Math.sin(a) * r); m.rotation.y = -a + Math.PI / 2; m.rotation.x = -.1; items.push({ m, ph: i }); world.add(m);
        });
        const core = new THREE.Mesh(new THREE.CylinderGeometry(.5, .6, 8, 24), gold); core.position.y = 3; world.add(core); deco.push(core);
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
      if (!dragging) targetRot += dt * .18;
      rotY += (targetRot - rotY) * .08; world.rotation.y = rotY;
      if (layout === 'balloon') { items.forEach((it) => { it.g.position.y += Math.sin(el * .9 + it.ph) * .004; it.g.rotation.y = Math.sin(el * .4 + it.ph) * .25; }); camera.position.set(0, 2.4, 14); camera.lookAt(0, 1.4, 0); }
      else if (layout === 'stairs') { items.forEach((it) => { it.m.position.y += Math.sin(el * 1.4 + it.ph) * .002; }); camera.position.set(0, 5.5, 15); camera.lookAt(0, 2.4, 0); }
      else { items.forEach((it) => { it.m.position.y = 1.2 + (it.ph % 2) * .8 + Math.sin(el * 1.6 + it.ph) * .3; }); camera.position.set(0, 4, 15); camera.lookAt(0, 2.2, 0); }
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

  /* ---------------- 10. Parade (new arrivals 3D) ---------------- */
  const parade = (() => {
    const canvas = $('#parade-canvas'); const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(34, 2, .1, 100); camera.position.set(0, 2.6, 12); camera.lookAt(0, 1, 0);
    scene.add(new THREE.HemisphereLight(0xFFF6E5, 0xC9A961, 1)); const dl = new THREE.DirectionalLight(0xffffff, .9); dl.position.set(4, 10, 6); dl.castShadow = true; scene.add(dl);
    const stage = new THREE.Mesh(new THREE.BoxGeometry(40, .4, 6), new THREE.MeshStandardMaterial({ color: 0x6B1F2E, roughness: .5 })); stage.position.y = -.3; stage.receiveShadow = true; scene.add(stage);
    const trim = new THREE.Mesh(new THREE.BoxGeometry(40, .06, 6.05), new THREE.MeshStandardMaterial({ color: 0xC9A961, metalness: .8, roughness: .3 })); trim.position.y = -.07; scene.add(trim);
    const items = NEW_IDS.map((id, i) => { const m = bookMesh(byId(id), 1.1); m.position.set(i * 3.2 - 12, 1, 0); scene.add(m); return { m, x: i * 3.2 - 12, ph: i }; });
    const ray = new THREE.Raycaster(), mouse = new THREE.Vector2(-9, -9); let hovered = null;
    canvas.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1); });
    canvas.addEventListener('pointerleave', () => mouse.set(-9, -9));
    canvas.addEventListener('click', (e) => { if (hovered) { burst(e.clientX, e.clientY); chime(); goDetail(hovered.userData.book); } });
    return { render(dt, el) {
      fit(renderer, camera, canvas);
      items.forEach((it) => { it.x += dt * 1.1; if (it.x > 14) it.x -= 3.2 * items.length; it.m.position.x = it.x; it.m.position.y = 1 + Math.abs(Math.sin(el * 3 + it.ph)) * .35; it.m.rotation.y = Math.sin(el * 1.2 + it.ph) * .5; it.m.rotation.z = Math.sin(el * 3 + it.ph) * .06; });
      ray.setFromCamera(mouse, camera); const hits = ray.intersectObjects(items.map((i) => i.m)); const h = hits.length ? hits[0].object : null;
      if (h !== hovered) { if (hovered) hovered.scale.setScalar(1); hovered = h; if (h) h.scale.setScalar(1.15); canvas.style.cursor = h ? 'pointer' : 'default'; }
      renderer.render(scene, camera);
    } };
  })();

  /* ---------------- 11. Detail 3D book ---------------- */
  const detail3d = (() => {
    const canvas = $('#detail-canvas'); const renderer = makeRenderer(canvas);
    const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(32, 2, .1, 100); camera.position.set(0, .4, 6.2); camera.lookAt(0, 0, 0);
    scene.add(new THREE.AmbientLight(0xFFE9D0, .6)); const s = new THREE.SpotLight(0xFFF0D8, 1.5, 40, .7, .6); s.position.set(3, 7, 6); scene.add(s); const p = new THREE.PointLight(0xC9A961, .8, 20); p.position.set(-4, 2, 3); scene.add(p);
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, .25, 48), new THREE.MeshStandardMaterial({ color: 0xC9A961, metalness: .8, roughness: .3 })); pedestal.position.y = -1.6; scene.add(pedestal);
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
  function saveCart() { localStorage.setItem('mlm17_cart', JSON.stringify(cart)); updateBadges(); if (currentPage === 'cart') renderCart(); }
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
  $('#lang-select').addEventListener('change', (e) => { lang = e.target.value; localStorage.setItem('mlm17_lang', lang); applyI18n(); });
  $('#librarian-toggle').addEventListener('change', (e) => { document.body.classList.toggle('librarian', e.target.checked); localStorage.setItem('mlm17_lib', e.target.checked ? '1' : '0'); });
  if (localStorage.getItem('mlm17_lib') === '1') { $('#librarian-toggle').checked = true; document.body.classList.add('librarian'); }
  $('#sound-toggle').addEventListener('click', () => { soundOn = !soundOn; localStorage.setItem('mlm17_sound', soundOn ? 'on' : 'off'); $('#sound-on').hidden = !soundOn; $('#sound-off').hidden = soundOn; });
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
    const ws = XLSX.utils.json_to_sheet(rows); const wb = XLSX.utils.book_new(); XLSX.utils.book_append_sheet(wb, ws, 'Quote'); XLSX.writeFile(wb, `library_quote_v17_${Date.now()}.xlsx`); toast(t('xlsxDone'));
  });

  /* ---------------- 16. Boot ---------------- */
  applyI18n(); route();
})();
