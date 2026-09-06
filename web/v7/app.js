/* Lantern Night Library v7 — app logic */
(function(){
'use strict';

/* ---------------- DATA ---------------- */
const BOOKS = [
 {id:1, title:'달빛 아래 연등', orig:'Đèn Lồng Dưới Ánh Trăng', lang:'vi', country:'베트남', age:'child', isbn:'9791162341001', price:15000, pub:'Kim Đồng', year:2026, kdc:'833', pages:40, stock:'ok', new:true, color:['#7a2c1f','#c86a3c'], cur:[1,2,3], desc:'베트남 중추절 밤, 아이들이 손수 만든 등불을 들고 마을을 돌며 나누는 이야기. 한국어·베트남어 병기.'},
 {id:2, title:'우리 집 두 개의 설날', orig:'Two New Years at Home', lang:'en', country:'미국', age:'child', isbn:'9791162341002', price:16800, pub:'Candlewick', year:2026, kdc:'843', pages:36, stock:'ok', new:true, color:['#243a5a','#5a86b8'], cur:[1,3], desc:'한국계 미국인 가정이 음력설과 양력설을 함께 보내며 두 문화를 배우는 그림책.'},
 {id:3, title:'할머니의 아오자이', orig:'Chiếc Áo Dài Của Bà', lang:'vi', country:'베트남', age:'child', isbn:'9791162341003', price:14500, pub:'Nhã Nam', year:2025, kdc:'833', pages:44, stock:'ok', new:true, color:['#3c5a2a','#8fb46a'], cur:[1], desc:'베트남 전통 의상 아오자이에 담긴 세 세대 여성의 이야기.'},
 {id:4, title:'별을 세는 밤', orig:'数星星的夜晚', lang:'zh', country:'중국', age:'child', isbn:'9791162341004', price:15500, pub:'接力出版社', year:2026, kdc:'823', pages:32, stock:'wait', new:true, color:['#1f2c4a','#6b7fc4'], cur:[2], desc:'원소절 밤 등불을 띄우며 소원을 비는 소년의 이야기. 한중 이중언어.'},
 {id:5, title:'몽골 초원의 바람 아이', orig:'Салхины хүү', lang:'mn', country:'몽골', age:'teen', isbn:'9791162341005', price:13800, pub:'Монсудар', year:2025, kdc:'893', pages:120, stock:'ok', new:false, color:['#5a3a1f','#c9a86a'], cur:[2,3], desc:'유목민 가정의 소년이 도시 학교로 전학하며 겪는 성장 이야기.'},
 {id:6, title:'필리핀 할아버지의 바다 지도', orig:'Ang Mapa ng Dagat ni Lolo', lang:'tl', country:'필리핀', age:'child', isbn:'9791162341006', price:16000, pub:'Adarna House', year:2026, kdc:'899', pages:40, stock:'ok', new:true, color:['#0f4c5c','#3fa7b5'], cur:[1,2], desc:'섬나라 필리핀의 바다와 가족의 기억을 잇는 지도 이야기.'},
 {id:7, title:'다문화 가정 부모를 위한 첫 한국어 교실', orig:'Korean for Multicultural Parents', lang:'ko', country:'한국', age:'adult', isbn:'9791162341007', price:19000, pub:'한글샘', year:2025, kdc:'710', pages:220, stock:'ok', new:false, color:['#4a2a5a','#a67cc4'], cur:[3], desc:'학교 알림장, 병원, 관공서 등 생활 한국어 회화 중심 교재. 6개 언어 대역.'},
 {id:8, title:'태국의 물축제 송크란', orig:'สงกรานต์ของฉัน', lang:'th', country:'태국', age:'child', isbn:'9791162341008', price:15000, pub:'Nanmeebooks', year:2026, kdc:'899', pages:36, stock:'ok', new:true, color:['#7a1f4a','#d46aa0'], cur:[1,2], desc:'태국 새해 물축제 송크란을 통해 배우는 물과 가족의 의미.'},
 {id:9, title:'러시아 할머니의 마트료시카', orig:'Бабушкина матрёшка', lang:'ru', country:'러시아', age:'child', isbn:'9791162341009', price:16500, pub:'Самокат', year:2025, kdc:'892', pages:40, stock:'ok', new:false, color:['#8a1f1f','#e06060'], cur:[1], desc:'인형 속 인형처럼 이어지는 가족의 이야기.'},
 {id:10, title:'우즈베키스탄의 빵, 논', orig:'Non — O\'zbek noni', lang:'uz', country:'우즈베키스탄', age:'child', isbn:'9791162341010', price:14800, pub:'Yangi asr', year:2026, kdc:'899', pages:32, stock:'wait', new:true, color:['#8a5a1f','#e0a850'], cur:[2]},
 {id:11, title:'사서를 위한 다문화 장서 개발 가이드', orig:'Multicultural Collection Development', lang:'ko', country:'한국', age:'adult', isbn:'9791162341011', price:28000, pub:'도서관문화사', year:2026, kdc:'024', pages:310, stock:'ok', new:true, color:['#2a2a2a','#6a6a6a'], cur:[3], desc:'공공·학교도서관의 다문화 자료 선정 기준, 언어별 출판 시장, 서지 작성 실무.'},
 {id:12, title:'네팔 히말라야의 작은 학교', orig:'हिमालको सानो विद्यालय', lang:'ne', country:'네팔', age:'teen', isbn:'9791162341012', price:13500, pub:'Sajha', year:2025, kdc:'899', pages:96, stock:'ok', new:false, color:['#1f4a3a','#5ab08a'], cur:[2,3]},
 {id:13, title:'일본 여름 축제 마츠리', orig:'なつまつり', lang:'ja', country:'일본', age:'child', isbn:'9791162341013', price:15800, pub:'福音館', year:2026, kdc:'833', pages:32, stock:'ok', new:true, color:['#2f2f5a','#7c7cc4'], cur:[1,2]},
 {id:14, title:'인도네시아 그림자 인형극', orig:'Wayang Kulit', lang:'id', country:'인도네시아', age:'child', isbn:'9791162341014', price:16200, pub:'Gramedia', year:2025, kdc:'899', pages:44, stock:'ok', new:false, color:['#4a1f0f','#c07040'], cur:[1]},
];
const LANG_NAMES={ko:'한국어',en:'영어',vi:'베트남어',zh:'중국어',mn:'몽골어',tl:'필리핀어',th:'태국어',ru:'러시아어',uz:'우즈베크어',ne:'네팔어',ja:'일본어',id:'인도네시아어'};

const CURATIONS = [
 {id:1, type:'hall', titleKey:'c1_t', descKey:'c1_d'},
 {id:2, type:'stall', titleKey:'c2_t', descKey:'c2_d'},
 {id:3, type:'sky', titleKey:'c3_t', descKey:'c3_d'},
];

/* ---------------- I18N ---------------- */
const I18N = {
ko:{brand:'등불 도서관',brand_sub:'Lantern Night Library · 다문화 도서 납품',nav_home:'메인',nav_search:'도서 검색',nav_curation:'큐레이션',nav_cart:'견적함',
 hero_eyebrow:'2026 다문화 도서관 납품 전문 플랫폼',hero_title:'등불 아래<br>세계의 <em>이야기</em>가<br>모입니다',hero_desc:'12개 언어, 480개 출판사의 다문화 도서를 사서의 기준으로 검수해 납품합니다. 견적서 발급부터 서지 데이터(MARC) 제공까지 한 번에.',hero_cta1:'도서 검색·수서',hero_cta2:'등불 전시관 입장',stat_lang:'지원 언어',stat_books:'등록 도서',stat_lib:'납품 도서관',hero_hint:'마우스를 움직여 등불을 흔들어 보세요 · 클릭하면 불티가 날립니다',
 notice:'2026 하반기 공공도서관 다문화자료 구입 지원사업 납품 일정 안내 — 9월 말 견적 마감',notice_link:'견적서 발급하기',
 cur_eyebrow:'기획전 · Curated Exhibitions',cur_title:'등불처럼 걸어둔 이달의 기획전',cur_desc:'전시 형태가 각기 다른 세 개의 기획전. 3D 등불 전시관은 드래그해서 둘러볼 수 있습니다.',
 hall_eyebrow:'3D Lantern Hall',hall_desc:'드래그로 회랑을 돌려보고, 등불(표지)을 클릭하면 서지정보로 이동합니다.',
 new_eyebrow:'신간 · New Arrivals',new_title:'이번 달 입고 신간',view_active:'액티브',view_list:'서지 목록',
 lib1_t:'사서 검수 완료 도서',lib1_d:'현직 사서 12명이 내용·번역·제본 품질을 검수한 도서만 등록합니다.',lib2_t:'MARC/서지 데이터 제공',lib2_d:'납품 도서의 KORMARC 데이터와 장비 작업(라벨·바코드)을 함께 제공합니다.',lib3_t:'공문용 견적서 즉시 발급',lib3_d:'기관 할인율이 반영된 견적서를 PDF로 바로 출력해 기안에 첨부하세요.',
 search_eyebrow:'도서 검색 · 수서',search_title:'사서의 기준으로 찾는 다문화 도서',search_ph:'제목, 저자, ISBN',f_lang:'언어',f_age:'대상 연령',f_stock:'납품 상태',f_reset:'필터 초기화',sort_new:'최신 입고순',sort_price:'가격순',sort_title:'제목순',result_count:'{n}권',
 age_child:'유아·초등',age_teen:'청소년',age_adult:'성인·사서',stock_ok:'즉시 납품',stock_wait:'입고 대기',
 curpage_title:'기획전 전체 보기',type_hall:'3D 등불 전시관',type_stall:'야시장 가판대',type_sky:'하늘 등불',books_n:'{n}권 수록',
 c1_t:'세계 그림책 비엔날레 수상작',c1_d:'BIB·볼로냐 라가치 수상작 중 다문화 가정 아동을 위한 원서+번역서 세트.',c2_t:'아시아의 축제와 등불',c2_d:'연등회, 원소절, 송크란, 마츠리 — 축제로 배우는 이웃 나라 문화.',c3_t:'다문화 가정 부모·사서 필독서',c3_d:'생활 한국어, 장서 개발 가이드, 성장기 청소년 문학까지.',
 cart_eyebrow:'견적함 · Quotation Basket',cart_title:'납품 견적함',cart_summary:'견적 요약',cart_org:'기관 유형',org_public:'공공도서관 (12% 할인)',org_school:'학교도서관 (10% 할인)',org_multi:'다문화가족지원센터 (15% 할인)',org_personal:'개인 구매 (0%)',cart_sub:'정가 합계',cart_disc:'기관 할인',cart_total:'납품 예정 금액',cart_note:'부가세 면세(도서). 배송·장비작업비 별도 협의.',cart_quote:'공문용 견적서 발급',cart_clear:'견적함 비우기',cart_empty:'견적함이 비어 있습니다. 도서를 검색해 담아 주세요.',
 back:'목록으로',add:'견적함 담기',added:'견적함에 담았습니다',removed:'견적함에서 제거했습니다',cleared:'견적함을 비웠습니다',quote_done:'견적서(PDF) 발급 창을 엽니다',
 b_isbn:'ISBN',b_lang:'언어',b_country:'원산국',b_age:'대상',b_pub:'출판사',b_year:'출간',b_kdc:'KDC',b_pages:'쪽수',b_stock:'납품',price_unit:'원',qty:'수량',footer_desc:'다문화 도서관 납품 전문 · 사서와 함께 만드는 세계의 서가',th_title:'서명',th_lang:'언어',th_age:'대상',th_pub:'출판사',th_price:'정가',th_stock:'납품',th_act:''},
en:{brand:'Lantern Library',brand_sub:'Lantern Night Library · Multicultural book supply',nav_home:'Home',nav_search:'Search',nav_curation:'Curation',nav_cart:'Quote Basket',
 hero_eyebrow:'2026 Multicultural library supply platform',hero_title:'Under the lanterns,<br>the world\'s <em>stories</em><br>gather',hero_desc:'Multicultural books in 12 languages from 480 publishers, vetted by librarians. Quotation, MARC data and processing in one place.',hero_cta1:'Search & acquire',hero_cta2:'Enter Lantern Hall',stat_lang:'Languages',stat_books:'Titles',stat_lib:'Libraries served',hero_hint:'Move the mouse to sway the lanterns · click for sparks',
 notice:'2026 H2 public library multicultural collection grant — quotation deadline end of September',notice_link:'Issue a quotation',
 cur_eyebrow:'Curated Exhibitions',cur_title:'This month\'s exhibitions, hung like lanterns',cur_desc:'Three exhibitions in three display forms. Drag the 3D Lantern Hall to look around.',
 hall_eyebrow:'3D Lantern Hall',hall_desc:'Drag to rotate the gallery; click a lantern (cover) to open its record.',
 new_eyebrow:'New Arrivals',new_title:'Arrived this month',view_active:'Active',view_list:'Record list',
 lib1_t:'Librarian-vetted titles',lib1_d:'Only titles reviewed for content, translation and binding by 12 working librarians.',lib2_t:'MARC / bibliographic data',lib2_d:'KORMARC records plus labels and barcodes for every delivered title.',lib3_t:'Official quotation in seconds',lib3_d:'Print a PDF quotation with institutional discount applied, ready for approval.',
 search_eyebrow:'Search · Acquisition',search_title:'Find multicultural books by librarian criteria',search_ph:'Title, author, ISBN',f_lang:'Language',f_age:'Age group',f_stock:'Supply status',f_reset:'Reset filters',sort_new:'Newest',sort_price:'Price',sort_title:'Title',result_count:'{n} titles',
 age_child:'Children',age_teen:'Young adult',age_adult:'Adult · Librarian',stock_ok:'In stock',stock_wait:'Backorder',
 curpage_title:'All exhibitions',type_hall:'3D Lantern Hall',type_stall:'Night market stall',type_sky:'Sky lanterns',books_n:'{n} titles',
 c1_t:'Picture book biennale winners',c1_d:'BIB & Bologna Ragazzi winners as original + translation sets for multicultural children.',c2_t:'Festivals and lanterns of Asia',c2_d:'Yeondeunghoe, Lantern Festival, Songkran, Matsuri — neighbours through festivals.',c3_t:'Must-reads for parents & librarians',c3_d:'Everyday Korean, collection development guides, YA fiction.',
 cart_eyebrow:'Quotation Basket',cart_title:'Supply quotation basket',cart_summary:'Summary',cart_org:'Institution type',org_public:'Public library (12% off)',org_school:'School library (10% off)',org_multi:'Multicultural family center (15% off)',org_personal:'Personal (0%)',cart_sub:'List price total',cart_disc:'Institutional discount',cart_total:'Estimated total',cart_note:'Books are VAT-exempt. Shipping and processing quoted separately.',cart_quote:'Issue official quotation',cart_clear:'Clear basket',cart_empty:'Your basket is empty. Search and add titles.',
 back:'Back to list',add:'Add to basket',added:'Added to basket',removed:'Removed from basket',cleared:'Basket cleared',quote_done:'Opening quotation (PDF) print window',
 b_isbn:'ISBN',b_lang:'Language',b_country:'Origin',b_age:'Audience',b_pub:'Publisher',b_year:'Year',b_kdc:'KDC',b_pages:'Pages',b_stock:'Supply',price_unit:'KRW',qty:'Qty',footer_desc:'Multicultural library supply · building the world\'s shelves with librarians',th_title:'Title',th_lang:'Lang',th_age:'Audience',th_pub:'Publisher',th_price:'Price',th_stock:'Supply',th_act:''},
vi:{brand:'Thư viện Đèn Lồng',brand_sub:'Lantern Night Library · Cung ứng sách đa văn hóa',nav_home:'Trang chủ',nav_search:'Tìm sách',nav_curation:'Triển lãm',nav_cart:'Giỏ báo giá',
 hero_eyebrow:'Nền tảng cung ứng sách cho thư viện đa văn hóa 2026',hero_title:'Dưới ánh đèn lồng,<br><em>câu chuyện</em> của<br>thế giới hội tụ',hero_desc:'Sách đa văn hóa 12 ngôn ngữ từ 480 nhà xuất bản, được thủ thư thẩm định. Báo giá, dữ liệu MARC và xử lý kỹ thuật tại một nơi.',hero_cta1:'Tìm & bổ sung',hero_cta2:'Vào Sảnh Đèn Lồng',stat_lang:'Ngôn ngữ',stat_books:'Đầu sách',stat_lib:'Thư viện phục vụ',hero_hint:'Di chuột để làm đèn lồng đung đưa · nhấp để tóe lửa',
 notice:'Dự án hỗ trợ mua tài liệu đa văn hóa nửa cuối 2026 — hạn báo giá cuối tháng 9',notice_link:'Phát hành báo giá',
 cur_eyebrow:'Triển lãm tuyển chọn',cur_title:'Triển lãm tháng này, treo như đèn lồng',cur_desc:'Ba triển lãm với ba hình thức trưng bày. Kéo để xoay Sảnh Đèn Lồng 3D.',
 hall_eyebrow:'Sảnh Đèn Lồng 3D',hall_desc:'Kéo để xoay hành lang; nhấp vào đèn lồng (bìa) để xem thông tin.',
 new_eyebrow:'Sách mới',new_title:'Sách nhập về tháng này',view_active:'Sinh động',view_list:'Danh mục',
 lib1_t:'Sách đã được thủ thư thẩm định',lib1_d:'Chỉ đăng ký sách được 12 thủ thư thẩm định nội dung, bản dịch và đóng gáy.',lib2_t:'Dữ liệu MARC / thư mục',lib2_d:'Cung cấp KORMARC cùng nhãn và mã vạch cho mọi sách giao.',lib3_t:'Báo giá chính thức tức thì',lib3_d:'In báo giá PDF đã áp dụng chiết khấu cơ quan để đính kèm hồ sơ.',
 search_eyebrow:'Tìm sách · Bổ sung',search_title:'Tìm sách đa văn hóa theo tiêu chí thủ thư',search_ph:'Tên sách, tác giả, ISBN',f_lang:'Ngôn ngữ',f_age:'Độ tuổi',f_stock:'Tình trạng',f_reset:'Đặt lại bộ lọc',sort_new:'Mới nhất',sort_price:'Giá',sort_title:'Tên sách',result_count:'{n} cuốn',
 age_child:'Thiếu nhi',age_teen:'Thiếu niên',age_adult:'Người lớn · Thủ thư',stock_ok:'Có sẵn',stock_wait:'Chờ hàng',
 curpage_title:'Tất cả triển lãm',type_hall:'Sảnh Đèn Lồng 3D',type_stall:'Quầy chợ đêm',type_sky:'Đèn trời',books_n:'{n} cuốn',
 c1_t:'Sách tranh đoạt giải Biennale',c1_d:'Bộ nguyên bản + bản dịch các tác phẩm đoạt giải BIB, Bologna Ragazzi.',c2_t:'Lễ hội và đèn lồng châu Á',c2_d:'Yeondeunghoe, Nguyên tiêu, Songkran, Matsuri — hiểu láng giềng qua lễ hội.',c3_t:'Sách cần đọc cho phụ huynh & thủ thư',c3_d:'Tiếng Hàn đời sống, hướng dẫn phát triển bộ sưu tập, văn học thiếu niên.',
 cart_eyebrow:'Giỏ báo giá',cart_title:'Giỏ báo giá cung ứng',cart_summary:'Tóm tắt',cart_org:'Loại cơ quan',org_public:'Thư viện công cộng (giảm 12%)',org_school:'Thư viện trường (giảm 10%)',org_multi:'Trung tâm gia đình đa văn hóa (giảm 15%)',org_personal:'Cá nhân (0%)',cart_sub:'Tổng giá bìa',cart_disc:'Chiết khấu cơ quan',cart_total:'Tổng dự kiến',cart_note:'Sách miễn VAT. Vận chuyển và xử lý báo giá riêng.',cart_quote:'Phát hành báo giá chính thức',cart_clear:'Xóa giỏ',cart_empty:'Giỏ trống. Hãy tìm và thêm sách.',
 back:'Quay lại',add:'Thêm vào giỏ',added:'Đã thêm vào giỏ',removed:'Đã xóa khỏi giỏ',cleared:'Đã xóa giỏ',quote_done:'Mở cửa sổ in báo giá (PDF)',
 b_isbn:'ISBN',b_lang:'Ngôn ngữ',b_country:'Xuất xứ',b_age:'Đối tượng',b_pub:'NXB',b_year:'Năm',b_kdc:'KDC',b_pages:'Số trang',b_stock:'Cung ứng',price_unit:'KRW',qty:'SL',footer_desc:'Cung ứng sách thư viện đa văn hóa · cùng thủ thư dựng kệ sách thế giới',th_title:'Tên sách',th_lang:'NN',th_age:'Đối tượng',th_pub:'NXB',th_price:'Giá',th_stock:'Cung ứng',th_act:''},
zh:{brand:'灯笼图书馆',brand_sub:'Lantern Night Library · 多元文化图书供应',nav_home:'首页',nav_search:'图书检索',nav_curation:'策展',nav_cart:'报价篮',
 hero_eyebrow:'2026 多元文化图书馆供应平台',hero_title:'灯笼之下<br>世界的<em>故事</em><br>在此汇聚',hero_desc:'来自480家出版社、12种语言的多元文化图书，由馆员审核后供应。报价单、MARC数据与加工一站完成。',hero_cta1:'检索·采购',hero_cta2:'进入灯笼展厅',stat_lang:'支持语言',stat_books:'收录图书',stat_lib:'供应馆',hero_hint:'移动鼠标让灯笼摇曳 · 点击迸出火星',
 notice:'2026下半年公共图书馆多元文化资料采购支持项目 — 9月底报价截止',notice_link:'开具报价单',
 cur_eyebrow:'策展 · Curated Exhibitions',cur_title:'如灯笼般悬挂的本月策展',cur_desc:'三种不同展示形式的策展。3D灯笼展厅可拖动环视。',
 hall_eyebrow:'3D 灯笼展厅',hall_desc:'拖动旋转回廊，点击灯笼（封面）查看书目信息。',
 new_eyebrow:'新书 · New Arrivals',new_title:'本月到馆新书',view_active:'动态',view_list:'书目列表',
 lib1_t:'馆员审核图书',lib1_d:'仅收录经12位在职馆员审核内容、翻译与装订质量的图书。',lib2_t:'提供 MARC/书目数据',lib2_d:'随书提供 KORMARC 数据及标签、条码加工。',lib3_t:'即时开具公文报价单',lib3_d:'已含机构折扣的报价单可直接导出PDF附于公文。',
 search_eyebrow:'图书检索 · 采购',search_title:'以馆员标准检索多元文化图书',search_ph:'书名、作者、ISBN',f_lang:'语言',f_age:'适读年龄',f_stock:'供应状态',f_reset:'重置筛选',sort_new:'最新到馆',sort_price:'价格',sort_title:'书名',result_count:'{n} 册',
 age_child:'幼儿·小学',age_teen:'青少年',age_adult:'成人·馆员',stock_ok:'即时供应',stock_wait:'待到货',
 curpage_title:'全部策展',type_hall:'3D 灯笼展厅',type_stall:'夜市摊位',type_sky:'天灯',books_n:'收录 {n} 册',
 c1_t:'世界绘本双年展获奖作',c1_d:'BIB、博洛尼亚拉加齐奖获奖作原版+译本套装。',c2_t:'亚洲的节日与灯笼',c2_d:'燃灯会、元宵、宋干、祭典 — 以节日认识邻国文化。',c3_t:'多元家庭家长·馆员必读',c3_d:'生活韩语、馆藏发展指南、青少年文学。',
 cart_eyebrow:'报价篮',cart_title:'供应报价篮',cart_summary:'报价摘要',cart_org:'机构类型',org_public:'公共图书馆（9折）',org_school:'学校图书馆（9折）',org_multi:'多元文化家庭支援中心（85折）',org_personal:'个人购买（无折扣）',cart_sub:'定价合计',cart_disc:'机构折扣',cart_total:'预计供应金额',cart_note:'图书免增值税。运费与加工费另议。',cart_quote:'开具公文报价单',cart_clear:'清空报价篮',cart_empty:'报价篮为空，请检索并加入图书。',
 back:'返回列表',add:'加入报价篮',added:'已加入报价篮',removed:'已从报价篮移除',cleared:'已清空报价篮',quote_done:'打开报价单（PDF）打印窗口',
 b_isbn:'ISBN',b_lang:'语言',b_country:'原产国',b_age:'对象',b_pub:'出版社',b_year:'出版年',b_kdc:'KDC',b_pages:'页数',b_stock:'供应',price_unit:'韩元',qty:'数量',footer_desc:'多元文化图书馆供应 · 与馆员共建世界书架',th_title:'书名',th_lang:'语言',th_age:'对象',th_pub:'出版社',th_price:'定价',th_stock:'供应',th_act:''}
};
let lang = localStorage.getItem('v7_lang') || 'ko';
const t = (k, vars) => { let s = (I18N[lang] && I18N[lang][k]) || I18N.ko[k] || k; if (vars) Object.keys(vars).forEach(v => s = s.replace('{'+v+'}', vars[v])); return s; };
function applyI18n(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => el.innerHTML = t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
  document.querySelectorAll('#lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  renderAll();
}
document.querySelectorAll('#lang-switch button').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; localStorage.setItem('v7_lang', lang); applyI18n(); }));

