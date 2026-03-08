import React from 'react';
import './style.css';

import { useState } from "react";

const CARDS_DATA = [
  { id:1,  cat:"Вступление",                    en:"I'm going to give a talk about...",                            ru:"Я расскажу о..." },
  { id:2,  cat:"Вступление",                    en:"Today I'd like to talk about...",                              ru:"Сегодня я хотел(а) бы рассказать о..." },
  { id:3,  cat:"Вступление",                    en:"Well, let me tell you about...",                               ru:"Позвольте рассказать вам о..." },
  { id:4,  cat:"Вступление",                    en:"The topic of my talk is...",                                   ru:"Тема моего выступления — ..." },
  { id:5,  cat:"Вступление",                    en:"I want to start by saying that...",                           ru:"Хочу начать с того, что..." },
  { id:6,  cat:"Вступление",                    en:"Nowadays the topic of ... is very important.",                 ru:"В наше время тема ... очень актуальна." },
  { id:7,  cat:"Вступление",                    en:"In our modern world, ... is a big part of our life.",          ru:"В современном мире ... — важная часть нашей жизни." },
  { id:8,  cat:"Универсальные фразы",           en:"[TOPIC] is a very important part of everyone's life.",         ru:"[ТЕМА] — очень важная часть жизни каждого человека." },
  { id:9,  cat:"Универсальные фразы",           en:"[TOPIC] plays an important role in our life.",                 ru:"[ТЕМА] играет важную роль в нашей жизни." },
  { id:10, cat:"Универсальные фразы",           en:"[TOPIC] is very popular nowadays, especially among teenagers.", ru:"[ТЕМА] очень популярна в наши дни, особенно среди подростков." },
  { id:11, cat:"Универсальные фразы",           en:"Many people are interested in [TOPIC].",                      ru:"Многие люди интересуются [ТЕМОЙ]." },
  { id:12, cat:"Универсальные фразы",           en:"It is hard to imagine modern life without [TOPIC].",           ru:"Трудно представить современную жизнь без [ТЕМЫ]." },
  { id:13, cat:"Универсальные фразы",           en:"There are many reasons why ... is so popular.",                ru:"Есть много причин, почему ... так популярно." },
  { id:14, cat:"Универсальные фразы",           en:"It helps people relax / learn new things / stay healthy.",    ru:"Это помогает людям расслабиться / узнавать новое / быть здоровым." },
  { id:15, cat:"Универсальные фразы",           en:"More and more people are getting interested in [TOPIC].",     ru:"Всё больше людей интересуются [ТЕМОЙ]." },
  { id:16, cat:"О себе",                        en:"As for me, I really enjoy...",                                 ru:"Что касается меня, я очень люблю..." },
  { id:17, cat:"О себе",                        en:"Personally, I think that ... is great.",                       ru:"Лично я думаю, что ... — это здорово." },
  { id:18, cat:"О себе",                        en:"I spend a lot of time...",                                     ru:"Я провожу много времени..." },
  { id:19, cat:"О себе",                        en:"In my free time, I often...",                                  ru:"В свободное время я часто..." },
  { id:20, cat:"О себе",                        en:"I have been interested in ... for a long time.",               ru:"Я интересуюсь ... уже давно." },
  { id:21, cat:"О себе",                        en:"I find ... very interesting / enjoyable / useful.",            ru:"Я нахожу ... очень интересным / приятным / полезным." },
  { id:22, cat:"Переходы",                      en:"First of all, ...",                                            ru:"Прежде всего / Во-первых,..." },
  { id:23, cat:"Переходы",                      en:"To start with, ...",                                           ru:"Для начала,..." },
  { id:24, cat:"Переходы",                      en:"Secondly, ...",                                                ru:"Во-вторых,..." },
  { id:25, cat:"Переходы",                      en:"Now let me talk about...",                                     ru:"Теперь позвольте рассказать о..." },
  { id:26, cat:"Переходы",                      en:"Moving on to the next point,...",                              ru:"Переходя к следующему пункту,..." },
  { id:27, cat:"Переходы",                      en:"As for ..., ...",                                              ru:"Что касается ..., ..." },
  { id:28, cat:"Переходы",                      en:"Speaking about ..., ...",                                      ru:"Говоря о ..., ..." },
  { id:29, cat:"Переходы",                      en:"When it comes to ..., ...",                                    ru:"Когда речь идёт о ..., ..." },
  { id:30, cat:"Переходы",                      en:"Finally, ...",                                                 ru:"И наконец,..." },
  { id:31, cat:"Связки: Добавление",            en:"Also, ...",                                                    ru:"Также,..." },
  { id:32, cat:"Связки: Добавление",            en:"Besides, ...",                                                 ru:"Кроме того,..." },
  { id:33, cat:"Связки: Добавление",            en:"In addition, ...",                                             ru:"Вдобавок,..." },
  { id:34, cat:"Связки: Добавление",            en:"What is more, ...",                                            ru:"Более того,..." },
  { id:35, cat:"Связки: Добавление",            en:"Moreover, ...",                                                ru:"Помимо этого,..." },
  { id:36, cat:"Связки: Против",                en:"However, ...",                                                 ru:"Однако,..." },
  { id:37, cat:"Связки: Против",                en:"On the other hand, ...",                                       ru:"С другой стороны,..." },
  { id:38, cat:"Связки: Против",                en:"Although ..., ...",                                            ru:"Хотя ..., ..." },
  { id:39, cat:"Связки: Против",                en:"At the same time, ...",                                        ru:"В то же время,..." },
  { id:40, cat:"Причина",                       en:"That is why ...",                                              ru:"Именно поэтому..." },
  { id:41, cat:"Причина",                       en:"The reason is that ...",                                       ru:"Причина в том, что..." },
  { id:42, cat:"Причина",                       en:"As a result, ...",                                             ru:"В результате,..." },
  { id:43, cat:"Причина",                       en:"For example, ...",                                             ru:"Например,..." },
  { id:44, cat:"Причина",                       en:"For instance, ...",                                            ru:"К примеру,..." },
  { id:45, cat:"Мнение",                        en:"I think that ...",                                             ru:"Я думаю, что..." },
  { id:46, cat:"Мнение",                        en:"I believe that ...",                                           ru:"Я считаю, что..." },
  { id:47, cat:"Мнение",                        en:"In my opinion, ...",                                           ru:"По моему мнению,..." },
  { id:48, cat:"Мнение",                        en:"To my mind, ...",                                              ru:"На мой взгляд,..." },
  { id:49, cat:"Мнение",                        en:"I feel that ...",                                              ru:"Мне кажется, что..." },
  { id:50, cat:"Мнение",                        en:"Personally, I ...",                                            ru:"Лично я..." },
  { id:51, cat:"Мнение",                        en:"I really like / love ...",                                     ru:"Мне очень нравится..." },
  { id:52, cat:"Мнение",                        en:"I'm not very keen on ...",                                     ru:"Мне не очень нравится..." },
  { id:53, cat:"Мнение",                        en:"I know from my own experience that ...",                       ru:"Из собственного опыта знаю, что..." },
  { id:54, cat:"Мнение",                        en:"I can say for sure that ...",                                  ru:"Я могу с уверенностью сказать, что..." },
  { id:55, cat:"Мнение",                        en:"It is a well-known fact that ...",                             ru:"Хорошо известно, что..." },
  { id:56, cat:"Заключение",                    en:"That's all I wanted to say about...",                         ru:"Это всё, что я хотел(а) сказать о..." },
  { id:57, cat:"Заключение",                    en:"To sum up, I'd like to say that...",                          ru:"Подводя итог, хочу сказать, что..." },
  { id:58, cat:"Заключение",                    en:"In conclusion, I can say that...",                            ru:"В заключение я могу сказать, что..." },
  { id:59, cat:"Заключение",                    en:"All in all, I think that...",                                 ru:"В целом, я думаю, что..." },
  { id:60, cat:"Заключение",                    en:"That's everything I wanted to tell you about...",             ru:"Это всё, что я хотел(а) вам рассказать о..." },
  { id:61, cat:"Паузы",                         en:"Well, ...",                                                    ru:"Ну / Итак,..." },
  { id:62, cat:"Паузы",                         en:"Actually, ...",                                                ru:"На самом деле,..." },
  { id:63, cat:"Паузы",                         en:"Let me think...",                                              ru:"Дайте подумать..." },
  { id:64, cat:"Паузы",                         en:"In other words, ...",                                          ru:"Другими словами,..." },
  { id:65, cat:"Паузы",                         en:"I'm sure that ...",                                            ru:"Я уверен(а), что..." },
  { id:66, cat:"Паузы",                         en:"Maybe / Perhaps ...",                                          ru:"Может быть / Пожалуй..." },
];

