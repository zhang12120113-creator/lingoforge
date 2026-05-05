// ============================================================
// 2020-2025 高考英语阅读与听力材料
// Gaokao (National College Entrance Exam) English 2020-2025
// ============================================================
// 所有文章数据来自真实高考英语试卷：
// - 新高考I卷 / 新高考II卷 / 全国卷 / 北京卷 / 上海卷 / 天津卷 / 浙江卷
// - 包含阅读理解、完形填空、听力原文等
// - 每篇文章配有英文原文和中文翻译
// ============================================================

export const mockArticles = [
  // ===== 2020 高考英语 =====

{
    id: 'gk2020-001',
    title: 'Train Information',
    cnTitle: '列车信息',
    description: '这是一篇关于昆士兰铁路服务信息的实用指南。文章介绍了车票要求、失物招领、公共假期安排、无障碍设施以及夜间列车时刻表等内容，为乘客提供全面的出行参考。',
    category: '生活',
    wordCount: 196,
    coverColor: 'bg-amber-500',
    paragraphs: [
      {
        en: 'All customers travelling on TransLink services must be in possession of a valid ticket before boarding. For ticket information, please ask at your local station or call 13 12 30. While Queensland Rail makes every effort to ensure trains run as scheduled, there can be no guarantee of connections between trains or between train services and bus services.',
        zh: '所有乘坐TransLink列车旅行的乘客上车前必须持有有效车票。有关车票信息，请向当地车站询问或拨打电话13 12 30。尽管昆士兰铁路（Queensland Rail）尽一切努力确保列车准点运行，但不能确保列车之间或列车服务与公交服务之间的连接。'
      },
      {
        en: 'Lost property: Call Lost Property on 13 16 17 during business hours for items lost on Queensland Rail services. The lost property office is open Monday to Friday 7:30am to 5:00pm and is located at Roma Street station.',
        zh: '失物招领：在昆士兰州铁路遗失的物品请于工作时间拨打失物招领处电话13 16 17查询。失物招领处工作时间为周一至周五，上午7:30至下午5:00，地址在罗马街（Roma Street）站。'
      },
      {
        en: 'On public holidays, generally a Sunday timetable operates. On certain major event days, i.e. Australia Day, Anzac Day, sporting and cultural days, special additional services may operate. Christmas Day services operate to a Christmas Day timetable; before travel please visit translink.com.au or call TransLink on 13 12 30 anytime.',
        zh: '公共假期：通常采用周日时间表。在某些重大节日，如澳大利亚日、澳新军团日、体育文化日，提供特别附加服务。圣诞节服务采用圣诞节时间表，旅行前请访问 translink.com.au 或随时拨打 TransLink 公司电话13 12 30。'
      },
      {
        en: 'Many stations have wheelchair access from the car park or entrance to the station platforms. For assistance, please call Queensland Rail on 13 16 17.',
        zh: '使用助行设备的乘客：很多车站从停车场或站台入口到站台都设有轮椅通道。如需帮助，请拨打昆士兰铁路电话13 16 17。'
      },
      {
        en: 'Guardian trains (outbound) timetable: Departures from Altandi at 6:42pm (arrive 7:37pm), Central at 7:29pm (arrive 8:52pm), Fortitude Valley at 8:57pm (arrive 9:52pm), and Roma Street at 11:02pm (arrive 12:22am). All services terminate at Varsity Lakes.',
        zh: '安全列车（出站）时刻表：Altandi站下午6:42出发（7:37到达），Central站下午7:29出发（8:52到达），Fortitude Valley站下午8:57出发（9:52到达），Roma Street站晚上11:02出发（次日12:22到达）。所有列车终点站为Varsity Lakes。'
      }
    ]
  },
  {
    id: 'gk2020-002',
    title: 'The Transformative Joy of Rereading',
    cnTitle: '重读的变革之乐',
    description: '本文探讨了重读旧书带来的独特价值与情感体验。作者认为，尽管书籍本身不会改变，但人会随着成长而改变，因此每次重读都能带来新的感悟，重读是读者能给予作者的最高回报。',
    category: '文化',
    wordCount: 283,
    coverColor: 'bg-blue-500',
    paragraphs: [
      {
        en: 'Returning to a book you\'ve read many times can feel like drinks with an old friend. There\'s a welcome familiarity — but also sometimes a slight suspicion that time has changed you both, and thus the relationship. But books don\'t change, people do. And that\'s what makes the act of rereading so rich and transformative.',
        zh: '重读一本读过很多遍的书，就像和老朋友一起畅饮。这是一种受欢迎的熟悉感，但有时也有一丝怀疑，时间改变了你们俩，关系也是。但是书不会变，人会变。这就是为什么重读会如此丰富而富有变化。'
      },
      {
        en: 'The beauty of rereading lies in the idea that our bond with the work is based on our present mental register. It\'s true, the older I get, the more I feel time has wings. But with reading, it\'s all about the present. It\'s about the now and what one contributes to the now, because reading is a give and take between author and reader. Each has to pull their own weight.',
        zh: '重读的美妙之处在于，我们与作品的联系是建立在我们目前的心理状态之上的。的确，我年纪越大，越觉得时间有翅膀。但是阅读，都是关于当下的。它是关于现在和一个人对现在的贡献，因为阅读是作者和读者之间的一种取舍。每个人都要尽自己的力量。'
      },
      {
        en: 'There are three books I reread annually. The first, which I take to reading every spring is Ernest Hemingway\'s A Moveable Feast. Published in 1964, it\'s his classic memoir of 1920s Paris. The language is almost intoxicating, an aging writer looking back on an ambitious yet simpler time. Another is Annie Dillard\'s Holy the Firm, her poetic 1975 ramble about everything and nothing. The third book is Julio Cortazar\'s Save Twilight: Selected Poems, because poetry. And because Cortazar.',
        zh: '每年我都要重读三本书，第一本是我每年春天都要读的海明威的《移动的盛宴》。这本书出版于1964年，是他20世纪20年代巴黎生活的经典回忆录。语言令人着迷，一位上了年纪的作家回顾了一个雄心勃勃但却简单的时代。另一部是安妮·迪拉德的《神圣的坚实》，一部1975年的随笔，漫谈一切和虚无。第三本书是胡里奥·科塔扎尔的《拯救黄昏：诗选》，因为诗歌，因为科塔扎尔。'
      },
      {
        en: 'While I tend to buy a lot of books, these three were given to me as gifts, which might add to the meaning I attach to them. But I imagine that, while money is indeed wonderful and necessary, rereading an author\'s work is the highest currency a reader can pay them. The best books are the ones that open further as time passes. But remember, it\'s you that has to grow and read and reread in order to better understand your friends.',
        zh: '虽然我总是买很多书，但这三本书是别人送我的礼物，这可能增加了我赋予它们的意义。但我想，虽然金钱确实是美妙和必要的，但重读作者的作品是读者能支付给他们的最高报酬。最好的书可以随着时间的推移而看得更远。但请记住，你必须成长，不断地阅读和重读，以便更好地了解你的朋友。'
      }
    ]
  },
  {
    id: 'gk2020-003',
    title: 'Race Walking',
    cnTitle: '竞走',
    description: '本文介绍了竞走运动的健康益处和技术特点。研究表明竞走与跑步有相似的健身效果但受伤风险更低，文章还详细说明了竞走规则、卡路里消耗以及与跑步对身体冲击力的对比分析。',
    category: '健康',
    wordCount: 300,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      {
        en: 'Race walking shares many fitness benefits with running, research shows, while most likely contributing to fewer injuries. It does, however, have its own problem. Race walkers are conditioned athletes. The longest track and field event at the Summer Olympics is the 50-kilometer race walk, which is about five miles longer than the marathon. But the sport\'s rules require that a race walker\'s knees stay straight through most of the leg swing and one foot remain in contact with the ground at all times.',
        zh: '尽管很可能竞走对身体的损伤更少，但是研究表明，在对健康的好处方面，竞走和跑步是一样的。然而，竞走也确实有自身的问题。竞走运动员是条件受到限制的运动员。夏季奥运会最长的田径项目是50公里竞走，比马拉松项目还要长大约5英里。但是这项运动的规则要求：竞走运动员的膝盖要在几乎整个摆腿的过程中保持绷直，并且全程要有一只脚和地面保持接触。'
      },
      {
        en: 'It\'s this strange form that makes race walking such an attractive activity, however, says Jaclyn Norberg, an assistant professor of exercise science at Salem State University in Salem, Mass. Like running, race walking is physically demanding, she says. According to most calculations, race walkers moving at a pace of six miles per hour would burn about 800 calories per hour, which is approximately twice as many as they would burn walking, although fewer than running, which would probably burn about 1,000 or more calories per hour.',
        zh: '然而，来自麻省塞勒姆州立大学的运动科学助理教授Jaclyn Norberg说，正是这种奇特的形式使得竞走运动成为一项如此有魅力的活动。和跑步一样，竞走对体能的要求也很高。根据大多数的计算结果，以时速6英里的速度竞走的运动员，每小时会消耗大约800卡路里。这一数据虽然比跑步消耗的卡路里少，但却大约是他们步行时所消耗的卡路里的两倍。跑步每小时消耗大约1000卡路里或者更多。'
      },
      {
        en: 'However, race walking does not pound the body as much as running does, Dr. Norberg says. According to her research, runners hit the ground with as much as four times their body weight per step, while race walkers, who do not leave the ground, create only about 1.4 times their body weight with each step. As a result, she says, some of the injuries associated with running, such as runner\'s knee, are uncommon among race walkers.',
        zh: '然而，竞走不会像跑步那样对身体造成很大冲击。Norberg博士说。根据她的研究，跑步者每一步落地时的冲击力可达到体重的四倍，而竞走者由于双脚不会同时离地，每一步产生的冲击力仅约为体重的1.4倍。因此，她说，一些与跑步相关的损伤，如跑步膝，在竞走者中并不常见。'
      },
      {
        en: 'But the sport\'s strange form does place considerable stress on the ankles and hips, so people with a history of such injuries might want to be cautious in adopting the sport. In fact, anyone wishing to try race walking should probably first consult a coach or experienced racer to learn proper technique, she says. It takes some practice.',
        zh: '但是这项运动奇特的形式确实会对脚踝和臀部造成相当大的压力，所以有此类伤病史的人在选择这项运动时要谨慎。事实上，任何想尝试竞走的人可能都应该先咨询教练或有经验的竞走者，学习正确的技术，她说。这需要一些练习。'
      }
    ]
  },
  {
    id: 'gk2020-004',
    title: 'Glowing Plants',
    cnTitle: '发光植物',
    description: '本文介绍了麻省理工学院工程师们研发发光植物的前沿科技。通过改变植物的成分，科学家们让植物发出了微弱的光亮，并展望了这项技术未来用于替代电灯照明、节约能源的可能性。',
    category: '科技',
    wordCount: 323,
    coverColor: 'bg-rose-500',
    paragraphs: [
      {
        en: 'The connection between people and plants has long been the subject of scientific research. Recent studies have found positive effects. A study conducted in Youngstown, Ohio, for example, discovered that greener areas of the city experienced less crime. In another, employees were shown to be 15% more productive when their workplaces were decorated with houseplants.',
        zh: '人与植物之间的联系一直是科学研究的主题。最近的研究发现了一些积极影响，例如，在俄亥俄州扬斯敦市进行的一项研究发现，该市绿化较好的地区犯罪率较低。另一项研究显示，当员工的工作场所装饰有室内植物时，工作效率会提高15%。'
      },
      {
        en: 'The engineers at the Massachusetts Institute of Technology (MIT) have taken it a step further changing the actual composition of plants in order to get them to perform diverse, even unusual functions. These include plants that have sensors printed onto their leaves to show when they\'re short of water and a plant that can detect harmful chemicals in groundwater. \'We\'re thinking about how we can engineer plants to replace functions of the things that we use every day,\' explained Michael Strano, a professor of chemical engineering at MIT.',
        zh: '麻省理工学院的工程师们研究更进一步，他们改变了植物的实际成分，以便让它们实现多种多样，甚至不寻常的功能。其中包括在叶子上印上传感器，当它们缺水时可以显示的植物，还有一种可以检测地下水中有害化学物质的植物。麻省理工学院化学工程教授迈克尔·斯特拉诺解释道：\'我们正在考虑如何设计出取代我们每天使用的物品功能的植物\'。'
      },
      {
        en: 'One of his latest projects has been to make plants grow in experiments using some common vegetables. Strano\'s team found that they could create a faint light for three-and-a-half hours. The light, about one-thousandth of the amount needed to read by, is just a start. The technology, Strano said, could one day be used to light the rooms or even to turn tree into self-powered street lamps.',
        zh: '他最近的一个项目是在实验中使用普通蔬菜让植物生长。斯特拉诺的团队发现，他们可以创造出持续三个半小时的微弱光线。光大约是阅读所需的千分之一，这只是一个开始。斯特拉诺说，这项技术有一天可以用来照亮整个房间，甚至可以把树变成自供电的路灯。'
      },
      {
        en: 'In the future, the team hopes to develop a version of the technology that can be sprayed onto plant leaves in a one-off treatment that would last the plant\'s lifetime. The engineers are also trying to develop an on and off \'switch\' where the glow would fade when exposed to daylight.',
        zh: '研究小组希望在未来开发出一种技术，一次性喷洒在植物叶子上，却可以持续植物的一生。工程师们还试图开发一种开关，当暴露在日光下时，光会消失。'
      },
      {
        en: 'Lighting accounts for about 7% of the total electricity consumed in the US. Since lighting is often far removed from the power source — such as the distance from a power plant to street lamps on a remote highway — a lot of energy is lost during transmission. Glowing plants could reduce this distance and therefore help save energy.',
        zh: '照明用电约占美国总用电量的7%。因为照明通常远离电源——例如，从发电厂到偏远公路上路灯的距离——在传输过程中会损失大量能量。发光植物可以缩短这种距离，从而有助于节约能源。'
      }
    ]
  },
  {
    id: 'gk2020-005',
    title: 'The Door and Window Metaphor',
    cnTitle: '门窗隐喻',
    description: '本文是一位父母关于是否应该对孩子说谎的内心独白。作者以滑动玻璃门为例，反思了\'门\'与\'窗\'的隐喻意义，担忧对孩子隐瞒真相可能会影响他们未来把握人生机遇的勇气和信心。',
    category: '生活',
    wordCount: 251,
    coverColor: 'bg-violet-500',
    paragraphs: [
      {
        en: 'Since our twins began learning to walk, my wife and I have kept telling them that our sliding glass door is just a window. The reason is obvious. If we admit it is a door, they\'ll want to go outside constantly. It will drive us crazy. The kids apparently know the truth. But our insisting it\'s merely a window has kept them from attempting millions of requests to open the door.',
        zh: '自从我们的双胞胎开始学走路以来，我和妻子一直告诉他们，我们的滑动玻璃门只是一扇窗户。原因很明显。如果我们承认这是一扇门，他们就会一直想出去。这会让我们发疯。孩子们显然知道真相。但我们坚持说它只是一扇窗户，这阻止了他们无数次要求打开门的尝试。'
      },
      {
        en: 'I hate lying to the kids. One day they\'ll wake up and discover that everything they\'ve always known about windows is a lie.',
        zh: '我讨厌对孩子们撒谎。总有一天他们会醒来，发现他们一直以来所知道的关于窗户的一切都是谎言。'
      },
      {
        en: 'I wonder if parents should always tell the truth no matter the consequences. I have a very strong fear that the lie we\'re telling is doing spiritual damage to our children. Windows and doors have important metaphorical meanings. I\'m telling them they can\'t open what they absolutely know is a door. What if later in life they come to a metaphorical door, like an opportunity of some sort, and instead of opening the door and taking the opportunity, they just stare at it and wonder, \'What if it isn\'t a door?\' That is, \'What if it isn\'t a real opportunity?\'',
        zh: '我想知道父母是否应该无论后果如何都永远说真话。我非常担心我们正在说的谎言正在对我们的孩子造成精神上的伤害。窗户和门有重要的比喻意义。我告诉他们不能打开他们绝对知道是一扇门的东西。如果他们以后在生活中遇到一扇比喻的门，比如某种机会，而不是打开门抓住这个机会，他们只是盯着它想，\'如果它不是一扇门呢？\'也就是说，\'如果它不是一个真正的机会呢？\''
      },
      {
        en: 'Maybe it\'s an unreasonable fear. But the bottom line is that I shouldn\'t lie to my kids. I should just accept repeatedly having to say, \'No. We can\'t go outside now.\' Then when they come to other doors in life, be they real or metaphorical, they won\'t hesitate to open them and walk through.',
        zh: '也许这是一种不合理的恐惧。但底线是我不应该对我的孩子撒谎。我应该只是接受不得不反复说：\'不。我们现在不能出去。\'然后当他们在生活中遇到其他的门时，无论是真实的还是比喻的，他们都会毫不犹豫地打开它们并走过去。'
      }
    ]
  },
  {
    id: 'gk2020-006',
    title: 'The Lake District Attractions Guide',
    cnTitle: '湖区景点指南',
    description: '本文是英格兰湖区旅游景点的介绍指南，主要展示了Dalemain大厦和历史花园的丰富文化遗产。文章包含开放时间、参观信息以及该地四百年历史和获奖花园等特色内容。',
    category: '文化',
    wordCount: 75,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      {
        en: 'Dalemain Mansion & Historic Gardens offers visitors a rich experience of History, Culture & Landscape. Discover and enjoy 4 centuries of history, 5 acres of celebrated and award-winning gardens with parkland walk. Owned by the Hasell family since 1679, it is home to the International Marmalade Festival. Visitors can also enjoy gifts and antiques, plant sales, museums & Mediaeval Hall Tearoom.',
        zh: '湖区景点指南：Dalemain大厦和历史花园：历史、文化和景观。发现和享受4个世纪的历史，5英亩的著名获奖花园和公园步行区。自1679年以来一直由Hasell家族拥有，是国际果酱节的主办地。礼品和古董、植物销售、博物馆和中世纪大厅茶室。'
      },
      {
        en: 'Open: 29 Mar-29 Oct, Sun to Thurs. Tearoom, Gardens & Gift Shop: 10:30-17:30 (16:00 in Oct). House: 11:15-16:00 (15:00 in Oct). Town: Pooley Bridge & Penrith.',
        zh: '开放时间：3月29日至10月29日，周日到周四。茶室、花园和礼品店：10:30-17:30（10月16:00）。房屋：11:15-16:00（10月15:00）。城镇：Pooley Bridge和Penrith。'
      }
    ]
  },
  {
    id: 'gk2020-007',
    title: 'Puzzles and Math Skills',
    cnTitle: '拼图与数学技能',
    description: '本文介绍了一项关于拼图游戏与儿童数学能力发展的研究。研究发现，2至4岁期间玩拼图的儿童在空间技能方面表现更好，该发现强调了早期益智游戏对儿童认知发展的重要性。',
    category: '教育',
    wordCount: 241,
    coverColor: 'bg-orange-500',
    paragraphs: [
      {
        en: 'Some parents will buy any high-tech toy if they think it will help their child, but researchers said puzzles help children with math-related skills. Psychologist Susan Levine, an expert on mathematics development in young children at the University of Chicago, found children who play with puzzles between ages 2 and 4 later develop better spatial skills. Puzzle play was found to be a significant predictor of cognition after controlling for differences in parents\' income, education and the amount of parent talk, Levine said.',
        zh: '一些家长只要认为对孩子有益，他们就会购买任何高科技玩具，但研究人员认为拼图有助于提高孩子们的数学相关技能。芝加哥大学儿童数学发展专家心理学家苏珊·莱文发现，在2岁到4岁之间玩拼图游戏的孩子们随后会发展出更好的空间技能。莱文说，在避免了父母收入、教育程度和父母交谈量的差异后，拼图游戏被认为是认知能力的一个重要预测因素。'
      },
      {
        en: 'The researchers analyzed video recordings of 53 child-parent pairs during everyday activities at home and found children who play with puzzles between 26 and 46 months of age have better spatial skills when assessed at 54 months of age. \'The children who played with puzzles performed better than those who did not, on tasks that assessed their ability to rotate and translate shapes,\' Levine said in a statement.',
        zh: '研究人员分析了53对父母与子女在家庭日常活动中的视频记录，发现26至46个月之间玩拼图游戏的孩子在54个月大时空间技能更好。\'玩拼图游戏的孩子在评估他们旋转和变换形状能力要比没有玩拼图游戏的孩子好，\'莱文在一份声明中说。'
      },
      {
        en: 'The parents were asked to interact with their children as they normally would, and about half of children in the study played with puzzles at one time. Higher-income parents tended to have children play with puzzles more frequently, and both boys and girls who played with puzzles had better spatial skills. However, boys tended to play with more complex puzzles than girls, and the parents of boys provided more spatial language and were more active during puzzle play than parents of girls.',
        zh: '研究人员要求父母像平时一样与孩子互动，研究中约有一半的孩子曾玩过拼图游戏。高收入的父母往往让孩子多玩些拼图，玩拼图的男孩和女孩都会有更好的空间技能。不过，男孩往往玩的拼图比女孩的更复杂，男孩的父母在玩拼图游戏时比女孩的父母提供了更多的空间语言，也更活跃。'
      },
      {
        en: 'The findings were published in the journal Developmental Science.',
        zh: '研究结果发表在《发展科学》杂志上。'
      }
    ]
  },
  {
    id: 'gk2020-008',
    title: 'Lancom Language Learning App',
    cnTitle: 'Lancom语言学习应用',
    description: '本文是一篇语言学习应用Lancom的产品介绍。文章阐述了该应用如何通过AI技术和母语专家为用户提供个性化的多语言课程，并突出了其创新的学习方法、丰富的内容资源以及贴心的客户服务。',
    category: '科技',
    wordCount: 280,
    coverColor: 'bg-teal-500',
    paragraphs: [
      {
        en: 'Lancom is a worldwide language learning app and a leader in the online language learning industry with millions of active subscribers. We house a broad range of experts united by the common goal of creating the best language learning tools possible. With advice from AI specialists, art designers and culture researchers, our multi-language experts endow Lancom with an enormous potential for innovation within the world of language learning. Our courses, totalling 20,000 hours of content in 20 different languages, guarantee you language skills you can use right away.',
        zh: 'Lancom是一款全球语言学习应用程序，是在线语言学习行业的领导者，拥有数百万活跃用户。我们拥有一大批专家，共同目标是尽可能创造最好的语言学习工具。在AI专家、艺术设计师和文化研究人员的建议下，我们的多语言专家让Lancom在语言学习领域具有了巨大的创新潜力。我们的课程共有20种不同语言的20,000小时内容，保证您可以立即使用语言技能。'
      },
      {
        en: 'At the core of Lancom is a world-class effective method that enhances language learning with advanced technology. Examples and dialogues are recorded with real native speakers instead of automatic computers. Lancom trains your brain to learn efficiently, so you absorb more information while in the app and continue learning outside of it.',
        zh: 'Lancom的核心是一种世界级的有效方法，通过先进的技术增强语言学习。示例和对话由真正的母语人士而不是计算机自动录制。Lancom训练你的大脑有效学习，因此你在app可以吸收到更多信息，并持续学习。'
      },
      {
        en: 'The app makes our practical language lessons available wherever and whenever. We work directly for our learners, not for any third party. And it\'s all supported by an efficient customer service team, available through telephone, email and online chat.',
        zh: '该app可以随时随地使用我们的实用语言课程。我们直接为我们的学习者工作，而不是任何第三方。这一切都得到了高效的客服团队的支持，可以通过电话、电子邮件和在线聊天获得支持。'
      },
      {
        en: 'Millions of learners have their own stories and their own reasons for learning a new language. Lancom cares about you and addresses your individual learning type. Lancom is the only product to offer courses tailored to your native language, building on grammar and words you already know. Our content is about real-life topics that are relevant because we know what matters to you is what sticks best.',
        zh: '数以百万计的学习者都有自己的故事和学习一门新语言的理由。Lancom关心你，关注你的个人学习类型。Lancom是唯一一款根据你的母语，在你已知的语法和单词的基础上提供课程的产品。我们的内容是关于现实生活中相关的话题，因为我们知道对你来说最重要的是什么最棒。'
      },
      {
        en: 'You will find it very rewarding to learn with Lancom. Buy with confidence: 21-day money back guarantee! If you aren\'t satisfied, just write to Customer Service within 21 days. Contact & Support: customerservice@lancom.com',
        zh: '你会发现，和Lancom一起学习非常有益。放心购买：21天退款保证！如果不满意，请在21天内通知给客服。联系方式：customerservice@lancom.com'
      }
    ]
  },
  {
    id: 'gk2020-009',
    title: 'Titanic Door Controversy',
    cnTitle: '泰坦尼克号门板争议',
    description: '本文围绕电影《泰坦尼克号》中杰克是否能爬上门板存活这一长期争议展开。导演詹姆斯·卡梅隆从剧本设计、物理浮力等角度解释杰克的必然死亡，而主演凯特·温斯莱特则认为门板上有足够空间容纳两人。',
    category: '文化',
    wordCount: 402,
    coverColor: 'bg-amber-500',
    paragraphs: [
      {
        en: 'James Cameron, writer-director-producer of best picture Oscar winner Titanic, has again denied a claim perennially put forth by fans: that there was room for Jack (Leonardo DiCaprio) to climb aboard the floating door holding Rose (Kate Winslet) and avoid death by hypothermia following the shipwreck in the North Atlantic.',
        zh: '奥斯卡最佳影片奖得主《泰坦尼克号》的编剧兼导演兼制片人詹姆斯·卡梅隆再次否认了影迷们长期以来提出的一个说法：杰克（莱昂纳多·迪卡普里奥饰）本可以爬上承载着露丝（凯特·温斯莱特饰）的浮动门板，避免北大西洋沉船事故后的体温过低死亡。'
      },
      {
        en: 'Stating that \'it says on page 147 (of the script) that Jack dies\', Cameron, 63, told Vanity Fair, \'Obviously it was an artistic choice, (that) the thing was just big enough to hold her, and not big enough to hold him\'. Finding it \'silly, really, that we\'re having this discussion 20 years later\', the filmmaker pointed out that, \'Had he lived, the ending of the film would have been meaningless…So whether it was that, or whether a smokestack fell on him, he was going down\'.',
        zh: '63岁的卡梅隆在接受《名利场》采访时表示：\'（剧本）第147页上写着杰克去世了，显然这是一种艺术选择，门板只够容纳露丝，而不足以容纳杰克\'。这位电影制作人指出：\'20年后我们进行这种讨论真的很愚蠢，如果他活着，电影的结局就没有意义了……所以，无论是这样，还是烟囱落在他身上，他都会倒下\'。'
      },
      {
        en: 'He added he believed the physics were correct as well. \'I was in the water with the piece of wood putting people on it for about two days getting it exactly buoyant enough so that it would support one person with full free-board, meaning that she wasn\'t immersed at all in the 28 degree water, so that she could survive the three hours it took until the rescue ship got there…And we very, very finely tuned it to be exactly what you see in the movie because I believed at the time, and still do, that that\'s what it would have taken for one person to survive\'.',
        zh: '他补充说，他相信物理学也是正确的。\'我在水里用一块木头把人放在上面大约两天，让它漂浮起来足以支撑一个人完全自由航行，这意味着她根本没有浸入28度的水中，这样她就可以在救援船到达那里之前度过三个小时……我们非常非常精细地调整了它，使其与你在电影中看到的完全一样，因为我当时相信，现在仍然相信，这就是一个人生存所需要的\'。'
      },
      {
        en: 'Winslet and fellow Titanic star Kathy Bates suggest otherwise, with Bates at the SAG AFTRA Foundation 2nd Annual Patron of the Artists Awards on Nov. 9 introducing Winslet by saying, \'He lets go of her hand and sinks into the depth of the Atlantic. And I personally think that there was plenty of room on there\'! Winslet agreed, telling the audience lightheartedly, \'He could have fit on it! He could have fit on that door\'! She similarly said on Jimmy Kimmel Live in February 2016 that Jack \'could have actually fitted on that bit of door\'.',
        zh: '温斯莱特和同伴《泰坦尼克号》明星凯西·贝茨表示情况并非如此：\'他放开了她的手，沉入大西洋深处。我个人认为那里有足够的空间！\'温斯莱特表示同意，并轻松地告诉观众：\'他本可以待在门板上！\'2016年2月，她在吉米·金梅尔直播节目中同样表示，杰克\'实际上可以待在那扇门上\'。'
      },
      {
        en: 'As far back as 2012, Cameron told IGN.com, \'It\'s not a question of room. It\'s a question of buoyancy…It\'s clear that there\'s really only enough buoyancy available for one person…She\'s completely out of the water on the raft, and…If he got on with her, they\'d both be half in and half out of the water…And they would have both died of hypothermia\'.',
        zh: '早在2012年，卡梅隆就告诉IGN.com：\'这不是空间的问题。这是浮力的问题……很明显，只够一个人的浮力……她在门板上完全脱离了水面，而且……如果他俩一起，他们都会一半在水里，一半在水外……他们都会死于体温过低\'。'
      }
    ]
  },
  {
    id: 'gk2020-010',
    title: 'Budget Travel Tips',
    cnTitle: '经济旅行贴士',
    description: '本文分享了经济型旅行的实用建议。作者介绍了利用信用卡积分兑换机票、订阅特价航班资讯网站以及选择错峰出行等策略，帮助旅行者在有限预算下实现环游世界的梦想。',
    category: '生活',
    wordCount: 251,
    coverColor: 'bg-blue-500',
    paragraphs: [
      {
        en: 'When I became a budget traveler, I discovered some of the cheapest ways to travel around the world. Don\'t let money problems stop you from traveling. Here are a few ways to travel cheap that can help you see the world on a budget.',
        zh: '当我成为一名经济型旅行者时，我发现了一些环游世界最便宜的旅行方式。不要因为钱的问题而阻碍你旅行。以下是一些廉价旅行的方法，可以帮助你在预算内看世界。'
      },
      {
        en: 'You\'re smart enough to know money doesn\'t grow on trees, but earning credit card points and miles may have you thinking otherwise. Figure out how much money you regularly spend, and consider making those purchases on a travel card, like the Chase Sapphire Preferred Card, so that you have the potential to be rewarded with points and miles every time you swipe. You can redeem these rewards for airfare, hotels and other qualifying expenses.',
        zh: '你应该够聪明，知道树上长不出钱，但信用卡积分和里程可能会让你认为并非如此。弄清楚你经常花多少钱，并考虑用旅行卡购物，比如Chase Sapphire Preferred Card，这样你每次刷卡都有可能获得积分和里程奖励。你可以用这些奖励兑换机票、酒店和其他符合条件的花费。'
      },
      {
        en: 'You may want to subscribe to Scott\'s Cheap Flights. This email newsletter alerts budget travelers when airlines hold sales or mistakenly lower their prices. In the past, Scott\'s Cheap Flights has notified subscribers about amazing deals like a flight from New York to Paris for $260, and a flight from San Francisco to Bali for $364. TheFlightDeal.com and SecretFlying.com are two more sites that may be able to help you find cheap flights.',
        zh: '你可能想订阅斯科特的廉价航班。当航空公司暂停销售或错误地调低价格时，电子邮件简讯会提醒经济型旅客。过去，斯科特廉价航班曾通知订阅者一些让人吃惊的票价，比如从纽约飞往巴黎的航班260美元，从旧金山飞往巴厘岛的航班364美元。TheFlightDeal.com和SecretFlying.com是另外两个可以帮助你找到廉价航班的网站。'
      },
      {
        en: 'It\'s typically easier to find cheap flights when your travel schedule is flexible. Often, you\'ll find the best deals when you travel in the middle of the week or take a red-eye flight overnight. If you\'re prepared to face less-than-idyllic weather, you could save even more money on airfare and hotels by traveling during off-peak seasons.',
        zh: '时机决定一切：当你的旅行日程安排灵活时，通常更容易找到便宜的航班。通常，当你在周中旅行或通宵乘坐红眼航班时，你会发现票价最划算。如果你准备好面对不那么美好的天气，那么在非高峰季节旅行可以节省更多的机票和酒店费用。'
      }
    ]
  },
  {
    id: 'gk2020-011',
    title: 'The Magic Words: Writing for Young Adults',
    cnTitle: '魔法词语：为青少年写作',
    description: '本文探讨了青少年小说的影响力以及克莱因所著《魔语》一书对年轻作家的指导意义。文章指出青少年读物市场蓬勃发展，并强调了作家对年轻读者所负有的社会责任。',
    category: '文化',
    wordCount: 416,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      {
        en: 'The books we read when we\'re young have a special sort of power: they can inspire us to be brave and resilient (Matilda by Roald Dahl), take us on thrilling adventures (Divergent by Veronica Roth) and even introduce us to tragedy (The Bridge to Terabithia by Katherine Paterson). They\'re as formative as anything else in our young lives, and sometimes they\'re the first place we encounter larger-than-life ideas. Consider the lasting cultural import of To Kill a Mockingbird or even the urgency of a newer best seller like I\'ll Give You the Sun, Jandy Nelson\'s 2014 novel centering on a contradictory issue. In The Magic Words, Cheryl B. Klein, an executive editor at Scholastic whose projects include the last two Harry Potter books, sets out to inform would-be writers on how great novels for young readers work.',
        zh: '我们年轻时读的书有一种特殊的力量：它们可以激励我们勇敢而坚韧（罗尔德·达尔的《玛蒂尔达》），带我们进行激动人心的冒险（维罗妮卡·罗斯的《分歧者》），甚至向我们介绍悲剧（凯瑟琳·帕特森的《仙境之桥》）。它们和其中东西一样，存在于我们年轻的生活中，有时它们是我们第一次遇到超越生活的想法。想想《杀死一只知更鸟》持久的文化意义，甚至想想《我会给你太阳》这样一本新畅销书的紧迫性，这本书是简迪·纳尔逊2014年的小说，围绕着一个矛盾的问题。在《魔语》一书中，Scholastic的执行主编谢丽尔·B·克莱因（项目包括最后两本《哈利·波特》）试图让未来的作家了解适合年轻读者的伟大小说是如何运作的。'
      },
      {
        en: 'The market for YA novels is booming: sales in the children\'s and YA sector have been neck and neck with those of adult books in recent years, and adult authors, including Meg Wolitzer (Belzhar) and Carl Hiaasen (Razor Girl), are getting in on the phenomenon. Magic Words aims to be a master class. If you think it sounds silly, it isn\'t. In the era of elevated self-help sensations like Marie Kondo and Brené Brown, The Magic Words is of a piece.',
        zh: '青少年小说市场正在蓬勃发展：近年来，儿童和青少年领域的销量与成人书籍并驾齐驱，包括梅格·沃利策（《瓶中迷境》）和卡尔·希亚森（《剃刀女孩》）在内的成人作家也参与了这一现象。《魔语》目标是成为大师级作品。如果你觉得这听起来很傻，但并不是这样。在近藤麻理惠和布伦内·布朗等自助情绪高涨的时代，《魔语》是一部经典之作。'
      },
      {
        en: 'Klein deconstructs the seemingly obvious (clear plotlines, sympathetic characters) to reveal the technical intricacies of some beloved classics. L. M. Montgomery surely didn\'t whip up Anne of Green Gables as a cash-in endeavor. But for those who want to capitalize, Anne is instructive: what\'s timeless and broadly appealing about Anne—her teenage heart and impulses—is what to examine. Once you understand that, Klein encourages you to get personal: What makes you ideal to write your story? And what does it mean to the reader?',
        zh: '克莱恩解构了看似显而易见的（清晰的情节、富有同情心的人物），揭示了一些深受喜爱的经典作品的技术复杂性。L·M·蒙哥马利肯定不会把《绿山墙的安妮》当作一种赚钱的努力。但对于那些想利用这一点的人来说，安妮很有启发性：安妮青少年时期的内心和冲动是永恒的，也是广泛吸引人的。一旦你明白了，克莱恩鼓励你个人化：是什么让你成为写故事的理想人选？这对读者意味着什么？'
      },
      {
        en: 'On the latter question, The Magic Words is more than a handbook. It is also a timely social commentary on the responsibility YA writers have to young adults. Those who write to a younger demographic must start with an awareness of their readers—not only their age but also how they might connect with the issues, both the mundane (bullies) and the cultural (tolerance) that characters face. The narratives we tell young readers can influence how they understand and value the world around them. The magic isn\'t in the words: it\'s in how the words come together to reflect and affirm the realities of a diverse young-adult experience.',
        zh: '关于后一个问题，《魔语》不仅仅是一本手册，也是对青少年文学作家对年轻人责任的及时社会评论。那些给年轻人写信的人必须从了解读者开始，不仅要了解他们的年龄，还要了解他们如何与角色所面临的世俗（欺凌）和文化（宽容）问题联系起来。我们告诉年轻读者的故事可以影响他们如何理解和重视周围的世界。神奇之处不在于文字：而是文字如何结合在一起，反映和肯定年轻人多样化经历的现实。'
      }
    ]
  },
  {
    id: 'gk2020-012',
    title: 'Adaptive Traffic Signals',
    cnTitle: '自适应交通信号',
    description: '本文介绍了美国华盛顿州贝尔维尤市采用的自适应交通信号灯系统。这种智能信号灯能根据实时交通状况调整红绿灯时长，有效减少通勤时间和成本，代表了城市交通管理的创新方向。',
    category: '科技',
    wordCount: 295,
    coverColor: 'bg-rose-500',
    paragraphs: [
      {
        en: 'The traffic signals along Factoria Boulevard in Bellevue, Washington, generally don\'t flash the same length of green twice in a row, especially at rush hour. At 9:30 am, the full red/yellow/green signal cycle might be 140 seconds. By 9:33 am, a burst of additional traffic might push it to 145 seconds. Less traffic at 9:37 am could push it down to 135. Just like the traffic itself, the timing of the signals changes.',
        zh: '华盛顿贝尔维尤的Factoria Boulevard上的交通信号灯通常不会绿灯连续两次闪烁的时长相同，尤其是在交通高峰期。上午9点30，红/黄/绿信号周期可能为140秒。9点33分，堵车可能会把时间延长至145秒。9点37分车辆较少，可以缩短至135秒。就像交通本身一样，信号灯的时间也会变化。'
      },
      {
        en: 'That is by design. Bellevue, a fast-growing city just east of Seattle, uses a system that is gaining popularity around the US: intersection signals that can adjust in real time to traffic conditions. These lights, known as adaptive signals, have led to significant declines in both the trouble and cost of travels between work and home.',
        zh: '这是特意设计的。贝尔维尤，西雅图东面一个快速增长的城市，使用一套在美国越来越流行的系统：十字路口的信号灯可以根据交通状况实时调整。这些信号灯，称为\'适应性信号灯\'，大大减少了往返于工作和家庭之间的麻烦和成本。'
      },
      {
        en: '\'Adaptive signals can make sure that the traffic demand that is there is being addressed,\' says Alex Stevanovic, a researcher at Florida Atlantic University. For all of Bellevue\'s success, adaptive signals are not a cure-all for jammed road ways. Kevin Balke, a research engineer at the Texas A&M University Transportation Institute, says that while smart lights can be particularly beneficial for some cities, others are so jammed that only a sharp reduction in the number of cars on the road will make a meaningful difference.',
        zh: '佛罗里达大西洋大学研究员亚历克斯·史提瓦诺维奇表示：\'适应性信号灯可以确保满足现有的交通需求。\'尽管贝尔维尤取得了成功，但自适应信号灯并不是解决拥堵道路的万能药。德克萨斯农工大学交通研究所的研究工程师凯文·巴尔克说，虽然智能信号灯对一些城市特别有益，但另一些城市的交通非常拥挤，只有大幅减少道路上的汽车数量才能产生有意义的变化。'
      },
      {
        en: '\'It\'s not going to fix everything, but adaptive signals have some benefits for smaller cities,\' he says. In Bellevue, the switch to adaptive signals has been a lesson in the value of welcoming new approaches. In the past, there was often an automatic reaction to increased traffic: just widen the roads, says Mark Poch, the Bellevue Transportation Department\'s traffic engineering manager. Now he hopes that other cities will consider making their streets run smarter instead of just making them bigger.',
        zh: '他说：\'这不能解决所有问题，但自适应信号灯对小城市有一些好处。\'在贝尔维尤，切换成自适应信号灯已经成了接受新方法的一个有价值的经验。贝尔维尤运输部交通工程经理马克·波奇说，在过去，人们对交通流量增加的自动反应通常是：拓宽道路。现在，他希望其他城市也能考虑让他们的街道更智能，而不仅仅是更宽。'
      }
    ]
  },
  {
    id: 'gk2020-013',
    title: 'Listening Comprehension - Daily Scenarios',
    cnTitle: '听力理解——日常场景',
    description: '这是一组高考英语听力对话脚本，包含五个日常生活场景：商场试衣、夜间乐队练习、办公室聚会筹备、度假计划讨论以及预订航班等情境对话。',
    category: '生活',
    wordCount: 169,
    coverColor: 'bg-violet-500',
    paragraphs: [
      {
        en: 'Text 1: W: Can I help you? M: Yes. I\'d like to try this jacket on, please. W: Okay. The changing rooms are over there.',
        zh: '文本1：购物试衣场景。女士：我能帮您吗？男士：是的，我想试穿这件夹克。女士：好的，试衣间在那边。'
      },
      {
        en: 'Text 2: W: Tom, your music is too loud. M: Our band is practicing for the show, Mom. W: But it\'s already the middle of the night. M: Okay, we\'ll cut it off right away.',
        zh: '文本2：乐队练习噪音场景。女士：汤姆，你的音乐太吵了。男士：妈妈，我们乐队正在为演出排练。女士：但现在已经半夜了。男士：好的，我们马上关掉。'
      },
      {
        en: 'Text 3: M: You look pretty busy. What\'s up? W: We\'re putting together an office party this Friday evening. There\'ll be about 30 people, and I\'m the organizer. M: Nice! But it\'s probably best not to overwork yourself. Enjoy.',
        zh: '文本3：组织办公室聚会场景。男士：你看起来很忙。怎么了？女士：我们在筹备这个周五晚上的办公室聚会。大约30人参加，我是组织者。男士：真棒！但最好不要过度劳累。好好享受吧。'
      },
      {
        en: 'Text 4: W: Hi Henry. Did you say you\'re going to take a vacation next week? M: Actually, I\'m leaving for San Francisco this weekend. W: Cool. But I can\'t get away until the end of August.',
        zh: '文本4：度假计划场景。女士：嗨，亨利。你说过下周要去度假吗？男士：实际上，我这周末就要去旧金山了。女士：太酷了。但我要到八月底才能脱身。'
      },
      {
        en: 'Text 5: M: Donna, have you booked the flight to London for me? W: Sure, Bill. Do you need a ride to the airport? I can do it. M: No, thanks. I will park my car at the airport.',
        zh: '文本5：预订航班场景。男士：唐娜，你帮我订了去伦敦的航班吗？女士：当然，比尔。你需要我送你去机场吗？我可以去。男士：不用了，谢谢。我会把车停在机场。'
      }
    ]
  },
  {
    id: 'gk2020-014',
    title: 'Listening Comprehension - Extended Dialogues',
    cnTitle: '听力理解——扩展对话',
    description: '这是一组高考英语听力长对话脚本，包含四个情境：约会迟到通知、公司员工辞职、赛车比赛赛后采访以及新公寓介绍。对话内容更加详细，涉及更多日常交流细节。',
    category: '生活',
    wordCount: 452,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      {
        en: 'Text 6: M: Hi Lucy. This is Pete. W: Hi. What\'s up? M: Listen, I\'m afraid I\'ll be a little late tonight. Remember I said earlier that I would pick you up at 6:00? Now I\'m going to meet you at about a quarter to seven as there\'s been a problem here at work. W: Okay, don\'t worry. The film begins at 8:00. I\'ll wait. M: Good. Get something to eat before I arrive, okay? W: I will.',
        zh: '文本6：约会迟到通知场景。男士：嗨，露西。我是皮特。女士：嗨，怎么了？男士：听着，今晚我恐怕要迟到了。记得我之前说6点来接你吗？现在我要大约6:45才能到，因为工作上出了点问题。女士：好的，别担心。电影8点开始。我会等的。男士：好。在我到之前吃点东西，好吗？女士：好的。'
      },
      {
        en: 'Text 7: W: Hi Mark. I\'ve decided to leave the company. I had an amazing time here, but it is time for me to move on. M: May I ask why, Cathy? I do hope that you stay with us here. W: Well, you know, I\'ve got a new job in a big engineering firm. It\'s a management position. M: In that case, I think that I understand your decision, and you have my support. W: Thanks for understanding. But, I can work here two more weeks. M: That\'s great. Will you be able to finish your present project? W: Sure. And if you hire someone within ten days, I\'d be happy to provide training in my areas.',
        zh: '文本7：辞职对话场景。女士：嗨，马克。我决定离开公司了。我在这里度过了很棒的时光，但现在是时候继续前进了。男士：我能问问原因吗，凯西？我真的很希望你能留下来。女士：你知道的，我在一家大型工程公司找到了新工作，是管理岗位。男士：那样的话，我理解你的决定，我支持你。女士：谢谢理解。但我还可以再工作两周。男士：太好了。你能完成目前的项目吗？女士：当然。而且如果你在十天内雇到人，我很乐意在我负责的领域提供培训。'
      },
      {
        en: 'Text 8: W: Well done. Congratulations! How are you feeling? M: Tired. I\'m just tired. W: But you did so well to get second place in today\'s car race. M: Well, I came out here aiming for the gold. I got third place last time, and it was not the result I had hoped for. W: What happened today? You were looking extremely good at the start. M: I blew it! The car was a bit out of control. W: Some people might have given up at that point. M: I was determined to do it, to finish the round. W: So, what now? M: Tomorrow\'s going to be tough, much tougher than today. W: Well, I think you showed great determination today. Good luck for tomorrow, and thanks for speaking to us.',
        zh: '文本8：赛车采访场景。女士：做得好。恭喜你！感觉怎么样？男士：累。我只是累了。女士：但你今天赛车获得第二名，表现太好了。男士：我是冲着金牌来的。上次我只得了第三名，那不是我希望的结果。女士：今天发生了什么？你起步时看起来状态极好。男士：我搞砸了！车有点失控。女士：有些人可能在那时候就放弃了。男士：我决心要完成比赛。女士：那么，接下来呢？男士：明天会更艰难，比今天艰难得多。女士：我认为你今天展现出了极大的决心。祝明天好运，谢谢你接受我们的采访。'
      },
      {
        en: 'Text 9: W: So, what is your new apartment like, Terry? M: Oh, it\'s great. There are two bedrooms, a nice kitchen, and a living room. W: Sounds nice. M: Yeah. And there is a grocery store next to the apartment building. And there is a laundry and a fast food restaurant across the street. So it is a quick way to get a meal. W: That\'s good. How much do you pay in rent? M: Well, I have a roommate, so I pay half the rent. That is $275 a month with gas, water, and electricity included. And the Internet and satellite TV are separate. W: That\'s really a wonderful price. How on earth did you find a place like that? M: I just found it online. W: Great!',
        zh: '文本9：新公寓描述场景。女士：那么，你的新公寓怎么样，特里？男士：哦，太棒了。有两间卧室、一个漂亮的厨房和一个客厅。女士：听起来不错。男士：是的。公寓楼旁边有一家杂货店。街对面还有洗衣店和快餐店。所以吃饭很方便。女士：那不错。你付多少房租？男士：我有个室友，所以只付一半房租。每月275美元，包含煤气、水和电费。网络和卫星电视是另外算的。女士：这价格真的很棒。你到底是怎么找到这样的地方的？男士：我在网上找到的。女士：太棒了！'
      }
    ]
  },
  {
    id: 'gk2020-015',
    title: 'Shandong Listening - Everyday Conversations',
    cnTitle: '山东听力——日常对话',
    description: '这是山东新高考I卷第一次英语考试的听力对话脚本，包含五个日常交流场景：商场选购毛衣、讨论去俱乐部的交通方式、一起上书法课、咨询空调退货政策以及度假中查看邮件等情境。',
    category: '生活',
    wordCount: 177,
    coverColor: 'bg-orange-500',
    paragraphs: [
      {
        en: 'Text 1: M: I\'m looking for a plain blue sweater. W: How about this one? M: Yes, that\'s nice. Could I try it on? W: Certainly. The fitting rooms are over there.',
        zh: '文本1：购物场景（找蓝色毛衣）。男士：我在找一件纯蓝色毛衣。女士：这件怎么样？男士：是的，不错。我可以试穿吗？女士：当然可以。试衣间在那边。'
      },
      {
        en: 'Text 2: W: David\'s going to meet us at the club around six. M: Good. How will he get there? I don\'t think driving is a good choice in the rush hour. W: David said he\'ll take the underground. What about us? M: Let\'s go by bike.',
        zh: '文本2：讨论去俱乐部的交通方式。女士：大卫六点左右会在俱乐部和我们见面。男士：好的。他怎么过去？我觉得高峰时段开车不是好选择。女士：大卫说他会乘地铁。我们呢？男士：我们骑自行车去吧。'
      },
      {
        en: 'Text 3: M: Jane, wait a second. I\'m going with you. W: Okay. I\'m going to Professor Wang\'s calligraphy class. M: I know. It\'s in the chemistry building, right? My biology class is in the same building.',
        zh: '文本3：一起去上书法课。男士：简，等一下。我和你一起去。女士：好的。我要去上王教授的书法课。男士：我知道。在化学楼，对吧？我的生物课也在同一栋楼。'
      },
      {
        en: 'Text 4: W: Is there anything else you want? M: No, thank you. By the way, in case there\'s a problem with this air conditioner, can I return it? W: Yes, but you must return it within thirty days. M: Thank you.',
        zh: '文本4：退货政策咨询。女士：您还需要别的吗？男士：不用了，谢谢。顺便问一下，如果这台空调有问题，我可以退货吗？女士：可以，但必须在三十天内退回。男士：谢谢。'
      },
      {
        en: 'Text 5: W: Stop checking emails! We are in the middle of a vacation! M: Okay! One more minute and I\'ll switch it off.',
        zh: '文本5：度假中查看邮件。女士：别查邮件了！我们正在度假呢！男士：好的！再等一分钟，我就关掉。'
      }
    ]
  },
  {
    id: 'gk2020-016',
    title: 'Shandong Listening - Extended Topics',
    cnTitle: '山东听力——扩展话题',
    description: '这是山东新高考I卷第一次英语考试的长对话与独白脚本，包含三个完整话题：旅行社预订西雅图旅行套餐、关于全球食物浪费问题的对话（每年浪费13亿吨食物），以及学校科学博物馆实地考察的通知安排。',
    category: '生活',
    wordCount: 438,
    coverColor: 'bg-teal-500',
    paragraphs: [
      {
        en: 'Text 6: W: Hello, Global Travel Agency. May I help you? M: Hello. Do you have a package tour to Seattle? If you do, how many days will it last? W: Yes, we do. Four days and three nights. It\'s available every Monday and Wednesday. M: Please help me register two people for the tour for this Wednesday. W: I\'m sorry. This Wednesday is already fully booked. It\'s the traveling season, you know. Would you go for next week? M: Okay. Can I book it now? W: Yes, of course. Now, when will you start your holiday, Monday or Wednesday? M: Well, I\'m teaching on Monday. So Wednesday, please.',
        zh: '文本6：旅行社预订西雅图旅行套餐。女士：您好，全球旅行社。有什么可以帮您？男士：您好。你们有去西雅图的旅行套餐吗？如果有，行程多少天？女士：是的，我们有。四天三晚。每周一和周三出发。男士：请帮我登记两个人参加本周三的团。女士：抱歉，本周三已经满了。您知道，现在是旅游旺季。下周可以吗？男士：好的。我现在可以预订吗？女士：当然可以。那么，您想周一开始还是周三开始？男士：我周一要上课。那就周三吧。'
      },
      {
        en: 'Text 8: W: Mike, did you just throw the rest of that bread away? M: Yeah. It was quite a big one, and I couldn\'t finish it. W: You know you shouldn\'t waste food. Do you know how much of the world\'s food is wasted each year? M: Uh… I don\'t know. W: The figure is 1.3 billion tons of food, which is enough to feed a billion hungry people. Where do you think all this food waste comes from? M: Well, restaurants, I imagine. W: No. Restaurants do not contribute most to food waste. In Europe, 53% of food waste comes from households, which amounts to about 88 million tons of food waste a year. M: Wow. I can\'t even believe it. W: A high school student in America has started a campaign on the social media, persuading people to stop wasting food. Up to now, the food waste has been reduced by 25% in her city.',
        zh: '文本8：关于食物浪费的对话。女士：迈克，你刚才把剩下的面包扔了吗？男士：是的。那块挺大的，我吃不完。女士：你知道不应该浪费食物。你知道全球每年浪费多少食物吗？男士：呃……不知道。女士：数字是13亿吨，足够养活10亿饥饿人口。你认为这些浪费的食物主要来自哪里？男士：餐厅吧，我猜。女士：不。餐厅并不是食物浪费的主要来源。在欧洲，53%的食物浪费来自家庭，每年约8800万吨。男士：哇，真不敢相信。女士：美国一名高中生在社交媒体上发起了运动，劝说人们停止浪费食物。到目前为止，她所在城市的食物浪费已经减少了25%。'
      },
      {
        en: 'Text 10: M: Good morning, everybody. Before we start the class today, I need to give you some information about our field trip on the 27th of May. As you know, we\'re spending the day at The Science Museum in London. A coach will pick us up in the school car park. We\'ll leave at 8 o\'clock, so plan to be there at least fifteen minutes before that, 7:45 at the latest. You\'d better set your alarms for 6:30, okay? If you\'ve visited The Science Museum before, you\'ll know that it\'s enormous, and we can\'t possibly see everything in one day. The Welcome Wing has three galleries which deal only with contemporary science. We\'re going to have a guided tour of one of them. We\'ve ordered lunch at the cafe, so we\'ll all meet up there at 12:30. And don\'t be late. We have to go to the cinema at 1:15. I think that\'s all for now. Oh, one last thing. Check out The Science Museum website before we go. The more you read about it, the more interesting the visit will be.',
        zh: '文本10：学校科学博物馆实地考察通知。男士：同学们早上好。今天开始上课前，我需要告诉你们一些关于5月27日实地考察的信息。你们知道，我们要在伦敦科学博物馆度过一天。一辆大巴会在学校停车场接我们。我们8点出发，所以请至少提前15分钟到达，最晚7:45。你们最好把闹钟定在6:30，好吗？如果你以前参观过科学博物馆，你就知道它非常大，我们一天不可能看完所有内容。欢迎翼有三个展厅，只展示当代科学。我们将由导游带领参观其中一个。我们已经在咖啡厅订了午餐，所以12:30在那里集合。不要迟到。我们1:15要去看电影。我想就这些了。哦，还有最后一件事。去之前请浏览科学博物馆的网站。你对它了解越多，参观就会越有趣。'
      }
    ]
  },
  {
    id: 'gk2020-017',
    title: 'Shandong Listening - Second Exam Dialogues',
    cnTitle: '山东听力——第二次考试对话',
    description: '这是山东新高考I卷第二次英语考试的听力对话脚本，包含四个情境对话：收到二手自行车生日礼物、母亲提醒儿子不要熬夜聊天、如果不做律师会选择教书，以及帮助阿姨做厨房工作的提议。',
    category: '生活',
    wordCount: 147,
    coverColor: 'bg-amber-500',
    paragraphs: [
      {
        en: 'Text 1: W: Nice bike! When did you get it? M: My brother gave it to me as a birthday gift last month. It\'s a second-hand bike, but it\'s in good condition.',
        zh: '文本1：关于二手自行车的对话。女士：好漂亮的自行车！你什么时候买的？男士：我哥哥上个月送给我的生日礼物。是一辆二手自行车，但状况很好。'
      },
      {
        en: 'Text 2: W: Don\'t stay up too late chatting with friends, Jimmy. You have to go to school early in the morning. M: Okay. I\'m done chatting, but I have a couple of chapters to read before bed.',
        zh: '文本2：提醒不要熬夜聊天。女士：吉米，别熬夜和朋友聊天了。你早上还要早起上学。男士：好的。我不聊了，但睡前我还有几章要读。'
      },
      {
        en: 'Text 3: M: What would you want to do if you were not working as a lawyer? W: I don\'t know. Teaching, probably. I like to work with kids. M: Me too.',
        zh: '文本3：如果不做律师会做什么。男士：如果你不做律师，你想做什么？女士：不知道。可能是教书吧。我喜欢和孩子们一起工作。男士：我也是。'
      },
      {
        en: 'Text 4: M: Aunt Lucy, can\'t we at least give you a hand with the kitchen? It\'s a lot of work for one person. W: That\'s very kind of you, Jack. But I\'ve hired a girl called Sarah. She\'s coming soon and will do most of the work.',
        zh: '文本4：帮助厨房工作的提议。男士：露西阿姨，我们至少可以帮你做一下厨房的工作吧？一个人做太多了。女士：杰克，你真体贴。但我雇了一个叫萨拉的姑娘。她很快就来了，会做大部分工作。'
      }
    ]
  },

  // ===== 2021 高考英语 =====

