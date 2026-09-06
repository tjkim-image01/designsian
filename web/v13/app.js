/* ==========================================================================
   CHRONOS STEAMPUNK MULTICULTURAL LIBRARY PORTAL (v13) - APP ENGINE
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. CATALOG DATA (12 Multicultural Books across KO, EN, VI, ZH, DE)
     -------------------------------------------------------------------------- */
  const BOOKS_CATALOG = [
    {
      id: 'book-1',
      title: 'The Great Gatsby (Leatherbound Brass Spec)',
      title_i18n: {
        KO: '위대한 개츠비 (황동 금박 앤틱 양장본)',
        EN: 'The Great Gatsby (Leatherbound Brass Spec)',
        VI: 'Gatsby Vĩ Đại (Bản bọc da mạ đồng)',
        ZH: '了不起的盖茨比 (黄铜精装版)',
        DE: 'Der große Gatsby (Lederband Messing Edition)'
      },
      author: 'F. Scott Fitzgerald',
      publisher: 'CHRONOS Classics',
      isbn: '978-89-1234-567-8',
      kdc: '843',
      kdcName: '800 문학 (Literature)',
      language: 'EN',
      age: 'ADULT',
      price: 35000,
      discountPrice: 31500,
      year: 2026,
      coverColor: '#2b1e17',
      accentColor: '#d4af37',
      rating: 4.9,
      excerpt: {
        KO: '그는 거대한 저택의 황동 발코니에 서서 건너편 초록색 불빛을 바라보았다. 그 불빛은 시계태엽 장치처럼 끊임없이 깜빡이고 있었다.',
        EN: 'He stood on the brass balcony of his mansion, gazing at the green light across the bay that flickered like clockwork mechanism.',
        VI: 'Anh đứng trên ban công mạ đồng của dinh thự, nhìn ánh sáng xanh bên kia vịnh nhấp nháy như bộ máy đồng hồ.',
        ZH: '他站在大宅的黄铜阳台上，凝望着海湾对面像发条机构一样闪烁的绿色灯光。',
        DE: 'Er stand auf dem Messingbalkon seines Anwesens und blickte auf das grüne Licht auf der anderen Seite der Bucht, das wie ein Uhrwerk flackerte.'
      }
    },
    {
      id: 'book-2',
      title: '삼국지 (三國志) 앤틱 10권 완역 세트',
      title_i18n: {
        KO: '삼국지 (三國志) 앤틱 10권 완역 세트',
        EN: 'Romance of the Three Kingdoms (10-Vol Set)',
        VI: 'Tam Quốc Diễn Nghĩa (Bộ 10 tập cổ điển)',
        ZH: '三国演义 (十卷全译古细精装全集)',
        DE: 'Die Geschichte der Drei Reiche (10 Bände)'
      },
      author: '나관중 (羅貫中)',
      publisher: '동양고전아카이브',
      isbn: '978-89-9876-543-2',
      kdc: '823',
      kdcName: '800 문학 / 동양문학',
      language: 'ZH',
      age: 'ADULT',
      price: 180000,
      discountPrice: 162000,
      year: 2025,
      coverColor: '#3a1717',
      accentColor: '#e5c158',
      rating: 5.0,
      excerpt: {
        KO: '천하의 대세는 오래 나누어지면 반드시 합하게 되고, 오래 합쳐져 있으면 반드시 나누어지게 된다.',
        EN: 'The empire, long divided, must unite; long united, must divide. Such is the way of the universe under heaven.',
        VI: 'Thế lớn trong thiên hạ, phân lâu ắt hợp, hợp lâu ắt phân.',
        ZH: '话说天下大势，分久必合，合久必分。',
        DE: 'Es ist ein altes Gesetz: Was lange getrennt war, muss sich vereinen; was lange vereint war, muss sich trennen.'
      }
    },
    {
      id: 'book-3',
      title: 'Truyện Kiều - Nguyễn Du (베트남 림 앤틱 양장)',
      title_i18n: {
        KO: '도안 두의 키우전 (Truyện Kiều) 이중언어 앤틱본',
        EN: 'The Tale of Kieu - Nguyen Du (Bilingual Classic)',
        VI: 'Truyện Kiều - Nguyễn Du (Bản bọc da cổ điển)',
        ZH: '金云翘传 (阮攸 越南古典名著中越双语)',
        DE: 'Das Epos von Kieu (Vietnamesischer Klassiker)'
      },
      author: 'Nguyễn Du (응우옌 두)',
      publisher: '하노이 문학출판사',
      isbn: '978-60-4987-112-3',
      kdc: '890',
      kdcName: '800 문학 / 동남아문학',
      language: 'VI',
      age: 'YOUTH',
      price: 28000,
      discountPrice: 25200,
      year: 2026,
      coverColor: '#1d3326',
      accentColor: '#d4af37',
      rating: 4.8,
      excerpt: {
        KO: '백 년의 인간 세상에 재능과 운명은 서로 시기하기 마련이다. 오동나무 잎에 가을비 소리 내릴 때 키우의 아픔은 짙어졌다.',
        EN: 'A hundred years in the realm of men, talent and fate are ever at odds. The rain falls gently on the parasol trees.',
        VI: 'Trăm năm trong cõi người ta, Chữ tài chữ mệnh khéo là ghét nhau. Trải qua một cuộc bể dâu, Những điều trông thấy mà đau đớn lòng.',
        ZH: '百年人世间，才华与命运常常相嫉。',
        DE: 'Hundert Jahre im Reich der Menschen: Talent und Schicksal stehen sich ewig im Wege.'
      }
    },
    {
      id: 'book-4',
      title: 'Faust (Johann Wolfgang von Goethe - Gold Spec)',
      title_i18n: {
        KO: '파우스트 (괴테 앤틱 금속 래치 양장본)',
        EN: 'Faust (Johann Wolfgang von Goethe - Gold Spec)',
        VI: 'Faust - Goethe (Bản dịch chuẩn Đức)',
        ZH: '浮士德 (歌德 德国古典哲学剧作)',
        DE: 'Faust (Johann Wolfgang von Goethe - Goldpracht)'
      },
      author: 'Johann Wolfgang von Goethe',
      publisher: 'Weimar Brass Classics',
      isbn: '978-31-6148-410-0',
      kdc: '832',
      kdcName: '800 문학 / 독일문학',
      language: 'DE',
      age: 'ADULT',
      price: 42000,
      discountPrice: 37800,
      year: 2025,
      coverColor: '#1b1b26',
      accentColor: '#b87333',
      rating: 4.9,
      excerpt: {
        KO: '멈추어라, 너는 정말로 아름답구나! 내가 순간을 향해 말할 수 있다면, 나의 태엽 장치는 비로소 영원에 도달하리라.',
        EN: 'Verweile doch! Du bist so schön! If I to the moment might say, abide, you are so fair!',
        VI: 'Dừng lại đi! Bạn thật đẹp đẽ! Nếu tôi có thể nói với khoảnh khắc ấy...',
        ZH: '停一停吧！你真美丽！如果我能对这一瞬间说...',
        DE: 'Verweile doch! Du bist so schön! Es wird mein Spur von den Erdetagen nicht in Äonen untergehn.'
      }
    },
    {
      id: 'book-5',
      title: '세계 다문화 전래동화 100선 (5개국어 그림책)',
      title_i18n: {
        KO: '세계 다문화 전래동화 100선 (5개국어 그림책)',
        EN: 'World Multicultural Folktales (5-Lang Illustrated)',
        VI: '100 Truyện Cổ Tích Đa Văn Hóa Thế Giới',
        ZH: '世界多文化民间故事100选 (五语插图版)',
        DE: 'Multikulturelle Märchen der Welt (5 Sprachen)'
      },
      author: '다문화도서관 수서위원회',
      publisher: '시계태엽 아동 아카이브',
      isbn: '978-89-5544-321-0',
      kdc: '808',
      kdcName: '800 문학 / 아동전래',
      language: 'KO',
      age: 'CHILD',
      price: 45000,
      discountPrice: 40500,
      year: 2026,
      coverColor: '#362419',
      accentColor: '#f5d77f',
      rating: 5.0,
      excerpt: {
        KO: '옛날 옛적 먼 나라 황동 성채 아래에는 서로 다른 언어로 이야기하고 웃던 어여쁜 아이들이 살고 있었습니다.',
        EN: 'Once upon a time beneath the brass citadel of a distant land, children speaking different tongues lived and laughed together.',
        VI: 'Ngày xửa ngày xưa dưới tòa thành mạ đồng của một vùng đất xa xôi, những đứa trẻ nói nhiều ngôn ngữ khác nhau sống hòa thuận.',
        ZH: '很久很久以前，在远方黄铜城堡下，生活着讲着不同语言、相处融洽的字孩子们。',
        DE: 'Es war einmal vor langer Zeit unter den Messingzinnen einer fernen Burg, da lebten Kinder mit verschiedenen Sprachen.'
      }
    },
    {
      id: 'book-6',
      title: '동서양 해양 문명 교류사 (황동 지도 양장)',
      title_i18n: {
        KO: '동서양 해양 문명 교류사 (황동 지도 양장)',
        EN: 'History of East-West Maritime Civilizations',
        VI: 'Lịch Sử Giao Lưu Văn Minh Hàng Hải Đông Tây',
        ZH: '东西方海洋文明交流史 (黄铜地图装帧)',
        DE: 'Geschichte des Ost-West-Seeverkehrs'
      },
      author: '김해양 (博士)',
      publisher: '해양역사아카이브',
      isbn: '978-89-7711-209-1',
      kdc: '909',
      kdcName: '900 역사 / 세계사',
      language: 'KO',
      age: 'ADULT',
      price: 52000,
      discountPrice: 46800,
      year: 2026,
      coverColor: '#122638',
      accentColor: '#d4af37',
      rating: 4.7,
      excerpt: {
        KO: '16세기 나침반과 육분의, 시계태엽 항해기구가 바다를 건너 동양과 서양의 언어와 문화를 이어주었다.',
        EN: 'In the 16th century, compasses, sextants, and clockwork nautical tools crossed oceans to connect Eastern and Western cultures.',
        VI: 'Vào thế kỷ 16, la bàn và dụng cụ hàng hải đã vượt đại dương kết nối các nền văn hóa.',
        ZH: '16世纪，罗盘、分分仪与发条航海仪器跨越大洋，链接了东西方文化。',
        DE: 'Im 16. Jahrhundert verbanden Kompass und Uhrwerk-Navigationsinstrumente die Kulturen des Ostens und Westens.'
      }
    },
    {
      id: 'book-7',
      title: 'Le Petit Prince (The Little Prince - Bilingual)',
      title_i18n: {
        KO: '어린 왕자 (불어-영어 이중언어 양장본)',
        EN: 'Le Petit Prince (The Little Prince - Bilingual)',
        VI: 'Hoàng Tử Bé (Bản song ngữ Pháp-Anh)',
        ZH: '小王子 (法英双语精装插图版)',
        DE: 'Der kleine Prinz (Zweisprachig Französisch-Englisch)'
      },
      author: 'Antoine de Saint-Exupéry',
      publisher: 'Gallimard Clockwork',
      isbn: '978-20-7061-275-8',
      kdc: '863',
      kdcName: '800 문학 / 프랑스문학',
      language: 'EN',
      age: 'YOUTH',
      price: 24000,
      discountPrice: 21600,
      year: 2025,
      coverColor: '#2b233a',
      accentColor: '#e5c158',
      rating: 4.9,
      excerpt: {
        KO: '가장 중요한 것은 눈에 보이지 않아. 마음으로 보아야만 분명하게 볼 수 있단다. 장미를 위해 쏟은 시간이 네 장미를 그토록 귀하게 만든 거야.',
        EN: 'It is only with the heart that one can see rightly; what is essential is invisible to the eye.',
        VI: 'Người ta chỉ có thể nhìn thấy rõ ràng bằng trái tim; cái cốt lõi thì mắt thường không thấy được.',
        ZH: '本质的东西，用眼睛是看不见的，只有用心才能看得清。',
        DE: 'Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar.'
      }
    },
    {
      id: 'book-8',
      title: '손자병법 (孫子兵法) 무경칠서 앤틱 원문집',
      title_i18n: {
        KO: '손자병법 (孫子兵法) 무경칠서 앤틱 원문집',
        EN: 'The Art of War - Sun Tzu (Original Classic)',
        VI: 'Binh Pháp Tôn Tử (Bản cổ điển mạ đồng)',
        ZH: '孙子兵法 (武经七书古籍印本)',
        DE: 'Die Kunst des Krieges - Sun Zi'
      },
      author: '손무 (孫武)',
      publisher: '고전전략아카이브',
      isbn: '978-89-3010-998-1',
      kdc: '390',
      kdcName: '300 사회과학 / 군사학',
      language: 'ZH',
      age: 'ADULT',
      price: 32000,
      discountPrice: 28800,
      year: 2026,
      coverColor: '#301818',
      accentColor: '#cd7f32',
      rating: 4.8,
      excerpt: {
        KO: '지피지기면 백전불태라. 나를 알고 적을 알면 백 번 싸워도 위험하지 않다.',
        EN: 'Know the enemy and know yourself; in a hundred battles you will never be in peril.',
        VI: 'Biết người biết ta, trăm trận không nguy.',
        ZH: '知己知彼，百战不殆；不知彼而知己，一胜一负。',
        DE: 'Kenne den Feind und kenne dich selbst, und du wirst in hundert Schlachten nie in Gefahr geraten.'
      }
    },
    {
      id: 'book-9',
      title: 'Grimms Märchen - 그림 형제 동화 전집',
      title_i18n: {
        KO: '그림 형제 잔혹 동화 전집 (독일어 원전 양장)',
        EN: 'Grimms Fairy Tales (German Original Edition)',
        VI: 'Truyện Cổ Grimm (Bản gốc tiếng Đức)',
        ZH: '格林童话全集 (德语原著古籍版)',
        DE: 'Kinder- und Hausmärchen der Brüder Grimm'
      },
      author: 'Jacob & Wilhelm Grimm',
      publisher: 'Kassel Antiquariat',
      isbn: '978-34-5836-120-4',
      kdc: '833',
      kdcName: '800 문학 / 독일동화',
      language: 'DE',
      age: 'CHILD',
      price: 38000,
      discountPrice: 34200,
      year: 2025,
      coverColor: '#172419',
      accentColor: '#d4af37',
      rating: 4.9,
      excerpt: {
        KO: '깊은 숲속 작은 오두막의 시계태엽 장치가 12시를 알리자, 장미꽃은 황동빛으로 빛나기 시작했습니다.',
        EN: 'When the clockwork of the cabin deep in the forest struck midnight, the rose began to shine with golden brass light.',
        VI: 'Khi đồng hồ trong căn nhà gỗ sâu trong rừng điểm 12 giờ đêm, bông hoa hồng bắt đầu tỏa ánh sáng vàng mạ đồng.',
        ZH: '当深林小屋中的发条钟敲响十二响，玫瑰花开始绽放金黄色的光芒。',
        DE: 'Als das Uhrwerk der Hütte tief im Walde Mitternacht schlug, begann die Rose in goldenem Messinglicht zu erstrahlen.'
      }
    },
    {
      id: 'book-10',
      title: '베트남 현대 문학 거장 선집 (Bilingual)',
      title_i18n: {
        KO: '베트남 현대 문학 거장 선집 (한-베 이중언어)',
        EN: 'Anthology of Modern Vietnamese Literature',
        VI: 'Tuyển Tập Văn Học Hiện Đại Việt Nam',
        ZH: '越南现代文学大师选集 (越韩双语)',
        DE: 'Moderne vietnamesische Literatur'
      },
      author: '베트남작가협회',
      publisher: '다문화상생출판사',
      isbn: '978-89-9112-401-9',
      kdc: '890',
      kdcName: '800 문학 / 아시아문학',
      language: 'VI',
      age: 'ADULT',
      price: 30000,
      discountPrice: 27000,
      year: 2026,
      coverColor: '#2b1c20',
      accentColor: '#e5c158',
      rating: 4.6,
      excerpt: {
        KO: '메콩강의 붉은 노을 아래, 노인은 오랜 세월 전해져 내려온 황동 피리를 불며 고향의 노래를 나눴다.',
        EN: 'Under the red sunset of the Mekong River, the old man played a brass flute passed down through generations.',
        VI: 'Dưới hoàng hôn đỏ rực trên dòng sông Mê Kông, ông lão thổi chiếc sáo đồng truyền qua nhiều thế hệ.',
        ZH: '在湄公河的晚霞下，老者吹响了代代相传的黄铜笛子。',
        DE: 'Unter dem roten Sonnenuntergang des Mekong spielte der alte Mann eine Messingflöte, die über Generationen weitergegeben wurde.'
      }
    },
    {
      id: 'book-11',
      title: 'The Odyssey - Homer (Gold Leaf Brass Edition)',
      title_i18n: {
        KO: '오디세이아 - 호메로스 (서양 고전 서사시)',
        EN: 'The Odyssey - Homer (Gold Leaf Brass Edition)',
        VI: 'Odyssey - Homer (Bản thi ca cổ điển)',
        ZH: '奥德赛 - 荷马 (希腊史诗金箔精装版)',
        DE: 'Die Odyssee - Homer (Klassisches Epos)'
      },
      author: 'Homer (호메로스)',
      publisher: 'Athena Antique Press',
      isbn: '978-01-4026-886-7',
      kdc: '892',
      kdcName: '800 문학 / 희랍문학',
      language: 'EN',
      age: 'ADULT',
      price: 48000,
      discountPrice: 43200,
      year: 2025,
      coverColor: '#121e29',
      accentColor: '#d4af37',
      rating: 5.0,
      excerpt: {
        KO: '뮤즈여, 나에게 그 지혜롭고 파란만장했던 영웅의 이야기를 들려주소서. 그 정교한 태엽처럼 움직이던 운명의 바다를...',
        EN: 'Sing in me, Muse, and through me tell the story of that man skilled in all ways of contending...',
        VI: 'Hỡi Nữ thần Thơ ca, xin hãy kể cho tôi nghe câu chuyện về người anh hùng tài ba...',
        ZH: '缪斯啊，请为我歌唱那位足智多谋的英雄的故事...',
        DE: 'Singe mir, o Muse, von dem Manne, dem vielgewandten, der so vielfach umhergetrieben...'
      }
    },
    {
      id: 'book-12',
      title: '다문화 사서 수서 및 장서 개발 필수 가이드북',
      title_i18n: {
        KO: '다문화 사서 수서 및 장서 개발 필수 가이드북 2026',
        EN: 'Multicultural Library Collection Development Guide',
        VI: 'Hướng Dẫn Phát Triển Bộ Sưu Tập Thư Viện Đa Văn Hóa',
        ZH: '多文化图书馆采编与藏书建设指南 2026',
        DE: 'Handbuch für multikulturellen Bibliotheksaufbau'
      },
      author: '한국다문화도서관학회',
      publisher: 'CHRONOS 수서연구소',
      isbn: '978-89-0012-990-0',
      kdc: '025',
      kdcName: '000 총류 / 문헌정보학',
      language: 'KO',
      age: 'SENIOR',
      price: 30000,
      discountPrice: 27000,
      year: 2026,
      coverColor: '#2b291d',
      accentColor: '#b87333',
      rating: 4.9,
      excerpt: {
        KO: '전국 공공도서관 수서 담당 사서를 위한 KDC 분류 지침, 언어별 언어권 장서 비율, B2B 표준 견적서 작성법 안내.',
        EN: 'Essential guidelines for public librarians: KDC indexing rules, multi-language collection ratios, and B2B procurement standard workflow.',
        VI: 'Hướng dẫn thiết yếu dành cho thủ thư thư viện công cộng: quy tắc phân loại KDC, tỷ lệ bộ sưu tập đa ngôn ngữ.',
        ZH: '面向公共图书馆采编馆员的KDC分类指南、多语种藏书比例及B2B采购标准流程。',
        DE: 'Leitfaden für Bibliothekarinnen: KDC-Klassifizierung, mehrsprachige Bestandsquoten und B2B-Beschaffung.'
      }
    }
  ];

  /* --------------------------------------------------------------------------
     2. STEAMPUNK CURATION BUNDLES
     -------------------------------------------------------------------------- */
  const CURATION_PACKAGES = [
    {
      id: 'curation-1',
      title_i18n: {
        KO: '⚙️ 세계 문학 거장 양장본 20선 컬렉션',
        EN: '⚙️ World Literature Masterpieces (20-Vol)',
        VI: '⚙️ Bộ 20 Tác Phẩm Văn Học Kinh Điển Thế Giới',
        ZH: '⚙️ 世界文学巨匠精装20选特展',
        DE: '⚙️ Meisterwerke der Weltliteratur (20 Bände)'
      },
      tag: 'BEST B2B',
      desc_i18n: {
        KO: '피츠제럴드, 괴테, 호메로스 등 인류 문학사의 정수를 시계태엽 황동 양장본으로 수서하는 대표 서지 패키지.',
        EN: 'Curated library package featuring Fitzgerald, Goethe, Homer, and classic world literature bound in brass accent leather.'
      },
      bookIds: ['book-1', 'book-4', 'book-7', 'book-11'],
      totalBooks: 20,
      originalPrice: 700000,
      discountPrice: 595000 // 15% librarian bundle discount
    },
    {
      id: 'curation-2',
      title_i18n: {
        KO: '📜 동양과 서양의 역사 기록 및 사상 총서',
        EN: '📜 East & West Historical Chronicles & Thought',
        VI: '📜 Bộ Sử Liệu & Tư Tưởng Đông Tây',
        ZH: '📜 东西方历史记录与思想全书',
        DE: '📜 Ost-West Historische Chroniken & Philosophie'
      },
      tag: 'KDC 900/300',
      desc_i18n: {
        KO: '삼국지, 손자병법, 동서양 해양 문명 교류사 등 역사 및 군사 사상 문헌 통합 패키지.',
        EN: 'Comprehensive historical and strategic texts covering Romance of Three Kingdoms, Sun Tzu, and maritime history.'
      },
      bookIds: ['book-2', 'book-6', 'book-8'],
      totalBooks: 15,
      originalPrice: 480000,
      discountPrice: 408000
    },
    {
      id: 'curation-3',
      title_i18n: {
        KO: '🎨 다문화 아동 동화 & 전래동화 황동 컬렉션',
        EN: '🎨 Multicultural Children & Folklore Brass Collection',
        VI: '🎨 Bộ Truyện Cổ Tích & Thiếu Nhi Đa Văn Hóa',
        ZH: '🎨 多文化儿童绘本与民间故事黄铜集',
        DE: '🎨 Multikulturelle Kinder- & Märchensammlung'
      },
      tag: '5-LANG BILINGUAL',
      desc_i18n: {
        KO: '한국어, 베트남어, 중국어, 독일어, 영어 다국어 아동 도서 및 림 키우전, 그림 동화 전집 지원.',
        EN: 'Multilingual children books & folklore in Korean, Vietnamese, Chinese, German, and English for library kids zone.'
      },
      bookIds: ['book-3', 'book-5', 'book-9', 'book-10'],
      totalBooks: 12,
      originalPrice: 320000,
      discountPrice: 272000
    },
    {
      id: 'curation-4',
      title_i18n: {
        KO: '🏛️ 사서 실무 & 학술 고전 전문 연구 패키지',
        EN: '🏛️ Library Science & Academic Classics Pack',
        VI: '🏛️ Bộ Nghiên Cứu Thư Viện Học & Kinh Điển Học Thuật',
        ZH: '🏛️ 图书馆学与学术古典专业采编包',
        DE: '🏛️ Bibliothekswissenschaft & Akademische Klassiker'
      },
      tag: 'LIBRARIAN ESSENTIAL',
      desc_i18n: {
        KO: '2026 다문화 사서 수서 가이드북과 고전 분류 전산 자료를 포함한 전문 도서관 추천 세트.',
        EN: 'Professional set containing 2026 collection development guide and MARC indexing metadata guides.'
      },
      bookIds: ['book-12', 'book-6', 'book-4'],
      totalBooks: 8,
      originalPrice: 250000,
      discountPrice: 212500
    }
  ];

  /* --------------------------------------------------------------------------
     3. MULTI-LANGUAGE DICTIONARY (KO, EN, VI, ZH, DE)
     -------------------------------------------------------------------------- */
  const I18N_DICT = {
    KO: {
      brandTitle: 'CHRONOS',
      brandSub: '시계태엽 다문화 도서관 수서몰',
      navHome: '태엽 메인관',
      navSearch: '수서 검색관',
      navCuration: '황동 큐레이션',
      navCart: '공문 견적함',
      navDetail: '3D 서지 상세',
      heroBadge: '사서 수서 담당자 전용 B2B/B2C 수서 지원',
      heroTitle: '황동 시계태엽 메커니즘과\n고전 양장본 다문화 도서 아카이브',
      heroDesc: '전 세계 5개 국어(한국어, 영어, 베트남어, 중국어, 독일어) 고전 문학 및 다문화 전문 서지를 황동 톱니바퀴의 정교한 3D 메커니즘으로 탐색하고, 1-Click 공식 직인 견적서를 생성하세요.',
      heroBtnSearch: '수서 검색 시작하기',
      heroBtnCuration: '3D 큐레이션 기획전',
      scrollNotice: '3D Orrery 전시관 탐색',
      orreryTitle: '3D 메커니컬 오러리(Orrery) 도서 전시관',
      orrerySub: '시계 태엽 궤도를 따라 회전하는 다문화 핵심 도서를 3D로 선택하여 감상하세요.',
      orreryPause: '회전 일시정지/재생',
      newReleaseTitle: '2026 다문화 수서 신간 & 황동 아카이브',
      newReleaseSub: '클래식 대장본 텍스트 뷰와 황동 3D 카드 믹스로 제공되는 최신 다문화 수서 도서 목록',
      searchPageTitle: '앤틱 수서 통합 검색 및 KDC 분류 시스템',
      searchPageDesc: '도서관 사서를 위한 다국어, KDC 분류기호, ISBN, 연령대별 세부 검색 필터',
      searchPh: '도서명, 저자, 출판사, ISBN, KDC 분류기호 검색...',
      btnSearch: '검색',
      filterTitle: '정교 수서 필터',
      filterReset: '초기화',
      filterLang: '언어 (Language)',
      filterAge: '대상 연령 (Age Group)',
      filterKdc: 'KDC 한국십진분류표',
      filterPublisher: '출판사 (Publisher)',
      filterPubPh: '출판사명 입력...',
      filterIsbn: 'ISBN 번호',
      all: '전체',
      ageChild: '유아/아동 (Children)',
      ageYouth: '청소년 (Youth)',
      ageAdult: '성인/일반 (Adult)',
      ageSenior: '어르신/시니어 (Senior)',
      searchFound: '검색 결과',
      itemsUnit: '건',
      btnBulkCart: '선택 항목 일괄 담기',
      curationTitle: '황동 3D 스팀펑크 큐레이션 기획전',
      curationDesc: '다문화 도서관 특화 주제별 맞춤 수서 패키지! 사서 담당자가 원클릭으로 검증된 구성 도서를 한 번에 구입할 수 있습니다.',
      cartTitle: '도서관 수서 전용 공식 견적함',
      cartDesc: '선택한 수서 도서의 견적을 산출하고 공식 직인 공문 PDF/인쇄 및 엑셀(CSV) 자료로 발송하세요.',
      thBookInfo: '도서 정보',
      thLang: '언어/KDC',
      thPrice: '정가',
      thQty: '수량',
      thSubtotal: '합계',
      thAction: '삭제',
      btnClearCart: '전체 비우기',
      btnAddMore: '도서 추가 검색',
      summaryTitle: '수서 산출 내역',
      sumItems: '총 수서종수',
      sumQty: '총 수서권수',
      sumOriginal: '총 정가 합계',
      sumDiscount: '사서 납품 할인 (10%)',
      sumTax: '부가세 (VAT 면세)',
      sumFinal: '최종 납품 견적액',
      btnPdfQuote: '황동 직인 공문 견적서 생성',
      btnExcelExport: '수서 엑셀(CSV) 다운로드',
      backToSearch: '수서 목록으로 돌아가기',
      instruction3D: '마우스 드래그: 360도 입체 회전 | 클릭: 가죽 표지 열기/닫기',
      specIsbn: 'ISBN-13',
      specKdc: 'KDC 분류기호',
      specPubDate: '발행일',
      specBinding: '제본 형태',
      listPrice: '정가',
      b2bPrice: '사서 납품가 (10% 할인)',
      excerptTitle: '사서 수서 추천사 및 본문 앤틱 발췌문',
      btnTypewriter: '타자기 낭독 효과 재생',
      btnAddCart: '수서 견적함에 담기',
      btnShareSpec: '서지정보 공유',
      btnDetail: '3D 상세 보기',
      docTitle: '도서관 수서/구입 공식 공문 견적서',
      btnPrint: '즉시 인쇄 / PDF 저장',
      footerDesc: '시계태엽 황동 메커니즘 기반 5개국 다문화 사서 수서/구입 전문 포털 (v13)',
      footerSupport: '사서 지원 센터'
    },
    EN: {
      brandTitle: 'CHRONOS',
      brandSub: 'Clockwork Multicultural Library Portal',
      navHome: 'Main Hall',
      navSearch: 'Catalog Search',
      navCuration: 'Curations',
      navCart: 'Acquisition Cart',
      navDetail: '3D Inspector',
      heroBadge: 'B2B Procurement Support for Librarians',
      heroTitle: 'Brass Clockwork Mechanism &\nClassic Leatherbound Multicultural Archive',
      heroDesc: 'Explore 5-language classic literature and multicultural books powered by intricate 3D brass clockwork gears. Generate 1-Click official library quotes with brass seal.',
      heroBtnSearch: 'Start Catalog Search',
      heroBtnCuration: 'Explore 3D Curations',
      scrollNotice: 'Explore 3D Orrery Hall',
      orreryTitle: '3D Mechanical Orrery Book Exhibition',
      orrerySub: 'Select and view key multicultural titles orbiting on brass mechanical armatures.',
      orreryPause: 'Pause/Play Orbit',
      newReleaseTitle: '2026 Multicultural New Releases & Brass Archive',
      newReleaseSub: 'Hybrid mix of antique ledger list & active 3D brass-framed book cards.',
      searchPageTitle: 'Antique Acquisition Search & KDC Classification',
      searchPageDesc: 'Detailed multi-parameter search by language, KDC classification, ISBN, and target age.',
      searchPh: 'Search title, author, publisher, ISBN, KDC code...',
      btnSearch: 'Search',
      filterTitle: 'Acquisition Filters',
      filterReset: 'Reset',
      filterLang: 'Language',
      filterAge: 'Age Group',
      filterKdc: 'KDC Classification',
      filterPublisher: 'Publisher',
      filterPubPh: 'Type publisher name...',
      filterIsbn: 'ISBN Number',
      all: 'All',
      ageChild: 'Children',
      ageYouth: 'Youth',
      ageAdult: 'Adult',
      ageSenior: 'Senior',
      searchFound: 'Found Books',
      itemsUnit: 'items',
      btnBulkCart: 'Add Selected to Cart',
      curationTitle: 'Brass 3D Steampunk Curation Bundles',
      curationDesc: 'Pre-packaged collection bundles for multicultural libraries. Acquire complete topic sets in 1-Click.',
      cartTitle: 'Librarian Official Acquisition Cart',
      cartDesc: 'Calculate total procurement costs and export official stamped quotation PDF or Excel/CSV.',
      thBookInfo: 'Book Info',
      thLang: 'Lang / KDC',
      thPrice: 'Price',
      thQty: 'Qty',
      thSubtotal: 'Subtotal',
      thAction: 'Remove',
      btnClearCart: 'Clear All',
      btnAddMore: 'Add More Books',
      summaryTitle: 'Procurement Summary',
      sumItems: 'Total Titles',
      sumQty: 'Total Volume',
      sumOriginal: 'List Price Total',
      sumDiscount: 'Librarian Discount (10%)',
      sumTax: 'Tax (VAT Exempt)',
      sumFinal: 'Final Quotation Amount',
      btnPdfQuote: 'Generate Brass Sealed PDF Quote',
      btnExcelExport: 'Export Excel (CSV)',
      backToSearch: 'Back to Catalog Search',
      instruction3D: 'Drag: 360° Rotate | Click: Open/Close Cover',
      specIsbn: 'ISBN-13',
      specKdc: 'KDC Code',
      specPubDate: 'Release Date',
      specBinding: 'Binding Format',
      listPrice: 'List Price',
      b2bPrice: 'B2B Price (10% Off)',
      excerptTitle: 'Librarian Recommendation & Excerpt',
      btnTypewriter: 'Typewriter Audio Playback',
      btnAddCart: 'Add to Acquisition Cart',
      btnShareSpec: 'Share Metadata',
      btnDetail: 'View 3D Specs',
      docTitle: 'OFFICIAL MULTICULTURAL LIBRARY ACQUISITION QUOTATION',
      btnPrint: 'Print / Save as PDF',
      footerDesc: 'Steampunk Brass Clockwork B2B Multicultural Library Procurement Portal (v13)',
      footerSupport: 'Librarian Support Center'
    },
    VI: {
      brandTitle: 'CHRONOS',
      brandSub: 'Cổng Thư Viện Đa Văn Hóa Đồng Hồ',
      navHome: 'Sảnh Chính',
      navSearch: 'Tìm Kiếm Sách',
      navCuration: 'Bộ Sưu Tập',
      navCart: 'Giỏ Báo Giá',
      navDetail: 'Xem 3D Chi Tiết',
      heroBadge: 'Hỗ Trợ Thu Mua Cho Thủ Thư B2B',
      heroTitle: 'Bộ Máy Đồng Hồ Bằng Đồng &\nKho Sách Đa Văn Hóa Bọc Da Cổ Điển',
      heroDesc: 'Khám phá sách 5 ngôn ngữ với bộ máy 톱니바퀴 3D tinh xảo. Tạo báo giá chính thức có dấu mộc mạ đồng chỉ với 1-Click.',
      heroBtnSearch: 'Bắt Đầu Tìm Kiếm',
      heroBtnCuration: 'Khám Phá Bộ Sưu Tập',
      scrollNotice: 'Khám Phá Sảnh Orrery 3D',
      orreryTitle: 'Triển Lãm Sách Orrery 3D Cơ Khí',
      orrerySub: 'Chọn và thưởng thức các cuốn sách quay quanh quỹ đạo đồng hồ.',
      orreryPause: 'Tạm Dừng / Phát',
      newReleaseTitle: 'Sách Mới Đa Văn Hóa 2026 & Kho Mạ Đồng',
      newReleaseSub: 'Sự kết hợp giữa danh sách cổ điển & thẻ sách 3D mạ đồng.',
      searchPageTitle: 'Tìm Kiếm & Phân Loại KDC Cổ Điển',
      searchPageDesc: 'Lọc chi tiết theo ngôn ngữ, phân loại KDC, ISBN và độ tuổi.',
      searchPh: 'Tìm tên sách, tác giả, nhà xuất bản, ISBN, KDC...',
      btnSearch: 'Tìm Kiếm',
      filterTitle: 'Bộ Lọc Thu Mua',
      filterReset: 'Đặt Lại',
      filterLang: 'Ngôn Ngữ',
      filterAge: 'Độ Tuổi',
      filterKdc: 'Phân Loại KDC',
      filterPublisher: 'Nhà Xuất Bản',
      filterPubPh: 'Nhập tên NXB...',
      filterIsbn: 'Mã ISBN',
      all: 'Tất Cả',
      ageChild: 'Trẻ Em',
      ageYouth: 'Thanh Thiếu Niên',
      ageAdult: 'Người Lớn',
      ageSenior: 'Người Cao Tuổi',
      searchFound: 'Kết Quả',
      itemsUnit: 'cuốn',
      btnBulkCart: 'Thêm Đã Chọn Vào Giỏ',
      curationTitle: 'Bộ Sưu Tập 3D Steampunk Mạ Đồng',
      curationDesc: 'Các gói sách chọn lọc dành cho thư viện đa văn hóa. Mua trọn bộ với 1-Click.',
      cartTitle: 'Giỏ Báo Giá Bổ Sung Thư Viện',
      cartDesc: 'Tính tổng chi phí thu mua và xuất báo giá PDF có dấu mộc hoặc file Excel/CSV.',
      thBookInfo: 'Thông Tin Sách',
      thLang: 'Ngôn Ngữ / KDC',
      thPrice: 'Giá Niêm Yết',
      thQty: 'SL',
      thSubtotal: 'Thành Tiền',
      thAction: 'Xóa',
      btnClearCart: 'Xóa Tất Cả',
      btnAddMore: 'Thêm Sách Khác',
      summaryTitle: 'Tóm Tắt Báo Giá',
      sumItems: 'Tổng Đầu Sách',
      sumQty: 'Tổng Số Cuốn',
      sumOriginal: 'Tổng Giá Bìa',
      sumDiscount: 'Giảm Giá Thủ Thư (10%)',
      sumTax: 'Thuế (Miễn Thuế VAT)',
      sumFinal: 'Tổng Tiền Báo Giá',
      btnPdfQuote: 'Tạo Báo Giá PDF Có Dấu Mộc',
      btnExcelExport: 'Tải File Excel (CSV)',
      backToSearch: 'Quay Lại Tìm Kiếm',
      instruction3D: 'Kéo: Xoay 360° | Nhấp: Mở/Đóng Bìa Da',
      specIsbn: 'ISBN-13',
      specKdc: 'Mã KDC',
      specPubDate: 'Ngày Xuất Bản',
      specBinding: 'Quy Cách Bìa',
      listPrice: 'Giá Bìa',
      b2bPrice: 'Giá B2B (Giảm 10%)',
      excerptTitle: 'Khuyên Dùng Cho Thủ Thư & Trích Đoạn',
      btnTypewriter: 'Phát Âm Thanh Máy Đánh Chữ',
      btnAddCart: 'Thêm Vào Giỏ Báo Giá',
      btnShareSpec: 'Chia Sẻ Thông Tin',
      btnDetail: 'Xem Chi Tiết 3D',
      docTitle: 'BẢO GIÁ BỔ SUNG THƯ VIỆN ĐA VĂN HÓA CHÍNH THỨC',
      btnPrint: 'In / Lưu Dưới Dạng PDF',
      footerDesc: 'Cổng Thu Mua Thư Viện Đa Văn Hóa 5 Ngôn Ngữ Steampunk (v13)',
      footerSupport: 'Trung Tâm Hỗ Trợ Thủ Thư'
    },
    ZH: {
      brandTitle: 'CHRONOS',
      brandSub: '发条多文化图书馆采编门户',
      navHome: '发条主馆',
      navSearch: '采编检索',
      navCuration: '黄铜特展',
      navCart: '公文报价函',
      navDetail: '3D书目详情',
      heroBadge: '专为馆员打造的B2B/B2C采编支持',
      heroTitle: '黄铜发条机构与\n古典精装多文化图书档案',
      heroDesc: '利用精密的3D黄铜齿轮机构探索5语种古典文学与多文化图书，一键生成带有官方印章的采编报价单。',
      heroBtnSearch: '开始采编检索',
      heroBtnCuration: '探索3D特展',
      scrollNotice: '探索 3D Orrery 展馆',
      orreryTitle: '3D 机械太阳仪 (Orrery) 图书展馆',
      orrerySub: '选择并欣赏沿着发条轨道旋转的多文化核心图书。',
      orreryPause: '暂停/播放 旋转',
      newReleaseTitle: '2026多文化采编新书与黄铜档案',
      newReleaseSub: '古典大本文本视图与黄铜3D卡片混合展示。',
      searchPageTitle: '复古采编综合检索与KDC分类系统',
      searchPageDesc: '为图书馆员提供按语种、KDC分类、ISBN及年龄段的详细检索。',
      searchPh: '搜索书名、作者、出版社、ISBN、KDC代码...',
      btnSearch: '检索',
      filterTitle: '精细采编过滤器',
      filterReset: '重置',
      filterLang: '语种 (Language)',
      filterAge: '适用年龄 (Age Group)',
      filterKdc: 'KDC 韩国十进制分类',
      filterPublisher: '出版社 (Publisher)',
      filterPubPh: '输入出版社名称...',
      filterIsbn: 'ISBN 编号',
      all: '全部',
      ageChild: '少儿 (Children)',
      ageYouth: '青少年 (Youth)',
      ageAdult: '成人 (Adult)',
      ageSenior: '长者 (Senior)',
      searchFound: '检索结果',
      itemsUnit: '册',
      btnBulkCart: '批量加入采编函',
      curationTitle: '黄铜3D蒸汽朋克主题策展包',
      curationDesc: '多文化图书馆专属主题采编包！馆员可一键采购经过验证的整套图书。',
      cartTitle: '图书馆采编专用官方报价函',
      cartDesc: '计算所选图书的采购费用，并导出带有官方钢印的PDF/打印版及Excel(CSV)文件。',
      thBookInfo: '图书信息',
      thLang: '语种/KDC',
      thPrice: '定价',
      thQty: '数量',
      thSubtotal: '小计',
      thAction: '删除',
      btnClearCart: '清空全部',
      btnAddMore: '继续添加图书',
      summaryTitle: '采编算定明细',
      sumItems: '总种数',
      sumQty: '总册数',
      sumOriginal: '总定价合计',
      sumDiscount: '馆员采购折扣 (10%)',
      sumTax: '增值税 (免税)',
      sumFinal: '最终供货报价',
      btnPdfQuote: '生成黄铜印章官方报价单',
      btnExcelExport: '下载采编 Excel (CSV)',
      backToSearch: '返回采编检索',
      instruction3D: '鼠标拖拽：360度旋转 | 点击：打开/关闭皮质封面',
      specIsbn: 'ISBN-13',
      specKdc: 'KDC 分类号',
      specPubDate: '出版日期',
      specBinding: '装帧形式',
      listPrice: '原价',
      b2bPrice: '馆员供货价 (9折)',
      excerptTitle: '馆员采编推荐语与正文复古摘录',
      btnTypewriter: '播放打字机朗读音效',
      btnAddCart: '放入采编报价函',
      btnShareSpec: '分享书目信息',
      btnDetail: '查看3D详情',
      docTitle: '图书馆采编/采购官方公文报价单',
      btnPrint: '立即打印 / 保存为 PDF',
      footerDesc: '基于黄铜发条机构的5国多文化馆员采编专业门户 (v13)',
      footerSupport: '馆员支持中心'
    },
    DE: {
      brandTitle: 'CHRONOS',
      brandSub: 'Uhrwerk Multikulturelles Bibliotheksportal',
      navHome: 'Hauptsaal',
      navSearch: 'Katalogsuche',
      navCuration: 'Kurationen',
      navCart: 'Angebotskorb',
      navDetail: '3D-Inspektor',
      heroBadge: 'B2B-Beschaffungsunterstützung für Bibliothekare',
      heroTitle: 'Messing-Uhrwerk-Mechanismus &\nKlassisches Multikulturelles Lederarchiv',
      heroDesc: 'Erkunden Sie 5-sprachige Klassiker mit präzisen 3D-Messingzahnrädern. Erstellen Sie mit 1-Klick offizielle Bibliotheksangebote mit Siegel.',
      heroBtnSearch: 'Katalogsuche starten',
      heroBtnCuration: '3D-Kurationen entdecken',
      scrollNotice: '3D Orrery-Halle erkunden',
      orreryTitle: '3D Mechanische Orrery Buchausstellung',
      orrerySub: 'Wählen und betrachten Sie Buchklassiker in Uhrwerk-Umlaufbahnen.',
      orreryPause: 'Rotation Pause/Start',
      newReleaseTitle: 'Multikulturelle Neuerscheinungen 2026',
      newReleaseSub: 'Mischung aus klassischer Liste und 3D-Messingkarten.',
      searchPageTitle: 'Antike Katalogsuche & KDC-Klassifikation',
      searchPageDesc: 'Detaillierte Filter nach Sprache, KDC, ISBN und Altersgruppe.',
      searchPh: 'Buchtitel, Autor, Verlag, ISBN, KDC suchen...',
      btnSearch: 'Suchen',
      filterTitle: 'Beschaffungsfilter',
      filterReset: 'Zurücksetzen',
      filterLang: 'Sprache',
      filterAge: 'Altersgruppe',
      filterKdc: 'KDC-Klassifikation',
      filterPublisher: 'Verlag',
      filterPubPh: 'Verlagsname eingeben...',
      filterIsbn: 'ISBN-Nummer',
      all: 'Alle',
      ageChild: 'Kinder',
      ageYouth: 'Jugendliche',
      ageAdult: 'Erwachsene',
      ageSenior: 'Senioren',
      searchFound: 'Gefundene Bücher',
      itemsUnit: 'Bände',
      btnBulkCart: 'Ausgewählte zum Korb hinzufügen',
      curationTitle: 'Messing 3D Steampunk Kurationspakete',
      curationDesc: 'Vorkonfigurierte Themenpakete für multikulturelle Bibliotheken.',
      cartTitle: 'Offizieller Bibliotheks-Angebotskorb',
      cartDesc: 'Berechnen Sie Beschaffungskosten und exportieren Sie PDF-Angebote oder Excel/CSV.',
      thBookInfo: 'Buchinformation',
      thLang: 'Sprache / KDC',
      thPrice: 'Listenpreis',
      thQty: 'Menge',
      thSubtotal: 'Zwischensumme',
      thAction: 'Löschen',
      btnClearCart: 'Alles leeren',
      btnAddMore: 'Weitere Bücher suchen',
      summaryTitle: 'Beschaffungszusammenfassung',
      sumItems: 'Titel gesamt',
      sumQty: 'Bände gesamt',
      sumOriginal: 'Listenpreis Summe',
      sumDiscount: 'Bibliotheksrabatt (10%)',
      sumTax: 'Steuer (MWSt. Befreit)',
      sumFinal: 'Endgültiger Angebotspreis',
      btnPdfQuote: 'Messing-gesiegeltes PDF-Angebot erstellen',
      btnExcelExport: 'Excel (CSV) herunterladen',
      backToSearch: 'Zurück zur Suche',
      instruction3D: 'Ziehen: 360° Drehen | Klicken: Lederdeckel Öffnen/Schließen',
      specIsbn: 'ISBN-13',
      specKdc: 'KDC-Code',
      specPubDate: 'Erscheinungsdatum',
      specBinding: 'Einbandart',
      listPrice: 'Listenpreis',
      b2bPrice: 'B2B-Preis (10% Rabatt)',
      excerptTitle: 'Bibliotheks-Empfehlung & Auszug',
      btnTypewriter: 'Schreibmaschinen-Audio abspielen',
      btnAddCart: 'Zum Angebotskorb hinzufügen',
      btnShareSpec: 'Metadaten teilen',
      btnDetail: '3D-Details anzeigen',
      docTitle: 'OFFIZIELLES MULTIKULTURELLES BIBLIOTHEKSANGEBOT',
      btnPrint: 'Drucken / Als PDF speichern',
      footerDesc: 'Steampunk Uhrwerk B2B Portal für Bibliotheken (v13)',
      footerSupport: 'Bibliotheks-Support-Center'
    }
  };

  /* --------------------------------------------------------------------------
     4. GLOBAL APP STATE
     -------------------------------------------------------------------------- */
  const AppState = {
    currentLang: 'KO',
    soundEnabled: true,
    cart: JSON.parse(localStorage.getItem('chronos_cart_v13') || '[]'),
    activeRoute: 'home',
    selectedBookId: 'book-1',
    searchParams: {
      query: '',
      lang: 'ALL',
      age: 'ALL',
      kdc: 'ALL',
      publisher: '',
      isbn: ''
    },
    searchMode: 'grid', // 'grid' | 'table'
    homeViewMode: 'grid'
  };

  /* --------------------------------------------------------------------------
     5. WEB AUDIO SYNTHESIZER (No external audio files needed!)
     -------------------------------------------------------------------------- */
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playGearClickSound() {
    if (!AppState.soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.05);

      filter.type = 'highpass';
      filter.frequency.setValueAtTime(800, now);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {
      console.log('Audio click error:', e);
    }
  }

  function playClockworkTickSound() {
    if (!AppState.soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.03);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch (e) {}
  }

  function playSteamReleaseSound() {
    if (!AppState.soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const now = audioCtx.currentTime;
      const bufferSize = audioCtx.sampleRate * 0.25;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.frequency.exponentialRampToValueAtTime(400, now + 0.25);
      filter.Q.value = 3;

      const gain = audioCtx.createGain();
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.25);
    } catch (e) {}
  }

  function playTypewriterSound() {
    if (!AppState.soundEnabled) return;
    initAudio();
    if (!audioCtx) return;

    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800 + Math.random() * 400, now);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }

  /* --------------------------------------------------------------------------
     6. STEAM & BRASS CANVAS OVERLAY (Particle Animation)
     -------------------------------------------------------------------------- */
  const particles = [];
  const steamCanvas = document.getElementById('steamCanvas');
  const steamCtx = steamCanvas ? steamCanvas.getContext('2d') : null;

  function resizeSteamCanvas() {
    if (steamCanvas) {
      steamCanvas.width = window.innerWidth;
      steamCanvas.height = window.innerHeight;
    }
  }
  window.addEventListener('resize', resizeSteamCanvas);
  resizeSteamCanvas();

  function triggerSteamBurst(x, y) {
    playSteamReleaseSound();
    for (let i = 0; i < 16; i++) {
      particles.push({
        x: x || window.innerWidth / 2,
        y: y || window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 3 - 1,
        radius: Math.random() * 8 + 4,
        alpha: 0.8,
        color: Math.random() > 0.5 ? '#d4af37' : '#e8dcb8',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.1
      });
    }
  }

  function renderSteamParticles() {
    if (!steamCtx) return;
    steamCtx.clearRect(0, 0, steamCanvas.width, steamCanvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= 0.02;
      p.radius += 0.3;
      p.rotation += p.vRot;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      steamCtx.save();
      steamCtx.globalAlpha = p.alpha;
      steamCtx.fillStyle = p.color;
      steamCtx.translate(p.x, p.y);
      steamCtx.rotate(p.rotation);
      steamCtx.beginPath();
      steamCtx.arc(0, 0, p.radius, 0, Math.PI * 2);
      steamCtx.fill();
      steamCtx.restore();
    }
    requestAnimationFrame(renderSteamParticles);
  }
  renderSteamParticles();

  document.addEventListener('click', (e) => {
    if (e.target.closest('.brass-btn') || e.target.closest('.nav-tab')) {
      playGearClickSound();
      triggerSteamBurst(e.clientX, e.clientY);
    }
  });

  /* --------------------------------------------------------------------------
     7. THREE.JS SCENE 1: HERO CLOCKWORK & KINETIC ROBOTIC ARM
     -------------------------------------------------------------------------- */
  let heroScene, heroCamera, heroRenderer;
  let mainGear, subGears = [], kineticArm, heroBook;

  function initHeroClockworkScene() {
    const container = document.getElementById('hero-canvas-container');
    if (!container || typeof THREE === 'undefined') return;

    heroScene = new THREE.Scene();
    heroScene.fog = new THREE.FogExp2(0x100c09, 0.03);

    heroCamera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    heroCamera.position.set(0, 0, 14);

    heroRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    heroRenderer.setSize(container.clientWidth, container.clientHeight);
    heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(heroRenderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff5dd, 0.8);
    heroScene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xd4af37, 2, 50);
    pointLight.position.set(5, 5, 8);
    heroScene.add(pointLight);

    const copperLight = new THREE.PointLight(0xb87333, 1.5, 50);
    copperLight.position.set(-5, -4, 5);
    heroScene.add(copperLight);

    // Helper: Build procedural 3D Gear Geometry
    function createGearMesh(radius, teethCount, depth, color) {
      const gearGroup = new THREE.Group();
      const mat = new THREE.MeshStandardMaterial({
        color: color || 0xd4af37,
        metalness: 0.85,
        roughness: 0.25
      });

      // Disc
      const discGeo = new THREE.CylinderGeometry(radius, radius, depth, 32);
      const disc = new THREE.Mesh(discGeo, mat);
      disc.rotation.x = Math.PI / 2;
      gearGroup.add(disc);

      // Teeth
      const toothGeo = new THREE.BoxGeometry(radius * 0.22, depth * 1.1, radius * 0.25);
      for (let i = 0; i < teethCount; i++) {
        const tooth = new THREE.Mesh(toothGeo, mat);
        const angle = (i / teethCount) * Math.PI * 2;
        tooth.position.set(Math.cos(angle) * (radius * 1.05), Math.sin(angle) * (radius * 1.05), 0);
        tooth.rotation.z = angle;
        gearGroup.add(tooth);
      }

      // Center Axle Hole Rim
      const innerRimGeo = new THREE.CylinderGeometry(radius * 0.35, radius * 0.35, depth * 1.2, 16);
      const innerRimMat = new THREE.MeshStandardMaterial({ color: 0x59451d, metalness: 0.9, roughness: 0.3 });
      const innerRim = new THREE.Mesh(innerRimGeo, innerRimMat);
      innerRim.rotation.x = Math.PI / 2;
      gearGroup.add(innerRim);

      return gearGroup;
    }

    // Main Central Sun Gear
    mainGear = createGearMesh(3.2, 16, 0.4, 0xd4af37);
    mainGear.position.set(3.5, 0, -2);
    heroScene.add(mainGear);

    // Interlocking Planetary Sub-Gears
    const gearData = [
      { radius: 1.6, teeth: 10, x: 0.2, y: 3.2, color: 0xb87333, speed: -2.0 },
      { radius: 1.8, teeth: 12, x: 7.0, y: -2.2, color: 0xcd7f32, speed: -1.78 },
      { radius: 1.2, teeth: 8, x: 0.8, y: -3.5, color: 0xe5c158, speed: 2.6 }
    ];

    gearData.forEach((g) => {
      const gear = createGearMesh(g.radius, g.teeth, 0.3, g.color);
      gear.position.set(g.x, g.y, -2.2);
      gear.userData = { speed: g.speed };
      subGears.push(gear);
      heroScene.add(gear);
    });

    // Kinetic Arm holding 3D Leatherbound Book
    kineticArm = new THREE.Group();

    // Arm Segment 1
    const armMat = new THREE.MeshStandardMaterial({ color: 0xb87333, metalness: 0.9, roughness: 0.3 });
    const arm1Geo = new THREE.CylinderGeometry(0.2, 0.25, 4, 16);
    const arm1 = new THREE.Mesh(arm1Geo, armMat);
    arm1.position.set(-2, -1, 0);
    arm1.rotation.z = -Math.PI / 4;
    kineticArm.add(arm1);

    // 3D Leatherbound Hero Book
    const bookGroup = new THREE.Group();

    // Cover
    const coverGeo = new THREE.BoxGeometry(2.4, 3.2, 0.45);
    const coverMat = new THREE.MeshStandardMaterial({ color: 0x3a1717, roughness: 0.4, metalness: 0.2 });
    const cover = new THREE.Mesh(coverGeo, coverMat);
    bookGroup.add(cover);

    // Gold Trim & Corner Guards
    const trimMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });
    const spineGeo = new THREE.BoxGeometry(0.1, 3.22, 0.47);
    const spine = new THREE.Mesh(spineGeo, trimMat);
    spine.position.x = -1.2;
    bookGroup.add(spine);

    // Pages Block
    const pagesGeo = new THREE.BoxGeometry(2.25, 3.05, 0.38);
    const pagesMat = new THREE.MeshStandardMaterial({ color: 0xf5eedc, roughness: 0.9 });
    const pages = new THREE.Mesh(pagesGeo, pagesMat);
    pages.position.x = 0.05;
    bookGroup.add(pages);

    heroBook = bookGroup;
    heroBook.position.set(-3.5, 0.8, 1);
    heroBook.rotation.set(0.3, 0.6, -0.2);
    heroScene.add(heroBook);

    // Mouse Parallax
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Animation Loop
    function animateHero() {
      requestAnimationFrame(animateHero);

      if (mainGear) mainGear.rotation.z += 0.005;
      subGears.forEach((g) => {
        g.rotation.z += 0.005 * g.userData.speed;
      });

      if (heroBook) {
        heroBook.rotation.y = 0.6 + Math.sin(Date.now() * 0.001) * 0.15;
        heroBook.position.y = 0.8 + Math.cos(Date.now() * 0.0015) * 0.15;
      }

      heroCamera.position.x += (mouseX * 0.5 - heroCamera.position.x) * 0.05;
      heroCamera.position.y += (-mouseY * 0.5 - heroCamera.position.y) * 0.05;
      heroCamera.lookAt(0, 0, 0);

      heroRenderer.render(heroScene, heroCamera);
    }
    animateHero();

    window.addEventListener('resize', () => {
      if (!container) return;
      heroCamera.aspect = container.clientWidth / container.clientHeight;
      heroCamera.updateProjectionMatrix();
      heroRenderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

  /* --------------------------------------------------------------------------
     8. THREE.JS SCENE 2: 3D MECHANICAL ORRERY EXHIBITION HALL
     -------------------------------------------------------------------------- */
  let orreryScene, orreryCamera, orreryRenderer;
  let orreryGroup, orreryBookPlatforms = [];
  let isOrreryRotating = true;

  function initOrreryScene() {
    const container = document.getElementById('orrery-canvas-container');
    if (!container || typeof THREE === 'undefined') return;

    orreryScene = new THREE.Scene();
    orreryCamera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
    orreryCamera.position.set(0, 8, 16);
    orreryCamera.lookAt(0, 0, 0);

    orreryRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    orreryRenderer.setSize(container.clientWidth, container.clientHeight);
    orreryRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(orreryRenderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffeedd, 0.7);
    orreryScene.add(ambient);

    const sunLight = new THREE.PointLight(0xd4af37, 2.5, 40);
    sunLight.position.set(0, 4, 0);
    orreryScene.add(sunLight);

    orreryGroup = new THREE.Group();
    orreryScene.add(orreryGroup);

    // Central Sun Axis
    const axisGeo = new THREE.CylinderGeometry(0.8, 1.2, 3, 16);
    const axisMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });
    const axisMesh = new THREE.Mesh(axisGeo, axisMat);
    axisMesh.position.y = -0.5;
    orreryGroup.add(axisMesh);

    // Orbit Rings & Book Platforms
    const sampleBooks = BOOKS_CATALOG.slice(0, 5);
    const radii = [3.5, 5.0, 6.5, 8.0, 9.5];

    sampleBooks.forEach((book, idx) => {
      const radius = radii[idx];

      // Orbit Brass Ring Wire
      const ringGeo = new THREE.RingGeometry(radius - 0.04, radius + 0.04, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x99782d, side: THREE.DoubleSide });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      orreryGroup.add(ringMesh);

      // Book Armature Platform
      const platformGroup = new THREE.Group();

      const baseGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.15, 16);
      const baseMat = new THREE.MeshStandardMaterial({ color: 0xb87333, metalness: 0.85, roughness: 0.3 });
      const base = new THREE.Mesh(baseGeo, baseMat);
      platformGroup.add(base);

      // 3D Mini Book Mesh on Platform
      const miniBookGeo = new THREE.BoxGeometry(1.2, 1.6, 0.35);
      const miniBookMat = new THREE.MeshStandardMaterial({
        color: parseInt(book.coverColor.replace('#', '0x')),
        roughness: 0.4
      });
      const miniBook = new THREE.Mesh(miniBookGeo, miniBookMat);
      miniBook.position.y = 0.9;
      miniBook.rotation.y = 0.2;
      platformGroup.add(miniBook);

      platformGroup.userData = {
        book: book,
        radius: radius,
        angle: (idx / sampleBooks.length) * Math.PI * 2,
        speed: 0.003 + idx * 0.0008
      };

      orreryBookPlatforms.push(platformGroup);
      orreryGroup.add(platformGroup);
    });

    // Raycasting for clicking book platforms
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    container.addEventListener('click', (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, orreryCamera);
      const intersects = raycaster.intersectObjects(orreryGroup.children, true);

      if (intersects.length > 0) {
        let obj = intersects[0].object;
        while (obj.parent && !obj.userData.book) {
          obj = obj.parent;
        }

        if (obj && obj.userData.book) {
          playGearClickSound();
          showOrreryInfoCard(obj.userData.book);
        }
      }
    });

    // Rotate Toggle Button
    const rotateBtn = document.getElementById('orrery-rotate-btn');
    if (rotateBtn) {
      rotateBtn.addEventListener('click', () => {
        isOrreryRotating = !isOrreryRotating;
      });
    }

    // Animation Loop
    function animateOrrery() {
      requestAnimationFrame(animateOrrery);

      if (isOrreryRotating) {
        orreryBookPlatforms.forEach((p) => {
          p.userData.angle += p.userData.speed;
          p.position.x = Math.cos(p.userData.angle) * p.userData.radius;
          p.position.z = Math.sin(p.userData.angle) * p.userData.radius;
          p.rotation.y = -p.userData.angle + Math.PI / 2;
        });
      }

      orreryRenderer.render(orreryScene, orreryCamera);
    }
    animateOrrery();

    window.addEventListener('resize', () => {
      if (!container) return;
      orreryCamera.aspect = container.clientWidth / container.clientHeight;
      orreryCamera.updateProjectionMatrix();
      orreryRenderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

  function showOrreryInfoCard(book) {
    const card = document.getElementById('orrery-info-card');
    if (!card) return;

    document.getElementById('orrery-card-lang').textContent = book.language;
    document.getElementById('orrery-card-title').textContent = book.title_i18n[AppState.currentLang] || book.title;
    document.getElementById('orrery-card-author').textContent = `${book.author} | ${book.publisher}`;
    document.getElementById('orrery-card-meta').textContent = `KDC: ${book.kdc} | ISBN: ${book.isbn}`;

    const detailBtn = document.getElementById('orrery-detail-btn');
    const addCartBtn = document.getElementById('orrery-add-cart-btn');

    detailBtn.onclick = () => {
      window.location.hash = `#detail?id=${book.id}`;
    };

    addCartBtn.onclick = () => {
      addToCart(book.id);
    };

    card.classList.remove('hidden');
  }

  /* --------------------------------------------------------------------------
     9. THREE.JS SCENE 3: 360-DEGREE LEATHERBOUND BRASS BOOK INSPECTOR
     -------------------------------------------------------------------------- */
  let book3dScene, book3dCamera, book3dRenderer, book3dControls;
  let mainBookMesh, frontCoverMesh, isCoverOpen = false;

  function initBook3DDetailScene() {
    const container = document.getElementById('book3d-canvas-container');
    if (!container || typeof THREE === 'undefined') return;

    container.innerHTML = '';

    book3dScene = new THREE.Scene();

    book3dCamera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    book3dCamera.position.set(0, 1, 6.5);

    book3dRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    book3dRenderer.setSize(container.clientWidth, container.clientHeight);
    book3dRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(book3dRenderer.domElement);

    if (THREE.OrbitControls) {
      book3dControls = new THREE.OrbitControls(book3dCamera, book3dRenderer.domElement);
      book3dControls.enableDamping = true;
      book3dControls.dampingFactor = 0.05;
    }

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    book3dScene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xd4af37, 1.5);
    dirLight.position.set(4, 5, 5);
    book3dScene.add(dirLight);

    const backLight = new THREE.PointLight(0xb87333, 1, 20);
    backLight.position.set(-3, -2, -4);
    book3dScene.add(backLight);

    // Build Detailed 3D Book
    const currentBook = BOOKS_CATALOG.find((b) => b.id === AppState.selectedBookId) || BOOKS_CATALOG[0];

    mainBookMesh = new THREE.Group();

    // Back Cover & Spine Base
    const coverColor = parseInt(currentBook.coverColor.replace('#', '0x'));
    const leatherMat = new THREE.MeshStandardMaterial({ color: coverColor, roughness: 0.4, metalness: 0.1 });
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });
    const pageMat = new THREE.MeshStandardMaterial({ color: 0xf4ebd0, roughness: 0.8 });

    // Back Cover
    const backCoverGeo = new THREE.BoxGeometry(2.4, 3.4, 0.1);
    const backCover = new THREE.Mesh(backCoverGeo, leatherMat);
    backCover.position.set(0, 0, -0.2);
    mainBookMesh.add(backCover);

    // Spine
    const spineGeo = new THREE.BoxGeometry(0.12, 3.42, 0.5);
    const spine = new THREE.Mesh(spineGeo, brassMat);
    spine.position.set(-1.22, 0, 0);
    mainBookMesh.add(spine);

    // Pages Block
    const pagesGeo = new THREE.BoxGeometry(2.3, 3.3, 0.38);
    const pages = new THREE.Mesh(pagesGeo, pageMat);
    pages.position.set(0.02, 0, 0);
    mainBookMesh.add(pages);

    // Front Cover (Interactive hinge pivot)
    const frontPivot = new THREE.Group();
    frontPivot.position.set(-1.2, 0, 0.2);

    const frontCoverGeo = new THREE.BoxGeometry(2.4, 3.4, 0.1);
    frontCoverMesh = new THREE.Mesh(frontCoverGeo, leatherMat);
    frontCoverMesh.position.set(1.2, 0, 0);

    // Front Emblem Gold Shield
    const emblemGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.12, 16);
    const emblem = new THREE.Mesh(emblemGeo, brassMat);
    emblem.rotation.x = Math.PI / 2;
    emblem.position.set(1.2, 0.2, 0.05);
    frontPivot.add(emblem);

    frontPivot.add(frontCoverMesh);
    mainBookMesh.add(frontPivot);

    book3dScene.add(mainBookMesh);

    // Click Cover to Toggle Open/Close
    container.addEventListener('click', () => {
      playGearClickSound();
      isCoverOpen = !isCoverOpen;
      const targetAngle = isCoverOpen ? -Math.PI * 0.75 : 0;

      let step = 0;
      function animateCover() {
        step += 0.08;
        frontPivot.rotation.y = THREE.MathUtils.lerp(frontPivot.rotation.y, targetAngle, 0.15);
        if (Math.abs(frontPivot.rotation.y - targetAngle) > 0.01) {
          requestAnimationFrame(animateCover);
        }
      }
      animateCover();
    });

    // Render Loop
    function animateBook3D() {
      requestAnimationFrame(animateBook3D);
      if (book3dControls) book3dControls.update();
      book3dRenderer.render(book3dScene, book3dCamera);
    }
    animateBook3D();

    window.addEventListener('resize', () => {
      if (!container) return;
      book3dCamera.aspect = container.clientWidth / container.clientHeight;
      book3dCamera.updateProjectionMatrix();
      book3dRenderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

  /* --------------------------------------------------------------------------
     10. CART & B2B QUOTE GENERATOR CONTROLLER
     -------------------------------------------------------------------------- */
  function saveCart() {
    localStorage.setItem('chronos_cart_v13', JSON.stringify(AppState.cart));
    updateCartBadge();
  }

  function updateCartBadge() {
    const badge = document.getElementById('nav-cart-badge');
    if (badge) {
      const totalQty = AppState.cart.reduce((sum, item) => sum + item.qty, 0);
      badge.textContent = totalQty;
    }
  }

  function addToCart(bookId, qty = 1) {
    const book = BOOKS_CATALOG.find((b) => b.id === bookId);
    if (!book) return;

    const existing = AppState.cart.find((item) => item.id === bookId);
    if (existing) {
      existing.qty += qty;
    } else {
      AppState.cart.push({
        id: book.id,
        title: book.title_i18n[AppState.currentLang] || book.title,
        author: book.author,
        publisher: book.publisher,
        isbn: book.isbn,
        kdc: book.kdc,
        price: book.price,
        discountPrice: book.discountPrice,
        qty: qty
      });
    }

    saveCart();
    triggerSteamBurst();
    alert(`[${book.title_i18n[AppState.currentLang] || book.title}] 수서 견적함에 담겼습니다.`);
  }

  function renderCartTable() {
    const tbody = document.getElementById('cart-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    if (AppState.cart.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 3rem; color: var(--text-muted);">
            <i class="fa-solid fa-scroll" style="font-size: 2.5rem; color: var(--brass-dark); margin-bottom: 1rem;"></i>
            <p>견적함에 담긴 도서가 없습니다. 수서 검색관에서 도서를 선택하세요.</p>
          </td>
        </tr>
      `;
      updateCartSummary(0, 0, 0, 0);
      return;
    }

    let origTotal = 0;
    let finalTotal = 0;
    let totalQty = 0;

    AppState.cart.forEach((item, idx) => {
      const subtotal = item.discountPrice * item.qty;
      origTotal += item.price * item.qty;
      finalTotal += subtotal;
      totalQty += item.qty;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><input type="checkbox" class="cart-item-check" data-idx="${idx}" checked></td>
        <td>
          <strong style="color: var(--parchment-bg); font-family: var(--font-serif);">${item.title}</strong>
          <div style="font-size: 0.78rem; color: var(--text-muted);">${item.author} | ${item.publisher}</div>
        </td>
        <td><span class="tag-lang">${item.kdc}</span></td>
        <td style="color: var(--text-muted); font-size: 0.85rem;">₩${item.price.toLocaleString()}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.2rem;">
            <button class="brass-btn sm icon-only qty-minus" data-idx="${idx}">-</button>
            <span style="font-weight: 700; width: 28px; text-align: center;">${item.qty}</span>
            <button class="brass-btn sm icon-only qty-plus" data-idx="${idx}">+</button>
          </div>
        </td>
        <td style="color: var(--brass-light); font-weight: 700;">₩${subtotal.toLocaleString()}</td>
        <td>
          <button class="text-link-btn item-del-btn" data-idx="${idx}"><i class="fa-solid fa-xmark"></i></button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    updateCartSummary(AppState.cart.length, totalQty, origTotal, finalTotal);

    // Bind quantity & delete events
    tbody.querySelectorAll('.qty-minus').forEach((btn) => {
      btn.onclick = () => {
        const i = parseInt(btn.getAttribute('data-idx'));
        if (AppState.cart[i].qty > 1) {
          AppState.cart[i].qty--;
          saveCart();
          renderCartTable();
        }
      };
    });

    tbody.querySelectorAll('.qty-plus').forEach((btn) => {
      btn.onclick = () => {
        const i = parseInt(btn.getAttribute('data-idx'));
        AppState.cart[i].qty++;
        saveCart();
        renderCartTable();
      };
    });

    tbody.querySelectorAll('.item-del-btn').forEach((btn) => {
      btn.onclick = () => {
        const i = parseInt(btn.getAttribute('data-idx'));
        AppState.cart.splice(i, 1);
        saveCart();
        renderCartTable();
      };
    });
  }

  function updateCartSummary(itemsCount, totalQty, origTotal, finalTotal) {
    const discount = origTotal - finalTotal;

    document.getElementById('sum-items-count').textContent = `${itemsCount} 종`;
    document.getElementById('sum-total-qty').textContent = `${totalQty} 권`;
    document.getElementById('sum-original-price').textContent = `₩${origTotal.toLocaleString()} 원`;
    document.getElementById('sum-discount-amount').textContent = `-₩${discount.toLocaleString()} 원`;
    document.getElementById('sum-final-price').textContent = `₩${finalTotal.toLocaleString()} 원`;
  }

  /* --------------------------------------------------------------------------
     11. OFFICIAL PDF & EXCEL EXPORT GENERATOR
     -------------------------------------------------------------------------- */
  function generateOfficialQuoteModal() {
    if (AppState.cart.length === 0) {
      alert('견적함이 비어 있어 공문서를 생성할 수 없습니다.');
      return;
    }

    const modal = document.getElementById('quote-modal');
    const tbody = document.getElementById('quote-doc-tbody');
    if (!modal || !tbody) return;

    tbody.innerHTML = '';
    let totalAmt = 0;

    AppState.cart.forEach((item, idx) => {
      const subtotal = item.discountPrice * item.qty;
      totalAmt += subtotal;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td><strong>${item.title}</strong></td>
        <td>${item.author} / ${item.publisher}</td>
        <td>${item.isbn}</td>
        <td>${item.kdc}</td>
        <td>₩${item.price.toLocaleString()}</td>
        <td>${item.qty}</td>
        <td>₩${item.discountPrice.toLocaleString()}</td>
        <td><strong>₩${subtotal.toLocaleString()}</strong></td>
      `;
      tbody.appendChild(tr);
    });

    // Update Serial & Date
    const serial = 'LIB-2026-' + Math.floor(10000 + Math.random() * 90000);
    const dateStr = new Date().toISOString().split('T')[0];

    document.getElementById('quote-serial-no').textContent = serial;
    document.getElementById('quote-date').textContent = dateStr;
    document.getElementById('quote-total-korean').textContent = `금 ${numberToKorean(totalAmt)}원정 (₩${totalAmt.toLocaleString()})`;

    // Draw Brass Seal Canvas
    drawBrassSealCanvas();

    modal.classList.remove('hidden');
  }

  function numberToKorean(number) {
    const units = ['', '만', '억', '조'];
    let numStr = String(number);
    let result = '';
    let unitIdx = 0;

    while (numStr.length > 0) {
      let chunk = numStr.slice(-4);
      numStr = numStr.slice(0, -4);
      if (parseInt(chunk) > 0) {
        result = parseInt(chunk).toLocaleString() + units[unitIdx] + ' ' + result;
      }
      unitIdx++;
    }
    return result.trim();
  }

  function drawBrassSealCanvas() {
    const canvas = document.getElementById('brass-seal-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Outer Circle
    ctx.strokeStyle = '#8a6d1f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w / 2 - 4, 0, Math.PI * 2);
    ctx.stroke();

    // Inner Circle
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w / 2 - 9, 0, Math.PI * 2);
    ctx.stroke();

    // Text inside Seal
    ctx.fillStyle = '#8a6d1f';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CHRONOS', w / 2, h / 2 - 8);
    ctx.font = '9px sans-serif';
    ctx.fillText('도서관수서', w / 2, h / 2 + 5);
    ctx.fillText('공식직인', w / 2, h / 2 + 18);
  }

  function exportCartToExcelCSV() {
    if (AppState.cart.length === 0) {
      alert('다운로드할 견적 품목이 없습니다.');
      return;
    }

    let csvContent = '\uFEFF'; // UTF-8 BOM for Excel Korean compatibility
    csvContent += '연번,도서명,저자,출판사,ISBN,KDC분류기호,정가,수량,사서할인가(10%),공급가액\n';

    AppState.cart.forEach((item, idx) => {
      const subtotal = item.discountPrice * item.qty;
      csvContent += `${idx + 1},"${item.title}","${item.author}","${item.publisher}","${item.isbn}","${item.kdc}",${item.price},${item.qty},${item.discountPrice},${subtotal}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `CHRONOS_Library_Acquisition_Quote_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /* --------------------------------------------------------------------------
     12. SEARCH & FILTERING CONTROLLER
     -------------------------------------------------------------------------- */
  function filterBooks() {
    const p = AppState.searchParams;
    return BOOKS_CATALOG.filter((book) => {
      const titleMatches = (book.title_i18n[AppState.currentLang] || book.title)
        .toLowerCase()
        .includes(p.query.toLowerCase()) ||
        book.author.toLowerCase().includes(p.query.toLowerCase()) ||
        book.publisher.toLowerCase().includes(p.query.toLowerCase()) ||
        book.isbn.includes(p.query) ||
        book.kdc.includes(p.query);

      const langMatches = p.lang === 'ALL' || book.language === p.lang;
      const ageMatches = p.age === 'ALL' || book.age === p.age;
      const kdcMatches = p.kdc === 'ALL' || book.kdc.startsWith(p.kdc.substring(0, 1));
      const pubMatches = !p.publisher || book.publisher.toLowerCase().includes(p.publisher.toLowerCase());
      const isbnMatches = !p.isbn || book.isbn.includes(p.isbn);

      return titleMatches && langMatches && ageMatches && kdcMatches && pubMatches && isbnMatches;
    });
  }

  function renderSearchResults() {
    const wrapper = document.getElementById('search-results-wrapper');
    const countNum = document.getElementById('count-num');
    if (!wrapper) return;

    const filtered = filterBooks();
    if (countNum) countNum.textContent = filtered.length;

    wrapper.innerHTML = '';

    if (filtered.length === 0) {
      wrapper.innerHTML = `
        <div style="text-align: center; padding: 4rem; background: var(--bg-dark-card); border-radius: 8px; border: 1px solid var(--border-brass);">
          <i class="fa-solid fa-compass" style="font-size: 3rem; color: var(--brass-dark); margin-bottom: 1rem;"></i>
          <h3>일치하는 수서 도서가 없습니다.</h3>
          <p style="color: var(--text-muted);">검색어나 필터 조건을 변경하여 다시 검색해 주세요.</p>
        </div>
      `;
      return;
    }

    if (AppState.searchMode === 'grid') {
      const grid = document.createElement('div');
      grid.className = 'home-books-grid';

      filtered.forEach((book) => {
        const card = createBookCardDOM(book);
        grid.appendChild(card);
      });
      wrapper.appendChild(grid);
    } else {
      // Table View
      const table = document.createElement('table');
      table.className = 'brass-table';
      table.innerHTML = `
        <thead>
          <tr>
            <th style="width: 30px;"><input type="checkbox" id="search-select-all"></th>
            <th>도서명</th>
            <th>저자 / 출판사</th>
            <th>ISBN</th>
            <th>KDC</th>
            <th>언어</th>
            <th>정가</th>
            <th>할인가(10%)</th>
            <th>담기</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map((b) => `
            <tr>
              <td><input type="checkbox" class="search-item-check" data-id="${b.id}"></td>
              <td>
                <strong style="color: var(--parchment-bg); cursor: pointer;" onclick="window.location.hash='#detail?id=${b.id}'">
                  ${b.title_i18n[AppState.currentLang] || b.title}
                </strong>
              </td>
              <td>${b.author} / ${b.publisher}</td>
              <td>${b.isbn}</td>
              <td><span class="tag-lang">${b.kdc}</span></td>
              <td>${b.language}</td>
              <td style="text-decoration: line-through; color: var(--text-muted);">₩${b.price.toLocaleString()}</td>
              <td style="color: var(--brass-light); font-weight: 700;">₩${b.discountPrice.toLocaleString()}</td>
              <td>
                <button class="brass-btn sm primary" onclick="window.ChronosApp.addToCart('${b.id}')">
                  <i class="fa-solid fa-cart-plus"></i>
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      `;
      wrapper.appendChild(table);
    }
  }

  function createBookCardDOM(book) {
    const card = document.createElement('div');
    card.className = 'book-card-steampunk';
    const displayTitle = book.title_i18n[AppState.currentLang] || book.title;

    card.innerHTML = `
      <div class="card-top-tags">
        <span class="tag-lang">${book.language}</span>
        <span class="tag-kdc">KDC: ${book.kdc}</span>
      </div>
      <div class="book-cover-mock" style="background: linear-gradient(135deg, ${book.coverColor} 0%, #100c09 100%); border-color: ${book.accentColor};">
        <span class="mock-title">${displayTitle}</span>
        <span class="mock-author">${book.author}</span>
      </div>
      <div class="card-body">
        <h3 class="book-card-title">${displayTitle}</h3>
        <p class="book-card-author">${book.author} | ${book.publisher}</p>
        <div class="book-card-price-row">
          <span class="price-del">₩${book.price.toLocaleString()}</span>
          <strong class="price-main">₩${book.discountPrice.toLocaleString()}</strong>
        </div>
        <div class="card-actions">
          <button class="brass-btn sm primary block" onclick="window.location.hash='#detail?id=${book.id}'">
            <i class="fa-solid fa-eye"></i> <span>3D 상세</span>
          </button>
          <button class="brass-btn sm secondary block" onclick="window.ChronosApp.addToCart('${book.id}')">
            <i class="fa-solid fa-cart-plus"></i> <span>견적함</span>
          </button>
        </div>
      </div>
    `;
    return card;
  }

  /* --------------------------------------------------------------------------
     13. STEAMPUNK CURATION PACKAGES CONTROLLER
     -------------------------------------------------------------------------- */
  function renderCurations() {
    const grid = document.getElementById('curation-packages-grid');
    if (!grid) return;

    grid.innerHTML = '';

    CURATION_PACKAGES.forEach((pkg) => {
      const card = document.createElement('div');
      card.className = 'curation-card';

      const title = pkg.title_i18n[AppState.currentLang] || pkg.title_i18n.KO;
      const desc = pkg.desc_i18n[AppState.currentLang] || pkg.desc_i18n.KO;

      const includedBooks = pkg.bookIds.map((id) => BOOKS_CATALOG.find((b) => b.id === id)).filter(Boolean);

      card.innerHTML = `
        <div class="curation-card-header">
          <div>
            <h3 class="curation-title">${title}</h3>
            <p class="curation-desc">${desc}</p>
          </div>
          <span class="curation-tag">${pkg.tag}</span>
        </div>

        <div class="curation-book-list">
          <h4 style="font-size: 0.85rem; color: var(--brass-light); margin-bottom: 0.5rem;"><i class="fa-solid fa-layer-group"></i> 수서 구성 대표 도서목록 (${pkg.totalBooks}권 패키지):</h4>
          ${includedBooks.map((b) => `
            <div class="curation-item-row">
              <span>• ${b.title_i18n[AppState.currentLang] || b.title}</span>
              <span style="color: var(--text-muted);">${b.language} | KDC ${b.kdc}</span>
            </div>
          `).join('')}
        </div>

        <div class="curation-footer">
          <div class="curation-price-wrap">
            <span class="curation-price-label">패키지 일괄 할인가:</span>
            <strong class="curation-price-val">₩${pkg.discountPrice.toLocaleString()} 원</strong>
          </div>
          <button class="brass-btn primary lg btn-add-pkg" data-pkg-id="${pkg.id}">
            <i class="fa-solid fa-box-open"></i> <span>패키지 일괄 견적 담기</span>
          </button>
        </div>
      `;
      grid.appendChild(card);
    });

    // Package add to cart binding
    grid.querySelectorAll('.btn-add-pkg').forEach((btn) => {
      btn.onclick = () => {
        const pkgId = btn.getAttribute('data-pkg-id');
        const pkg = CURATION_PACKAGES.find((p) => p.id === pkgId);
        if (!pkg) return;

        pkg.bookIds.forEach((id) => {
          addToCart(id, 1);
        });
        alert(`[${pkg.title_i18n[AppState.currentLang] || pkg.title_i18n.KO}] 구성 도서가 견적함에 일괄 추가되었습니다.`);
      };
    });
  }

  /* --------------------------------------------------------------------------
     14. DETAIL PAGE & EXCERPT TYPEWRITER CONTROLLER
     -------------------------------------------------------------------------- */
  function renderBookDetailPage() {
    const book = BOOKS_CATALOG.find((b) => b.id === AppState.selectedBookId) || BOOKS_CATALOG[0];

    document.getElementById('detail-kdc-badge').textContent = `KDC ${book.kdc}`;
    document.getElementById('detail-lang-pill').textContent = book.language;
    document.getElementById('detail-book-title').textContent = book.title_i18n[AppState.currentLang] || book.title;
    document.getElementById('detail-book-author').textContent = `${book.author} (저) | ${book.publisher}`;
    document.getElementById('detail-isbn').textContent = book.isbn;
    document.getElementById('detail-kdc').textContent = `${book.kdc} ${book.kdcName}`;
    document.getElementById('detail-pubdate').textContent = `${book.year}년 01월 15일`;
    document.getElementById('detail-price-orig').textContent = `₩${book.price.toLocaleString()} 원`;
    document.getElementById('detail-price-discount').textContent = `₩${book.discountPrice.toLocaleString()} 원`;

    const excerptText = document.getElementById('excerpt-content-text');
    const textToType = book.excerpt[AppState.currentLang] || book.excerpt.KO;
    excerptText.textContent = `"${textToType}"`;

    // Re-init 3D book scene
    initBook3DDetailScene();

    // Bind Detail Actions
    const addCartBtn = document.getElementById('detail-add-cart-btn');
    if (addCartBtn) {
      addCartBtn.onclick = () => addToCart(book.id);
    }

    const shareBtn = document.getElementById('detail-share-spec-btn');
    if (shareBtn) {
      shareBtn.onclick = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('도서 서지 상세 링크가 클립보드에 복사되었습니다.');
      };
    }

    // Typewriter Sound Reader
    const typewriterBtn = document.getElementById('btn-read-excerpt');
    if (typewriterBtn) {
      typewriterBtn.onclick = () => {
        let i = 0;
        excerptText.textContent = '"';
        const timer = setInterval(() => {
          if (i < textToType.length) {
            excerptText.textContent += textToType.charAt(i);
            playTypewriterSound();
            i++;
          } else {
            excerptText.textContent += '"';
            clearInterval(timer);
          }
        }, 50);
      };
    }
  }

  /* --------------------------------------------------------------------------
     15. MULTI-LANGUAGE I18N SYSTEM UPDATE
     -------------------------------------------------------------------------- */
  function setLanguage(lang) {
    if (!I18N_DICT[lang]) return;
    AppState.currentLang = lang;
    document.documentElement.lang = lang.toLowerCase();

    const dict = I18N_DICT[lang];

    // Update data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update inputs data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    // Re-render active views
    renderHomeView();
    renderSearchResults();
    renderCurations();
    renderCartTable();
    if (AppState.activeRoute === 'detail') renderBookDetailPage();
  }

  function renderHomeView() {
    const container = document.getElementById('home-books-container');
    if (!container) return;

    container.innerHTML = '';
    container.className = `home-books-grid ${AppState.homeViewMode === 'list' ? 'list-view' : ''}`;

    BOOKS_CATALOG.forEach((book) => {
      const card = createBookCardDOM(book);
      container.appendChild(card);
    });
  }

  /* --------------------------------------------------------------------------
     16. HASH ROUTER CONTROLLER
     -------------------------------------------------------------------------- */
  function handleRoute() {
    const hash = window.location.hash || '#home';
    const [path, queryStr] = hash.split('?');

    const route = path.replace('#', '') || 'home';
    AppState.activeRoute = route;

    // Parse query params if any
    if (queryStr) {
      const params = new URLSearchParams(queryStr);
      if (params.has('id')) AppState.selectedBookId = params.get('id');
      if (params.has('lang')) AppState.searchParams.lang = params.get('lang');
    }

    // Toggle View Sections
    document.querySelectorAll('.page-view').forEach((sec) => {
      sec.classList.remove('active');
    });

    const targetSec = document.getElementById(`view-${route}`);
    if (targetSec) {
      targetSec.classList.add('active');
    } else {
      document.getElementById('view-home').classList.add('active');
    }

    // Update Nav Tabs
    document.querySelectorAll('.nav-tab').forEach((tab) => {
      tab.classList.toggle('active', tab.getAttribute('data-page') === route);
    });

    // Route-specific renderers
    if (route === 'home') {
      renderHomeView();
    } else if (route === 'search') {
      renderSearchResults();
    } else if (route === 'curation') {
      renderCurations();
    } else if (route === 'cart') {
      renderCartTable();
    } else if (route === 'detail') {
      renderBookDetailPage();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* --------------------------------------------------------------------------
     17. INITIALIZATION & EVENT BINDINGS
     -------------------------------------------------------------------------- */
  function initApp() {
    // 1. Language Select
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.value = AppState.currentLang;
      langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
    }

    // 2. Sound Toggle Button
    const soundBtn = document.getElementById('sound-toggle-btn');
    const soundIcon = document.getElementById('sound-icon');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        AppState.soundEnabled = !AppState.soundEnabled;
        soundIcon.className = AppState.soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
      });
    }

    // 3. Logo Button
    document.getElementById('logo-button')?.addEventListener('click', () => {
      window.location.hash = '#home';
    });

    // 4. View Mode Toggles (Home)
    document.getElementById('home-view-grid')?.addEventListener('click', (e) => {
      AppState.homeViewMode = 'grid';
      e.currentTarget.classList.add('active');
      document.getElementById('home-view-list').classList.remove('active');
      renderHomeView();
    });

    document.getElementById('home-view-list')?.addEventListener('click', (e) => {
      AppState.homeViewMode = 'list';
      e.currentTarget.classList.add('active');
      document.getElementById('home-view-grid').classList.remove('active');
      renderHomeView();
    });

    // 5. Search Filters Events
    const searchInput = document.getElementById('search-input');
    const searchSubmitBtn = document.getElementById('search-submit-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        AppState.searchParams.query = e.target.value;
        if (AppState.activeRoute === 'search') renderSearchResults();
      });
    }

    if (searchSubmitBtn) {
      searchSubmitBtn.addEventListener('click', () => {
        window.location.hash = '#search';
        renderSearchResults();
      });
    }

    // Search Chips
    document.querySelectorAll('#filter-lang-options .filter-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('#filter-lang-options .filter-chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        AppState.searchParams.lang = chip.getAttribute('data-value');
        renderSearchResults();
      });
    });

    document.getElementById('filter-age-select')?.addEventListener('change', (e) => {
      AppState.searchParams.age = e.target.value;
      renderSearchResults();
    });

    document.getElementById('filter-kdc-select')?.addEventListener('change', (e) => {
      AppState.searchParams.kdc = e.target.value;
      renderSearchResults();
    });

    document.getElementById('filter-publisher-input')?.addEventListener('input', (e) => {
      AppState.searchParams.publisher = e.target.value;
      renderSearchResults();
    });

    document.getElementById('filter-isbn-input')?.addEventListener('input', (e) => {
      AppState.searchParams.isbn = e.target.value;
      renderSearchResults();
    });

    document.getElementById('filter-reset-btn')?.addEventListener('click', () => {
      AppState.searchParams = { query: '', lang: 'ALL', age: 'ALL', kdc: 'ALL', publisher: '', isbn: '' };
      if (searchInput) searchInput.value = '';
      renderSearchResults();
    });

    // Search View Mode Toggles
    document.getElementById('search-mode-grid')?.addEventListener('click', (e) => {
      AppState.searchMode = 'grid';
      e.currentTarget.classList.add('active');
      document.getElementById('search-mode-table').classList.remove('active');
      renderSearchResults();
    });

    document.getElementById('search-mode-table')?.addEventListener('click', (e) => {
      AppState.searchMode = 'table';
      e.currentTarget.classList.add('active');
      document.getElementById('search-mode-grid').classList.remove('active');
      renderSearchResults();
    });

    // 6. Cart Actions
    document.getElementById('cart-clear-btn')?.addEventListener('click', () => {
      if (confirm('견적함을 완전히 비우시겠습니까?')) {
        AppState.cart = [];
        saveCart();
        renderCartTable();
      }
    });

    document.getElementById('btn-generate-pdf-quote')?.addEventListener('click', generateOfficialQuoteModal);
    document.getElementById('btn-export-excel')?.addEventListener('click', exportCartToExcelCSV);

    // Modal Close & Print
    document.getElementById('quote-modal-close')?.addEventListener('click', () => {
      document.getElementById('quote-modal').classList.add('hidden');
    });

    document.getElementById('btn-print-quote')?.addEventListener('click', () => {
      window.print();
    });

    // 7. Init 3D Scenes
    initHeroClockworkScene();
    initOrreryScene();

    // 8. Hash Change Listener
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    updateCartBadge();
  }

  // Global Export for inline onclick handlers
  window.ChronosApp = {
    addToCart: addToCart
  };

  // DOM Loaded Listener
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
