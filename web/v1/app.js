/* app.js - Cosmos Multicultural Library web_v1 */

// --- 1. Multilingual i18n Translations ---
const translations = {
  ko: {
    nav_title: "다문화도서관",
    nav_subtitle: "Cosmos Library",
    nav_catalog: "도서목록",
    nav_culture: "문화여행",
    nav_dual: "듀얼동화",
    nav_warm: "감성동화",
    nav_login: "회원 예약로그인",
    search_placeholder: "우주 속 다문화 도서 검색...",
    hero_badge: "빛나는 세계의 이야기",
    hero_title: "지구 반대편의 이야기가 피어나는 곳",
    hero_desc: "Three.js 3D 지구본과 은하수 책들을 탐험해보세요. 한글과 원어가 어우러진 다문화 동화를 만나실 수 있습니다.",
    btn_start: "3D 도서 탐험하기",
    btn_catalog: "전체 큐레이션 보기",
    scroll_explore: "스크롤하여 큐레이션 탐색",
    cat_culture_title: "오늘의 문화 여행",
    cat_culture_subtitle: "지구촌 곳곳의 전통과 삶이 담긴 다문화 대표 도서",
    cat_dual_title: "아이들을 위한 듀얼 동화",
    cat_dual_subtitle: "한국어와 원어가 함께 표기된 창의력 쑥쑥 이중언어 동화",
    cat_warm_title: "마음이 따뜻해지는 감성 동화",
    cat_warm_subtitle: "가족과 이웃의 온기를 느낄 수 있는 가슴 따뜻한 이야기",
    btn_reserve: "1초 간편 예약",
    btn_preview: "3D 펼쳐보기",
    status_available: "대출 가능",
    status_reserved: "예약 대기 (1)",
    modal_preview_title: "3D 입체 도서 미리보기",
    modal_reserve_title: "1초 간편 도서 예약",
    member_id_label: "회원 번호 (또는 연락처)",
    member_id_placeholder: "예: M-2026-8801",
    btn_confirm_reserve: "즉시 대출 예약 신청",
    btn_close: "닫기",
    toast_reserve_success: "🎉 성공적으로 도서 예약이 완료되었습니다!",
    toast_search_result: "검색 결과가 업데이트되었습니다.",
    view_all: "전체 보기"
  },
  en: {
    nav_title: "Cosmos Library",
    nav_subtitle: "Multicultural Portal",
    nav_catalog: "Catalog",
    nav_culture: "Culture",
    nav_dual: "Dual-Lang",
    nav_warm: "Stories",
    nav_login: "Member Login",
    search_placeholder: "Search books across the cosmos...",
    hero_badge: "Discover New Worlds",
    hero_title: "Galaxy of Knowledge & Global Stories",
    hero_desc: "Explore an interactive 3D universe of literature. Immerse yourself in rich bilingual children's stories and global heritage.",
    btn_start: "Explore 3D Globe",
    btn_catalog: "Browse Catalog",
    scroll_explore: "Scroll to explore",
    cat_culture_title: "Culture Discovery",
    cat_culture_subtitle: "Curated selections spanning continents, traditions, and heritage.",
    cat_dual_title: "Dual-Language for Children",
    cat_dual_subtitle: "Bilingual stories paired with native text and Korean translations.",
    cat_warm_title: "Warmhearted Tales",
    cat_warm_subtitle: "Heartwarming family stories that celebrate togetherness and empathy.",
    btn_reserve: "1-Click Reserve",
    btn_preview: "3D Preview",
    status_available: "Available",
    status_reserved: "Waitlist (1)",
    modal_preview_title: "3D Interactive Book Preview",
    modal_reserve_title: "Instant 1-Click Book Reservation",
    member_id_label: "Member ID or Contact Number",
    member_id_placeholder: "e.g., M-2026-8801",
    btn_confirm_reserve: "Confirm Reservation",
    btn_close: "Close",
    toast_reserve_success: "🎉 Reservation confirmed successfully!",
    toast_search_result: "Search results updated.",
    view_all: "View All"
  },
  vi: {
    nav_title: "Thư viện Đa văn hóa",
    nav_subtitle: "Cosmos Library",
    nav_catalog: "Danh mục",
    nav_culture: "Văn hóa",
    nav_dual: "Song ngữ",
    nav_warm: "Cảm xúc",
    nav_login: "Đăng nhập",
    search_placeholder: "Tìm kiếm sách đa văn hóa...",
    hero_badge: "Khám phá thế giới mới",
    hero_title: "Vũ trụ Tri thức & Câu chuyện Toàn cầu",
    hero_desc: "Khám phá quả địa cầu 3D tương tác và bộ sưu tập truyện tranh song ngữ dành cho thiếu nhi.",
    btn_start: "Khám phá 3D",
    btn_catalog: "Xem danh mục",
    scroll_explore: "Cuộn để khám phá",
    cat_culture_title: "Hành trình Văn hóa",
    cat_culture_subtitle: "Những cuốn sách truyền thống và văn hóa độc đáo từ khắp nơi trên thế giới.",
    cat_dual_title: "Truyện Song ngữ Cho Trẻ Em",
    cat_dual_subtitle: "Truyện song ngữ Việt - Hàn giúp bé phát triển trí tuệ và ngôn ngữ.",
    cat_warm_title: "Câu chuyện Ấm áp Heartwarming",
    cat_warm_subtitle: "Những câu chuyện giàu cảm xúc về gia đình và tình yêu thương.",
    btn_reserve: "Đặt sách 1 giây",
    btn_preview: "Xem 3D",
    status_available: "Có sẵn",
    status_reserved: "Đang chờ (1)",
    modal_preview_title: "Xem trước Sách 3D",
    modal_reserve_title: "Đặt Sách Nhanh 1 Giây",
    member_id_label: "Mã số thành viên / Số điện thoại",
    member_id_placeholder: "Ví dụ: M-2026-8801",
    btn_confirm_reserve: "Xác nhận đặt sách",
    btn_close: "Đóng",
    toast_reserve_success: "🎉 Đặt sách thành công!",
    toast_search_result: "Kết quả tìm kiếm đã cập nhật.",
    view_all: "Xem tất cả"
  },
  zh: {
    nav_title: "多元文化图书馆",
    nav_subtitle: "Cosmos Library",
    nav_catalog: "图书目录",
    nav_culture: "文化之旅",
    nav_dual: "双语绘本",
    nav_warm: "温馨故事",
    nav_login: "会员登录",
    search_placeholder: "在星空宇宙中搜索图书...",
    hero_badge: "探索崭新世界",
    hero_title: "让世界故事在指尖绽放",
    hero_desc: "体验 Three.js 3D 互动地球仪与银河书群，探索中韩/多语种儿童双语绘本与文学精选。",
    btn_start: "开启 3D 探索",
    btn_catalog: "浏览全部分类",
    scroll_explore: "向下滚动探索",
    cat_culture_title: "今日文化之旅",
    cat_culture_subtitle: "包含世界各地风土人情与传统文化的代表性图书",
    cat_dual_title: "儿童双语绘本",
    cat_dual_subtitle: "韩语与母语对照显示的创新创意双语绘本",
    cat_warm_title: "温暖心灵的情感童话",
    cat_warm_subtitle: "感人至深的家庭与邻里温情故事",
    btn_reserve: "一键快速预约",
    btn_preview: "3D 展开试读",
    status_available: "可借阅",
    status_reserved: "预约等待 (1)",
    modal_preview_title: "3D 立体图书预览",
    modal_reserve_title: "1秒快速图书预约",
    member_id_label: "会员卡号或联系电话",
    member_id_placeholder: "例：M-2026-8801",
    btn_confirm_reserve: "确认即刻预约",
    btn_close: "关闭",
    toast_reserve_success: "🎉 图书预约成功！",
    toast_search_result: "搜索结果已更新。",
    view_all: "查看全部"
  }
};

