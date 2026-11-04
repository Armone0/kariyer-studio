/**
 * Kariyer & İletişim Stüdyosu - Core Application Logic
 * Modular, reactive Vanilla JavaScript engine with LocalStorage auto-sync,
 * live A4 preview rendering, dynamic chip management, and print handling.
 */

// Storage Key
const STORAGE_KEY = 'kariyer_studio_v2_blank_slate';

// Rich Sample Data (Optional template accessible via "Örnek Veri Yükle" button)
const SAMPLE_DATA = {
  activeTab: 'cv',
  zoomLevel: 100,
  meta: {
    studentName: 'RAMAZAN ERDOĞAN',
    studentId: '25100011009',
    department: 'Bilgisayar Mühendisliği (2. Sınıf)',
    courseName: 'İletişim ve Sunum Teknikleri',
    date: '2026-11-04',
    targetRole: 'Bilgisayar Mühendisliği Öğrencisi'
  },
  swot: {
    targetCareer: 'Savunma Sanayii & Otonom Sistemlerde Yazılım Mühendisliği',
    strengths: [
      'Algoritmik düşünme, veri yapıları ve analitik problem çözme yetkinliği',
      'Python, C++ ve modern web teknolojileri (FastAPI, React) ile proje deneyimi',
      'P2P ağ protokolleri ve RAG tabanlı yapay zeka ajanları geliştirme tecrübesi',
      'Git / GitHub ile versiyon kontrolü, temiz kod (Clean Code) ve açık kaynak disiplini',
      'İngilizce teknik dokümantasyonları ve araştırma makalelerini rahatça takip edebilme'
    ],
    weaknesses: [
      'Topluluk önünde teknik sunum yaparken duyulan ilk heyecan ve çekingenlik',
      'Mükemmeliyetçilik sebebiyle zaman zaman görev tahminlerinde (estimation) gecikme riski',
      'Büyük ölçekli kurumsal dağıtık sistemlerde (Kubernetes, Kafka) saha pratiğinin azlığı',
      'Profesyonel sektörel çevre ve networking kanallarını henüz tam kapasite kullanamama'
    ],
    opportunities: [
      'Savunma sanayii ve teknopark firmalarının sunduğu Ortak Eğitim / Aday Mühendislik programları',
      'TEKNOFEST, TÜBİTAK 2209 ve açık kaynak hackathonları aracılığıyla görünürlük kazanma',
      'Yapay zeka (LLM / RAG) ve otonom sistemler alanındaki yoğun sektörel talep',
      'Üniversite mezunlar ağı ve LinkedIn üzerinden sektör liderleriyle mentörlük fırsatları'
    ],
    threats: [
      'Giriş seviyesi (Junior) yazılım pozisyonlarında hızla artan rekabet ve başvuru yoğunluğu',
      'Teknolojilerin ve framework ekosistemlerinin olağanüstü hızla değişmesi ve eskiyebilmesi',
      'Ekonomik belirsizlikler nedeniyle bazı şirketlerin staj kontenjanlarını daraltması',
      'Akademik ders yükü ile sektörel proje geliştirme temposunun çakışması ve tükenmişlik riski'
    ],
    strategySummary: 'Güçlü yönüm olan P2P ağ ve yapay zeka projelerimi TEKNOFEST ve GitHub portföyü ile kanıtlayarak, savunma sanayii ortak eğitim programlarına erken başvuruda bulunacağım. Mükemmeliyetçilik zafiyetimi çevik (Agile/Scrum) zaman bloklama yöntemleriyle aşacağım.'
  },
  grow: {
    focusTitle: 'Savunma Sanayiinde Ortak Eğitim / Aday Mühendislik Kabulü Almak',
    timeline: '2026 - 2027 Bahar Dönemi (Önümüzdeki 6 Ay)',
    commitmentLevel: 9,
    goal: [
      'Önümüzdeki 6 ay içerisinde ASELSAN, HAVELSAN veya TÜBİTAK BİLGEM bünyesinde Aday Mühendis / Ortak Eğitim stajyeri olarak kabul almak.',
      'Yapay zeka veya sistem programlama alanında kurumsal standartlarda en az 1 kapsamlı uçtan uca portföy projesini yayına almak.',
      'ATS uyumlu CV ve profesyonel LinkedIn profilini tamamlayıp haftada en az 2 hedeflenmiş teknik başvuru gerçekleştirmek.'
    ],
    reality: [
      'Şu anda 2. sınıf öğrencisiyim, genel not ortalamam (GPA) 2.87 / 4.00 seviyesindedir.',
      'C++, Python ve modern web mimarilerinde çalışan projelerim var fakat henüz kurumsal bir şirkette staj yapmadım.',
      'GitHub üzerinde açık kaynaklı Readest ve Filee projelerine somut katkılarım ve onaylanan PR\'larım bulunuyor.'
    ],
    options: [
      'Seçenek A: Üniversite kariyer merkezinin düzenlediği sektör günlerine katılıp şirketlerin İK ve teknik liderleriyle yüz yüze mülakat yapmak.',
      'Seçenek B: LinkedIn üzerinden HAVELSAN, ASELSAN ve TÜBİTAK\'ta çalışan mezunlarımıza ulaşıp mentörlük ve referans desteği talep etmek.',
      'Seçenek C: TEKNOFEST ve açık kaynak yapay zeka projelerime odaklanarak teknik yetkinliğimi jüri önünde kanıtlayıp doğrudan teklif almak.',
      'Seçenek D: Haftada 4 saat LeetCode ve algoritmik mülakat hazırlığı yaparak teknik eleme sınavlarına eksiksiz hazırlanmak.'
    ],
    will: [
      'Bu hafta sonu CV ve Niyet Mektubu şablonlarını güncelleyip Kariyer.net ve şirket portalları üzerinden başvuruları başlatacağım.',
      'Kasım ayı sonuna kadar açık kaynak yapay zeka projeme kapsamlı test ve mimari şeması ekleyip GitHub\'da öne çıkaracağım.',
      'Haftalık başvuru ve mülakat takip çizelgesi oluşturarak her Cuma günü ilerlememi değerlendireceğim.',
      'Gerektiğinde danışman hocamdan akademik referans mektubu temin edeceğim.'
    ]
  },
  cv: {
    personal: {
      fullName: 'RAMAZAN ERDOĞAN',
      title: 'Bilgisayar Mühendisliği Öğrencisi',
      email: 'ramerdo156work@gmail.com',
      phone: '+90 (554) 140 5785',
      location: 'Konya, Türkiye',
      linkedin: 'www.linkedin.com/in/ramazan-erdoğan-977844405',
      medium: 'https://medium.com/@ramerdogan618',
      github: 'https://github.com/Armone0',
      website: 'https://github.com/Armone0',
      summary: 'Yazılım geliştirme temellerini pratik projelerle pekiştiren, açık kaynak ekosistemi ve yapay zeka teknolojileriyle ilgilenen Bilgisayar Mühendisliği 2. sınıf öğrencisi. HSD bünyesinde teknik yazarlık yaparak öğrendiklerini paylaşmayı seven, araştırmacı ve gelişime açık bir mühendis adayı.'
    },
    education: [
      {
        school: 'Necmettin Erbakan Üniversitesi',
        department: 'Bilgisayar Mühendisliği (2. Sınıf)',
        degree: 'Bilgisayar Mühendisliği (2. Sınıf)',
        years: '2025 - 2029 (Beklenen)',
        dates: '2025 - 2029 (Beklenen)',
        gpa: '2.87 / 4.00',
        details: ''
      }
    ],
    skills: {
      programming: ['Python', 'Java', 'C', 'Rust', 'HTML', 'Tauri'],
      languages: ['Python', 'Java', 'C', 'Rust', 'HTML', 'Tauri'],
      frameworks: ['React', 'Node.js', 'Tailwind CSS', 'PyTorch', 'NumPy'],
      tools: ['Git / GitHub', 'Docker', 'Linux (Ubuntu)', 'VSC'],
      soft: ['Teknik yazılar', 'Fotoğrafçılık', 'Oyun'],
      foreignLanguages: []
    },
    projects: [
      {
        name: 'Readest — Obsidian Not Senkronizasyonu & Açık Kaynak Katkısı',
        tech: 'Açık Kaynak (Open Source), Obsidian (PKM), Not Senkronizasyonu, Markdown, Git',
        link: 'github.com/Armone0/obsidian-readest-sync',
        bullets: [
          'Açık kaynaklı modern e-kitap okuyucusu Readest ile Obsidian kişisel bilgi yönetim sistemi (PKM) arasındaki alıntı ve not senkronizasyon köprüsünün kurulmasına katkı sağlandı.',
          'Okunan dijital kitaplardan alınan özet ve vurguların doğrudan kişisel Obsidian bilgi tabanına aktarılması sağlanarak kesintisiz bir okuma-öğrenme iş akışı elde edildi.'
        ]
      },
      {
        name: 'Filee — Açık Kaynak Yerelleştirme & Topluluk Katkısı',
        tech: 'Open Source Contribution, i18n & Yerelleştirme, Git & GitHub PR, Dosya Formatları',
        link: 'github.com/KnifeLemon/Filee',
        bullets: [
          'Çevrimdışı ve gizlilik odaklı açık kaynak dosya dönüştürme aracı Filee projesine kapsamlı Türkçe dil desteği (i18n yerelleştirme) ve topluluk katkıları sunuldu.',
          'GitHub açık kaynak ekosisteminde Pull Request (PR) kültürü, çok dilli arayüz metinlerinin yönetimi ve açık kaynak katkı döngüleri bizzat deneyimlendi.'
        ]
      },
      {
        name: 'Readest — Çekirdek Geliştirme & Not Senkronizasyonu (PR #7079, #7113)',
        tech: 'TypeScript, Next.js / React, Tauri, Açık Kaynak (Open Source)',
        link: 'https://github.com/readest',
        bullets: [
          'Açık kaynaklı küresel e-kitap okuyucusu Readest projesinde; Web ve Android arasındaki özel kitap kapağı (custom cover) senkronizasyon hatası tespit edilerek bulut/cihaz önbellek mimarisi düzeltildi ve Jest birim testleri (unit test) yazıldı (PR #7079).',
          'Not eşleme katmanındaki (HardcoverSyncMapStore) veri basma sorunu çözülerek kütüphane veri bütünlüğü optimize edildi; ayrıca okuma notlarını doğrudan Obsidian bilgi kasasına aktaran senkronizasyon entegrasyonu geliştirildi.'
        ]
      }
    ],
    experience: [
      {
        role: 'Teknik Blog & Medium Yazarı',
        company: 'Huawei Student Developers (HSD NEÜ)',
        dates: '2026 - Günümüz',
        location: 'Konya / Hibrit',
        bullets: [
          'Yapay zeka, makine öğrenmesi ve güncel yazılım teknolojileri üzerine teknik araştırma yazıları ve rehber içerikler üretmek.',
          'Karmaşık mühendislik ve algoritma kavramlarını öğrenci topluluğuna sade, anlaşılır bir dille aktarmak; teknik araştırma ve dokümantasyon disiplini kazanmak.'
        ]
      }
    ],
    certifications: [
      'Açık Kaynak GitHub Katkıları (Readest & Filee Projeleri)',
      'HSD NEÜ Topluluk Aktif Katkıcısı & Teknik Blog Yazarlığı'
    ],
    interests: [
      'HSD NEÜ Medium Yazarlığı',
      'Üretken Yapay Zeka (LLM)',
      'Açık Kaynak Yazılım Katkıları',
      'Fantastik Edebiyat & Çeviri',
      'Prosedürel Algoritmalar'
    ],
    activities: 'HSD NEÜ Medium Yazarlığı, Üretken Yapay Zeka (LLM), Açık Kaynak Yazılım Katkıları, Fantastik Edebiyat & Çeviri, Prosedürel Algoritmalar',
    references: 'Akademik ve kurumsal referanslar talep üzerine memnuniyetle sunulacaktır.'
  },
  letter: {
    studentInfo: {
      fullName: 'Ramazan Erdoğan',
      department: 'Bilgisayar Mühendisliği (2. Sınıf)',
      studentId: '25100011009',
      email: 'ramerdo156work@gmail.com',
      phone: '+90 (554) 140 5785',
      city: 'Konya',
      date: '2026-11-04'
    },
    recipientInfo: {
      company: 'TÜBİTAK BİLGEM Yapay Zeka Enstitüsü (YZE)',
      department: 'Yapay Zeka ve Büyük Dil Modelleri Ar-Ge Direktörlüğü',
      city: 'Gebze, Kocaeli / Ankara, Türkiye',
      programTitle: 'Yapay Zeka Stajyer Araştırmacı Programı'
    },
    salutation: 'Sayın Yetkili ve Değerlendirme Kurulu,',
    intro: 'Necmettin Erbakan Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisi olarak; enstitünüzün büyük dil modelleri (LLM), üretken yapay zeka ve veri odaklı yapay zeka mimarileri üzerine yürüttüğü öncü Ar-Ge çalışmalarını büyük bir ilgiyle takip etmekteyim. 2026-2027 akademik dönemi kapsamında açılan Yapay Zeka Stajyer Araştırmacı Programı\'na başvurmaktan onur duyuyorum.',
    reason: 'Yapay Zeka Enstitüsü\'nün ülkemimizin milli teknoloji ve yapay zeka stratejisine yön veren yenilikçi ekosistemi, teorik bilgi birikimimi kurumsal araştırma standartlarında pratiğe dönüştürmek istediğim en ideal çalışma ortamını temsil etmektedir. Araştırmacılara sunulan nitelikli mentörlük iklimi ve açık kaynak iş birliği kültürü bu başvuruyu yapmamdaki en temel motivasyon kaynağımdır.',
    qualifications: 'Lisans öğrenimim süresince algoritmalar, açık kaynak geliştirme süreçleri ve yapay zeka uygulamaları üzerine odaklandım. Küresel açık kaynaklı e-kitap okuyucu Readest projesinde çekirdek geliştirme ve not senkronizasyonu katkısı sağladım; Filee projesinde yerelleştirme döngülerini deneyimledim. Huawei Student Developers (HSD) bünyesinde teknik blog yazarlığı yaparak yapay zeka ve mühendislik kavramlarını sade dokümantasyonlara dönüştürme disiplini kazandım. Python, Linux ve Git ekosistemlerini aktif olarak kullanıyorum.',
    contributions: 'Enstitünüzde yer alabileceğim projelerde; analitik problem çözme yeteneğim, sürekli öğrenmeye açık araştırmacı yaklaşımım ve takım çalışması disiplinimle ekibinize somut katkılar sunacağıma yürekten inanıyorum. Karşılaşılacak teknik problemleri sabırla sahiplenerek hem kurumsal araştırma hedeflerinize değer katmak hem de enstitünüzün yapay zeka kültürünü özümsemek en büyük hedefimdir.',
    closing: 'Özgeçmişimi incelemelerinize sunar, enstitünüzün vizyonuna sağlayabileceğim katkıları ve araştırma motivasyonumu şahsen aktarabileceğim bir mülakat imkânı tanımanızı saygılarımla arz ederim.',
    signatureTitle: 'Bilgisayar Mühendisi Adayı'
  },
  guests: {
    list: [
      {
        id: 1,
        title: 'Geçmiş Seneden Gelen Mezunlar',
        content: `- Şimdi dürüst olacağım. Sunuma gelen kişilerin bizden önce bu yollardan geçmiş olmaları, bilgi birikimlerinin fazla olması onları dinlemek için güzel bir motivasyon. Ama (kesinlikle saygısızlık olmasın) onlar bizim yerimizdeyken düşünüş tarzları ile şu an benim düşünüş tarzım aynı değildi. Evet aralarında sonradan doğru yola girmiş olanlar var, en başından beri doğru yolun kendisi olan var ama genel bir değerlendirme yapacak olursam:

- Bu konuşmadan tam olarak istediğimi alamadım. Şu anki durumum için alamadım, gelecek için bana faydalı şeyler aktardılar ona sözüm yok ama geleceğe giden yol için daha detaylı bir şeyler beklerdim. Ama hoca değiller sonuçta o yüzden bir sorun yok.

- Özellikle TEKNOFEST ile ilgili dedikleri şeyler beni ikna etti diyebilirim. Bu konuda daha da istekli oldum.`
      },
      {
        id: 2,
        title: 'Ali Tunç',
        content: `- Ali Tunç'un sektördeki deneyimlerini ve kariyer yolculuğunu samimi bir dille aktarması oldukça aydınlatıcı oldu. Özellikle sektörün gerçek dinamikleri, iş hayatındaki adaptasyon süreçleri ve genç mühendislerden beklentiler konusunda verdiği somut örnekler ufkumu açtı.

- Özellikle iş hayatına adaptasyon, öğrencilik döneminde edinilmesi gereken kritik beceriler ve karşılaşılabilecek zorluklara yaklaşım konusundaki tavsiyeleri kafamdaki soru işaretlerini netleştirdi.

- Genel anlamda kariyer hedeflerimi daha somut bir zemine oturtmamı sağlayan ve kişisel gelişimime doğrudan katkı sunan verimli bir seminer oldu.`
      }
    ]
  }
};

