import React from 'react';
import './style.css';

import { useState } from 'react';

const CARDS_DATA = [
  {
    id: 1,
    category: 'Вступление',
    en: "I'm going to give a talk about...",
    ru: 'Я расскажу о...',
  },
  {
    id: 2,
    category: 'Вступление',
    en: "Today I'd like to talk about...",
    ru: 'Сегодня я хотел(а) бы рассказать о...',
  },
  {
    id: 3,
    category: 'Вступление',
    en: 'Well, let me tell you about...',
    ru: 'Позвольте рассказать вам о...',
  },
  {
    id: 4,
    category: 'Вступление',
    en: 'The topic of my talk is...',
    ru: 'Тема моего выступления — ...',
  },
  {
    id: 5,
    category: 'Вступление',
    en: 'I want to start by saying that...',
    ru: 'Хочу начать с того, что...',
  },
  {
    id: 6,
    category: 'Вступление',
    en: 'Nowadays the topic of ... is very important.',
    ru: 'В наше время тема ... очень актуальна.',
  },
  {
    id: 7,
    category: 'Вступление',
    en: 'In our modern world, ... is a big part of our life.',
    ru: 'В современном мире ... — важная часть нашей жизни.',
  },
  {
    id: 8,
    category: 'Универсальные фразы',
    en: "[TOPIC] is a very important part of everyone's life.",
    ru: '[ТЕМА] — очень важная часть жизни каждого человека.',
  },
  {
    id: 9,
    category: 'Универсальные фразы',
    en: '[TOPIC] plays an important role in our life.',
    ru: '[ТЕМА] играет важную роль в нашей жизни.',
  },
  {
    id: 10,
    category: 'Универсальные фразы',
    en: '[TOPIC] is very popular nowadays, especially among teenagers.',
    ru: '[ТЕМА] очень популярна в наши дни, особенно среди подростков.',
  },
  {
    id: 11,
    category: 'Универсальные фразы',
    en: 'Many people are interested in [TOPIC].',
    ru: 'Многие люди интересуются [ТЕМОЙ].',
  },
  {
    id: 12,
    category: 'Универсальные фразы',
    en: 'It is hard to imagine modern life without [TOPIC].',
    ru: 'Трудно представить современную жизнь без [ТЕМЫ].',
  },
  {
    id: 13,
    category: 'Универсальные фразы',
    en: 'There are many reasons why ... is so popular.',
    ru: 'Есть много причин, почему ... так популярно.',
  },
  {
    id: 14,
    category: 'Универсальные фразы',
    en: 'It helps people relax / learn new things / stay healthy.',
    ru: 'Это помогает людям расслабиться / узнавать новое / быть здоровым.',
  },
  {
    id: 15,
    category: 'Универсальные фразы',
    en: 'More and more people are getting interested in [TOPIC].',
    ru: 'Всё больше людей интересуются [ТЕМОЙ].',
  },
  {
    id: 16,
    category: 'О себе',
    en: 'As for me, I really enjoy...',
    ru: 'Что касается меня, я очень люблю...',
  },
  {
    id: 17,
    category: 'О себе',
    en: 'Personally, I think that ... is great.',
    ru: 'Лично я думаю, что ... — это здорово.',
  },
  {
    id: 18,
    category: 'О себе',
    en: 'I spend a lot of time...',
    ru: 'Я провожу много времени...',
  },
  {
    id: 19,
    category: 'О себе',
    en: 'In my free time, I often...',
    ru: 'В свободное время я часто...',
  },
  {
    id: 20,
    category: 'О себе',
    en: 'I have been interested in ... for a long time.',
    ru: 'Я интересуюсь ... уже давно.',
  },
  {
    id: 21,
    category: 'О себе',
    en: 'I find ... very interesting / enjoyable / useful.',
    ru: 'Я нахожу ... очень интересным / приятным / полезным.',
  },
  {
    id: 22,
    category: 'Переходы',
    en: 'First of all, ...',
    ru: 'Прежде всего / Во-первых,...',
  },
  {
    id: 23,
    category: 'Переходы',
    en: 'To start with, ...',
    ru: 'Для начала,...',
  },
  { id: 24, category: 'Переходы', en: 'Secondly, ...', ru: 'Во-вторых,...' },
  {
    id: 25,
    category: 'Переходы',
    en: 'Now let me talk about...',
    ru: 'Теперь позвольте рассказать о...',
  },
  {
    id: 26,
    category: 'Переходы',
    en: 'Moving on to the next point,...',
    ru: 'Переходя к следующему пункту,...',
  },
  {
    id: 27,
    category: 'Переходы',
    en: 'As for ..., ...',
    ru: 'Что касается ..., ...',
  },
  {
    id: 28,
    category: 'Переходы',
    en: 'Speaking about ..., ...',
    ru: 'Говоря о ..., ...',
  },
  {
    id: 29,
    category: 'Переходы',
    en: 'When it comes to ..., ...',
    ru: 'Когда речь идёт о ..., ...',
  },
  { id: 30, category: 'Переходы', en: 'Finally, ...', ru: 'И наконец,...' },
  { id: 31, category: 'Связки: Добавление', en: 'Also, ...', ru: 'Также,...' },
  {
    id: 32,
    category: 'Связки: Добавление',
    en: 'Besides, ...',
    ru: 'Кроме того,...',
  },
  {
    id: 33,
    category: 'Связки: Добавление',
    en: 'In addition, ...',
    ru: 'Вдобавок,...',
  },
  {
    id: 34,
    category: 'Связки: Добавление',
    en: 'What is more, ...',
    ru: 'Более того,...',
  },
  {
    id: 35,
    category: 'Связки: Добавление',
    en: 'Moreover, ...',
    ru: 'Помимо этого,...',
  },
  {
    id: 36,
    category: 'Связки: Противопоставление',
    en: 'However, ...',
    ru: 'Однако,...',
  },
  {
    id: 37,
    category: 'Связки: Противопоставление',
    en: 'On the other hand, ...',
    ru: 'С другой стороны,...',
  },
  {
    id: 38,
    category: 'Связки: Противопоставление',
    en: 'Although ..., ...',
    ru: 'Хотя ..., ...',
  },
  {
    id: 39,
    category: 'Связки: Противопоставление',
    en: 'At the same time, ...',
    ru: 'В то же время,...',
  },
  {
    id: 40,
    category: 'Связки: Причина и следствие',
    en: 'That is why ...',
    ru: 'Именно поэтому...',
  },
  {
    id: 41,
    category: 'Связки: Причина и следствие',
    en: 'The reason is that ...',
    ru: 'Причина в том, что...',
  },
  {
    id: 42,
    category: 'Связки: Причина и следствие',
    en: 'As a result, ...',
    ru: 'В результате,...',
  },
  {
    id: 43,
    category: 'Связки: Причина и следствие',
    en: 'For example, ...',
    ru: 'Например,...',
  },
  {
    id: 44,
    category: 'Связки: Причина и следствие',
    en: 'For instance, ...',
    ru: 'К примеру,...',
  },
  { id: 45, category: 'Мнение', en: 'I think that ...', ru: 'Я думаю, что...' },
  {
    id: 46,
    category: 'Мнение',
    en: 'I believe that ...',
    ru: 'Я считаю, что...',
  },
  {
    id: 47,
    category: 'Мнение',
    en: 'In my opinion, ...',
    ru: 'По моему мнению,...',
  },
  {
    id: 48,
    category: 'Мнение',
    en: 'To my mind, ...',
    ru: 'На мой взгляд,...',
  },
  {
    id: 49,
    category: 'Мнение',
    en: 'I feel that ...',
    ru: 'Мне кажется, что...',
  },
  { id: 50, category: 'Мнение', en: 'Personally, I ...', ru: 'Лично я...' },
  {
    id: 51,
    category: 'Мнение',
    en: 'I really like / love ...',
    ru: 'Мне очень нравится...',
  },
  {
    id: 52,
    category: 'Мнение',
    en: "I'm not very keen on ...",
    ru: 'Мне не очень нравится...',
  },
  {
    id: 53,
    category: 'Мнение',
    en: 'I know from my own experience that ...',
    ru: 'Из собственного опыта знаю, что...',
  },
  {
    id: 54,
    category: 'Мнение',
    en: 'I can say for sure that ...',
    ru: 'Я могу с уверенностью сказать, что...',
  },
  {
    id: 55,
    category: 'Мнение',
    en: 'It is a well-known fact that ...',
    ru: 'Хорошо известно, что...',
  },
  {
    id: 56,
    category: 'Заключение',
    en: "That's all I wanted to say about...",
    ru: 'Это всё, что я хотел(а) сказать о...',
  },
  {
    id: 57,
    category: 'Заключение',
    en: "To sum up, I'd like to say that...",
    ru: 'Подводя итог, хочу сказать, что...',
  },
  {
    id: 58,
    category: 'Заключение',
    en: 'In conclusion, I can say that...',
    ru: 'В заключение я могу сказать, что...',
  },
  {
    id: 59,
    category: 'Заключение',
    en: 'All in all, I think that...',
    ru: 'В целом, я думаю, что...',
  },
  {
    id: 60,
    category: 'Заключение',
    en: "That's everything I wanted to tell you about...",
    ru: 'Это всё, что я хотел(а) вам рассказать о...',
  },
  {
    id: 61,
    category: 'Паузы и уверенность',
    en: 'Well, ...',
    ru: 'Ну / Итак,...',
  },
  {
    id: 62,
    category: 'Паузы и уверенность',
    en: 'Actually, ...',
    ru: 'На самом деле,...',
  },
  {
    id: 63,
    category: 'Паузы и уверенность',
    en: 'Let me think...',
    ru: 'Дайте подумать...',
  },
  {
    id: 64,
    category: 'Паузы и уверенность',
    en: 'In other words, ...',
    ru: 'Другими словами,...',
  },
  {
    id: 65,
    category: 'Паузы и уверенность',
    en: "I'm sure that ...",
    ru: 'Я уверен(а), что...',
  },
  {
    id: 66,
    category: 'Паузы и уверенность',
    en: 'Maybe / Perhaps ...',
    ru: 'Может быть / Пожалуй...',
  },
];

