# Kariyer & İletişim Stüdyosu 🎓🚀

Modern, interaktif, reaktif ve yayına hazır kariyer hazırlık ve akademik sınav/ödev stüdyosu.

🌐 **Canlı Site (GitHub Pages):** [https://armone0.github.io/kariyer-studio/](https://armone0.github.io/kariyer-studio/)

---

## 💡 Temiz Boş Tuval & Örnek Veri Mimarisi

- **Tertemiz Başlangıç (Clean Blank Slate):** Uygulama ilk açıldığında tamamen boş bir A4 kağıdı ve boş formlarla başlar. Kullanıcı kendi bilgilerini ve notlarını sıfırdan oluşturabilir.
- **✨ Örnek Veri Yükle:** Üst barda yer alan butona tıklandığında, sistem eksiksiz bir Bilgisayar Mühendisliği öğrencisi portfolyosu (SWOT, GROW, ATS CV, Niyet Mektubu, Konuk Değerlendirmeleri) ile anında doldurulur.
- **🔄 Sıfırla:** Tek tıkla tüm formları ve sayfaları yeniden tertemiz boş tuval haline getirir.
- **💾 Yerel Otomatik Kayıt (LocalStorage):** Yazılan her karakter anında tarayıcı hafızasına güvenle kaydedilir.
- **📁 JSON Yedekle / İçe Aktar:** Tüm verileri `.json` dosyası olarak bilgisayarınıza indirebilir veya daha önce kaydettiğiniz bir yedeği sisteme aktarabilirsiniz.

---

## 🌟 5 Temel Modül & Özellikler

### 1. 📊 SWOT Analizi Matrisi (Kişisel Kariyer Matrisi)
- **4 Boyutlu Analiz:** Güçlü Yönler (S), Zayıf Yönler (W), Fırsatlar (O), Tehditler (T).
- **💡 Hızlı Öneri Çipleri:** Mühendislik ve yazılım öğrencileri için tek tıkla eklenebilen hazır maddeler.
- **En Az 3 Madde Kuralı:** Madde sayısını ve kural uygunluğunu gösteren akıllı rozetler.
- **2x2 A4 Matrisi:** Resmi ders ve sınav formatında tek sayfa A4 çıktısı.

### 2. 🌱 GROW Koçluk Modeli (Eylem Planı)
- **4 Aşamalı Yol Haritası:**
  - **G (Goal):** SMART hedefler ve yönlendirici sorular.
  - **R (Reality):** Mevcut durum analizi, kaynaklar ve GPA/proje envanteri.
  - **O (Options):** Alternatif çözümler, mentörlük ve yarışma seçenekleri.
  - **W (Will / Way Forward):** Somut ilk adımlar ve kararlılık taahhüdü.
- **Kararlılık Skalası:** 1-10 arası interaktif kararlılık göstergesi.
- **A4 Süreç Çizelgesi:** Kronolojik akışlı şık süreç diyagramı ve onay bloğu.

### 3. 📄 Harvard ATS Uyumlu Tek Sayfa CV
- **Katı Tek Sayfa Standardı:** Uluslararası Harvard ve Silicon Valley tech şirketlerinin benimsediği minimalist, okunabilir ATS formatı.
- **Öncelikli Programlama Dilleri:** Programlama dilleri kütüphanelerden ve araçlardan ayrılarak en üstte vurgulanır.
- **Dinamik Bölümler:** Eğitim, Öne Çıkan Projeler, İş/Staj Deneyimi, Sertifikalar, İlgi Alanları ve Referanslar.
- **Akıllı Boş Alan Yönetimi:** Boş kalan alanlar baskıda asla kopuk nokta veya boşluk bırakmaz.

### 4. ✉️ Kurumsal Niyet Mektubu (Soru-2)
- Savunma sanayii, yapay zeka enstitüleri ve teknoloji şirketleri için kurumsal antetli niyet mektubu.
- Başvuran öğrenci bilgileri, kurum bilgileri, hitap, motivasyon, yetkinlikler ve imza bloğu.
- Tam A4 tek sayfa antetli resmi çıktı.

### 5. 🎤 Konuk Değerlendirmeleri Raporu (Soru-1)
- Derse katılan sektör konuklarının ve seminer konuşmacılarının değerlendirilmesi.
- 2 eşit kartlı, estetik ve sayfa bölmeyen (`break-inside: avoid;`) garantili tek sayfa A4 tasarımı.
- Başlık, içerik ve öğrenci numarası entegrasyonu.

---

## 🛠️ Teknik Altyapı

- **Zero-Build & Pure Web Standards:** Webpack, Vite, npm veya Node.js bağımlılığı gerektirmez; saf HTML5, Vanilla JavaScript ve CSS3 ile çalışır.
- **Tailwind CSS & Lucide Icons (CDN):** Modern karanlık tema editörü ve pürüzsüz açık tema A4 kağıt önizlemesi.
- **Kusursuz Baskı Motoru (`@media print`):** "PDF / Yazdır" butonuna basıldığında butonlar, paneller ve formlar otomatik gizlenir; doğrudan 210 × 297 mm standartlarında pürüzsüz vektörel PDF üretilir.

---

## 🚀 GitHub Pages Üzerinde Yayına Alma

Projeyi kendi GitHub hesabınızda canlı site olarak yayınlamak için:

1. GitHub'da `kariyer-studio` adında yeni bir public depo oluşturun: [https://github.com/new](https://github.com/new)
2. Terminalde proje klasöründe şu komutları çalıştırın:
   ```bash
   git remote add origin https://github.com/Armone0/kariyer-studio.git
   git push -u origin main
   ```
3. GitHub deponuzun **Settings > Pages** sekmesine gidin.
4. **Build and deployment > Source** kısmını **Deploy from a branch** olarak seçin.
5. Branch olarak **main** / **root** seçip **Save** butonuna tıklayın.
6. Birkaç saniye içinde siteniz `https://armone0.github.io/kariyer-studio/` adresinde canlıya geçecektir!