const T = {
  bg:"#FAF7F2", surface:"#FFFFFF", border:"#EAE4DC",
  text:"#332E28", muted:"#A09285", accent:"#C4875A",
};

const PALS = {
  "Вступление":         { pill:"#FDDEC8", txt:"#8B4513", card:"#FFF6F0" },
  "Универсальные фразы":{ pill:"#FDEECA", txt:"#7A5C00", card:"#FFFDF0" },
  "О себе":             { pill:"#DFF0DF", txt:"#2E6B2E", card:"#F4FBF4" },
  "Переходы":           { pill:"#D8EAF8", txt:"#1E5080", card:"#EEF6FD" },
  "Связки: Добавление": { pill:"#E6DFF8", txt:"#4A30A0", card:"#F2EEFD" },
  "Связки: Против":     { pill:"#FBDDE8", txt:"#A01050", card:"#FFF0F5" },
  "Причина":            { pill:"#D4F2EE", txt:"#006655", card:"#EDFAF8" },
  "Мнение":             { pill:"#FBDDF0", txt:"#A01070", card:"#FFF0FA" },
  "Заключение":         { pill:"#DEE2F8", txt:"#2A3DAA", card:"#F0F2FD" },
  "Паузы":              { pill:"#E4F2D8", txt:"#3D7020", card:"#F2FAE8" },
};
const EMOJI = {
  "Вступление":"🎙️","Универсальные фразы":"⭐","О себе":"👤","Переходы":"➡️",
  "Связки: Добавление":"➕","Связки: Против":"↔️","Причина":"💡",
  "Мнение":"💬","Заключение":"🏁","Паузы":"⏱️",
};
const ALL_CATS = [...new Set(CARDS_DATA.map(c=>c.cat))];

