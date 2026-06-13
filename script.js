/* إعدادات عامة */
body {
    margin: 0;
    padding: 1rem;
    font - family: 'Amiri', serif;
    direction: rtl; /* من اليمين إلى اليسار */
    text - align: right;
    background: #f9f9f9;
    color: #212121;
    min - height: 100vh;
    box - sizing: border - box;
}

header, footer {
    text - align: center;
    margin - bottom: 1rem;
}

h1 {
    font - size: 1.8rem;
    margin: 0.2rem 0;
    font - weight: 700;
}

#area - info {
    font - size: 1.2rem;
    color: #555;
}

/* حاوية SVG */
#svg - container {
    width: 100 %;
    max - width: 900px; /* أقصى عرض */
    margin: 0 auto;
    overflow: visible; /* لضمان عدم ظهور أشرطة تمرير جانبية */
    background: #fff;
    border - radius: 8px;
    box - shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

svg {
    display: block;
    width: 100 %;
    height: auto;
    /* الحفاظ على النسب دون قص */
    preserveAspectRatio: xMidYMid meet;
}

/* تنسيقات النصوص داخل SVG */
.room - label, .area - label, .entrance - label {
    font - family: 'Amiri', serif;
    font - size: 14px;
    fill: #000;
    text - anchor: middle; /* توسيط النص */
    dominant - baseline: middle;
    pointer - events: none; /* لتجنب التداخل مع الأحداث */
}

.room - label { font - weight: 700; font - size: 16px; }

footer {
    margin - top: 2rem;
    font - size: 0.9rem;
    color: #666;
}

/* استجابة للشاشات الصغيرة */
@media(max - width: 600px) {
  h1 { font - size: 1.5rem; }
    #area - info { font - size: 1rem; }
  .room - label { font - size: 13px; }
  .area - label { font - size: 11px; }
}