// Default Clean Blank Slate Data (Boş Kağıt / Başlangıç Durumu)
const BLANK_DATA = {
  activeTab: 'cv',
  zoomLevel: 100,
  meta: {
    studentName: '',
    studentId: '',
    department: '',
    courseName: 'İletişim ve Sunum Teknikleri',
    date: new Date().toISOString().split('T')[0],
    targetRole: ''
  },
  swot: {
    targetCareer: '',
    strengths: [],
    weaknesses: [],
    opportunities: [],
    threats: [],
    strategySummary: ''
  },
  grow: {
    focusTitle: '',
    timeline: '',
    commitmentLevel: 8,
    goal: [],
    reality: [],
    options: [],
    will: []
  },
  cv: {
    personal: {
      fullName: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      medium: '',
      github: '',
      website: '',
      summary: ''
    },
    education: [
      {
        school: '',
        department: '',
        degree: '',
        years: '',
        dates: '',
        gpa: '',
        details: ''
      }
    ],
    skills: {
      programming: [],
      languages: [],
      frameworks: [],
      tools: [],
      soft: [],
      foreignLanguages: []
    },
    projects: [
      {
        name: '',
        tech: '',
        link: '',
        bullets: ['']
      }
    ],
    experience: [],
    certifications: [],
    interests: [],
    activities: '',
    references: 'Akademik ve kurumsal referanslar talep üzerine memnuniyetle sunulacaktır.'
  },
  letter: {
    studentInfo: {
      fullName: '',
      department: '',
      studentId: '',
      email: '',
      phone: '',
      city: '',
      date: new Date().toISOString().split('T')[0]
    },
    recipientInfo: {
      company: '',
      department: '',
      city: '',
      programTitle: ''
    },
    salutation: 'Sayın Yetkili ve Değerlendirme Kurulu,',
    intro: '',
    reason: '',
    qualifications: '',
    contributions: '',
    closing: '',
    signatureTitle: 'Bilgisayar Mühendisi Adayı'
  },
  guests: {
    list: [
      {
        id: 1,
        title: '1. Seminer Konuğu / Konuşmacı',
        content: ''
      },
      {
        id: 2,
        title: '2. Seminer Konuğu / Konuşmacı',
        content: ''
      }
    ]
  }
};

// Application Default Data is Blank Slate
const DEFAULT_DATA = BLANK_DATA;

// Global State
let AppState = {};
window.AppState = AppState;

/**
 * Normalizes state and performs two-way universal sync across modules.
 * Strictly preserves user's custom name, ID, and course name without accidental overwrites.
 */
function normalizeAndSyncState(state) {
  if (!state || typeof state !== 'object') return;

  if (!state.meta) state.meta = {};
  if (!state.cv) state.cv = JSON.parse(JSON.stringify(BLANK_DATA.cv));
  if (!state.cv.personal) state.cv.personal = {};
  if (!state.cv.education || !Array.isArray(state.cv.education)) state.cv.education = [];
  if (!state.cv.skills) state.cv.skills = {};
  if (!state.cv.projects || !Array.isArray(state.cv.projects)) state.cv.projects = [];
  if (!state.cv.experience || !Array.isArray(state.cv.experience)) state.cv.experience = [];
  if (!state.cv.certifications || !Array.isArray(state.cv.certifications)) state.cv.certifications = [];
  if (!state.letter) state.letter = JSON.parse(JSON.stringify(BLANK_DATA.letter));
  if (!state.letter.studentInfo) state.letter.studentInfo = {};
  if (!state.letter.recipientInfo) state.letter.recipientInfo = {};
  if (!state.swot) state.swot = JSON.parse(JSON.stringify(BLANK_DATA.swot));
  if (!state.grow) state.grow = JSON.parse(JSON.stringify(BLANK_DATA.grow));
  if (!state.guests || !Array.isArray(state.guests.list)) state.guests = JSON.parse(JSON.stringify(BLANK_DATA.guests));

  // 1. Universal Two-Way Sync for Student Name:
  const rawMetaName = state.meta.studentName && state.meta.studentName.trim();
  const rawCvName = state.cv.personal.fullName && state.cv.personal.fullName.trim();
  const rawLetterName = state.letter.studentInfo.fullName && state.letter.studentInfo.fullName.trim();
  const effectiveName = rawMetaName || rawCvName || rawLetterName || '';
  state.meta.studentName = effectiveName;
  state.cv.personal.fullName = effectiveName;
  state.letter.studentInfo.fullName = effectiveName;

  // 2. Universal Two-Way Sync for Student ID:
  const rawMetaId = state.meta.studentId && state.meta.studentId.trim();
  const rawLetterId = state.letter.studentInfo.studentId && state.letter.studentInfo.studentId.trim();
  const effectiveId = rawMetaId || rawLetterId || '';
  state.meta.studentId = effectiveId;
  state.letter.studentInfo.studentId = effectiveId;

  // 3. Department:
  const rawDept = (state.meta.department && state.meta.department.trim()) ||
                  (state.letter.studentInfo.department && state.letter.studentInfo.department.trim()) ||
                  (state.cv.education[0] && state.cv.education[0].department && state.cv.education[0].department.trim()) || '';
  state.meta.department = rawDept;
  state.letter.studentInfo.department = rawDept;

  // 4. Course Name:
  state.meta.courseName = (state.meta.courseName && state.meta.courseName.trim()) || 'İletişim ve Sunum Teknikleri';

  // 5. Contact Info (Email & Phone):
  const rawEmail = (state.cv.personal.email && state.cv.personal.email.trim()) ||
                   (state.letter.studentInfo.email && state.letter.studentInfo.email.trim()) || '';
  const rawPhone = (state.cv.personal.phone && state.cv.personal.phone.trim()) ||
                   (state.letter.studentInfo.phone && state.letter.studentInfo.phone.trim()) || '';
  state.cv.personal.email = rawEmail;
  state.letter.studentInfo.email = rawEmail;
  state.cv.personal.phone = rawPhone;
  state.letter.studentInfo.phone = rawPhone;

  // 6. Ensure guests list has at least 2 items
  while (state.guests.list.length < 2) {
    state.guests.list.push({ id: Date.now() + state.guests.list.length, title: `${state.guests.list.length + 1}. Seminer Konuğu`, content: '' });
  }
}

/**
 * Initialize state from localStorage or load defaults (Clean Blank Slate)
 */
function initState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      AppState = JSON.parse(raw);
      normalizeAndSyncState(AppState);
    } else {
      AppState = JSON.parse(JSON.stringify(BLANK_DATA));
      normalizeAndSyncState(AppState);
      saveState();
    }
  } catch (err) {
    console.error('State load error, falling back to blank:', err);
    AppState = JSON.parse(JSON.stringify(BLANK_DATA));
    normalizeAndSyncState(AppState);
  }
  window.AppState = AppState;
}

/**
 * Save state to localStorage with visual indicator
 */
let saveTimeout = null;
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(AppState));
    const indicator = document.getElementById('save-indicator');
    if (indicator) {
      indicator.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span class="text-emerald-400 font-medium">Kaydedildi</span>';
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        indicator.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-500"></span><span class="text-slate-400">Kaydedildi</span>';
      }, 1500);
    }
  } catch (err) {
    console.error('Save error:', err);
  }
}

/**
 * Toast notifications
 */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  const bg = type === 'success' ? 'bg-emerald-600 border-emerald-500' : 
             type === 'danger' ? 'bg-rose-600 border-rose-500' : 'bg-indigo-600 border-indigo-500';
  
  toast.className = `flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-xs font-semibold shadow-2xl border ${bg} transition-all duration-300 transform translate-y-2 opacity-0`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });
  
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/**
 * Switch Active Tab
 */
function switchTab(tabId) {
  AppState.activeTab = tabId;
  saveState();
  
  // Update Tab buttons UI
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.className = 'nav-tab-btn active px-4 py-2 text-xs font-bold rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/30 flex items-center gap-2 border border-indigo-500 transition-all';
    } else {
      btn.className = 'nav-tab-btn px-4 py-2 text-xs font-medium rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2 border border-transparent transition-all';
    }
  });

  // Render Editor Form & Preview
  renderEditor();
  renderPreview();
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Handle Zoom and Scale Controls
 */
function setZoom(level) {
  const sheet = document.getElementById('a4-sheet');
  const zoomDisplay = document.getElementById('zoom-display');
  if (!sheet) return;

  if (level === 'fit') {
    const parentWidth = sheet.parentElement.clientWidth - 48; // padding
    const scale = Math.min(Math.max(parentWidth / 794, 0.45), 1.15);
    sheet.style.transform = `scale(${scale})`;
    if (zoomDisplay) zoomDisplay.textContent = `${Math.round(scale * 100)}% (Sığdır)`;
    AppState.zoomLevel = 'fit';
  } else {
    const val = parseInt(level, 10);
    sheet.style.transform = `scale(${val / 100})`;
    if (zoomDisplay) zoomDisplay.textContent = `${val}%`;
    AppState.zoomLevel = val;
  }
}

/**
 * Dynamic Chip Click Handler - Appends suggestion chip to active list or input
 */
function handleChipClick(moduleName, fieldName, text) {
  if (moduleName === 'swot') {
    if (!AppState.swot[fieldName].includes(text)) {
      AppState.swot[fieldName].push(text);
      saveState();
      renderEditor();
      renderPreview();
      showToast(`SWOT: "${text.substring(0, 24)}..." eklendi`, 'success');
    }
  } else if (moduleName === 'grow') {
    if (!AppState.grow[fieldName].includes(text)) {
      AppState.grow[fieldName].push(text);
      saveState();
      renderEditor();
      renderPreview();
      showToast(`GROW: Madde başarıyla eklendi`, 'success');
    }
  } else if (moduleName === 'cv-skill') {
    if (!AppState.cv.skills[fieldName]) AppState.cv.skills[fieldName] = [];
    if (!AppState.cv.skills[fieldName].includes(text)) {
      AppState.cv.skills[fieldName].push(text);
      if (fieldName === 'programming') AppState.cv.skills.languages = AppState.cv.skills.programming;
      if (fieldName === 'languages') AppState.cv.skills.programming = AppState.cv.skills.languages;
      saveState();
      renderEditor();
      renderPreview();
      showToast(`Beceri eklendi: ${text}`, 'success');
    }
  }
  if (window.lucide) window.lucide.createIcons();
}

/**
 * List Item Removers
 */
