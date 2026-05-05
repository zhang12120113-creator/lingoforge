const fs = require('fs');

function readArray(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return (new Function('return ' + content))();
}

const healthBusiness = readArray('extraArticles.js');
const cultureEnv = readArray('mockArticles4.js');
const techEconomy = readArray('src/modules/reading/data/mockArticles5.js');

const psychEdu = [
  {
    id: 'extra_psychology_01',
    title: '情商的力量',
    enTitle: 'The Power of Emotional Intelligence',
    cnTitle: '情商的力量',
    description: '阅读理解：Emotional intelligence is widely regarded as one of the most valuable skills in modern life.',
    category: '心理',
    wordCount: 188,
    coverColor: 'bg-blue-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet4',
    paragraphs: [
      {
        en: 'Emotional intelligence is widely regarded as one of the most valuable skills in modern life. Unlike traditional intelligence, which focuses on logical reasoning and academic performance, emotional intelligence refers to the ability to recognize, understand, and manage our own emotions, as well as those of the people around us. Researchers have found that individuals with high emotional intelligence tend to build stronger relationships, perform better at work, and recover more quickly from setbacks.',
        zh: '情商被广泛认为是现代生活中最宝贵的能力之一。与侧重逻辑推理和学业表现的传统智力不同，情商指的是识别、理解并管理自身情绪以及周围他人情绪的能力。研究表明，情商较高的人往往能够建立更牢固的人际关系，在工作中表现更出色，并能更快地从挫折中恢复过来。'
      },
      {
        en: 'Fortunately, emotional intelligence is not something we are simply born with. It can be cultivated through deliberate practice. Keeping a journal to reflect on daily feelings, listening carefully before responding, and trying to see situations from another person\'s point of view are all effective strategies. Over time, these small habits help us become calmer in stressful moments and more thoughtful in our interactions. In an increasingly connected world, the ability to handle emotions wisely may matter just as much as technical knowledge.',
        zh: '令人欣慰的是，情商并非与生俱来，而是可以通过有意识的练习加以培养。坚持写日记反思每日的情绪、在回应之前认真倾听、尝试从他人的角度看问题，都是行之有效的方法。随着时间的推移，这些小习惯能帮助我们在压力下保持平静，在交往中更加体贴。在日益紧密相连的世界里，妥善处理情绪的能力或许与专业知识同等重要。'
      }
    ]
  },
  {
    id: 'extra_psychology_02',
    title: '拖延背后的心理机制',
    enTitle: 'The Psychology Behind Procrastination',
    cnTitle: '拖延背后的心理机制',
    description: '阅读理解：Procrastination is often misunderstood as a simple problem of laziness or poor time management.',
    category: '心理',
    wordCount: 196,
    coverColor: 'bg-amber-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet6',
    paragraphs: [
      {
        en: 'Procrastination is often misunderstood as a simple problem of laziness or poor time management. In fact, psychologists now believe it is mainly an emotional issue. When a task feels boring, difficult, or threatening to our self-image, the brain naturally seeks short-term relief by turning to easier or more enjoyable activities. Scrolling through social media or tidying the desk suddenly feels far more attractive than facing a challenging report.',
        zh: '人们常常误以为拖延只是懒惰或时间管理不当的简单问题。事实上，心理学家如今普遍认为，拖延主要是一个情绪问题。当一项任务让人感到无聊、困难或威胁到自我形象时，大脑会本能地通过转向更轻松或更有趣的活动来寻求短期的解脱。此时，刷社交媒体或整理桌面会突然变得比面对一份棘手的报告更具吸引力。'
      },
      {
        en: 'The good news is that recognizing this pattern is the first step toward overcoming it. Instead of blaming themselves, students can practice self-compassion and break large tasks into smaller, manageable steps. Setting a timer for just five minutes is often enough to overcome the initial resistance, because once we begin, continuing usually feels easier. Learning to tolerate uncomfortable feelings, rather than escaping from them, gradually builds the inner strength needed for steady, focused work.',
        zh: '好消息是，认识到这种模式正是克服拖延的第一步。学生不必一味自责，而可以练习自我关怀，将大任务拆分为更易管理的小步骤。仅仅设定五分钟的计时往往就足以打破最初的抗拒，因为一旦开始，继续下去通常会变得轻松许多。学会容忍而非逃避不适的情绪，能够逐渐培养出持续专注工作所需的内在力量。'
      }
    ]
  },
  {
    id: 'extra_psychology_03',
    title: '心理韧性的培养',
    enTitle: 'Building Psychological Resilience',
    cnTitle: '心理韧性的培养',
    description: '阅读理解：Life inevitably brings challenges, and how we respond to them often matters more than the difficulties themselves.',
    category: '心理',
    wordCount: 184,
    coverColor: 'bg-emerald-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet4',
    paragraphs: [
      {
        en: 'Life inevitably brings challenges, and how we respond to them often matters more than the difficulties themselves. Psychological resilience is the ability to adapt well in the face of stress, failure, or unexpected change. Contrary to popular belief, resilient people are not those who never feel pain or doubt. Rather, they have learned strategies that help them recover and grow from hard experiences.',
        zh: '生活中难免会遇到挑战，而我们应对挑战的方式往往比困难本身更为重要。心理韧性指的是在面对压力、失败或突如其来的变化时仍能良好适应的能力。与人们的普遍看法不同，富有韧性的人并非从不感到痛苦或疑惑，而是掌握了帮助自己从艰难经历中恢复并成长的方法。'
      },
      {
        en: 'Several habits can strengthen resilience over time. Maintaining close relationships provides emotional support during tough periods. Regular exercise and adequate sleep keep the body and mind in balance. Equally important is the way we talk to ourselves; replacing harsh self-criticism with realistic encouragement can change how we view setbacks. By treating failure as feedback rather than proof of incompetence, students and young professionals can build the confidence needed to keep moving forward, even when the path becomes uncertain.',
        zh: '一些日常习惯能够逐步增强心理韧性。维系亲密的人际关系，可以在困难时期提供情感支持；规律的运动和充足的睡眠则有助于身心平衡。同样重要的是我们与自己对话的方式：用切合实际的鼓励取代严苛的自我批评，能够改变我们看待挫折的视角。把失败当作反馈而非无能的证明，学生和年轻职场人就能积累起继续前行的信心，即便前路并不明朗。'
      }
    ]
  },
  {
    id: 'extra_psychology_04',
    title: '幸福背后的科学',
    enTitle: 'The Science Behind Happiness',
    cnTitle: '幸福背后的科学',
    description: '阅读理解：For a long time, people assumed that wealth and success were the surest paths to happiness.',
    category: '心理',
    wordCount: 192,
    coverColor: 'bg-rose-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet6',
    paragraphs: [
      {
        en: 'For a long time, people assumed that wealth and success were the surest paths to happiness. However, decades of research in positive psychology suggest a more complex picture. While a basic level of income certainly reduces stress, additional money brings surprisingly small gains in life satisfaction once essential needs are met. What matters far more, scientists argue, is the quality of our relationships, our sense of purpose, and the small positive experiences we accumulate every day.',
        zh: '长期以来，人们普遍认为财富与成功是通往幸福最可靠的途径。然而，积极心理学数十年的研究揭示了一幅更为复杂的图景。基本的收入水平固然能够缓解压力，但一旦基本需求得到满足，更多的金钱所带来的生活满意度提升却出乎意料地有限。科学家指出，真正更重要的是人际关系的质量、人生的意义感，以及我们日积月累的微小积极体验。'
      },
      {
        en: 'One famous long-term study followed hundreds of participants for over seventy years and found that warm, supportive relationships were the strongest predictor of well-being in old age. Other studies show that helping others, expressing gratitude, and engaging in activities that match our strengths consistently lift our mood. These findings remind us that happiness is less a destination to be reached and more a set of practices to be repeated. Choosing kindness and connection daily may be the most rewarding investment we can make.',
        zh: '一项著名的长期研究追踪了数百名参与者长达七十多年，结果发现，温暖而充满支持的人际关系是晚年幸福感最有力的预测指标。其他研究也表明，帮助他人、表达感恩以及投入与自身优势相契合的活动，都能持续提升我们的情绪。这些发现提醒我们：幸福与其说是一个需要抵达的目的地，不如说是一系列值得反复践行的习惯。每天选择善意与连结，或许是我们能做的最有回报的投资。'
      }
    ]
  },
  {
    id: 'extra_psychology_05',
    title: '成长型思维的力量',
    enTitle: 'The Power of a Growth Mindset',
    cnTitle: '成长型思维的力量',
    description: '阅读理解：The way students view their own abilities can have a profound impact on what they ultimately achieve.',
    category: '心理',
    wordCount: 186,
    coverColor: 'bg-violet-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet4',
    paragraphs: [
      {
        en: 'The way students view their own abilities can have a profound impact on what they ultimately achieve. Researcher Carol Dweck introduced the idea of two contrasting mindsets. People with a fixed mindset believe that intelligence and talent are unchangeable traits, while those with a growth mindset see abilities as qualities that can be developed through effort, strategies, and feedback. This simple difference in belief shapes how learners react to difficulty.',
        zh: '学生看待自身能力的方式会深刻影响他们最终的成就。研究者卡罗尔·德韦克提出了两种截然相反的思维模式。持固定型思维的人认为智力和天赋是无法改变的特质，而拥有成长型思维的人则将能力视为可以通过努力、策略和反馈不断发展的品质。这一简单的信念差异塑造了学习者面对困难时的反应。'
      },
      {
        en: 'Students with a growth mindset tend to embrace challenges, persist longer when stuck, and view mistakes as useful information rather than personal failure. Teachers and parents can encourage this attitude by praising effort and process rather than fixed labels such as "smart" or "gifted." Phrases like "you have not mastered it yet" replace discouraging conclusions with hopeful expectations. Over time, this language helps young learners build confidence, take on harder problems, and continue improving in school as well as in life.',
        zh: '具备成长型思维的学生更愿意迎接挑战，在受阻时更能坚持下去，并把错误视为有价值的信息，而非个人的失败。教师和家长可以通过表扬努力和过程，而非贴上"聪明"或"有天赋"等固定标签，来培养这种态度。用"你只是还没有掌握"这样的表达，取代令人沮丧的定论，便能注入充满希望的期待。久而久之，这种语言能帮助年轻学习者建立自信，挑战更难的问题，并在学习和生活中持续进步。'
      }
    ]
  },
  {
    id: 'extra_education_01',
    title: '终身学习的价值',
    enTitle: 'The Value of Lifelong Learning',
    cnTitle: '终身学习的价值',
    description: '阅读理解：In an age of rapid technological change, the idea that education ends with graduation is no longer realistic.',
    category: '教育',
    wordCount: 190,
    coverColor: 'bg-teal-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet4',
    paragraphs: [
      {
        en: 'In an age of rapid technological change, the idea that education ends with graduation is no longer realistic. Skills that seemed essential ten years ago may be partly automated today, while entirely new fields appear almost every year. As a result, lifelong learning has shifted from a personal hobby into a practical necessity. Workers who keep updating their knowledge are better able to adapt to new tools, new industries, and new ways of working together.',
        zh: '在科技飞速变革的时代，认为教育会随毕业而终止的想法已不再现实。十年前看似不可或缺的技能，如今部分已被自动化所取代，而几乎每年都会涌现出全新的领域。因此，终身学习已经从个人兴趣转变为一种实际需求。那些不断更新知识的劳动者，更能够适应新工具、新行业以及全新的协作方式。'
      },
      {
        en: 'Lifelong learning, however, brings benefits that go far beyond career security. Continuous study keeps the brain active and curious, which research links to better memory and emotional well-being in later life. It also broadens our perspective: learning a language, picking up a musical instrument, or exploring history all open doors to communities we might never have entered otherwise. Whether through online courses, public libraries, or simple conversation with experts, the opportunities to keep growing have never been so accessible.',
        zh: '然而，终身学习带来的益处远不止于职业上的稳定。持续学习能让大脑保持活跃与好奇，研究表明这与晚年更好的记忆力和情绪健康密切相关。它还拓宽了我们的视野：学习一门语言、掌握一种乐器或探索历史，都会为我们打开通往新群体的大门，而我们原本可能永远不会涉足这些领域。无论是通过在线课程、公共图书馆，还是与专家的简单交谈，持续成长的机会从未像今天这样触手可及。'
      }
    ]
  },
  {
    id: 'extra_education_02',
    title: '批判性思维的重要性',
    enTitle: 'The Importance of Critical Thinking',
    cnTitle: '批判性思维的重要性',
    description: '阅读理解：Every day we are exposed to a flood of information from news websites, social media, and countless online videos.',
    category: '教育',
    wordCount: 198,
    coverColor: 'bg-orange-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet6',
    paragraphs: [
      {
        en: 'Every day we are exposed to a flood of information from news websites, social media, and countless online videos. Some of it is accurate and helpful, but a great deal is incomplete, misleading, or simply wrong. Critical thinking is the mental skill that helps us separate reliable evidence from clever opinion. It involves asking where a claim comes from, what assumptions lie behind it, and whether the conclusions truly follow from the data presented.',
        zh: '每一天，我们都被来自新闻网站、社交媒体和无数网络视频的信息洪流所包围。其中有些内容准确且有益，但也有大量信息片面、误导甚至完全错误。批判性思维正是帮助我们将可靠证据与巧妙观点区分开来的思维能力。它要求我们追问一项主张的来源、其背后的假设，以及结论是否真的能从所呈现的数据中得出。'
      },
      {
        en: 'Universities increasingly emphasize critical thinking because memorizing facts alone is no longer enough. Students must learn to compare different sources, recognize their own biases, and revise their views when stronger evidence appears. Practical exercises such as debating, writing argumentative essays, and analyzing case studies all support this process. By practicing these skills regularly, learners become more confident in academic work and more responsible as citizens, since thoughtful judgment is the foundation of healthy public discussion in any society.',
        zh: '大学正日益重视批判性思维，因为仅仅记忆事实早已不够。学生必须学会比较不同来源、识别自身的偏见，并在出现更有力证据时及时修正自己的观点。辩论、撰写议论文以及分析案例等实践训练，都在支撑这一过程。通过经常练习这些技能，学习者不仅在学业上更具自信，也能成为更负责任的公民，因为在任何社会中，深思熟虑的判断都是健康公共讨论的基石。'
      }
    ]
  },
  {
    id: 'extra_education_03',
    title: '阅读为何如此重要',
    enTitle: 'Why Reading Matters',
    cnTitle: '阅读为何如此重要',
    description: '阅读理解：Reading is often called one of the most powerful habits a person can develop in life.',
    category: '教育',
    wordCount: 182,
    coverColor: 'bg-cyan-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'gaokao',
    paragraphs: [
      {
        en: 'Reading is often called one of the most powerful habits a person can develop in life. Unlike short videos or quick messages, a well-written book demands sustained attention and rewards the reader with depth, context, and nuance. Through stories, we can step into lives very different from our own, while non-fiction allows us to learn the lessons of countless experts in just a few hundred pages.',
        zh: '阅读常被誉为一个人一生中能够培养的最具力量的习惯之一。与短视频或简短的消息不同，一本写得好的书需要持续的注意力，作为回报，它会带给读者深度、背景与细腻的体会。通过故事，我们能够走进与自己截然不同的人生；而非虚构作品则让我们在短短数百页中汲取无数专家的智慧。'
      },
      {
        en: 'Regular reading also strengthens skills that benefit nearly every area of study. It expands vocabulary, improves the ability to follow complex arguments, and trains the mind to focus for longer periods. Many successful learners build a habit of reading just twenty pages a day, which adds up to more than twenty books a year. Whether at the library, on a quiet bus ride, or before sleep, those steady minutes with a book quietly shape how we think.',
        zh: '坚持阅读还能强化几乎所有学习领域都受益的能力。它能扩充词汇量、提高理解复杂论证的能力，并训练大脑长时间保持专注。许多优秀的学习者养成了每天只读二十页的习惯，一年下来便能读完二十多本书。无论是在图书馆、安静的公交车上，还是睡前的片刻，那些与书相伴的稳定时光，都在悄然塑造着我们的思维方式。'
      }
    ]
  },
  {
    id: 'extra_education_04',
    title: '双语学习的认知优势',
    enTitle: 'The Cognitive Advantages of Bilingual Learning',
    cnTitle: '双语学习的认知优势',
    description: '阅读理解：Learning a second language offers far more than the practical benefit of communicating with new people.',
    category: '教育',
    wordCount: 194,
    coverColor: 'bg-pink-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet4',
    paragraphs: [
      {
        en: 'Learning a second language offers far more than the practical benefit of communicating with new people. A growing body of research suggests that bilingual learners often enjoy real cognitive advantages. Constantly switching between two language systems exercises the brain in ways that improve attention, mental flexibility, and the ability to ignore distractions. Some studies even indicate that lifelong bilingualism may delay the onset of certain memory-related conditions in old age.',
        zh: '学习第二语言所带来的好处，远不止于与新的人群沟通这一实际层面。越来越多的研究表明，双语学习者往往在认知方面具备真正的优势。在两种语言系统之间不断切换，会以特殊的方式锻炼大脑，从而提升注意力、思维灵活性以及屏蔽干扰的能力。一些研究甚至显示，终身保持双语能力可能延缓老年期某些与记忆相关疾病的发生。'
      },
      {
        en: 'Beyond the brain, bilingual education widens cultural horizons. When students read literature, watch films, or chat with friends in another language, they begin to see that ideas and emotions can be expressed in surprisingly different ways. This experience makes them more open-minded and more careful when interpreting other cultures. For Chinese university students, mastering English is therefore not only a tool for international study and work, but also a lasting investment in clearer thinking and richer understanding of the world.',
        zh: '除了对大脑的影响，双语教育还能拓宽文化视野。当学生用另一种语言阅读文学、观看电影或与朋友交流时，他们会发现，思想与情感可以以令人惊讶的不同方式表达出来。这种经历使他们变得更加开放，也在理解其他文化时更加谨慎细致。对于中国大学生而言，掌握英语不仅是国际学习与工作的工具，更是一项长期投资，能够带来更清晰的思考和对世界更丰富的理解。'
      }
    ]
  },
  {
    id: 'extra_education_05',
    title: '在线学习与传统课堂',
    enTitle: 'Online Learning and Traditional Classrooms',
    cnTitle: '在线学习与传统课堂',
    description: '阅读理解：Online learning has transformed education in ways that few people could have predicted twenty years ago.',
    category: '教育',
    wordCount: 200,
    coverColor: 'bg-indigo-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'gaokao',
    paragraphs: [
      {
        en: 'Online learning has transformed education in ways that few people could have predicted twenty years ago. With a stable internet connection, a student in a small town can now attend lectures from leading universities, practice languages with speakers across the world, and join study communities at any hour of the day. The flexibility of online courses also makes education more accessible to working adults, parents, and learners with limited mobility.',
        zh: '在线学习以二十年前几乎无人能够预见的方式改变了教育。只要有稳定的网络连接，小城镇的学生如今便可以聆听顶尖大学的课程，与世界各地的母语者练习语言，并在一天中的任意时刻加入学习社群。在线课程的灵活性也让教育对在职成年人、为人父母者以及行动不便的学习者更加触手可及。'
      },
      {
        en: 'Yet the traditional classroom still offers something that screens find hard to replace. Sitting together with classmates encourages spontaneous discussion, real-time feedback, and the quiet motivation that comes from seeing others work hard around you. Teachers can sense confusion on a student\'s face long before any test reveals it. The most effective approach today is therefore often a blended one. Schools combine the convenience of digital materials with the warmth of in-person interaction, helping students build both knowledge and the social skills they will need throughout their careers.',
        zh: '然而，传统课堂仍然提供着屏幕难以替代的东西。与同学共处一室，能够激发自发的讨论、即时的反馈，以及看到身边他人努力时所带来的那份默默的动力。老师早在任何测验暴露问题之前，就能从学生脸上察觉到困惑。因此，如今最有效的方式往往是融合式教学。学校将数字资源的便利与面对面交流的温度结合起来，帮助学生同时积累知识和今后职业生涯所需的社交能力。'
      }
    ]
  }
];