let currentLang = 'ko';

// --- 2. Curated Book Database ---
const booksData = [
  // Culture Category
  {
    id: "b1",
    category: "culture",
    country: "Korea",
    countryBadge: "KOREAN",
    title: {
      ko: "한옥의 낮은 바람",
      en: "Whispers of the Hanok",
      vi: "Tiếng gió thì thầm dưới mái nhà Hanok",
      zh: "韩屋的微风细语"
    },
    author: "Min-Jun Choi",
    coverBg: "linear-gradient(135deg, #4f46e5, #06b6d4)",
    coverImg: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    tags: ["Traditional", "Architecture", "Nature"],
    status: "available",
    summary: {
      ko: "한국의 전통 한옥 마루에 앉아 바람 소리를 들으며 배우는 자연과 사람의 은은한 조화 이야기.",
      en: "A serene journey into traditional Korean Hanok architecture and the harmonious breeze of nature.",
      vi: "Hành trình thư thái khám phá kiến trúc nhà Hanok truyền thống và sự hòa hợp với thiên nhiên.",
      zh: "在传统韩屋的地板上感受清风与自然的和谐之美。"
    },
    excerpt: {
      ko: "지붕 처마 끝에 달린 풍경 소리가 따스한 햇살과 함께 마당을 가득 채웁니다.",
      en: "The wind chime under the wooden eaves plays a gentle melody with the warm afternoon sun."
    }
  },
  {
    id: "b2",
    category: "culture",
    country: "China",
    countryBadge: "CHINESE",
    title: {
      ko: "인디고 대나무의 전설",
      en: "The Indigo Bamboo",
      vi: "Huyền thoại Rặng tre Chàm",
      zh: "蓝竹林传说"
    },
    author: "Wei Lin",
    coverBg: "linear-gradient(135deg, #059669, #10b981)",
    coverImg: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    tags: ["Folklore", "Bamboo Forest", "Mystery"],
    status: "reserved",
    summary: {
      ko: "신비로운 푸른 대나무 숲 속에서 전해지는 오랜 용기와 지혜의 옛이야기.",
      en: "An ancient tale of courage and wisdom hidden deep within the mystical indigo bamboo forest.",
      vi: "Câu chuyện cổ xưa về lòng dũng cảm và trí tuệ ẩn sâu trong rừng tre lam nguyệt.",
      zh: "隐藏在神秘蓝竹林深处的古老智慧与勇气传说。"
    },
    excerpt: {
      ko: "달빛이 강물에 반사될 때, 대나무 잎사귀들은 빛나는 멜로디를 노래했습니다.",
      en: "When moonlight sparkled on the river, the indigo bamboo leaves sang a glowing song."
    }
  },
  {
    id: "b3",
    category: "culture",
    country: "Vietnam",
    countryBadge: "VIETNAMESE",
    title: {
      ko: "은하수 연꽃의 미소",
      en: "Starlight Lotus",
      vi: "Nụ cười Hoa sen Ngân hà",
      zh: "银河连理枝"
    },
    author: "Anh Tran",
    coverBg: "linear-gradient(135deg, #9333ea, #c084fc)",
    coverImg: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    tags: ["Lotus", "Cosmic", "Heritage"],
    status: "available",
    summary: {
      ko: "베트남 잔잔한 호수 위에 피어나는 우주 연꽃과 보랏빛 밤하늘의 시적인 서사.",
      en: "A poetic tale of cosmic lotus flowers blooming under the vibrant night sky of Vietnam.",
      vi: "Câu chuyện thơ mộng về những đóa sen ngân hà nở rộ dưới bầu trời đêm tràn ngập ánh sao.",
      zh: "在幽静水面上盛开的紫色银河莲花与星空叙事诗。"
    },
    excerpt: {
      ko: "새벽 이슬을 머금은 분홍빛 연꽃잎 하나하나에 우주의 별빛이 머물렀습니다.",
      en: "Each dewdrop on the lotus petal reflected a shimmering galaxy in the tranquil dawn."
    }
  },
  {
    id: "b4",
    category: "culture",
    country: "Global",
    countryBadge: "AFRICA",
    title: {
      ko: "사하라의 별자리 축제",
      en: "Starry Sahara Night",
      vi: "Lễ hội Chòm sao Sahara",
      zh: "撒哈拉的星空节"
    },
    author: "Amina Diallo",
    coverBg: "linear-gradient(135deg, #d97706, #f59e0b)",
    coverImg: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    tags: ["Desert", "Constellation", "Music"],
    status: "available",
    summary: {
      ko: "사하라 사막 모래언덕 너머 펼쳐지는 환상적인 별자리와 음악 이야기.",
      en: "An enchanting desert journey following ancient star maps and melodic drums.",
      vi: "Hành trình sa mạc rực rỡ theo dấu các chòm sao và tiếng trống rộn ràng.",
      zh: "跟随着沙丘夜空中的恒星跟清脆鼓点开启的沙漠浪漫之旅。"
    },
    excerpt: {
      ko: "끝없이 넓은 모래 언덕 위로 밤하늘의 쏟아지는 별빛이 길을 비춰주었습니다.",
      en: "Across the vast desert dunes, falling stars lit up the golden pathway for night travelers."
    }
  },

  // Dual-Language Category
  {
    id: "b5",
    category: "dual",
    country: "Korea & USA",
    countryBadge: "KO / EN",
    title: {
      ko: "아기 호랑이의 무지개 그림",
      en: "Little Tiger's Rainbow Paint",
      vi: "Bức tranh ngũ sắc của Hổ con",
      zh: "小老虎的彩虹画卷"
    },
    author: "Sujin Park & Emma Miller",
    coverBg: "linear-gradient(135deg, #ef4444, #f97316)",
    coverImg: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    tags: ["Ages 3-6", "Colors", "Art"],
    status: "available",
    summary: {
      ko: "장난꾸러기 아기 호랑이가 알록달록 무지개 물감으로 숲속을 꾸미는 재미있는 이중언어 동화.",
      en: "A playful bilingual story of a cute tiger cub painting the forest with bright rainbow colors.",
      vi: "Truyện song ngữ đáng yêu về chú hổ con tinh nghịch vẽ nên khu rừng rực rỡ sắc màu.",
      zh: "淘气小老虎用彩色颜料在神奇森林里涂鸦的趣味韩英双语绘本。"
    },
    excerpt: {
      ko: "[KO] 빨간 사과, 파란 하늘! [EN] Red apple, blue sky!",
      en: "[KO] 빨간 사과, 파란 하늘! [EN] Red apple, blue sky!"
    }
  },
  {
    id: "b6",
    category: "dual",
    country: "China & Korea",
    countryBadge: "KO / ZH",
    title: {
      ko: "이야기 도시 탐험대",
      en: "City of Tales Explorers",
      vi: "Thành phố Truyện cổ Tích",
      zh: "故事之城大探险"
    },
    author: "Zhang Wei & Kim Ji-Hoon",
    coverBg: "linear-gradient(135deg, #2563eb, #3b82f6)",
    coverImg: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    tags: ["Ages 5-9", "Adventure", "City"],
    status: "available",
    summary: {
      ko: "책으로 지어진 비밀 도시에서 펼쳐지는 어린이들의 흥미진진한 모험 서사.",
      en: "A fantasy bilingual journey into a secret city built entirely of giant magical storybooks.",
      vi: "Hành trình mạo hiểm kỳ thú đến thành phố bí mật được xây dựng từ những cuốn sách khổng lồ.",
      zh: "在由一本本巨型书本打造成的故事城市里的双语探索探险。"
    },
    excerpt: {
      ko: "[KO] 비밀의 문이 열렸어요! [ZH] 神秘的大门开启了！",
      en: "[KO] 비밀의 문이 열렸어요! [ZH] 神秘的大门开启了！"
    }
  },
  {
    id: "b7",
    category: "dual",
    country: "Vietnam & Korea",
    countryBadge: "KO / VI",
    title: {
      ko: "우주 정원의 별 씨앗",
      en: "The Star Seed Garden",
      vi: "Hạt giống Ngôi sao Vũ trụ",
      zh: "宇宙花园的星之种子"
    },
    author: "Nguyen Van Mai & Lee Bora",
    coverBg: "linear-gradient(135deg, #10b981, #059669)",
    coverImg: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    tags: ["Ages 4-8", "Nature", "Space"],
    status: "reserved",
    summary: {
      ko: "은하수 정원에 별 씨앗을 심고 정성껏 보살피는 아이들의 순수한 따뜻함을 담은 책.",
      en: "A heart-warming bilingual book about planting star seeds in a cosmic backyard garden.",
      vi: "Cuốn sách song ngữ ngập tràn yêu thương về việc gieo mầm hạt giống ngôi sao trên thiên hà.",
      zh: "讲述小朋友在银河系后花园播种星星种子的温馨中越双语故事。"
    },
    excerpt: {
      ko: "[KO] 매일 밤 물을 주면 별이 쑥쑥 커요. [VI] Mỗi đêm tưới nước, ngôi sao sẽ lớn nhanh.",
      en: "[KO] 매일 밤 물을 주면 별이 쑥쑥 커요. [VI] Mỗi đêm tưới nước, ngôi sao sẽ lớn nhanh."
    }
  },
  {
    id: "b8",
    category: "dual",
    country: "Global",
    countryBadge: "KO / EN",
    title: {
      ko: "달님에게 보내는 편지",
      en: "A Letter to the Moon",
      vi: "Lá thư gửi Chị Hằng",
      zh: "寄给月亮的一封信"
    },
    author: "Sophia Taylor",
    coverBg: "linear-gradient(135deg, #7c3aed, #a855f7)",
    coverImg: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    tags: ["Ages 3-7", "Night", "Wish"],
    status: "available",
    summary: {
      ko: "밤하늘 달님에게 띄우는 예쁜 소원과 세계 어린이들의 다정한 마음을 모은 이야기.",
      en: "A heartwarming bedtime story sending letters of love and wishes to the friendly moon.",
      vi: "Câu chuyện chúc bé ngủ ngon ngọt ngào gửi gắm những ước mơ đến mặt trăng.",
      zh: "满载着孩子们纯真愿望与温暖情感的寄给月亮叔叔的睡前诗章。"
    },
    excerpt: {
      ko: "[KO] 달님, 오늘도 은빛 미소를 보여주세요. [EN] Moon, please shine your silver smile tonight.",
      en: "[KO] 달님, 오늘도 은빛 미소를 보여주세요. [EN] Moon, please shine your silver smile tonight."
    }
  },

  // Warmhearted Category
  {
    id: "b9",
    category: "warm",
    country: "Vietnam",
    countryBadge: "VIETNAMESE",
    title: {
      ko: "엄마의 비단 자수",
      en: "Silk Embroidery of Love",
      vi: "Thêu thêu Áo dài của Mẹ",
      zh: "妈妈的真丝刺绣"
    },
    author: "Le Thi Thu",
    coverBg: "linear-gradient(135deg, #ec4899, #f43f5e)",
    coverImg: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    tags: ["Family", "Embroidery", "Warmth"],
    status: "available",
    summary: {
      ko: "비단 실 한 땀 한 땀에 딸을 향한 깊은 사랑을 한 올씩 수놓는 어머니의 자수 감성 소설.",
      en: "A touching story of a mother weaving endless love and blessing into silk embroidery.",
      vi: "Câu chuyện cảm động về người mẹ thêu dệt tình yêu thương vào từng mũi chỉ trên tà áo.",
      zh: "在一针一线中融入对女儿无限深情与深厚祝福的母爱感人篇章。"
    },
    excerpt: {
      ko: "자수한 꽃잎 사이에 담긴 어머니의 손길은 어떤 바람에도 시들지 않았습니다.",
      en: "The embroidered flowers stitched by mother's warm hands never faded in any storm."
    }
  },
  {
    id: "b10",
    category: "warm",
    country: "Korea",
    countryBadge: "KOREAN",
    title: {
      ko: "바다 건너온 선물",
      en: "Gift Across the Ocean",
      vi: "Món quà qua Đại dương",
      zh: "飘洋过海的礼物"
    },
    author: "Seon-Young Han",
    coverBg: "linear-gradient(135deg, #0284c7, #38bdf8)",
    coverImg: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    tags: ["Friendship", "Ocean", "Letter"],
    status: "available",
    summary: {
      ko: "멀리 떨어진 두 나라 어린이가 우편으로 소식과 마음을 전하며 맺어가는 기적 같은 우정.",
      en: "A moving tale of two pen-pal children connecting across continents through letters.",
      vi: "Câu chuyện tình bạn vượt đại dương qua những lá thư tay chan chứa niềm vui.",
      zh: "两个身处不同国家的小孩子通过书信交流建立跨国坚贞友谊的温馨故事。"
    },
    excerpt: {
      ko: "파란 우표가 붙은 편지봉투 속에는 은빛 바다 냄새가 듬뿍 실려 있었습니다.",
      en: "Inside the envelope stamped with blue, the scent of sea waves brought immense joy."
    }
  },
  {
    id: "b11",
    category: "warm",
    country: "Global",
    countryBadge: "GLOBAL",
    title: {
      ko: "세계의 따뜻한 자장가",
      en: "Lullabies Around the World",
      vi: "Hát ru Khắp Thế giới",
      zh: "摇篮里的世界之歌"
    },
    author: "Elena Rostova",
    coverBg: "linear-gradient(135deg, #6366f1, #818cf8)",
    coverImg: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
    tags: ["Music", "Sleep", "Peace"],
    status: "reserved",
    summary: {
      ko: "세계 여러 문화권의 엄마들이 아이에게 불러주는 아름다운 자장가를 그림과 멜로디로 담다.",
      en: "A soothing collection of traditional lullabies sung by mothers across different continents.",
      vi: "Bộ sưu tập những điệu hát ru dịu êm của các bà mẹ từ khắp nơi trên thế giới.",
      zh: "汇聚五大洲母亲深情款款抚慰婴儿入睡的温馨摇篮曲绘本。"
    },
    excerpt: {
      ko: "언어는 달라도 엄마의 야상곡은 언제나 아이의 꿈속을 편안하게 지켜줍니다.",
      en: "Though languages differ, a mother's sweet lullaby guides her child into peaceful dreams."
    }
  },
  {
    id: "b12",
    category: "warm",
    country: "Philippines",
    countryBadge: "TAGALOG",
    title: {
      ko: "따뜻한 손길의 온기",
      en: "The Warmth of Togetherness",
      vi: "Hơi ấm của Sự đoàn kết",
      zh: "手拉手的温情"
    },
    author: "Maria Santos",
    coverBg: "linear-gradient(135deg, #14b8a6, #2dd4bf)",
    coverImg: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=600&q=80",
    tags: ["Community", "Love", "Sharing"],
    status: "available",
    summary: {
      ko: "이웃 마을 사람들이 함께 음식을 나누고 어려움을 헤쳐나가는 따뜻한 커뮤니티 동화.",
      en: "A heartening community story about sharing home-cooked meals and helping neighbors.",
      vi: "Câu chuyện làng quê ấm áp về sự chia sẻ và đùm bọc lẫn nhau trong cộng đồng.",
      zh: "邻里之间相濡以沫、分享佳肴并携手度过易事难关的真情社区物语。"
    },
    excerpt: {
      ko: "작은 빵 한 조각을 나누며 피어나는 웃음꽃은 온 마을을 밝혀주었습니다.",
      en: "Sharing a small loaf of fresh bread filled the whole village with bright laughter."
    }
  }
];

