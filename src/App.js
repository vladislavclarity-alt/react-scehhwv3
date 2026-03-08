import React from 'react';
import './style.css';

import { useState } from "react";

/* ─── DATA ─────────────────────────────────────────────────────────────────── */
const CARDS_DATA = [
  { id:1,  cat:"Вступление",                     en:"I'm going to give a talk about...",                           ru:"Я расскажу о..." },
  { id:2,  cat:"Вступление",                     en:"Today I'd like to talk about...",                             ru:"Сегодня я хотел(а) бы рассказать о..." },
  { id:3,  cat:"Вступление",                     en:"Well, let me tell you about...",                              ru:"Позвольте рассказать вам о..." },
  { id:4,  cat:"Вступление",                     en:"The topic of my talk is...",                                  ru:"Тема моего выступления — ..." },
  { id:5,  cat:"Вступление",                     en:"I want to start by saying that...",                          ru:"Хочу начать с того, что..." },
  { id:6,  cat:"Вступление",                     en:"Nowadays the topic of ... is very important.",                ru:"В наше время тема ... очень актуальна." },
  { id:7,  cat:"Вступление",                     en:"In our modern world, ... is a big part of our life.",         ru:"В современном мире ... — важная часть нашей жизни." },
  { id:8,  cat:"Универсальные фразы",            en:"[TOPIC] is a very important part of everyone's life.",        ru:"[ТЕМА] — очень важная часть жизни каждого человека." },
  { id:9,  cat:"Универсальные фразы",            en:"[TOPIC] plays an important role in our life.",                ru:"[ТЕМА] играет важную роль в нашей жизни." },
  { id:10, cat:"Универсальные фразы",            en:"[TOPIC] is very popular nowadays, especially among teenagers.",ru:"[ТЕМА] очень популярна в наши дни, особенно среди подростков." },
  { id:11, cat:"Универсальные фразы",            en:"Many people are interested in [TOPIC].",                     ru:"Многие люди интересуются [ТЕМОЙ]." },
  { id:12, cat:"Универсальные фразы",            en:"It is hard to imagine modern life without [TOPIC].",          ru:"Трудно представить современную жизнь без [ТЕМЫ]." },
  { id:13, cat:"Универсальные фразы",            en:"There are many reasons why ... is so popular.",               ru:"Есть много причин, почему ... так популярно." },
  { id:14, cat:"Универсальные фразы",            en:"It helps people relax / learn new things / stay healthy.",   ru:"Это помогает людям расслабиться / узнавать новое / быть здоровым." },
  { id:15, cat:"Универсальные фразы",            en:"More and more people are getting interested in [TOPIC].",    ru:"Всё больше людей интересуются [ТЕМОЙ]." },
  { id:16, cat:"О себе",                         en:"As for me, I really enjoy...",                                ru:"Что касается меня, я очень люблю..." },
  { id:17, cat:"О себе",                         en:"Personally, I think that ... is great.",                      ru:"Лично я думаю, что ... — это здорово." },
  { id:18, cat:"О себе",                         en:"I spend a lot of time...",                                    ru:"Я провожу много времени..." },
  { id:19, cat:"О себе",                         en:"In my free time, I often...",                                 ru:"В свободное время я часто..." },
  { id:20, cat:"О себе",                         en:"I have been interested in ... for a long time.",              ru:"Я интересуюсь ... уже давно." },
  { id:21, cat:"О себе",                         en:"I find ... very interesting / enjoyable / useful.",           ru:"Я нахожу ... очень интересным / приятным / полезным." },
  { id:22, cat:"Переходы",                       en:"First of all, ...",                                           ru:"Прежде всего / Во-первых,..." },
  { id:23, cat:"Переходы",                       en:"To start with, ...",                                          ru:"Для начала,..." },
  { id:24, cat:"Переходы",                       en:"Secondly, ...",                                               ru:"Во-вторых,..." },
  { id:25, cat:"Переходы",                       en:"Now let me talk about...",                                    ru:"Теперь позвольте рассказать о..." },
  { id:26, cat:"Переходы",                       en:"Moving on to the next point,...",                             ru:"Переходя к следующему пункту,..." },
  { id:27, cat:"Переходы",                       en:"As for ..., ...",                                             ru:"Что касается ..., ..." },
  { id:28, cat:"Переходы",                       en:"Speaking about ..., ...",                                     ru:"Говоря о ..., ..." },
  { id:29, cat:"Переходы",                       en:"When it comes to ..., ...",                                   ru:"Когда речь идёт о ..., ..." },
  { id:30, cat:"Переходы",                       en:"Finally, ...",                                                ru:"И наконец,..." },
  { id:31, cat:"Связки: Добавление",             en:"Also, ...",                                                   ru:"Также,..." },
  { id:32, cat:"Связки: Добавление",             en:"Besides, ...",                                                ru:"Кроме того,..." },
  { id:33, cat:"Связки: Добавление",             en:"In addition, ...",                                            ru:"Вдобавок,..." },
  { id:34, cat:"Связки: Добавление",             en:"What is more, ...",                                           ru:"Более того,..." },
  { id:35, cat:"Связки: Добавление",             en:"Moreover, ...",                                               ru:"Помимо этого,..." },
  { id:36, cat:"Связки: Противопоставление",     en:"However, ...",                                                ru:"Однако,..." },
  { id:37, cat:"Связки: Противопоставление",     en:"On the other hand, ...",                                      ru:"С другой стороны,..." },
  { id:38, cat:"Связки: Противопоставление",     en:"Although ..., ...",                                           ru:"Хотя ..., ..." },
  { id:39, cat:"Связки: Противопоставление",     en:"At the same time, ...",                                       ru:"В то же время,..." },
  { id:40, cat:"Связки: Причина",                en:"That is why ...",                                             ru:"Именно поэтому..." },
  { id:41, cat:"Связки: Причина",                en:"The reason is that ...",                                      ru:"Причина в том, что..." },
  { id:42, cat:"Связки: Причина",                en:"As a result, ...",                                            ru:"В результате,..." },
  { id:43, cat:"Связки: Причина",                en:"For example, ...",                                            ru:"Например,..." },
  { id:44, cat:"Связки: Причина",                en:"For instance, ...",                                           ru:"К примеру,..." },
  { id:45, cat:"Мнение",                         en:"I think that ...",                                            ru:"Я думаю, что..." },
  { id:46, cat:"Мнение",                         en:"I believe that ...",                                          ru:"Я считаю, что..." },
  { id:47, cat:"Мнение",                         en:"In my opinion, ...",                                          ru:"По моему мнению,..." },
  { id:48, cat:"Мнение",                         en:"To my mind, ...",                                             ru:"На мой взгляд,..." },
  { id:49, cat:"Мнение",                         en:"I feel that ...",                                             ru:"Мне кажется, что..." },
  { id:50, cat:"Мнение",                         en:"Personally, I ...",                                           ru:"Лично я..." },
  { id:51, cat:"Мнение",                         en:"I really like / love ...",                                    ru:"Мне очень нравится..." },
  { id:52, cat:"Мнение",                         en:"I'm not very keen on ...",                                    ru:"Мне не очень нравится..." },
  { id:53, cat:"Мнение",                         en:"I know from my own experience that ...",                      ru:"Из собственного опыта знаю, что..." },
  { id:54, cat:"Мнение",                         en:"I can say for sure that ...",                                 ru:"Я могу с уверенностью сказать, что..." },
  { id:55, cat:"Мнение",                         en:"It is a well-known fact that ...",                            ru:"Хорошо известно, что..." },
  { id:56, cat:"Заключение",                     en:"That's all I wanted to say about...",                        ru:"Это всё, что я хотел(а) сказать о..." },
  { id:57, cat:"Заключение",                     en:"To sum up, I'd like to say that...",                         ru:"Подводя итог, хочу сказать, что..." },
  { id:58, cat:"Заключение",                     en:"In conclusion, I can say that...",                           ru:"В заключение я могу сказать, что..." },
  { id:59, cat:"Заключение",                     en:"All in all, I think that...",                                ru:"В целом, я думаю, что..." },
  { id:60, cat:"Заключение",                     en:"That's everything I wanted to tell you about...",            ru:"Это всё, что я хотел(а) вам рассказать о..." },
  { id:61, cat:"Паузы",                          en:"Well, ...",                                                   ru:"Ну / Итак,..." },
  { id:62, cat:"Паузы",                          en:"Actually, ...",                                               ru:"На самом деле,..." },
  { id:63, cat:"Паузы",                          en:"Let me think...",                                             ru:"Дайте подумать..." },
  { id:64, cat:"Паузы",                          en:"In other words, ...",                                         ru:"Другими словами,..." },
  { id:65, cat:"Паузы",                          en:"I'm sure that ...",                                           ru:"Я уверен(а), что..." },
  { id:66, cat:"Паузы",                          en:"Maybe / Perhaps ...",                                         ru:"Может быть / Пожалуй..." },
];

