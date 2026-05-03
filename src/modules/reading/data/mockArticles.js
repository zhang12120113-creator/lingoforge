/**
 * @typedef {Object} Article
 * @property {string} id
 * @property {string} title           英文标题
 * @property {string} description     中文摘要
 * @property {'商业'|'生活'|'科技'|'文化'|'社会'|'历史'|'自然'|'考试'} category
 * @property {'初级'|'中级'|'高级'} difficulty
 * @property {string} content         正文 HTML 字符串
 * @property {number} wordCount
 * @property {string} [coverColor]    卡片顶部装饰条颜色 (Tailwind class)
 */

/** @type {Article[]} */
export const mockArticles = [
  {
    id: 'stock-basics',
    title: 'So What Exactly Is a Stock?',
    description: '股票究竟是什么？通过一个简单的比喻，理解你买的不是一张纸，而是一家公司的一小块所有权。',
    category: '商业',
    difficulty: '初级',
    wordCount: 412,
    coverColor: 'bg-emerald-500',
    content: `
<p>When people talk about "buying stocks," it can sound like something only Wall Street traders do. But the idea behind a stock is surprisingly simple.</p>
<p>A stock is a piece of ownership in a company. Imagine your friend opens a small coffee shop and needs <strong>$10,000</strong> to start. Instead of taking a loan, she divides her shop into 1,000 equal pieces and sells each piece for <strong>$10</strong>. If you buy one piece, you now own <strong>0.1%</strong> of the shop.</p>
<p>That's basically what a stock is, just on a much larger scale. Big companies like Apple or Tesla have hundreds of millions of these "pieces" — called shares — that anyone can buy and sell on a stock market.</p>
<p>When the company does well, the value of each share usually goes up. When it struggles, the value goes down. Some companies also pay a portion of their profits back to shareholders, called a <em>dividend</em>.</p>
<p>So owning a stock isn't really about gambling on numbers — it's about owning a tiny slice of a real business, and sharing in whatever happens to it.</p>
<p>Understanding this one idea changes how you see the stock market. It's not a casino. It's a marketplace where ownership of companies is traded every second of every day.</p>
`,
  },
  {
    id: 'round-numbers',
    title: 'The Strange Power of Round Numbers',
    description: '为什么我们对 100、1000 这样的数字格外在意？整数背后藏着一种深刻的心理学效应。',
    category: '生活',
    difficulty: '中级',
    wordCount: 386,
    coverColor: 'bg-amber-500',
    content: `
<p>Have you ever noticed how runners speed up just before reaching the 10-kilometer mark? Or how investors panic when a stock falls below $100?</p>
<p>Round numbers have a strange grip on our minds. They feel meaningful, even when they're just labels.</p>
<p>Researchers have studied this for decades. In one famous experiment, baseball players were significantly more likely to push for a <strong>.300</strong> batting average than for <strong>.299</strong>. Just one extra hit — but the psychological reward was enormous.</p>
<p>The same effect appears in shopping. Prices ending in <em>.99</em> feel cheaper than the round number above them, even when the difference is one cent. Our brains anchor on the leftmost digit and ignore the rest.</p>
<p>Why does this happen? Round numbers are easier to remember, easier to compare, and easier to brag about. "I ran 10K" sounds clean. "I ran 9.7K" sounds like an excuse.</p>
<p>Knowing this can help you make better decisions. Next time you're chasing a round number — a salary, a follower count, a fitness goal — ask yourself: would the next decimal point really matter? Or am I just chasing a feeling?</p>
`,
  },
  {
    id: 'card-spending',
    title: 'Why We Spend More When We Pay With a Card',
    description: '为什么用卡刷钱总比掏现金更容易？答案藏在大脑处理"疼痛"的方式里。',
    category: '商业',
    difficulty: '中级',
    wordCount: 401,
    coverColor: 'bg-indigo-500',
    content: `
<p>Studies consistently show that people spend <strong>12% to 18% more</strong> when paying with a credit card compared to cash. The reason isn't laziness. It's neurology.</p>
<p>When you hand over a $20 bill, your brain registers a small amount of <em>pain</em>. Scientists call this the "pain of paying." You can see the money leaving you. The decision feels real.</p>
<p>A credit card swipe doesn't trigger that signal. You see no money, no change, no shrinking wallet. The cost is abstract, postponed, almost invisible.</p>
<p>Mobile payments make this effect even stronger. With a single tap, the friction disappears entirely. By the time the bill arrives, the meal is long forgotten and the pain is replaced by surprise.</p>
<p>None of this means cards are bad. They're convenient and often more secure. But if you've ever wondered why your monthly statement looks bigger than it should, this is part of the answer.</p>
<p>One simple trick: before any non-essential purchase, picture yourself counting out the equivalent in physical bills. If the imagined act feels uncomfortable, that's your brain telling you something the swipe is hiding.</p>
`,
  },
  {
    id: 'short-videos',
    title: 'Why Our Brains Love Short Videos',
    description: '从抖音到 Reels，短视频为何让人欲罢不能？这背后是一场针对多巴胺系统的精准设计。',
    category: '科技',
    difficulty: '中级',
    wordCount: 423,
    coverColor: 'bg-rose-500',
    content: `
<p>It starts innocently. You open the app for "just one video." Forty-five minutes later, you're still scrolling, with no memory of what you watched.</p>
<p>Short-form video isn't just entertainment. It's an extremely effective delivery system for dopamine — the brain chemical tied to anticipation and reward.</p>
<p>Each swipe is a tiny gamble. Most videos are forgettable, but every now and then one delivers a hit of laughter, surprise, or curiosity. Your brain quickly learns that the next swipe <em>could</em> be the great one. So it keeps reaching.</p>
<p>This pattern, called <strong>variable reward</strong>, is the same mechanism that drives slot machines. Predictable rewards are boring. Unpredictable ones are addictive.</p>
<p>Add the extreme brevity — most clips are under 30 seconds — and you remove every natural stopping point. There's no "end of episode," no closing credits, no chapter break. Just an infinite scroll designed to keep you in.</p>
<p>None of this is accidental. The platforms employ teams of engineers and behavioral scientists whose job is to maximize the time you spend inside the app.</p>
<p>The good news: simply understanding the design weakens its grip. The next time you feel the pull, ask yourself: <em>am I choosing this, or is the algorithm choosing for me?</em></p>
`,
  },
  {
    id: 'simple-explanations',
    title: 'Why Our Brains Love Simple Explanations',
    description: '为什么阴谋论比真相更有市场？我们的大脑天生偏爱"简洁"，哪怕代价是错误。',
    category: '文化',
    difficulty: '中级',
    wordCount: 398,
    coverColor: 'bg-violet-500',
    content: `
<p>The world is messy. Most events have many causes, contradictory evidence, and outcomes shaped by chance.</p>
<p>And yet, the explanations that spread fastest tend to be the simplest. "It's all because of <em>X</em>." "There's a hidden group pulling the strings."</p>
<p>This isn't a sign that people are foolish. It's a feature of how human cognition works. Our brains are pattern-recognition machines, optimized over millions of years to find quick answers in dangerous environments. A simple story we can act on was usually more useful than a complex truth we couldn't.</p>
<p>Psychologists call this preference <strong>cognitive ease</strong>. Information that feels smooth and familiar is judged as more likely to be true, regardless of whether it actually is.</p>
<p>This is why conspiracy theories thrive. They convert chaotic events into clean narratives with clear villains. They feel right because they feel <em>simple</em>.</p>
<p>The hard truth is that most real explanations involve trade-offs, randomness, and partial information. They don't fit on a poster.</p>
<p>Being aware of this bias doesn't cure it, but it gives you a useful question to ask: <strong>"Does this feel true because it explains the evidence, or because it's just satisfying to believe?"</strong></p>
`,
  },
  {
    id: 'free-apps',
    title: 'Why "Free" Apps Are Often the Most Expensive',
    description: '当一个产品免费时，你才是真正的产品。看看免费应用的真实成本。',
    category: '科技',
    difficulty: '高级',
    wordCount: 451,
    coverColor: 'bg-sky-500',
    content: `
<p>There's an old saying in tech: <em>If you're not paying for the product, you are the product.</em></p>
<p>It sounds dramatic, but the math behind most "free" apps makes it almost literal. Running a global service — servers, engineers, security, support — costs money. If users pay nothing, that money has to come from somewhere else. Usually that somewhere is advertising, and advertising is powered by data.</p>
<p>Every interaction inside a free app can become a data point: what you tap, how long you pause, where you are, what time you wake up. None of this is intrinsically evil. But aggregated across billions of users, it produces extraordinarily detailed profiles that are sold to advertisers, brokers, and sometimes governments.</p>
<p>The hidden cost goes beyond privacy. Free apps are also incentivized to maximize engagement, because more time on the platform means more ad impressions. That's why so many of them are designed to be subtly addictive, optimized for the next swipe rather than your long-term wellbeing.</p>
<p>Paid software has its own problems, of course. Not every paid product is good. But when you pay directly, the relationship is clearer: the company's job is to make <em>you</em> happy, not to make you watch one more ad.</p>
<p>The question isn't whether to use free apps. It's whether you understand the trade. The next time you download something at no cost, take a minute to ask: <strong>What is this app's actual business model? Who really pays for it? And in what currency?</strong></p>
`,
  },
  {
    id: 'morning-routines',
    title: 'The Quiet Magic of Morning Routines',
    description: '为什么成功人士都强调晨间习惯？答案不在仪式感，而在你大脑最清醒的那段时间。',
    category: '生活',
    difficulty: '初级',
    wordCount: 364,
    coverColor: 'bg-teal-500',
    content: `
<p>Search for "morning routine" online and you'll find endless lists: cold showers, journaling, meditation, green smoothies. It can feel like magic only available to people who already have their lives together.</p>
<p>But the real reason morning routines work has little to do with the specific activities. It has to do with <strong>willpower</strong>.</p>
<p>Studies suggest that mental energy is highest in the first few hours after waking. Decisions made early in the day tend to be sharper, more disciplined, and less reactive. As the day goes on, fatigue accumulates and small choices start to feel large.</p>
<p>A morning routine takes advantage of this window. By placing your most important tasks early — exercise, focused work, reading — you finish them while your brain is still fresh.</p>
<p>It also reduces the number of decisions you have to make. If your first hour is already planned, you don't waste energy deciding what to do next. Behavior becomes automatic, and automatic behavior is cheap.</p>
<p>You don't need ice baths or 5 a.m. wake-ups. You just need a small set of actions you can repeat almost without thinking. The magic isn't in any single habit. It's in the fact that you've already <em>won the morning</em> before the world starts pulling on you.</p>
`,
  },
  {
    id: 'cities-thinking',
    title: 'How Cities Shape the Way We Think',
    description: '你居住的城市，正在悄悄改变你的思维方式——从注意力到节奏感，环境塑造大脑。',
    category: '文化',
    difficulty: '高级',
    wordCount: 467,
    coverColor: 'bg-fuchsia-500',
    content: `
<p>We tend to think of cities as backgrounds — the place where life happens. But a growing body of research suggests cities are not passive scenery. They actively shape how their residents perceive, decide, and even feel.</p>
<p>Take attention. Walking through a quiet park demands almost no cognitive effort. Walking through a busy intersection, by contrast, requires constant filtering: pedestrians, signals, scooters, sounds. Over time, urban environments train the brain to stay in a state of <em>directed attention</em>, which is mentally taxing and contributes to a particular flavor of fatigue.</p>
<p>Cities also shape rhythm. In dense places, social cues — schedules, deadlines, lights, transit — are everywhere. People walk faster, talk faster, and expect faster responses. This isn't culture so much as infrastructure: when buildings are close together, opportunities for interaction multiply, and tempo follows.</p>
<p>Even values can be subtly influenced. Researchers have found that people in highly urbanized areas tend to score higher on traits like <strong>tolerance for diversity</strong> and <strong>openness to new experiences</strong>, partly because exposure to difference is unavoidable. Smaller towns, with tighter networks, often score higher on community cohesion. Neither is better — they're trade-offs sculpted by environment.</p>
<p>What does this mean for you? Probably more than you think. The architecture around you, the noise, the density, the green space, the commute — all of it is feeding back into your nervous system every day.</p>
<p>You can't fully escape your environment, but you can become aware of it. Notice where you feel calm. Notice where you feel hurried. Then ask whether the place is bringing out the version of you that you want to be.</p>
`,
  },
  {
    id: 'social-rules',
    title: 'The Hidden Rules of Social Interaction',
    description: '社交场合中有哪些不成文的规则？理解这些潜规则能帮助你更好地融入不同文化背景的群体。',
    category: '社会',
    difficulty: '中级',
    wordCount: 445,
    coverColor: 'bg-rose-500',
    content: `
<p>Every social group operates on a set of unwritten rules. They are rarely discussed, yet breaking them can instantly make you an outsider.</p>
<p>The first rule is <strong>reciprocal disclosure</strong>. Conversations work like a dance of gradual trust. Share too much too soon, and people feel uncomfortable. Share too little, and you seem distant. The trick is to match the other person's level of openness, step by step.</p>
<p>The second rule is <strong>status sensitivity</strong>. In most groups, there is an unspoken hierarchy. People pay attention to who speaks first, who interrupts whom, and whose ideas get adopted without debate. Understanding this flow helps you know when to push and when to step back.</p>
<p>The third rule is <strong>context calibration</strong>. The same joke that works with friends may offend colleagues. The confidence that impresses in a meeting can seem arrogant at a dinner party. Successful social navigation means reading the room and adjusting your behavior accordingly.</p>
<p>These rules are not about manipulation. They are about respect — showing that you understand the group well enough to move within its boundaries. Once you learn to see them, every interaction becomes a little clearer.</p>
`,
  },
  {
    id: 'financial-crises-history',
    title: 'How History Repeats Itself in Financial Crises',
    description: '从郁金香泡沫到次贷危机，历史总是惊人地相似。文章梳理了历次金融危机的共同模式。',
    category: '历史',
    difficulty: '高级',
    wordCount: 520,
    coverColor: 'bg-stone-500',
    content: `
<p>Financial crises have been a recurring feature of human history, from the Dutch tulip mania of the 1630s to the global financial crisis of 2008. Despite the vastly different contexts, they all follow a remarkably similar pattern.</p>
<p>First comes <strong>displacement</strong> — some new technology, policy, or market opportunity creates genuine profits for early adopters. This draws attention and begins to shift expectations.</p>
<p>Next comes <strong>credit expansion</strong>. As optimism grows, banks and investors lend more freely. Debt fuels rising asset prices, which in turn justifies even more lending. The cycle feeds on itself.</p>
<p>Then arrives <strong>euphoria</strong>. Rational analysis gives way to crowd psychology. People buy because prices are rising, and prices rise because people are buying. Skeptics are dismissed as outdated or envious.</p>
<p>At some point, the bubble reaches its limit. A small shock — a bankruptcy, a scandal, a policy shift — triggers <strong>panic</strong>. Everyone tries to exit at once, but there are not enough buyers. Prices collapse.</p>
<p>Finally comes <strong>revulsion</strong>. The market that was beloved is now hated. Regulators rush in with new rules. Investors vow never to speculate again — at least until the next displacement arrives, usually a generation later, when the lessons have been forgotten.</p>
<p>Knowing this cycle won't prevent the next crisis. But it can prevent you from being surprised by it.</p>
`,
  },
  {
    id: 'nature-engineer',
    title: 'Why Nature Is the Best Engineer',
    description: '从蜂巢结构到鲨鱼皮肤，大自然经过亿万年进化出的设计方案，往往比人类工程更高效。',
    category: '自然',
    difficulty: '初级',
    wordCount: 380,
    coverColor: 'bg-lime-500',
    content: `
<p>Human engineers have spent centuries refining their designs. Yet nature has been doing the same thing for billions of years, through the slow but powerful process of evolution. The results are often more elegant than anything we have built.</p>
<p>Consider the honeycomb. Bees construct hexagonal cells with walls just two millimeters thick, yet the structure is strong enough to support thousands of times its own weight. Mathematicians have proven that the hexagon is the most efficient way to divide a surface into equal areas with the least total perimeter. Bees discovered this long before humans wrote equations.</p>
<p>Or look at shark skin. Its surface is covered with tiny tooth-like scales called denticles, which reduce drag and prevent bacteria from settling. Engineers have copied this design to create faster swimsuits and more hygienic hospital surfaces.</p>
<p>The kingfisher's beak inspired the design of Japan's bullet train nose, eliminating the sonic boom that occurred when the train entered tunnels. Termite mounds, with their natural air conditioning, have influenced the design of energy-efficient buildings in hot climates.</p>
<p>This approach — learning from nature's solutions — is called <strong>biomimicry</strong>. It reminds us that the best ideas are not always new. Sometimes they have been tested and perfected over millions of years, waiting for us to notice them.</p>
`,
  },
  {
    id: 'test-preparation',
    title: 'The Science of Effective Test Preparation',
    description: '间隔重复、主动回忆、精细编码——文章用认知科学原理解释为什么有些复习方法事半功倍。',
    category: '考试',
    difficulty: '中级',
    wordCount: 410,
    coverColor: 'bg-indigo-500',
    content: `
<p>Most students prepare for exams by rereading their notes and highlighting textbooks. It feels productive, but cognitive science shows it is one of the least effective ways to learn.</p>
<p>A far better method is <strong>active recall</strong>. Instead of passively reviewing material, you test yourself. Close the book and try to explain the concept in your own words. The effort of retrieval strengthens memory far more than re-exposure does. Flashcards, practice questions, and self-quizzing all harness this principle.</p>
<p>Another powerful technique is <strong>spaced repetition</strong>. Cramming everything into one session creates a quick but shallow memory. Spacing your study across days or weeks forces your brain to reconstruct the knowledge each time, which deepens retention. The optimal interval increases as you master the material — review tomorrow, then in three days, then in a week.</p>
<p><strong>Elaborative encoding</strong> adds another layer. Instead of memorizing isolated facts, connect them to what you already know. Create analogies, draw diagrams, or imagine teaching the material to someone else. The more associations a memory has, the easier it is to retrieve.</p>
<p>The common thread is that effective learning feels harder. Rereading is comfortable; testing yourself is not. But the struggle is the point. It signals that your brain is doing the work that actually builds durable knowledge.</p>
`,
  },
]

export const categoryOptions = ['全部', '考试', '生活', '科技', '文化', '社会', '历史', '自然', '商业']
export const difficultyOptions = ['全部', '初级', '中级', '高级']

/**
 * Estimate reading time in minutes (assume 200 wpm).
 * @param {number} wordCount
 * @returns {number}
 */
export function estimateReadingMinutes(wordCount) {
  return Math.max(1, Math.round(wordCount / 200))
}

/** @param {string} id */
export function getArticleById(id) {
  return mockArticles.find((a) => a.id === id)
}