/* ---------------- HELPERS ---------------- */
const $ = s => document.querySelector(s);
const fmt = n => n.toLocaleString('ko-KR') + ' ' + t('price_unit');
const byId = id => BOOKS.find(b => b.id === +id);
function coverHTML(b, cls='book-cover'){ return `<div class="${cls}" style="background:linear-gradient(150deg,${b.color[0]},${b.color[1]})"><div class="t">${b.title}</div><div class="l">${b.lang.toUpperCase()} · ${b.country}</div></div>`; }
function stockTag(b){ return `<span class="tag ${b.stock}">${t('stock_'+b.stock)}</span>`; }
function toast(msg){ const el=$('#toast'); el.textContent=msg; el.classList.add('show'); clearTimeout(el._t); el._t=setTimeout(()=>el.classList.remove('show'),1800); }

/* ---------------- FX: glow ring + sparks ---------------- */
const fx = $('#fx-canvas'), fctx = fx.getContext('2d'); let sparks=[];
function resizeFx(){ fx.width=innerWidth; fx.height=innerHeight; } resizeFx(); addEventListener('resize', resizeFx);
function burst(x,y,n=22){ for(let i=0;i<n;i++){ const a=Math.random()*Math.PI*2, s=1+Math.random()*4; sparks.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-2,life:1,r:1+Math.random()*2.5}); } }
(function loopFx(){ fctx.clearRect(0,0,fx.width,fx.height); sparks=sparks.filter(p=>p.life>0); for(const p of sparks){ p.x+=p.vx; p.y+=p.vy; p.vy+=.06; p.vx*=.98; p.life-=.02; fctx.globalAlpha=Math.max(p.life,0); fctx.fillStyle=p.life>.5?'#ffd28a':'#ff8c3a'; fctx.beginPath(); fctx.arc(p.x,p.y,p.r*p.life,0,Math.PI*2); fctx.fill(); } fctx.globalAlpha=1; requestAnimationFrame(loopFx); })();
document.addEventListener('click', e => { const b = e.target.closest('.fx-btn, .btn, .chip, .mini-btn, .hall-tabs button'); if(!b) return; const ring=document.createElement('span'); ring.className='glow-ring'; b.style.position='relative'; b.appendChild(ring); setTimeout(()=>ring.remove(),650); burst(e.clientX,e.clientY,18); });