const lifeSociety = [
  {
    id: 'extra_life_01',
    title: '时间管理的艺术',
    enTitle: 'The Art of Time Management',
    cnTitle: '时间管理的艺术',
    description: '阅读理解：Time management is one of the most valuable skills in modern life.',
    category: '生活',
    wordCount: 185,
    coverColor: 'bg-blue-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet4',
    paragraphs: [
      {
        en: 'Time management is one of the most valuable skills in modern life. Many college students complain that they never have enough hours in a day, yet they often spend long periods scrolling through their phones or watching short videos. The truth is that time itself does not change, but the way we use it does. People who plan their tasks carefully tend to feel less anxious and accomplish more. A simple to-do list, written each morning, can help us focus on what truly matters before distractions arrive.',
        zh: '时间管理是现代生活中最宝贵的技能之一。许多大学生抱怨一天的时间总是不够用，可他们却常常花大量时间刷手机或看短视频。事实上，时间本身并未改变，改变的是我们使用它的方式。那些用心规划任务的人往往焦虑更少，也能完成更多事情。每天早晨写一份简单的待办清单，可以让我们在各种干扰到来之前，专注于真正重要的事情。'
      },
      {
        en: 'Experts suggest dividing tasks into urgent, important, and optional groups. By tackling the most demanding work during peak energy hours, students can produce higher-quality results in less time. Equally important is leaving space for rest and hobbies, since a tired mind rarely works well. In the end, managing time is not about squeezing every minute, but about choosing what deserves our attention and letting go of the rest.',
        zh: '专家建议把任务分为紧急、重要和可选三类。在精力最充沛的时段处理最具挑战性的工作，学生就能用更短的时间产出更高质量的成果。同样重要的是为休息和爱好留出空间，因为疲惫的大脑很难高效运转。归根结底，时间管理并不是榨取每一分钟，而是选择什么值得我们关注，并放下其余的事情。'
      }
    ]
  },
  {
    id: 'extra_life_02',
    title: '极简主义与现代生活',
    enTitle: 'Minimalism and Modern Life',
    cnTitle: '极简主义与现代生活',
    description: '阅读理解：Minimalism has become a popular lifestyle choice among young people in recent years.',
    category: '生活',
    wordCount: 192,
    coverColor: 'bg-amber-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet6',
    paragraphs: [
      {
        en: 'Minimalism has become a popular lifestyle choice among young people in recent years. Instead of filling their rooms with countless items, minimalists prefer to keep only what is truly useful or meaningful. They argue that a cluttered space leads to a cluttered mind, and that owning less can paradoxically bring more freedom. From foldable furniture to capsule wardrobes, the movement has reshaped how a generation thinks about consumption.',
        zh: '近年来，极简主义已成为年轻人中流行的一种生活方式。极简主义者不再用无数物品填满房间，而是只保留真正有用或有意义的东西。他们认为，杂乱的空间会让人心绪烦乱，而拥有得越少反而越能带来自由。从可折叠家具到胶囊衣橱，这一潮流已经重塑了一代人对消费的看法。'
      },
      {
        en: 'However, minimalism is not simply about throwing things away. It encourages people to think carefully before they buy, asking whether a new item will truly improve their lives. Some practitioners apply the same idea to digital files, social commitments, and even friendships, removing what no longer serves them. Critics warn that the trend can become another form of pressure if taken too far. Yet for many, learning to live with less has revealed how much they already have.',
        zh: '然而，极简主义并不仅仅是把东西扔掉那么简单。它鼓励人们在购买之前认真思考，看新物品是否真的能改善生活。一些践行者把同样的理念用于电子文件、社交承诺，甚至人际关系上，舍弃那些不再有意义的部分。批评者提醒说，如果走向极端，这种潮流也可能变成另一种压力。但对许多人来说，学着以更少的东西生活，让他们看清自己其实已经拥有了很多。'
      }
    ]
  },
  {
    id: 'extra_life_03',
    title: '在家烹饪的乐趣',
    enTitle: 'The Joy of Cooking at Home',
    cnTitle: '在家烹饪的乐趣',
    description: '阅读理解：Cooking at home has quietly returned to many young households as both a hobby and a healthy habit.',
    category: '生活',
    wordCount: 178,
    coverColor: 'bg-emerald-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet4',
    paragraphs: [
      {
        en: 'Cooking at home has quietly returned to many young households as both a hobby and a healthy habit. After long days of study or work, the simple act of chopping vegetables and stirring a pot can feel surprisingly relaxing. Unlike takeaway meals, homemade dishes allow people to control the amount of salt, oil, and sugar they consume. Short videos and recipe apps have made it easier than ever for beginners to try new dishes from around the world.',
        zh: '在家做饭正悄悄回归许多年轻家庭，成为一种爱好，也是一种健康的生活习惯。在漫长的学习或工作之后，切切菜、搅一搅锅里的菜肴这样简单的动作，竟意外地令人放松。与外卖相比，自制菜肴让人能够掌控盐、油和糖的用量。短视频和菜谱应用让初学者比以往任何时候都更容易尝试来自世界各地的新菜式。'
      },
      {
        en: 'Beyond nutrition, cooking together strengthens family ties. Parents and children who share kitchen tasks often find natural moments to talk about their day. Even sharing a meal with roommates can turn an ordinary evening into a small celebration. In a fast-paced world, preparing food slowly may be one of the most thoughtful gifts we give ourselves.',
        zh: '除了营养之外，一起做饭还能拉近家人之间的感情。父母和孩子分担厨房工作时，常常能在不经意间聊起一天的所见所闻。即便只是和室友一起吃顿饭，也能让一个平凡的夜晚变成小小的庆祝。在快节奏的世界里，慢慢地做一顿饭，也许是我们送给自己最贴心的礼物之一。'
      }
    ]
  },
  {
    id: 'extra_life_04',
    title: '数字排毒：放下手机的勇气',
    enTitle: 'Digital Detox: The Courage to Put Down Your Phone',
    cnTitle: '数字排毒：放下手机的勇气',
    description: '阅读理解：The phrase "digital detox" describes a deliberate break from screens and online platforms.',
    category: '生活',
    wordCount: 196,
    coverColor: 'bg-rose-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet6',
    paragraphs: [
      {
        en: 'The phrase "digital detox" describes a deliberate break from screens and online platforms. As smartphones become extensions of our hands, many people report difficulty falling asleep, shorter attention spans, and a vague feeling of restlessness. Researchers have found that constant notifications keep the brain in a low-level state of alert, making it hard to fully relax. Taking even a short break from devices can therefore bring noticeable benefits to both mood and concentration.',
        zh: '“数字排毒”指的是有意识地远离屏幕和网络平台一段时间。随着智能手机几乎成了我们手的延伸，许多人开始反映自己难以入睡、注意力变短，并伴有一种说不清的烦躁感。研究人员发现，持续不断的提示音会让大脑长期处于一种低度警觉状态，使人难以彻底放松。因此，哪怕只是短暂地远离电子设备，也会给情绪和专注力带来明显的好处。'
      },
      {
        en: 'A successful digital detox does not require dramatic changes. Some students set "phone-free hours" before bedtime, while others leave their devices in another room during meals. Replacing scrolling with walking, journaling, or reading often feels strange at first, but soon becomes refreshing. The aim is not to reject technology, but to rebuild a balanced relationship with it. When we choose how and when to connect, our screens once again become tools rather than masters.',
        zh: '成功的数字排毒并不需要做出激烈的改变。有的学生在睡前设置“无手机时间”，有的则在吃饭时把设备放在另一个房间。用散步、写日记或阅读代替刷屏，一开始或许会让人不适应，但很快就会让人神清气爽。其目的并不是拒绝科技，而是与它重建一种平衡的关系。当我们能够主动选择何时、以何种方式连接网络时，屏幕便会重新成为工具，而不再是主宰。'
      }
    ]
  },
  {
    id: 'extra_life_05',
    title: '阅读习惯的养成',
    enTitle: 'Building a Reading Habit',
    cnTitle: '阅读习惯的养成',
    description: '阅读理解：Building a steady reading habit is easier than most people imagine.',
    category: '生活',
    wordCount: 175,
    coverColor: 'bg-violet-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet4',
    paragraphs: [
      {
        en: 'Building a steady reading habit is easier than most people imagine. The key is to start small and stay consistent. Instead of promising to finish a thick novel in a week, a student can aim to read just ten pages every night before sleep. Over a year, those small sessions add up to several thousand pages. Choosing books that match your current interests, rather than those others recommend, also makes the practice more enjoyable.',
        zh: '养成稳定的阅读习惯比大多数人想象的要容易。关键在于从小处入手，并坚持下去。与其立志要在一周内读完一本厚厚的小说，不如让自己每天睡前只读十页。一年下来，这些小小的阅读时间累积起来便有数千页之多。选择符合自己当下兴趣的书籍，而不是别人推荐的书，也会让阅读这件事更有乐趣。'
      },
      {
        en: 'Reading widely benefits more than vocabulary alone. Good books invite us to see the world through different eyes, helping us understand people whose lives differ from our own. They sharpen critical thinking, ease loneliness, and provide a quiet escape from busy days. Carrying a small book in your bag may turn long bus rides and waiting rooms into precious gifts of personal time.',
        zh: '广泛阅读带来的好处远不止扩充词汇量。好书邀请我们用不同的眼光去看待世界，帮助我们理解那些生活与自己截然不同的人。它能磨砺批判性思维，缓解孤独感，也能为忙碌的日子提供一个安静的避风港。在包里放上一本小书，或许就能把漫长的公交车程和候诊时光变成珍贵的私人时间。'
      }
    ]
  },
  {
    id: 'extra_society_01',
    title: '志愿服务与社区建设',
    enTitle: 'Volunteering and Community Building',
    cnTitle: '志愿服务与社区建设',
    description: '阅读理解：Volunteering has long been seen as one of the most rewarding ways to spend free time.',
    category: '社会',
    wordCount: 188,
    coverColor: 'bg-teal-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet4',
    paragraphs: [
      {
        en: 'Volunteering has long been seen as one of the most rewarding ways to spend free time. Whether tutoring children after school, delivering meals to the elderly, or helping clean public parks, volunteers contribute small but meaningful efforts that strengthen the social fabric. University students, in particular, often discover skills and interests they never knew they had once they begin serving others.',
        zh: '长久以来，志愿服务一直被视为利用闲暇时间最有意义的方式之一。无论是放学后辅导孩子、为老人送餐，还是参与清扫公园，志愿者们用细小却富有意义的付出，使社会的纽带更加紧密。尤其是大学生，一旦开始为他人服务，往往会在这一过程中发现自己从未察觉的能力与兴趣。'
      },
      {
        en: 'Communities also benefit greatly from volunteer work. When neighbors come together to plant trees or repaint a school, they not only improve their surroundings but also build trust among one another. Such bonds become especially valuable in difficult times, when people who already know each other can respond more quickly. Researchers note that frequent volunteers tend to report higher life satisfaction. Giving time, it seems, is one of the few activities in life where everyone involved walks away richer.',
        zh: '社区同样从志愿服务中受益良多。当邻居们一起种树或重新粉刷学校时，他们不仅美化了周围环境，也在彼此之间建立起了信任。这种联系在困难时期尤为珍贵——彼此早已熟识的人，往往能够更迅速地伸出援手。研究人员注意到，经常参与志愿活动的人往往反映出更高的生活满意度。看来，付出时间是生活中少有的、参与各方都会满载而归的事情之一。'
      }
    ]
  },
  {
    id: 'extra_society_02',
    title: '老龄化社会的挑战',
    enTitle: 'The Challenge of an Aging Society',
    cnTitle: '老龄化社会的挑战',
    description: '阅读理解：Many countries around the world are experiencing a steady rise in the number of older citizens.',
    category: '社会',
    wordCount: 200,
    coverColor: 'bg-orange-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet6',
    paragraphs: [
      {
        en: 'Many countries around the world are experiencing a steady rise in the number of older citizens. As life expectancy grows and birth rates decline, an aging population has become one of the defining issues of our time. This shift creates both challenges and opportunities. Healthcare systems must adapt to meet greater demand, while pension funds face pressure to support more retirees over longer periods.',
        zh: '世界上许多国家正经历着老年人口持续增长的过程。随着人均寿命的延长和出生率的下降，人口老龄化已成为我们这个时代的标志性议题之一。这一变化既带来挑战，也带来机遇。医疗体系必须做出调整，以应对更大的需求；与此同时，养老金体系也面临压力——它需要在更长的时间里为更多退休人员提供保障。'
      },
      {
        en: 'Yet older adults are far from being merely a burden. Many continue to work, mentor younger colleagues, and care for grandchildren, contributing in ways that statistics often overlook. Communities are responding with age-friendly designs, including wider sidewalks, clearer signs, and digital tools tailored to seniors. Some cities have launched programs that pair retirees with university students for language exchange or skill sharing. These efforts remind us that a society which cares for its elders is also a society that values experience and continuity across generations.',
        zh: '然而，老年人绝不仅仅是社会的负担。许多人仍然在工作、指导年轻同事、帮忙照看孙辈，他们以种种方式做出贡献，而这些往往被统计数据所忽略。各地社区也在积极回应，推出适老化设计，包括更宽的人行道、更清晰的标识，以及为老年人量身定制的数字工具。一些城市甚至推出项目，让退休人员与大学生结对开展语言交流或技能分享。这些努力提醒我们：一个善待长者的社会，也是一个珍视代际间经验与传承的社会。'
      }
    ]
  },
  {
    id: 'extra_society_03',
    title: '跨越数字鸿沟',
    enTitle: 'Bridging the Digital Divide',
    cnTitle: '跨越数字鸿沟',
    description: '阅读理解：The term "digital divide" refers to the gap between those who can easily use modern technology and those who cannot.',
    category: '社会',
    wordCount: 198,
    coverColor: 'bg-cyan-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'gaokao',
    paragraphs: [
      {
        en: 'The term "digital divide" refers to the gap between those who can easily use modern technology and those who cannot. While smartphones and high-speed internet feel ordinary to most students, many older adults and rural residents still struggle to book a hospital appointment or pay a bill online. The divide is not only about devices, but also about confidence, training, and access to reliable networks.',
        zh: '“数字鸿沟”一词指的是那些能够熟练使用现代技术的人，与那些尚不熟悉技术的人之间所存在的差距。对大多数学生来说，智能手机和高速网络已是再寻常不过的事物，但许多老年人和农村居民却仍在为如何在网上预约挂号或缴费而发愁。这道鸿沟不仅关乎设备，也涉及自信心、培训以及可靠网络的接入。'
      },
      {
        en: 'Closing this divide requires effort from many directions. Local libraries and community centers have begun offering free classes that teach basic smartphone skills. Some universities organize student volunteers to visit neighborhoods and patiently guide seniors through unfamiliar apps. Designers also play a role, as larger fonts and simpler menus can make a real difference. When technology serves everyone, families connect more easily and public services become fairer. A truly modern society is measured not by how advanced its tools are, but by how many people can actually use them.',
        zh: '弥合这道鸿沟需要多方共同努力。社区图书馆和文化中心已经开始开设免费课程，教授智能手机的基本使用方法。一些高校组织学生志愿者深入社区，耐心地引导老年人使用陌生的应用程序。设计师同样扮演着重要角色，更大的字号和更简洁的菜单往往能带来切实的改变。当技术能够惠及每一个人时，家人之间的联系会更紧密，公共服务也会更加公平。一个真正现代化的社会，不在于其工具有多么先进，而在于有多少人能够真正使用它们。'
      }
    ]
  },
  {
    id: 'extra_society_04',
    title: '代际沟通的桥梁',
    enTitle: 'Bridging the Generation Gap',
    cnTitle: '代际沟通的桥梁',
    description: '阅读理解:Communication between generations has always been a delicate art.',
    category: '社会',
    wordCount: 182,
    coverColor: 'bg-pink-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'cet4',
    paragraphs: [
      {
        en: 'Communication between generations has always been a delicate art. Young people grow up surrounded by social media, online slang, and fast-changing trends, while their parents and grandparents may rely on more traditional ways of expressing care. When the two sides meet at the dinner table, small misunderstandings can easily turn into long silences. Yet behind these gaps usually lies the same quiet wish: to be understood by the people we love.',
        zh: '代际之间的沟通一直是一门微妙的艺术。年轻人在社交媒体、网络流行语和瞬息万变的潮流中长大，而他们的父母和祖辈则可能更习惯用较为传统的方式来表达关心。当两代人围坐在餐桌旁时，小小的误解很容易演变成长久的沉默。然而，在这些隔阂的背后，往往藏着同一份默默的心愿——希望被自己所爱的人理解。'
      },
      {
        en: 'Bridging the gap takes patience from both sides. Younger family members can slow down when explaining new technology, avoiding sighs or hurried clicks. Elders, in turn, can show curiosity about the lives their children are building, asking questions instead of giving advice too quickly. Sharing meals, taking walks together, or learning a new hobby as a family can open natural conversations that no app can replace.',
        zh: '弥合这种差距需要双方都拿出耐心。家中的年轻一辈在向长辈讲解新科技时可以放慢节奏，不再叹气或匆匆点击。长辈也可以对子女正在构建的生活多一份好奇，多问问题，而不是急着给出建议。一起吃饭、一起散步，或全家共同学习一项新爱好，都能开启自然而然的交流，那是任何应用程序都无法取代的。'
      }
    ]
  },
  {
    id: 'extra_society_05',
    title: '邻里关系的变迁',
    enTitle: 'The Changing Nature of Neighborly Relations',
    cnTitle: '邻里关系的变迁',
    description: '阅读理解：A few decades ago, neighbors knew almost everything about one another.',
    category: '社会',
    wordCount: 190,
    coverColor: 'bg-indigo-500',
    year: 2025,
    type: 'reading',
    region: '全国',
    level: 'gaokao',
    paragraphs: [
      {
        en: 'A few decades ago, neighbors knew almost everything about one another. Children played together in shared courtyards, and adults borrowed sugar or tools without a second thought. As cities grew taller and people moved more often, this kind of closeness gradually faded. Today, many residents step into the elevator with strangers they have lived beside for years, exchanging only brief nods.',
        zh: '几十年前，邻居之间几乎彼此熟悉。孩子们在共用的院子里一起玩耍，大人们毫不犹豫地相互借糖、借工具。随着城市越建越高、人们搬家越来越频繁，这种亲近感渐渐淡去。如今，许多居民和已经做了多年邻居的陌生人一同走进电梯，却只是匆匆点头致意。'
      },
      {
        en: 'Still, signs of renewal can be seen in many neighborhoods. Online groups help residents share news about lost pets, second-hand items, or upcoming community events. Shared gardens, weekend markets, and group exercise classes give people simple reasons to meet face to face. Once a friendly greeting is exchanged, walls between apartments become a little thinner. Building stronger neighborly ties does not require grand gestures; sometimes a kind smile and a willingness to remember a name are enough to begin a small but lasting change.',
        zh: '不过，在许多社区中也能看到关系回暖的迹象。线上群组帮助居民分享走失宠物、二手物品或即将举办的社区活动等信息。共享菜园、周末集市和集体健身课，让人们有了简单的理由面对面相聚。一旦友好的问候被交换，公寓之间的隔墙便似乎变得薄了几分。增进邻里关系并不需要轰轰烈烈的举动；有时，一个温和的微笑和愿意记住对方名字的心意，就足以开启一场虽小却长久的改变。'
      }
    ]
  }
];