const CAT_COLORS = {
  Вступление: { bg: '#1a3a4a', accent: '#4fc3f7' },
  'Универсальные фразы': { bg: '#1a2f1a', accent: '#66bb6a' },
  'О себе': { bg: '#2d1f3a', accent: '#ce93d8' },
  Переходы: { bg: '#3a2a10', accent: '#ffb74d' },
  'Связки: Добавление': { bg: '#1a3030', accent: '#4dd0e1' },
  'Связки: Противопоставление': { bg: '#3a1a1a', accent: '#ef9a9a' },
  'Связки: Причина и следствие': { bg: '#2a2a10', accent: '#dce775' },
  Мнение: { bg: '#3a1a30', accent: '#f48fb1' },
  Заключение: { bg: '#1a1a3a', accent: '#9fa8da' },
  'Паузы и уверенность': { bg: '#2a3010', accent: '#aed581' },
};
const CAT_EMOJI = {
  Вступление: '🎙️',
  'Универсальные фразы': '⭐',
  'О себе': '👤',
  Переходы: '➡️',
  'Связки: Добавление': '➕',
  'Связки: Противопоставление': '↔️',
  'Связки: Причина и следствие': '💡',
  Мнение: '💬',
  Заключение: '🏁',
  'Паузы и уверенность': '⏱️',
};
const ALL_CATS = [...new Set(CARDS_DATA.map((c) => c.category))];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function colFor(cat) {
  return CAT_COLORS[cat] || CAT_COLORS['Вступление'];
}