/* ---------------- CART ---------------- */
let cart = JSON.parse(localStorage.getItem('v7_cart')||'{}');
function saveCart(){ localStorage.setItem('v7_cart', JSON.stringify(cart)); const n=Object.values(cart).reduce((a,b)=>a+b,0); $('#cart-count').textContent=n; const cb=$('#cart-btn'); cb.classList.remove('blink'); void cb.offsetWidth; cb.classList.add('blink'); }
function addToCart(id, qty=1){ cart[id]=(cart[id]||0)+qty; saveCart(); toast(t('added')); renderCart(); }
function removeFromCart(id){ delete cart[id]; saveCart(); toast(t('removed')); renderCart(); }
function setQty(id,q){ q=Math.max(1,Math.min(999,+q||1)); cart[id]=q; saveCart(); renderCart(); }
document.addEventListener('click', e => { const a=e.target.closest('[data-add]'); if(a){ e.preventDefault(); e.stopPropagation(); addToCart(a.dataset.add); } });

function renderCart(){
  const wrap=$('#cart-items'); const ids=Object.keys(cart);
  if(!ids.length){ wrap.innerHTML=`<div class="cart-empty">${t('cart_empty')}</div>`; }
  else wrap.innerHTML = ids.map(id=>{ const b=byId(id); return `<div class="cart-row">${coverHTML(b)}<div><h4>${b.title}</h4><div class="muted">${b.isbn} · ${LANG_NAMES[b.lang]} · ${b.pub}</div>${stockTag(b)}</div>
   <div class="qty"><button data-q="-1" data-id="${id}">−</button><input value="${cart[id]}" data-qin="${id}"><button data-q="1" data-id="${id}">+</button></div><b style="color:var(--amber)">${fmt(b.price*cart[id])}</b><button class="del" data-del="${id}"><span class="material-symbols-outlined">close</span></button></div>`; }).join('');
  const rate=+$('#org-type').value; const sub=ids.reduce((s,id)=>s+byId(id).price*cart[id],0); const disc=Math.round(sub*rate);
  $('#sum-sub').textContent=fmt(sub); $('#sum-disc').textContent='− '+fmt(disc); $('#sum-total').textContent=fmt(sub-disc);
}
$('#cart-items').addEventListener('click', e=>{ const q=e.target.closest('[data-q]'); if(q){ setQty(q.dataset.id, cart[q.dataset.id]+ +q.dataset.q); } const d=e.target.closest('[data-del]'); if(d) removeFromCart(d.dataset.del); });
$('#cart-items').addEventListener('change', e=>{ if(e.target.dataset.qin) setQty(e.target.dataset.qin, e.target.value); });
$('#org-type').addEventListener('change', renderCart);
$('#btn-clear').addEventListener('click', ()=>{ cart={}; saveCart(); renderCart(); toast(t('cleared')); });
$('#btn-quote').addEventListener('click', ()=>{ toast(t('quote_done')); const ids=Object.keys(cart); if(!ids.length) return; const rate=+$('#org-type').value; const sub=ids.reduce((s,id)=>s+byId(id).price*cart[id],0); const w=window.open('','_blank'); w.document.write(`<html><head><meta charset="utf-8"><title>견적서</title><style>body{font-family:sans-serif;padding:40px}table{width:100%;border-collapse:collapse}td,th{border:1px solid #999;padding:8px;font-size:13px}h1{letter-spacing:.3em}</style></head><body><h1>견 적 서</h1><p>등불 도서관 · 다문화 도서 납품 · 발행일 ${new Date().toLocaleDateString('ko-KR')}</p><table><tr><th>No</th><th>서명</th><th>ISBN</th><th>출판사</th><th>정가</th><th>수량</th><th>금액</th></tr>${ids.map((id,i)=>{const b=byId(id);return `<tr><td>${i+1}</td><td>${b.title}</td><td>${b.isbn}</td><td>${b.pub}</td><td>${b.price.toLocaleString()}</td><td>${cart[id]}</td><td>${(b.price*cart[id]).toLocaleString()}</td></tr>`}).join('')}</table><p>정가 합계 ${sub.toLocaleString()}원 · 기관 할인 ${(rate*100)}% · <b>납품 금액 ${(sub-Math.round(sub*rate)).toLocaleString()}원</b> (도서 부가세 면세)</p><script>window.print()<\/script></body></html>`); w.document.close(); });

