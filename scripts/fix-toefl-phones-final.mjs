import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOEFL_PATH = path.join(__dirname, '..', 'src', 'dictionaries', 'toefl.json');

// 拼写修正
const TYPO_FIXES = {
  'eletricity': { name: 'electricity', usphone: "ɪˌlekˈtrɪsəti", ukphone: "ɪˌlekˈtrɪsəti" },
  'misinterprete': { name: 'misinterpret', usphone: "ˌmɪsɪnˈtɜːrprɪt", ukphone: "ˌmɪsɪnˈtɜːprɪt" },
  'datebase': { name: 'database', usphone: "ˈdeɪtəbeɪs", ukphone: "ˈdeɪtəbeɪs" },
  'merchandis': { name: 'merchandise', usphone: "ˈmɜːrtʃəndaɪs", ukphone: "ˈmɜːtʃəndaɪz" },
  'guilde': { name: 'guild', usphone: "ɡɪld", ukphone: "ɡɪld" },
};

// 手动音标映射（基于常见发音规则）
const MANUAL_PHONES = {
  // 专有名词
  'ogallala': { usphone: "ˌoʊɡəˈlælə", ukphone: "ˌoʊɡəˈlælə" },
  'Yucatan': { usphone: "ˌjuːkəˈtæn", ukphone: "ˌjuːkəˈtæn" },
  'Himalaya': { usphone: "ˌhɪməˈleɪə", ukphone: "ˌhɪməˈleɪə" },
  'beringia': { usphone: "bəˈrɪndʒiə", ukphone: "bəˈrɪndʒiə" },
  'lomas': { usphone: "ˈloʊməs", ukphone: "ˈloʊməs" },
  'allende': { usphone: "ɑːˈjendeɪ", ukphone: "ɑːˈjendeɪ" },
  'weldon': { usphone: "ˈweldən", ukphone: "ˈweldən" },
  'duchenne': { usphone: "duːˈʃen", ukphone: "duːˈʃen" },
  'keplerian': { usphone: "keˈplɪəriən", ukphone: "keˈplɪəriən" },
  'Netherland': { usphone: "ˈneðərlænd", ukphone: "ˈneðəlænd" },
  'newberry': { usphone: "ˈnuːberi", ukphone: "ˈnjuːbəri" },
  'sargeant': { usphone: "ˈsɑːrdʒənt", ukphone: "ˈsɑːdʒənt" },
  'mesopotamian': { usphone: "ˌmesəpəˈteɪmiən", ukphone: "ˌmesəpəˈteɪmiən" },
  'reaumur': { usphone: "ˈreɪəmjʊr", ukphone: "ˈreɪəmjʊə" },
  'lumiere': { usphone: "luːˈmjer", ukphone: "luːˈmjer" },
  'bergere': { usphone: "berˈʒer", ukphone: "beəˈʒeə" },
  'bryn': { usphone: "brɪn", ukphone: "brɪn" },
  'rainer': { usphone: "ˈraɪnər", ukphone: "ˈraɪnə" },
  'loder': { usphone: "ˈloʊdər", ukphone: "ˈləʊdə" },

  // 缩写/符号
  'eka': { usphone: "ˈekə", ukphone: "ˈekə" },
  'aie': { usphone: "eɪ aɪ ˈiː", ukphone: "eɪ aɪ ˈiː" },
  'nss': { usphone: "en es ˈes", ukphone: "en es ˈes" },
  'ppm': { usphone: "piː piː ˈem", ukphone: "piː piː ˈem" },

  // 复合词/派生词
  'overirrigation': { usphone: "ˌoʊvərˌɪrɪˈɡeɪʃn", ukphone: "ˌoʊvərˌɪrɪˈɡeɪʃn" },
  'paleoecologist': { usphone: "ˌpeɪlioʊiˈkɑlədʒɪst", ukphone: "ˌpeɪlioʊiˈkɒlədʒɪst" },
  'mudflats': { usphone: "ˈmʌdflæts", ukphone: "ˈmʌdflæts" },
  'nowcasting': { usphone: "ˈnaʊkæstɪŋ", ukphone: "ˈnaʊkɑːstɪŋ" },
  'basketmaking': { usphone: "ˈbæskɪtmeɪkɪŋ", ukphone: "ˈbɑːskɪtmeɪkɪŋ" },
  'semimolten': { usphone: "ˈsemimoʊltən", ukphone: "ˈsemiməʊltən" },
  'overcultivation': { usphone: "ˌoʊvərˌkʌltɪˈveɪʃn", ukphone: "ˌoʊvərˌkʌltɪˈveɪʃn" },
  'leafcutter': { usphone: "ˈliːfkʌtər", ukphone: "ˈliːfkʌtə" },
  'verbalizable': { usphone: "ˈvɜːrbəlaɪzəbl", ukphone: "ˈvɜːbəlaɪzəbl" },
  'circumstantially': { usphone: "ˌsɜːrkəmˈstænʃəli", ukphone: "ˌsɜːkəmˈstænʃəli" },
  'cloudlike': { usphone: "ˈklaʊdlaɪk", ukphone: "ˈklaʊdlaɪk" },
  'hydroponically': { usphone: "ˌhaɪdrəˈpɑnɪkli", ukphone: "ˌhaɪdrəˈpɒnɪkli" },
  'unselective': { usphone: "ˌʌnsɪˈlektɪv", ukphone: "ˌʌnsɪˈlektɪv" },
  'geothermally': { usphone: "ˌdʒiːoʊˈθɜːrməli", ukphone: "ˌdʒiːəʊˈθɜːməli" },
  'untraditional': { usphone: "ˌʌntrəˈdɪʃənl", ukphone: "ˌʌntrəˈdɪʃənl" },
  'uncarved': { usphone: "ʌnˈkɑːrvd", ukphone: "ʌnˈkɑːvd" },
  'needlelike': { usphone: "ˈniːdllaɪk", ukphone: "ˈniːdllaɪk" },
  'sugarlike': { usphone: "ˈʃʊɡərlaɪk", ukphone: "ˈʃʊɡəlaɪk" },
  'unsureness': { usphone: "ʌnˈʃʊrnəs", ukphone: "ʌnˈʃʊənəs" },
  'nonelectronic': { usphone: "ˌnɑnɪˌlekˈtrɑnɪk", ukphone: "ˌnɒnɪˌlekˈtrɒnɪk" },
  'colorfully': { usphone: "ˈkʌlərfəli", ukphone: "ˈkʌləfəli" },
  'scrubbiness': { usphone: "ˈskrʌbinəs", ukphone: "ˈskrʌbinəs" },
  'proficiently': { usphone: "prəˈfɪʃntli", ukphone: "prəˈfɪʃntli" },
  'megafossil': { usphone: "ˈmeɡəˌfɑsl", ukphone: "ˈmeɡəˌfɒsl" },
  'skeletally': { usphone: "ˈskelətəli", ukphone: "ˈskelətəli" },
  'muscularly': { usphone: "ˈmʌskjələrli", ukphone: "ˈmʌskjələli" },
  'plantlike': { usphone: "ˈplæntlaɪk", ukphone: "ˈplɑːntlaɪk" },
  'homeownership': { usphone: "ˈhoʊmoʊnərʃɪp", ukphone: "ˈhəʊməʊnəʃɪp" },
  'humanlike': { usphone: "ˈhjuːmənlaɪk", ukphone: "ˈhjuːmənlaɪk" },
  'oppositely': { usphone: "ˈɑːpəzɪtli", ukphone: "ˈɒpəzɪtli" },
  'midcontinent': { usphone: "mɪdˈkɑntɪnənt", ukphone: "mɪdˈkɒntɪnənt" },
  'midocean': { usphone: "mɪdˈoʊʃn", ukphone: "mɪdˈəʊʃn" },
  'glasslike': { usphone: "ˈɡlæslaɪk", ukphone: "ˈɡlɑːslaɪk" },
  'hydrologic': { usphone: "ˌhaɪdrəˈlɑdʒɪk", ukphone: "ˌhaɪdrəˈlɒdʒɪk" },
  'prairies': { usphone: "ˈpreriz", ukphone: "ˈpreəriz" },
  'agriculturally': { usphone: "ˌæɡrɪˈkʌltʃərəli", ukphone: "ˌæɡrɪˈkʌltʃərəli" },
  'rarer': { usphone: "ˈrerər", ukphone: "ˈreərə" },
  'lvory': { usphone: "ˈaɪvəri", ukphone: "ˈaɪvəri" },
};

