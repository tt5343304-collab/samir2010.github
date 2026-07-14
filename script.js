/* ============================================================
   ALI EDUCATION — DEMO SAYT UCHUN JAVASCRIPT
   Mundarija:
   1.  Ma'lumotlar (data) — features, courses, mentors, testimonials
   2.  Render funksiyalari — massivlarni DOM'ga chiqarish
   3.  Header: scroll effekti
   4.  Mobil menyu (burger)
   5.  Smooth scroll + faol nav-link
   6.  Scroll-reveal animatsiyasi (IntersectionObserver)
   7.  Statistika hisoblagichi (animatsiyali son)
   8.  Hero'dagi "kod muharriri" typing effekti
   9.  Kurs modali (Batafsil oynasi)
   10. Bog'lanish formasi
   11. Footer yili
   ============================================================

   ESLATMA (backend uchun): Quyidagi FEATURES_DATA, COURSES_DATA,
   MENTORS_DATA va TESTIMONIALS_DATA massivlari hozircha statik
   holda yozilgan. Kelajakda backend ulanganda, bu massivlarni
   shunchaki tegishli API'dan (masalan fetch('/api/courses'))
   kelgan ma'lumotlar bilan almashtirish kifoya — render
   funksiyalari o'zgarishsiz qoladi.
*/

/* ============================================================
   1. MA'LUMOTLAR (DATA)
   ============================================================ */

// "Biz haqimizda" bo'limidagi 4 ta afzallik kartochkasi
const FEATURES_DATA = [
    {
        icon: 'fa-solid fa-chalkboard-user',
        title: "Tajribali mentorlar",
        text: "Sohasining yetakchi va tajribali mutaxassislaridan bilim oling."
    },
    {
        icon: 'fa-solid fa-laptop-code',
        title: "Zamonaviy darslar",
        text: "Innovatsion metodika va interaktiv dars jarayonlaridan bahramand bo'ling."
    },
    {
        icon: 'fa-solid fa-certificate',
        title: "Sertifikat",
        text: "Kursni muvaffaqiyatli tugatgach xalqaro andozadagi sertifikat qo'lga kiriting."
    },
    {
        icon: 'fa-solid fa-list-check',
        title: "Amaliy mashg'ulotlar",
        text: "Nazariy bilimlarni amaliy loyihalar orqali mustahkamlang."
    }
];

// 6 ta kurs — har birida qisqa va modal uchun to'liq ma'lumot
const COURSES_DATA = [
    {
        icon: 'fa-brands fa-python',
        title: "Python",
        duration: "4 oy",
        text: "Python dasturlash tilini noldan o'rganing va amaliy loyihalar orqali tajriba orttiring.",
        fullText: "Ushbu kurs dasturlashni noldan boshlamoqchi bo'lganlar uchun mo'ljallangan. Siz Python tilining asosiy sintaksisidan tortib, obyektga yo'naltirilgan dasturlash va veb-freymvorklar bilan ishlashgacha bo'lgan bilimlarni egallaysiz.",
        topics: ["Python asoslari va sintaksis", "Obyektga yo'naltirilgan dasturlash (OOP)", "Ma'lumotlar bazalari bilan ishlash", "Django/Flask freymvorklari", "Real loyihalar ustida ishlash"]
    },
    {
        icon: 'fa-solid fa-code',
        title: "Frontend Web Development",
        duration: "5 oy",
        text: "HTML, CSS va JavaScript yordamida zamonaviy va responsive veb-saytlar yaratishni o'rganing.",
        fullText: "Kurs davomida siz zamonaviy veb-saytlarni yaratish uchun zarur bo'lgan barcha texnologiyalarni — HTML, CSS, JavaScript va zamonaviy freymvorklarni chuqur o'rganasiz.",
        topics: ["HTML5 va semantik markup", "CSS3, Flexbox va Grid", "JavaScript asoslari va DOM", "Responsive dizayn", "Git va loyihalarni joylashtirish"]
    },
    {
        icon: 'fa-solid fa-palette',
        title: "Grafik Dizayn",
        duration: "3 oy",
        text: "Figma, Photoshop va Illustrator dasturlarida professional dizaynlar yaratishni o'rganing.",
        fullText: "Grafik dizayn kursida siz vizual kommunikatsiya asoslarini, rang nazariyasini va zamonaviy dizayn dasturlarida ishlashni professional darajada o'rganasiz.",
        topics: ["Figma bilan UI/UX dizayn", "Adobe Photoshop asoslari", "Adobe Illustrator va vektor grafika", "Rang va tipografiya nazariyasi", "Portfolio yaratish"]
    },
    {
        icon: 'fa-solid fa-language',
        title: "Ingliz tili",
        duration: "6 oy",
        text: "Kundalik muloqot va ish faoliyati uchun ingliz tilini har tomonlama mukammal o'rganing.",
        fullText: "Ingliz tili kursi barcha darajadagi o'quvchilar uchun mo'ljallangan bo'lib, tinglab tushunish, gapirish, o'qish va yozish ko'nikmalarini muvozanatli rivojlantirishga qaratilgan.",
        topics: ["Grammatika asoslari", "So'zlashuv va talaffuz", "Tinglab tushunish mashqlari", "Yozma nutqni rivojlantirish", "Amaliy muloqot darslari"]
    },
    {
        icon: 'fa-solid fa-graduation-cap',
        title: "IELTS",
        duration: "3 oy",
        text: "IELTS imtihonidan yuqori ball olish uchun maxsus strategiya va mashqlar bilan tayyorlaning.",
        fullText: "IELTS kursi imtihonning barcha qismlari — Listening, Reading, Writing va Speaking bo'yicha maxsus strategiyalar va ko'plab amaliy testlar orqali sizni yuqori ballga tayyorlaydi.",
        topics: ["Listening strategiyalari", "Reading texnikalari", "Writing Task 1 va 2", "Speaking amaliyoti", "Mock testlar va tahlil"]
    },
    {
        icon: 'fa-solid fa-bullhorn',
        title: "SMM",
        duration: "2 oy",
        text: "Ijtimoiy tarmoqlarda samarali marketing va brend boshqarish strategiyalarini o'rganing.",
        fullText: "SMM kursida siz Instagram, Telegram va Facebook kabi platformalarda samarali kontent strategiyasi tuzish, target reklama va brend boshqarishni o'rganasiz.",
        topics: ["Kontent strategiyasi", "Instagram va Telegram marketing", "Target reklama sozlash", "Analitika va statistika", "Brendni ijtimoiy tarmoqda boshqarish"]
    }
];