{
    id: 'gk2021-001',
    title: "A Visit to Mallorca",
    cnTitle: '马略卡岛之旅',
    description: "这段对话讲述了一位女士上周去马洛卡岛看望朋友，并借此机会练习西班牙语的经历。展现了旅行与友谊的主题。",
    category: '生活',
    wordCount: 35,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: "W: I was in Mallorca last week. M: Oh, what were you doing there? W: My best friend worked there. And I went to visit her. It was a good chance to practice my Spanish.", zh: "女：我上周在马洛卡岛。男：噢，你在那儿干什么？女：我最好的朋友在那里工作。我去看望她。这是一个练习西班牙语的好机会。" }
    ]
  },

  {
    id: 'gk2021-002',
    title: "Submitting a Lab Report",
    cnTitle: '提交实验报告',
    description: "这段对话中，一位男生因患重感冒需去看医生，请同学帮忙将实验报告交给戴维森博士。体现了同学间的互助与关心。",
    category: '教育',
    wordCount: 50,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: "M: Ruth, I've got this terrible cold and I have to see a doctor. I am afraid I can't go to the class. Could you help me hand in my lab report to Dr. Davidson? W: Sure, no problem. Just take care of yourself and don't worry about the class.", zh: "男：露丝，我得了重感冒，得去看医生。恐怕我不能去上课了。你能帮我把实验室报告交给戴维森医生吗？女：当然，没问题。照顾好自己，别担心上课。" }
    ]
  },

  {
    id: 'gk2021-003',
    title: "Kind Childcare Offer",
    cnTitle: '善意托儿服务',
    description: "这段对话中，一位男士主动提出帮玛丽照顾她外出时的孩子，但玛丽表示孩子们已经去了住在附近的奶奶家。",
    category: '生活',
    wordCount: 44,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: "M: Marie, if no one takes care of your children while you're away, Jennifer and I will be glad to have them stay with us. W: That's very kind of you. But they've already left for their Grandma's. You know, Suzy lives close by.", zh: "男：玛丽，如果你不在的时候没有人照顾你的孩子，我和詹妮弗会很高兴让他们和我们住在一起。女：你真是太好了。但他们已经去奶奶家了。你知道，苏西就住在附近。" }
    ]
  },

  {
    id: 'gk2021-004',
    title: "A Storm is Coming",
    cnTitle: '暴风雨即将来临',
    description: "这段对话描述了暴风雨即将来临，一对男女赶紧吃完食物准备回家，男士还帮女士拎购物袋的情景。",
    category: '生活',
    wordCount: 39,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: "M: Hurry up with your food, Sally. They say there's a big storm coming. We'd better get home before that. W: Okay, I'm done. Let's get back to the car. Could you carry these shopping bags? M: Oh, sure.", zh: "男：莎莉，快点吃吧。他们说暴风雨要来了。我们最好在那之前回家。女：好了，我吃完了。我们回到车上去。你能帮我拿这些购物袋吗？男：哦，当然。" }
    ]
  },

  {
    id: 'gk2021-005',
    title: "Removing Kitchen Odors",
    cnTitle: '去除厨房异味',
    description: "这段对话中，男士抱怨厨房炸鱼后残留异味，女士建议用咖啡渣放在小碗里来吸附去除厨房中的难闻气味。",
    category: '生活',
    wordCount: 47,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: "M: We deep fried fish three days ago in the kitchen, but the unpleasant smell stays. W: There is a method you can try. Every time you make coffee, dry the leftover coffee grounds and keep them in small bowls, then place the bowls in the kitchen.", zh: "男：我们三天前在厨房里炸过鱼，但是难闻的味道一直没有消失。女：有一种方法你可以试试。每次煮咖啡时，把剩下的咖啡渣擦干，放在小碗里，然后把碗放在厨房里。" }
    ]
  },

  {
    id: 'gk2021-006',
    title: "Football Fan Gomez",
    cnTitle: '足球迷戈麦斯',
    description: "这段对话围绕足球迷戈麦斯展开，他分享了自己去现场看球的热情以及票价情况，两人还相约以后一起去看比赛。",
    category: '生活',
    wordCount: 82,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      { en: "W: Are you a football fan, Gomez? M: Yes, I go to the stadium whenever there's a good game, and if I can't get a ticket, I watch the game on TV. That way, they are less exciting, though.", zh: "女：你是足球迷吗，戈麦斯？男：是的，只要有精彩比赛我就去体育场，如果买不到票，我就在电视上看。不过那样就没那么刺激了。" },
      { en: "W: Is the ticket expensive? M: It depends. It usually costs about 20 to 50 dollars. Last time I paid 25. W: That's not very expensive. Maybe we can go together some time. M: Great! It'll be more fun to watch a game with a friend.", zh: "女：票贵吗？男：看情况。通常20到50美元。上次我花了25美元。女：那不算贵。也许我们什么时候可以一起去。男：太好了！和朋友一起看比赛会更有趣。" }
    ]
  },

  {
    id: 'gk2021-007',
    title: "A Walk in the Woods",
    cnTitle: '林中漫步',
    description: "这段对话中，男士描述了自己在树林里长达四小时的散步经历。他闻花香、看鸟、摘树叶做书签，还在湖边遇到钓鱼的朋友，期间拍了很多照片。",
    category: '生活',
    wordCount: 118,
    coverColor: 'bg-orange-500',
    paragraphs: [
      { en: "W: What did you do this afternoon? M: I went for a walk in the woods. W: You walked for four hours? M: Actually, walking wasn't that boring. Walking in the woods was a great adventure. Your feet can take you to the most amazing places.", zh: "女：你今天下午做了什么？男：我去树林里散步了。女：你走了四个小时？男：其实，散步并不是那么无聊。在树林里散步是一次大冒险。你的脚可以带你去最神奇的地方。" },
      { en: "W: What did you do in the woods? M: I smelled the flowers and looked at the birds. And I picked lots of leaves. I'll use them as bookmarks. Look! W: They are beautiful!", zh: "女：你在树林里做了什么？男：我闻了闻花，看了看鸟。而且我摘了许多树叶。我要用它们做书签。你看！女：它们真漂亮！" },
      { en: "M: Then I met Bob at the lake. He was fishing while his children were swimming. W: Did you talk to him? M: No, I kept on walking and took many pictures. There was so much to see.", zh: "男：然后我在湖边遇到了鲍勃。他在钓鱼，而他的孩子们在游泳。女：你和他聊天了吗？男：没有，我继续走了，并且拍了很多照片。那里有那么多东西可以看。" }
    ]
  },

  {
    id: 'gk2021-008',
    title: "David's Holiday Plans",
    cnTitle: '大卫的假期计划',
    description: "这段对话中，大卫分享了他从12岁开始制定的人生愿望清单，已经完成了近一半，包括爬富士山和乘热气球。他还计划去澳大利亚深海潜水，并收到了朋友关于亚马逊探险的建议。",
    category: '生活',
    wordCount: 184,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: "W: David, how was your holiday? M: Great, I climbed Mount Fuji. It was really beautiful. Now I can check one more thing off my list. W: Your list? M: Yes. When I was 12, I made a list of things I wanted to do some day.", zh: "女：大卫，你假期过得怎么样？男：好极了，我爬了富士山。真的很漂亮。现在我可以从清单上再划掉一件事。女：你的清单？男：是的。当我12岁的时候，我列了一张清单，上面写着我有朝一日想做的事情。" },
      { en: "W: That's interesting. How many of the things on your list have you done so far? M: Almost half. I have pictures. Would you like to see them? W: Yes, sure. M: Here I am on top of Mount Fuji. And here I am in a hot air balloon.", zh: "女：那很有趣。到目前为止，你清单上的事情做了多少？男：差不多一半。我有照片。你想看看吗？女：当然。男：我在富士山顶。我在热气球里。" },
      { en: "W: When did you do that? I've always wanted to go up in a hot air balloon. M: It was two years ago, in August, in California. W: What are your plans for the next holiday? M: I'm thinking of deep-sea diving in Australia. Do you have any other suggestions?", zh: "女：你什么时候做的？我一直想乘热气球上去。男：那是两年前的八月，在加利福尼亚。女：你下个假期有什么计划？男：我想去澳大利亚做深海潜水。你还有别的建议吗？" },
      { en: "W: You really ought to take a boat down the Amazon. You'll see a lot of interesting animals and beautiful trees. It's one of the best places I've been to. M: OK. I'll put it on my list.", zh: "女：你真的应该乘船去亚马逊河。你会看到许多有趣的动物和美丽的树木。这是我去过的最好的地方之一。男：好的。我会把它放在我的清单上。" }
    ]
  },

  {
    id: 'gk2021-009',
    title: "A Ride to the Conference",
    cnTitle: '搭车去参加会议',
    description: "这段对话中，莎拉发现自己的车发动不起来了，而丈夫又在外地出差，于是她请迈克尔明天早上载她去谢尔顿饭店参加会议。两人约定了出发时间，并商量了返程安排。",
    category: '生活',
    wordCount: 170,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: "W: Hello, Michael. M: Hi, Sarah. W: Are you attending the conference tomorrow morning at the Shelton Hotel? M: Yes. Are you? W: Yeah, but when I arrived home five minutes ago, I found that my car wouldn't start. And John is in Brighton on business.", zh: "女：你好，迈克尔。男：嗨，莎拉。女：你明天上午在谢尔顿饭店参加会议吗？男：是的。你是吗？女：是的，但是五分钟前我到家时，发现我的车发动不起来。约翰在布莱顿出差。" },
      { en: "M: Do you know what's wrong with the car? W: I'm not exactly sure. I think there is a problem with the engine. Err... I wonder if you could give me a ride to the hotel tomorrow morning. M: Sure. When shall I be at your place?", zh: "男：你知道这车怎么了吗？女：我不太确定。我想发动机有问题。呃……我想知道你明天早上能不能载我去旅馆。男：当然。我什么时候到你家？" },
      { en: "W: Well, what about 8:00? From my place to Shelton, we have to drive through the quarters, so we'd better leave early to avoid the traffic. M: OK. No problem. It takes twenty minutes to reach your place. So I'll set off at 7:40. By the way, do you also need me to drive you home tomorrow afternoon?", zh: "女：那么，8点怎么样？从我家到谢尔顿，我们得开车穿过市区，所以我们最好早点离开以免交通堵塞。男：好的。没问题。到你家要二十分钟。所以我7:40出发。顺便问一下，你明天下午还需要我开车送你回家吗？" },
      { en: "W: No, John will be back then, and he'll get me home. Thank you, Michael. M: That's okay. See you tomorrow.", zh: "女：不，约翰那时会回来，他会送我回家。谢谢你，迈克尔。男：没关系。明天见。" }
    ]
  },

  {
    id: 'gk2021-010',
    title: "How to Improve Your Pronunciation",
    cnTitle: '如何改善发音',
    description: "这段独白围绕如何提高英语发音展开。演讲者指出发音和流利度是口语中最大的障碍，并建议找出自己发音错误的单词、听专家发音、查字典确认，以及每天大声朗读来练习。",
    category: '教育',
    wordCount: 164,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: "W: Hello, everyone. Today I'll talk about how to improve your pronunciation. Language researchers say pronunciation and fluency are the biggest barriers, followed by grammar, in effective spoken English. However, most people don't regard pronunciation as a very important part of communication skills. They're more focused on vocabulary.", zh: "女：大家好。今天我要谈谈如何提高你的发音。语言研究人员说，在有效的英语口语中，发音和流利是最大的障碍，其次是语法。然而，大多数人并不认为发音是沟通技巧的重要组成部分。他们更注重词汇。" },
      { en: "One reason is that most people are not even aware of their mispronunciations. So it's important to first find out the words you mispronounce. You should listen to experts, by experts, I mean those who are less likely to make pronunciation mistakes.", zh: "一个原因是大多数人甚至没有意识到自己的发音错误。所以首先找出你读错的单词是很重要的。你应该听专家的话，所谓专家，我指的是那些不太可能犯发音错误的人。" },
      { en: "When listening to them, pay attention to words that sound strange, strange because you pronounce the same words differently. When you come across such words, check a dictionary to confirm their exact pronunciations. You can also search for difficult-to-pronounce words and names, and make a list of them.", zh: "在听的时候，要注意那些听起来很奇怪的单词，因为你对同一个单词的发音不同。当你遇到这样的词时，查字典确认它们的准确发音。您还可以搜索难发音的单词和名称，并列出它们的列表。" },
      { en: "The last suggestion is to read aloud. Now you've got the correct pronunciations of the words, it's time to practice reading them every day.", zh: "最后一个建议是大声朗读。现在你已经掌握了单词的正确发音，是时候每天练习阅读了。" }
    ]
  },

  {
    id: 'gk2021-011',
    title: "Rome Hostels: A Budget Traveler's Guide",
    cnTitle: '罗马青年旅社：预算旅行者指南',
    description: "这篇文章介绍了罗马四家适合背包客和预算旅行者的旅社。每家旅社各有特色，从性价比高的Yellow Hostel到社交氛围浓厚的Alessandro Palace，再到干净现代的Youth Station以及安静私密的Des Artistes，为不同需求的游客提供了多样选择。",
    category: '生活',
    wordCount: 258,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: "Rome can be pricey for travelers, which is why many choose to stay in a hostel. The hostels in Rome offer a bed in a dorm room for around $25 a night, and for that, you'll often get to stay in a central location with security and comfort.", zh: "罗马对旅行者来说可能很贵，这就是为什么许多人选择住旅社的原因。罗马的旅社提供宿舍床位，每晚约25美元，而且通常可以住在安全舒适的中心位置。" },
      { en: "If I had to make just one recommendation for where to stay in Rome, it would be Yellow Hostel. It's one of the best-rated hostels in the city, and for good reason. It's affordable, and it's got a fun atmosphere without being too noisy. As an added bonus, it's close to the main train station.", zh: "如果我只能推荐一个罗马住宿的地方，那就是Yellow Hostel。它是该市评分最高的旅社之一，这是有原因的。它价格实惠，氛围有趣但不吵闹。还有一个额外的好处，它靠近主要的火车站。" },
      { en: "If you love social hostels, this is the best hostel for you in Rome. Hostel Alessandro Palace is fun. Staff members hold plenty of bar events for guests like free shots, bar crawls and karaoke. There's also an area on the rooftop for hanging out with other travelers during the summer.", zh: "如果你喜欢社交型旅社，这是罗马最适合你的旅社。Alessandro Palace旅社很有趣。工作人员为客人举办许多酒吧活动，如免费酒水、酒吧巡游和卡拉OK。屋顶还有一个区域，夏天可以和其他旅行者一起 hang out。" },
      { en: "If you're looking for cleanliness and a modern hostel, look no further than Youth Station. It offers beautiful furnishings and beds. There are plenty of other benefits, too; it doesn't charge city tax; it has both air conditioning and a heater for the rooms; it also has free Wi-Fi in every room.", zh: "如果你在寻找干净现代的旅社，那就非Youth Station莫属。它提供漂亮的家具和床铺。还有很多其他好处：不收城市税；房间里既有空调又有暖气；每个房间还有免费Wi-Fi。" },
      { en: "Hotel and Hostel Des Artistes is more like a small independent hotel. It is clean and has a kitchen. It doesn't have the atmosphere or the crowd of a hostel, which is great if you want some peace and quiet. However, you need to pay 2 euros a day for Wi-Fi.", zh: "Des Artistes酒店旅社更像一家小型独立酒店。它很干净，还有厨房。它没有旅社的氛围和人群，如果你想要一些宁静，这很好。不过，你需要每天支付2欧元才能使用Wi-Fi。" }
    ]
  },

  {
    id: 'gk2021-012',
    title: "The Page Turner: An Unsung Hero of the Stage",
    cnTitle: '翻页员：舞台上无名英雄',
    description: "这篇文章讲述了律师罗伯特·蒂特顿兼职为钢琴家翻乐谱的独特工作。看似简单的翻页其实需要高超技巧，包括精准时机、无声沟通和应对突发状况，文章还展现了钢琴家与翻页者之间的默契与信任。",
    category: '文化',
    wordCount: 297,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: "Robert Titterton is a lawyer by day, but when he's not in court, he's often on stage, sitting next to pianist Maria Raspopova. He turns the pages of her sheet music. \"I'm not a trained musician, but I've learnt to read music so I can help Maria in her performance,\" Titterton said.", zh: "罗伯特·蒂特顿白天是一名律师，但当他不在法庭时，他经常在舞台上坐在钢琴家玛丽亚·拉斯波娃旁边。他为她翻乐谱。\"我不是受过训练的音乐家，但我学会了识谱，这样我就能在演奏中帮助玛丽亚，\"蒂特顿说。" },
      { en: "Titterton is a page turner. He makes sure the pianist has the right music page in front of her at the right time. It might sound easy, but Titterton says it's not. \"A lot of skills are needed for the job. You have to make sure you don't turn two pages at once and make sure you find the repeats in the music when you have to go back to the right spot.\"", zh: "蒂特顿是一名翻页者。他确保钢琴家在正确的时间面前有正确的乐谱页。这听起来很容易，但蒂特顿说并非如此。\"这项工作需要很多技巧。你必须确保你不会一次翻两页，并确保在需要回到正确位置时找到音乐中的重复段落。\"" },
      { en: "Being a page turner requires plenty of practice. Some pieces of music can go for 40 minutes and require up to 50 page turns, including back turns for repeat passages. Silent onstage communication is key, and each pianist has their own style of \"nodding\" to indicate a page turn which they need to practise with their page turner.", zh: "成为一名翻页者需要大量练习。有些乐曲可以长达40分钟，需要多达50次翻页，包括重复段落的回翻。无声的舞台沟通是关键，每位钢琴家都有自己独特的\"点头\"风格来示意翻页，这需要他们与翻页者一起练习。" },
      { en: "But like all performances, there are moments when things go wrong. \"I was turning the page to get ready for the next page, but the draft wind from the turn caused the spare pages to fall off the stand,\" Mr Titterton said, \"Luckily I was able to catch them and put them back.\"", zh: "但就像所有表演一样，总有出错的时刻。\"我正在翻页准备下一页，但翻页时的气流把备用纸张吹落了谱架，\"蒂特顿先生说，\"幸运的是我抓住了它们并放了回去。\"" },
      { en: "Most page turners are piano students or up-and-coming concert pianists, although Ms Raspopova has once asked her husband to help her out on stage. \"My husband is the worst page turner,\" she laughed. \"He's interested in the music, feeling every note, and I have to say: 'Turn, turn!' Robert is the best page turner I've had in my entire life.\"", zh: "大多数翻页者是钢琴学生或崭露头角的音乐会钢琴家，尽管拉斯波娃女士曾请她丈夫上台帮忙。\"我丈夫是最糟糕的翻页者，\"她笑道。\"他对音乐很感兴趣，感受每一个音符，我不得不喊着：'翻，翻！'罗伯特是我一生中遇到过的最好的翻页者。\"" }
    ]
  },

  {
    id: 'gk2021-013',
    title: "The Federal Duck Stamp: A Conservation Success Story",
    cnTitle: '联邦鸭票：保护成功案例',
    description: "这篇文章回顾了美国联邦鸭票计划的历史与成效。从探险家对北美水禽栖息地的破坏，到1934年《候鸟狩猎邮票法》的出台，再到鸭票收入用于保护湿地和栖息地，文章展示了这一被誉为最成功的环保项目之一的伟大成就。",
    category: '环境',
    wordCount: 267,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: "When the explorers first set foot upon the continent of North America, the skies and lands were alive with an astonishing variety of wildlife. Native Americans had taken care of these precious natural resources wisely. Unfortunately, it took the explorers and the settlers who followed only a few decades to decimate a large part of these resources.", zh: "当探险家第一次踏上北美大陆时，天空和大地充满了各种令人惊奇的野生动物。美洲原住民明智地保护了这些珍贵的自然资源。不幸的是，探险家和随后的定居者仅用了几十年就摧毁了大部分资源。" },
      { en: "Millions of waterfowl were killed at the hands of market hunters and a handful of overly ambitious sportsmen. Millions of acres of wetlands were dried to feed and house the ever-increasing populations, greatly reducing waterfowl habitat.", zh: "数百万水禽被市场猎人和少数过于雄心勃勃的运动员猎杀。数百万英亩湿地被抽干，以养活和安置不断增长的人口，大大减少了水禽栖息地。" },
      { en: "In 1934, with the passage of the Migratory Bird Hunting Stamp Act, an increasingly concerned nation took firm action to stop the destruction of migratory waterfowl and the wetlands so vital to their survival. Under this Act, all waterfowl hunters 16 years of age and over must annually purchase and carry a Federal Duck Stamp.", zh: "1934年，《候鸟狩猎邮票法》通过，一个日益担忧的国家采取了坚定行动，阻止对候鸟水禽和对其生存至关重要的湿地的破坏。根据该法案，所有16岁及以上的水禽猎人都必须每年购买并携带一张联邦鸭票。" },
      { en: "The very first Federal Duck Stamp was designed by J.N. \"Ding\" Darling, a political cartoonist from Des Moines, Iowa, who at that time was appointed by President Franklin Roosevelt as Director of the Bureau of Biological Survey. Hunters willingly pay the stamp price to ensure the survival of our natural resources.", zh: "第一张联邦鸭票由J.N.\"Ding\" Darling设计，他是来自爱荷华州得梅因的政治漫画家，当时被富兰克林·罗斯福总统任命为生物调查局局长。猎人自愿支付鸭票价格，以确保我们自然资源的生存。" },
      { en: "About 98 percent of every duck stamp dollar goes directly into the Migratory Bird Conservation Fund to purchase wetlands and wildlife habitat for inclusion into the National Wildlife Refuge System. Since 1934, better than half a billion dollars has gone into that Fund to purchase more than 5 million acres of habitat. Little wonder the Federal Duck Stamp Program has been called one of the most successful conservation programs ever initiated.", zh: "大约98%的鸭票收入直接进入候鸟保护基金，用于购买湿地和野生动物栖息地，并将其纳入国家野生动物保护区系统。自1934年以来，超过5亿美元进入该基金，购买了超过500万英亩的栖息地。难怪联邦鸭票计划被称为有史以来最成功的保护项目之一。" }
    ]
  },

  {
    id: 'gk2021-014',
    title: "Emotional Intelligence: Beyond Popular Myths",
    cnTitle: '情商：超越流行迷思',
    description: "这篇文章探讨了情商概念在普及过程中被曲解的问题。作者指出情商并非道德或人格的同义词，而是一套可被用于善恶两种目的的特定技能。文章还肯定了情商普及的积极影响，并呼吁更多科学研究来深化对情感的理解。",
    category: '社会',
    wordCount: 287,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      { en: "Popularization has in some cases changed the original meaning of emotional intelligence. Many people now misunderstand emotional intelligence as almost everything desirable in a person's makeup that cannot be measured by an IQ test, such as character, motivation, confidence, mental stability, optimism and \"people skills.\" Research has shown that emotional skills may contribute to some of these qualities, but most of them move far beyond skill-based emotional intelligence.", zh: "情商概念的普及在某些情况下改变了其原始含义。如今，许多人将情商误解为人身上几乎所有无法通过智商测试衡量的理想品质，如性格、动机、信心、心理稳定、乐观主义和\"人际交往技巧\"。研究表明，情感技能可能有助于形成这些品质，但大部分品质远非基于技能的情商所能涵盖。" },
      { en: "We prefer to describe emotional intelligence as a specific set of skills that can be used for either good or bad purposes. The ability to accurately understand how others are feeling may be used by a doctor to find how best to help her patients, while a cheater might use it to control potential victims. Being emotionally intelligent does not necessarily make one a moral person.", zh: "我们更倾向于将情商描述为一套用途可好可坏的特定技能。准确理解他人感受的能力可能被医生用来发现如何最好地帮助病人，而骗子可能会用它来控制潜在受害者。情商高不一定使人有道德。" },
      { en: "Although popular beliefs regarding emotional intelligence run far ahead of what research can reasonably support, the overall effects of the publicity have been more beneficial than harmful. The most positive aspect of this popularization is a new and much needed emphasis on emotion by employers, educators and others interested in promoting social well-being.", zh: "尽管大众对情商的认知远远超前于研究能够合理支持的范围，但宣传的整体效果利大于弊。普及最积极的方面是雇主、教育工作者和其他有兴趣促进社会福祉的人对情感给予了新的、迫切需要的重视。" },
      { en: "The popularization of emotional intelligence has helped both the public and researchers re-evaluate the functionality of emotions and how they serve people adaptively in everyday life. Although the continuing popular appeal of emotional intelligence is desirable, we hope that such attention will excite a greater interest in the scientific and scholarly study of emotion.", zh: "情商的普及帮助公众和研究人员重新评估情感的功能，以及情感如何在日常生活中适应性地为人们服务。尽管情商持续受到大众欢迎是可取的，但我们希望这种关注能激发人们对情感的科学和学术研究的更大兴趣。" },
      { en: "It is our hope that in coming decades, advances in science will offer new perspectives from which to study how people manage their lives. Emotional intelligence, with its focus on both head and heart, may serve to point us in the right direction.", zh: "我们希望在未来几十年里，科学的进步能提供新的视角来研究人们如何管理自己的生活。情商关注头脑与心灵，或许能为我们指明正确的方向。" }
    ]
  },

  {
    id: 'gk2021-015',
    title: "My First Job at a Baking Factory",
    cnTitle: '我在烘焙厂的第一份工作',
    description: "这篇文章回忆了作者中学时在一家烘焙厂做临时工的经历。作者描述了在流水线上制作兔子蛋糕的高强度工作，以及父亲借此机会教导她要珍惜劳动所得、尊重劳动者的深刻人生道理。",
    category: '教育',
    wordCount: 209,
    coverColor: 'bg-orange-500',
    paragraphs: [
      { en: "My life as a tax-paying employed person began in middle school, when, for three whole days, I worked in a baking factory.", zh: "我作为纳税人的工作生活从中学开始，当时整整三天，我在一家烘焙厂工作。" },
      { en: "My best friend Betsy's father was a manager at Hough Bakeries, which, at Easter time, made little bunny cakes for all its stores throughout Cleveland. It happened that the plant downtown needed eight kids for temporary help during our spring break, for which I had no plans beyond listening to my favorite records. I'd earn minimum wage. I'd see how a factory worked. My parents thought all of this was a grand idea and called Betsy's dad with their permission.", zh: "我最好的朋友贝琪的父亲是霍夫面包店的经理，复活节时，这家工厂为克利夫兰所有分店制作小兔子蛋糕。市中心的工厂在春假期间需要八个孩子临时帮忙，我除了听喜欢的唱片外没有其他计划。我会挣最低工资，看看工厂如何运作。父母觉得这是个好主意，并征得同意后给贝琪的爸爸打了电话。" },
      { en: "Our roles in the factory were simple: Place cakes on a moving belt. Attach icing ears. Apply icing eyes and nose. Remove bunny from the belt. This was harder than it sounds. Slow down a bit and the cakes pile up. As I told my parents at dinner that first night, it was all a little more high-pressure than I'd expected.", zh: "我们在工厂的角色很简单：把蛋糕放在传送带上，加上糖霜耳朵、眼睛和鼻子，然后把兔子蛋糕从传送带上取下来。这比听起来更难——慢一点蛋糕就会堆积。第一天晚上我告诉父母，这比我想象的压力更大。" },
      { en: "Dad smiled. The son of a grocer, he'd spent the summers of his childhood delivering food in Bernardsville, New Jersey. This was the sort of work that made you appreciate the dollars you earned and respect those who did the work, he told me.", zh: "爸爸笑了，他是一个杂货商的儿子，童年夏天都在新泽西州伯纳兹维尔送货。他告诉我，这种工作让你珍惜挣到的钱并尊重劳动者。" }
    ]
  },

  {
    id: 'gk2021-016',
    title: "A Week in Paris: Living Like a Local",
    cnTitle: '巴黎一周：像当地人一样生活',
    description: "这篇文章讲述了一对夫妇在巴黎一周的旅居体验。他们租了一个小公寓，试图像真正的巴黎人一样生活，期间发现了巴黎人对生活质量的追求——美食、慢节奏和悠闲的咖啡馆文化，以及法国人对35小时工作周的认真态度。",
    category: '文化',
    wordCount: 257,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: "My husband and I just spent a week in Paris. So the first thing we did was rent a fantastically expensive sixth-floor apartment the size of a cupboard. It was so tiny that we had to leave our suitcases in the hallway.", zh: "我和丈夫刚刚在巴黎待了一周。所以我们做的第一件事就是租了一个贵得离谱的六楼小公寓，只有壁橱那么大。它太小了，我们不得不把行李箱放在走廊里。" },
      { en: "The place wasn't entirely authentic, though. Unlike a normal Parisian apartment, the plumbing worked. Our building even had a tiny lift with a female voice that said, \"Ouverture des portes,\" in perfect French. That is the only French phrase I mastered, and it's a shame I don't have much use for it.", zh: "不过，这个地方并不完全正宗。与普通的巴黎公寓不同，这里的水管能用。我们这栋楼甚至有一个小电梯，里面有个女声用完美的法语说\"Ouverture des portes（开门）\"。这是我唯一掌握的法语短语，可惜我不太有机会用到它。" },
      { en: "Parisians are different from you and me. They never look lazy or untidy. As someone noted in this paper a couple of weeks ago, they eat great food and never gain weight. French strawberries do not taste like cardboard. Instead, they explode in your mouth like little flavor bombs.", zh: "巴黎人与你我不同。他们看起来从不邋遢。正如几周前有人在这篇文章中指出的，他们吃得好却不发胖。法国草莓尝起来不像纸板，而是在你嘴里像小炸弹一样爆开。" },
      { en: "On our first morning in Paris, I went around the corner to the food market to pick up some groceries. I bought a handful of perfectly ripe small strawberries and a little sweet melon. My husband and I agreed they were the best fruit we had ever eaten. But they cost $18!", zh: "在巴黎的第一个早晨，我去街角的食品市场买了一些杂货。我买了一把熟透的小草莓和一点甜甜瓜。我和丈夫一致认为它们是我们吃过的最好的水果。但它们花了18美元！" },
      { en: "In France, quality of life is much more important than efficiency. You can tell this by cafe life. French cafes are always crowded. When do these people work? The French take their 35-hour workweek seriously — so seriously that some labor unions recently struck a deal with a group of companies limiting the number of hours that independent contractors can be on call.", zh: "在法国，生活质量比效率重要得多。从咖啡馆生活就能看出这一点。法国咖啡馆总是挤满了人。这些人什么时候工作呢？法国人认真对待他们的35小时工作周——认真到一些工会最近与一群公司达成协议，限制独立承包商待命的小时数。" }
    ]
  },

  {
    id: 'gk2021-017',
    title: "Take a View: Britain's Photographic Competition",
    cnTitle: '欣赏风景：英国摄影比赛',
    description: "这篇文章介绍了\"Take a View\"这一英国风景摄影比赛。比赛对所有人开放，设有四个类别，今年的评委是著名摄影师Peter Lik，获奖作品将在伯明翰摄影展和户外展览中展出，截止日期为2017年1月15日。",
    category: '文化',
    wordCount: 162,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: "Take a View is a remarkable photographic competition, which sets out to showcase Britain's natural beauty. The competition is open to all, and the challenge is to find fresh and imaginative ways of photographing landscapes.", zh: "\"Take a View\"是一项非凡的风景摄影比赛，旨在展示英国的自然美景。比赛对所有人开放，挑战在于寻找新颖而富有想象力的方式来拍摄风景。" },
      { en: "This year's competition has four categories: Classic View, Your View, Urban View, and Black and White. The winners of each category will each receive £1,000, with £500 for second place and £250 for third. There is also a £1,000 special prize for a young photographer aged 18 or under.", zh: "今年的比赛有四个类别：经典视角、你的视角、城市视角和黑白。每个类别的获奖者将获得1000英镑奖金，亚军500英镑，季军250英镑。18岁及以下的年轻摄影师还将获得1000英镑特别奖。" },
      { en: "This year's judge is the well-known landscape photographer Peter Lik. Peter will be looking for images that show a new angle on a familiar subject, or a new approach to a landscape. He is also keen to see images that show a deep understanding of the subject.", zh: "今年的评委是著名风景摄影师Peter Lik。Peter将寻找那些对熟悉主题展现新角度或对风景有新处理方式的图像。他也希望看到能体现对主题深刻理解的图像。" },
      { en: "Winning images will be on show at The Photography Show in Birmingham from 16 to 19 March 2017, and then at a major outdoor exhibition. The closing date for entries is 15 January 2017. For more information, visit our website.", zh: "获奖作品将于2017年3月16日至19日在伯明翰摄影展上展出，随后将在大型户外展览中展出。投稿截止日期为2017年1月15日。欲了解更多信息，请访问我们的网站。" }
    ]
  },

  {
    id: 'gk2021-018',
    title: "A Rare Black Rhino Born at Port Lympne Reserve",
    cnTitle: '林姆尼港保护区出生的稀有黑犀牛',
    description: "这篇文章报道了林普恩港保护区迎来一头稀有黑犀牛幼崽诞生的喜讯。这头小犀牛健康强壮，但黑犀牛全球仅存约5500头，处于极度濒危状态。保护区自运营繁育项目以来已迎来第40头黑犀牛幼崽。",
    category: '环境',
    wordCount: 248,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: "Port Lympne Reserve, which runs a breeding programme, has welcomed the arrival of a rare black rhino calf. When the tiny creature arrived on January 31, she became the 40th black rhino to be born at the reserve. And officials at Port Lympne were delighted with the new arrival, especially as black rhinos are known for being difficult to breed in captivity.", zh: "运营着繁育项目的林普恩港保护区迎来了一头稀有黑犀牛幼崽。当这头小生物于1月31日出生时，她成为保护区诞生的第40头黑犀牛。林普恩港的官员们对这位新成员的到来感到欣喜，尤其是因为黑犀牛以难以在圈养环境中繁殖而闻名。" },
      { en: "Paul Beer, head of rhino section at Port Lympne, said: \"Obviously we're all absolutely delighted to welcome another calf to our black rhino family. She's healthy, strong and already eager to play and explore. Her mother, Solio, is a first-time mum and she is doing a fantastic job. It's still a little too cold for them to go out into the open, but as soon as the weather warms up, I have no doubt that the little one will be out and about exploring and playing every day.\"", zh: "林普恩港犀牛部门负责人保罗·比尔说：\"显然，我们都非常高兴欢迎另一头幼崽加入我们的黑犀牛大家庭。她健康、强壮，而且已经渴望玩耍和探索。她的母亲索里奥是第一次当妈妈，她做得非常出色。现在对她们来说出去还有点冷，但一旦天气变暖，我毫不怀疑这头小家伙每天都会出去探索和玩耍。\"" },
      { en: "The adorable female calf is the second black rhino born this year at the reserve, but it is too early to tell if the calves will make good candidates to be returned to protected areas of the wild. The first rhino to be born at Port Lympne arrived on January 5 to first-time mother Kisima and weighed about 32 kg. His mother, grandmother and great grandmother were all born at the reserve and still live there.", zh: "这头可爱的雌性幼崽是今年保护区出生的第二头黑犀牛，但现在判断这些幼崽是否适合被送回野生保护区还为时过早。林普恩港出生的第一头犀牛于1月5日来到第一次当母亲的基西玛身边，重约32公斤。他的母亲、祖母和曾祖母都出生在保护区，并且仍然住在那里。" },
      { en: "According to the World Wildlife Fund, the global black rhino population has dropped as low as 5500, giving the rhinos a \"critically endangered\" status.", zh: "根据世界自然基金会的数据，全球黑犀牛数量已降至5500头左右，使犀牛处于\"极度濒危\"状态。" }
    ]
  },

  {
    id: 'gk2021-019',
    title: "Southbank: A Skater's Home Away from Home",
    cnTitle: '南岸：滑板者的第二个家',
    description: "这篇文章讲述了作者从洛杉矶搬到伦敦后在Southbank滑板区找到归属感的故事。从九岁时发现滑板文化、学会\"Safe\"这个独特俚语，到十五岁搬去华盛顿放弃滑板，再到成年后重返故地，Southbank见证了作者的成长与身份认同。",
    category: '社会',
    wordCount: 316,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: "When I was 9, we packed up our home in Los Angeles and arrived at Heathrow, London on a gray January morning. Everyone in the family settled quickly into the city except me. Without my beloved beaches and endless blue-sky days, I felt at a loss and out of place. Until I made a discovery.", zh: "我9岁时，我们收拾好在洛杉矶的家，在一个灰暗的一月早晨抵达伦敦希思罗机场。家里每个人都很快适应了城市生活，除了我。没有我钟爱的海滩和无尽的蓝天，我感到迷茫和格格不入。直到我发现了一个地方。" },
      { en: "Southbank, at an eastern bend in the Thames, is the center of British skateboarding, where the continuous crashing of skateboards left your head ringing. I loved it. I soon made friends with the local skaters. We spoke our own language. And my favorite: Safe. Safe meant cool. It meant hello. It meant don't worry about it.", zh: "Southbank位于泰晤士河东岸的一个拐弯处，是英国滑板运动的中心，滑板不断撞击地面的声音让你的头嗡嗡作响。我爱上了这里，很快和当地滑板少年成为朋友。我们说自己的语言，其中我最喜欢的是\"Safe\"——它意味着酷、你好、别担心。" },
      { en: "Once, when trying a certain trick on the beam, I fell onto the stones, damaging a nerve in my hand, and Toby came over, helping me up: Safe, man. Safe. A few minutes later, when I landed the trick, my friends beat their boards loud, shouting: \"Safe! Safe! Safe!\" And that's what mattered — landing tricks, being a good skater.", zh: "有一次，我在横杆上尝试某个技巧时摔到石头上，伤了手部神经，托比走过来扶我起来说：\"Safe, man. Safe.\"几分钟后，当我成功完成技巧时，朋友们敲打滑板大声喊着：\"Safe! Safe! Safe!\"而那才是重要的——成功完成技巧，成为一名优秀的滑板手。" },
      { en: "When I was 15, my family moved to Washington. I tried skateboarding there, but the locals were far less welcoming. Within a couple of years, I'd given it up.", zh: "15岁时我家搬到华盛顿。我也在那里尝试滑板，但当地人远不如伦敦友好。几年后，我放弃了滑板。" },
      { en: "When I returned to London in 2004, I found myself wandering down to Southbank, spending hours there. I've traveled back several times since, most recently this past spring. The day was cold but clear: tourists and Londoners stopped to watch the skaters.", zh: "2004年回到伦敦时，我发现自己不知不觉走到了Southbank，在那里度过了数小时。从那以后我又回去过好几次，最近一次是去年春天。那天很冷但很晴朗：游客和伦敦人停下来看滑板少年们。" },
      { en: "Weaving among the kids who rushed by on their boards, I found my way to the beam. Then a rail-thin teenager, in a baggy white T-shirt, skidded up to the beam. He sat next to me. He seemed not to notice the man next to him. But soon I caught a few of his glances. \"I was a local here 20 years ago,\" I told him. Then, slowly, he began to nod his head. \"Safe, man.\"", zh: "在踩着滑板飞驰而过的孩子们中间穿梭，我走到了横杆边。然后一个瘦削的少年，穿着宽松的白色T恤，滑到横杆前。他坐在我旁边，似乎没注意到旁边的人。但很快我捕捉到了他的几次目光。\"20年前我也是这里的常客，\"我对他说。然后，慢慢地，他开始点头。\"Safe, man.\"" }
    ]
  },

  {
    id: 'gk2021-020',
    title: "Who Is a Genius? Rethinking the Definition",
    cnTitle: '谁是天才？重新定义',
    description: "这篇文章探讨了天才的定义及其背后的社会偏见。作者指出历史上被认可的天才多为欧洲白人男性，而女性和其他族群的贡献常被忽视。文章引用最新研究说明女孩在六岁时就开始回避被认为\"极其聪明\"的活动，呼吁人们突破社会因素的限制去发现更多天才。",
    category: '教育',
    wordCount: 290,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: "Who is a genius? This question has greatly interested humankind for centuries. Let's state clearly: Einstein was a genius. His face is almost the international symbol for genius. But we want to go beyond one man and explore the nature of genius itself. Why is it that some people are so much more intelligent or creative than the rest of us? And who are they?", zh: "谁是天才？这个问题几个世纪以来一直困扰着人类。让我们明确一点：爱因斯坦是天才。他的脸几乎成了天才的国际符号。但我们想超越个人，探索天才本身的本质。为什么有些人比我们其他人更聪明或更有创造力？他们是谁？" },
      { en: "In the sciences and arts, those praised as geniuses were most often white men, of European origin. Perhaps this is not a surprise. It's said that history is written by the victors, and those victors set the standards for admission to the genius club. When contributions were made by geniuses outside the club — women, or people of a different color or belief — they were unacknowledged and rejected by others.", zh: "在科学和艺术领域，被称赞为天才的往往是欧洲血统的白人男性。这也许并不令人惊讶。人们常说历史是由胜利者书写的，而那些胜利者制定了进入\"天才俱乐部\"的标准。当俱乐部外的天才——女性或不同肤色、信仰的人做出贡献时，他们往往不被承认，被他人拒绝。" },
      { en: "A study recently published by Science found that as young as age six, girls are less likely than boys to say that members of their gender are \"really, really smart.\" Even worse, the study found that girls act on that belief. Around age six they start to avoid activities said to be for children who are \"really, really smart.\" Can our planet afford to have any great thinkers become discouraged and give up? It doesn't take a genius to know the answer: absolutely not.", zh: "《科学》杂志最近发表的一项研究发现，早在6岁时，女孩就不如男孩可能说同性别成员\"非常非常聪明\"。更糟糕的是，研究发现女孩会根据这种信念行动。6岁左右她们开始回避被认为适合\"非常非常聪明\"的孩子的活动。我们的星球能承受得起任何伟大的思想家灰心丧气并放弃吗？不需要天才也能知道答案：绝对不能。" },
      { en: "Here's the good news. In a wired world with constant global communication, we're all positioned to see flashes of genius wherever they appear. And the more we look, the more we will see that social factors like gender, race, and class do not determine the appearance of genius.", zh: "好消息是，在一个互联互通、全球通讯不断的世界里，我们都能看到天才的闪现，无论它们出现在哪里。我们看得越多，就越会发现性别、种族和阶级等社会因素并不能决定天才的出现。" },
      { en: "As a writer says, future geniuses come from those with \"intelligence, creativity, perseverance, and simple good fortune, who are able to change the world.\"", zh: "正如一位作家所说，未来的天才来自那些具有\"智慧、创造力、毅力和简单好运的人，他们能够改变世界。\"" }
    ]
  },

  {
    id: 'gk2021-021',
    title: "An OIC Project for Iraqi Children",
    cnTitle: '伊斯兰会议组织伊拉克儿童项目',
    description: "这篇文章记录了一个为伊拉克儿童征集学习用品的慈善项目。作者从最初的只关注取得好成绩，到最终领悟项目真正意义的心路历程，十个伊拉克孩子将因此获得继续受教育的机会，这让作者感受到了前所未有的温暖与成就感。",
    category: '教育',
    wordCount: 184,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: "The most rewarding day for our group was project day, when all the efforts we put into collecting the items finally came together. When I saw the various supplies we had collected, it hit me that every kit we were to build that day would eventually be in the hands of an Iraqi child. Over the past four months, I had never imagined how I would feel once our project was completed.", zh: "对我们团队来说，最有收获的一天是项目日，那天我们为征集物品所付出的所有努力终于汇集在一起。当我看到我们征集的各种用品时，我突然想到，我们今天要制作的每一个工具包最终都会交给一个伊拉克孩子的手中。在过去的四个月里，我从未想过一旦我们的项目完成，我会有什么感觉。" },
      { en: "While making the kits, I realized that I had lost sight of the true meaning behind it. I had only focused on the fact that it was another school project and one I wanted to get a good grade on. When the kits were completed, and ready to be sent overseas, the warm feeling I had was one I would never forget.", zh: "在做工具包时，我意识到我已经忽略了它背后的真正含义。我只关注这是另一个学校项目，也是一个我想取得好成绩的项目。当工具包完成并准备发送到海外时，我永远不会忘记那种温暖的感觉。" },
      { en: "In the beginning, I dared myself to make a difference in the life of another person. Now that our project is over, I realize that I have affected not only one life, but ten. With our efforts, ten young boys and girls will now be able to further their education.", zh: "一开始，我只是想改变另一个人的生活。现在我们的项目结束了，我意识到我影响的不只是一个人的生活，而是十个人。通过我们的努力，十个男孩和女孩现在将能够继续接受教育。" }
    ]
  },

  {
    id: 'gk2021-022',
    title: "Scientists' Warning on Global Collapse",
    cnTitle: '科学家对全球崩溃的警告',
    description: "这篇文章报道了数百名学者联名发表公开信，警告人类必须正视全球崩溃的风险。极端天气、粮食不安全、淡水短缺等因素可能导致文明崩溃，\"崩溃学\"研究者呼吁公众直面这一可怕的可能性，并做好应对准备，而不是沉浸在盲目的希望中。",
    category: '环境',
    wordCount: 342,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      { en: "Hundreds of scientists, writers and academics sounded a warning to humanity in an open letter published last December: Policymakers and the rest of us must engage openly with the risk of global collapse. Researchers in many areas have projected the widespread collapse as \"a credible scenario this century\".", zh: "去年12月发表的一封公开信中，数百名科学家、作家和学者向人类发出了警告：政策制定者以及其他所有人必须公开应对全球崩溃的风险。许多领域的研究人员预测，大范围的坍塌是\"本世纪可信的场景\"。" },
      { en: "A survey of scientists found that extreme weather events, food insecurity, and freshwater shortages might create global collapse. Of course, if you are a non-human species, collapse is well underway.", zh: "一项针对科学家的调查发现，极端天气事件、粮食不安全感和淡水短缺可能会造成全球崩溃。当然，如果你是非人类物种，崩溃已经在进行中。" },
      { en: "The call for public engagement with the unthinkable is especially germane in this moment of still-uncontrolled pandemic and economic crises in the world's most technologically advanced nations. Not very long ago, it was also unthinkable that a virus would shut down nations and that safety nets would be proven so disastrously lacking in flexibility.", zh: "在这个世界上技术最先进的国家，疫情和经济危机仍处于失控之中，呼吁公众参与思考那些不可思议的事情尤为重要。不久以前，病毒会让国家停摆、安全网被证明缺乏灵活性到灾难性的程度，这也是难以想象的。" },
      { en: "The international scholars' warning letter doesn't say exactly what collapse will look like or when it might happen. Collapsology, the study of collapse, is more concerned with identifying trends and with them the dangers of everyday civilization. Among the signatories of the warning was Bob Johnson, the originator of the \"ecological footprint\" concept, which measures the total amount of environmental input needed to maintain a given lifestyle.", zh: "这封国际学者警告信并没有确切说明崩溃会是什么样子或何时可能发生。\"崩溃学\"，即对崩溃的研究，更关注识别趋势以及日常文明的伴随危险。签署者之一是\"生态足迹\"概念的创始人鲍勃·约翰逊，该概念衡量维持某种生活方式所需的环境投入总量。" },
      { en: "With the current footprint of humanity, \"it seems that global collapse is certain to happen in some form, possibly within a decade, certainly within this century,\" Johnson said in an email. Only if we discuss the consequences of our biophysical limits, the December warning letter says, can we have the hope to reduce their \"speed, severity and harm\".", zh: "以人类目前的足迹，\"全球崩溃似乎必然以某种形式发生，可能在十年内，肯定在本世纪内，\"约翰逊在一封电子邮件中说。12月的警告信指出，只有我们讨论生物物理极限的后果，我们才能有希望减少它们的\"速度、严重程度和危害\"。" },
      { en: "And yet messengers of the coming disturbance are likely to be ignored. We all want to hope things will turn out fine. As a poet wrote, \"Man is a victim of dope / In the incurable form of hope.\" The hundreds of scholars who signed the letter are intent on quieting hope that ignores preparedness. \"Let's look directly into the issue of collapse,\" they say, \"and deal with the terrible possibilities of what we see there to make the best of a troubling future.\"", zh: "然而，即将到来的动荡的使者很可能被忽视。我们都希望事情会好转。正如一位诗人所写：\"人类是一种毒品的受害者/以不可治愈的希望形式。\"签署这封信的数百名学者决心消除那种忽视准备的希望。\"让我们直接审视崩溃的问题，\"他们说，\"并应对我们在那里看到的可怕可能性，以在令人不安的未来中做到最好。\"" }
    ]
  },

  {
    id: 'gk2021-023',
    title: "What Is Time? Rethinking Through Ecology",
    cnTitle: '什么是时间？通过生态学重新思考',
    description: "这篇文章节选探讨了时间的本质。从圣奥古斯丁到爱因斯坦，哲学家和科学家对时间有不同理解。作者提出，与其将时间视为绝对概念，不如从生态学角度重新定义时间，让环境条件来设定人类生活的节奏。",
    category: '科技',
    wordCount: 138,
    coverColor: 'bg-orange-500',
    note: "Full text incomplete in source; excerpt shows key concepts.",
    paragraphs: [
      { en: "Early fifth-century philosopher St. Augustine famously wrote that he knew what time was unless someone asked him. Albert Einstein added another wrinkle when he theorized that time varies depending on where you measure it. Today's state-of-the-art atomic clocks have proven Einstein right. Even advanced physics can't decisively tell us what time is, because the answer depends on the question you're asking.", zh: "五世纪初哲学家圣奥古斯丁曾写道，他知道时间是什么，除非有人问他。爱因斯坦补充说，时间因测量地点而异。今天的先进原子钟证明了爱因斯坦是对的。即使是高等物理学也无法明确告诉我们时间是什么，因为答案取决于你问的问题。" },
      { en: "Forget about time as an absolute. What if, instead of considering time in terms of astronomy, we related time to ecology? What if we allowed environmental conditions to set the tempo of human life? We're increasingly aware of the fact that we can't control Earth systems with engineering alone, and realizing that we need to moderate our actions if we hope to live in balance. What if our definition of time reflected that?", zh: "忘掉时间作为绝对概念。如果我们不从天文学角度考虑时间，而是将时间与生态联系起来呢？如果我们允许环境条件来设定人类生活的节奏呢？我们越来越意识到，仅靠工程无法控制地球系统，如果我们希望平衡生活，就需要调节我们的行为。如果我们对时间的定义反映了这一点呢？" }
    ]
  },

  {
    id: 'gk2021-024',
    title: "Things to Do in Yorkshire This Summer",
    cnTitle: '今年夏天约克郡的活动',
    description: "这篇文章介绍了今年夏天在约克郡可以参加的四项活动：哈罗盖特音乐节庆祝50周年、朱迪的户外健身暑期班、赫尔姆斯利艺术中心的毛毡图片制作工作坊，以及哈利法克斯免费的数学互动展览，为当地人和游客提供了丰富的夏日选择。",
    category: '文化',
    wordCount: 224,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: "Since its birth, Harrogate Music Festival has gone from strength to strength. This year, we are celebrating our 50th anniversary. We begin on 1st June with Manchester Camerata and Nicola Benedetti, presenting an amazing programme of Mozart pieces. Dates: 1 June–31 July. Tickets: £12–£96.", zh: "哈罗盖特音乐节自诞生以来不断发展壮大。今年，我们庆祝50周年。6月1日，我们将与曼彻斯特卡梅拉塔乐团和尼古拉·贝内德蒂一起开启，呈现精彩的莫扎特作品节目。日期：6月1日至7月31日。门票：12-96英镑。" },
      { en: "As the summer months roll in, our Georgian country estate makes the perfect setting for an outdoor fitness session. Come and work out with our qualified personal trainer, Jodie McGregor, on the grounds of the Middleton Lodge estate. We will be holding a free taster session on 23rd May, at 10 am, to demonstrate the variety of effective and active exercises. There are eight spaces available for the taster session. Advance bookings are required.", zh: "随着夏季的到来，我们的乔治亚乡村庄园为户外健身课程提供了完美的场所。来和持证私人教练朱迪·麦格雷戈一起在米德尔顿庄园锻炼吧。我们将于5月23日上午10点举办免费体验课，展示各种有效且活跃的运动。体验课只有八个名额，需提前预订。" },
      { en: "Working from an inspirational picture, this workshop at Helmsley Arts Centre will teach you the techniques you will need to recreate your picture in wool. We will also discuss the origins of felt, what enables wool fibres to become felt and how the processes we use work. Dates: 12 June–12 July. Tickets: £40 including materials.", zh: "以一张启发性的图片为基础，赫尔姆斯利艺术中心的这个工作坊将教你用羊毛再现图片所需的技术。我们还将讨论毛毡的起源、什么让羊毛纤维变成毛毡，以及我们所使用的工艺如何运作。日期：6月12日至7月12日。门票：40英镑含材料。" },
      { en: "A new exhibition in Halifax uses everyday activities to explain the hidden math principles we all use on a regular basis. Pack a bag, cut a cake, guess which juice container holds the most liquid, and much more. Discover how architects, product designers and scientists use similar skills in their work. Dates: 7 May–10 June. Tickets: Free.", zh: "哈利法克斯的一个新展览用日常活动来解释我们定期使用的隐藏数学原理。打包行李、切蛋糕、猜测哪个果汁容器装得最多液体，还有更多。发现建筑师、产品设计师和科学家如何在工作中使用类似的技能。日期：5月7日至6月10日。门票：免费。" }
    ]
  },

  {
    id: 'gk2021-025',
    title: "Coworking Spaces and the Science of Noise",
    cnTitle: '联合办公空间与噪音科学',
    description: "这篇文章节选讨论了办公环境噪音对人脑的影响。研究表明\"带入式\"噪音和\"非带入式\"噪音效果不同，约70分贝的背景噪音可能促进创造性思维，而开放式办公室不受欢迎的主要原因是持续不断的干扰打断。",
    category: '社会',
    wordCount: 84,
    coverColor: 'bg-amber-500',
    note: "Full original text heavily adapted by test makers; complete version unavailable. Core concepts preserved.",
    paragraphs: [
      { en: "The easy way out isn't always easiest. I learned that lesson when I decided to treat a colleague to dinner for her birthday. The article discusses how office environment noise affects the human brain. \"Immersive\" noise and \"non-immersive\" noise have different effects.", zh: "捷径并不总是最容易的。当我决定请同事吃饭时，我明白了这个道理。文章讨论了办公环境噪音对人脑的影响。\"带入式\"噪音和\"非带入式\"噪音有不同的效果。" },
      { en: "A key concept is the \"coworking space\" — why the interviewer prefers it: it helps him concentrate. Research shows that about 70 decibels of background noise may promote creative thinking ability. What makes an open office unwelcome to many people is constant interruptions.", zh: "一个关键概念是\"联合办公空间\"——面试官选择它是因为能帮助他集中注意力。研究表明约70分贝的背景噪音可能促进创造性思维能力。开放式办公室不受欢迎的原因是持续不断的干扰打断。" }
    ]
  },

  {
    id: 'gk2021-026',
    title: "Understanding and Preventing Running Injuries",
    cnTitle: '理解与预防跑步损伤',
    description: "这篇文章节选探讨了跑步受伤的原因和预防措施。作者指出受伤原因不易诊断，脚部问题可能引发膝盖或背部问题，建议咨询专业医生并倾听身体信号，识别过度训练的迹象以避免跑步伤害。",
    category: '健康',
    wordCount: 86,
    coverColor: 'bg-blue-500',
    note: "Full text not accessible; key content extracted from available question analysis.",
    paragraphs: [
      { en: "The causes of injury are not easy to diagnose. For example, problems with your feet may cause knee or back problems. Finding out and treating the cause of running injuries is the job of a trained doctor.", zh: "受伤的原因不易诊断。例如，脚部问题可能引发膝盖或背部问题。找到并治疗跑步受伤的原因是受过训练的医生的工作。" },
      { en: "More importantly, listen to your body and recognize the signs of overtraining so that you can avoid running injuries. The passage also discusses structural imbalance caused by using some muscles more intensely than others, and consulting a trained doctor to find out why back and knees hurt after running.", zh: "更重要的是，倾听身体的声音，认识过度训练的迹象，这样你就可以避免跑步受伤。文章还讨论了结构失衡（由某些肌肉比其他肌肉使用更强烈导致），以及咨询受过训练的医生来找出跑步后背部和膝盖疼痛的原因。" }
    ]
  },

  // ===== 2022 高考英语 =====

