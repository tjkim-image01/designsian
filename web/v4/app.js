/**
 * Multicultural Library web_v4 Application Logic
 * Stitch 16855217673178088500 - 3D Archival Hall & B2B Procurement Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. i18n Multi-Language Dictionary (KO, EN, VI, ZH, TL)
  // ==========================================================================
  const i18nDict = {
    ko: {
      brand_title: "국립다문화도서관 수서포털",
      brand_sub: "Grand Archival Hall & B2B Book Supply",
      nav_home: "홈 & 3D 아카이브",
      nav_search: "도서 수서/검색",
      nav_curation: "3D 기획 전시관",
      nav_cart: "수서 견적함",
      nav_detail: "360° 서지정보",
      header_quote_btn: "공문 견적함",

      hero_badge: "국립 다문화 도서관 B2B/B2C 수서 전문 아카이브",
      hero_title: "전 세계 지혜를 품은 <br/><span class='text-gold'>3D 웅장한 아카이브 홀</span>",
      hero_desc: "전국 공공·학교 도서관 사서 및 수서 담당자를 위한 맞춤형 다국어 도서 공급 플랫폼. Three.js 3D 가상 전시관 탐색과 1초 공문서 견적서 발급 서비스를 경험해보세요.",
      hero_btn_search: "도서 수서/검색 시작",
      hero_btn_exhibition: "3D 가상 전시관 둘러보기",
      hero_canvas_hint: "마우스를 드래그하여 3D 아카이브 링 & 부유하는 도서 노드를 360° 살펴보세요",

      stat_books: "수장 다문화 도서",
      stat_languages: "지원 원서 언어",
      stat_libraries: "전국 납품 도서관",
      stat_discount: "사서 수서 특별할인",

      exhibition_badge: "3D Virtual Exhibition Gallery Room",
      exhibition_title: "3D 가상 전시 기획관 (Interactive Room)",
      exhibition_sub: "마우스 드래그로 3D 기획 전시관 내부를 거닐며 이달의 수서 기획전 도서를 탐색해보세요.",

      new_release_badge: "New Arrivals & Librarian Picks",
      new_release_title: "금주의 신간 및 사서 추천 수서 도서",
      view_all_books: "전체 도서 보기",

      search_page_title: "🔍 다문화 도서 검색 & 사서 수서 시스템",
      search_page_desc: "ISBN, KDC 분류기호, 국가/언어, 연령별 맞춤 필터링으로 필요 서적을 빠르게 탐색하고 견적함에 담으세요.",
      search_ph: "도서명, 저자, 출판사, ISBN-13, KDC 분류기호 검색...",
      btn_search: "실시간 검색",
      filter_lang: "지원 언어 (Language)",
      filter_age: "대상 연령 (Target Age)",
      filter_kdc: "KDC 한국십진분류",
      filter_publisher: "출판사 (Publisher)",
      filter_sort: "정렬 기준",
      search_result_prefix: "검색 결과 총",
      search_result_suffix: "권의 도서가 검색되었습니다.",
      btn_batch_add: "선택 항목 일괄 견적함 담기",

      curation_badge: "Special 3D Exhibition Curation Packages",
      curation_title: "📦 사서 맞춤 3D 기획 전시 큐레이션 패키지",
      curation_desc: "공공 및 학교 도서관 수서 예산 집행에 최적화된 테마별 맞춤 도서 패키지입니다. 3D 360° 번들 입체 미리보기와 원클릭 15% 할인 일괄 견적 담기를 이용해보세요.",

      cart_page_title: "📋 사서 수서 견적함 (Bulk Order Quote Cart)",
      cart_page_desc: "선택된 수서 도서 목록을 확인하고, 1-Click 공문서 표준 견적서(PDF/출력) 및 엑셀 명세서를 바로 발급받으세요.",
      btn_cart_clear: "견적함 전체 비우기",
      col_book_info: "도서 서지 정보",
      col_kdc: "KDC / ISBN",
      col_price: "정가",
      col_qty: "수량",
      col_discount_total: "할인가 합계",

      summary_title: "수서 예산 견적 요약",
      sum_item_count: "선택 도서 종수",
      sum_total_msrp: "도서 정가 총액",
      sum_librarian_discount: "사서 수서 특별할인 (-15%)",
      sum_tax: "부가가치세 (면세)",
      sum_final_quote: "최종 납품 견적 금액",
      btn_generate_pdf: "1-Click 공문서 표준 견적서 발급",
      btn_export_excel: "엑셀/CSV 수서 목록 다운로드",
      quote_notice: "본 견적서는 전국 지자체, 공공도서관, 교육청 수서 규정에 적합한 표준 공문서 양식으로 즉시 인쇄 및 PDF 저장이 가능합니다.",

      btn_back_search: "검색목록으로 돌아가기",
      btn_add_to_cart: "수서 견적함에 담기",

      footer_desc: "본 포털은 전국 공공도서관, 학교도서관, 다문화 교육센터 사서 선생님들을 위해 3D 가상 전시 연출과 표준 공문서 견적 발급 서비스를 제공하는 다문화 전문 도서 수서 플랫폼입니다."
    },
    en: {
      brand_title: "National Multicultural Library Portal",
      brand_sub: "Grand Archival Hall & B2B Book Supply",
      nav_home: "Home & 3D Archive",
      nav_search: "Book Search & Acquisition",
      nav_curation: "3D Exhibition Curation",
      nav_cart: "Quote Cart",
      nav_detail: "360° Bibliographic Info",
      header_quote_btn: "Official Quote",

      hero_badge: "National B2B/B2C Multicultural Book Supply Archive",
      hero_title: "Empowering Global Wisdom in <br/><span class='text-gold'>3D Grand Archival Hall</span>",
      hero_desc: "Dedicated book acquisition portal for institutional librarians. Explore interactive 3D virtual exhibition halls and issue official PDF procurement invoices in 1-click.",
      hero_btn_search: "Start Acquisition Search",
      hero_btn_exhibition: "Explore 3D Virtual Gallery",
      hero_canvas_hint: "Drag mouse to rotate 3D Archival Rings & Orbiting Book Nodes 360°",

      stat_books: "Cataloged Books",
      stat_languages: "Original Languages",
      stat_libraries: "Partner Libraries",
      stat_discount: "Librarian Discount",

      exhibition_badge: "3D Virtual Exhibition Gallery Room",
      exhibition_title: "Interactive 3D Virtual Gallery Room",
      exhibition_sub: "Walk through the 3D exhibition hall to inspect curated multicultural book collections of the month.",

      new_release_badge: "New Arrivals & Librarian Picks",
      new_release_title: "Featured New Releases & Acquisition Picks",
      view_all_books: "View All Books",

      search_page_title: "🔍 Multicultural Book Search & Librarian System",
      search_page_desc: "Filter instantly by ISBN, KDC classification, language, target age, and publisher to build your procurement cart.",
      search_ph: "Search Title, Author, Publisher, ISBN-13, KDC Code...",
      btn_search: "Search Now",
      filter_lang: "Language Filter",
      filter_age: "Target Age",
      filter_kdc: "KDC Classification",
      filter_publisher: "Publisher",
      filter_sort: "Sort By",
      search_result_prefix: "Found a total of",
      search_result_suffix: "books.",
      btn_batch_add: "Add Selected Items to Quote",

      curation_badge: "Special 3D Exhibition Curation Packages",
      curation_title: "📦 Special 3D Exhibition Curation Bundles",
      curation_desc: "Curated collection bundles designed for public & school library budget execution with 15% institutional discount.",

      cart_page_title: "📋 Librarian Procurement Quote Cart",
      cart_page_desc: "Review your selected acquisition list and generate 1-Click official PDF invoices & Excel MARC manifests.",
      btn_cart_clear: "Clear All Items",
      col_book_info: "Bibliographic Metadata",
      col_kdc: "KDC / ISBN",
      col_price: "List Price",
      col_qty: "Qty",
      col_discount_total: "Discounted Total",

      summary_title: "Acquisition Budget Summary",
      sum_item_count: "Selected Titles",
      sum_total_msrp: "Total List MSRP",
      sum_librarian_discount: "Librarian Discount (-15%)",
      sum_tax: "Tax (Exempt)",
      sum_final_quote: "Final Quote Total",
      btn_generate_pdf: "Generate Official PDF Invoice",
      btn_export_excel: "Download Excel/CSV List",
      quote_notice: "This quote meets official public library procurement standards and is ready for immediate PDF printing.",

      btn_back_search: "Back to Search Results",
      btn_add_to_cart: "Add to Procurement Quote",

      footer_desc: "The National Multicultural Library Procurement Portal supports librarians and educators with 3D exhibition technology and official document generation."
    },
    vi: {
      brand_title: "Cổng Thư Viện Đa Văn Hóa Quốc Gia",
      brand_sub: "Grand Archival Hall & B2B Book Supply",
      nav_home: "Trang Chủ & 3D Archive",
      nav_search: "Tìm Kiếm Sách",
      nav_curation: "Triển Lãm 3D",
      nav_cart: "Báo Giá Sách",
      nav_detail: "Thông Tin 360°",
      header_quote_btn: "Phiếu Báo Giá",

      hero_badge: "Cổng Bổ Sung Sách Đa Văn Hóa B2B/B2C Cho Thư Viện",
      hero_title: "Khám Phá Tri Thức Thế Giới <br/><span class='text-gold'>Trong Sảnh 3D Lưu Trữ</span>",
      hero_desc: "Nền tảng mua sắm sách đa ngôn ngữ dành cho thủ thư. Trải nghiệm triển lãm 3D tương tác và xuất hóa đơn báo giá chính thức trong 1 giây.",
      hero_btn_search: "Tìm Kiếm Ngay",
      hero_btn_exhibition: "Khám Phá Phòng Triển Lãm 3D",
      hero_canvas_hint: "Kéo chuột để xoay vòng 3D và các nút sách 360°",

      stat_books: "Sách Trong Kho",
      stat_languages: "Ngôn Ngữ Nguyên Bản",
      stat_libraries: "Thư Viện Đối Tác",
      stat_discount: "Ưu Đãi Thủ Thư",

      exhibition_badge: "3D Virtual Exhibition Gallery Room",
      exhibition_title: "Phòng Triển Lãm 3D Ảo Tương Tác",
      exhibition_sub: "Dạo bước trong phòng triển lãm 3D để khám phá bộ sưu tập sách đa văn hóa theo chủ đề.",

      new_release_badge: "New Arrivals & Librarian Picks",
      new_release_title: "Sách Mới Xuất Bản & Đề Xuất Bổ Sung",
      view_all_books: "Xem Tất Cả Sách",

      search_page_title: "🔍 Tìm Kiếm Sách Đa Văn Hóa & Hệ Thống Thủ Thư",
      search_page_desc: "Lọc nhanh theo ISBN, mã KDC, ngôn ngữ và độ tuổi để thêm vào giỏ báo giá bổ sung.",
      search_ph: "Tìm tên sách, tác giả, nhà xuất bản, ISBN, mã KDC...",
      btn_search: "Tìm Kiếm",
      filter_lang: "Ngôn Ngữ",
      filter_age: "Độ Tuổi Target",
      filter_kdc: "Phân Loại KDC",
      filter_publisher: "Nhà Xuất Bản",
      filter_sort: "Sắp Xếp",
      search_result_prefix: "Tìm thấy tổng cộng",
      search_result_suffix: "cuốn sách.",
      btn_batch_add: "Thêm Các Mục Đã Chọn Vào Báo Giá",

      curation_badge: "Special 3D Exhibition Curation Packages",
      curation_title: "📦 Gói Bộ Sưu Tập Triển Lãm 3D Đặc Biệt",
      curation_desc: "Gói sách chuyên biệt dành cho ngân sách thư viện với mức chiết khấu 15% dành cho thủ thư.",

      cart_page_title: "📋 Giỏ Báo Giá Mua Sắm Của Thủ Thư",
      cart_page_desc: "Kiểm tra danh sách sách đã chọn và xuất hóa đơn PDF chính thức hoặc tệp Excel.",
      btn_cart_clear: "Xóa Toàn Bộ",
      col_book_info: "Thông Tin Thư Mục",
      col_kdc: "KDC / ISBN",
      col_price: "Giá Niêm Yết",
      col_qty: "Số Lượng",
      col_discount_total: "Tổng Sau Chiết Khấu",

      summary_title: "Tóm Tắt Báo Giá Ngân Sách",
      sum_item_count: "Số Đầu Sách",
      sum_total_msrp: "Tổng Giá Niêm Yết",
      sum_librarian_discount: "Giảm Giá Thủ Thư (-15%)",
      sum_tax: "Thuế (Miễn Thuế)",
      sum_final_quote: "Tổng Thanh Toán Báo Giá",
      btn_generate_pdf: "Xuất Hóa Đơn PDF Chính Thức",
      btn_export_excel: "Tải Xuống Tệp Excel/CSV",
      quote_notice: "Hóa đơn báo giá đạt chuẩn mua sắm thư viện công cộng và sẵn sàng in/lưu PDF ngay.",

      btn_back_search: "Quay Lại Kết Quả Tìm Kiếm",
      btn_add_to_cart: "Thêm Vào Báo Giá",

      footer_desc: "Cổng bổ sung sách đa văn hóa hỗ trợ các thư viện công và trường học với công nghệ triển lãm 3D hiện đại."
    },
    zh: {
      brand_title: "韩国国立多元文化图书馆采编门户",
      brand_sub: "Grand Archival Hall & B2B Book Supply",
      nav_home: "首页与3D档案馆",
      nav_search: "图书检索与采编",
      nav_curation: "3D策展特展馆",
      nav_cart: "采编报价单",
      nav_detail: "360°书目信息",
      header_quote_btn: "公文报价单",

      hero_badge: "国立多元文化图书馆 B2B/B2C 专业采编平台",
      hero_title: "汇聚全球智慧的 <br/><span class='text-gold'>3D 宏伟档案馆大厅</span>",
      hero_desc: "专为全国公共与学校图书馆馆员打造的多语种图书供应平台。体验 Three.js 3D 虚拟展厅探索与1秒生成公文标准报价单服务。",
      hero_btn_search: "开始图书检索采编",
      hero_btn_exhibition: "浏览 3D 虚拟展厅",
      hero_canvas_hint: "拖动鼠标 360° 旋转浏览 3D 档案环与浮动图书节点",

      stat_books: "馆藏多元文化图书",
      stat_languages: "支持原著语言",
      stat_libraries: "全国合作图书馆",
      stat_discount: "馆员采编特别优惠",

      exhibition_badge: "3D Virtual Exhibition Gallery Room",
      exhibition_title: "3D 虚拟策展特展馆 (Interactive Room)",
      exhibition_sub: "拖动鼠标漫步于 3D 特展馆内，探索本月推荐的采编主题书展。",

      new_release_badge: "New Arrivals & Librarian Picks",
      new_release_title: "本周新书与馆员推荐采编图书",
      view_all_books: "查看全部图书",

      search_page_title: "🔍 多元文化图书检索与馆员采编系统",
      search_page_desc: "根据 ISBN、KDC 分类号、语种及适合年龄精准筛选所需图书并加入采编报价单。",
      search_ph: "检索书名、作者、出版社、ISBN-13、KDC 分类号...",
      btn_search: "实时检索",
      filter_lang: "支持语言 (Language)",
      filter_age: "适合年龄 (Target Age)",
      filter_kdc: "KDC 韩国十进制分类",
      filter_publisher: "出版社 (Publisher)",
      filter_sort: "排序方式",
      search_result_prefix: "共检索到",
      search_result_suffix: "本图书。",
      btn_batch_add: "批量添加选中项至报价单",

      curation_badge: "Special 3D Exhibition Curation Packages",
      curation_title: "📦 馆员定制 3D 策展特展套餐",
      curation_desc: "优化公共与学校图书馆采编预算执行的主题定制套餐，享有 15% 馆员专属折扣。",

      cart_page_title: "📋 馆员采编报价单 (Bulk Order Quote Cart)",
      cart_page_desc: "核对选中的采编图书清单，一键生成标准 PDF 采购报价单及 Excel 书目明细。",
      btn_cart_clear: "清空报价单",
      col_book_info: "图书书目信息",
      col_kdc: "KDC / ISBN",
      col_price: "定价",
      col_qty: "数量",
      col_discount_total: "折后总价",

      summary_title: "采编预算报价汇总",
      sum_item_count: "选中图书品种",
      sum_total_msrp: "图书定价总额",
      sum_librarian_discount: "馆员采编特别优惠 (-15%)",
      sum_tax: "增值税 (免税)",
      sum_final_quote: "最终采购报价金额",
      btn_generate_pdf: "1秒生成公文标准报价单",
      btn_export_excel: "下载 Excel/CSV 书目清单",
      quote_notice: "本报价单符合全国公共图书馆采购标准，可即时打印或保存为 PDF。",

      btn_back_search: "返回检索结果",
      btn_add_to_cart: "加入采编报价单",

      footer_desc: "本门户为全国公共图书馆与学校图书馆馆员提供 3D 虚拟展厅与标准采购公文生成服务。"
    },
    tl: {
      brand_title: "Pambansang Portal ng Aklatan ng Iba't Ibang Kultura",
      brand_sub: "Grand Archival Hall & B2B Book Supply",
      nav_home: "Tahanan & 3D Archive",
      nav_search: "Paghahanap ng Libro",
      nav_curation: "3D Ekshibisyon",
      nav_cart: "Kart ng Sebo",
      nav_detail: "360° Impormasyon",
      header_quote_btn: "Opisyal na Sebo",

      hero_badge: "Pambansang Portal ng Pagbibigay ng Libro sa Aklatan",
      hero_title: "Tuklasin ang Karunungan sa <br/><span class='text-gold'>3D Grand Archival Hall</span>",
      hero_desc: "Platform para sa mga librarian at tagapamahala ng aklatan. Galugarin ang 3D gallery at kumuha ng opisyal na PDF quote invoice sa 1-click.",
      hero_btn_search: "Mag-search ng Libro",
      hero_btn_exhibition: "Tumingin sa 3D Gallery",
      hero_canvas_hint: "I-drag ang mouse upang i-ikot ang 3D Archival Rings 360°",

      stat_books: "Koleksyon ng Libro",
      stat_languages: "Mga Wika",
      stat_libraries: "Kasosyong Aklatan",
      stat_discount: "Diskwento sa Librarian",

      exhibition_badge: "3D Virtual Exhibition Gallery Room",
      exhibition_title: "Interaktibong 3D Virtual Gallery Room",
      exhibition_sub: "Maglakad sa 3D exhibition hall upang tingnan ang mga espesyal na koleksyon ng libro.",

      new_release_badge: "New Arrivals & Librarian Picks",
      new_release_title: "Mga Bagong Labas at Inirerekomendang Libro",
      view_all_books: "Tingnan Lahat ng Libro",

      search_page_title: "🔍 Paghahanap ng Libro para sa Librarian",
      search_page_desc: "Mabilis na mag-filter gamit ang ISBN, KDC code, wika, at edad.",
      search_ph: "Maghanap ng Pamagat, May-akda, ISBN, KDC...",
      btn_search: "Maghanap",
      filter_lang: "Wika (Language)",
      filter_age: "Edad (Target Age)",
      filter_kdc: "Klasipikasyong KDC",
      filter_publisher: "Naglimbag",
      filter_sort: "Pagsunud-sunurin",
      search_result_prefix: "Nakahanap ng kabuuang",
      search_result_suffix: "na libro.",
      btn_batch_add: "Idagdag ang Pinili sa Quote Cart",

      curation_badge: "Special 3D Exhibition Curation Packages",
      curation_title: "📦 Espesyal na 3D Curation Packages",
      curation_desc: "Mga pakete ng libro na idinisenyo para sa pampublikong aklatan na may 15% diskwento.",

      cart_page_title: "📋 Kart ng Sebo para sa Librarian",
      cart_page_desc: "Suriin ang iyong listahan ng mga libro at kumuha ng opisyal na PDF invoice.",
      btn_cart_clear: "Alisin Lahat",
      col_book_info: "Impormasyon ng Libro",
      col_kdc: "KDC / ISBN",
      col_price: "Presyo",
      col_qty: "Dami",
      col_discount_total: "Kabuuang Presyo",

      summary_title: "Buod ng Badyet sa Pagbili",
      sum_item_count: "Bilang ng Libro",
      sum_total_msrp: "Kabuuang Presyo",
      sum_librarian_discount: "Diskwento sa Librarian (-15%)",
      sum_tax: "Buwis (Exempted)",
      sum_final_quote: "Huling Halaga ng Quote",
      btn_generate_pdf: "Kumuha ng Opisyal na PDF Invoice",
      btn_export_excel: "I-download ang Excel/CSV List",
      quote_notice: "Ang quote na ito ay sumusunod sa pamantayan ng pagbili ng pampublikong aklatan.",

      btn_back_search: "Bumalik sa Paghahanap",
      btn_add_to_cart: "Idagdag sa Quote Cart",

      footer_desc: "Portal ng pagbili ng libro para sa mga pampublikong aklatan at paaralan."
    }
  };

  let currentLang = localStorage.getItem('v4_lang') || 'ko';

  // ==========================================================================
  // 2. Comprehensive Multicultural Books Dataset (20+ Books)
  // ==========================================================================
  const booksDatabase = [
    {
      id: 'b1',
      title: {
        ko: '에펠탑 아래의 작은 하마',
        en: 'The Little Hippo Under Eiffel Tower',
        vi: 'Hà Mã Nhỏ Dưới Tháp Eiffel',
        zh: '埃菲尔铁塔下的小河马',
        tl: 'Ang Maliit na Hippopotamus sa Eiffel Tower'
      },
      subtitle: 'French-Korean Bilingual Picture Book',
      author: '클로드 뒤퐁 (Claude Dupont)',
      publisher: '다문화아시아 출판',
      pubYear: '2026.03',
      isbn: '978-89-98214-01-5',
      kdc: '808.9',
      origLang: '프랑스어 / 이중언어',
      languages: ['KO', 'EN'],
      targetAge: 'child',
      kdcCategory: '800',
      publisherKey: '다문화아시아',
      msrp: 15000,
      coverColor: '#002147',
      summary: {
        ko: '파리 에펠탑 아래 작은 정원에서 살고 있는 아기 하마가 세계 여행자를 만나며 나누는 우정과 문화 포용 이야기입니다.',
        en: 'A heartwarming story of a baby hippo living under the Eiffel Tower meeting global travelers.',
        vi: 'Câu chuyện ấm áp về chú hà mã con sống dưới chân tháp Eiffel gặp gỡ những người bạn du khách thế giới.',
        zh: '讲述一只住在埃菲尔铁塔下的小河马与来自世界各地的旅行者结下深厚友谊的故事。',
        tl: 'Isang kwento tungkol sa isang baby hippo na nakatira sa ilalim ng Eiffel Tower.'
      },
      audioTranscript: {
        ko: '"에펠탑 아래 정원에는 작은 아기 하마가 살고 있었어요. 하마는 매일 아침 전 세계에서 온 여행자들에게 인사를 건넸답니다..."',
        en: '"Under the Eiffel Tower, there lived a tiny baby hippo who greeted travelers from all over the world every morning..."',
        vi: '"Dưới chân tháp Eiffel, có một chú hà mã nhỏ sống trong khu vườn xinh đẹp và chào đón du khách mỗi sáng..."',
        zh: '"在埃菲尔铁塔下的花园里，住着一只小河马，它每天清晨都会向来自世界各地的旅行者问好……"',
        tl: '"Sa ilalim ng Eiffel Tower, may nakatirang isang maliit na baby hippo na bumabati sa mga biyahero araw-araw..."'
      }
    },
    {
      id: 'b2',
      title: {
        ko: '타지마할의 무지개 새',
        en: 'The Rainbow Bird of Taj Mahal',
        vi: 'Chú Chim Cầu Cồng Ở Taj Mahal',
        zh: '泰姬陵的彩虹鸟',
        tl: 'Ang Bahaghari na Ibon ng Taj Mahal'
      },
      subtitle: 'Indian Folktale & Lyrical Tale',
      author: '아미타브 세티 (Amitabh Sethi)',
      publisher: '글로벌키즈 북스',
      pubYear: '2026.01',
      isbn: '978-89-98214-02-2',
      kdc: '808.9',
      origLang: '힌디어 / 영어',
      languages: ['KO', 'EN'],
      targetAge: 'child',
      kdcCategory: '800',
      publisherKey: '글로벌키즈',
      msrp: 16500,
      coverColor: '#795900',
      summary: {
        ko: '하얀 대리석 궁전 타지마할 위에 깃든 일곱 빛깔 무지개 새가 사랑과 평화의 노래를 전해주는 화려하고 서정적인 인도의 그림책입니다.',
        en: 'A lyrical Indian tale about a rainbow bird singing messages of love and peace atop the Taj Mahal.',
        vi: 'Truyện cổ Ấn Độ về chú chim cầu vồng cất tiếng hát tình yêu và hòa bình trên mái vòm Taj Mahal.',
        zh: '关于一只在泰姬陵白色大理石穹顶上演唱爱与和平之歌的彩虹鸟的印度诗意绘本。',
        tl: 'Isang kwentong Indiyan tungkol sa isang bahagharing ibon na kumakanta ng pag-ibig sa Taj Mahal.'
      },
      audioTranscript: {
        ko: '"하얀 대리석 타지마할 깃대 위에 아침 해가 떠오르면 일곱 빛깔 깃털을 가진 무지개 새가 아름다운 노래를 부르기 시작합니다..."',
        en: '"As the morning sun rises over the white marble Taj Mahal, a rainbow-feathered bird begins to sing a melody of peace..."',
        vi: '"Khi mặt trời mọc trên mái vòm đá cẩm thạch trắng của Taj Mahal, chú chim cầu vồng cất tiếng hát êm dịu..."',
        zh: '"当旭日从泰姬陵白色大理石穹顶上升起时，一只拥有七彩羽毛的彩虹鸟开始唱起和平的旋律……"',
        tl: '"Sa pagsikat ng araw sa Taj Mahal, ang ibong may kulay ng bahaghari ay nagsisimulang kumanta..."'
      }
    },
    {
      id: 'b3',
      title: {
        ko: '하롱베이의 용 할머니',
        en: 'Grandmother Dragon of Ha Long Bay',
        vi: 'Bà Rồng Ở Vịnh Hạ Long',
        zh: '下龙湾的龙奶奶',
        tl: 'Lola Drako ng Ha Long Bay'
      },
      subtitle: 'Vietnamese Traditional Legend',
      author: '응우옌 티 마이 (Nguyen Thi Mai)',
      publisher: '다문화아시아 출판',
      pubYear: '2025.11',
      isbn: '978-89-98214-03-9',
      kdc: '388.31',
      origLang: '베트남어 / 한국어',
      languages: ['KO', 'VI'],
      targetAge: 'elementary',
      kdcCategory: '300',
      publisherKey: '다문화아시아',
      msrp: 14000,
      coverColor: '#005c3d',
      summary: {
        ko: '에메랄드빛 하롱베이 바다를 지키는 전설 속 용 할머니가 베트남 아이들에게 남겨준 자비와 자연의 교훈을 그렸습니다.',
        en: 'A Vietnamese legend of the mother dragon who created the thousand islands of Ha Long Bay.',
        vi: 'Huyền thoại Việt Nam về Rồng Mẹ và Rồng Con đã giọt ngọc bích tạo nên ngàn đảo Vịnh Hạ Long.',
        zh: '讲述为保护越南人民而喷出翡翠玉石形成下龙湾千岛的母龙传说故事。',
        tl: 'Alamat ng Vietnam tungkol sa inang drako na gumawa ng libu-libong isla sa Ha Long Bay.'
      },
      audioTranscript: {
        ko: '"푸른 바다 위로 에메랄드 보석 같은 섬들이 펼쳐진 하롱베이에는 기적을 일으킨 용 할머니의 전설이 전해져 내려옵니다..."',
        en: '"Across the emerald waters of Ha Long Bay, island jewels tell the ancient legend of the protector dragon..."',
        vi: '"Trên làn nước xanh ngọc bích của Vịnh Hạ Long, hàng ngàn hòn đảo kể lại truyền thuyết về Rồng Mẹ vĩ đại..."',
        zh: '"在碧绿如玉的下龙湾海面上，数千座岛屿诉说着守护神龙母的古老传说……"',
        tl: '"Sa esmeraldang karagatan ng Ha Long Bay, ang mga isla ay nagkukuwento ng alamat ng inang drako..."'
      }
    },
    {
      id: 'b4',
      title: {
        ko: '보라카이의 반짝이는 조개껍데기',
        en: 'Shining Seashell of Boracay',
        vi: 'Vỏ Ốc Lấp Lánh Ở Boracay',
        zh: '长滩岛的闪亮贝壳',
        tl: 'Ang Kumikislap na Shell ng Boracay'
      },
      subtitle: 'Philippine Folk Legend & Marine Life',
      author: '마리아 산토스 (Maria Santos)',
      publisher: '오리엔탈북스',
      pubYear: '2025.10',
      isbn: '978-89-98214-04-6',
      kdc: '808.9',
      origLang: '타갈로그어 / 영어',
      languages: ['KO', 'TL', 'EN'],
      targetAge: 'toddler',
      kdcCategory: '800',
      publisherKey: '오리엔탈북스',
      msrp: 13500,
      coverColor: '#007791',
      summary: {
        ko: '필리핀 보라카이 하얀 모래사장에서 발견한 마법 조개껍데기가 전해주는 바다 친구들의 나눔과 바다 환경보호 이야기입니다.',
        en: 'A colorful Filipino tale of a magical seashell on Boracay beach teaching sharing and marine conservation.',
        vi: 'Câu chuyện Philippines đầy màu sắc về chiếc vỏ ốc phép thuật trên bãi cát trắng Boracay dạy bài học chia sẻ.',
        zh: '关于长滩岛白沙滩上的神奇贝壳向与海洋生物展示分享与保护海洋环境的菲律宾绘本。',
        tl: 'Isang kwento mula sa Pilipinas tungkol sa isang mahiwagang shell sa puting buhangin ng Boracay.'
      },
      audioTranscript: {
        ko: '"하얀 설탕 같은 모래가 부서지는 보라카이 해변에서 작은 아기 조개가 밤하늘 별빛을 모아 빛나기 시작했어요..."',
        en: '"On the powdery white sand of Boracay beach, a little seashell gathered starlight to illuminate the ocean..."',
        vi: '"Trên bãi cát trắng mịn như đường của Boracay, chiếc vỏ ốc nhỏ thu gom ánh sao đêm để thắp sáng bờ biển..."',
        zh: '"在长滩岛如细砂般白皙的沙滩上，一枚小贝壳汇聚夜空星光，照亮了广袤的大海……"',
        tl: '"Sa puting buhangin ng Boracay, ang isang maliit na shell ay nag-ipon ng liwanag ng bituin..."'
      }
    },
    {
      id: 'b5',
      title: {
        ko: '손오공과 자금성의 단청 등불',
        en: 'Sun Wukong & Forbidden City Lanterns',
        vi: 'Tôn Ngộ Không Và Đèn Lồng Tử Cấm Thành',
        zh: '孙悟空与紫禁城的丹青彩灯',
        tl: 'Si Sun Wukong at ang mga Parol ng Forbidden City'
      },
      subtitle: 'Chinese Classic Reimagined',
      author: '장웨이 (Zhang Wei)',
      publisher: '세계동화미디어',
      pubYear: '2026.02',
      isbn: '978-89-98214-05-3',
      kdc: '810',
      origLang: '중국어 / 한국어',
      languages: ['KO', 'ZH'],
      targetAge: 'elementary',
      kdcCategory: '800',
      publisherKey: '세계동화미디어',
      msrp: 18000,
      coverColor: '#a61c1c',
      summary: {
        ko: '서유기의 영웅 손오공이 정월 대보름 자금성의 화려한 단청 등불을 지키기 위해 펼치는 신나는 모험과 동양적 미학 그림책.',
        en: 'A vibrant classic retelling of Sun Wukong protecting the lantern festival in the Forbidden City.',
        vi: 'Cuộc phiêu lưu kỳ thú của Tôn Ngộ Không bảo vệ lễ hội đèn lồng Tử Cấm Thành vào tết Nguyên Tiêu.',
        zh: '讲述齐天大圣孙悟空在元宵佳节守护紫禁城绚丽丹青彩灯的精彩冒险故事。',
        tl: 'Ang nakakatuwang pakikipagsapalaran ni Sun Wukong sa pagprotekta sa mga parol ng Forbidden City.'
      },
      audioTranscript: {
        ko: '"정월 대보름 달빛이 자금성 붉은 기와를 밝히자, 여의봉을 든 손오공이 붉은 등불 사이로 사뿐히 내려앉았습니다..."',
        en: '"As the full moon illuminated the red tiles of the Forbidden City, Sun Wukong descended with his magical staff..."',
        vi: '"Khi ánh trăng rằm thắp sáng những mái ngói đỏ của Tử Cấm Thành, Tôn Ngộ Không tay cầm Gậy Như Ý hạ cánh..."',
        zh: '"当元宵皎洁的月光照亮紫禁城的琉璃红瓦时，孙悟空手持如意金箍棒轻盈地落在了彩灯之间……"',
        tl: '"Nang tanglawan ng buwan ang Forbidden City, bumaba si Sun Wukong dala ang kanyang mahiwagang baston..."'
      }
    },
    {
      id: 'b6',
      title: {
        ko: '세계 이중언어(Bilingual) 명작동화 20선 세트',
        en: 'Global Bilingual Masterpiece Collection (20 Books)',
        vi: 'Bộ 20 Truyện Cổ Tích Song Ngữ Thế Giới',
        zh: '世界双语名著绘本 20 册精选集',
        tl: 'Koleksyon ng 20 Dalawang-Wika na Klasikong Kuwento'
      },
      subtitle: 'Librarian Special Acquisition Package A',
      author: '세계동화 편집위원회',
      publisher: '다문화아시아 출판',
      pubYear: '2026.01',
      isbn: '978-89-98214-06-0',
      kdc: '808.9',
      origLang: '다국어 (KO, EN, VI, ZH, TL)',
      languages: ['KO', 'EN', 'VI', 'ZH', 'TL'],
      targetAge: 'child',
      kdcCategory: '800',
      publisherKey: '다문화아시아',
      msrp: 240000,
      coverColor: '#142236',
      summary: {
        ko: '안데르센, 그림 형제, 이솝 우화 등 세계적인 명작 동화를 5개 국어 이중언어 텍스트와 음성 QR코드 서비스로 구성한 대표 수서 패키지.',
        en: 'Comprehensive 20-book collection of world classic fairy tales rendered in 5 major languages with audio QR codes.',
        vi: 'Bộ 20 cuốn truyện cổ tích kinh điển thế giới được biên dịch song ngữ 5 ngôn ngữ tích hợp mã QR âm thanh.',
        zh: '汇集安徒生、格林童话与伊索寓言等世界经典名著，配备 5 种语言对照及 QR 音频扫码听书。',
        tl: 'Koleksyon ng 20 klasikong kwento na nakasulat sa 5 wika na may QR code para sa audio.'
      },
      audioTranscript: {
        ko: '"옛날 옛적 먼 나라 왕국에 아름다운 마음을 가진 주인공들이 함께 나누었던 감동적인 이야기가 5개 언어로 펴집니다..."',
        en: '"Once upon a time in a kingdom far away, inspiring tales unfold in five global languages for young readers..."',
        vi: '"Ngày xửa ngày xưa ở một vương quốc xa xôi, những câu chuyện truyền cảm hứng được mở ra bằng 5 ngôn ngữ..."',
        zh: '"很久很久以前，在一个遥远的王国里，感人至深的故事以 5 种语言呈现在读者面前……"',
        tl: '"Noong unang panahon sa isang malayong kaharian, ang mga kwento ay naisulat sa limang wika..."'
      }
    }
  ];

  // Add 14 more synthesized books for dense searching
  const extraCategories = [
    { titleKo: '방콕 왕궁의 황금 코끼리', titleEn: 'Golden Elephant of Bangkok Palace', lang: ['KO', 'EN'], kdc: '808.9', pub: '글로벌키즈', age: 'child', price: 16000, color: '#b8860b' },
    { titleKo: '앙코르와트의 비밀 열쇠', titleEn: 'Secret Key of Angkor Wat', lang: ['KO', 'VI'], kdc: '908', pub: '다문화아시아', age: 'elementary', price: 17500, color: '#3b5998' },
    { titleKo: '울란바토르 초원의 별빛 축제', titleEn: 'Starlight Festival in Ulaanbaatar', lang: ['KO', 'EN'], kdc: '308', pub: '오리엔탈북스', age: 'child', price: 14500, color: '#2e8b57' },
    { titleKo: '사쿠라 거리의 종이학 선물', titleEn: 'Origami Crane Gift of Sakura Street', lang: ['KO', 'ZH'], kdc: '810', pub: '세계동화미디어', age: 'toddler', price: 13000, color: '#dc143c' },
    { titleKo: '교토 다도 정원의 꼬마 여우', titleEn: 'Little Fox in Kyoto Tea Garden', lang: ['KO', 'EN'], kdc: '810', pub: '글로벌키즈', age: 'child', price: 15500, color: '#8b4513' },
    { titleKo: '세계 다문화 그림책 KDC 300 사회과학 10권 세트', titleEn: 'Multicultural Social Sci Collection (10 Books)', lang: ['KO', 'EN', 'VI'], kdc: '300', pub: '다문화아시아', age: 'adult', price: 130000, color: '#191c1e' },
    { titleKo: '마닐라 만의 무지개 돛단배', titleEn: 'Rainbow Sailboat of Manila Bay', lang: ['KO', 'TL'], kdc: '808.9', pub: '오리엔탈북스', age: 'child', price: 14000, color: '#008080' },
    { titleKo: '아시아 전통 문양 파티클 아트북', titleEn: 'Asian Traditional Pattern Particle Artbook', lang: ['KO', 'EN', 'ZH'], kdc: '600', pub: '세계동화미디어', age: 'adult', price: 22000, color: '#4b0082' },
    { titleKo: '자카르타의 말하는 바틱 비단', titleEn: 'Talking Batik Silk of Jakarta', lang: ['KO', 'EN'], kdc: '388', pub: '다문화아시아', age: 'elementary', price: 16000, color: '#800000' },
    { titleKo: '네팔 히말라야 설산의 눈표범', titleEn: 'Snow Leopard of Nepal Himalayas', lang: ['KO', 'EN'], kdc: '500', pub: '글로벌키즈', age: 'elementary', price: 15000, color: '#4682b4' },
    { titleKo: '다문화 아동을 위한 한국어 이중언어 첫걸음', titleEn: 'First Steps in Korean Bilingual Education', lang: ['KO', 'VI', 'ZH', 'TL'], kdc: '700', pub: '다문화아시아', age: 'toddler', price: 18500, color: '#002147' },
    { titleKo: '실크로드 비단길 전래동화 15권 종합 세트', titleEn: 'Silk Road Folktales 15-Book Set', lang: ['KO', 'ZH'], kdc: '808.9', pub: '세계동화미디어', age: 'elementary', price: 175000, color: '#d2691e' },
    { titleKo: '싱가포르 머라이언의 무지개 물줄기', titleEn: 'Rainbow Fountain of Singapore Merlion', lang: ['KO', 'EN'], kdc: '808.9', pub: '오리엔탈북스', age: 'child', price: 14500, color: '#20b2aa' },
    { titleKo: '다문화 도서관 사서 필수 KDC 세트 (50권)', titleEn: 'Essential Librarian KDC Collection (50 Books)', lang: ['KO', 'EN', 'VI', 'ZH', 'TL'], kdc: '000', pub: '다문화아시아', age: 'adult', price: 580000, color: '#000a1e' }
  ];

  extraCategories.forEach((item, idx) => {
    booksDatabase.push({
      id: `b${idx + 7}`,
      title: {
        ko: item.titleKo,
        en: item.titleEn,
        vi: `${item.titleKo} (Tiếng Việt)`,
        zh: `${item.titleKo} (中文)`,
        tl: `${item.titleKo} (Tagalog)`
      },
      subtitle: `${item.lang.join('/')} Multicultural Library Edition`,
      author: '국립다문화도서관 큐레이션팀',
      publisher: `${item.pub} 출판`,
      pubYear: '2025.12',
      isbn: `978-89-98214-${(idx + 7).toString().padStart(2, '0')}-0`,
      kdc: item.kdc,
      origLang: item.lang.join(', '),
      languages: item.lang,
      targetAge: item.age,
      kdcCategory: item.kdc.charAt(0) + '00',
      publisherKey: item.pub,
      msrp: item.price,
      coverColor: item.color,
      summary: {
        ko: `${item.titleKo}는 다문화 가정 어린이와 도서관 사서 선생님들을 위해 엄선된 서적입니다.`,
        en: `${item.titleEn} is an essential selection curated for multicultural libraries.`,
        vi: `${item.titleKo} là cuốn sách được lựa chọn cẩn thận dành cho trẻ em gia đình đa văn hóa.`,
        zh: `${item.titleKo} 是专为多元文化家庭与图书馆馆员精心挑选的优质读物。`,
        tl: `${item.titleKo} ay isang mahalagang libro para sa aklatan.`
      },
      audioTranscript: {
        ko: `"${item.titleKo} 이야기를 다국어 낭독으로 만나보세요..."`,
        en: `"Listen to the audio narration sample of ${item.titleEn}..."`,
        vi: `"Nghe mẫu đọc âm thanh của ${item.titleKo}..."`,
        zh: `"请听 ${item.titleKo} 的多语种朗读音频样例……"`,
        tl: `"Makinig sa audio sample ng ${item.titleKo}..."`
      }
    });
  });

  // ==========================================================================
  // 3. Curation Packages Database
  // ==========================================================================
  const curationPackages = [
    {
      id: 'pkg-a',
      title: '동남아 5개국 다문화 아동 도서 30권 세트',
      sub: 'Southeast Asian Multicultural 30-Book Package',
      tag: '사서 최다 수서 1위',
      discount: '15% OFF',
      bookCount: 30,
      msrpTotal: 450000,
      finalTotal: 382500,
      includesIsbn: ['978-89-98214-03-9', '978-89-98214-04-6', '978-89-98214-07-0', '978-89-98214-13-0'],
      desc: '베트남, 필리핀, 태국, 인도네시아, 캄보디아의 이중언어 그림책 30권을 15% 법정 수서 할인으로 구성한 필수 패키지입니다.'
    },
    {
      id: 'pkg-b',
      title: '중국/대만 원서 & 번역 도서 50권 수서 세트',
      sub: 'Chinese Original & Translation 50-Book Package',
      tag: 'KDC 문학 800번 특가',
      discount: '15% OFF',
      bookCount: 50,
      msrpTotal: 750000,
      finalTotal: 637500,
      includesIsbn: ['978-89-98214-05-3', '978-89-98214-10-0', '978-89-98214-14-0', '978-89-98214-18-0'],
      desc: '자금성 전통 동화부터 현대 중국 아동 문학 원서 50권을 마크(MARC) 데이터와 함께 공급합니다.'
    },
    {
      id: 'pkg-c',
      title: '글로벌 다국어 오디오 동화책 100권 종합 서가 패키지',
      sub: 'Global Multilingual Audio 100-Book Package',
      tag: '공공도서관 신설서가 추천',
      discount: '15% OFF',
      bookCount: 100,
      msrpTotal: 1500000,
      finalTotal: 1275000,
      includesIsbn: ['978-89-98214-06-0', '978-89-98214-12-0', '978-89-98214-17-0', '978-89-98214-20-0'],
      desc: '음성 QR 및 다국어 Audio 지원 동화 100권을 신설 다문화 서가 예산으로 즉시 집행 가능한 종합 패키지.'
    },
    {
      id: 'pkg-d',
      title: '사서 추천 이중언어(Bilingual) 명작 20권 수서 패키지',
      sub: 'Bilingual Masterpiece 20-Book Package',
      tag: '초등 이중언어 교육용',
      discount: '15% OFF',
      bookCount: 20,
      msrpTotal: 280000,
      finalTotal: 238000,
      includesIsbn: ['978-89-98214-01-5', '978-89-98214-02-2', '978-89-98214-11-0'],
      desc: '한국어와 영어, 베트남어, 중국어가 나란히 배치된 고품질 이중언어 명작 동화 20권 구성.'
    }
  ];

  // ==========================================================================
  // 4. Web Audio API Sound Synthesizer & Librarian Stamp Ripple
  // ==========================================================================
  let soundEnabled = true;
  let audioCtx = null;

  function initAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playClickSound() {
    if (!soundEnabled) return;
    try {
      initAudioContext();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch(e){}
  }

  function playStampSound() {
    if (!soundEnabled) return;
    try {
      initAudioContext();
      // Heavy deep thud with gold resonance
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch(e){}
  }

  function playCartSound() {
    if (!soundEnabled) return;
    try {
      initAudioContext();
      // Ascending chime
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.04);
        gain.gain.setValueAtTime(0.12, audioCtx.currentTime + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + idx * 0.04 + 0.1);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + idx * 0.04);
        osc.stop(audioCtx.currentTime + idx * 0.04 + 0.1);
      });
    } catch(e){}
  }

  // Librarian Seal Stamp Ripple Micro-Interaction
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-stamp="true"], .btn, .nav-link, .lang-option');
    if (!target) return;

    playClickSound();

    // Create visual stamp ripple
    const ripple = document.createElement('div');
    ripple.className = 'stamp-ripple';
    ripple.style.left = `${e.pageX}px`;
    ripple.style.top = `${e.pageY}px`;
    ripple.innerHTML = `<span>다문화도서관<br/>APPROVED</span>`;
    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });

  // Flying 3D Book Particle to Cart
  function animateFlyToCart(startElement) {
    playCartSound();
    const cartBtn = document.getElementById('header-cart-btn');
    if (!startElement || !cartBtn) return;

    const startRect = startElement.getBoundingClientRect();
    const cartRect = cartBtn.getBoundingClientRect();

    const particle = document.createElement('div');
    particle.className = 'flying-book-particle';
    particle.style.left = `${startRect.left + startRect.width / 2}px`;
    particle.style.top = `${startRect.top + startRect.height / 2}px`;
    document.body.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.left = `${cartRect.left + cartRect.width / 2}px`;
      particle.style.top = `${cartRect.top + cartRect.height / 2}px`;
      particle.style.transform = 'scale(0.2) rotate(360deg)';
      particle.style.opacity = '0.5';
    });

    setTimeout(() => particle.remove(), 800);
  }

  // Toast Notification
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-gold"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // ==========================================================================
  // 5. THREE.JS RENDER ENGINES
  // ==========================================================================

  // --- Engine A: Hero 3D Archival Hall ---
  let heroScene, heroCamera, heroRenderer, heroControls;
  let heroBookNodes = [];

  function initHero3D() {
    const canvas = document.getElementById('hero-3d-canvas');
    if (!canvas) return;

    heroScene = new THREE.Scene();
    heroScene.fog = new THREE.FogExp2(0x000a1e, 0.015);

    heroCamera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    heroCamera.position.set(0, 5, 28);

    heroRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    heroRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
    heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (THREE.OrbitControls) {
      heroControls = new THREE.OrbitControls(heroCamera, heroRenderer.domElement);
      heroControls.enableDamping = true;
      heroControls.dampingFactor = 0.05;
      heroControls.maxPolarAngle = Math.PI / 2 + 0.1;
      heroControls.autoRotate = true;
      heroControls.autoRotateSpeed = 0.6;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    heroScene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xffbf00, 2.5, 60);
    goldPointLight.position.set(0, 10, 0);
    heroScene.add(goldPointLight);

    const blueDirLight = new THREE.DirectionalLight(0x2d476f, 1.2);
    blueDirLight.position.set(10, 20, 15);
    heroScene.add(blueDirLight);

    // Architectural Columns Ring
    const columnGeo = new THREE.CylinderGeometry(0.8, 0.8, 16, 16);
    const columnMat = new THREE.MeshStandardMaterial({ color: 0x00142e, roughness: 0.3, metalness: 0.5 });
    
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 18;
      const col = new THREE.Mesh(columnGeo, columnMat);
      col.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      heroScene.add(col);

      // Glowing Gold Rings on columns
      const ringGeo = new THREE.TorusGeometry(0.85, 0.06, 12, 24);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xffbf00 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(Math.cos(angle) * radius, 4, Math.sin(angle) * radius);
      heroScene.add(ring);
    }

    // Orbiting 3D Book Nodes
    heroBookNodes = [];
    const bookGeo = new THREE.BoxGeometry(1.6, 2.2, 0.4);
    const colors = [0xffbf00, 0x2d476f, 0xa61c1c, 0x005c3d, 0x007791];

    for (let i = 0; i < 24; i++) {
      const color = colors[i % colors.length];
      const mat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.4, metalness: 0.2 });
      const bookMesh = new THREE.Mesh(bookGeo, mat);

      const orbitRadius = 8 + (i % 3) * 4;
      const speed = 0.002 + (i % 4) * 0.001;
      const angle = (i / 24) * Math.PI * 2;
      const yOffset = (Math.sin(i) * 3);

      bookMesh.position.set(Math.cos(angle) * orbitRadius, yOffset, Math.sin(angle) * orbitRadius);
      bookMesh.rotation.set(Math.random() * 0.5, angle, Math.random() * 0.5);

      heroScene.add(bookMesh);
      heroBookNodes.push({ mesh: bookMesh, radius: orbitRadius, angle: angle, speed: speed, yOffset: yOffset });
    }

    // Particle Dust System
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 50;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({ size: 0.15, color: 0xffbf00, transparent: true, opacity: 0.7 });
    const particleMesh = new THREE.Points(particleGeo, particleMat);
    heroScene.add(particleMesh);

    // Animation Loop
    function animateHero() {
      requestAnimationFrame(animateHero);
      if (heroControls) heroControls.update();

      heroBookNodes.forEach((node) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.z = Math.sin(node.angle) * node.radius;
        node.mesh.rotation.y += 0.01;
      });

      particleMesh.rotation.y += 0.0005;
      heroRenderer.render(heroScene, heroCamera);
    }
    animateHero();

    window.addEventListener('resize', () => {
      if (!heroRenderer || !canvas) return;
      heroCamera.aspect = canvas.clientWidth / canvas.clientHeight;
      heroCamera.updateProjectionMatrix();
      heroRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }

  // --- Engine B: 3D Exhibition Room ---
  let exhibitScene, exhibitCamera, exhibitRenderer, exhibitControls;
  let exhibitBookGroup;

  function initExhibition3D() {
    const canvas = document.getElementById('exhibition-3d-canvas');
    if (!canvas) return;

    exhibitScene = new THREE.Scene();
    exhibitScene.background = new THREE.Color(0x000e24);

    exhibitCamera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 500);
    exhibitCamera.position.set(0, 4, 14);

    exhibitRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    exhibitRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
    exhibitRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (THREE.OrbitControls) {
      exhibitControls = new THREE.OrbitControls(exhibitCamera, exhibitRenderer.domElement);
      exhibitControls.enableDamping = true;
      exhibitControls.maxPolarAngle = Math.PI / 2;
    }

    const light = new THREE.AmbientLight(0xffffff, 0.8);
    exhibitScene.add(light);

    const spotLight = new THREE.SpotLight(0xffbf00, 2);
    spotLight.position.set(0, 12, 5);
    exhibitScene.add(spotLight);

    // Floor
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x001838, roughness: 0.2, metalness: 0.8 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2;
    exhibitScene.add(floor);

    // Display Stands with Books
    exhibitBookGroup = new THREE.Group();
    for (let i = -2; i <= 2; i += 2) {
      const pedestalGeo = new THREE.CylinderGeometry(1.2, 1.4, 2, 32);
      const pedestalMat = new THREE.MeshStandardMaterial({ color: 0x142236, metalness: 0.6 });
      const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
      pedestal.position.set(i * 3.2, -1, 0);

      // Book on top
      const bookGeo = new THREE.BoxGeometry(1.4, 2.0, 0.3);
      const bookMat = new THREE.MeshStandardMaterial({ color: i === 0 ? 0xffbf00 : 0x002147 });
      const book = new THREE.Mesh(bookGeo, bookMat);
      book.position.set(i * 3.2, 0.8, 0);
      book.rotation.y = Math.PI / 6;

      exhibitBookGroup.add(pedestal);
      exhibitBookGroup.add(book);
    }
    exhibitScene.add(exhibitBookGroup);

    function animateExhibit() {
      requestAnimationFrame(animateExhibit);
      if (exhibitControls) exhibitControls.update();
      exhibitBookGroup.rotation.y += 0.003;
      exhibitRenderer.render(exhibitScene, exhibitCamera);
    }
    animateExhibit();
  }

  // --- Engine C: 3D Curation Package Stack ---
  let curationScene, curationCamera, curationRenderer, curationGroup;

  function initCuration3D() {
    const canvas = document.getElementById('curation-package-3d-canvas');
    if (!canvas) return;

    curationScene = new THREE.Scene();
    curationCamera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 500);
    curationCamera.position.set(3, 4, 8);

    curationRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    curationRenderer.setSize(canvas.clientWidth, canvas.clientHeight);

    if (THREE.OrbitControls) {
      const controls = new THREE.OrbitControls(curationCamera, curationRenderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 2;
    }

    const light = new THREE.AmbientLight(0xffffff, 0.9);
    curationScene.add(light);

    const dirLight = new THREE.DirectionalLight(0xffbf00, 1.2);
    dirLight.position.set(5, 10, 5);
    curationScene.add(dirLight);

    curationGroup = new THREE.Group();
    // Stack of 5 books
    for (let i = 0; i < 5; i++) {
      const bGeo = new THREE.BoxGeometry(2.4, 0.35, 3.2);
      const bMat = new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0x002147 : 0xffbf00 });
      const book = new THREE.Mesh(bGeo, bMat);
      book.position.set(0, i * 0.38, 0);
      book.rotation.y = (i * 0.1) - 0.2;
      curationGroup.add(book);
    }

    // Golden Strap Ribbon
    const strapGeo = new THREE.TorusGeometry(1.5, 0.08, 16, 64);
    const strapMat = new THREE.MeshBasicMaterial({ color: 0xffbf00 });
    const strap = new THREE.Mesh(strapGeo, strapMat);
    strap.position.set(0, 0.9, 0);
    strap.rotation.x = Math.PI / 2;
    curationGroup.add(strap);

    curationScene.add(curationGroup);

    function animateCuration() {
      requestAnimationFrame(animateCuration);
      curationGroup.rotation.y += 0.005;
      curationRenderer.render(curationScene, curationCamera);
    }
    animateCuration();
  }

  // --- Engine D: 360° Book Detail Engine ---
  let detailScene, detailCamera, detailRenderer, detailControls;
  let detailBookCoverMesh, detailBookPagesMesh, detailBookGroup;
  let isBookOpen = false;

  function initDetail3D() {
    const canvas = document.getElementById('detail-3d-canvas');
    if (!canvas) return;

    detailScene = new THREE.Scene();
    detailCamera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 500);
    detailCamera.position.set(0, 1.5, 6);

    detailRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    detailRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
    detailRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (THREE.OrbitControls) {
      detailControls = new THREE.OrbitControls(detailCamera, detailRenderer.domElement);
      detailControls.enableDamping = true;
      detailControls.dampingFactor = 0.05;
    }

    const light1 = new THREE.AmbientLight(0xffffff, 0.8);
    detailScene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffbf00, 1.5);
    light2.position.set(5, 8, 5);
    detailScene.add(light2);

    detailBookGroup = new THREE.Group();

    // Spine & Back Cover
    const backGeo = new THREE.BoxGeometry(2.4, 3.2, 0.08);
    const backMat = new THREE.MeshStandardMaterial({ color: 0x002147, roughness: 0.3 });
    const backCover = new THREE.Mesh(backGeo, backMat);
    backCover.position.set(0, 0, -0.2);
    detailBookGroup.add(backCover);

    // Paper Pages Block
    const pagesGeo = new THREE.BoxGeometry(2.2, 3.0, 0.35);
    const pagesMat = new THREE.MeshStandardMaterial({ color: 0xf7f9fc, roughness: 0.8 });
    detailBookPagesMesh = new THREE.Mesh(pagesGeo, pagesMat);
    detailBookPagesMesh.position.set(0.05, 0, 0);
    detailBookGroup.add(detailBookPagesMesh);

    // Front Cover
    const frontGeo = new THREE.BoxGeometry(2.4, 3.2, 0.08);
    const frontMat = new THREE.MeshStandardMaterial({ color: 0x002147, roughness: 0.3 });
    detailBookCoverMesh = new THREE.Mesh(frontGeo, frontMat);
    detailBookCoverMesh.position.set(0, 0, 0.2);
    detailBookGroup.add(detailBookCoverMesh);

    detailScene.add(detailBookGroup);

    function animateDetail() {
      requestAnimationFrame(animateDetail);
      if (detailControls) detailControls.update();

      if (isBookOpen) {
        detailBookCoverMesh.rotation.y = THREE.MathUtils.lerp(detailBookCoverMesh.rotation.y, -Math.PI * 0.7, 0.1);
        detailBookCoverMesh.position.x = THREE.MathUtils.lerp(detailBookCoverMesh.position.x, -1.2, 0.1);
      } else {
        detailBookCoverMesh.rotation.y = THREE.MathUtils.lerp(detailBookCoverMesh.rotation.y, 0, 0.1);
        detailBookCoverMesh.position.x = THREE.MathUtils.lerp(detailBookCoverMesh.position.x, 0, 0.1);
      }

      detailRenderer.render(detailScene, detailCamera);
    }
    animateDetail();
  }

  function updateDetail3DColor(hexColor) {
    if (!detailBookGroup) return;
    const color = parseInt(hexColor.replace('#', '0x'));
    detailBookGroup.children.forEach(child => {
      if (child !== detailBookPagesMesh && child.material) {
        child.material.color.setHex(color);
      }
    });
  }

  // ==========================================================================
  // 6. SPA ROUTER & VIEW RENDERING
  // ==========================================================================
  function handleRoute() {
    let hash = window.location.hash || '#home';
    const validPages = ['home', 'search', 'curation', 'cart', 'detail'];
    let page = hash.replace('#', '');
    if (!validPages.includes(page)) page = 'home';

    // Update active page view
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
    const targetView = document.getElementById(`view-${page}`);
    if (targetView) targetView.classList.add('active');

    // Update Nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.page === page) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Page specific initializations
    if (page === 'search') {
      renderSearchResults();
    } else if (page === 'cart') {
      renderCartView();
    } else if (page === 'curation') {
      renderCurationPackages();
    }
  }

  window.addEventListener('hashchange', handleRoute);

  // ==========================================================================
  // 7. MULTI-LANGUAGE (i18n) SWITCHER
  // ==========================================================================
  function setLanguage(lang) {
    if (!i18nDict[lang]) lang = 'ko';
    currentLang = lang;
    localStorage.setItem('v4_lang', lang);

    document.getElementById('current-lang-code').innerText = lang.toUpperCase();

    document.querySelectorAll('.lang-option').forEach(opt => {
      if (opt.dataset.lang === lang) opt.classList.add('active');
      else opt.classList.remove('active');
    });

    const dict = i18nDict[lang];

    // Update text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) el.innerHTML = dict[key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (dict[key]) el.placeholder = dict[key];
    });

    renderHomeFeaturedBooks();
    renderSearchResults();
  }

  // Language Menu Toggle
  const langBtn = document.getElementById('lang-menu-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => langDropdown.classList.remove('show'));

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        const lang = e.currentTarget.dataset.lang;
        setLanguage(lang);
        langDropdown.classList.remove('show');
      });
    });
  }

  // ==========================================================================
  // 8. CART & QUOTE MANAGEMENT
  // ==========================================================================
  function getCart() {
    return JSON.parse(localStorage.getItem('multicultural_v4_cart') || '[]');
  }

  function saveCart(cart) {
    localStorage.setItem('multicultural_v4_cart', JSON.stringify(cart));
    updateCartBadges();
  }

  function addToCart(bookId, qty = 1) {
    const cart = getCart();
    const existing = cart.find(item => item.bookId === bookId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ bookId, qty });
    }
    saveCart(cart);
    showToast('수서 견적함에 도서가 추가되었습니다.', 'success');
  }

  function updateCartQty(bookId, qty) {
    let cart = getCart();
    if (qty <= 0) {
      cart = cart.filter(item => item.bookId !== bookId);
    } else {
      const existing = cart.find(item => item.bookId === bookId);
      if (existing) existing.qty = qty;
    }
    saveCart(cart);
    renderCartView();
  }

  function removeFromCart(bookId) {
    let cart = getCart();
    cart = cart.filter(item => item.bookId !== bookId);
    saveCart(cart);
    renderCartView();
  }

  function updateCartBadges() {
    const cart = getCart();
    const totalKinds = cart.length;
    let totalQty = 0;
    let totalMsrp = 0;

    cart.forEach(item => {
      const book = booksDatabase.find(b => b.id === item.bookId);
      if (book) {
        totalQty += item.qty;
        totalMsrp += book.msrp * item.qty;
      }
    });

    const finalDiscounted = Math.round(totalMsrp * 0.85);

    const countEl = document.getElementById('header-cart-count');
    if (countEl) countEl.innerText = totalKinds;

    const totalEl = document.getElementById('header-cart-total');
    if (totalEl) totalEl.innerText = `₩${finalDiscounted.toLocaleString()}`;
  }

  // ==========================================================================
  // 9. RENDERING HOME, SEARCH, CURATION & CART VIEWS
  // ==========================================================================

  // Home Featured Books
  function renderHomeFeaturedBooks() {
    const container = document.getElementById('home-featured-books');
    if (!container) return;
    container.innerHTML = '';

    const featured = booksDatabase.slice(0, 6);
    featured.forEach(book => {
      const titleText = book.title[currentLang] || book.title.ko;
      const discountPrice = Math.round(book.msrp * 0.85);

      const card = document.createElement('div');
      card.className = 'book-card-3d';
      card.innerHTML = `
        <div class="card-cover-container">
          <span class="badge badge-gold card-lang-chip">${book.languages[0]}</span>
          <div class="card-cover-art" style="border-top: 4px solid ${book.coverColor}">
            <div class="card-cover-spine"></div>
            <i class="fa-solid fa-book-bookmark" style="font-size: 2rem; color: ${book.coverColor}; margin-top: 20px;"></i>
            <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-dark);">${book.publisherKey}</span>
          </div>
        </div>
        <div class="card-body">
          <h3 class="card-title">${titleText}</h3>
          <p class="card-subtitle">${book.subtitle}</p>
          <div class="card-meta-row">
            <span><i class="fa-solid fa-barcode"></i> ${book.isbn}</span>
            <span><i class="fa-solid fa-layer-group"></i> KDC ${book.kdc}</span>
          </div>
          <div class="card-price-row">
            <div class="price-group">
              <span class="msrp-del">₩${book.msrp.toLocaleString()}</span>
              <span class="discount-price">₩${discountPrice.toLocaleString()}</span>
            </div>
            <button class="btn btn-gold btn-sm add-cart-btn" data-id="${book.id}" data-stamp="true">
              <i class="fa-solid fa-cart-plus"></i> 수서 담기
            </button>
          </div>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (!e.target.closest('.add-cart-btn')) {
          showBookDetail(book.id);
        }
      });

      card.querySelector('.add-cart-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(book.id, 1);
        animateFlyToCart(e.currentTarget);
      });

      container.appendChild(card);
    });
  }

  // Search View Rendering & Faceted Filters
  let activeSearchFilter = {
    keyword: '',
    lang: 'all',
    age: 'all',
    kdc: 'all',
    pub: 'all',
    sort: 'popular',
    viewMode: 'grid'
  };

  function renderSearchResults() {
    const container = document.getElementById('search-results-wrapper');
    if (!container) return;

    let filtered = booksDatabase.filter(book => {
      const titleStr = (book.title[currentLang] || book.title.ko) + book.subtitle + book.author + book.publisher + book.isbn + book.kdc;
      if (activeSearchFilter.keyword && !titleStr.toLowerCase().includes(activeSearchFilter.keyword.toLowerCase())) return false;
      if (activeSearchFilter.lang !== 'all' && !book.languages.includes(activeSearchFilter.lang)) return false;
      if (activeSearchFilter.age !== 'all' && book.targetAge !== activeSearchFilter.age) return false;
      if (activeSearchFilter.kdc !== 'all' && book.kdcCategory !== activeSearchFilter.kdc) return false;
      if (activeSearchFilter.pub !== 'all' && !book.publisherKey.includes(activeSearchFilter.pub)) return false;
      return true;
    });

    // Sorting
    if (activeSearchFilter.sort === 'price-asc') filtered.sort((a,b) => a.msrp - b.msrp);
    else if (activeSearchFilter.sort === 'price-desc') filtered.sort((a,b) => b.msrp - a.msrp);

    document.getElementById('search-result-count').innerText = filtered.length;
    container.innerHTML = '';

    if (activeSearchFilter.viewMode === 'grid') {
      container.className = 'search-results-container books-grid-3d';
      filtered.forEach(book => {
        const titleText = book.title[currentLang] || book.title.ko;
        const discountPrice = Math.round(book.msrp * 0.85);

        const card = document.createElement('div');
        card.className = 'book-card-3d';
        card.innerHTML = `
          <div class="card-cover-container">
            <span class="badge badge-gold card-lang-chip">${book.languages.join('/')}</span>
            <div class="card-cover-art" style="border-top: 4px solid ${book.coverColor}">
              <div class="card-cover-spine"></div>
              <i class="fa-solid fa-book-open" style="font-size: 2rem; color: ${book.coverColor}; margin-top: 20px;"></i>
              <span style="font-size: 0.7rem; font-weight: 700; color: var(--text-dark);">${book.publisherKey}</span>
            </div>
          </div>
          <div class="card-body">
            <h3 class="card-title">${titleText}</h3>
            <p class="card-subtitle">${book.subtitle}</p>
            <div class="card-meta-row">
              <span>ISBN: ${book.isbn}</span>
              <span>KDC: ${book.kdc}</span>
            </div>
            <div class="card-price-row">
              <div class="price-group">
                <span class="msrp-del">₩${book.msrp.toLocaleString()}</span>
                <span class="discount-price">₩${discountPrice.toLocaleString()}</span>
              </div>
              <button class="btn btn-gold btn-sm add-cart-btn" data-id="${book.id}" data-stamp="true">
                <i class="fa-solid fa-cart-plus"></i> 수서 담기
              </button>
            </div>
          </div>
        `;
        card.addEventListener('click', (e) => {
          if (!e.target.closest('.add-cart-btn')) showBookDetail(book.id);
        });
        card.querySelector('.add-cart-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          addToCart(book.id, 1);
          animateFlyToCart(e.currentTarget);
        });
        container.appendChild(card);
      });
    } else {
      // Table Mode (High-Density Librarian Grid)
      container.className = 'search-results-container';
      const table = document.createElement('table');
      table.className = 'search-results-table';
      table.innerHTML = `
        <thead>
          <tr>
            <th style="width: 30px;"><input type="checkbox" id="table-select-all"></th>
            <th>도서명 (Title)</th>
            <th>ISBN-13</th>
            <th>KDC</th>
            <th>언어</th>
            <th>출판사</th>
            <th>정가</th>
            <th>사서 할인가</th>
            <th style="width: 100px;">수서 담기</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(b => `
            <tr>
              <td><input type="checkbox" class="row-chk" data-id="${b.id}"></td>
              <td><strong class="clickable-title" data-id="${b.id}">${b.title[currentLang] || b.title.ko}</strong></td>
              <td class="font-mono">${b.isbn}</td>
              <td class="font-mono">${b.kdc}</td>
              <td><span class="badge badge-gold">${b.languages.join(',')}</span></td>
              <td>${b.publisherKey}</td>
              <td>₩${b.msrp.toLocaleString()}</td>
              <td class="text-gold font-bold">₩${Math.round(b.msrp * 0.85).toLocaleString()}</td>
              <td>
                <button class="btn btn-gold btn-xs add-cart-btn" data-id="${b.id}" data-stamp="true">
                  <i class="fa-solid fa-cart-plus"></i> 담기
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      `;

      table.querySelectorAll('.clickable-title').forEach(el => {
        el.addEventListener('click', () => showBookDetail(el.dataset.id));
      });

      table.querySelectorAll('.add-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          addToCart(btn.dataset.id, 1);
          animateFlyToCart(e.currentTarget);
        });
      });

      container.appendChild(table);
    }
  }

  // Search Filter Events
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchFilter.keyword = e.target.value;
      renderSearchResults();
    });
  }

  document.querySelectorAll('#filter-lang-chips .chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('#filter-lang-chips .chip').forEach(c => c.classList.remove('active'));
      e.currentTarget.classList.add('active');
      activeSearchFilter.lang = e.currentTarget.dataset.lang;
      renderSearchResults();
    });
  });

  const ageSelect = document.getElementById('filter-age-select');
  if (ageSelect) ageSelect.addEventListener('change', (e) => { activeSearchFilter.age = e.target.value; renderSearchResults(); });

  const kdcSelect = document.getElementById('filter-kdc-select');
  if (kdcSelect) kdcSelect.addEventListener('change', (e) => { activeSearchFilter.kdc = e.target.value; renderSearchResults(); });

  const pubSelect = document.getElementById('filter-pub-select');
  if (pubSelect) pubSelect.addEventListener('change', (e) => { activeSearchFilter.pub = e.target.value; renderSearchResults(); });

  const sortSelect = document.getElementById('filter-sort-select');
  if (sortSelect) sortSelect.addEventListener('change', (e) => { activeSearchFilter.sort = e.target.value; renderSearchResults(); });

  document.getElementById('view-mode-grid')?.addEventListener('click', () => {
    activeSearchFilter.viewMode = 'grid';
    document.getElementById('view-mode-grid').classList.add('active');
    document.getElementById('view-mode-table').classList.remove('active');
    renderSearchResults();
  });

  document.getElementById('view-mode-table')?.addEventListener('click', () => {
    activeSearchFilter.viewMode = 'table';
    document.getElementById('view-mode-table').classList.add('active');
    document.getElementById('view-mode-grid').classList.remove('active');
    renderSearchResults();
  });

  // Batch Add Checked Items
  document.getElementById('batch-add-cart-btn')?.addEventListener('click', (e) => {
    const checkedBoxes = document.querySelectorAll('.row-chk:checked');
    if (checkedBoxes.length === 0) {
      showToast('선택된 도서가 없습니다. 도서를 선택해주세요.');
      return;
    }
    checkedBoxes.forEach(box => addToCart(box.dataset.id, 1));
    animateFlyToCart(e.currentTarget);
    showToast(`${checkedBoxes.length}종의 도서가 견적함에 추가되었습니다.`, 'success');
  });

  // Curation Packages View
  function renderCurationPackages() {
    const container = document.getElementById('curation-packages-list');
    if (!container) return;
    container.innerHTML = '';

    curationPackages.forEach(pkg => {
      const card = document.createElement('div');
      card.className = 'package-card';
      card.innerHTML = `
        <span class="badge badge-gold" style="width: fit-content;">${pkg.tag}</span>
        <h3 class="package-title">${pkg.title}</h3>
        <p class="package-desc">${pkg.desc}</p>
        <div class="package-items-preview">
          <strong>수서 포함 종수:</strong> 총 ${pkg.bookCount}권 세트<br/>
          <strong>대표 ISBN:</strong> ${pkg.includesIsbn.join(', ')}
        </div>
        <div class="package-price-box">
          <div>
            <span class="msrp-del">₩${pkg.msrpTotal.toLocaleString()}</span>
            <div class="discount-price text-gold font-bold" style="font-size: 1.5rem;">₩${pkg.finalTotal.toLocaleString()}</div>
          </div>
          <span class="badge badge-dark">${pkg.discount}</span>
        </div>
        <button class="btn btn-gold btn-block add-pkg-btn" data-id="${pkg.id}" data-stamp="true">
          <i class="fa-solid fa-cart-plus"></i> 패키지 전권 일괄 견적 담기
        </button>
      `;

      card.querySelector('.add-pkg-btn').addEventListener('click', (e) => {
        // Add sample books from pkg
        addToCart('b1', 5);
        addToCart('b2', 5);
        addToCart('b3', 5);
        addToCart('b6', 1);
        animateFlyToCart(e.currentTarget);
        showToast(`${pkg.title} 패키지가 견적함에 담겼습니다.`, 'success');
      });

      container.appendChild(card);
    });
  }

  // Cart View Render
  function renderCartView() {
    const wrapper = document.getElementById('cart-items-wrapper');
    if (!wrapper) return;

    const cart = getCart();
    wrapper.innerHTML = '';

    if (cart.length === 0) {
      wrapper.innerHTML = `
        <div style="padding: 48px; text-align: center; color: var(--text-muted);">
          <i class="fa-solid fa-cart-flatbed" style="font-size: 3rem; margin-bottom: 16px; color: var(--card-border);"></i>
          <p>수서 견적함이 비어있습니다. 도서 수서/검색에서 필요한 서적을 담아주세요.</p>
        </div>
      `;
      document.getElementById('sum-kinds-count').innerText = '0종 (0권)';
      document.getElementById('sum-msrp-total').innerText = '₩0';
      document.getElementById('sum-discount-amount').innerText = '-₩0';
      document.getElementById('sum-final-total').innerText = '₩0';
      return;
    }

    let totalKinds = cart.length;
    let totalQty = 0;
    let totalMsrp = 0;

    cart.forEach(item => {
      const book = booksDatabase.find(b => b.id === item.bookId);
      if (!book) return;

      const itemMsrp = book.msrp * item.qty;
      const itemDiscounted = Math.round(itemMsrp * 0.85);

      totalQty += item.qty;
      totalMsrp += itemMsrp;

      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML = `
        <div><input type="checkbox" class="cart-item-chk" checked data-id="${book.id}"></div>
        <div class="cart-item-info">
          <div class="cart-item-thumb"><i class="fa-solid fa-book"></i></div>
          <div>
            <strong>${book.title[currentLang] || book.title.ko}</strong><br/>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${book.publisherKey} | ${book.languages.join('/')}</span>
          </div>
        </div>
        <div class="font-mono" style="font-size: 0.82rem;">
          ISBN: ${book.isbn}<br/>KDC: ${book.kdc}
        </div>
        <div>₩${book.msrp.toLocaleString()}</div>
        <div>
          <input type="number" class="filter-select-sm cart-qty-input" value="${item.qty}" min="1" max="999" data-id="${book.id}" style="width: 60px;">
        </div>
        <div class="font-bold text-gold">₩${itemDiscounted.toLocaleString()}</div>
        <div>
          <button class="btn btn-xs btn-outline-dark del-item-btn" data-id="${book.id}"><i class="fa-solid fa-xmark"></i></button>
        </div>
      `;

      row.querySelector('.cart-qty-input').addEventListener('change', (e) => {
        const val = parseInt(e.target.value) || 1;
        updateCartQty(book.id, val);
      });

      row.querySelector('.del-item-btn').addEventListener('click', () => {
        removeFromCart(book.id);
      });

      wrapper.appendChild(row);
    });

    const finalDiscountedTotal = Math.round(totalMsrp * 0.85);
    const discountVal = totalMsrp - finalDiscountedTotal;

    document.getElementById('sum-kinds-count').innerText = `${totalKinds}종 (${totalQty}권)`;
    document.getElementById('sum-msrp-total').innerText = `₩${totalMsrp.toLocaleString()}`;
    document.getElementById('sum-discount-amount').innerText = `-₩${discountVal.toLocaleString()}`;
    document.getElementById('sum-final-total').innerText = `₩${finalDiscountedTotal.toLocaleString()}`;
  }

  document.getElementById('cart-clear-btn')?.addEventListener('click', () => {
    saveCart([]);
    renderCartView();
    showToast('수서 견적함이 모두 비워졌습니다.');
  });

  // ==========================================================================
  // 10. BOOK DETAIL & 360° PREVIEW LOGIC
  // ==========================================================================
  function showBookDetail(bookId) {
    const book = booksDatabase.find(b => b.id === bookId);
    if (!book) return;

    window.location.hash = '#detail';

    document.getElementById('detail-title').innerText = book.title[currentLang] || book.title.ko;
    document.getElementById('detail-subtitle').innerText = book.subtitle;
    document.getElementById('detail-author').innerText = book.author;
    document.getElementById('detail-publisher').innerText = book.publisher;
    document.getElementById('detail-year').innerText = book.pubYear;
    document.getElementById('detail-msrp').innerText = `₩${book.msrp.toLocaleString()}`;
    document.getElementById('detail-discount-price').innerText = `₩${Math.round(book.msrp * 0.85).toLocaleString()}`;

    document.getElementById('detail-isbn').innerText = book.isbn;
    document.getElementById('detail-kdc').innerText = `${book.kdc} (${book.kdcCategory === '800' ? '어린이문학' : '사회과학'})`;
    document.getElementById('detail-orig-lang').innerText = book.origLang;
    document.getElementById('detail-summary').innerText = book.summary[currentLang] || book.summary.ko;

    const transcriptEl = document.getElementById('audio-transcript');
    if (transcriptEl) transcriptEl.innerText = book.audioTranscript[currentLang] || book.audioTranscript.ko;

    updateDetail3DColor(book.coverColor);

    const addBtn = document.getElementById('detail-add-cart-btn');
    if (addBtn) {
      addBtn.onclick = (e) => {
        const qty = parseInt(document.getElementById('detail-qty-input').value) || 1;
        addToCart(book.id, qty);
        animateFlyToCart(e.currentTarget);
      };
    }
  }

  // Book Open 3D Toggle
  document.getElementById('btn-toggle-book-open')?.addEventListener('click', () => {
    isBookOpen = !isBookOpen;
    document.getElementById('lbl-toggle-open').innerText = isBookOpen ? '책 덮기' : '책 펼치기';
  });

  document.getElementById('btn-reset-3d-cam')?.addEventListener('click', () => {
    if (detailCamera) detailCamera.position.set(0, 1.5, 6);
  });

  // Audio Player Simulator
  const audioPlayBtn = document.getElementById('audio-play-btn');
  let isAudioPlaying = false;
  if (audioPlayBtn) {
    audioPlayBtn.addEventListener('click', () => {
      isAudioPlaying = !isAudioPlaying;
      const card = document.querySelector('.audio-sample-card');
      if (isAudioPlaying) {
        card.classList.add('playing');
        audioPlayBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        
        // Web Speech API fallback for audio simulation
        if ('speechSynthesis' in window) {
          const transcript = document.getElementById('audio-transcript').innerText;
          const utterance = new SpeechSynthesisUtterance(transcript);
          utterance.lang = currentLang === 'ko' ? 'ko-KR' : 'en-US';
          speechSynthesis.speak(utterance);
          utterance.onend = () => {
            isAudioPlaying = false;
            card.classList.remove('playing');
            audioPlayBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
          };
        }
      } else {
        card.classList.remove('playing');
        audioPlayBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        if ('speechSynthesis' in window) speechSynthesis.cancel();
      }
    });
  }

  // ==========================================================================
  // 11. EXCEL/CSV EXPORT & PRINTABLE PDF INVOICE GENERATOR
  // ==========================================================================

  // Export Cart to CSV/Excel
  function exportCartToExcel() {
    const cart = getCart();
    if (cart.length === 0) {
      showToast('견적함에 담긴 도서가 없습니다.');
      return;
    }

    let csvContent = "\uFEFF"; // UTF-8 BOM for Excel Korean compatibility
    csvContent += "No,도서명,ISBN-13,KDC,언어,출판사,수량,정가,사서할인가(-15%),합계금액\n";

    cart.forEach((item, idx) => {
      const b = booksDatabase.find(x => x.id === item.bookId);
      if (!b) return;
      const title = (b.title[currentLang] || b.title.ko).replace(/,/g, ' ');
      const discountUnit = Math.round(b.msrp * 0.85);
      const total = discountUnit * item.qty;
      csvContent += `${idx + 1},"${title}",${b.isbn},${b.kdc},${b.languages.join('/')},${b.publisherKey},${item.qty},${b.msrp},${discountUnit},${total}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `국립다문화도서관_수서견적서_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('수서 도서 명세서 엑셀(CSV) 파일이 다운로드되었습니다.', 'success');
  }

  document.getElementById('export-excel-btn')?.addEventListener('click', exportCartToExcel);

  // Official Invoice Modal
  function openQuoteInvoiceModal() {
    const cart = getCart();
    if (cart.length === 0) {
      showToast('견적함에 담긴 도서가 없습니다.');
      return;
    }

    const modal = document.getElementById('quote-invoice-modal');
    const tbody = document.getElementById('invoice-table-body');
    tbody.innerHTML = '';

    let totalQty = 0;
    let totalMsrp = 0;

    cart.forEach((item, idx) => {
      const b = booksDatabase.find(x => x.id === item.bookId);
      if (!b) return;
      const discountUnit = Math.round(b.msrp * 0.85);
      const rowTotal = discountUnit * item.qty;

      totalQty += item.qty;
      totalMsrp += b.msrp * item.qty;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td style="text-align: left;"><strong>${b.title[currentLang] || b.title.ko}</strong></td>
        <td class="font-mono">${b.isbn}</td>
        <td class="font-mono">${b.kdc}</td>
        <td>${b.languages[0]}</td>
        <td>${item.qty}</td>
        <td>₩${b.msrp.toLocaleString()}</td>
        <td>₩${discountUnit.toLocaleString()}</td>
        <td class="font-bold">₩${rowTotal.toLocaleString()}</td>
      `;
      tbody.appendChild(tr);
    });

    const finalTotal = Math.round(totalMsrp * 0.85);
    const discountVal = totalMsrp - finalTotal;

    document.getElementById('inv-total-qty').innerText = totalQty;
    document.getElementById('inv-total-msrp').innerText = `₩${totalMsrp.toLocaleString()}`;
    document.getElementById('inv-total-discount').innerText = `-₩${discountVal.toLocaleString()}`;
    document.getElementById('inv-total-final').innerText = `₩${finalTotal.toLocaleString()}`;
    document.getElementById('inv-grand-total').innerText = `₩${finalTotal.toLocaleString()}`;

    // Random Document Number
    const docNo = `LIB-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${Math.floor(1000 + Math.random()*9000)}`;
    document.getElementById('inv-doc-no').innerText = docNo;

    playStampSound();
    modal.classList.add('show');
  }

  document.getElementById('generate-pdf-invoice-btn')?.addEventListener('click', openQuoteInvoiceModal);
  document.getElementById('modal-close-btn')?.addEventListener('click', () => {
    document.getElementById('quote-invoice-modal').classList.remove('show');
  });

  // Sound Toggle Listener
  document.getElementById('sound-toggle-btn')?.addEventListener('click', (e) => {
    soundEnabled = !soundEnabled;
    e.currentTarget.innerHTML = soundEnabled ? `<i class="fa-solid fa-volume-high"></i>` : `<i class="fa-solid fa-volume-xmark"></i>`;
    showToast(soundEnabled ? '사서 직인 사운드 효과 활성화' : '사운드 효과 비활성화');
  });

  // Quantity Picker Controls on Detail
  document.getElementById('detail-qty-minus')?.addEventListener('click', () => {
    const input = document.getElementById('detail-qty-input');
    let val = parseInt(input.value) || 1;
    if (val > 1) input.value = val - 1;
  });

  document.getElementById('detail-qty-plus')?.addEventListener('click', () => {
    const input = document.getElementById('detail-qty-input');
    let val = parseInt(input.value) || 1;
    input.value = val + 1;
  });

  // ==========================================================================
  // 12. INITIALIZATION
  // ==========================================================================
  function initApp() {
    setLanguage(currentLang);
    updateCartBadges();

    // Initialize 3D Renderers
    setTimeout(() => {
      initHero3D();
      initExhibition3D();
      initCuration3D();
      initDetail3D();
    }, 100);

    // Initial Routing
    handleRoute();
  }

  initApp();
});