// 4 ta mentor
const MENTORS_DATA = [
    {
        photo: "https://i.pravatar.cc/300?img=12",
        name: "Aziz Karimov",
        role: "Python dasturlash mentori",
        exp: "5 yillik tajriba"
    },
    {
        photo: "https://i.pravatar.cc/300?img=47",
        name: "Malika Yusupova",
        role: "Frontend Development mentori",
        exp: "4 yillik tajriba"
    },
    {
        photo: "https://i.pravatar.cc/300?img=33",
        name: "Jasur Toshmatov",
        role: "Grafik dizayn mentori",
        exp: "6 yillik tajriba"
    },
    {
        photo: "https://i.pravatar.cc/300?img=44",
        name: "Nilufar Sodiqova",
        role: "Ingliz tili va IELTS mentori",
        exp: "7 yillik tajriba"
    }
];

// 3 ta o'quvchi fikri
const TESTIMONIALS_DATA = [
    {
        photo: "https://i.pravatar.cc/150?img=68",
        name: "Sardor Rashidov",
        role: "Python kursi bitiruvchisi",
        text: "Ali Education'da Python kursini tugatdim va hozir IT kompaniyasida ishlayapman. Mentorlarning yordami va amaliy topshiriqlar juda foydali bo'ldi."
    },
    {
        photo: "https://i.pravatar.cc/150?img=45",
        name: "Zarina Abdullayeva",
        role: "IELTS kursi bitiruvchisi",
        text: "IELTS kursida o'qigan davrimda bilim darajam sezilarli oshdi. Ustozlar har bir savolga sabr bilan javob berishardi. Natijadan juda mamnunman!"
    },
    {
        photo: "https://i.pravatar.cc/150?img=52",
        name: "Bekzod Islomov",
        role: "Frontend Development kursi bitiruvchisi",
        text: "Frontend Web Development kursi orqali noldan saytlar yarata boshladim. Dars jarayoni qiziqarli va tushunarli tashkil etilgan edi."
    }
];

// Hero oynasida almashib turadigan matn qatorlari (har bir kurs yo'nalishidan)
const TYPING_LINES = [
    "print('Kelajak sizniki!')",
    "<Frontend /> // saytingizni yarating",
    "Hello \u2192 Salom, IELTS 8.0",
    "#SMM: g'oyani brendga aylantiring",
    "design.export('portfolio.fig')"
];

