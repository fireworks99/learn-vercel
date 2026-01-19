import type { RevolutionaryEvent, CommunistValue, ProletarianStory } from '@/types';

export const revolutionaryEvents: RevolutionaryEvent[] = [
  {
    id: 1,
    year: "1921",
    title: "中国共产党成立",
    description: "中国共产党第一次全国代表大会在上海召开，标志着中国共产党的正式成立。",
    significance: "为中国人民谋幸福，为中华民族谋复兴的初心和使命从此确立"
  },
  {
    id: 2,
    year: "1949",
    title: "中华人民共和国成立",
    description: "毛泽东主席在天安门城楼上庄严宣告中华人民共和国成立。",
    significance: "中国人民从此站起来了，成为国家的主人"
  },
  {
    id: 3,
    year: "1956",
    title: "社会主义制度确立",
    description: "社会主义改造基本完成，社会主义制度在中国基本确立。",
    significance: "为当代中国一切发展进步奠定了根本政治前提和制度基础"
  }
];

export const communistValues: CommunistValue[] = [
  {
    id: 1,
    title: "为人民服务",
    description: "始终把人民放在心中最高位置，全心全意为人民服务",
    principle: "人民是历史的创造者，群众是真正的英雄",
    icon: "❤️"
  },
  {
    id: 2,
    title: "实事求是",
    description: "从实际出发，理论联系实际，在实践中检验真理和发展真理",
    principle: "没有调查就没有发言权",
    icon: "🔍"
  },
  {
    id: 3,
    title: "艰苦奋斗",
    description: "自力更生，艰苦创业，为实现理想而不懈奋斗",
    principle: "世上无难事，只要肯登攀",
    icon: "⚡"
  },
  {
    id: 4,
    title: "团结统一",
    description: "全国各族人民大团结，同心同德建设美好家园",
    principle: "团结就是力量，团结才能胜利",
    icon: "🤝"
  }
];

export const proletarianStories: ProletarianStory[] = [
  {
    id: 1,
    name: "雷锋",
    period: "1940-1962",
    story: "雷锋同志把有限的生命投入到无限的为人民服务之中去，出差一千里，好事做了一火车。",
    contribution: "树立了共产主义道德风尚的光辉典范",
    spirit: "助人为乐、无私奉献的雷锋精神"
  },
  {
    id: 2,
    name: "王进喜",
    period: "1923-1970",
    story: "大庆油田会战中，王进喜带领钻井队人拉肩扛运钻机，用身体搅拌泥浆制服井喷。",
    contribution: "为新中国石油工业发展作出重大贡献",
    spirit: "不怕苦、不怕死、不为名、不为利的铁人精神"
  }
];