async function main() {
  const data = JSON.parse(fs.readFileSync(TOEFL_PATH, 'utf-8'));
  let fixed = 0;
  let skipped = 0;
  const failed = [];

  for (const chapter of data.chapters) {
    for (const word of chapter.words) {
      // 1. 修正拼写错误
      if (TYPO_FIXES[word.name]) {
        const fix = TYPO_FIXES[word.name];
        console.log(`📝 修正拼写: ${word.name} → ${fix.name}`);
        word.name = fix.name;
        word.usphone = fix.usphone;
        word.ukphone = fix.ukphone;
        fixed++;
        continue;
      }

      // 2. 已有音标则跳过
      if (word.usphone || word.ukphone) continue;

      // 3. 应用手动音标
      const key = word.name.toLowerCase();
      const manual = MANUAL_PHONES[word.name] || MANUAL_PHONES[key];
      if (manual) {
        word.usphone = manual.usphone;
        word.ukphone = manual.ukphone;
        console.log(`🔧 ${word.name}: ${manual.usphone}`);
        fixed++;
        continue;
      }

      failed.push(word.name);
    }
  }

  fs.writeFileSync(TOEFL_PATH, JSON.stringify(data, null, 2));

  console.log(`\n✅ 完成: 修正 ${fixed} 个词`);
  if (failed.length > 0) {
    console.log(`⚠️ 未解决 ${failed.length} 个: ${failed.join(', ')}`);
  }
}

main().catch(console.error);