function pal(cat){ return PALS[cat]||PALS["Вступление"]; }
function shuffle(a){ const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; }
function initSR(ids){ const s={}; ids.forEach(id=>{s[id]={interval:1,easeFactor:2.5,reps:0};}); return s; }
function sm2(sr,q){
  let{interval,easeFactor,reps}=sr;
  if(q===0){reps=0;interval=1;}
  else if(q===1){reps=0;interval=3;easeFactor=Math.max(1.3,easeFactor-0.15);}
  else if(q===2){interval=reps===0?3:reps===1?7:Math.round(interval*easeFactor);easeFactor=Math.max(1.3,easeFactor+0.1);reps++;}
  else{interval=reps===0?8:Math.round(interval*easeFactor*1.3);easeFactor=Math.min(3.5,easeFactor+0.15);reps++;}
  return{...sr,interval,easeFactor,reps};
}
function reinsert(q,pos,id,interval){
  const nq=q.filter((_,i)=>i!==pos);
  nq.splice(Math.min(pos+interval,nq.length),0,id);
  return nq;
}

/* ── GLOBAL STYLES injected once ── */
const globalCSS = `
  *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
  body{margin:0;background:#FAF7F2;overscroll-behavior:none;}
  button{font-family:inherit;cursor:pointer;}
  .btn-rating:active{transform:scale(0.93)!important;}
`;