// ─── SM-2 CORE ───────────────────────────────────────────────────────────────
// quality: 0=again(1 card), 1=hard(3 cards), 2=good(grows), 3=easy(bigger jump)
function applySM2(sr, quality) {
  let { interval, easeFactor, repetitions } = sr;
  if (quality === 0) {
    repetitions = 0;
    interval = 1;
  } else if (quality === 1) {
    repetitions = 0;
    interval = 3;
    easeFactor = Math.max(1.3, easeFactor - 0.15);
  } else if (quality === 2) {
    if (repetitions === 0) interval = 3;
    else if (repetitions === 1) interval = 7;
    else interval = Math.round(interval * easeFactor);
    easeFactor = Math.max(1.3, easeFactor + 0.1);
    repetitions += 1;
  } else {
    if (repetitions === 0) interval = 8;
    else interval = Math.round(interval * easeFactor * 1.3);
    easeFactor = Math.min(3.5, easeFactor + 0.15);
    repetitions += 1;
  }
  return { ...sr, interval, easeFactor, repetitions };
}

function reinsertCard(queue, pos, cardId, interval) {
  const nq = queue.filter((_, i) => i !== pos);
  const insertAt = Math.min(pos + interval, nq.length);
  nq.splice(insertAt, 0, cardId);
  return nq;
}