{
    id: 'gk2022-001',
    title: 'Grading Policies for Introduction to Literature',
    cnTitle: '文学导论评分政策',
    description: '本文是某高校\"文学导论\"课程的评分政策说明，详细介绍了评分等级、论文、小组作业、日常作业的占比及要求，以及迟交作业的处理规定。',
    category: '教育',
    wordCount: 226,
    coverColor: 'bg-amber-500',
    paragraphs: [
      {
        en: 'Grading Scale\n90-100, A; 80-89, B; 70-79, C; 60-69, D; Below 60, E.\n\nEssays (60%)\nYour four major essays will combine to form the main part of the grade for this course: Essay 1 = 10%; Essay 2 = 15%; Essay 3 = 15%; Essay 4 = 20%.',
        zh: '评分等级：90-100分为A，80-89分为B，70-79分为C，60-69分为D，60分以下为E。论文占总成绩的60%，四篇主要论文分别为：论文一占10%，论文二占15%，论文三占15%，论文四占20%。'
      },
      {
        en: 'Group Assignments (30%)\nStudents will work in groups to complete four assignments during the course. All the assignments will be submitted by the assigned date through Blackboard, our online learning and course management system.',
        zh: '小组作业占总成绩的30%。学生将在课程期间分组完成四项作业，所有作业需通过Blackboard在线学习和课程管理系统在指定日期前提交。'
      },
      {
        en: 'Daily Work/In-Class Writings and Test/Group Work/Homework (10%)\nClass activities will vary from day to day, but students must be ready to complete short in-class writings or tests drawn directly from assigned readings or notes from the previous class\' lecture/discussion, so it is important to take careful notes during class. Additionally, from time to time I will assign group work to be completed in class or short assignments to be completed at home, both of which will be graded.',
        zh: '日常作业、课堂写作、测试、小组活动和家庭作业占总成绩的10%。课堂活动每天有所不同，但学生必须随时准备完成简短的课堂写作或测试，内容直接来源于指定阅读材料或上一节课的笔记/讨论，因此课堂上认真记笔记十分重要。此外，我还会不时布置课内小组作业或课后短篇作业，两者都将评分。'
      },
      {
        en: 'Late Work\nAn essay not submitted in class on the due date will lose a letter grade for each class period it is late. If it is not turned in by the 4th day after the due date, it will earn a zero. Daily assignments not completed during class will get a zero. Short writings missed as a result of an excused absence will be accepted.',
        zh: '迟交作业规定：论文未在截止日期当堂提交，每迟交一个课时将降低一个等级。如果在截止日期后第4天仍未提交，该论文得零分。课堂作业未在课堂上完成者得零分。因请假缺席而错过的短篇写作将被接受。'
      }
    ]
  },
  {
    id: 'gk2022-002',
    title: 'Food Waste and the Environment',
    cnTitle: '食物浪费与环境',
    description: '本文通过作者浪费芝麻菜的个人经历引出食物浪费问题，指出在全球8亿人挨饿的背景下，食物浪费造成了巨大的环境代价，介绍了DC Central Kitchen回收食物的做法，并呼吁每个人采取行动减少浪费。',
    category: '环境',
    wordCount: 317,
    coverColor: 'bg-blue-500',
    paragraphs: [
      {
        en: 'Like most of us, I try to be mindful of food that goes to waste. The arugula was to make a nice green salad, rounding out a roast chicken dinner. But I ended up working late. Then friends called with a dinner invitation. I stuck the chicken in the freezer. But as days passed, the arugula went bad. Even worse, I had unthinkingly bought way too much; I could have made six salads with what I threw out.',
        zh: '和我们大多数人一样，作者努力做到不浪费食物。但有一次，她为了配烤鸡晚餐买了芝麻菜做沙拉，却因工作到很晚加上朋友约饭，把鸡放进了冰箱，结果芝麻菜坏掉了。更糟糕的是，她买得太多了，扔掉的芝麻菜足够做六份沙拉。'
      },
      {
        en: 'In a world where nearly 800 million people a year go hungry, \"food waste goes against the moral grain,\" as Elizabeth Royte writes in this month\'s cover story. It\'s jaw-dropping how much perfectly good food is thrown away — from \"ugly\" (but quite eatable) vegetables rejected by grocers to large amounts of uneaten dishes thrown into restaurant garbage cans.',
        zh: '在全球每年近8亿人挨饿的世界里，正如Elizabeth Royte在本期封面故事中所写，\"食物浪费违背了道德准则\"。让人震惊的是，大量完全可以食用的食物被扔掉——从被杂货商拒绝的\"丑\"蔬菜，到餐厅垃圾桶里大量的剩菜剩饭。'
      },
      {
        en: 'Producing food that no one eats wastes the water, fuel, and other resources used to grow it. That makes food waste an environmental problem. In fact, Royte writes, \"if food waste were a country, it would be the third largest producer of greenhouse gases in the world.\"',
        zh: '生产无人食用的食物浪费了种植过程中消耗的水、燃料和其他资源。这使得食物浪费成为一个环境问题。事实上，Royte写道：\"如果食物浪费是一个国家，它将是世界第三大温室气体排放国。\"'
      },
      {
        en: 'Mike Curtin sees my arugula story all the time — but for him, it\'s more like 12 boxes of donated strawberries nearing their last days. Curtin is CEO of DC Central Kitchen in Washington, D.C., which recovers food and turns it into healthy meals. Last year it recovered more than 807,500 pounds of food by taking donations and collecting blemished produce that otherwise would have rotted in fields. And the strawberries? Volunteers will wash, cut, and freeze or dry them for use in meals down the road.',
        zh: '对Mike Curtin来说，这样的故事天天都在上演——只不过对他来说更像是12箱即将过期的捐赠草莓。Curtin是华盛顿特区DC Central Kitchen的首席执行官，该机构回收食物并将其制成健康餐食。去年，他们通过接受捐赠和收集有瑕疵的农产品，回收了超过80.75万磅食物，否则这些农产品将在田间腐烂。而那些草莓呢？志愿者会将它们清洗、切割、冷冻或晾干，以备日后制作餐食使用。'
      },
      {
        en: 'Such methods seem obvious, yet so often we just don\'t think. \"Everyone can play a part in reducing waste, whether by not purchasing more food than necessary in your weekly shopping or by asking restaurants to not include the side dish you won\'t eat,\" Curtin says.',
        zh: '这些方法看似显而易见，但我们却常常不去思考。Curtin说：\"每个人都可以为减少浪费出一份力，无论是每周购物时不买超过需要的食物，还是要求餐厅不要提供你不会吃的配菜。\"'
      }
    ]
  },
  {
    id: 'gk2022-003',
    title: 'HenPower: Hens for Elderly Care',
    cnTitle: '母鸡力量：用于老年护理的母鸡',
    description: '本文介绍了英国伦敦慈善机构发起的\"HenPower\"项目——给养老院老人提供母鸡照料，以减少孤独感、改善健康状况，甚至帮助痴呆症患者。项目获得财政支持将在全国推广，深受老人和护理人员欢迎。',
    category: '健康',
    wordCount: 288,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      {
        en: 'The elderly residents in care homes in London are being given hens to look after to stop them feeling lonely. The project was dreamed up by a local charity to reduce loneliness and improve elderly people\'s wellbeing. It is also being used to help patients suffering dementia, a serious illness of the mind. Staff in care homes have reported a reduction in the use of medicine where hens are in use.',
        zh: '伦敦养老院的老人们被分配了母鸡来照料，以减轻他们的孤独感。这个项目由一家当地慈善机构发起，旨在减少孤独感、改善老年人的健康状况。该项目还用于帮助痴呆症患者，痴呆症是一种严重的精神疾病。护理院的工作人员报告称，在有母鸡的护理院，药物使用量有所下降。'
      },
      {
        en: 'Among those taking part in the project is 80-year-old Ruth Xavier. She said: \"I used to keep hens when I was younger and had to prepare their breakfast each morning before I went to school. I like the project a lot. I am down there in my wheelchair in the morning letting the hens out and down there again at night to see they\'ve gone to bed. It\'s good to have a different focus. People have been bringing their children in to see the hens and residents come and sit outside to watch them. I\'m enjoying the creative activities, and it feels great to have done something useful.\"',
        zh: '80岁的Ruth Xavier是参与该项目的一员。她说：\"我年轻时养过母鸡，每天早上上学前都要给它们准备早餐。我非常喜欢这个项目。我早上坐着轮椅去把母鸡放出来，晚上再去看看它们是否回窝睡觉了。有一个不同的关注点是很好的。人们带自己的孩子来看母鸡，居民们也出来坐着观看它们。我很享受这些创意活动，做一些有用的事情感觉很棒。\"'
      },
      {
        en: 'There are now 700 elderly people looking after hens in 20 care homes in the North East, and the charity has been given financial support to roll it out countrywide. Wendy Wilson, extra care manager at 60 Penfold Street, one of the first to embark on the project, said: \"Residents really welcome the idea of the project and the creative sessions. We are looking forward to the benefits and fun the project can bring to people here.\"',
        zh: '目前，英国东北部已有20家护理院的700名老人在照料母鸡，该慈善机构已获得财政支持，准备将项目推广到全国。Penfold街60号的额外护理经理Wendy Wilson是最早启动该项目的护理院之一，她表示：\"居民们非常欢迎这个项目和创意活动的想法。我们期待这个项目能为这里的人们带来益处和乐趣。\"'
      },
      {
        en: 'Lynn Lewis, director of Notting Hill Pathways, said: \"We are happy to be taking part in the project. It will really help connect our residents through a shared interest and creative activities.\"',
        zh: 'Notting Hill Pathways的主管Lynn Lewis说：\"我们很高兴参与这个项目。它将通过共同的兴趣和创意活动真正帮助我们的居民建立联系。\"'
      }
    ]
  },
  {
    id: 'gk2022-004',
    title: 'How Farming Changed Human Speech',
    cnTitle: '农业如何改变人类语言',
    description: '本文探讨了人类语音与农业发展的关系。研究表明，新石器时代农业的发展使食物变软，人类颌骨从对齐变为覆咬合结构，从而催生了唇齿音（如f和v），颠覆了所有语音在30万年前就已存在的传统观点。',
    category: '科技',
    wordCount: 354,
    coverColor: 'bg-rose-500',
    paragraphs: [
      {
        en: 'Human speech contains more than 2000 different sounds, from the ubiquitous \"m\" and \"a\" to the rare clicks of some southern African languages. But why are certain sounds more common than others? A ground-breaking, five-year investigation shows that diet-related changes in human bite led to new speech sounds that are now found in half the world\'s languages.',
        zh: '人类语音包含2000多种不同的声音，从无处不在的\"m\"和\"a\"到一些南部非洲语言中罕见的咔嗒音。但为什么某些声音比其他声音更常见呢？一项历时五年的突破性调查显示，与饮食相关的人类咬合变化催生了新的语音，这些声音现在存在于世界上一半的语言中。'
      },
      {
        en: 'More than 30 years ago, the linguist Charles Hockett noted that speech sounds called labiodentals, such as \"f\" and \"v\", were more common in the languages of societies that ate softer foods. Now a team of researchers led by Damián Blasi at the University of Zurich, Switzerland, has pinpointed how and why this trend arose. They found that the upper and lower incisors of ancient human adults were aligned, making it hard to produce labiodentals, which are formed by touching the lower lip to the upper teeth. Later, our jaws changed to an overbite structure, making it easier to produce such sounds.',
        zh: '30多年前，语言学家Charles Hockett注意到，被称为唇齿音的语音（如\"f\"和\"v\"）在食用较软食物的社会语言中更为常见。现在，由瑞士苏黎世大学Damián Blasi领导的研究团队已经确定了这一趋势产生的方式和原因。他们发现，古代成年人的上下门牙是对齐的，这使得发出唇齿音变得困难，因为唇齿音是通过下唇接触上牙齿形成的。后来，我们的颌骨变成了覆咬合结构，使得发出这些声音变得更加容易。'
      },
      {
        en: 'The team showed that this change in bite was connected with the development of agriculture in the Neolithic period. Food became easier to chew at this point, which led to changes in human jaws and teeth: for instance, because it takes less pressure to chew softer, farmed foods, the jawbone doesn\'t have to do as much work and so doesn\'t grow to be so large.',
        zh: '研究团队表明，这种咬合变化与新石器时代农业的发展有关。在这一时期，食物变得更容易咀嚼，这导致了人类颌骨和牙齿的变化：例如，因为咀嚼较软的种植食物所需的压力更小，颌骨不需要做那么多工作，所以不会长得那么大。'
      },
      {
        en: 'Analyses of a language database also confirmed that there was a global change in the sound of world languages after the Neolithic age, with the use of \"f\" and \"v\" increasing remarkably during the last few thousand years. These sounds are still not found in the languages of many hunter-gatherer people today. This research overturns the prevailing view that all human speech sounds were present when Homo sapiens evolved around 300,000 years ago. \"The set of speech sounds we use has not necessarily remained stable since the emergence of our species, but rather the immense diversity of speech sounds that we find today is the product of a complex interplay of factors involving biological change and cultural evolution,\" said team member Steven Moran, a linguist at the University of Zurich.',
        zh: '对语言数据库的分析也证实，新石器时代之后，世界语言的发音发生了全球性变化，\"f\"和\"v\"的使用在过去几千年中显著增加。这些声音在当今许多狩猎采集者的语言中仍然不存在。这项研究颠覆了普遍的观点，即所有人类语音在大约30万年前智人进化时就已存在。苏黎世大学的语言学家、团队成员Steven Moran表示：\"我们使用的语音集合自人类物种出现以来不一定保持稳定；相反，我们今天发现的语音的巨大多样性，是生物变化和文化进化等因素复杂相互作用的产物。\"'
      }
    ]
  },
  {
    id: 'gk2022-005',
    title: 'Finding the Right Workout Partner',
    cnTitle: '找到合适的锻炼伙伴',
    description: '本文讨论如何找到合适的健身伙伴。文章指出有健身伙伴可以提高锻炼效果、增加动力，并就如何寻找伙伴提供了建议：明确目标、考虑距离和健身房归属、发布详细告示信息、接受彼此的差异。',
    category: '健康',
    wordCount: 274,
    coverColor: 'bg-violet-500',
    paragraphs: [
      {
        en: 'Fitness Magazine recently ran an article titled \"Five Reasons to Thank Your Workout Partner.\" One reason was: \"You\'ll actually show up if you know someone is waiting for you at the gym,\" while another read: \"You\'ll work harder if you train with someone else.\" With a workout partner, you will increase your training effort as there is a subtle competition.',
        zh: '《健身杂志》最近刊登了一篇题为\"感谢健身伙伴的五个理由\"的文章。其中一个理由是：\"如果你知道有人在健身房等你，你实际上会出现\"，另一个理由是：\"和别人一起训练你会更努力。\"有了健身伙伴，你会增加训练强度，因为存在一种微妙的竞争。'
      },
      {
        en: 'So, how do you find a workout partner? First of all, decide what you want from that person. Do you want to be a better athlete in your favorite sport? Or do you just want to be physically fit, able to move with strength and flexibility? Think about the exercises you would like to do with your workout partner.',
        zh: '那么，如何找到合适的健身伙伴呢？首先，决定你想从对方身上获得什么。你想在自己最喜欢的运动中成为更好的运动员吗？或者你只是想身体健康，能够有力而灵活地活动？考虑一下你想和健身伙伴一起做的运动。'
      },
      {
        en: 'You might think about posting what you are looking for on social media, but it probably won\'t result in a useful response. If you plan on working out in a gym, that person must belong to the same gym. My partner posted her request on the notice board of a local park. Her notice included what kind of training she wanted to do, how many days a week and how many hours she wanted to spend on each session, and her age. It also listed her favorite sports and activities, and provided her phone number.',
        zh: '你可能会考虑在社交媒体上发布你在寻找什么，但这可能不会有有用的回应。如果你打算在健身房锻炼，那个人必须是同一家健身房的会员。我的伙伴在当地公园的告示板上发布了她的请求。她的告示包括她想做什么样的训练、每周多少天、每次训练想花多少小时，以及她的年龄。告示还列出了她最喜欢的运动和活动，并提供了她的电话号码。'
      },
      {
        en: 'You and your partner will probably have different skills. Just accept your differences and learn to work with each other. Over time, both of you will benefit — your partner will be able to lift more weights and you will become more physically fit. The core of your relationship is that you will always be there to help each other.',
        zh: '你和你的伙伴可能有不同的技能。接受你们的差异，学会相互合作。随着时间的推移，你们双方都会受益——你的伙伴能举起更重的重量，而你也会变得更加健康。你们关系的核心是，你们将永远在那里互相帮助。'
      }
    ]
  },
  {
    id: 'gk2022-006',
    title: 'Family Camping Adventures',
    cnTitle: '家庭露营冒险',
    description: '本文作者回忆了过去十年与家人露营的经历，讲述了两件趣事：一是在小溪边露营时15个月大的孩子差点掉进小溪；二是在湖中租船时遭遇暴风雨发动机故障，最终被渔民救回。尽管有这些意外，一家人依然对每年的露营充满期待。',
    category: '生活',
    wordCount: 229,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      {
        en: 'My husband, our children and I have had wonderful camping experiences over the past ten years. Some of our memories are funny, especially from the early years when our children were little.',
        zh: '在过去的十年里，我和丈夫以及孩子们有过许多美好的露营经历。有些回忆很有趣，尤其是在孩子们还小的早期岁月里。'
      },
      {
        en: 'Once, we camped along Chalk Creek. I was worried that our 15-month-old boy would fall into the creek. I tied a rope around his waist to keep him near to our spot. That lasted about ten minutes. He was uncomfortable, and his crying let the whole campground know it. So instead of tying him up, I just kept a close eye on him. It worked — he didn\'t end up in the creek. My three-year-old, however, did.',
        zh: '有一次，我们在白垩溪边露营。我担心我们15个月大的男孩会掉进小溪里。我在他腰上系了一根绳子，让他待在我们附近。这持续了大约十分钟。他很不舒服，他的哭声让整个营地都知道了这一点。所以我没有再绑着他，而是密切关注他。这招奏效了——他没有掉进小溪里。然而，我三岁的孩子掉了进去。'
      },
      {
        en: 'Another time, we rented a boat in Vallecito Lake. The sky was clear when we headed off, but storms move in fast in the mountains, and this one quickly interrupted our peaceful morning trip. The wind picked up and thunder rolled. My husband stopped fishing to start the motor. Nothing. He tried again. No luck. We were stuck in the middle of the lake with a dead motor. As we all sat there helplessly, a fisherman pulled up, threw us a rope and towed us back. We were safe.',
        zh: '还有一次，我们在瓦莱西托湖租了一条船。我们出发时天空晴朗，但山里的暴风雨来得很快，这场暴风雨迅速打断了我们平静的早晨之旅。风势渐起，雷声隆隆。我丈夫停止钓鱼去启动马达。没有反应。他又试了一次。还是不行。我们被困在湖中央，马达坏了。当我们无助地坐在那里时，一位渔民划船过来，扔给我们一根绳子，把我们拖了回去。我们安全了。'
      },
      {
        en: 'Now, every year when my husband pulls our camper out of the garage, we are filled with a sense of excitement, wondering what camping fun and adventure we will experience next.',
        zh: '现在，每年当我丈夫把露营车从车库里拉出来时，我们都充满兴奋感，想知道接下来我们会经历什么样的露营乐趣和冒险。'
      }
    ]
  },
  {
    id: 'gk2022-007',
    title: 'Finding a Parking Space',
    cnTitle: '寻找停车位',
    description: '这是一段简短的听力对话，两人正在寻找餐厅附近的停车位。男士提议再绕街区一圈，女士告诉他餐厅没有临街停车位，但随即发现了一个空位。',
    category: '生活',
    wordCount: 37,
    coverColor: 'bg-orange-500',
    paragraphs: [
      {
        en: 'M: We have to find a parking space. Let\'s drive around the block one more time. Did you say the restaurant has no off-street parking at all?\nW: None, I checked it. Look, there is a space.',
        zh: '男士：我们得找个停车位。我们再绕着街区开一圈吧。你说那家餐厅根本没有临街停车位吗？\n女士：没有，我查过了。看，那儿有一个车位。'
      }
    ]
  },
  {
    id: 'gk2022-008',
    title: 'Museum Visit Permission',
    cnTitle: '博物馆参观许可',
    description: '这是一段关于学校生活的听力对话。一位老师向Wilson先生请示周末带二班学生参观历史博物馆，在确认学生已完成复习测试后获得批准，Wilson先生建议一天内完成以便学生周日能休息。',
    category: '教育',
    wordCount: 73,
    coverColor: 'bg-teal-500',
    paragraphs: [
      {
        en: 'W: Mr. Wilson, students from Class Two want to visit the history museum. Will it be all right if I take them there this weekend?\nM: How about their revision test? Are they through with it?\nW: Yes, they are.\nM: In that case, you can go ahead. Try to finish it within one day so that the students still have a whole day to rest on Sunday.\nW: All right, I\'ll manage.',
        zh: '女士：Wilson先生，二班的学生想参观历史博物馆。如果这个周末我带他们去，可以吗？\n男士：他们的复习测试怎么办？他们完成了吗？\n女士：是的，已经完成了。\n男士：那样的话，你可以去。尽量在一天内完成，这样学生们周日还有一整天可以休息。\n女士：好的，我会安排好的。'
      }
    ]
  },
  {
    id: 'gk2022-009',
    title: 'A Creative Birthday Gift Idea',
    cnTitle: '创意生日礼物点子',
    description: '这是一段关于生日礼物的听力对话。Linda为女儿Melissa的生日礼物发愁，朋友建议了\"体验礼物\"——城市通行证，可以全年参观12个景点，而且全家人都可以参与，是一个极具创意的替代物质礼物的想法。',
    category: '生活',
    wordCount: 149,
    coverColor: 'bg-amber-500',
    paragraphs: [
      {
        en: 'M: Hi, Linda. Fancy seeing you here. How long have you been shopping?\nW: Almost an hour. I have a lot to buy. My daughter Melissa\'s birthday is coming. I\'m trying to get her a good gift, but I don\'t know what to choose. She seems to have everything she loves.\nM: Yeah, the same as Clara. We\'ve already had bags of toys she\'s no longer playing with. So this year, we didn\'t buy her material things. We gave her an experience gift.\nW: What\'s that?',
        zh: '男士：嗨，Linda。真想不到在这儿见到你。你购物多久了？\n女士：快一个小时了。我要买很多东西。我女儿Melissa的生日快到了。我想给她买个好礼物，但不知道选什么。她似乎已经有所有她喜欢的东西了。\n男士：是啊，和Clara一样。我们已经有很多她不再玩的玩具了。所以今年，我们没有给她买物质的东西。我们给了她一份体验礼物。\n女士：那是什么？'
      },
      {
        en: 'M: A city pass, with which she can visit 12 different attractions, including the National History Museum, the Science Museum, the zoo and more.\nW: How much is it?\nM: 50 dollars per person for a year-long pass. I bought 3 for the whole family.\nW: So you can have a different outing every month for the entire year? What a great idea!',
        zh: '男士：城市通行证，有了它她可以参观12个不同的景点，包括国家历史博物馆、科学博物馆、动物园等等。\n女士：多少钱？\n男士：每人50美元，一年有效。我给全家买了3张。\n女士：所以你们一整年每个月都可以有不同的外出活动？真是个好主意！'
      }
    ]
  },
  {
    id: 'gk2022-010',
    title: 'Health Expert Presentation',
    cnTitle: '健康专家演讲',
    description: '这是一段体育俱乐部月度会议的听力独白。主持人介绍了来自英属哥伦比亚大学的健康专家Emma Wilson，她曾为曼彻斯特足球队和都柏林橄榄球队工作，将分享如何在信息混乱的环境中做出更健康的饮食选择。',
    category: '健康',
    wordCount: 164,
    coverColor: 'bg-blue-500',
    paragraphs: [
      {
        en: 'Hi, everyone. This is the monthly meeting of our club. We\'ve been fortunate to have got good advice from some famous athletes on how to improve our skills and build up our body. Today, we\'ll hear something different. We\'re honored to have Emma Wilson here. Emma is a health expert and lecturer from UBC, the University of British Columbia.',
        zh: '大家好。这是我们俱乐部的月度会议。我们很幸运地得到了一些著名运动员关于如何提高技能和增强体质的建议。今天，我们将听到一些不同的内容。我们很荣幸邀请到Emma Wilson来到这里。Emma是英属哥伦比亚大学（UBC）的健康专家和讲师。'
      },
      {
        en: 'Emma worked for a football team in Manchester, then for a very successful rugby team in Dublin, and finally ended up working here in Vancouver. Emma says it\'s challenging to be a health expert, because people can be easily influenced by advertisements that lack scientific support. Also, people aren\'t willing to change their views about food and nutrition as there is so much confusing information online.',
        zh: 'Emma曾在曼彻斯特为一支足球队工作，然后在都柏林为一支非常成功的橄榄球队工作，最后来到温哥华工作。Emma说，成为健康专家很有挑战性，因为人们很容易受到缺乏科学依据的广告的影响。此外，由于网上有太多令人困惑的信息，人们不愿意改变他们对食物和营养的看法。'
      },
      {
        en: 'It\'s really important to hear what experts say and that\'s why we\'ve invited Emma here. She isn\'t going to tell us about everything we should eat, but she will teach us to make better choices. Let\'s welcome Emma Wilson.',
        zh: '听取专家的意见真的很重要，这就是为什么我们邀请了Emma。她不会告诉我们应该吃的一切，但她会教我们做出更好的选择。让我们欢迎Emma Wilson。'
      }
    ]
  },
  {
    id: 'gk2022-011',
    title: 'Alice\'s Journey Overcoming Anxiety',
    cnTitle: '爱丽丝克服焦虑的旅程',
    description: '本文讲述了作者Alice克服焦虑的心路历程。去年年初，Alice因完美主义倾向而备受焦虑困扰。在参加野生动物保护主义者Grant Brown的演讲后，她逐渐建立起自信，参加了世界青年野生动物大会并加入青年自然保护组织。文章传达的核心信息是：行动是焦虑最大的敌人。',
    category: '生活',
    wordCount: 342,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      {
        en: 'My name is Alice. Early last year, I was troubled by an anxiety that crippled my ability to do anything. I felt like a storm cloud hung over me. For almost a year I struggled on, constantly staring at this wall that faced me. My perfectionist tendencies were the main root of this: I wanted to be perfect at whatever I did, which obviously in life is not possible, but it consumed me.',
        zh: '我叫Alice。去年年初，我被一种焦虑所困扰，它使我无法做任何事情。我感觉就像有一团暴风雨云笼罩着我。将近一年的时间里，我苦苦挣扎，不断面对着眼前这堵墙。我的完美主义倾向是这一切的主要根源：我希望无论做什么都做到完美，而这在生活中显然是不可能的，但它却吞噬了我。'
      },
      {
        en: 'One day, I attended a presentation by wildlife conservationist Grant Brown at my high school. His presentation not only awed and inspired me, but also helped emerge an inner desire to make a difference in the world. I joined a pre-presentation dinner with him and that smaller setting allowed me to slowly build up my courage to speak one-on-one with him — an idea that had seemed completely impossible. This first contact was where my story began.',
        zh: '有一天，我在高中参加了野生动物保护主义者Grant Brown的演讲。他的演讲不仅让我敬畏和受到启发，还激发了我内心深处想要改变世界的渴望。我参加了他演讲前的晚餐会，那个较小的场合让我慢慢鼓起勇气与他一对一交谈——这在以前似乎是完全不可能的。这第一次接触就是我的故事开始的地方。'
      },
      {
        en: 'A month later, Brown invited me to attend the World Youth Wildlife Conference. Looking back, I now see that this would be the first in a series of timely opportunities that my old self would have let pass, but that this new and more confident Alice enthusiastically seized. Shortly after I received his invitation, applications to join the Youth for Nature and the Youth for Planet groups were sent around through my high school. I decided to commit to completing the applications, and soon I was a part of a growing global team of young people working to protect nature. Each of these new steps continued to grow my confidence.',
        zh: '一个月后，Brown邀请我参加世界青年野生动物大会。回首往事，我现在意识到这将是一系列及时机会中的第一个，而过去的我可能会让这些机会溜走，但这个全新、更自信的Alice热情地抓住了它。收到邀请后不久，加入\"青年为自然\"和\"青年为地球\"组织的申请表在我高中传开了。我决定完成这些申请，很快我就成为了一个不断壮大的全球青年保护自然团队的一员。每一步新的尝试都不断增强了我的信心。'
      },
      {
        en: 'I am writing this just six months since my journey began and I\'ve realised that my biggest obstacle this whole time was myself. It was that voice in the back of my head telling me that one phrase that has stopped so many people from reaching their potential: I can\'t. They say good things come to those who wait; I say: grab every opportunity with everything you have and be impatient. After all, nature does not require our patience, but our action.',
        zh: '我写这篇文章时，距离我的旅程开始仅仅六个月，但我已经意识到这段时间里我最大的障碍就是我自己。那是脑海深处的那个声音，不断告诉我一句让那么多人无法发挥潜力的话：我不行。人们说好事情会降临到耐心等待的人身上；我说：倾尽所有抓住每一个机会，不要等待。毕竟，大自然不需要我们的耐心，而需要我们的行动。'
      }
    ]
  },
  {
    id: 'gk2022-012',
    title: 'Tom and the Fun Bottle',
    cnTitle: '汤姆和有趣的瓶子',
    description: '本文讲述15岁发明家Tom的故事。看到学校孩子们普遍饮用含糖饮料，他从妈妈制作水果浸泡水中获得灵感，发明了带有滤网的Fun Bottle，让人们在外出时也能健康饮水。Tom将部分利润捐赠给健康组织，并鼓励青少年勇于创新、持之以恒。',
    category: '科技',
    wordCount: 272,
    coverColor: 'bg-rose-500',
    paragraphs: [
      {
        en: 'Tom, a 15-year-old inventor and entrepreneur, witnessed at his own school the widespread consumption of sugary drinks by kids. He knew there had to be a better portable drink solution and decided to innovate from something he saw in his own home: fruit infused water.',
        zh: '15岁的发明家和企业家Tom在自己的学校里目睹了孩子们普遍饮用含糖饮料的现象。他知道一定有更好的便携式饮品解决方案，于是决定从他在家里看到的东西中进行创新：水果浸泡水。'
      },
      {
        en: 'Tom watched his mum make healthy fruit infusions but then struggle for a take-along option. From observing his mum and from his desire to give kids better drink options, he came up with his original model for the Fun Bottle. \"I wanted to come up with a healthy, natural way for people to drink when on the go. A big part of my mission is to get people of all ages off sugary drinks,\" Tom explains.',
        zh: 'Tom看着妈妈制作健康的水果浸泡水，但外出携带很不方便。通过观察妈妈以及他想给孩子们提供更好的饮品选择的愿望，他想出了Fun Bottle的原始模型。Tom解释道：\"我想找到一种健康、自然的方式，让人们在出行时也能喝到好饮料。我的使命很大一部分就是让所有年龄段的人远离含糖饮料。\"'
      },
      {
        en: 'The bottle is made with a strainer that allows the great tastes and natural sugars of the various fruits and vegetables you choose to come through the water, without any of the seeds or skins flowing through.',
        zh: '这个瓶子带有一个滤网，让你选择的各种水果和蔬菜的美味和天然糖分能够渗透到水中，而种子和果皮不会流出来。'
      },
      {
        en: 'Tom is proud of his design and excited to be selling the Fun Bottle on his website and in stores, but this 15-year-old is most proud of the opportunities that Fun Bottle presents to others. It helps to provide healthy alternatives to sugary drinks; and also Tom donates part of the profits to the Organisation for a Healthier Generation (OHG).',
        zh: 'Tom为自己的设计感到骄傲，也很兴奋能在自己的网站和商店里销售Fun Bottle，但这位15岁的少年最自豪的是Fun Bottle为他人带来的机会。它有助于为含糖饮料提供健康的替代品；而且Tom还将部分利润捐赠给\"更健康一代组织\"（OHG）。'
      },
      {
        en: 'Tom has been awarded several prizes, but this teenage innovator remains humble. When asked what advice he\'d give other entrepreneurial youth, he says, \"Prepare and have your family\'s support. It is important to know from beginning that there are a lot of highs and lows, and there is no such thing as overnight success.\"',
        zh: 'Tom已经获得了多个奖项，但这位青少年创新者仍然保持谦逊。当被问及他会给其他创业青年什么建议时，他说：\"做好准备，获得家人的支持。从一开始就要知道，会有很多起伏，没有所谓的 overnight success（一夜成名）。\"'
      }
    ]
  },
  {
    id: 'gk2022-013',
    title: 'Tips for College Life',
    cnTitle: '大学生活小贴士',
    description: '本文是给即将进入大学的高中毕业生的建议。文章从四个方面提供指导：目标设定（将长期目标分解为可行的小目标）、人际交往技能（主动提问、倾听、换位思考）、学习方法（整合信息、做研究、写论文，关键是做好规划）、预算管理（优先满足基本需求，同时留出储蓄和娱乐开支）。',
    category: '教育',
    wordCount: 327,
    coverColor: 'bg-violet-500',
    paragraphs: [
      {
        en: 'Getting into college is a big step for high school graduates, and it comes with a lot of changes. For most students, it\'s the first time they\'re living away from home and managing their own life. Not surprisingly, adapting to this new lifestyle can be challenging. The following four tips will make high school graduates better prepared for college life.',
        zh: '进入大学是高中毕业生的一大步，随之而来的是许多变化。对大多数学生来说，这是他们第一次离家生活并管理自己的生活。毫无疑问，适应这种新的生活方式可能具有挑战性。以下四条建议将帮助高中毕业生更好地为大学生活做准备。'
      },
      {
        en: 'Goal setting: When setting goals, whether they\'re academic, career, or personal, remember they should be attainable but not too easy, so that you really have to push yourself to achieve them, and feel rewarded when you do. Writing down your goals and breaking down each huge, long-term goal into smaller, more practical ones can help make it feel more real, and writing out a plan for achieving it can give you a roadmap to success.',
        zh: '目标设定：在设定目标时，无论是学业、职业还是个人目标，记住它们应该是可实现的但不要太容易，这样你才真正需要努力才能实现，并在达成时感到有回报。写下你的目标，把每个宏大的长期目标分解成更小、更实际的目标，这会让目标感觉更真实；而写出实现目标的计划则能给你一张通往成功的路线图。'
      },
      {
        en: 'Interpersonal skills: At college, you will interact with fellow students, professors, librarians, and many others. Strong interpersonal skills will help you build relationships during this time, and get more out of them. If you feel that your interpersonal skills need some work, practice asking thoughtful questions and listening closely, develop your understanding by putting yourself in someone else\'s shoes, and enhance your self-confidence.',
        zh: '人际交往技能：在大学里，你将与同学、教授、图书管理员以及许多其他人互动。强大的人际交往技能将帮助你在这段时间建立关系，并从中获得更多。如果你觉得你的人际交往技能需要提升，练习提出深思熟虑的问题并认真倾听，通过换位思考来培养理解力，并增强自信心。'
      },
      {
        en: 'Studying: With fewer in-class hours and more on-your-own learning, you\'re required to really digest learning material rather than simply memorize facts. To be successful in college you\'ll need to learn how to integrate large amounts of information obtained through reading, do research, and write papers. Organization is the key, so if you are not someone who is naturally organized, set up your study schedule.',
        zh: '学习方法：随着课堂时间减少、自主学习增多，你需要真正消化学习材料，而不是简单地记忆事实。要在大学取得成功，你需要学会如何整合通过阅读获得的大量信息，进行研究并撰写论文。组织能力是关键，所以如果你不是天生有条理的人，那就制定你的学习计划。'
      },
      {
        en: 'Budgeting: Managing money is a critical life skill, and for many, it is at college that they develop it for the first time. Start by estimating your financial balance. Then give high priority to the expenses on basic needs and determine how much money to set aside every month to cover those costs. Don\'t forget about savings... and the fun stuff (movies, dinners out), too.',
        zh: '预算管理：管理金钱是一项关键的生活技能，对许多人来说，他们是在大学第一次培养这项技能的。首先估算你的财务收支平衡。然后优先满足基本需求的支出，并确定每月留出多少钱来支付这些费用。别忘了储蓄……还有娱乐开支（电影、外出就餐）也要考虑在内。'
      }
    ]
  },
  {
    id: 'gk2022-014',
    title: 'The Secret of a Good Life',
    cnTitle: '美好生活的秘诀',
    description: '本文探讨美好生活的秘诀。文章引用爱默生的名言开篇，指出大多数人忽视了对世界的责任。作者认为美好生活是一个过程而非状态，需要通过服务他人来获得，并提出了美好生活的两个要素：爱心（出于热爱而非义务去做事）和知识（光有爱心不够，还需要准确的世界知识来引导）。',
    category: '生活',
    wordCount: 356,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      {
        en: 'Ralph Emerson once said that the purpose of life is not to be happy, but to be useful, to be loving, to make some difference in the world. While we appreciate such words of wisdom, we rarely try to follow them in our lives. Most people prefer to live a good life themselves, ignoring their responsibilities for the world. This narrow perception of a good life may provide short-term benefits, but is sure to lead to long-term harm and suffering.',
        zh: 'Ralph Emerson曾经说过，生活的目的不是快乐，而是有用、有爱心、在世界上有所作为。虽然我们欣赏这样的智慧之言，但我们却很少在生活中践行它们。大多数人只想过好自己的生活，忽视了对世界的责任。这种对美好生活的狭隘认知可能带来短期的好处，但一定会导致长期的伤害和痛苦。'
      },
      {
        en: 'A good life based on comfort and luxury may eventually lead to more pain because we spoil our health and even our character, principles, ideals, and relationships. What then, is the secret of a good life? A good life is a process, not a state of being; a direction, not a destination. We have to earn a good life by first serving others without any expectation in return because their happiness is the very source of our own happiness.',
        zh: '建立在舒适和奢华基础上的美好生活最终可能导致更多的痛苦，因为我们会损害自己的健康，甚至损害品格、原则、理想和人际关系。那么，美好生活的秘诀是什么呢？美好生活是一个过程，而不是一种状态；是一个方向，而不是一个终点。我们必须通过首先无私地服务他人来赢得美好生活，因为他们的幸福正是我们自己幸福的源泉。'
      },
      {
        en: 'More importantly, we must know ourselves inside out. Only when we examine ourselves deeply can we discover our abilities and recognize our limitations, and then work accordingly to create a better world. The first requirement for a good life is having a loving heart. When we do certain right things merely as a duty, we find our job so tiresome that we\'ll soon burn out. However, when we do that same job out of love, we not only enjoy what we do, but also do it with an effortless feeling.',
        zh: '更重要的是，我们必须彻底地了解自己。只有当我们深入审视自己时，才能发现自己的能力并认识到自己的局限性，然后据此努力创造一个更美好的世界。美好生活的第一个要求是拥有一颗爱心。当我们仅仅出于义务去做某些正确的事情时，我们会发现工作如此乏味，很快就会疲惫不堪。然而，当我们出于热爱去做同样的工作时，我们不仅会享受所做之事，而且会 effortless（轻松自如）地完成它。'
      },
      {
        en: 'However, love alone is insufficient to lead a good life. Love sometimes blinds us to the reality. Consequently, our good intentions may not lead to good results. To achieve desired outcome, those who want to do good to others also need to equip themselves with accurate world knowledge. False knowledge is more dangerous than ignorance. If love is the engine of a car, knowledge is the steering wheel. If the engine lacks power, the car can\'t move; if the driver loses control of the steering, a road accident probably occurs. Only with love in heart and the right knowledge in mind can we lead a good life.',
        zh: '然而，仅有爱心不足以过上美好的生活。爱有时会使我们对现实视而不见。因此，我们的善意可能不会带来好的结果。为了实现期望的结果，想要善待他人的人还需要具备准确的世界知识。错误的知识比无知更危险。如果爱是汽车的引擎，知识就是方向盘。如果引擎缺乏动力，汽车就无法移动；如果司机失去对方向盘的控制，就可能发生车祸。只有心中有爱、头脑中有正确的知识，我们才能过上美好的生活。'
      }
    ]
  },
  {
    id: 'gk2022-015',
    title: 'Airport Farewell',
    cnTitle: '机场告别',
    description: '这是一段简短的机场告别听力对话。男士因航班即将起飞而要进入登机口，与女士（和Bob）道别，并邀请对方到悉尼时联系自己。',
    category: '生活',
    wordCount: 37,
    coverColor: 'bg-orange-500',
    paragraphs: [
      {
        en: 'W: That\'s okay. Bob and I are glad you came to see us.\nM: Oh, I have to go in. My flight will take off soon. Do contact me when you\'re in Sydney.\nW: Sure, we will.',
        zh: '女士：没关系。Bob和我很高兴你来看我们。\n男士：哦，我得进去了。我的航班马上就要起飞了。你到悉尼时一定要联系我。\n女士：当然，我们会的。'
      }
    ]
  },
  {
    id: 'gk2022-016',
    title: 'Interview with Emily',
    cnTitle: '艾米丽访谈',
    description: '这是一段对演员Emily的采访听力对话。Emily在新一季《窈窕淑女》中无偿演出以筹集后期制作资金。她分享了自己在电影、电视、戏剧等多领域发展的经历，以及在电影中心工作坊教授年轻演员、与艺术家合作的宝贵体验。',
    category: '文化',
    wordCount: 188,
    coverColor: 'bg-teal-500',
    paragraphs: [
      {
        en: 'M: Emily, thank you for taking time out of your busy schedule to answer a few questions.\nW: It\'s my pleasure.\nM: People say you\'re doing unpaid work in the new season of My Fair Lady. Is this what the show business has become?\nW: No, not really. All of my acting in the new season is unpaid, but the crew is paid. This is to raise money for the post-production of the show.',
        zh: '男士：Emily，感谢你在百忙之中抽出时间回答几个问题。\n女士：这是我的荣幸。\n男士：有人说你在新一季的《窈窕淑女》中无偿演出。娱乐行业已经变成这样了吗？\n女士：不，不尽然。我在新一季中的所有表演都是无偿的，但剧组人员是有报酬的。这是为了筹集节目后期制作的资金。'
      },
      {
        en: 'M: I notice you\'ve tried many different kinds of things: film, TV, and even theater.\nW: Yeah, that\'s how I was trained at university. I work on anything that excites me.',
        zh: '男士：我注意到你尝试了很多不同类型的工作：电影、电视，甚至戏剧。\n女士：是的，这就是我在大学接受训练的方式。我从事任何让我兴奋的工作。'
      },
      {
        en: 'M: Tell us about the six months you recently spent at the workshop of the Film Center.\nW: It was an unbelievable experience — teaching young actors and actresses, and working with some great acting artists. It was also great to work in various labs, such as directors, writers and so on. It\'s very helpful for making you a really well-rounded and active member of the film and television industry.\nM: Thank you very much, Emily. We look forward to your new season.',
        zh: '男士：告诉我们你最近在电影中心工作坊度过的六个月。\n女士：那是一次难以置信的经历——教授年轻演员，与一些伟大的表演艺术家合作。在各种实验室（如导演、编剧等）工作也很棒。这对你成为真正全面发展的影视行业活跃成员非常有帮助。\n男士：非常感谢你，Emily。我们期待你的新一季节目。'
      }
    ]
  },

  // ===== 2023 高考英语 =====