/* ---------------- ROUTER ---------------- */
let detailScene=null;
function route(){
  const h=(location.hash||'#home').slice(1); const [page,param]=h.split('/');
  document.querySelectorAll('.page').forEach(p=>p.classList.add('hidden'));
  const el=$('#page-'+page)||$('#page-home'); el.classList.remove('hidden');
  document.querySelectorAll('.main-nav a').forEach(a=>a.classList.toggle('active', a.dataset.route===page));
  window.scrollTo({top:0});
  if(page==='detail') renderDetail(param);
  if(page==='curation') renderCurationPage(param);
  if(page==='cart') renderCart();
  if(page==='search') renderResults();
}
addEventListener('hashchange', route);

/* ---------------- HOME: curations ---------------- */
function curVisual(c){
  const books=BOOKS.filter(b=>b.cur.includes(c.id));
  if(c.type==='hall') return `<div class="cur-visual"><div class="lant-row">${books.slice(0,6).map(()=>'<i></i>').join('')}</div></div>`;
  if(c.type==='stall') return `<div class="cur-visual"><div class="stall-roof"></div><div class="stall">${books.slice(0,7).map(b=>`<i style="background:linear-gradient(${b.color[0]},${b.color[1]});height:${60+Math.random()*30}px"></i>`).join('')}</div></div>`;
  return `<div class="cur-visual sky">${books.slice(0,8).map((b,i)=>`<i style="left:${10+i*11}%;top:${40+Math.random()*40}%;animation-delay:-${i*0.8}s"></i>`).join('')}</div>`;
}
function curCard(c){ const n=BOOKS.filter(b=>b.cur.includes(c.id)).length; return `<a href="#curation/${c.id}" class="cur-card fx-btn">${curVisual(c)}<span class="type">${t('type_'+c.type)}</span><h3>${t(c.titleKey)}</h3><p>${t(c.descKey)}</p><span class="count">${t('books_n',{n})}</span></a>`; }
function renderHomeCurations(){ $('#home-curations').innerHTML=CURATIONS.map(curCard).join(''); $('#cur-list').innerHTML=CURATIONS.map(curCard).join(''); }