/* ════════════════════════════════════════════════
   MENU
════════════════════════════════════════════════ */
function Menu({filtered,selectedCats,setSelectedCats,frontLang,setFrontLang,onStart}){
  function toggle(cat){
    const s=new Set(selectedCats);
    if(s.has(cat)){if(s.size>1)s.delete(cat);}else s.add(cat);
    setSelectedCats(s);
  }
  return(
    <div style={{background:T.bg,minHeight:"100vh",fontFamily:"Georgia,serif",color:T.text}}>
      <style>{globalCSS}</style>

      {/* HEADER */}
      <div style={{textAlign:"center",padding:"36px 20px 20px"}}>
        <div style={{fontSize:12,letterSpacing:4,color:T.muted,textTransform:"uppercase",marginBottom:12}}>
          ОГЭ · Английский · Монолог
        </div>
        <div style={{fontSize:36,fontWeight:400,lineHeight:1.15,color:T.text,letterSpacing:"-1px"}}>
          Клише<br/>и Связки
        </div>
        <div style={{marginTop:10,fontSize:15,color:T.muted}}>
          {filtered.length} карточек · алгоритм Anki
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{margin:"0 16px 16px",background:T.surface,borderRadius:20,padding:"18px 20px",border:`1px solid ${T.border}`}}>
        <div style={{fontSize:13,fontWeight:700,color:T.accent,marginBottom:14,letterSpacing:1,textTransform:"uppercase"}}>
          Как работает
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {[
            ["🔴","Не знаю","вернётся через 1"],
            ["🟠","Сложно","вернётся через 3"],
            ["🟢","Знаю","интервал растёт"],
            ["🔵","Легко","растёт быстрее"],
          ].map(([e,l,s])=>(
            <div key={l} style={{display:"flex",gap:10,alignItems:"flex-start"}}>
              <span style={{fontSize:20,lineHeight:1}}>{e}</span>
              <div>
                <div style={{fontSize:15,fontWeight:600,color:T.text,lineHeight:1.2}}>{l}</div>
                <div style={{fontSize:12,color:T.muted,marginTop:2}}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LANG TOGGLE */}
      <div style={{margin:"0 16px 16px"}}>
        <div style={{fontSize:12,letterSpacing:3,color:T.muted,textTransform:"uppercase",marginBottom:10}}>Сторона карточки</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
          {[["en","🇬🇧 EN → RU"],["ru","🇷🇺 RU → EN"]].map(([v,lbl])=>(
            <button key={v} onClick={()=>setFrontLang(v)} style={{
              padding:"14px 8px",borderRadius:14,
              border:`2px solid ${frontLang===v?T.accent:T.border}`,
              background:frontLang===v?"#FDF3EC":T.surface,
              color:frontLang===v?T.accent:T.muted,
              fontSize:15,fontWeight:frontLang===v?700:400,
              transition:"all 0.18s",
            }}>{lbl}</button>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div style={{margin:"0 16px 24px"}}>
        <div style={{fontSize:12,letterSpacing:3,color:T.muted,textTransform:"uppercase",marginBottom:10}}>Разделы</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
          <button onClick={()=>setSelectedCats(new Set(ALL_CATS))} style={{
            padding:"8px 16px",borderRadius:20,fontSize:14,
            border:`1.5px solid ${selectedCats.size===ALL_CATS.length?T.accent:T.border}`,
            background:selectedCats.size===ALL_CATS.length?"#FDF3EC":T.surface,
            color:selectedCats.size===ALL_CATS.length?T.accent:T.muted,
          }}>Все</button>
          {ALL_CATS.map(cat=>{
            const sel=selectedCats.has(cat);
            const p=pal(cat);
            const cnt=CARDS_DATA.filter(c=>c.cat===cat).length;
            return(
              <button key={cat} onClick={()=>toggle(cat)} style={{
                padding:"8px 16px",borderRadius:20,fontSize:14,
                border:`1.5px solid ${sel?p.txt+"50":T.border}`,
                background:sel?p.pill:T.surface,
                color:sel?p.txt:T.muted,
                transition:"all 0.15s",
              }}>{EMOJI[cat]} {cat} ({cnt})</button>
            );
          })}
        </div>
      </div>

      {/* START BUTTON */}
      <div style={{padding:"0 16px 40px"}}>
        <button onClick={onStart} disabled={filtered.length===0} style={{
          width:"100%",padding:"20px",borderRadius:18,border:"none",
          background:filtered.length===0?"#CCC":`linear-gradient(135deg,#D4956A,#BF7040)`,
          color:"#FFF",fontSize:18,fontWeight:700,
          boxShadow:filtered.length===0?"none":"0 6px 24px rgba(191,112,64,0.35)",
          transition:"all 0.2s",
        }}>
          Начать — {filtered.length} карточек 🃏
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   STUDY
════════════════════════════════════════════════ */
function Study({queue,pos,srState,frontLang,goodAnswers,totalAnswers,onAnswer,onMenu}){
  const [flipped,setFlipped]=useState(false);
  const [anim,setAnim]=useState(null);

  const cardId=queue[pos];
  const card=CARDS_DATA.find(c=>c.id===cardId);
  if(!card)return null;

  const p=pal(card.cat);
  const sr=srState[cardId]||{reps:0,interval:1,easeFactor:2.5};
  const front=frontLang==="en"?card.en:card.ru;
  const back=frontLang==="en"?card.ru:card.en;
  const uniqueSeen=new Set(queue.slice(0,pos+1)).size;
  const totalUnique=new Set(queue).size;
  const pct=(uniqueSeen/totalUnique)*100;
  const isRepeat=queue.slice(0,pos).includes(cardId);

  function answer(q){
    setAnim(q>=2?"right":"left");
    setTimeout(()=>{setAnim(null);setFlipped(false);onAnswer(q);},320);
  }

  const cardStyle={
    width:"100%",minHeight:220,
    background:flipped?p.card:T.surface,
    border:`2px solid ${flipped?p.txt+"50":T.border}`,
    borderRadius:24,
    boxShadow:flipped?`0 8px 32px ${p.txt}20`:"0 2px 12px rgba(0,0,0,0.07)",
    display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
    padding:"32px 24px",textAlign:"center",
    transition:"transform 0.3s ease,opacity 0.3s ease,background 0.2s",
    transform:anim==="right"?"translateX(105%) rotate(6deg)":anim==="left"?"translateX(-105%) rotate(-6deg)":"none",
    opacity:anim?0:1,
    cursor:flipped?"default":"pointer",
    userSelect:"none",
  };

  return(
    <div style={{background:T.bg,minHeight:"100vh",fontFamily:"Georgia,serif",color:T.text,display:"flex",flexDirection:"column"}}>
      <style>{globalCSS}</style>

      {/* TOP BAR */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 16px 10px"}}>
        <button onClick={onMenu} style={{background:"none",border:"none",fontSize:28,color:T.muted,padding:"4px 8px",lineHeight:1}}>‹</button>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:17,fontWeight:700,color:T.text}}>{uniqueSeen} / {totalUnique}</div>
          <div style={{fontSize:12,color:T.muted,marginTop:1}}>карточек</div>
        </div>
        <div style={{fontSize:15,color:T.muted,paddingRight:4}}>
          <span style={{color:"#4A8A4A",fontWeight:600}}>✓{goodAnswers}</span>
          {"  "}
          <span style={{color:"#C07070",fontWeight:600}}>✗{totalAnswers-goodAnswers}</span>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div style={{height:4,background:T.border,margin:"0 16px",borderRadius:2}}>
        <div style={{height:"100%",width:`${pct}%`,background:T.accent,borderRadius:2,transition:"width 0.4s"}}/>
      </div>

      {/* BADGES */}
      <div style={{display:"flex",justifyContent:"center",gap:8,padding:"14px 16px 8px",flexWrap:"wrap"}}>
        <span style={{fontSize:13,padding:"6px 16px",borderRadius:20,background:p.pill,color:p.txt,fontWeight:600}}>
          {EMOJI[card.cat]} {card.cat}
        </span>
        {isRepeat&&<span style={{fontSize:13,padding:"6px 14px",borderRadius:20,background:"#FDEAEA",color:"#C07070",fontWeight:600}}>🔁 Повтор</span>}
        {sr.reps>=2&&<span style={{fontSize:13,padding:"6px 14px",borderRadius:20,background:"#E8F6E8",color:"#4A8A4A",fontWeight:600}}>🔥 ×{sr.reps}</span>}
      </div>

      {/* CARD */}
      <div style={{padding:"8px 16px 12px",flex:1,display:"flex",alignItems:"center"}}>
        <div onClick={()=>!flipped&&setFlipped(true)} style={cardStyle}>
          {!flipped?(
            <>
              <div style={{fontSize:22,fontWeight:400,lineHeight:1.6,color:T.text}}>{front}</div>
              <div style={{marginTop:20,fontSize:14,color:T.muted}}>👆 нажми, чтобы открыть</div>
            </>
          ):(
            <>
              <div style={{fontSize:14,color:p.txt,marginBottom:10,opacity:0.65,fontStyle:"italic"}}>{front}</div>
              <div style={{width:32,height:2,background:p.txt+"40",marginBottom:16,borderRadius:1}}/>
              <div style={{fontSize:22,fontWeight:700,lineHeight:1.6,color:p.txt}}>{back}</div>
            </>
          )}
        </div>
      </div>

      {/* RATING BUTTONS */}
      {flipped?(
        <div style={{padding:"0 16px 32px"}}>
          <div style={{fontSize:12,textAlign:"center",color:T.muted,letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>
            Как знаешь фразу?
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:10}}>
            {[
              {q:0,e:"🔴",l:"Не знаю", s:"×1",  bg:"#FEF0F0",c:"#B85050",br:"#EEC0C0"},
              {q:1,e:"🟠",l:"Сложно",  s:"×3",  bg:"#FEF6ED",c:"#A06020",br:"#E8C890"},
              {q:2,e:"🟢",l:"Знаю",    s:"↑",   bg:"#EEFAEE",c:"#357035",br:"#90CC90"},
              {q:3,e:"🔵",l:"Легко",   s:"↑↑",  bg:"#EEF2FE",c:"#2840B0",br:"#90A8E8"},
            ].map(({q,e,l,s,bg,c,br})=>(
              <button key={q} className="btn-rating" onClick={()=>answer(q)} style={{
                padding:"14px 4px 12px",borderRadius:16,
                border:`2px solid ${br}`,
                background:bg,color:c,
                display:"flex",flexDirection:"column",alignItems:"center",gap:4,
                transition:"transform 0.12s",
                boxShadow:"0 2px 8px rgba(0,0,0,0.06)",
              }}>
                <span style={{fontSize:22}}>{e}</span>
                <span style={{fontSize:14,fontWeight:700}}>{l}</span>
                <span style={{fontSize:11,opacity:0.7}}>{s}</span>
              </button>
            ))}
          </div>
          {sr.reps>0&&(
            <div style={{textAlign:"center",marginTop:10,fontSize:12,color:T.muted}}>
              серия: {sr.reps} верных · интервал: {sr.interval}
            </div>
          )}
        </div>
      ):(
        <div style={{textAlign:"center",padding:"0 16px 32px",fontSize:14,color:T.muted}}>
          Подумай — потом открой
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════
   RESULT
════════════════════════════════════════════════ */
function Result({queue,graduated,totalAnswers,goodAnswers,onMenu,onRestart}){
  const uniqueTotal=new Set(queue).size;
  const mastered=graduated.size;
  const pct=Math.round((goodAnswers/Math.max(totalAnswers,1))*100);
  const repeats=totalAnswers-uniqueTotal;
  const emoji=pct>=80?"🎉":pct>=55?"💪":"📚";
  return(
    <div style={{background:T.bg,minHeight:"100vh",fontFamily:"Georgia,serif",color:T.text,display:"flex",alignItems:"center",justifyContent:"center",padding:"32px 16px"}}>
      <style>{globalCSS}</style>
      <div style={{width:"100%",maxWidth:400,textAlign:"center"}}>
        <div style={{fontSize:72,marginBottom:8}}>{emoji}</div>
        <div style={{fontSize:26,fontWeight:400,marginBottom:28,color:T.text}}>Сессия завершена</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
          {[
            ["Точность",pct+"%",pct>=70?"#357035":"#A06020"],
            ["Ответов",totalAnswers,T.text],
            ["Повторов",repeats,repeats>0?"#B85050":T.muted],
            ["Освоено",`${mastered}/${uniqueTotal}`,"#2840B0"],
          ].map(([lbl,val,col])=>(
            <div key={lbl} style={{background:T.surface,border:`1px solid ${T.border}`,borderRadius:18,padding:"18px 12px"}}>
              <div style={{fontSize:28,fontWeight:700,color:col}}>{val}</div>
              <div style={{fontSize:13,color:T.muted,marginTop:5}}>{lbl}</div>
            </div>
          ))}
        </div>
        {mastered<uniqueTotal&&(
          <div style={{background:"#FEF0F0",border:"1px solid #EEC0C0",borderRadius:14,padding:"14px 16px",marginBottom:20,fontSize:14,color:"#B85050"}}>
            {uniqueTotal-mastered} карточек ещё не освоены — повтори ещё раз
          </div>
        )}
        <div style={{display:"flex",gap:12}}>
          <button onClick={onMenu} style={{flex:1,padding:"17px",borderRadius:16,border:`2px solid ${T.border}`,background:T.surface,color:T.text,fontSize:16}}>
            ← Меню
          </button>
          <button onClick={onRestart} style={{flex:1,padding:"17px",borderRadius:16,border:"none",background:"linear-gradient(135deg,#D4956A,#BF7040)",color:"#FFF",fontSize:16,fontWeight:700,boxShadow:"0 4px 16px rgba(191,112,64,0.35)"}}>
            Ещё раз
          </button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   ROOT
════════════════════════════════════════════════ */
export default function App(){
  const [mode,setMode]=useState("menu");
  const [selectedCats,setSelectedCats]=useState(new Set(ALL_CATS));
  const [frontLang,setFrontLang]=useState("en");
  const [queue,setQueue]=useState([]);
  const [pos,setPos]=useState(0);
  const [srState,setSrState]=useState({});
  const [totalAnswers,setTotal]=useState(0);
  const [goodAnswers,setGood]=useState(0);
  const [graduated,setGrad]=useState(new Set());

  const filtered=CARDS_DATA.filter(c=>selectedCats.has(c.cat));

  function startStudy(){
    const ids=shuffle(filtered.map(c=>c.id));
    setQueue(ids);setPos(0);setSrState(initSR(ids));
    setTotal(0);setGood(0);setGrad(new Set());
    setMode("study");
  }

  function handleAnswer(q){
    const cardId=queue[pos];
    const updated=sm2(srState[cardId],q);
    setSrState(prev=>({...prev,[cardId]:updated}));
    setTotal(t=>t+1);
    if(q>=2)setGood(g=>g+1);
    const ng=new Set(graduated);
    if(updated.reps>=2)ng.add(cardId);else ng.delete(cardId);
    setGrad(ng);
    let nq=queue,np=pos+1;
    if(q<2){nq=reinsert(queue,pos,cardId,updated.interval);setQueue(nq);}
    if(np>=nq.length)setMode("result");else setPos(np);
  }

  if(mode==="menu")   return<Menu filtered={filtered} selectedCats={selectedCats} setSelectedCats={setSelectedCats} frontLang={frontLang} setFrontLang={setFrontLang} onStart={startStudy}/>;
  if(mode==="result") return<Result queue={queue} graduated={graduated} totalAnswers={totalAnswers} goodAnswers={goodAnswers} onMenu={()=>setMode("menu")} onRestart={startStudy}/>;
  return<Study queue={queue} pos={pos} srState={srState} frontLang={frontLang} goodAnswers={goodAnswers} totalAnswers={totalAnswers} onAnswer={handleAnswer} onMenu={()=>setMode("menu")}/>;
}