{
    id: 'gk2023-001',
    title: 'Amsterdam Bike Rental & Guided Tours',
    cnTitle: '阿姆斯特丹自行车租赁与导览',
    description: '本文是一篇应用文，主要介绍了阿姆斯特丹MacBike自行车租赁公司的服务。文章涵盖了自行车租赁的优势、公司背景、各种车型选择、价格信息以及2.5小时城市导游游览的详情。',
    category: '生活',
    wordCount: 173,
    coverColor: 'bg-amber-500',
    paragraphs: [
      {
        en: 'Welcome to Amsterdam, welcome to MacBike. You see much more from the seat of a bike! Cycling is the most economical, sustainable and fun way to explore the city, with its beautiful canals, parks, squares and countless lights. You can also bike along lovely landscapes outside of Amsterdam.',
        zh: '欢迎来到阿姆斯特丹，欢迎来到MacBike。从自行车座位上你能看到更多！骑自行车是探索这座城市最经济、最可持续和最有趣的方式，这里有美丽的运河、公园、广场和无数的灯光。你也可以在阿姆斯特丹郊外美丽的风景中骑行。'
      },
      {
        en: 'MacBike has been around for almost 30 years and is the biggest bicycle rental company in Amsterdam. With over 2,500 bikes stored in our five rental shops at strategic locations, we make sure there is always a bike available for you. We offer the newest bicycles in a wide variety, including basic bikes with foot brake, bikes with hand brake and gears, bikes with child seats, and children\'s bikes.',
        zh: 'MacBike已经经营了近30年，是阿姆斯特丹最大的自行车租赁公司。我们在五个 strategically located 的租赁店存放了超过2500辆自行车，确保总有适合你的自行车。我们提供各种最新款式的自行车，包括带脚刹的基本自行车、带手刹和排挡的自行车、带儿童座椅的自行车和儿童自行车。'
      },
      {
        en: 'The 2.5-hour tour covers the Gooyer Windmill, the Skinny Bridge, the Rijksmuseum, Heineken Brewery and much more. The tour departs from Dam Square every hour on the hour, starting at 1:00 pm every day. You can buy your ticket in a MacBike shop or book online.',
        zh: '2.5小时的游览涵盖了Gooyer风车、Skinny Bridge、Rijksmuseum、Heineken Brewery等景点。游览每天从下午1点开始，每小时整点从Dam Square出发。你可以在MacBike门店购票或在线预订。'
      }
    ]
  },

  {
    id: 'gk2023-002',
    title: 'John Todd and the Eco-Machine',
    cnTitle: '约翰·托德与生态机器',
    description: '本文讲述了美国生态学家约翰·托德的故事，他从小观察自然，后来发明了一种"生态机器"，利用动植物的自然作用来净化污水和污泥。文章介绍了他的实验过程以及这项技术在世界各地的推广应用，体现了仿生学在环境保护中的重要作用。',
    category: '环境',
    wordCount: 329,
    coverColor: 'bg-blue-500',
    paragraphs: [
      {
        en: 'When John Todd was a child, he loved to explore the woods around his house, observing how nature solved problems. A dirty stream, for example, often became clear after flowing through plants and along rocks where tiny creatures lived. When he got older, John started to wonder if this process could be used to clean up the messes people were making.',
        zh: '当约翰·托德还是个孩子的时候，他喜欢探索房子周围的树林，观察大自然是如何解决问题的。例如，一条肮脏的溪流，在流经植物和微小生物居住的岩石后，往往变得清澈。长大后，约翰开始思考这个过程是否可以用来清理人们制造的混乱。'
      },
      {
        en: 'After studying agriculture, medicine, and fisheries in college, John went back to observing nature and asking questions. Why can certain plants trap harmful bacteria? Which kinds of fish can eat cancer-causing chemicals? With the right combination of animals and plants, he figured, maybe he could clean up waste the way nature did. He decided to build what he would later call an eco-machine.',
        zh: '在大学学习了农业、医学和渔业之后，约翰又回到了观察自然和提出问题的生活中。为什么某些植物能捕获有害细菌？哪些鱼类会食用致癌化学物质？他认为，通过正确的动植物组合，也许他可以像大自然那样清理废物。他决定建造一台他后来称之为"生态机器"的设备。'
      },
      {
        en: 'The task John set for himself was to remove harmful substances from some sludge. First, he constructed a series of clear fiberglass tanks connected to each other. Then he went around to local ponds and streams and brought back some plants and animals. He placed them in the tanks and waited. Little by little, these different kinds of life got used to one another and formed their own ecosystem. After a few weeks, John added the sludge.',
        zh: '约翰给自己定的任务是去除一些污泥中的有害物质。首先，他建造了一系列相互连接的透明玻璃纤维罐。然后他去了当地的池塘和溪流，带回了一些植物和动物。他把它们放在罐子里，等待着。渐渐地，这些不同种类的生命相互适应，形成了自己的生态系统。几个星期后，约翰加入了污泥。'
      },
      {
        en: 'He was amazed at the results. The plants and animals in the eco-machine took the sludge as food and began to eat it! Within weeks, it had all been digested, and all that was left was pure water.',
        zh: '他对结果感到惊讶。生态机器里的动植物把污泥当成了食物，开始吃起来！几周之内，污泥都被消化了，剩下的就只是纯净的水。'
      },
      {
        en: 'Over the years, John has taken on many big jobs. He developed a greenhouse-like facility that treated sewage from 1,600 homes in South Burlington. He also designed an eco-machine to clean canal water in Fuzhou, a city in southeast China.',
        zh: '这些年来，约翰承担了许多重大工作。他开发了一个类似温室的设施，可以处理来自南伯灵顿1600户家庭的污水。他还设计了一种生态机器来清洁中国东南部城市福州的运河水。'
      },
      {
        en: 'Ecological design is the name John gives to what he does. Life on Earth is kind of a box of spare parts for the inventor, he says. You put organisms in new relationships and observe what is happening. Then you let these new systems develop their own ways to self-repair.',
        zh: '"生态设计"是约翰给他所做的事情起的名字。他说："地球上的生命就像是发明家的一箱备用零件。你把生物体放在新的关系中，观察会发生什么。然后你让这些新系统自行发展自我修复的方式。"'
      }
    ]
  },

  {
    id: 'gk2023-003',
    title: 'Digital Minimalism',
    cnTitle: '数字极简主义',
    description: '本文介绍了"数字极简主义"这一生活哲学，主张通过为期30天的"数字清理"来摆脱对数字工具的依赖成瘾，重新发现线下活动的深层满足感。文章阐述了这种哲学的理论基础、实施方法以及预期效果，帮助读者建立更有意识的科技使用习惯。',
    category: '科技',
    wordCount: 314,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      {
        en: 'The goal of this book is to make the case for digital minimalism, including a more detailed exploration of what it asks and why it works, and then to teach you how to adopt this philosophy if you decide it is right for you.',
        zh: '这本书的目标是为数字极简主义提供论证，包括更详细地探讨它的要求和原理，然后教你如何采纳这种哲学，如果你认为它适合你。'
      },
      {
        en: 'To do so, I divided the book into two parts. In part one, I describe the philosophical underpinnings of digital minimalism, starting with a closer examination of the forces that are making so many people\'s digital lives increasingly intolerable, before moving on to a detailed discussion of the digital minimalism philosophy, including my argument for why it is the right solution to these problems.',
        zh: '为此，我将这本书分为两部分。在第一部分中，我描述了数字极简主义的哲学基础，首先仔细研究了使许多人的数字生活越来越难以忍受的力量，然后详细讨论了数字极简主义哲学，包括我的论点，解释为什么它是解决这些问题的正确方案。'
      },
      {
        en: 'Part one concludes by introducing my suggested method for adopting this philosophy: the digital declutter. As I have argued, aggressive action is needed to fundamentally transform your relationship with technology. The digital declutter provides this aggressive action.',
        zh: '第一部分最后介绍了我的建议方法：数字清理。正如我所论述的，需要采取积极的行动来从根本上改变你与科技的关系。数字清理提供了这种积极的行动。'
      },
      {
        en: 'This process requires you to step away from optional online activities for thirty days. During this period, you will wean yourself from the cycles of addiction that many digital tools can instill, and begin to rediscover the analog activities that provide you deeper satisfaction. You will take walks, talk to friends in person, engage your community, read books, and stare at the clouds.',
        zh: '这个过程要求你在三十天内远离可选的在线活动。在此期间，你将摆脱许多数字工具灌输的成瘾循环，并开始重新发现能为你提供更深层次满足感的模拟活动。你会散步、与朋友面对面交谈、参与社区活动、读书、仰望云彩。'
      },
      {
        en: 'Most importantly, the declutter gives you the space to refine your understanding of the things you value most. At the end of the thirty days, you will then add back a small number of carefully chosen online activities that you believe will provide massive benefit to these things you value. Going forward, you will do your best to make these intentional activities the core of your online life, leaving behind most of the other distracting behaviors that used to fragment your time and snare your attention. The declutter acts as a jarring reset: you come into the process a frazzled maximalist and leave an intentional minimalist.',
        zh: '最重要的是，清理让你有空间来完善你对最珍视事物的理解。三十天结束时，你将重新添加少量精心挑选的在线活动，你认为这些活动会为你珍视的事物带来巨大的好处。展望未来，你将尽最大努力让这些有目的的活动成为你在线生活的核心——抛弃大多数以前分散你时间和注意力的干扰行为。清理就像一个令人警醒的重置：你以一个疲惫不堪的极大主义者进入这个过程，然后以一个有目的的极简主义者离开。'
      }
    ]
  },

  {
    id: 'gk2023-004',
    title: 'The Wisdom of Crowds',
    cnTitle: '群体智慧',
    description: '本文探讨了"群体智慧"这一统计学现象，解释了为什么大量独立估计的平均值往往比个人估计更准确。文章还介绍了Navajas的最新研究发现：经过小组讨论后的群体平均值甚至比同等数量的独立个体平均值更准确，这对群体决策具有重要启示。',
    category: '社会',
    wordCount: 338,
    coverColor: 'bg-rose-500',
    paragraphs: [
      {
        en: 'On March 7, 1907, the English statistician Francis Galton published a paper which illustrated what has come to be known as the "wisdom of crowds" effect. The experiment of estimation he conducted showed that in some cases, the average of a large number of independent estimates could be quite accurate.',
        zh: '1907年3月7日，英国统计学家弗朗西斯·高尔顿发表了一篇论文，阐述了所谓的"群体智慧"效应。他进行的估算实验表明，在某些情况下，大量独立估算的平均值可能相当准确。'
      },
      {
        en: 'This effect capitalizes on the fact that when people make errors, those errors are not always the same. Some people will tend to overestimate, and some to underestimate. When enough of these errors are averaged together, they cancel each other out, resulting in a more accurate estimate. If people are similar and tend to make the same errors, then their errors will not cancel each other out.',
        zh: '这种效应利用了这样一个事实：当人们犯错误时，这些错误并不总是相同的。有些人会倾向于高估，有些人则会低估。当足够多的这些错误被平均在一起时，它们会相互抵消，从而产生更准确的估计。如果人们相似并且倾向于犯同样的错误，那么他们的错误就不会相互抵消。'
      },
      {
        en: 'In more technical terms, the wisdom of crowds requires that people\'s estimates be independent. If for whatever reasons, people\'s errors become correlated or dependent, the accuracy of the estimate will go down.',
        zh: '用更专业的术语来说，群体智慧要求人们的估计是独立的。如果由于某种原因，人们的错误变得相关或依赖，估计的准确性就会下降。'
      },
      {
        en: 'But a new study led by Joaquin Navajas offered an interesting twist on this classic phenomenon. The key finding of the study was that when crowds were further divided into smaller groups that were allowed to have a discussion, the averages from these groups were more accurate than those from an equal number of independent individuals. For instance, the average obtained from the estimates of four discussion groups of five was significantly more accurate than the average obtained from 20 independent individuals.',
        zh: '但Joaquin Navajas领导的一项新研究为这个经典现象提供了一个有趣的转折。该研究的关键发现是，当人群被进一步分成允许讨论的小组时，这些小组的平均值比同样数量的独立个体的平均值更准确。例如，来自四个五人讨论组的估算平均值明显比来自20个独立个体的平均值更准确。'
      },
      {
        en: 'In a follow-up study with 100 university students, the researchers tried to get a better sense of what the group members actually did in their discussion. Did they tend to go with those most confident about their estimates? Did they follow those least willing to change their minds? This happened some of the time, but it was not the dominant response. Most frequently, the groups reported that they "shared arguments and reasoned together." Somehow, these arguments and reasoning resulted in a global reduction in error.',
        zh: '在一项针对100名大学生的后续研究中，研究人员试图更好地了解小组成员在讨论中实际做了什么。他们是否倾向于跟随那些对自己估计最有信心的人？他们是否跟随那些最不愿意改变想法的人？这种情况有时会发生，但并不是主要的反应。最常见的是，小组报告说他们"分享论点并共同推理"。不知何故，这些论点和推理导致了全局误差的减少。'
      },
      {
        en: 'Although the studies led by Navajas have limitations and many questions remain, the potential implications for group discussion and decision-making are enormous.',
        zh: '尽管Navajas领导的研究有局限性，许多问题仍然存在，但对小组讨论和决策的潜在影响是巨大的。'
      }
    ]
  },

  {
    id: 'gk2023-005',
    title: 'Personal Forgiveness',
    cnTitle: '个人宽恕',
    description: '本文是一篇关于自我宽恕的说明文，介绍了一种通过写作练习来培养自我宽恕的方法。文章建议读者列出自己的优点和善举清单，以此增强自信，并强调犯错是人类天性，是成长和发展的积极途径。',
    category: '生活',
    wordCount: 296,
    coverColor: 'bg-violet-500',
    paragraphs: [
      {
        en: 'Taking responsibility for mistakes is a positive step, but do not beat yourself up about them. To err is human. It is just as important to show yourself some forgiveness. You can use the following writing exercise to help you do this.',
        zh: '为错误承担责任是积极的一步，但不要因此而自责。是人都会犯错。宽恕自己也同样重要。你可以使用下面的写作练习来帮助你做到这一点。'
      },
      {
        en: 'In a journal or on a piece of paper, put the heading "Personal strengths." Now list all the characteristics you like about yourself. Are you caring? Creative? Generous? A good listener? Fun to be around? They do not have to be world-changing, just aspects of your personality that you are proud of.',
        zh: '在日记本或一张纸上，写下标题"个人优点"。列出所有自己身上你喜欢的特质：你是否关心他人？有创造力？慷慨大方？善于倾听？和你在一起有意思吗？它们不必是改变世界的特质，只要是你引以为豪的某些个性方面就行。'
      },
      {
        en: 'At the top of a second page, put the heading "Acts of kindness." On this one, list all the positive things you have done for others. It might be the time when you helped a friend with their homework, when you did the ironing without being asked, or when you baked cookies after the family had had a tiring day. Whatever it is, no matter how small it might seem, write it down.',
        zh: '在第二页的顶部，写下标题"善举"。在这一页上，列出所有你为他人做过的积极的事情。可能是你帮助朋友做作业的时候，你不请自来做熨烫的时候，或者在家人们度过了疲惫的一天后你烤饼干的时候。不管是什么，不管看起来有多不重要，都要把它写下来。'
      },
      {
        en: 'You could ask a friend or family member to help add to your list. They might even like to have a go at doing the exercise. That way, you could exchange thoughts on what makes each of you special and the aspects of your personality that shine through. In fact, do not wait until you have made a mistake to try this, it is a great way to boost self-confidence at any time.',
        zh: '你可以请朋友或家人帮助补充你的清单。他们甚至可能想尝试做这个练习。这样，你们可以交流是什么让你们每个人特别，以及你们个性中闪耀的方面。事实上，不要等到犯了错误才尝试这个——这是在任何时候增强自信的好方法。'
      },
      {
        en: 'It is something of a cliche that most people learn not from their successes but their mistakes. The thing is, it is true. Whatever the mistake, remember it is not a fixed aspect of your personality. We are all changing and learning all the time and mistakes are a positive way to develop and grow.',
        zh: '大多数人不是从自己的成功中学习，而是从其错误中学习，这是老生常谈。但事实是，情况确实如此。不管你犯的是什么错误，记住这不是你性格中固定的一面。我们一直在改变和学习，犯错是进步和成长的积极方式。'
      }
    ]
  },

  {
    id: 'gk2023-006',
    title: 'A Race of Kindness',
    cnTitle: '善意竞赛',
    description: '本文讲述了明尼苏达州越野赛中感人一幕：选手Melanie Bailey在比赛中途停下来帮助受伤 competitor Danielle Lenoue，背着她冲过终点线并送到医疗点。两人因此成为朋友，虽然都没有赢得比赛，但人性的善良赢得了赞誉。',
    category: '生活',
    wordCount: 230,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      {
        en: 'On Oct. 11, hundreds of runners competed in a cross-country race in Minnesota. Melanie Bailey should have finished the course earlier than she did. Her delay came because she was carrying a competitor across the finish line.',
        zh: '10月11日，数百名跑步爱好者在明尼苏达州参加了一场越野赛跑。梅勒妮·贝利本应比实际情况更早完成赛程。她的延误是因为她正背着一名竞争对手冲过终点线。'
      },
      {
        en: 'As reported by a local newspaper, Bailey was more than two-thirds of the way through her race when a runner in front of her began crying in pain. She stopped to help her fellow runner, Danielle Lenoue. Bailey took her arm to see if she could walk forward with aid. She could not. Bailey then bent down to let Lenoue climb onto her back and carried her all the way to the finish line, then another 300 feet to where Lenoue could get medical attention.',
        zh: '据当地一家报纸报道，贝利在比赛全程已过三分之二时，前方一名跑者突然疼得哭了起来。她停下来帮助这位同为参赛者的 Danielle Lenoue。贝利搀着她的胳膊，想看看是否能扶着她往前走。她无法行走。贝利随后弯下腰，让 Lenoue 爬到她的背上，背着她一路走到终点线，然后再走300英尺到达 Lenoue 可以接受医疗救治的地方。'
      },
      {
        en: 'Once there, Lenoue was assessed and later taken to a hospital, where she learned that she had serious injuries in one of her knees. She would have struggled with extreme pain to make it to that aid checkpoint without Bailey\'s help.',
        zh: '到达那里后，Lenoue 接受了检查，随后被送往医院。她在那里得知自己其中一只膝盖受了重伤。如果没有贝利的帮助，她要在极度痛苦中挣扎着到达那个救援检查站。'
      },
      {
        en: 'As for Bailey, she is more confused about why her act is considered a big deal. "She was just crying. I could not leave her," Bailey told the reporter. "I feel like I was just doing the right thing."',
        zh: '至于贝利，她更困惑的是为什么自己的行为被认为是一件了不起的大事。"她当时一直在哭，我不能丢下她，"贝利告诉记者，"我觉得我只是做了正确的事。"'
      },
      {
        en: 'Although the two young women were strangers before the meet, they have since become friends. Neither won the race, but the display of human kindness won the day.',
        zh: '虽然这两个年轻女性在比赛之前是陌生人，但此后她们成了朋友。两人都没有赢得比赛，但人性的善良展示赢得了这一天。'
      }
    ]
  },

  {
    id: 'gk2023-007',
    title: 'Xiao Long Bao: A Chinese Delicacy',
    cnTitle: '小笼包：中国美食',
    description: '本文介绍了中国著名小吃小笼包的特点、食用方法和起源。作者描述了自己对小笼包的喜爱，探讨了上海与南翔关于小笼包发源地的说法，并介绍了优质小笼包的标准特征，包括薄皮、新鲜肉馅和清澈的汤汁。',
    category: '文化',
    wordCount: 198,
    coverColor: 'bg-orange-500',
    paragraphs: [
      {
        en: 'Xiao long bao (soup dumplings), those amazing constructions of delicate dumpling wrappers, encasing hot, tasty soup and sweet, fresh meat, are far and away my favorite Chinese street food. The dumplings arrive steaming and dangerously hot. To eat one, you have to decide whether to bite a small hole in it first, releasing the stream and risking a spill, or to put the whole dumpling in your mouth, letting the hot soup explode on your tongue.',
        zh: '小笼包（汤包），那些精致的饺子皮，包裹着热腾腾的美味汤和甜甜的鲜肉，是我最喜欢的中国街头小吃。这些饺子热气腾腾，非常烫。如果要吃，你必须决定先在饺子上咬一个小洞，释放汤汁，但有可能会溢出，或者将整个饺子放入口中，让热汤在舌尖爆炸。'
      },
      {
        en: 'Shanghai may be the recognized home of the soup dumplings but food historians will actually point you to the neighboring canal town of Nanxiang as Xiao long bao\'s birthplace. There you will find them prepared differently, more dumpling and less soup, and the wrappers are pressed by hand rather than rolled.',
        zh: '上海可能是公认的小笼包之乡，但美食历史学家实际上会告诉你，邻近的运河小镇南翔才是小笼包的发源地。在那里，它们的制作方式不同——更多饺子皮而不是汤，饺子皮是用手压制而不是擀出来的。'
      },
      {
        en: 'Nanxiang aside, the best Xiao long bao have a fine skin, allowing them to be lifted out of the steamer basket without allowing them tearing or spilling any of their contents. The meat should be fresh with a touch of sweetness and the soup hot, clear and delicious.',
        zh: '除了南翔，最好的小笼包应该有一层薄饺子皮，可以使它们从蒸锅中被取出并且不会破裂或泄漏里面的东西。肉馅应该新鲜而微甜，汤应该热、清澈且美味。'
      },
      {
        en: 'No matter where I buy them, one steamer is rarely enough, yet two seems greedy, so I am always left wanting more next time.',
        zh: '无论我在哪里买，一个蒸笼很少足够，但两个又显得贪婪，所以我总是下次还想再吃。'
      }
    ]
  },

  {
    id: 'gk2023-008',
    title: 'Yellowstone Ranger Programs',
    cnTitle: '黄石公园护林员项目',
    description: '本文是一篇应用文，介绍了黄石国家公园今年夏天提供的各种护林员项目，包括黄石野生动物体验、少年护林员野生动物奥运会和艺术家点峡谷讲座等活动的时间、地点和内容。',
    category: '环境',
    wordCount: 176,
    coverColor: 'bg-teal-500',
    paragraphs: [
      {
        en: 'Yellowstone National Park offers a variety of ranger programs throughout the park, and throughout the year. The following are descriptions of the ranger programs this summer.',
        zh: '黄石国家公园全年都提供各种各样的护林员项目。以下是今年夏天护林员项目的描述。'
      },
      {
        en: 'Experiencing Wildlife in Yellowstone (May 26 to September 2): Whether you are hiking a backcountry trail, camping, or just enjoying the park\'s amazing wildlife from the road, this quick workshop is for you and your family. Learn where to look for animals and how to safely enjoy your wildlife watching experience. Meet at the Canyon Village Store.',
        zh: '黄石野生动物体验（5月26日至9月2日）：无论你是在徒步穿越偏远地区的小径、露营，还是只是在路边欣赏公园令人惊叹的野生动物，这个快速研讨会都适合你和你的家人。学习在哪里寻找动物以及如何安全地享受野生动物观赏体验。在 Canyon Village Store 集合。'
      },
      {
        en: 'Junior Ranger Wildlife Olympics (June 5 to August 21): Kids can test their skills and compare their abilities to the animals of Yellowstone. Stay for as little or as long as your plans allow. Meet in front of the Visitor Education Center.',
        zh: '少年护林员野生动物奥运会（6月5日至8月21日）：孩子们可以测试自己的技能，并与黄石公园的动物比较能力。根据你的计划安排，停留时间可长可短。在游客教育中心前集合。'
      },
      {
        en: 'Canyon Talks at Artist Point (June 9 to September 2): From a classic viewpoint, enjoy Lower Falls, the Yellowstone River, and the breathtaking colors of the canyon while learning about the area\'s natural and human history. Discover why artists and photographers continue to be drawn to this special place. Meet on the lower platform at Artist Point on the South Rim Drive for this short talk.',
        zh: '艺术家点峡谷讲座（6月9日至9月2日）：从经典观景点欣赏下瀑布、黄石河和峡谷的壮丽色彩，同时了解该地区的自然和人类历史。探索为什么艺术家和摄影师继续被这个特殊的地方所吸引。在 South Rim Drive 的 Artist Point 下层平台集合参加这个简短的讲座。'
      }
    ]
  },

  {
    id: 'gk2023-009',
    title: 'Urban Sprouts: Gardening for Growth',
    cnTitle: '城市萌芽：园艺促进成长',
    description: '本文介绍了"城市芽"这一学校花园教育项目，该项目在四所低收入学校开展，通过让学生参与翻土、种植、收获等园艺活动，培养他们的科学技能、环保意识和健康生活方式。研究表明，参与项目的学生不仅吃得更健康，自信心和情绪管理能力也有所提升。',
    category: '教育',
    wordCount: 273,
    coverColor: 'bg-amber-500',
    paragraphs: [
      {
        en: 'Turning soil, pulling weeds, and harvesting cabbage sound like tough work for middle and high school kids. And at first it is, says Abby Jaramillo, who with another teacher started Urban Sprouts, a school garden program at four low-income schools. The program aims to help students develop science skills, environmental awareness, and healthy lifestyles.',
        zh: '翻土、拔草、收白菜对初高中孩子来说听起来很辛苦。起初确实如此，艾比·哈拉米洛说。她和另一位老师在四所低收入学校启动了"城市芽"学校花园项目。该项目旨在帮助学生培养科学技能、环保意识和健康的生活方式。'
      },
      {
        en: 'Jaramillo\'s students live in neighborhoods where fresh food and green space are not easy to find and fast food restaurants outnumber grocery stores. "The kids literally come to school with bags of snacks and large bottles of soft drinks," she says. "They come to us thinking vegetables are awful, dirt is awful, insects are awful." Though some are initially scared of the insects and turned off by the dirt, most are eager to try something new.',
        zh: '哈拉米洛的学生住的社区不容易找到新鲜食物和绿色空间，快餐店的数量比杂货店多。她说："孩子们真的带着一袋袋零食和大瓶软饮料来学校。他们来找我们，认为蔬菜很可怕，泥土很可怕，昆虫很可怕。"虽然有些人一开始害怕昆虫，对泥土感到厌烦，但大多数人都渴望尝试新事物。'
      },
      {
        en: 'Urban Sprouts\' classes, at two middle schools and two high schools, include hands-on experiments such as soil testing, flower-and-seed dissection, tastings of fresh or dried produce, and work in the garden. Several times a year, students cook the vegetables they grow, and they occasionally make salads for their entire schools.',
        zh: '"城市芽"的课程包括动手实验，如土壤测试、花卉和种子解剖、品尝新鲜或干燥农产品，以及在花园工作。一年中有几次，学生们会烹饪自己种植的蔬菜，偶尔还会为全校制作沙拉。'
      },
      {
        en: 'Program evaluations show that kids eat more vegetables as a result of the classes. "We have students who say they went home and talked to their parents and now they\'re eating differently," Jaramillo says.',
        zh: '项目评估显示，孩子们因此吃了更多蔬菜。哈拉米洛说："我们有学生说，他们回家和父母谈了谈，现在他们的饮食习惯不同了。"'
      },
      {
        en: 'She adds that the program\'s benefits go beyond nutrition. Some students get so interested in gardening that they bring home seeds to start their own vegetable gardens. Besides, working in the garden seems to have a calming effect on Jaramillo\'s special education students, many of whom have emotional control issues. "They get outside," she says, "and they feel successful."',
        zh: '她补充说，该项目的好处不仅仅在于营养。一些学生对园艺非常感兴趣，他们带回家种子开始自己的菜园。此外，在花园里工作似乎对哈拉米洛的特殊教育学生有镇静作用，他们中的许多人有情绪控制问题。"他们走出去了，"她说，"他们觉得自己很成功。"'
      }
    ]
  },

  {
    id: 'gk2023-010',
    title: 'Reading Art: Art for Book Lovers',
    cnTitle: '阅读艺术：书籍爱好者的艺术',
    description: '本文介绍了《阅读艺术：书籍爱好者的艺术》一书，探讨了书籍在艺术中的呈现方式。文章分析了不同时代和文化中艺术家如何描绘阅读者形象，以及书籍本身如何从珍贵藏品演变为艺术创作的原材料。最后一段原文在来源中被截断。',
    category: '文化',
    wordCount: 275,
    coverColor: 'bg-blue-500',
    paragraphs: [
      {
        en: 'Reading Art: Art for Book Lovers is a celebration of an everyday object, the book, represented here in almost three hundred artworks from museums around the world. The image of the reader appears throughout history, in art made long before books as we now know them came into being. In artists\' representations of books and reading, we see moments of shared humanity that go beyond culture and time.',
        zh: '《阅读艺术：书籍爱好者的艺术》是对一种日常物品——书籍的盛宴，在这本书里通过来自全球各地的近三百件来自博物馆的艺术品来呈现。阅读者的形象贯穿整个历史，早在我们现在所知道的书籍问世之前的艺术作品中就有了描绘。在艺术家对书籍和阅读的描绘中，我们看到了超越文化和时间的人类共性。'
      },
      {
        en: 'In this "book of books," artworks are selected and arranged in a way that emphasizes these connections between different eras and cultures. We see scenes of children learning to read at home or at school, with the book as a focus for relations between the generations. Adults are portrayed alone in many settings and poses, absorbed in a volume, deep in thought or lost in a moment of leisure. These scenes may have been painted hundreds of years ago, but they record moments we can all relate to.',
        zh: '在这本"关于书的书"中，艺术品被挑选和排列，以强调不同时代和文化之间的联系。我们看到孩子们在家里或学校学习阅读的场景，书籍成为代际关系的焦点。成年人在各种场景和姿势中独自出现——沉浸在一卷书中，陷入沉思，或陶醉于闲暇时光。这些场景可能是几百年前绘制的，但它们记录了我们都能感同身受的时刻。'
      },
      {
        en: 'Books themselves may be used symbolically in paintings to demonstrate the intellect, wealth or faith of the subject. Before the wide use of the printing press, books were treasured objects and could be works of art in their own right. More recently, as books have become inexpensive or even throwaway, artists have used them as the raw material for artworks, transforming covers, pages or even complete volumes into paintings and sculptures.',
        zh: '书籍本身可以在绘画中被象征性地使用，以展示主题的才智、财富或信仰。在印刷机广泛使用之前，书籍是珍贵的物品，可能本身就是艺术品。最近，随着书籍变得廉价甚至是一次性的，艺术家们将它们作为艺术品的原材料——将封面、页面甚至整本书转化为绘画和雕塑。'
      },
      {
        en: 'Continued developments in communication technologies were once believed to make the printed page outdated. From a 21st-century point of view, the printed book is certainly ancient, but it remains as interactive as any battery-powered e-reader. To serve its function, a book must be activated by a user: the',
        zh: '通信技术的持续发展曾被认为会使印刷页面过时。从21世纪的角度来看，印刷书籍当然是古老的，但它仍然像任何电池供电的电子阅读器一样具有互动性。为了发挥其功能，用户必须激活一本书：（原文在此处被截断）'
      }
    ]
  },

  {
    id: 'gk2023-011',
    title: 'Wildness in Urban Areas and Human Well-being',
    cnTitle: '城市地区的野性与人类福祉',
    description: '本文介绍了一项关于城市野生自然与人类福祉关系的研究。研究人员通过分析320份公园游客的体验描述，发现了一种"自然语言"模式，包括遇到野生动物、沿水边行走等活动。研究强调保护城市自然空间对人们身心健康的重要性。',
    category: '环境',
    wordCount: 319,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      {
        en: 'As cities balloon with growth, access to nature for people living in urban areas is becoming harder to find. If you are lucky, there might be a pocket park near where you live, but it is unusual to find places in a city that are relatively wild.',
        zh: '随着城市的迅速扩张，居住在市区的人们越来越难以接触自然。如果幸运的话，你家附近可能有一个袖珍公园，但在城市里找到相对野生自然是罕见的。'
      },
      {
        en: 'Past research has found health and wellness benefits of nature for humans, but a new study shows that wildness in urban areas is extremely important for human well-being.',
        zh: '过去的研究发现了自然对人类健康和 wellness 的益处，但一项新研究表明，城市地区的野生自然对人类福祉极其重要。'
      },
      {
        en: 'The research team focused on a large urban park. They surveyed several hundred park-goers, asking them to submit a written summary online of a meaningful interaction they had with nature in the park. The researchers then examined these submissions, coding experiences into different categories. For example, one participant\'s experience of "We sat and listened to the waves at the beach for a while" was assigned the categories "sitting at beach" and "listening to waves."',
        zh: '研究团队专注于一个大型的城市公园。他们调查了几百名公园游客，要求他们在线提交书面摘要，描述他们在公园与自然的一次有意义的互动。然后研究人员检查这些提交，将体验编码成不同类别。例如，一位参与者的"我们坐在海滩上听了一会儿海浪"的体验被归入"坐在海滩"和"听海浪"两个类别。'
      },
      {
        en: 'Across the 320 submissions, a pattern of categories the researchers call a "nature language" began to emerge. After the coding of all submissions, half a dozen categories were noted most often as important to visitors. These include encountering wildlife, walking along the edge of water, and following an established trail.',
        zh: '在320份提交中，一种研究人员称之为"自然语言"的类别模式开始出现。编码所有提交后，有六个类别最常被游客认为重要。这些包括遇到野生动物、沿着水边行走、沿着既定步道行走。'
      },
      {
        en: 'Naming each nature experience creates a usable language, which helps people recognize and take part in the activities that are most satisfying and meaningful to them. For example, the experience of walking along the edge of water might be satisfying for a young professional on a weekend hike in the park. Back downtown during a workday, they can enjoy a more domestic form of this interaction by walking along a fountain on their lunch break.',
        zh: '命名每种自然体验创造了一种可用的语言，帮助人们识别和参与对他们最满意和最有意义的活动。例如，沿着水边行走的体验可能对周末在公园徒步的年轻专业人士来说是令人满意的。在工作日回到市中心，他们可以通过在午休时沿着喷泉行走来享受这种互动的更居家形式。'
      },
      {
        en: '"We are trying to generate a language that helps bring the human-nature interactions back into our daily lives. And for that to happen, we also need to protect nature so that we can interact with it," said Peter Kahn, a senior author of the study.',
        zh: '"我们正试图创造一种语言，帮助将人类与自然的互动带回我们的日常生活中。为了实现这一点，我们还需要保护自然，以便我们能够与之互动，"该研究的资深作者 Peter Kahn 说。'
      }
    ]
  },

  {
    id: 'gk2023-012',
    title: 'Pilots N Paws: A Dog Rescue Flight',
    cnTitle: '飞行员与爪子：狗狗救援飞行',
    description: '本文讲述了作者通过Pilots N Paws志愿者飞行员组织帮助一个家庭将他们的爱犬Tiffy从堪萨斯州运往弗吉尼亚州的故事。文章展现了志愿者精神的力量和人与宠物之间的深厚情感纽带。',
    category: '社会',
    wordCount: 219,
    coverColor: 'bg-rose-500',
    paragraphs: [
      {
        en: 'In April last year, I saw a post on the PNP (Pilots N Paws) website from a family in Topeka. They had to move to Virginia but they were on a very tight budget. They could not afford to pay for transportation for their dog, Tiffy, and desperately wanted to take her with them.',
        zh: '去年四月，我在 PNP（Pilots N Paws，飞行员与爪爪）网站上看到了来自托皮卡一家人的帖子。他们不得不搬到弗吉尼亚州，但他们的预算非常紧张。他们支付不起他们的狗 Tiffy 的运输费，而且非常渴望能带她一起走。'
      },
      {
        en: 'It just happened that I was planning another PNP flight with another pilot, Karen, who offered to take Tiffy from Kansas City to Virginia. What I was to do was fly to Topeka to pick up Tiffy.',
        zh: '碰巧的是，我正计划和另一位飞行员 Karen 一起进行另一次 PNP 飞行，她主动提出将 Tiffy 从堪萨斯城带到弗吉尼亚州。我要做的就是飞往托皮卡去接 Tiffy。'
      },
      {
        en: 'When I met Tiffy\'s owners, they seemed very nervous. George, the husband, was trying to be calm, but I could tell this was hard for him, having to leave his dog to a stranger and trust that everything would work out.',
        zh: '当我见到 Tiffy 的主人时，他们似乎非常紧张。丈夫乔治试图保持冷静，但我可以感觉到这对他来说很艰难，不得不把他的狗留给一个陌生人，并相信一切都会顺利解决。'
      },
      {
        en: 'After some goodbyes, I asked George and his wife to help me load Tiffy into the plane. I promised to take care of Tiffy and call them as soon as we got to Kansas City.',
        zh: '告别后，我请乔治和他的妻子帮我把 Tiffy 装上飞机。我答应会照顾好 Tiffy，一到堪萨斯城就给他们打电话。'
      },
      {
        en: 'The flight was uneventful, and Tiffy was a great passenger. The next day, she flew with Karen and made it back to George in Virginia within a few days. He was so thankful and sent me a nice e-mail with pictures. It felt great to know that I had helped bring this family together again.',
        zh: '飞行平安无事，Tiffy 是一位很棒的乘客。第二天，她和 Karen 一起飞行，几天内就回到了弗吉尼亚州的乔治身边。他非常感激，给我发了一封带照片的友好电子邮件。知道我又帮助这个家庭团聚了，感觉真好。'
      }
    ]
  },

  {
    id: 'gk2023-013',
    title: 'An Important Phone Call',
    cnTitle: '一通重要的电话',
    description: '这是一段电话对话，Sarah因工作繁忙取消了与David的晚餐约会。David坚持要当面谈论关于工作的事情，最终两人约定明天下午再联系。',
    category: '生活',
    wordCount: 105,
    coverColor: 'bg-violet-500',
    paragraphs: [
      {
        en: 'W: Hello, Sarah. M: Hello, David. I can not come for dinner tonight. Sorry. W: Oh, what happened? M: We have got a new case and things get pretty crazy here in the office.',
        zh: '女：你好，萨拉。男：你好，大卫。我今晚不能来吃晚饭了。抱歉。女：哦，发生什么事了？男：我们接了一个新案子，办公室里事情变得很疯狂。'
      },
      {
        en: 'W: Well, then I will come to you. M: No, no, not tonight. Let me see if I can arrange another night. W: Sarah, please. We need to talk. It is about my job.',
        zh: '女：好吧，那我去你那里。男：不，不，今晚不行。让我看看能不能安排另一个晚上。女：萨拉，求你了。我们需要谈谈。是关于我的工作。'
      },
      {
        en: 'M: Then tell me on the phone. W: No, it is better if we do it in person. How about tomorrow night? M: I am not sure. You can give me a call tomorrow afternoon. W: OK.',
        zh: '男：那就在电话里告诉我吧。女：不，我们当面谈更好。明天晚上怎么样？男：我不确定。你明天下午给我打个电话吧。女：好的。'
      }
    ]
  },

  {
    id: 'gk2023-014',
    title: 'A Yard Sale Discovery',
    cnTitle: '庭院旧货出售的发现',
    description: '这是一段关于周末经历的对话。Clara去了爷爷家摘蔬菜，而Mark则在庭院拍卖会上意外买到了姐姐多年前遗失的一本旧书，还发现了一张2012年的机票，展现了生活中的奇妙巧合。',
    category: '生活',
    wordCount: 186,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      {
        en: 'W: Morning, Mark. M: Morning, Clara. How was your weekend? W: Great. I went to my grandpa\'s. He invited us to pick vegetables on his farm. My daughter had a great time there. What about you? M: Oh, I had a truly incredible experience. I dropped by a yard sale on Saturday and got several books.',
        zh: '女：早上好，马克。男：早上好，克拉拉。你周末过得怎么样？女：很棒。我去了爷爷家。他邀请我们去他的农场摘蔬菜。我女儿在那里玩得很开心。你呢？男：哦，我有一次真正不可思议的经历。我周六去了一个庭院拍卖会，买了几本书。'
      },
      {
        en: 'W: Novels? M: A novel and two poetry collections. As I leafed through the novel, a piece of paper fell out. It was an air ticket from 2012. The flight was from Los Angeles to Chicago and the name on the ticket was Ashley Louis.',
        zh: '女：小说？男：一本小说和两本诗集。当我翻阅小说时，一张纸掉了出来。那是一张2012年的机票。航班是从洛杉矶到芝加哥的，票上的名字是 Ashley Louis。'
      },
      {
        en: 'W: Was it? M: Yes. Ashley, my sister. In 2012, she lived in Los Angeles and her husband worked in Chicago. Both of them often flew between two cities. I asked the seller where he got the book. He said it was bought at a second-hand bookstore in Los Angeles three years ago. Last year, he and his family moved from Los Angeles to Philadelphia.',
        zh: '女：是吗？男：是的。Ashley，我的姐姐。2012年，她住在洛杉矶，她丈夫在芝加哥工作。他们俩经常在两个城市之间飞行。我问卖家他在哪里得到这本书的。他说三年前在洛杉矶的一家二手书店买的。去年，他和家人从洛杉矶搬到了费城。'
      },
      {
        en: 'W: So, all the way cross the country, your sister\'s old book landed in your hands. That is really crazy.',
        zh: '女：所以，跨越整个国家，你姐姐的旧书落到了你手中。真是太疯狂了。'
      }
    ]
  },

  {
    id: 'gk2023-015',
    title: 'College Basketball Life',
    cnTitle: '大学篮球生活',
    description: '这是一段对印第安纳大学篮球队员Victor的采访。Victor分享了他适应美国大学生活和球队训练的经历，谈到了训练的竞争性和强度，以及来自不同国家的队友们如何建立起团队凝聚力。',
    category: '生活',
    wordCount: 183,
    coverColor: 'bg-orange-500',
    paragraphs: [
      {
        en: 'W: Victor, you have been here in Indiana for six weeks now. How are you feeling? M: I think I have got used to college life, going to classes, working out and hanging out with my friends. Though there is pressure to meet deadlines, life here is never boring.',
        zh: '女：维克多，你来印第安纳已经六周了。感觉怎么样？男：我想我已经习惯了大学生活，上课、锻炼、和朋友出去玩。虽然有按时完成任务的压力，但这里的生活从不无聊。'
      },
      {
        en: 'W: What is been hard about being an Indiana basketball player? M: Well, the training is very competitive, weightlifting and running every day. It is not like high school. In high school, I really did not have to do that. I am just trying to get used to it. And I think I am.',
        zh: '女：作为印第安纳篮球队员，有什么困难？男：嗯，训练非常有竞争力，每天举重和跑步。这和高中不一样。在高中时，我真的不必做这些。我正在努力适应。我想我做到了。'
      },
      {
        en: 'W: At this point, how do you see yourself fitting into this group? M: I think we are all different. George is from Britain. Chris and Leo are from Australia. I am from France. And the rest are Americans. But I get along with everybody. You know, we are really starting to bond. It is great to see how we grow each day as a team. W: Thanks, Victor. I wish you a very happy and fruitful stay in Indiana.',
        zh: '女：在这一点上，你如何看待自己融入这个团队？男：我觉得我们都不一样。乔治来自英国。克里斯和利奥来自澳大利亚。我来自法国。其余的是美国人。但我和每个人都相处得很好。你知道，我们真的开始建立联系了。看到我们作为一个团队每天都在成长，这很棒。女：谢谢你，维克多。祝你在印第安纳度过非常愉快和硕果累累的时光。'
      }
    ]
  },

  {
    id: 'gk2023-016',
    title: 'The Idler Magazine',
    cnTitle: '《闲人》杂志',
    description: '这是一段广播节目中的杂志推广介绍，主播向听众推荐《闲人》杂志。该杂志由Tom Hodgkinson于1993年创办，内容涵盖美好生活、历史、哲学、艺术和时尚摄影，旨在为忙碌的现代人提供乐趣和成就感。',
    category: '生活',
    wordCount: 162,
    coverColor: 'bg-teal-500',
    paragraphs: [
      {
        en: 'W: Good evening, dear listeners. When was the last time you enjoyed leisure activities? Do you want to live a full and happy life? Today, I am going to introduce you to a magazine that features the art of living.',
        zh: '女：晚上好，亲爱的听众们。你最后一次享受休闲活动是什么时候？你想过充实而幸福的生活吗？今天，我要向你介绍一本以生活艺术为主题的杂志。'
      },
      {
        en: 'The Idler was launched by Tom Hodgkinson, back in 1993. With the intention of providing a bit of fun, freedom and achievement in the busy world, it is now published bimonthly. In every issue, you will find an interesting mix of interviews and essays on the good life, history, philosophy, arts and fashion photography.',
        zh: '《闲人》杂志由汤姆·霍奇金森于1993年创办。旨在为这个忙碌的世界提供一点乐趣、自由和成就感，现在每两个月出版一期。在每一期中，你都会发现关于美好生活、历史、哲学、艺术和时尚摄影的有趣访谈和文章的混合。'
      },
      {
        en: 'You will find much to laugh at and much useful stuff as well, from recipes for making bacon to guides to housekeeping. If you ever felt that there is more to life than boring jobs, then why not subscribe to it?',
        zh: '你会发现很多值得笑的东西，也有很多有用的东西，从制作培根的食谱到家务指南。如果你曾经觉得生活中有比无聊工作更多的东西，那为什么不订阅它呢？'
      },
      {
        en: 'The Idler is a cheering read that makes you feel better about life. You can download the application and subscribe today to get your first issue free.',
        zh: '《闲人》是一本令人振奋的读物，让你对生活感觉更好。你可以下载应用程序并今天订阅，免费获得第一期。'
      }
    ]
  },

  // ===== 2024 高考英语 =====