// --- 3. Three.js 3D Globe & Book Galaxy Engine ---
let scene, camera, renderer;
let globeGroup, starField, bookMeshGroup;
let booksMeshes = [];
let raycaster, mouse;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let targetRotationY = 0;
let targetRotationX = 0;
let selectedBookForReserve = null;

function initThreeGlobe() {
  const container = document.getElementById('three-globe-container');
  if (!container) return;

  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  // Scene
  scene = new THREE.Scene();

  // Camera
  camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  camera.position.set(0, 2, 22);

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xfacc15, 1.4);
  sunLight.position.set(20, 20, 20);
  scene.add(sunLight);

  const blueLight = new THREE.PointLight(0x6366f1, 2.5, 50);
  blueLight.position.set(-15, -10, -10);
  scene.add(blueLight);

  // Globe Group
  globeGroup = new THREE.Group();
  scene.add(globeGroup);

  // Globe Sphere Geometry
  const globeGeo = new THREE.SphereGeometry(6, 64, 64);

  // Procedural Canvas Texture for Globe Landmasses
  const globeCanvas = createGlobeCanvasTexture();
  const globeTexture = new THREE.CanvasTexture(globeCanvas);

  const globeMat = new THREE.MeshStandardMaterial({
    map: globeTexture,
    roughness: 0.5,
    metalness: 0.1,
    emissive: 0x1e1b4b,
    emissiveIntensity: 0.25
  });

  const globeMesh = new THREE.Mesh(globeGeo, globeMat);
  globeGroup.add(globeMesh);

  // Tech Wireframe Overlay
  const wireframeMat = new THREE.MeshBasicMaterial({
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.08
  });
  const wireframeMesh = new THREE.Mesh(globeGeo, wireframeMat);
  globeGroup.add(wireframeMesh);

  // Atmosphere Glow Mesh
  const atmosphereGeo = new THREE.SphereGeometry(6.3, 64, 64);
  const atmosphereMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0.15
  });
  const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
  globeGroup.add(atmosphereMesh);

  // Starfield Particles
  createStarfield();

  // Orbiting 3D Book Nodes
  bookMeshGroup = new THREE.Group();
  scene.add(bookMeshGroup);
  createOrbitingBooks();

  // Raycaster & Mouse setup
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // Controls Event Listeners
  const canvas = renderer.domElement;
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('click', onCanvasClick);
  canvas.addEventListener('touchstart', onTouchStart, { passive: true });
  canvas.addEventListener('touchmove', onTouchMove, { passive: true });

  window.addEventListener('resize', onWindowResize);

  // Start Animation Loop
  animateThree();
}

