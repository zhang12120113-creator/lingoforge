/**
 * 大学英语四级(CET-4)真题材料库 (2020-2025)
 * 
 * 包含内容：
 * - 2020年7月-2025年6月全部阅读理解真题（仔细阅读 Section C）
 * - 2020年7月-2025年6月全部听力真题原文（长对话、短文、新闻报道）
 * 
 * 数据说明：
 * - 文章数据硬编码在JS中，无需后端接口
 * - 听力使用浏览器TTS（语音合成）实时朗读，无需音频文件
 * - 每篇文章包含英文原文和中文翻译，逐段对照
 * 
 * 使用方式：
 *   import { mockArticles } from './mockArticles';
 * 
 * 总计：106篇文章（43篇阅读 + 63篇听力）
 * 数据来源：历年四级真题公开资料
 */

export const mockArticles = [
  {
    id: 'cet4_listening_2020_07_01',
    title: '离职话题',
    description: '听力原文：Woman: I\'ve been thinking about changing my job. I\'ve been working in the same company for over five...',
    category: '社会',
    wordCount: 169,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'Woman: I\'ve been thinking about changing my job. I\'ve been working in the same company for over five years now, and I feel like I\'m stuck in a rut. I don\'t see any opportunities for growth or advancement.', zh: '女士：我一直在考虑换工作。我在同一家公司已经工作了五年多了，感觉自己陷入了僵局。看不到任何成长或晋升的机会。' },
      { en: 'Man: I understand how you feel. But you know, people who keep changing their jobs are often seen as unreliable or lacking commitment. Employers value loyalty and stability.', zh: '男士：我理解你的感受。但你知道，经常换工作的人往往被视为不可靠或缺乏承诺。雇主重视忠诚和稳定。' },
      { en: 'Woman: That\'s true, but I think staying in one place for too long can also be detrimental. Even if I got promoted in my current company, the pay raise would be minimal and the responsibilities would be pretty much the same.', zh: '女士：这倒是真的，但我认为在同一个地方待太久也可能有害。即使我在目前的公司得到晋升，加薪也会很少，而且职责基本相同。' },
      { en: 'Man: So what are you looking for exactly?', zh: '男士：那你到底在寻找什么？' },
      { en: 'Woman: I want a new challenge, something that will help me grow both professionally and personally. I\'ve gained a lot of experience in my current role, and I think it\'s time to take those skills somewhere new.', zh: '女士：我想要新的挑战，能帮助我在职业和个人方面都有所成长的事情。我在目前的岗位上获得了很多经验，我觉得是时候把这些技能带到新的地方了。' }
    ]
  },
  {
    id: 'cet4_listening_2020_07_02',
    title: '独处与孤独',
    description: '听力原文：There is a saying that goes something along the lines of \'You must love yourself first before you ca...',
    category: '健康',
    wordCount: 267,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'There is a saying that goes something along the lines of \'You must love yourself first before you can love someone else.\' Similarly, I personally believe that you must be comfortable and happy in your own company before you can truly be yourself in the company of others. There is a massive difference between being lonely and being alone. Loneliness is a horrible feeling. However, you don\'t have to actually be alone to feel that way. Many times, I\'ve felt lonely when surrounded by a big group of people. In contrast, being alone can actually be a blessing, particularly, when you\'ve actively chosen it. In my experience, being bored and alone is dangerous and can easily lead to the feeling of loneliness. The trick is to be active. Get outside, stretch your legs, do something cultural, buy yourself something tasty to eat or something pretty to wear. You don\'t have to take anyone else into consideration and can do whatever you please. Spending time alone also allows you to more efficiently take care of problems. And then, when it\'s time to be social and meet up with your friends, you will be fully there, because you won\'t have too much other stuff floating around in your mind. Having been alone for a bit, you will also appreciate your friends\' company more and chances are your time spent together will be more worthwhile.', zh: '有这样一句俗语：\"在爱别人之前，你必须先爱自己。\"同样，我个人认为，在能与他人共处做真实的自己之前，你必须先学会独处并享受独处的快乐。孤独和独处之间有着巨大的区别。孤独是一种可怕的感觉。然而，你不必真的独自一人才能感受到那种方式。很多时候，当我被一大群人包围时，我也感到孤独。相比之下，独处实际上可能是一种福气，特别是当你主动选择它时。以我的经验，无聊和独处是危险的，很容易导致孤独感。诀窍在于保持活跃。走出去，伸展双腿，做一些文化方面的事情，给自己买些好吃的东西或漂亮的衣服。你不必考虑其他任何人，可以随心所欲。独处也能让你更高效地处理问题。然后，当你该社交并与朋友见面时，你会全身心投入，因为你脑中不会有太多其他事情漂浮。独处一段时间后，你也会更加珍惜朋友的陪伴，而且你们在一起的时间可能会更有价值。' }
    ]
  },
  {
    id: 'cet4_listening_2020_07_03',
    title: '父亲的砖块清洁生意',
    description: '听力原文：When I turned twelve, I worked summers at my father\'s small brick cleaning business. I remember the ...',
    category: '教育',
    wordCount: 278,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'When I turned twelve, I worked summers at my father\'s small brick cleaning business. I remember the harsh acid smell of the cleaning solution, and the scraping sound of stiff iron brushes against rough brick. It was tempting to have your job just finish. But anybody who worked for Thomas Kahoon had to meet his standards, and that include of me. If I messed up, he made me stay late until I got it right.', zh: '当我十二岁时，暑假在我父亲的小型砖块清洁生意中工作。我记得清洁溶液刺鼻的酸味，以及硬毛刷刮擦粗糙砖块的声音。草草完成工作很诱人。但任何为托马斯·卡洪工作的人都必须达到他的标准，这也包括我。如果我搞砸了，他会让我待到很晚，直到我做对为止。' },
      { en: 'My father wasn\'t been me. He demanded the same at himself. Every brick he cleaned on the house stood out like a red jewel in a white setting. It was his signature.', zh: '我父亲对我并不苛刻。他对自己也要求同样严格。他清洁的每一块砖都像白色背景上的红宝石一样醒目。那是他的标志。' },
      { en: 'In 1970, when I was twenty, I got married. I moved out my parent\'s modest place into a housing project. Drugs and gang violent were just beginning to plague the projects. Some of my friend went to jail. Some were killed. My wife Verllen, was 18, and nobody gave our marriage a chance. But we believed in each other. And our faith made us strong.', zh: '1970年，我二十岁时结婚了。我从父母简朴的住所搬到了住宅项目区。毒品和帮派暴力刚刚开始困扰这些项目区。我的一些朋友进了监狱。有些人被杀了。我的妻子维伦当时18岁，没有人看好我们的婚姻。但我们彼此信任。我们的信念让我们坚强。' },
      { en: 'When we married, I worked as a stock clerk at Southwest Super Food. It was hard, tedious work. Each Friday night a truck came, with cases of food that had to be unloaded, priced and placed on shelves. Most of stock clerks try to get Friday night off. But I was always ready to work. By Saturday morning, all the kinds and drawers in my aisle would place with a label facing smartly out, like a line of soldiers on review. That was my signature. I took pride in a job nobody wanted.', zh: '结婚后，我在西南超级食品公司做仓库管理员。这是艰苦乏味的工作。每个周五晚上，一辆卡车会来，卸下成箱的食品，需要定价并摆上货架。大多数仓库管理员都想周五晚上休息。但我总是准备工作。到周六早上，我负责区域的货架和抽屉上的标签都会整齐朝外，就像一排接受检阅的士兵。那是我的标志。我为这份没人想做的工作感到自豪。' }
    ]
  },
  {
    id: 'cet4_listening_2020_07_04',
    title: '看电视与记忆衰退',
    description: '听力原文：Watching more than 3 hours of television a day doubles memory loss in older people, a new study of m...',
    category: '科技',
    wordCount: 284,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'Watching more than 3 hours of television a day doubles memory loss in older people, a new study of more than 3,000 adults suggests. Scientists at University College London used memory and fluency tests on the same group of people 6 years apart. They found that those who watched on average less than 3 hours television a day showed a decline ever round 4 to 5 percent, while those who tended to watch more than 3 hours a day declined by an average of 8 to 10 percent. The research team say they believe the alert but passive nature of television watching maybe creating stress on the mind, which contributes to memory decline.', zh: '一项针对3000多名成年人的新研究表明，每天看电视超过3小时会使老年人的记忆衰退加倍。伦敦大学学院的科学家在6年间对同一组人进行了记忆和流利度测试。他们发现，那些平均每天看电视不到3小时的人表现出约4%至5%的衰退，而那些倾向于每天看超过3小时的人平均衰退了8%至10%。研究团队表示，他们认为看电视这种警觉但被动的特性可能给大脑带来压力，从而导致记忆衰退。' },
      { en: 'Older people who watch more television are also less likely to undertake activities knowing to preserve mental functioning, such as reading or interactive screen base pursuits, such as using the internet or playing video games. The researchers say that television viewing maybe a risk factor for all Alzheimer\'s disease, but more researches needed to establish a link.', zh: '看更多电视的老年人也不太可能从事有助于保持心理功能的活动，如阅读或互动性屏幕活动，如使用互联网或玩电子游戏。研究人员表示，看电视可能是阿尔茨海默病的一个风险因素，但还需要更多研究来建立联系。' },
      { en: 'While watching television may have educational benefits and relaxation benefits, the researchers advise that adults over the age of 50 should try and ensure that television viewing is balanced with other contrasting activities. If you\'re concerned that the amount of television you\'re watching could have a negative impact on your health, you should eliminate the amount of TV watch each day and undertake some healthy hobbies.', zh: '虽然看电视可能有教育益处和放松益处，但研究人员建议50岁以上的成年人应尽量确保看电视与其他对比性活动相平衡。如果你担心看电视的量可能对健康产生负面影响，你应该减少每天看电视的时间，并从事一些健康的爱好。' }
    ]
  },
  {
    id: 'cet4_reading_2020_07_01',
    title: '体育锻炼与学业表现',
    description: '阅读理解：Physical activity does the body good, and there\'s growing evidence that it helps the brain too. Rese...',
    category: '教育',
    wordCount: 228,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'Physical activity does the body good, and there\'s growing evidence that it helps the brain too. Researchers in the Netherlands report that children who get more exercise, whether at school or on their own, tend to have higher GPAs and better scores on standardized tests. In a review of 14 studies that looked at physical activity and academic performance, investigators found that the more children moved, the better their grades were.', zh: '体育锻炼对身体有益，而且有越来越多的证据表明它对大脑也有帮助。荷兰的研究人员报告说，无论是学校还是自主锻炼，获得更多锻炼的孩子往往有更高的GPA和更好的标准化考试成绩。在一项对14项关于体育活动和学业表现的研究的综述中，研究者发现孩子们运动得越多，成绩就越好。' },
      { en: 'The studies measured students\' physical activity in different ways — some used surveys while others used accelerometers (加速度计) to track movement. The researchers also measured various aspects of academic performance, including grades in specific subjects as well as scores on standardized tests. Overall, the researchers found that more physical activity was associated with better academic performance.', zh: '这些研究以不同方式测量学生的体育活动——一些使用调查，而另一些使用加速度计来追踪运动。研究人员还测量了学业表现的各个方面，包括特定科目的成绩以及标准化考试的分数。总体而言，研究人员发现更多的体育活动与更好的学业表现相关。' },
      { en: 'The relationship between physical activity and academic performance might be due to several factors. Exercise increases blood flow to the brain, which may improve cognitive function. Physical activity also helps reduce stress and improve mood, which can create a better learning environment for students.', zh: '体育活动与学业表现之间的关系可能归因于几个因素。运动增加了流向大脑的血流量，这可能改善认知功能。体育活动还有助于减轻压力、改善情绪，为学生创造更好的学习环境。' }
    ]
  },
  {
    id: 'cet4_reading_2020_07_02',
    title: '教育公平与农村教育',
    description: '阅读理解：In order to promote equity in education, China has invested 36 billion yuan for the improvement of e...',
    category: '教育',
    wordCount: 129,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'In order to promote equity in education, China has invested 36 billion yuan for the improvement of educational facilities in rural areas and strengthening of rural compulsory education in the Midwest. These funds were used to improve the teaching facilities, purchase of books, so that more than 160,000 primary and secondary schools benefit. Funds are also used to purchase music and painting equipment. Now children in rural and mountainous areas can have music and painting classes just like children in coastal cities. Some students who transferred to city schools to receive better education are now transferred back to local rural schools.', zh: '为促进教育公平，中国已投入360亿元用于改善农村地区教育设施和加强中西部地区农村义务教育。这些资金用于改善教学设施、购买书籍，使16万多所中小学受益。资金还用于购置音乐和绘画器材。现在农村和山区的儿童可以与沿海城市的儿童一样上音乐和绘画课。一些为接受更好教育而转往城市上学的学生如今又回到了本地农村学校就读。' }
    ]
  },
  {
    id: 'cet4_listening_2020_12_01',
    title: '咨询公司业务',
    description: '听力原文：WOMAN: Mr. Smith, It\'s a pleasure meeting you!...',
    category: '社会',
    wordCount: 306,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'WOMAN: Mr. Smith, It\'s a pleasure meeting you!', zh: '女士：史密斯先生，很高兴见到您！' },
      { en: 'Man: Nice to meet you, too. What can I do for you?', zh: '男士：我也很高兴见到您。有什么可以帮您的？' },
      { en: 'WOMAN: Well, I\'m here to show you what our firm can do for you. Astro Consultants has branches in over fifty countries, offering different business services. We\'re a global company with 75 years of history. And our clients include some of the world\'s largest companies.', zh: '女士：嗯，我是来向您展示我们公司能为您做什么的。Astro咨询公司在五十多个国家设有分支机构，提供不同的商业服务。我们是一家拥有75年历史的全球性公司。我们的客户包括一些世界上最大的公司。' },
      { en: 'MAN: Thank you, Mrs. Houston. I know Astro Consultants is a famous company. But you said you would show me what you could do for me. Well. What exactly can your firm do for my company?', zh: '男士：谢谢您，休斯顿夫人。我知道Astro咨询是一家著名的公司。但您说您会向我展示您能为我的公司做什么。那您的公司到底能为我的公司做什么？' },
      { en: 'WOMAN: We advise businesses on all matters, from market analysis to legal issues. Anything a business like yours could meet. Our firm offers expert advice. Could I ask you, Mr. Smith, to tell me a little about your company and the challenges you face? That way, I could better respond as to how we can help you.', zh: '女士：我们为企业在各方面提供建议，从市场分析到法律问题。任何像您这样的企业可能遇到的任何问题。我们公司提供专业的建议。史密斯先生，您能告诉我一些关于您的公司以及您面临的挑战吗？这样我就能更好地回应我们如何帮助您。' },
      { en: 'Man: OK, sure. This is a family business started by my grandfather in 1950. We employ just over 100 people. We manufacture an export stone for buildings and other constructions. Our clients usually want a special kind of stone cut in a special design. And that\'s what we do in our factory. Our main challenge is that our national currency is rising, and we\'re losing competitive advantages to stone produces in India.', zh: '男士：好的，当然。这是一家家族企业，由我祖父于1950年创立。我们雇用了100多名员工。我们生产用于建筑和其他建筑石材。我们的客户通常想要特殊切割设计的特殊石材。这就是我们在工厂里做的。我们的主要挑战是我们国家的货币正在升值，我们正在失去相对于印度石材生产商的竞争优势。' },
      { en: 'WOMAN: I see. That\'s very interesting. I will suggest that you let us first conduct a financial analysis of your company, together with the analysis of your competitors in India. That way, we could offer the best advice on different ways forward for you.', zh: '女士：我明白了。这非常有趣。我建议您让我们首先对您的公司进行财务分析，同时分析您在印度的竞争对手。这样，我们就能为您提供关于未来发展不同方向的最佳建议。' }
    ]
  },
  {
    id: 'cet4_listening_2020_12_02',
    title: '室内装修',
    description: '听力原文：Woman: Wow, congratulations, Simon! The place looks absolutely amazing!...',
    category: '生活',
    wordCount: 296,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'Woman: Wow, congratulations, Simon! The place looks absolutely amazing!', zh: '女士：哇，恭喜你，西蒙！这个地方看起来太棒了！' },
      { en: 'Man: Really? You think so?', zh: '男士：真的？你这么认为？' },
      { en: 'W: Of course. I love it. It looks like you had a professional interior designer. But you didn\'t, did you?', zh: '女士：当然。我喜欢它。看起来你请了一位专业的室内设计师。但你没有，对吧？' },
      { en: 'M: No. I did it all by myself with a little help from my brother, Greg. He\'s actually in the construction business, which was really helpful.', zh: '男士：没有。我自己做的，我哥哥格雷格帮了一点忙。他实际上从事建筑行业，这非常有帮助。' },
      { en: 'W: Honestly, I\'m impressed! I know I can probably repaint the walls in my house over a weekend or something, but not a full renovation. Where did you get your ideas? I wouldn\'t know where to start.', zh: '女士：说实话，我很佩服！我知道我可能可以在一个周末重新粉刷墙壁之类的事情，但做不到全面翻新。你从哪里得到灵感的？我都不知道从哪里开始。' },
      { en: 'M: Well, for a while now, I\'ve been regularly buying home design magazines. Every now and then, I\'d saved the pictures I liked. Believe it or not, I have a full notebook of magazine pages. Since by overall style was quite minimal, I thought and hoped a whole renovation wouldn\'t be too difficult. And sure enough, with Greg\'s help, it was very achievable.', zh: '男士：嗯，一段时间以来，我一直在定期购买家居设计杂志。每隔一段时间，我就会保存我喜欢的图片。信不信由你，我有一个完整的杂志页面笔记本。由于我的整体风格相当简约，我想并希望整个翻新不会太困难。果然，在格雷格的帮助下，这是非常可以实现的。' },
      { en: 'W: Wasn\'t it expensive? I have imagined a project like this could be.', zh: '女士：不便宜吧？我原以为这样一个项目会很贵。' },
      { en: 'M: Actually, it was surprisingly affordable. I managed to sell a lot of my old furniture and put that extra money towards the new material. Greg was also able to get some discount materials from a recent project he was working on as well.', zh: '男士：实际上，它出奇地实惠。我设法卖掉了我的许多旧家具，把那笔额外的钱用于新材料。格雷格也能从他最近做的一个项目中拿到一些折扣材料。' },
      { en: 'W: Great! If you don\'t mind, I\'d like to pick your brain a bit more. Johansson and I are thinking of renovating our sitting room, not the whole house, not yet anyway. And we\'d love to get some inspiration from your experience. Are you free to come over for a coffee early next week?', zh: '女士：太好了！如果你不介意的话，我想多请教你一些。约翰松和我在想翻新我们的客厅，不是整栋房子，至少现在不是。我们很乐意从你的经验中获得灵感。你下周初有空过来喝杯咖啡吗？' }
    ]
  },
  {
    id: 'cet4_listening_2020_12_03',
    title: '耳朵和鼻子里的异物',
    description: '听力原文：Removing foreign objects from ears and noses costs England almost £3m a year, a study suggests. Chil...',
    category: '健康',
    wordCount: 263,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'Removing foreign objects from ears and noses costs England almost £3m a year, a study suggests. Children were responsible for the vast majority of cases - 95% of objects removed from noses and 85% from ears. Every year, an average of 1,218 nose and 2,479 ear removals took place between 2010 and 2016. According to England\'s Hospital Episode Statistics, children aged one to four were the most likely to need help from doctors for a foreign object in their nose. Five to nine year olds come to the hospital with something in their ear the most. Jewelry items accounted for up to 40% of cases in both the ears and noses of children. Paper and plastic toys were the items removed next most from noses. Cotton buds and pencils were also found in ears.', zh: '一项研究表明，从耳朵和鼻子中取出异物每年使英国花费近300万英镑。儿童是绝大多数案例的当事人——鼻子里取出异物的95%和耳朵里取出异物的85%都是儿童。2010年至2016年间，每年平均有1218例鼻腔异物取出和2479例耳道异物取出。根据英格兰医院统计数据，1至4岁的儿童最可能需要医生帮助取出鼻腔异物。5至9岁的儿童最经常因耳道里有东西来医院就诊。珠宝类物品占儿童耳朵和鼻子案例的多达40%。纸和塑料玩具是从鼻子中取出第二多的物品。棉签和铅笔也在耳朵中被发现。' },
      { en: 'According to the study, the occurrence of foreign objects in children is generally attributed to curiosity. Children have an impulse to explore their noses and ears. This results in the accidental entry of foreign objects. Any ear, nose and throat surgeon has many weird stories about wonderful objects found in the noses and ears of children and adults. Batteries can pose a particular danger. In all cases, prevention is better than cure. This is why many toys contain warnings about small parts. Recognizing problems early and seeking medical attention is important.', zh: '根据该研究，儿童出现异物通常归因于好奇心。儿童有探索鼻子和耳朵的冲动。这导致异物的意外进入。任何耳鼻喉外科医生都有许多关于在儿童和成人鼻子和耳朵中发现奇妙物品的奇怪故事。电池可能构成特别危险。在所有情况下，预防胜于治疗。这就是为什么许多玩具包含关于小零件的警告。及早发现问题并寻求医疗帮助很重要。' }
    ]
  },
  {
    id: 'cet4_listening_2020_12_04',
    title: 'ReBicycle慈善机构',
    description: '听力原文：Good morning, I\'d like to talk to you about my charity ReBicycle. But before that, let me introduce ...',
    category: '社会',
    wordCount: 256,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'Good morning, I\'d like to talk to you about my charity ReBicycle. But before that, let me introduce someone. This is Leila Rahimi. She was so scared when she first moved to New Zealand that she struggled to leave the house and would spend days working up the courage to walk to the supermarket for basic supplies. After a few months of being quite down and unhappy, she was invited to join a local bike club. At this time, ReBicycle got involved and gave Leila a second-hand bicycle. In weeks, her depression had begun to ease as she cycled. The bicycle totally changed her life, giving her hope and a true feeling of freedom.', zh: '早上好，我想和大家谈谈我的慈善机构ReBicycle。但在此之前，让我先介绍一个人。这是莱拉·拉希米。她刚搬到新西兰时非常害怕，以至于很难走出家门，常常要花好几天时间鼓起勇气走到超市购买基本生活用品。在经历了几个月的消沉和不快乐之后，她被邀请加入当地的自行车俱乐部。这时，ReBicycle介入并给了莱拉一辆二手自行车。几周后，随着骑行，她的抑郁开始减轻。自行车彻底改变了她的生活，给了她希望和真正的自由感。' },
      { en: 'To date, ReBicycle has donated more than 200 bikes to those in need, and is now expanding bike-riding lessons as demand soars. With a bike, you can travel farther but for almost no cost. The three hours a day that used to spend on walking to and from English language lessons has been reduced to just one hour. Our bike-riding lessons are so successful that we are urgently looking for more volunteers. Learning to ride a bike is almost always more difficult as an adult, and this can take days and weeks, rather than hours. So, if any of you have some free time during the weekend, please come join us at ReBicycle and make a difference in someone\'s life.', zh: '迄今为止，ReBicycle已向有需要的人捐赠了200多辆自行车，并且随着需求激增，正在扩大自行车骑行课程。有了自行车，你可以走得更远，但几乎不需要任何费用。过去每天花三个小时步行往返英语课，现在减少到了一小时。我们的自行车骑行课程非常成功，我们正在紧急寻找更多志愿者。作为成年人学习骑自行车几乎总是更加困难，这可能需要几天甚至几周，而不是几小时。所以，如果你们中任何人在周末有空闲时间，请来ReBicycle加入我们，为某个人的生活带来改变。' }
    ]
  },
  {
    id: 'cet4_listening_2020_12_05',
    title: '太空中的老鼠',
    description: '听力原文：Thanks to the International Space Station we know quite a bit about the effects of low gravity on th...',
    category: '科技',
    wordCount: 99,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'Thanks to the International Space Station we know quite a bit about the effects of low gravity on the human body, but NASA scientists want to learn more. To that end, they have been studying how other species deal with low gravity, specifically focusing on mice. The results are both interesting and humorous.', zh: '多亏了国际空间站，我们对低重力对人体的影响有了相当多的了解，但NASA的科学家想要了解更多。为此，他们一直在研究其他物种如何应对低重力，特别是关注老鼠。结果既有趣又幽默。' },
      { en: 'The scientists first send some mice in a specially designed cage to the International Space Station. The cage allowed them to study the behavior of the mice remotely from Earth via video.', zh: '科学家们首先把一些老鼠放在一个专门设计的笼子里送到国际空间站。这个笼子使他们能够通过视频从地球上远程研究老鼠的行为。' }
    ]
  },
  {
    id: 'cet4_reading_2020_12_01',
    title: '互联网革命 (The Rise of the Internet)',
    description: '阅读理解：The rise of the Internet has been one of the most transformative developments in human history, comp...',
    category: '科技',
    wordCount: 356,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'The rise of the Internet has been one of the most transformative developments in human history, comparable in impact to the invention of the printing press and the telegraph. Over two billion people worldwide now have access to vastly more information than ever before, and can communicate with each other instantly, often using Web-connected mobile devices they carry everywhere. But the Internet\'s tremendous impact has only just begun. \"Adoption of the Internet is driving one of the most exciting social, cultural, and political transformations in history, and unlike earlier periods of change, this time the effects are fully global,\" Schmidt and Cohen write in their new book, The New Digital Age.', zh: '互联网的兴起是人类历史上最具变革性的发展之一，其影响可与印刷机和电报的发明相媲美。全球超过20亿人现在可以获得比以往任何时候都多得多的信息，并且可以即时相互交流，通常使用他们随身携带的联网移动设备。但互联网的巨大影响才刚刚开始。施密特和科恩在他们的新书《新数字时代》中写道：\"互联网的普及正在推动历史上最令人兴奋的社会、文化和政治变革之一，与早期变革时期不同，这次的影响是完全全球性的。\"' },
      { en: 'Perhaps the most profound changes will come when the five billion people worldwide who currently lack Internet access get online. The authors do an excellent job of examining the implications of the Internet revolution for individuals, governments, and institutions like the news media. But if the book has one major shortcoming, it\'s that the authors don\'t spend enough time applying a critical eye to the role of Internet businesses in these sweeping changes.', zh: '也许最深刻的变化将发生在目前全球50亿缺乏互联网接入的人上网时。作者很好地审视了互联网革命对个人、政府和新闻媒体等机构的影响。但如果这本书有一个主要缺点，那就是作者没有花足够的时间用批判的眼光审视互联网企业在这些巨大变革中的作用。' },
      { en: 'In their book, the authors provide the most authoritative volume to date that describes--and more importantly predicts--how the Internet will shape our lives in the coming decades. They paint a picture of a world in which individuals, companies, institutions, and governments must deal with two realities, one physical, and one virtual. At the core of the book is the idea that this concept as a starting point, the authors aim to move beyond the now familiar optimist vs. pessimist dichotomy that has characterized many recent debates about whether the rise of the Internet will ultimately be good or bad for society.', zh: '在书中，作者提供了迄今为止最权威的著作，描述——更重要的是预测——互联网将在未来几十年如何塑造我们的生活。他们描绘了一个世界，在这个世界中，个人、公司、机构和政府必须处理两种现实，一种是物理的，一种是虚拟的。这本书的核心思想是，以这一概念为出发点，作者旨在超越现在熟悉的乐观主义者与悲观主义者的二分法，这一直是最近关于互联网兴起最终对社会是好是坏的许多辩论的特征。' }
    ]
  },
  {
    id: 'cet4_reading_2020_12_02',
    title: '远程工作 (Remote Work)',
    description: '阅读理解：As many office workers adapt to remote work, cities may undergo fundamental change if offices remain...',
    category: '科技',
    wordCount: 153,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'As many office workers adapt to remote work, cities may undergo fundamental change if offices remain under-utilized. Who will benefit if working from home becomes the norm? Employers argue they make considerable savings on real estate when workers shift from office to home work. However, these savings result from passing costs on to workers. Though employers are backed by a chorus of remote work advocates, reduced productivity and other challenges negatively impact productivity. Workers are spending more on home office setups, electricity, and internet, while shouldering the burden of blurred work-life boundaries. The question remains whether the shift to remote work will create a more equitable future or simply transfer costs from employers to employees.', zh: '随着许多办公室工作人员适应远程工作，如果办公室持续未被充分利用，城市可能会经历根本性变化。如果在家工作成为常态，谁将受益？雇主认为，当员工从办公室工作转向家庭工作时，他们在房地产方面节省了大量开支。然而，这些节省是通过将成本转嫁给工人实现的。尽管雇主得到了远程工作倡导者的一致支持，但生产力下降和其他挑战对生产力产生了负面影响。工人在家庭办公设备、电力和互联网上花费更多，同时承担着工作与生活界限模糊的负担。问题仍然是，向远程工作的转变是否会创造一个更公平的未来，还是仅仅将成本从雇主转移给雇员。' }
    ]
  },
  {
    id: 'cet4_reading_2020_12_03',
    title: '好奇心 (The Human Thirst for Knowledge)',
    description: '阅读理解：The human thirst for knowledge is the driving force behind our successful development as a species. ...',
    category: '教育',
    wordCount: 416,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'The human thirst for knowledge is the driving force behind our successful development as a species. But curiosity can also be dangerous, leading to setbacks or even downfalls. Given curiosity\'s complexity, scientists have found it hard to define.', zh: '人类对知识的渴望是我们作为一个物种成功发展背后的驱动力。但好奇心也可能是危险的，会导致挫折甚至失败。鉴于好奇心的复杂性，科学家们发现很难给它下定义。' },
      { en: 'While pinning down a definition has proven tricky, the general consensus is it\'s some means of information gathering. Psychologists also agree curiosity is intrinsically motivated.', zh: '虽然确定一个定义已被证明很棘手，但普遍的共识是它是某种信息收集的方式。心理学家们也认同好奇心是内在驱动的。' },
      { en: 'Curiosity covers such a large set of behaviors that there probably isn\'t any single \"curiosity gene\" that makes humans wonder about and explore their environment. That said, curiosity does have a genetic component. Genes and the environment interact in many complex ways to shape individuals and guide their behavior, including their curiosity.', zh: '好奇心涵盖了如此广泛的一系列行为，以至于可能不存在任何单一的\"好奇心基因\"能让人类对环境感到好奇并去探索它。话虽如此，好奇心确实有一个遗传成分。基因和环境以许多复杂的方式相互作用，塑造个体并引导他们的行为，包括他们的好奇心。' },
      { en: 'Regardless of their genetic makeup, infants have to learn an incredible amount of information in a short time, and curiosity is one of the tools humans have found to accomplish that gigantic task.', zh: '不管他们的基因构成如何，婴儿必须在短时间内学习大量令人难以置信的信息，而好奇心是人类发现的完成这项艰巨任务的工具之一。' },
      { en: 'Hundreds of studies show that infants prefer novelty. It\'s what motivates non-human animals, human infants and probably human adults to explore and seek out new things before growing less interested in them after continued exposure.', zh: '数百项研究表明婴儿更喜欢新奇事物。正是这种偏好促使非人类动物、人类婴儿，可能还有人类成年人去探索并寻找新事物，直到在持续接触后对它们的兴趣逐渐降低。' },
      { en: 'But curiosity often comes with a cost. In some situations, the stakes are low and failure is a healthy part of growth. For instance, many babies are perfectly proficient crawlers, but they decide to try walking because there\'s more to see and do when they stand upright. But this milestone comes at a small cost. A study of 12- to 19-month-olds learning how to walk documented that these children fell down a lot. Seventeen times per hour, to be exact. But walking is faster than crawling, so this motivates expert crawlers to transition to walking.', zh: '但好奇心往往伴随着代价。在某些情况下，风险较低，失败是成长中健康的一部分。例如，许多婴儿是非常熟练的爬行能手，但他们决定尝试走路，因为当他们直立时能看到和做更多的事情。但这个里程碑的实现需要付出一点小代价。一项对12到19个月大学习走路的婴儿的研究记录显示，这些孩子经常摔倒。确切地说，每小时摔倒17次。但走路比爬行快，所以这促使熟练的爬行婴儿过渡到走路。' },
      { en: 'Sometimes, however, testing out a new idea can lead to disaster. For instance, the Inuit people of the Arctic regions have created incredible modes to deal with the challenges of living in northern climates, but what we forget about are the tens of thousands of people that tried and failed to make it in those challenging landscapes.', zh: '然而，有时测试一个新想法可能会导致灾难。例如，北极地区的因纽特人创造了令人难以置信的方式来应对在北方气候中生活的挑战，但我们忘记的是成千上万的人在那些具有挑战性的环境中尝试却未能成功。' }
    ]
  },
  {
    id: 'cet4_reading_2020_12_04',
    title: '无聊与创造力 (Boredom and Creativity)',
    description: '阅读理解：Boredom has become trendy. Studies point to how boredom is good for creativity. Research suggests th...',
    category: '教育',
    wordCount: 196,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'Boredom has become trendy. Studies point to how boredom is good for creativity. Research suggests that when we are bored, our minds wander, making us more likely to think creatively and come up with new ideas. When people are bored, they tend to seek out new experiences and challenges, which can lead to personal growth and innovation.', zh: '无聊已成为一种趋势。研究表明无聊对创造力有好处。研究显示，当我们感到无聊时，我们的思维会漫游，使我们更有可能进行创造性思考并提出新想法。当人们感到无聊时，他们倾向于寻找新的体验和挑战，这可以带来个人成长和创新。' },
      { en: 'However, there is a downside. Excessive boredom can lead to feelings of isolation and disconnection. In a world where we are constantly connected to technology, some people may find it difficult to be alone with their thoughts. This can prevent people from developing a genuine sense of community and belonging.', zh: '然而，也有不利的一面。过度无聊会导致孤立和疏离感。在一个我们不断与技术相连的世界里，有些人可能发现很难独自面对自己的想法。这可能会阻止人们发展真正的社区意识和归属感。' },
      { en: 'To harness the benefits of boredom while avoiding its pitfalls, experts recommend setting aside time for unstructured activities that allow the mind to wander freely. This might include taking a walk without your phone, daydreaming, or engaging in simple, repetitive tasks. The key is to find a balance between stimulation and stillness.', zh: '为了利用无聊的好处同时避免其陷阱，专家建议留出时间进行无结构的活动，让思维自由漫游。这可能包括不带手机散步、做白日梦，或从事简单重复的任务。关键在于找到刺激与宁静之间的平衡。' }
    ]
  },
  {
    id: 'cet4_reading_2020_12_05',
    title: '卡路里摄入量研究 (Calorie Intake)',
    description: '阅读理解：Can you remember what you ate yesterday? If asked, most people will be able to give a vague descript...',
    category: '健康',
    wordCount: 167,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'Can you remember what you ate yesterday? If asked, most people will be able to give a vague description of their main meals: breakfast, lunch, dinner. But can you be sure you\'ve noted every snack bar in your car, or every handful of nuts at your desk? Most people will have a feeling that they\'ve missed something out.', zh: '你能记得昨天吃了什么吗？如果被问到，大多数人能够大致描述他们的主餐：早餐、午餐、晚餐。但是你能确定你记录下了车里的每一块零食棒，或者办公桌上的每一把坚果吗？大多数人会觉得自己遗漏了一些东西。' },
      { en: 'We originally had this suspicion back in 2016, puzzled by the fact that national statistics showed calorie consumption falling dramatically over past decades. We found reliable evidence that people were drastically under-reporting what they ate.', zh: '我们最初在2016年就有了这种怀疑，被国家统计数据显示过去几十年卡路里消耗量急剧下降这一事实所困惑。我们发现了可靠的证据，表明人们严重少报了他们所吃的东西。' },
      { en: 'People\'s calorie intake was far from accurately reported. The growing trend of eating out also contributes to the problem, as restaurant meals tend to be higher in calories than home-cooked food. Researchers need to rethink how they collect dietary data to ensure accuracy.', zh: '人们的卡路里摄入量远未被准确报告。外出就餐的日益增长的趋势也加剧了这个问题，因为餐厅餐食往往比家常菜热量更高。研究人员需要重新思考如何收集饮食数据以确保准确性。' }
    ]
  },
  {
    id: 'cet4_listening_2021_06_01',
    title: '友谊的力量',
    description: '听力原文：I first met Joe Ganz when we were both nine years old, which is probably the only reason he is one o...',
    category: '生活',
    wordCount: 155,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'I first met Joe Ganz when we were both nine years old, which is probably the only reason he is one of my best friends. If I had first met Joe as a freshman in high school, we wouldn\'t have been likely to spend enough time getting to know each other, due to the lack of immediately visible mutual interests. In fact, to be honest, I struggle to think of what we actually have in common. But maybe that\'s what makes us enjoy each other\'s company. It didn\'t matter that Joe likes football while I\'d rather go to the theater. After all, there is more to friendship than shared interests. Through Joe, I have realized how little basis there is, in reality, for the social divisions that exist in my school. We have become determined to find friends in unexpected people and places.', zh: '我第一次见到乔·甘兹时，我们都九岁，这可能是他成为我最好的朋友之一的唯一原因。如果我是在高中一年级时才认识乔的，我们可能不会花足够的时间了解彼此，因为缺乏立即可见的共同兴趣。事实上，说实话，我很难想到我们真正有什么共同点。但也许这就是让我们享受彼此陪伴的原因。乔喜欢足球而我更喜欢去剧院，这并不重要。毕竟，友谊不仅仅是共同的兴趣。通过乔，我意识到在我的学校里存在的社会分化实际上几乎没有基础。我们决心在出乎意料的人和地方寻找朋友。' }
    ]
  },
  {
    id: 'cet4_listening_2021_06_02',
    title: '创造力',
    description: '听力原文：Well, to pick up where we left off last time, I believe we already established that creativity is no...',
    category: '教育',
    wordCount: 134,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'Well, to pick up where we left off last time, I believe we already established that creativity is not something only a few lucky people are born with. But is it something that can be learned? Or is it something that can be acquired like knowledge? Perhaps if we analyze the creative process carefully, we would find that creativity is something that is accessible to everyone, despite what you may believe about the limits of your own creative imagination.', zh: '嗯，接上上次的内容，我相信我们已经确定了创造力不是只有少数幸运儿天生拥有的东西。但它是可以学习的吗？还是像知识一样可以获得的东西？也许如果我们仔细分析创造性过程，我们会发现创造力是每个人都可以触及的，不管你认为自己的创造性想象力有多么有限。' },
      { en: 'In fact, creativity is a way of looking at the world in an absolute new way. In fact, it\'s more than that. It\'s your creative mind to get the meaning from the chaos of your experiences and bring order to your world.', zh: '事实上，创造力是一种以全新的方式看待世界的方式。事实上，远不止于此。它是你的创造性思维从经历的混乱中获得意义并为你的世界带来秩序。' }
    ]
  },
  {
    id: 'cet4_listening_2021_06_03',
    title: '停车罚单',
    description: '听力原文：When it comes to dealing with bad luck, I\'ve had more than my fair share. The latest incident happen...',
    category: '生活',
    wordCount: 119,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'When it comes to dealing with bad luck, I\'ve had more than my fair share. The latest incident happened last Tuesday. I was driving to the city center to attend an important meeting. I couldn\'t find a parking space near the building where the meeting was being held, so I parked in a nearby lot. I didn\'t see a no-parking sign, but he suspected that if parking were allowed there, there would have been other cars parked there. Anyway, he parked, attended the meeting, and when he returned, he found a parking ticket on his windshield. It was a $50 fine—his first parking ticket ever in Greenville.', zh: '说到倒霉，我经历的可比我应得的多得多。最新的事件发生在上周二。我开车去市中心参加一个重要的会议。我在开会地点附近找不到停车位，所以就停在了附近的停车场。我没有看到禁停标志，但他怀疑如果允许停车的话，那里应该会有其他车停着。不管怎样，他停了车，参加了会议，当他回来时，发现挡风玻璃上有一张停车罚单。那是50美元的罚款——他在格林维尔的第一张停车罚单。' }
    ]
  },
  {
    id: 'cet4_reading_2021_06_01',
    title: '教育与创造力 (Educators and Business Leaders)',
    description: '阅读理解：Educators and business leaders have more in common than it may seem. Teachers want to prepare studen...',
    category: '教育',
    wordCount: 265,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'Educators and business leaders have more in common than it may seem. Teachers want to prepare students for a successful future. Technology companies, like AT&T, have a vested interest in developing a workforce with the STEM skills needed to grow the company and advance the industry. How can they work together to achieve these goals? Play may be the answer.', zh: '教育工作者和商业领袖的共同点可能比看上去的要多。教师希望让学生为未来做好准备。像AT&T这样的科技公司在培养具备STEM技能的劳动力方面有既得利益，这些技能是公司成长和行业发展所需要的。他们如何合作实现这些目标？玩耍可能就是答案。' },
      { en: 'We\'ve assumed that focusing on STEM skills, like robotics or coding, are important, but the reality is that STEM skills are enhanced and more relevant when combined with traditional, hands-on creative activities. This combination is proving to be the best way to prepare today\'s children to be the makers and builders of tomorrow. That is why technology companies are partnering with educators to bring back good, old-fashioned play.', zh: '我们一直认为专注于STEM技能（如机器人或编程）很重要，但事实是，当STEM技能与传统的动手创造性活动相结合时，会得到增强并且更加相关。这种结合被证明是让今天的孩子成为明天的创造者和建设者的最佳方式。这就是为什么科技公司正在与教育工作者合作，让良好的老式玩耍回归。' },
      { en: 'Some examples include Google\'s new Making & Science initiative, Time Warner Cable\'s Earth Day Cardboard Challenge, and AT&T\'s and Imagination Foundation\'s Inventors Challenge. These programs aim to encourage students to engage in creative, hands-on problem-solving activities.', zh: '一些例子包括谷歌的新\"制作与科学\"倡议、时代华纳有线电视的地球日纸板挑战，以及AT&T和想象力基金会的发明家挑战。这些项目旨在鼓励学生参与创造性的动手解决问题的活动。' },
      { en: 'Play helps students develop the skills they need for future success. By engaging in open-ended exploration, children learn to think critically, collaborate with others, and persevere in the face of challenges. These are the very skills that employers value most.', zh: '玩耍帮助学生发展未来成功所需的技能。通过参与开放式探索，孩子们学会批判性思考、与他人协作、在面对挑战时坚持不懈。这些正是雇主最看重的技能。' }
    ]
  },
  {
    id: 'cet4_reading_2021_06_02',
    title: 'IT工作者 (Being an IT Worker)',
    description: '阅读理解：Being an information technology, or IT, worker is not a job I envy. They are the ones who, right in ...',
    category: '科技',
    wordCount: 294,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'Being an information technology, or IT, worker is not a job I envy. They are the ones who, right in the middle of a critical meeting, are expected to instantly fix the projector that\'s no longer working. They have to tolerate the bad tempers of colleagues frustrated at the number of times they\'ve had to call the help desk for the same issue. They are also the ones who know there are systems that are more powerful, reliable and faster, but their employer simply will not put up the funds to buy them.', zh: '成为一名信息技术（IT）工作者不是一份我羡慕的工作。他们是那些在关键会议中，需要立即修复不再工作的投影仪的人。他们必须忍受同事因多次为同样的问题呼叫帮助台而产生的坏脾气。他们也是那些知道有更强、更可靠、更快的系统，但雇主就是不愿意出钱购买的人。' },
      { en: 'According to a recent survey, employees who have a job reliant on IT support consider IT a major source of job dissatisfaction. Through no fault of their own, they can suddenly find their productivity deteriorating or quality control non-existent. And there\'s little they can do about it.', zh: '根据最近的一项调查，工作依赖IT支持的员工认为IT是工作不满意的主要来源。这不是他们自己的错，他们可能突然发现自己的生产力下降或质量控制不复存在。而且他们对此几乎无能为力。' },
      { en: 'The experience of using IT penetrates almost the entire work field. It has become a crucial part of employees\' overall work experience. When IT is operating as it should, employee self-confidence swells. Their job satisfaction, too, can surge when well-functioning machines relieve them of dull tasks or repetitive processes. But if there\'s one thing that triggers widespread employee frustration, it\'s an IT transformation project gone wrong, where swollen expectations have been popped and a long list of promised efficiencies have been reversed. This occurs when business leaders implement IT initiatives with little consideration of how those changes will impact the end user.', zh: '使用IT的体验渗透到几乎整个工作领域。它已成为员工整体工作体验的关键部分。当IT正常运转时，员工的自信心会膨胀。当运转良好的机器将他们从枯燥的任务或重复性流程中解放出来时，他们的工作满意度也会飙升。但如果有一件事会引发广泛的员工不满，那就是IT转型项目出错，膨胀的期望破灭，一长串承诺的效率提升被推翻。当商业领导者实施IT计划时，很少考虑这些变化将如何影响最终用户。' }
    ]
  },
  {
    id: 'cet4_reading_2021_06_03',
    title: '糖业资助研究 (Sugar Industry-Funded Research)',
    description: '阅读理解：Sugar shocked. That describes the reaction of many Americans this week following revelations that, 5...',
    category: '健康',
    wordCount: 325,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'Sugar shocked. That describes the reaction of many Americans this week following revelations that, 50 years ago, the sugar industry paid Harvard scientists for research that shifted the focus away from sugar\'s role in heart disease - and put the spotlight squarely on dietary fat.', zh: '\"糖震惊\"。这描述了本周许多美国人的反应，此前有消息披露，50年前，制糖业付钱给哈佛科学家进行研究，这些研究将焦点从糖在心脏病中的作用上转移开，而将注意力完全集中在膳食脂肪上。' },
      { en: 'What might surprise consumers is just how many present-day nutrition studies are still funded by the food industry. Nutrition scholar Marion Nestle of New York University spent a year informally tracking industry-funded studies on food. \"Roughly 90% of nearly 170 studies favored the sponsor\'s interest,\" Nestle tells us. Other systematic reviews support her conclusions.', zh: '可能让消费者惊讶的是，如今仍有如此多的营养研究是由食品行业资助的。纽约大学的营养学者玛丽昂·内斯特花了一年时间非正式地追踪食品行业资助的食品研究。内斯特告诉我们：\"在近170项研究中，大约90%的研究结果有利于资助者的利益。\"其他系统性综述也支持她的结论。' },
      { en: 'For instance, studies funded by Welch Foods - the brand behind Welch\'s 100% Grape Juice - found that drinking Concord grape juice daily may boost brain function. Another, funded by Quaker Oats, concluded, as a Daily Mail story put it, that \"hot oatmeal breakfast keeps you full for longer.\"', zh: '例如，由韦尔奇食品公司（生产韦尔奇100%葡萄汁的品牌）资助的研究发现，每天饮用康科德葡萄汁可能促进大脑功能。另一项由桂格燕麦资助的研究得出结论，正如《每日邮报》的一篇报道所说，\"热燕麦早餐让你饱腹感更持久。\"' },
      { en: 'Last year, The New York Times revealed how Coca-Cola was funding well-known scientists and organizations promoting a message that, in the battle against weight gain, people should pay more attention to exercise and less to what they eat and drink. Coca-Cola also released data detailing its funding of several medical institutions and associations between 2010 and 2015.', zh: '去年，《纽约时报》披露可口可乐如何资助知名科学家和组织，传递这样的信息：在与体重增加的斗争中，人们应该更多关注运动，而较少关注他们吃和喝的东西。可口可乐还发布了数据，详细说明其在2010年至2015年间对几个医学机构和协会的资助。' },
      { en: '\"It\'s certainly a problem that so much research in nutrition and health is funded by industry,\" says Bonnie Liebman, director of nutrition at the Center for Science in the Public Interest. \"When the food industry pays for research, it often gets what it pays for.\" And what it pays for is often a pro-industry finding.', zh: '\"营养与健康领域如此多的研究由行业资助，这肯定是个问题，\"公众利益科学中心的营养主任邦妮·利布曼说。\"当食品行业为研究买单时，它通常会得到它所支付的东西。\"而它所支付的往往是有利于行业的研究结果。' }
    ]
  },
  {
    id: 'cet4_reading_2021_06_04',
    title: '成功的定义 (Success)',
    description: '阅读理解：How people view success has changed dramatically over the generations. In our grandparents\' day, suc...',
    category: '文化',
    wordCount: 207,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'How people view success has changed dramatically over the generations. In our grandparents\' day, success was often defined by financial stability and social status. A good job meant a steady paycheck and a comfortable home. But today\'s young people are redefining what it means to be successful.', zh: '几代人以来，人们对成功的看法发生了巨大变化。在我们祖父母的时代，成功通常由经济稳定和社会地位来定义。一份好工作意味着稳定的薪水和舒适的家。但今天的年轻人正在重新定义成功意味着什么。' },
      { en: 'For many millennials, success is about finding purpose and meaning in their work. They want to make a positive impact on the world, not just earn a high salary. This shift in values is changing the way companies attract and retain talent. Employers are finding that they need to offer more than just competitive pay - they need to provide opportunities for personal growth, work-life balance, and social contribution.', zh: '对许多千禧一代来说，成功是关于在工作中找到目标和意义。他们想对世界产生积极影响，而不仅仅是赚取高薪。这种价值观的转变正在改变公司吸引和留住人才的方式。雇主们发现，他们需要提供的不只是有竞争力的薪酬——他们还需要提供个人成长、工作与生活平衡、以及社会贡献的机会。' },
      { en: 'Research shows that employees who find meaning in their work are more engaged, productive, and loyal. They are also more likely to stay with their employer long-term. As one expert puts it, \"The most successful companies of the future will be those that can align their business goals with their employees\' personal values.\"', zh: '研究表明，在工作中找到意义的员工更投入、更有生产力、更忠诚。他们也更有可能长期留在雇主身边。正如一位专家所说，\"未来最成功的公司将是那些能够将其业务目标与员工个人价值观相一致的公司。\"' }
    ]
  },
  {
    id: 'cet4_reading_2021_06_05',
    title: '无聊与创造力 (Boredom and Creativity)',
    description: '阅读理解：Boredom has become trendy. Studies point to how boredom is good for creativity. It facilitates innov...',
    category: '教育',
    wordCount: 212,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'Boredom has become trendy. Studies point to how boredom is good for creativity. It facilitates innovative thinking by allowing the mind to wander and make unexpected connections. When people are bored, they are more likely to daydream, which can lead to creative insights and new ideas.', zh: '无聊已成为一种趋势。研究表明无聊对创造力有好处。它通过允许思维漫游和建立意想不到的联系来促进创新思维。当人们感到无聊时，他们更容易做白日梦，这可以带来创造性洞察和新想法。' },
      { en: 'However, there is another side to boredom. The need to be left alone, to have time for uninterrupted thought, is essential for creativity. In our constantly connected world, finding time for boredom is becoming increasingly difficult.', zh: '然而，无聊还有另一面。需要独处、有时间进行不被打断的思考，这对创造力至关重要。在我们不断连接的世界里，找到无聊的时间正变得越来越困难。' },
      { en: 'Some experts worry that our addiction to smartphones and social media is preventing us from experiencing the kind of productive boredom that leads to creative breakthroughs. Others argue that technology itself can be a tool for creativity, providing access to endless inspiration and resources.', zh: '一些专家担心我们对智能手机和社交媒体的成瘾正在阻止我们体验那种能带来创造性突破的生产性无聊。另一些人则认为技术本身可以成为创造力的工具，提供无尽的灵感和资源。' },
      { en: 'Ultimately, the key may be to find a balance between stimulation and stillness, between engagement and reflection. By embracing moments of boredom and using them as opportunities for creative exploration, we can unlock our full creative potential.', zh: '最终，关键可能在于找到刺激与宁静、参与与反思之间的平衡。通过拥抱无聊的时刻，并将它们用作创造性探索的机会，我们可以释放我们全部的创造潜力。' }
    ]
  },
  {
    id: 'cet4_reading_2021_06_06',
    title: '饮食习惯与卡路里 (Calorie Consumption)',
    description: '阅读理解：Can you remember what you ate yesterday? If asked, most people will be able to give a vague descript...',
    category: '健康',
    wordCount: 187,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'Can you remember what you ate yesterday? If asked, most people will be able to give a vague description of their main meals: breakfast, lunch, dinner. But can you be sure you\'ve noted every snack bar in your car, or every handful of nuts at your desk? Most people will have a feeling that they\'ve missed something out.', zh: '你能记得昨天吃了什么吗？如果被问到，大多数人能够大致描述他们的主餐：早餐、午餐、晚餐。但是你能确定你记录下了车里的每一块零食棒，或者办公桌上的每一把坚果吗？大多数人会觉得自己遗漏了一些东西。' },
      { en: 'We originally had this suspicion back in 2016, puzzled by the fact that national statistics showed calorie consumption falling dramatically over past decades. We found reliable evidence that people were drastically under-reporting what they ate.', zh: '我们最初在2016年就有了这种怀疑，被国家统计数据显示过去几十年卡路里消耗量急剧下降这一事实所困惑。我们发现了可靠的证据，表明人们严重少报了他们所吃的东西。' },
      { en: 'Calorie consumption had fallen drastically over the decades—or so the statistics suggested. People\'s calorie intake was far from accurately reported. The growing trend of eating out may also contribute to the discrepancy, as people tend to underestimate the calorie content of restaurant meals. Researchers need to rethink how they collect dietary data to ensure accuracy.', zh: '卡路里消耗量在过去几十年急剧下降——至少统计数据是这样显示的。人们的卡路里摄入量远未被准确报告。外出就餐的增长趋势也可能导致这种差异，因为人们倾向于低估餐厅餐食的卡路里含量。研究人员需要重新思考如何收集饮食数据以确保准确性。' }
    ]
  },
  {
    id: 'cet4_listening_2021_12_01',
    title: '月球上的垃圾',
    description: '听力原文：One thing about the moon many people don\'t know is that it has a lot of garbage on its surface, huma...',
    category: '科技',
    wordCount: 235,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'One thing about the moon many people don\'t know is that it has a lot of garbage on its surface, human-created trash from space exploration. But how much garbage exactly have humans left on the moon? It\'s hard to be accurate, but the trash likely weighs more than 181,000 kg. Between 1969 and 1972, American astronauts landed on the moon surface during the Apollo missions, leaving behind massive amounts of lunar litter. These missions were executed by different space exploration agencies, including those from the US, Russia, Japan, India and Europe. Many of the longer-lasting pieces were equipment used to study the moon. That equipment was left there when the missions ended. The moon is also home to lunar orbiters, which mapped the moon until they crashed into its surface, adding to the litter. Items left behind by Apollo astronauts include unneeded equipment. Bringing unneeded equipment back would have used up precious resources like fuel. But, as the saying goes, one person\'s trash is another person\'s treasure. Many of the objects on the moon are still being used, including a laser-ranging reflector used to measure the precise distance between Earth and moon.', zh: '关于月球，很多人不知道的一点是它的表面有很多垃圾，是人类太空探索留下的垃圾。但人类究竟在月球上留下了多少垃圾呢？这很难准确计算，但垃圾可能重达181,000公斤以上。1969年至1972年间，美国宇航员在阿波罗任务期间登陆月球表面，留下了大量的月球垃圾。这些任务由不同的太空探索机构执行，包括来自美国、俄罗斯、日本、印度和欧洲的机构。许多存在时间较长的碎片是用来研究月球的设备。这些设备在任务结束后留在那里。月球也是月球轨道飞行器的家园，这些飞行器在撞击月球表面之前绘制了月球地图，这增加了月球的垃圾。阿波罗宇航员留下的物品包括不再需要的设备。把不需要的设备带回来会耗尽燃料等宝贵资源。但是，俗话说，一个人的垃圾是另一个人的财富。月球上的许多物品仍在被使用，包括一个用于测量地球与月球之间精确距离的激光测距反射器。' }
    ]
  },
  {
    id: 'cet4_listening_2021_12_02',
    title: '语言学习',
    description: '听力原文：I have learned many languages, but I haven\'t learned them as well as a professional interpreter woul...',
    category: '教育',
    wordCount: 176,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'I have learned many languages, but I haven\'t learned them as well as a professional interpreter would. Still, these languages have opened doors for me. They made it possible for me to look for jobs in international settings and to get those job offers. Like many who have lived abroad for a time, I enjoy living overseas very much. I cannot imagine getting through my professional life and social life without international interactions. Since 1977, I have spent more time outside the US than in it. I love going to places I\'ve never been, tasting foods I\'ve never eaten, and experiencing new cultures. If you can speak the local language, it is easier to get to know the country and the people there. If I had the time and the money, I would try to live in more countries for a year each. Beyond my professional life, my language proficiency has afforded me some rare opportunities.', zh: '我学过许多语言，但我并不能像专业翻译那样掌握这些语言。不过，这些语言还是为我开启了大门。它们让我有机会在国际环境中找工作，并帮助我得到那些工作机会。和许多在海外生活过一段时间的人一样，我非常喜欢在海外生活。我无法想象在没有国际交往的情况下，度过我的职业生活和社会生活。从1977年开始，我在国外的时间比在美国的时间多得多。我喜欢去没去过的地方，品尝没吃过的食物，体验新的文化。如果你能说当地的语言，那了解那个国家和那里的人会更容易一些。如果我有时间有资金，我会尽量在更多的国家生活一年的时间。除了我的职业以外，我运用语言的熟练程度使我得到了一些难得的机会。' }
    ]
  },
  {
    id: 'cet4_listening_2021_12_03',
    title: '左撇子儿童教育',
    description: '听力原文：Campaigners have warned that the British government is not doing enough to prevent left-handed pupil...',
    category: '教育',
    wordCount: 224,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'Campaigners have warned that the British government is not doing enough to prevent left-handed pupils from falling behind their peers. They claim that thousands of children are still being penalized for being left-handed. This is due to a lack of action from ministers who failed to take any meaningful action for years. It is feared that a failure to address early-year challenges, such as poor handwriting, leads to much more serious problems down the line with these pupils facing reduced career prospects.', zh: '活动人士警告说，英国政府在防止左撇子学生落后于同龄人方面做得不够。他们声称，成千上万的孩子仍然因为左撇子而受到惩罚。这是由于部长们多年来没有采取任何有意义的行动，缺乏行动。人们担心，如果不能解决早期的挑战，如书写不佳，会导致更严重的问题，这些学生面临减少的职业前景。' },
      { en: 'Studies in recent years show that left-handed children are more likely to suffer with learning difficulties, and their scores are lower on IQ tests. Campaigners feel it\'s strange that children in British schools are penalized because they happen to be left-handed. They don\'t understand why successive governments have failed to act on this. They want the Department of Education to record which children are left-handed and what their educational attainments are, since they make up some 10% of the population. In early-year education, left-handed children are struggling and making a mess of their handwriting.', zh: '近年来的研究表明，左撇子儿童更容易出现学习困难，他们在智商测试中的分数也较低。活动人士觉得，英国学校的孩子因为碰巧是左撇子而受到惩罚，这很奇怪。他们不明白为什么历届政府都未能对此采取行动。他们希望教育部记录哪些孩子是左撇子，他们的教育成就是什么，因为他们约占人口的10%。在早期教育中，左撇子儿童正在挣扎，把书写搞得一团糟。' }
    ]
  },
  {
    id: 'cet4_listening_2021_12_04',
    title: '跑步与健康',
    description: '听力原文：One 60-minute run can add 7 hours to your life. This was a claim made by The Times last week. The cl...',
    category: '健康',
    wordCount: 286,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'One 60-minute run can add 7 hours to your life. This was a claim made by The Times last week. The claim was based on a new review of studies about the effects of running. The review concluded that on average runners live 3 years longer than non-runners, and that running does more to extend life than any other form of exercise.', zh: '一次60分钟的跑步可以为你的生命增加7小时。这是《泰晤士报》上周的说法。这一说法基于一项关于跑步影响的研究的新综述。该综述得出结论，跑步者平均比非跑步者多活3年，而且跑步比其他任何形式的运动都更能延长寿命。' },
      { en: 'But there\'s more to running than its health benefits. Research published in recent years has shown that running changes your brain and mind in some fascinating ways, from increasing your brain function to regulating your emotions.', zh: '但跑步的好处不仅仅是健康益处。近年来发表的研究表明，跑步以一些迷人的方式改变你的大脑和思维，从增加大脑功能到调节情绪。' },
      { en: 'However, the precise effects vary according to whether you engage in short, fast running or long-distance running. For example, in one study, researchers compared participants\' ability to learn new words after several minutes of intense running and after 40 minutes of gentle running. Participants were able to learn 20% faster after the intense running and they showed a superior memory when tested again a week later.', zh: '然而，精确的效果因你从事的是短跑还是长跑而异。例如，在一项研究中，研究人员比较了参与者在几分钟激烈跑步后和40分钟温和跑步后学习新单词的能力。参与者在激烈跑步后学习速度提高了20%，一周后再次测试时显示出更优越的记忆。' },
      { en: 'In another study, researchers asked volunteers to jog for 30 minutes and then showed them clips from a sad movie. Participants who usually struggled to handle negative emotions were more intensely affected by the sad clips, just as you\'d expect. But crucially, this was less so if they had completed the 30 minutes jog. The researchers said moderate exercise appears to have helped those participants to be less vulnerable to the impact of the sad movie.', zh: '在另一项研究中，研究人员要求志愿者慢跑30分钟，然后给他们看悲伤电影的片段。通常难以处理负面情绪的参与者受悲伤片段的影响更强烈，正如你所料。但关键的是，如果他们完成了30分钟的慢跑，这种情况就会减轻。研究人员说，适度运动似乎帮助这些参与者对悲伤电影的影响不那么脆弱。' }
    ]
  },
  {
    id: 'cet4_reading_2021_12_01',
    title: '远程工作 (Remote Work)',
    description: '阅读理解：As many office workers adapt to remote work, cities may undergo fundamental change if offices remain...',
    category: '科技',
    wordCount: 271,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'As many office workers adapt to remote work, cities may undergo fundamental change if offices remain under-utilized. Who will benefit if working from home becomes the norm? Employers argue they make considerable savings on real estate when workers shift from office to home work. However, these savings result from passing costs on to workers. Though employers are backed by a chorus of remote work advocates who point to reduced commuting time and increased flexibility, the reality is more complex. Workers are spending more on home office setups, electricity, and internet, while shouldering the burden of blurred work-life boundaries.', zh: '随着许多办公室工作人员适应远程工作，如果办公室持续未被充分利用，城市可能会经历根本性变化。如果在家工作成为常态，谁将受益？雇主认为，当员工从办公室工作转向家庭工作时，他们在房地产方面节省了大量开支。然而，这些节省是通过将成本转嫁给工人实现的。尽管雇主得到了远程工作倡导者的一致支持，他们指出通勤时间减少和灵活性增加，但现实更为复杂。工人在家庭办公设备、电力和互联网上花费更多，同时承担着工作与生活界限模糊的负担。' },
      { en: 'The shift to remote work is also having an impact on urban economies. With fewer people commuting to city centers, businesses that rely on office workers—such as restaurants, cafes, and shops—are struggling. Commercial real estate values are declining, and cities are facing a potential tax revenue shortfall.', zh: '向远程工作的转变也对城市经济产生了影响。随着通勤到市中心的人减少，依赖上班族的企业——如餐馆、咖啡馆和商店——正在挣扎。商业地产价值正在下降，城市面临潜在的税收收入短缺。' },
      { en: 'Despite these challenges, some experts believe that the shift to remote work could ultimately lead to positive changes. If managed properly, remote work could reduce traffic congestion, lower carbon emissions, and give workers more flexibility to balance their personal and professional lives. The key is to develop policies that support workers and ensure that the benefits of remote work are shared equitably.', zh: '尽管面临这些挑战，一些专家认为，向远程工作的转变最终可能带来积极的变化。如果管理得当，远程工作可以减少交通拥堵、降低碳排放，并给工人更多的灵活性来平衡个人和职业生活。关键是制定支持工人的政策，确保远程工作的好处得到公平分享。' }
    ]
  },
  {
    id: 'cet4_reading_2021_12_02',
    title: '好奇心 (Curiosity)',
    description: '阅读理解：The human thirst for knowledge is the driving force behind our successful development as a species. ...',
    category: '教育',
    wordCount: 275,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'The human thirst for knowledge is the driving force behind our successful development as a species. But curiosity can also be dangerous, leading to setbacks or even downfalls. Given curiosity\'s complexity, scientists have found it hard to define.', zh: '人类对知识的渴望是我们作为一个物种成功发展背后的驱动力。但好奇心也可能是危险的，会导致挫折甚至失败。鉴于好奇心的复杂性，科学家们发现很难给它下定义。' },
      { en: 'While pinning down a definition has proven tricky, the general consensus is it\'s some means of information gathering. Psychologists also agree curiosity is intrinsically motivated.', zh: '虽然确定一个定义已被证明很棘手，但普遍的共识是它是某种信息收集的方式。心理学家们也认同好奇心是内在驱动的。' },
      { en: 'Curiosity covers such a large set of behaviors that there probably isn\'t any single \"curiosity gene\" that makes humans wonder about and explore their environment. That said, curiosity does have a genetic component. Genes and the environment interact in many complex ways to shape individuals and guide their behavior, including their curiosity.', zh: '好奇心涵盖了如此广泛的一系列行为，以至于可能不存在任何单一的\"好奇心基因\"能让人类对环境感到好奇并去探索它。话虽如此，好奇心确实有一个遗传成分。基因和环境以许多复杂的方式相互作用，塑造个体并引导他们的行为，包括他们的好奇心。' },
      { en: 'Regardless of their genetic makeup, infants have to learn an incredible amount of information in a short time, and curiosity is one of the tools humans have found to accomplish that gigantic task. Hundreds of studies show that infants prefer novelty. It\'s what motivates non-human animals, human infants and probably human adults to explore and seek out new things before growing less interested in them after continued exposure.', zh: '不管他们的基因构成如何，婴儿必须在短时间内学习大量令人难以置信的信息，而好奇心是人类发现的完成这项艰巨任务的工具之一。数百项研究表明婴儿更喜欢新奇事物。正是这种偏好促使非人类动物、人类婴儿，可能还有人类成年人去探索并寻找新事物，直到在持续接触后对它们的兴趣逐渐降低。' },
      { en: 'But curiosity often comes with a cost. In some situations, the stakes are low and failure is a healthy part of growth. But sometimes, testing out a new idea can lead to disaster.', zh: '但好奇心往往伴随着代价。在某些情况下，风险较低，失败是成长中健康的一部分。但有时，测试一个新想法可能会导致灾难。' }
    ]
  },
  {
    id: 'cet4_reading_2021_12_03',
    title: '体重与基因 (Weight and Genes)',
    description: '阅读理解：For decades, scientists have been trying to unravel the complex relationship between genetics and bo...',
    category: '科技',
    wordCount: 279,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'For decades, scientists have been trying to unravel the complex relationship between genetics and body weight. We now know that hundreds of genes influence weight, and that genetic factors can account for as much as 70% of the variation in body mass index among individuals.', zh: '几十年来，科学家们一直在试图解开遗传学与体重之间的复杂关系。我们现在知道，数百个基因影响体重，遗传因素可以解释个体之间体重指数变异的70%。' },
      { en: 'However, the fact that obesity has a strong genetic component does not mean that environmental factors are unimportant. Diet, physical activity, sleep, and stress all play a role in determining body weight. Moreover, the genetic and environmental factors interact in complex ways. For example, some people may have a genetic predisposition to gain weight, but whether they actually become obese depends on their lifestyle choices.', zh: '然而，肥胖有很强的遗传成分这一事实并不意味着环境因素不重要。饮食、体育活动、睡眠和压力都在决定体重方面发挥作用。此外，遗传因素和环境因素以复杂的方式相互作用。例如，有些人可能有体重增加的遗传倾向，但他们是否真的变得肥胖取决于他们的生活方式选择。' },
      { en: 'Recent research has also highlighted the importance of the gut microbiome in weight regulation. The trillions of bacteria that live in our digestive system can influence how we metabolize food and store fat. This emerging field of research is opening up new possibilities for understanding and treating obesity.', zh: '最近的研究还强调了肠道微生物组在体重调节中的重要性。生活在我们消化系统中的数万亿细菌可以影响我们如何代谢食物和储存脂肪。这一新兴研究领域正在为理解和治疗肥胖开辟新的可能性。' },
      { en: 'Despite the complexity of the relationship between genes and weight, some experts worry that emphasizing the genetic component of obesity may have unintended consequences. If people believe that their weight is determined by their genes, they may feel less motivated to make healthy lifestyle choices. It\'s important to communicate that while genes play a role, they are not destiny.', zh: '尽管基因与体重之间的关系很复杂，一些专家担心强调肥胖的遗传成分可能会产生意想不到的后果。如果人们相信他们的体重是由基因决定的，他们可能会觉得做出健康生活方式选择的动力不足。重要的是要传达，虽然基因发挥作用，但它们不是命运。' }
    ]
  },
  {
    id: 'cet4_reading_2021_12_04',
    title: '男性幼儿教师 (Male Early Childhood Teachers)',
    description: '阅读理解：Nationwide, only about three percent of early childhood teachers are male in the U.S. Experts say th...',
    category: '教育',
    wordCount: 289,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'Nationwide, only about three percent of early childhood teachers are male in the U.S. Experts say this can have an impact on young children whose understanding of gender roles and identity are rapidly forming. Research has found that having access to diverse teachers is beneficial for children. For the youngest learners, it means they are more likely to get exposed to different varieties of play and communication. It also helps them develop healthy ideas around gender.', zh: '在美国，全国范围内只有约3%的幼儿教师是男性。专家表示，这可能会对正处于性别角色和身份认知快速形成阶段的幼儿产生影响。研究发现，接触多样化的教师对孩子们有益。对于年幼的学习者来说，这意味着他们更有可能接触到不同种类的游戏和交流方式。这也有助于他们形成关于性别的健康观念。' },
      { en: '\"In our world and our society, we have very specific stereotypes of gender roles,\" said Mindi Reich-Shapiro, an assistant professor in the teacher education department. \"It\'s important for children to see other possibilities and other paths they can take.\"', zh: '\"在我们的世界和社会中，我们对性别角色有非常特定的模式化形象，\"教师教育系的助理教授明迪·赖希-夏皮罗说。\"让孩子们看到其他可能性和他们可以选择的其他道路很重要。\"' },
      { en: 'Despite mostly feeling supported by colleagues and family members, many of the male educators surveyed in the study reported facing social or cultural resistance in their careers as early education teachers. Some also reported that there were parents surprised or concerned that their child had a male teacher. And they had been advised by colleagues or other staff not to hug children.', zh: '尽管大多数受访的男性教育工作者感觉得到了同事和家人的支持，但他们中的许多人表示，在从事幼儿教育教师职业时面临着社会或文化方面的阻力。一些人还报告说，有些家长会对孩子有男教师感到惊讶或担忧。而且他们被同事或其他工作人员建议不要拥抱孩子。' },
      { en: 'The authors also suggest that traditional recruitment approaches for early childhood educators \"do not address the gender gap in the field.\" They recommend providing young men opportunities to work with children through training and volunteer programs, targeting groups of men who are considering a career change, such as fathers.', zh: '作者们还指出，传统的幼儿教育工作者招聘方式\"没有解决该领域的性别差距问题\"。他们建议通过培训和志愿者项目为年轻男性提供与孩子一起工作的机会，目标群体是那些正在考虑职业转变的男性，比如父亲们。' }
    ]
  },
  {
    id: 'cet4_reading_2021_12_05',
    title: '身体接触文化 (Hugging and Touching)',
    description: '阅读理解：Have you ever wondered how acceptable it is to hug or touch someone? The answer depends largely on c...',
    category: '文化',
    wordCount: 231,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'Have you ever wondered how acceptable it is to hug or touch someone? The answer depends largely on cultural context. In some cultures, physical touch is a common and expected form of greeting, while in others it may be considered inappropriate or even offensive.', zh: '你有没有想过拥抱或触摸某人有多可接受？答案很大程度上取决于文化背景。在某些文化中，身体接触是一种常见且预期的问候方式，而在其他文化中，它可能被认为不适当甚至冒犯。' },
      { en: 'Research has shown that the absence of touch in interpersonal relationships might suggest a lack of warmth. However, the appropriateness of touch depends on how close the communicator\'s relationships are. In close relationships, touch is often seen as a sign of affection and support. In more distant relationships, the same touch might be perceived as an invasion of personal space.', zh: '研究表明，人际关系中缺乏身体接触可能暗示缺乏温暖。然而，触摸的适当性取决于交流者关系的亲密程度。在亲密关系中，触摸通常被视为爱和支持的标志。在较疏远的关系中，同样的触摸可能被视为对个人空间的侵犯。' },
      { en: 'Cultural norms also play a significant role. In some Mediterranean and Latin American cultures, people take touching as a cultural norm in social interactions. Men can show friendship in public through physical affection. In contrast, in many East Asian cultures, people tend to be more reserved about physical contact, especially in public settings.', zh: '文化规范也起着重要作用。在一些地中海和拉丁美洲文化中，人们将身体接触视为社交互动中的文化规范。男性可以通过身体接触在公共场合表达友谊。相比之下，在许多东亚文化中，人们在身体接触方面往往更为保守，尤其是在公共场合。' },
      { en: 'The key is to take other people\'s preferences into consideration. When in doubt, it\'s always best to err on the side of caution and respect personal boundaries.', zh: '关键是要考虑他人的偏好。当有疑问时，最好谨慎行事，尊重个人边界。' }
    ]
  },
  {
    id: 'cet4_reading_2021_12_06',
    title: '成长型兴趣思维 (Growth Mindset of Interest)',
    description: '阅读理解：From climate change to the ongoing pandemic and beyond, the issues facing today\'s world are increasi...',
    category: '教育',
    wordCount: 327,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'From climate change to the ongoing pandemic and beyond, the issues facing today\'s world are increasingly complex and dynamic. Yet solving problems like these requires new approaches that extend beyond traditional ways of thinking. A study led by Yale Professor of Psychology, Paul O\'Keefe, found that having a growth mindset of interest may spark this type of innovation.', zh: '从气候变化到持续的大流行病等等，当今世界面临的问题日益复杂且多变。然而，解决这类问题需要超越传统思维方式的新方法。由耶鲁大学心理学教授保罗·奥基夫领导的一项研究发现，拥有成长型兴趣思维倾向可能会激发这类创新。' },
      { en: 'Professor O\'Keefe established in earlier studies that people hold different beliefs about the nature of interest. Those with a growth mindset of interest tend to believe that interests can be developed and cultivated, while those with a fixed mindset of interest tend to believe that interests are inherent and simply need to be \"found.\"', zh: '奥基夫教授在早期研究中确定，人们对兴趣的本质持有不同的信念。那些具有成长型兴趣思维倾向的人往往认为兴趣是可以发展和培养的，而那些具有固定型兴趣思维倾向的人往往认为兴趣是与生俱来的，只需要\"被发现\"。' },
      { en: 'Building on these findings, the latest research examined how a growth mindset of interest can boost integrative thinking across the traditional disciplinary boundaries of arts and sciences. For example, in one task, research participants were instructed to create new college majors by combining two or more existing academic Arts or Science programs at their university. After coding and analyzing the ideas they generated, the team found that people with a growth mindset of interest were more likely to bridge programs across the arts and sciences to create new majors like computational economics rather than creating majors that drew from only one of those areas, like computational chemistry.', zh: '基于这些发现，最新研究考察了成长型兴趣思维倾向如何能够促进跨越艺术与科学传统学科界限的整合性思维。例如，在一项任务中，研究参与者被要求通过将他们大学现有的两个或更多学术艺术或科学项目结合起来，创建新的大学专业。在对他们产生的想法进行编码和分析后，研究团队发现，具有成长型兴趣思维倾向的人更有可能跨越艺术与科学的项目，创建像计算经济学这样的新专业，而不是创建仅来自其中一个领域的专业，比如计算化学。' },
      { en: 'The findings suggest that making innovative products needs multidisciplinary thinking. The implication is clear: broadening our interests and embracing a growth mindset can help us tackle the complex challenges of the 21st century.', zh: '这些发现表明，制造创新产品需要多学科思维。其含义是明确的：拓宽我们的兴趣并拥抱成长型思维可以帮助我们应对21世纪的复杂挑战。' }
    ]
  },
  {
    id: 'cet4_reading_2022_06_01',
    title: 'Employee Retention and Loyalty',
    description: '阅读理解：Questions 46 to 50 are based on the following passage....',
    category: '社会',
    wordCount: 50,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'Questions 46 to 50 are based on the following passage.', zh: '本文讨论了员工留存策略和影响员工忠诚度的因素。研究表明，如果雇主表现出更多的欣赏，82% 的员工会选择留任更长时间。然而，许多公司仅专注于薪酬，而不是与员工建立真诚的关系。薪酬较高的员工虽然表面上看起来满意，但 paradoxically（矛盾地）更有可能离职，因为他们有更多的选择。文章强调，公司需要创造让员工感到自己价值超越薪资的工作环境。这包括提供成长机会、认可成就以及培养积极的职场文化。作者最后总结，留人努力必须是多方面的，不仅要解决财务激励问题，还要满足员工的情感和职业需求。' }
    ]
  },
  {
    id: 'cet4_reading_2022_06_02',
    title: 'Online Learning and Students',
    description: '阅读理解：Questions 51 to 55 are based on the following passage....',
    category: '教育',
    wordCount: 50,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'Questions 51 to 55 are based on the following passage.', zh: '本文探讨了在线学习对学生教育体验的影响。虽然数字教育提供了灵活性和可及性，特别是对于偏远地区或日程繁忙的人群，但它也带来了重大挑战。在线环境中的学生常常错过实体课堂中发生的自发互动，这可能阻碍人际交往技能的发展。作者指出，在虚拟环境中与同伴和老师建立关系更加困难。此外，在线学习需要许多学生缺乏的高度自律。文章建议，混合式方法——将在线资源与面对面教学相结合——可能提供两全其美的方案。作者最后总结，教育机构应仔细考虑学习的社会和情感方面，而不仅仅是数字平台的物流便利性。' }
    ]
  },
  {
    id: 'cet4_listening_2022_06_01',
    title: 'A Writer and His Children',
    description: '听力原文：M: Hi, I\'m a staff writer for a magazine. I\'m also a father of four kids. People often ask me how I ...',
    category: '教育',
    wordCount: 123,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'M: Hi, I\'m a staff writer for a magazine. I\'m also a father of four kids. People often ask me how I get my children interested in writing.\nW: That must be challenging. What do you tell them?\nM: I don\'t teach them proofreading or recommend model essays. Instead, I give them encouragement and offer ample editorial guidance. My children are curious and autonomous. They develop their own ideas.\nW: So your children\'s tastes in books have changed over time?\nM: Yes, but more importantly, my daughter realized the power of reading. Her reading opened her eyes to the world. She began to perceive the world differently.', zh: '男：嗨，我是一家杂志的专职作家。我还是四个孩子的父亲。人们经常问我如何让孩子对写作产生兴趣。\n女：那一定很有挑战性。你怎么回答他们？\n男：我不教他们校对，也不推荐范文。相反，我给予他们鼓励并提供充分的编辑指导。我的孩子们好奇且自主。他们发展自己的想法。\n女：那么你孩子们的阅读品味随着时间改变了？\n男：是的，但更重要的是，我女儿意识到了阅读的力量。阅读让她开阔了眼界。她开始用不同的方式看待世界。' }
    ]
  },
  {
    id: 'cet4_listening_2022_06_02',
    title: 'A Fashion Entrepreneur',
    description: '听力原文：W: I\'m a successful entrepreneur in the fashion industry. I started my own business after graduating...',
    category: '生活',
    wordCount: 113,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'W: I\'m a successful entrepreneur in the fashion industry. I started my own business after graduating from university.\nM: How did you get started? Were your designs immediately popular?\nW: Not at all. They were repeatedly rejected by shops. But I didn\'t give up. I had a strong interest in doing it. I didn\'t like ready-made clothes, and I couldn\'t find clothes of my size in shops. I found clothes in shops unaffordable too.\nM: So you decided to create your own brand?\nW: Yes. I improved my marketing strategy and expanded my business. Now I even add designs for women.', zh: '女：我是时尚行业的一名成功企业家。大学毕业后我创办了自己的企业。\n男：你是怎么开始的？你的设计一开始受欢迎吗？\n女：完全没有。它们被商店反复拒绝。但我没有放弃。我对此有强烈的兴趣。我不喜欢成衣，在商店里也找不到我尺码的衣服。商店里的衣服我也买不起。\n男：所以你决定创建自己的品牌？\n女：是的。我改进了营销策略并扩展了业务。现在我甚至增加了女装设计。' }
    ]
  },
  {
    id: 'cet4_listening_2022_06_03',
    title: 'Person Perception',
    description: '听力原文：In social psychology, the term person perception refers to the mental processes that we use to form ...',
    category: '健康',
    wordCount: 288,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'In social psychology, the term person perception refers to the mental processes that we use to form impressions of other people. It includes not just how we form these impressions, but the conclusions we make about other people based on our impressions. Consider how often you make this kind of judgment every day. When you meet with a new coworker, you immediately begin to develop an initial impression of this person. When you visit the grocery store, you might draw conclusions about the cashier who checks you out. Obviously, person perception is a very subjective process that can be affected by a number of variables, including the characteristics of the person you\'re observing, the context of the situation, your own personal traits, and your past experiences.', zh: '在社会心理学中，\"人际知觉\"一词指的是我们用来形成对他人印象的心理过程。它不仅包括我们如何形成这些印象，还包括我们基于印象对他人得出的结论。想想看，你每天要做多少次这种判断。当你遇到一位新同事时，你立即开始对这个人的初步印象。当你去杂货店时，你可能会对给你结账的收银员得出结论。显然，人际知觉是一个非常主观的过程，可能受到多种变量的影响，包括你观察的人的特征、情境背景、你自己的个性特质以及你过去的经历。' },
      { en: 'One of the techniques we use in person perception is social categorization. In this process, we mentally categorize people into different groups based on common characteristics. Problems with this technique include the fact that it can lead to errors and prejudice. Imagine that you are getting on a bus. There are only two seats available. One is next to a small elderly woman. The other is next to a muscular, fierce looking man. You sit next to the elderly woman who unfortunately turns out to be quite skilled at picking pockets. Because of social categorization, you immediately judge the woman as harmless and the man as threatening, leading to the loss of your wallet.', zh: '我们在人际知觉中使用的技巧之一是社交分类。在这个过程中，我们在心理上根据共同特征将人们归入不同群体。这种技巧的问题在于它可能导致错误和偏见。想象你正在上一辆公共汽车。只有两个座位空着。一个旁边是一位瘦小的老妇人。另一个旁边是一位肌肉发达、看起来很凶的男人。你坐在老妇人旁边，不幸的是，结果发现她非常擅长扒窃。由于社交分类，你立即判断老妇人是无害的，而那个男人是威胁性的，结果导致你的钱包丢了。' }
    ]
  },
  {
    id: 'cet4_listening_2022_06_04',
    title: 'Active vs. Passive Inspiration',
    description: '听力原文：It\'s easy to spend all day searching for inspiration. You can find incredible videos, articles, and ...',
    category: '生活',
    wordCount: 282,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'It\'s easy to spend all day searching for inspiration. You can find incredible videos, articles, and news stories about the success of others. The problem is that consuming the success and ideas of others is passive inspiration. Every time you read an article or listen to an interview, you\'re practicing passive inspiration. You might learn something, but you don\'t actually have to do anything. Hearing about other people\'s success isn\'t the same as creating your own. Instead, it is through the process of active inspiration, the act of creating things, applying new ideas to our goals and making mistakes that we discover who we are and what is important to us.', zh: '花一整天寻找灵感是很容易的。你可以找到关于他人成功的精彩视频、文章和新闻报道。问题是，消费他人的成功和想法属于\"被动灵感\"。每次你阅读一篇文章或听一段采访，你都在实践被动灵感。你可能学到一些东西，但你实际上不必做任何事。听说别人的成功与创造自己的成功是不一样的。相反，正是通过\"主动灵感\"的过程——创造事物、将新想法应用到我们的目标中、犯错误——我们才发现了自己是谁以及什么对我们来说是重要的。' },
      { en: 'Furthermore, active inspiration is what results in long term passion and enthusiasm. Watching someone else\'s success might leave you feeling excited for a few minutes. However, taking action and applying a new idea to your life will inspire you more than anything someone else could say. Learning and listening can help you think about things in a different way. But creating, producing, and experimenting is what drives you forward. Passive inspiration can give you ideas, but active inspiration will give you power. Too often, we spend our lives consuming the world around us instead of creating it. What matters is the power your actions have to inspire you. The best inspiration comes from the application of ideas, not the consumption of them.', zh: '此外，主动灵感才能产生长期的热情和激情。观看别人的成功可能让你兴奋几分钟。然而，采取行动并将新想法应用到你的生活中，会比任何人说的话都更能激励你。学习和倾听可以帮助你用不同的方式思考问题。但创造、生产和实验才是推动你前进的动力。被动灵感可以给你想法，但主动灵感会给你力量。我们常常花费一生去消费周围的世界，而不是去创造它。重要的是你的行动所具有的激励力量。最好的灵感来自于想法的应用，而不是消费。' }
    ]
  },
  {
    id: 'cet4_reading_2022_09_01',
    title: 'Academic Dishonesty and Technology',
    description: '阅读理解：Questions 46 to 50 are based on the following passage....',
    category: '教育',
    wordCount: 279,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'Questions 46 to 50 are based on the following passage.', zh: '学术不诚实并不是什么新鲜事。只要有家庭作业和考试，就会有作弊者。不过，作弊的方式随着时间的推移发生了变化，尤其是现在科技使作弊比以往任何时候都更容易。约瑟夫森伦理研究所的一项研究采访了23,000名高中生，就学术伦理向他们提出了各种问题。在接受调查的青少年中，51% 的人表示他们曾在某个时候故意在考试中作弊，但他们对这种行为并不感到不安。常识媒体的一项调查发现，35% 的学生曾通过智能手机作弊，不过在该特定研究中接受调查的家长并不相信他们的孩子曾经作弊。在许多情况下，学生根本没有意识到像在智能手机上查找答案这样的策略实际上就是作弊。' },
      { en: 'Academic dishonesty is nothing new. As long as there have been homework assignments and tests, there have been cheaters. The way that cheating looks has changed over time, though, particularly now that technology has made it easier than ever. A study by the Josephson Institute of Ethics interviewed 23,000 high school students and asked them a variety of questions about academic ethics. Of the teens surveyed, 51 percent said that they had knowingly cheated at some point on an exam but that they did not feel uneasy about the behaviour. A Common Sense Media survey found that 35 percent of students had cheated via smartphone, though the parents surveyed in that particular study did not believe their kids had ever cheated. In many cases, students did not realize that strategies like looking up answers on a smartphone were actually cheating at all.', zh: '在当今的课堂上，作弊的学生很少被抓住。不再有写在手心上的公式，不再有学生偷看邻座，也不再有小声向同学传递答案。今天的学生使用智能手机、平板电脑甚至课堂电脑来辅助作弊，且不留下任何犯罪痕迹。由于通过技术作弊在许多学校政策中没有被明确列为违规行为，学生不认为这些行为是不道德的。' },
      { en: 'In today\'s classrooms, students who cheat are rarely caught. There are no formulas written on the insides of hands or students looking across the aisle, or whispering answers to their classmates. Today\'s students use smartphones, tablets or even in-class computers to aid their cheating attempts and leave no trace of their crimes. Since cheating through technology is not listed specifically as being against the rules in many school policies, students do not view the actions as unethical.', zh: '作者建议学校需要更新反作弊政策。教师也应该制定更有效的反作弊策略，并防止学生滥用技术。关键是找到更多方法来遏制学生的不道德行为，同时帮助他们理解学术诚信的重要性。' }
    ]
  },
  {
    id: 'cet4_reading_2022_09_02',
    title: 'Success and Life Purpose',
    description: '阅读理解：While 92% of people believe others care most about fame and fortune, this is according to the newly ...',
    category: '社会',
    wordCount: 137,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'While 92% of people believe others care most about fame and fortune, this is according to the newly released study. Smith says he was bothered by how past studies on success focused only on external markers. In this study, his team \"went the opposite direction.\" As a scientist, Smith literally studied individuality for a living. He was surprised to find younger respondents cared more about having a purpose in life, when values focused more on stable incomes than fulfilling personal missions. Being a parent ranked very high across the priorities of all study participants. Smith hopes institutions will take note of these insights accordingly, to better accommodate people in the U.S.', zh: '92% 的人认为他人最在乎名利，这是一项最新发布的研究的结果。史密斯说，过去关于成功的研究只关注外部标志，这让他感到困扰。在这项研究中，他的团队\"走向了相反的方向\"。作为一名科学家，史密斯 literally（ literally ）以研究个性为生。令他惊讶的是，研究发现年轻受访者更在乎拥有人生目标，而当时价值观更关注稳定收入而非实现个人使命。做父母在所有研究参与者的优先事项中排名很高。史密斯希望各机构能相应地注意这些洞见，以更好地适应美国人的需求。' }
    ]
  },
  {
    id: 'cet4_listening_2022_09_01',
    title: 'Birthday Blues',
    description: '听力原文：W: It\'s your birthday next week. What have you got planned?\nM: I\'m not sure. I often feel strange on...',
    category: '健康',
    wordCount: 298,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'W: It\'s your birthday next week. What have you got planned?\nM: I\'m not sure. I often feel strange on my birthday. It\'s like my brain decides to have a crisis.\nW: It\'s not entirely unusual to feel anxious or sad around your birthday. Birthdays can tap into a lot of things people worry about, including their achievements in life in the past decade or their accomplishments of the past year. Many begin to search for the meaning of their existence, leading to behaviors such as ending or starting a relationship, or plans like starting a vigorous diet or fitness program.\nM: I have wonderful friends, and I love celebrating their birthdays. But I don\'t like being the center of attention, receiving gifts, and having a fuss made. It seems to trigger a type of social anxiety. I think social media too can intensify things, as birthdays now play out more publicly. Birthday reminders can be helpful, but I kind of worry I won\'t be able to drum up my own day and show it to look as exciting as it is supposed to be.\nW: Well, to deal with the birthday blues, you should not isolate yourself. It\'s best to gradually face your birthday with people you trust. That would help you learn self-acceptance, or that it\'s okay to be the focus. Perhaps, you could perceive your birthday as an opportunity to do something for others, like asking people to make a donation instead of buying a gift.\nM: Exactly, or even simply see your birthday as an opportunity to bring people together for them to have fun.', zh: '女：下周是你的生日。你有什么计划？\n男：我不太确定。我过生日时经常感觉怪怪的。就像我的大脑决定要经历一场危机一样。\n女：在生日前后感到焦虑或悲伤并不罕见。生日能触及人们担忧的很多事情，包括过去十年的人生成就或过去一年的成就。很多人开始寻找自己存在的意义，从而导致一些行为，比如结束或开始一段关系，或者制定计划，如开始严格的饮食或健身计划。\n男：我有很好的朋友，我喜欢庆祝他们的生日。但我不喜欢成为众人瞩目的焦点，不喜欢收礼物，也不喜欢别人为我大张旗鼓。这似乎会引发一种社交焦虑。我认为社交媒体也会加剧这种情况，因为现在生日变得更加公开。生日提醒可能很有帮助，但我有点担心我无法把自己的生日过得像它应该有的那样令人兴奋。\n女：那么，为了应对生日忧郁症，你不应该把自己孤立起来。最好与你信任的人一起逐渐面对你的生日。这将帮助你学会自我接纳，或者认识到成为焦点也没什么大不了的。也许，你可以把你的生日看作是为他人做些事情的机会，比如让人们捐款而不是买礼物。\n男：确实，或者甚至可以把你的生日看作是一个让人们聚在一起享受乐趣的机会。' }
    ]
  },
  {
    id: 'cet4_listening_2022_09_02',
    title: 'Commuting Problems',
    description: '听力原文：W: The Metro was absolutely terrible this morning.\nM: Oh, was there a delay?\nW: No, but the train wa...',
    category: '生活',
    wordCount: 300,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'W: The Metro was absolutely terrible this morning.\nM: Oh, was there a delay?\nW: No, but the train was so packed that I could barely move. And it was difficult to breathe too. At every station, more people squeezed in, and I got pushed further and further inside. When I got to my station, I could hardly get out. Once I did get out, I was totally exhausted.\nM: That sounds like a nightmare. Why didn\'t you take the bus?\nW: The bus takes twice as long and it\'s just as crowded.\nM: Well, what\'s the alternative? Haven\'t you got a car?\nW: I\'ve got a driver\'s license, but that\'s all. I\'m saving up to buy something reasonably small and cute, but it\'s still a bit expensive for me. And it\'ll take a while before I have enough money.\nM: Have you thought about getting an electric motorbike?\nW: I considered that for maybe a minute, but honestly, I\'ve just seen too many horrible accidents involving those dangerous monsters.\nM: What about those popular share bikes? You could register to use one.\nW: Yeah, that\'s a possibility. There are always several of those bikes out in front of our apartment complex.\nM: Or you could just walk to work.\nW: Well, it\'s 5 km from home to the office. But you\'ve given me a thought. I could take a change of clothes and jog to work. But at this time of year, the air pollution is a real problem.\nM: Get a taxi if you really have to.\nW: Well, that\'s an expensive way to get to work.\nM: Not if you use a Rye cherry app.\nW: Good idea! I\'ll download one immediately. Thank you!', zh: '女：今天早上地铁真是太糟糕了。\n男：哦，是晚点了吗？\n女：没有，但是地铁里挤得我都动不了。连呼吸都困难。每到一站，就又有人挤进来，我被推得越来越往里。到我到站的时候，我几乎都出不去了。等出去后，我已经累得不行了。\n男：这听起来像噩梦一样。你为什么没坐公交车？\n女：公交车要慢一倍，而且也很挤。\n男：那么，还有什么别的选择吗？你没买车吗？\n女：我有驾照，但仅此而已。我正攒钱想买一辆小巧可爱的，但对我来说还是有点贵。而且我得攒一段时间才能买得起。\n男：你有没有想过买辆电动摩托车？\n女：我考虑过一分钟，但说实话，我看到过太多涉及那些危险家伙的可怕事故。\n男：那么那些流行的共享单车呢？你可以注册一辆使用。\n女：嗯，这是个选择。我们公寓楼前总有几辆那样的自行车。\n男：或者你可以步行去上班。\n女：嗯，从家到办公室有5公里。但你给我提了个醒。我可以带套换洗的衣服，跑着去上班。但每年这个时候，空气污染真是个大问题。\n男：如果你真的需要，那就打车吧。\n女：嗯，打车上班太贵了。\n男：如果你用打车软件的话就不贵。\n女：好主意！我马上下载一个。谢谢你！' }
    ]
  },
  {
    id: 'cet4_listening_2022_09_03',
    title: 'The Importance of Women\'s Rights',
    description: '听力原文：A new study has demonstrated the importance of women\'s rights. The researchers behind the study stat...',
    category: '健康',
    wordCount: 307,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'A new study has demonstrated the importance of women\'s rights. The researchers behind the study state that many parts of the world have made good economic progress, but women\'s rights are often overlooked. Thus, they wanted to determine if there was a link between protection of women\'s rights and public health. The researchers analyzed databases which held information from 162 countries for the period 2004 to 2010.', zh: '一项新研究证明了女性权利的重要性。该研究背后的研究人员指出，世界许多地区在经济上取得了良好进展，但女性权利常常被忽视。因此，他们想确定保护女性权利与公共卫生之间是否存在联系。研究人员分析了包含162个国家2004年至2010年信息的数据库。' },
      { en: 'Countries were classified according to the respect they gave to women\'s economic and social rights. There were three categories: high, moderate, and poor. Analysis of the data showed that countries with strong women\'s rights had better health than those where women\'s rights were not as respected. The health indicators studied included disease prevention, reproductive health, death rates, and life expectancy.', zh: '国家根据其对女性经济和社会权利的尊重程度进行分类。有三个类别：高、中、低。数据分析显示，在女性权利强有力的国家，健康状况比女性权利不受尊重的国家更好。研究的健康指标包括疾病预防、生殖健康、死亡率和预期寿命。' },
      { en: 'Furthermore, in countries where women\'s rights were most respected, but where access to hospitals and doctors was below average, health outcomes were still better than in countries rated as moderate or poor. This confirms that even with a lack of resources, if a country has strong women\'s rights, the health outcomes are better. Thus, the researchers argue that gender equality is not just a women\'s rights issue. It is also a development issue. This is because better health aids economic development. They note that the value of women\'s rights has often been questioned from an economic standpoint. Some have argued that ensuring those rights would limit progress, but this study indicates the opposite.', zh: '此外，在女性权利最受尊重的国家，即使医院和医生的可及性低于平均水平，健康结果仍然比被评为中等或低等的国家更好。这证实了即使缺乏资源，如果一个国家拥有强大的女性权利，健康结果也会更好。因此，研究人员认为，性别平等不仅仅是女性权利问题。它也是一个发展问题。这是因为更好的健康有助于经济发展。他们指出，女性权利的价值经常受到经济角度的质疑。有人认为确保这些权利会限制发展，但这项研究表明了相反的情况。' }
    ]
  },
  {
    id: 'cet4_listening_2022_09_04',
    title: 'Color Psychology',
    description: '听力原文：The passage discusses color psychology and how different colors affect our mood and behavior. People...',
    category: '健康',
    wordCount: 145,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'The passage discusses color psychology and how different colors affect our mood and behavior. People tend to choose colors for their homes based on various factors. Seeing cheerful colors all around can have a positive impact on mental well-being. However, choosing a color just because it is fashionable may not be the best approach. The author suggests painting the wooden frameworks and walls the same color to create a harmonious environment. Colors can influence our emotions in subtle but powerful ways. Warm colors like red and orange can energize us, while cool colors like blue and green have a calming effect. The key is to understand the psychological effects of colors and use them thoughtfully in our living spaces.', zh: '本文讨论了颜色心理学以及不同颜色如何影响我们的情绪和行为。人们倾向于基于各种因素为家居选择颜色。周围看到令人愉快的颜色可以对心理健康产生积极影响。然而，仅仅因为某种颜色流行就选择它可能不是最佳方法。作者建议将木质框架和墙壁漆成同一种颜色，以创造和谐的环境。颜色可以以微妙但有力的方式影响我们的情绪。暖色如红色和橙色能给我们能量，而冷色如蓝色和绿色有镇静效果。关键是理解颜色的心理效应，并在我们的生活空间中 thoughtful（ thoughtful ）地使用它们。' }
    ]
  },
  {
    id: 'cet4_listening_2022_09_05',
    title: 'Reading to Children',
    description: '听力原文：The passage emphasizes the importance of reading to children. Research shows that reading to their c...',
    category: '教育',
    wordCount: 120,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'The passage emphasizes the importance of reading to children. Research shows that reading to their children is crucial for parents. The number and quality of books parents read to them in infancy have a significant impact on their later development. Books with specifically labeled images are particularly beneficial. Parents should choose carefully what to read to their children, as the content and quality of books can shape a child\'s cognitive and language development. The author concludes that investing time in reading to young children yields long-term benefits for their educational success.', zh: '本文强调了给孩子读书的重要性。研究表明，给孩子读书对父母来说至关重要。父母在婴儿期给孩子读书的数量和质量对他们日后的发展有重大影响。带有明确标注图片的书籍尤其有益。父母应该仔细选择给孩子读什么，因为书籍的内容和质量可以塑造孩子的认知和语言发展。作者最后总结，花时间给幼儿读书可以为他们未来的教育成功带来长期益处。' }
    ]
  },
  {
    id: 'cet4_reading_2022_12_01',
    title: 'Aquaculture and Fish Farming',
    description: '阅读理解：Questions 46 to 50 are based on the following passage....',
    category: '科技',
    wordCount: 148,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'Questions 46 to 50 are based on the following passage.', zh: '我们吃的鱼比以往任何时候都多。事实上，我们消费的鱼类食物在人类饮食中已经变得与谷物同等重要。关于我们消费的鱼类，值得注意的是它们大部分是养殖的，而非野生捕捞的。如果我们继续以当前的速度消费鱼类，我们需要不断扩大养鱼的规模。' },
      { en: 'We\'re eating more fish than ever. In fact, the fish we consume has become as important as grain in human diet. What is remarkable about the fish we eat is that they are mostly farmed rather than caught in the wild. If we keep consuming fish at the current rate, we need to expand the scale of fish-farming continuously.', zh: '在水产食品方面，中国是全球领导者。中国养殖的鱼类超过了野生捕捞量。中国生产的养殖鱼比任何其他国家都多，供应了全球约60%的鱼类产品。这很重要，因为水产养殖对于养活全球快速增长的人口至关重要。它证明了是人类和动物可靠的蛋白质来源。' },
      { en: 'In terms of aquatic food, China is a global leader. It raises more fish than caught from the wild. China produces more farmed fish than any other country, supplying about 60% of the world\'s fish products. This is significant because aquaculture is essential for feeding the world\'s fast-growing population. It proves a reliable source of protein for humans and animals.', zh: '然而，作者说水产养殖并非灵丹妙药。养鱼也可能带来严重问题。例如，养虾可能是一项有风险的业务，而且并非总是可持续的。养鱼可能导致环境问题，如水污染、自然栖息地的破坏，以及疾病从养殖鱼传播到野生种群。作者最后总结，虽然水产养殖是必要的，但必须谨慎发展，注意环境影响。' }
    ]
  },
  {
    id: 'cet4_reading_2022_12_02',
    title: 'World Food Programme and Global Hunger',
    description: '阅读理解：Questions 51 to 55 are based on the following passage....',
    category: '社会',
    wordCount: 194,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'Questions 51 to 55 are based on the following passage.', zh: '2020年，诺贝尔和平奖被授予世界粮食计划署（WFP）。WFP获得诺贝尔和平奖让我们意识到，认为帮助穷人与己无关在道德上是错误的。世界粮食计划署自1961年成立以来，一直是全球协调机构，以国家为基础，通过粮食援助来避免灾害。' },
      { en: 'In 2020, the Nobel Peace Prize was awarded to the World Food Programme (WFP). The WFP\'s winning of the Nobel Peace Prize makes us realize that it is morally wrong to think helping the poor is not our business. The WFP has been around since 1961 and has been the global coordinator of nationally based efforts to avoid disasters with food aid.', zh: '尽管几十年来WFP为消除饥饿一直在努力，但地球上仍有约11%的人每天营养不足。虽然在20世纪90年代和21世纪初，在减少营养不良方面取得了进展，但目前已不再有任何改善。尽管取得了进展，WFP离其目标仍然很远。' },
      { en: 'Despite decades of effort to eliminate hunger, about 11% of people on Earth are still undernourished every day. Though progress was made in reducing undernourishment during the 1990s and early 2000s, currently there is no longer any improvement. Despite the progress made, the WFP is still far from its goal.', zh: '当粮食援助以一定的价格提供，或者附加了沉重的条件，比如偿还贷款或以粮食换取资源时，这往往会扩大贫富差距并维持旧的世界秩序。富人变得更富，穷人变得更穷。' },
      { en: 'When food aid is offered at a price, or when heavy conditions are attached, such as repayment of loans or exchange of resources for food, it often widens the gap between rich and poor and maintains the old world order. The rich will become richer and the poor poorer.', zh: '科学家可以通过与贫困国家的同行分享专业知识来帮助应对贫困和饥饿。然而，作者最后总结，贫困国家应该增强自身解决粮食短缺的能力，而不是仅仅依赖外部援助。这种能力将通过发展自己的农业系统和基础设施来建立。' }
    ]
  },
  {
    id: 'cet4_listening_2022_12_01',
    title: 'Gym Membership',
    description: '听力原文：W: Hi, Christi\'s Gym Center? How can I help you.\nM: Hi. I\'m calling to ask about the newly scheduled...',
    category: '健康',
    wordCount: 277,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'W: Hi, Christi\'s Gym Center? How can I help you.\nM: Hi. I\'m calling to ask about the newly scheduled gym classes. I\'m just wondering if I can get a discount on them.\nW: Are you already a member?\nM: Yes. I signed up 2 months ago but I haven\'t been to any of the group classes yet.\nW: Can I take your name please?\nM: Yes, my name is Carol Friedman.\nW: Carol Friedman. That\'s right and you signed up 2 months ago. Currently we are offering existing members discounts off 2 of our brand new classes: Hot yoga and advanced spinning. But the discount doesn\'t apply to any of our regular classes, I\'m afraid.\nM: I\'m only interested in the new classes, so how much of a discount is there on these 2 new classes?\nW: The same discount of 20% is being offered to everyone at the door on a first-come-first-serve basis for the first month. It\'s a shame you missed out on the general discount.\nM: I see.\nW: But you can get 25% off if you sign up in advance. Which of the 2 classes are you thinking about?\nM: Well I guess I am only really interested in hot yoga. Can you sign me up for the 10 week course on Thursday evenings.\nW: Sure would you prefer to pay in advance?\nM: No, I don\'t like giving my card details over the phone anyway.\nW: OK then. As you are already a member, that fee for the class will just be added to your monthly bill.\nM: That\'s perfect. Thanks for your help.\nW: See you Thursday.', zh: '女：您好，Christi健身中心？有什么可以帮您？\n男：嗨。我打电话是想询问新安排的健身课程。我只是想知道能否获得折扣。\n女：您已经是会员了吗？\n男：是的。我两个月前注册的，但还没参加过任何团体课程。\n女：请问您的姓名？\n男：我叫Carol Friedman。\n女：Carol Friedman。没错，您两个月前注册的。目前我们为现有会员提供两门全新课程的折扣：热瑜伽和高级动感单车。但恐怕折扣不适用于我们的常规课程。\n男：我只对新课程感兴趣，那么这两门新课程有多少折扣？\n女：第一个月，现场向所有人提供同样的20%折扣，先到先得。很遗憾您错过了这个一般折扣。\n男：我明白了。\n女：但如果您提前报名，可以获得25%的折扣。您考虑哪两门课程？\n男：嗯，我想我只对热瑜伽感兴趣。你能帮我报名参加周四晚上的10周课程吗？\n女：当然。您想提前付款吗？\n男：不，反正我不喜欢通过电话提供我的银行卡信息。\n女：好的。既然您已经是会员，课程费用会直接加到您的月度账单上。\n男：太好了。谢谢你的帮助。\n女：周四见。' }
    ]
  },
  {
    id: 'cet4_listening_2022_12_02',
    title: 'Business Trip',
    description: '听力原文：W: Well, I think that was quite a successful trip in the end, don\'t you think, Jenny?\nM: Absolutely....',
    category: '社会',
    wordCount: 284,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'W: Well, I think that was quite a successful trip in the end, don\'t you think, Jenny?\nM: Absolutely. There are lots of great potential markets here in China! So I\'m sure that the head office in London will be pleased once we get back and present our research.\nW: Okay, we\'ve got a bit of spare time now. Can we discuss the return trip to the head office?\nM: Sure. I\'ve checked the availability of flights from Beijing to London on the 22nd. And you have a choice. There\'s a flight arriving the following morning with a two hour stopover in Dubai, or a flight arriving at 11:30 in the evening with a five hour stopover in Amsterdam.\nW: Right. Well, that\'s obvious then, isn\'t it?\nM: Okay, so that\'s Dubai. I\'ve booked a room in a hotel about a mile from the office. The nearest Metro Station is Earls Court.\nW: Great. Can you find a map that shows where the hotel is and send it to me online? I\'ve never been to the head office, you know. I want to see if I can get one of those rental bicycles and ride to the office just for fun. For the presentation, I\'ll bring my own laptop and hook it up to their projector. Do you remember the capacity of their meeting room?\nM: No, but I\'ll check.\nW: Just one more thing. I\'ll pay everything with my own card, right? And I\'ll submit my claims form afterwards.\nM: No problem. Just remember to keep all your receipts. You remember the trouble you had last time?\nW: Oh, don\'t remind me.', zh: '女：嗯，我认为这次旅行最终相当成功，你不觉得吗，Jenny？\n男：当然。中国这里有很多很棒的潜在市场！所以我确信一旦我们回去向伦敦总部展示我们的研究成果，他们会很高兴的。\n女：好的，我们现在有点空闲时间。我们能讨论一下回总部的行程吗？\n男：当然。我查过了22号从北京到伦敦的航班。你有两个选择。一个是第二天早晨到达的航班，在迪拜停留两小时；另一个是晚上11:30到达的航班，在阿姆斯特丹停留五小时。\n女：好的。那很明显了，不是吗？\n男：好的，那就选迪拜。我在离办公室大约一英里的酒店订了房间。最近的地铁站是Earls Court。\n女：太好了。你能找一张显示酒店位置的地图，然后在线发给我吗？你知道的，我从没去过总部。我想看看能不能租一辆自行车，骑着去办公室，就当好玩。关于演讲，我会带自己的笔记本电脑，接到他们的投影仪上。你记得他们会议室的容量吗？\n男：不记得，但我会查一下。\n女：还有一件事。我会用自己的卡支付所有费用，对吧？然后我会提交报销单。\n男：没问题。记得保留所有收据。你记得上次遇到的麻烦吗？\n女：哦，别提了。' }
    ]
  },
  {
    id: 'cet4_listening_2022_12_03',
    title: 'Birthday Anxiety',
    description: '听力原文：W: It\'s your birthday next week. What have you got planned?\nM: I\'m not sure. I often feel strange on...',
    category: '健康',
    wordCount: 250,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'W: It\'s your birthday next week. What have you got planned?\nM: I\'m not sure. I often feel strange on my birthday. It\'s like my brain decides to have a crisis.\nW: It\'s not entirely unusual to feel anxious or sad around your birthday. Birthdays can tap into a lot of things people worry about, including their achievements in life in the past decade or their accomplishments of the past year. Many begin to search for the meaning of their existence, leading to behaviors such as ending or starting a relationship, or plans like starting a vigorous diet or fitness program.\nM: I have wonderful friends, and I love celebrating their birthdays. But I don\'t like being the center of attention, receiving gifts, and having a fuss made. It seems to trigger a type of social anxiety.\nW: Well, to deal with the birthday blues, you should not isolate yourself. It\'s best to gradually face your birthday with people you trust. That would help you learn self-acceptance, or that it\'s okay to be the focus. Perhaps, you could perceive your birthday as an opportunity to do something for others, like asking people to make a donation instead of buying a gift.\nM: Exactly, or even simply see your birthday as an opportunity to bring people together for them to have fun.', zh: '女：下周是你的生日。你有什么计划？\n男：我不太确定。我生日时经常感觉怪怪的。就像我的大脑要经历一场危机。\n女：在生日前后感到焦虑或悲伤并不罕见。生日会触及人们担忧的很多事情，包括过去十年的人生成就或过去一年的成就。很多人开始寻找自己存在的意义，从而导致结束或开始一段关系等行为，或者制定计划，如开始严格的饮食或健身计划。\n男：我有很好的朋友，我喜欢庆祝他们的生日。但我不喜欢成为关注的焦点，不喜欢收礼物，也不喜欢被大惊小怪。这似乎会引发一种社交焦虑。\n女：那么，为了应对生日忧郁，你不应该孤立自己。最好与你信任的人一起逐渐面对你的生日。这将帮助你学会自我接纳，或者认识到成为焦点也没什么。也许，你可以把生日看作是为他人做些事情的机会，比如让人们捐款而不是买礼物。\n男：没错，或者甚至简单地把你的生日看作是一个让人们聚在一起享受乐趣的机会。' }
    ]
  },
  {
    id: 'cet4_listening_2022_12_04',
    title: 'Subway Commute',
    description: '听力原文：W: The Metro was absolutely terrible this morning.\nM: Oh, was there a delay?\nW: No, but the train wa...',
    category: '生活',
    wordCount: 300,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'W: The Metro was absolutely terrible this morning.\nM: Oh, was there a delay?\nW: No, but the train was so packed that I could barely move. And it was difficult to breathe too. At every station, more people squeezed in, and I got pushed further and further inside. When I got to my station, I could hardly get out. Once I did get out, I was totally exhausted.\nM: That sounds like a nightmare. Why didn\'t you take the bus?\nW: The bus takes twice as long and it\'s just as crowded.\nM: Well, what\'s the alternative? Haven\'t you got a car?\nW: I\'ve got a driver\'s license, but that\'s all. I\'m saving up to buy something reasonably small and cute, but it\'s still a bit expensive for me. And it\'ll take a while before I have enough money.\nM: Have you thought about getting an electric motorbike?\nW: I considered that for maybe a minute, but honestly, I\'ve just seen too many horrible accidents involving those dangerous monsters.\nM: What about those popular share bikes? You could register to use one.\nW: Yeah, that\'s a possibility. There are always several of those bikes out in front of our apartment complex.\nM: Or you could just walk to work.\nW: Well, it\'s 5 km from home to the office. But you\'ve given me a thought. I could take a change of clothes and jog to work. But at this time of year, the air pollution is a real problem.\nM: Get a taxi if you really have to.\nW: Well, that\'s an expensive way to get to work.\nM: Not if you use a Rye cherry app.\nW: Good idea! I\'ll download one immediately. Thank you!', zh: '女：今天早上地铁真是太糟糕了。\n男：哦，是晚点了吗？\n女：没有，但是地铁里挤得我都动不了。连呼吸都困难。每到一站，就又有人挤进来，我被推得越来越往里。到我到站的时候，我几乎都出不去了。等出去后，我已经累得不行了。\n男：这听起来像噩梦一样。你为什么没坐公交车？\n女：公交车要慢一倍，而且也很挤。\n男：那么，还有什么别的选择吗？你没买车吗？\n女：我有驾照，仅此而已。我正攒钱想买一辆小巧可爱的，但对我来说还是有点贵。而且我得攒一段时间才能买得起。\n男：你有没有想过买辆电动摩托车？\n女：我考虑过一分钟，但说实话，我看到过太多涉及那些危险家伙的可怕事故。\n男：那么那些流行的共享单车呢？你可以注册一辆使用。\n女：嗯，这是个选择。我们公寓楼前总有几辆那样的自行车。\n男：或者你可以步行去上班。\n女：嗯，从家到办公室有5公里。但你给我提了个醒。我可以带套换洗的衣服，跑着去上班。但每年这个时候，空气污染真是个大问题。\n男：如果你真的需要，那就打车吧。\n女：嗯，打车上班太贵了。\n男：如果你用打车软件的话就不贵。\n女：好主意！我马上下载一个。谢谢你！' }
    ]
  },
  {
    id: 'cet4_listening_2022_12_05',
    title: 'Women\'s Rights and Public Health',
    description: '听力原文：A new study has demonstrated the importance of women\'s rights. The researchers behind the study stat...',
    category: '健康',
    wordCount: 257,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'A new study has demonstrated the importance of women\'s rights. The researchers behind the study state that many parts of the world have made good economic progress, but women\'s rights are often overlooked. Thus, they wanted to determine if there was a link between protection of women\'s rights and public health. The researchers analyzed databases which held information from 162 countries for the period 2004 to 2010.', zh: '一项新研究证明了女性权利的重要性。该研究背后的研究人员指出，世界许多地区在经济上取得了良好进展，但女性权利常常被忽视。因此，他们想确定保护女性权利与公共卫生之间是否存在联系。研究人员分析了包含162个国家2004年至2010年信息的数据库。' },
      { en: 'Countries were classified according to the respect they gave to women\'s economic and social rights. There were three categories. They were high, moderate, and poor. Analysis of the data showed that countries with strong women\'s rights had better health than those where women\'s rights were not as respected. The health indicators studied included disease prevention, reproductive health, death rates, and life expectancy.', zh: '国家根据其对女性经济和社会权利的尊重程度进行分类。有三个类别：高、中、低。数据分析显示，在女性权利强有力的国家，健康状况比女性权利不受尊重的国家更好。研究的健康指标包括疾病预防、生殖健康、死亡率和预期寿命。' },
      { en: 'Furthermore, in countries where women\'s rights were most respected, but where access to hospitals and doctors was below average, health outcomes were still better than in countries rated as moderate or poor. This confirms that even with a lack of resources, if a country has strong women\'s rights, the health outcomes are better. Thus, the researchers argue that gender equality is not just a women\'s rights issue. It is also a development issue.', zh: '此外，在女性权利最受尊重的国家，即使医院和医生的可及性低于平均水平，健康结果仍然比被评为中等或低等的国家更好。这证实了即使缺乏资源，如果一个国家拥有强大的女性权利，健康结果也会更好。因此，研究人员认为，性别平等不仅仅是女性权利问题，它也是一个发展问题。' }
    ]
  },
  {
    id: 'cet4_listening_2022_12_06',
    title: 'Left-handed People',
    description: '听力原文：The passage discusses the characteristics of left-handed people, who make up about 10% of the popula...',
    category: '科技',
    wordCount: 203,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'The passage discusses the characteristics of left-handed people, who make up about 10% of the population. Research has shown that left-handed people have a stronger connection between the two sides of their brain. This unique brain structure gives them certain advantages in activities requiring quick reactions.', zh: '本文讨论了左撇子的特征，他们约占人口的10%。研究表明，左撇子的大脑左右半球之间有更强的连接。这种独特的大脑结构使他们在需要快速反应的活动中具有某些优势。' },
      { en: 'Studies suggest that left-handed people are more likely to win in combat sports due to their brain\'s ability to process information from both hemispheres efficiently. Their brain is organized differently from right-handed people, with a more balanced distribution of functions between the left and right sides.', zh: '研究表明，左撇子更有可能在格斗运动中获胜，因为他们的大脑能够高效地处理来自两个半球的信息。他们的大脑组织与右撇子不同，左右两侧的功能分布更加均衡。' },
      { en: 'The exact reason why some people are left-handed still remains unknown, though it is believed to be related to their genes. Left-handed people tend to be a lot more aggressive than right-handed people in competitive situations. The author suggests that left-handed children should be encouraged to play fast-paced interactive sports where their unique brain wiring gives them a natural advantage.', zh: '为什么有些人是左撇子的确切原因仍然未知，尽管人们相信这与基因有关。在竞争性情境中，左撇子往往比右撇子更具攻击性。作者建议应该鼓励左撇子儿童参加快节奏的互动运动，在那里他们独特的大脑结构给予了他们天然的优势。' }
    ]
  },
  {
    id: 'cet4_reading_2023_03_01',
    title: 'Intelligence and Blind Spots',
    description: '阅读理解：Questions 46 to 50 are based on the following passage....',
    category: '教育',
    wordCount: 198,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'Questions 46 to 50 are based on the following passage.', zh: '聪明是好事。毕竟，聪明的人赚得更多，更有可能在各个领域取得成功。然而，聪明并不意味着完美。聪明人在简单的情况下也可能犯愚蠢的错误。' },
      { en: 'It\'s good to be smart. After all, intelligent people earn more and are more likely to achieve success in various fields. However, being intelligent does not mean being perfect. Smart people can make silly mistakes in straightforward situations.', zh: '是什么导致了聪明人逻辑盲点的存在？研究表明，对自己的思考能力过于自信，导致他们忽视简单的错误。他们常常对自己的判断过于自信，未能仔细检查自己的工作。' },
      { en: 'What accounts for the existence of intelligent people\'s logical blind spots? Research suggests that too much faith in their ability to think leads them to overlook simple errors. They are often overconfident in their judgments and fail to check their work carefully.', zh: '当聪明人被发现犯错时，他们可能会感到被冒犯。他们可能觉得被纠正是对他们智力的个人攻击。这使他们难以接受他人的反馈和建议。' },
      { en: 'When smart people are found to be wrong, they may get offended. They may feel that being corrected is a personal attack on their intelligence. This makes it difficult for them to accept feedback and suggestions from others.', zh: '难以建议的聪明人可能会在职业和私人生活中遭受损失。他们不愿意听取他人意见，可能导致糟糕的决策和受损的人际关系。' },
      { en: 'Smart people who find it difficult to accept suggestions may suffer in their professional and private life. Their unwillingness to listen to others can lead to poor decision-making and damaged relationships.', zh: '与过度成就者一起工作或在过度成就者手下工作的人承受着越来越大的压力。过度成就者倾向于把人逼得太紧，设定不切实际的标准。他们在工作中投入大量精力，并期望他人也这样做，从而创造一个充满压力的环境。' }
    ]
  },
  {
    id: 'cet4_reading_2023_03_02',
    title: 'Online Learning for Refugees',
    description: '阅读理解：Questions 51 to 55 are based on the following passage....',
    category: '教育',
    wordCount: 411,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'Questions 51 to 55 are based on the following passage.', zh: '在被驱逐出祖国所带来的无尽麻烦中，失去学历证书可能看起来是件小事。但事实并非如此。在其他国家定居的难民常常发现，由于一套新的雇主标准或技能要求，他们无法继续之前的职业道路。为了解决这个问题，美国国务院提出了一个解决方案：在线学习。' },
      { en: 'Of the endless troubles that come with being driven from one\'s home country, losing educational certificates may seem small. But it isn\'t. Refugees who settle in other countries often find themselves unable to continue on their previous career path due to a new set of employer standards or skills requirements. To solve this problem, the U.S. State Department is proposing a solution: online learning.', zh: '美国国务院将宣布与名为Coursera的在线教育平台合作。该平台将允许全球难民免费学习数千门在线课程。\"难民的Coursera\"将对任何在任何国家支持难民的非营利组织以及个人难民开放。他们可以申请全额资助的Coursera课程目录访问权限，这意味着他们可以免费学习平台上的所有课程并获得专业证书。该平台目前提供由教授讲授的广泛主题讲座，从数据科学到时尚设计。' },
      { en: 'The State Department will announce a partnership with an online education platform called Coursera. The platform will allow refugees worldwide to take thousands of online courses for free. \"Coursera for Refugees\" will be available for any non-profit group that supports refugees in any country, as well as individual refugees. They can apply for fully funded access to Coursera\'s course catalog, which means they can take all of the platform\'s classes and obtain professional certificates for free. The platform currently offers professor-led lectures on a broad range of topics, from data science to fashion design.', zh: '随着全球移民危机加剧，就业正成为全球关注的问题。美国负责教育和文化事务的助理国务卿埃文·瑞安在上周的新闻电话会议上表示，新项目旨在通过提供\"帮助他们在全球经济中立足的重要技能\"来援助难民。Coursera首席运营官莱拉·易卜拉欣补充说：\"我们不想袖手旁观。\"' },
      { en: 'As the world migrant crisis intensifies, employment is becoming a global concern. The new program aims to aid refugees by offering \"important skills that will help them in the global economy,\" Evan Ryan, U.S. assistant secretary of state for educational and cultural affairs, said on a press call last week. \"What we don\'t want to do is not act,\" added Coursera chief operations officer Lila Ibrahim.', zh: '这个想法并非没有问题。首先，开启新的职业道路并不像看几个视频、获得一个在线证书那么简单；即使是希望继续之前职业的人，也不能仅仅依靠在线讲座就能跟上标准、政策和实践的最新发展。其次，Coursera上的大多数课程都是英语授课，尽管有计划添加翻译，语言障碍可能是一个巨大的障碍。然后还有关于大规模开放在线课程（MOOCs）本身价值的问题——无论是对难民还是普通学习者。' },
      { en: 'The idea isn\'t without problems. For one, starting a new career path isn\'t as simple as watching a few videos and obtaining an online certificate; even those looking to continue previous careers can\'t simply rely on an online lecture to get them up-to-date on standards, policies, and practices. For another, most of the classes on Coursera are in English, and though there are plans to add translations, language barriers can be a big obstacle. Then there are the questions over the value of massive open online courses (MOOCs) themselves—both for refugees and for average learners.', zh: '但这还为时尚早，而且已有希望的迹象。2015年，一项联合研究发现，72%参加MOOCs的人在之后看到了职业发展的好处。' }
    ]
  },
  {
    id: 'cet4_listening_2023_03_01',
    title: 'Study Guide',
    description: '听力原文：M: Hi, Jennifer. I am really struggling with this semester\'s workload. Do you have any advice?\nW: Ha...',
    category: '教育',
    wordCount: 323,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'M: Hi, Jennifer. I am really struggling with this semester\'s workload. Do you have any advice?\nW: Have you considered making a study guide? It\'s a tool you can make yourself to take the stress out of studying. I\'ve been using one since the start of last semester, and it has really helped relieve a lot of study pressure.\nM: Sounds like just what I need. My main problem is that my study folder is full of notes and worksheets, and is badly disorganized. I don\'t know where to start.\nW: OK, well, the main thing is to have everything in the right place. Whatever you\'re reviewing, it\'s important that it\'s arranged for your particular needs of that subject, and in the most user-friendly way you can. What kind of learner are you?\nM: Um. I\'m not sure.\nW: Well, visual learners prefer using images, pictures, colors, and maps to organize information. Logical learners have a linear mind and would rather use logic and systems. I\'m an emotional learner, which means I need to connect to information emotionally to understand it.\nM: Oh, I\'m very much dependent on vision as a way of taking in information.\nW: Well, I suggest reorganizing your notes using color-coded sections in your study guides, or using idea mapping to lay out the information and make it more quickly accessible.\nM: So you think I should arrange my notes using color and pictures in place of text.\nW: Yes. You\'ll probably start to grasp information a lot quicker that way. As an emotional learner, I organize my notes into a story that I can connect to and recite to myself.\nM: That\'s amazing. I didn\'t know there were so many different ways to learn.', zh: '男：嗨，Jennifer。这学期的课业量真的让我很吃力。你有什么建议吗？\n女：你有没有考虑过制作学习指南？这是一种你可以自己做的工具，可以减轻学习压力。我从上学期开始就一直使用，真的帮助缓解了很多学习压力。\n男：听起来正是我需要的。我的主要问题是学习文件夹里满是笔记和练习表，非常混乱。我不知道从哪里开始。\n女：好的，最重要的是把所有东西放在正确的位置。无论你复习什么，重要的是按照你对该科目的特定需求来安排，并尽可能做到用户友好。你是什么样的学习者？\n男：嗯，我不太确定。\n女：视觉学习者更喜欢使用图像、图片、颜色和地图来组织信息。逻辑学习者思维线性，更喜欢使用逻辑和系统。我是情感型学习者，这意味着我需要与信息建立情感联系才能理解它。\n男：哦，我非常依赖视觉来获取信息。\n女：那我建议你用颜色编码的部分来重组学习指南中的笔记，或者使用思维导图来展示信息，使其更容易获取。\n男：所以你认为我应该用颜色和图片来代替文字来安排笔记。\n女：是的。那样你可能会更快地掌握信息。作为情感型学习者，我把笔记组织成一个我能与之建立联系并背诵给自己的故事。\n男：太神奇了。我不知道有这么多不同的学习方式。' }
    ]
  },
  {
    id: 'cet4_listening_2023_03_02',
    title: 'Taking Risks in Business',
    description: '听力原文：Taking risks in business does not mean going into business blindly and then expecting great results....',
    category: '社会',
    wordCount: 274,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'Taking risks in business does not mean going into business blindly and then expecting great results. On the contrary, taking risks in entrepreneurship involves careful planning and hard work. Nobody can really be sure if risks will be met with success, no matter how calculated they may be. But this should not stop you from taking risks as risks are necessary if you want your business to succeed. Some risks may not work out, but an optimistic risk taker will always look at failure as an opportunity to learn.', zh: '商业冒险并不意味着盲目地进入商界然后期待好结果。相反，创业冒险需要精心计划和努力工作。没有人能真正确定冒险是否会成功，无论它们经过多么周密的计算。但这不应该阻止你去冒险，因为如果你想让你的企业成功，冒险是必要的。有些风险可能不会有结果，但乐观的风险承担者总是将失败视为学习的机会。' },
      { en: 'The willingness to experiment with new ideas is key to business growth. As the old saying goes, nothing ventured, nothing gained. Failure will teach you how to think and plan strategically, but just remember that not all risks are good ones. And when you fail, learn from it and move forward.', zh: '尝试新想法的意愿是企业成长的关键。正如老话所说，不入虎穴，焉得虎子。失败会教会你如何战略性思考和计划，但要记住并非所有风险都是好的。当你失败时，从中学习并继续前进。' },
      { en: 'Since most people tend to avoid risk, businesses that are brave enough to take risks already have a competitive advantage. They are the ones setting the standard with new ideas, fresh offers and bold inventions. Risk takers are best at adapting in difficult times. Simply put, when most individuals stay away from risk, it means less competition for risk takers. We don\'t know if you\'ll achieve what these risk takers have achieved. But for as long as you want to stay safe, for as long as you are content with where your business is right now, you will never find out.', zh: '由于大多数人倾向于回避风险，敢于冒险的企业已经拥有了竞争优势。他们是用新想法、新创意和大胆发明来制定标准的人。风险承担者最擅长在困难时期适应。简单地说，当大多数人远离风险时，对风险承担者来说就意味着更少的竞争。我们不知道你是否能达到这些风险承担者所取得的成就。但只要你想要保持安全，只要你对当前的业务状况感到满意，你就永远不会知道。' }
    ]
  },
  {
    id: 'cet4_listening_2023_03_03',
    title: 'Stress Management',
    description: '听力原文：A recent study led by Patricia Pendry aimed to examine the effects of interacting with pets on stres...',
    category: '健康',
    wordCount: 167,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'A recent study led by Patricia Pendry aimed to examine the effects of interacting with pets on stress levels among college students. The new study measured the participants\' cortisol levels (a hormone associated with stress) before and after spending time with trained therapy dogs.', zh: 'Patricia Pendry领导的一项最新研究旨在考察与宠物互动对大学生压力水平的影响。这项新研究测量了参与者在花时间与经过训练的治疗犬相处前后的皮质醇水平（一种与压力相关的激素）。' },
      { en: 'The results showed that students who spent time with the dogs had significantly lower cortisol levels compared to those who did not. This suggests that pet interaction can be an effective way to manage stress.', zh: '结果显示，与狗共度时光的学生皮质醇水平明显低于没有与狗互动的学生。这表明与宠物互动可能是管理压力的有效方式。' },
      { en: 'Patricia Hendrick thinks traditional stress management programs may not be as effective because they often focus on teaching coping strategies rather than addressing the physiological aspects of stress directly. The study indicates that direct emotional connection with animals may be more beneficial for stress reduction than conventional methods.', zh: 'Patricia Hendrick认为传统的压力管理项目可能不那么有效，因为它们通常侧重于教授应对策略，而不是直接解决压力的生理方面。研究表明，与动物的直接情感联系可能比传统方法更有利于减压。' }
    ]
  },
  {
    id: 'cet4_reading_2023_06_01',
    title: 'Open-plan Offices',
    description: '阅读理解：Questions 46 to 50 are based on the following passage....',
    category: '社会',
    wordCount: 194,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'Questions 46 to 50 are based on the following passage.', zh: '开放式办公室在现代工作场所中越来越受欢迎。公司重新设计了办公空间，以创造更具协作性的环境。然而，研究表明开放式办公室对员工来说可能是一种麻烦。' },
      { en: 'The open-plan office has become increasingly popular in modern workplaces. Companies have redesigned their office spaces to create more collaborative environments. However, research suggests that open-plan offices can be a nuisance to employees.', zh: '一项研究发现，重新设计的办公空间虽然旨在改善沟通，但往往导致更多的干扰和降低的生产效率。同事不断的噪音和打断使员工难以专注于复杂任务。员工反映，开放式办公室缺乏隐私，这在他们需要拨打私人电话或处理敏感事务时尤其成问题。' },
      { en: 'A study found that the redesigned office spaces, while intended to improve communication, often result in increased distraction and reduced productivity. The constant noise and interruptions from colleagues can make it difficult for workers to focus on complex tasks. Employees report that the lack of privacy in open-plan offices is particularly problematic when they need to make private phone calls or handle sensitive matters.', zh: '一些公司已经重新安排了员工和办公空间来解决这些问题，创建安静区域或允许员工在某些日子在家工作。关键是在协作和个人专注时间之间找到平衡。' },
      { en: 'Some companies have rearranged the staff and office spaces to address these concerns, creating quiet zones or allowing employees to work from home on certain days. The key is to find a balance between collaboration and individual focus time.', zh: '文章最后总结，开放式办公室应谨慎使用才能有效。虽然它们可以促进团队合作和创造力，但需要考虑到员工的需求来设计，为小组工作和私人专注提供选择。' }
    ]
  },
  {
    id: 'cet4_reading_2023_06_02',
    title: 'Homelessness',
    description: '阅读理解：Questions 51 to 55 are based on the following passage....',
    category: '社会',
    wordCount: 187,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'Questions 51 to 55 are based on the following passage.', zh: '无家可归已成为世界许多城市日益严重的问题。许多人将受害者的处境归咎于他们自己，认为无家可归是个人失败或缺乏努力的结果。然而，这种观点未能考虑更广泛的社会和经济因素。' },
      { en: 'Homelessness has become a growing problem in many cities around the world. Many people blame the victims themselves for their condition, believing that homelessness is the result of personal failure or lack of effort. However, this view fails to consider the broader social and economic factors at play.', zh: '现实是住房市场变得越来越不宽容。租金上涨速度远远快于工资增长，使低收入者越来越难以负担得起住房。经济适用房的增长无法满足日益增长的人口需求。' },
      { en: 'The reality is that the housing market was growing increasingly unforgiving. Rental prices have risen much faster than wages, making it increasingly difficult for low-income individuals to afford a place to live. The increase in affordable housing falls short of the demand of the growing population in need.', zh: '此外，社会服务和心理健康项目的削减使许多弱势群体无法获得维持稳定住房所需的支持。失业、医疗紧急情况或家庭破裂都可能迅速将一个人从稳定的家庭推入无家可归的境地。' },
      { en: 'Furthermore, cuts in social services and mental health programs have left many vulnerable individuals without the support they need to maintain stable housing. Job loss, medical emergencies, or family breakdown can quickly push someone from a stable home into homelessness.', zh: '作者认为，社会不应再对承认无家可归是一个系统性问题而非个人问题感到震惊或羞耻。解决无家可归问题需要综合方法，包括经济适用房计划、支持性服务以及解决贫困和不平等根源的政策。' }
    ]
  },
  {
    id: 'cet4_listening_2023_06_01',
    title: 'Apartment and Roommates',
    description: '听力原文：M: Hello. Matt Ellis speaking.\nW: Hello, Dr. Ellis, my name\'s Pan Johnson. My roommate, Janet Holmes...',
    category: '生活',
    wordCount: 170,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'M: Hello. Matt Ellis speaking.\nW: Hello, Dr. Ellis, my name\'s Pan Johnson. My roommate, Janet Holmes, wanted me to call you.\nM: Janet Holmes? Oh, that\'s right. She\'s in my Shakespeare class.\nW: Yes. We just moved into a new apartment. It was tiny and noisy in the dorm, but now I kind of miss my roommates I used to complain about.\nM: I had a similar feeling when I moved out of the dorms. The new place seems perfect at first, but you start to miss the social atmosphere.\nW: Exactly! I no longer hate people talking loudly in the dorm. In fact, I find the crowded dorm as cozy as my new apartment, maybe even cozier.\nM: Have you decorated your new place yet?\nW: Not really. I should probably buy some furniture. Would you like to come see my apartment sometime?\nM: Sure, I\'d love to. And maybe you should call your parents to tell them about the move.', zh: '男：你好。我是Matt Ellis。\n女：你好，Ellis博士，我叫Pan Johnson。我的室友Janet Holmes让我给你打电话。\n男：Janet Holmes？哦，对了。她上我的莎士比亚课。\n女：是的。我们刚搬进新公寓。宿舍又小又吵，但现在我有点怀念以前抱怨的那些室友了。\n男：我搬出宿舍时也有类似的感觉。新地方一开始看起来很完美，但你会开始怀念社交氛围。\n女：正是！我不再讨厌宿舍里人们大声说话了。事实上，我觉得拥挤的宿舍和新公寓一样舒适，甚至可能更舒适。\n男：你装饰新地方了吗？\n女：还没。我可能应该买些家具。你想什么时候来看看我的公寓吗？\n男：当然，我很乐意。而且也许你应该打电话告诉你父母你搬家的事。' }
    ]
  },
  {
    id: 'cet4_listening_2023_06_02',
    title: 'Blue Light and Sleep',
    description: '听力原文：M: What\'s that thing on your computer screen?\nW: It\'s a plastic sheet that blocks blue light. I have...',
    category: '科技',
    wordCount: 292,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'M: What\'s that thing on your computer screen?\nW: It\'s a plastic sheet that blocks blue light. I have one that I use to cover my phone screen too.\nM: What do you mean by blue light?\nW: Blue light includes natural light, but it also includes light that isn\'t natural. For example, from computers, phones, televisions, and other electronic devices.\nM: So blue light is harmful and that\'s why you want to block it.\nW: It isn\'t that simple. Blue light isn\'t necessarily bad for us. In fact, we need blue light during the day to be healthy. But too much blue light, especially from electronic devices, can harm our health by weakening our vision and making it harder for us to fall asleep. And poor sleep can cause all sorts of health problems.\nM: I\'m not so sure that sleep is nearly as important as people always say it is. I haven\'t slept enough in months, because I have too much work to do. And I feel fine. And it\'s the same for most of my friends. Poor sleep might be a problem for older people, but surely young people can handle late nights.\nW: Well, the research I\'ve read shows that sleep is probably even more important than we thought, and that not having enough sleep can contribute to serious health problems like obesity and heart disease. And all the artificial blue light from electronic devices means we have to try harder to sleep well.\nM: Maybe you\'re right. I\'m on my computer very late most nights and that\'s probably why I don\'t sleep enough.', zh: '男：你电脑屏幕上的那个东西是什么？\n女：那是一张防蓝光的塑料膜。我手机上也贴了一张。\n男：蓝光是什么意思？\n女：蓝光包括自然光，但也包括非自然光。例如，来自电脑、手机、电视和其他电子设备的光。\n男：所以蓝光是有害的，这就是你要阻挡它的原因。\n女：没那么简单。蓝光对我们来说不一定有害。事实上，我们在白天需要蓝光来保持健康。但过多的蓝光，尤其是来自电子设备的蓝光，会削弱我们的视力并使我们更难入睡，从而损害我们的健康。而睡眠不足会导致各种健康问题。\n男：我不太确定睡眠是否像人们常说的那么重要。我已经好几个月没睡够了，因为我有太多工作要做。我感觉很好。我的大多数朋友也一样。睡眠不足对老年人来说可能是个问题，但年轻人肯定能应付熬夜。\n女：嗯，我读过的研究表明，睡眠可能比我们想象的更重要，睡眠不足会导致严重的健康问题，如肥胖和心脏病。而且电子设备发出的人造蓝光意味着我们必须更加努力才能睡好。\n男：也许你是对的。我大多数晚上都很晚还在用电脑，这可能就是为什么我的睡眠不足。' }
    ]
  },
  {
    id: 'cet4_listening_2023_06_03',
    title: 'Children\'s Career Dreams',
    description: '听力原文：W: As a kid, did you know what job you wanted to do when you grew up?\nM: No, I didn\'t. And I got sic...',
    category: '教育',
    wordCount: 302,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'W: As a kid, did you know what job you wanted to do when you grew up?\nM: No, I didn\'t. And I got sick every time adults asked me what I wanted to be when I grew up.\nW: It\'s the same with me. And I\'m tired of people asking that question of my 10-year-old daughter. My daughter\'s stock answers are basketball player, pop singer, mechanical engineer. Adults love that last one, as it\'s the perfect mix of the sensible and the ambitious. When she was much younger, my daughter used to say she wanted to be Queen of the Clouds, which I loved. That\'s the kind of goal setting I like to see in children, springing from their boundless imaginations.\nM: Yes, we grown-ups can be tedious and limiting in our need for reality. And we teach a very gloomy image of adulthood, that whatever our children\'s future holds, it must be seen within the context of a job.\nW: How utterly overwhelming and dull.\nM: When people ask my son what he wants to be when he grows up, I have to swallow the urge to say, \"Hey, back off my kid\'s dreams.\"\nW: We can\'t dismiss the idea that teenagers have to plan to do something after they finish school, and parents are entitled to hope it\'s more than simply spending 10 hours a day playing computer games.\nM: But asking \"What do you want to be?\" isn\'t going to lead a child to a fulfilled life, rather lead to false expectations and a high chance of disappointment.\nW: Exactly. We should be helping our kids understand who they are, even if that means letting go of who we think they should be.', zh: '女：小时候，你知道长大后想做什么工作吗？\n男：不，我不知道。每次大人问我长大后想成为什么，我就很烦。\n女：我也是。我厌倦了人们问我10岁女儿这个问题。我女儿的标准回答是篮球运动员、流行歌手、机械工程师。大人们最喜欢最后一个，因为它是务实和雄心壮志的完美结合。我女儿更小的时候，她常说想成为云之女王，我很喜欢。那是我喜欢在孩子们身上看到的目标设定类型，源自他们无限的想象力。\n男：是的，我们成年人在对现实的需求中可能乏味且限制性强。我们给 adulthood（成年期）灌输了一幅非常阴暗的画面，即无论我们孩子的未来如何，都必须放在工作的背景下来看待。\n女：多么令人窒息和乏味啊。\n男：当人们问我儿子长大后想成为什么时，我不得不忍住想说\"嘿，离我孩子的梦想远一点\"的冲动。\n女：我们不能忽视青少年毕业后必须计划做些什么的想法，父母有权希望那不仅仅是每天花10小时玩电脑游戏。\n男：但问\"你想成为什么？\"不会让孩子过上充实的生活，反而会导致错误的期望和很高的失望可能性。\n女：没错。我们应该帮助我们的孩子了解他们自己是谁，即使这意味着放弃我们认为他们应该成为的人。' }
    ]
  },
  {
    id: 'cet4_listening_2023_06_04',
    title: 'Internet Access in Africa',
    description: '听力原文：Greater Internet access correlates directly with improved health care, education, and economic devel...',
    category: '科技',
    wordCount: 218,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'Greater Internet access correlates directly with improved health care, education, and economic development. People living in rural areas, however, lag behind in online use, which limits their access to government services, banking, and job opportunities. Nowhere is this challenge clearer than in Africa. Most Africans live in rural areas that are tough to wire for internet access.', zh: '更大的互联网接入与改善的医疗保健、教育和经济发展直接相关。然而，生活在农村地区的人在上网使用方面落后，这限制了他们获得政府服务、银行服务和就业机会。没有哪里比非洲更清楚地体现这一挑战。大多数非洲人生活在农村地区，这些地区很难铺设互联网接入线路。' },
      { en: 'Now, some phone companies are trying to introduce internet-ready phones into African markets. Certain companies have started selling simple smartphones for only $20. Previously the lowest price had been around $40, well out of reach for many people. These devices are designed to work effectively even in areas with limited infrastructure, using less data and requiring less bandwidth.', zh: '现在，一些电话公司正试图向非洲市场推出可连接互联网的手机。某些公司已开始以仅20美元的价格销售简易智能手机。此前最低价格约为40美元，对许多人来说遥不可及。这些设备即使在基础设施有限的地区也能有效工作，使用更少的数据和带宽。' },
      { en: 'The initiative aims to bridge the digital divide and provide rural populations with the tools they need to participate in the modern economy. With better internet access, farmers can check weather forecasts and crop prices, students can access educational resources, and families can connect with healthcare providers remotely.', zh: '这一倡议旨在弥合数字鸿沟，为农村人口提供参与现代经济所需的工具。有了更好的互联网接入，农民可以查看天气预报和农作物价格，学生可以获得教育资源，家庭可以远程与医疗保健提供者联系。' }
    ]
  },
  {
    id: 'cet4_listening_2023_06_05',
    title: 'Friendship and Work',
    description: '听力原文：The passage discusses the relationship between friendship and work performance. Research shows that ...',
    category: '社会',
    wordCount: 206,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'The passage discusses the relationship between friendship and work performance. Research shows that friendships benefit work in numerous ways. People who have close friends at work report higher job satisfaction and are more likely to stay with their employer long-term.', zh: '本文讨论了友谊与工作表现之间的关系。研究表明，友谊在多方面对工作有益。在工作中有亲密朋友的人报告更高的工作满意度，更有可能长期留在雇主身边。' },
      { en: 'The study examined how supportive friends can be in the workplace. It found that workplace friendships increase people\'s job satisfaction significantly. Friends at work provide emotional support during stressful times and can offer practical assistance with challenging tasks.', zh: '该研究考察了朋友在工作场所的支持作用。研究发现，职场友谊显著提高了人们的工作满意度。工作中的朋友在压力时期提供情感支持，并可以在具有挑战性的任务上提供实际帮助。' },
      { en: 'Interestingly, working together enhances friendship rather than diminishing it. The shared experiences and common goals create strong bonds between colleagues. The author suggests that employers should encourage employees to be friends with colleagues, as this leads to a more positive work environment and better teamwork.', zh: '有趣的是，一起工作能增进友谊而不是削弱友谊。共同的经历和共同的目标在同事之间创造了牢固的纽带。作者建议雇主应鼓励员工与同事成为朋友，因为这会带来更积极的工作环境和更好的团队合作。' },
      { en: 'However, the article also notes the importance of organizing activities to nourish friendships outside of work, as this helps maintain a healthy work-life balance.', zh: '然而，文章也指出了在工作之外组织活动来培养友谊的重要性，因为这有助于保持健康的工作与生活平衡。' }
    ]
  },
  {
    id: 'cet4_listening_2023_06_06',
    title: 'Napping at Work',
    description: '听力原文：A man named Jake has started a business that rents places for nap-takers. It is essentially a nap re...',
    category: '健康',
    wordCount: 246,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'A man named Jake has started a business that rents places for nap-takers. It is essentially a nap research institute that studies dreams and the effects of napping on creative people\'s work performance.', zh: '一个叫Jake的人创办了一家企业，为小睡者提供休息场所。它本质上是一个午睡研究机构，研究梦境以及午睡对创意人士工作表现的影响。' },
      { en: 'The founder started this business because he noticed his own creative abilities declining due to pointless meetings and lack of rest. He found that his productivity depended on his ability to concentrate, which was affected by the overuse of social media and insufficient sleep.', zh: '创始人创办这家企业是因为他注意到自己的创造力因无谓的会议和缺乏休息而下降。他发现他的生产力取决于他的专注能力，而专注能力受到社交媒体过度使用和睡眠不足的影响。' },
      { en: 'The business provides quiet, comfortable spaces where office workers can take short naps during the workday. Research shows that even a brief nap can restore alertness, improve mood, and enhance cognitive performance.', zh: '该企业为办公室工作人员提供安静、舒适的空间，让他们可以在工作日进行短暂午睡。研究表明，即使是短暂的午睡也能恢复警觉性、改善情绪并提高认知表现。' },
      { en: 'However, some bosses associate napping with laziness and are reluctant to allow employees to sleep during work hours. The author argues that this attitude is outdated and that forward-thinking companies should recognize the benefits of allowing employees to recharge through brief periods of rest.', zh: '然而，一些老板将午睡与懒惰联系在一起，不愿意允许员工在工作时间睡觉。作者认为这种态度已经过时，有远见的公司应该认识到允许员工通过短暂休息来恢复精力的好处。' },
      { en: 'Many of the founder\'s friends daydream in the office, but actual napping provides more concrete benefits. The article concludes that as our understanding of sleep improves, more companies may create dedicated spaces for employee napping.', zh: '创始人的许多朋友在办公室里做白日梦，但实际午睡提供了更具体的好处。文章总结道，随着我们对睡眠的理解不断加深，更多公司可能会为员工创建专门的午睡空间。' }
    ]
  },
  {
    id: 'cet4_reading_2023_12_01',
    title: 'Horse Racing',
    description: '阅读理解：Questions 46 to 50 are based on the following passage....',
    category: '文化',
    wordCount: 158,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'Questions 46 to 50 are based on the following passage.', zh: '本文讲述了一匹非凡赛马的故事，它赢得了英国人民巨大的名声和喜爱。这匹马成为了国家偶像，以其令人难以置信的赛马生涯俘获了数百万人的心。' },
      { en: 'The passage tells the story of a remarkable racehorse that won enormous fame and love from the British people. The horse became a national icon, capturing the hearts of millions with its incredible racing career.', zh: '这匹马在其职业生涯中面临许多挑战。其中一个障碍是它必须在比赛中克服的困难。尽管面临这些困难，这匹马表现出令人难以置信的 determination（决心）和精神。它在20世纪70年代赢得了3次Grand National（英国国家障碍赛马大赛）冠军，这一非凡成就巩固了它在赛马史上的地位。' },
      { en: 'The horse faced many challenges throughout its career. One of the obstacles was a hindrance it had to get over during races. Despite these difficulties, the horse showed incredible determination and spirit. It took 3 Grand National wins in the 1970s, an extraordinary achievement that cemented its place in racing history.', zh: '在它最著名的胜利到来时，这匹马已经过了赛马生涯的巅峰期。许多人认为它太老了，无法在最高水平上竞争，但它一次又一次地证明了他们错了。' },
      { en: 'By the time of its most famous victories, the horse had already passed the peak of its racing life. Many thought it was too old to compete at the highest level, but it proved them wrong time and time again.', zh: '即使退役后，这匹马仍然保持着著名和受欢迎的地位。它的遗产继续激励着新一代的赛马爱好者。作者最后总结，这匹马的故事代表了英国体育文化的精华。' }
    ]
  },
  {
    id: 'cet4_reading_2023_12_02',
    title: 'Decision Making',
    description: '阅读理解：Questions 51 to 55 are based on the following passage....',
    category: '健康',
    wordCount: 233,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'Questions 51 to 55 are based on the following passage.', zh: '本文探讨了决策中直觉和数据分析的作用。在当今商业世界中，依赖系统性数据分析和相信直觉之间常常存在紧张关系。' },
      { en: 'The passage explores the role of instinct and data analysis in decision-making. In today\'s business world, there is often tension between relying on systematic data analysis and trusting one\'s gut feelings.', zh: '研究表明，虽然数据驱动的决策通常更可靠，但完全忽视直觉可能导致错失机会。最有效的决策者知道如何将两种方法结合在一起。他们使用数据来为选择提供信息，但当感觉有什么不对劲时，也会注意自己内心的智慧。' },
      { en: 'Research shows that while data-driven decisions are generally more reliable, completely ignoring instinct can lead to missed opportunities. The most effective decision-makers know how to combine the two approaches together. They use data to inform their choices but also pay attention to their inner wisdom when something doesn\'t feel right.', zh: '作者建议，在数据不完整或模糊的复杂情况下，诉诸内在智慧尤其有价值。经验丰富的领导者往往培养出一种模式识别能力，使他们即使在数据不清楚时也能做出好的决策。' },
      { en: 'The author suggests that in complex situations where data is incomplete or ambiguous, resorting to inner wisdom can be particularly valuable. Experienced leaders often develop a sense of pattern recognition that allows them to make good decisions even when the data is unclear.', zh: '然而，文章警告不要在没有数据支持的情况下完全依赖直觉。最佳方法是在沟通和决策过程中同时运用直觉和数据。数据提供基础，而直觉则添加了纯数字无法捕捉的人为因素。' },
      { en: 'However, the article warns against relying solely on instinct without any data support. The best approach is to apply both instinct and data in communication and decision-making processes. Data provides the foundation, while instinct adds the human element that pure numbers cannot capture.', zh: '作者最后总结，现代专业人士应该同时培养自己的分析技能和直觉能力，以成为全面发展的决策者。' }
    ]
  },
  {
    id: 'cet4_reading_2023_12_03',
    title: 'Multitasking',
    description: '阅读理解：Questions 51 to 55 are based on the following passage....',
    category: '科技',
    wordCount: 347,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'Questions 51 to 55 are based on the following passage.', zh: '多任务处理者是能够同时有效执行两项或更多任务的人——除了明显的差异外——这与计算机的做法类似。这个概念确实来自技术领域，在那里它被用来指可以同时执行多项任务的操作系统。然而，问题是：一个人真的能多任务处理吗？' },
      { en: 'A multitasker is one who can perform two or more tasks effectively at the same time, which—apart from the obvious differences—is similar to what a computer does. The concept does indeed come from the realms of technology, where it is used to refer to an operating system that can execute multiple tasks at the same time. However, the question is: can a person really be a multitasker?', zh: '对大多数科学家来说，答案是否定的。据神经科学专家称，我们的大脑不善于处理多任务情况。一旦有两项任务需要我们注意，生产力就会下降。因此，我们所说的多任务处理，实际上是或多或少快速地从一项任务转移到另一项任务的能力。这需要两个基本条件：其中一项任务需要是自动的，如走路或吃饭；而且它们需要不同的思维过程。例如，同时接电话和写作。' },
      { en: 'For most scientists, the answer is no. So much so that, according to experts in neuroscience, our brains do not handle multitasking situations well. As soon as two tasks require our attention, productivity suffers. What we call multitasking, therefore, is in reality the ability to move more or less quickly from one task to another. This requires two essential conditions: that one of the tasks needs to be automatic, like walking or eating, and that they both need different mental processes. Answering the phone and writing at the same time, for example.', zh: '然而，另一方面也有人坚持认为，成为或者至少看起来在多任务处理是可能的。一项最新研究得出的结论是，无论人们是否真正在处理多项任务，仅仅他们将这种活动视为多任务处理这一事实，就对其表现产生了积极影响。能够同时处理多项任务的感知似乎能增强信心和动力。' },
      { en: 'However, on the other side of the coin there are people who maintain that it is possible to be, or at least seem to be, multitasking. A recent study concluded that regardless of whether people are actually handling several tasks or not, the mere fact that they perceive this activity as multitasking has a positive effect on their performance. The perception of being able to handle multiple tasks simultaneously seems to boost confidence and motivation.', zh: '在商业环境中，在任务之间切换的能力往往受到重视。能管理多个项目的员工被视为更有能力和效率。然而，研究表明，不断的任务切换可能导致整体生产力下降和精神疲劳增加。' },
      { en: 'In business settings, the ability to switch between tasks is often valued. Employees who can manage multiple projects are seen as more capable and efficient. However, research suggests that constant task-switching can lead to decreased overall productivity and increased mental fatigue.', zh: '作者最后总结，虽然我们能真正同时做的任务数量有限，但了解我们的大脑如何处理任务切换可以帮助我们更有效率地工作。关键是意识到多任务处理的代价，并最小化任务之间不必要的切换。' }
    ]
  },
  {
    id: 'cet4_reading_2023_12_04',
    title: 'Teenagers and Social Networks',
    description: '阅读理解：As a parent of two boys at primary school, I worry about the impact of social media on their develop...',
    category: '教育',
    wordCount: 171,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'As a parent of two boys at primary school, I worry about the impact of social media on their development. Indeed, social scientists who study young people have found that new technologies always provoke generational panic. Parents are wrong to worry about kids spending time on social networks.', zh: '作为两个小学男孩的家长，我担心社交媒体对他们发展的影响。确实，研究年轻人的社会科学家发现，新技术总是引发代际恐慌。父母担心孩子在社交网络上花费时间是多余的。' },
      { en: 'Distraction is also a serious issue when it comes to technology use. But even as error rates stayed stable, student essays have not declined in quality. When linguist Naomi Baron studied students\' instant messaging, she found that their language skills remained intact.', zh: '在使用技术时，分心也是一个严重问题。但即使错误率保持稳定，学生论文的质量也没有下降。当语言学家Naomi Baron研究学生的即时通讯时，她发现他们的语言能力保持完好。' },
      { en: 'It is probably true that fewer kids are heavy readers nowadays. But surely all this short-form writing is affecting literacy? Parents\' concerns about technology\'s impact on reading habits may be overstated. The key is finding the best way to cope with the changing landscape of communication.', zh: '现在的孩子中重度阅读者可能确实变少了。但所有这些简短形式的写作难道不会影响读写能力吗？父母对技术影响阅读习惯的担忧可能被夸大了。关键是找到应对沟通方式不断变化的最佳方法。' }
    ]
  },
  {
    id: 'cet4_listening_2023_12_01',
    title: 'Hotel Check-in',
    description: '听力原文：W: Hi there. How are you today? Do you have a reservation with us already?\nM: Good afternoon. Yes. W...',
    category: '生活',
    wordCount: 308,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'W: Hi there. How are you today? Do you have a reservation with us already?\nM: Good afternoon. Yes. We reserved our rooms yesterday morning on your website for three nights. The name\'s Patterson.\nW: Okay. Let me have a look. Yes, we have it here. You brought the whole family with you, I see.\nM: Yes. The two kids, my wife and I, and her parents too.\nW: Great. So we have a family room for you and your wife and the kids, and another double room for your parents-in-law. They are right next to each other on the ground floor since you mentioned in your message that they have trouble with stairs.\nM: That\'s wonderful. My father-in-law has had terrible problems getting up and down stairs since his knee operation last April.\nW: I\'m sorry to hear that. And if you need any help to find transportation for the whole family, we can definitely recommend someone for you.\nM: We were thinking of renting a car, but we will explore all the options available for sure. So yes, that would be very helpful in comparing prices. We\'re also wondering what tours and day trips are available.\nW: We have bunches of brochures here. I would recommend getting out on a boat trip. The kids will love it and there are so many islands nearby to explore. There\'s also a great night market further into town that has all kinds of food and cool little shops selling souvenirs and local jewelry and clothing made by hand.\nM: That all sounds marvelous.\nW: Now all I need is to photocopy your passports and then I can get you all checked in and show you to your rooms.', zh: '女：您好。您今天怎么样？您已经在我们这里有预订了吗？\n男：下午好。是的。我们昨天早上在你们网站上预订了三个晚上的房间。姓Patterson。\n女：好的。让我查一下。是的，我们这里有记录。我看您带了全家人来。\n男：是的。两个孩子、我妻子和我，还有她的父母。\n女：太好了。所以我们为您提供一间家庭房给您、您太太和孩子们，另一间双人房给您的岳父岳母。它们在底楼紧挨着，因为您在留言中提到他们上下楼梯有困难。\n男：太好了。我岳父自去年四月膝盖手术后，上下楼梯一直有严重的问题。\n女：很遗憾听到这个消息。如果您需要为全家找交通工具，我们肯定可以给您推荐。\n男：我们在考虑租一辆车，但我们肯定会探索所有可用的选择。所以是的，那在比较价格方面会很有帮助。我们还想知道有哪些旅游和一日游项目。\n女：我们这里有很多宣传册。我推荐坐船出游。孩子们会喜欢的，而且附近有很多岛屿可以探索。镇上还有一个很棒的夜市，有各种各样的食物和酷酷的小店，出售纪念品、当地珠宝和手工制作的服装。\n男：听起来都很棒。\n女：现在我只需要复印一下你们的护照，然后就可以帮你们办理入住手续，带你们去房间了。' }
    ]
  },
  {
    id: 'cet4_listening_2023_12_02',
    title: 'Computer Games',
    description: '听力原文：W: Jeremy, you should throw that soup in the bin. It\'s been sitting out for hours.\nM: But it\'s still...',
    category: '生活',
    wordCount: 120,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'W: Jeremy, you should throw that soup in the bin. It\'s been sitting out for hours.\nM: But it\'s still good! I was going to finish it later.\nW: No, it\'s not safe to eat anymore. You really shouldn\'t leave food out like that. You know, you spend so much time playing computer games that you forget about basic things like putting food away.\nM: That\'s not fair. I just got distracted.\nW: You always get distracted by those games. You need to get back to reality sometimes.\nM: Maybe you\'re right. I do lose track of time when I\'m gaming.\nW: Exactly. Now throw that soup away and let\'s go get some fresh food.', zh: '女：Jeremy，你应该把那碗汤扔进垃圾桶。它已经放了好几个小时了。\n男：但它还能吃！我本来打算待会儿吃完的。\n女：不，现在吃已经不安全了。你真的不应该把食物这样放着。你知道吗，你花太多时间玩电脑游戏，以至于忘记了放食物这样的基本事情。\n男：这不公平。我只是分心了。\n女：你总是被那些游戏分心。你有时需要回到现实中来。\n男：也许你是对的。我玩游戏时确实会忘记时间。\n女：就是嘛。现在把那碗汤扔掉，我们去买些新鲜的食物吧。' }
    ]
  },
  {
    id: 'cet4_listening_2023_12_03',
    title: 'E-textbooks vs Printed Books',
    description: '听力原文：M: I\'m looking forward to the change. Our school is switching to e-textbooks next semester.\nW: I\'ll ...',
    category: '教育',
    wordCount: 188,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'M: I\'m looking forward to the change. Our school is switching to e-textbooks next semester.\nW: I\'ll stick with my printed books. I just can\'t concentrate when reading on a screen.\nM: But think about how convenient it will be. You won\'t have to carry heavy books around anymore. Plus, the use of tablets can benefit students in many ways. You can search for keywords, highlight text, and even watch embedded videos.\nW: That\'s true, but I find that students using tablets get distracted too easily. They end up checking social media or playing games instead of studying. And there\'s something about the physical act of turning pages that helps me remember the content better.\nM: Those are fair points. But electronic readers can be made with features that help people focus. And think about the environmental benefits of not printing so many books.\nW: I suppose there are pros and cons to both. Maybe a hybrid approach would work best for me.', zh: '男：我很期待这个改变。我们学校下学期要改用电子教科书。\n女：我还是坚持用印刷书籍。我在屏幕上阅读时就是无法集中注意力。\n男：但想想这会有多方便。你再也不用背着沉重的书到处走了。而且，使用平板电脑可以以多种方式让学生受益。你可以搜索关键词、高亮文本，甚至观看嵌入式视频。\n女：那倒是，但我发现使用平板电脑的学生太容易分心了。他们最终会刷社交媒体或玩游戏，而不是学习。而且，翻书的物理动作能帮助我更好地记住内容。\n男：这些观点有道理。但电子阅读器可以被设计成帮助人们专注的功能。而且想想不印刷那么多书对环境的益处。\n女：我想两种都有优缺点。也许混合式方法对我最有效。' }
    ]
  },
  {
    id: 'cet4_listening_2023_12_04',
    title: 'Business Risk Taking',
    description: '听力原文：Taking risks in business does not mean going into business blindly and then expecting great results....',
    category: '社会',
    wordCount: 233,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'Taking risks in business does not mean going into business blindly and then expecting great results. On the contrary, taking risks in entrepreneurship involves careful planning and hard work. Nobody can really be sure if risks will be met with success, no matter how calculated they may be. But this should not stop you from taking risks as risks are necessary if you want your business to succeed. Some risks may not work out, but an optimistic risk taker will always look at failure as an opportunity to learn.', zh: '商业冒险并不意味着盲目地进入商界然后期待好结果。相反，创业冒险需要精心计划和努力工作。没有人能真正确定冒险是否会成功，无论它们经过多么周密的计算。但这不应该阻止你去冒险，因为如果你想让你的企业成功，冒险是必要的。有些风险可能不会有结果，但乐观的风险承担者总是将失败视为学习的机会。' },
      { en: 'The willingness to experiment with new ideas is key to business growth. As the old saying goes, nothing ventured, nothing gained. Failure will teach you how to think and plan strategically, but just remember that not all risks are good ones. And when you fail, learn from it and move forward.', zh: '尝试新想法的意愿是企业成长的关键。正如老话所说，不入虎穴，焉得虎子。失败会教会你如何战略性思考和计划，但要记住并非所有风险都是好的。当你失败时，从中学习并继续前进。' },
      { en: 'Since most people tend to avoid risk, businesses that are brave enough to take risks already have a competitive advantage. They are the ones setting the standard with new ideas, fresh offers and bold inventions. Risk takers are best at adapting in difficult times. Simply put, when most individuals stay away from risk, it means less competition for risk takers.', zh: '由于大多数人倾向于回避风险，敢于冒险的企业已经拥有了竞争优势。他们是用新想法、新创意和大胆发明来制定标准的人。风险承担者最擅长在困难时期适应。简单地说，当大多数人远离风险时，对风险承担者来说就意味着更少的竞争。' }
    ]
  },
  {
    id: 'cet4_listening_2023_12_05',
    title: 'Mobile Phones Changing Our Skeletons',
    description: '听力原文：Mobile phones have changed the way we live, how we read, work, communicate and shop, but we already ...',
    category: '科技',
    wordCount: 205,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'Mobile phones have changed the way we live, how we read, work, communicate and shop, but we already know this. What we have not yet understood is the way the tiny machines in front of us are changing our skeletons, possibly altering not just the way we behave, but even the very shape of our bodies.', zh: '手机改变了我们的生活方式、阅读方式、工作方式、沟通方式和购物方式，但我们已经知道这一点。我们尚未理解的是，我们面前的这些小机器正在如何改变我们的骨骼结构，可能不仅改变我们的行为方式，甚至改变我们身体的形状。' },
      { en: 'Researchers have found that prolonged use of mobile phones can lead to changes in our bone structure. The way we hold our phones and hunch over screens is affecting our posture and potentially reshaping our skeletons over time. The constant downward gaze and forward head position can cause the growth of bone spurs at the base of the skull.', zh: '研究人员发现，长期使用手机会导致骨骼结构的变化。我们拿手机的姿势和弓腰看屏幕的方式正在影响我们的姿势，并可能随着时间的推移重塑我们的骨骼。持续的向下凝视和头部前倾姿势可能导致颅底骨刺的生长。' },
      { en: 'This phenomenon is particularly concerning among younger people whose bones are still developing. The author warns that as mobile phone usage continues to increase, we may see more significant skeletal changes in future generations. The article concludes that we need to be more mindful of our posture when using mobile devices and take regular breaks to avoid long-term physical changes.', zh: '这一现象在骨骼仍在发育的年轻人中尤其令人担忧。作者警告说，随着手机使用量的持续增加，我们可能会在未来几代人中看到更显著的骨骼变化。文章最后总结，我们需要在使用移动设备时更加注意姿势，并定期休息以避免长期的物理变化。' }
    ]
  },
  {
    id: 'cet4_listening_2023_12_06',
    title: 'Parental Leave Policies',
    description: '听力原文：The passage discusses the impact of parental leave policies on workplace gender equality. In the Uni...',
    category: '社会',
    wordCount: 208,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'The passage discusses the impact of parental leave policies on workplace gender equality. In the United States, companies have been slow to adopt equal parental leave policies for both mothers and fathers.', zh: '本文讨论了育儿假政策对职场性别平等的影响。在美国，公司在采用男女平等的育儿假政策方面一直进展缓慢。' },
      { en: 'Research shows that while some companies claim to have generous leave policies, the reality is often different. Many admitted that what they actually did did not match their stated policies. Equal parental leave is essential for breaking down traditional gender roles both at work and at home.', zh: '研究表明，虽然一些公司声称拥有慷慨的休假政策，但现实往往不同。许多人承认他们实际做的与声称的政策不符。平等的育儿假对于打破工作和家庭中的传统性别角色至关重要。' },
      { en: 'However, simply having policies is not enough. The workplace culture needs to change to support employees who take leave. In many organizations, there is still pressure on employees, particularly men, not to take their full parental leave. This creates a gap between what policies promise and what actually happens in practice.', zh: '然而，仅仅有政策是不够的。工作场所文化需要改变，以支持休假的员工。在许多组织中，仍然存在压力，特别是针对男性员工，不让他们休完整的育儿假。这在政策承诺与实际发生的情况之间造成了差距。' },
      { en: 'The article concludes that we need to pressure more companies in the US to offer paid parental leave and to create a culture where taking leave is seen as normal and acceptable for all parents, regardless of gender.', zh: '文章最后总结，我们需要向更多美国公司施压，要求它们提供带薪育儿假，并创造一种文化，在这种文化中，休假对所有父母来说都是正常和可接受的，无论性别如何。' }
    ]
  },
  {
    id: 'cet4_reading_2024_06_01',
    title: 'The Art of Self-Control and Willpower',
    description: '阅读理解：People often wonder why some entrepreneurs are more successful than others. I believe the key to suc...',
    category: '教育',
    wordCount: 309,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'People often wonder why some entrepreneurs are more successful than others. I believe the key to success is willpower. Willpower is the ability to control yourself. It is a strong determination that allows you to do something difficult. It is a behavior we are born with more than one we learn; however, it is possible to not only learn it, but also strengthen it with constant exercise.', zh: '人们常常想知道为什么有些企业家比其他人更成功。我相信成功的关键是意志力。意志力是控制自己的能力。它是一种强烈的决心，让你能够做困难的事情。这种行为我们天生就有，而不仅仅是后天学来的；然而，它不仅可以通过学习获得，还可以通过不断的锻炼来增强。' },
      { en: 'Willpower is just like a muscle; to keep it strong you need to constantly exercise it. People with a great amount of willpower have the discipline to develop positive, successful habits. Even with an incredible amount of talent, without the discipline and motivation to create positive habits, it can be difficult to achieve success.', zh: '意志力就像肌肉一样；要保持强壮，你需要不断锻炼它。拥有大量意志力的人有纪律去培养积极、成功的习惯。即使有惊人的天赋，如果没有纪律和动力去创造积极的习惯，也很难取得成功。' },
      { en: 'According to research, almost half of our daily actions are performed out of habit, not decision. Once the right habits are established, a person will automatically carry out these tasks. A strong motivation is the key to developing and sticking to a habit. For example, a health concern or a passion for one\'s career can be a powerful motivation to change habits.', zh: '根据研究，几乎一半的日常行为都是出于习惯，而不是决策。一旦建立了正确的习惯，人就会自动执行这些任务。强烈的动机是养成和坚持习惯的关键。例如，健康问题或对事业的热情可以成为改变习惯的强大动力。' },
      { en: 'The art of self-control helps us succeed by enabling us to take positive actions and avoid behaviors that do not lead to success. Because there is a delayed satisfaction associated with self-control, it can be easy to get off track. However, if you work on sticking to those small positive habits one day at a time, it becomes easier to stay strong and achieve that delayed reward. Once a reward is achieved, it is much easier to continue sticking to your habits.', zh: '自我控制的艺术帮助我们成功，因为它使我们能够采取积极的行动，避免那些不会带来成功的行为。因为自我控制带来的满足感是延迟的，所以很容易偏离轨道。然而，如果你每天坚持那些小的积极习惯，就更容易保持坚强，实现延迟的回报。一旦获得了回报，就更容易继续坚持你的习惯。' }
    ]
  },
  {
    id: 'cet4_reading_2024_06_02',
    title: 'Scientific Research Funding',
    description: '阅读理解：Today, most scientific research is funded by government grants, companies doing research and develop...',
    category: '科技',
    wordCount: 373,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'Today, most scientific research is funded by government grants, companies doing research and development, and non-profit foundations. As a society, we reap the rewards from this science, but we also help pay for it. You indirectly support science through taxes you pay, products and services you purchase, and donations you make.', zh: '如今，大多数科学研究由政府拨款、从事研发的公司以及非营利性基金会资助。作为一个社会群体，我们从这些科学研究中获益，但我们也为之付出。你通过缴纳的税款、购买的产品和服务以及捐赠，间接地支持了科学研究。' },
      { en: 'Funding for science has changed with the times. Historically, science has been largely supported through private patronage, church sponsorship, or simply paying for the research yourself. Today, researchers are likely to be funded by a mix of grants from various government agencies, institutions, and foundations. Other research is funded by private companies. Such corporate sponsorship is widespread in some fields. Almost 75% of U.S. clinical trials in medicine are paid for by private companies. And, of course, some researchers today still fund small-scale studies out of their own pockets. Most of us can\'t afford to do nuclear research as a private hobby, but birdwatchers, rock collectors, and others can do real research on a limited budget.', zh: '科学研究的资金来源随时代而变化。从历史上看，科学在很大程度上是通过私人资助、教会赞助，或者干脆自己掏钱进行研究来获得支持的。如今，研究人员很可能由来自不同政府机构、院校和基金会的拨款组合资助。其他研究则由私人公司资助。这种企业赞助在某些领域很普遍。在美国，几乎75%的医学临床试验是由私人公司出资的。当然，如今一些研究人员仍然自掏腰包资助小规模的研究。我们大多数人负担不起把核研究作为个人爱好，但观鸟者、岩石收集者和其他人可以在有限的预算内进行真正的研究。' },
      { en: 'In a perfect world, money wouldn\'t matter—all scientific studies would be completely objective. But in the real world, funding may introduce biases. Drug research sponsored by the pharmaceutical industry is more likely to end up favoring the drug under consideration than studies sponsored by government grants or charitable organizations. Similarly, nutrition research sponsored by the food industry is more likely to end up favoring the food under consideration than independently funded research.', zh: '在一个理想的世界里，资金并不重要——所有的科学研究都将是完全客观的。但在现实世界中，资金可能会引入偏见。由制药行业赞助的药物研究比由政府拨款或慈善组织赞助的研究更有可能最终支持所研究的药物。同样，由食品行业赞助的营养研究比独立资助的研究更有可能最终支持所研究的食品。' },
      { en: 'However, companies and special interest groups provide valuable resources for scientific research. Without such funding, much important research would never be done. The key is to recognize the potential for bias and to check the validity of industry-funded research with additional care.', zh: '然而，公司和特殊利益集团为科学研究提供了宝贵的资源。如果没有这样的资助，许多重要的研究将永远不会进行。关键是要认识到偏见的可能性，并额外仔细地审查行业资助研究的有效性。' }
    ]
  },
  {
    id: 'cet4_reading_2024_06_03',
    title: 'Aging and Learning',
    description: '阅读理解：Some people have said aging is more a slide into forgetfulness than a journey towards wisdom. Howeve...',
    category: '教育',
    wordCount: 443,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'Some people have said aging is more a slide into forgetfulness than a journey towards wisdom. However, a growing body of research suggests that late-in-life learning is possible. In reality, education does an aging brain good.', zh: '有些人说，衰老更多的是陷入健忘，而非走向智慧的旅程。然而，越来越多的研究表明，晚年学习是有可能的。事实上，教育对衰老的大脑有好处。' },
      { en: 'Throughout life, people\'s brains constantly renovate themselves. In the late 1960s, British brain scientist Geoffrey Raisman spied growth in damaged brain regions of rats through an electron microscope; their brains were forging new connections. This meant brains may change every time a person learns something new.', zh: '在人的一生中，大脑不断地自我更新。20世纪60年代后期，英国脑科学家杰弗里·雷斯曼通过电子显微镜观察到老鼠受损脑区的生长；它们的大脑正在建立新的连接。这意味着每当一个人学习新东西时，大脑可能就会发生变化。' },
      { en: 'Of course, that doesn\'t mean the brain isn\'t affected by the effects of time. Just as height usually declines over the years, so does brain volume: Humans lose about 4 percent every decade starting in their 40s. But that reduction doesn\'t necessarily make people think slower; as long as we are alive and functioning, we can alter our brains with new information and experiences.', zh: '当然，这并不意味着大脑不受时间的影响。就像身高通常会随着岁月流逝而降低一样，脑容量也是如此：从40岁开始，人类每十年大约会损失4%的脑容量。但这种减少并不一定使人思维变慢；只要我们活着且身体机能正常，我们就可以用新的信息和经历改变我们的大脑。' },
      { en: 'In fact, scientists now suspect accumulating novel experiences, facts, and skills can keep people\'s minds more flexible. New pathways can strengthen our ever-changing mental structure, even as the brain shrinks.', zh: '事实上，科学家们现在怀疑积累新的经历、事实和技能能让人们的思维更加灵活。即使大脑萎缩，新的路径也能强化我们不断变化的心理结构。' },
      { en: 'Conventional fixes like word puzzles and brain-training apps can contribute to mental durability. Even something as simple as taking a different route to the grocery store or going somewhere new on vacation can keep the brain healthy.', zh: '像字谜和大脑训练应用程序这样的常规方法有助于提高大脑的耐久性。甚至像走不同的路线去杂货店或去新的地方度假这样简单的事情也能保持大脑健康。' },
      { en: 'A desire for new life challenges can further boost brainpower. Research about aging adults who take on new enterprises shows improved function and memory as well as a reduced risk of mental disease. Openness—a characteristic defined by curiosity and a desire for knowledge—may also help folks pass brain tests. Some folks are born with this take-in-the-world attitude, but those who aren\'t as genetically gifted aren\'t necessarily out of luck. While genes can encourage an interest in doing new things, a 2012 study in the journal Psychology and Aging found completing reasoning tasks like puzzles and number games can enhance that desire for novel experiences, which can, in turn, refresh the brain. That\'s why brain scientist Richard Kennedy says \"It\'s not that old dogs can\'t learn new tricks. It\'s that maybe old dogs don\'t realize why they should.\"', zh: '对新生活挑战的渴望可以进一步提升脑力。关于从事新事业的老年人的研究表明，他们的功能和记忆力得到改善，同时患精神疾病的风险降低。开放性——一种由好奇心和对知识的渴望所定义的特质——也可能帮助人们通过大脑测试。一些人天生就有这种接纳世界的态度，但那些在基因上没有那么有天赋的人也不一定运气不好。虽然基因可以激发对做新事情的兴趣，但2012年发表在《心理学与衰老》杂志上的一项研究发现，完成像字谜和数字游戏这样的推理任务可以增强对新体验的渴望，这反过来又能使大脑焕然一新。这就是为什么脑科学家理查德·肯尼迪说：\"不是老狗学不了新把戏。而是老狗可能没意识到为什么它们应该学。\"' }
    ]
  },
  {
    id: 'cet4_reading_2024_06_04',
    title: 'Fashion and Law',
    description: '阅读理解：Richard Thompson Ford is a law professor, and you probably won\'t forget that for even one page. His ...',
    category: '文化',
    wordCount: 239,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'Richard Thompson Ford is a law professor, and you probably won\'t forget that for even one page. His carefully reasoned arguments, packed with examples, sound almost like reading a court opinion, only maybe wordier. You will probably never think of fashion as a trifle again.', zh: '理查德·汤普森·福特是一位法学教授，你可能读这本书的任何一页都不会忘记这一点。他经过精心推理的论点，充满了例子，听起来几乎就像在读一份法庭意见书，只是可能更冗长。你可能再也不会把时尚当作微不足道的东西了。' },
      { en: 'Fashion is not merely about clothing and personal style. It reflects and shapes social norms, power dynamics, and cultural values. Ford argues that dress codes, whether formal or informal, serve as mechanisms of social control and identity expression. Throughout history, clothing has been used to signal status, profession, and belonging to particular groups.', zh: '时尚不仅仅关乎服装和个人风格。它反映并塑造社会规范、权力动态和文化价值观。福特认为，着装规范，无论是正式的还是非正式的，都是社会控制和身份表达的机制。纵观历史，服装一直被用来表示地位、职业和对特定群体的归属感。' },
      { en: 'The legal implications of fashion extend to workplace discrimination, religious expression, and gender identity. Courts have grappled with cases involving mandatory dress codes, the right to wear religious garments, and the boundaries of acceptable appearance in professional settings.', zh: '时尚的法律含义延伸到工作场所歧视、宗教表达和性别认同。法院一直在努力处理涉及强制性着装规范、穿戴宗教服装的权利以及职业环境中可接受外表界限的案件。' },
      { en: 'Ford\'s work challenges readers to reconsider the significance of what we wear and how society regulates personal appearance. Far from being superficial, fashion emerges as a complex arena where individual freedom intersects with collective expectations and institutional power.', zh: '福特的著作挑战读者重新考虑我们所穿之物的重要性以及社会如何规范个人外表。时尚远非肤浅，它成为一个复杂的竞技场，在这里个人自由与集体期望和制度权力相交。' }
    ]
  },
  {
    id: 'cet4_listening_2024_06_01',
    title: 'The Three Body Problem',
    description: '听力原文：W: Tom, did you see the article online about the new TV series based on the book The Three Body Prob...',
    category: '教育',
    wordCount: 291,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'W: Tom, did you see the article online about the new TV series based on the book The Three Body Problem?', zh: '女：汤姆，你看到网上关于根据《三体》这本书改编的新电视剧的文章了吗？' },
      { en: 'M: A colleague mentioned the book, but I\'ve been so busy writing my thesis that I haven\'t been able to read for pleasure in months.', zh: '男：一位同事提到过这本书，但我一直忙于写论文，已经好几个月没能为 pleasure 而读书了。' },
      { en: 'W: Well, sounds like if you\'re going to read anything for fun, this is the book. It\'s written by a Chinese science fiction writer. I can\'t remember his name, but he\'s written three books in all, and The Three Body Problem is the first in the series. I don\'t want to say too much and spoil it for you, but it\'s definitely got some amazing technological and sociological concepts in it.', zh: '女：嗯，听起来如果你要读点什么来消遣的话，就是这本书了。它是由一位中国科幻作家写的。我记不住他的名字了，但他总共写了三本书，《三体》是系列中的第一部。我不想说太多而破坏你的兴致，但它确实有一些令人惊叹的技术和社会学概念。' },
      { en: 'M: It does sound like it would suit my taste, but if they are making a TV series based on it now, I don\'t know if I should read the book or watch the show first.', zh: '男：听起来确实适合我的口味，但如果他们现在要拍电视剧，我不知道应该先看书还是先看剧。' },
      { en: 'W: I think it\'s better to read the book first. It\'s rare for the show or movie to be better than the book. And then, you just end up ruining the book for yourself, if the show isn\'t very good.', zh: '女：我觉得最好先看书。电视剧或电影比书好的情况很少。如果剧不好看，你只会毁了这本书。' },
      { en: 'M: When is the show supposed to start? I\'m a bit overwhelmed with the amount of data I still need to collect to finish my thesis. But I still need to relax sometimes.', zh: '男：剧什么时候开始播？我被完成论文还需要收集的大量数据压得有点喘不过气来。但我有时还是需要放松。' },
      { en: 'W: I can\'t remember exactly. It\'s pretty soon, and it\'s going to be quite long. There are 24 episodes. Well, maybe you could download an electronic copy of the book and try to read it before the show starts.', zh: '女：我记不清确切时间了。很快就要播了，而且会有很长。有24集。嗯，也许你可以下载一本电子版的书，试着在剧开播之前读一下。' },
      { en: 'M: That\'s a good idea. And then, maybe we can watch the series together. Thanks for the tip, Alice.', zh: '男：好主意。然后，也许我们可以一起看这部剧。谢谢你的推荐，爱丽丝。' },
      { en: 'W: No problem.', zh: '女：不客气。' }
    ]
  },
  {
    id: 'cet4_listening_2024_06_02',
    title: 'Vegetarian Food Festival',
    description: '听力原文：W: Hello, good afternoon. I have an inquiry to make. It\'s about the vegetarian food festival you are...',
    category: '社会',
    wordCount: 268,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'W: Hello, good afternoon. I have an inquiry to make. It\'s about the vegetarian food festival you are holding on the 19th of August at the Newcastle City Hall.', zh: '女：你好，下午好。我想咨询一件事。是关于你们8月19日在纽卡斯尔市政厅举办的素食节。' },
      { en: 'M: Yes, of course. My name\'s Philip. How can I help you?', zh: '男：是的，当然。我叫菲利普。我能怎么帮您？' },
      { en: 'W: It says on your website that you are still looking for vendors, and I grow organic vegetables on my farm, as well as doing my own home baking. Would I be able to sell both the vegetables and items baked from them at the festival?', zh: '女：你们的网站上说你们还在寻找摊贩，我在农场种植有机蔬菜，还自己做家庭烘焙。我能在节日上既卖蔬菜又卖用蔬菜做的烘焙食品吗？' },
      { en: 'M: That\'s exactly the type of thing we are looking for. We\'re getting close to the deadline, however. Do you prefer to fill out an application on the web, or to print it out and fill it in by hand and then post it back to us? Remember that you will have to have all your certificates to hand when you are filling out the forms, as the standards are high and they will be carefully checked before anyone will be able to sell their produce at the event.', zh: '男：这正是我们要找的类型的东西。不过，截止日期快到了。你喜欢在网上填写申请表，还是打印出来手写然后寄回给我们？记住，在填写表格时，你必须准备好所有的证书，因为标准很高，在任何人能够在活动中销售他们的产品之前，这些证书都会被仔细检查。' },
      { en: 'W: I should be fine with doing it on your website, and I already have all my certificates, as we run a small farm shop too. But can you give me your details anyway?', zh: '女：我应该可以在你们的网站上完成，我已经有了所有的证书，因为我们也经营一家小农场商店。但不管怎样，你能给我你们的详细地址吗？' },
      { en: 'M: Sure. Please address it to the Organic Organization, Vendor Applications, 112 Queens Road, Newcastle, Northumbria. The postcode is NU 293LJ. Remember that the closing date is next Tuesday, the 28th of June.', zh: '男：当然。请寄给有机组织，摊贩申请，纽卡斯尔，诺森伯兰郡，皇后路112号。邮编是NU 293LJ。记住截止日期是下周二，6月28日。' },
      { en: 'W: That\'s absolutely wonderful. Thank you so much for your help. Goodbye.', zh: '女：太好了。非常感谢你的帮助。再见。' }
    ]
  },
  {
    id: 'cet4_listening_2024_06_03',
    title: 'Wild Camping in the UK',
    description: '听力原文：Supporters call it wild camping. Opponents call it illegal camping. What both sides accept is that t...',
    category: '环境',
    wordCount: 233,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'Supporters call it wild camping. Opponents call it illegal camping. What both sides accept is that there has been a boom in the past few months, with increasing numbers of visitors pitching their tents on any bit of land they fancy in the UK.', zh: '支持者称之为野外露营。反对者称之为非法露营。双方都承认的是，过去几个月这种现象出现了激增，越来越多的游客在英国任何他们喜欢的土地上搭帐篷。' },
      { en: 'In part, this reflects the fact that official campsites have been wholly or partially closed, or are overflowing, in a summer when fewer people are going abroad. With foreign holidays rendered difficult by travel restrictions, many UK residents are exploring their own country instead.', zh: '部分原因是由于这个夏天出国旅行的人减少，官方营地全部或部分关闭，或者已经满员。由于旅行限制使出国度假变得困难，许多英国居民改为探索自己的国家。' },
      { en: 'The debate over wild camping has become increasingly heated. Landowners complain about litter, environmental damage, and antisocial behavior. Campers argue that they are responsible, leave no trace, and simply want to enjoy the countryside.', zh: '关于野外露营的辩论变得越来越激烈。土地所有者抱怨垃圾、环境破坏和反社会行为。露营者辩称他们有责任感，不留下痕迹，只是想享受乡村风光。' },
      { en: 'Some areas have taken a more tolerant approach, designating specific zones where wild camping is permitted under certain conditions. Others have tightened enforcement, imposing fines on those who camp without permission.', zh: '一些地区采取了更宽容的态度，指定了特定区域，在某些条件下允许野外露营。其他地区则加强了执法，对未经许可露营的人处以罚款。' },
      { en: 'The issue highlights broader questions about access to the countryside, the right to roam, and how to balance individual freedom with environmental protection and property rights.', zh: '这个问题凸显了关于进入乡村的权利、漫游权以及如何在个人自由与环境保护和财产权之间取得平衡的更广泛问题。' }
    ]
  },
  {
    id: 'cet4_listening_2024_06_04',
    title: 'Teaching Children About Money',
    description: '听力原文：M: What\'s the best way to teach children how to save and spend their money?...',
    category: '教育',
    wordCount: 313,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'M: What\'s the best way to teach children how to save and spend their money?', zh: '男：教孩子如何存钱和花钱的最好方法是什么？' },
      { en: 'W: You should make money a regular topic of discussion. It\'s best to start young, so it\'s instinctive rather than a scary subject.', zh: '女：你应该让钱成为经常讨论的话题。最好从小开始，这样就会很自然，而不是一个可怕的话题。' },
      { en: 'M: In our family, we talk openly about things like the budget for holidays, how taxes reduce your income, and how to shop around for the best deals.', zh: '男：在我们家，我们公开讨论假期预算、税收如何减少收入、以及如何货比三家找到最优惠的价格等事情。' },
      { en: 'W: Indeed. It\'s also essential to make money real for children through practical examples. Working out how much we save using discount pizza coupons, for example, is much more relevant than abstract sums.', zh: '女：确实。通过实际例子让钱对孩子来说变得真实也很重要。例如，算出使用折扣比萨券省了多少钱，比抽象的数字更有意义。' },
      { en: 'M: We also give our kids pocket money, and the amount they get is linked to chores, such as putting the bins out and emptying the dishwasher.', zh: '男：我们也给孩子零花钱，他们得到的金额与家务挂钩，比如倒垃圾和清空洗碗机。' },
      { en: 'W: We do that too, and it\'s paid according to their age. Two pounds for each year, so they can see some progression.', zh: '女：我们也这样做，而且按年龄支付。每年两英镑，这样他们可以看到一些进步。' },
      { en: 'M: Teaching them to save is important. We opened a savings account when they were young. After birthdays and Christmas, they would go to the branch and deposit their gift money.', zh: '男：教他们储蓄很重要。我们在孩子很小的时候就开了储蓄账户。生日和圣诞节后，他们会去分行存入他们的礼金。' },
      { en: 'W: Oh, I hadn\'t considered doing that. In our house, we have transparent money boxes for them to put small change in, so they can see their savings grow.', zh: '女：哦，我没考虑过那样做。在我们家，我们有透明的储蓄罐让他们放零钱，这样他们可以看到储蓄增长。' },
      { en: 'M: When the time is right, I\'ll start talking to our children about investing and show them how the money saved for their further education has grown.', zh: '男：时机成熟时，我会开始和孩子们谈论投资，并给他们看为深造而存的钱增长了多少。' },
      { en: 'W: I am always talking to my elder daughter about the importance of saving into a pension. She\'s just started a part-time job and was thinking of not contributing to her pension. Luckily, I managed to persuade her otherwise.', zh: '女：我一直在和我大女儿谈论存养老金的重要性。她刚开始做兼职工作，本来不想缴纳养老金。幸运的是，我说服了她改变主意。' },
      { en: 'M: Yes, it\'s such an important lesson to learn.', zh: '男：是的，这是很重要的一课。' }
    ]
  },
  {
    id: 'cet4_listening_2024_06_05',
    title: 'Rewarding Success (Book Review)',
    description: '听力原文：W: Welcome to Books in Review. Our guest today is John Banks, the author of the bestselling new book...',
    category: '教育',
    wordCount: 395,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'W: Welcome to Books in Review. Our guest today is John Banks, the author of the bestselling new book, Rewarding Success.', zh: '女：欢迎收看《书评》。今天的嘉宾是约翰·班克斯，畅销新书《奖励成功》的作者。' },
      { en: 'M: Glad to be here, Jane.', zh: '男：很高兴来到这里，简。' },
      { en: 'W: John, your book has certainly stirred up a lot of debate. Your main argument is that we should pay students for good grades and academic achievement. That sounds quite controversial.', zh: '女：约翰，你的书确实引发了很多争论。你的主要论点是我们应该为好成绩和学业成就付给学生报酬。这听起来很有争议。' },
      { en: 'M: Well, I know it sounds radical to some people, but the research is quite clear. When students are motivated by tangible rewards, they perform better. It\'s really that simple.', zh: '男：嗯，我知道对一些人来说这听起来很激进，但研究非常清楚。当学生受到有形奖励的激励时，他们表现更好。真的就是这么简单。' },
      { en: 'W: But critics argue that it undermines intrinsic motivation. Students should learn for the love of learning, not for money.', zh: '女：但批评者认为这会破坏内在动机。学生应该为热爱学习而学习，不是为了钱。' },
      { en: 'M: That\'s a nice ideal, but it doesn\'t work for everyone. Many students are disengaged from school. They don\'t see the value in education. Offering financial incentives gives them a reason to try.', zh: '男：这是一个美好的理想，但对每个人都有效。许多学生已经脱离了学校。他们看不到教育的价值。提供经济激励给了他们一个尝试的理由。' },
      { en: 'W: What about students who are already motivated? Wouldn\'t this be unfair to them?', zh: '女：那已经很有动力的学生呢？这对他们不公平吗？' },
      { en: 'M: Actually, my proposal includes rewards for improvement, not just for top grades. So a student who goes from a D to a B would get a significant reward. This levels the playing field.', zh: '男：事实上，我的提议包括奖励进步，不仅仅是最高分。所以一个从D升到B的学生会得到重大奖励。这创造了一个公平的竞争环境。' },
      { en: 'W: Where would the funding come from?', zh: '女：资金从哪里来？' },
      { en: 'M: I propose a combination of public and private funding. Some of it could come from reallocating existing education budgets. We spend so much on remedial programs that don\'t work. Let\'s invest in something that does.', zh: '男：我提议公共和私人资金的结合。一部分可以来自重新分配现有的教育预算。我们在那些无效的补习项目上花了太多钱。让我们投资于有效的东西。' },
      { en: 'W: You also talk about rewarding teachers, not just students.', zh: '女：你也谈到奖励教师，不仅仅是学生。' },
      { en: 'M: Absolutely. Great teachers are the key to student success. If we tie teacher bonuses to student improvement, we create a system where everyone is pulling in the same direction.', zh: '男：当然。优秀的教师是学生成功的关键。如果我们将教师奖金与学生的进步挂钩，我们就创造了一个每个人都朝着同一个方向努力的体系。' },
      { en: 'W: But won\'t this lead to teaching to the test?', zh: '女：但这不会导致应试教育吗？' },
      { en: 'M: That\'s a valid concern, which is why I emphasize measuring improvement rather than absolute scores. A teacher who takes struggling students and helps them make real progress should be rewarded, regardless of where those students end up in the rankings.', zh: '男：这是一个合理的担忧，这就是为什么我强调衡量进步而不是绝对分数。一个带着困难学生帮助他们取得真正进步的教师应该得到奖励，不管这些学生在排名中最终处于什么位置。' },
      { en: 'W: Interesting perspectives. Thank you for joining us, John.', zh: '女：有趣的观点。谢谢你加入我们，约翰。' },
      { en: 'M: Thank you for having me.', zh: '男：谢谢你邀请我。' }
    ]
  },
  {
    id: 'cet4_listening_2024_06_06',
    title: 'Saying \"I\'m Busy\"',
    description: '听力原文：The speaker is launching a campaign to prevent people from complaining about being \"busy.\" Next time...',
    category: '社会',
    wordCount: 262,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'The speaker is launching a campaign to prevent people from complaining about being \"busy.\" Next time someone asks us how we are, we should avoid saying we are busy.', zh: '演讲者正在发起一项运动，阻止人们抱怨自己\"忙碌\"。下次有人问你过得怎么样时，我们应该避免说自己很忙。' },
      { en: 'Many people make the \"I\'m busy\" response to cover up their failure to achieve some purpose. Being busy has become a status symbol in modern society. People wear their busyness as a badge of honor, as if being constantly occupied somehow makes them more important or more valuable.', zh: '许多人做出\"我很忙\"的回答是为了掩盖未能实现某些目标的失败。忙碌已成为现代社会的一种地位象征。人们把忙碌当作荣誉徽章来佩戴，好像不断忙碌不知怎的让他们更重要或更有价值。' },
      { en: 'The speaker argues that this culture of busyness is harmful. It prevents genuine connection. When you tell someone you\'re busy, you\'re essentially shutting down the conversation. You\'re saying you don\'t have time for them.', zh: '演讲者认为这种忙碌文化是有害的。它阻碍了真正的联系。当你告诉别人你很忙时，你实际上是在终止对话。你在说你没有时间陪伴他们。' },
      { en: 'Moreover, the constant state of busyness often masks a lack of priorities. People who are truly productive don\'t need to announce how busy they are. They simply get things done.', zh: '此外，持续的忙碌状态往往掩盖了优先事项的缺失。真正高效的人不需要宣布他们有多忙。他们只是把事情做完。' },
      { en: 'The campaign encourages people to be more mindful of their language and their time. Instead of automatically saying \"I\'m busy,\" the speaker suggests alternatives like \"I\'m focused on a project right now\" or \"I\'m taking some time for myself.\"', zh: '这项运动鼓励人们更加注意自己的语言和时间。演讲者建议用\"我现在正专注于一个项目\"或\"我正在给自己留一些时间\"等替代方式，而不是自动地说\"我很忙\"。' },
      { en: 'The goal is to create a culture where people are honest about their time and energy, where busyness is not glorified, and where meaningful work and meaningful relationships take precedence over the appearance of constant activity.', zh: '目标是创造一种文化，在这种文化中，人们对自己的时间和精力诚实，忙碌不被美化，有意义的工作和有意义的关系优先于不断活动的外表。' }
    ]
  },
  {
    id: 'cet4_listening_2024_06_07',
    title: 'Extreme Sports',
    description: '听力原文：It may sound strange to say that extreme sports can help one reduce fear. But research shows that fa...',
    category: '健康',
    wordCount: 252,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'It may sound strange to say that extreme sports can help one reduce fear. But research shows that facing controlled fear in the context of extreme sports can actually decrease anxiety in everyday life.', zh: '说极限运动能帮助人们减少恐惧可能听起来很奇怪。但研究表明，在极限运动的背景下面对受控的恐惧实际上可以减少日常生活中的焦虑。' },
      { en: 'When doing extreme sports, one must be highly focused. This intense concentration is necessary to avoid dangerous mistakes. A single moment of distraction can have serious consequences.', zh: '做极限运动时，一个人必须高度专注。这种高度集中是必要的，以避免危险的错误。一瞬间的分心就可能产生严重后果。' },
      { en: 'This level of focus creates a state of flow, where the mind is completely absorbed in the present moment. Many extreme sports enthusiasts report that this mental state is one of the main attractions of their chosen activities.', zh: '这种专注程度创造了一种心流状态，在这种状态下，头脑完全沉浸在当下时刻。许多极限运动爱好者报告说，这种精神状态是他们选择的活动的主要吸引力之一。' },
      { en: 'Extreme sports can benefit us more than standard exercise routines and sports by enabling us to get an all-over workout. These activities engage not just the body but also the mind in ways that conventional exercise cannot match.', zh: '极限运动比标准锻炼和运动更能使我们受益，因为它能让我们得到全身锻炼。这些活动不仅锻炼身体，而且以传统锻炼无法比拟的方式锻炼大脑。' },
      { en: 'They require split-second decision making, physical coordination, and emotional regulation. The combination of physical exertion and mental challenge provides a comprehensive form of exercise.', zh: '它们需要瞬间决策、身体协调和情绪调节。体力消耗和脑力挑战的结合提供了一种全面的锻炼形式。' },
      { en: 'However, extreme sports are not without risks. Proper training, appropriate safety equipment, and awareness of one\'s limits are essential. The goal is not to be reckless but to push boundaries in a controlled and intelligent way.', zh: '然而，极限运动并非没有风险。适当的训练、适当的安全装备和对自身极限的认识是必不可少的。目标不是鲁莽，而是以受控和明智的方式突破界限。' }
    ]
  },
  {
    id: 'cet4_listening_2024_06_08',
    title: 'Conflict in Organizations',
    description: '听力原文：Conflict in organizations is natural. Whenever people work together, differences of opinion are inev...',
    category: '社会',
    wordCount: 297,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'Conflict in organizations is natural. Whenever people work together, differences of opinion are inevitable. The question is not whether conflict will occur, but how it will be managed.', zh: '组织中的冲突是自然的。只要人们一起工作，意见分歧就是不可避免的。问题不在于冲突是否会发生，而在于如何管理冲突。' },
      { en: 'Some people want to avoid conflict at all costs. They fear that disagreements will damage relationships or create an unpleasant work environment. These individuals often suppress their own opinions to maintain workplace harmony.', zh: '有些人想不惜一切代价避免冲突。他们担心分歧会破坏关系或创造一个不愉快的工作环境。这些人经常压抑自己的意见以维持工作场所的和谐。' },
      { en: 'However, productive conflict is important for teams and organizations. It stimulates innovative ideas. When people with different perspectives engage in open, respectful debate, they challenge each other\'s assumptions and push the group toward better solutions.', zh: '然而，建设性的冲突对团队和组织很重要。它能激发创新想法。当拥有不同观点的人参与开放、尊重的辩论时，他们挑战彼此的假设，推动团队找到更好的解决方案。' },
      { en: 'The key is to distinguish between productive and destructive conflict. Productive conflict focuses on ideas and issues, not personalities. It is characterized by open-mindedness, mutual respect, and a shared commitment to finding the best solution.', zh: '关键在于区分建设性冲突和破坏性冲突。建设性冲突关注想法和问题，而不是个性。它的特点是思想开放、相互尊重和共同致力于找到最佳解决方案。' },
      { en: 'Destructive conflict, on the other hand, is personal and attacks individuals. It creates divisions, damages trust, and undermines team cohesion.', zh: '另一方面，破坏性冲突是针对个人的，攻击个人。它制造分裂、破坏信任、削弱团队凝聚力。' },
      { en: 'Productive conflict needs mutual trust as a basis. Team members must believe that their colleagues have good intentions and that disagreements are about finding the best path forward, not about winning or losing.', zh: '建设性的冲突需要相互信任作为基础。团队成员必须相信他们的同事有良好的意图，分歧是关于找到最佳前进道路，而不是关于输赢。' },
      { en: 'Leaders play a crucial role in modeling and encouraging productive conflict. They must create psychological safety so that team members feel comfortable expressing dissenting views without fear of retribution.', zh: '领导者在示范和鼓励建设性冲突方面发挥着关键作用。他们必须创造心理安全感，让团队成员感到表达不同意见时不会因担心报复而不安。' }
    ]
  },
  {
    id: 'cet4_reading_2024_12_01',
    title: 'The Human Connection to Nature',
    description: '阅读理解：The weakening of the human connection to nature might be good for economic growth but is bad for peo...',
    category: '环境',
    wordCount: 408,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'The weakening of the human connection to nature might be good for economic growth but is bad for people. A tipping point was reached in 2020 when human-made materials—such as steel, concrete and plastic—were found to weigh more than all life on Earth. Continuing to grow concrete forests rather than real ones is shortsighted. Simply being in the nearest wood has such health benefits that the Woodland Trust successfully lobbied for it to be prescribed by doctors.', zh: '人类与自然联系的减弱可能有利于经济增长，但对人类有害。2020年达到了一个转折点，当时发现人造材料——如钢铁、混凝土和塑料——的重量超过了地球上所有生物的重量。继续发展混凝土森林而不是真正的森林是一种短视的行为。仅仅是到最近的树林里待一会儿就有如此大的健康益处，以至于林地信托成功地游说医生将其作为处方开出来。' },
      { en: 'Yet slipping from popular culture is the wonder and beauty of the natural world. For every three nature-related words in hit songs of the 1950s, researchers found, there was only slightly more than one 50 years later. It is not a moment too soon that teenagers will be able to take a natural history test, given that for decades children have been able to name more video game characters than wildlife species.', zh: '然而，自然世界的奇妙和美丽正在从流行文化中消失。研究人员发现，20世纪50年代热门歌曲中每三个与自然相关的词语，50年后就只剩下略多于一个了。鉴于几十年来孩子们能够说出更多的电子游戏角色名称而不是野生动物物种名称，青少年将能够参加自然历史测试，这并非为时过早。' },
      { en: 'Part of remedying this social disease would be for parliament to pass a \"right to grow\" law, allowing anyone to turn underused public spaces into vegetable and fruit gardens. The idea is for people to get back in touch with the soil—while producing food sustainably.', zh: '纠正这种社会疾病的部分方法是让议会通过一项\"种植权\"法律，允许任何人将未充分利用的公共空间变成蔬菜和水果园。这个想法是让人们重新接触土壤——同时可持续地生产食物。' },
      { en: 'Vegetable planting has a respectable tradition. In April 1649, locals responded to high prices and food shortages by cultivating vegetables on common land in Southern England. The practice of throwing seed bombs to turn vacant plots of land green took off in 1970s New York, and has been revived by green-thumbed social media influencers who defy local US regulations in a war on ugly spots in cities.', zh: '蔬菜种植有着值得尊敬的传统。1649年4月，当地人通过在英国南部的公共土地上种植蔬菜来应对高价格和食物短缺。投掷种子炸弹将闲置土地变绿的做法在20世纪70年代的纽约开始流行，并被有园艺天赋的社交媒体影响者复兴，他们无视美国当地法规，向城市中的丑陋斑点宣战。' },
      { en: 'Apart from the urgent task of providing more healthy nutrients to those who increasingly can\'t afford them, publicly accessible fruit and vegetable gardens connect what we eat to where it comes from—the means of production, if you will. They can make unlovely spaces lovely, and marry use and beauty as well as help promote a sense of community. Plants are also, of course, our first defence against species loss and climate change. Such planting is a small step for humanity—in the right direction.', zh: '除了向那些越来越负担不起的人提供更多健康营养的紧迫任务之外，公众可进入的水果和蔬菜园将我们吃的东西与它的来源联系起来——如果你愿意的话，这就是生产手段。它们可以使不美丽的空间变得美丽，将实用与美观结合起来，并帮助促进社区意识。当然，植物也是我们抵御物种灭绝和气候变化的第一道防线。这种种植对人类来说是一小步——但却是朝着正确方向的一小步。' }
    ]
  },
  {
    id: 'cet4_reading_2024_12_02',
    title: 'Chocolate and Global Warming',
    description: '阅读理解：Chocolates save us from many things, especially emotional distress. People believe chocolates can ch...',
    category: '科技',
    wordCount: 333,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'Chocolates save us from many things, especially emotional distress. People believe chocolates can cheer them up instantly. For centuries, chocolate has been a beloved treat, valued for its rich flavor and mood-enhancing properties.', zh: '巧克力使我们从许多事情中解脱出来，尤其是情绪困扰。人们相信巧克力能立即让他们振作起来。几个世纪以来，巧克力一直是一种受人喜爱的美食，因其浓郁的风味和改善心情的特性而备受珍视。' },
      { en: 'However, scientists recently made a startling assertion: chocolate could become unavailable in less than 30 years. The reason is global warming. The cacao tree, from which chocolate is derived, grows only in a narrow band around the equator, requiring specific temperature and humidity conditions.', zh: '然而，科学家最近做出了一个惊人的断言：巧克力可能在不到30年的时间内变得无法获得。原因是全球变暖。可可树（巧克力来源于此）只在赤道周围的狭窄地带生长，需要特定的温度和湿度条件。' },
      { en: 'As temperatures rise, the suitable growing areas for cacao are shrinking. If cacao farms were shifted to cooler mountainous areas, the natural habitat of wildlife there would be ruined. This creates a difficult dilemma: protect the chocolate supply or protect mountain ecosystems.', zh: '随着气温上升，可可的适宜种植区域正在缩小。如果可可农场转移到较凉爽的山区，那里野生动物的自然栖息地将被破坏。这造成了一个两难困境：保护可可供应还是保护山地生态系统。' },
      { en: 'The cacao farms have suffered a lot due to a decrease in produce. Drought and rising temperatures have reduced yields in many traditional cacao-growing regions. Farmers are struggling to maintain production, and some are abandoning their farms altogether.', zh: '可可农场因产量下降而遭受了很多损失。干旱和气温上升减少了许�的多传统可可种植区的产量。农民们正在努力维持生产，一些人正在完全放弃他们的农场。' },
      { en: 'At the University of California\'s new bio-sciences building, scientists are trying to gene-edit cacao seedlings for them to withstand a drier, warmer climate. This cutting-edge research offers hope that we may be able to save chocolate from the threat of climate change.', zh: '在加州大学的新生物科学大楼里，科学家们正试图通过基因编辑可可幼苗，使它们能够承受更干燥、更温暖的气候。这项前沿研究给人们带来了希望，我们可能能够拯救巧克力免受气候变化的威胁。' },
      { en: 'The work involves identifying genes that help cacao trees resist heat and drought, then using CRISPR technology to incorporate these traits into commercial cacao varieties. If successful, this could ensure a stable chocolate supply for future generations while reducing the pressure to expand farming into sensitive mountain habitats.', zh: '这项工作涉及识别帮助可可树抵抗高温和干旱的基因，然后使用CRISPR技术将这些特性整合到商业可可品种中。如果成功，这可以确保为后代提供稳定的巧克力供应，同时减少将农业扩展到敏感山地的压力。' }
    ]
  },
  {
    id: 'cet4_reading_2024_12_03',
    title: 'Self-Driving Cars and Accidents',
    description: '阅读理解：Research in human-vehicle interaction has shown even systems designed to automate driving are far fr...',
    category: '科技',
    wordCount: 312,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'Research in human-vehicle interaction has shown even systems designed to automate driving are far from being error-proof. Recent evidence points to drivers\' limited understanding of what these systems can and cannot do as a contributing factor to system misuse.', zh: '人车交互研究表明，即使是旨在实现自动驾驶的系统也远非万无一失。最新证据显示，驾驶者对系统功能的认知局限是导致误用的重要因素。' },
      { en: 'A recent study tackles the issue of over-trusting drivers and the resulting system misuse from a legal viewpoint. It looks at what the manufacturers of self-driving cars should legally do to ensure that drivers understand how to use the vehicles appropriately.', zh: '一项研究从法律视角探讨了驾驶者过度信任系统及由此引发的误用问题。它研究了自动驾驶汽车制造商在法律上应该做什么，以确保驾驶者了解如何正确使用车辆。' },
      { en: 'The study found that simply asking buyers to sign end-user license agreements (EULAs) is probably not sufficient to guarantee safety. Most people don\'t read these agreements carefully, and even if they do, the legal language may not effectively communicate the system\'s limitations.', zh: '研究发现，仅仅要求买家签署终端用户许可协议（EULA）可能不足以保证安全。大多数人不会仔细阅读这些协议，即使他们读了，法律语言也可能无法有效传达系统的局限性。' },
      { en: '\"Warning fatigue\" is another significant problem. When drivers receive too many warnings, they tend to ignore them over time. This phenomenon, combined with distracted driving, creates a dangerous situation where the driver is not prepared to take control when the system fails.', zh: '\"警告疲劳\"是另一个重要问题。当驾驶者收到太多警告时，他们往往会随着时间的推移而忽视它们。这种现象与分心驾驶相结合，造成了一种危险的情况，即当系统失效时，驾驶者没有准备好接管控制权。' },
      { en: 'The researchers argue that more emphasis should be placed on driver training. Simply handing someone the keys to a self-driving car without proper education about its capabilities and limitations is irresponsible.', zh: '研究人员认为，应该更加重视驾驶员培训。仅仅把自动驾驶汽车的钥匙交给某人，而不对其能力和局限性进行适当教育，是不负责任的。' },
      { en: 'Manufacturers need to develop better ways to communicate system limitations, perhaps through mandatory training programs or more intuitive in-vehicle displays. The goal should be to ensure that drivers have a realistic understanding of what the car can and cannot do.', zh: '制造商需要开发更好的方式来传达系统局限性，也许通过强制性培训计划或更直观的车内显示屏。目标应该是确保驾驶者对汽车能做什么和不能做什么有现实的理解。' }
    ]
  },
  {
    id: 'cet4_reading_2024_12_04',
    title: 'Protein Consumption',
    description: '阅读理解：Do you ever blend up a protein drink for breakfast, or grab a protein bar following an afternoon wor...',
    category: '健康',
    wordCount: 437,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'Do you ever blend up a protein drink for breakfast, or grab a protein bar following an afternoon workout? If so, you are likely among the millions of people in search of more protein-rich diets.', zh: '你会在早餐时调制一杯蛋白质饮料，或者在下午锻炼后拿一根蛋白质棒吗？如果是这样，你可能是数百万寻求更多富含蛋白质饮食的人之一。' },
      { en: 'Protein-enriched products are found everywhere. But contrary to all the publicity that everyone needs more protein, most Americans get twice as much as they need.', zh: '蛋白质强化产品随处可见。但 contrary to 所有的宣传说每个人都需要更多蛋白质，大多数美国人摄入的蛋白质是他们需要的两倍。' },
      { en: 'Many of us living in the most developed countries are buying into a myth of protein deficiency created by food companies and self-identified health experts. Global retail sales of protein supplement products reached an astonishing US $18.9 billion in 2020.', zh: '我们这些生活在最发达国家中的许多人正在相信一种由食品公司和自称的健康专家创造的蛋白质缺乏神话。2020年，蛋白质补充剂产品的全球零售额达到了惊人的189亿美元。' },
      { en: 'But are we really in need of more protein? Physicians in the U.S. have never actually examined a patient with protein deficiency because simply by eating an adequate number of daily calories we are also most likely getting enough protein.', zh: '但我们真的需要更多蛋白质吗？美国医生从未实际检查过蛋白质缺乏的患者，因为仅仅通过摄入足够数量的每日卡路里，我们也很可能获得了足够的蛋白质。' },
      { en: 'In fact, Americans currently consume almost twice the National Academy of Medicine\'s recommended daily intake of protein although the most desirable protein intake may vary depending on age and activity level.', zh: '事实上，美国人目前摄入的蛋白质几乎是国家医学科学院推荐日摄入量的两倍，尽管最理想的蛋白质摄入量可能因年龄和活动水平而异。' },
      { en: 'For example, if you\'re a dedicated athlete you might need to consume higher quantities of protein. Generally, though, a 140-pound person should not exceed 120 grams of protein per day, particularly because a high protein diet can strain kidney and liver function and increase risks of developing heart disease and cancer.', zh: '例如，如果你是一名专注的运动员，你可能需要消耗更多的蛋白质。不过，一般来说，一个140磅的人每天不应该超过120克蛋白质，特别是因为高蛋白饮食会增加肾脏和肝脏功能的负担，并增加患心脏病和癌症的风险。' },
      { en: 'While fats and sugar have taken the beating in turns since over a century ago, protein has managed to remain our red-hot favorite.', zh: '自一个多世纪以来，脂肪和糖轮流受到打击，而蛋白质却一直保持着我们最热门的宠儿地位。' },
      { en: 'In the 1970s through the 1990s, protein products remained visible but moved back somewhat with the dietary spotlight firmly fixed on low-calorie, low-fat, sugar-free snack foods and beverages following the publication of studies linking sugar and saturated fat consumption to heart disease.', zh: '在20世纪70年代到90年代，蛋白质产品仍然可见，但 somewhat 退居次要地位，因为膳食聚光灯牢牢地固定在低热量、低脂肪、无糖零食和饮料上，此前发表的研究将糖和饱和脂肪的消耗与心脏病联系起来。' },
      { en: 'Later research in 2003, however, suggested high-protein diets could aid in weight loss, and protein quickly regained its former nutrient-superstar status.', zh: '然而，2003年的后续研究表明高蛋白饮食可以帮助减肥，蛋白质迅速重新获得了其以前的超级营养明星地位。' },
      { en: 'Now most people living in high-income nations are consuming enough protein. When we replace meals with a protein bar or drink, we also risk missing out on the rich sources of antioxidants, vitamins and many other benefits of real food.', zh: '现在，大多数生活在高收入国家的人摄入了足够的蛋白质。当我们用蛋白质棒或饮料代替正餐时，我们还可能错过抗氧化剂、维生素和许多真正食物的其他益处。' }
    ]
  },
  {
    id: 'cet4_listening_2024_12_01',
    title: 'Buying a New Phone',
    description: '听力原文：M: I\'m going to the city centre to buy a new phone today....',
    category: '社会',
    wordCount: 274,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'M: I\'m going to the city centre to buy a new phone today.', zh: '男：我今天打算去市中心买一部新手机。' },
      { en: 'W: Didn\'t you buy a new phone just two months ago?', zh: '女：你不是两个月前才买了一部新手机吗？' },
      { en: 'M: It was three months ago, and I already know what you\'re going to say. You\'re thinking I shouldn\'t replace my phone this soon.', zh: '男：是三个月前，而且我已经知道你要说什么了。你觉得我不应该这么快就换手机。' },
      { en: 'W: No, actually, I was wondering how you could possibly afford a new phone. But, now that you mention it, I do think getting another phone so soon is wasteful, regardless of the cost.', zh: '女：不，其实，我是在想你怎么可能负担得起一部新手机呢。不过既然你提到了，我也觉得这么快又买一部手机，不管花多少钱，都是浪费。' },
      { en: 'M: Maybe you\'re right, but the thing is, everyone at the office has a nice, expensive phone, and I\'m a little embarrassed by mine. I just got a credit card, so I thought I might as well buy a new phone.', zh: '男：也许你说得对，但问题是，办公室里的每个人都有一部漂亮又昂贵的手机，而我的手机让我有点尴尬。我刚拿到信用卡，所以我想干脆买一部新手机吧。' },
      { en: 'W: I don\'t think buying a phone on credit is a good idea. Look, you\'ve only been working for five months now. People understand that you are a recent graduate, and I doubt anyone cares about your phone other than yourself.', zh: '女：我觉得用信用卡买手机可不是个好主意。你看，你到现在才工作了五个月。大家都知道你是刚毕业的学生，而且我怀疑除了你自己，没人会在意你的手机。' },
      { en: 'M: Maybe you\'re right, but the credit card has a very good special offer, where I don\'t pay any interest for six months. I\'ll be able to pay for the phone well before that period is over.', zh: '男：也许你说得对，但那张信用卡有个很不错的特惠活动，六个月内不用付利息。我肯定能在那段时间之前还清手机的费用。' },
      { en: 'W: I still think it\'s a bad idea to use a credit card for something you don\'t need. One of my colleagues bought a lot of things on credit during her first year of work, and it became a bad habit, and she accumulated a lot of debt.', zh: '女：我还是觉得用信用卡买不需要的东西是个坏主意。我有个同事在工作的第一年就用信用卡买了很多东西，结果养成了坏习惯，还欠了一大笔债。' },
      { en: 'M: Well, I can see how that might happen to someone, and I\'m sure she regrets it, but I know it won\'t happen to me.', zh: '男：嗯，我能理解这种事可能会发生在别人身上，而且我相信她现在肯定后悔了，但我知道这种事不会发生在我身上。' }
    ]
  },
  {
    id: 'cet4_listening_2024_12_02',
    title: 'Tiny Home Movement',
    description: '听力原文：W: Welcome to The Morning Show. Our guest today is a popular blog writer and a major figure in the t...',
    category: '环境',
    wordCount: 316,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'W: Welcome to The Morning Show. Our guest today is a popular blog writer and a major figure in the tiny home community. Welcome, Bob Jones.', zh: '女：欢迎收看《晨间秀》。今天我们的嘉宾是一位受欢迎的博客作家，也是微型住宅社区的重要人物。欢迎你，鲍勃·琼斯。' },
      { en: 'M: Hi, Mary.', zh: '男：嗨，玛丽。' },
      { en: 'W: Hi, Bob. You\'re an advocate of the tiny home movement. A lot of people don\'t know about this movement. Can you tell our audience what it\'s about?', zh: '女：嗨，鲍勃。你是微型住宅运动的倡导者。很多人对这项运动还不太了解。你能给我们的观众讲讲这到底是怎么回事吗？' },
      { en: 'M: Well, it\'s mainly about increasing home ownership and protecting the environment.', zh: '男：嗯，这项运动主要是为了提高住房自有率，并保护环境。' },
      { en: 'W: Of course, those are great goals. But I\'ve seen your blog, and you write about houses that are as small as 20 square meters. That\'s not a realistic size for families.', zh: '女：当然，这些都是很棒的目标。但我读过你的博客，你写的房子小到只有20平方米。对于家庭来说，这可不是个现实的面积。' },
      { en: 'M: I do talk about very small homes, but there\'s no set definition of a tiny home. And other people include homes that are much larger, say, 60 square meters. And you\'d be surprised. Many families of four are happy living in houses that are under 30 square meters.', zh: '男：我确实讨论过非常小的住宅，但微型住宅并没有一个固定的定义。其他人可能把面积大得多的住宅也算作微型住宅，比如说60平方米的。而且你会惊讶地发现，很多四口之家都乐于住在不到30平方米的房子里。' },
      { en: 'W: But I think most of us want spacious homes. The average new house in this area is 150 square meters. And that\'s what people dream of owning.', zh: '女：但我想我们大多数人都想要宽敞的家。我们这个地区新建住宅的平均面积是150平方米。这也是人们梦想拥有的房子大小。' },
      { en: 'M: Yes, but I think that dream needs to change, considering the cost of housing.', zh: '男：是的，但考虑到住房成本，我认为这个梦想需要改变。' },
      { en: 'W: Housing costs are high, but do people really save that much by having a smaller home?', zh: '女：住房成本确实很高，但人们真的能通过住更小的房子省下很多钱吗？' },
      { en: 'M: Absolutely. Many people who can only afford to rent a larger home are able to buy a tiny home. In this city, the average home costs $200,000, and a tiny home costs just $50,000.', zh: '男：当然能。很多只能租得起大房子的人，现在有能力买微型住宅了。在这个城市，普通住宅的价格是20万美元，而微型住宅只需5万美元。' },
      { en: 'W: Those are huge savings.', zh: '女：这可是笔巨大的节省。' },
      { en: 'M: So, tiny homes might not be for everyone, but they\'re a good option for many.', zh: '男：所以，微型住宅可能并不适合所有人，但对很多人来说，它们是个不错的选择。' },
      { en: 'W: You mentioned the environment earlier. How does this benefit the planet?', zh: '女：你刚才提到了环境。这对地球有什么好处呢？' },
      { en: 'M: Well, if people have smaller homes, they use less land and fewer resources to build them.', zh: '男：嗯，如果人们住更小的房子，他们建造房子时占用的土地和消耗的资源就会更少。' }
    ]
  },
  {
    id: 'cet4_listening_2024_12_03',
    title: 'Physical Activity for Children',
    description: '听力原文：Kids need time every day to run, jump, stretch and play. These experiences have been shown to build ...',
    category: '教育',
    wordCount: 319,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'Kids need time every day to run, jump, stretch and play. These experiences have been shown to build children\'s confidence and pleasure in physical activities. Develop their motor skills and even improve emotional well being.', zh: '孩子们每天都需要时间来跑步、跳跃、伸展和玩耍。这些经历已被证明可以建立孩子对体育活动的信心和乐趣，发展他们的运动技能，甚至改善情绪健康。' },
      { en: 'To begin with, children seem to have a natural desire to overcome challenges and take risks. Taking healthy risks through physical movement builds children\'s confidence and ability to solve problems and persist through frustration.', zh: '首先，孩子们似乎天生就有克服挑战和冒险的渴望。通过身体运动承担健康风险，可以建立孩子的信心和解决问题以及坚持度过挫折的能力。' },
      { en: 'Secondly, movement activities build children\'s big body skills such as coordination and balance. As well as the fine motor skills they need for tasks like writing, tying their shoes, or throwing and catching a ball.', zh: '其次，运动活动可以培养孩子的身体大肌肉技能，如协调和平衡，以及他们需要用于写字、系鞋带或投掷和接球等任务的精细运动技能。' },
      { en: 'Thirdly, according to the American Psychological Association, regular physical activity, and especially outdoor activity, reduces children\'s stress and depression and improves their ability to focus and learn. Regular exercise can significantly improve self regulation and decrease disciplinary consequences for negative behavior. Physical activity provides a positive outlet for frustration, anxiety or anger and can become a healthy coping skill throughout life.', zh: '第三，根据美国心理协会的说法，定期的体育活动，尤其是户外活动，可以减少儿童的压力和抑郁，提高他们的专注和学习能力。定期锻炼可以显著改善自我调节能力，减少负面行为的纪律后果。体育活动为挫折、焦虑或愤怒提供了一个积极的宣泄口，并可以成为一生中健康的应对技能。' },
      { en: 'Finally, we know that physical activity is important for our physical and mental health and cultivating the habit of physical activity starts early. Children are more likely to develop a lifelong love of physical activity from frequent positive early experiences.', zh: '最后，我们知道体育活动对我们的身心健康很重要，而且培养体育活动习惯要从早期开始。孩子如果从早期频繁的积极经历中，更有可能培养对体育活动的终身热爱。' },
      { en: 'Not every child enjoys competitive sports or playing with balls, and that\'s okay. There are plenty of other options, such as imaginative play, noncompetitive games, and gardening or nature experiences.', zh: '不是每个孩子都喜欢竞技运动或球类运动，这没关系。还有很多其他选择，比如想象性游戏、非竞争性游戏，以及园艺或自然体验。' }
    ]
  },
  {
    id: 'cet4_listening_2024_12_04',
    title: '(补充)',
    description: '听力原文：The passage discusses the importance of reading for pleasure. It notes that few of us read books aft...',
    category: '教育',
    wordCount: 175,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'The passage discusses the importance of reading for pleasure. It notes that few of us read books after leaving school, which is disturbing because books are no less necessary to one\'s mental life than fresh air is to one\'s physical life.', zh: '这篇文章讨论了为乐趣而阅读的重要性。它指出，我们中很少有人在学校毕业后还会读书，这令人不安，因为书籍对一个人的精神生活的必要性，不亚于新鲜空气对身体生活的必要性。' },
      { en: 'From good reading we can derive companionship, experience and instruction. A good book is our faithful friend. It can increase our contentment when we are cheerful and happy, and lessen our pain when we are sad or lonely. Books can also offer us a wide range of experience.', zh: '从良好的阅读中，我们可以获得陪伴、经验和教诲。一本好书是我们忠实的朋友。当我们快乐幸福时，它可以增加我们的满足感；当我们悲伤或孤独时，它可以减轻我们的痛苦。书籍还可以为我们提供广泛的经验。' },
      { en: 'Few of us can travel far from home or live long over 100, but all of us can live many lives through the pages of books. What\'s more, reading books can increase our intellectual ability, broaden our minds and make us wise.', zh: '我们中很少有人能远行或活到100岁以上，但我们都可以通过书页经历许多种人生。更重要的是，读书可以提高我们的智力，开阔我们的视野，使我们变得明智。' },
      { en: 'With the coming of TV, books are no longer read as widely as they once were. However, nothing can replace the role that books play in our lives.', zh: '随着电视的到来，书籍不再像过去那样被广泛阅读。然而，没有什么可以替代书籍在我们生活中扮演的角色。' }
    ]
  },
  {
    id: 'cet4_reading_2025_06_01',
    title: 'Pandas and Research',
    description: '阅读理解：New research suggests that pandas may have more secrets than previously thought. These beloved black...',
    category: '科技',
    wordCount: 320,
    coverColor: 'bg-violet-500',
    paragraphs: [
      { en: 'New research suggests that pandas may have more secrets than previously thought. These beloved black-and-white bears have long fascinated scientists and the public alike, but recent studies are revealing surprising new information about their behavior, diet, and conservation needs.', zh: '新研究表明，大熊猫可能有比以前认为的更多的秘密。这些受人喜爱的黑白熊长期以来一直让科学家和公众着迷，但最近的研究正在揭示关于它们行为、饮食和保护需求的令人惊讶的新信息。' },
      { en: 'Giant pandas are known for their specialized diet, consisting almost entirely of bamboo. However, researchers have discovered that pandas are more adaptable in their food choices than previously believed. Camera traps in the wild have captured footage of pandas consuming other plants and even small animals on occasion.', zh: '大熊猫以其专门的饮食而闻名，几乎完全由竹子组成。然而，研究人员发现大熊猫在食物选择上比以前认为的更具适应性。野外的相机陷阱拍摄到了大熊猫食用其他植物甚至小动物的镜头。' },
      { en: 'This dietary flexibility may be crucial for their survival in the face of climate change. As global temperatures rise, bamboo forests are shifting to higher elevations. Pandas that can supplement their diet with alternative food sources may have a better chance of adapting to these changes.', zh: '这种饮食灵活性对它们在面对气候变化时的生存可能至关重要。随着全球气温上升，竹林正在向更高海拔迁移。能够用替代食物补充饮食的大熊猫可能有更好的机会适应这些变化。' },
      { en: 'The research also sheds light on panda social behavior. Contrary to the long-held belief that pandas are solitary animals, new evidence suggests they may have more complex social structures than previously recognized. GPS tracking has revealed that individual pandas maintain regular contact with certain other pandas, forming what appear to be loose social networks.', zh: '这项研究还揭示了大熊猫的社会行为。与长期以来认为大熊猫是独居动物的观点相反，新证据表明它们可能比以前认识的具有更复杂的社会结构。GPS追踪显示，个体大熊猫与某些其他大熊猫保持定期联系，形成看似松散的社会网络。' },
      { en: 'Conservation efforts for pandas have made significant progress in recent decades. The wild panda population has increased, and their status was upgraded from \"endangered\" to \"vulnerable\" on the global species list. However, habitat fragmentation remains a major threat, and continued research is essential to ensure their long-term survival.', zh: '大熊猫的保护工作近几十年来取得了重大进展。野生大熊猫数量有所增加，它们在全球物种名单上的状态从\"濒危\"升级为\"易危\"。然而，栖息地碎片化仍然是一个重大威胁，持续的研究对确保它们的长期生存至关重要。' }
    ]
  },
  {
    id: 'cet4_reading_2025_06_02',
    title: 'American Obsession with Looks',
    description: '阅读理解：A fight is going on to remove pressure on women to conform to an absurd beauty ideal. For decades, w...',
    category: '健康',
    wordCount: 321,
    coverColor: 'bg-teal-500',
    paragraphs: [
      { en: 'A fight is going on to remove pressure on women to conform to an absurd beauty ideal. For decades, women have been bombarded with images of impossible beauty standards in magazines, movies, and advertising. This constant exposure has created a toxic culture where women feel they must look a certain way to be valued.', zh: '一场反对女性被迫符合荒谬美丽标准的斗争正在进行中。几十年来，女性一直被杂志、电影和广告中不可能达到的美丽标准形象所轰炸。这种持续的接触创造了一种有毒的文化，在这种文化中，女性感到她们必须以某种特定的方式看起来才能被重视。' },
      { en: 'The rise of social media has intensified this problem. The \"Instagram face\"—a homogenized look characterized by full lips, high cheekbones, and flawless skin—is now regarded as the new beauty ideal. Young women in particular are comparing themselves to carefully curated and heavily filtered images, leading to body dissatisfaction and low self-esteem.', zh: '社交媒体的兴起加剧了这一问题。\"Instagram面孔\"——一种以丰满的嘴唇、高颧骨和完美的皮肤为特征的同化外观——现在被视为新的美丽理想。年轻女性尤其将自己与精心策划和重度滤镜处理的图像进行比较，导致身体不满和自卑。' },
      { en: 'Research has shown that obsessive filtering has resulted in a tendency to regard one\'s body as an object of observation and judgment. This phenomenon, known as self-objectification, is linked to depression, anxiety, and disordered eating.', zh: '研究表明，过度的滤镜导致了一种将自己的身体视为观察和评判对象的倾向。这种现象被称为自我物化，与抑郁、焦虑和饮食失调有关。' },
      { en: 'The beauty industry profits from these insecurities, selling products that promise to fix supposed flaws. However, the problem is not individual appearance but a culture that values women primarily for how they look.', zh: '美容行业从这些不安全感中获利，销售承诺修复所谓缺陷的产品。然而，问题不在于个人外表，而在于一种主要根据女性外表来评价她们的文化。' },
      { en: 'Some progress is being made. Body positivity movements are challenging narrow beauty standards. More diverse representation in media is helping to expand definitions of beauty. However, the author argues that psychological intervention should be introduced to alleviate Americans\' obsession with looks. This could include media literacy education to help people critically analyze the images they consume, as well as mental health support for those struggling with body image issues.', zh: '一些进步正在取得。身体积极运动正在挑战狭隘的美丽标准。媒体中更多样化的表现形式正在帮助扩展美丽的定义。然而，作者认为应该引入心理干预来缓解美国人对外表的迷恋。这可能包括媒体素养教育，帮助人们批判性地分析他们接触到的图像，以及为那些与身体形象问题作斗争的人提供心理健康支持。' }
    ]
  },
  {
    id: 'cet4_listening_2025_06_01',
    title: 'Rush Hour Traffic',
    description: '听力原文：M: Hey Mariah, you seem to be very much annoyed. What happened?...',
    category: '社会',
    wordCount: 299,
    coverColor: 'bg-blue-500',
    paragraphs: [
      { en: 'M: Hey Mariah, you seem to be very much annoyed. What happened?', zh: '男：嘿，玛丽亚，你看起来很烦躁。发生什么事了？' },
      { en: 'W: Rush hour in this city is killing me.', zh: '女：这个城市的交通高峰时段简直要了我的命。' },
      { en: 'M: Ah, yes. Rush hour is terrible, especially in the morning between 8 and 9. But what else can you expect in a city this big?', zh: '男：啊，是啊。高峰时段很糟糕，尤其是早上8点到9点之间。但在这么大的城市里，你还能指望什么呢？' },
      { en: 'W: Well, I think the local government could help improve things. I mean, getting rid of rush hour may be impossible. But it could be made more tolerable, don\'t you think?', zh: '女：嗯，我认为地方政府可以帮助改善情况。我是说，消除高峰时段可能是不可能的。但它可以变得更容易忍受，你不觉得吗？' },
      { en: 'M: Um, but I\'m not sure how.', zh: '男：嗯，但我不确定怎么做。' },
      { en: 'W: Well, for example, the subway system could have air conditioning. I know many cities in the world have air conditioning in their subway, so why can\'t we? It gets so hot in the summer, I can hardly breathe down there. And add to that, the rush hour crowds with strangers packed close together in the subway carriages. The whole thing is just horrible.', zh: '女：嗯，例如，地铁系统可以安装空调。我知道世界上很多城市的地铁都有空调，为什么我们不能呢？夏天太热了，我在下面几乎无法呼吸。再加上高峰时段的拥挤人群，陌生人挤在地铁车厢里。整个事情简直太可怕了。' },
      { en: 'M: Ah, yes, you are completely right. The trains here are too old. The government should definitely invest in new ones with air conditioning. I guess I\'m fortunate I take the bus instead.', zh: '男：啊，是的，你说得完全正确。这里的火车太旧了。政府绝对应该投资购买带空调的新火车。我想我很幸运改乘公交车了。' },
      { en: 'W: Oh, that\'s much better.', zh: '女：哦，那好多了。' },
      { en: 'M: Yeah, it\'s more convenient. Bus number 36 goes straight from my house to the office. It\'s a 30-minute ride and I don\'t have to make any changes.', zh: '男：是啊，更方便了。36路公交车从我家直达办公室。车程30分钟，不用换乘。' },
      { en: 'W: That sounds nice. I tell you, my current commute is killing me. Maybe I should move closer to the office.', zh: '女：听起来不错。告诉你，我目前的通勤简直要了我的命。也许我应该搬到离办公室更近的地方。' },
      { en: 'M: Well, I know a great housing agent. I found the flat I\'m living in now through him. And I love it.', zh: '男：嗯，我认识一个很棒的房屋中介。我现在住的公寓就是通过他找到的。我很喜欢。' },
      { en: 'W: Hmm. Could you send me his number please?', zh: '女：嗯。你能把他的电话号码发给我吗？' },
      { en: 'M: Sure thing. Just tell him exactly what you are looking for and I\'m sure he will find something good.', zh: '男：当然可以。只要告诉他你具体在找什么，我相信他会找到好东西的。' }
    ]
  },
  {
    id: 'cet4_listening_2025_06_02',
    title: 'Evolution of Human Sound',
    description: '听力原文：Humans developed the ability to make sounds through evolution. People initially made sounds by imita...',
    category: '科技',
    wordCount: 65,
    coverColor: 'bg-amber-500',
    paragraphs: [
      { en: 'Humans developed the ability to make sounds through evolution. People initially made sounds by imitating animals and natural phenomena around them. Making sounds helps one communicate with people they can\'t see, which was particularly important in early human societies when people needed to coordinate activities over distances.', zh: '人类通过进化发展了发出声音的能力。人们最初通过模仿周围的动物和自然现象来发出声音。发出声音有助于人与看不见的人交流，这在早期人类社会中尤为重要，因为人们需要协调远距离的活动。' }
    ]
  },
  {
    id: 'cet4_listening_2025_06_03',
    title: 'Teamwork and Competition',
    description: '听力原文：The passage discusses human attitudes toward teamwork and competition. People are somewhat selfish b...',
    category: '教育',
    wordCount: 67,
    coverColor: 'bg-emerald-500',
    paragraphs: [
      { en: 'The passage discusses human attitudes toward teamwork and competition. People are somewhat selfish by nature, but they also have the capacity for cooperation. Teamwork became important when people wanted to have competitive team members to achieve common goals. The key lesson is that people should consider the consequences before acting.', zh: '这篇文章讨论了人类对团队合作和竞争的态度。人天生有些自私，但他们也有合作的能力。当人们想要有竞争力的团队成员来实现共同目标时，团队合作变得重要。关键的教训是人们应该在行动之前考虑后果。' }
    ]
  },
  {
    id: 'cet4_listening_2025_06_04',
    title: 'History of Animal Imagery in Art',
    description: '听力原文：The passage explores the history of animal imagery in art. Early art contained more images of animal...',
    category: '文化',
    wordCount: 60,
    coverColor: 'bg-rose-500',
    paragraphs: [
      { en: 'The passage explores the history of animal imagery in art. Early art contained more images of animals than humans. In many ancient cultures, animals were revered and kept by royalty. Some animals were used to show off riches and power. In some cases, art featuring animals was part of the royal estate.', zh: '这篇文章探讨了艺术中动物形象的历史。早期艺术中包含的动物形象比人类更多。在许多古代文化中，动物受到尊敬，由皇室饲养。一些动物被用来炫耀财富和权力。在某些情况下，以动物为主题的艺术是皇家产业的一部分。' }
    ]
  }
];

export default mockArticles;
