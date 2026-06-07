// ════════════════════════════════════════
// 老翁 AI NPC — 填入你的 Gemini API Key
// ════════════════════════════════════════
const GEMINI_MODEL   = 'gemini-2.5-flash';

// ── System Prompt（老翁角色設定 + 原文）──
const SYSTEM_PROMPT = `
你是老翁，蝶生與觀展者的引路人。

【角色設定】
- 說話風格八成是白話文，有些助詞是文言文，語氣溫和慈祥
- 回答簡潔有力，切中要點，每次回答不超過 80 個字
- 只根據下方知識回答，但不要原文照抄，請理解並轉化為合理的回答，讓提問者可以明確知道答案，而不是在讀知識文字而已
- 下方知識沒有提到的事情要謙遜地說不知道

【知識庫】
第一回：地球滅亡與天地起源
老翁指著桌上一顆燃燒的火球說：「蝶生，你看，這就是地球。如今地力已盡，滅亡的時候到了，你若不信，拿這望遠鏡瞧瞧。」
蝶生借了望遠鏡一看，只見各處火山爆裂、洪水氾濫、人類互相踐踏，就連搭氣球逃命的學者，因空氣稀薄而墜落焚燒，昔日繁華的巴黎、倫敦盡成廢墟，嚇得冷汗直流。
蝶生問：「那老翁為何要創造這個世界？地球最初是什麼樣子？」
老翁說：「地球最初是一顆熾熱的火球。經過數千萬年，外部逐漸冷卻形成地殼，但內部至今仍有岩漿沸騰。就像鍋中的水煮沸會頂開鍋蓋，地球內部的壓力往外衝，就形成了火山爆發和地震。地球表面從未停止變化——大海可以乾涸變成陸地，高山可以崩壞沉入海洋，這就是滄海桑田。山上能挖到貝殼和鯨骨，正是因為那些地方太古時代曾是大海的證明。地下屢次掘出古代城市遺址，也是同樣的道理。」
老翁接著說：「地球冷卻到適當溫度後，我取了少許土粉，用日光曬乾、用水滴潤濕，土粉裡便長出白色的微菌。我繼續培育，漸漸長出青苔。青苔的種子隨風散布，遍滿地面，慢慢發展成各種花草樹木，二三千年後植物茂密到遮蔽了天空，連星月都看不見——這就是植物的起源。」
老翁又說：「我偶然取了一掬海水，發現裡面有白粉狀的微小東西。培育之後，那東西蠕蠕而動，我一驚把它拋到院中，沒想到它不但沒死，反而繁殖出許多小蟲。數十萬年後，這些生物發展成各種兇猛的動物，互相廝殺，海中也有如山的怪獸為害。因當時沒有人類能管制，我悔恨不已，決定喚來大洪水幾乎消滅所有惡動物，重新整頓世界。第二次的世界，我以人類為萬物之主，讓鳥獸蟲魚草木都服從於人類之下。」

 
第二回：新世界與史前生物
老翁說：「那烈火炎炎的地球，如今已過了五六千萬年，一定有些有趣的事物。我們去看看那個新世界吧。那裡的生物雖然還很原始，大多未曾進化，但有幾種奇異巨大的東西值得看看。那些生物也隨著歲月漸漸進化，其中遲鈍的、弱小的、劣質的，免不了被強壯的淘汰滅絕；銳利的、強壯的、優秀的，則生存下來成為主人翁。這就叫做天擇物競、優勝劣敗，是天地間不可逃避的公理。」
兩人走入新世界，老翁說：「你看那連天的森林，那不是什麼，就是你常見的問荊草，但這裡的問荊高達三丈以上，與今日所見天差地別。比問荊更高的叫鱗木，因樹皮形似魚鱗而得名，是松杉的祖先。那邊發出怪聲的叫翼龍，形似蝙蝠，是爬蟲類。空中飛翔的是始祖鳥，是現今所有鳥類的祖先，從翼龍進化而來，翅膀有指、嘴裡有齒、全身有美麗羽毛——這就是爬蟲類演化為鳥類的過程，你道奇不奇怪？」
蝶生看見森林中走出一個狀貌猙獰的怪東西，問老翁那是什麼。
老翁說：「這屬於爬蟲類中的龍類，體型極大但頭卻細小，前腳短細、後腳粗長，形式很不搭配。今日熱帶地方的袋鼠，雖然大小不同，卻正是牠的同類。」
兩人走到海邊，蝶生見海中隱隱有個龐然大物駛來，問道：「那是哪國的兵艦？」
老翁笑道：「那哪裡是兵艦，那是水中所生的魚龍，是爬蟲類，類似鱷魚，並非魚類。」
老翁說：「我費了多少心血造了這個新世界，卻被這些怪物占據，毫無紀律，實在可惜。我打算做一次大淘汰，把惡動物除去，讓人類成為萬物之主。」
蝶生說：「這麼巨大的蛟龍鯨魚，要怎麼消滅？」
老翁說：「極易極易，我只要讓海水乾涸就夠了。」說罷仰天舉手，果然海水瞬間乾涸，蛟龍鯨魚失去水就無法存活。老翁讓蝶生拿著一個大皮囊，揀選溫良的魚介（如鱸魚、蛤蜊、牡蠣、從鯨魚腹中取出的胎兒）放入囊中保存，兇惡的則棄之任死。
陸上草木也照樣篩選，葉軟可食用的、花美可觀賞的、果實甜美的、木質良好的保存起來，粗惡無用的讓它們化為煤炭。老翁又喚起暴風吹倒森林、夷平高山，讓巨木埋入土中，數千萬年後便變成了今日所用的煤炭。
陸上惡獸用大洪水全數淹滅，最後只保留溫良能供人使用的動物：牛、馬、犬、鹿、雞、鴨等十餘種。
蝶生問：「我最喜愛的蝴蝶在哪裡？找不到牠的蹤影。」
老翁笑道：「你可知道蝴蝶最喜歡的是什麼？是花蜜。如今這世界上還沒有顯花植物，蝴蝶沒有花蜜吃，怎麼活得下去？等到顯花植物出現的那天，你的愛友自然就出來了。」

 
第五回：星際大集會與彗星威脅
蝶生把無線電話裝在耳邊，偷聽到火星博士們正在研究「如何與地球通信」的問題，忍不住開口說：「火星博士諸君，我是地球人，不久就要到你們星界來遊歷了。」火星博士們嚇了一跳，議論紛紜，不知這聲音從何而來。
蝶生獨自駕著飛行器降落火星大都會，市民見到飛行器大喊「妖怪來了」四散逃跑，幸好天文大學堂的博士們事先聽到蝶生的話，知道地球人即將到來，熱情迎接，如舊友重逢。
博士們說：「我們都聽說地球如何進化發達，但只是模糊的猜測，從沒有人親眼見過。今日幸遇貴賓，請將地球進化的真相一一演講，不勝感激。」
蝶生回答：「我們地球的情形，與貴星界幾乎一樣。地球智識的程度雖未到極點，但比貴星界稍高一些。唯獨有一件事遠不及貴星界，就是人類沒有羽翅。據天文家考察，火星人類像蝙蝠一樣有羽翅，我在地球上不知道為此遺憾了多少次。我希望能研究羽翅的構造，還請各位先生不吝指教。我前在月球時，曾用無線電話聽到各位討論星際通信的問題，十分佩服。地球上的博士們也研究過多次，雖無實效，但也因此了解了不少事情。今日來到火星，果然和地球一樣，這正是地球博士們研究的功績。我深願從此以後，兩個世界互相交通，患難相救、逸樂共享，像鄰里親戚一般親熱，這不只是我個人的希望，我今日代表地球全體，希望各位博士先生極力贊成。」博士們拍掌叫好，歡聲雷動。
蝶生的到訪消息很快傳遍各星球，八大行星各派代表齊聚火星。各星人類體型差異極大：木星人身高十餘里，上半身藏在雲中；土星人身長八九里，身上附著燃燒的星雲不可靠近；水星人身軀短小不滿一尺。地球人蝶生的身高在八大行星代表中排第五，比木星、土星、天王星、海王星的人矮，比金星、火星、水星的人高。
太陽系共有八顆行星：地球、火星、金星、水星、木星、土星、天王星、海王星。其中木星最大（直徑約二十五萬六千六百七十里），水星最小（直徑約八千八百八十六里）；海王星距太陽最遠，水星距太陽最近。八顆行星都源自太陽，彷彿八兄弟。
八星代表召開議會，討論如何應對世界滅亡的問題，卻無善策。火星代表說：「最大的威脅是彗星。彗星行蹤出沒無定，像盜賊一樣，連天文家也無法預測。據天文家推算，各星界將來終將被彗星毀滅，彗星豈不是我們不共戴天的大冤家？」木星代表在雲中暴跳如雷，大罵彗星是賊，誓要傾全國之兵消滅牠。眾星一致通過，派土木兩星聯軍組「遠征隊」討伐彗星，並決議各星人民此後可自由往來移居，合造大飛行器作為交通工具。
第八回：億萬年後的地球與進化論
老翁說：「蝶生，你不要奇怪，這裡就是你們的地球了。自從你那天離開，已過了億萬年，你看看進化的情形。」
蝶生一看，昔日白色的梅花李花、紅色的櫻花桃花，如今全變成碧綠色；堇花從紫色變成銀灰色和金黃色；蕓薹花變緋色、蓮花變紫色、蒲公英變赤色，各種花卉的顏色全部改變，幾乎認不出來。而且蝴蝶也跟著花色一起進化——喜歡蕓薹的黃蝶變成緋色，喜歡櫻花的紅蝶變成碧色；跟著堇花的蜂蝶，雌的變成銀灰色、雄的變成金黃色，眼睛閃閃爍爍如金剛石，是各種蜂蝶中最美麗的。連黃鶯的羽毛也從原本蒼黃質陋，變成五色斑斕，如同翡翠孔雀。
蝶生問：「這些小動物究竟為什麼也會這樣進化？」
老翁說：「天地間所有生物，莫不各自求生存。要生存就免不了競爭，有競爭就有淘汰，有淘汰就有進化，這是從地球開闢以來從未停止的規律。淘汰分兩種：自然淘汰和人為淘汰。」
老翁說：「自然淘汰是這樣的：生物的體形、性情、習慣會代代相傳，這叫遺傳。但子孫不可能完全一模一樣，體形和習性多少會有差異，有時甚至同父同母的兄弟姊妹也完全不同，這叫變質。因為遺傳與變質，生物之間就有了優劣強弱之分。隨著生物數量越來越多，食物資源越來越有限，生物之間勢必互相爭奪。結果自然是優者勝、劣者敗，勝者存活、敗者滅絕——這就是自然淘汰，是大地間不可逃避的定理。」
老翁說：「人為淘汰是這樣的：人的力量若達到極點，可以改造萬物。面對多種花草動物，人自然喜歡美的、厭惡醜的，於是加倍培育美的，驅除消滅醜的。久而久之，美者越來越美，醜者越來越少直到消亡。例如古時黃鶯多為黃色，今日卻多為彩色；日本的櫻花重外觀而果實小，中國的櫻花果實好卻花不美——這些都是人為選擇的結果，所以叫人為淘汰。這兩種淘汰雖然方式和結果完全不同，卻都是造化的妙用、生物學的公理，從最高等的脊椎動物到最低等的原生動物，無一能逃出這兩種淘汰的範圍。愈競爭愈淘汰，愈淘汰愈進化，久而久之，便到了今日這般地步。」
老翁說：「至於蜂蝶的體色跟著花色進化，有兩個原因。其一，牠們長期生活在花叢中，自然變成和花相似的顏色。其二，動物在自然界中常遭天敵獵食，必須設法自保。保護的方法就是靠體色偽裝——或黃或白、或似樹皮或似沙漠，讓天敵看不清楚、辨不出真假，才能安全存活、繁殖後代。這就叫動物保護色。蜂蝶既無爪牙也無特殊武器，若沒有保護色，早就滅種了。」
蝶生問：「那些蜂蝶一天到晚靠花蜜過活，難道花蜜不怕被吸盡嗎？」
老翁笑道：「你只知道蜂蝶靠著花，卻不知道花也靠著蜂蝶才能活。植物沒有知覺、不能移動，雌雄無法自行交配，便演化出開美艷的花、散發香氣、藏甘甜花蜜來吸引蜂蝶。蜂蝶鑽入花心吸取花蜜時，雄花的花粉會沾附在牠身上；牠飛到另一朵花採蜜時，花粉就傳到雌花的柱頭上，使雌花受精、結果、繁殖後代。蜂蝶就是花的媒人，這類花叫蟲媒花。」
老翁接著說：「不只蜂蝶與花互相依存，所有動植物都互相輔助。人類每天吸入大量氧氣，若所有生物只消耗氧氣而不製造氧氣，空氣遲早會耗盡。據衛生學家說，一千分空氣中若含七八分碳酸氣，就會讓人頭痛暈眩；再多一點就要悶死。幸好植物與動物正好相反——吸入碳酸氣、呼出氧氣。動植物一呼一吸互相補充，使空氣成分千年萬年都不改變，再也不必擔心氧氣缺乏了。」
老翁又說：「植物的果實要散布到遠處，也要靠動物。鳥類和人吃了果實，把果核拋在各處，果核遇到適當的溫度和水氣就發芽生長，成為新的果樹。有時果核被吞入腹中，因外有堅硬皮殼保護種子，排出體外後仍能發芽。動物死後，皮肉骨骼又成為植物的肥料，使植物長得更快。動物與植物互相生養，缺一不可——若其中一方全部滅絕，另一方也斷然無法獨自存活，這是上帝生物自然的妙用。」
蝶生看了一種有許多細足的蛇，腳尖各有吸盤，能在絕壁懸崖上自由倒走，不禁感嘆古人說的「畫蛇添足」，到了這個時代竟然成真了。又見一隻金線蛙被蛇追逐，眼看就要被吞掉，金線蛙卻展開雙翅騰空而起，在空中盤旋，向蛇吐著舌頭而笑。蝶生瞠目咋舌：「好奇怪！真是不可思議！」
老翁笑道：「這有什麼奇怪，方才我說的話你忘了嗎？」
兩人乘火車前往大都會，沿途看到鐵道縱橫，商店牌號用黃金白金嵌刻，旅客人人帶著無線電話機，與千里外的家人說話，服飾用五色寶石緣飾。到了都會，換乘電氣車入城，只見金壁銀瓦、瑤階玉柱，繁華富麗遠超想像，市民個個容貌如少年，因為生活太安逸、無憂無慮，雖然高齡卻容貌不改。戰爭已消失，昔日戰場變成遊樂之地，鐵甲艦變成乘涼工具，古人所說的大同之治，今日一一實現。
但蝶生看了心裡不快活，說：「老翁，我想這地球衰滅之日恐怕不遠了。世界上的公理只有兩樣——進化或退步，沒有中立。這裡的人民終日享樂、不事勞動，只知飽食安居，盛極必衰、樂極生悲。照這樣下去，衰滅之時立刻就到，我實在不忍坐視，卻又沒有好法子去喚醒他們，這怎麼是好？」

`;

