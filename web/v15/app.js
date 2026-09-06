/* ==========================================================================
   AETHERIA v15 - Steampunk 3D Sky Islands & Airship Library JavaScript Engine
   ========================================================================== */

(function() {
  'use strict';

  // ==========================================
  // 1. MULTI-LANGUAGE I18N DICTIONARY
  // ==========================================
  const I18N = {
    KO: {
      brandSub: "다문화 도서관 수서·구입 전문 포털",
      navHome: "3D 비행 탐험관",
      navSearch: "수서 검색관",
      navCuration: "하늘 섬 큐레이션",
      navCart: "공문 견적함",
      navDetail: "360° 서지관",
      airshipStatus: "스팀펑크 수서 탐사선 01호",
      speedLabel: "비행 속도:",
      locCentral: "중앙 관제 스카이포트 상공",
      flightControlTitle: "비행선 조종법 (Bruno Simon Style)",
      keyFwd: "가속 전진",
      keyBwd: "감속 후진",
      keyLeft: "좌회전",
      keyRight: "우회전",
      flightHint: "💡 하늘 섬 근처에 접근하여 3D 기획전을 탐험해보세요!",
      islandToastDesc: "세계 전래동화 및 문화 도서 기획전 구역입니다.",
      btnLandExhibition: "기획전 입장하기",
      islandsTitle: "하늘 섬 문화관 3D 기획전",
      islandsSub: "스팀펑크 비행선이 항해하는 테마별 세계 문화 구름 섬을 둘러보세요.",
      asianIslandTitle: "아시아 전래동화 & 전통 문화관",
      asianIslandDesc: "한국, 베트남, 중국의 전래 동화, 등불 축제 이야기, 다문화 아동 양장 도서 컬렉션.",
      euroIslandTitle: "유럽 고전 성 & 명작 도서관",
      euroIslandDesc: "영국, 프랑스, 독일 명작 문학 및 림스 에디션, 이중언어 원서 서적 묶음.",
      skyportTitle: "사서 관제 스카이포트 종합관",
      skyportDesc: "전 세계 5개 국어 신간 통합 수서, MARC 데이터 무료제공, 공문 견적 원클릭 서비스.",
      btnExploreIsland: "섬 탐험 & 수서",
      newReleasesTitle: "이달의 추천 신간 수서 도서",
      view3DCards: "3D 부유 카드",
      viewList: "사서 수서 리스트",
      searchTitle: "스카이 다문화 수서 통합 검색",
      searchSub: "언어, 연령대, KDC 분류, ISBN, 출판사별 맞춤형 수서 도서를 빠르게 검색하세요.",
      searchPlaceholder: "도서명, 저자, ISBN, 출판사, 키워드를 입력하세요...",
      btnSearch: "검색",
      filterLangLabel: "수서 언어 선택",
      filterAgeLabel: "대상 연령",
      filterKDCLabel: "KDC 한국십진분류",
      filterPubLabel: "출판사/기관",
      optAllLangs: "전체 언어 (ALL)",
      optAllAges: "전체 연령",
      optInfant: "영유아 (0-5세)",
      optChildren: "아동/어린이 (6-12세)",
      optYouth: "청소년 (13-18세)",
      optAdult: "일반/성인",
      optAllKDC: "전체 분류",
      optAllPubs: "전체 출판사",
      searchResultTotal: "검색 결과: 총",
      countUnit: "권",
      btnSelectAll: "전체 선택",
      btnAddSelectedCart: "선택 도서 장바구니 담기",
      curationTitle: "3D 하늘 섬 사서 추천 큐레이션 세트",
      curationSub: "전국 공공·학교 도서관 다문화 수서 담당자를 위해 완벽 구성된 테마별 패키지입니다.",
      cartTitle: "스카이포트 사서 공문 견적함",
      cartSub: "수서 예정 도서를 점검하고 기관 할인(10%) 및 MARC 카탈로깅 옵션을 적용하여 1클릭 공식 견적서를 생성하세요.",
      cartListTitle: "선택 수서 도서 목록",
      btnClearCart: "전체 비우기",
      thCover: "표지",
      thInfo: "도서 서지 정보",
      thPrice: "정가 / 할인대가",
      thQty: "수량",
      thSubtotal: "소계",
      thAction: "삭제",
      cartEmptyTitle: "장바구니가 비어 있습니다.",
      cartEmptyDesc: "수서 검색관이나 3D 하늘 섬 기획전에서 필요한 도서를 담아보세요.",
      btnGoSearch: "도서 검색하러 가기",
      summaryTitle: "수서 견적 요약",
      sumTotalListPrice: "총 정가합계:",
      sumB2BDiscount: "사서 기관 할인 (10%):",
      optMARCLabel: "MARC 카탈로깅 & 바코드 작업",
      optMARCSub: "권당 +500원 (KDC/DDC 태그 및 칩 착부 완료 납품)",
      sumMARCPrice: "카탈로깅 수수료:",
      sumFinalAmount: "최종 구입 납품가:",
      formInstTitle: "납품 기관 정보 입력",
      btnGenQuotePDF: "1클릭 공문 견적서 생성 (PDF/인쇄)",
      btnExportCSV: "엑셀(CSV) 서지목록 다운로드",
      hint3DRotate: "마우스 드래그로 360° 회전",
      btnFlipPage: "책 펼치기/덮기",
      btnReset3D: "시점 초기화",
      audioNarrationTitle: "다국어 오디오 낭독 샘플",
      btnPlayAudio: "음성 청취하기",
      lblListPrice: "정가",
      lblSupplyPrice: "사서 B2B 수서가 (10% off)",
      lblAuthor: "저자/글",
      lblPublisher: "출판사",
      lblISBN: "ISBN-13",
      lblAge: "대상 연령",
      lblBinding: "제본/제원",
      lblCIP: "CIP 제어번호",
      lblSynopsisTitle: "도서 줄거리 & 사서 추천평",
      btnAddCart: "공문 견적함에 담기",
      btnBackList: "목록으로 돌아가기",
      modalQuoteHeader: "공식 수서 납품 견적서 (인쇄/PDF용)",
      btnPrintQuote: "견적서 인쇄 / PDF 저장",
      btnClose: "닫기",
      btnAddAllExhibition: "기획전 도서 전체 장바구니 담기"
    },
    EN: {
      brandSub: "Multicultural Library B2B Procurement Portal",
      navHome: "3D Sky Exploration",
      navSearch: "Book Search",
      navCuration: "Sky Curations",
      navCart: "Quote Cart",
      navDetail: "360° Book MARC",
      airshipStatus: "Steampunk Airship Explorer No.01",
      speedLabel: "Flight Speed:",
      locCentral: "Over Skyport Central Base",
      flightControlTitle: "Airship Controls (Bruno Simon Style)",
      keyFwd: "Accelerate",
      keyBwd: "Reverse",
      keyLeft: "Turn Left",
      keyRight: "Turn Right",
      flightHint: "💡 Fly close to Cloud Islands to land on 3D Exhibitions!",
      islandToastDesc: "Exhibition zone for world fairy tales and heritage books.",
      btnLandExhibition: "Enter 3D Exhibition",
      islandsTitle: "Cloud Islands 3D Exhibitions",
      islandsSub: "Explore themed multicultural cloud islands navigated by your steampunk airship.",
      asianIslandTitle: "Asian Folk Tales & Cultural Pavilion",
      asianIslandDesc: "Korean, Vietnamese, and Chinese folk tales, lantern stories, and bilingual picture books.",
      euroIslandTitle: "European Castle & Masterpieces Library",
      euroIslandDesc: "British, French, and German classics, Grimm editions, and bilingual original collections.",
      skyportTitle: "Central Skyport Librarian Control",
      skyportDesc: "5-Language integrated acquisition, free MARC metadata, and 1-click official quotes.",
      btnExploreIsland: "Explore Island",
      newReleasesTitle: "Recommended New Releases for Acquisition",
      view3DCards: "3D Cards",
      viewList: "MARC List",
      searchTitle: "Sky Multicultural Procurement Search",
      searchSub: "Search books by language, age group, KDC code, ISBN, and publisher.",
      searchPlaceholder: "Search by title, author, ISBN, publisher, keywords...",
      btnSearch: "Search",
      filterLangLabel: "Language",
      filterAgeLabel: "Age Group",
      filterKDCLabel: "KDC Classification",
      filterPubLabel: "Publisher",
      optAllLangs: "All Languages (ALL)",
      optAllAges: "All Ages",
      optInfant: "Infant (0-5)",
      optChildren: "Children (6-12)",
      optYouth: "Youth (13-18)",
      optAdult: "Adult",
      optAllKDC: "All Classifications",
      optAllPubs: "All Publishers",
      searchResultTotal: "Total Found:",
      countUnit: "books",
      btnSelectAll: "Select All",
      btnAddSelectedCart: "Add Selected to Cart",
      curationTitle: "3D Sky Recommended Curation Sets",
      curationSub: "Tailored book packages curated for public and school multicultural library buyers.",
      cartTitle: "Skyport Official Quote Cart",
      cartSub: "Review selected books, apply 10% B2B discount and MARC cataloging to generate 1-click official invoice PDF.",
      cartListTitle: "Selected Acquisition List",
      btnClearCart: "Clear Cart",
      thCover: "Cover",
      thInfo: "Bibliographic Info",
      thPrice: "List / Discounted",
      thQty: "Qty",
      thSubtotal: "Subtotal",
      thAction: "Delete",
      cartEmptyTitle: "Your Cart is Empty.",
      cartEmptyDesc: "Browse search or cloud islands to add multicultural books.",
      btnGoSearch: "Go to Book Search",
      summaryTitle: "Acquisition Summary",
      sumTotalListPrice: "Total List Price:",
      sumB2BDiscount: "Institutional Discount (10%):",
      optMARCLabel: "MARC Cataloging & Barcoding",
      optMARCSub: "+500 KRW/vol (KDC/DDC tag & RFID chip processing)",
      sumMARCPrice: "Cataloging Fee:",
      sumFinalAmount: "Final Net Supply Price:",
      formInstTitle: "Institution & Library Information",
      btnGenQuotePDF: "1-Click Official Quote PDF / Print",
      btnExportCSV: "Download CSV MARC List",
      hint3DRotate: "Drag mouse to rotate 360°",
      btnFlipPage: "Flip Open / Close Book",
      btnReset3D: "Reset View",
      audioNarrationTitle: "Multilingual Audio Sample",
      btnPlayAudio: "Listen Audio",
      lblListPrice: "List Price",
      lblSupplyPrice: "B2B Library Price (10% off)",
      lblAuthor: "Author/Illustrator",
      lblPublisher: "Publisher",
      lblISBN: "ISBN-13",
      lblAge: "Age Group",
      lblBinding: "Binding",
      lblCIP: "CIP No.",
      lblSynopsisTitle: "Synopsis & Librarian Review",
      btnAddCart: "Add to Quote Cart",
      btnBackList: "Back to Search",
      modalQuoteHeader: "Official Procurement Quote Invoice (Printable)",
      btnPrintQuote: "Print / Save PDF",
      btnClose: "Close",
      btnAddAllExhibition: "Add All Exhibition Books to Cart"
    },
    VI: {
      brandSub: "Cổng Thông Tin Thu Mua Sách Đa Văn Hóa Cho Thư Viện",
      navHome: "Khám Phá 3D",
      navSearch: "Tìm Kiếm Sách",
      navCuration: "Bộ Sưu Tập",
      navCart: "Báo Giá",
      navDetail: "Xem 360° Sách",
      airshipStatus: "Tàu Thám Hiểm Steampunk Số 01",
      speedLabel: "Tốc độ bay:",
      locCentral: "Trên Không Trung Skyport Central",
      flightControlTitle: "Điều Khiển Tàu Bay (Bruno Simon Style)",
      keyFwd: "Tăng tốc",
      keyBwd: "Lùi lại",
      keyLeft: "Rẽ trái",
      keyRight: "Rẽ phải",
      flightHint: "💡 Bay gần Đảo Mây để tham quan Triển Lãm 3D!",
      islandToastDesc: "Khu vực triển lãm truyện cổ tích và sách đa văn hóa thế giới.",
      btnLandExhibition: "Vào Triển Lãm 3D",
      islandsTitle: "Triển Lãm Đảo Mây 3D",
      islandsSub: "Khám phá các đảo mây văn hóa được điều khiển bởi tàu bay steampunk.",
      asianIslandTitle: "Nhà Cổ Tích & Văn Hóa Châu Á",
      asianIslandDesc: "Truyện cổ tích Việt Nam, Hàn Quốc, Trung Quốc và sách tranh song ngữ.",
      euroIslandTitle: "Lâu Đài Châu Âu & Tác Phẩm Kinh Điển",
      euroIslandDesc: "Văn học kinh điển Anh, Pháp, Đức và bộ sưu tập song ngữ.",
      skyportTitle: "Trung Tâm Quản Lý Thư Viện Skyport",
      skyportDesc: "Thu mua tích hợp 5 ngôn ngữ, dữ liệu MARC miễn phí và báo giá chính thức 1-click.",
      btnExploreIsland: "Khám Phá Đảo",
      newReleasesTitle: "Sách Mới Đề Xuất Thu Mua Trong Tháng",
      view3DCards: "Thẻ 3D",
      viewList: "Danh Sách MARC",
      searchTitle: "Tìm Kiếm Thu Mua Đa Văn Hóa Sky",
      searchSub: "Tìm kiếm sách theo ngôn ngữ, độ tuổi, mã KDC, ISBN và nhà xuất bản.",
      searchPlaceholder: "Nhập tên sách, tác giả, ISBN, NXB...",
      btnSearch: "Tìm Kiếm",
      filterLangLabel: "Ngôn Ngữ",
      filterAgeLabel: "Độ Tuổi",
      filterKDCLabel: "Phân Loại KDC",
      filterPubLabel: "Nhà Xuất Bản",
      optAllLangs: "Tất Cả Ngôn Ngữ (ALL)",
      optAllAges: "Tất Cả Độ Tuổi",
      optInfant: "Mẫu Giáo (0-5 tuổi)",
      optChildren: "Thiếu Nhi (6-12 tuổi)",
      optYouth: "Thanh Thiếu Niên (13-18)",
      optAdult: "Người Lớn",
      optAllKDC: "Tất Cả Phân Loại",
      optAllPubs: "Tất Cả NXB",
      searchResultTotal: "Tổng kết quả:",
      countUnit: "cuốn",
      btnSelectAll: "Chọn Tất Cả",
      btnAddSelectedCart: "Thêm Sách Đã Chọn Vào Giỏ",
      curationTitle: "Gói Bộ Sưu Tập Gợi Ý Cho Thủ Thư",
      curationSub: "Các bộ sách được biên soạn hoàn hảo cho thủ thư trường học và thư viện công cộng.",
      cartTitle: "Giỏ Báo Giá Báo Bảng Chính Thức",
      cartSub: "Kiểm tra sách, áp dụng giảm giá 10% và dịch vụ biên mục MARC để tạo báo giá PDF 1-click.",
      cartListTitle: "Danh Sách Sách Đã Chọn",
      btnClearCart: "Xóa Giỏ Hàng",
      thCover: "Bìa Sách",
      thInfo: "Thông Tin Thư Mục",
      thPrice: "Giá Gốc / Giảm Giá",
      thQty: "Số Lượng",
      thSubtotal: "Thành Tiền",
      thAction: "Xóa",
      cartEmptyTitle: "Giỏ hàng của bạn đang trống.",
      cartEmptyDesc: "Hãy khám phá tìm kiếm hoặc các đảo mây để thêm sách.",
      btnGoSearch: "Đến Tìm Kiếm Sách",
      summaryTitle: "Tóm Tắt Báo Giá",
      sumTotalListPrice: "Tổng giá niêm yết:",
      sumB2BDiscount: "Giảm giá thư viện (10%):",
      optMARCLabel: "Biên mục MARC & Dán Mã Vạch",
      optMARCSub: "+500 KRW/cuốn (Gắn chip RFID & thẻ KDC)",
      sumMARCPrice: "Phí Biên Mục:",
      sumFinalAmount: "Tổng Giá Thu Mua Cuối:",
      formInstTitle: "Thông Tin Cơ Quan Thư Viện",
      btnGenQuotePDF: "Tạo Báo Giá Chính Thức PDF / In 1-Click",
      btnExportCSV: "Tải Danh Sách CSV MARC",
      hint3DRotate: "Kéo chuột để xoay 360°",
      btnFlipPage: "Mở / Đóng Bìa Sách",
      btnReset3D: "Đặt Lại Góc Nhìn",
      audioNarrationTitle: "Đọc Mẫu Âm Thanh Đa Ngôn Ngữ",
      btnPlayAudio: "Nghe Âm Thanh",
      lblListPrice: "Giá Niêm Yết",
      lblSupplyPrice: "Giá Thu Mua B2B (Giảm 10%)",
      lblAuthor: "Tác Giả",
      lblPublisher: "Nhà Xuất Bản",
      lblISBN: "Mã ISBN-13",
      lblAge: "Lứa Tuổi",
      lblBinding: "Quy Cách Bìa",
      lblCIP: "Mã Số CIP",
      lblSynopsisTitle: "Tóm Tắt Nội Dung & Đánh Giá Thủ Thư",
      btnAddCart: "Thêm Vào Giỏ Báo Giá",
      btnBackList: "Quay Lại Danh Sách",
      modalQuoteHeader: "Bản Báo Giá Báo Bảng Thu Mua Chính Thức (In/PDF)",
      btnPrintQuote: "In Báo Giá / Lưu PDF",
      btnClose: "Đóng",
      btnAddAllExhibition: "Thêm Tất Cả Sách Triển Lãm Vào Giỏ"
    },
    ZH: {
      brandSub: "多文化图书馆图书采编·采购专业门户",
      navHome: "3D云端飞行探索",
      navSearch: "采编搜索",
      navCuration: "云岛策展",
      navCart: "公函报价单",
      navDetail: "360°书目馆",
      airshipStatus: "蒸汽朋克采编勘探船 01号",
      speedLabel: "飞行速度:",
      locCentral: "中央管制天港上空",
      flightControlTitle: "飞艇操作指南 (Bruno Simon 风格)",
      keyFwd: "加速前进",
      keyBwd: "减速后退",
      keyLeft: "左转",
      keyRight: "右转",
      flightHint: "💡 靠近云岛可开启3D特展体验！",
      islandToastDesc: "世界童话与多文化图书特展区。",
      btnLandExhibition: "进入3D特展",
      islandsTitle: "云岛文化馆 3D 特展",
      islandsSub: "驾驶蒸汽朋克飞艇，巡航于不同主题的世界文化云岛。",
      asianIslandTitle: "亚洲民间故事与传统文化馆",
      asianIslandDesc: "中韩越传统民间故事、花灯节故事及双语精装童书展。",
      euroIslandTitle: "欧洲古典城堡与名著图书馆",
      euroIslandDesc: "英法德名著文学、格林童话精装版及双语原版书目。",
      skyportTitle: "图书管理员管制天港综合馆",
      skyportDesc: "全球5语种新书统筹采购、免费提供MARC数据、一键生成公函报价单。",
      btnExploreIsland: "探索云岛与采编",
      newReleasesTitle: "本月推荐采编新书",
      view3DCards: "3D悬浮卡片",
      viewList: "采编清单",
      searchTitle: "云端多文化采编综合搜索",
      searchSub: "根据语言、年龄段、KDC分类、ISBN及出版社快速检索图书。",
      searchPlaceholder: "输入书名、作者、ISBN、出版社、关键词...",
      btnSearch: "搜索",
      filterLangLabel: "采编语言",
      filterAgeLabel: "适合年龄",
      filterKDCLabel: "KDC 分类",
      filterPubLabel: "出版社",
      optAllLangs: "全部语言 (ALL)",
      optAllAges: "全部年龄",
      optInfant: "婴幼儿 (0-5岁)",
      optChildren: "儿童 (6-12岁)",
      optYouth: "青少年 (13-18岁)",
      optAdult: "成人",
      optAllKDC: "全部分类",
      optAllPubs: "全部出版社",
      searchResultTotal: "搜索结果：共",
      countUnit: "本",
      btnSelectAll: "全选",
      btnAddSelectedCart: "将选中图书加入购物车",
      curationTitle: "3D云岛馆员推荐策展套餐",
      curationSub: "为全国公共及学校图书馆多文化采购负责人量身定制的主题套餐。",
      cartTitle: "天港馆员公函报价箱",
      cartSub: "审核待采购图书，享受10%机构折扣及MARC编目服务，一键生成官方报价单。",
      cartListTitle: "已选采编图书清单",
      btnClearCart: "清空购物车",
      thCover: "封面",
      thInfo: "图书书目信息",
      thPrice: "原价 / 折扣价",
      thQty: "数量",
      thSubtotal: "小计",
      thAction: "删除",
      cartEmptyTitle: "购物车暂无图书。",
      cartEmptyDesc: "请在采编搜索或3D云岛特展中挑选所需图书。",
      btnGoSearch: "前往图书搜索",
      summaryTitle: "采编报价摘要",
      sumTotalListPrice: "原价总额:",
      sumB2BDiscount: "机构优惠折扣 (10%):",
      optMARCLabel: "MARC编目与条形码加工",
      optMARCSub: "每本 +500韩元 (含KDC/DDC标签及RFID芯片粘贴)",
      sumMARCPrice: "编目加工费:",
      sumFinalAmount: "最终采购供货价:",
      formInstTitle: "采购机构信息输入",
      btnGenQuotePDF: "一键生成公函报价单 (PDF/打印)",
      btnExportCSV: "下载Excel(CSV)书目清单",
      hint3DRotate: "拖拽鼠标可360°旋转",
      btnFlipPage: "翻开/合上图书",
      btnReset3D: "重置视角",
      audioNarrationTitle: "多语种音频朗读范例",
      btnPlayAudio: "试听朗读",
      lblListPrice: "原价",
      lblSupplyPrice: "B2B馆员采购价 (9折)",
      lblAuthor: "作者/绘者",
      lblPublisher: "出版社",
      lblISBN: "ISBN-13",
      lblAge: "适合年龄",
      lblBinding: "装帧规格",
      lblCIP: "CIP控制号",
      lblSynopsisTitle: "图书梗概与馆员推荐",
      btnAddCart: "加入公函报价箱",
      btnBackList: "返回列表",
      modalQuoteHeader: "官方图书采购报价单 (打印/PDF)",
      btnPrintQuote: "打印报价单 / 保存PDF",
      btnClose: "关闭",
      btnAddAllExhibition: "将特展图书全套加入购物车"
    },
    FR: {
      brandSub: "Portail d'Acquisition Interculturelle pour Bibliothèques",
      navHome: "Vol 3D Sky",
      navSearch: "Recherche",
      navCuration: "Packs Curation",
      navCart: "Devis Officiel",
      navDetail: "360° Livre MARC",
      airshipStatus: "Explorateur Dirigeable Steampunk N°01",
      speedLabel: "Vitesse de vol:",
      locCentral: "Au-dessus de la Base Skyport",
      flightControlTitle: "Commandes du Dirigeable (Style Bruno Simon)",
      keyFwd: "Accélérer",
      keyBwd: "Reculer",
      keyLeft: "Tourner Gauche",
      keyRight: "Tourner Droite",
      flightHint: "💡 Volez près des Îles Célestes pour ouvrir les Expositions 3D!",
      islandToastDesc: "Zone d'exposition de contes du monde et livres multiculturels.",
      btnLandExhibition: "Entrer dans l'Exposition 3D",
      islandsTitle: "Expositions 3D des Îles Célestes",
      islandsSub: "Naviguez à bord de votre dirigeable steampunk vers des îles thématiques.",
      asianIslandTitle: "Pavillon des Contes & Cultures d'Asie",
      asianIslandDesc: "Contes coréens, vietnamiens, chinois et albums bilingues.",
      euroIslandTitle: "Château Européen & Classiques de la Littérature",
      euroIslandDesc: "Chefs-d'œuvre français, britanniques et allemands en éditions bilingues.",
      skyportTitle: "Base de Contrôle des Bibliothécaires Skyport",
      skyportDesc: "Acquisitions intégrées en 5 langues, données MARC gratuites et devis en 1 clic.",
      btnExploreIsland: "Explorer l'Île",
      newReleasesTitle: "Nouveautés Recommandées pour Acquisition",
      view3DCards: "Cartes 3D",
      viewList: "Liste MARC",
      searchTitle: "Recherche d'Acquisition Multiculturelle",
      searchSub: "Filtrez les livres par langue, âge, code KDC, ISBN et éditeur.",
      searchPlaceholder: "Titre, auteur, ISBN, éditeur, mots-clés...",
      btnSearch: "Chercher",
      filterLangLabel: "Langue",
      filterAgeLabel: "Tranche d'Âge",
      filterKDCLabel: "Classification KDC",
      filterPubLabel: "Éditeur",
      optAllLangs: "Toutes les langues (ALL)",
      optAllAges: "Tous les âges",
      optInfant: "Petite Enfance (0-5 ans)",
      optChildren: "Enfants (6-12 ans)",
      optYouth: "Adolescents (13-18 ans)",
      optAdult: "Adultes",
      optAllKDC: "Toutes classifications",
      optAllPubs: "Tous éditeurs",
      searchResultTotal: "Résultats trouvés:",
      countUnit: "livres",
      btnSelectAll: "Tout Sélectionner",
      btnAddSelectedCart: "Ajouter la sélection au panier",
      curationTitle: "Packs Recommandés par nos Bibliothécaires",
      curationSub: "Kits de livres conçus pour les responsables d'acquisitions des bibliothèques.",
      cartTitle: "Panier de Devis Officiel Skyport",
      cartSub: "Vérifiez vos sélections, appliquez la remise B2B de 10% et le catalogage MARC.",
      cartListTitle: "Liste des Livres Sélectionnés",
      btnClearCart: "Vider le Panier",
      thCover: "Couverture",
      thInfo: "Informations Bibliographiques",
      thPrice: "Prix / Remisé",
      thQty: "Qté",
      thSubtotal: "Sous-total",
      thAction: "Supprimer",
      cartEmptyTitle: "Votre panier est vide.",
      cartEmptyDesc: "Explorez la recherche ou les îles célestes pour ajouter des livres.",
      btnGoSearch: "Aller à la Recherche",
      summaryTitle: "Résumé du Devis",
      sumTotalListPrice: "Prix total brut:",
      sumB2BDiscount: "Remise Institutionnelle (10%):",
      optMARCLabel: "Catalogage MARC & Puce RFID",
      optMARCSub: "+500 KRW/vol (étiquette KDC & encodage RFID inclus)",
      sumMARCPrice: "Frais de Catalogage:",
      sumFinalAmount: "Prix Net Final:",
      formInstTitle: "Informations sur l'Établissement",
      btnGenQuotePDF: "Générer Devis Officiel PDF / Imprimer 1-Clic",
      btnExportCSV: "Télécharger Liste CSV MARC",
      hint3DRotate: "Glissez la souris pour pivoter à 360°",
      btnFlipPage: "Ouvrir / Fermer le Livre",
      btnReset3D: "Réinitialiser la Vue",
      audioNarrationTitle: "Échantillon Audio Multilingue",
      btnPlayAudio: "Écouter l'Audio",
      lblListPrice: "Prix Brut",
      lblSupplyPrice: "Prix Bibliothécaire B2B (-10%)",
      lblAuthor: "Auteur / Illustrateur",
      lblPublisher: "Éditeur",
      lblISBN: "ISBN-13",
      lblAge: "Âge Recommandé",
      lblBinding: "Reliure",
      lblCIP: "N° CIP",
      lblSynopsisTitle: "Synopsis & Avis du Bibliothécaire",
      btnAddCart: "Ajouter au Devis",
      btnBackList: "Retour à la Liste",
      modalQuoteHeader: "Devis Officiel d'Acquisition de Livres (Imprimable)",
      btnPrintQuote: "Imprimer / Enregistrer PDF",
      btnClose: "Fermer",
      btnAddAllExhibition: "Ajouter tous les livres au panier"
    }
  };

  let currentLang = 'KO';

  // ==========================================
  // 2. BOOKS DATABASE
  // ==========================================
  const BOOKS = [
    {
      id: 'b1',
      title: '무지개 다리를 건넌 사자 (The Rainbow Lion)',
      subtitle: '다문화 이중언어 그림책 시리즈 01',
      lang: 'KO',
      bilingual: 'KO/VI',
      kdc: '800',
      kdcName: '800 문학 (동화)',
      isbn: '979-11-89012-34-5',
      price: 18000,
      age: 'CHILDREN',
      ageLabel: '아동/어린이 (6-10세)',
      publisher: '무지개아시아',
      author: '김다은 지음 / 쩐티마이 번역',
      binding: '양장본 (Hardcover), 48쪽',
      cip: 'CIP20260019283',
      color1: '#e11d48',
      color2: '#fbbf24',
      summary: '서로 다른 언어를 사용하는 숲속 동물들이 무지개 다리에서 만나 언어의 장벽을 넘어 깊은 우정을 나누는 아름다운 이야기. 한국어와 베트남어가 병기되어 도서관 다문화 코너 수서에 추천합니다.',
      island: 'asian',
      audioText: '안녕하세요! 무지개 다리를 건넌 사자 이야기입니다. Xin chào! Đây là câu chuyện về chú sư tử qua cầu cầu vồng.'
    },
    {
      id: 'b2',
      title: 'Chuyến Bay Đến Thành Phố Mây (구름 도시로의 비행)',
      subtitle: '베트남 전래동화 & 하늘 스팀펑크 이중언어북',
      lang: 'VI',
      bilingual: 'VI/KO',
      kdc: '890',
      kdcName: '890 베트남 문학',
      isbn: '979-11-89012-35-2',
      price: 16500,
      age: 'INFANT',
      ageLabel: '영유아 (4-7세)',
      publisher: '한베문화재단',
      author: 'Nguyen Van Nam / 이민정 역',
      binding: '양장본 (Hardcover), 40쪽',
      cip: 'CIP20260019284',
      color1: '#0d9488',
      color2: '#38bdf8',
      summary: '베트남의 구름 용 전설을 현대적 스팀펑크 비행선 감성으로 재해석한 입체 그림책. 어린이들에게 상상력과 다문화 호기심을 심어주는 도서관 필수 수서작.',
      island: 'asian',
      audioText: 'Chuyến bay đến thành phố mây sẽ đưa bạn vào thế giới thần thoại tuyệt đẹp.'
    },
    {
      id: 'b3',
      title: 'The Cloud Steampunk Explorer (구름 탐사선 에테리아)',
      subtitle: '영국 판타지 영문 다문화 어린이 도서',
      lang: 'EN',
      bilingual: 'EN/KO',
      kdc: '840',
      kdcName: '840 영미 문학',
      isbn: '979-11-89012-36-9',
      price: 21000,
      age: 'YOUTH',
      ageLabel: '청소년 (12-16세)',
      publisher: 'Aetheria Press',
      author: 'Arthur Pendelton',
      binding: '양장본 (Hardcover), 120쪽',
      cip: 'CIP20260019285',
      color1: '#2563eb',
      color2: '#d97706',
      summary: '하늘 섬 도서관을 비행하며 잃어버린 세계 고서들을 수집하는 비행선 선장의 스펙터클 판타지 소설.',
      island: 'european',
      audioText: 'Welcome aboard the Aetheria Airship! Explore the floating cloud library of tomorrow.'
    },
    {
      id: 'b4',
      title: '云端上的神话故事 (구름 위의 동양 신화)',
      subtitle: '중국 전통 등불 축제와 전래동화 모음집',
      lang: 'ZH',
      bilingual: 'ZH/KO',
      kdc: '820',
      kdcName: '820 중국 문학',
      isbn: '979-11-89012-37-6',
      price: 19500,
      age: 'CHILDREN',
      ageLabel: '아동/어린이 (8-12세)',
      publisher: '글로벌다문화북스',
      author: '李小龙 (Li Xiaolong)',
      binding: '양장본 (Hardcover), 64쪽',
      cip: 'CIP20260019286',
      color1: '#dc2626',
      color2: '#f59e0b',
      summary: '중국 전통 꽃등 축제와 달나라 선녀 이야기 등 동양 명작 전래동화를 아름다운 묵화와 한자/한국어 병기로 구성한 서적.',
      island: 'asian',
      audioText: '欢迎来到云端上的神话世界，一起感受东方传统的魅力！'
    },
    {
      id: 'b5',
      title: 'Le Petit Prince et la Nuage (어린 왕자와 구름 섬)',
      subtitle: '프랑스 명작 문학 다문화 특별 에디션',
      lang: 'FR',
      bilingual: 'FR/KO',
      kdc: '860',
      kdcName: '860 프랑스 문학',
      isbn: '979-11-89012-38-3',
      price: 22000,
      age: 'ADULT',
      ageLabel: '일반/성인',
      publisher: 'Aetheria Press',
      author: 'Antoine de Saint-Exupéry',
      binding: '양장본 고급 에디션, 96쪽',
      cip: 'CIP20260019287',
      color1: '#7c3aed',
      color2: '#38bdf8',
      summary: '프랑스 클래식 원문과 정교한 주석, 아름다운 3D 수묵 일러스트가 어우러진 다문화 도서관 고전 수서 컬렉션.',
      island: 'european',
      audioText: 'S\'il vous plaît, dessine-moi un nuage dans le ciel de la bibliothèque.'
    },
    {
      id: 'b6',
      title: '하늘 길 따라 만나는 세계 전통 의상',
      subtitle: '다문화 사회과학 그림 백과',
      lang: 'KO',
      bilingual: 'KO/EN',
      kdc: '300',
      kdcName: '300 사회과학 (문화)',
      isbn: '979-11-89012-39-0',
      price: 17500,
      age: 'CHILDREN',
      ageLabel: '아동/어린이 (6-12세)',
      publisher: '하늘 구름 도서',
      author: '다문화교육연구회',
      binding: '양장본, 56쪽',
      cip: 'CIP20260019288',
      color1: '#059669',
      color2: '#f59e0b',
      summary: '베트남 아오자이, 한국 한복, 중국 치파오, 프랑스 포크 로어 의상 등 세계 각국 의복 문화와 풍습을 소개하는 백과.',
      island: 'skyport',
      audioText: '세계 여러 나라의 아름다운 옷과 문화를 함께 탐험해봅시다.'
    },
    {
      id: 'b7',
      title: 'Bánh Chưng Và Bánh Giầy (바인쭝과 바인저이)',
      subtitle: '베트남 명절 설날과 땅과 하늘의 이야기',
      lang: 'VI',
      bilingual: 'VI/KO',
      kdc: '890',
      kdcName: '890 베트남 문학',
      isbn: '979-11-89012-40-6',
      price: 15000,
      age: 'CHILDREN',
      ageLabel: '아동/어린이 (6-10세)',
      publisher: '한베문화재단',
      author: 'Trần Quốc Bảo',
      binding: '양장본, 44쪽',
      cip: 'CIP20260019289',
      color1: '#16a34a',
      color2: '#e11d48',
      summary: '베트남의 가장 대표적인 전통 전설. 둥근 하늘과 네모난 땅을 상징하는 전통 떡 이야기로 음식 문화를 배웁니다.',
      island: 'asian',
      audioText: 'Bánh Chưng và Bánh Giầy tượng trưng cho trời tròn đất vuông.'
    },
    {
      id: 'b8',
      title: 'Tales from the Floating Sky Lighthouse',
      subtitle: '유럽 항해 전설과 하늘 등대 이야기',
      lang: 'EN',
      bilingual: 'EN/KO',
      kdc: '840',
      kdcName: '840 영미 문학',
      isbn: '979-11-89012-41-3',
      price: 20000,
      age: 'YOUTH',
      ageLabel: '청소년 (13-18세)',
      publisher: 'Aetheria Press',
      author: 'Clara Harrison',
      binding: '양장본, 110쪽',
      cip: 'CIP20260019290',
      color1: '#0284c7',
      color2: '#fbbf24',
      summary: '밤하늘 구름 위를 비추는 등대지기와 각국에서 온 탐험가들이 나눈 신비로운 전설 모음집.',
      island: 'european',
      audioText: 'Listen to the echo of the sky lighthouse guiding lost airships home.'
    }
  ];

  // ==========================================
  // 3. CURATION PACKAGES DATABASE
  // ==========================================
  const CURATIONS = [
    {
      id: 'c1',
      title: '아시아 전래동화 & 다문화 아동 세트 (30권)',
      desc: '한국, 베트남, 중국, 필리핀의 대표 전래동화 및 이중언어 아동 그림책 30권 완벽 구성 패키지.',
      count: 30,
      listPrice: 540000,
      b2bPrice: 459000,
      discountPercent: 15,
      langs: ['KO', 'VI', 'ZH'],
      books: ['b1', 'b2', 'b4', 'b7'],
      color: 'linear-gradient(135deg, #e11d48, #f59e0b)'
    },
    {
      id: 'c2',
      title: '유럽 고전 & 이중언어 원서 세트 (25권)',
      desc: '영국, 프랑스, 독일 명작 문학 및 림스 에디션 이중언어 양장 서적 25권 수서 세트.',
      count: 25,
      listPrice: 520000,
      b2bPrice: 442000,
      discountPercent: 15,
      langs: ['EN', 'FR'],
      books: ['b3', 'b5', 'b8'],
      color: 'linear-gradient(135deg, #2563eb, #7c3aed)'
    },
    {
      id: 'c3',
      title: '글로벌 다문화 사회 & 문화 그림백과 세트 (20권)',
      desc: '세계의 의식주, 풍습, 다문화 이웃 이해 및 세계시민의식을 키워주는 백과 서적 세트.',
      count: 20,
      listPrice: 380000,
      b2bPrice: 323000,
      discountPercent: 15,
      langs: ['KO', 'EN'],
      books: ['b6'],
      color: 'linear-gradient(135deg, #059669, #0284c7)'
    }
  ];

  // Global State
  let CART = [];
  let currentDetailBook = BOOKS[0];
  let newReleasesViewMode = 'GRID'; // 'GRID' or 'TABLE'
  let audioSynth = null;
  let isSoundEnabled = false;

  // ==========================================
  // 4. THREE.JS 3D SKY WORLD & AIRSHIP ENGINE
  // ==========================================
  let skyScene, skyCamera, skyRenderer;
  let airshipGroup, propellerLeft, propellerRight;
  let asianIslandMesh, euroIslandMesh, skyportMesh;
  let cloudParticles = [];
  
  // Airship Flight Physics State
  const airshipState = {
    pos: new THREE.Vector3(0, 5, 0),
    rotY: 0,
    speed: 0,
    maxSpeed: 0.8,
    accel: 0.02,
    friction: 0.96,
    turnSpeed: 0.03,
    pitch: 0,
    roll: 0
  };

  const keyState = { w: false, a: false, s: false, d: false };

  function initThreeSkyWorld() {
    const container = document.getElementById('three-sky-container');
    if (!container || skyRenderer) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    skyScene = new THREE.Scene();
    skyScene.background = new THREE.Color('#7dd3fc');
    skyScene.fog = new THREE.FogExp2('#bae6fd', 0.008);

    // Camera setup
    skyCamera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    skyCamera.position.set(0, 18, 35);

    // Renderer setup
    skyRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    skyRenderer.setSize(width, height);
    skyRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    skyRenderer.shadowMap.enabled = true;
    skyRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(skyRenderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    skyScene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.2);
    dirLight.position.set(60, 100, 40);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    skyScene.add(dirLight);

    // Build Environment (Clouds, Islands)
    buildSkyEnvironment();

    // Build Steampunk Airship
    buildAirshipMesh();

    // Event Listeners for Flight Keys
    window.addEventListener('keydown', (e) => handleFlightKeys(e, true));
    window.addEventListener('keyup', (e) => handleFlightKeys(e, false));

    // Touch D-Pad setup
    setupTouchDPad();

    // Window Resize
    window.addEventListener('resize', () => {
      if (!container || !skyRenderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      skyCamera.aspect = w / h;
      skyCamera.updateProjectionMatrix();
      skyRenderer.setSize(w, h);
    });

    // Start Animation Loop
    animateSkyWorld();
  }

  function buildSkyEnvironment() {
    // 1. Procedural Low-Poly Clouds Spread Across Sky
    const cloudGeo = new THREE.DodecahedronGeometry(1, 1);
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true
    });

    for (let i = 0; i < 45; i++) {
      const cloudCluster = new THREE.Group();
      const count = 4 + Math.floor(Math.random() * 5);
      for (let j = 0; j < count; j++) {
        const m = new THREE.Mesh(cloudGeo, cloudMat);
        const scale = 3 + Math.random() * 6;
        m.scale.set(scale, scale * 0.6, scale);
        m.position.set(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 12
        );
        cloudCluster.add(m);
      }
      cloudCluster.position.set(
        (Math.random() - 0.5) * 220,
        (Math.random() - 0.5) * 20 - 5,
        (Math.random() - 0.5) * 220
      );
      skyScene.add(cloudCluster);
      cloudParticles.push(cloudCluster);
    }

    // 2. Asian Cloud Island (Left Side X: -50, Z: -30)
    asianIslandMesh = createIslandGroup(0xe11d48, 'ASIAN');
    asianIslandMesh.position.set(-50, -2, -30);
    skyScene.add(asianIslandMesh);

    // 3. European Castle Island (Right Side X: 50, Z: -30)
    euroIslandMesh = createIslandGroup(0x2563eb, 'EURO');
    euroIslandMesh.position.set(50, -2, -30);
    skyScene.add(euroIslandMesh);

    // 4. Central Skyport Lighthouse Station (Center X: 0, Z: -70)
    skyportMesh = createIslandGroup(0xd97706, 'SKYPORT');
    skyportMesh.position.set(0, -4, -70);
    skyScene.add(skyportMesh);
  }

  function createIslandGroup(accentColor, type) {
    const island = new THREE.Group();

    // Base Island Rock
    const rockGeo = new THREE.ConeGeometry(18, 14, 7);
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      roughness: 0.8,
      flatShading: true
    });
    const rock = new THREE.Mesh(rockGeo, rockMat);
    rock.rotation.x = Math.PI;
    rock.position.y = -6;
    island.add(rock);

    // Top Grass Land
    const grassGeo = new THREE.CylinderGeometry(18, 17, 3, 8);
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.7,
      flatShading: true
    });
    const grass = new THREE.Mesh(grassGeo, grassMat);
    grass.position.y = 1;
    island.add(grass);

    // Island Specific Architecture Decor
    if (type === 'ASIAN') {
      // Asian Torii Gate / Pavilion Roof
      const pillarMat = new THREE.MeshStandardMaterial({ color: 0xb91c1c });
      const p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 8), pillarMat);
      p1.position.set(-4, 5, 0);
      const p2 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 8), pillarMat);
      p2.position.set(4, 5, 0);
      island.add(p1, p2);

      const roof = new THREE.Mesh(new THREE.BoxGeometry(12, 1, 3), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
      roof.position.set(0, 9, 0);
      island.add(roof);

      // Lantern
      const lantern = new THREE.Mesh(new THREE.SphereGeometry(1.2, 8, 8), new THREE.MeshBasicMaterial({ color: 0xf59e0b }));
      lantern.position.set(0, 6, 0);
      island.add(lantern);
    } else if (type === 'EURO') {
      // Castle Tower
      const towerGeo = new THREE.CylinderGeometry(3, 3.5, 12, 8);
      const towerMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, flatShading: true });
      const tower = new THREE.Mesh(towerGeo, towerMat);
      tower.position.set(0, 7, 0);
      island.add(tower);

      const spireGeo = new THREE.ConeGeometry(3.5, 6, 8);
      const spireMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a });
      const spire = new THREE.Mesh(spireGeo, spireMat);
      spire.position.set(0, 16, 0);
      island.add(spire);
    } else {
      // Lighthouse Beacon
      const lightGeo = new THREE.CylinderGeometry(2, 4, 16, 8);
      const lightMat = new THREE.MeshStandardMaterial({ color: 0xd97706 });
      const lightTower = new THREE.Mesh(lightGeo, lightMat);
      lightTower.position.set(0, 9, 0);
      island.add(lightTower);

      const beacon = new THREE.Mesh(new THREE.SphereGeometry(2, 16, 16), new THREE.MeshBasicMaterial({ color: 0xfbbf24 }));
      beacon.position.set(0, 18, 0);
      island.add(beacon);
    }

    return island;
  }

  function buildAirshipMesh() {
    airshipGroup = new THREE.Group();

    // 1. Gas Envelope (Zeppelin Balloon)
    const envelopeGeo = new THREE.SphereGeometry(3.5, 16, 12);
    envelopeGeo.scale(1, 0.9, 2.2); // Elongated balloon
    const envelopeMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.3,
      metalness: 0.4,
      flatShading: true
    });
    const envelope = new THREE.Mesh(envelopeGeo, envelopeMat);
    envelope.position.y = 3;
    envelope.castShadow = true;
    airshipGroup.add(envelope);

    // Brass Bands on Balloon
    const bandGeo = new THREE.TorusGeometry(3.5, 0.15, 8, 24);
    const bandMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8 });
    const b1 = new THREE.Mesh(bandGeo, bandMat);
    b1.rotation.x = Math.PI / 2;
    b1.position.set(0, 3, 0);
    airshipGroup.add(b1);

    // 2. Gondola Cabin Underneath
    const gondolaGeo = new THREE.BoxGeometry(2, 1.4, 4);
    const gondolaMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.6 });
    const gondola = new THREE.Mesh(gondolaGeo, gondolaMat);
    gondola.position.y = -0.5;
    gondola.castShadow = true;
    airshipGroup.add(gondola);

    // 3. Dual Rotating Propellers
    const propBladesGeo = new THREE.BoxGeometry(1.6, 0.15, 0.3);
    const propMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.9 });
    
    propellerLeft = new THREE.Mesh(propBladesGeo, propMat);
    propellerLeft.position.set(-1.8, -0.2, -1.8);
    airshipGroup.add(propellerLeft);

    propellerRight = new THREE.Mesh(propBladesGeo, propMat);
    propellerRight.position.set(1.8, -0.2, -1.8);
    airshipGroup.add(propellerRight);

    // Position Airship
    airshipGroup.position.copy(airshipState.pos);
    skyScene.add(airshipGroup);
  }

  function handleFlightKeys(e, isDown) {
    const k = e.key.toLowerCase();
    if (k === 'w' || k === 'arrowup') keyState.w = isDown;
    if (k === 's' || k === 'arrowdown') keyState.s = isDown;
    if (k === 'a' || k === 'arrowleft') keyState.a = isDown;
    if (k === 'd' || k === 'arrowright') keyState.d = isDown;
  }

  function setupTouchDPad() {
    const bindBtn = (id, key) => {
      const btn = document.getElementById(id);
      if (!btn) return;
      btn.addEventListener('touchstart', (e) => { e.preventDefault(); keyState[key] = true; });
      btn.addEventListener('touchend', (e) => { e.preventDefault(); keyState[key] = false; });
      btn.addEventListener('mousedown', () => { keyState[key] = true; });
      btn.addEventListener('mouseup', () => { keyState[key] = false; });
    };
    bindBtn('btn-touch-up', 'w');
    bindBtn('btn-touch-down', 's');
    bindBtn('btn-touch-left', 'a');
    bindBtn('btn-touch-right', 'd');
  }

  function updateAirshipPhysics() {
    if (!airshipGroup) return;

    // Acceleration & Deceleration
    if (keyState.w) {
      airshipState.speed = Math.min(airshipState.speed + airshipState.accel, airshipState.maxSpeed);
    } else if (keyState.s) {
      airshipState.speed = Math.max(airshipState.speed - airshipState.accel, -airshipState.maxSpeed * 0.5);
    } else {
      airshipState.speed *= airshipState.friction;
    }

    // Steering
    if (keyState.a) {
      airshipState.rotY += airshipState.turnSpeed;
      airshipState.roll = THREE.MathUtils.lerp(airshipState.roll, 0.2, 0.1);
    } else if (keyState.d) {
      airshipState.rotY -= airshipState.turnSpeed;
      airshipState.roll = THREE.MathUtils.lerp(airshipState.roll, -0.2, 0.1);
    } else {
      airshipState.roll = THREE.MathUtils.lerp(airshipState.roll, 0, 0.1);
    }

    // Velocity vector movement
    airshipState.pos.x -= Math.sin(airshipState.rotY) * airshipState.speed;
    airshipState.pos.z -= Math.cos(airshipState.rotY) * airshipState.speed;

    // Altitude wobble float
    const time = Date.now() * 0.002;
    airshipState.pos.y = 5 + Math.sin(time) * 0.8;

    // Apply transforms
    airshipGroup.position.copy(airshipState.pos);
    airshipGroup.rotation.y = airshipState.rotY;
    airshipGroup.rotation.z = airshipState.roll;

    // Propeller Rotation Speed
    if (propellerLeft && propellerRight) {
      const pSpeed = 0.2 + Math.abs(airshipState.speed) * 0.8;
      propellerLeft.rotation.z += pSpeed;
      propellerRight.rotation.z += pSpeed;
    }

    // Update HUD Speedometer & Location Text
    const hudSpeed = document.getElementById('hud-speed');
    if (hudSpeed) {
      hudSpeed.innerText = Math.round(Math.abs(airshipState.speed) * 45);
    }

    const hudLoc = document.getElementById('hud-location');
    if (hudLoc) {
      const distAsian = airshipState.pos.distanceTo(asianIslandMesh.position);
      const distEuro = airshipState.pos.distanceTo(euroIslandMesh.position);
      const distSkyport = airshipState.pos.distanceTo(skyportMesh.position);

      if (distAsian < 35) {
        hudLoc.innerText = '아시아 구름 섬 상공 (Asian Island)';
        showLandingToast('Asian Cloud Island', 'asian');
      } else if (distEuro < 35) {
        hudLoc.innerText = '유럽 성 구름 섬 상공 (European Castle)';
        showLandingToast('European Castle Island', 'european');
      } else if (distSkyport < 35) {
        hudLoc.innerText = '사서 관제 스카이포트 상공 (Skyport Base)';
        showLandingToast('Skyport Librarian Base', 'skyport');
      } else {
        hudLoc.innerText = '중앙 관제 스카이포트 상공';
        hideLandingToast();
      }
    }

    // Sound Frequency Pitch Update according to Speed
    if (audioSynth && isSoundEnabled) {
      audioSynth.updateSpeed(Math.abs(airshipState.speed));
    }

    // Smooth Camera Follow (Bruno Simon Camera Lerp)
    const targetCamPos = new THREE.Vector3(
      airshipState.pos.x + Math.sin(airshipState.rotY) * 28,
      airshipState.pos.y + 14,
      airshipState.pos.z + Math.cos(airshipState.rotY) * 28
    );
    skyCamera.position.lerp(targetCamPos, 0.05);
    skyCamera.lookAt(airshipState.pos.x, airshipState.pos.y + 2, airshipState.pos.z);
  }

  function animateSkyWorld() {
    requestAnimationFrame(animateSkyWorld);
    updateAirshipPhysics();

    // Rotate Sky Clouds slowly
    cloudParticles.forEach((c, idx) => {
      c.position.x += Math.sin(Date.now() * 0.0001 + idx) * 0.02;
    });

    if (skyRenderer && skyScene && skyCamera) {
      skyRenderer.render(skyScene, skyCamera);
    }
  }

  // Landing Toast Trigger
  let currentDetectedIsland = null;
  function showLandingToast(name, islandKey) {
    currentDetectedIsland = islandKey;
    const toast = document.getElementById('island-landing-toast');
    const toastName = document.getElementById('toast-island-name');
    if (toast && toastName) {
      toastName.innerText = name;
      toast.classList.remove('hidden');
    }
  }

  function hideLandingToast() {
    currentDetectedIsland = null;
    const toast = document.getElementById('island-landing-toast');
    if (toast) toast.classList.add('hidden');
  }

  // ==========================================
  // 5. WEB AUDIO PROPELLER SYNTHESIZER
  // ==========================================
  class AudioEngine {
    constructor() {
      this.ctx = null;
      this.osc1 = null;
      this.osc2 = null;
      this.filter = null;
      this.gain = null;
    }

    init() {
      if (this.ctx) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Oscillators for engine hum
      this.osc1 = this.ctx.createOscillator();
      this.osc2 = this.ctx.createOscillator();
      this.filter = this.ctx.createBiquadFilter();
      this.gain = this.ctx.createGain();

      this.osc1.type = 'sawtooth';
      this.osc2.type = 'triangle';

      this.osc1.frequency.setValueAtTime(65, this.ctx.currentTime);
      this.osc2.frequency.setValueAtTime(130, this.ctx.currentTime);

      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(300, this.ctx.currentTime);

      this.gain.gain.setValueAtTime(0.08, this.ctx.currentTime);

      this.osc1.connect(this.filter);
      this.osc2.connect(this.filter);
      this.filter.connect(this.gain);
      this.gain.connect(this.ctx.destination);

      this.osc1.start();
      this.osc2.start();
    }

    updateSpeed(speedRatio) {
      if (!this.ctx) return;
      const targetFreq1 = 65 + speedRatio * 180;
      const targetFreq2 = 130 + speedRatio * 360;
      this.osc1.frequency.setTargetAtTime(targetFreq1, this.ctx.currentTime, 0.1);
      this.osc2.frequency.setTargetAtTime(targetFreq2, this.ctx.currentTime, 0.1);
    }

    toggle(enable) {
      if (enable) {
        this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        this.gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      } else if (this.ctx && this.gain) {
        this.gain.gain.setValueAtTime(0, this.ctx.currentTime);
      }
    }
  }

  // ==========================================
  // 6. THREE.JS 360° 3D BOOK PREVIEW RENDERER
  // ==========================================
  let bookScene, bookCamera, bookRenderer;
  let bookMesh, frontCoverMesh;
  let isBookFlipped = false;
  let isDraggingBook = false;
  let previousMousePos = { x: 0, y: 0 };

  function initThreeBookViewer() {
    const container = document.getElementById('three-book-container');
    if (!container || bookRenderer) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    bookScene = new THREE.Scene();
    bookScene.background = new THREE.Color('#f8fafc');

    bookCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    bookCamera.position.set(0, 0, 14);

    bookRenderer = new THREE.WebGLRenderer({ antialias: true });
    bookRenderer.setSize(width, height);
    bookRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    bookRenderer.shadowMap.enabled = true;
    container.appendChild(bookRenderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.85);
    bookScene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.0);
    dirLight.position.set(10, 20, 15);
    dirLight.castShadow = true;
    bookScene.add(dirLight);

    // Build 3D Hardcover Book Model
    build3DBookModel();

    // Mouse Drag Rotation Events
    const dom = bookRenderer.domElement;
    dom.addEventListener('mousedown', (e) => {
      isDraggingBook = true;
      previousMousePos = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { isDraggingBook = false; });

    dom.addEventListener('mousemove', (e) => {
      if (!isDraggingBook || !bookMesh) return;
      const deltaX = e.clientX - previousMousePos.x;
      const deltaY = e.clientY - previousMousePos.y;

      bookMesh.rotation.y += deltaX * 0.01;
      bookMesh.rotation.x += deltaY * 0.01;

      previousMousePos = { x: e.clientX, y: e.clientY };
    });

    // Render loop for Book Viewer
    function renderBook() {
      requestAnimationFrame(renderBook);
      if (bookRenderer && bookScene && bookCamera) {
        bookRenderer.render(bookScene, bookCamera);
      }
    }
    renderBook();
  }

  function build3DBookModel() {
    if (bookMesh) bookScene.remove(bookMesh);

    bookMesh = new THREE.Group();

    const coverColor = currentDetailBook ? currentDetailBook.color1 : '#e11d48';

    // Page Block (White pages)
    const pageGeo = new THREE.BoxGeometry(4.8, 6.8, 0.8);
    const pageMat = new THREE.MeshStandardMaterial({ color: 0xfffbeb, roughness: 0.9 });
    const pageBlock = new THREE.Mesh(pageGeo, pageMat);
    bookMesh.add(pageBlock);

    // Back Cover
    const backCoverGeo = new THREE.BoxGeometry(5.0, 7.0, 0.1);
    const coverMat = new THREE.MeshStandardMaterial({ color: coverColor, roughness: 0.3, metalness: 0.2 });
    const backCover = new THREE.Mesh(backCoverGeo, coverMat);
    backCover.position.z = -0.45;
    bookMesh.add(backCover);

    // Spine
    const spineGeo = new THREE.BoxGeometry(0.1, 7.0, 1.0);
    const spine = new THREE.Mesh(spineGeo, coverMat);
    spine.position.x = -2.5;
    bookMesh.add(spine);

    // Front Cover (Interactive Flip Group)
    frontCoverMesh = new THREE.Group();
    frontCoverMesh.position.x = -2.5; // Hinge axis

    const frontCoverPlane = new THREE.Mesh(new THREE.BoxGeometry(5.0, 7.0, 0.1), coverMat);
    frontCoverPlane.position.x = 2.5; // Offset from hinge
    frontCoverPlane.position.z = 0.45;
    frontCoverMesh.add(frontCoverPlane);

    bookMesh.add(frontCoverMesh);

    // Initial Rotation Tilt
    bookMesh.rotation.x = 0.2;
    bookMesh.rotation.y = -0.5;

    bookScene.add(bookMesh);
  }

  // ==========================================
  // 7. UI RENDERERS & EVENT HANDLERS
  // ==========================================
  function renderAllViews() {
    renderNewReleases();
    renderSearchResults();
    renderCurations();
    renderCart();
    renderBookDetail();
  }

  function renderNewReleases() {
    const container = document.getElementById('home-new-releases-container');
    if (!container) return;

    if (newReleasesViewMode === 'GRID') {
      container.className = 'releases-grid-view';
      container.innerHTML = BOOKS.map(book => `
        <div class="book-card-3d">
          <div class="book-cover-wrapper">
            <div class="book-cover-sim" style="background: linear-gradient(135deg, ${book.color1}, ${book.color2})">
              <span class="cover-lang-badge">${book.lang}</span>
              <div>
                <h4 class="cover-title">${book.title}</h4>
                <p class="cover-author">${book.author}</p>
              </div>
            </div>
          </div>
          <div class="book-info">
            <div class="book-meta-tags">
              <span class="badge-kdc">${book.kdcName}</span>
              <span class="badge-isbn">${book.isbn}</span>
            </div>
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">${book.author} | ${book.publisher}</p>
            <div class="book-price-bar">
              <div>
                <span class="price-list">₩${book.price.toLocaleString()}</span>
                <span class="price-b2b"> ₩${Math.round(book.price * 0.9).toLocaleString()}</span>
              </div>
              <button class="sky-btn outline-btn sm-btn btn-view-detail" data-id="${book.id}">3D 서지</button>
            </div>
            <div class="book-actions">
              <button class="sky-btn primary-btn sm-btn full-btn btn-add-cart" data-id="${book.id}">
                <i class="fa-solid fa-cart-plus"></i> <span data-i18n="btnAddCart">담기</span>
              </button>
            </div>
          </div>
        </div>
      `).join('');
    } else {
      container.className = 'releases-table-view';
      container.innerHTML = `
        <table class="sky-table">
          <thead>
            <tr>
              <th>표지</th>
              <th>도서명 / 저자</th>
              <th>언어/분류</th>
              <th>ISBN</th>
              <th>정가</th>
              <th>사서 수서가 (10% off)</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            ${BOOKS.map(book => `
              <tr>
                <td>
                  <div style="width:40px;height:55px;border-radius:4px;background:linear-gradient(135deg, ${book.color1}, ${book.color2});display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:bold;">
                    ${book.lang}
                  </div>
                </td>
                <td>
                  <strong>${book.title}</strong>
                  <div style="font-size:12px;color:#64748b">${book.author} | ${book.publisher}</div>
                </td>
                <td><span class="badge-kdc">${book.kdcName}</span></td>
                <td style="font-family:monospace;font-size:12px;">${book.isbn}</td>
                <td style="text-decoration:line-through;color:#94a3b8;">₩${book.price.toLocaleString()}</td>
                <td><strong style="color:#b45309;">₩${Math.round(book.price * 0.9).toLocaleString()}</strong></td>
                <td>
                  <button class="sky-btn primary-btn sm-btn btn-add-cart" data-id="${book.id}">담기</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }

    bindBookEvents();
  }

  function renderSearchResults() {
    const container = document.getElementById('search-results-container');
    if (!container) return;

    const keyword = (document.getElementById('search-keyword')?.value || '').toLowerCase();
    const lang = document.getElementById('filter-lang')?.value || 'ALL';
    const age = document.getElementById('filter-age')?.value || 'ALL';
    const kdc = document.getElementById('filter-kdc')?.value || 'ALL';
    const pub = document.getElementById('filter-pub')?.value || 'ALL';

    const filtered = BOOKS.filter(book => {
      const matchKey = !keyword || book.title.toLowerCase().includes(keyword) || book.author.toLowerCase().includes(keyword) || book.isbn.includes(keyword);
      const matchLang = lang === 'ALL' || book.lang === lang;
      const matchAge = age === 'ALL' || book.age === age;
      const matchKDC = kdc === 'ALL' || book.kdc === kdc;
      const matchPub = pub === 'ALL' || book.publisher === pub;
      return matchKey && matchLang && matchAge && matchKDC && matchPub;
    });

    const totalBadge = document.getElementById('search-total-count');
    if (totalBadge) totalBadge.innerText = filtered.length;

    container.innerHTML = filtered.map(book => `
      <div class="book-card-3d">
        <div class="book-cover-wrapper">
          <div class="book-cover-sim" style="background: linear-gradient(135deg, ${book.color1}, ${book.color2})">
            <span class="cover-lang-badge">${book.lang}</span>
            <div>
              <h4 class="cover-title">${book.title}</h4>
              <p class="cover-author">${book.author}</p>
            </div>
          </div>
        </div>
        <div class="book-info">
          <div class="book-meta-tags">
            <span class="badge-kdc">${book.kdcName}</span>
          </div>
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">${book.author}</p>
          <div class="book-price-bar">
            <div>
              <span class="price-list">₩${book.price.toLocaleString()}</span>
              <span class="price-b2b"> ₩${Math.round(book.price * 0.9).toLocaleString()}</span>
            </div>
          </div>
          <div class="book-actions">
            <button class="sky-btn primary-btn sm-btn full-btn btn-add-cart" data-id="${book.id}">담기</button>
            <button class="sky-btn outline-btn sm-btn btn-view-detail" data-id="${book.id}">상세</button>
          </div>
        </div>
      </div>
    `).join('');

    bindBookEvents();
  }

  function renderCurations() {
    const container = document.getElementById('curation-packages-grid');
    if (!container) return;

    container.innerHTML = CURATIONS.map(c => `
      <div class="curation-card">
        <div class="stack-banner" style="background: ${c.color}">
          <div class="book-stack-visual">
            <div class="stack-book" style="background: #e11d48"></div>
            <div class="stack-book" style="background: #2563eb"></div>
            <div class="stack-book" style="background: #d97706"></div>
          </div>
        </div>
        <div class="curation-body">
          <span class="curation-badge">15% EXTRA B2B DISCOUNT</span>
          <h3 class="curation-title">${c.title}</h3>
          <p class="curation-desc">${c.desc}</p>
          <div class="curation-price-box">
            <div>
              <span style="font-size:12px;color:#94a3b8;text-decoration:line-through;">₩${c.listPrice.toLocaleString()}</span>
              <div style="font-size:20px;font-weight:800;color:#b45309;">₩${c.b2bPrice.toLocaleString()}</div>
            </div>
            <span style="font-size:12px;font-weight:700;color:#e11d48;">(${c.count}권 패키지)</span>
          </div>
          <button class="sky-btn gold-gradient-btn full-btn btn-add-curation" data-id="${c.id}">
            <i class="fa-solid fa-box-open"></i> 패키지 전체 담기
          </button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.btn-add-curation').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cId = e.currentTarget.dataset.id;
        const cur = CURATIONS.find(x => x.id === cId);
        if (cur) {
          cur.books.forEach(bId => addToCart(bId));
          alert(`'${cur.title}' 패키지 도서가 공문 견적함에 담겼습니다!`);
        }
      });
    });
  }

  function renderCart() {
    const tbody = document.getElementById('cart-table-body');
    const emptyMsg = document.getElementById('cart-empty-msg');
    const badge = document.getElementById('cart-count');
    const badgeSub = document.getElementById('cart-item-count-badge');

    const totalQty = CART.reduce((acc, i) => acc + i.qty, 0);
    if (badge) badge.innerText = totalQty;
    if (badgeSub) badgeSub.innerText = totalQty;

    if (CART.length === 0) {
      if (tbody) tbody.innerHTML = '';
      if (emptyMsg) emptyMsg.style.display = 'block';
    } else {
      if (emptyMsg) emptyMsg.style.display = 'none';
      if (tbody) {
        tbody.innerHTML = CART.map((item, idx) => {
          const book = BOOKS.find(b => b.id === item.bookId);
          if (!book) return '';
          const b2bPrice = Math.round(book.price * 0.9);
          const subtotal = b2bPrice * item.qty;

          return `
            <tr>
              <td>
                <div style="width:40px;height:55px;border-radius:4px;background:linear-gradient(135deg, ${book.color1}, ${book.color2});display:flex;align-items:center;justify-content:center;color:#fff;font-size:10px;font-weight:bold;">
                  ${book.lang}
                </div>
              </td>
              <td>
                <strong>${book.title}</strong>
                <div style="font-size:11px;color:#64748b;">${book.isbn} | KDC ${book.kdc}</div>
              </td>
              <td>
                <div style="font-size:12px;color:#94a3b8;text-decoration:line-through;">₩${book.price.toLocaleString()}</div>
                <strong style="color:#b45309;">₩${b2bPrice.toLocaleString()}</strong>
              </td>
              <td>
                <div class="qty-control">
                  <button class="qty-btn btn-qty-dec" data-id="${book.id}">-</button>
                  <span class="qty-val">${item.qty}</span>
                  <button class="qty-btn btn-qty-inc" data-id="${book.id}">+</button>
                </div>
              </td>
              <td><strong>₩${subtotal.toLocaleString()}</strong></td>
              <td>
                <button class="sky-btn danger-text-btn btn-cart-del" data-id="${book.id}"><i class="fa-solid fa-xmark"></i></button>
              </td>
            </tr>
          `;
        }).join('');
      }
    }

    updateCartSummary();

    // Bind Cart Item Buttons
    document.querySelectorAll('.btn-qty-inc').forEach(b => b.addEventListener('click', (e) => updateQty(e.currentTarget.dataset.id, 1)));
    document.querySelectorAll('.btn-qty-dec').forEach(b => b.addEventListener('click', (e) => updateQty(e.currentTarget.dataset.id, -1)));
    document.querySelectorAll('.btn-cart-del').forEach(b => b.addEventListener('click', (e) => removeFromCart(e.currentTarget.dataset.id)));
  }

  function updateCartSummary() {
    let totalList = 0;
    let totalQty = 0;

    CART.forEach(item => {
      const book = BOOKS.find(b => b.id === item.bookId);
      if (book) {
        totalList += book.price * item.qty;
        totalQty += item.qty;
      }
    });

    const discount = Math.round(totalList * 0.10);
    const isMarcChecked = document.getElementById('chk-marc-cataloging')?.checked;
    const marcPrice = isMarcChecked ? totalQty * 500 : 0;
    const finalPrice = totalList - discount + marcPrice;

    document.getElementById('sum-list-price').innerText = `₩${totalList.toLocaleString()}`;
    document.getElementById('sum-discount-amount').innerText = `-₩${discount.toLocaleString()}`;
    document.getElementById('sum-marc-price').innerText = `₩${marcPrice.toLocaleString()}`;
    document.getElementById('sum-final-price').innerText = `₩${finalPrice.toLocaleString()}`;
  }

  function addToCart(bookId) {
    const existing = CART.find(i => i.bookId === bookId);
    if (existing) {
      existing.qty += 1;
    } else {
      CART.push({ bookId, qty: 1 });
    }
    renderCart();
  }

  function updateQty(bookId, delta) {
    const item = CART.find(i => i.bookId === bookId);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        removeFromCart(bookId);
      } else {
        renderCart();
      }
    }
  }

  function removeFromCart(bookId) {
    CART = CART.filter(i => i.bookId !== bookId);
    renderCart();
  }

  function bindBookEvents() {
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        addToCart(id);
        alert('선택 도서가 공문 견적함에 담겼습니다.');
      });
    });

    document.querySelectorAll('.btn-view-detail').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const b = BOOKS.find(x => x.id === id);
        if (b) {
          currentDetailBook = b;
          window.location.hash = '#detail';
        }
      });
    });
  }

  function renderBookDetail() {
    if (!currentDetailBook) return;

    document.getElementById('detail-title').innerText = currentDetailBook.title;
    document.getElementById('detail-subtitle').innerText = currentDetailBook.subtitle;
    document.getElementById('detail-lang').innerText = currentDetailBook.lang;
    document.getElementById('detail-kdc').innerText = `KDC ${currentDetailBook.kdc}`;
    document.getElementById('detail-author').innerText = currentDetailBook.author;
    document.getElementById('detail-publisher').innerText = currentDetailBook.publisher;
    document.getElementById('detail-isbn').innerText = currentDetailBook.isbn;
    document.getElementById('detail-age').innerText = currentDetailBook.ageLabel;
    document.getElementById('detail-binding').innerText = currentDetailBook.binding;
    document.getElementById('detail-cip').innerText = currentDetailBook.cip;
    document.getElementById('detail-summary').innerText = currentDetailBook.summary;
    document.getElementById('detail-list-price').innerText = `₩${currentDetailBook.price.toLocaleString()}`;
    document.getElementById('detail-supply-price').innerText = `₩${Math.round(currentDetailBook.price * 0.9).toLocaleString()}`;

    // Rebuild 3D model for new detail book
    build3DBookModel();
  }

  // ==========================================
  // 8. OFFICIAL QUOTE GENERATOR (PDF/PRINT/CSV)
  // ==========================================
  function generateQuoteDocument() {
    if (CART.length === 0) {
      alert('장바구니에 담긴 수서 도서가 없습니다.');
      return;
    }

    const instName = document.getElementById('inst-name')?.value || '서울특별시립 다문화 중앙도서관';
    const instMgr = document.getElementById('inst-manager')?.value || '김사서 주무관';
    const instTax = document.getElementById('inst-tax-id')?.value || '120-82-01928';

    document.getElementById('q-inst-name').innerText = instName;
    document.getElementById('q-inst-mgr').innerText = instMgr + ' 귀하';
    document.getElementById('q-inst-tax').innerText = instTax;
    document.getElementById('q-date').innerText = new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });

    let totalList = 0;
    let totalQty = 0;

    const tbody = document.getElementById('q-items-tbody');
    tbody.innerHTML = CART.map((item, idx) => {
      const book = BOOKS.find(b => b.id === item.bookId);
      if (!book) return '';
      const b2bPrice = Math.round(book.price * 0.9);
      const subtotal = b2bPrice * item.qty;
      totalList += book.price * item.qty;
      totalQty += item.qty;

      return `
        <tr>
          <td>${idx + 1}</td>
          <td style="text-align:left;">${book.title}</td>
          <td>${book.isbn}</td>
          <td>${book.lang}</td>
          <td>₩${book.price.toLocaleString()}</td>
          <td>₩${b2bPrice.toLocaleString()}</td>
          <td>${item.qty}</td>
          <td>₩${subtotal.toLocaleString()}</td>
        </tr>
      `;
    }).join('');

    const discount = Math.round(totalList * 0.10);
    const isMarcChecked = document.getElementById('chk-marc-cataloging')?.checked;
    const marcPrice = isMarcChecked ? totalQty * 500 : 0;
    const finalPrice = totalList - discount + marcPrice;

    document.getElementById('q-sum-list').innerText = `₩${totalList.toLocaleString()}`;
    document.getElementById('q-sum-disc').innerText = `-₩${discount.toLocaleString()}`;
    document.getElementById('q-sum-marc').innerText = `₩${marcPrice.toLocaleString()}`;
    document.getElementById('q-sum-final').innerText = `₩${finalPrice.toLocaleString()}`;

    document.getElementById('q-total-words').innerText = `₩${finalPrice.toLocaleString()} 원정`;

    // Show Modal
    const modal = document.getElementById('modal-quote');
    if (modal) modal.classList.remove('hidden');
  }

  function exportCSV() {
    if (CART.length === 0) {
      alert('다운로드할 수서 도서가 없습니다.');
      return;
    }

    let csvContent = "\uFEFFNo,Title,ISBN,Language,KDC,ListPrice,B2BSupplyPrice,Qty,Publisher\n";
    CART.forEach((item, idx) => {
      const b = BOOKS.find(x => x.id === item.bookId);
      if (b) {
        csvContent += `${idx + 1},"${b.title}",${b.isbn},${b.lang},${b.kdc},${b.price},${Math.round(b.price * 0.9)},${item.qty},"${b.publisher}"\n`;
      }
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `AETHERIA_Multicultural_Book_Procurement_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // ==========================================
  // 9. SPA ROUTER & EVENT INITIALIZER
  // ==========================================
  function handleRoute() {
    const hash = window.location.hash || '#home';
    const pageId = hash.substring(1);

    document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

    const targetView = document.getElementById(`view-${pageId}`);
    const targetNav = document.querySelector(`.nav-btn[data-page="${pageId}"]`);

    if (targetView) targetView.classList.add('active');
    if (targetNav) targetNav.classList.add('active');

    if (pageId === 'home') {
      setTimeout(initThreeSkyWorld, 100);
    } else if (pageId === 'detail') {
      setTimeout(initThreeBookViewer, 100);
      renderBookDetail();
    }
  }

  function setLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    const dict = I18N[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.innerText = dict[key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (dict[key]) el.placeholder = dict[key];
    });

    renderAllViews();
  }

  // DOM Content Loaded Handler
  document.addEventListener('DOMContentLoaded', () => {
    // Sound Engine Initialization
    audioSynth = new AudioEngine();

    const soundBtn = document.getElementById('audio-toggle-btn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        isSoundEnabled = !isSoundEnabled;
        soundBtn.classList.toggle('active', isSoundEnabled);
        audioSynth.toggle(isSoundEnabled);
      });
    }

    // Language Selector
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
    }

    // Router Events
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // Initialize Views
    renderAllViews();

    // View Switcher (Grid vs Table)
    document.getElementById('btn-view-cards')?.addEventListener('click', () => {
      newReleasesViewMode = 'GRID';
      document.getElementById('btn-view-cards').classList.add('active');
      document.getElementById('btn-view-table').classList.remove('active');
      renderNewReleases();
    });

    document.getElementById('btn-view-table')?.addEventListener('click', () => {
      newReleasesViewMode = 'TABLE';
      document.getElementById('btn-view-table').classList.add('active');
      document.getElementById('btn-view-cards').classList.remove('active');
      renderNewReleases();
    });

    // Search Controls Listener
    document.getElementById('search-keyword')?.addEventListener('input', renderSearchResults);
    document.getElementById('filter-lang')?.addEventListener('change', renderSearchResults);
    document.getElementById('filter-age')?.addEventListener('change', renderSearchResults);
    document.getElementById('filter-kdc')?.addEventListener('change', renderSearchResults);
    document.getElementById('filter-pub')?.addEventListener('change', renderSearchResults);
    document.getElementById('search-submit-btn')?.addEventListener('click', renderSearchResults);

    // Cart Actions
    document.getElementById('chk-marc-cataloging')?.addEventListener('change', updateCartSummary);
    document.getElementById('btn-clear-cart')?.addEventListener('click', () => {
      if (confirm('장바구니를 전체 비우시겠습니까?')) {
        CART = [];
        renderCart();
      }
    });

    document.getElementById('btn-generate-quote-modal')?.addEventListener('click', generateQuoteDocument);
    document.getElementById('btn-export-csv')?.addEventListener('click', exportCSV);

    // Modal Close Triggers
    document.getElementById('close-quote-modal')?.addEventListener('click', () => document.getElementById('modal-quote').classList.add('hidden'));
    document.getElementById('close-quote-modal-2')?.addEventListener('click', () => document.getElementById('modal-quote').classList.add('hidden'));
    document.getElementById('btn-print-quote')?.addEventListener('click', () => window.print());

    // Island Landing Hotspot Button Trigger
    document.getElementById('toast-land-btn')?.addEventListener('click', () => {
      if (currentDetectedIsland) {
        openIslandExhibitionModal(currentDetectedIsland);
      }
    });

    document.querySelectorAll('.explore-island-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const island = e.currentTarget.dataset.island;
        openIslandExhibitionModal(island);
      });
    });

    document.getElementById('close-exhibition-modal')?.addEventListener('click', () => document.getElementById('modal-island-exhibition').classList.add('hidden'));
    document.getElementById('close-exhibition-modal-2')?.addEventListener('click', () => document.getElementById('modal-island-exhibition').classList.add('hidden'));

    // 3D Book Viewer Controls
    document.getElementById('btn-rotate-left')?.addEventListener('click', () => { if (bookMesh) bookMesh.rotation.y -= 0.5; });
    document.getElementById('btn-rotate-right')?.addEventListener('click', () => { if (bookMesh) bookMesh.rotation.y += 0.5; });
    document.getElementById('btn-flip-book')?.addEventListener('click', () => {
      if (frontCoverMesh) {
        isBookFlipped = !isBookFlipped;
        frontCoverMesh.rotation.y = isBookFlipped ? -Math.PI * 0.85 : 0;
      }
    });
    document.getElementById('btn-reset-3d')?.addEventListener('click', () => {
      if (bookMesh) {
        bookMesh.rotation.x = 0.2;
        bookMesh.rotation.y = -0.5;
        if (frontCoverMesh) frontCoverMesh.rotation.y = 0;
        isBookFlipped = false;
      }
    });

    // Web Speech API Narration Preview
    document.getElementById('btn-play-narration')?.addEventListener('click', () => {
      if ('speechSynthesis' in window && currentDetailBook) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance(currentDetailBook.audioText);
        window.speechSynthesis.speak(msg);
      } else {
        alert('이 브라우저는 음성 낭독(Web Speech API)을 지원하지 않습니다.');
      }
    });

    // Add to Cart from Detail Page
    document.getElementById('detail-add-cart-btn')?.addEventListener('click', () => {
      if (currentDetailBook) {
        addToCart(currentDetailBook.id);
        alert(`'${currentDetailBook.title}' 책이 공문 견적함에 담겼습니다.`);
      }
    });
  });

  function openIslandExhibitionModal(islandKey) {
    const modal = document.getElementById('modal-island-exhibition');
    const title = document.getElementById('exhibition-modal-title');
    const headTitle = document.getElementById('exhibition-head-title');
    const headDesc = document.getElementById('exhibition-head-desc');
    const grid = document.getElementById('exhibition-books-grid');

    if (!modal || !grid) return;

    let filtered = BOOKS;
    if (islandKey === 'asian') {
      if (title) title.innerText = '아시아 구름 섬 3D 기획전';
      if (headTitle) headTitle.innerText = '동양 전래동화 & 전통 다문화 도서 특별전';
      if (headDesc) headDesc.innerText = '한국, 베트남, 중국의 아름다운 전래 이야기와 전통 등불 그림책을 수서해보세요.';
      filtered = BOOKS.filter(b => b.island === 'asian' || b.lang === 'KO' || b.lang === 'VI' || b.lang === 'ZH');
    } else if (islandKey === 'european') {
      if (title) title.innerText = '유럽 성 구름 섬 3D 기획전';
      if (headTitle) headTitle.innerText = '유럽 고전 성 & 명작 이중언어 원서 특별전';
      if (headDesc) headDesc.innerText = '영국, 프랑스, 독일 명작 문학 및 프리미엄 원서 서적 묶음.';
      filtered = BOOKS.filter(b => b.island === 'european' || b.lang === 'EN' || b.lang === 'FR');
    } else {
      if (title) title.innerText = '사서 관제 스카이포트 종합관';
      if (headTitle) headTitle.innerText = '스카이포트 다문화 신간 통합 수서전';
      if (headDesc) headDesc.innerText = '전 세계 5개 국어 신간 통합 수서 및 공문 견적 원클릭 서비스.';
      filtered = BOOKS;
    }

    grid.innerHTML = filtered.map(b => `
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:12px;display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          <span style="font-size:10px;font-weight:bold;background:#e2e8f0;padding:2px 6px;border-radius:4px;">${b.lang}</span>
          <h4 style="font-size:13px;margin:6px 0 2px;">${b.title}</h4>
          <p style="font-size:11px;color:#64748b;">${b.author}</p>
        </div>
        <div style="margin-top:10px;display:flex;align-items:center;justify-content:space-between;">
          <strong style="color:#b45309;font-size:14px;">₩${Math.round(b.price * 0.9).toLocaleString()}</strong>
          <button class="sky-btn primary-btn sm-btn btn-add-cart" data-id="${b.id}">담기</button>
        </div>
      </div>
    `).join('');

    bindBookEvents();
    modal.classList.remove('hidden');
  }

})();