/* ---------------- HOME: new books ---------------- */
function renderNew(){
  const news=BOOKS.filter(b=>b.new);
  $('#new-active').innerHTML=news.map(b=>`<a href="#detail/${b.id}" class="book-lantern"><div class="string"></div>${coverHTML(b)}<h4>${b.title}</h4><div class="meta">${LANG_NAMES[b.lang]} · ${b.pub}</div><div class="price">${fmt(b.price)}</div></a>`).join('');
  $('#new-list').innerHTML=`<table><thead><tr><th>ISBN</th><th>${t('th_title')}</th><th>${t('th_lang')}</th><th>${t('th_age')}</th><th>${t('th_pub')}</th><th>${t('th_price')}</th><th>${t('th_stock')}</th><th></th></tr></thead><tbody>${news.map(b=>`<tr><td class="isbn">${b.isbn}</td><td><a href="#detail/${b.id}"><b>${b.title}</b><br><span class="muted">${b.orig}</span></a></td><td>${LANG_NAMES[b.lang]}</td><td>${t('age_'+b.age)}</td><td>${b.pub}</td><td>${fmt(b.price)}</td><td>${stockTag(b)}</td><td><button class="mini-btn" data-add="${b.id}">${t('add')}</button></td></tr>`).join('')}</tbody></table>`;
}
$('#new-toggle').addEventListener('click', e=>{ const b=e.target.closest('button'); if(!b) return; document.querySelectorAll('#new-toggle button').forEach(x=>x.classList.toggle('active',x===b)); $('#new-active').classList.toggle('hidden', b.dataset.view!=='active'); $('#new-list').classList.toggle('hidden', b.dataset.view!=='list'); });