// Procedural Globe Map Texture Generator
function createGlobeCanvasTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Ocean dark blue background
  ctx.fillStyle = '#0c1324';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Grid lines
  ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
  ctx.lineWidth = 1;
  for (let x = 0; x < canvas.width; x += 64) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += 64) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Draw Glowing Landmass Dots (Asia, Europe, Africa, Americas)
  ctx.fillStyle = '#facc15';
  const continents = [
    // Asia / Korea / China / Vietnam
    { cx: 750, cy: 180, r: 80 },
    { cx: 780, cy: 220, r: 60 },
    { cx: 820, cy: 250, r: 50 },
    // Europe
    { cx: 520, cy: 150, r: 55 },
    // Africa
    { cx: 530, cy: 260, r: 75 },
    // Americas
    { cx: 280, cy: 180, r: 85 },
    { cx: 340, cy: 320, r: 70 }
  ];

  continents.forEach(c => {
    for (let i = 0; i < 200; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * c.r;
      const px = c.cx + Math.cos(angle) * dist;
      const py = c.cy + Math.sin(angle) * dist;
      const dotSize = Math.random() * 3 + 1;

      ctx.fillStyle = Math.random() > 0.3 ? 'rgba(250, 204, 21, 0.8)' : 'rgba(139, 92, 246, 0.9)';
      ctx.beginPath();
      ctx.arc(px, py, dotSize, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // Highlight Pins for Key Multicultural Regions
  const pins = [
    { x: 800, y: 170, label: "Korea" },
    { x: 740, y: 190, label: "China" },
    { x: 770, y: 240, label: "Vietnam" },
    { x: 530, y: 270, label: "Africa" }
  ];

  pins.forEach(p => {
    ctx.fillStyle = '#6366f1';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  return canvas;
}

// Create Starfield Particles
function createStarfield() {
  const count = 1200;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 120;
    positions[i + 1] = (Math.random() - 0.5) * 120;
    positions[i + 2] = (Math.random() - 0.5) * 120;

    // Soft violet/gold/white stars
    colors[i] = Math.random() > 0.5 ? 0.98 : 0.6;
    colors[i + 1] = Math.random() > 0.5 ? 0.8 : 0.6;
    colors[i + 2] = 1.0;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.45,
    vertexColors: true,
    transparent: true,
    opacity: 0.8
  });

  starField = new THREE.Points(geometry, material);
  scene.add(starField);
}

// Create Orbiting 3D Book Meshes
function createOrbitingBooks() {
  booksMeshes = [];
  const radius = 9.5;
  const total = booksData.length;

  booksData.forEach((bookData, index) => {
    const bookGroup = new THREE.Group();

    // Book Cover Mesh Geometry (Thin Box)
    const bookGeo = new THREE.BoxGeometry(1.2, 1.7, 0.25);

    // Canvas Texture for Book Cover Title
    const coverCanvas = document.createElement('canvas');
    coverCanvas.width = 256;
    coverCanvas.height = 360;
    const ctx = coverCanvas.getContext('2d');

    ctx.fillStyle = index % 2 === 0 ? '#1e1b4b' : '#311042';
    ctx.fillRect(0, 0, 256, 360);

    // Border
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, 236, 340);

    // Title Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(bookData.countryBadge, 128, 60);

    ctx.fillStyle = '#facc15';
    ctx.font = 'bold 24px serif';

    // Wrap Title
    const titleText = bookData.title.ko;
    ctx.fillText(titleText.substring(0, 8), 128, 160);
    if (titleText.length > 8) {
      ctx.fillText(titleText.substring(8, 16), 128, 200);
    }

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px sans-serif';
    ctx.fillText(bookData.author, 128, 300);

    const texture = new THREE.CanvasTexture(coverCanvas);

    const bookMat = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.3,
      metalness: 0.2,
      emissive: 0x6366f1,
      emissiveIntensity: 0.15
    });

    const mesh = new THREE.Mesh(bookGeo, bookMat);
    bookGroup.add(mesh);

    // Spherical Orbit Positioning
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;

    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = (Math.random() - 0.5) * 4;
    const z = radius * Math.sin(theta) * Math.sin(phi);

    bookGroup.position.set(x, y, z);
    bookGroup.rotation.y = Math.random() * Math.PI * 2;
    bookGroup.rotation.z = (Math.random() - 0.5) * 0.5;

    // Custom Orbit Properties
    bookGroup.userData = {
      bookData: bookData,
      orbitAngle: theta,
      orbitSpeed: 0.003 + (index % 3) * 0.001,
      orbitRadius: Math.sqrt(x * x + z * z),
      baseY: y,
      originalScale: new THREE.Vector3(1, 1, 1)
    };

    bookMeshGroup.add(bookGroup);
    booksMeshes.push(mesh);
  });
}

