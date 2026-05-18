/**
 * Fix incorrect part-of-speech tags in dictionary JSON files.
 * Pronouns marked as [n./v.] → [pron.], determiners fixed, etc.
 */
const fs = require('fs');
const path = require('path');

// Correct POS tags for common function words
const posFixes = {
  // Personal pronouns
  'i':      '[pron.] 我',
  'me':     '[pron.] 我（宾格）',
  'you':    '[pron.] 你、你们',
  'he':     '[pron.] 他',
  'him':    '[pron.] 他（宾格）',
  'she':    '[pron.] 她',
  'her':    '[pron.] 她（宾格）/她的',
  'it':     '[pron.] 它',
  'we':     '[pron.] 我们',
  'us':     '[pron.] 我们（宾格）',
  'they':   '[pron.] 他们、它们',
  'them':   '[pron.] 他们（宾格）',

  // Possessive pronouns / determiners
  'my':     '[pron.] 我的',
  'your':   '[pron.] 你的、你们的',
  'his':    '[pron.] 他的',
  'its':    '[pron.] 它的',
  'our':    '[pron.] 我们的',
  'their':  '[pron.] 他们的',
  'mine':   '[pron.] 我的（名词性物主代词）',
  'yours':  '[pron.] 你的（名词性物主代词）',
  'hers':   '[pron.] 她的（名词性物主代词）',
  'ours':   '[pron.] 我们的（名词性物主代词）',
  'theirs': '[pron.] 他们的（名词性物主代词）',

  // Demonstrative pronouns
  'this':   '[pron.] 这、这个',
  'that':   '[pron./conj.] 那、那个',
  'these':  '[pron.] 这些',
  'those':  '[pron.] 那些',

  // Relative / interrogative pronouns
  'who':    '[pron.] 谁',
  'whom':   '[pron.] 谁（宾格）',
  'whose':  '[pron.] 谁的',
  'which':  '[pron./det.] 哪一个',
  'what':   '[pron./det.] 什么',
  'whoever': '[pron.] 无论谁',
  'whatever': '[pron.] 无论什么',
  'whichever': '[pron.] 无论哪个',

  // Indefinite pronouns
  'somebody':  '[pron.] 某人',
  'anybody':   '[pron.] 任何人',
  'nobody':    '[pron.] 没有人',
  'everybody': '[pron.] 每个人',
  'someone':   '[pron.] 某人',
  'anyone':    '[pron.] 任何人',
  'everyone':  '[pron.] 每个人',
  'something': '[pron.] 某事',
  'anything':  '[pron.] 任何事',
  'nothing':   '[pron.] 没有什么',
  'everything': '[pron.] 一切',
  'each':      '[pron./det.] 每个',
  'either':    '[pron./det.] 两者之一',
  'neither':   '[pron./det.] 两者都不',
  'both':      '[pron./det.] 两者都',
  'all':       '[pron./det.] 所有、全部',
  'any':       '[pron./det.] 任何',
  'few':       '[pron./det.] 很少',
  'many':      '[pron./det.] 许多',
  'several':   '[pron./det.] 几个',
  'some':      '[pron./det.] 一些',
  'none':      '[pron.] 没有一个',

  // Other commonly mis-tagged function words
  'the':    '[art.] 这、那',
  'a':      '[art.] 一个',
  'an':     '[art.] 一个',
  'on':     '[prep./adv.] 在…上、关于',
  'with':   '[prep.] 和…一起、用',
  'have':   '[v.] 有、拥有',
  'has':    '[v.] 有（第三人称单数）',
  'had':    '[v.] 有（过去式）',
  'do':     '[v./aux.] 做',
  'does':   '[v./aux.] 做（第三人称单数）',
  'did':    '[v./aux.] 做（过去式）',
  'be':     '[v./aux.] 是、存在',
  'am':     '[v.] 是',
  'is':     '[v.] 是',
  'are':    '[v.] 是',
  'was':    '[v.] 是（过去式）',
  'were':   '[v.] 是（过去式）',
  'been':   '[v.] 是（过去分词）',
  'being':  '[v.] 是（现在分词）',
  'will':   '[v./aux.] 将、会',
  'would':  '[v./aux.] 将、会（过去式）',
  'can':    '[v./aux.] 能够',
  'could':  '[v./aux.] 能够（过去式）',
  'may':    '[v./aux.] 可能、可以',
  'might':  '[v./aux.] 可能（过去式）',
  'shall':  '[v./aux.] 将、须',
  'should': '[v./aux.] 应该',
  'must':   '[v./aux.] 必须',
  'need':   '[v./aux.] 需要',
  'from':   '[prep.] 从、来自',
  'by':     '[prep.] 通过、被',
  'at':     '[prep.] 在',
  'but':    '[conj./prep.] 但是',
  'not':    '[adv.] 不',
  'no':     '[det./adv.] 不、没有',
  'yes':    '[adv.] 是',
  'and':    '[conj.] 和、与',
  'or':     '[conj.] 或者',
  'if':     '[conj.] 如果',
  'so':     '[adv./conj.] 所以、如此',
  'as':     '[conj./prep.] 作为、如同',
  'than':   '[conj./prep.] 比',
  'then':   '[adv.] 然后、那么',
  'when':   '[conj./adv.] 当…时',
  'where':  '[conj./adv.] 在哪里',
  'how':    '[adv.] 如何',
  'why':    '[adv.] 为什么',
  'there':  '[adv.] 那里',
  'here':   '[adv.] 这里',
  'up':     '[adv./prep.] 向上',
  'out':    '[adv.] 出、在外',
  'into':   '[prep.] 进入',
  'about':  '[prep./adv.] 关于、大约',
  'over':   '[prep./adv.] 在…上方、超过',
  'after':  '[prep./conj.] 在…之后',
  'before': '[prep./conj.] 在…之前',
  'between': '[prep.] 在…之间',
  'under':  '[prep.] 在…下面',
  'through': '[prep./adv.] 通过、穿过',
  'during': '[prep.] 在…期间',
  'without': '[prep.] 没有',
  'within': '[prep.] 在…之内',
  'while':  '[conj./n.] 当…时、一段时间',
  'because': '[conj.] 因为',
  'more':   '[adj./adv.] 更多的',
  'most':   '[adj./adv.] 最多的',
  'such':   '[det./pron.] 这样的',
  'other':  '[det./pron.] 其他的',
  'only':   '[adj./adv.] 仅、唯一',
  'also':   '[adv.] 也',
  'just':   '[adv.] 仅仅、刚刚',
  'very':   '[adv.] 非常',
  'even':   '[adv./adj.] 甚至、平坦的',
  'now':    '[adv.] 现在',
  'still':  '[adv.] 仍然',
  'well':   '[adv./n.] 好、井',
  'too':    '[adv.] 也、太',
  'again':  '[adv.] 再次',
  'once':   '[adv.] 一次、曾经',
  'down':   '[adv./prep.] 向下',
  'off':    '[adv./prep.] 离开、关',
  'much':   '[pron./adv.] 许多',
  'own':    '[adj./v.] 自己的、拥有',
  'same':   '[det./adj.] 相同的',
  'been':   '[v.] 是（be 的过去分词）',
};

function fixFile(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  let fixCount = 0;

  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      const fix = posFixes[word.name.toLowerCase()];
      if (fix && word.trans !== fix) {
        console.log(`  ${word.name}: "${word.trans}" → "${fix}"`);
        word.trans = fix;
        fixCount++;
      }
    }
  }

  if (fixCount > 0) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    console.log(`\nFixed ${fixCount} words in ${path.basename(filePath)}`);
  } else {
    console.log(`No fixes needed in ${path.basename(filePath)}`);
  }
}

// Fix both postgraduate dictionaries
const files = [
  path.resolve(__dirname, '../src/dictionaries/postgraduateCore.json'),
  path.resolve(__dirname, '../src/dictionaries/postgraduate.json'),
];

for (const file of files) {
  console.log(`\nProcessing ${path.basename(file)}...`);
  fixFile(file);
}