function removeItem(moduleName, fieldName, index) {
  if (moduleName === 'swot') {
    AppState.swot[fieldName].splice(index, 1);
  } else if (moduleName === 'grow') {
    AppState.grow[fieldName].splice(index, 1);
  } else if (moduleName === 'cv-skill') {
    if (AppState.cv.skills[fieldName]) {
      AppState.cv.skills[fieldName].splice(index, 1);
      if (fieldName === 'programming') AppState.cv.skills.languages = AppState.cv.skills.programming;
      if (fieldName === 'languages') AppState.cv.skills.programming = AppState.cv.skills.languages;
    }
  } else if (moduleName === 'cv-education') {
    AppState.cv.education.splice(index, 1);
  } else if (moduleName === 'cv-project') {
    AppState.cv.projects.splice(index, 1);
  } else if (moduleName === 'cv-experience') {
    AppState.cv.experience.splice(index, 1);
  } else if (moduleName === 'cv-cert') {
    AppState.cv.certifications.splice(index, 1);
  } else if (moduleName === 'guest') {
    AppState.guests.list.splice(index, 1);
  }
  saveState();
  renderEditor();
  renderPreview();
  if (window.lucide) window.lucide.createIcons();
}

/**
 * Add Item Helpers
 */
function addItem(moduleName, fieldName, inputId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;

  if (moduleName === 'swot') {
    AppState.swot[fieldName].push(val);
  } else if (moduleName === 'grow') {
    AppState.grow[fieldName].push(val);
  } else if (moduleName === 'cv-skill') {
    if (!AppState.cv.skills[fieldName]) AppState.cv.skills[fieldName] = [];
    AppState.cv.skills[fieldName].push(val);
    if (fieldName === 'programming') AppState.cv.skills.languages = AppState.cv.skills.programming;
    if (fieldName === 'languages') AppState.cv.skills.programming = AppState.cv.skills.languages;
  } else if (moduleName === 'cv-cert') {
    AppState.cv.certifications.push(val);
  }
  input.value = '';
  saveState();
  renderEditor();
  renderPreview();
  if (window.lucide) window.lucide.createIcons();
}

/**
 * =========================================================================
 * EDITOR PANEL RENDERERS
 * =========================================================================
 */
function renderEditor() {
  const container = document.getElementById('editor-content');
  if (!container) return;

  const tab = AppState.activeTab;
  if (tab === 'swot') {
    container.innerHTML = getSwotEditorHtml();
  } else if (tab === 'grow') {
    container.innerHTML = getGrowEditorHtml();
  } else if (tab === 'cv') {
    container.innerHTML = getCvEditorHtml();
  } else if (tab === 'letter') {
    container.innerHTML = getLetterEditorHtml();
  } else if (tab === 'guests') {
    container.innerHTML = getGuestsEditorHtml();
  }

  // Attach input sync listeners to all text inputs/textareas
  attachEditorListeners();
}

/**
 * SWOT Editor Template
 */
function getSwotEditorHtml() {
  const s = AppState.swot;
  const m = AppState.meta;

  const renderBadge = (list) => {
    const count = list.length;
    const ok = count >= 3;
    return `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${ok ? 'bg-emerald-950 text-emerald-400 border border-emerald-700/60' : 'bg-amber-950 text-amber-400 border border-amber-700/60'}">${count} Madde ${ok ? '✓' : '(Min 3 önerilir)'}</span>`;
  };

  const renderList = (items, fieldName) => {
    return items.map((item, idx) => `
      <div class="flex items-start gap-2 bg-slate-900/80 p-2 rounded-md border border-slate-700/60 text-xs text-slate-200">
        <span class="text-indigo-400 font-bold mt-0.5">•</span>
        <span class="flex-1 leading-relaxed">${escapeHtml(item)}</span>
        <button onclick="removeItem('swot', '${fieldName}', ${idx})" class="text-slate-400 hover:text-rose-400 p-1" title="Maddeyi Sil">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `).join('');
  };

  return `
    <div class="space-y-6">
      <!-- General Header Info -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="user-check" class="w-4 h-4 text-indigo-400"></i> Öğrenci & Sınav Bilgileri
          </span>
          <span class="text-[11px] text-slate-400">Tüm modüllere yansır</span>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Ad Soyad</label>
            <input type="text" data-sync="meta.studentName" value="${escapeHtml(m.studentName)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Öğrenci Numarası</label>
            <input type="text" data-sync="meta.studentId" value="${escapeHtml(m.studentId)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Bölüm & Sınıf</label>
            <input type="text" data-sync="meta.department" value="${escapeHtml(m.department)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Ders / Sınav Adı</label>
            <input type="text" data-sync="meta.courseName" value="${escapeHtml(m.courseName)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">SWOT Hedef Alanı / Kariyer Vizyonu</label>
          <input type="text" data-sync="swot.targetCareer" value="${escapeHtml(s.targetCareer)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
        </div>
      </div>

      <!-- Strengths (Güçlü Yönler) -->
      <div class="bg-slate-800/80 border border-emerald-900/60 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400 font-bold text-xs">S</span>
            <span class="text-sm font-bold text-emerald-300">Güçlü Yönler (Strengths)</span>
          </div>
          ${renderBadge(s.strengths)}
        </div>
        
        <!-- Quick Chips -->
        <div class="flex flex-wrap gap-1.5 pt-1">
          <span class="text-[10px] text-slate-400 w-full mb-0.5">💡 Hızlı Öneri Çipleri (Tıklayarak ekleyin):</span>
          <button type="button" onclick="handleChipClick('swot', 'strengths', 'Algoritmik düşünme ve analitik problem çözme')" class="chip-btn">+ Algoritmik Düşünme</button>
          <button type="button" onclick="handleChipClick('swot', 'strengths', 'Python, C++ ve modern web mimarilerinde proje pratiği')" class="chip-btn">+ Python & C++ Hakimiyeti</button>
          <button type="button" onclick="handleChipClick('swot', 'strengths', 'P2P ağ tünelleme ve soket programlama bilgisi')" class="chip-btn">+ P2P & Ağ Protokolleri</button>
          <button type="button" onclick="handleChipClick('swot', 'strengths', 'Git/GitHub ile sürüm kontrolü ve temiz kod prensipleri')" class="chip-btn">+ Git & Temiz Kod</button>
          <button type="button" onclick="handleChipClick('swot', 'strengths', 'İngilizce teknik dokümantasyonları rahat takip edebilme')" class="chip-btn">+ B2 Teknik İngilizce</button>
          <button type="button" onclick="handleChipClick('swot', 'strengths', 'Takım çalışması ve hackathon yarışma deneyimi')" class="chip-btn">+ Takım & Hackathon</button>
        </div>

        <div class="space-y-1.5 pt-1">
          ${renderList(s.strengths, 'strengths')}
        </div>

        <div class="flex gap-2 pt-1">
          <input type="text" id="add-strength-input" placeholder="Yeni güçlü yön maddesi yazın..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-emerald-500 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('swot', 'strengths', 'add-strength-input')">
          <button onclick="addItem('swot', 'strengths', 'add-strength-input')" class="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Ekle
          </button>
        </div>
      </div>

      <!-- Weaknesses (Zayıf Yönler) -->
      <div class="bg-slate-800/80 border border-amber-900/60 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-amber-950 border border-amber-700/60 flex items-center justify-center text-amber-400 font-bold text-xs">W</span>
            <span class="text-sm font-bold text-amber-300">Zayıf Yönler (Weaknesses)</span>
          </div>
          ${renderBadge(s.weaknesses)}
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <span class="text-[10px] text-slate-400 w-full mb-0.5">💡 Hızlı Öneri Çipleri:</span>
          <button type="button" onclick="handleChipClick('swot', 'weaknesses', 'Topluluk önünde teknik sunum yaparken duyulan heyecan')" class="chip-btn">+ Sunum Heyecanı</button>
          <button type="button" onclick="handleChipClick('swot', 'weaknesses', 'Mükemmeliyetçilik sebebiyle zaman zaman görev tahminlerinde zorlanma')" class="chip-btn">+ Mükemmeliyetçilik</button>
          <button type="button" onclick="handleChipClick('swot', 'weaknesses', 'Büyük veri ve dağıtık mimarilerde saha tecrübesi eksikliği')" class="chip-btn">+ Dağıtık Sistem Pratiği</button>
          <button type="button" onclick="handleChipClick('swot', 'weaknesses', 'Sektörel profesyonel ağ ve networking çekingenliği')" class="chip-btn">+ Networking Eksikliği</button>
        </div>

        <div class="space-y-1.5 pt-1">
          ${renderList(s.weaknesses, 'weaknesses')}
        </div>

        <div class="flex gap-2 pt-1">
          <input type="text" id="add-weakness-input" placeholder="Yeni zayıf yön maddesi yazın..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-amber-500 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('swot', 'weaknesses', 'add-weakness-input')">
          <button onclick="addItem('swot', 'weaknesses', 'add-weakness-input')" class="px-3 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Ekle
          </button>
        </div>
      </div>

      <!-- Opportunities (Fırsatlar) -->
      <div class="bg-slate-800/80 border border-sky-900/60 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-sky-950 border border-sky-700/60 flex items-center justify-center text-sky-400 font-bold text-xs">O</span>
            <span class="text-sm font-bold text-sky-300">Fırsatlar (Opportunities)</span>
          </div>
          ${renderBadge(s.opportunities)}
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <span class="text-[10px] text-slate-400 w-full mb-0.5">💡 Hızlı Öneri Çipleri:</span>
          <button type="button" onclick="handleChipClick('swot', 'opportunities', 'Savunma sanayii ve teknokent firmalarının Ortak Eğitim / Aday Mühendislik programları')" class="chip-btn">+ Savunma Sanayii Ortak Eğitim</button>
          <button type="button" onclick="handleChipClick('swot', 'opportunities', 'TEKNOFEST ve TÜBİTAK 2209 proje destekleri')" class="chip-btn">+ TEKNOFEST & TÜBİTAK</button>
          <button type="button" onclick="handleChipClick('swot', 'opportunities', 'Yapay zeka (LLM / RAG) teknolojilerindeki hızlı büyüme')" class="chip-btn">+ Yapay Zeka Talebi</button>
          <button type="button" onclick="handleChipClick('swot', 'opportunities', 'Açık kaynak toplulukları ile küresel görünürlük kazanma')" class="chip-btn">+ Açık Kaynak Topluluğu</button>
        </div>

        <div class="space-y-1.5 pt-1">
          ${renderList(s.opportunities, 'opportunities')}
        </div>

        <div class="flex gap-2 pt-1">
          <input type="text" id="add-opportunity-input" placeholder="Yeni fırsat maddesi yazın..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-sky-500 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('swot', 'opportunities', 'add-opportunity-input')">
          <button onclick="addItem('swot', 'opportunities', 'add-opportunity-input')" class="px-3 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Ekle
          </button>
        </div>
      </div>

      <!-- Threats (Tehditler) -->
      <div class="bg-slate-800/80 border border-rose-900/60 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-rose-950 border border-rose-700/60 flex items-center justify-center text-rose-400 font-bold text-xs">T</span>
            <span class="text-sm font-bold text-rose-300">Tehditler (Threats)</span>
          </div>
          ${renderBadge(s.threats)}
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <span class="text-[10px] text-slate-400 w-full mb-0.5">💡 Hızlı Öneri Çipleri:</span>
          <button type="button" onclick="handleChipClick('swot', 'threats', 'Junior seviyedeki yoğun başvuru sayısı ve rekabet baskısı')" class="chip-btn">+ Junior Yoğunluğu</button>
          <button type="button" onclick="handleChipClick('swot', 'threats', 'Teknolojilerin ve frameworklerin çok hızlı değişmesi')" class="chip-btn">+ Hızlı Teknoloji Değişimi</button>
          <button type="button" onclick="handleChipClick('swot', 'threats', 'Ders yoğunluğu ile proje takviminin çakışması ve tükenmişlik riski')" class="chip-btn">+ Zaman Baskısı / Tükenmişlik</button>
        </div>

        <div class="space-y-1.5 pt-1">
          ${renderList(s.threats, 'threats')}
        </div>

        <div class="flex gap-2 pt-1">
          <input type="text" id="add-threat-input" placeholder="Yeni tehdit maddesi yazın..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-rose-500 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('swot', 'threats', 'add-threat-input')">
          <button onclick="addItem('swot', 'threats', 'add-threat-input')" class="px-3 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Ekle
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * GROW Editor Template
 */
function getGrowEditorHtml() {
  const g = AppState.grow;

  const renderBadge = (list) => {
    const count = list.length;
    const ok = count >= 3;
    return `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${ok ? 'bg-emerald-950 text-emerald-400 border border-emerald-700/60' : 'bg-amber-950 text-amber-400 border border-amber-700/60'}">${count} Madde ${ok ? '✓' : '(Min 3 önerilir)'}</span>`;
  };

  const renderList = (items, fieldName) => {
    return items.map((item, idx) => `
      <div class="flex items-start gap-2 bg-slate-900/80 p-2 rounded-md border border-slate-700/60 text-xs text-slate-200">
        <span class="text-indigo-400 font-bold mt-0.5">•</span>
        <span class="flex-1 leading-relaxed">${escapeHtml(item)}</span>
        <button onclick="removeItem('grow', '${fieldName}', ${idx})" class="text-slate-400 hover:text-rose-400 p-1" title="Maddeyi Sil">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `).join('');
  };

  return `
    <div class="space-y-6">
      <!-- Öğrenci & Ders Bilgileri -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="user-check" class="w-4 h-4 text-indigo-400"></i> Öğrenci & Ders Bilgileri
          </span>
          <span class="text-[11px] text-slate-400">Tüm sekmelerle senkronize</span>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Ad Soyad</label>
            <input type="text" data-sync="meta.studentName" value="${escapeHtml(AppState.meta.studentName || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Öğrenci Numarası</label>
            <input type="text" data-sync="meta.studentId" value="${escapeHtml(AppState.meta.studentId || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Bölüm & Sınıf</label>
            <input type="text" data-sync="meta.department" value="${escapeHtml(AppState.meta.department || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Ders / Sınav Adı</label>
            <input type="text" data-sync="meta.courseName" value="${escapeHtml(AppState.meta.courseName || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
        </div>
      </div>

      <!-- GROW Header & Commitment -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="target" class="w-4 h-4 text-indigo-400"></i> GROW Analizi Temel Çerçevesi
          </span>
          <span class="text-[11px] text-slate-400">Koçluk Modeli</span>
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Odak Hedef / Başlık</label>
          <input type="text" data-sync="grow.focusTitle" value="${escapeHtml(g.focusTitle)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Hedeflenen Zaman Aralığı</label>
          <input type="text" data-sync="grow.timeline" value="${escapeHtml(g.timeline)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
        </div>
      </div>

      <!-- G - Goal (Hedef) -->
      <div class="bg-slate-800/80 border border-indigo-900/60 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-indigo-950 border border-indigo-700/60 flex items-center justify-center text-indigo-400 font-bold text-xs">G</span>
            <div>
              <span class="text-sm font-bold text-indigo-300">Goal (Hedef)</span>
              <p class="text-[10px] text-slate-400">Ne başarmak istiyorsun? Başarı senin için ne anlama geliyor?</p>
            </div>
          </div>
          ${renderBadge(g.goal)}
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <span class="text-[10px] text-slate-400 w-full mb-0.5">💡 Öneri Çipleri:</span>
          <button type="button" onclick="handleChipClick('grow', 'goal', '6 ay içinde kurumsal bir savunma sanayii firmasında ortak eğitim kabulü almak')" class="chip-btn">+ Savunma Stajı Kabulü</button>
          <button type="button" onclick="handleChipClick('grow', 'goal', 'Yapay zeka alanında en az 1 adet kapsamlı uçtan uca portföy projesi yayınlamak')" class="chip-btn">+ Uçtan Uca Yapay Zeka Projesi</button>
          <button type="button" onclick="handleChipClick('grow', 'goal', 'Genel not ortalamasını (GPA) 3.40 seviyesinin üzerine çıkarmak')" class="chip-btn">+ GPA 3.40 Hedefi</button>
        </div>

        <div class="space-y-1.5 pt-1">
          ${renderList(g.goal, 'goal')}
        </div>

        <div class="flex gap-2 pt-1">
          <input type="text" id="add-goal-input" placeholder="Yeni hedef maddesi yazın..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('grow', 'goal', 'add-goal-input')">
          <button onclick="addItem('grow', 'goal', 'add-goal-input')" class="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Ekle
          </button>
        </div>
      </div>

      <!-- R - Reality (Mevcut Durum) -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-slate-900 border border-slate-600 flex items-center justify-center text-slate-300 font-bold text-xs">R</span>
            <div>
              <span class="text-sm font-bold text-slate-200">Reality (Mevcut Durum)</span>
              <p class="text-[10px] text-slate-400">Şu an tam olarak hangi noktadasın? Elinde hangi kaynaklar var?</p>
            </div>
          </div>
          ${renderBadge(g.reality)}
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <span class="text-[10px] text-slate-400 w-full mb-0.5">💡 Öneri Çipleri:</span>
          <button type="button" onclick="handleChipClick('grow', 'reality', '3. sınıf öğrencisiyim, GPA 3.32; C++ ve Python dillerine hakimim')" class="chip-btn">+ 3. Sınıf & GPA Durumu</button>
          <button type="button" onclick="handleChipClick('grow', 'reality', 'Pantial ve Price Radar gibi özgün projelerim var ancak test ve dokümanları eksik')" class="chip-btn">+ Proje Envanteri</button>
          <button type="button" onclick="handleChipClick('grow', 'reality', 'CV ve LinkedIn profilim güncel ancak henüz aktif şirket başvurusu yapmadım')" class="chip-btn">+ Başvuru Durumu</button>
        </div>

        <div class="space-y-1.5 pt-1">
          ${renderList(g.reality, 'reality')}
        </div>

        <div class="flex gap-2 pt-1">
          <input type="text" id="add-reality-input" placeholder="Mevcut durum maddesi yazın..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-slate-500 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('grow', 'reality', 'add-reality-input')">
          <button onclick="addItem('grow', 'reality', 'add-reality-input')" class="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Ekle
          </button>
        </div>
      </div>

      <!-- O - Options (Seçenekler) -->
      <div class="bg-slate-800/80 border border-sky-900/60 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-sky-950 border border-sky-700/60 flex items-center justify-center text-sky-400 font-bold text-xs">O</span>
            <div>
              <span class="text-sm font-bold text-sky-300">Options (Seçenekler & Alternatifler)</span>
              <p class="text-[10px] text-slate-400">Hedefe ulaşmak için hangi yollar var? Kimlerden destek alabilirsin?</p>
            </div>
          </div>
          ${renderBadge(g.options)}
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <span class="text-[10px] text-slate-400 w-full mb-0.5">💡 Öneri Çipleri:</span>
          <button type="button" onclick="handleChipClick('grow', 'options', 'Mezunlar ve LinkedIn ağındaki mühendislerle iletişime geçip mentörlük istemek')" class="chip-btn">+ Mezun Ağı & Mentörlük</button>
          <button type="button" onclick="handleChipClick('grow', 'options', 'TEKNOFEST ve açık kaynak yapay zeka projelerine katılarak teknik yetkinliği kanıtlamak')" class="chip-btn">+ TEKNOFEST & Yarışmalar</button>
          <button type="button" onclick="handleChipClick('grow', 'options', 'Üniversite kariyer fuarında İK liderleriyle yüz yüze mülakat yapmak')" class="chip-btn">+ Kariyer Fuarları</button>
        </div>

        <div class="space-y-1.5 pt-1">
          ${renderList(g.options, 'options')}
        </div>

        <div class="flex gap-2 pt-1">
          <input type="text" id="add-options-input" placeholder="Yeni alternatif yol yazın..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-sky-500 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('grow', 'options', 'add-options-input')">
          <button onclick="addItem('grow', 'options', 'add-options-input')" class="px-3 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Ekle
          </button>
        </div>
      </div>

      <!-- W - Will / Way Forward (Eylem Planı & Kararlılık) -->
      <div class="bg-slate-800/80 border border-emerald-900/60 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md bg-emerald-950 border border-emerald-700/60 flex items-center justify-center text-emerald-400 font-bold text-xs">W</span>
            <div>
              <span class="text-sm font-bold text-emerald-300">Will / Way Forward (Eylem & Kararlılık)</span>
              <p class="text-[10px] text-slate-400">İlk olarak tam olarak ne yapacaksın ve ne zaman başlayacaksın?</p>
            </div>
          </div>
          ${renderBadge(g.will)}
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <span class="text-[10px] text-slate-400 w-full mb-0.5">💡 Öneri Çipleri:</span>
          <button type="button" onclick="handleChipClick('grow', 'will', 'Bu hafta sonu ATS uyumlu CV ve niyet mektubunu tamamlayıp ilk başvuruları göndereceğim')" class="chip-btn">+ Bu Hafta Sonu İlk Başvurular</button>
          <button type="button" onclick="handleChipClick('grow', 'will', 'Kasım sonuna kadar GitHub projelerime test ve mimari diyagramları ekleyeceğim')" class="chip-btn">+ Proje Dokümantasyon Revizyonu</button>
          <button type="button" onclick="handleChipClick('grow', 'will', 'Haftada 4 saat algoritmik mülakat ve teknik İngilizce pratiği yapacağım')" class="chip-btn">+ Düzenli Mülakat Pratiği</button>
        </div>

        <div class="space-y-1.5 pt-1">
          ${renderList(g.will, 'will')}
        </div>

        <div class="flex gap-2 pt-1">
          <input type="text" id="add-will-input" placeholder="Yeni somut eylem maddesi yazın..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-emerald-500 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('grow', 'will', 'add-will-input')">
          <button onclick="addItem('grow', 'will', 'add-will-input')" class="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i> Ekle
          </button>
        </div>
      </div>
    </div>
  `;
}