function initSR(ids) {
  const s = {};
  ids.forEach((id) => {
    s[id] = { id, interval: 1, easeFactor: 2.5, repetitions: 0 };
  });
  return s;
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [mode, setMode] = useState('menu');
  const [selectedCats, setSelectedCats] = useState(new Set(ALL_CATS));
  const [frontLang, setFrontLang] = useState('en');

  const [queue, setQueue] = useState([]);
  const [pos, setPos] = useState(0);
  const [srState, setSrState] = useState({});
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [goodAnswers, setGoodAnswers] = useState(0);
  const [graduated, setGraduated] = useState(new Set());

  const [flipped, setFlipped] = useState(false);
  const [animDir, setAnimDir] = useState(null);

  const filtered = CARDS_DATA.filter((c) => selectedCats.has(c.category));

  function startStudy() {
    const ids = shuffle(filtered.map((c) => c.id));
    setQueue(ids);
    setPos(0);
    setSrState(initSR(ids));
    setTotalAnswers(0);
    setGoodAnswers(0);
    setGraduated(new Set());
    setFlipped(false);
    setAnimDir(null);
    setMode('study');
  }

  function handleAnswer(quality) {
    const cardId = queue[pos];
    const updatedSR = applySM2(srState[cardId], quality);
    const newSR = { ...srState, [cardId]: updatedSR };
    setSrState(newSR);

    const newTotal = totalAnswers + 1;
    const newGood = quality >= 2 ? goodAnswers + 1 : goodAnswers;
    setTotalAnswers(newTotal);
    setGoodAnswers(newGood);

    const newGraduated = new Set(graduated);
    if (updatedSR.interval >= 10) newGraduated.add(cardId);
    else newGraduated.delete(cardId);
    setGraduated(newGraduated);

    setAnimDir(quality >= 2 ? 'right' : 'left');

    setTimeout(() => {
      setAnimDir(null);
      setFlipped(false);

      let newQueue = queue;
      let newPos = pos + 1;

      if (quality < 2) {
        // Reinsert the card ahead in the queue
        newQueue = reinsertCard(queue, pos, cardId, updatedSR.interval);
        setQueue(newQueue);
      }

      if (newPos >= newQueue.length) {
        setMode('result');
      } else {
        setPos(newPos);
      }
    }, 320);
  }

  function toggleCat(cat) {
    const s = new Set(selectedCats);
    if (s.has(cat)) {
      if (s.size > 1) s.delete(cat);
    } else s.add(cat);
    setSelectedCats(s);
  }

  // ── MENU ──────────────────────────────────────────────────────────────────
  if (mode === 'menu') {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#0d1117',
          color: '#e6edf3',
          fontFamily: "'Georgia',serif",
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 4,
                color: '#6e7681',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              ОГЭ · Английский · Монолог
            </div>
            <h1
              style={{
                fontSize: 30,
                fontWeight: 700,
                margin: 0,
                color: '#f0f6fc',
              }}
            >
              Клише и Связки
            </h1>
            <div style={{ marginTop: 8, color: '#8b949e', fontSize: 14 }}>
              {filtered.length} карточек · алгоритм интервального повторения
            </div>
          </div>

          {/* Anki legend */}
          <div
            style={{
              background: '#161b22',
              border: '1px solid #21262d',
              borderRadius: 10,
              padding: '14px 18px',
              marginBottom: 24,
              fontSize: 13,
              color: '#8b949e',
              lineHeight: 1.7,
            }}
          >
            <div style={{ color: '#f0f6fc', fontWeight: 700, marginBottom: 6 }}>
              ★ Как работает алгоритм Anki
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4px 16px',
              }}
            >
              <span>
                <span style={{ color: '#ef9a9a' }}>✗ Не знаю</span> — вернётся
                через 1 карточку
              </span>
              <span>
                <span style={{ color: '#ffb74d' }}>~ Сложно</span> — вернётся
                через 3 карточки
              </span>
              <span>
                <span style={{ color: '#66bb6a' }}>✓ Знаю</span> — интервал
                растёт (SM-2)
              </span>
              <span>
                <span style={{ color: '#9fa8da' }}>⚡ Легко</span> — интервал
                растёт быстро
              </span>
            </div>
          </div>

          {/* Lang toggle */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 24,
              background: '#161b22',
              borderRadius: 8,
              padding: 4,
              width: 'fit-content',
              margin: '0 auto 24px',
            }}
          >
            {[
              ['en', 'EN → RU'],
              ['ru', 'RU → EN'],
            ].map(([val, label]) => (
              <button
                key={val}
                onClick={() => setFrontLang(val)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 6,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 600,
                  background: frontLang === val ? '#388bfd' : 'transparent',
                  color: frontLang === val ? '#fff' : '#8b949e',
                  transition: 'all 0.2s',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Categories */}
          <div style={{ marginBottom: 28 }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 3,
                color: '#6e7681',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Разделы
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <button
                onClick={() => setSelectedCats(new Set(ALL_CATS))}
                style={{
                  padding: '6px 14px',
                  borderRadius: 20,
                  border: '1px solid #30363d',
                  cursor: 'pointer',
                  background:
                    selectedCats.size === ALL_CATS.length
                      ? '#21262d'
                      : 'transparent',
                  color: '#8b949e',
                  fontSize: 12,
                }}
              >
                Все
              </button>
              {ALL_CATS.map((cat) => {
                const sel = selectedCats.has(cat);
                const cnt = CARDS_DATA.filter((c) => c.category === cat).length;
                const col = colFor(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCat(cat)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 20,
                      border: `1px solid ${sel ? col.accent : '#30363d'}`,
                      cursor: 'pointer',
                      background: sel ? col.bg : 'transparent',
                      color: sel ? col.accent : '#6e7681',
                      fontSize: 12,
                      transition: 'all 0.2s',
                    }}
                  >
                    {CAT_EMOJI[cat]} {cat}{' '}
                    <span style={{ opacity: 0.6 }}>({cnt})</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={startStudy}
            disabled={filtered.length === 0}
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: 10,
              border: 'none',
              cursor: 'pointer',
              background: 'linear-gradient(135deg,#1f6feb,#388bfd)',
              color: '#fff',
              fontSize: 17,
              fontWeight: 700,
              opacity: filtered.length === 0 ? 0.4 : 1,
            }}
          >
            🃏 Начать повторение ({filtered.length} карточек)
          </button>
        </div>
      </div>
    );
  }

  // ── RESULT ────────────────────────────────────────────────────────────────
  if (mode === 'result') {
    const uniqueTotal = new Set(queue).size;
    const masteredCount = graduated.size;
    const pct = Math.round((goodAnswers / Math.max(totalAnswers, 1)) * 100);
    const repeatCount = totalAnswers - uniqueTotal;
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#0d1117',
          color: '#e6edf3',
          fontFamily: "'Georgia',serif",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{ textAlign: 'center', maxWidth: 420, padding: '40px 20px' }}
        >
          <div style={{ fontSize: 60, marginBottom: 16 }}>
            {pct >= 80 ? '🎉' : pct >= 50 ? '💪' : '📚'}
          </div>
          <h2 style={{ fontSize: 24, margin: '0 0 24px', color: '#f0f6fc' }}>
            Сессия завершена
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
              marginBottom: 24,
            }}
          >
            {[
              ['Всего ответов', totalAnswers, '#e6edf3'],
              ['Точность', pct + '%', pct >= 70 ? '#66bb6a' : '#ffb74d'],
              ['Повторов трудных', repeatCount, '#ef9a9a'],
              ['Освоено', masteredCount + ' / ' + uniqueTotal, '#4fc3f7'],
            ].map(([label, val, color]) => (
              <div
                key={label}
                style={{
                  background: '#161b22',
                  borderRadius: 10,
                  padding: '14px 10px',
                  border: '1px solid #21262d',
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700, color }}>
                  {val}
                </div>
                <div style={{ fontSize: 11, color: '#6e7681', marginTop: 4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
          {masteredCount < uniqueTotal && (
            <div
              style={{
                background: '#3a1a1a',
                border: '1px solid #ef9a9a30',
                borderRadius: 8,
                padding: '10px 16px',
                marginBottom: 18,
                fontSize: 13,
                color: '#ef9a9a',
              }}
            >
              {uniqueTotal - masteredCount} карточек ещё не освоены —
              рекомендуем повторить ещё раз
            </div>
          )}
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={() => setMode('menu')}
              style={{
                flex: 1,
                padding: '13px',
                borderRadius: 8,
                border: '1px solid #30363d',
                background: '#161b22',
                color: '#e6edf3',
                cursor: 'pointer',
                fontSize: 14,
              }}
            >
              ← Меню
            </button>
            <button
              onClick={startStudy}
              style={{
                flex: 1,
                padding: '13px',
                borderRadius: 8,
                border: 'none',
                background: '#388bfd',
                color: '#fff',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Ещё раз
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── STUDY ─────────────────────────────────────────────────────────────────
  const cardId = queue[pos];
  const card = CARDS_DATA.find((c) => c.id === cardId);
  if (!card) return null;

  const col = colFor(card.category);
  const front = frontLang === 'en' ? card.en : card.ru;
  const back = frontLang === 'en' ? card.ru : card.en;
  const sr = srState[cardId] || {
    repetitions: 0,
    interval: 1,
    easeFactor: 2.5,
  };

  const uniqueSeen = new Set(queue.slice(0, pos + 1)).size;
  const totalUnique = new Set(queue).size;
  const progressPct = (uniqueSeen / totalUnique) * 100;
  const pendingAhead = queue.slice(pos + 1).length;
  const isRepeating = queue.slice(0, pos).includes(cardId); // this card appeared before

  const RATINGS = [
    {
      q: 0,
      label: 'Не знаю',
      sub: '↩ через 1',
      bg: '#2a1010',
      color: '#ef9a9a',
      bdr: '#ef9a9a40',
    },
    {
      q: 1,
      label: 'Сложно',
      sub: '↩ через 3',
      bg: '#2a1f08',
      color: '#ffb74d',
      bdr: '#ffb74d40',
    },
    {
      q: 2,
      label: 'Знаю',
      sub: 'интервал ×',
      bg: '#0e2010',
      color: '#66bb6a',
      bdr: '#66bb6a40',
    },
    {
      q: 3,
      label: 'Легко',
      sub: 'большой ×',
      bg: '#10103a',
      color: '#9fa8da',
      bdr: '#9fa8da40',
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0d1117',
        color: '#e6edf3',
        fontFamily: "'Georgia',serif",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #21262d',
        }}
      >
        <button
          onClick={() => setMode('menu')}
          style={{
            background: 'none',
            border: 'none',
            color: '#8b949e',
            cursor: 'pointer',
            fontSize: 14,
            padding: 0,
          }}
        >
          ← Меню
        </button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, color: '#e6edf3', fontWeight: 600 }}>
            {uniqueSeen} / {totalUnique}
          </div>
          <div style={{ fontSize: 10, color: '#6e7681', marginTop: 1 }}>
            карточек · ещё {pendingAhead} в очереди
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, fontSize: 12 }}>
          <span style={{ color: '#66bb6a' }}>✓ {goodAnswers}</span>
          <span style={{ color: '#ef9a9a' }}>
            ✗ {totalAnswers - goodAnswers}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div style={{ height: 3, background: '#21262d' }}>
        <div
          style={{
            height: '100%',
            width: `${progressPct}%`,
            background: col.accent,
            transition: 'width 0.4s',
          }}
        />
      </div>

      {/* Badges */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          padding: '16px 0 0',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontSize: 12,
            padding: '4px 14px',
            borderRadius: 20,
            background: col.bg,
            color: col.accent,
            border: `1px solid ${col.accent}40`,
          }}
        >
          {CAT_EMOJI[card.category]} {card.category}
        </span>
        {isRepeating && (
          <span
            style={{
              fontSize: 12,
              padding: '4px 14px',
              borderRadius: 20,
              background: '#2a1010',
              color: '#ef9a9a',
              border: '1px solid #ef9a9a30',
            }}
          >
            🔁 Повтор
          </span>
        )}
        {sr.repetitions >= 2 && (
          <span
            style={{
              fontSize: 12,
              padding: '4px 14px',
              borderRadius: 20,
              background: '#0e2010',
              color: '#66bb6a',
              border: '1px solid #66bb6a30',
            }}
          >
            🔥 ×{sr.repetitions} подряд
          </span>
        )}
      </div>

      {/* Card */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '18px 20px 12px',
        }}
      >
        <div
          onClick={() => !flipped && setFlipped(true)}
          style={{
            width: '100%',
            maxWidth: 580,
            minHeight: 200,
            background: flipped ? col.bg : '#161b22',
            border: `1px solid ${flipped ? col.accent + '70' : '#30363d'}`,
            borderRadius: 16,
            cursor: flipped ? 'default' : 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '32px 36px',
            textAlign: 'center',
            transition: 'all 0.25s',
            transform:
              animDir === 'right'
                ? 'translateX(90px) rotate(4deg)'
                : animDir === 'left'
                ? 'translateX(-90px) rotate(-4deg)'
                : 'none',
            opacity: animDir ? 0 : 1,
            boxShadow: flipped ? `0 0 50px ${col.accent}18` : 'none',
          }}
        >
          {!flipped ? (
            <>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  lineHeight: 1.55,
                  color: '#f0f6fc',
                }}
              >
                {front}
              </div>
              <div
                style={{
                  marginTop: 16,
                  fontSize: 12,
                  color: '#6e7681',
                  letterSpacing: 1,
                }}
              >
                нажми, чтобы открыть
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  fontSize: 13,
                  color: col.accent,
                  marginBottom: 10,
                  opacity: 0.6,
                }}
              >
                {front}
              </div>
              <div
                style={{
                  width: 36,
                  height: 1,
                  background: col.accent + '50',
                  marginBottom: 14,
                }}
              />
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  lineHeight: 1.55,
                  color: col.accent,
                }}
              >
                {back}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Rating buttons */}
      {flipped && (
        <div style={{ padding: '0 20px 16px' }}>
          <div
            style={{
              textAlign: 'center',
              fontSize: 11,
              color: '#6e7681',
              letterSpacing: 1,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Оцени, насколько ты знаешь эту фразу
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              gap: 8,
              maxWidth: 580,
              margin: '0 auto',
            }}
          >
            {RATINGS.map(({ q, label, sub, bg, color, bdr }) => (
              <button
                key={q}
                onClick={() => handleAnswer(q)}
                style={{
                  padding: '13px 6px',
                  borderRadius: 10,
                  border: `1px solid ${bdr}`,
                  background: bg,
                  color,
                  cursor: 'pointer',
                  transition: 'transform 0.1s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 3,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.04)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                <span style={{ fontSize: 14, fontWeight: 700 }}>{label}</span>
                <span style={{ fontSize: 10, opacity: 0.65 }}>{sub}</span>
              </button>
            ))}
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: 10,
              fontSize: 11,
              color: '#6e7681',
            }}
          >
            {sr.repetitions > 0
              ? `Серия: ${sr.repetitions} верных · интервал: ${
                  sr.interval
                } карт · EF: ${sr.easeFactor.toFixed(2)}`
              : 'Первый раз видишь эту карточку'}
          </div>
        </div>
      )}

      {!flipped && (
        <div
          style={{
            textAlign: 'center',
            color: '#6e7681',
            fontSize: 12,
            paddingBottom: 16,
          }}
        >
          Подумай — потом открой
        </div>
      )}
    </div>
  );
}
