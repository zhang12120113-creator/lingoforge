/**
 * @typedef {Object} Paragraph
 * @property {string} en   英文原文（可含 <strong>、<em> 等简单标签）
 * @property {string} zh   中文翻译
 */

/**
 * @typedef {Object} Article
 * @property {string} id
 * @property {string} title           英文标题
 * @property {string} description     中文摘要
 * @property {'商业'|'生活'|'科技'|'文化'|'社会'|'历史'|'自然'|'考试'} category
 * @property {'初级'|'中级'|'高级'} difficulty
 * @property {Paragraph[]} paragraphs 正文段落数组
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
    paragraphs: [
      {
        en: 'When people talk about "buying stocks," it can sound like something only Wall Street traders do. But the idea behind a stock is surprisingly simple.',
        zh: '当人们谈论"买股票"时，听起来像是只有华尔街交易员才会做的事。但股票背后的概念其实出奇地简单。',
      },
      {
        en: 'A stock is a piece of ownership in a company. Imagine your friend opens a small coffee shop and needs <strong>$10,000</strong> to start. Instead of taking a loan, she divides her shop into 1,000 equal pieces and sells each piece for <strong>$10</strong>. If you buy one piece, you now own <strong>0.1%</strong> of the shop.',
        zh: '股票就是公司的一小块所有权。想象一下你的朋友开了一家小咖啡店，需要<strong>1万美元</strong>启动资金。她没有去贷款，而是把店分成1000等份，每份卖<strong>10美元</strong>。如果你买了一份，你就拥有了这家店的<strong>0.1%</strong>。',
      },
      {
        en: "That's basically what a stock is, just on a much larger scale. Big companies like Apple or Tesla have hundreds of millions of these \"pieces\" — called shares — that anyone can buy and sell on a stock market.",
        zh: '这基本上就是股票的本质，只是规模要大得多。像苹果或特斯拉这样的大公司有数亿个这样的"碎片"——叫做股份——任何人都可以在股票市场上买卖。',
      },
      {
        en: 'When the company does well, the value of each share usually goes up. When it struggles, the value goes down. Some companies also pay a portion of their profits back to shareholders, called a <em>dividend</em>.',
        zh: '当公司业绩好时，每股的价值通常会上涨。当公司陷入困境时，价值就会下跌。一些公司还会把一部分利润返还给股东，这叫做<em>股息</em>。',
      },
      {
        en: "So owning a stock isn't really about gambling on numbers — it's about owning a tiny slice of a real business, and sharing in whatever happens to it.",
        zh: '所以拥有股票并不是在数字上赌博——而是拥有一家真实企业的一小部分，并与它共命运。',
      },
      {
        en: "Understanding this one idea changes how you see the stock market. It's not a casino. It's a marketplace where ownership of companies is traded every second of every day.",
        zh: '理解这一个观点会改变你对股市的看法。它不是赌场。而是一个每天都在每分每秒交易公司所有权的市场。',
      },
    ],
  },
  {
    id: 'round-numbers',
    title: 'The Strange Power of Round Numbers',
    description: '为什么我们对 100、1000 这样的数字格外在意？整数背后藏着一种深刻的心理学效应。',
    category: '生活',
    difficulty: '中级',
    wordCount: 386,
    coverColor: 'bg-amber-500',
    paragraphs: [
      {
        en: 'Have you ever noticed how runners speed up just before reaching the 10-kilometer mark? Or how investors panic when a stock falls below $100?',
        zh: '你有没有注意到，跑步者在即将到达10公里标记时会加速？或者当股票跌破100美元时投资者会恐慌？',
      },
      {
        en: "Round numbers have a strange grip on our minds. They feel meaningful, even when they're just labels.",
        zh: '整数对我们的头脑有一种奇怪的掌控力。它们感觉很有意义，即使只是标签而已。',
      },
      {
        en: 'Researchers have studied this for decades. In one famous experiment, baseball players were significantly more likely to push for a <strong>.300</strong> batting average than for <strong>.299</strong>. Just one extra hit — but the psychological reward was enormous.',
        zh: '研究人员已经研究了这种现象几十年。在一个著名的实验中，棒球运动员为了冲击<strong>.300</strong>的打击率而不是<strong>.299</strong>，明显更加努力。仅仅多一次击球——但心理上的回报是巨大的。',
      },
      {
        en: 'The same effect appears in shopping. Prices ending in <em>.99</em> feel cheaper than the round number above them, even when the difference is one cent. Our brains anchor on the leftmost digit and ignore the rest.',
        zh: '同样的效应也出现在购物中。以<em>.99</em>结尾的价格感觉比上面的整数便宜，即使只差一分钱。我们的大脑会锚定在最左边的数字上，而忽略其余部分。',
      },
      {
        en: 'Why does this happen? Round numbers are easier to remember, easier to compare, and easier to brag about. "I ran 10K" sounds clean. "I ran 9.7K" sounds like an excuse.',
        zh: '为什么会这样？整数更容易记住、更容易比较、也更容易吹嘘。"我跑了10公里"听起来干净利落。"我跑了9.7公里"听起来像个借口。',
      },
      {
        en: 'Knowing this can help you make better decisions. Next time you\'re chasing a round number — a salary, a follower count, a fitness goal — ask yourself: would the next decimal point really matter? Or am I just chasing a feeling?',
        zh: '了解这一点可以帮助你做出更好的决定。下次你追逐一个整数——薪水、粉丝数、健身目标——问问自己：下一个小数点真的重要吗？还是说我只是在追逐一种感觉？',
      },
    ],
  },
  {
    id: 'card-spending',
    title: 'Why We Spend More When We Pay With a Card',
    description: '为什么用卡刷钱总比掏现金更容易？答案藏在大脑处理"疼痛"的方式里。',
    category: '商业',
    difficulty: '中级',
    wordCount: 401,
    coverColor: 'bg-indigo-500',
    paragraphs: [
      {
        en: 'Studies consistently show that people spend <strong>12% to 18% more</strong> when paying with a credit card compared to cash. The reason isn\'t laziness. It\'s neurology.',
        zh: '研究一致表明，与现金支付相比，人们用信用卡消费时会多花<strong>12%到18%</strong>。原因不是懒惰，而是神经科学。',
      },
      {
        en: 'When you hand over a $20 bill, your brain registers a small amount of <em>pain</em>. Scientists call this the "pain of paying." You can see the money leaving you. The decision feels real.',
        zh: '当你递出一张20美元钞票时，你的大脑会记录到一小股<em>痛苦</em>。科学家称之为"支付之痛"。你能看到钱离你而去。这个决定感觉很真实。',
      },
      {
        en: "A credit card swipe doesn't trigger that signal. You see no money, no change, no shrinking wallet. The cost is abstract, postponed, almost invisible.",
        zh: '刷卡不会触发那个信号。你看不到钱，看不到找零，看不到钱包变薄。成本是抽象的、延迟的、几乎看不见的。',
      },
      {
        en: 'Mobile payments make this effect even stronger. With a single tap, the friction disappears entirely. By the time the bill arrives, the meal is long forgotten and the pain is replaced by surprise.',
        zh: '移动支付让这种效应更加强烈。轻轻一点，摩擦感完全消失。等账单来的时候，那顿饭早已被遗忘，而痛苦则被惊讶所取代。',
      },
      {
        en: "None of this means cards are bad. They're convenient and often more secure. But if you've ever wondered why your monthly statement looks bigger than it should, this is part of the answer.",
        zh: '这并不意味着信用卡不好。它们很方便，而且通常更安全。但如果你曾经好奇为什么每月的账单看起来比预期的高，这就是答案的一部分。',
      },
      {
        en: 'One simple trick: before any non-essential purchase, picture yourself counting out the equivalent in physical bills. If the imagined act feels uncomfortable, that\'s your brain telling you something the swipe is hiding.',
        zh: '一个简单的技巧：在进行任何非必要消费之前，想象自己正在数出等额的现金。如果想象这个动作让你感到不舒服，那就是你的大脑在告诉你刷卡正在隐藏的东西。',
      },
    ],
  },
  {
    id: 'short-videos',
    title: 'Why Our Brains Love Short Videos',
    description: '从抖音到 Reels，短视频为何让人欲罢不能？这背后是一场针对多巴胺系统的精准设计。',
    category: '科技',
    difficulty: '中级',
    wordCount: 423,
    coverColor: 'bg-rose-500',
    paragraphs: [
      {
        en: 'It starts innocently. You open the app for "just one video." Forty-five minutes later, you\'re still scrolling, with no memory of what you watched.',
        zh: '一切开始得很无辜。你打开应用只想"看一个视频"。45分钟后，你还在滑动屏幕，却完全不记得看了什么。',
      },
      {
        en: "Short-form video isn't just entertainment. It's an extremely effective delivery system for dopamine — the brain chemical tied to anticipation and reward.",
        zh: '短视频不仅仅是娱乐。它是一种极其有效的多巴胺递送系统——多巴胺是一种与期待和奖励相关的大脑化学物质。',
      },
      {
        en: 'Each swipe is a tiny gamble. Most videos are forgettable, but every now and then one delivers a hit of laughter, surprise, or curiosity. Your brain quickly learns that the next swipe <em>could</em> be the great one. So it keeps reaching.',
        zh: '每次滑动都是一次小赌博。大多数视频都平淡无奇，但偶尔会有一个带来一阵笑声、惊喜或好奇。你的大脑很快学会：下一次滑动<em>可能</em>就是那个精彩的。所以它不停地滑。',
      },
      {
        en: 'This pattern, called <strong>variable reward</strong>, is the same mechanism that drives slot machines. Predictable rewards are boring. Unpredictable ones are addictive.',
        zh: '这种模式叫做<strong>变量奖励</strong>，它与驱动老虎机的机制相同。可预测的奖励很无聊。不可预测的奖励让人上瘾。',
      },
      {
        en: 'Add the extreme brevity — most clips are under 30 seconds — and you remove every natural stopping point. There\'s no "end of episode," no closing credits, no chapter break. Just an infinite scroll designed to keep you in.',
        zh: '再加上极短的时长——大多数片段不到30秒——你就移除了每一个自然的停止点。没有"本集结束"，没有片尾字幕，没有章节中断。只有为你量身设计的无限滚动。',
      },
      {
        en: 'None of this is accidental. The platforms employ teams of engineers and behavioral scientists whose job is to maximize the time you spend inside the app.',
        zh: '这一切都不是偶然的。这些平台雇佣了工程师和行为科学家团队，他们的工作就是最大化你在应用里花费的时间。',
      },
      {
        en: 'The good news: simply understanding the design weakens its grip. The next time you feel the pull, ask yourself: <em>am I choosing this, or is the algorithm choosing for me?</em>',
        zh: '好消息是：仅仅了解这种设计就能削弱它的控制力。下次当你感受到那股拉力时，问问自己：<em>是我在选择这个，还是算法在替我选？</em>',
      },
    ],
  },
  {
    id: 'simple-explanations',
    title: 'Why Our Brains Love Simple Explanations',
    description: '为什么阴谋论比真相更有市场？我们的大脑天生偏爱"简洁"，哪怕代价是错误。',
    category: '文化',
    difficulty: '中级',
    wordCount: 398,
    coverColor: 'bg-violet-500',
    paragraphs: [
      {
        en: 'The world is messy. Most events have many causes, contradictory evidence, and outcomes shaped by chance.',
        zh: '世界是混乱的。大多数事件都有许多原因、相互矛盾的证据，以及由偶然塑造的结果。',
      },
      {
        en: 'And yet, the explanations that spread fastest tend to be the simplest. "It\'s all because of <em>X</em>." "There\'s a hidden group pulling the strings."',
        zh: '然而，传播最快的解释往往是最简单的。"这一切都是<em>X</em>造成的。""有一个隐藏的团体在幕后操控。"',
      },
      {
        en: "This isn't a sign that people are foolish. It's a feature of how human cognition works. Our brains are pattern-recognition machines, optimized over millions of years to find quick answers in dangerous environments. A simple story we can act on was usually more useful than a complex truth we couldn't.",
        zh: '这并不是人们愚蠢的标志。这是人类认知运作方式的特点。我们的大脑是模式识别机器，经过数百万年的优化，能在危险环境中快速找到答案。一个我们可以据此行动的简单故事，通常比一个我们无法理解的复杂真相更有用。',
      },
      {
        en: 'Psychologists call this preference <strong>cognitive ease</strong>. Information that feels smooth and familiar is judged as more likely to be true, regardless of whether it actually is.',
        zh: '心理学家称这种偏好为<strong>认知流畅性</strong>。感觉顺畅和熟悉的信息会被判断为更可能是真的，不管它实际上是不是真的。',
      },
      {
        en: 'This is why conspiracy theories thrive. They convert chaotic events into clean narratives with clear villains. They feel right because they feel <em>simple</em>.',
        zh: '这就是阴谋论蓬勃发展的原因。它们将混乱的事件转化为有明确反派的清晰叙事。它们感觉正确，因为它们感觉<em>简单</em>。',
      },
      {
        en: "The hard truth is that most real explanations involve trade-offs, randomness, and partial information. They don't fit on a poster.",
        zh: '残酷的真相是，大多数真实的解释涉及权衡、随机性和不完整的信息。它们无法印在一张海报上。',
      },
      {
        en: 'Being aware of this bias doesn\'t cure it, but it gives you a useful question to ask: <strong>"Does this feel true because it explains the evidence, or because it\'s just satisfying to believe?"</strong>',
        zh: '意识到这种偏见并不能治愈它，但它给了你一个有用的问题可以问：<strong>"这感觉是真的，是因为它解释了证据，还是仅仅因为相信它很令人满足？"</strong>',
      },
    ],
  },
  {
    id: 'free-apps',
    title: 'Why "Free" Apps Are Often the Most Expensive',
    description: '当一个产品免费时，你才是真正的产品。看看免费应用的真实成本。',
    category: '科技',
    difficulty: '高级',
    wordCount: 451,
    coverColor: 'bg-sky-500',
    paragraphs: [
      {
        en: 'There\'s an old saying in tech: <em>If you\'re not paying for the product, you are the product.</em>',
        zh: '科技界有一句老话：<em>如果你不为产品付费，那么你就是产品。</em>',
      },
      {
        en: "It sounds dramatic, but the math behind most \"free\" apps makes it almost literal. Running a global service — servers, engineers, security, support — costs money. If users pay nothing, that money has to come from somewhere else. Usually that somewhere is advertising, and advertising is powered by data.",
        zh: '听起来很戏剧化，但大多数"免费"应用背后的数学几乎让它成为字面意思。运营一项全球服务——服务器、工程师、安全、支持——需要钱。如果用户不付钱，那笔钱就必须来自别的地方。通常那个地方就是广告，而广告是由数据驱动的。',
      },
      {
        en: "Every interaction inside a free app can become a data point: what you tap, how long you pause, where you are, what time you wake up. None of this is intrinsically evil. But aggregated across billions of users, it produces extraordinarily detailed profiles that are sold to advertisers, brokers, and sometimes governments.",
        zh: '免费应用中的每一次互动都可能成为一个数据点：你点击了什么、停顿了多久、你在哪里、你几点起床。这些本身并不邪恶。但在数十亿用户中汇总后，它会产生极其详细的画像，被出售给广告商、经纪人，有时甚至是政府。',
      },
      {
        en: "The hidden cost goes beyond privacy. Free apps are also incentivized to maximize engagement, because more time on the platform means more ad impressions. That's why so many of them are designed to be subtly addictive, optimized for the next swipe rather than your long-term wellbeing.",
        zh: '隐藏的成本超越了隐私。免费应用还被激励去最大化用户参与度，因为在平台上花费的时间越多，意味着更多的广告展示。这就是为什么这么多应用被设计成微妙的成瘾品，为下一次滑动而优化，而不是为了你的长期福祉。',
      },
      {
        en: "Paid software has its own problems, of course. Not every paid product is good. But when you pay directly, the relationship is clearer: the company's job is to make <em>you</em> happy, not to make you watch one more ad.",
        zh: '当然，付费软件也有自己的问题。不是每个付费产品都是好的。但当你直接付费时，关系就更清晰了：公司的工作是让<em>你</em>开心，而不是让你多看一个广告。',
      },
      {
        en: "The question isn't whether to use free apps. It's whether you understand the trade. The next time you download something at no cost, take a minute to ask: <strong>What is this app's actual business model? Who really pays for it? And in what currency?</strong>",
        zh: '问题不在于是否使用免费应用。而在于你是否理解这笔交易。下次你免费下载某个东西时，花一分钟问问自己：<strong>这个应用真正的商业模式是什么？谁真正在为它付费？用什么货币？</strong>',
      },
    ],
  },
  {
    id: 'morning-routines',
    title: 'The Quiet Magic of Morning Routines',
    description: '为什么成功人士都强调晨间习惯？答案不在仪式感，而在你大脑最清醒的那段时间。',
    category: '生活',
    difficulty: '初级',
    wordCount: 364,
    coverColor: 'bg-teal-500',
    paragraphs: [
      {
        en: 'Search for "morning routine" online and you\'ll find endless lists: cold showers, journaling, meditation, green smoothies. It can feel like magic only available to people who already have their lives together.',
        zh: '在网上搜索"晨间习惯"，你会发现 endless 的清单：冷水澡、写日记、冥想、绿色冰沙。这感觉像是只有那些已经把生活打理得井井有条的人才能拥有的魔法。',
      },
      {
        en: 'But the real reason morning routines work has little to do with the specific activities. It has to do with <strong>willpower</strong>.',
        zh: '但晨间习惯真正有效的原因与具体活动关系不大。它与<strong>意志力</strong>有关。',
      },
      {
        en: 'Studies suggest that mental energy is highest in the first few hours after waking. Decisions made early in the day tend to be sharper, more disciplined, and less reactive. As the day goes on, fatigue accumulates and small choices start to feel large.',
        zh: '研究表明，醒来后的头几个小时精神能量最高。一天中早些时候做出的决定往往更敏锐、更有纪律、更少反应性。随着时间推移，疲劳累积，小的选择也开始感觉沉重。',
      },
      {
        en: 'A morning routine takes advantage of this window. By placing your most important tasks early — exercise, focused work, reading — you finish them while your brain is still fresh.',
        zh: '晨间习惯利用了这个窗口期。把最重要的任务放在早上——锻炼、专注工作、阅读——你在大脑还清醒的时候完成它们。',
      },
      {
        en: "It also reduces the number of decisions you have to make. If your first hour is already planned, you don't waste energy deciding what to do next. Behavior becomes automatic, and automatic behavior is cheap.",
        zh: '它还减少了你必须做出的决定数量。如果你第一个小时已经规划好了，你就不用浪费精力决定接下来做什么。行为变得自动化，而自动化的行为成本很低。',
      },
      {
        en: "You don't need ice baths or 5 a.m. wake-ups. You just need a small set of actions you can repeat almost without thinking. The magic isn't in any single habit. It's in the fact that you've already <em>won the morning</em> before the world starts pulling on you.",
        zh: '你不需要冰浴或凌晨5点起床。你只需要一小套几乎可以不假思索重复的动作。魔法不在于任何一个单独的习惯。而在于你已经在世界开始拉扯你之前<em>赢得了早晨</em>。',
      },
    ],
  },
  {
    id: 'cities-thinking',
    title: 'How Cities Shape the Way We Think',
    description: '你居住的城市，正在悄悄改变你的思维方式——从注意力到节奏感，环境塑造大脑。',
    category: '文化',
    difficulty: '高级',
    wordCount: 467,
    coverColor: 'bg-fuchsia-500',
    paragraphs: [
      {
        en: 'We tend to think of cities as backgrounds — the place where life happens. But a growing body of research suggests cities are not passive scenery. They actively shape how their residents perceive, decide, and even feel.',
        zh: '我们往往把城市当作背景——生活发生的地方。但越来越多的研究表明，城市不是被动的风景。它们积极地塑造着居民如何感知、做决定，甚至感受。',
      },
      {
        en: 'Take attention. Walking through a quiet park demands almost no cognitive effort. Walking through a busy intersection, by contrast, requires constant filtering: pedestrians, signals, scooters, sounds. Over time, urban environments train the brain to stay in a state of <em>directed attention</em>, which is mentally taxing and contributes to a particular flavor of fatigue.',
        zh: '以注意力为例。穿过安静的公园几乎不需要认知努力。相比之下，穿过繁忙的十字路口需要不断过滤：行人、信号灯、电动车、声音。久而久之，城市环境训练大脑保持在<em>定向注意力</em>状态，这在精神上很耗竭，并导致一种特殊的疲劳感。',
      },
      {
        en: "Cities also shape rhythm. In dense places, social cues — schedules, deadlines, lights, transit — are everywhere. People walk faster, talk faster, and expect faster responses. This isn't culture so much as infrastructure: when buildings are close together, opportunities for interaction multiply, and tempo follows.",
        zh: '城市也塑造节奏。在密集的地方，社会线索——时间表、截止日期、灯光、交通——无处不在。人们走得更快、说得更快、期待更快的回应。这与其说是文化，不如说是基础设施：当建筑物紧密相连时，互动机会成倍增加，节奏随之加快。',
      },
      {
        en: 'Even values can be subtly influenced. Researchers have found that people in highly urbanized areas tend to score higher on traits like <strong>tolerance for diversity</strong> and <strong>openness to new experiences</strong>, partly because exposure to difference is unavoidable. Smaller towns, with tighter networks, often score higher on community cohesion. Neither is better — they\'re trade-offs sculpted by environment.',
        zh: '甚至价值观也会受到微妙影响。研究人员发现，高度城市化地区的人在<strong>对多样性的容忍度</strong>和<strong>对新体验的开放性</strong>等特质上得分往往更高，部分原因是接触差异是不可避免的。网络更紧密的小镇往往在社区凝聚力上得分更高。没有哪一个更好——它们是由环境塑造的权衡。',
      },
      {
        en: 'What does this mean for you? Probably more than you think. The architecture around you, the noise, the density, the green space, the commute — all of it is feeding back into your nervous system every day.',
        zh: '这对你意味着什么？可能比你想象的更多。你周围的建筑、噪音、密度、绿地、通勤——所有这一切每天都在反馈到你的神经系统中。',
      },
      {
        en: "You can't fully escape your environment, but you can become aware of it. Notice where you feel calm. Notice where you feel hurried. Then ask whether the place is bringing out the version of you that you want to be.",
        zh: '你无法完全逃离你的环境，但你可以意识到它。注意你在哪里感到平静。注意你在哪里感到匆忙。然后问问自己：这个地方是否在激发出你想成为的那个自己。',
      },
    ],
  },
  {
    id: 'social-rules',
    title: 'The Hidden Rules of Social Interaction',
    description: '社交场合中有哪些不成文的规则？理解这些潜规则能帮助你更好地融入不同文化背景的群体。',
    category: '社会',
    difficulty: '中级',
    wordCount: 445,
    coverColor: 'bg-rose-500',
    paragraphs: [
      {
        en: 'Every social group operates on a set of unwritten rules. They are rarely discussed, yet breaking them can instantly make you an outsider.',
        zh: '每个社交群体都按照一套不成文的规则运作。它们很少被讨论，但打破它们会让你瞬间变成局外人。',
      },
      {
        en: 'The first rule is <strong>reciprocal disclosure</strong>. Conversations work like a dance of gradual trust. Share too much too soon, and people feel uncomfortable. Share too little, and you seem distant. The trick is to match the other person\'s level of openness, step by step.',
        zh: '第一条规则是<strong>互惠性自我表露</strong>。对话就像一场逐步建立信任的舞蹈。说太多太快，人们会感到不舒服。说太少，你又显得疏远。诀窍是一步一步地匹配对方的开放程度。',
      },
      {
        en: 'The second rule is <strong>status sensitivity</strong>. In most groups, there is an unspoken hierarchy. People pay attention to who speaks first, who interrupts whom, and whose ideas get adopted without debate. Understanding this flow helps you know when to push and when to step back.',
        zh: '第二条规则是<strong>地位敏感性</strong>。在大多数群体中，存在着一种不言明的等级制度。人们关注谁先说话、谁打断谁、以及谁的想法无需辩论就被采纳。理解这种流动有助于你知道何时推进、何时退让。',
      },
      {
        en: 'The third rule is <strong>context calibration</strong>. The same joke that works with friends may offend colleagues. The confidence that impresses in a meeting can seem arrogant at a dinner party. Successful social navigation means reading the room and adjusting your behavior accordingly.',
        zh: '第三条规则是<strong>情境校准</strong>。对朋友管用的笑话可能会冒犯同事。在会议上令人印象深刻的自信在晚宴上可能显得傲慢。成功的社交导航意味着读懂场合并相应地调整你的行为。',
      },
      {
        en: 'These rules are not about manipulation. They are about respect — showing that you understand the group well enough to move within its boundaries. Once you learn to see them, every interaction becomes a little clearer.',
        zh: '这些规则不是关于操纵。它们是关于尊重——表明你足够了解这个群体，能够在它的边界内活动。一旦你学会看到它们，每一次互动都会变得清晰一些。',
      },
    ],
  },
  {
    id: 'financial-crises-history',
    title: 'How History Repeats Itself in Financial Crises',
    description: '从郁金香泡沫到次贷危机，历史总是惊人地相似。文章梳理了历次金融危机的共同模式。',
    category: '历史',
    difficulty: '高级',
    wordCount: 520,
    coverColor: 'bg-stone-500',
    paragraphs: [
      {
        en: 'Financial crises have been a recurring feature of human history, from the Dutch tulip mania of the 1630s to the global financial crisis of 2008. Despite the vastly different contexts, they all follow a remarkably similar pattern.',
        zh: '金融危机一直是人类历史的反复特征，从17世纪30年代的荷兰郁金香狂热到2008年的全球金融危机。尽管背景截然不同，它们都遵循着惊人相似的模式。',
      },
      {
        en: 'First comes <strong>displacement</strong> — some new technology, policy, or market opportunity creates genuine profits for early adopters. This draws attention and begins to shift expectations.',
        zh: '首先是<strong>错位</strong>——某些新技术、政策或市场机会为早期采用者创造了真正的利润。这吸引了注意力，并开始改变预期。',
      },
      {
        en: 'Next comes <strong>credit expansion</strong>. As optimism grows, banks and investors lend more freely. Debt fuels rising asset prices, which in turn justifies even more lending. The cycle feeds on itself.',
        zh: '接下来是<strong>信贷扩张</strong>。随着乐观情绪增长，银行和投资者更自由地放贷。债务推动资产价格上涨，而资产价格上涨又反过来证明更多放贷是合理的。循环自我喂养。',
      },
      {
        en: 'Then arrives <strong>euphoria</strong>. Rational analysis gives way to crowd psychology. People buy because prices are rising, and prices rise because people are buying. Skeptics are dismissed as outdated or envious.',
        zh: '然后是<strong>狂热</strong>。理性分析让位于群体心理。人们买是因为价格在涨，价格涨是因为人们在买。怀疑者被斥为过时或嫉妒。',
      },
      {
        en: 'At some point, the bubble reaches its limit. A small shock — a bankruptcy, a scandal, a policy shift — triggers <strong>panic</strong>. Everyone tries to exit at once, but there are not enough buyers. Prices collapse.',
        zh: '在某个时刻，泡沫达到了极限。一个小的冲击——破产、丑闻、政策转变——触发<strong>恐慌</strong>。每个人都试图同时退出，但买家不够。价格崩溃。',
      },
      {
        en: 'Finally comes <strong>revulsion</strong>. The market that was beloved is now hated. Regulators rush in with new rules. Investors vow never to speculate again — at least until the next displacement arrives, usually a generation later, when the lessons have been forgotten.',
        zh: '最后是<strong>厌恶</strong>。曾经被热爱的市场现在被憎恨。监管者带着新规则匆忙介入。投资者发誓再也不投机了——至少直到下一次错位到来，通常是一代人之后，当教训已被遗忘。',
      },
      {
        en: 'Knowing this cycle won\'t prevent the next crisis. But it can prevent you from being surprised by it.',
        zh: '了解这个周期并不能阻止下一次危机。但它可以防止你被危机打个措手不及。',
      },
    ],
  },
  {
    id: 'nature-engineer',
    title: 'Why Nature Is the Best Engineer',
    description: '从蜂巢结构到鲨鱼皮肤，大自然经过亿万年进化出的设计方案，往往比人类工程更高效。',
    category: '自然',
    difficulty: '初级',
    wordCount: 380,
    coverColor: 'bg-lime-500',
    paragraphs: [
      {
        en: 'Human engineers have spent centuries refining their designs. Yet nature has been doing the same thing for billions of years, through the slow but powerful process of evolution. The results are often more elegant than anything we have built.',
        zh: '人类工程师花了几个世纪来完善他们的设计。然而大自然已经通过缓慢而强大的进化过程做了同样的事数十亿年。其结果往往比我们建造的任何东西都更优雅。',
      },
      {
        en: 'Consider the honeycomb. Bees construct hexagonal cells with walls just two millimeters thick, yet the structure is strong enough to support thousands of times its own weight. Mathematicians have proven that the hexagon is the most efficient way to divide a surface into equal areas with the least total perimeter. Bees discovered this long before humans wrote equations.',
        zh: '想想蜂巢。蜜蜂建造的六边形巢室壁只有两毫米厚，但这个结构却足够坚固，可以支撑自身重量数千倍。数学家已经证明，六边形是用最小总周长将表面划分为相等面积的最有效方式。蜜蜂早在人类写出方程式之前就发现了这一点。',
      },
      {
        en: "Or look at shark skin. Its surface is covered with tiny tooth-like scales called denticles, which reduce drag and prevent bacteria from settling. Engineers have copied this design to create faster swimsuits and more hygienic hospital surfaces.",
        zh: '或者看看鲨鱼皮。它的表面覆盖着叫做细齿的微小齿状鳞片，可以减少阻力并防止细菌附着。工程师复制了这一设计，制造出更快的泳衣和更卫生的医院表面。',
      },
      {
        en: "The kingfisher's beak inspired the design of Japan's bullet train nose, eliminating the sonic boom that occurred when the train entered tunnels. Termite mounds, with their natural air conditioning, have influenced the design of energy-efficient buildings in hot climates.",
        zh: '翠鸟的喙启发了日本子弹头列车车头的设计，消除了列车进入隧道时产生的音爆。白蚁丘凭借其天然空调系统，影响了炎热气候下节能建筑的设计。',
      },
      {
        en: 'This approach — learning from nature\'s solutions — is called <strong>biomimicry</strong>. It reminds us that the best ideas are not always new. Sometimes they have been tested and perfected over millions of years, waiting for us to notice them.',
        zh: '这种方法——从大自然的解决方案中学习——被称为<strong>仿生学</strong>。它提醒我们，最好的想法并不总是新的。有时它们已经经过数百万年的测试和完善，只等我们去发现。',
      },
    ],
  },
  {
    id: 'test-preparation',
    title: 'The Science of Effective Test Preparation',
    description: '间隔重复、主动回忆、精细编码——文章用认知科学原理解释为什么有些复习方法事半功倍。',
    category: '考试',
    difficulty: '中级',
    wordCount: 410,
    coverColor: 'bg-indigo-500',
    paragraphs: [
      {
        en: 'Most students prepare for exams by rereading their notes and highlighting textbooks. It feels productive, but cognitive science shows it is one of the least effective ways to learn.',
        zh: '大多数学生通过重读笔记和标亮教科书来备考。这感觉很有成效，但认知科学表明这是最低效的学习方式之一。',
      },
      {
        en: 'A far better method is <strong>active recall</strong>. Instead of passively reviewing material, you test yourself. Close the book and try to explain the concept in your own words. The effort of retrieval strengthens memory far more than re-exposure does. Flashcards, practice questions, and self-quizzing all harness this principle.',
        zh: '一个更好的方法是<strong>主动回忆</strong>。不是被动地复习材料，而是测试自己。合上书，试着用自己的话解释这个概念。提取信息的努力比重新接触更能强化记忆。抽认卡、练习题和自我测验都利用了这一原理。',
      },
      {
        en: 'Another powerful technique is <strong>spaced repetition</strong>. Cramming everything into one session creates a quick but shallow memory. Spacing your study across days or weeks forces your brain to reconstruct the knowledge each time, which deepens retention. The optimal interval increases as you master the material — review tomorrow, then in three days, then in a week.',
        zh: '另一个强大的技巧是<strong>间隔重复</strong>。把所有内容塞进一次学习会产生快速但肤浅的记忆。把学习分散到数天或数周，迫使你的大脑每次重建知识，从而加深记忆。最佳间隔随着你掌握材料而增加——明天复习，然后三天后，然后一周后。',
      },
      {
        en: '<strong>Elaborative encoding</strong> adds another layer. Instead of memorizing isolated facts, connect them to what you already know. Create analogies, draw diagrams, or imagine teaching the material to someone else. The more associations a memory has, the easier it is to retrieve.',
        zh: '<strong>精细编码</strong>增加了另一层。不要记忆孤立的事实，而是将它们与你已经知道的东西联系起来。创建类比、画图表，或者想象把材料教给别人。一个记忆拥有的联想越多，就越容易提取。',
      },
      {
        en: 'The common thread is that effective learning feels harder. Rereading is comfortable; testing yourself is not. But the struggle is the point. It signals that your brain is doing the work that actually builds durable knowledge.',
        zh: '共同的线索是，有效的学习感觉更难。重读很舒服；测试自己则不然。但挣扎就是关键。它表明你的大脑正在做真正构建持久知识的工作。',
      },
    ],
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
