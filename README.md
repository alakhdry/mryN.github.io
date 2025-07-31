# منصة تحميل الدورات التعليمية 📚

منصة عربية شاملة لتحميل أفضل الدورات التعليمية من جميع المنصات العالمية بشكل مجاني.

## ✨ المميزات

- 🔍 **بحث متقدم**: ابحث عن الدورات حسب العنوان أو المدرس
- 🏷️ **فلترة بالمنصة**: اختر من بين Udemy، Coursera، edX، وغيرها
- ⬇️ **تحميل فوري**: تحميل مباشر للدورات والفيديوهات
- 📱 **تصميم متجاوب**: يعمل على جميع الأجهزة
- 🎨 **واجهة عربية**: تصميم حديث وسهل الاستخدام
- ⭐ **تقييمات ومعلومات**: عرض التقييمات ومدة الدورة وعدد الطلاب

## 🚀 التثبيت والتشغيل المحلي

### متطلبات النظام
- Node.js (الإصدار 16 أو أحدث)
- pnpm (مدير الحزم المفضل)

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/your-username/course-downloader.git
cd course-downloader
```

2. **تثبيت التبعيات**
```bash
pnpm install
```

3. **تشغيل المشروع محلياً**
```bash
pnpm run dev
```

4. **فتح المتصفح**
   افتح [http://localhost:3000](http://localhost:3000) في المتصفح

## 📦 البناء للإنتاج

```bash
# بناء المشروع
pnpm run build

# معاينة النسخة المبنية
pnpm run preview
```

## 🌐 النشر على GitHub Pages

### الطريقة التلقائية (موصى بها)

1. **ارفع المشروع إلى GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **فعّل GitHub Pages**
   - اذهب إلى إعدادات المستودع (Repository Settings)
   - انتقل إلى قسم "Pages"
   - اختر المصدر: **GitHub Actions**
   - سيتم النشر تلقائياً عند كل تحديث

3. **الوصول للموقع**
   الموقع سيكون متاح على: `https://your-username.github.io/repository-name`

### الطريقة اليدوية

```bash
# بناء المشروع
pnpm run build

# نشر مجلد dist إلى فرع gh-pages
npx gh-pages -d dist
```

## 📁 هيكل المشروع

```
course-downloader/
├── public/                 # الملفات العامة
│   └── 404.html           # صفحة إعادة التوجيه
├── src/
│   ├── components/        # مكونات shadcn/ui
│   ├── pages/            # صفحات التطبيق
│   │   └── Index.tsx     # الصفحة الرئيسية
│   ├── lib/              # المساعدات والأدوات
│   └── hooks/            # React Hooks
├── .github/
│   └── workflows/
│       └── deploy.yml    # إعداد GitHub Actions
├── package.json          # تبعيات المشروع
├── vite.config.ts        # إعدادات Vite
└── tailwind.config.ts    # إعدادات Tailwind CSS
```

## 🛠️ التقنيات المستخدمة

- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - لغة البرمجة
- **Vite** - أداة البناء
- **Tailwind CSS** - إطار عمل التصميم
- **shadcn/ui** - مكونات واجهة المستخدم
- **Lucide React** - الأيقونات

## 🎯 كيفية الاستخدام

1. **البحث عن الدورات**: استخدم مربع البحث للعثور على الدورة المطلوبة
2. **فلترة النتائج**: اختر المنصة المفضلة من القائمة المنسدلة
3. **عرض التفاصيل**: شاهد تفاصيل كل دورة (التقييم، المدة، عدد الطلاب)
4. **التحميل**: انقر على زر "تحميل الدورة" لبدء التحميل الفوري

## 📝 المساهمة

نرحب بمساهماتك! لإضافة ميزات جديدة أو إصلاح الأخطاء:

1. Fork المشروع
2. أنشئ فرع جديد (`git checkout -b feature/amazing-feature`)
3. Commit التغييرات (`git commit -m 'Add some amazing feature'`)
4. Push للفرع (`git push origin feature/amazing-feature`)
5. افتح Pull Request

## 📞 الدعم

إذا واجهت أي مشكلة أو لديك اقتراحات:
- افتح [Issue جديد](https://github.com/your-username/course-downloader/issues)
- أو راسلنا عبر البريد الإلكتروني

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 🙏 شكر وتقدير

- [shadcn/ui](https://ui.shadcn.com/) للمكونات الرائعة
- [Tailwind CSS](https://tailwindcss.com/) لإطار العمل المرن
- [Lucide](https://lucide.dev/) للأيقونات الجميلة

---

**صنع بـ ❤️ من أجل التعليم المجاني والمفتوح المصدر**