/**
 * CV Editor Template
 */
function getCvEditorHtml() {
  const cv = AppState.cv;
  const p = cv.personal;

  const renderChips = (category, list) => {
    return list.map((item, idx) => `
      <span class="inline-flex items-center gap-1 bg-slate-900 border border-slate-700 text-slate-200 text-xs px-2.5 py-1 rounded-md">
        <span>${escapeHtml(item)}</span>
        <button onclick="removeItem('cv-skill', '${category}', ${idx})" class="text-slate-400 hover:text-rose-400 ml-1">
          <i data-lucide="x" class="w-3 h-3"></i>
        </button>
      </span>
    `).join('');
  };

  return `
    <div class="space-y-6">
      <!-- Personal & Contact -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-700/80 pb-2">
          <i data-lucide="user" class="w-4 h-4 text-indigo-400"></i> İletişim & Kişisel Bilgiler
        </span>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Ad Soyad</label>
            <input type="text" data-sync="cv.personal.fullName" value="${escapeHtml(p.fullName)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Hedef Unvan / Rol</label>
            <input type="text" data-sync="cv.personal.title" value="${escapeHtml(p.title)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">E-posta</label>
            <input type="email" data-sync="cv.personal.email" value="${escapeHtml(p.email)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Telefon</label>
            <input type="text" data-sync="cv.personal.phone" value="${escapeHtml(p.phone)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Konum (Şehir, Ülke)</label>
            <input type="text" data-sync="cv.personal.location" value="${escapeHtml(p.location)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">LinkedIn Profil Linki</label>
            <input type="text" data-sync="cv.personal.linkedin" value="${escapeHtml(p.linkedin || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Medium Profil / Blog Linki</label>
            <input type="text" data-sync="cv.personal.medium" value="${escapeHtml(p.medium || '')}" placeholder="medium.com/@kullaniciadi" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">GitHub Linki</label>
            <input type="text" data-sync="cv.personal.github" value="${escapeHtml(p.github || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Kişisel Web / Portfolyo</label>
            <input type="text" data-sync="cv.personal.website" value="${escapeHtml(p.website)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Profesyonel Özet (2-3 Cümle)</label>
          <textarea data-sync="cv.personal.summary" rows="2" class="w-full bg-slate-900 text-xs text-white p-3 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none leading-relaxed">${escapeHtml(p.summary)}</textarea>
        </div>
      </div>

      <!-- Education (Eğitim Bilgileri) -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="graduation-cap" class="w-4 h-4 text-indigo-400"></i> Eğitim Bilgileri
          </span>
          <button onclick="addNewEducation()" class="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1">
            <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i> Eğitim Ekle
          </button>
        </div>
        ${cv.education.map((edu, idx) => `
          <div class="bg-slate-900/60 border border-slate-800 rounded-lg p-3 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-semibold text-slate-400">Eğitim #${idx + 1}</span>
              ${cv.education.length > 1 ? `
                <button onclick="removeItem('cv-education', null, ${idx})" class="text-slate-500 hover:text-rose-400 text-xs flex items-center gap-1">
                  <i data-lucide="trash-2" class="w-3 h-3"></i> Sil
                </button>
              ` : ''}
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-[11px] font-medium text-slate-400 mb-1">Üniversite / Fakülte</label>
                <input type="text" data-sync="cv.education.${idx}.school" value="${escapeHtml(edu.school)}" placeholder="Örn: Necmettin Erbakan Üniversitesi" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:outline-none">
              </div>
              <div>
                <label class="block text-[11px] font-medium text-slate-400 mb-1">Bölüm / Derece</label>
                <input type="text" data-sync="cv.education.${idx}.department" value="${escapeHtml(edu.department || edu.degree || '')}" placeholder="Örn: Bilgisayar Mühendisliği" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:outline-none" oninput="AppState.cv.education[${idx}].degree = this.value">
              </div>
              <div>
                <label class="block text-[11px] font-medium text-slate-400 mb-1">Tarih / Yıllar</label>
                <input type="text" data-sync="cv.education.${idx}.dates" value="${escapeHtml(edu.dates || edu.years || '')}" placeholder="Örn: 2025 - 2029 (Beklenen)" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:outline-none" oninput="AppState.cv.education[${idx}].years = this.value">
              </div>
              <div>
                <label class="block text-[11px] font-medium text-slate-400 mb-1">GPA / Not Ortalaması</label>
                <input type="text" data-sync="cv.education.${idx}.gpa" value="${escapeHtml(edu.gpa || '')}" placeholder="Örn: 2.87 / 4.00" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:outline-none" oninput="AppState.cv.education[${idx}].details = this.value">
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Skills (Programlama Dilleri Ayrı ve Belirgin - Kural 5) -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-4">
        <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-700/80 pb-2">
          <i data-lucide="code" class="w-4 h-4 text-indigo-400"></i> Teknik Beceriler (ATS Odaklı - Kural 5)
        </span>

        <!-- Programlama Dilleri -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="text-xs font-bold text-emerald-400">1. Programlama Dilleri (Öncelikli & Ayrı)</label>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${renderChips('programming', cv.skills.programming || cv.skills.languages || [])}
          </div>
          <div class="flex gap-2 pt-1">
            <input type="text" id="add-skill-prog" placeholder="Dil ekle (örn: Rust, Go)..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('cv-skill', 'programming', 'add-skill-prog')">
            <button onclick="addItem('cv-skill', 'programming', 'add-skill-prog')" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold">Ekle</button>
          </div>
        </div>

        <!-- Kütüphaneler & Frameworks -->
        <div class="space-y-2">
          <label class="text-xs font-bold text-sky-400">2. Kütüphaneler & Framework'ler</label>
          <div class="flex flex-wrap gap-1.5">
            ${renderChips('frameworks', cv.skills.frameworks || [])}
          </div>
          <div class="flex gap-2 pt-1">
            <input type="text" id="add-skill-frame" placeholder="Framework ekle (örn: Django, Next.js)..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('cv-skill', 'frameworks', 'add-skill-frame')">
            <button onclick="addItem('cv-skill', 'frameworks', 'add-skill-frame')" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold">Ekle</button>
          </div>
        </div>

        <!-- Araçlar & Teknolojiler -->
        <div class="space-y-2">
          <label class="text-xs font-bold text-amber-400">3. Araçlar, Ağ & Altyapı</label>
          <div class="flex flex-wrap gap-1.5">
            ${renderChips('tools', cv.skills.tools || [])}
          </div>
          <div class="flex gap-2 pt-1">
            <input type="text" id="add-skill-tools" placeholder="Araç ekle (örn: Kubernetes, AWS)..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('cv-skill', 'tools', 'add-skill-tools')">
            <button onclick="addItem('cv-skill', 'tools', 'add-skill-tools')" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold">Ekle</button>
          </div>
        </div>

        <!-- Sosyal Yetkinlikler (Soft Skills) -->
        <div class="space-y-2">
          <label class="text-xs font-bold text-purple-400">4. Sosyal & Kişisel Yetkinlikler (Soft Skills)</label>
          <div class="flex flex-wrap gap-1.5">
            ${renderChips('soft', cv.skills.soft || [])}
          </div>
          <div class="flex gap-2 pt-1">
            <input type="text" id="add-skill-soft" placeholder="Sosyal yetkinlik ekle..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('cv-skill', 'soft', 'add-skill-soft')">
            <button onclick="addItem('cv-skill', 'soft', 'add-skill-soft')" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold">Ekle</button>
          </div>
        </div>

        <!-- Yabancı Diller -->
        <div class="space-y-2">
          <label class="text-xs font-bold text-indigo-400">5. Yabancı Diller</label>
          <div class="flex flex-wrap gap-1.5">
            ${renderChips('foreignLanguages', cv.skills.foreignLanguages || ['Türkçe (Anadil)', 'İngilizce (B2 - Profesyonel Çalışma Yetkinliği)'])}
          </div>
        </div>
      </div>

      <!-- Projects Section -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-4">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="folder-git-2" class="w-4 h-4 text-indigo-400"></i> Öne Çıkan Projeler (Hazır Örnekler Dahil)
          </span>
          <button onclick="addNewProject()" class="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1">
            <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i> Proje Ekle
          </button>
        </div>

        <div class="space-y-4">
          ${cv.projects.map((proj, idx) => `
            <div class="bg-slate-900/90 border border-slate-700 rounded-lg p-3 space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-indigo-400">Proje #${idx + 1}</span>
                <button onclick="removeItem('cv-project', null, ${idx})" class="text-slate-400 hover:text-rose-400 text-xs flex items-center gap-1">
                  <i data-lucide="trash-2" class="w-3 h-3"></i> Sil
                </button>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="block text-[10px] text-slate-400">Proje Adı</label>
                  <input type="text" data-sync="cv.projects.${idx}.name" value="${escapeHtml(proj.name)}" class="w-full bg-slate-800 text-xs text-white px-2.5 py-1.5 rounded border border-slate-700 focus:outline-none">
                </div>
                <div>
                  <label class="block text-[10px] text-slate-400">Kullanılan Teknolojiler</label>
                  <input type="text" data-sync="cv.projects.${idx}.tech" value="${escapeHtml(proj.tech)}" class="w-full bg-slate-800 text-xs text-white px-2.5 py-1.5 rounded border border-slate-700 focus:outline-none">
                </div>
              </div>
              <div>
                <label class="block text-[10px] text-slate-400">Bağlantı / Repository (İsteğe bağlı)</label>
                <input type="text" data-sync="cv.projects.${idx}.link" value="${escapeHtml(proj.link || '')}" class="w-full bg-slate-800 text-xs text-white px-2.5 py-1.5 rounded border border-slate-700 focus:outline-none">
              </div>
              <div>
                <label class="block text-[10px] text-slate-400">Madde İmleri (Her satıra bir başarı/eylem cümlesi)</label>
                <textarea rows="2" data-sync-bullets="cv.projects.${idx}.bullets" class="w-full bg-slate-800 text-xs text-white p-2 rounded border border-slate-700 focus:outline-none leading-relaxed">${escapeHtml(proj.bullets.join('\n'))}</textarea>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Experience -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="briefcase" class="w-4 h-4 text-indigo-400"></i> Staj / İş Deneyimi
          </span>
          <button onclick="addNewExperience()" class="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1">
            <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i> Deneyim Ekle
          </button>
        </div>
        ${cv.experience.map((exp, idx) => `
          <div class="bg-slate-900/90 border border-slate-700 rounded-lg p-3 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-indigo-400">Deneyim #${idx + 1}</span>
              <button onclick="removeItem('cv-experience', null, ${idx})" class="text-slate-400 hover:text-rose-400 text-xs flex items-center gap-1">
                <i data-lucide="trash-2" class="w-3 h-3"></i> Sil
              </button>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-[10px] text-slate-400">Pozisyon</label>
                <input type="text" data-sync="cv.experience.${idx}.role" value="${escapeHtml(exp.role)}" placeholder="Örn: Aday Mühendis / Stajyer" class="w-full bg-slate-800 text-xs text-white px-2.5 py-1.5 rounded border border-slate-700 focus:outline-none">
              </div>
              <div>
                <label class="block text-[10px] text-slate-400">Şirket / Kurum</label>
                <input type="text" data-sync="cv.experience.${idx}.company" value="${escapeHtml(exp.company)}" placeholder="Örn: HAVELSAN / ASELSAN" class="w-full bg-slate-800 text-xs text-white px-2.5 py-1.5 rounded border border-slate-700 focus:outline-none">
              </div>
              <div>
                <label class="block text-[10px] text-slate-400">Tarih Aralığı</label>
                <input type="text" data-sync="cv.experience.${idx}.dates" value="${escapeHtml(exp.dates)}" placeholder="Örn: 2026 - Günümüz" class="w-full bg-slate-800 text-xs text-white px-2.5 py-1.5 rounded border border-slate-700 focus:outline-none">
              </div>
              <div>
                <label class="block text-[10px] text-slate-400">Konum</label>
                <input type="text" data-sync="cv.experience.${idx}.location" value="${escapeHtml(exp.location || '')}" placeholder="Örn: Ankara / Hibrit" class="w-full bg-slate-800 text-xs text-white px-2.5 py-1.5 rounded border border-slate-700 focus:outline-none">
              </div>
            </div>
            <div>
              <label class="block text-[10px] text-slate-400">Kazanımlar ve Sorumluluklar (Her satıra bir madde)</label>
              <textarea rows="2" data-sync-bullets="cv.experience.${idx}.bullets" class="w-full bg-slate-800 text-xs text-white p-2 rounded border border-slate-700 focus:outline-none leading-relaxed">${escapeHtml((exp.bullets || []).join('\n'))}</textarea>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Certifications & Extras -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-700/80 pb-2">
          <i data-lucide="award" class="w-4 h-4 text-indigo-400"></i> Sertifikalar, Başarılar ve Referanslar
        </span>
        <div class="space-y-1.5">
          <label class="block text-[11px] font-medium text-slate-400">Sertifikalar & Başarılar</label>
          ${cv.certifications.map((c, idx) => `
            <div class="flex items-center gap-2 bg-slate-900 p-2 rounded border border-slate-700 text-xs text-slate-200">
              <span class="flex-1">• ${escapeHtml(c)}</span>
              <button onclick="removeItem('cv-cert', null, ${idx})" class="text-slate-400 hover:text-rose-400"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
            </div>
          `).join('')}
          <div class="flex gap-2 pt-1">
            <input type="text" id="add-cert-input" placeholder="Yeni sertifika / ödül yazın..." class="flex-1 bg-slate-900 text-xs text-white px-3 py-1.5 rounded border border-slate-700 focus:outline-none" onkeydown="if(event.key==='Enter') addItem('cv-cert', null, 'add-cert-input')">
            <button onclick="addItem('cv-cert', null, 'add-cert-input')" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded text-xs font-semibold">Ekle</button>
          </div>
        </div>
        <div class="pt-2">
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Topluluk Faaliyetleri & İlgi Alanları</label>
          <input type="text" data-sync="cv.activities" value="${escapeHtml(cv.activities)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:outline-none">
        </div>
        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Referans Notu</label>
          <input type="text" data-sync="cv.references" value="${escapeHtml(cv.references)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:outline-none">
        </div>
      </div>
    </div>
  `;
}

function addNewEducation() {
  AppState.cv.education.push({
    school: '',
    department: '',
    degree: '',
    years: '',
    dates: '',
    gpa: '',
    details: ''
  });
  saveState();
  renderEditor();
  renderPreview();
  if (window.lucide) window.lucide.createIcons();
}

function addNewExperience() {
  AppState.cv.experience.push({
    role: '',
    company: '',
    dates: '',
    location: '',
    bullets: ['']
  });
  saveState();
  renderEditor();
  renderPreview();
  if (window.lucide) window.lucide.createIcons();
}

function addNewProject() {
  AppState.cv.projects.push({
    name: 'Yeni Proje Başlığı',
    tech: 'Kullanılan Teknolojiler',
    link: 'github.com/username/project',
    bullets: ['Geliştirilen temel özellik ve çözülen problem.']
  });
  saveState();
  renderEditor();
  renderPreview();
  if (window.lucide) window.lucide.createIcons();
}

/**
 * Letter (Niyet Mektubu) Editor Template
 */
function getLetterEditorHtml() {
  const l = AppState.letter;

  return `
    <div class="space-y-6">
      <!-- Başvuran Öğrenci & Ders Bilgileri -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="user-check" class="w-4 h-4 text-indigo-400"></i> Başvuran Öğrenci & Ders Bilgileri
          </span>
          <span class="text-[11px] text-slate-400">Tüm sekmelerle senkronize</span>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Ad Soyad</label>
            <input type="text" data-sync="letter.studentInfo.fullName" value="${escapeHtml(l.studentInfo.fullName || AppState.meta.studentName || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Öğrenci Numarası</label>
            <input type="text" data-sync="letter.studentInfo.studentId" value="${escapeHtml(l.studentInfo.studentId || AppState.meta.studentId || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Bölüm & Sınıf</label>
            <input type="text" data-sync="letter.studentInfo.department" value="${escapeHtml(l.studentInfo.department || AppState.meta.department || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Ders / Sınav Adı</label>
            <input type="text" data-sync="meta.courseName" value="${escapeHtml(AppState.meta.courseName || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
        </div>
      </div>

      <!-- Target Company & Details -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-700/80 pb-2">
          <i data-lucide="building" class="w-4 h-4 text-indigo-400"></i> Hedef Kurum & Başvuru Bilgileri (Sınav Soru-2)
        </span>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Hedef Şirket / Kurum</label>
            <input type="text" data-sync="letter.recipientInfo.company" value="${escapeHtml(l.recipientInfo.company)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">İlgili Departman / Birim</label>
            <input type="text" data-sync="letter.recipientInfo.department" value="${escapeHtml(l.recipientInfo.department)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Başvuru / Program Türü</label>
            <input type="text" data-sync="letter.recipientInfo.programTitle" value="${escapeHtml(l.recipientInfo.programTitle)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Mektup Tarihi</label>
            <input type="text" data-sync="letter.studentInfo.date" value="${escapeHtml(l.studentInfo.date)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
        </div>
      </div>

      <!-- Letter Body Paragraphs -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-4">
        <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-700/80 pb-2">
          <i data-lucide="file-text" class="w-4 h-4 text-indigo-400"></i> Mektup İçeriği (Kurumsal Paragraflar)
        </span>

        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Resmi Hitap</label>
          <input type="text" data-sync="letter.salutation" value="${escapeHtml(l.salutation)}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:outline-none">
        </div>

        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">1. Giriş & Pozisyon Beyanı</label>
          <textarea rows="3" data-sync="letter.intro" class="w-full bg-slate-900 text-xs text-white p-3 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none leading-relaxed">${escapeHtml(l.intro)}</textarea>
        </div>

        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">2. Şirketi Tercih Etme Gerekçesi (Neden Bu Kurum?)</label>
          <textarea rows="3" data-sync="letter.reason" class="w-full bg-slate-900 text-xs text-white p-3 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none leading-relaxed">${escapeHtml(l.reason)}</textarea>
        </div>

        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">3. Akademik Yetkinlikler & Proje Deneyimleri</label>
          <textarea rows="3" data-sync="letter.qualifications" class="w-full bg-slate-900 text-xs text-white p-3 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none leading-relaxed">${escapeHtml(l.qualifications)}</textarea>
        </div>

        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">4. Sağlanacak Somut Katkılar & Takım Uyumu</label>
          <textarea rows="3" data-sync="letter.contributions" class="w-full bg-slate-900 text-xs text-white p-3 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none leading-relaxed">${escapeHtml(l.contributions)}</textarea>
        </div>

        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">5. Saygı İfadesi & Kapanış</label>
          <textarea rows="2" data-sync="letter.closing" class="w-full bg-slate-900 text-xs text-white p-3 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none leading-relaxed">${escapeHtml(l.closing)}</textarea>
        </div>
      </div>
    </div>
  `;
}

/**
 * Guest Speaker Evaluation Editor Template (Soru-1)
 */
function getGuestsEditorHtml() {
  if (!AppState.guests) AppState.guests = { list: [] };
  if (!AppState.guests.list) AppState.guests.list = [];
  while (AppState.guests.list.length < 2) {
    AppState.guests.list.push({ id: Date.now(), title: '', content: '' });
  }

  const box1 = AppState.guests.list[0] || {};
  const box2 = AppState.guests.list[1] || {};

  const box1Title = box1.title !== undefined ? box1.title : (box1.name || '*Geçmiş seneden gelen mezunlar*');
  const box1Content = box1.content !== undefined ? box1.content : (box1.summary || '');

  const box2Title = box2.title !== undefined ? box2.title : (box2.name || 'Ali Tunç');
  const box2Content = box2.content !== undefined ? box2.content : (box2.summary || '');

  return `
    <div class="space-y-6">
      <!-- Öğrenci Bilgileri (Üst Alan) -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <span class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="user-check" class="w-4 h-4 text-indigo-400"></i> Öğrenci & Ders Bilgileri (Soru-1 Raporu)
          </span>
          <span class="text-[11px] text-slate-400 font-medium">Tüm sekmelerle senkronize</span>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Ad Soyad</label>
            <input type="text" data-sync="meta.studentName" value="${escapeHtml(AppState.meta.studentName || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Öğrenci Numarası</label>
            <input type="text" data-sync="meta.studentId" value="${escapeHtml(AppState.meta.studentId || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Ders / Sınav Adı</label>
            <input type="text" data-sync="meta.courseName" value="${escapeHtml(AppState.meta.courseName || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-400 mb-1">Bölüm & Sınıf</label>
            <input type="text" data-sync="meta.department" value="${escapeHtml(AppState.meta.department || '')}" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
          </div>
        </div>
      </div>

      <!-- 1. Kutu Düzenleyici -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="message-square" class="w-4 h-4"></i> 1. Kutu: Konuk / Konu Değerlendirmesi
          </span>
          <span class="text-[11px] text-slate-400 font-medium">1. Bölüm</span>
        </div>

        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Konu / Konuk Başlığı</label>
          <input type="text" data-sync="guests.list.0.title" value="${escapeHtml(box1Title)}" placeholder="Örn: *Geçmiş seneden gelen mezunlar*" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
        </div>

        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Değerlendirme Metni</label>
          <textarea rows="8" data-sync="guests.list.0.content" placeholder="Değerlendirme metnini girin..." class="w-full bg-slate-900 text-xs text-white p-3 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none leading-relaxed">${escapeHtml(box1Content)}</textarea>
        </div>
      </div>

      <!-- 2. Kutu Düzenleyici -->
      <div class="bg-slate-800/80 border border-slate-700 rounded-xl p-4 space-y-3">
        <div class="flex items-center justify-between border-b border-slate-700/80 pb-2">
          <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="message-square" class="w-4 h-4"></i> 2. Kutu: Konuk / Konu Değerlendirmesi
          </span>
          <span class="text-[11px] text-slate-400 font-medium">2. Bölüm</span>
        </div>

        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Konu / Konuk Başlığı</label>
          <input type="text" data-sync="guests.list.1.title" value="${escapeHtml(box2Title)}" placeholder="Örn: Ali Tunç" class="w-full bg-slate-900 text-xs text-white px-3 py-2 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none">
        </div>

        <div>
          <label class="block text-[11px] font-medium text-slate-400 mb-1">Değerlendirme Metni</label>
          <textarea rows="8" data-sync="guests.list.1.content" placeholder="Değerlendirme metnini girin..." class="w-full bg-slate-900 text-xs text-white p-3 rounded-lg border border-slate-700 focus:border-indigo-500 focus:outline-none leading-relaxed">${escapeHtml(box2Content)}</textarea>
        </div>
      </div>
    </div>
  `;
}

function addNewGuest() {
  if (!AppState.guests) AppState.guests = { list: [] };
  if (!AppState.guests.list) AppState.guests.list = [];
  AppState.guests.list.push({
    id: Date.now(),
    title: 'Yeni Konuk / Konu',
    content: ''
  });
  saveState();
  renderEditor();
  renderPreview();
  if (window.lucide) window.lucide.createIcons();
}

/**
 * =========================================================================
 * A4 LIVE PREVIEW RENDERERS (Exact publication quality layouts)
 * =========================================================================
 */
function renderPreview() {
  const container = document.getElementById('a4-sheet');
  if (!container) return;

  const tab = AppState.activeTab;
  let html = '';

  if (tab === 'swot') {
    html = getSwotPreviewHtml();
  } else if (tab === 'grow') {
    html = getGrowPreviewHtml();
  } else if (tab === 'cv') {
    html = getCvPreviewHtml();
  } else if (tab === 'letter') {
    html = getLetterPreviewHtml();
  } else if (tab === 'guests') {
    html = getGuestsPreviewHtml();
  }

  container.innerHTML = html;
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * SWOT A4 Preview Layout
 */
function getSwotPreviewHtml() {
  const s = AppState.swot;
  const m = AppState.meta;

  const renderItems = (items) => {
    const valid = (items || []).filter(item => typeof item === 'string' && item.trim().length > 0);
    if (valid.length === 0) {
      return `<li class="text-[9pt] text-slate-400 italic py-2 list-none text-center select-none no-print">Madde eklenmedi</li>`;
    }
    return valid.map(item => `
      <li class="flex items-start gap-2 text-[10pt] leading-normal text-slate-900">
        <span class="text-slate-900 font-bold mt-[1px] select-none">•</span>
        <span>${escapeHtml(item)}</span>
      </li>
    `).join('');
  };

  return `
    <div class="h-full flex flex-col justify-between select-text">
      <!-- A4 Header -->
      <div class="border-b-2 border-slate-900 pb-3 mb-4">
        <div class="flex items-start justify-between">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-900 text-white text-[8.5pt] font-bold tracking-wider uppercase mb-1">
              ${escapeHtml(m.courseName || 'İletişim ve Sunum Teknikleri')}
            </div>
            <h1 class="text-2xl font-black text-slate-900 tracking-tight">KİŞİSEL SWOT ANALİZİ MATRİSİ</h1>
            <p class="text-[10pt] font-semibold text-slate-700 mt-0.5">Hedef Alan: <span class="text-slate-900 font-bold ${!s.targetCareer ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(s.targetCareer || '[Hedef Alan / Kariyer Vizyonu]')}</span></p>
          </div>
          <div class="text-right text-[8.5pt] text-slate-700 space-y-0.5 border-l-2 border-slate-900 pl-4">
            <p class="font-bold text-slate-900 text-[10pt] ${!m.studentName ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(m.studentName || '[Öğrenci Adı Soyadı]')}</p>
            <p class="${!m.department ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(m.department || '[Bölüm / Fakülte]')}</p>
            <p>Ders: <span class="font-bold text-slate-900">${escapeHtml(m.courseName || 'İletişim ve Sunum Teknikleri')}</span></p>
            <p>Öğrenci No: <span class="font-bold text-slate-900 ${!m.studentId ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(m.studentId || '[Öğrenci No]')}</span></p>
            <p class="text-slate-600">Tarih: ${escapeHtml(m.date || new Date().toISOString().split('T')[0])}</p>
          </div>
        </div>
      </div>

      <!-- 2x2 Matrix -->
      <div class="swot-grid flex-1 mb-4">
        <!-- Strengths -->
        <div class="swot-card s-card">
          <div class="flex items-center gap-2 border-b border-slate-300 pb-2 mb-3">
            <span class="w-6 h-6 rounded bg-slate-900 text-white font-black text-xs flex items-center justify-center">S</span>
            <h2 class="text-[11pt] font-extrabold text-slate-900 uppercase tracking-wide">GÜÇLÜ YÖNLER (Strengths)</h2>
          </div>
          <ul class="space-y-2.5 flex-1">
            ${renderItems(s.strengths)}
          </ul>
        </div>

        <!-- Weaknesses -->
        <div class="swot-card w-card">
          <div class="flex items-center gap-2 border-b border-slate-300 pb-2 mb-3">
            <span class="w-6 h-6 rounded bg-slate-900 text-white font-black text-xs flex items-center justify-center">W</span>
            <h2 class="text-[11pt] font-extrabold text-slate-900 uppercase tracking-wide">ZAYIF YÖNLER (Weaknesses)</h2>
          </div>
          <ul class="space-y-2.5 flex-1">
            ${renderItems(s.weaknesses)}
          </ul>
        </div>

        <!-- Opportunities -->
        <div class="swot-card o-card">
          <div class="flex items-center gap-2 border-b border-slate-300 pb-2 mb-3">
            <span class="w-6 h-6 rounded bg-slate-900 text-white font-black text-xs flex items-center justify-center">O</span>
            <h2 class="text-[11pt] font-extrabold text-slate-900 uppercase tracking-wide">FIRSATLAR (Opportunities)</h2>
          </div>
          <ul class="space-y-2.5 flex-1">
            ${renderItems(s.opportunities)}
          </ul>
        </div>

        <!-- Threats -->
        <div class="swot-card t-card">
          <div class="flex items-center gap-2 border-b border-slate-300 pb-2 mb-3">
            <span class="w-6 h-6 rounded bg-slate-900 text-white font-black text-xs flex items-center justify-center">T</span>
            <h2 class="text-[11pt] font-extrabold text-slate-900 uppercase tracking-wide">TEHDİTLER (Threats)</h2>
          </div>
          <ul class="space-y-2.5 flex-1">
            ${renderItems(s.threats)}
          </ul>
        </div>
      </div>

      <!-- Footer & Signatures -->
      <div class="border-t-2 border-slate-900 pt-3 flex items-center justify-between text-[8.5pt] text-slate-600">
        <span>${escapeHtml(m.courseName || 'İletişim ve Sunum Teknikleri')} Vize Ödevi Belgesi</span>
        <div class="text-right">
          <span class="font-bold text-slate-900">${escapeHtml(m.studentName)}</span> - İmza: __________________
        </div>
      </div>
    </div>
  `;
}

/**
 * GROW A4 Preview Layout (Roadmap / Process Flow)
 */
function getGrowPreviewHtml() {
  const g = AppState.grow;
  const m = AppState.meta;

  const renderItems = (items) => {
    const valid = (items || []).filter(item => typeof item === 'string' && item.trim().length > 0);
    if (valid.length === 0) {
      return `<li class="text-[9pt] text-slate-400 italic py-2 list-none text-center select-none no-print">Madde eklenmedi</li>`;
    }
    return valid.map(item => `
      <li class="flex items-start gap-2 text-[10pt] leading-normal text-slate-900">
        <span class="text-slate-900 font-bold mt-[1px] select-none">•</span>
        <span>${escapeHtml(item)}</span>
      </li>
    `).join('');
  };

  return `
    <div class="h-full flex flex-col justify-between select-text">
      <!-- Header -->
      <div class="border-b-2 border-slate-900 pb-3 mb-4">
        <div class="flex items-start justify-between">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-900 text-white text-[8.5pt] font-bold tracking-wider uppercase mb-1">
              ${escapeHtml(m.courseName || 'İletişim ve Sunum Teknikleri')} • GROW
            </div>
            <h1 class="text-2xl font-black text-slate-900 tracking-tight">GROW MODELİ ANALİZİ</h1>
            <p class="text-[10pt] font-semibold text-slate-700 mt-0.5">Odak: <span class="text-slate-900 font-bold ${!g.focusTitle ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(g.focusTitle || '[Hedef Odak / Konu]')}</span></p>
          </div>
          <div class="text-right text-[8.5pt] text-slate-700 space-y-0.5 border-l-2 border-slate-900 pl-4">
            <p class="font-bold text-slate-900 text-[10pt] ${!m.studentName ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(m.studentName || '[Öğrenci Adı Soyadı]')}</p>
            <p class="${!m.department ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(m.department || '[Bölüm / Fakülte]')}</p>
            <p>Ders: <span class="font-bold text-slate-900">${escapeHtml(m.courseName || 'İletişim ve Sunum Teknikleri')}</span></p>
            <p>Zaman Çerçevesi: <span class="font-bold text-slate-900 ${!g.timeline ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(g.timeline || '[Dönem / Süre]')}</span></p>
            <p class="text-slate-600">Tarih: ${escapeHtml(m.date || new Date().toISOString().split('T')[0])}</p>
          </div>
        </div>
      </div>

      <!-- GROW 4-Step Process Flow -->
      <div class="flex-1 flex flex-col justify-between space-y-3.5 mb-4">
        <!-- Goal -->
        <div class="grow-step-card border-1.5 border-slate-900 bg-white p-3.5 rounded-lg flex-1">
          <div class="flex items-center gap-2 border-b border-slate-200 pb-2 mb-2">
            <span class="w-6 h-6 rounded bg-slate-900 text-white font-black text-xs flex items-center justify-center">G</span>
            <h2 class="text-[10.5pt] font-extrabold text-slate-900 uppercase tracking-wide">1. GOAL (Hedef) - Ne Başarmak İstiyorsun?</h2>
          </div>
          <ul class="space-y-2 pl-1">
            ${renderItems(g.goal)}
          </ul>
        </div>

        <!-- Reality -->
        <div class="grow-step-card border-1.5 border-slate-900 bg-white p-3.5 rounded-lg flex-1">
          <div class="flex items-center gap-2 border-b border-slate-200 pb-2 mb-2">
            <span class="w-6 h-6 rounded bg-slate-900 text-white font-black text-xs flex items-center justify-center">R</span>
            <h2 class="text-[10.5pt] font-extrabold text-slate-900 uppercase tracking-wide">2. REALITY (Mevcut Durum) - Şu Anda Neredesin?</h2>
          </div>
          <ul class="space-y-2 pl-1">
            ${renderItems(g.reality)}
          </ul>
        </div>

        <!-- Options -->
        <div class="grow-step-card border-1.5 border-slate-900 bg-white p-3.5 rounded-lg flex-1">
          <div class="flex items-center gap-2 border-b border-slate-200 pb-2 mb-2">
            <span class="w-6 h-6 rounded bg-slate-900 text-white font-black text-xs flex items-center justify-center">O</span>
            <h2 class="text-[10.5pt] font-extrabold text-slate-900 uppercase tracking-wide">3. OPTIONS (Seçenekler) - Hangi Alternatiflerin Var?</h2>
          </div>
          <ul class="space-y-2 pl-1">
            ${renderItems(g.options)}
          </ul>
        </div>

        <!-- Will -->
        <div class="grow-step-card border-1.5 border-slate-900 bg-white p-3.5 rounded-lg flex-1">
          <div class="flex items-center gap-2 border-b border-slate-200 pb-2 mb-2">
            <span class="w-6 h-6 rounded bg-slate-900 text-white font-black text-xs flex items-center justify-center">W</span>
            <h2 class="text-[10.5pt] font-extrabold text-slate-900 uppercase tracking-wide">4. WILL / WAY FORWARD (Eylem Planı) - Ne Zaman Başlıyorsun?</h2>
          </div>
          <ul class="space-y-2 pl-1">
            ${renderItems(g.will)}
          </ul>
        </div>
      </div>

      <!-- Footer & Signatures -->
      <div class="border-t-2 border-slate-900 pt-3 flex items-center justify-between text-[8.5pt] text-slate-600">
        <span>${escapeHtml(m.courseName || 'İletişim ve Sunum Teknikleri')} Vize Çalışması</span>
        <div class="text-right">
          <span>Öğrenci: <strong class="text-slate-900">${escapeHtml(m.studentName)}</strong> | İmza: __________________</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Professional ATS CV A4 Preview Layout (Monster.com Executive Tech Standard)
 */
/**
 * Professional ATS CV A4 Preview Layout (Harvard / Clean Silicon Valley Standard)
 */
function getCvPreviewHtml() {
  const cv = AppState.cv;
  const p = cv.personal;

  const contacts = [];
  if (p.email) contacts.push(`<span class="inline-flex items-center gap-1"><i data-lucide="mail" class="w-3.5 h-3.5 text-slate-600"></i>${escapeHtml(p.email)}</span>`);
  if (p.phone) contacts.push(`<span class="inline-flex items-center gap-1"><i data-lucide="phone" class="w-3.5 h-3.5 text-slate-600"></i>${escapeHtml(p.phone)}</span>`);
  if (p.location) contacts.push(`<span class="inline-flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-600"></i>${escapeHtml(p.location)}</span>`);
  if (p.linkedin) contacts.push(`<span class="text-slate-800 font-medium underline">${escapeHtml(p.linkedin)}</span>`);
  if (p.medium) contacts.push(`<span class="text-slate-800 font-medium underline">${escapeHtml(p.medium)}</span>`);
  if (p.github) contacts.push(`<span class="text-slate-800 font-medium underline">${escapeHtml(p.github)}</span>`);
  if (p.website) contacts.push(`<span class="text-slate-800 font-medium underline">${escapeHtml(p.website)}</span>`);

  const progSkills = (cv.skills.programming || cv.skills.languages || []).filter(s => s && s.trim());
  const frameSkills = (cv.skills.frameworks || []).filter(s => s && s.trim());
  const toolSkills = (cv.skills.tools || []).filter(s => s && s.trim());
  const softSkills = (cv.skills.soft || []).filter(s => s && s.trim());
  const foreignSkills = (cv.skills.foreignLanguages || []).filter(s => s && s.trim());
  const hasAnySkills = progSkills.length || frameSkills.length || toolSkills.length || softSkills.length || foreignSkills.length;

  const validEdu = (cv.education || []).filter(e => (e.school && e.school.trim()) || (e.department && e.department.trim()));
  const validProjects = (cv.projects || []).filter(p => (p.name && p.name.trim()) || (p.tech && p.tech.trim()));
  const validExp = (cv.experience || []).filter(e => (e.role && e.role.trim()) || (e.company && e.company.trim()));
  const validCerts = (cv.certifications || []).filter(c => c && c.trim());
  const hasActivities = cv.activities && cv.activities.trim();

  return `
    <div class="h-full flex flex-col justify-between text-[9.5pt] select-text font-sans">
      <div>
        <!-- CV Header: Name & Target Role -->
        <header class="text-center pb-2 mb-2 border-b border-slate-300">
          <h1 class="text-xl font-bold tracking-tight uppercase ${!p.fullName ? 'text-slate-400 italic no-print' : 'text-slate-800'}">${escapeHtml(p.fullName || '[AD SOYAD]')}</h1>
          <p class="text-[9.5pt] font-medium mt-0.5 ${!p.title ? 'text-slate-400 italic no-print' : 'text-slate-600'}">${escapeHtml(p.title || '[HEDEF ROL / UNVAN]')}</p>
          
          <!-- Contact Bar with Lucide Icons -->
          ${contacts.length > 0 ? `
            <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[8.5pt] text-slate-600 mt-1.5">
              ${contacts.join('<span>•</span>')}
            </div>
          ` : `<div class="text-[8pt] text-slate-400 italic py-0.5 no-print">İletişim bilgileri formdan doldurulacaktır</div>`}
        </header>

        <!-- Professional Summary -->
        ${p.summary ? `
          <div class="mb-2">
            <p class="text-[9pt] leading-relaxed text-slate-700 text-justify">
              ${escapeHtml(p.summary)}
            </p>
          </div>
        ` : ''}

        <!-- Technical Skills -->
        <div>
          <div class="cv-section-title">
            <span>Teknik Beceriler & Yetkinlikler</span>
          </div>
          ${hasAnySkills ? `
            <div class="text-[9pt] space-y-0.5 leading-snug">
              ${progSkills.length ? `<p><strong class="text-slate-900 font-semibold">Programlama Dilleri:</strong> <span class="text-slate-800">${escapeHtml(progSkills.join(', '))}</span></p>` : ''}
              ${frameSkills.length ? `<p><strong class="text-slate-900 font-semibold">Kütüphaneler & Framework'ler:</strong> <span class="text-slate-800">${escapeHtml(frameSkills.join(', '))}</span></p>` : ''}
              ${toolSkills.length ? `<p><strong class="text-slate-900 font-semibold">Araçlar & Teknolojiler:</strong> <span class="text-slate-800">${escapeHtml(toolSkills.join(', '))}</span></p>` : ''}
              ${softSkills.length ? `<p><strong class="text-slate-900 font-semibold">Sosyal Beceriler:</strong> <span class="text-slate-800">${escapeHtml(softSkills.join(' • '))}</span></p>` : ''}
              ${foreignSkills.length ? `<p><strong class="text-slate-900 font-semibold">Yabancı Diller:</strong> <span class="text-slate-800">${escapeHtml(foreignSkills.join(' • '))}</span></p>` : ''}
            </div>
          ` : `<p class="text-[8.5pt] text-slate-400 italic py-1 no-print">Teknik becerileri form alanından ekleyebilirsiniz.</p>`}
        </div>

        <!-- Education -->
        <div>
          <div class="cv-section-title">
            <span>Eğitim</span>
          </div>
          ${validEdu.length > 0 ? validEdu.map(edu => `
            <div class="mb-1.5">
              <div class="flex items-center justify-between">
                <span class="cv-entry-title">${escapeHtml(edu.school)}</span>
                <span class="cv-entry-date">${escapeHtml(edu.dates || edu.years || '')}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="cv-entry-subtitle">${escapeHtml(edu.degree || edu.department || '')}</span>
                ${edu.gpa ? `<span class="text-[9pt] font-semibold text-slate-900">GPA: ${escapeHtml(edu.gpa)}</span>` : ''}
              </div>
              ${(edu.details && edu.details.trim() !== '' && edu.details.trim() !== (edu.gpa || '').trim() && !(edu.details.includes((edu.gpa || '').trim()))) ? `<p class="text-[8.5pt] text-slate-700 mt-0.5">${escapeHtml(edu.details)}</p>` : ''}
            </div>
          `).join('') : `<p class="text-[8.5pt] text-slate-400 italic py-1 no-print">Eğitim bilgilerinizi sol taraftaki formdan ekleyebilirsiniz.</p>`}
        </div>

        <!-- Featured Projects -->
        <div>
          <div class="cv-section-title">
            <span>Öne Çıkan Projeler</span>
          </div>
          ${validProjects.length > 0 ? `
            <div class="space-y-2">
              ${validProjects.map(proj => `
                <div class="mb-1.5">
                  <div class="flex items-baseline justify-between gap-3">
                    <span class="cv-entry-title">${escapeHtml(proj.name.replace(/^Proje Adı:\s*/i, ''))}</span>
                    ${proj.link ? `<span class="text-[8.5pt] text-slate-900 font-mono underline shrink-0 text-right whitespace-nowrap">${escapeHtml(proj.link)}</span>` : ''}
                  </div>
                  ${proj.tech ? `
                    <div class="text-[8.5pt] text-slate-700 mt-0.5">
                      <strong class="text-slate-900 font-semibold">Teknolojiler:</strong> ${escapeHtml(proj.tech.replace(/^Kullanılan Teknolojiler:\s*/i, ''))}
                    </div>
                  ` : ''}
                  ${(proj.bullets && proj.bullets.filter(b => b && b.trim()).length > 0) ? `
                    <ul class="list-disc list-outside pl-4 space-y-0.5 mt-0.5">
                      ${proj.bullets.filter(b => b && b.trim()).map(b => `<li class="cv-bullet">${escapeHtml(b)}</li>`).join('')}
                    </ul>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          ` : `<p class="text-[8.5pt] text-slate-400 italic py-1 no-print">Öne çıkan projelerinizi sol taraftaki formdan ekleyebilirsiniz.</p>`}
        </div>

        <!-- Experience / Internships -->
        <div>
          <div class="cv-section-title">
            <span>Deneyim & Topluluk Faaliyetleri</span>
          </div>
          ${validExp.length > 0 ? `
            <div class="space-y-1.5">
              ${validExp.map(exp => `
                <div class="mb-1.5">
                  <div class="flex items-center justify-between">
                    <span class="cv-entry-title">${escapeHtml(exp.role)} <span class="font-normal text-slate-400">|</span> <span class="font-medium text-slate-800">${escapeHtml(exp.company)}</span></span>
                    <span class="cv-entry-date">${escapeHtml(exp.dates)}${exp.location ? ` | ${escapeHtml(exp.location)}` : ''}</span>
                  </div>
                  ${(exp.bullets && exp.bullets.filter(b => b && b.trim()).length > 0) ? `
                    <ul class="list-disc list-outside pl-4 space-y-0.5 mt-0.5">
                      ${exp.bullets.filter(b => b && b.trim()).map(b => `<li class="cv-bullet">${escapeHtml(b)}</li>`).join('')}
                    </ul>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          ` : `<p class="text-[8.5pt] text-slate-400 italic py-1 no-print">Staj, iş veya topluluk deneyimlerinizi formdan ekleyebilirsiniz.</p>`}
        </div>

        <!-- Certifications & Extras -->
        <div>
          <div class="cv-section-title">
            <span>Sertifikalar, Başarılar & İlgi Alanları</span>
          </div>
          ${(validCerts.length > 0 || hasActivities) ? `
            <div class="text-[9pt] space-y-0.5 text-slate-800">
              ${validCerts.length > 0 ? `
                <ul class="list-disc list-outside pl-4 space-y-0.5">
                  ${validCerts.map(c => `<li class="cv-bullet">${escapeHtml(c)}</li>`).join('')}
                </ul>
              ` : ''}
              ${hasActivities ? `<p class="mt-1 leading-snug"><strong class="text-slate-900 font-semibold">İlgi Alanları:</strong> ${escapeHtml(cv.activities)}</p>` : ''}
            </div>
          ` : `<p class="text-[8.5pt] text-slate-400 italic py-1 no-print">Sertifika, başarı ve ilgi alanlarınızı formdan ekleyebilirsiniz.</p>`}
        </div>
      </div>

      <!-- CV Bottom Single-Page Guard (References) -->
      <footer class="text-center pt-2 border-t border-slate-300 text-[8pt] text-slate-500">
        <span>${escapeHtml(cv.references || 'Akademik ve kurumsal referanslar talep üzerine memnuniyetle sunulacaktır.')}</span>
      </footer>
    </div>
  `;
}

/**
 * Niyet Mektubu A4 Preview Layout (Corporate Letterhead)
 */
function getLetterPreviewHtml() {
  const l = AppState.letter;
  const s = l.studentInfo;
  const r = l.recipientInfo;

  const letterParagraphs = [l.intro, l.reason, l.qualifications, l.contributions, l.closing]
    .filter(p => typeof p === 'string' && p.trim().length > 0);

  return `
    <div class="h-full flex flex-col justify-between text-[10pt] leading-relaxed text-slate-900 select-text font-serif">
      <div>
        <!-- Letterhead Header -->
        <div class="border-b-2 border-slate-900 pb-4 mb-6 font-sans">
          <div class="flex items-start justify-between">
            <div>
              <h1 class="text-xl font-black text-slate-900 tracking-tight uppercase ${!s.fullName ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(s.fullName || '[ÖĞRENCİ ADI SOYADI]')}</h1>
              <p class="text-[9.5pt] font-bold text-slate-800 ${!s.department ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(s.department || '[Bölüm / Üniversite]')}</p>
              <p class="text-[8.5pt] text-slate-600 ${!s.studentId ? 'text-slate-400 italic no-print' : ''}">Öğrenci No: ${escapeHtml(s.studentId || '[Öğrenci No]')}</p>
            </div>
            <div class="text-right text-[8.5pt] text-slate-600 space-y-0.5">
              ${s.email ? `<p><i data-lucide="mail" class="w-3 h-3 inline mr-1 text-slate-700"></i>${escapeHtml(s.email)}</p>` : ''}
              ${s.phone ? `<p><i data-lucide="phone" class="w-3 h-3 inline mr-1 text-slate-700"></i>${escapeHtml(s.phone)}</p>` : ''}
              <p><i data-lucide="map-pin" class="w-3 h-3 inline mr-1 text-slate-700"></i>${escapeHtml(s.city || 'Ankara')}, Türkiye</p>
            </div>
          </div>
        </div>

        <!-- Recipient & Date Block -->
        <div class="flex justify-between items-start mb-6 font-sans">
          <div>
            <p class="text-[11pt] font-bold text-slate-900 ${!r.company ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(r.company || '[Kurum / Şirket Adı]')}</p>
            <p class="text-[10pt] font-semibold text-slate-800 ${!r.department ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(r.department || '[Departman / Direktörlük]')}</p>
            <p class="text-[9pt] text-slate-600 ${!r.city ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(r.city || '[Şehir, Ülke]')}</p>
            <p class="text-[9pt] font-bold text-slate-900 mt-1">Konu: ${escapeHtml(r.programTitle || '[Program Adı]')} Başvurusu</p>
          </div>
          <div class="text-right text-[9.5pt] font-medium text-slate-700">
            <p>Tarih: <span class="font-bold text-slate-900">${escapeHtml(s.date || new Date().toISOString().split('T')[0])}</span></p>
          </div>
        </div>

        <!-- Salutation -->
        <div class="mb-4">
          <p class="font-bold text-slate-900">${escapeHtml(l.salutation || 'Sayın Yetkili ve Değerlendirme Kurulu,')}</p>
        </div>

        <!-- Letter Paragraphs -->
        <div class="space-y-3.5 text-justify text-[10pt] leading-[1.6] text-slate-900">
          ${letterParagraphs.length > 0 ? 
            letterParagraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('') :
            '<div class="text-[9.5pt] text-slate-400 italic py-8 text-center border border-dashed border-slate-300 rounded-lg p-6 no-print">Niyet mektubunuzun giriş, motivasyon ve yetkinlik paragraflarını sol taraftaki form alanından yazabilirsiniz.</div>'
          }
        </div>
      </div>

      <!-- Signature Block -->
      <div class="pt-8 font-sans">
        <div class="flex justify-between items-end border-t border-slate-300 pt-3">
          <div></div>
          <div class="text-right">
            <p class="text-[9pt] text-slate-600">Saygılarımla,</p>
            <p class="text-[11pt] font-bold text-slate-900 mt-1 ${!s.fullName ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(s.fullName || '[Öğrenci Adı Soyadı]')}</p>
            <p class="text-[8.5pt] text-slate-600">${escapeHtml(l.signatureTitle || 'Bilgisayar Mühendisi Adayı')}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Guest Speaker Evaluation A4 Preview Layout (Seminer Raporu / Soru-1)
 */
function getGuestsPreviewHtml() {
  const m = AppState.meta || {};
  const g = AppState.guests || { list: [] };
  const list = g.list || [];

  const box1 = list[0] || {};
  const box2 = list[1] || {};

  const box1Title = (box1.title || box1.name || '1. Seminer Konuğu / Konuşmacı').replace(/^\*+|\*+$/g, '');
  const box1Content = box1.content || box1.summary || '';

  const box2Title = (box2.title || box2.name || '2. Seminer Konuğu / Konuşmacı').replace(/^\*+|\*+$/g, '');
  const box2Content = box2.content || box2.summary || '';

  return `
    <div class="guests-page flex-1 flex flex-col justify-between select-text text-black font-sans">
      <!-- Top Centered Header: Öğrenci Adı Soyadı & Numarası -->
      <div class="text-center pt-1 pb-3">
        <h1 class="text-[17pt] font-extrabold text-black tracking-tight leading-tight uppercase ${!m.studentName ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(m.studentName || '[ÖĞRENCİ ADI SOYADI]')}</h1>
        <p class="text-[12pt] font-bold text-black tracking-wider mt-0.5 ${!m.studentId ? 'text-slate-400 italic no-print' : ''}">${escapeHtml(m.studentId || '[ÖĞRENCİ NO]')}</p>
        <p class="text-[9.5pt] font-semibold text-slate-600 mt-0.5">${escapeHtml(m.courseName || 'İletişim ve Sunum Teknikleri')} - Soru 1 Seminer Değerlendirmesi</p>
      </div>

      <!-- 2 Rounded Boxes Container (Equally distributed, single A4 page) -->
      <div class="guests-cards-container flex-1 flex flex-col justify-between gap-4 pb-1">
        <!-- 1. Kutu -->
        <div class="guest-card flex-1 flex flex-col border-[2px] border-black rounded-2xl p-5 bg-white justify-start">
          <div class="text-center font-extrabold text-[13.5pt] text-black pb-2 mb-2 border-b border-slate-200">
            ${escapeHtml(box1Title)}
          </div>
          <div class="text-[11pt] text-slate-900 leading-[1.6] whitespace-pre-wrap font-normal text-justify flex-1">
${box1Content ? escapeHtml(box1Content) : '<div class="text-[10pt] text-slate-400 italic py-6 text-center select-none no-print">1. Konuşmacı değerlendirme notlarınızı sol taraftaki formdan yazabilirsiniz.</div>'}
          </div>
        </div>

        <!-- 2. Kutu -->
        <div class="guest-card flex-1 flex flex-col border-[2px] border-black rounded-2xl p-5 bg-white justify-start">
          <div class="text-center font-extrabold text-[13.5pt] text-black pb-2 mb-2 border-b border-slate-200">
            ${escapeHtml(box2Title)}
          </div>
          <div class="text-[11pt] text-slate-900 leading-[1.6] whitespace-pre-wrap font-normal text-justify flex-1">
${box2Content ? escapeHtml(box2Content) : '<div class="text-[10pt] text-slate-400 italic py-6 text-center select-none no-print">2. Konuşmacı değerlendirme notlarınızı sol taraftaki formdan yazabilirsiniz.</div>'}
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * =========================================================================
 * DATA BINDING & EVENT LISTENERS
 * =========================================================================
 */
function attachEditorListeners() {
  // Sync text inputs
  document.querySelectorAll('[data-sync]').forEach(input => {
    input.addEventListener('input', (e) => {
      const path = e.target.dataset.sync;
      setObjectPath(AppState, path, e.target.value);
      saveState();
      renderPreview();
    });
  });

  // Sync multiline bullet arrays
  document.querySelectorAll('[data-sync-bullets]').forEach(textarea => {
    textarea.addEventListener('input', (e) => {
      const path = e.target.dataset.syncBullets;
      const bullets = e.target.value.split('\n').filter(b => b.trim().length > 0);
      setObjectPath(AppState, path, bullets);
      saveState();
      renderPreview();
    });
  });
}

function setObjectPath(obj, path, value) {
  const parts = path.split('.');
  let curr = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = isNaN(parts[i]) ? parts[i] : parseInt(parts[i], 10);
    if (!curr[key]) curr[key] = {};
    curr = curr[key];
  }
  const lastKey = isNaN(parts[parts.length - 1]) ? parts[parts.length - 1] : parseInt(parts[parts.length - 1], 10);
  curr[lastKey] = value;

  // Universal Two-Way Synchronization across all modules
  syncUniversalIdentity(obj, path, value);
}

/**
 * Universal Two-Way Identity Synchronizer
 * Keeps Student Name, ID, Course Name, Department, Email, and Phone perfectly aligned across all modules
 */
function syncUniversalIdentity(state, path, value) {
  if (!state || typeof state !== 'object') return;

  // 1. Student Name: meta.studentName <-> cv.personal.fullName <-> letter.studentInfo.fullName
  if (path === 'meta.studentName' || path === 'cv.personal.fullName' || path === 'letter.studentInfo.fullName') {
    if (!state.meta) state.meta = {};
    if (!state.cv) state.cv = {};
    if (!state.cv.personal) state.cv.personal = {};
    if (!state.letter) state.letter = {};
    if (!state.letter.studentInfo) state.letter.studentInfo = {};

    state.meta.studentName = value;
    state.cv.personal.fullName = value;
    state.letter.studentInfo.fullName = value;

    syncDomInputs(['meta.studentName', 'cv.personal.fullName', 'letter.studentInfo.fullName'], value);
  }

  // 2. Student ID: meta.studentId <-> letter.studentInfo.studentId
  else if (path === 'meta.studentId' || path === 'letter.studentInfo.studentId') {
    if (!state.meta) state.meta = {};
    if (!state.letter) state.letter = {};
    if (!state.letter.studentInfo) state.letter.studentInfo = {};

    state.meta.studentId = value;
    state.letter.studentInfo.studentId = value;

    syncDomInputs(['meta.studentId', 'letter.studentInfo.studentId'], value);
  }

  // 3. Course Name: meta.courseName
  else if (path === 'meta.courseName') {
    if (!state.meta) state.meta = {};
    state.meta.courseName = value;
    syncDomInputs(['meta.courseName'], value);
  }

  // 4. Department: meta.department <-> cv.education[0].department <-> letter.studentInfo.department
  else if (path === 'meta.department' || path === 'cv.education.0.department' || path === 'cv.education[0].department' || path === 'letter.studentInfo.department') {
    if (!state.meta) state.meta = {};
    if (!state.cv) state.cv = {};
    if (!state.cv.education) state.cv.education = [{}];
    if (!state.cv.education[0]) state.cv.education[0] = {};
    if (!state.letter) state.letter = {};
    if (!state.letter.studentInfo) state.letter.studentInfo = {};

    state.meta.department = value;
    state.cv.education[0].department = value;
    state.cv.education[0].degree = value;
    state.letter.studentInfo.department = value;

    syncDomInputs(['meta.department', 'cv.education.0.department', 'letter.studentInfo.department'], value);
  }

  // 5. Email: cv.personal.email <-> letter.studentInfo.email
  else if (path === 'cv.personal.email' || path === 'letter.studentInfo.email') {
    if (!state.cv) state.cv = {};
    if (!state.cv.personal) state.cv.personal = {};
    if (!state.letter) state.letter = {};
    if (!state.letter.studentInfo) state.letter.studentInfo = {};

    state.cv.personal.email = value;
    state.letter.studentInfo.email = value;

    syncDomInputs(['cv.personal.email', 'letter.studentInfo.email'], value);
  }

  // 6. Phone: cv.personal.phone <-> letter.studentInfo.phone
  else if (path === 'cv.personal.phone' || path === 'letter.studentInfo.phone') {
    if (!state.cv) state.cv = {};
    if (!state.cv.personal) state.cv.personal = {};
    if (!state.letter) state.letter = {};
    if (!state.letter.studentInfo) state.letter.studentInfo = {};

    state.cv.personal.phone = value;
    state.letter.studentInfo.phone = value;

    syncDomInputs(['cv.personal.phone', 'letter.studentInfo.phone'], value);
  }
}

function syncDomInputs(targetPaths, value) {
  if (typeof document === 'undefined') return;
  targetPaths.forEach(targetSync => {
    document.querySelectorAll(`[data-sync="${targetSync}"]`).forEach(el => {
      if (document.activeElement !== el && el.value !== value) {
        el.value = value;
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Reset Application Data (Clean Blank Canvas)
 */
function resetAllData() {
  if (confirm('Tüm formlar ve önizlemeler tertemiz boş sayfaya sıfırlanacak. Onaylıyor musunuz?')) {
    AppState = JSON.parse(JSON.stringify(BLANK_DATA));
    normalizeAndSyncState(AppState);
    window.AppState = AppState;
    saveState();
    renderEditor();
    renderPreview();
    if (window.lucide) window.lucide.createIcons();
    showToast('Tüm alanlar sıfırlandı, boş sayfa hazır!', 'info');
  }
}

/**
 * Load Sample Data (Rich Engineering Portfolio)
 */
function loadSampleData() {
  if (confirm('Örnek mühendislik ve vize verileri yüklenecek. Onaylıyor musunuz?')) {
    AppState = JSON.parse(JSON.stringify(SAMPLE_DATA));
    normalizeAndSyncState(AppState);
    window.AppState = AppState;
    saveState();
    renderEditor();
    renderPreview();
    if (window.lucide) window.lucide.createIcons();
    showToast('Örnek mühendislik & vize verileri yüklendi!', 'success');
  }
}

/**
 * Export JSON
 */
function exportDataJson() {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(AppState, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `kariyer_studio_yedek_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('JSON yedek dosyası başarıyla indirildi.', 'info');
}

/**
 * Import JSON
 */
function importDataJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.swot && imported.grow && imported.cv) {
        AppState = imported;
        normalizeAndSyncState(AppState);
        window.AppState = AppState;
        saveState();
        renderEditor();
        renderPreview();
        if (window.lucide) window.lucide.createIcons();
        showToast('Yedek başarıyla yüklendi!', 'success');
      } else {
        alert('Geçersiz yedek dosyası formatı!');
      }
    } catch (err) {
      alert('Dosya okunurken hata oluştu: ' + err.message);
    }
  };
  reader.readAsText(file);
}

/**
 * Print / Save as PDF handler
 */
function printDocument() {
  // Ensure preview is fully rendered before printing
  renderPreview();
  setTimeout(() => {
    window.print();
  }, 100);
}

/**
 * Mobile / Narrow Screen View Toggle (Form vs A4 Preview)
 */
function toggleMobileView(view) {
  const editorPanel = document.getElementById('editor-panel');
  const previewContainer = document.getElementById('preview-container');
  const btnEditor = document.getElementById('btn-show-editor');
  const btnPreview = document.getElementById('btn-show-preview');

  if (view === 'preview') {
    if (editorPanel) editorPanel.classList.add('hidden');
    if (previewContainer) {
      previewContainer.classList.remove('hidden');
      previewContainer.classList.add('flex');
    }
    if (btnPreview) btnPreview.className = 'px-2.5 py-1 rounded bg-indigo-600 text-white font-semibold';
    if (btnEditor) btnEditor.className = 'px-2.5 py-1 rounded text-slate-300 font-medium';
    setZoom('fit');
  } else {
    if (editorPanel) editorPanel.classList.remove('hidden');
    if (previewContainer) {
      previewContainer.classList.add('hidden');
      previewContainer.classList.remove('flex');
    }
    if (btnEditor) btnEditor.className = 'px-2.5 py-1 rounded bg-indigo-600 text-white font-semibold';
    if (btnPreview) btnPreview.className = 'px-2.5 py-1 rounded text-slate-300 font-medium';
  }
}

// Window load trigger
window.addEventListener('DOMContentLoaded', () => {
  initState();
  
  // Read hash if available (e.g. #swot, #grow, #cv, #letter, #guests)
  const hash = (window.location.hash || '').replace('#', '');
  if (['swot', 'grow', 'cv', 'letter', 'guests'].includes(hash)) {
    AppState.activeTab = hash;
  }

  // Set tab
  switchTab(AppState.activeTab || 'cv');

  // Setup Zoom
  setZoom(AppState.zoomLevel || 'fit');

  // Setup Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Handle responsive resize for preview 'fit' mode
  window.addEventListener('resize', () => {
    if (AppState.zoomLevel === 'fit') {
      setZoom('fit');
    }
  });
});