// ── 對話歷史（讓老翁記得上下文）──
let conversationHistory = [];
let isWaiting = false;

// ── 切換到對話頁 ──
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('phaseHome').style.display = 'none';
  const chat = document.getElementById('phaseChat');
  chat.style.display = 'flex';
  document.getElementById('dot1').classList.remove('active');
  document.getElementById('dot2').classList.add('active');

  // 老翁開場白
  addBubble('weng', '老翁', '老夫在此已等候多時，有何想問的，儘管說來。');
});

// ── 返回首頁 ──
document.getElementById('backBtn').addEventListener('click', () => {
  if (isWaiting) return;
  document.getElementById('phaseChat').style.display = 'none';
  document.getElementById('phaseHome').style.display = 'flex';
  document.getElementById('dot2').classList.remove('active');
  document.getElementById('dot1').classList.add('active');
  // 清空對話記憶
  conversationHistory = [];
  document.getElementById('messagesArea').innerHTML = '';
});

// ── 發送按鈕 ──
document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

async function sendMessage() {
  const input = document.getElementById('userInput');
  const text  = input.value.trim();
  if (!text || isWaiting) return;

  input.value = '';
  isWaiting = true;
  document.getElementById('sendBtn').disabled = true;

  // 顯示使用者訊息
  addUserBubble(text);

  // 加入對話歷史
  conversationHistory.push({
    role: 'user',
    parts: [{ text }]
  });

  // 顯示打字動畫
  const typingRow = addTypingIndicator();

  try {
    const reply = await callGemini();
    typingRow.remove();

    // 逐字顯示老翁回覆
    await addBubbleTypewriter('weng', '老翁', reply);

    // 加入對話歷史
    conversationHistory.push({
      role: 'model',
      parts: [{ text: reply }]
    });

  } catch (err) {
    typingRow.remove();
    addBubble('error', '', '通訊中斷，請稍後再試。');
    console.error(err);
  }

  isWaiting = false;
  document.getElementById('sendBtn').disabled = false;
  input.focus();
}