/* ---------------- SEARCH ---------------- */
const filters={lang:new Set(),age:new Set(),stock:new Set()};
function renderFilterChips(){
  const langs=[...new Set(BOOKS.map(b=>b.lang))];
  $('#f-lang').innerHTML=langs.map(l=>`<button class="chip ${filters.lang.has(l)?'active':''}" data-f="lang" data-v="${l}">${LANG_NAMES[l]}</button>`).join('');
  $('#f-age').innerHTML=['child','teen','adult'].map(a=>`<button class="chip ${filters.age.has(a)?'active':''}" data-f="age" data-v="${a}">${t('age_'+a)}</button>`).join('');
  $('#f-stock').innerHTML=['ok','wait'].map(s=>`<button class="chip ${filters.stock.has(s)?'active':''}" data-f="stock" data-v="${s}">${t('stock_'+s)}</button>`).join('');
}
$('.filters').addEventListener('click', e=>{ const c=e.target.closest('.chip'); if(!c) return; const set=filters[c.dataset.f]; set.has(c.dataset.v)?set.delete(c.dataset.v):set.add(c.dataset.v); renderFilterChips(); renderResults(); });
$('#f-reset').addEventListener('click', ()=>{ Object.values(filters).forEach(s=>s.clear()); $('#q').value=''; renderFilterChips(); renderResults(); });
$('#q').addEventListener('input', renderResults); $('#sort').addEventListener('change', renderResults);
function renderResults(){
  const q=$('#q').value.trim().toLowerCase();
  let list=BOOKS.filter(b=>(!q||b.title.toLowerCase().includes(q)||b.orig.toLowerCase().includes(q)||b.isbn.includes(q)||b.pub.toLowerCase().includes(q))&&(!filters.lang.size||filters.lang.has(b.lang))&&(!filters.age.size||filters.age.has(b.age))&&(!filters.stock.size||filters.stock.has(b.stock)));
  const s=$('#sort').value; if(s==='price') list.sort((a,b)=>a.price-b.price); else if(s==='title') list.sort((a,b)=>a.title.localeCompare(b.title)); else list.sort((a,b)=>b.year-a.year||b.id-a.id);
  $('#result-count').textContent=t('result_count',{n:list.length});
  $('#results').innerHTML=list.map(b=>`<a href="#detail/${b.id}" class="res-card">${coverHTML(b)}<div><h4>${b.title}</h4><div class="meta">${b.orig}<br>${LANG_NAMES[b.lang]} · ${t('age_'+b.age)} · ${b.pub}<br><span class="isbn">${b.isbn}</span></div><div class="price">${fmt(b.price)}</div>${stockTag(b)} <button class="mini-btn" data-add="${b.id}">${t('add')}</button></div></a>`).join('');
}

/* ---------------- CURATION PAGE ---------------- */
let curHall=null;
function renderCurationPage(id){
  const wrap=$('#cur-detail'); if(curHall){curHall.dispose();curHall=null;}
  if(!id){ wrap.innerHTML=''; return; }
  const c=CURATIONS.find(x=>x.id===+id); if(!c) return;
  const books=BOOKS.filter(b=>b.cur.includes(c.id));
  let stage='';
  if(c.type==='hall') stage=`<div class="hall-wrap"><canvas id="cur-hall-canvas"></canvas><div class="hall-tooltip" id="cur-hall-tooltip"></div></div>`;
  else if(c.type==='stall') stage=`<div class="stall3d"><div class="roof"></div><div class="shelf">${books.map(b=>`<a href="#detail/${b.id}">${coverHTML(b)}</a>`).join('')}</div></div>`;
  else stage=`<div class="sky3d">${books.map((b,i)=>`<a href="#detail/${b.id}"><div class="book-cover" style="left:${6+i*13}%;top:${15+((i*37)%50)}%;animation-delay:-${i*1.3}s;background:linear-gradient(150deg,${b.color[0]},${b.color[1]})"><div class="t">${b.title}</div></div></a>`).join('')}</div>`;
  wrap.innerHTML=`<span class="eyebrow">${t('type_'+c.type)}</span><h2 style="font-family:var(--serif);font-size:2rem;margin:.2rem 0">${t(c.titleKey)}</h2><p style="color:var(--ink2)">${t(c.descKey)}</p>${stage}<div class="cur-books">${books.map(b=>`<a href="#detail/${b.id}" class="res-card">${coverHTML(b)}<div><h4>${b.title}</h4><div class="meta">${LANG_NAMES[b.lang]} · ${b.pub}</div><div class="price">${fmt(b.price)}</div><button class="mini-btn" data-add="${b.id}">${t('add')}</button></div></a>`).join('')}</div>`;
  if(c.type==='hall') curHall=makeHall($('#cur-hall-canvas'), $('#cur-hall-tooltip'), books);
  setTimeout(()=>wrap.scrollIntoView({behavior:'smooth'}),50);
}

/* ---------------- THREE: helpers ---------------- */
function coverTexture(b){
  const c=document.createElement('canvas'); c.width=256; c.height=360; const g=c.getContext('2d');
  const gr=g.createLinearGradient(0,0,256,360); gr.addColorStop(0,b.color[0]); gr.addColorStop(1,b.color[1]); g.fillStyle=gr; g.fillRect(0,0,256,360);
  g.fillStyle='rgba(0,0,0,.25)'; g.fillRect(0,0,14,360);
  g.fillStyle='#fff'; g.font='bold 26px "Noto Serif KR", serif'; g.shadowColor='rgba(0,0,0,.5)'; g.shadowBlur=6;
  const words=b.title.split(' '); let line='', y=50; for(const w of words){ const test=line?line+' '+w:w; if(g.measureText(test).width>215){ g.fillText(line,26,y); line=w; y+=32; } else line=test; } g.fillText(line,26,y);
  g.font='14px sans-serif'; g.fillStyle='rgba(255,255,255,.85)'; g.fillText(b.lang.toUpperCase()+' · '+b.country,26,330);
  const tx=new THREE.CanvasTexture(c); return tx;
}
function fitRenderer(r,cv){ const w=cv.clientWidth,h=cv.clientHeight; r.setSize(w,h,false); return w/h; }