/* ─── PALETTE ───────────────────────────────────────────────────────────────── */
const THEME = {
  bg:       "#FAF7F4",
  surface:  "#FFFFFF",
  border:   "#EDE8E3",
  text:     "#3D3530",
  muted:    "#9E9089",
  accent:   "#C4956A",
};

const CAT_PALETTES = {
  "Вступление":                  { pill:"#FDE8D8", pillText:"#A0522D", card:"#FFF5EF" },
  "Универсальные фразы":         { pill:"#FDEFD4", pillText:"#8B6914", card:"#FFFBEF" },
  "О себе":                      { pill:"#E8F4E8", pillText:"#3A6B3A", card:"#F4FBF4" },
  "Переходы":                    { pill:"#E0EEF8", pillText:"#2A5C8A", card:"#F0F7FD" },
  "Связки: Добавление":          { pill:"#EAE4F8", pillText:"#5B3FA0", card:"#F5F1FD" },
  "Связки: Противопоставление":  { pill:"#FCE4EC", pillText:"#AD1457", card:"#FFF0F5" },
  "Связки: Причина":             { pill:"#E0F7F4", pillText:"#00695C", card:"#F0FDFB" },
  "Мнение":                      { pill:"#FDE8F0", pillText:"#C2185B", card:"#FFF3F8" },
  "Заключение":                  { pill:"#E8EAF6", pillText:"#3949AB", card:"#F3F4FD" },
  "Паузы":                       { pill:"#F1F8E9", pillText:"#558B2F", card:"#F7FDF0" },
};
const CAT_EMOJI = {
  "Вступление":"🎙️","Универсальные фразы":"⭐","О себе":"👤",
  "Переходы":"➡️","Связки: Добавление":"➕","Связки: Противопоставление":"↔️",
  "Связки: Причина":"💡","Мнение":"💬","Заключение":"🏁","Паузы":"⏱️",
};
const ALL_CATS = [...new Set(CARDS_DATA.map(c => c.cat))];