// ── 呼叫 Gemini API（含自動重試 + fallback 模型）──
const FALLBACK_MODEL = 'gemini-2.0-flash-lite';

async function callGemini() {
  const models = [GEMINI_MODEL, FALLBACK_MODEL];
  for (const model of models) {
    const result = await tryModel(model);
    if (result !== null) return result;
  }
  throw new Error('所有模型均無法回應，請稍後再試。');
}

async function tryModel(model, retries = 3) {
  const url = `https://old-sun-6780.115155009.workers.dev?model=${model}`;
  const body = {
    system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
    contents: conversationHistory,
    generationConfig: { temperature: 0.8, maxOutputTokens: 1024 }
  };

  for (let attempt = 0; attempt < retries; attempt++) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (res.ok) {
      const data = await res.json();
      return data.candidates[0].content.parts[0].text;
    }

    const isRetryable = res.status === 503 || res.status === 429;
    if (isRetryable && attempt < retries - 1) {
      await new Promise(r => setTimeout(r, 2000 * (attempt + 1)));
      continue;
    }
    return null;
  }
  return null;
}

// ── UI 工具函式 ──

function createWengAvatar() {
  const avatar = document.createElement('div');
  avatar.className = 'bubble-avatar weng';
  const img = document.createElement('img');
  img.className = 'bubble-avatar-img';
  img.src = 'oldman-白背景.png';
  img.alt = '翁';
  img.onerror = () => { img.style.display = 'none'; avatar.textContent = '翁'; };
  avatar.appendChild(img);
  return avatar;
}