/* ---------------- THREE: hero lanterns ---------------- */
(function hero(){
  const cv=$('#hero-canvas'); const renderer=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true}); renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  const scene=new THREE.Scene(); scene.fog=new THREE.FogExp2(0x0b0710,.028);
  const camera=new THREE.PerspectiveCamera(50,1,.1,100); camera.position.set(0,0,18);
  scene.add(new THREE.AmbientLight(0x552211,.6));
  const pts=[]; for(let i=0;i<=12;i++){ const tt=i/12; pts.push(new THREE.Vector2(Math.sin(tt*Math.PI)*.9*(1-.25*tt)+.05, tt*2.2-1.1)); }
  const geo=new THREE.LatheGeometry(pts,28);
  const lanterns=[]; const group=new THREE.Group(); scene.add(group);
  for(let i=0;i<34;i++){
    const hue=.06+Math.random()*.05; const col=new THREE.Color().setHSL(hue,.95,.55);
    const mat=new THREE.MeshStandardMaterial({color:col,emissive:col,emissiveIntensity:1.5,roughness:.6,transparent:true,opacity:.95,side:THREE.DoubleSide});
    const m=new THREE.Mesh(geo,mat); const s=.5+Math.random()*1.1; m.scale.setScalar(s);
    m.position.set((Math.random()-.5)*36,(Math.random()-.5)*16,-4-Math.random()*22);
    const ring=new THREE.Mesh(new THREE.TorusGeometry(.5,.05,8,24),new THREE.MeshBasicMaterial({color:0x5a2a10})); ring.rotation.x=Math.PI/2; ring.position.y=1.15; m.add(ring);
    const cap=ring.clone(); cap.position.y=-1.1; m.add(cap);
    const light=new THREE.PointLight(col,.9*s,7); m.add(light);
    m.userData={spd:.15+Math.random()*.35,ph:Math.random()*6.28,sw:.2+Math.random()*.3};
    group.add(m); lanterns.push(m);
  }
  // embers
  const eg=new THREE.BufferGeometry(); const N=500; const ep=new Float32Array(N*3); for(let i=0;i<N;i++){ep[i*3]=(Math.random()-.5)*40;ep[i*3+1]=(Math.random()-.5)*20;ep[i*3+2]=-Math.random()*25;} eg.setAttribute('position',new THREE.BufferAttribute(ep,3));
  const embers=new THREE.Points(eg,new THREE.PointsMaterial({color:0xffb35c,size:.09,transparent:true,opacity:.7})); scene.add(embers);
  let mx=0,my=0; cv.parentElement.addEventListener('mousemove',e=>{const r=cv.getBoundingClientRect(); mx=(e.clientX-r.left)/r.width*2-1; my=-((e.clientY-r.top)/r.height*2-1);});
  cv.addEventListener('click',()=>{ lanterns.forEach(l=>gsap.to(l.userData,{sw:1.2,duration:.3,yoyo:true,repeat:1})); });
  const clock=new THREE.Clock();
  (function anim(){ requestAnimationFrame(anim); const t0=clock.getElapsedTime(); camera.aspect=fitRenderer(renderer,cv); camera.updateProjectionMatrix();
    for(const l of lanterns){ const u=l.userData; l.position.y+=u.spd*.01; if(l.position.y>10) l.position.y=-10; l.rotation.z=Math.sin(t0*1.2+u.ph)*.12*u.sw+mx*.15; l.rotation.x=Math.cos(t0+u.ph)*.08*u.sw+my*.1; l.material.emissiveIntensity=1.3+Math.sin(t0*3+u.ph)*.3; }
    const p=embers.geometry.attributes.position; for(let i=0;i<N;i++){ p.array[i*3+1]+=.012; if(p.array[i*3+1]>10) p.array[i*3+1]=-10; } p.needsUpdate=true;
    camera.position.x+=(mx*2.5-camera.position.x)*.04; camera.position.y+=(my*1.5-camera.position.y)*.04; camera.lookAt(0,0,-8);
    renderer.render(scene,camera); })();
})();

/* ---------------- THREE: lantern hall (ring gallery) ---------------- */
function makeHall(cv, tip, books){
  const renderer=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true}); renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  const scene=new THREE.Scene(); const camera=new THREE.PerspectiveCamera(55,1,.1,100); camera.position.set(0,.6,0.01);
  scene.add(new THREE.AmbientLight(0xffb35c,.35)); const pl=new THREE.PointLight(0xffb35c,1.2,30); pl.position.set(0,3,0); scene.add(pl);
  const floor=new THREE.Mesh(new THREE.CircleGeometry(12,48),new THREE.MeshStandardMaterial({color:0x2a1410,roughness:.9})); floor.rotation.x=-Math.PI/2; floor.position.y=-2.2; scene.add(floor);
  const ring=new THREE.Group(); scene.add(ring); const meshes=[];
  const R=7.5, n=books.length;
  books.forEach((b,i)=>{ const a=i/n*Math.PI*2; const m=new THREE.Mesh(new THREE.BoxGeometry(1.6,2.25,.15),[ new THREE.MeshStandardMaterial({color:0x2a1a14}),new THREE.MeshStandardMaterial({color:0x2a1a14}),new THREE.MeshStandardMaterial({color:0x2a1a14}),new THREE.MeshStandardMaterial({color:0x2a1a14}),new THREE.MeshStandardMaterial({map:coverTexture(b),emissive:0xffffff,emissiveMap:coverTexture(b),emissiveIntensity:.35}),new THREE.MeshStandardMaterial({color:0xf6e7c8}) ]);
    m.position.set(Math.sin(a)*R,0,Math.cos(a)*R); m.lookAt(0,0,0); m.userData={book:b,ph:Math.random()*6}; ring.add(m); meshes.push(m);
    const lan=new THREE.Mesh(new THREE.SphereGeometry(.22,16,12),new THREE.MeshBasicMaterial({color:0xffb35c})); lan.position.set(Math.sin(a)*R,1.7,Math.cos(a)*R); ring.add(lan);
    const ll=new THREE.PointLight(0xff9c4a,.5,5); ll.position.copy(lan.position); ring.add(ll);
    const str=new THREE.Mesh(new THREE.CylinderGeometry(.01,.01,1.5),new THREE.MeshBasicMaterial({color:0x8f7a66})); str.position.set(Math.sin(a)*R,2.6,Math.cos(a)*R); ring.add(str);
  });
  let rotY=0,vel=0,drag=false,lx=0,moved=0; const ray=new THREE.Raycaster(),mouse=new THREE.Vector2(); let hover=null;
  cv.addEventListener('mousedown',e=>{drag=true;lx=e.clientX;moved=0;cv.style.cursor='grabbing';});
  addEventListener('mouseup',()=>{drag=false;cv.style.cursor='grab';});
  cv.addEventListener('mousemove',e=>{ if(drag){ const dx=e.clientX-lx; vel=dx*.004; rotY+=vel; lx=e.clientX; moved+=Math.abs(dx);} const r=cv.getBoundingClientRect(); mouse.x=(e.clientX-r.left)/r.width*2-1; mouse.y=-((e.clientY-r.top)/r.height*2-1); ray.setFromCamera(mouse,camera); const hit=ray.intersectObjects(meshes)[0]; hover=hit?hit.object:null; if(hover){ tip.style.opacity=1; tip.style.left=(e.clientX-r.left+14)+'px'; tip.style.top=(e.clientY-r.top+14)+'px'; tip.innerHTML=`<b>${hover.userData.book.title}</b>${hover.userData.book.orig} · ${fmt(hover.userData.book.price)}`; cv.style.cursor='pointer'; } else { tip.style.opacity=0; if(!drag) cv.style.cursor='grab'; } });
  cv.addEventListener('click',()=>{ if(hover && moved<6){ location.hash='#detail/'+hover.userData.book.id; } });
  cv.addEventListener('touchstart',e=>{drag=true;lx=e.touches[0].clientX;},{passive:true}); cv.addEventListener('touchmove',e=>{if(drag){const dx=e.touches[0].clientX-lx;rotY+=dx*.004;lx=e.touches[0].clientX;}},{passive:true}); cv.addEventListener('touchend',()=>drag=false);
  let alive=true; const clock=new THREE.Clock();
  (function anim(){ if(!alive) return; requestAnimationFrame(anim); const t0=clock.getElapsedTime(); camera.aspect=fitRenderer(renderer,cv); camera.updateProjectionMatrix(); if(!drag){ vel*=.95; rotY+=vel+.0015; } ring.rotation.y=rotY; meshes.forEach(m=>{ m.position.y=Math.sin(t0*1.5+m.userData.ph)*.08; const s=m===hover?1.12:1; m.scale.lerp(new THREE.Vector3(s,s,s),.15); }); renderer.render(scene,camera); })();
  return {dispose(){ alive=false; renderer.dispose(); }};
}
// home hall with tabs
let homeHall=null;
function initHomeHall(id){
  if(homeHall) homeHall.dispose();
  const c=CURATIONS.find(x=>x.id===id); $('#hall-title').textContent=t(c.titleKey);
  homeHall=makeHall($('#hall-canvas'),$('#hall-tooltip'),BOOKS.filter(b=>b.cur.includes(id)));
  $('#hall-tabs').innerHTML=CURATIONS.map(x=>`<button class="${x.id===id?'active':''}" data-hall="${x.id}">${t(x.titleKey)}</button>`).join('');
}
$('#hall-tabs').addEventListener('click',e=>{ const b=e.target.closest('[data-hall]'); if(b) initHomeHall(+b.dataset.hall); });