/* ─── SM-2 ──────────────────────────────────────────────────────────────────── */
function applySM2(sr, q) {
  let { interval, easeFactor, reps } = sr;
  if (q === 0)      { reps = 0; interval = 1; }
  else if (q === 1) { reps = 0; interval = 3; easeFactor = Math.max(1.3, easeFactor - 0.15); }
  else if (q === 2) { interval = reps===0?3:reps===1?7:Math.round(interval*easeFactor); easeFactor=Math.max(1.3,easeFactor+0.1); reps++; }
  else              { interval = reps===0?8:Math.round(interval*easeFactor*1.3); easeFactor=Math.min(3.5,easeFactor+0.15); reps++; }
  return { ...sr, interval, easeFactor, reps };
}
function reinsert(queue, pos, id, interval) {
  const q = queue.filter((_,i)=>i!==pos);
  q.splice(Math.min(pos+interval, q.length), 0, id);
  return q;
}
function initSR(ids) {
  const s={};
  ids.forEach(id=>{ s[id]={id,interval:1,easeFactor:2.5,reps:0}; });
  return s;
}
function shuffle(arr) {
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function palFor(cat){ return CAT_PALETTES[cat]||CAT_PALETTES["Вступление"]; }

/* ─── COMPONENTS ────────────────────────────────────────────────────────────── */
const S = {
  wrap: {
    minHeight:"100vh", background:THEME.bg, fontFamily:"'Georgia', 'Times New Roman', serif",
    color:THEME.text, maxWidth:480, margin:"0 auto", display:"flex", flexDirection:"column",
  },
};

/* ═══════════════════════════════════════════════════════════════════════════════
   MENU
═══════════════════════════════════════════════════════════════════════════════ */
function Menu({ filtered, selectedCats, setSelectedCats, frontLang, setFrontLang, onStart }) {
  function toggleCat(cat) {
    const s = new Set(selectedCats);
    if (s.has(cat)) { if (s.size>1) s.delete(cat); } else s.add(cat);
    setSelectedCats(s);
  }
  return (
    <div style={S.wrap}>
      {/* Header */}
      <div style={{ padding:"44px 24px 28px", textAlign:"center" }}>
        <div style={{ fontSize:11, letterSpacing:5, color:THEME.muted, textTransform:"uppercase", marginBottom:14 }}>
          ОГЭ · Английский
        </div>
        <h1 style={{ fontSize:28, fontWeight:400, margin:0, color:THEME.text, letterSpacing:"-0.5px", lineHeight:1.2 }}>
          Клише<br/>и Связки
        </h1>
        <div style={{ marginTop:10, fontSize:13, color:THEME.muted }}>
          {filtered.length} карточек · алгоритм Anki
        </div>
      </div>

      {/* Anki hint */}
      <div style={{ margin:"0 20px 20px", background:THEME.surface, border:`1px solid ${THEME.border}`, borderRadius:16, padding:"16px 18px" }}>
        <div style={{ fontSize:12, fontWeight:700, color:THEME.accent, marginBottom:10, letterSpacing:1, textTransform:"uppercase" }}>Как работает</div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px 12px" }}>
          {[
            ["🔴","Не знаю","вернётся через 1"],
            ["🟠","Сложно","вернётся через 3"],
            ["🟢","Знаю","интервал растёт"],
            ["🔵","Легко","растёт быстро"],
          ].map(([e,l,s])=>(
            <div key={l} style={{ display:"flex", alignItems:"flex-start", gap:8 }}>
              <span style={{ fontSize:13 }}>{e}</span>
              <div>
                <div style={{ fontSize:13, fontWeight:600, color:THEME.text }}>{l}</div>
                <div style={{ fontSize:11, color:THEME.muted }}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lang toggle */}
      <div style={{ margin:"0 20px 20px" }}>
        <div style={{ fontSize:11, letterSpacing:3, color:THEME.muted, textTransform:"uppercase", marginBottom:10 }}>Сторона карточки</div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
          {[["en","🇬🇧  English → Русский"],["ru","🇷🇺  Русский → English"]].map(([val,label])=>(
            <button key={val} onClick={()=>setFrontLang(val)} style={{
              padding:"12px 8px", borderRadius:12, border:`2px solid ${frontLang===val?THEME.accent:THEME.border}`,
              background:frontLang===val?"#FDF5EE":THEME.surface, cursor:"pointer",
              fontSize:13, fontWeight:frontLang===val?700:400, color:frontLang===val?THEME.accent:THEME.muted,
              transition:"all 0.2s", textAlign:"center",
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div style={{ margin:"0 20px 24px" }}>
        <div style={{ fontSize:11, letterSpacing:3, color:THEME.muted, textTransform:"uppercase", marginBottom:10 }}>Разделы</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
          <button onClick={()=>setSelectedCats(new Set(ALL_CATS))} style={{
            padding:"7px 14px", borderRadius:20, border:`1.5px solid ${selectedCats.size===ALL_CATS.length?THEME.accent:THEME.border}`,
            background:selectedCats.size===ALL_CATS.length?"#FDF5EE":THEME.surface,
            color:selectedCats.size===ALL_CATS.length?THEME.accent:THEME.muted, fontSize:12, cursor:"pointer",
          }}>Все</button>
          {ALL_CATS.map(cat=>{
            const sel = selectedCats.has(cat);
            const pal = palFor(cat);
            const cnt = CARDS_DATA.filter(c=>c.cat===cat).length;
            return (
              <button key={cat} onClick={()=>toggleCat(cat)} style={{
                padding:"7px 14px", borderRadius:20,
                border:`1.5px solid ${sel?pal.pillText+"60":THEME.border}`,
                background:sel?pal.pill:THEME.surface,
                color:sel?pal.pillText:THEME.muted, fontSize:12, cursor:"pointer", transition:"all 0.18s",
              }}>{CAT_EMOJI[cat]} {cat} <span style={{opacity:0.6}}>({cnt})</span></button>
            );
          })}
        </div>
      </div>

      {/* Start button */}
      <div style={{ padding:"0 20px 40px", marginTop:"auto" }}>
        <button onClick={onStart} disabled={filtered.length===0} style={{
          width:"100%", padding:"18px", borderRadius:16, border:"none", cursor:"pointer",
          background: filtered.length===0?"#DDD":`linear-gradient(135deg, #D4956A, #C47A50)`,
          color:"#FFF", fontSize:16, fontWeight:700, letterSpacing:0.5,
          boxShadow: filtered.length===0?"none":"0 4px 20px rgba(196,117,80,0.35)",
          transition:"all 0.2s",
        }}>
          Начать — {filtered.length} карточек 🃏
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   STUDY
═══════════════════════════════════════════════════════════════════════════════ */
function Study({ queue, pos, srState, frontLang, goodAnswers, totalAnswers, onAnswer, onMenu }) {
  const [flipped, setFlipped] = useState(false);
  const [anim, setAnim] = useState(null); // "good"|"bad"|null

  const cardId = queue[pos];
  const card = CARDS_DATA.find(c=>c.id===cardId);
  if (!card) return null;

  const pal = palFor(card.cat);
  const sr = srState[cardId]||{reps:0,interval:1,easeFactor:2.5};
  const front = frontLang==="en" ? card.en : card.ru;
  const back  = frontLang==="en" ? card.ru : card.en;

  const uniqueSeen = new Set(queue.slice(0,pos+1)).size;
  const totalUnique = new Set(queue).size;
  const pct = (uniqueSeen/totalUnique)*100;
  const isRepeat = queue.slice(0,pos).includes(cardId);

  function answer(q) {
    setAnim(q>=2?"good":"bad");
    setTimeout(()=>{ setAnim(null); setFlipped(false); onAnswer(q); }, 340);
  }

  const cardTransform =
    anim==="good" ? "translateX(110%) rotate(8deg)" :
    anim==="bad"  ? "translateX(-110%) rotate(-8deg)" : "translateX(0) rotate(0deg)";

  return (
    <div style={{ ...S.wrap, position:"relative" }}>

      {/* Top bar */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px 12px" }}>
        <button onClick={onMenu} style={{ background:"none", border:"none", color:THEME.muted, cursor:"pointer", fontSize:22, padding:4, lineHeight:1 }}>‹</button>
        <div style={{ textAlign:"center" }}>
          <div style={{ fontSize:14, fontWeight:600, color:THEME.text }}>{uniqueSeen} / {totalUnique}</div>
          <div style={{ fontSize:11, color:THEME.muted }}>карточек</div>
        </div>
        <div style={{ fontSize:13, color:THEME.muted }}>
          <span style={{color:"#5C9E5C"}}>✓{goodAnswers}</span>
          {" · "}
          <span style={{color:"#C07070"}}>✗{totalAnswers-goodAnswers}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height:3, background:THEME.border, margin:"0 20px", borderRadius:2 }}>
        <div style={{ height:"100%", width:`${pct}%`, background:THEME.accent, borderRadius:2, transition:"width 0.4s" }} />
      </div>

      {/* Category pill + badges */}
      <div style={{ display:"flex", justifyContent:"center", gap:8, padding:"16px 20px 8px", flexWrap:"wrap" }}>
        <span style={{ fontSize:12, padding:"5px 14px", borderRadius:20, background:pal.pill, color:pal.pillText, fontWeight:600 }}>
          {CAT_EMOJI[card.cat]} {card.cat}
        </span>
        {isRepeat && (
          <span style={{ fontSize:12, padding:"5px 12px", borderRadius:20, background:"#FDEAEA", color:"#C07070", fontWeight:600 }}>
            🔁 Повтор
          </span>
        )}
        {sr.reps>=2 && (
          <span style={{ fontSize:12, padding:"5px 12px", borderRadius:20, background:"#EAF6EA", color:"#4A8A4A", fontWeight:600 }}>
            🔥 ×{sr.reps} подряд
          </span>
        )}
      </div>

      {/* Card */}
      <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", padding:"8px 20px 16px" }}>
        <div
          onClick={()=>!flipped&&setFlipped(true)}
          style={{
            width:"100%", minHeight:220,
            background: flipped ? pal.card : THEME.surface,
            border:`1.5px solid ${flipped?pal.pillText+"40":THEME.border}`,
            borderRadius:24,
            boxShadow: flipped
              ? `0 8px 40px ${pal.pillText}18, 0 2px 8px rgba(0,0,0,0.06)`
              : "0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
            cursor: flipped?"default":"pointer",
            display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
            padding:"32px 28px", textAlign:"center",
            transition:"transform 0.32s ease, opacity 0.32s ease, background 0.22s, box-shadow 0.22s",
            transform: cardTransform,
            opacity: anim ? 0 : 1,
            userSelect:"none",
          }}
        >
          {!flipped ? (
            <>
              <div style={{ fontSize:20, fontWeight:400, lineHeight:1.6, color:THEME.text, letterSpacing:"-0.2px" }}>{front}</div>
              <div style={{ marginTop:20, display:"flex", alignItems:"center", gap:6, color:THEME.muted, fontSize:12 }}>
                <span style={{ fontSize:16 }}>👆</span> нажми, чтобы открыть
              </div>
            </>
          ) : (
            <>
              <div style={{ fontSize:13, color:pal.pillText, marginBottom:8, opacity:0.7, fontStyle:"italic" }}>{front}</div>
              <div style={{ width:32, height:1, background:pal.pillText+"40", marginBottom:16 }} />
              <div style={{ fontSize:20, fontWeight:700, lineHeight:1.6, color:pal.pillText, letterSpacing:"-0.2px" }}>{back}</div>
            </>
          )}
        </div>
      </div>

      {/* Rating buttons */}
      {flipped ? (
        <div style={{ padding:"0 20px 32px" }}>
          <div style={{ fontSize:11, textAlign:"center", color:THEME.muted, letterSpacing:2, textTransform:"uppercase", marginBottom:12 }}>
            Как знаешь фразу?
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:8 }}>
            {[
              { q:0, emoji:"🔴", label:"Не знаю", sub:"×1",  bg:"#FEF0F0", color:"#C07070", border:"#F0C0C0" },
              { q:1, emoji:"🟠", label:"Сложно",  sub:"×3",  bg:"#FEF5EC", color:"#C08030", border:"#F0D0A0" },
              { q:2, emoji:"🟢", label:"Знаю",    sub:"↑",   bg:"#EFF8EF", color:"#4A8A4A", border:"#A8D8A8" },
              { q:3, emoji:"🔵", label:"Легко",   sub:"↑↑",  bg:"#EFF3FE", color:"#3A5AC0", border:"#A8B8F0" },
            ].map(({q,emoji,label,sub,bg,color,border})=>(
              <button key={q} onClick={()=>answer(q)} style={{
                padding:"12px 4px 10px", borderRadius:14,
                border:`1.5px solid ${border}`,
                background:bg, color, cursor:"pointer",
                display:"flex", flexDirection:"column", alignItems:"center", gap:3,
                transition:"transform 0.12s, box-shadow 0.12s",
                boxShadow:"0 1px 4px rgba(0,0,0,0.06)",
                WebkitTapHighlightColor:"transparent",
              }}
                onTouchStart={e=>e.currentTarget.style.transform="scale(0.95)"}
                onTouchEnd={e=>e.currentTarget.style.transform="scale(1)"}
              >
                <span style={{fontSize:18}}>{emoji}</span>
                <span style={{fontSize:12,fontWeight:700}}>{label}</span>
                <span style={{fontSize:10,opacity:0.7}}>{sub}</span>
              </button>
            ))}
          </div>
          {sr.reps>0 && (
            <div style={{ textAlign:"center", marginTop:10, fontSize:11, color:THEME.muted }}>
              Серия: {sr.reps} · интервал: {sr.interval}
            </div>
          )}
        </div>
      ) : (
        <div style={{ padding:"0 20px 32px", textAlign:"center" }}>
          <div style={{ color:THEME.muted, fontSize:12 }}>Подумай — потом открой</div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   RESULT
═══════════════════════════════════════════════════════════════════════════════ */
function Result({ queue, graduated, totalAnswers, goodAnswers, onMenu, onRestart }) {
  const uniqueTotal = new Set(queue).size;
  const masteredCount = graduated.size;
  const pct = Math.round((goodAnswers/Math.max(totalAnswers,1))*100);
  const repeats = totalAnswers - uniqueTotal;
  const emoji = pct>=80?"🎉":pct>=55?"💪":"📚";

  return (
    <div style={{ ...S.wrap, alignItems:"center", justifyContent:"center", padding:"40px 24px" }}>
      <div style={{ textAlign:"center", width:"100%", maxWidth:380 }}>
        <div style={{ fontSize:72, marginBottom:8 }}>{emoji}</div>
        <h2 style={{ fontSize:24, fontWeight:400, margin:"0 0 28px", color:THEME.text }}>Сессия завершена</h2>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:24 }}>
          {[
            ["Точность",         pct+"%",                   pct>=70?"#4A8A4A":"#C08030"],
            ["Всего ответов",    totalAnswers,               THEME.text],
            ["Повторов трудных", repeats,                    repeats>0?"#C07070":THEME.muted],
            ["Освоено (2× верно)", `${masteredCount}/${uniqueTotal}`, "#3A5AC0"],
          ].map(([label,val,color])=>(
            <div key={label} style={{ background:THEME.surface, border:`1px solid ${THEME.border}`, borderRadius:16, padding:"16px 12px", textAlign:"center" }}>
              <div style={{ fontSize:24, fontWeight:700, color }}>{val}</div>
              <div style={{ fontSize:11, color:THEME.muted, marginTop:4 }}>{label}</div>
            </div>
          ))}
        </div>

        {masteredCount<uniqueTotal && (
          <div style={{ background:"#FEF0F0", border:"1px solid #F0C0C0", borderRadius:12, padding:"12px 16px", marginBottom:20, fontSize:13, color:"#C07070" }}>
            {uniqueTotal-masteredCount} карточек ещё не освоены — повтори ещё раз
          </div>
        )}

        <div style={{ display:"flex", gap:12 }}>
          <button onClick={onMenu} style={{ flex:1, padding:"15px", borderRadius:14, border:`1.5px solid ${THEME.border}`, background:THEME.surface, color:THEME.text, cursor:"pointer", fontSize:14 }}>
            ← Меню
          </button>
          <button onClick={onRestart} style={{ flex:1, padding:"15px", borderRadius:14, border:"none", background:`linear-gradient(135deg,#D4956A,#C47A50)`, color:"#FFF", cursor:"pointer", fontSize:14, fontWeight:700, boxShadow:"0 4px 16px rgba(196,117,80,0.3)" }}>
            Ещё раз
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════════════════════════ */
export default function App() {
  const [mode, setMode] = useState("menu");
  const [selectedCats, setSelectedCats] = useState(new Set(ALL_CATS));
  const [frontLang, setFrontLang] = useState("en");

  const [queue, setQueue]       = useState([]);
  const [pos, setPos]           = useState(0);
  const [srState, setSrState]   = useState({});
  const [totalAnswers, setTotal] = useState(0);
  const [goodAnswers, setGood]  = useState(0);
  const [graduated, setGrad]    = useState(new Set());

  const filtered = CARDS_DATA.filter(c=>selectedCats.has(c.cat));

  function startStudy() {
    const ids = shuffle(filtered.map(c=>c.id));
    setQueue(ids); setPos(0); setSrState(initSR(ids));
    setTotal(0); setGood(0); setGrad(new Set());
    setMode("study");
  }

  function handleAnswer(q) {
    const cardId = queue[pos];
    const updated = applySM2(srState[cardId], q);
    setSrState(prev=>({...prev,[cardId]:updated}));
    setTotal(t=>t+1);
    if(q>=2) setGood(g=>g+1);

    const ng = new Set(graduated);
    if(updated.reps>=2) ng.add(cardId); else ng.delete(cardId);
    setGrad(ng);

    let nq = queue, np = pos+1;
    if(q<2){ nq=reinsert(queue,pos,cardId,updated.interval); setQueue(nq); }
    if(np>=nq.length) setMode("result"); else setPos(np);
  }

  if (mode==="menu")   return <Menu filtered={filtered} selectedCats={selectedCats} setSelectedCats={setSelectedCats} frontLang={frontLang} setFrontLang={setFrontLang} onStart={startStudy}/>;
  if (mode==="result") return <Result queue={queue} graduated={graduated} totalAnswers={totalAnswers} goodAnswers={goodAnswers} onMenu={()=>setMode("menu")} onRestart={startStudy}/>;
  return <Study queue={queue} pos={pos} srState={srState} frontLang={frontLang} goodAnswers={goodAnswers} totalAnswers={totalAnswers} onAnswer={handleAnswer} onMenu={()=>setMode("menu")}/>;
}