{
    id: "gk2024-001",
    title: "Habitat Restoration Team",
    cnTitle: '栖息地恢复团队',
    description: "本文介绍了一个栖息地恢复志愿者项目，志愿者们通过清除入侵植物、种植本地植被和采集种子等活动，保护从马林海岬到波利纳斯岭的自然区域。这些活动对维护当地生态平衡、支持濒危物种恢复具有重要意义，体现了人与自然和谐共处的理念。",
    category: "环境",
    wordCount: 61,
    coverColor: "bg-amber-500",
    paragraphs: [
      { en: "HABITAT RESTORATION TEAM. Help restore and protect Marin's natural areas from the Marin Headlands to Bolinas Ridge. Volunteers will work alongside park staff and other volunteers to restore native habitat, remove invasive plants, and support endangered species recovery.", zh: "栖息地恢复团队致力于从马林海岬到波利纳斯岭这一广阔区域内自然环境的修复与保护工作。志愿者将在风景优美的公园场地开展多项生态保护活动，包括清除入侵植物物种、进行冬季植被种植以及采集本地植物种子等重要工作。" },
      { en: "Activities include: removing invasive plant species; winter planting of native vegetation; collecting seeds of native plants; supporting habitat restoration in scenic park lands.", zh: "这些看似简单的工作实际上对维护当地生态平衡具有深远意义。入侵植物会挤占本地物种的生存空间，破坏原有的生态链；而冬季种植和种子收集则是恢复本地植被的关键环节。志愿者们在专业人士指导下开展的这些活动，对于保护当地生态系统至关重要。" }
    ]
  },
  {
    id: "gk2024-002",
    title: "Acupuncture for Animals",
    cnTitle: '动物针灸',
    description: "本文讲述了美国兽医威廉·法伯博士将针灸、脊椎按摩和草药等中医疗法与传统西方兽医治疗相结合的故事。法伯最初因自身背痛而接触针灸，后将其应用于动物治疗，帮助许多宠物缓解了病痛，推动了整体兽医医学在美国的发展。",
    category: "健康",
    wordCount: 289,
    coverColor: "bg-blue-500",
    paragraphs: [
      { en: "\"I am not crazy,\" says Dr. William Farber, shortly after performing acupuncture on a rabbit. \"I am ahead of my time.\" If he seems a little defensive, this may be because even some of his colleagues occasionally laugh at his unusual methods. But Farber is certain he will have the last laugh. He's one of a small but growing number of American veterinarians now practicing \"holistic\" medicine – combining traditional Western treatments with acupuncture, chiropractic and herbal medicine.", zh: "\"我不是疯子，\"威廉·法伯博士在对一只兔子进行针灸后说道。\"我只是走在时代的前面。\"如果他显得有点防备，这可能是因为即使他的一些同事偶尔也会嘲笑他的不寻常方法。但法伯确信他最终会笑到最后。他是现在实践\"整体\"医学的少数但不断增加的美国兽医之一——结合传统的西方治疗方法与针灸、脊椎按摩和草药医学。" },
      { en: "Farber graduated from Colorado State University and started out as a more conventional veterinarian. He became interested in alternative treatments twenty years ago when he suffered from severe back pain. He tried muscle-relaxing drugs but found little relief. Then he tried acupuncture, an ancient Chinese practice, and was amazed that after two or three treatments his condition improved. What worked on humans, he reasoned, might work on his animal patients. So, after studying the techniques for a couple of years, he began offering them to pets.", zh: "法伯毕业于科罗拉多州立大学，最初是一名更为传统的兽医。二十年前，他因严重的背痛而开始对替代治疗感兴趣。他尝试了放松肌肉的药物，但效果不佳。然后他尝试了针灸，这是一种古老的中国疗法，惊讶地发现经过两三次治疗后，他的情况有所改善。在兽医身上有效的方法似乎也适用于他的患者。所以，在学习这些技术几年后，他开始为宠物提供这些疗法。" },
      { en: "Leigh Tindale's dog Charlie had a serious heart condition. After Charlie had a heart attack, Tindale says, she was prepared to put him to sleep, but Farber's treatments eased her dog's suffering so much that she was able to keep him alive for an additional five months. And Priscilla Dewing reports that her horse, Nappy, \"moves more easily and rides more comfortably\" after a chiropractic adjustment.", zh: "莉·廷德尔的狗查理患有严重的心脏病。查理心脏病发作后，廷德尔说，她准备让他安乐死，但法伯的治疗大大缓解了她狗的痛苦，使她能多活了五个月。普里西拉·杜威报告说，她的马纳皮在接受脊椎按摩调整后\"行动更轻松，骑起来更舒适\"。" },
      { en: "Farber is certain that the holistic approach will grow more popular over time, and if the past is any indication, he may be right: Since 1982, membership in the American Holistic Veterinary Medical Association has grown from 30 to over 700. \"Sometimes it surprises me that it works so well,\" he says. \"I will do anything to help an animal. That's my job.\"", zh: "法伯确信，随着时间的推移，整体医学的方法会越来越受欢迎，如果过去的情况可以作为参考，他可能是对的：自1982年以来，美国整体兽医医学协会的会员从30人增加到超过700人。\"有时它的效果之好让我感到惊讶，\"他说。\"我会做任何事情来帮助动物。这是我的工作。\"" }
    ]
  },
  {
    id: "gk2024-003",
    title: "Print vs Digital Reading",
    cnTitle: '纸质阅读与数字阅读',
    description: "本文探讨了纸质阅读与数字阅读在理解效果上的差异。研究表明，阅读纸质文本比屏幕阅读更有效，尤其是涉及抽象思维的任务；这既有纸张物理特性的原因，也与读者面对数字文本时的\"浅化\"心态有关。",
    category: "教育",
    wordCount: 333,
    coverColor: "bg-emerald-500",
    paragraphs: [
      { en: "Is comprehension the same whether a person reads a text onscreen or on paper? And are listening to and viewing content as effective as reading the written word when covering the same material? The answers to both questions are often \"no.\" The reasons relate to a variety of factors, including reduced concentration, an entertainment mindset and a tendency to multitask while consuming digital content.", zh: "一般情况下，同一段文字进行数字和纸质阅读的理解程度是不一样的，听或者屏幕观看同样的内容跟读同样的纸质内容也是不一样的。这里面同等重要的两点原因分别是：纸张的物理特性和人的心理因素。" },
      { en: "When reading texts of several hundred words or more, learning is generally more successful when it's on paper than onscreen. A large amount of research confirms this finding. The benefits of print reading particularly shine through when experimenters move from posing simple tasks – like identifying the main idea in a reading passage – to ones that require mental abstraction – such as drawing inferences from a text.", zh: "大量研究证明，当阅读几百字以上的文章时，纸质阅读比屏幕阅读更有效。尤其是当阅读任务涉及抽象思考时，比如\"从文本中进行某种推断\"这个任务，比\"概括文章的主旨\"这种简单任务，更能明显体现纸质阅读的准确高效。" },
      { en: "The differences between print and digital reading results are partly related to paper's physical properties. With paper, there is a literal laying on of hands, along with the visual geography of distinct pages. People often link their memory of what they've read to how far into the book it was or where it was on the page. But equally important is the mental aspect. Reading researchers have proposed a theory called \"shallowing hypothesis.\" According to this theory, people approach digital texts with a mindset suited to social media, which are often not so serious, and devote less mental effort than when they are reading print.", zh: "纸质阅读使人们在翻书时有一种真实的手感，而且有文字具体呈现在哪一页哪一个位置的视觉感。人们正是通过连接文字出现在书籍前中后某一页某个位置，在头脑里形成一种印象，从而加强自己的记忆。心理因素是指，人们接触数字文字，往往是带着一种适合社交媒体的娱乐心态，因而通常都不是特别认真，比阅读纸质书籍时明显投入更少的精力。这正是阅读研究者们所提出的\"浅化假说\"理论。" },
      { en: "Audio and video can feel more engaging than text, and so university teachers increasingly turn to these technologies – say, assigning an online talk instead of an article by the same person. However, psychologists have demonstrated that when adults read news stories, they remember more of the content than if they listen to or view identical pieces. Digital texts, audio and video all have educational roles, especially when providing resources not available in print. However, for maximizing learning where mental focus and reflection are called for, educators shouldn't assume all media are the same, even when they contain identical words.", zh: "除了纸质阅读和电子文本，通过音频和视频获取信息显然是人们目前更喜欢的方式，尤其是视频。大学教师也在逐渐地转借这种技术，比方说他们会给学生布置观看一段视频，而并非这个人同样内容的文字。而心理学研究显示，成人通过纸质阅读新闻故事所记住的内容，远比他们听这些故事或者观看这些故事的要记住得多。在尤其不方便找到纸质文本的前提下，电子文本、音频和视频都是非常好的教学方式。但教育工作者应该牢记，在尤其需要精神集中和反思的学习中，这三者明显没有纸质资源的效率更高，即使它们提供的文字内容分毫不差。" }
    ]
  },
  {
    id: "gk2024-004",
    title: "Biodiversity Data Records",
    cnTitle: '生物多样性数据记录',
    description: "本文介绍了斯坦福大学一项关于生物多样性数据记录的研究。研究发现，公民科学家通过移动应用收集的数十亿条观察数据存在偏差，偏向某些地区、时间段和物种；但研究者建议通过引导用户采样不足区域和专家确认识别来改进数据质量。",
    category: "科技",
    wordCount: 353,
    coverColor: "bg-rose-500",
    paragraphs: [
      { en: "In the race to document the species on Earth before they go extinct, researchers and citizen scientists have collected billions of records. Today, most records of biodiversity are often in the form of photos, videos, and other digital records. Though they are useful for detecting shifts in the number and variety of species in an area, a new Stanford study has found that this type of record is not perfect.", zh: "在记录地球物种以免它们灭绝的竞赛中，研究人员和公民科学家收集了数十亿条记录。如今，大多数生物多样性记录通常以照片、视频和其他数字记录的形式存在。虽然它们有助于检测一个地区物种数量和多样性的变化，但斯坦福大学的一项新研究发现，这种类型的记录并不完美。" },
      { en: "\"With the rise of technology it is easy for people to make observations of different species with the aid of a mobile application,\" said Barnabas Daru, who is lead author of the study and assistant professor of biology in the Stanford School of Humanities and Sciences. \"These observations now outnumber the primary data that comes from physical specimens, and since we are increasingly using observational data to investigate how species are responding to global change, I wanted to know: Are they usable?\" Using a global dataset of 1.9 billion records of plants, insects, birds, and animals, Daru and his team tested how well these data represent actual global biodiversity patterns.", zh: "\"随着技术的进步，人们很容易借助移动应用程序对不同物种进行观察，\"该研究的主要作者、斯坦福大学人文与科学学院生物学助理教授巴纳巴斯·达鲁说。\"这些观察数据现在超过了来自实物标本的原始数据，而且因为我们越来越多地使用观察数据来调查物种如何应对全球变化，我想知道：它们可用吗？\"达鲁和他的团队使用了一个包含19亿条植物、昆虫、鸟类和动物记录的全球数据集，测试这些数据在多大程度上代表了实际的全球生物多样性模式。" },
      { en: "\"We were particularly interested in exploring the aspects of sampling that tend to bias data, like the greater likelihood of a citizen scientist to take a picture of a flowering plant instead of the grass right next to it,\" said Daru. Their study revealed that the large number of observation-only records did not lead to better global coverage. Moreover, these data are biased and favor certain regions, time periods, and species. This makes sense because the people who get observational biodiversity data on mobile devices are often citizen scientists recording their encounters with species in areas nearby. These data are also biased toward certain species with attractive or eye-catching features.", zh: "\"我们特别感兴趣的是探索那些容易使数据产生偏差的采样方面，比如公民科学家更有可能拍摄开花植物而不是旁边的草，\"达鲁说。他们的研究表明，大量仅观察的记录并没有带来更好的全球覆盖。此外，这些数据存在偏差，偏向某些地区、时间段和物种。这是有道理的，因为通过移动设备获取生物多样性观察数据的人通常是公民科学家，他们在附近地区记录与物种的接触。这些数据也偏向某些具有吸引力或引人注目的物种。" },
      { en: "What can we do with the imperfect datasets of biodiversity? \"Quite a lot,\" Daru explained. \"Biodiversity apps can use our study results to inform users of oversampled areas and lead them to places – and even species – that are not well-sampled. To improve the quality of observational data, biodiversity apps can also encourage users to have an expert confirm the identification of their uploaded image.\"", zh: "我们能用不完美的生物多样性数据集做什么？\"非常多，\"达鲁解释道。\"生物多样性应用程序可以利用我们的研究结果告知用户过度采样的区域，并引导他们前往采样不足的地方——甚至物种。为了提高观察数据的质量，生物多样性应用程序还可以鼓励用户让专家确认他们上传图像的识别。\"" }
    ]
  },
  {
    id: "gk2024-005",
    title: "Running, Cycling and Personal Goals",
    cnTitle: '跑步、骑行与个人目标',
    description: "本文讲述了作者从青少年时期开始，受到他人成就激励而尝试跑步和骑自行车的经历。在经历了与他人比较带来的挫败感后，作者逐渐成熟，认识到无论设定什么目标，都应该是属于自己的，而不是为了与他人竞争。",
    category: "生活",
    wordCount: 229,
    coverColor: "bg-violet-500",
    paragraphs: [
      { en: "I've been motivated – and demotivated – by other folks' achievements all my life. When I was a teenager, a neighborhood friend won a marathon race. Feeling motivated, I started running regularly, but then two things happened. First, a girl I met one day told me she was training for a \"super,\" referring to a 52.4-mile double marathon. Then, the next day I went on my longest run – 15 miles. To be honest, I hated it!", zh: "我一生中一直被别人的成就所激励，也被别人的成就所打击。当我十几岁的时候，一个邻居的朋友赢得了一场马拉松比赛。感觉很有动力，我开始定期跑步，但后来发生了两件事。首先，我有一天遇到的一个女孩告诉我，她正在为\"超级\"训练，指的是52.4英里的双人马拉松。" },
      { en: "Between the girl making my achievement seem small and the pure boredom of jogging, I decided that the only reason I'd ever run again is if a big dog was running after me! So I turned to cycling. I got a good bike and rode a lot. I dreamed of entering cycle races until I flew to San Diego to visit my sister. While she was at work one day, I borrowed her bike and went for a ride.", zh: "然后，第二天我进行了我最长的跑步——15英里。老实说，我讨厌它！在这个让我的成就看起来很小的女孩和慢跑的纯粹无聊之间，我决定我再跑步的唯一原因是如果有一只大狗在追我！所以我开始骑自行车。我有一辆好自行车，经常骑。我梦想着参加自行车比赛，直到我飞往圣地亚哥看望我的妹妹。" },
      { en: "The problem: The roads there went through large valleys where I'd be riding uphill for miles at a time. I'd never faced such challenge. That day, I got passed by about 100 \"local\" bikers who were used to such roads. When I got back home, suddenly riding my bike didn't seem quite as appealing.", zh: "有一天她在上班时，我借了她的自行车去兜风。问题是：那里的道路穿过大山谷，我会在那里一次骑行数英里上坡。我从来没有遇到过这样的挑战。那天，我被大约100名习惯了这种道路的\"当地\"自行车手超过。当我回到家时，突然骑自行车似乎没有那么吸引人了。" },
      { en: "I've matured a lot since then. I've come to accept that whatever goals I set for myself, they just have to be my own.", zh: "从那以后我成熟了很多。我开始接受这样一个事实：无论我为自己设定了什么目标，它们都必须是我自己的。" }
    ]
  },
  {
    id: "gk2024-006",
    title: "Kitchen Gardening with Aurie",
    cnTitle: '与奥莉一起打理厨房花园',
    description: "本文是一段关于厨房园艺的采访对话，园丁奥瑞分享了他通过社交媒体记录蔬菜种植经历的初衷。他向初学者推荐种植草莓，并分享了下一季的计划以及对园艺新手的建议：制定计划、从错误中学习、不要气馁。",
    category: "生活",
    wordCount: 208,
    coverColor: "bg-cyan-500",
    paragraphs: [
      { en: "W: So Aurie, your kitchen garden looks excellent. What made you turn to social media to record your vegetable growing? M: Initially, I used the online platform as a diary, something to look back on, giving me a sense of achievements and keeping me motivated and moving forward. W: As time went by, other gardeners and like-minded people began to follow my progress, too.", zh: "女士：奥瑞，你的厨房花园看起来棒极了。是什么让你用社交媒体来记录蔬菜种植的？男士：最初，我把网络平台当做一本日记，记录一些可以回首往事的东西，这给了我成就感，让我保持动力，继续前进。女士：随着时间的推移，其他园丁和志同道合的人也开始关注我的进度了。" },
      { en: "W: I know you grow lots of fruit on your land. Which would you recommend to beginners as the best to grow? M: Strawberries would be a good choice. They produce a lot of fruit in their first season. W: That's cool. Well, do you have plans to try new or any particular crops next year?", zh: "女士：我知道你在土地上种了很多水果。你会向初学者推荐哪一种最适合种植的？男士：草莓会是个不错的选择。它们在第一个季节结出很多果实。女士：酷啊。嗯，你明年有没有计划试种新的作物或什么特别的作物？" },
      { en: "M: Next season I will be adding some pear trees to the fruit area. I will be adding more herbs which I can use in the kitchen. After a couple of years of failure, I will try growing carrots again. W: What advice would you offer someone thinking of doing kitchen gardening?", zh: "男士：下一季我会在果区增加一些梨树。我会添加更多厨房用的调料类。在失败了几年之后，我会再次尝试种植胡萝卜。女士：你会给那些想做厨房园艺的人提供什么建议？" },
      { en: "M: Have a plan of what you want your kitchen garden to look like. Don't be too discouraged if things don't go according to plan. Learn from your mistakes and move on. There's always next season.", zh: "男士：制定一个理想菜园计划。如果事情不够理想，不要太气馁。从错误中吸取教训，继续前进。总还会有下一个季节。" }
    ]
  },
  {
    id: "gk2024-007",
    title: "Carlow Autumn Walking Festival",
    cnTitle: '卡洛秋季徒步节',
    description: "本文介绍了卡洛秋季徒步节提供的四项不同徒步活动，包括森林摄影徒步和月光星空徒步等。活动安排在周末，适合不同水平的徒步爱好者，参与者需注意携带必要装备和穿着合适衣物。",
    category: "生活",
    wordCount: 58,
    coverColor: "bg-orange-500",
    paragraphs: [
      { en: "The Carlow Autumn Walking Festival offers four different walking activities. All activities are scheduled on weekends (October 1st and 2nd). The shortest walk is the Kilbrannish Forest Photography Walk with a duration of 1.5 hours.", zh: "本文介绍了卡洛秋季徒步节的四个不同徒步活动的详细信息，包括活动时间、起点、时长和注意事项，旨在满足初学者到资深徒步爱好者的需求。基尔布兰尼斯森林摄影徒步的时长为1.5小时，是所有活动中最短的。" },
      { en: "The Moonlight Star Walk requires a torch and suitable clothing; those dressed inappropriately will be refused permission. Activities cater to beginners and experienced hikers.", zh: "月光下的星空徒步活动要求参与者必须携带手电筒并穿着合适的衣物，否则将被拒绝参加。所有徒步活动均安排在周末（10月1日和10月2日）进行，适合不同水平的徒步爱好者参与。" }
    ]
  },
  {
    id: "gk2024-008",
    title: "BART Short Story Kiosk",
    cnTitle: 'BART短篇小说亭',
    description: "本文介绍了旧金山湾区快速交通系统为提升乘客体验而推出的短篇小说打印亭项目。乘客可以在检票口选择不同时长的短篇小说并打印出来阅读，该项目同时为湾区艺术家提供了发表作品的机会。",
    category: "文化",
    wordCount: 92,
    coverColor: "bg-teal-500",
    paragraphs: [
      { en: "The San Francisco Bay Area Rapid Transit system (BART) launched a short story printing kiosk project to improve passenger experience. Passengers can select a one-minute, three-minute, or five-minute short story at the ticket gate, which is printed as a paper receipt. Alicia Trost said they wanted to do something where they call on Bay Area artists to submit stories for a contest.", zh: "本文介绍了旧金山湾区快速交通系统（BART）为了提升乘客体验而推出的一个短篇小说打印亭项目。乘客可以在检票口处选择一篇一分钟、三分钟或五分钟的短篇小说，以纸质收据的形式打印出来。Trost提到他们向湾区艺术家征集故事比赛，获奖故事将进入打印亭。" },
      { en: "The winning stories would go into the kiosk and the writer would be a published artist. The stories are categorized by length. Trost believes this project will increase BART ridership.", zh: "获奖故事将进入打印亭，作者将成为一名发表作品的艺术家。故事按长度分类。Trost认为这个项目会增加BART的乘客量，为艺术家提供发表机会，同时也为乘客提供了独特的文化体验。" }
    ]
  },
  {
    id: "gk2024-009",
    title: "Babylon Micro-Farm",
    cnTitle: '巴比伦微型农场',
    description: "本文介绍了一种名为Babylon Micro-Farm的室内农场系统，它可以缩短农产品从农场到餐桌的距离。该系统适用于家庭、医院、餐厅或学校，通过创新设计和应用程序实现自动化管理，员工也秉持环保理念工作。",
    category: "环境",
    wordCount: 116,
    coverColor: "bg-amber-500",
    paragraphs: [
      { en: "We all know fresh is best when it comes to food. However, most produce at the store went through weeks of travel and covered hundreds of miles before reaching the table. While farmer's markets are a solid choice to reduce the journey, Babylon Micro-Farm (BMF) shortens it even more.", zh: "本文介绍了Babylon Micro-Farm（BMF），一种室内农场系统，极大地缩短了农产品从农场到餐桌的距离，依靠新技术实现了自动化管理和环保种植。我们都知道新鲜食物最好，但商店里的农产品往往要经过数周的运输和数百英里的路程才能到达餐桌。" },
      { en: "BMF is an indoor garden system. It can be set up for a family. Additionally, it could serve a larger audience such as a hospital, restaurant or school. The innovative design requires little effort to achieve a reliable weekly supply of fresh greens.", zh: "BMF是一种室内花园系统，可以为家庭设置，也可以服务于医院、餐厅或学校等更大的群体。其创新设计只需很少的努力就能实现每周可靠供应新鲜蔬菜。还有一个方便的应用程序可以实时提供种植数据。" },
      { en: "There is a convenient app that provides growing data in real time. BMF employees walk or bike to work, encourage recycling, and reduce waste.", zh: "BMF员工步行或骑自行车上班，鼓励回收利用并减少浪费，体现了企业的环保理念和社会责任感。" }
    ]
  },
  {
    id: "gk2024-010",
    title: "Language Exchange Programme",
    cnTitle: '语言交换项目',
    description: "本文介绍了一个语言交流项目，学生们两人一组每周进行一小时的双语交流。学生需要记录练习的语言技能和讨论主题，完成18次配对会议，但由于配对涉及多种因素，并非所有报名者都能成功匹配。",
    category: "教育",
    wordCount: 78,
    coverColor: "bg-blue-500",
    paragraphs: [
      { en: "The Language Exchange Programme allows students in pairs to communicate in two different languages they wish to share and learn each week. Students record short entries after each partner meeting noting the language skills practised and the topics discussed.", zh: "语言交流项目让学生们两人一组，每周用他们希望分享和学习的两种不同的语言进行交流。学生们在每次搭档会议后记录简短的条目，指出所练习的语言技能和讨论的主题。" },
      { en: "Requirements include 18 weekly one-hour pair meetings. Students sign up and indicate languages they can share and are interested in learning. Since there are many factors involved in the pairing process, not all students who sign up will be matched.", zh: "要求包括18次每周一小时的配对会议。学生们报名并表明他们可以分享的语言以及他们有兴趣学习的语言。由于配对过程涉及许多因素，并非所有报名的学生都能配对成功。这个项目旨在通过实际交流提高学生的语言能力和跨文化沟通技巧。" }
    ]
  },
  {
    id: "gk2024-011",
    title: "Computer Simulation and the Universe",
    cnTitle: '计算机模拟与宇宙',
    description: "本文探讨了信息时代的新概念如计算机、虚拟现实和模拟如何启发人们构建宇宙新模型。作者指出模型并非现实本身，争论宇宙的本质形式没有意义，重要的是这些模型作为探索未知和进行发现的工具的价值。",
    category: "科技",
    wordCount: 86,
    coverColor: "bg-emerald-500",
    paragraphs: [
      { en: "We are now in the information age, and we have new concepts such as computers, information processing, virtual reality, and simulation. Not surprisingly, these new concepts inspire us to construct new models of the universe.", zh: "现在我们处于信息时代，我们有了新的概念，如计算机、信息处理、虚拟现实和模拟。不出所料，这些新概念激发我们构建新的宇宙模型。" },
      { en: "However, models are not reality. It is pointless to argue whether the universe is a clockwork, a set of particles, or the output of computation. All these models are tools for dealing with the unknown and making discoveries. The more tools we have, the more effective and insightful we can become.", zh: "然而，模型并非现实。争论宇宙是否是一个钟表、一组粒子或计算的输出是没有意义的。所有这些模型都是处理未知和进行发现的工具。我们拥有的工具越多，我们就能变得越有效和洞察力。文章探讨了信息时代的新概念如何帮助我们理解宇宙的本质。" }
    ]
  },
  {
    id: "gk2024-012",
    title: "The Roots of Morality",
    cnTitle: '道德的根源',
    description: "本文从科学视角探讨了道德规范的根源。社会利益伴随着社会需求，自律因此具有优势；人类大脑的进化增强了自我控制和语言能力，这些共同促进了道德观念和社会实践的发展。",
    category: "社会",
    wordCount: 64,
    coverColor: "bg-rose-500",
    paragraphs: [
      { en: "Social benefits are accompanied by social demands: we must get along, but not put up with too much. Hence self-discipline is advantageous. In humans, a greatly enlarged brain boosts self-control, just as it boosts problem-solving skills in the social as well as the physical world.", zh: "社会利益伴随着社会需求：我们必须和睦相处，但不能忍受太多。因此自律是有利的。在人类中，大大增大的大脑提升了自我控制，就像它提升了社会和物理世界中的问题解决技能一样。" },
      { en: "These abilities are strengthened by our capacity for language, which allows social practices to develop in extremely unobvious ways.", zh: "这些能力因我们的语言能力而增强，语言能力使社会实践以极其不明显的方式发展。文章探讨了道德规范的根源，从科学的视角探讨道德规范的形成机制，以及大脑进化和社会需求如何共同塑造了人类的道德观念。" }
    ]
  },
  {
    id: "gk2024-013",
    title: "Tom Sawyer: A River Adventure",
    cnTitle: '汤姆·索亚：河流冒险',
    description: "本文介绍了马克·吐温经典作品《汤姆·索亚历险记》的音乐剧改编版本。这部35分钟的音乐剧在Tall Stacks节上演出，包含了粉刷篱笆、墓地、岛屿和洞穴等经典场景，由当地创作团队改编并由学生演员主演。",
    category: "文化",
    wordCount: 116,
    coverColor: "bg-violet-500",
    paragraphs: [
      { en: "Tom Sawyer Play Is an Adventure. A 35-minute hand-clapping, foot-stomping musical version of a Mark Twain favorite returns with this Tall Stacks festival. \"Tom Sawyer: A River Adventure\" has all the good stuff, including the fence painting, the graveyard, the island and the cave.", zh: "《汤姆·索亚历险记》是一场冒险。一部35分钟的手拍脚跺的音乐版马克·吐温经典作品在这个Tall Stacks节上回归。\"汤姆·索亚：河流冒险\"包含了所有精彩的内容，包括粉刷篱笆、墓地、岛屿和洞穴。" },
      { en: "It is adapted by Joe McDonough, with music by David Kisor. That's the local stage writing team that creates many of the Children's Theatre of Cincinnati's original musicals, along with the holiday family musicals at Ensemble Theatre. This year Nathan Turner of Burlington is Tom Sawyer, and Robbie McMath of Fort Mitchell is Huck Finn. Turner, a 10th-grader at School for Creative and Performing Arts, is a familiar presence on Cincinnati's stages.", zh: "由乔·麦克唐纳改编，大卫·基索尔作曲。这是当地舞台创作团队，创作了许多辛辛那提儿童剧院的原创音乐剧，以及合奏剧院的假日家庭音乐剧。今年，伯灵顿的内森·特纳饰演汤姆·索亚，Fort Mitchell的罗比·麦克马思饰演哈克·芬恩。特纳是创意与表演艺术学校的10年级学生，在辛辛那提的舞台上是一个熟悉的面孔。" }
    ]
  },

  // ===== 2025 高考英语 =====