// Controls Logic
function onMouseDown(e) {
  isDragging = true;
  previousMousePosition = { x: e.clientX, y: e.clientY };
}

function onMouseMove(e) {
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

  if (isDragging) {
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;

    targetRotationY += deltaX * 0.005;
    targetRotationX += deltaY * 0.005;

    previousMousePosition = { x: e.clientX, y: e.clientY };
  }

  // Hover detection
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(booksMeshes);

  if (intersects.length > 0) {
    document.body.style.cursor = 'pointer';
    const hoveredMesh = intersects[0].object;
    hoveredMesh.material.emissiveIntensity = 0.6;
    hoveredMesh.parent.scale.set(1.25, 1.25, 1.25);
  } else {
    document.body.style.cursor = 'default';
    booksMeshes.forEach(mesh => {
      mesh.material.emissiveIntensity = 0.15;
      mesh.parent.scale.set(1, 1, 1);
    });
  }
}

function onMouseUp() {
  isDragging = false;
}

function onTouchStart(e) {
  if (e.touches.length === 1) {
    isDragging = true;
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
}

function onTouchMove(e) {
  if (isDragging && e.touches.length === 1) {
    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.y;

    targetRotationY += deltaX * 0.005;
    targetRotationX += deltaY * 0.005;

    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }
}

// Click on Orbiting Book -> Camera Zoom-in & Open Modal
function onCanvasClick(e) {
  if (Math.abs(e.clientX - previousMousePosition.x) > 5) return; // Ignore drag clicks

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(booksMeshes);

  if (intersects.length > 0) {
    const clickedMesh = intersects[0].object;
    const bookData = clickedMesh.parent.userData.bookData;
    const targetPos = clickedMesh.parent.position;

    // Smooth Camera Lerp Zoom-in Animation
    zoomCameraToTarget(targetPos, () => {
      openBookPreviewModal(bookData.id);
    });
  }
}

function zoomCameraToTarget(targetVec, callback) {
  const startCamPos = camera.position.clone();
  const targetCamPos = targetVec.clone().normalize().multiplyScalar(14);
  targetCamPos.y += 1.5;

  let progress = 0;
  function animateZoom() {
    progress += 0.04;
    camera.position.lerpVectors(startCamPos, targetCamPos, progress);
    camera.lookAt(targetVec);

    if (progress < 1) {
      requestAnimationFrame(animateZoom);
    } else {
      if (callback) callback();
      // Reset camera smoothly back
      setTimeout(() => {
        resetCameraPosition();
      }, 1500);
    }
  }
  animateZoom();
}

function resetCameraPosition() {
  const startPos = camera.position.clone();
  const defaultPos = new THREE.Vector3(0, 2, 22);
  let p = 0;
  function animateReset() {
    p += 0.03;
    camera.position.lerpVectors(startPos, defaultPos, p);
    camera.lookAt(0, 0, 0);
    if (p < 1) requestAnimationFrame(animateReset);
  }
  animateReset();
}

function onWindowResize() {
  const container = document.getElementById('three-globe-container');
  if (!container || !renderer || !camera) return;

  const w = container.clientWidth || window.innerWidth;
  const h = container.clientHeight || window.innerHeight;

  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

// Main Three.js Render Animation Loop
function animateThree() {
  requestAnimationFrame(animateThree);

  // Globe rotation with smooth interpolation
  if (globeGroup) {
    globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.05 + 0.0015;
    globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.05;
  }

  // Starfield gentle rotation
  if (starField) {
    starField.rotation.y -= 0.0003;
  }

  // Orbiting Books animation
  if (bookMeshGroup) {
    bookMeshGroup.children.forEach(bookGroup => {
      const uData = bookGroup.userData;
      uData.orbitAngle += uData.orbitSpeed;

      bookGroup.position.x = Math.cos(uData.orbitAngle) * uData.orbitRadius;
      bookGroup.position.z = Math.sin(uData.orbitAngle) * uData.orbitRadius;
      bookGroup.position.y = uData.baseY + Math.sin(Date.now() * 0.0015 + uData.orbitAngle) * 0.5;

      bookGroup.rotation.y += 0.01;
      bookGroup.rotation.x += 0.005;
    });
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

// --- 4. DOM Rendering & Curation Cards Engine ---
function renderBookCards(filterQuery = "") {
  const query = filterQuery.toLowerCase().trim();

  const cultureContainer = document.getElementById('track-culture-container');
  const dualContainer = document.getElementById('grid-dual-container');
  const warmContainer = document.getElementById('grid-warm-container');

  if (!cultureContainer || !dualContainer || !warmContainer) return;

  // Clear existing items
  cultureContainer.innerHTML = '';
  dualContainer.innerHTML = '';
  warmContainer.innerHTML = '';

  booksData.forEach(book => {
    const localizedTitle = book.title[currentLang] || book.title.ko;
    const localizedSummary = book.summary[currentLang] || book.summary.ko;
    const isMatched = query === "" || 
      localizedTitle.toLowerCase().includes(query) || 
      book.author.toLowerCase().includes(query) || 
      book.country.toLowerCase().includes(query);

    if (!isMatched) return;

    if (book.category === 'culture') {
      cultureContainer.appendChild(createCultureCard(book, localizedTitle));
    } else if (book.category === 'dual') {
      dualContainer.appendChild(createDualCard(book, localizedTitle));
    } else if (book.category === 'warm') {
      warmContainer.appendChild(createWarmCard(book, localizedTitle));
    }
  });

  // If no items in category, append empty state
  checkEmptyState(cultureContainer, 'culture');
  checkEmptyState(dualContainer, 'dual');
  checkEmptyState(warmContainer, 'warm');
}

function createCultureCard(book, localizedTitle) {
  const card = document.createElement('div');
  card.className = 'min-w-[280px] max-w-[280px] glass-panel rounded-2xl p-4 snap-start group cursor-pointer flex flex-col h-[410px] transform hover:-translate-y-2 transition-all duration-300';
  card.innerHTML = `
    <div class="relative h-[230px] w-full rounded-xl overflow-hidden mb-4 shadow-lg">
      <img src="${book.coverImg}" alt="${localizedTitle}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
      <div class="absolute top-2 right-2 px-2.5 py-1 bg-surface-dim/80 backdrop-blur-md rounded-full text-[10px] font-bold text-surface-tint border border-surface-tint/30 uppercase tracking-wider">
        ${book.countryBadge}
      </div>
    </div>
    <div class="flex-grow flex flex-col justify-between">
      <div>
        <h4 class="font-headline text-[18px] font-bold text-on-surface line-clamp-2 leading-tight group-hover:text-surface-tint transition-colors">${localizedTitle}</h4>
        <p class="text-xs text-on-surface-variant mt-1 font-medium">${book.author}</p>
      </div>
      <div class="flex items-center justify-between mt-4 border-t border-outline-variant/20 pt-3">
        <span class="text-xs ${book.status === 'available' ? 'text-emerald-400' : 'text-amber-400'} font-medium">
          ${book.status === 'available' ? translations[currentLang].status_available : translations[currentLang].status_reserved}
        </span>
        <div class="flex gap-2">
          <button onclick="openBookPreviewModal('${book.id}')" class="px-2.5 py-1 text-xs rounded-full bg-surface-container-high hover:bg-surface-tint hover:text-on-primary transition-colors">
            ${translations[currentLang].btn_preview}
          </button>
          <button onclick="openReservationModal('${book.id}')" class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-110 transition-transform shadow-md">
            <span class="material-symbols-outlined text-[16px]">bookmark_add</span>
          </button>
        </div>
      </div>
    </div>
  `;
  return card;
}

function createDualCard(book, localizedTitle) {
  const card = document.createElement('div');
  card.className = 'glass-panel rounded-2xl p-4 flex gap-4 hover:bg-surface-container-highest transition-all duration-300 cursor-pointer group border border-outline-variant/20 shadow-md';
  card.innerHTML = `
    <div class="w-24 h-32 shrink-0 rounded-xl overflow-hidden relative shadow-md">
      <img src="${book.coverImg}" alt="${localizedTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
      <span class="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/70 backdrop-blur-sm rounded text-[9px] font-bold text-yellow-300">${book.countryBadge}</span>
    </div>
    <div class="flex flex-col justify-between flex-grow">
      <div>
        <div class="flex gap-1.5 mb-1.5">
          ${book.tags.map(t => `<span class="text-[10px] font-semibold text-surface-tint bg-surface-tint/10 px-2 py-0.5 rounded-md border border-surface-tint/20">${t}</span>`).join('')}
        </div>
        <h4 class="font-bold text-base text-on-surface mb-1 group-hover:text-surface-tint transition-colors line-clamp-1">${localizedTitle}</h4>
        <p class="text-xs text-on-surface-variant line-clamp-2">${book.summary[currentLang] || book.summary.ko}</p>
      </div>
      <div class="flex justify-between items-center mt-2">
        <button onclick="openBookPreviewModal('${book.id}')" class="text-xs font-semibold text-surface-tint hover:underline flex items-center gap-1">
          ${translations[currentLang].btn_preview} <span class="material-symbols-outlined text-[14px]">auto_stories</span>
        </button>
        <button onclick="openReservationModal('${book.id}')" class="px-3 py-1 text-xs rounded-full bg-primary text-on-primary font-medium hover:bg-primary-fixed-dim transition-colors">
          ${translations[currentLang].btn_reserve}
        </button>
      </div>
    </div>
  `;
  return card;
}

function createWarmCard(book, localizedTitle) {
  const card = document.createElement('div');
  card.className = 'glass-panel rounded-2xl p-5 flex flex-col justify-between hover:bg-surface-container-highest transition-all duration-300 cursor-pointer group border border-outline-variant/20 shadow-md h-[260px]';
  card.innerHTML = `
    <div>
      <div class="flex justify-between items-start mb-3">
        <span class="text-xs font-bold text-surface-tint uppercase tracking-widest bg-surface-tint/10 px-2.5 py-1 rounded-full border border-surface-tint/20">${book.countryBadge}</span>
        <span class="text-xs ${book.status === 'available' ? 'text-emerald-400' : 'text-amber-400'} font-medium">
          ${book.status === 'available' ? translations[currentLang].status_available : translations[currentLang].status_reserved}
        </span>
      </div>
      <h4 class="font-headline text-xl font-bold text-on-surface mb-2 group-hover:text-surface-tint transition-colors line-clamp-1">${localizedTitle}</h4>
      <p class="text-xs text-on-surface-variant italic mb-3 font-serif">"${book.excerpt[currentLang] || book.excerpt.ko}"</p>
      <p class="text-xs text-on-surface-variant/80 line-clamp-2">${book.summary[currentLang] || book.summary.ko}</p>
    </div>
    <div class="flex justify-between items-center border-t border-outline-variant/20 pt-3 mt-2">
      <span class="text-xs text-on-surface-variant font-medium">${book.author}</span>
      <div class="flex gap-2">
        <button onclick="openBookPreviewModal('${book.id}')" class="p-2 rounded-full bg-surface-container-high text-on-surface hover:text-surface-tint transition-colors">
          <span class="material-symbols-outlined text-[18px]">visibility</span>
        </button>
        <button onclick="openReservationModal('${book.id}')" class="px-4 py-1.5 text-xs rounded-full bg-primary text-on-primary font-semibold hover:scale-105 transition-transform shadow-md">
          ${translations[currentLang].btn_reserve}
        </button>
      </div>
    </div>
  `;
  return card;
}

function checkEmptyState(container, categoryName) {
  if (container.children.length === 0) {
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'col-span-full py-12 text-center text-on-surface-variant';
    emptyDiv.innerHTML = `
      <span class="material-symbols-outlined text-4xl mb-2 text-surface-tint/50">search_off</span>
      <p class="text-sm">일치하는 도서 검색 결과가 없습니다.</p>
    `;
    container.appendChild(emptyDiv);
  }
}

// --- 5. i18n Language Switcher Engine ---
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  // Update active language selector pills
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('bg-surface-tint', 'text-on-primary', 'font-bold');
      btn.classList.remove('text-on-surface-variant');
    } else {
      btn.classList.remove('bg-surface-tint', 'text-on-primary', 'font-bold');
      btn.classList.add('text-on-surface-variant');
    }
  });

  // Update all DOM elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' && el.placeholder) {
        el.placeholder = translations[lang][key];
      } else {
        el.innerText = translations[lang][key];
      }
    }
  });

  // Re-render book cards with localized language text
  const searchInput = document.getElementById('search-input');
  renderBookCards(searchInput ? searchInput.value : "");
}