const allArticles = [...healthBusiness, ...psychEdu, ...cultureEnv, ...lifeSociety, ...techEconomy];

console.log('Total articles:', allArticles.length);
console.log('Categories:', [...new Set(allArticles.map(a => a.category))]);

// Format as JS with named export
function stringifyArticles(arr) {
  const lines = ['export const extraArticles = ['];
  for (const article of arr) {
    lines.push('  {');
    lines.push(`    id: '${article.id}',`);
    lines.push(`    title: '${article.title}',`);
    if (article.enTitle !== undefined) lines.push(`    enTitle: '${article.enTitle.replace(/'/g, "\\'")}',`);
    if (article.cnTitle !== undefined) lines.push(`    cnTitle: '${article.cnTitle.replace(/'/g, "\\'")}',`);
    lines.push(`    description: '${article.description.replace(/'/g, "\\'")}',`);
    lines.push(`    category: '${article.category}',`);
    lines.push(`    wordCount: ${article.wordCount},`);
    lines.push(`    coverColor: '${article.coverColor}',`);
    lines.push(`    year: ${article.year},`);
    lines.push(`    type: '${article.type}',`);
    lines.push(`    region: '${article.region}',`);
    lines.push(`    level: '${article.level}',`);
    lines.push('    paragraphs: [');
    for (const p of article.paragraphs) {
      lines.push('      {');
      lines.push(`        en: '${p.en.replace(/'/g, "\\'")}',`);
      lines.push(`        zh: '${p.zh.replace(/'/g, "\\'")}'`);
      lines.push('      },');
    }
    lines.push('    ]');
    lines.push('  },');
  }
  lines.push(']');
  return lines.join('\n');
}

fs.writeFileSync('src/modules/reading/data/mockArticles5.js', stringifyArticles(allArticles));
console.log('Written to src/modules/reading/data/mockArticles5.js');