/* ============================================================
   2. RENDER FUNKSIYALARI
   Har bir funksiya tegishli massivni olib, uni HTML'ga aylantiradi
   va sahifadagi bo'sh konteynerga joylashtiradi.
   ============================================================ */

function renderFeatures() {
    const grid = document.getElementById('featureGrid');
    grid.innerHTML = FEATURES_DATA.map(item => `
        <div class="feature-card reveal">
            <span class="feature-card__icon"><i class="${item.icon}"></i></span>
            <h3 class="feature-card__title">${item.title}</h3>
            <p class="feature-card__text">${item.text}</p>
        </div>
    `).join('');
}

function renderCourses() {
    const grid = document.getElementById('courseGrid');
    grid.innerHTML = COURSES_DATA.map((item, index) => `
        <div class="course-card reveal">
            <div class="course-card__top">
                <span class="course-card__icon"><i class="${item.icon}"></i></span>
                <span class="course-card__duration">${item.duration}</span>
            </div>
            <h3 class="course-card__title">${item.title}</h3>
            <p class="course-card__text">${item.text}</p>
            <button class="course-card__link" data-course-index="${index}">
                Batafsil <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `).join('');

    // Har bir "Batafsil" tugmasiga modal ochish funksiyasini ulaymiz
    grid.querySelectorAll('[data-course-index]').forEach(btn => {
        btn.addEventListener('click', () => openCourseModal(Number(btn.dataset.courseIndex)));
    });
}