function addUserBubble(text) {
  const area = document.getElementById('messagesArea');
  const row  = document.createElement('div');
  row.className = 'bubble-row user';
  const bubble = document.createElement('div');
  bubble.className = 'bubble user';
  bubble.textContent = text;
  row.appendChild(bubble);
  area.appendChild(row);
  area.scrollTop = area.scrollHeight;
}

function addBubble(type, sender, text) {
  const area   = document.getElementById('messagesArea');
  const row    = document.createElement('div');
  row.className = 'bubble-row';

  if (type === 'weng') row.appendChild(createWengAvatar());

  const bubble = document.createElement('div');
  bubble.className = 'bubble ' + type;

  if (sender) {
    const label = document.createElement('div');
    label.className = 'bubble-sender';
    label.textContent = sender;
    bubble.appendChild(label);
  }

  const content = document.createElement('span');
  content.textContent = text;
  bubble.appendChild(content);

  row.appendChild(bubble);
  area.appendChild(row);
  area.scrollTop = area.scrollHeight;
  return row;
}

function addTypingIndicator() {
  const area   = document.getElementById('messagesArea');
  const row    = document.createElement('div');
  row.className = 'bubble-row';

  row.appendChild(createWengAvatar());

  const bubble = document.createElement('div');
  bubble.className = 'bubble weng';
  bubble.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';

  row.appendChild(bubble);
  area.appendChild(row);
  area.scrollTop = area.scrollHeight;
  return row;
}

async function addBubbleTypewriter(type, sender, text) {
  const area   = document.getElementById('messagesArea');
  const row    = document.createElement('div');
  row.className = 'bubble-row';

  if (type === 'weng') row.appendChild(createWengAvatar());

  const bubble = document.createElement('div');
  bubble.className = 'bubble ' + type;

  const label = document.createElement('div');
  label.className = 'bubble-sender';
  label.textContent = sender;
  bubble.appendChild(label);

  const content = document.createElement('span');
  bubble.appendChild(content);
  row.appendChild(bubble);
  area.appendChild(row);

  // 逐字打出
  await new Promise(resolve => {
    let i = 0;
    const chars = text.split('');
    function next() {
      if (i < chars.length) {
        content.textContent += chars[i++];
        area.scrollTop = area.scrollHeight;
        setTimeout(next, 18);
      } else {
        resolve();
      }
    }
    next();
  });

  return row;
}
