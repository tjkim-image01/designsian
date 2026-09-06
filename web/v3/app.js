/**
 * Multicultural Library web_v3 Application Logic
 * Interactive 2D/3D WebGL Papercraft Engine, i18n Multi-Language, Search, 3D Pop-Up Modal & 1-Click Reservations
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. i18n Multi-Language Dictionary
  // ==========================================
  const translations = {
    ko: {
      brand_name: "다문화 팝업 도서관",
      brand_tagline: "Paperbound Stories Library",
      nav_collections: "큐레이션 도서",
      nav_fairytales: "동화로 떠나는 여행",
      nav_folktales: "세계의 옛날이야기",
      nav_family: "우리 가족 그림책",
      search_placeholder: "도서 빠른 검색...",
      btn_my_reservations: "예약 현황",
      hero_badge: "🎨 WebGL 2D Interactive Pop-Up Book",
      hero_title: "한 장 한 장 펼쳐지는<br/><span class='text-primary'>따뜻한 아날로그</span> 팝업 동화책",
      hero_desc: "전 세계의 아름다운 다문화 동화와 그림책이 입체 팝업북으로 펴집니다. 시차 패럴랙스 종이 레이어와 함께 새로운 이야기를 만나보세요.",
      btn_explore: "책 펼쳐보기",
      btn_view_curation: "큐레이션 바로가기",
      feature_1: "2D 입체 시차",
      feature_2: "종이 질감 쉐이더",
      feature_3: "1초 대출/예약",
      hero_canvas_hint: "마우스를 움직여 종이 입체감을 느껴보세요!",
      curation_badge: "📚 특별 큐레이션 서가",
      curation_title: "이달의 추천 스토리북",
      cat_journey_title: "동화로 떠나는 여행",
      cat_folktales_title: "세계의 옛날이야기",
      cat_family_title: "우리 가족 그림책",
      my_reservations_title: "나의 도서 예약 현황",
      footer_desc: "다문화 팝업 도서관은 전 세계 아이들과 가족이 함께 읽는 따뜻한 아날로그 종이 공예 동화책 세상을 만듭니다.",
      btn_reserve: "1초 대출/예약",
      btn_reserved: "예약완료",
      btn_modal_reserve_text: "1초 즉시 대출/예약하기",
      status_available: "대출 가능",
      status_reserved: "예약 완료",
      toast_reserved: "도서 대출/예약이 완료되었습니다!",
      toast_canceled: "예약이 취소되었습니다."
    },
    en: {
      brand_name: "Multicultural Pop-Up Library",
      brand_tagline: "Paperbound Stories Library",
      nav_collections: "Collections",
      nav_fairytales: "Tales & Journeys",
      nav_folktales: "Global Folktales",
      nav_family: "Family Picture Books",
      search_placeholder: "Instant book search...",
      btn_my_reservations: "My Reservations",
      hero_badge: "🎨 WebGL 2D Interactive Pop-Up Book",
      hero_title: "Unfold Warm <br/><span class='text-primary'>Analog Pop-Up</span> Stories",
      hero_desc: "Discover beautiful multicultural fairy tales and picture books from around the globe unfolding in tactile 2D/3D papercraft layers.",
      btn_explore: "Unfold Book",
      btn_view_curation: "Explore Collections",
      feature_1: "2D Parallax Depth",
      feature_2: "Paper Shader Texture",
      feature_3: "1-Click Reservation",
      hero_canvas_hint: "Move mouse to experience paper depth parallax!",
      curation_badge: "📚 Curated Bookshelves",
      curation_title: "Featured Storybooks of the Month",
      cat_journey_title: "Tales & Journeys Around the World",
      cat_folktales_title: "Global Folktales & Myths",
      cat_family_title: "Multicultural Family Books",
      my_reservations_title: "My Book Reservations",
      footer_desc: "Multicultural Pop-Up Library creates a warm papercraft storytelling space for families and children across all cultures.",
      btn_reserve: "1-Click Reserve",
      btn_reserved: "Reserved",
      btn_modal_reserve_text: "Instant 1-Click Reservation",
      status_available: "Available",
      status_reserved: "Reserved",
      toast_reserved: "Book successfully reserved!",
      toast_canceled: "Reservation canceled."
    },
    vi: {
      brand_name: "Thư Viện Sách Nổi Đa Văn Hóa",
      brand_tagline: "Paperbound Stories Library",
      nav_collections: "Bộ Sưu Tập",
      nav_fairytales: "Hành Trình Cổ Tích",
      nav_folktales: "Truyện Cổ Thế Giới",
      nav_family: "Tranh Truyện Gia Đình",
      search_placeholder: "Tìm kiếm sách nhanh...",
      btn_my_reservations: "Sách Đã Đặt",
      hero_badge: "🎨 Sách Nổi Giấy 2D WebGL Tương Tác",
      hero_title: "Mở Ra Những <br/><span class='text-primary'>Trang Sách Nổi</span> Ấm Áp",
      hero_desc: "Khám phá các cuốn sách tranh và truyện cổ tích đa văn hóa trên khắp thế giới với hiệu ứng giấy nổi 2D/3D sống động.",
      btn_explore: "Mở Sách Ra",
      btn_view_curation: "Xem Bộ Sưu Tập",
      feature_1: "Độ Sâu Giấy 2D",
      feature_2: "Kết Cấu Shader Giấy",
      feature_3: "Đặt Sách 1 Giây",
      hero_canvas_hint: "Di chuyển chuột để cảm nhận độ sâu của giấy!",
      curation_badge: "📚 Tủ Sách Chọn Lọc",
      curation_title: "Sách Truyện Nổi Bật Trong Tháng",
      cat_journey_title: "Hành Trình Du Ngoạn Cổ Tích",
      cat_folktales_title: "Truyện Cổ Dân Gian Thế Giới",
      cat_family_title: "Truyện Tranh Gia Đình Đa Văn Hóa",
      my_reservations_title: "Danh Sách Đã Đặt Trước",
      footer_desc: "Thư viện mang đến không gian đọc sách ấm áp và kết nối các gia đình đa văn hóa qua những câu chuyện nổi sinh động.",
      btn_reserve: "Đặt Sách 1s",
      btn_reserved: "Đã Đặt",
      btn_modal_reserve_text: "Xác Nhận Đặt Sách Ngay (1s)",
      status_available: "Có Sẵn",
      status_reserved: "Đã Đặt",
      toast_reserved: "Đặt sách thành công!",
      toast_canceled: "Đã hủy đặt sách."
    },
    zh: {
      brand_name: "多元文化立体绘本馆",
      brand_tagline: "Paperbound Stories Library",
      nav_collections: "精选馆藏",
      nav_fairytales: "童话之旅",
      nav_folktales: "世界民间故事",
      nav_family: "多元家庭绘本",
      search_placeholder: "快速搜索图书...",
      btn_my_reservations: "我的预约",
      hero_badge: "🎨 WebGL 2D 互动纸雕立体书",
      hero_title: "逐页展开的 <br/><span class='text-primary'>温暖纸雕</span> 立体童话",
      hero_desc: "带您领略世界各地的多元文化绘本与民间传说，体验纸质视差与剪纸艺术带来的独特阅读魅力。",
      btn_explore: "翻开书本",
      btn_view_curation: "浏览推荐",
      feature_1: "2D 视差立体感",
      feature_2: "纸张材质着色器",
      feature_3: "1秒快速预约",
      hero_canvas_hint: "移动鼠标体验纸雕层叠视差！",
      curation_badge: "📚 特别推荐书架",
      curation_title: "本月精选故事绘本",
      cat_journey_title: "环球童话之旅",
      cat_folktales_title: "世界古老民间传说",
      cat_family_title: "温暖多元家庭绘本",
      my_reservations_title: "我的图书预约状态",
      footer_desc: "多元文化立体绘本馆致力于为世界各地的儿童与家庭打造温暖的手工纸雕阅读体验。",
      btn_reserve: "1秒预约",
      btn_reserved: "已预约",
      btn_modal_reserve_text: "1秒立即完成预约",
      status_available: "可借阅",
      status_reserved: "已预约",
      toast_reserved: "图书预约成功！",
      toast_canceled: "已取消预约。"
    }
  };

  let currentLang = localStorage.getItem('v3_lang') || 'ko';

  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('v3_lang', lang);
    const dict = translations[lang] || translations.ko;

    // Update active lang tab
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.dataset.i18nPh;
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Re-render book cards with localized titles
    renderBooks();
    updateReservationCount();
  }

  // ==========================================
  // 2. Multicultural Books Dataset
  // ==========================================
  const booksDatabase = [
    {
      id: 'b1',
      group: 'journey',
      country: '🇫🇷 프랑스',
      title: {
        ko: '에펠탑 아래의 작은 하마',
        en: 'The Little Hippo Under Eiffel Tower',
        vi: 'Hà Mã Nhỏ Dưới Tháp Eiffel',
        zh: '埃菲尔铁塔下的小河马'
      },
      author: '클로드 뒤퐁 (Claude Dupont)',
      age: '4~7세',
      languages: '한국어, 프랑스어, 영어',
      spineColor: 'bg-tertiary-container',
      summary: {
        ko: '파리 에펠탑 아래 작은 정원에서 살고 있는 아기 하마가 세계 여행자를 만나며 나누는 우정과 파리의 가을 풍경 이야기입니다.',
        en: 'A heartwarming story of a baby hippo living under the Eiffel Tower meeting travelers from all around the world.',
        vi: 'Câu chuyện ấm áp về chú hà mã con sống dưới chân tháp Eiffel gặp gỡ những người bạn du khách từ khắp nơi.',
        zh: '讲述一只住在巴黎埃菲尔铁塔下的小河马与来自世界各地的旅行者结下深厚友谊的温馨故事。'
      },
      iconSvg: `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10L60 90H40L50 10Z" stroke="#97472C" stroke-width="4" stroke-linecap="round"/>
        <line x1="30" y1="70" x2="70" y2="70" stroke="#97472C" stroke-width="4"/>
        <line x1="38" y1="45" x2="62" y2="45" stroke="#97472C" stroke-width="3"/>
        <circle cx="50" cy="80" r="10" fill="#7698B7"/>
      </svg>`
    },
    {
      id: 'b2',
      group: 'journey',
      country: '🇮🇳 인도',
      title: {
        ko: '타지마할의 무지개 새',
        en: 'The Rainbow Bird of Taj Mahal',
        vi: 'Chú Chim Cầu Cồng Ở Taj Mahal',
        zh: '泰姬陵的彩虹鸟'
      },
      author: '아미타브 세티 (Amitabh Sethi)',
      age: '5~9세',
      languages: '한국어, 힌디어, 영어',
      spineColor: 'bg-primary-container',
      summary: {
        ko: '하얀 대리석 궁전 타지마할 위에 깃든 일곱 빛깔 무지개 새가 사랑과 평화의 노래를 전해주는 화려하고 서정적인 인도의 그림책입니다.',
        en: 'A lyrical Indian tale about a rainbow bird singing messages of love and peace atop the white marble palace of Taj Mahal.',
        vi: 'Truyện cổ Ấn Độ về chú chim cầu vồng cất tiếng hát tình yêu và hòa bình trên mái vòm trắng của Taj Mahal.',
        zh: '关于一只在泰姬陵白色大理石穹顶上演唱爱与和平之歌的彩虹鸟的印度诗意绘本。'
      },
      iconSvg: `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 80C20 50 35 30 50 30C65 30 80 50 80 80H20Z" fill="#D97B5C" opacity="0.8"/>
        <circle cx="50" cy="25" r="5" fill="#E6B363"/>
        <path d="M30 40Q50 10 70 40" stroke="#E6B363" stroke-width="3"/>
      </svg>`
    },
    {
      id: 'b3',
      group: 'journey',
      country: '🇨🇳 중국',
      title: {
        ko: '만리장성의 비단 실타래',
        en: 'Silk Threads of Great Wall',
        vi: 'Cuộn Chỉ Lụa Vạn Lý Trường Thành',
        zh: '万里长城与彩色丝线'
      },
      author: '리웨이 (Li Wei)',
      age: '6~10세',
      languages: '한국어, 중국어',
      spineColor: 'bg-secondary-container',
      summary: {
        ko: '웅장한 만리장성을 따라 펼쳐지는 무지개빛 비단 실타래의 비밀! 동양적인 장인 정신과 따뜻한 이웃 사랑을 표현한 그림책입니다.',
        en: 'Follow the secret rainbow silk threads along the Great Wall, expressing traditional craftsmanship and neighborly love.',
        vi: 'Theo chân cuộn chỉ lụa cầu vồng bí ẩn dọc theo Vạn Lý Trường Thành, thể hiện tình yêu thương và sự khéo léo.',
        zh: '沿着雄伟的万里长城展开彩虹丝线的神秘故事，展现东方传统手工艺与邻里关爱。'
      },
      iconSvg: `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 70L30 50L50 65L70 45L90 60V85H10V70Z" fill="#516447" opacity="0.8"/>
        <path d="M15 50Q50 20 85 50" stroke="#D97B5C" stroke-width="4" stroke-dasharray="4 4"/>
      </svg>`
    },
    {
      id: 'b4',
      group: 'folktale',
      country: '🇰🇷 대한민국',
      title: {
        ko: '호랑이와 곶감',
        en: 'The Tiger and Persimmon',
        vi: 'Hổ Và Quả Hồng Khô',
        zh: '老虎与柿饼'
      },
      author: '한국 전래 동화',
      age: '4~8세',
      languages: '한국어, 영어, 베트남어, 중국어',
      spineColor: 'bg-primary-container',
      summary: {
        ko: '무서운 호랑이가 우는 아이를 달래는 "곶감"이란 말에 곶감이 자신보다 무서운 적인 줄 알고 꽁무니를 빼는 익살스러운 한국 대표 전래동화입니다.',
        en: 'A humorous classic Korean folktale where a scary tiger gets terrified by a sweet dried persimmon.',
        vi: 'Câu chuyện dân gian Hài hước của Hàn Quốc về con hổ hung dữ sợ quả hồng khô hơn cả thợ săn.',
        zh: '风趣幽默的韩国传统民间故事，讲述大老虎误以为甜甜的柿饼是比自己还可怕的怪物的笑话。'
      },
      iconSvg: `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="35" fill="#D97B5C"/>
        <path d="M35 40L45 50M65 40L55 50" stroke="#783017" stroke-width="5" stroke-linecap="round"/>
        <path d="M40 65Q50 75 60 65" stroke="#783017" stroke-width="4"/>
        <circle cx="50" cy="20" r="8" fill="#516447"/>
      </svg>`
    },
    {
      id: 'b5',
      group: 'folktale',
      country: '🇬🇭 서아프리카',
      title: {
        ko: '거미 아난시의 지혜',
        en: 'Anansi the Spider\'s Wisdom',
        vi: 'Trí Tuệ Của Nhện Anansi',
        zh: '蜘蛛阿南西的智慧'
      },
      author: '서아프리카 전래 동화',
      age: '5~9세',
      languages: '한국어, 영어',
      spineColor: 'bg-tertiary-container',
      summary: {
        ko: '꾀 많은 거미 아난시가 세상의 모든 지혜를 단지에 담아 지키려다 아이들의 말을 듣고 세상에 널리 퍼뜨리게 된 서아프리카 교훈 동화입니다.',
        en: 'An African folktale of trickster spider Anansi who tried to keep all the world\'s wisdom in a pot.',
        vi: 'Truyện dân gian châu Phi về chú nhện lanh lợi Anansi cất giữ và chia sẻ trí khôn cho thế giới.',
        zh: '来自西非的传奇民间故事，讲述聪慧的蜘蛛阿南西将智慧散播到人间的故事。'
      },
      iconSvg: `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="18" fill="#3F627F"/>
        <line x1="20" y1="30" x2="35" y2="45" stroke="#3F627F" stroke-width="4"/>
        <line x1="80" y1="30" x2="65" y2="45" stroke="#3F627F" stroke-width="4"/>
        <line x1="15" y1="50" x2="32" y2="50" stroke="#3F627F" stroke-width="4"/>
        <line x1="85" y1="50" x2="68" y2="50" stroke="#3F627F" stroke-width="4"/>
      </svg>`
    },
    {
      id: 'b6',
      group: 'folktale',
      country: '🇻🇳 베트남',
      title: {
        ko: '용과 대나무 공주',
        en: 'The Dragon and Bamboo Princess',
        vi: 'Rồng Và Công Chúa Cây Tre',
        zh: '神龙与竹林公主'
      },
      author: '응우옌 반 린 (Nguyen Van Linh)',
      age: '5~10세',
      languages: '한국어, 베트남어',
      spineColor: 'bg-secondary-container',
      summary: {
        ko: '푸른 대나무 숲 속에서 태어난 슬기로운 공주와 마을을 구하는 자비로운 호수의 용에 관한 아름다운 베트남 옛날이야기입니다.',
        en: 'A serene Vietnamese legend of a bamboo princess and a protective lake dragon who saves the village.',
        vi: 'Huyền thoại Việt Nam thơ mộng về công chúa sinh ra từ bụi tre xanh và vị thần Rồng bảo vệ dân làng.',
        zh: '出自越南竹林传奇的动人神话，讲述竹林仙子与守护湖泊的善龙共同庇佑村庄的故事。'
      },
      iconSvg: `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="20" width="8" height="60" rx="3" fill="#516447"/>
        <rect x="40" y="15" width="8" height="65" rx="3" fill="#516447"/>
        <path d="M55 40Q75 20 85 50Q75 80 55 60" stroke="#D97B5C" stroke-width="4" fill="none"/>
      </svg>`
    },
    {
      id: 'b7',
      group: 'family',
      country: '🌏 다문화',
      title: {
        ko: '두 개의 이쁜 우리 집',
        en: 'My Two Loving Homes',
        vi: 'Hai Ngôi Nhà Thân Yêu Của Em',
        zh: '我那两个充满爱的家'
      },
      author: '마리아 이사벨 (Maria Isabel)',
      age: '3~7세',
      languages: '한국어, 영어, 베트남어',
      spineColor: 'bg-secondary-container',
      summary: {
        ko: '외할머니 나라 베트남과 할머니 나라 한국의 문화를 모두 품은 주인공이 두 문화의 따뜻함을 느끼며 성장하는 잔잔한 감동의 생활 동화입니다.',
        en: 'A heartwarming story of a child with heritage in both Korea and Vietnam embracing two beautiful cultures.',
        vi: 'Câu chuyện cảm động về em bé mang hai dòng máu Việt - Hàn cảm nhận tình yêu thương bao la từ cả hai đất nước.',
        zh: '讲述兼具韩国与越南文化背景的孩子在两个充满爱的家庭文化氛围中快乐长大的温暖故事。'
      },
      iconSvg: `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 50L40 30L60 50V75H20V50Z" fill="#D97B5C"/>
        <path d="M50 45L70 25L90 45V75H50V45Z" fill="#7698B7"/>
      </svg>`
    },
    {
      id: 'b8',
      group: 'family',
      country: '🇰🇷🇻🇳 한-베 가정',
      title: {
        ko: '할머니의 쌀국수 식탁',
        en: 'Grandma\'s Pho Table',
        vi: 'Bàn Ăn Phở Của Bà Nội',
        zh: '外婆的河粉餐桌'
      },
      author: '김하은 & 베트남 이주여성 문학회',
      age: '4~8세',
      languages: '한국어, 베트남어',
      spineColor: 'bg-primary-container',
      summary: {
        ko: '베트남에서 오신 외할머니가 끓여주시는 따뜻한 쌀국수와 한국 할머니의 김치가 식탁 위에서 만나는 식문화 교감 그림책입니다.',
        en: 'A delicious picture book showing the fusion of Vietnamese Pho cooked by Grandma and Korean Kimchi on one family dinner table.',
        vi: 'Cuốn sách tranh ấm áp về tô phở nồng nàn của bà ngoại Việt Nam và món kim chi thơm ngon của bà nội Hàn Quốc.',
        zh: '一册满溢美食与温情的绘本，展现越南外婆特制的香气扑鼻的河粉与韩国泡菜在餐桌上相汇交融的馨香故事。'
      },
      iconSvg: `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="60" rx="35" ry="20" fill="#E6B363"/>
        <path d="M25 50C25 50 35 30 50 30C65 30 75 50 75 50" stroke="#97472C" stroke-width="4"/>
      </svg>`
    },
    {
      id: 'b9',
      group: 'family',
      country: '🕊️ 평화',
      title: {
        ko: '종이학이 날아오르는 밤',
        en: 'The Night of Paper Cranes',
        vi: 'Đêm Những Hạc Giấy Bay Lên',
        zh: '千纸鹤飞翔之夜'
      },
      author: '앨런 세이 (Allen Say)',
      age: '5~10세',
      languages: '한국어, 영어, 일본어',
      spineColor: 'bg-tertiary-container',
      summary: {
        ko: '손끝으로 한 땀 한 땀 접은 평화의 종이학이 밤하늘 속으로 날아올라 온 세상 어린이들에게 희망의 메시지를 전하는 예술적 팝업 그림책입니다.',
        en: 'An artistic pop-up story of hand-folded paper cranes flying into the night sky delivering messages of global peace.',
        vi: 'Truyện tranh nổi nghệ thuật về những chú hạc giấy tự tay gấp bay lên bầu trời đêm mang ước nguyện hòa bình.',
        zh: '艺术级的纸雕立体绘本，讲述一朵朵手工折叠的平合千纸鹤在夜晚飞向星空为全世界的孩子带去希望。'
      },
      iconSvg: `<svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 20L80 50L50 80L20 50L50 20Z" fill="#3F627F" opacity="0.9"/>
        <path d="M20 50L50 60L80 50" stroke="#FDF9EF" stroke-width="3"/>
      </svg>`
    }
  ];

  // Reservations local state
  let reservedBookIds = JSON.parse(localStorage.getItem('v3_reserved_books') || '[]');

  function saveReservations() {
    localStorage.setItem('v3_reserved_books', JSON.stringify(reservedBookIds));
    updateReservationCount();
  }

  function updateReservationCount() {
    const badge = document.getElementById('reservation-count-badge');
    if (badge) {
      badge.textContent = reservedBookIds.length;
    }
  }

  // ==========================================
  // 3. Render Book Cards & Curation Filters
  // ==========================================
  function renderBooks(filterCategory = 'all') {
    const grids = {
      journey: document.getElementById('books-grid-journey'),
      folktale: document.getElementById('books-grid-folktale'),
      family: document.getElementById('books-grid-family')
    };

    if (!grids.journey) return;

    // Clear all grids
    Object.values(grids).forEach(g => g.innerHTML = '');

    booksDatabase.forEach(book => {
      if (filterCategory !== 'all' && book.group !== filterCategory) {
        return;
      }

      const isReserved = reservedBookIds.includes(book.id);
      const titleText = book.title[currentLang] || book.title.ko;
      const dict = translations[currentLang] || translations.ko;

      const cardHtml = `
        <div class="paper-sheet paper-interactive rounded-xl p-5 flex gap-4 bg-surface h-44 cursor-pointer group" data-id="${book.id}">
          <!-- Paper Spine Accent -->
          <div class="w-3.5 ${book.spineColor} rounded-l-md flex-shrink-0 shadow-inner group-hover:w-4 transition-all"></div>

          <!-- Book Details -->
          <div class="flex flex-col justify-between py-1 flex-grow overflow-hidden">
            <div>
              <div class="flex justify-between items-start gap-1 mb-1">
                <span class="text-[11px] font-bold text-outline uppercase tracking-wider">${book.country}</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded ${isReserved ? 'bg-error-container text-error' : 'bg-secondary-container text-on-secondary-container'}">
                  ${isReserved ? dict.status_reserved : dict.status_available}
                </span>
              </div>
              <h4 class="font-serif text-lg font-bold text-on-surface line-clamp-1 group-hover:text-primary transition-colors">${titleText}</h4>
              <p class="font-sans text-xs text-on-surface-variant line-clamp-1 mt-0.5">${book.author}</p>
              <p class="font-sans text-xs text-outline line-clamp-2 mt-1.5 leading-relaxed">${book.summary[currentLang] || book.summary.ko}</p>
            </div>

            <div class="flex justify-between items-center pt-2 border-t border-outline-variant/40 mt-1">
              <span class="text-[11px] font-semibold text-tertiary flex items-center gap-1">
                <span class="material-symbols-outlined text-sm">face</span> ${book.age}
              </span>
              <button class="btn-quick-book text-xs text-primary font-bold hover:underline flex items-center gap-1">
                <span>자세히 보기</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      `;

      if (grids[book.group]) {
        grids[book.group].insertAdjacentHTML('beforeend', cardHtml);
      }
    });

    // Attach click listeners to cards
    document.querySelectorAll('.paper-interactive[data-id]').forEach(card => {
      card.addEventListener('click', () => {
        openBookModal(card.dataset.id);
      });
    });
  }

  // Category Tab Clicks
  document.querySelectorAll('.cat-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab-btn').forEach(b => {
        b.classList.remove('bg-primary', 'text-white');
        b.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      btn.classList.remove('bg-surface-container', 'text-on-surface-variant');
      btn.classList.add('bg-primary', 'text-white');

      const cat = btn.dataset.category;
      document.querySelectorAll('.curation-category-group').forEach(group => {
        if (cat === 'all' || group.dataset.group === cat) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 4. WebGL Interactive 2D/3D Papercraft Engine
  // ==========================================
  function initPapercraftWebGL() {
    const container = document.getElementById('hero-canvas-container');
    const canvas = document.getElementById('papercraft-canvas');
    if (!container || !canvas || typeof THREE === 'undefined') return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFDF9EF); // Cream paper tint

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lighting (Warm directional light simulating desk lamp over pop-up book)
    const ambientLight = new THREE.AmbientLight(0xfffaf0, 0.75);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffeedd, 0.85);
    dirLight.position.set(10, 15, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.bias = -0.001;
    scene.add(dirLight);

    // Group holding papercraft layers
    const paperBookGroup = new THREE.Group();
    scene.add(paperBookGroup);

    // Material Definitions
    const paperMatBase = new THREE.MeshStandardMaterial({ color: 0xFDF9EF, roughness: 0.85, metalness: 0.05 });
    const paperMatTerracotta = new THREE.MeshStandardMaterial({ color: 0xD97B5C, roughness: 0.8 });
    const paperMatSage = new THREE.MeshStandardMaterial({ color: 0x8FA382, roughness: 0.85 });
    const paperMatSky = new THREE.MeshStandardMaterial({ color: 0x6C8EAD, roughness: 0.8 });
    const paperMatOchre = new THREE.MeshStandardMaterial({ color: 0xE6B363, roughness: 0.75 });

    // Base Unfolded Open Book Base Plane
    const bookBaseGeo = new THREE.PlaneGeometry(16, 10);
    const bookBaseMesh = new THREE.Mesh(bookBaseGeo, paperMatBase);
    bookBaseMesh.receiveShadow = true;
    bookBaseMesh.position.z = -1;
    paperBookGroup.add(bookBaseMesh);

    // Book Center Fold Crease Line
    const creaseGeo = new THREE.BoxGeometry(0.1, 10.2, 0.2);
    const creaseMesh = new THREE.Mesh(creaseGeo, paperMatTerracotta);
    creaseMesh.position.z = -0.9;
    paperBookGroup.add(creaseMesh);

    // Layer 1: Distant Paper Mountains (Sage Green)
    const mtnGeo = new THREE.ConeGeometry(3.5, 5, 4);
    const mtn1 = new THREE.Mesh(mtnGeo, paperMatSage);
    mtn1.position.set(-4.5, 0.5, 0.2);
    mtn1.rotation.y = Math.PI / 4;
    mtn1.castShadow = true;
    mtn1.receiveShadow = true;
    paperBookGroup.add(mtn1);

    const mtn2 = new THREE.Mesh(mtnGeo, paperMatSage);
    mtn2.position.set(-1.8, 1, 0.4);
    mtn2.scale.set(0.8, 1.2, 0.8);
    mtn2.rotation.y = Math.PI / 4;
    mtn2.castShadow = true;
    paperBookGroup.add(mtn2);

    // Layer 2: Architecture Cutout (Eiffel Tower & Namdaemun Pagoda in Papercraft)
    const towerGroup = new THREE.Group();
    const towerBase = new THREE.Mesh(new THREE.BoxGeometry(2, 3.5, 0.15), paperMatSky);
    const towerRoof = new THREE.Mesh(new THREE.ConeGeometry(1.6, 2.5, 4), paperMatTerracotta);
    towerRoof.position.y = 2.5;
    towerRoof.rotation.y = Math.PI / 4;
    towerGroup.add(towerBase, towerRoof);
    towerGroup.position.set(4, 0.2, 1.2);
    towerGroup.castShadow = true;
    paperBookGroup.add(towerGroup);

    // Layer 3: Foreground Characters (Paper Tiger & Reading Child)
    const tigerGeo = new THREE.BoxGeometry(2.2, 1.6, 0.15);
    const tigerMesh = new THREE.Mesh(tigerGeo, paperMatTerracotta);
    tigerMesh.position.set(-1, -1.8, 2.2);
    tigerMesh.rotation.z = -0.05;
    tigerMesh.castShadow = true;
    paperBookGroup.add(tigerMesh);

    const childGeo = new THREE.CylinderGeometry(0.8, 1, 1.8, 6);
    const childMesh = new THREE.Mesh(childGeo, paperMatOchre);
    childMesh.position.set(2, -1.6, 2.5);
    childMesh.castShadow = true;
    paperBookGroup.add(childMesh);

    // Layer 4: Floating Paper Crane (Sky Blue)
    const craneGeo = new THREE.TetrahedronGeometry(1.2);
    const craneMesh = new THREE.Mesh(craneGeo, paperMatSky);
    craneMesh.position.set(0, 2.8, 3.2);
    craneMesh.rotation.set(0.4, 0.6, 0.2);
    craneMesh.castShadow = true;
    paperBookGroup.add(craneMesh);

    // Mouse Parallax Interaction Logic
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      targetRotationY = mouseX * 0.25;
      targetRotationX = mouseY * 0.18;
    });

    container.addEventListener('mouseleave', () => {
      targetRotationX = 0;
      targetRotationY = 0;
    });

    // Render Animation Loop
    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp rotation for parallax effect
      paperBookGroup.rotation.y += (targetRotationY - paperBookGroup.rotation.y) * 0.08;
      paperBookGroup.rotation.x += (targetRotationX - paperBookGroup.rotation.x) * 0.08;

      // Subtle paper floating animation for Crane
      craneMesh.position.y = 2.8 + Math.sin(elapsedTime * 2) * 0.25;
      craneMesh.rotation.y += 0.01;

      // Slight tiger breathing motion
      tigerMesh.rotation.z = Math.sin(elapsedTime * 1.5) * 0.03;

      renderer.render(scene, camera);
    }

    animate();

    // Window Resize Handling
    window.addEventListener('resize', () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });

    // GSAP ScrollTrigger Unfold Animation
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(paperBookGroup.scale, {
        x: 0.4,
        y: 0.4,
        z: 0.4,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      });
    }
  }

  // ==========================================
  // 5. 3D Book Flip & Pop-Up Preview Modal
  // ==========================================
  let activeBookId = null;

  function openBookModal(bookId) {
    const book = booksDatabase.find(b => b.id === bookId);
    if (!book) return;

    activeBookId = bookId;
    const modal = document.getElementById('book-modal');
    const bookCard = document.getElementById('book-3d-card');
    const dict = translations[currentLang] || translations.ko;

    // Fill Modal Data
    document.getElementById('modal-book-country').textContent = book.country;
    document.getElementById('modal-book-title').textContent = book.title[currentLang] || book.title.ko;
    document.getElementById('modal-book-title-sub').textContent = book.title[currentLang] || book.title.ko;
    document.getElementById('modal-book-author').textContent = book.author;
    document.getElementById('modal-book-summary').textContent = book.summary[currentLang] || book.summary.ko;
    document.getElementById('modal-book-age').textContent = book.age;
    document.getElementById('modal-book-languages').textContent = `지원 언어: ${book.languages}`;
    document.getElementById('modal-popup-illustration').innerHTML = book.iconSvg;

    const isReserved = reservedBookIds.includes(bookId);
    const statusEl = document.getElementById('modal-book-status');
    const reserveBtnText = document.getElementById('modal-reserve-btn-text');
    const stampEl = document.getElementById('reservation-stamp');

    // Reset Stamp
    stampEl.classList.remove('stamp-active');

    if (isReserved) {
      statusEl.textContent = dict.status_reserved;
      statusEl.className = 'font-bold text-error';
      reserveBtnText.textContent = '예약 취소하기';
      stampEl.style.opacity = '1';
      stampEl.style.transform = 'scale(1) rotate(-14deg)';
    } else {
      statusEl.textContent = dict.status_available;
      statusEl.className = 'font-bold text-secondary';
      reserveBtnText.textContent = dict.btn_modal_reserve_text;
      stampEl.style.opacity = '0';
      stampEl.style.transform = 'scale(3) rotate(-30deg)';
    }

    // Show Modal with Animation
    modal.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      bookCard.classList.add('book-open');
    }, 50);
  }

  function closeBookModal() {
    const modal = document.getElementById('book-modal');
    const bookCard = document.getElementById('book-3d-card');
    bookCard.classList.remove('book-open');
    setTimeout(() => {
      modal.classList.add('opacity-0', 'pointer-events-none');
    }, 200);
  }

  // 1-Click Reservation Stamp Action
  document.getElementById('btn-modal-reserve')?.addEventListener('click', () => {
    if (!activeBookId) return;

    const book = booksDatabase.find(b => b.id === activeBookId);
    const stampEl = document.getElementById('reservation-stamp');
    const dict = translations[currentLang] || translations.ko;

    const index = reservedBookIds.indexOf(activeBookId);

    if (index === -1) {
      // Reserve Book
      reservedBookIds.push(activeBookId);
      saveReservations();

      // Play Stamp Slam Animation
      stampEl.classList.remove('stamp-active');
      void stampEl.offsetWidth; // Force reflow
      stampEl.classList.add('stamp-active');

      showToast(`🎉 "${book.title[currentLang] || book.title.ko}" ${dict.toast_reserved}`);
      
      document.getElementById('modal-book-status').textContent = dict.status_reserved;
      document.getElementById('modal-book-status').className = 'font-bold text-error';
      document.getElementById('modal-reserve-btn-text').textContent = '예약 취소하기';
    } else {
      // Cancel Reservation
      reservedBookIds.splice(index, 1);
      saveReservations();

      stampEl.classList.remove('stamp-active');
      stampEl.style.opacity = '0';

      showToast(`ℹ️ "${book.title[currentLang] || book.title.ko}" ${dict.toast_canceled}`);

      document.getElementById('modal-book-status').textContent = dict.status_available;
      document.getElementById('modal-book-status').className = 'font-bold text-secondary';
      document.getElementById('modal-reserve-btn-text').textContent = dict.btn_modal_reserve_text;
    }

    renderBooks();
  });

  document.getElementById('btn-close-book')?.addEventListener('click', closeBookModal);

  // ==========================================
  // 6. Instant Search Engine Modal
  // ==========================================
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResultsList = document.getElementById('search-results-list');

  function openSearchModal() {
    searchModal.classList.remove('opacity-0', 'pointer-events-none');
    document.getElementById('search-modal-content').style.transform = 'translateY(0)';
    searchInput.focus();
    performSearch('');
  }

  function closeSearchModal() {
    searchModal.classList.add('opacity-0', 'pointer-events-none');
    document.getElementById('search-modal-content').style.transform = 'translateY(-20px)';
  }

  document.getElementById('btn-open-search')?.addEventListener('click', openSearchModal);
  document.getElementById('btn-close-search')?.addEventListener('click', closeSearchModal);

  searchInput?.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });

  document.querySelectorAll('.search-tag-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      searchInput.value = btn.textContent;
      performSearch(btn.textContent);
    });
  });

  function performSearch(query) {
    const q = query.trim().toLowerCase();
    searchResultsList.innerHTML = '';

    const filtered = booksDatabase.filter(book => {
      const title = (book.title[currentLang] || book.title.ko).toLowerCase();
      const author = book.author.toLowerCase();
      const country = book.country.toLowerCase();
      const summary = (book.summary[currentLang] || book.summary.ko).toLowerCase();
      return title.includes(q) || author.includes(q) || country.includes(q) || summary.includes(q);
    });

    if (filtered.length === 0) {
      searchResultsList.innerHTML = `<div class="p-6 text-center text-outline text-sm">검색 결과가 없습니다. 다른 키워드로 검색해보세요.</div>`;
      return;
    }

    filtered.forEach(book => {
      const item = document.createElement('div');
      item.className = 'search-result-item p-3 border border-outline-variant/50 rounded-lg flex justify-between items-center bg-surface cursor-pointer';
      item.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded bg-primary-container/20 text-primary flex items-center justify-center font-bold text-xs">
            ${book.country.slice(0, 4)}
          </div>
          <div>
            <div class="font-serif font-bold text-sm text-on-surface">${book.title[currentLang] || book.title.ko}</div>
            <div class="text-xs text-outline">${book.author} · ${book.age}</div>
          </div>
        </div>
        <span class="material-symbols-outlined text-sm text-primary">arrow_forward</span>
      `;
      item.addEventListener('click', () => {
        closeSearchModal();
        openBookModal(book.id);
      });
      searchResultsList.appendChild(item);
    });
  }

  // ==========================================
  // 7. My Reservations Drawer
  // ==========================================
  const resDrawer = document.getElementById('reservations-drawer');
  const resContent = document.getElementById('reservations-drawer-content');

  function openReservationsDrawer() {
    renderReservationsList();
    resDrawer.classList.remove('opacity-0', 'pointer-events-none');
    resContent.style.transform = 'translateX(0)';
  }

  function closeReservationsDrawer() {
    resDrawer.classList.add('opacity-0', 'pointer-events-none');
    resContent.style.transform = 'translateX(100%)';
  }

  function renderReservationsList() {
    const container = document.getElementById('reservations-list');
    if (!container) return;

    container.innerHTML = '';

    if (reservedBookIds.length === 0) {
      container.innerHTML = `<div class="p-8 text-center text-outline text-sm font-sans">예약된 도서가 없습니다.<br/>마음에 드는 동화책을 예약해보세요!</div>`;
      return;
    }

    reservedBookIds.forEach(id => {
      const book = booksDatabase.find(b => b.id === id);
      if (!book) return;

      const item = document.createElement('div');
      item.className = 'p-3 bg-surface-container-low border border-outline-variant rounded-lg flex justify-between items-center';
      item.innerHTML = `
        <div>
          <div class="font-serif font-bold text-sm text-primary">${book.title[currentLang] || book.title.ko}</div>
          <div class="text-xs text-outline">${book.country} · ${book.author}</div>
        </div>
        <button class="btn-cancel-res text-xs text-error hover:underline font-semibold" data-id="${book.id}">취소</button>
      `;
      container.appendChild(item);
    });

    container.querySelectorAll('.btn-cancel-res').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        reservedBookIds = reservedBookIds.filter(rId => rId !== id);
        saveReservations();
        renderReservationsList();
        renderBooks();
      });
    });
  }

  document.getElementById('btn-my-reservations')?.addEventListener('click', openReservationsDrawer);
  document.getElementById('btn-close-reservations')?.addEventListener('click', closeReservationsDrawer);
  document.getElementById('btn-clear-reservations')?.addEventListener('click', () => {
    reservedBookIds = [];
    saveReservations();
    renderReservationsList();
    renderBooks();
  });

  // ==========================================
  // 8. Toast Notifications
  // ==========================================
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="font-sans text-sm font-semibold text-on-surface">${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('toast-show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // Language switcher buttons event listener
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      updateLanguage(btn.dataset.lang);
    });
  });

  // Explore button smooth scroll
  document.getElementById('btn-hero-explore')?.addEventListener('click', () => {
    document.getElementById('curation')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Initialize
  updateLanguage(currentLang);
  initPapercraftWebGL();
});