// --- 6. Modal Engine & Interactive 3D Book Flip ---
function openBookPreviewModal(bookId) {
  const book = booksData.find(b => b.id === bookId);
  if (!book) return;

  selectedBookForReserve = book;

  const modal = document.getElementById('book-preview-modal');
  const modalContent = document.getElementById('preview-modal-content');
  if (!modal || !modalContent) return;

  const localizedTitle = book.title[currentLang] || book.title.ko;
  const localizedSummary = book.summary[currentLang] || book.summary.ko;
  const localizedExcerpt = book.excerpt[currentLang] || book.excerpt.ko;

  modalContent.innerHTML = `
    <div class="flex flex-col md:flex-row gap-8 items-center">
      <!-- 3D Book Flip Object -->
      <div class="book-3d-wrapper shrink-0 my-4">
        <div id="interactive-3d-book" class="book-3d" onclick="this.classList.toggle('open')">
          <div class="book-cover-front" style="background-image: url('${book.coverImg}');">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 p-4 flex flex-col justify-between rounded-r-xl">
              <span class="px-2 py-0.5 bg-yellow-400 text-black text-[10px] font-bold rounded self-start">${book.countryBadge}</span>
              <div>
                <p class="text-yellow-300 font-headline font-bold text-sm leading-tight">${localizedTitle}</p>
                <p class="text-white/80 text-[10px] mt-1">${book.author}</p>
              </div>
            </div>
          </div>
          <div class="book-spine"></div>
          <div class="book-pages-stack">
            <div class="book-inner-page">
              <p class="font-bold text-purple-900 mb-2 border-b pb-1">📖 대표 구절 (Excerpt)</p>
              <p class="italic text-slate-700 leading-relaxed mb-4">"${localizedExcerpt}"</p>
              <p class="font-bold text-purple-900 mb-1">🏷️ Curation</p>
              <p class="text-slate-600 text-[10px]">${book.tags.join(' • ')}</p>
              <div class="mt-8 text-center text-[10px] text-purple-600">
                (터치하여 책을 접거나 펴보세요)
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Book Details Text -->
      <div class="flex-grow space-y-4 text-left">
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-full bg-surface-tint/20 text-surface-tint text-xs font-bold border border-surface-tint/30">${book.country}</span>
          <span class="text-xs text-on-surface-variant font-medium">${book.category.toUpperCase()}</span>
        </div>

        <h3 class="font-headline text-2xl md:text-3xl font-bold text-on-surface">${localizedTitle}</h3>
        <p class="text-sm text-surface-tint font-medium">저자 / Author: ${book.author}</p>

        <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-sm text-on-surface-variant leading-relaxed">
          ${localizedSummary}
        </div>

        <div class="p-3 rounded-xl bg-tertiary-container/10 border border-tertiary-container/30 text-xs text-tertiary-fixed-dim">
          💬 <span class="font-semibold">이중언어 포인트:</span> 한글 원문 및 원어 발음 팝업 지원 도서입니다.
        </div>

        <div class="flex gap-4 pt-2">
          <button onclick="openReservationModal('${book.id}')" class="flex-grow py-3 rounded-full bg-primary text-on-primary font-bold text-sm hover:bg-primary-fixed-dim transition-all shadow-lg flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[18px]">bookmark_add</span>
            ${translations[currentLang].btn_reserve}
          </button>
          <button onclick="closeBookPreviewModal()" class="px-6 py-3 rounded-full glass-panel text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors">
            ${translations[currentLang].btn_close}
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeBookPreviewModal() {
  const modal = document.getElementById('book-preview-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function openReservationModal(bookId) {
  closeBookPreviewModal();
  const book = booksData.find(b => b.id === bookId) || selectedBookForReserve;
  if (!book) return;

  selectedBookForReserve = book;

  const modal = document.getElementById('reservation-modal');
  const targetTitle = document.getElementById('reserve-book-title');
  if (targetTitle) {
    targetTitle.innerText = book.title[currentLang] || book.title.ko;
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeReservationModal() {
  const modal = document.getElementById('reservation-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleReservationSubmit(e) {
  e.preventDefault();
  const memberInput = document.getElementById('member-id-input');
  const memberId = memberInput ? memberInput.value : "M-2026";

  closeReservationModal();

  // Show Toast
  showToast(translations[currentLang].toast_reserve_success + ` (${memberId})`);
}

// Toast Notification Controller
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'glass-modal px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 text-surface-tint border border-surface-tint/50 toast-enter';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-2xl text-emerald-400">check_circle</span>
    <span class="font-medium text-sm text-on-surface">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('toast-enter');
    toast.classList.add('toast-show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('toast-show');
    toast.classList.add('toast-exit');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// --- 7. Initialization & Event Bindings ---
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Three.js Globe Hero
  initThreeGlobe();

  // Initial Book Cards Render
  renderBookCards();

  // Search Input Bindings
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderBookCards(e.target.value);
    });
  }

  const mobileSearchInput = document.getElementById('mobile-search-input');
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
      renderBookCards(e.target.value);
    });
  }

  // Reservation Form Submit Binding
  const reserveForm = document.getElementById('reservation-form');
  if (reserveForm) {
    reserveForm.addEventListener('submit', handleReservationSubmit);
  }

  // Navbar Scroll Blur Effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('shadow-xl', 'bg-surface-dim/90');
    } else {
      header.classList.remove('shadow-xl', 'bg-surface-dim/90');
    }
  });
});
