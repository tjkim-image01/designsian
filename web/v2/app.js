/* ==========================================================================
   Aetheria Multicultural Library - Main JavaScript Application
   WebGL GLSL Aurora, Three.js 3D Cloud Islands, i18n, 3D Cards & 1-Click Loan
   ========================================================================== */

(function () {
  'use strict';

  // ==========================================
  // 1. INTERNATIONALIZATION (i18n) DICTIONARY
  // ==========================================
  const i18nData = {
    ko: {
      "nav.home": "홈",
      "nav.shining": "빛나는 동화",
      "nav.folktales": "세계 전래동화",
      "nav.multilingual": "다국어 책",
      "nav.reservations": "내 대출함",
      "header.cart": "예약함",
      "hero.islandHint": "3D 구름 섬을 클릭하면 해당 문화권 책이 탐색됩니다",
      "hero.badge": "Interactive WebGL 3D Aurora Experience",
      "hero.title": "빛과 파티클이 만들어내는 꿈결 같은 다문화 도서관",
      "hero.description": "부유하는 3D 구름 섬과 오로라 빛무리를 거닐며 세계 각국의 동화, 전래동화, 다국어 도서를 탐험하세요.",
      "hero.searchPlaceholder": "책 제목, 국가, 언어(한국어, 베트남어, 영어, 중국어) 검색...",
      "hero.searchBtn": "탐색하기",
      "hero.quickFilter": "인기 문화권:",
      "hero.scroll": "아래로 스크롤하여 서가 둘러보기",
      "filter.all": "전체",
      "filter.asia": "🌏 아시아 (한국/베트남/중국)",
      "filter.europe": "🏰 유럽/노르딕",
      "filter.global": "🌍 글로벌/아프리카",
      "section1.badge": "Curation 01",
      "section1.title": "✨ 빛나는 동화",
      "section1.subtitle": "빛과 꿈, 희망을 품은 따뜻한 이야기로 아이들의 마음에 용기를 북돋아 주는 아름다운 동화 collection.",
      "section2.badge": "Curation 02",
      "section2.title": "🌏 세계의 전래동화",
      "section2.subtitle": "대륙과 국경을 넘어 수백 년간 전해 내려온 각국의 깊고 신비로운 지혜와 문화적 상징들.",
      "section3.badge": "Curation 03",
      "section3.title": "👨‍👩‍👧 부모와 함께 읽는 다국어 책",
      "section3.subtitle": "다문화 가정 부모님과 자녀가 한국어, 베트남어, 영어, 중국어로 함께 소통하며 읽는 나란히 책.",
      "cards.flipHint": "💡 카드를 클릭하면 줄거리와 Audio sample을 확인할 수 있습니다",
      "card.detailBtn": "줄거리 & Audio",
      "card.loanBtn": "1초 대출 신청",
      "card.backTitle": "📖 도서 상세 정보",
      "card.playAudio": "다국어 낭독 듣기",
      "card.stopAudio": "낭독 정지",
      "card.ageLabel": "권장 연령",
      "card.pagesLabel": "페이지 수",
      "card.statusLabel": "대출 상태",
      "card.statusAvailable": "대출 가능 (즉시 수령)",
      "card.backBtn": "뒤로 가기",
      "search.resultSuffix": "검색 결과",
      "search.countSuffix": "권",
      "search.reset": "검색 초기화",
      "cart.badge": "My Sanctuary Bag",
      "cart.title": "나의 대출 및 예약 내역",
      "cart.subtitle": "클릭 한 번으로 간편하게 신청한 1초 대출 도서목록입니다.",
      "cart.clearAll": "전체 내역 삭제",
      "cart.empty": "아직 대출 예약한 도서가 없습니다. 서가에서 '1초 대출 신청'을 눌러보세요!",
      "modal.title": "1초 대출 예약 신청",
      "modal.subtitle": "원클릭으로 즉시 도서 대출이 진행됩니다",
      "modal.pickupLabel": "수령 장소 선택",
      "modal.borrowerLabel": "신청자 정보 (회원 ID)",
      "modal.notifyLabel": "카카오톡 / SMS로 도서 도착 알림 받기",
      "modal.cancelBtn": "취소",
      "modal.confirmBtn": "1초 예약 확정",
      "audio.playing": "multilingual audio guide",
      "toast.reserved": "🎉 1초 대출 예약이 완료되었습니다!",
      "toast.deleted": "예약 내역이 삭제되었습니다.",
      "footer.about": "빛과 디지털 파티클로 구현된 다문화 지혜의 안식처. 세계 각국의 전래동화와 동화를 다국어로 보존합니다.",
      "footer.section1": "Sanctuary Menu",
      "footer.section2": "지원 언어 (Languages)",
      "footer.section3": "Interactive Tech"
    },
    en: {
      "nav.home": "Home",
      "nav.shining": "Shining Tales",
      "nav.folktales": "World Folktales",
      "nav.multilingual": "Multilingual Books",
      "nav.reservations": "My Bag",
      "header.cart": "Bag",
      "hero.islandHint": "Click a 3D Cloud Island to explore books from that culture",
      "hero.badge": "Interactive WebGL 3D Aurora Experience",
      "hero.title": "Aetheria: World's Wisdom Gathered in Digital Aurora",
      "hero.description": "Wander through floating 3D cloud islands and aurora light streams to discover multicultural fables and parallel readers.",
      "hero.searchPlaceholder": "Search titles, countries, languages (Korean, Vietnamese, English, Chinese)...",
      "hero.searchBtn": "Explore",
      "hero.quickFilter": "Popular Cultures:",
      "hero.scroll": "Scroll down to browse archives",
      "filter.all": "All",
      "filter.asia": "🌏 Asian (Korea/Vietnam/China)",
      "filter.europe": "🏰 European/Nordic",
      "filter.global": "🌍 Global/African",
      "section1.badge": "Curation 01",
      "section1.title": "✨ Luminous Fairy Tales",
      "section1.subtitle": "Heartwarming stories filled with starlight and hope to inspire young minds worldwide.",
      "section2.badge": "Curation 02",
      "section2.title": "🌏 World Folk Tales",
      "section2.subtitle": "Timeless myths and ancestral wisdom passed down through centuries across continents.",
      "section3.badge": "Curation 03",
      "section3.title": "👨‍👩‍👧 Multilingual Books for Families",
      "section3.subtitle": "Parallel reading collections designed for multicultural parents and children in 4 languages.",
      "cards.flipHint": "💡 Click cards to view storylines & sample audio guides",
      "card.detailBtn": "Synopsis & Audio",
      "card.loanBtn": "1-Click Loan",
      "card.backTitle": "📖 Book Details",
      "card.playAudio": "Play Audio Guide",
      "card.stopAudio": "Stop Narration",
      "card.ageLabel": "Target Age",
      "card.pagesLabel": "Pages",
      "card.statusLabel": "Status",
      "card.statusAvailable": "Available (Instant Pickup)",
      "card.backBtn": "Flip Back",
      "search.resultSuffix": "Search Results",
      "search.countSuffix": "books",
      "search.reset": "Reset Search",
      "cart.badge": "My Sanctuary Bag",
      "cart.title": "My Reserved Loans",
      "cart.subtitle": "Your active 1-click reservations ready for pickup.",
      "cart.clearAll": "Clear All History",
      "cart.empty": "No reserved books yet. Click '1-Click Loan' on any book card!",
      "modal.title": "1-Second Loan Reservation",
      "modal.subtitle": "Instant reservation ready in less than 1 second",
      "modal.pickupLabel": "Select Pickup Location",
      "modal.borrowerLabel": "Borrower Info (Member ID)",
      "modal.notifyLabel": "Receive Instant Kakao/SMS Arrival Alert",
      "modal.cancelBtn": "Cancel",
      "modal.confirmBtn": "Confirm 1-Sec Loan",
      "audio.playing": "multilingual audio guide",
      "toast.reserved": "🎉 1-Second Reservation Confirmed!",
      "toast.deleted": "Reservation record cleared.",
      "footer.about": "A multicultural sanctuary preserved in light and particles. Celebrating global fables in multiple languages.",
      "footer.section1": "Sanctuary Menu",
      "footer.section2": "Languages Supported",
      "footer.section3": "Interactive Tech"
    },
    vi: {
      "nav.home": "Trang chủ",
      "nav.shining": "Truyện Cổ Tích Rực Rỡ",
      "nav.folktales": "Truyện Dân Gian Thế Giới",
      "nav.multilingual": "Sách Đa Ngôn Ngữ",
      "nav.reservations": "Túi Sách",
      "header.cart": "Đặt Trước",
      "hero.islandHint": "Nhấp vào Đảo Mây 3D để khám phá sách theo văn hóa",
      "hero.badge": "Trải nghiệm Đảo Mây & Cực Quang 3D WebGL",
      "hero.title": "Aetheria: Tri Thức Thế Giới Trong Ánh Cực Quang",
      "hero.description": "Dạo bước qua các đảo mây 3D và dòng cực quang rực rỡ để khám phá kho tàng truyện cổ tích đa ngôn ngữ.",
      "hero.searchPlaceholder": "Tìm kiếm tên sách, quốc gia, ngôn ngữ (Tiếng Hàn, Tiếng Việt, Anh, Trung)...",
      "hero.searchBtn": "Khám Phá",
      "hero.quickFilter": "Văn Hóa Nổi Bật:",
      "hero.scroll": "Cuộn xuống để xem kệ sách",
      "filter.all": "Tất Cả",
      "filter.asia": "🌏 Châu Á (Hàn/Việt/Trung)",
      "filter.europe": "🏰 Châu Âu/Bắc Âu",
      "filter.global": "🌍 Toàn Cầu/Châu Phi",
      "section1.badge": "Tuyển Tập 01",
      "section1.title": "✨ Truyện Cổ Tích Rực Rỡ",
      "section1.subtitle": "Những câu chuyện ấm áp thắp sáng ước mơ và tiếp thêm dũng khí cho trẻ em.",
      "section2.badge": "Tuyển Tập 02",
      "section2.title": "🌏 Truyện Dân Gian Thế Giới",
      "section2.subtitle": "Trí tuệ dân gian ngàn đời truyền qua các thế hệ trên khắp các châu lục.",
      "section3.badge": "Tuyển Tập 03",
      "section3.title": "👨‍👩‍👧 Sách Đa Ngôn Ngữ Đọc Cùng Cha Mẹ",
      "section3.subtitle": "Bộ sách song ngữ giúp cha mẹ và con cái gia đình đa văn hóa cùng kết nối.",
      "cards.flipHint": "💡 Nhấp vào thẻ để xem tóm tắt & nghe thử âm thanh",
      "card.detailBtn": "Tóm Tắt & Audio",
      "card.loanBtn": "Mượn 1 Giây",
      "card.backTitle": "📖 Chi Tiết Sách",
      "card.playAudio": "Nghe Đọc Đa Ngôn Ngữ",
      "card.stopAudio": "Dừng Đọc",
      "card.ageLabel": "Độ Tuổi",
      "card.pagesLabel": "Số Trang",
      "card.statusLabel": "Trạng Thái",
      "card.statusAvailable": "Có Sẵn (Nhận Ngay)",
      "card.backBtn": "Quay Lại",
      "search.resultSuffix": "Kết quả tìm kiếm",
      "search.countSuffix": "cuốn",
      "search.reset": "Đặt lại tìm kiếm",
      "cart.badge": "Túi Sách Của Tôi",
      "cart.title": "Danh Sách Đặt Mượn",
      "cart.subtitle": "Các cuốn sách bạn đã đặt mượn thành công.",
      "cart.clearAll": "Xóa Tất Cả",
      "cart.empty": "Chưa có sách nào được đặt. Hãy nhấn 'Mượn 1 Giây' trên thẻ sách!",
      "modal.title": "Đăng Ký Mượn Sách 1 Giây",
      "modal.subtitle": "Xác nhận mượn sách tức thì trong 1 giây",
      "modal.pickupLabel": "Chọn Địa Điểm Nhận Sách",
      "modal.borrowerLabel": "Thông Tin Người Mượn (Mã Thành Viên)",
      "modal.notifyLabel": "Nhận thông báo qua KakaoTalk / SMS",
      "modal.cancelBtn": "Hủy",
      "modal.confirmBtn": "Xác Nhận 1 Giây",
      "audio.playing": "hướng dẫn âm thanh đa ngôn ngữ",
      "toast.reserved": "🎉 Đặt mượn sách 1 giây thành công!",
      "toast.deleted": "Đã xóa lịch sử đặt mượn.",
      "footer.about": "Thư viện đa văn hóa lung linh ánh cực quang. Bảo tồn truyền thuyết thế giới bằng nhiều ngôn ngữ.",
      "footer.section1": "Danh Mục",
      "footer.section2": "Ngôn Ngữ Hỗ Trợ",
      "footer.section3": "Công Nghệ Đồ Họa"
    },
    zh: {
      "nav.home": "首页",
      "nav.shining": "闪耀童话",
      "nav.folktales": "世界民间故事",
      "nav.multilingual": "多语言亲子书",
      "nav.reservations": "借阅袋",
      "header.cart": "预订袋",
      "hero.islandHint": "点击3D云岛可按文化圈探索图书",
      "hero.badge": "Interactive WebGL 3D Aurora Experience",
      "hero.title": "Aetheria: 汇聚在极光与云岛上的世界智慧",
      "hero.description": "漫步于漂浮的3D云岛与极光微粒之间，探索各国童话与多语言双语绘本。",
      "hero.searchPlaceholder": "搜索书名、国家、语言（韩语、越南语、英语、中文）...",
      "hero.searchBtn": "探索",
      "hero.quickFilter": "热门文化圈:",
      "hero.scroll": "向下滚动浏览书架",
      "filter.all": "全部",
      "filter.asia": "🌏 亚洲 (韩国/越南/中国)",
      "filter.europe": "🏰 欧洲/北欧",
      "filter.global": "🌍 全球/非洲",
      "section1.badge": "精选 01",
      "section1.title": "✨ 闪耀童话",
      "section1.subtitle": "充满光芒与希望的温暖故事，为世界各地的孩子赋予勇气。",
      "section2.badge": "精选 02",
      "section2.title": "🌏 世界民间故事",
      "section2.subtitle": "跨越数百年的古老传说与深邃的世界文化智慧。",
      "section3.badge": "精选 03",
      "section3.title": "👨‍👩‍👧 亲子共读多语言绘本",
      "section3.subtitle": "专为多文化家庭设计的韩/越/英/中四语对照阅读系列。",
      "cards.flipHint": "💡 点击卡片可翻转查看故事梗概与音频朗读",
      "card.detailBtn": "梗概 & 试听",
      "card.loanBtn": "1秒极速借阅",
      "card.backTitle": "📖 图书详细信息",
      "card.playAudio": "播放多语言朗读",
      "card.stopAudio": "停止朗读",
      "card.ageLabel": "适合年龄",
      "card.pagesLabel": "页数",
      "card.statusLabel": "状态",
      "card.statusAvailable": "可借阅 (即时领取)",
      "card.backBtn": "返回正面",
      "search.resultSuffix": "搜索结果",
      "search.countSuffix": "本",
      "search.reset": "重置搜索",
      "cart.badge": "My Sanctuary Bag",
      "cart.title": "我的借阅与预订记录",
      "cart.subtitle": "一键完成的1秒极速借阅清单。",
      "cart.clearAll": "清空记录",
      "cart.empty": "暂无预订图书。点击图书卡片上的'1秒极速借阅'吧！",
      "modal.title": "1秒极速借阅申请",
      "modal.subtitle": "一键操作，即刻完成图书预订",
      "modal.pickupLabel": "选择取书地点",
      "modal.borrowerLabel": "借阅人信息 (会员ID)",
      "modal.notifyLabel": "接收 KakaoTalk / SMS 到书通知",
      "modal.cancelBtn": "取消",
      "modal.confirmBtn": "确认1秒预订",
      "audio.playing": "多语言音频朗读",
      "toast.reserved": "🎉 1秒极速借阅预订成功！",
      "toast.deleted": "预订记录已清除。",
      "footer.about": "数字极光与微粒交織的多文化智慧圣所。用多国语言珍藏世界传説。",
      "footer.section1": "圣所菜单",
      "footer.section2": "支持语言",
      "footer.section3": "交互技术"
    }
  };

  let currentLang = 'ko';

  function updatePageLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const dict = i18nData[lang] || i18nData.ko;

    // Translate all text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Update active check icon in dropdown
    document.querySelectorAll('.lang-option').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      const check = btn.querySelector('.check-icon');
      if (check) {
        if (btnLang === lang) {
          check.classList.remove('hidden');
        } else {
          check.classList.add('hidden');
        }
      }
    });

    // Update current lang text button
    const langNames = {
      ko: '한국어 (KO)',
      en: 'English (EN)',
      vi: 'Tiếng Việt (VI)',
      zh: '中文 (ZH)'
    };
    const currentLangEl = document.getElementById('current-lang-text');
    if (currentLangEl) {
      currentLangEl.textContent = langNames[lang] || '한국어 (KO)';
    }

    // Re-render book cards with updated language
    renderAllBookGrids();
    renderReservations();
  }

  // ==========================================
  // 2. CURATED BOOKS DATABASE
  // ==========================================
  const booksData = [
    // Section 1: 빛나는 동화
    {
      id: "book-1",
      section: "shining",
      culture: "asia",
      title: {
        ko: "달빛 조각과 비밀의 숲",
        en: "Moonlight Shards & The Secret Forest",
        vi: "Mảnh Trăng & Khu Rừng Bí Mật",
        zh: "月光碎片与秘密森林"
      },
      author: {
        ko: "한소율 작가 / 그림 김은별",
        en: "Soyul Han / Illus. Eunbyul Kim",
        vi: "Tác giả Han So-yul",
        zh: "韩素律 著"
      },
      langBadge: "🇰🇷 KO | 🇻🇳 VI | 🇺🇸 EN",
      languages: ["ko", "vi", "en"],
      description: {
        ko: "숲속 동물들이 잃어버린 달빛 조각을 찾아 떠나는 환상적인 밤 하늘의 모험 이야기.",
        en: "A magical nighttime adventure of woodland creatures searching for lost moonlight shards.",
        vi: "Hành trình đêm kỳ diệu của các loài vật đi tìm mảnh trăng thất lạc trong rừng.",
        zh: "森林里的动物们寻找遗失的月光碎片，展开一场奇幻的夜空大冒险。"
      },
      synopsis: {
        ko: "어두운 밤, 은빛 숲에 달빛 조각이 떨어집니다. 작은 아기 여우와 베트남에서 온 이주민 아동 호앙은 힘을 합쳐 달빛을 모으고, 서 서로의 언어를 배우며 깊은 우정을 쌓아갑니다.",
        en: "On a dark night, moonlight shards drop into the silver forest. A little fox and Hoang, an immigrant child from Vietnam, join forces to restore the moon while building cross-cultural friendship.",
        vi: "Vào một đêm tối, mảnh trăng rơi xuống khu rừng bạc. Cáo nhỏ và bé Hoàng cùng hợp sức nhặt lại ánh trăng, học ngôn ngữ của nhau và trao nhau tình bạn sâu sắc.",
        zh: "在漆黑的夜晚，月光碎片掉落银色森林。小狐狸和来自越南的小朋友黄将力量合在一切，一边聚拢月光一边学习彼此的语言。"
      },
      gradient: "from-purple-600/40 via-indigo-600/30 to-slate-900/80",
      accentColor: "#d4bbff",
      icon: "nights_stay",
      age: "5 ~ 9세",
      pages: "36 pages",
      status: "Available"
    },
    {
      id: "book-2",
      section: "shining",
      culture: "asia",
      title: {
        ko: "별빛 하늘의 종이배",
        en: "Paper Boat in the Starlight Sky",
        vi: "Thuyền Giấy Trên Bầu Trời Sao",
        zh: "星空下的纸船"
      },
      author: {
        ko: "리웨이(李伟) 작가",
        en: "Li Wei",
        vi: "Li Wei",
        zh: "李伟 著"
      },
      langBadge: "🇨🇳 ZH | 🇰🇷 KO | 🇺🇸 EN",
      languages: ["zh", "ko", "en"],
      description: {
        ko: "소원을 적은 종이배가 은하수 바다를 항해하며 온 세상 아이들의 미소를 지켜주는 이야기.",
        en: "A paper boat with written wishes sails through the Milky Way ocean to protect children's smiles.",
        vi: "Chiếc thuyền giấy mang theo ước mơ giăng buồm trên dải Ngân Hà mang lại nụ cười cho trẻ em.",
        zh: "写满愿望的纸船在银河天海中航行，守护着全天下孩子的微笑。"
      },
      synopsis: {
        ko: "중국 전통 종이접기로 만든 빛나는 종이배가 하늘로 떠오릅니다. 한국어와 중국어 이중언어로 기록된 시적인 문체와 아크릴 화풍이 눈부신 감동을 안겨줍니다.",
        en: "A glowing paper boat folded with traditional Chinese origami floats into the night sky. Parallel texts in Chinese and Korean deliver poetic inspiration.",
        vi: "Chiếc thuyền giấy lung linh gấp theo phong cách Origami truyền thống cất cánh lên không trung. Lời văn thơ mộng song ngữ Hàn-Trung chạm đến trái tim.",
        zh: "用中国传统折纸打造的发光纸船飞向夜空。韩中双语记录的诗意文字与亮丽丙烯画风，带来深深的感动。"
      },
      gradient: "from-blue-600/40 via-cyan-600/30 to-slate-900/80",
      accentColor: "#85d3d8",
      icon: "sailing",
      age: "6 ~ 10세",
      pages: "42 pages",
      status: "Available"
    },
    {
      id: "book-3",
      section: "shining",
      culture: "global",
      title: {
        ko: "무지개 물고기의 빛나는 꿈",
        en: "The Rainbow Fish's Glowing Dream",
        vi: "Giấc Mơ Lấp Lánh Của Cánh Cá Cầu Vồng",
        zh: "彩虹鱼的璀璨之梦"
      },
      author: {
        ko: "엘레나 고메즈 (Elena Gomez)",
        en: "Elena Gomez",
        vi: "Elena Gomez",
        zh: "埃莱娜·戈梅斯"
      },
      langBadge: "🌐 4-Lang Global Edition",
      languages: ["ko", "en", "vi", "zh"],
      description: {
        ko: "깊은 심해 속에서 다채로운 비늘을 나누며 세상 모두와 친구가 되는 어울림의 동화.",
        en: "A deep-sea tale of sharing vibrant scales and making friends with sea creatures from all oceans.",
        vi: "Câu chuyện đại dương sâu thẳm về việc chia sẻ vây cá sắc màu và kết bạn khắp muôn nơi.",
        zh: "在深海中分享绚丽鳞片，与全世界海洋生物成为朋友的融合童话。"
      },
      synopsis: {
        ko: "남미와 아프리카 바다를 누비는 무지개 물고기는 빛을 잃어가는 바다 친구들에게 하나씩 빛나는 비늘을 선물합니다. 4개국 언어가 한 권에 담겨 온 가족이 함께 읽기에 완벽합니다.",
        en: "Swimming through Atlantic and Pacific waters, the Rainbow Fish shares luminous scales with friends. Contains 4 parallel translations in Korean, English, Vietnamese, and Chinese.",
        vi: "Bơi qua các đại dương thế giới, chú cá cầu vồng chia sẻ những chiếc vây phát sáng cho bạn bè. Cuốn sách bao gồm 4 ngôn ngữ Hàn - Anh - Việt - Trung.",
        zh: "游弋在各大洋的彩虹鱼将发光的鳞片赠予失去光彩的海底朋友。本书一册涵括韩、英、越、中四语。"
      },
      gradient: "from-amber-600/40 via-orange-600/30 to-slate-900/80",
      accentColor: "#e8c17d",
      icon: "water_drop",
      age: "4 ~ 8세",
      pages: "32 pages",
      status: "Available"
    },

    // Section 2: 세계의 전래동화
    {
      id: "book-4",
      section: "folktales",
      culture: "asia",
      title: {
        ko: "선녀와 나무꾼 & 티엔누(Thiên Nữ)",
        en: "The Fairy & Woodcutter & Thiên Nữ Legend",
        vi: "Sự Tích Thiên Nữ Và Người Đốn Củi",
        zh: "仙女与木夫 & 越南仙女传说"
      },
      author: {
        ko: "한국-베트남 다문화 교류 위원회",
        en: "Korea-Vietnam Cultural Exchange",
        vi: "Ủy Ban Giao Lưu Văn Hóa Hàn-Việt",
        zh: "韩越文化交流委员会"
      },
      langBadge: "🇰🇷 KO | 🇻🇳 VI Pair",
      languages: ["ko", "vi"],
      description: {
        ko: "한국의 선녀와 나무꾼, 베트남의 티엔누 전설을 비교하며 읽는 흥미진진한 자매 동화.",
        en: "A side-by-side comparison of Korea's Fairy & Woodcutter and Vietnam's Thiên Nữ folklore.",
        vi: "So sánh hai câu chuyện dân gian tương đồng kì thú giữa Hàn Quốc và Việt Nam.",
        zh: "对比阅读韩国仙女与樵夫以及越南天女传说的趣味民间故事绘本。"
      },
      synopsis: {
        ko: "구름 위 하늘나라에서 내려온 선녀 이야기! 한국과 베트남 전래동화에 담긴 자연 친화적 세계관과 효심, 가족의 사랑을 곱고 따스한 전통 민화 컷으로 감상할 수 있습니다.",
        en: "Tales of celestial maidens descending from clouds! Explore nature-loving worldviews, filial piety, and familial bonds enriched with traditional folk art illustrations.",
        vi: "Câu chuyện về tiên nữ từ tầng mây hạ giới! Khám phá nét tương đồng văn hóa giữa hai quốc gia qua những bức tranh minh họa dân gian ấm áp.",
        zh: "从云端天界降临的仙女故事！通过精美的传统民俗画开阔自然与亲情视野。"
      },
      gradient: "from-emerald-600/40 via-teal-600/30 to-slate-900/80",
      accentColor: "#85d3d8",
      icon: "auto_stories",
      age: "7 ~ 12세",
      pages: "48 pages",
      status: "Available"
    },
    {
      id: "book-5",
      section: "folktales",
      culture: "asia",
      title: {
        ko: "손오공과 하얀 구름 성",
        en: "Sun Wukong & The White Cloud Castle",
        vi: "Tôn Ngộ Không Và Lâu Đài Mây Trắng",
        zh: "孙悟空与白云城"
      },
      author: {
        ko: "오승은 원작 / 편저 장용",
        en: "Adapt. Zhang Yong",
        vi: "Biên soạn Zhang Yong",
        zh: "吴承恩 原著 / 张勇 编绘"
      },
      langBadge: "🇨🇳 ZH | 🇰🇷 KO Dual",
      languages: ["zh", "ko"],
      description: {
        ko: "서유기의 손오공이 구름을 타고 펼치는 도술과 정의로운 모험의 고전 명작.",
        en: "The classic tale of the Monkey King flying on clouds with magical arts and heroic deeds.",
        vi: "Hành trình cưỡi mây ngàn dặm và phép thuật kì biến của Tôn Ngộ Không.",
        zh: "齐天大圣孙悟空驾驭金斗云、展示神奇法术与正义冒险的经典名著。"
      },
      synopsis: {
        ko: "근두운을 타고 하늘을 가르는 손오공! 여의봉을 휘두르며 어려움에 처한 이웃들을 돕는 호쾌한 삼국권 동양 판타지 전래동화입니다.",
        en: "Riding the Somersault Cloud across the sky! Sun Wukong uses his magical staff to protect the weak. A thrilling Eastern fantasy classic.",
        vi: "Cưỡi Cân Đẩu Vân xé gió không trung! Tôn Ngộ Không dùng gậy Như Ý trừ hại cho dân. Phong cách thần thoại Đông Phương quyến rũ.",
        zh: "脚踏筋斗云破空飞翔！孙悟空挥舞如意金箍棒帮助陷于困境的百姓。极具动感与正义感的大洋东方奇幻名著。"
      },
      gradient: "from-red-600/40 via-rose-600/30 to-slate-900/80",
      accentColor: "#e8c17d",
      icon: "cloud",
      age: "8 ~ 13세",
      pages: "56 pages",
      status: "Available"
    },
    {
      id: "book-6",
      section: "folktales",
      culture: "europe",
      title: {
        ko: "오로라 호수의 아기 곰",
        en: "Little Bear of Aurora Lake",
        vi: "Chú Gấu Nhỏ Ở Hồ Cực Quang",
        zh: "极光湖的小熊"
      },
      author: {
        ko: "아스트리드 린드그렌 헌정 작가진",
        en: "Nordic Heritage Tale Team",
        vi: "Nhóm Tác Giả Bắc Âu",
        zh: "北欧传说故事组"
      },
      langBadge: "🏰 Nordic Lore | 🇺🇸 EN | 🇰🇷 KO",
      languages: ["en", "ko"],
      description: {
        ko: "핀란드와 노르웨이 북극광 아래에서 펼쳐지는 아기 곰과 밤하늘 별자리의 신비로운 민화.",
        en: "A mystical Nordic tale of a little bear gazing at northern lights and celestial constellations.",
        vi: "Câu chuyện Bắc Âu huyền bí về chú gấu nhỏ dưới bầu trời cực quang Phần Lan.",
        zh: "在芬兰与挪威北极光下展开的小熊与夜空星座的神秘民间故事。"
      },
      synopsis: {
        ko: "북극의 추운 겨울밤, 오로라 호수 위에 초록빛 파도 형태의 빛무리가 넘실거립니다. 아기 곰이 얼음 호수를 지나며 별님들에게 따뜻한 봄을 청하는 북유럽 감성 동화입니다.",
        en: "Under northern winter skies, emerald aurora waves ripple over ice lakes. The little bear embarks on a journey to ask constellations for spring.",
        vi: "Dưới bầu trời đêm mùa đông Bắc Cực, những dải cực quang xanh ngọc nhảy múa trên mặt hồ băng. Chú gấu nhỏ đi tìm chòm sao để gọi mùa xuân về.",
        zh: "在北极寒冷的冬夜，极光湖面上泛起绿宝石般波浪状的光芒。小熊穿过冰湖向星星祈求温暖春天的北欧抒情绘本。"
      },
      gradient: "from-indigo-600/40 via-purple-600/30 to-slate-900/80",
      accentColor: "#d4bbff",
      icon: "ac_unit",
      age: "5 ~ 9세",
      pages: "38 pages",
      status: "Available"
    },

    // Section 3: 부모와 함께 읽는 다국어 책
    {
      id: "book-7",
      section: "multilingual",
      culture: "asia",
      title: {
        ko: "엄마의 고향 베트남 이야기",
        en: "Mom's Hometown: Vietnam Stories",
        vi: "Chuyện Quê Hương Của Mẹ",
        zh: "妈妈的故乡：越南故事"
      },
      author: {
        ko: "응우옌 티 마이 & 김지민",
        en: "Nguyen Thi Mai & Jimin Kim",
        vi: "Nguyễn Thị Mai & Kim Ji-min",
        zh: "阮氏梅 & 金智敏"
      },
      langBadge: "🇰🇷 KO ↔ 🇻🇳 VI Side-by-Side",
      languages: ["ko", "vi"],
      description: {
        ko: "하노이의 메콩강 바람과 아오자이 축제, 따스한 쌀국수 향기가 베어나는 정겨운 가족 동화.",
        en: "A touching family story filled with Mekong river breezes, Ao Dai festivals, and warm Pho soup.",
        vi: "Câu chuyện gia đình ấm áp mang hương vị phở nồng nã và làn gió sông Mê Kông.",
        zh: "充满湄公河微风、奥黛节日与温暖河粉香味的情深意浓家庭绘本。"
      },
      synopsis: {
        ko: "베트남 출신 엄마가 자녀 민우에게 들려주는 하롱베이의 구름 섬 이야기. 베트남어 발음 기호(Audio Guide 포함)와 한국어 번역이 성우 목소리로 함께 제공됩니다.",
        en: "A Vietnamese mother tells her son Minwoo stories of Ha Long Bay's cloud islets. Features side-by-side texts and audio guides in both languages.",
        vi: "Người mẹ Việt Nam kể cho con trai Minwoo nghe về những hòn đảo mây ở Vịnh Hạ Long. Bao gồm phiên âm và giọng đọc chuẩn song ngữ.",
        zh: "越南妈妈向儿子民宇讲述下龙湾云岛故事。附带越语发음符号与韩语翻译及专业声优朗读。"
      },
      gradient: "from-teal-600/40 via-cyan-600/30 to-slate-900/80",
      accentColor: "#85d3d8",
      icon: "cottage",
      age: "전연령 (Family)",
      pages: "44 pages",
      status: "Available"
    },
    {
      id: "book-8",
      section: "multilingual",
      culture: "asia",
      title: {
        ko: "다정한 우리 가족의 인사말",
        en: "Warm Greetings of Our Family",
        vi: "Lời Chào Thân Thương Của Gia Đình",
        zh: "我们一家人的温馨问候"
      },
      author: {
        ko: "다문화 언어 교육 연구회",
        en: "Multilingual Language Institute",
        vi: "Viện Nghiên Cứu Ngôn Ngữ Đa Văn Hóa",
        zh: "多文化语言教育研究会"
      },
      langBadge: "🇰🇷 KO | 🇨🇳 ZH | 🇺🇸 EN",
      languages: ["ko", "zh", "en"],
      description: {
        ko: "안녕하세요, 니하오, 헬로우! 매일 아침 사랑을 전하는 다국어 실생활 그림 표현집.",
        en: "'Annyeong', 'Ni Hao', 'Hello'! A practical multilingual greeting book for daily family love.",
        vi: "'Xin chào', 'Ni Hao', 'Hello'! Cuốn sách tranh câu giao tiếp hàng ngày đong đầy yêu thương.",
        zh: "‘안녕하세요’、‘你好’、‘Hello’！传递每日清晨爱意的多语日常用语绘本。"
      },
      synopsis: {
        ko: "아침 식사 자리, 등교길, 잠자리에 들 때 아빠, 엄마, 아이가 나누는 정다운 다국어 인사! 3개국 언어 스피커 아이콘을 누르면 성우의 다정한 어조로 발음을 들을 수 있습니다.",
        en: "Morning breakfasts, school drop-offs, and bedtime kisses in Korean, Chinese, and English! Interactive audio icons play authentic pronunciations.",
        vi: "Bữa sáng, đường đến trường, giờ đi ngủ bằng 3 ngôn ngữ Hàn - Trung - Anh! Có nút nhấn nghe âm thanh sinh động.",
        zh: "早餐桌上、上学路上、入睡时分，爸爸妈妈与孩子分享的深情多语问候！点击语音图标即可聆听标准发音。"
      },
      gradient: "from-pink-600/40 via-purple-600/30 to-slate-900/80",
      accentColor: "#d4bbff",
      icon: "record_voice_over",
      age: "3 ~ 7세",
      pages: "30 pages",
      status: "Available"
    },
    {
      id: "book-9",
      section: "multilingual",
      culture: "global",
      title: {
        ko: "지구촌 소중한 아이들",
        en: "Precious Children of Earth Village",
        vi: "Những Đứa Trẻ Quý Giá Của Làng Trái Đất",
        zh: "地球村珍贵的孩子们"
      },
      author: {
        ko: "유네스코 다문화 그림책 기획단",
        en: "UNESCO Global Picture Book Team",
        vi: "Ban Dự Án Sách Tranh UNESCO",
        zh: "联合国教科文组织绘本策划组"
      },
      langBadge: "🌍 4-Lang Parallel Edition",
      languages: ["ko", "en", "vi", "zh"],
      description: {
        ko: "피부색과 언어는 달라도 모두 함께 빛나는 평화와 존중의 메시지를 담은 다문화 걸작.",
        en: "A masterpiece of peace and mutual respect celebrating children of all colors and backgrounds.",
        vi: "Tác phẩm tuyệt đẹp về hòa bình và sự tôn trọng dành cho tất cả trẻ em trên thế giới.",
        zh: "包含虽肤色与语言不同却同样闪耀的和平与尊重讯息的多文化杰作。"
      },
      synopsis: {
        ko: "손에 손을 잡고 지구를 바퀴 돌며 부르는 평화의 노래. 4개 국어가 한 면에 나란히 배치되어 있어 다문화 학습 및 이중언어 가정 독서에 가장 최적화된 책입니다.",
        en: "Holding hands around the globe, singing songs of unity. 4 languages displayed side-by-side on each page for ultimate bilingual learning.",
        vi: "Nắm tay nhau vòng quanh Trái Đất hát ca bài ca hòa bình. 4 ngôn ngữ sắp xếp song song vô cùng tiện lợi.",
        zh: "手拉手环绕地球唱响和平之歌。4语同排并列，是多文化学习与双语家庭阅读的极佳选择。"
      },
      gradient: "from-amber-600/40 via-yellow-600/30 to-slate-900/80",
      accentColor: "#e8c17d",
      icon: "public",
      age: "전연령 (Family)",
      pages: "50 pages",
      status: "Available"
    }
  ];

  // Store user's reservations in localStorage
  let userReservations = JSON.parse(localStorage.getItem('aetheria_reservations') || '[]');

  // Active filter state
  let currentCultureFilter = 'all';
  let currentSearchQuery = '';

  // ==========================================
  // 3. CARD RENDERING & 3D TILT ENGINE
  // ==========================================
  function createBookCardHTML(book) {
    const titleText = book.title[currentLang] || book.title.ko;
    const authorText = book.author[currentLang] || book.author.ko;
    const descText = book.description[currentLang] || book.description.ko;
    const synopText = book.synopsis[currentLang] || book.synopsis.ko;
    const dict = i18nData[currentLang] || i18nData.ko;

    return `
      <div class="card-3d-wrapper group" data-id="${book.id}">
        <div class="card-3d-inner glass-card glass-card-hover border border-white/15">
          
          <!-- Card Shine Effect Layer -->
          <div class="card-shine"></div>

          <!-- FRONT SIDE -->
          <div class="card-front p-6 flex flex-col justify-between relative bg-gradient-to-b ${book.gradient}">
            
            <!-- Top Badges -->
            <div>
              <div class="flex items-center justify-between gap-2 mb-4">
                <span class="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold text-white tracking-wider border border-white/20">
                  ${book.langBadge}
                </span>
                <span class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/90 shadow-md">
                  <span class="material-symbols-outlined text-base">${book.icon}</span>
                </span>
              </div>

              <!-- Title & Author -->
              <h3 class="font-display text-xl font-semibold text-on-surface mb-2 leading-snug drop-shadow-sm group-hover:text-primary transition-colors">
                ${titleText}
              </h3>
              <p class="text-xs text-on-surface-variant/80 font-medium mb-3">
                ${authorText}
              </p>
              
              <!-- Description -->
              <p class="text-xs text-on-surface-variant/90 font-light line-clamp-3 leading-relaxed mb-4">
                ${descText}
              </p>
            </div>

            <!-- Bottom Actions -->
            <div class="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button class="flip-btn-trigger text-xs font-semibold text-primary hover:text-white flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-primary/20 transition-all">
                <span class="material-symbols-outlined text-base">flip_camera_android</span>
                <span>${dict['card.detailBtn']}</span>
              </button>
              
              <button class="reserve-btn-trigger bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-on-primary font-bold text-xs px-4 py-2.5 rounded-full shadow-lg transition-all active:scale-95 flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">bolt</span>
                <span>${dict['card.loanBtn']}</span>
              </button>
            </div>

          </div>

          <!-- BACK SIDE -->
          <div class="card-back p-6 flex flex-col justify-between">
            <div>
              <!-- Back Header -->
              <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary text-base">auto_awesome</span>
                  <h4 class="font-display text-sm font-semibold text-on-surface">${dict['card.backTitle']}</h4>
                </div>
                <button class="unflip-btn text-on-surface-variant hover:text-white p-1">
                  <span class="material-symbols-outlined text-base">close</span>
                </button>
              </div>

              <!-- Synopsis -->
              <p class="text-xs text-on-surface-variant leading-relaxed font-light mb-4 max-h-36 overflow-y-auto pr-1">
                ${synopText}
              </p>

              <!-- Metadata Grid -->
              <div class="grid grid-cols-3 gap-2 bg-white/5 rounded-xl p-3 border border-white/10 text-[11px] mb-4">
                <div>
                  <span class="block text-on-surface-variant/60 font-medium">${dict['card.ageLabel']}</span>
                  <span class="font-semibold text-primary">${book.age}</span>
                </div>
                <div>
                  <span class="block text-on-surface-variant/60 font-medium">${dict['card.pagesLabel']}</span>
                  <span class="font-semibold text-secondary">${book.pages}</span>
                </div>
                <div>
                  <span class="block text-on-surface-variant/60 font-medium">${dict['card.statusLabel']}</span>
                  <span class="font-semibold text-tertiary">1초 예약</span>
                </div>
              </div>
            </div>

            <!-- Back Footer Actions -->
            <div class="space-y-2 pt-2 border-t border-white/10">
              <!-- Audio Narration Trigger -->
              <button class="audio-btn-trigger w-full py-2.5 rounded-xl bg-primary/15 hover:bg-primary/30 text-primary border border-primary/40 font-semibold text-xs transition-colors flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-base">volume_up</span>
                <span>${dict['card.playAudio']}</span>
              </button>

              <div class="flex gap-2">
                <button class="unflip-btn w-1/3 py-2 rounded-xl text-xs text-on-surface-variant border border-white/15 hover:bg-white/10 transition-colors">
                  ${dict['card.backBtn']}
                </button>
                <button class="reserve-btn-trigger w-2/3 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-bold text-xs shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-1">
                  <span class="material-symbols-outlined text-sm">bolt</span>
                  <span>${dict['card.loanBtn']}</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    `;
  }

  function renderAllBookGrids() {
    const shiningContainer = document.getElementById('grid-shining');
    const folktalesContainer = document.getElementById('grid-folktales');
    const multilingualContainer = document.getElementById('grid-multilingual');

    if (!shiningContainer || !folktalesContainer || !multilingualContainer) return;

    // Filter books based on search query & culture filter
    const filtered = booksData.filter(book => {
      // Culture filter check
      if (currentCultureFilter !== 'all' && book.culture !== currentCultureFilter) {
        return false;
      }

      // Search query check
      if (currentSearchQuery.trim() !== '') {
        const q = currentSearchQuery.toLowerCase().trim();
        const titleMatch = Object.values(book.title).some(v => v.toLowerCase().includes(q));
        const authorMatch = Object.values(book.author).some(v => v.toLowerCase().includes(q));
        const descMatch = Object.values(book.description).some(v => v.toLowerCase().includes(q));
        const langMatch = book.languages.some(l => l.includes(q)) || book.langBadge.toLowerCase().includes(q);
        return titleMatch || authorMatch || descMatch || langMatch;
      }

      return true;
    });

    // Update search bar notification
    const searchBar = document.getElementById('search-results-bar');
    const searchCountEl = document.getElementById('search-count');
    const searchQueryEl = document.getElementById('search-query-text');

    if (currentSearchQuery.trim() !== '' || currentCultureFilter !== 'all') {
      searchBar.classList.remove('hidden');
      searchCountEl.textContent = filtered.length;
      searchQueryEl.textContent = currentSearchQuery.trim() !== '' 
        ? `"${currentSearchQuery}"` 
        : `[${currentCultureFilter.toUpperCase()} Culture]`;
    } else {
      searchBar.classList.add('hidden');
    }

    // Populate Grids
    const shiningList = filtered.filter(b => b.section === 'shining');
    const folktalesList = filtered.filter(b => b.section === 'folktales');
    const multilingualList = filtered.filter(b => b.section === 'multilingual');

    shiningContainer.innerHTML = shiningList.map(createBookCardHTML).join('') || `<p class="col-span-3 text-center py-8 text-on-surface-variant/60 italic text-xs">일치하는 빛나는 동화 도서가 없습니다.</p>`;
    folktalesContainer.innerHTML = folktalesList.map(createBookCardHTML).join('') || `<p class="col-span-3 text-center py-8 text-on-surface-variant/60 italic text-xs">일치하는 세계 전래동화 도서가 없습니다.</p>`;
    multilingualContainer.innerHTML = multilingualList.map(createBookCardHTML).join('') || `<p class="col-span-3 text-center py-8 text-on-surface-variant/60 italic text-xs">일치하는 다국어 도서가 없습니다.</p>`;

    // Rebind Card Listeners (3D Tilt, Flip, Audio, Reserve)
    bindCardEventListeners();
  }

  function bindCardEventListeners() {
    document.querySelectorAll('.card-3d-wrapper').forEach(wrapper => {
      const inner = wrapper.querySelector('.card-3d-inner');
      const shine = wrapper.querySelector('.card-shine');
      const bookId = wrapper.getAttribute('data-id');
      const book = booksData.find(b => b.id === bookId);

      // 3D Tilt on Mouse Move
      wrapper.addEventListener('mousemove', (e) => {
        if (inner.classList.contains('flipped')) return; // Don't tilt if flipped
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 12; // max 12 deg
        const rotateY = ((x - centerX) / centerX) * 12;

        inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        if (shine) {
          shine.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
          shine.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
        }
      });

      wrapper.addEventListener('mouseleave', () => {
        if (!inner.classList.contains('flipped')) {
          inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
      });

      // Flip Triggers
      wrapper.querySelectorAll('.flip-btn-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          inner.classList.add('flipped');
        });
      });

      wrapper.querySelectorAll('.unflip-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          inner.classList.remove('flipped');
          inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
      });

      // 1-Click Loan Reservation Trigger
      wrapper.querySelectorAll('.reserve-btn-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          openReservationModal(book);
        });
      });

      // Audio Narration Trigger
      wrapper.querySelectorAll('.audio-btn-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          playAudioNarration(book);
        });
      });
    });
  }

  // ==========================================
  // 4. AUDIO NARRATION PLAYER ENGINE (Web Speech)
  // ==========================================
  let currentUtterance = null;

  function playAudioNarration(book) {
    const audioBar = document.getElementById('audio-player-bar');
    const audioTitle = document.getElementById('audio-title');
    const title = book.title[currentLang] || book.title.ko;
    const synopsis = book.synopsis[currentLang] || book.synopsis.ko;

    if (!('speechSynthesis' in window)) {
      showToast('⚠️ 현재 브라우저는 음성 낭독 오디오를 지원하지 않습니다.');
      return;
    }

    // Stop previous narration if active
    window.speechSynthesis.cancel();

    // Configure Speech Synthesis
    const utterance = new SpeechSynthesisUtterance(`${title}. ${synopsis}`);
    
    // Set language code for speech voice
    const langCodes = { ko: 'ko-KR', en: 'en-US', vi: 'vi-VN', zh: 'zh-CN' };
    utterance.lang = langCodes[currentLang] || 'ko-KR';
    utterance.rate = 0.95; // Slightly slower soothing tone

    utterance.onstart = () => {
      if (audioBar && audioTitle) {
        audioTitle.textContent = `[${utterance.lang}] ${title}`;
        audioBar.classList.remove('hidden');
      }
    };

    utterance.onend = utterance.onerror = () => {
      if (audioBar) audioBar.classList.add('hidden');
    };

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  document.getElementById('audio-stop-btn')?.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    document.getElementById('audio-player-bar')?.classList.add('hidden');
  });

  // ==========================================
  // 5. 1-CLICK RESERVATION SYSTEM & MODAL
  // ==========================================
  let activeSelectedBook = null;

  function openReservationModal(book) {
    activeSelectedBook = book;
    const modal = document.getElementById('reservation-modal');
    if (!modal) return;

    // Populate modal with book details
    document.getElementById('modal-book-title').textContent = book.title[currentLang] || book.title.ko;
    document.getElementById('modal-book-author').textContent = book.author[currentLang] || book.author.ko;
    document.getElementById('modal-book-lang').textContent = book.langBadge;
    document.getElementById('modal-book-culture').textContent = `Culture: ${book.culture.toUpperCase()}`;
    
    const cover = document.getElementById('modal-book-cover');
    if (cover) {
      cover.className = `w-16 h-22 rounded-lg bg-gradient-to-br ${book.gradient} shrink-0 shadow-md flex items-center justify-center text-white font-bold text-xs border border-white/20`;
      cover.innerHTML = `<span class="material-symbols-outlined text-2xl">${book.icon}</span>`;
    }

    modal.showModal();
  }

  function closeReservationModal() {
    const modal = document.getElementById('reservation-modal');
    if (modal) modal.close();
  }

  document.getElementById('modal-close-btn')?.addEventListener('click', closeReservationModal);
  document.getElementById('modal-cancel-btn')?.addEventListener('click', closeReservationModal);

  // Close modal on backdrop click
  document.getElementById('reservation-modal')?.addEventListener('click', (e) => {
    const dialogBounds = e.target.getBoundingClientRect();
    if (
      e.clientX < dialogBounds.left ||
      e.clientX > dialogBounds.right ||
      e.clientY < dialogBounds.top ||
      e.clientY > dialogBounds.bottom
    ) {
      closeReservationModal();
    }
  });

  // Modal Form Submission
  document.getElementById('reservation-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!activeSelectedBook) return;

    const pickupLocation = document.getElementById('modal-pickup-location').value;
    const borrowerName = document.getElementById('modal-borrower-name').value;
    const notifyCheck = document.getElementById('modal-notify-check').checked;

    const newReservation = {
      id: `res-${Date.now()}`,
      bookId: activeSelectedBook.id,
      bookTitle: activeSelectedBook.title[currentLang] || activeSelectedBook.title.ko,
      pickup: pickupLocation,
      borrower: borrowerName,
      notify: notifyCheck,
      time: new Date().toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    userReservations.unshift(newReservation);
    localStorage.setItem('aetheria_reservations', JSON.stringify(userReservations));

    closeReservationModal();
    renderReservations();

    const dict = i18nData[currentLang] || i18nData.ko;
    showToast(`${dict['toast.reserved']} "${newReservation.bookTitle}"`);
  });

  function renderReservations() {
    const listEl = document.getElementById('reservation-list');
    const badgeEl = document.getElementById('reservation-badge');
    if (!listEl) return;

    if (badgeEl) badgeEl.textContent = userReservations.length;

    if (userReservations.length === 0) {
      const dict = i18nData[currentLang] || i18nData.ko;
      listEl.innerHTML = `<p class="text-xs text-on-surface-variant/60 py-6 text-center italic">${dict['cart.empty']}</p>`;
      return;
    }

    listEl.innerHTML = userReservations.map(res => `
      <div class="py-3 flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold shrink-0">
            ✓
          </div>
          <div>
            <h5 class="text-xs font-semibold text-on-surface">${res.bookTitle}</h5>
            <p class="text-[11px] text-on-surface-variant/70">수령: ${res.pickup} • ${res.time}</p>
          </div>
        </div>
        <button class="delete-res-btn text-xs text-on-surface-variant hover:text-error p-1 transition-colors" data-res-id="${res.id}">
          <span class="material-symbols-outlined text-base">delete</span>
        </button>
      </div>
    `).join('');

    // Bind individual delete buttons
    listEl.querySelectorAll('.delete-res-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-res-id');
        userReservations = userReservations.filter(r => r.id !== id);
        localStorage.setItem('aetheria_reservations', JSON.stringify(userReservations));
        renderReservations();
        const dict = i18nData[currentLang] || i18nData.ko;
        showToast(dict['toast.deleted']);
      });
    });
  }

  document.getElementById('clear-reservations-btn')?.addEventListener('click', () => {
    userReservations = [];
    localStorage.removeItem('aetheria_reservations');
    renderReservations();
    const dict = i18nData[currentLang] || i18nData.ko;
    showToast(dict['toast.deleted']);
  });

  document.getElementById('view-reservations-btn')?.addEventListener('click', () => {
    const section = document.getElementById('reservation-status');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  });

  // ==========================================
  // 6. TOAST NOTIFICATION SYSTEM
  // ==========================================
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'glass-panel px-5 py-3.5 rounded-2xl border-primary/40 shadow-2xl text-xs font-semibold text-on-surface flex items-center gap-3 toast-enter pointer-events-auto backdrop-blur-2xl bg-surface-container/90';
    toast.innerHTML = `
      <span class="material-symbols-outlined text-primary text-lg">auto_awesome</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('toast-enter');
      toast.classList.add('toast-exit');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // ==========================================
  // 7. SEARCH & CULTURE FILTER CONTROLLERS
  // ==========================================
  const searchInput = document.getElementById('hero-search-input');
  const searchBtn = document.getElementById('hero-search-btn');
  const clearBtn = document.getElementById('search-clear-btn');
  const resetBtn = document.getElementById('reset-search-btn');

  function triggerSearch() {
    currentSearchQuery = searchInput.value;
    if (currentSearchQuery.trim() !== '') {
      clearBtn?.classList.remove('hidden');
    } else {
      clearBtn?.classList.add('hidden');
    }
    renderAllBookGrids();
  }

  searchInput?.addEventListener('input', () => {
    if (searchInput.value.trim() !== '') {
      clearBtn?.classList.remove('hidden');
    } else {
      clearBtn?.classList.add('hidden');
    }
    triggerSearch();
  });

  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      triggerSearch();
      document.getElementById('section-shining')?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  searchBtn?.addEventListener('click', () => {
    triggerSearch();
    document.getElementById('section-shining')?.scrollIntoView({ behavior: 'smooth' });
  });

  clearBtn?.addEventListener('click', () => {
    searchInput.value = '';
    currentSearchQuery = '';
    clearBtn.classList.add('hidden');
    renderAllBookGrids();
  });

  resetBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    currentSearchQuery = '';
    currentCultureFilter = 'all';
    document.querySelectorAll('.culture-pill').forEach(p => p.classList.remove('active'));
    document.querySelector('.culture-pill[data-culture="all"]')?.classList.add('active');
    renderAllBookGrids();
  });

  // Culture Filter Pills
  document.querySelectorAll('.culture-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.culture-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCultureFilter = pill.getAttribute('data-culture') || 'all';
      renderAllBookGrids();
      document.getElementById('section-shining')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ==========================================
  // 8. LANGUAGE SELECTOR DROPDOWN
  // ==========================================
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');

  langBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu?.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    langMenu?.classList.add('hidden');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute('data-lang');
      if (lang) {
        updatePageLanguage(lang);
      }
      langMenu?.classList.add('hidden');
    });
  });

  // Mobile Menu Toggle
  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
    document.getElementById('mobile-menu')?.classList.toggle('flex');
  });

  // ==========================================
  // 9. WEBGL GLSL CUSTOM SHADER (Aurora Wave)
  // ==========================================
  function initAuroraShader() {
    const canvas = document.getElementById('aurora-canvas');
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    function resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = canvas.clientWidth || window.innerWidth;
      const displayHeight = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = v_texCoord;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;

        vec2 mouseNorm = u_mouse / u_resolution;
        vec2 mouseP = mouseNorm * 2.0 - 1.0;
        mouseP.x *= u_resolution.x / u_resolution.y;

        float distMouse = length(p - mouseP);
        float mouseGlow = smoothstep(0.8, 0.0, distMouse) * 0.35;

        float t = u_time * 0.25;
        float wave = 0.0;
        for (float i = 1.0; i < 4.0; i++) {
          wave += sin(p.x * i * 1.8 + t + p.y * i * 1.2) * 0.4 / i;
          wave += cos(p.y * i * 2.2 - t * 0.7 + p.x * i * 1.5) * 0.3 / i;
        }

        // Lavender (#d4bbff), Mint (#85d3d8), Warm Gold (#e8c17d)
        vec3 colLavender = vec3(0.83, 0.73, 1.0);
        vec3 colMint     = vec3(0.52, 0.83, 0.85);
        vec3 colGold     = vec3(0.91, 0.76, 0.49);

        vec3 color = mix(colLavender, colMint, wave * 0.5 + 0.5);
        color = mix(color, colGold, sin(t + p.x * 2.0) * 0.4 + 0.4);

        // Add mouse glow overlay
        color += colLavender * mouseGlow;

        float alphaMask = smoothstep(1.4, 0.2, length(p));
        float finalAlpha = alphaMask * (0.35 + 0.25 * wave + mouseGlow);

        gl_FragColor = vec4(color * 0.45, finalAlpha);
      }
    `;

    function compileShader(type, src) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertShader = compileShader(gl.VERTEX_SHADER, vsSource);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const posLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLocation);
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');

    let mouseCoords = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    window.addEventListener('mousemove', (e) => {
      mouseCoords.x = e.clientX;
      mouseCoords.y = window.innerHeight - e.clientY;
    });

    function render(startTime) {
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTimeLoc) gl.uniform1f(uTimeLoc, startTime * 0.001);
      if (uResLoc) gl.uniform2f(uResLoc, canvas.width, canvas.height);
      if (uMouseLoc) gl.uniform2f(uMouseLoc, mouseCoords.x, mouseCoords.y);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }
    render(0);
  }

  // ==========================================
  // 10. THREE.JS 3D FLOATING CLOUD ISLANDS & PARTICLES
  // ==========================================
  function initThreeJSScene() {
    const container = document.getElementById('three-container');
    if (!container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xd4bbff, 1.5, 50);
    pointLight1.position.set(10, 15, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x85d3d8, 1.2, 50);
    pointLight2.position.set(-10, -10, 5);
    scene.add(pointLight2);

    // Group for Cloud Islands
    const islandGroup = new THREE.Group();
    scene.add(islandGroup);

    // Cloud Island Material (Translucent Soft Material)
    const islandMat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.75,
      shininess: 90,
      flatShading: true
    });

    const cultureIslands = [
      { name: 'asia', color: 0xd4bbff, x: -7, y: 2, z: -2, iconColor: 0x9b51e0 },
      { name: 'europe', color: 0x85d3d8, x: 7, y: 3, z: -4, iconColor: 0x00a8b5 },
      { name: 'global', color: 0xe8c17d, x: 0, y: -4, z: -1, iconColor: 0xe67e22 }
    ];

    const islandMeshList = [];

    cultureIslands.forEach(info => {
      const singleIslandGroup = new THREE.Group();

      // Compound spheres for cloud shape
      const sphereCount = 7;
      for (let i = 0; i < sphereCount; i++) {
        const radius = 0.8 + Math.random() * 1.4;
        const geo = new THREE.SphereGeometry(radius, 16, 16);
        const mesh = new THREE.Mesh(geo, islandMat);
        mesh.position.set(
          (Math.random() - 0.5) * 2.5,
          (Math.random() - 0.5) * 1.0,
          (Math.random() - 0.5) * 2.5
        );
        singleIslandGroup.add(mesh);
      }

      // Add Glowing Culture Beacon Peak
      const beaconGeo = new THREE.OctahedronGeometry(0.8, 0);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: info.color,
        wireframe: true
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(0, 1.8, 0);
      singleIslandGroup.add(beacon);

      singleIslandGroup.position.set(info.x, info.y, info.z);
      singleIslandGroup.userData = {
        culture: info.name,
        baseY: info.y,
        speed: 0.0015 + Math.random() * 0.001,
        offset: Math.random() * Math.PI * 2,
        beacon: beacon
      };

      islandGroup.add(singleIslandGroup);
      islandMeshList.push(singleIslandGroup);
    });

    // Particle Swarm
    const particleCount = 150;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i]     = (Math.random() - 0.5) * 35;
      particlePositions[i + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i + 2] = (Math.random() - 0.5) * 20;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xd4bbff,
      size: 0.35,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Raycasting & Hover/Click Interactivity
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    window.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    });

    container.addEventListener('click', () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(islandGroup.children, true);
      if (intersects.length > 0) {
        let parent = intersects[0].object;
        while (parent && !parent.userData.culture) {
          parent = parent.parent;
        }
        if (parent && parent.userData.culture) {
          const culture = parent.userData.culture;
          // Filter by culture
          document.querySelectorAll('.culture-pill').forEach(p => {
            p.classList.remove('active');
            if (p.getAttribute('data-culture') === culture) {
              p.classList.add('active');
            }
          });
          currentCultureFilter = culture;
          renderAllBookGrids();
          const dict = i18nData[currentLang] || i18nData.ko;
          showToast(`☁️ 3D 구름 섬 클릭! [${culture.toUpperCase()}] 문화권 서가가 탐색되었습니다.`);
          document.getElementById('section-shining')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    // Resize Handler
    window.addEventListener('resize', () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });

    // Animation Loop
    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Bobbing islands
      islandMeshList.forEach(island => {
        island.position.y = island.userData.baseY + Math.sin(elapsedTime * 1.2 + island.userData.offset) * 0.4;
        island.rotation.y += 0.003;
        if (island.userData.beacon) {
          island.userData.beacon.rotation.x += 0.01;
          island.userData.beacon.rotation.z += 0.01;
        }
      });

      // Particle movement (Magnet attraction towards search box when active)
      const positions = particleSystem.geometry.attributes.position.array;
      const isSearching = currentSearchQuery.trim() !== '';

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i + 1] += Math.sin(elapsedTime + positions[i]) * 0.01;
        
        if (isSearching) {
          // Attract towards center
          positions[i] += (0 - positions[i]) * 0.02;
          positions[i + 1] += (0 - positions[i + 1]) * 0.02;
        } else {
          // Slow floating drift
          positions[i] += Math.cos(elapsedTime + positions[i + 1]) * 0.005;
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Cursor hover check
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(islandGroup.children, true);
      if (intersects.length > 0) {
        container.style.cursor = 'pointer';
      } else {
        container.style.cursor = 'default';
      }

      renderer.render(scene, camera);
    }

    animate();
  }

  // ==========================================
  // 11. INITIALIZATION
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage('ko');
    initAuroraShader();
    initThreeJSScene();
    renderReservations();
  });

})();