/* ---------------- DETAIL ---------------- */
function renderDetail(id){
  const b=byId(id)||BOOKS[0]; const wrap=$('#detail'); if(detailScene){detailScene.dispose();detailScene=null;}
  wrap.innerHTML=`<div><canvas id="detail-canvas"></canvas><p class="muted" style="text-align:center;margin-top:.6rem">Drag to rotate · 3D preview</p></div>
  <div class="detail-info"><span class="eyebrow">${LANG_NAMES[b.lang]} · ${b.country} · ${t('age_'+b.age)}</span><h2>${b.title}</h2><div class="orig">${b.orig}</div>
  <div class="price">${fmt(b.price)}</div>${stockTag(b)}
  <div class="biblio"><div><span>${t('b_isbn')}</span><b>${b.isbn}</b></div><div><span>${t('b_pub')}</span><b>${b.pub}</b></div><div><span>${t('b_lang')}</span><b>${LANG_NAMES[b.lang]}</b></div><div><span>${t('b_year')}</span><b>${b.year}</b></div><div><span>${t('b_country')}</span><b>${b.country}</b></div><div><span>${t('b_kdc')}</span><b>${b.kdc}</b></div><div><span>${t('b_age')}</span><b>${t('age_'+b.age)}</b></div><div><span>${t('b_pages')}</span><b>${b.pages}p</b></div></div>
  <p class="desc">${b.desc||''}</p>
  <div class="detail-actions"><div class="qty"><button id="dq-m">−</button><input id="dq" value="1"><button id="dq-p">+</button></div><button class="btn btn-primary fx-btn" id="d-add"><span class="material-symbols-outlined">shopping_basket</span>${t('add')}</button></div></div>`;
  $('#dq-m').onclick=()=>$('#dq').value=Math.max(1,+$('#dq').value-1); $('#dq-p').onclick=()=>$('#dq').value=+$('#dq').value+1; $('#d-add').onclick=()=>addToCart(b.id,+$('#dq').value||1);
  // 3D book
  const cv=$('#detail-canvas'); const renderer=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true}); renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  const scene=new THREE.Scene(); const camera=new THREE.PerspectiveCamera(40,1,.1,50); camera.position.set(0,.4,6.5);
  scene.add(new THREE.AmbientLight(0xffffff,.5)); const key=new THREE.PointLight(0xffb35c,1.4,30); key.position.set(3,4,5); scene.add(key); const rim=new THREE.PointLight(0x6b7fc4,.6,30); rim.position.set(-4,-2,-3); scene.add(rim);
  const tx=coverTexture(b); const side=new THREE.MeshStandardMaterial({color:new THREE.Color(b.color[0]).multiplyScalar(.8),roughness:.7});
  const book=new THREE.Mesh(new THREE.BoxGeometry(2.2,3.1,.42),[side,new THREE.MeshStandardMaterial({color:0xf3ead6}),new THREE.MeshStandardMaterial({color:0xf3ead6}),new THREE.MeshStandardMaterial({color:0xf3ead6}),new THREE.MeshStandardMaterial({map:tx,roughness:.5}),new THREE.MeshStandardMaterial({color:new THREE.Color(b.color[1]).multiplyScalar(.7)})]); scene.add(book);
  const glow=new THREE.Mesh(new THREE.SphereGeometry(.15,12,12),new THREE.MeshBasicMaterial({color:0xffb35c})); glow.position.set(0,2.4,0); scene.add(glow);
  let drag=false,lx=0,ly=0,ry=0,rx=0,vy=0; cv.onmousedown=e=>{drag=true;lx=e.clientX;ly=e.clientY;}; addEventListener('mouseup',()=>drag=false); cv.onmousemove=e=>{ if(!drag) return; vy=(e.clientX-lx)*.01; ry+=vy; rx+=(e.clientY-ly)*.006; lx=e.clientX; ly=e.clientY; };
  let alive=true; const clock=new THREE.Clock();
  (function anim(){ if(!alive) return; requestAnimationFrame(anim); const t0=clock.getElapsedTime(); camera.aspect=fitRenderer(renderer,cv); camera.updateProjectionMatrix(); if(!drag){ vy*=.95; ry+=vy+.006; } book.rotation.y=ry; book.rotation.x=rx*.5; book.position.y=Math.sin(t0*1.4)*.1; glow.position.x=Math.sin(t0)*1.8; glow.position.z=Math.cos(t0)*1.8; key.position.copy(glow.position).add(new THREE.Vector3(0,2.4,0)); renderer.render(scene,camera); })();
  detailScene={dispose(){alive=false;renderer.dispose();}};
}

/* ---------------- INIT ---------------- */
function renderAll(){ renderHomeCurations(); renderNew(); renderFilterChips(); renderResults(); renderCart(); initHomeHall(homeHall?+($('#hall-tabs .active')||{dataset:{hall:1}}).dataset.hall:1); const h=(location.hash||'#home').slice(1).split('/'); if(h[0]==='detail') renderDetail(h[1]); if(h[0]==='curation') renderCurationPage(h[1]); }
applyI18n(); saveCart(); route();
})();