{
    id: 'gk2025-001',
    title: 'The Greening of Planes, Trains and Automobiles',
    cnTitle: '飞机、火车和汽车的绿色化',
    description: '本文探讨交通运输领域的碳排放挑战，分析不同交通工具绿色转型的可行方案，包括汽车电池化、卡车氢燃料电池、火车电气化、船舶氨燃料以及航空可持续燃料。文章强调全球能源转型的紧迫性和可再生能源发展的必要性。',
    category: '环境',
    wordCount: 359,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: "As the world races to decarbonize everything from the electricity grid to industry, it faces particular problems with transportation — which alone is responsible for about a quarter of our planet\'s energy-related greenhouse gas emissions. The fuels for transport need to be not just green, cheap and powerful, but also lightweight and safe enough to be carried around.", zh: "随着世界竞相将电力网络和工业等所有领域脱碳，交通运输面临着特殊的问题——仅交通运输就占全球能源相关温室气体排放的四分之一。交通燃料不仅需要绿色、廉价且高效，还要足够轻便和安全，便于携带。" },
      { en: "Fossil fuels — mainly gasoline and diesel — have been extraordinarily effective at powering a diverse range of mobile machines. Since the industrial revolution, humanity has perfected the art of dredging these up, refining them, distributing them and combusting them in engines, creating a vast and hard-to-budge industry. Now we have to step away from fossil fuels, and the world is finding no one-size-fits-all replacement.", zh: "化石燃料——主要是汽油和柴油——在为各种移动机器提供动力方面一直非常有效。自工业革命以来，人类已经完善了开采、提炼、分配以及在发动机中燃烧化石燃料的技术，创造了一个庞大而难以动摇的产业。现在我们必须摆脱化石燃料，世界发现没有一种放之四海而皆准的替代品。" },
      { en: "Each type of transportation has its own peculiarities — which is one reason we have different formulations of hydrocarbons today, from gasoline to diesel, bunker fuel to jet fuel. Cars need a convenient, lightweight power source; container ships need enough oomph to last months; planes absolutely need to be reliable and to work at subzero temperatures. As the fossil fuels are phased out, the transport fuel landscape is \'getting more diverse,\' says Timothy Lipman, codirector of the Transportation Sustainability Research Center at the University of California, Berkeley.", zh: "每种交通工具都有其特殊性——这也是我们今天有不同碳氢化合物配方的原因，从汽油到柴油，从船用燃料到航空燃料。汽车需要方便、轻便的动力源；集装箱船需要足够的动力维持数月；飞机绝对需要可靠并在零度以下也能工作。随着化石燃料逐步被淘汰，交通燃料的格局\'变得更加多样化\'，加州大学伯克利分校交通可持续性研究中心联合主任蒂莫西·利普曼说道。" },
      { en: "Every energy solution has its pros and cons. Batteries are efficient but struggle with their weight. Hydrogen — the lightest element in the universe — packs a huge energy punch, but it\'s expensive to make in a \'green\' way and, as a gas, it takes up a lot of space. Liquid fuels that carry hydrogen can be easier to transport or drop into an existing engine, but ammonia is toxic, biofuels are in short supply, and synthetic hydrocarbons are hard to produce.", zh: "每种能源解决方案都有其优缺点。电池效率高但重量是个问题。氢——宇宙中最轻的元素——蕴含巨大的能量，但以\'绿色\'方式制取氢很昂贵，而且作为气体，它占用大量空间。携带氢的液体燃料更容易运输或直接加入现有发动机，但氨有毒，生物燃料供应不足，合成碳氢化合物也难以生产。" },
      { en: "This energy transition is global, and the amount of renewable energy the world will need is \'a little bit mind-blowing,\' says mechanical engineer Keith Wipke at the National Renewable Energy Laboratory. It\'s estimated that the global demand for electricity could more than double by 2050. Fortunately, analyses suggest that renewables are up to the task. \'We need to speed up the development of green energy, and it will all get used,\' says Wipke.", zh: "这一能源转型是全球性的，世界所需的可再生能源数量\'有点令人震惊\'，美国国家可再生能源实验室的机械工程师基思·维普克说。据估计，到2050年，全球电力需求可能增加一倍以上。幸运的是，分析表明可再生能源可以胜任这项任务。\'我们需要加快绿色能源的开发，而且这些能源都会被用上，\'维普克说。" }
    ]
  },
  {
    id: 'gk2025-002',
    title: 'Writing Is About Connection',
    cnTitle: '写作关乎连接',
    description: '文章讲述一位九年级写作课老师通过教学实践领悟写作真谛的故事。最初学生认为写作不重要，老师调整教学方式后，学生文思泉涌，老师最终理解写作的本质是连接人性——将人们置于他人的处境中，理解何为人类。',
    category: '教育',
    wordCount: 295,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: "In my ninth-grade writing class last year, I met a cowboy who saved his town, a strict father who demanded his son earn straight A\'s, and a modern-day Juliet who died of heartbreak after her parents rejected the love of her young life. More than once, I found myself wondering just how my students, who\'d created these people, knew their subjects so well.", zh: "去年在我的九年级写作课上，我遇到了一位拯救了小镇的牛仔、一位要求儿子门门得A的严厉父亲，以及一位因父母拒绝她年轻时的爱情而心碎致死的现代朱丽叶。不止一次，我发现自己很好奇，那些创造了这些人物的学生们是如何如此了解他们的主题的。" },
      { en: "But things were different for their first essay, which was about the question: \'Why is writing important?\' Most of the essays filled less than one page, and few contained a sentence that could be interpreted as a thesis statement. I was shocked. Then I realized that the problem was the question itself. They could have written pages on the necessity of computers, but writing, in and of itself, simply didn\'t strike them as important. This would have to change.", zh: "但他们在第一篇作文——关于\'为什么写作很重要\'这个问题的作文——上的表现却不同。大多数作文不到一页，很少有能被视为论点的句子。我感到震惊。然后我意识到问题出在问题本身。他们本可以就电脑的必要性写上好几页，但写作本身根本没让他们觉得重要。这种情况必须改变。" },
      { en: "As a new unit started, I asked everyone to write a persuasive piece on a health-related topic of their choice. This time they found the exercise much more interesting. For the next two assignments, a personal-narrative unit followed by a creative-writing workshop, I only required that the piece meet the specifications of its genre and that it contain a thesis. The results were staggering. The students took on diverse topics and turned in stories, 10 to 20 pages each, with characters that broadened my view and touched my heart.", zh: "随着新单元的开始，我让每个人就自己选择的与健康相关的话题写一篇说服性文章。这一次他们觉得这项练习有趣多了。在接下来的两次作业中——个人叙事单元和创意写作工作坊——我只要求作品符合其体裁规范并包含论点。结果令人惊叹。学生们选择了各种不同的主题，交上来的故事每篇都有10到20页，故事中的角色开阔了我的视野，触动了我的心灵。" },
      { en: "I walked into class believing that writing is important as a means of communication. However, my students demonstrated something more important to me. When the final bell rang in June, I walked away with a yearbook full of messages about writing\'s most powerful significance — the ability to connect people, to put us in another\'s skin, to teach us what it means to be human.", zh: "走进课堂时，我相信写作作为一种交流方式很重要。然而，我的学生们向我展示了更为重要的东西。当六月的最后一课铃响起时，我带着一本写满留言的毕业纪念册离开了——这些留言都在谈论写作最强大的意义：连接人们的能力，让我们设身处地地理解他人，教我们理解何以为人。" }
    ]
  },
  {
    id: 'gk2025-003',
    title: 'Why the Rush?',
    cnTitle: '为何匆忙？',
    description: '文章以交通方式变迁为切入点，批判汽车主导的街道规划导致儿童步行减少的现象，回溯Jane Jacobs等历史抗争的有限成果，介绍荷兰自行车基础设施和巴黎\'15分钟城市\'理念，呼吁重新思考街道的社区价值，建设更宜居的城市。',
    category: '社会',
    wordCount: 256,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: "While safety improvements might have been made to our streets in recent years, transport studies also show declines in pedestrian mobility, especially among young children. Many parents say there\'s too much traffic on the roads for their children to walk safely to school, so they pack them into the car instead.", zh: "虽然近年来我们的街道可能进行了安全改进，但交通研究也表明行人流动性在下降，尤其是儿童。许多父母说路上车辆太多，孩子们无法安全步行上学，因此他们用汽车送孩子上学。" },
      { en: "Dutch authors Thalia Verkade and Marco te Brömmelstroet are bothered by facts like these. In their new book Movement: How to Take Back Our Streets and Transform Our Lives, they call for a rethink of our streets and the role they play in our lives.", zh: "荷兰作家塔利亚·韦尔克德和马尔科·特·布伦梅尔斯特罗特对这类事实感到不安。在他们的新书《运动：如何夺回我们的街道并改变我们的生活》中，他们呼吁重新思考我们的街道及其在我们的生活中所扮演的角色。" },
      { en: "Life on city streets started to change decades ago. Whole neighbourhoods were destroyed to make way for new road networks and kids had to play elsewhere. Some communities fought back. Most famously, a Canadian journalist who had moved her family to Manhattan in the early 1950s led a campaign to stop the destruction of her local park. Describing her alarm at its proposed replacement with an expressway, Jane Jacobs called on her mayor to champion \'New York as a decent place to live, and not just rush through.\' Similar campaigns occurred in Australia in the late 1960s and 1970s as well.", zh: "城市街道的生活几十年前就开始改变了。整个社区被拆除，为新的道路网络让路，孩子们不得不去别处玩耍。一些社区进行了抗争。最著名的是，一位加拿大记者在20世纪50年代初将家人搬到曼哈顿后，发起了一场阻止摧毁她当地公园的运动。简·雅各布斯描述了她对用高速公路取代公园的方案的震惊，呼吁市长让\'纽约成为一个体面的居住地，而不仅仅是匆匆穿过的地方\'。澳大利亚在20世纪60年代末和70年代也发生了类似的抗争活动。" },
      { en: "Although these campaigns were widespread, the reality is that the majority of western cities were completely redesigned around the needs of the motor car. The number of cars on roads has been increasing rapidly. In Australia we now have over twenty million cars for just over twenty-six million people, among the highest rate of car ownership in the world.", zh: "尽管这些抗争活动广泛存在，但现实是大多数西方城市都围绕汽车的需求进行了彻底改造。道路上的汽车数量一直在迅速增加。在澳大利亚，我们现在有超过2000万辆汽车，而人口仅略高于2600万，是世界上汽车拥有率最高的国家之一。" }
    ]
  },
  {
    id: 'gk2025-004',
    title: 'Microplastics in Tap Water',
    cnTitle: '自来水中的微塑料',
    description: '本文聚焦微塑料污染这一全球性环境问题，介绍中国暨南大学曾博士团队的研究发现——简单地将自来水煮沸5分钟可以去除80%以上的微塑料颗粒。微塑料被水垢的晶体结构捕获，硬水去除效果优于软水。文章传递了务实解决环境问题的科学方案。',
    category: '环境',
    wordCount: 360,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: "Microplastics have become a common source of pollution across the Earth — they have settled in the deep sea and on the Himalayas, stuck inside volcanic rocks, filled the stomachs of seabirds and even fallen in fresh Antarctic snow. They are even appearing inside human bodies.", zh: "微塑料已成为地球上常见的污染源——它们沉积在深海和喜马拉雅山上，卡在火山岩中，填满海鸟的胃，甚至落在南极的新雪中。它们甚至开始出现在人体内。" },
      { en: "Boiling tap water before use can remove at least 80 per cent of the tiny, potentially harmful plastic particles it contains. Nano and microplastics (NMPs) are pieces of plastics like polystyrene, polythene and polypropylene that range from between 0.001 to 5 millimetres in diameter. Their impact on health is still being studied, but researchers suspect they are damaging to humans.", zh: "使用前将自来水煮沸可以去除至少80%的微小、潜在有害的塑料颗粒。纳米和微塑料（NMPs）是直径在0.001到5毫米之间的塑料碎片，如聚苯乙烯、聚乙烯和聚丙烯。它们对健康的影响仍在研究中，但研究人员怀疑它们对人体有害。" },
      { en: "Eddy Zeng at Jinan University in China and his colleagues took samples of tap water and measured their levels of NMPs, finding an average concentration of 1 milligram per litre. They then boiled the samples for 5 minutes, before allowing them to cool. The levels of NMPs were then remeasured and found to have reduced by more than 80 per cent.", zh: "中国暨南大学的曾博士及其同事采集了自来水样本，测量了其中NMPs的含量，发现平均浓度为每升1毫克。然后他们将样本煮沸5分钟，待冷却后重新测量NMPs含量，发现减少了80%以上。" },
      { en: "\'We estimated that intakes of NMPs through boiled water consumption were two to five times less than those through tap water on a daily basis,\' says Zeng. \'This simple but effective boiling-water strategy can \'decontaminate\' NMPs from household tap water and has the potential for harmlessly alleviating human exposure to NMPs through water consumption.\'", zh: "曾博士说：\'我们估计，通过饮用沸水摄入的NMPs量比饮用自来水低两到五倍。\' \'这种简单但有效的煮沸策略可以从家庭自来水中\'净化\'NMPs，并有可能无害地减少人类通过饮水接触NMPs的风险。\'" },
      { en: "The NMPs were removed by becoming ensnared in crystalline structures of limescale formed from the calcium in the water, says Zeng. More particles were removed from \'hard\' water — that containing high levels of calcium — than from \'soft\' water, which has lower levels of it. Allowing the water to reach boiling point was an important contributing factor to how efficiently those crystalline structures were created. \'Boiling water has some other benefits, such as killing bacteria and parasites and removing trace heavy metals,\' he says.", zh: "曾博士解释说，NMPs是通过被水中钙形成的石灰的晶体结构捕获而被去除的。硬水——含有高浓度钙的水——比软水——钙含量较低的水——去除更多颗粒。让水达到沸点是这些晶体结构高效形成的重要因素。\'煮沸水还有其他好处，比如杀死细菌和寄生虫，以及去除微量重金属，\'他说。" },
      { en: "\'The way they demonstrated how things were deposited through the boiling process was nice,\' says Caroline Gauchotte-Lindsay at the University of Glasgow, UK. However, she adds that the world should be seeking to solve the problem of microplastics in drinking water long before they reach homes. \'We should be looking into modifying drinking water treatment plants so...\'", zh: "英国格拉斯哥大学的卡罗琳·高绍特-林赛说：\'他们展示的沸水过程中物质沉积的方式很好。\'然而，她补充说，世界应该寻求在微塑料到达家庭之前解决饮用水中的微塑料问题。\'我们应该考虑改进饮用水处理厂，以便……\'" }
    ]
  },
  {
    id: 'gk2025-005',
    title: 'Giving Stuff Away',
    cnTitle: '捐赠物品',
    description: '作者和丈夫卖房搬家时，将闲置多年的玻璃花瓶从标价出售改为免费赠送。这一举动带来了意想不到的快乐，激励作者发布更多闲置物品。在处理物品的过程中，既避免了物品被填埋，也收获了与他人交流的快乐和满足感。',
    category: '环境',
    wordCount: 239,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: "One August afternoon, I sat in my kitchen staring at a glass vase that hadn\'t seen daylight since my wedding. My husband and I had just sold our house and we were busy emptying out the beloved home our family had spent 23 years filling up. We had decided on key items for the apartment we were moving to in town, donated what we could, and rented a place to store our supposedly important objects. That left a house still stuffed with things that, while not particularly valuable, didn\'t belong in a landfill.", zh: "八月的一个下午，我坐在厨房里盯着一个自婚礼后就再也没见过天日的玻璃花瓶。我和丈夫刚卖掉房子，正忙着清空我们家人花了23年填满的心爱家园。我们已经为要搬进城里的公寓选好了重要物品，捐掉了能捐的东西，还租了一个地方存放我们 supposedly 重要的物件。这就留下了一个仍然堆满东西的房子，这些东西虽然不算特别值钱，但也不该被丢进垃圾填埋场。" },
      { en: "I took a picture of the vase and posted it online, for $10. A couple of messages came in, one wanting additional photos, another asking for a price cut. As our move day drew near, I settled on a new price ($0) and reposted it. The description: \'I hate this vase. Maybe you won\'t.\' In an instant, a woman raced into my house and left happily with the vase.", zh: "我给花瓶拍了张照片，标价10美元发到网上。收到了几条消息，有人想要更多照片，还有人要求降价。随着搬家日临近，我把价格改为0美元，重新发布了。描述是：\'我讨厌这个花瓶。也许你不会。\'转眼间，一位女士飞奔进我家，开心地带着花瓶离开了。" },
      { en: "Encouraged, I posted more. My daily posts and the visits I received became a precious ray of light in the chaos of my house. Each exchange provided a chance to spare the landfill and to please another person I might not otherwise have encountered.", zh: "受到鼓舞，我发布了更多物品。我的每日帖子和来访者在房屋搬家的混乱中成为一道珍贵的光芒。每一次交换都提供了一个避免填埋垃圾、取悦一个我原本可能永远不会遇到的陌生人的机会。" },
      { en: "I sit in my apartment today, loving each of the items that share our small space. I take joy in knowing that, somewhere nearby, someone is appreciating something that couldn\'t come with us.", zh: "今天我坐在公寓里，喜爱着与我们共享这个小空间的每一件物品。想到在附近的某个地方，有人正在欣赏一件无法随我们搬来的东西，我感到十分快乐。" }
    ]
  },
  {
    id: 'gk2025-006',
    title: 'Go Art Exhibition in Shanghai',
    cnTitle: '上海围棋艺术展',
    description: '本文介绍上海久事美术馆举办的围棋主题艺术展，巧妙融合中国传统文化、前沿人工智能与当代艺术。展览策展人阐述了围棋黑白棋子中蕴含的东方哲学智慧，以及围棋文化与极简主义、概念艺术和表现主义的对话。',
    category: '文化',
    wordCount: 234,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      { en: "An exhibition at the Jiushi Art Museum in Shanghai is featuring artwork inspired by Go, one of the oldest board games in the world, which originated in China more than 4,000 years ago. Go, or weiqi in Chinese, is one of the earliest binary-based games. The movements of the black and white pieces reflect the basic ideas of Eastern philosophy, according to Tu Ningning, curator of the exhibition.", zh: "上海久事美术馆正在举办一场以围棋为灵感的艺术展。围棋是世界上最古老的棋类游戏之一，起源于4000多年前的中国。围棋，或称\'弈\'，是最早基于二进制的游戏之一。据展览策展人屠宁宁介绍，黑白棋子的走法反映了东方哲学的基本思想。" },
      { en: "\'The exhibition brings together Go culture, cutting-edge technology and contemporary art,\' says Tu. \'We hope to present the rather abstract Go game and AI in a visual context, and initiate dialogues with minimalism art, conceptual art and expressionism.\'", zh: "屠宁宁说：\'这次展览将围棋文化、前沿技术与当代艺术融为一体。我们希望在一个视觉语境中呈现相对抽象的围棋游戏和人工智能，并与极简主义艺术、概念艺术和表现主义展开对话。\'" },
      { en: "\'Each move should serve a long-term purpose. You try to lead the opponent into your trap and force them to follow your guidance till they lose,\' explains Wang Wei, a Go player among the visitors to the exhibition. \'The players\' personalities are revealed during the game, and one\'s weaknesses are exposed to the opponent,\' she adds. \'A decent winner always tries to outplay the opponent by no more than one or two points as a gesture of modesty and respect for the other side.\'", zh: "参观者中的围棋选手王伟解释道：\'每一步都应该有长远的意图。你试图将对手引入你的陷阱，迫使他们按照你的引导走，直到他们输掉。\'她补充说：\'棋手们的性格会在对局中展现出来，一个人的弱点也会暴露给对手。\' \'一个体面的赢家总是试图只以一两分的优势战胜对手，作为对对手谦逊和尊重的姿态。\'" },
      { en: "Tu says it was the balance between the black and white pieces, beauty in the strategic placement of the pieces, and the energy flow following each move that inspired artists to create oil paintings, sculptures, digitally generated graphics and silk-screen prints for the showcase.", zh: "屠宁宁说，正是黑白棋子之间的平衡、棋子战略布局的美感以及每一步之后的能量流动，启发了艺术家们为这次展览创作油画、雕塑、数字生成图像和丝网版画。" }
    ]
  },
  {
    id: 'gk2025-007',
    title: 'English Market Towns to Visit in the UK',
    cnTitle: '英国值得游览的集市城镇',
    description: '本文描绘了英国四个历史悠久、风景各异的英格兰小镇——赫里福德、勒德洛、什鲁斯伯里和梅瓦吉西。每个小镇都有独特的个性，由几个世纪以来生产和交易的商品塑造而成。文章展示了自然与人文景观的融合之美，以及英国深厚的历史文化底蕴。',
    category: '文化',
    wordCount: 250,
    coverColor: 'bg-orange-500',
    paragraphs: [
      { en: "English market towns come in many shapes and sizes. Each has a personality shaped by the goods and services produced and traded for centuries. But each town has more to do than shop.", zh: "英国的集市小镇形态各异、大小不一。每个小镇都有由几个世纪以来生产和交易的商品与服务塑造出的独特个性。但每个小镇可做的事情远不止购物。" },
      { en: "Hereford has remained a lively market town since 1189. Skirting the town square, you\'ll find lovely shops, eateries, and the Black and White House Museum. The Hereford Cathedral is the most impressive building in town. It\'s also home to an ancient library. One of the four original copies of the Magna Carta is displayed there.", zh: "赫里福德自1189年以来一直是一个热闹的集市小镇。环绕着市政广场，你会发现可爱的商店、餐馆以及黑白相间的房子博物馆。赫里福德大教堂是镇上最宏伟的建筑，里面还藏有一座古老的图书馆。四份《大宪章》原件中的一份就陈列在那里。" },
      { en: "Ludlow is known as the Foodie Center of England. Butcher shops, greengrocers, bakeries, and cheese shops line the town square. Bordering the square, the Ludlow Castle is a \'must explore\' medieval stronghold. The three-day Ludlow Food Festival is held each September.", zh: "勒德洛被誉为英格兰的美食中心。肉铺、蔬果店、面包店和奶酪店排列在市政广场周围。毗邻广场的是勒德洛城堡，这是一座\'必须探索\'的中世纪要塞。为期三天的勒德洛美食节每年九月举行。" },
      { en: "Getting to Shrewsbury Town Center from London is challenging but worth the anxiety. The River Severn has a significant turn through town, almost making an island of Shrewsbury Town Center. The shape creates a perfect market where goods could be shipped and received using the river as a highway. Flowers are everywhere — hanging baskets, window boxes, and planters — just what you imagine in an attractive English market town.", zh: "从伦敦前往什鲁斯伯里市中心虽然费时但值得一去。塞文河在镇内有一个大转弯，几乎把什鲁斯伯里市中心变成了一座岛屿。这种形状创造了一个完美的市场，货物可以利用河流作为高速公路进行运输和接收。鲜花无处不在——吊篮、窗台花箱和花盆——这正是你想象中的迷人的英国集市小镇。" },
      { en: "Even if you haven\'t been to the small fishing village Mevagissey, you\'ve probably seen it in a movie or British TV show. The working harbor took shape in 1774. Fishermen go out to sea daily and sell their fish in harbor-side markets. Don\'t leave the harbor without a traditional Cornish pie. It\'s delicious.", zh: "即使你没去过梅瓦吉西这个小渔村，你可能也在电影或英剧中见过它。这个正在运作的港口于1774年形成。渔民们每天出海，在海港边的市场销售他们的鱼。离开港口时别忘了尝尝传统的康沃尔馅饼。非常美味。" }
    ]
  },
  {
    id: 'gk2025-008',
    title: 'The Hospital Teacher',
    cnTitle: '医院教师',
    description: '文章讲述开设在斯坦福大学露西尔·帕卡德儿童医院中的学校如何帮助住院患者继续学习。Kathy Ho老师不仅是教师，还扮演教练、顾问和安慰者的角色，帮助学生保持与外界同龄人同步，为回归正常学校做准备，体现了对弱势群体的关怀和教育的温度。',
    category: '教育',
    wordCount: 303,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: "Kathy Ho teaches high school inside Lucile Packard Children\'s Hospital Stanford (LPCH). \'Sometimes I don\'t like saying that I\'m a teacher,\' says Ho. \'People get in their minds an idea of what teachers do, but that\'s not really what it is here.\'", zh: "Kathy Ho在斯坦福大学露西尔·帕卡德儿童医院（LPCH）里教高中课程。\'有时候我不喜欢说自己是一名教师，\'Ho说。\'人们心中对教师的工作有一种固定的看法，但这里的情况并不一样。\'" },
      { en: "\'Here\' is room 386, where each year, about 500 LPCH patients also become students. The hospital school is free of parents, doctors, and medical procedures. It\'s a place of learning. About half of Ho\'s students stay for a week or less; others are there for more than a year. Most of Ho\'s students will recover, which means that preparing them to return to school is an increasingly important component of care.", zh: "\'这里\'指的是386号房间，每年约有500名LPCH患者在这里也成为学生。这所医院学校里没有家长、医生和医疗程序，它是一个学习的地方。Ho的学生中大约一半只停留一周或更短时间，有些则住一年以上。Ho的大多数学生将会康复，这意味着为他们重返学校做准备日益成为护理的重要组成部分。" },
      { en: "Still, in room 386, academics don\'t come first. Physical health and mental health are the priority. \'If you\'re scared about something and thinking only about that, there\'s no way you\'re going to be able to learn,\' Ho says. \'I\'m a coach, an adviser, and a comforter, and that\'s what it means to be a hospital teacher.\'", zh: "尽管如此，在386号房间里，学业并不是第一位的。身体健康和心理健康才是优先事项。\'如果你对某事感到害怕，满脑子只想着那件事，你就不可能学习，\'Ho说。\'我是教练、顾问和安慰者，这就是医院教师的意义。\'" },
      { en: "There are up to 30 students at any given time in Ho\'s class. She generally works with their regular teachers to get lessons and tests being used at their home schools. Some teachers don\'t give the kids any assignments; they express sympathy instead. \'I feel like it is a disservice to the kids,\' Ho says. \'They think their teachers don\'t care about their schoolwork.\'", zh: "Ho的教室里任何时候都有多达30名学生。她通常与学生们原来的老师合作，获取他们原学校使用的课程和考试资料。有些老师不给孩子们布置任何作业，只是表示同情。\'我觉得这对孩子们是一种伤害，\'Ho说。\'他们会认为老师不关心他们的学业。\'" },
      { en: "Ho recognizes the psychological benefit of helping kids keep up with their peers outside the hospital. \'I actually think the medicine is only a small piece for some problems,\' says Julie Good, director of pain management services at LPCH. \'It\'s about problem-solving around what it means to have a full life. Those kids have dreams. School can keep those dreams alive by giving kids a way to learn and grow.\'", zh: "Ho认识到帮助孩子们跟上医院外同龄人的步伐所带来的心理益处。\'事实上，我认为药物对于某些问题只是很小的一部分，\'LPCH疼痛管理服务主任Julie Good说。\'这是关于解决如何拥有完整生活的问题。那些孩子有自己的梦想。学校可以通过为孩子们提供学习和成长的途径来让这些梦想保持鲜活。\'" }
    ]
  },
  {
    id: 'gk2025-009',
    title: 'Indoor Plants Boost Your Mood',
    cnTitle: '室内植物提升心情',
    description: '文章从室内植物网店销售火爆的现象说起，介绍绿植对人们情绪和思维影响的相关科学研究——降低皮质醇水平、提高学业和工作效率、减少30%的病假率。倡导栽培室内植物的健康生活方式，强调照料植物是耐心和学习的锻炼。',
    category: '健康',
    wordCount: 261,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: "When Sonja Detrinidad opened her online shop selling houseplants, she didn\'t have high hopes for it. But the opposite happened: She was flooded, shipping out 1,200 orders in June of 2020 alone. In the past year, Detrinidad sent out more than 70,000 plants. Her success is just one example of increased time at home leading to an explosion in the houseplant industry.", zh: "当Sonja Detrinidad开设销售室内植物的网店时，她并没有抱太大希望。但结果却恰恰相反：订单蜂拥而至，仅2020年6月就发出了1200单。在过去的一年里，Detrinidad发送了超过70000株植物。她的成功只是居家时间增加导致室内植物产业爆发的一个例子。" },
      { en: "\'Plants are in fashion right now,\' says Dr. Melinda Knuth, a researcher from the University of Florida. \'People who live in plant-rich environments report a higher life satisfaction rating,\' she says. \'Adding more nature to our environment can change our mood and how we think.\' Plants can improve our state of mind in a few ways but the biggest is by decreasing our level of cortisol, the stress hormone in our body.", zh: "\'植物现在很流行，\'佛罗里达大学的研究员Melinda Knuth博士说。\'生活在富含植物环境中的人们报告更高的生活满意度评分，\'她说。\'在我们的环境中增加更多自然可以改变我们的情绪和思维方式。\'植物可以通过多种方式改善我们的精神状态，但最主要的是降低我们体内压力荷尔蒙皮质醇的水平。" },
      { en: "\'Students who are around plants perform better academically than students who are in a classroom without plants,\' says Knuth. \'This productivity also translates into the workplace for adults. Our study showed that there was a 30% decrease in sick leave for people who were in plant-rich workplaces.\'", zh: "\'周围有植物的学生比在没有植物的教室里的学生学业表现更好，\'Knuth说。\'这种生产力也转化为成年人的工作场所。我们的研究表明，在富含植物的工作场所工作的人病假减少了30%。\'" },
      { en: "If you\'re among the groups of people who are enjoying the mental and physical health benefits of surrounding yourself with plants, don\'t beat yourself up if one (or a few!) doesn\'t make it. \'Doctors practice medicine and lawyers practice law and you should allow yourself the practice it takes to sustain a plant. Tending to plants is an exercise in patience and learning. Be invested in taking care of it, but if it dies, go get another one,\' Detrinidad says.", zh: "如果你是那些享受被植物包围所带来的身心健康益处的人之一，如果有一株（或几株）植物没能存活，不要自责。Detrinidad说：\'医生练习医学，律师练习法律，你也应该允许自己练习如何养活一株植物。照料植物是耐心和学习的锻炼。要投入精力照顾它，但如果它死了，就去再买一株。\'" }
    ]
  },
  {
    id: 'gk2025-010',
    title: 'Wasted Food Becomes Haute Cuisine',
    cnTitle: '废弃食物变成高级美食',
    description: '通过纽约Blue Hill餐厅wastED实验项目的案例，本文介绍将食材边角料加工成美味佳肴的创新实践。餐厅用通常被丢弃的鱼软骨、果汁渣、甘蓝茎等部位制作精致菜肴，以此提高人们对食物浪费问题的意识，生动阐释节约食物和物尽其用的可持续发展理念。',
    category: '环境',
    wordCount: 328,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: "Does your soul die a little every time you throw away unused food? Mine does. Maybe that feeling comes from growing up in South Africa, where the phrase \'there are children starving in Africa\' was more of an uncomfortable reminder of fact than a prayer at dinner time.", zh: "每当你扔掉未吃的食物时，你的灵魂会死掉一点吗？我的会。也许这种感觉来自我在南非长大的经历，在那里\'非洲有孩子在挨饿\'这句话与其说是晚餐时的祈祷，不如说是一个令人不安的事实提醒。" },
      { en: "Food waste is a growing concern in the restaurant, supermarket, and supply chain industries. From technological solutions to educational campaigns, food producers and sellers are looking for ways to use more of what we\'re already growing. But last month, one popular New York City restaurant tried a different way: It changed its menu to exclusively offer food that would otherwise be thrown away.", zh: "食物浪费正日益成为餐馆、超市和供应链行业关注的问题。从技术创新到宣传教育活动，食品生产商和销售商正在寻找方法来更多地利用我们已经种植的食物。但上个月，纽约市一家颇受欢迎的餐厅尝试了不同的方式：它将菜单改为专门提供原本会被扔掉的食物。" },
      { en: "For two weeks in March, Greenwich Village\'s Blue Hill restaurant was renamed wastED, and served items like fried skate cartilage, a juice pulp burger, and a dumpster diver\'s vegetable salad. Each dish was tailor-made to raise awareness regarding food waste.", zh: "三月的前两周，格林威治村的Blue Hill餐厅改名为wastED，提供炸鳐鱼软骨、果汁渣汉堡和 dumpster diver\'s 蔬菜沙拉等菜品。每道菜都是量身定做的，目的是提高人们对食物浪费问题的认识。" },
      { en: "A study by the Food Waste Alliance determined that the average restaurant generates 33 pounds of food waste for every $1,000 in revenue, and of that waste only 15.7% is donated or recycled. Up to 84.3% is simply thrown out. Restaurants like Silo in the UK have experimented with zero-waste systems, but wastED took the concept to its logical conclusion.", zh: "食物浪费联盟的一项研究确定，普通餐馆每产生1000美元的收入就会产生33磅的食物浪费，而这些浪费中只有15.7%被捐赠或回收。高达84.3%的食物被直接扔掉。英国的Silo等餐厅尝试过零浪费系统，但wastED将这一概念推向了合乎逻辑的结论。" },
      { en: "It should be noted that none of the items on wastED\'s menu was technically made from garbage. Instead, all the ingredients used were examples of meat cuts and produce that most restaurants would never consider serving. Things like kale ribs, fish collars, rejected sweet potatoes, and cucumber butts were all re-appropriated and, with the help of a number of good chefs, turned into excellent cuisine.", zh: "应该指出的是，wastED菜单上的菜品在技术上都不是用垃圾制作的。相反，所有使用的食材都是大多数餐厅永远不会考虑供应的肉块和农产品。像甘蓝茎、鱼颈骨、被淘汰的红薯和黄瓜屁股这样的食材都被重新利用，在许多优秀厨师的帮助下，变成了精美的菜肴。" },
      { en: "Though wastED received enthusiastic reviews, it was designed from the start as a short-lived experiment; Blue Hill has since returned to its regular menu. Nevertheless, it serves as a reminder that there are many ways to address problems of sustainability, and that you can make an amazing meal out of almost anything.", zh: "尽管wastED获得了热情的好评，但它从一开始就被设计为一个短暂的实验；Blue Hill后来恢复了常规菜单。尽管如此，它提醒我们，有许多方法可以解决可持续性问题，而且你几乎可以用任何东西做出一顿令人惊叹的大餐。" }
    ]
  },
  {
    id: 'gk2025-011',
    title: 'Fitness Grandma',
    cnTitle: '健身奶奶',
    description: '65岁的Evelyn Donohue奶奶在经历饮食失调和健康危机后决心改变生活方式，通过健身和在网上分享心得重燃生命热力。她练出了令人印象深刻的肌肉并收获了大量社交媒体粉丝，诠释了银发族突破年龄桎梏的勇气，展现了体育运动对身心健康的促进作用。',
    category: '健康',
    wordCount: 217,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: "Evelyn Donohue is a 65-year-old grandma. She only started to exercise seven years ago after having a wake-up call. She\'d been struggling with eating disorders and health issues, which eventually led her to getting surgery. After that experience, she knew that she needed to make a change. Determined to turn her life around, Ms Donohue began to work out and follow a healthy lifestyle, before discovering a passion for weightlifting.", zh: "Evelyn Donohue是一位65岁的奶奶。她七年前才在一次警钟之后开始锻炼。她一直与饮食失调和健康问题作斗争，最终不得不接受手术。那次经历后，她知道她需要做出改变。决心扭转人生的Donohue女士开始锻炼并遵循健康的生活方式，随后发现了对举重的热爱。" },
      { en: "Since setting out on the journey, the fitness lover has not only managed to build an impressive set of muscles — but also a huge following on social media.", zh: "自从踏上这段旅程以来，这位健身爱好者不仅练出了一组令人印象深刻的肌肉——还在社交媒体上积累了大量的粉丝。" },
      { en: "The well-liked grandma regularly posts workout content, explaining there\'s no reason others can\'t look this good. She said it was all down to some key aspects. \'Hold on: Consider failure as a stepping-stone to success and never give up. Stick to your plan,\' she said. \'Help others: Lift others up on your journey. Success is sweeter when shared.\' She previously explained that \'you do not need to have an amazing body to exercise... the goal is to feel good, not look good.\'", zh: "这位受欢迎的奶奶定期发布锻炼内容，解释说其他人没有理由不能看起来这么好。她说这一切都归功于一些关键方面。\'坚持：把失败视为成功的垫脚石，永不放弃。坚持你的计划，\'她说。\'帮助他人：在你的旅程中鼓舞他人。分享时的成功更加甜蜜。\'她此前解释说\'你不需要拥有令人惊叹的身材才能锻炼……目标是感觉良好，而不是看起来好看。\'" },
      { en: "Ms Donohue used to be laughed at for being too old to work out, but she has proved the doubters wrong in the best possible way and has indeed become an inspiration for many social media users.", zh: "Donohue女士曾经因为年纪太大而健身被人嘲笑，但她以最好的方式证明了怀疑者是错误的，并且确实成为了许多社交媒体用户的灵感来源。" }
    ]
  },
  {
    id: 'gk2025-012',
    title: 'Restaurant Encounter',
    cnTitle: '餐厅邂逅',
    description: '本文是一段餐厅偶遇的对话。Kevin和Grace在一家牛排馆意外相遇，Kevin邀请Grace加入他和表妹Fiona的聚餐，但Grace因已与David等朋友有约而婉拒。对话展现了老友重逢时的亲切寒暄和社交礼仪，同时提到了各自的生活近况。',
    category: '生活',
    wordCount: 131,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: "M: Hi, Grace. Haven\'t seen you for some time! W: Oh, Kevin. Nice to see you. Are you also here for dinner? M: Yes. My cousin Fiona is in town, and this is her favorite steakhouse. You met her last year, right? W: Yes, at Jennifer\'s wedding. M: Right. Look, are you here alone? Would you like to join us?", zh: "男：嗨，Grace。好久不见了！女：哦，Kevin。很高兴见到你。你也是来这儿吃饭的吗？男：是的。我表妹Fiona来城里了，这是她最喜欢的牛排馆。你去年见过她的，对吧？女：是的，在Jennifer的婚礼上。男：对了。你在一个人吃饭吗？愿意加入我们吗？" },
      { en: "W: That\'s very nice of you, but I\'m meeting David and some other friends for dinner. You remember David from Class Two? M: Of course. He was the captain of our school\'s basketball team. I haven\'t seen him since graduation. W: He worked abroad for 3 years and has just come back. M: Well, I\'ll go and say a quick hello. We definitely should get together sometime and have a drink.", zh: "女：你太好了，但我约了David和其他几个朋友吃饭。你还记得二班的David吗？男：当然记得。他是我们学校篮球队的队长。毕业后我就没见过他了。女：他在国外工作了三年，刚回来。男：好吧，我去跟他打个招呼。我们改天一定要聚一聚，喝一杯。" }
    ]
  },
  {
    id: 'gk2025-013',
    title: 'TV Programs: Entertainment vs Education',
    cnTitle: '电视节目：娱乐与教育',
    description: '对话探讨了电视节目的娱乐性和教育性之争。女士不满新闻和纪录片减少、真人秀增多的趋势，认为电视应该教育观众而非一味迎合。男士则认为电视的本质是娱乐，只要保持各类节目的平衡即可，想受教育应该去大学。',
    category: '社会',
    wordCount: 130,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: "W: There\'s nothing decent to watch these days on TV. M: Nothing decent? There\'s tons of stuff. W: They\'ve cut down on the number of news programs, and the number of documentaries. All have been replaced by these stupid reality shows and game shows, you know. M: Well, they often make me laugh. People want to watch that kind of thing. It\'s good, you know. As long as there\'s a balance, there\'s a bit of this, a bit of that.", zh: "女：这些天电视上没什么好看的节目。男：没什么好看的？节目多着呢。女：新闻节目和纪录片的数量都被削减了。你知道，都被这些愚蠢的真人秀和游戏节目取代了。男：嗯，它们经常让我发笑。人们想看那种东西。这挺好的，你知道的。只要保持平衡，有这种也有那种。" },
      { en: "W: Should we be giving people what they want to watch? Or should we be, you know, trying to educate them? M: Well, TV is there for entertainment. If you want an education, you go to university or college or something, don\'t you? W: No. I really don\'t think so.", zh: "女：我们应该给人们想看的东西吗？或者我们应该试着教育他们？男：嗯，电视就是用来娱乐的。如果你想受教育，你去大学或学院什么的，不是吗？女：不。我真的不这么认为。" }
    ]
  },
  {
    id: 'gk2025-014',
    title: 'School Service Program',
    cnTitle: '学校服务项目',
    description: '本段采访介绍了Mountainside高中的社区服务项目。社区成人可以来学校听课或参加晚间成人课程，学生也可以到社区实践，去农场、工厂、医院、养老院、图书馆甚至政府部门工作。这一项目让学校成为学生生活和社区的一部分，促进家校互动与相互理解。',
    category: '教育',
    wordCount: 191,
    coverColor: 'bg-cyan-500',
    paragraphs: [
      { en: "W: Welcome to Education Update. This is Kathy. We have Robert Hall from Mountainside High School with us today. Hello, Mr. Hall. Could you tell us about the service program in your school? M: Okay. It goes like this. On certain days each month, adults from the neighborhood sit in class with the students and see what\'s going on in the school.", zh: "女：欢迎收听《教育动态》。我是Kathy。今天我们请来了Mountainside高中的Robert Hall先生。您好，Hall先生。您能介绍一下贵校的服务项目吗？男：好的。是这样的。每月特定的日子，社区的成年人会和学生们一起坐在教室里，看看学校里发生了什么。" },
      { en: "W: That\'s interesting. What else can they do? M: They can also take adult courses in the evenings for both fun and serious learning. W: What about the students? What can they do in the program? M: Well, they can change places with adults and go working on a farm or in a factory or taking care of the housework.", zh: "女：真有意思。他们还能做什么？男：他们还可以在晚上参加成人课程，既有趣味性的也有严肃学习性质的。女：那学生们呢？他们在项目中能做什么？男：嗯，他们可以和成年人互换位置，去农场或工厂工作，或者做家务。" },
      { en: "W: Good. This helps them better understand the lives of their parents and know more about their neighborhood. M: Yes. Students have a chance to work in hospitals, nursing homes, libraries, and even in government offices. W: So the school is not only part of the student\'s lives, but also part of the neighborhood. M: That\'s exactly what our service program is for. W: Great. Thank you, Mr. Hall.", zh: "女：很好。这有助于他们更好地了解父母的生活，更多地了解自己的社区。男：是的。学生们有机会在医院、养老院、图书馆甚至政府部门工作。女：所以学校不仅是学生生活的一部分，也是社区的一部分。男：这正是我们服务项目的目的。女：太好了。谢谢您，Hall先生。" }
    ]
  },
  {
    id: 'gk2025-015',
    title: 'Climate Change Art Project',
    cnTitle: '气候变化艺术项目',
    description: '演讲者介绍如何通过艺术项目传播气候变化意识。她居住在低洼临海城市，受海平面上升威胁，因此发起了\'水下业主协会\'艺术项目，用数千个标牌标注房屋海拔高度以警示气候变化风险。这一项目已经产生了现实影响，促使居民成立了真正的业主协会来应对气候变化。',
    category: '环境',
    wordCount: 175,
    coverColor: 'bg-orange-500',
    paragraphs: [
      { en: "Good evening. Tonight, I\'ll continue to share how we can use art to spread the word about the changing climate. In our day-to-day lives, climate change can be hard to see, but some places will feel the changes sooner than others. The city I live in is very flat and close to the water line. And rising sea levels are already creating floods.", zh: "晚上好。今晚，我将继续分享如何利用艺术来传播关于气候变化的信息。在我们的日常生活中，气候变化可能很难被察觉，但有些地方会比其他地方更早感受到变化。我居住的城市地势平坦，接近海平面。而且海平面上升已经造成了洪水。" },
      { en: "So I decided to do something to make it impossible to ignore. I started an art project called Underwater Homeowners\' Association and painted numbers onto thousands of large signs. Each number showed how high someone\'s house was above sea level. A one would mean that if the sea level rose one foot, the building would flood.", zh: "所以我决定做点什么，让这个问题无法被忽视。我发起了一个名为\'水下业主协会\'的艺术项目，在数千个大标牌上画上数字。每个数字显示某人的房子高于海平面多少。数字一意味着如果海平面上升一英尺，建筑物就会被淹没。" },
      { en: "I gave the signs to homeowners who put them in their yards. Kids painted more signs and put them near their schools and along busy roads. The project has already had a real world effect. The people who put the signs in their yards created a real homeowners association to address climate change in their communities.", zh: "我把标牌发给房主们，他们把它们插在自家院子里。孩子们画了更多的标牌，放在学校附近和繁忙的道路旁。这个项目已经产生了现实影响。那些在院子里插标牌的人成立了一个真正的业主协会来应对他们社区的气候变化。" }
    ]
  },
  {
    id: 'gk2025-016',
    title: 'Smartphone Addiction Among Teenagers',
    cnTitle: '青少年智能手机成瘾',
    description: '对话讨论了青少年智能手机成瘾的问题。Sam担心女儿Jillian沉迷智能手机影响了学习和专注力，女士表示这种情况很常见，95%的青少年拥有或可以使用智能手机。许多学校已经出台了禁止或控制在校手机使用的政策，且这些政策带来了积极的变化。',
    category: '社会',
    wordCount: 120,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: "W: Hi, Sam. How is your daughter doing at school? M: Well, since I bought a smartphone for Jillian last summer, it seems the phone has become an extension of her arm and it has made it impossible for her to concentrate. That really obsesses me.", zh: "女：嗨，Sam。你女儿在学校怎么样？男：嗯，自从去年夏天我给Jillian买了智能手机后，手机似乎已经成为她手臂的延伸，让她无法集中注意力。这真的让我很困扰。" },
      { en: "W: You are not alone in that. It is said that 95% of teenagers either own or have access to a smartphone. Some schools have put in place policies banning or controlling phone use during school hours. M: I\'m all in favor of these policies.", zh: "女：你不是一个人有这种感觉。据说95%的青少年要么拥有要么可以使用智能手机。一些学校已经制定了禁止或控制在校使用手机的政策。男：我完全支持这些政策。" },
      { en: "W: Yeah, more and more schools have begun doing this. A friend of mine works at school, and he told me that these policies had brought about positive changes.", zh: "女：是的，越来越多的学校开始这样做。我的一个朋友在学校工作，他告诉我这些政策带来了积极的变化。" }
    ]
  },
  {
    id: 'gk2025-017',
    title: 'A Job Interview and Career Decision',
    cnTitle: '求职面试与职业决定',
    description: '对话讲述了Frank接到新公司Anderson High Tech的销售经理职位offer后，向现任上司Susanna说明情况。他表示虽然在现公司工作了五年很喜欢这里，但晋升无望。他希望得到内部调岗和加薪，否则将接受新offer。上司表示会尽力挽留他。',
    category: '经济',
    wordCount: 196,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: "M: Hi, Susanna. I had an interview with Anderson High Tech, and they offered me the position of sales manager. I want to let you know before I make my decision. W: I\'m sorry to hear that, Frank, but I appreciate you telling me before you accept the offer.", zh: "男：嗨，Susanna。我参加了Anderson High Tech的面试，他们给了我销售经理的职位。我想在做决定之前告诉你。女：听到这个消息我很遗憾，Frank，但我感谢你在接受offer之前告诉我。" },
      { en: "M: I really enjoy my work here. I put in effort for five years to gain more experience, but there seems no hope of being promoted. W: What would have you decide to stay? M: I would consider staying if I could change my position. I would love working in this same department, but I would like to be doing something different. And they offered me 6% more than my present salary.", zh: "男：我真的很喜欢在这里工作。我花了五年时间努力积累更多经验，但似乎没有被晋升的希望。女：什么能让你决定留下来？男：如果我能调换岗位，我会考虑留下。我喜欢在同一个部门工作，但我想做一些不同的事情。而且他们给我的薪水比我现在的多6%。" },
      { en: "W: When do you have to tell them your decision? M: They want me to respond by Friday. W: Let me see. I\'ll talk to the human resources director and let you know on Thursday. Can you wait until then? M: That will be too late. Wednesday will be better. W: Okay, no problem. I\'m going to do everything I can to keep you on board. M: I appreciate what you are doing for me.", zh: "女：你什么时候必须告诉他们你的决定？男：他们希望我周五之前回复。女：让我想想。我会和人力资源总监谈谈，周四给你答复。你能等到那时候吗？男：那太晚了。周三比较好。女：好的，没问题。我会尽一切努力让你留下来。男：感谢你为我做的一切。" }
    ]
  },
  {
    id: 'gk2025-018',
    title: 'Creative Day School Summer Camp Programs',
    cnTitle: '创意日校夏令营项目',
    description: 'Creative Day School夏季营地介绍。学校提供两个全日制夏令营项目：Mini Camp面向4岁儿童，保持日常作息并每周至少一次实地考察；Older Summer Camp面向5至12岁儿童，包括艺术、户外游戏、游泳等活动。参加实地考察需要家长许可和活动费。',
    category: '教育',
    wordCount: 175,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: "Hello everyone. Welcome to Creative Day School. This summer we provide two full time summer camp programs. Both will last the entire time the children are out of school.", zh: "大家好。欢迎来到Creative Day School。今年夏天我们提供两个全日制夏令营项目。两个项目都将持续整个孩子们的暑假。" },
      { en: "Our 1st summer camp is for our four year olds called minicamp. This minicamp will still have their normal everyday schedule with a lot of fun activities. At least once a week, our mini campers will go on a field trip. These field trips could consist of a day at the beach or exploring the natural museum.", zh: "我们的第一个夏令营面向4岁的儿童，称为minicamp。这个minicamp将保持他们正常的日常作息，并有很多有趣的活动。我们的小营员每周至少会进行一次实地考察。这些实地考察可能包括海滩一日游或参观自然博物馆。" },
      { en: "Our older summer camp is provided for ages five through twelve. There are scheduled summer fun activities and games. The children will participate in art, outdoor play games and much more. Swimming at the nearby pool is often a weekly field trip for ages six and up. Other field trips could include bowling, a day at the movies, or a picnic in the park. Permission of parents and activity fees are required to participate in all field trips.", zh: "我们的大龄夏令营面向5至12岁的儿童。有安排好的夏季趣味活动和游戏。孩子们将参加艺术、户外游戏等活动。对于6岁以上的孩子，在附近游泳池游泳通常是每周的实地考察。其他实地考察可能包括保龄球、看电影或公园野餐。参加所有实地考察都需要家长许可和活动费。" },
      { en: "Now let\'s watch a five minute film about last year\'s programs.", zh: "现在让我们观看一段关于去年项目的五分钟影片。" }
    ]
  }
];

export default mockArticles;