function renderMentors() {
    const grid = document.getElementById('mentorGrid');
    grid.innerHTML = MENTORS_DATA.map(item => `
        <div class="mentor-card reveal">
            <div class="mentor-card__photo-wrap">
                <img class="mentor-card__photo" src="${item.photo}" alt="${item.name}" loading="lazy">
            </div>
            <div class="mentor-card__body">
                <h3 class="mentor-card__name">${item.name}</h3>
                <p class="mentor-card__role">${item.role}</p>
                <span class="mentor-card__exp"><i class="fa-solid fa-briefcase"></i> ${item.exp}</span>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const grid = document.getElementById('testimonialGrid');
    grid.innerHTML = TESTIMONIALS_DATA.map(item => `
        <div class="testimonial-card reveal">
            <div class="testimonial-card__rating">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p class="testimonial-card__text">"${item.text}"</p>
            <div class="testimonial-card__author">
                <img class="testimonial-card__photo" src="${item.photo}" alt="${item.name}" loading="lazy">
                <div>
                    <p class="testimonial-card__name">${item.name}</p>
                    <p class="testimonial-card__role">${item.role}</p>
                </div>
            </div>
        </div>
    `).join('');
}

/* ============================================================
   3. HEADER: SCROLL EFFEKTI
   Sahifa pastga aylantirilganda header'ga soya va kichikroq
   balandlik qo'shiladi.
   ============================================================ */
function initHeaderScroll() {
    const header = document.getElementById('header');

    const toggleHeaderState = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
    };

    toggleHeaderState();
    window.addEventListener('scroll', toggleHeaderState);
}

/* ============================================================
   4. MOBIL MENYU (BURGER)
   ============================================================ */
function initMobileMenu() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    burger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        burger.classList.toggle('is-active', isOpen);
        burger.setAttribute('aria-expanded', isOpen);
    });

    // Menyudagi havolalardan biri bosilganda mobil menyu yopiladi
    nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            burger.classList.remove('is-active');
            burger.setAttribute('aria-expanded', false);
        });
    });
}

/* ============================================================
   5. FAOL NAV-LINK (scroll pozitsiyasiga qarab)
   ============================================================ */
function initActiveNavLink() {
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));
}

/* ============================================================
   6. SCROLL-REVEAL ANIMATSIYASI
   `.reveal` klassiga ega har qanday element ko'rinish maydoniga
   kirganda `.is-visible` klassini oladi (stil o'zgarishi CSS'da).
   ============================================================ */
function initScrollReveal() {
    const revealItems = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach(item => observer.observe(item));
}

/* ============================================================
   7. STATISTIKA HISOBLAGICHI
   Statistika bo'limi ko'rinish maydoniga kirganda, sonlar 0'dan
   `data-target` qiymatigacha animatsiya bilan oshadi.
   ============================================================ */
function initCounters() {
    const counters = document.querySelectorAll('.stat-item__number');
    const duration = 1800; // millisekund

    const animateCounter = (el) => {
        const target = Number(el.dataset.target);
        const startTime = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Yumshoq to'xtash uchun "ease-out" egri chizig'i
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                el.textContent = target;
            }
        };

        requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

/* ============================================================
   8. HERO "KOD MUHARRIRI" TYPING EFFEKTI
   TYPING_LINES massividagi qatorlarni birma-bir yozib, o'chirib
   turadi — turli kurs yo'nalishlarini ramziy tarzda ko'rsatadi.
   ============================================================ */
function initTypingEffect() {
    const el = document.getElementById('typedText');
    if (!el) return;

    // Harakatni kamaytirishni afzal ko'rganlar uchun animatsiyasiz birinchi qatorni ko'rsatamiz
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = TYPING_LINES[0];
        return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
        const currentLine = TYPING_LINES[lineIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        el.textContent = currentLine.slice(0, charIndex);

        let delay = isDeleting ? 35 : 65;

        if (!isDeleting && charIndex === currentLine.length) {
            delay = 1800; // to'liq yozilgan qatorni bir muddat ko'rsatib turish
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            lineIndex = (lineIndex + 1) % TYPING_LINES.length;
            delay = 400;
        }

        setTimeout(type, delay);
    };

    type();
}

/* ============================================================
   9. KURS MODALI (Batafsil oynasi)
   ============================================================ */
function initCourseModal() {
    const overlay = document.getElementById('courseModal');
    const closeBtn = document.getElementById('modalClose');

    closeBtn.addEventListener('click', closeCourseModal);

    // Fon (overlay) bosilganda ham modal yopiladi
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeCourseModal();
    });

    // Escape tugmasi bosilganda modal yopiladi
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
            closeCourseModal();
        }
    });
}

function openCourseModal(index) {
    const course = COURSES_DATA[index];
    const overlay = document.getElementById('courseModal');
    const content = document.getElementById('modalContent');

    content.innerHTML = `
        <span class="modal__icon"><i class="${course.icon}"></i></span>
        <h3 class="modal__title" id="modalTitle">${course.title}</h3>
        <span class="modal__duration"><i class="fa-regular fa-clock"></i> ${course.duration}</span>
        <p class="modal__text">${course.fullText}</p>
        <p class="modal__list-title">Nimalarni o'rganasiz:</p>
        <ul class="modal__list">
            ${course.topics.map(topic => `<li><i class="fa-solid fa-circle-check"></i> ${topic}</li>`).join('')}
        </ul>
        <a href="#contact" class="btn btn--primary btn--full">Ro'yxatdan o'tish</a>
    `;

    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // "Ro'yxatdan o'tish" bosilganda modal yopilib, forma tomon o'tiladi
    content.querySelector('.btn').addEventListener('click', closeCourseModal);
}

function closeCourseModal() {
    document.getElementById('courseModal').classList.remove('is-open');
    document.body.style.overflow = '';
}

/* ============================================================
   10. BOG'LANISH FORMASI
   Bu — demo versiya, shuning uchun backend'ga so'rov yubormaydi.
   Backend ulanganda, pastdagi `setTimeout` o'rniga shu yerga
   haqiqiy `fetch('/api/contact', { method: 'POST', ... })'
   so'rovini qo'shish kifoya.
   ============================================================ */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('formSuccess');
    const btnText = submitBtn.querySelector('.btn__text');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Yuborilayotganini ko'rsatish uchun tugmani vaqtincha band qilamiz
        submitBtn.disabled = true;
        btnText.textContent = 'Yuborilmoqda...';
        successMsg.classList.remove('is-visible');

        // NOTE: haqiqiy backend ulanganda shu joyga fetch() so'rovi yoziladi
        setTimeout(() => {
            submitBtn.disabled = false;
            btnText.textContent = 'Yuborish';
            successMsg.classList.add('is-visible');
            form.reset();
        }, 900);
    });
}

/* ============================================================
   11. FOOTER YILI
   ============================================================ */
function initFooterYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

/* ============================================================
   SAYT YUKLANGANDA BARCHA FUNKSIYALARNI ISHGA TUSHIRISH
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // 1) Ma'lumotlarni DOM'ga chiqarish
    renderFeatures();
    renderCourses();
    renderMentors();
    renderTestimonials();

    // 2) Interaktivlikni ishga tushirish
    initHeaderScroll();
    initMobileMenu();
    initActiveNavLink();
    initScrollReveal();
    initCounters();
    initTypingEffect();
    initCourseModal();
    initContactForm();
    initFooterYear();
});
