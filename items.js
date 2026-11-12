// オープンライセンスで転載可と確認した尺度の項目本文。
// data.js には置かない。項目の文言は原典の書き起こしのまま。published が true の尺度だけ詳細画面に出す。
// このファイルが無くても、詳細画面は data.js の従来表示に戻る。
window.ATLAS_ITEMS = {
  "sense-of-agency-scale": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "This is an open-access article distributed under the terms of the Creative Commons Attribution License (CC BY).",
    "sourceCitation": "Tapal, A., Oren, E., Dar, R., & Eitam, B. (2017). The sense of agency scale: A measure of consciously perceived control over one's mind, body, and the immediate environment. Frontiers in Psychology, 8, 1552.",
    "sourceUrl": "https://doi.org/10.3389/fpsyg.2017.01552",
    "sourceLocation": "TABLE 1 | Factor loadings of items after rotation.",
    "anchors": {
      "min": 1,
      "max": 7,
      "labels": {
        "1": "strongly disagree",
        "7": "strongly agree"
      }
    },
    "items": [
      {
        "text": "I am in full control of what I do",
        "reverse": false,
        "dimension": "SoPA"
      },
      {
        "text": "I am just an instrument in the hands of somebody or something else",
        "reverse": false,
        "dimension": "SoNA"
      },
      {
        "text": "My actions just happen without my intention",
        "reverse": false,
        "dimension": "SoNA"
      },
      {
        "text": "I am the author of my actions",
        "reverse": false,
        "dimension": "SoPA"
      },
      {
        "text": "The consequences of my actions feel like they don’t logically follow my actions",
        "reverse": false,
        "dimension": "SoNA"
      },
      {
        "text": "My movements are automatic—my body simply makes them",
        "reverse": false,
        "dimension": "SoNA"
      },
      {
        "text": "The outcomes of my actions generally surprise me",
        "reverse": false,
        "dimension": "SoNA"
      },
      {
        "text": "Things I do are subject only to my free will",
        "reverse": false,
        "dimension": "SoPA"
      },
      {
        "text": "The decision whether and when to act is within my hands",
        "reverse": false,
        "dimension": "SoPA"
      },
      {
        "text": "Nothing I do is actually voluntary",
        "reverse": false,
        "dimension": "SoNA"
      },
      {
        "text": "While I am in action, I feel like I am a remote controlled robot",
        "reverse": false,
        "dimension": "SoNA"
      },
      {
        "text": "My behavior is planned by me from the very beginning to the very end",
        "reverse": false,
        "dimension": "SoPA"
      },
      {
        "text": "I am completely responsible for everything that results from my actions",
        "reverse": false,
        "dimension": "SoPA"
      }
    ]
  },
  "consumer-brand-engagement-beyond-likes-6": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "Frontiers 出版版（CC BY）。",
    "sourceCitation": "Razmus, W. (2021). Consumer brand engagement beyond the “likes”. Frontiers in Psychology, 12, 692000.",
    "sourceUrl": "https://doi.org/10.3389/fpsyg.2021.692000",
    "sourceLocation": "TABLE 2 | The CBE items with factor loadings, item-total correlations, means and standard deviations (Study 1).",
    "anchors": {
      "min": 1,
      "max": 5,
      "labels": {
        "1": "strongly disagree",
        "5": "strongly agree"
      },
      "notes": [
        "表中の “x” / “brand x” は対象ブランドのプレースホルダとして原文どおり残した。"
      ]
    },
    "items": [
      {
        "text": "I consider x my brand",
        "reverse": false,
        "dimension": "Cognitive"
      },
      {
        "text": "Communication related to brand x attracts my attention",
        "reverse": false,
        "dimension": "Cognitive"
      },
      {
        "text": "I am proud that others know that I use brand x",
        "reverse": false,
        "dimension": "Emotional"
      },
      {
        "text": "I feel joy when I use brand x",
        "reverse": false,
        "dimension": "Emotional"
      },
      {
        "text": "If someone criticized brand x I would try to defend it (e.g., by looking for counterarguments)",
        "reverse": false,
        "dimension": "Behavioral"
      },
      {
        "text": "I like talking to others about brand x",
        "reverse": false,
        "dimension": "Behavioral"
      }
    ]
  },
  "j-mvs-p6-ohno-6": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "原著（BMC Psychology）は CC BY 4.0。研究室ページのフッターはサイト著作権表示があるが、項目本文は CC BY の Additional file 2 から書き起こした。",
    "sourceCitation": "Ohno, H., Lee, KT., & Maeno, T. (2022). The Japanese version of the Material Values Scale: construct assessment and relationship with age, personality, and subjective well-being. BMC Psychology, 10, 200.",
    "sourceUrl": "https://doi.org/10.1186/s40359-022-00889-3",
    "sourceLocation": "Additional file 2（The Japanese version of the Material Value Scale (J-MVS); 項目1,5,12,15,17,18 に *）",
    "anchors": {
      "min": 1,
      "max": 5,
      "labels": {
        "1": "まったくあてはまらない",
        "5": "かなりあてはまる"
      },
      "notes": [
        "日本語アンカーラベルは著者研究室ページ（https://lab.sdm.keio.ac.jp/maenolab/J-MVS-P6.htm）。Additional file 2 は “5-point scale” とのみ記す。次元ラベル（成功/中心性・幸福）も研究室ページの注記による。"
      ]
    },
    "items": [
      {
        "text": "高価な家，車，衣服を持つ人々に私は憧れを抱く",
        "reverse": false,
        "dimension": "成功/中心性",
        "textOriginal": "I admire people who own expensive homes, cars, and clothes."
      },
      {
        "text": "私は，人々に印象づけるようなものを持つのが好きだ",
        "reverse": false,
        "dimension": "成功/中心性",
        "textOriginal": "I like to own things that impress people."
      },
      {
        "text": "私はとても贅沢な生活が好きだ",
        "reverse": false,
        "dimension": "成功/中心性",
        "textOriginal": "I like a lot of luxury in my life."
      },
      {
        "text": "もし私が今持っていないものを持てるようになったら，私の人生はもっと良くなるだろう",
        "reverse": false,
        "dimension": "幸福",
        "textOriginal": "My life would be better if I owned certain things I don’t have."
      },
      {
        "text": "もし，もっと多くのものを買う余裕があったとしたら，私はもっと幸せになれるだろう",
        "reverse": false,
        "dimension": "幸福",
        "textOriginal": "I’d be happier if I could afford to buy more things."
      },
      {
        "text": "欲しいもの全てを買う余裕がないことが，時々私をかなり悩ませる",
        "reverse": false,
        "dimension": "幸福",
        "textOriginal": "It sometimes bothers me quite a bit that I can’t afford to buy all the things I’d like."
      }
    ]
  },
  "schermuly-pels-24": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "Frontiers 出版版（CC BY）。",
    "sourceCitation": "Schermuly, C. C., Algner, M., & Lorenz, T. (2025). The Psychological Empowerment Leadership Scale (PELS)… Frontiers in Psychology, 16, 1539085.",
    "sourceUrl": "https://doi.org/10.3389/fpsyg.2025.1539085",
    "sourceLocation": "TABLE 1 Final item list of the Psychological Empowerment Leadership Scale and factor loadings.（および TABLE 1 (Continued)）",
    "anchors": {
      "min": 1,
      "max": 7,
      "labels": {
        "1": "Strongly disagree",
        "7": "Strongly agree"
      },
      "notes": [
        "TABLE 1 の英語列見出し “My leader…”（各項目はこの幹に続く英文）。ドイツ語原文も同表にあるが、ここでは英語列を書き起こした。"
      ]
    },
    "items": [
      {
        "text": "provides me with an interesting perspective on my work in the future.",
        "reverse": false,
        "dimension": "Sense making"
      },
      {
        "text": "works with me to develop a vision for my work.",
        "reverse": false,
        "dimension": "Sense making"
      },
      {
        "text": "helps me to experience a sense of meaning in my career.",
        "reverse": false,
        "dimension": "Sense making"
      },
      {
        "text": "supports me in recognizing the value of my work for society.",
        "reverse": false,
        "dimension": "Sense making"
      },
      {
        "text": "treats me as an individual.",
        "reverse": false,
        "dimension": "Coaching"
      },
      {
        "text": "is interested in how I am feeling.",
        "reverse": false,
        "dimension": "Coaching"
      },
      {
        "text": "takes the time to understand and discuss matters of my colleagues and I.",
        "reverse": false,
        "dimension": "Coaching"
      },
      {
        "text": "does not treat me as one employee among many.",
        "reverse": false,
        "dimension": "Coaching"
      },
      {
        "text": "provides me with important information I need for my work in a timely manner.",
        "reverse": false,
        "dimension": "Participation"
      },
      {
        "text": "explains their decisions.",
        "reverse": false,
        "dimension": "Participation"
      },
      {
        "text": "seeks and considers my advice on important decisions.",
        "reverse": false,
        "dimension": "Participation"
      },
      {
        "text": "explains decisions of the organization to the employees.",
        "reverse": false,
        "dimension": "Participation"
      },
      {
        "text": "does not control me.",
        "reverse": false,
        "dimension": "Transfer of power"
      },
      {
        "text": "encourages me to find my own ways to solve work problems.",
        "reverse": false,
        "dimension": "Transfer of power"
      },
      {
        "text": "shares power with the employees.",
        "reverse": false,
        "dimension": "Transfer of power"
      },
      {
        "text": "enables my work to have an impact on my team’s goal achievement.",
        "reverse": false,
        "dimension": "Transfer of power"
      },
      {
        "text": "helps me to develop my professional skills.",
        "reverse": false,
        "dimension": "Competence development"
      },
      {
        "text": "helps me prepare for the position in the organization that I really want.",
        "reverse": false,
        "dimension": "Competence development"
      },
      {
        "text": "encourages me to think about professional problems.",
        "reverse": false,
        "dimension": "Competence development"
      },
      {
        "text": "praises me when I improve my skills.",
        "reverse": false,
        "dimension": "Competence development"
      },
      {
        "text": "Shows the same high level of commitment to their work as their employees.",
        "reverse": false,
        "dimension": "Leading by example"
      },
      {
        "text": "lives up to their own high standards.",
        "reverse": false,
        "dimension": "Leading by example"
      },
      {
        "text": "does not withdraw when there is more work to do.",
        "reverse": false,
        "dimension": "Leading by example"
      },
      {
        "text": "exemplifies a high work ethic.",
        "reverse": false,
        "dimension": "Leading by example"
      }
    ],
    "stem": "My leader…"
  },
  "dudasova-cpc-12r": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "論文は CC BY 4.0。抄録は CPC-12R を “a free-to-use measure of Psychological Capital” と記す。",
    "sourceCitation": "Dudasova, L., Prochazka, J., Vaculik, M., & Lorenz, T. (2021). Measuring psychological capital: Revision of the Compound Psychological Capital Scale (CPC-12). PLOS ONE, 16(3), e0247114.",
    "sourceUrl": "https://doi.org/10.1371/journal.pone.0247114",
    "sourceLocation": "S1 Appendix. CPC-12R in Czech and English. https://doi.org/10.1371/journal.pone.0247114.s005 (DOCX)",
    "anchors": {
      "min": 1,
      "max": 6,
      "labels": {
        "1": "strongly disagree",
        "2": "disagree",
        "3": "slightly disagree",
        "4": "slightly agree",
        "5": "agree",
        "6": "strongly agree"
      }
    },
    "items": [
      {
        "text": "I am looking forward to the life ahead of me.",
        "reverse": false
      },
      {
        "text": "Overall, I expect more good things to happen to me than bad.",
        "reverse": false
      },
      {
        "text": "The future holds a lot of good in store for me.",
        "reverse": false
      },
      {
        "text": "If I should find myself in a jam, I could think of many ways to get out of it.",
        "reverse": false
      },
      {
        "text": "I can think of many ways to reach my current goals.",
        "reverse": false
      },
      {
        "text": "Right now, I see myself as being pretty successful.",
        "reverse": false
      },
      {
        "text": "I am confident that I could deal efficiently with unexpected events.",
        "reverse": false
      },
      {
        "text": "I can solve most problems if I invest the necessary effort.",
        "reverse": false
      },
      {
        "text": "I can remain calm when facing difficulties because I can rely on my coping abilities.",
        "reverse": false
      },
      {
        "text": "I consider myself a person who can withstand a lot.",
        "reverse": false
      },
      {
        "text": "Failure does not discourage me.",
        "reverse": false
      },
      {
        "text": "I tend to bounce back quickly after serious life difficulties.",
        "reverse": false
      }
    ]
  },
  "kukreja-pandey-gwq-12": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "Frontiers 出版版（CC BY）。",
    "sourceCitation": "Kukreja, P., & Pandey, J. (2023). Workplace gaslighting: Conceptualization, development, and validation of a scale. Frontiers in Psychology, 14, 1099485.",
    "sourceUrl": "https://doi.org/10.3389/fpsyg.2023.1099485",
    "sourceLocation": "TABLE 2 Final items, factor loadings, and corrected item-total correlations.",
    "anchors": {
      "min": 1,
      "max": 5,
      "labels": {
        "1": "Never",
        "5": "Always"
      },
      "instructions": "How often did you have these experiences at work in the past 6 months?",
      "notes": [
        "中間点（2–4）のラベル文言は、開いた出版版本文からは確認できなかったため付していない。"
      ]
    },
    "items": [
      {
        "text": "Your supervisor diverted the topic to project the fault onto you.",
        "reverse": false,
        "dimension": "Trivialization"
      },
      {
        "text": "Your supervisor told you that you were “imagining” things.",
        "reverse": false,
        "dimension": "Trivialization"
      },
      {
        "text": "Your supervisor passed degrading comments followed by rewards.",
        "reverse": false,
        "dimension": "Trivialization"
      },
      {
        "text": "The words of your supervisor did not match with his/her actions.",
        "reverse": false,
        "dimension": "Trivialization"
      },
      {
        "text": "Your supervisor denied the promises he/she made earlier.",
        "reverse": false,
        "dimension": "Trivialization"
      },
      {
        "text": "Your supervisor undermined your complaints.",
        "reverse": false,
        "dimension": "Trivialization"
      },
      {
        "text": "Your supervisor “twisted/misrepresented” things you said.",
        "reverse": false,
        "dimension": "Trivialization"
      },
      {
        "text": "Your supervisor had unnecessary control over you.",
        "reverse": false,
        "dimension": "Affliction"
      },
      {
        "text": "Your supervisor made you your worst critic.",
        "reverse": false,
        "dimension": "Affliction"
      },
      {
        "text": "Your supervisor made you depend on him/her for making most of the decisions.",
        "reverse": false,
        "dimension": "Affliction"
      },
      {
        "text": "You felt emotionally drained at work because of your supervisor.",
        "reverse": false,
        "dimension": "Affliction"
      },
      {
        "text": "Your supervisor was very sweet to you one moment and very mean the other moment.",
        "reverse": false,
        "dimension": "Affliction"
      }
    ]
  },
  "grassini-aias-4": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "Frontiers 出版版（CC BY）。アトラス notes によれば、論文を引用すれば自由に使えると著者が明記。",
    "sourceCitation": "Grassini, S. (2023). Development and validation of the AI Attitude Scale (AIAS-4): A brief measure of general attitude toward artificial intelligence. Frontiers in Psychology, 14, 1191628.",
    "sourceUrl": "https://doi.org/10.3389/fpsyg.2023.1191628",
    "sourceLocation": "出版版本文（5項目の文言の列挙、および “The 4-items AIAS scale, developed by excluding item 4 from the original 5-item scale”）",
    "anchors": {
      "min": 1,
      "max": 10,
      "labels": {
        "1": "Not at all",
        "10": "Completely Agree"
      }
    },
    "items": [
      {
        "text": "I believe that AI will improve my life.",
        "reverse": false
      },
      {
        "text": "I believe that AI will improve my work.",
        "reverse": false
      },
      {
        "text": "I think I will use AI technology in the future.",
        "reverse": false
      },
      {
        "text": "I think AI technology is positive for humanity.",
        "reverse": false
      }
    ]
  },
  "morales-garcia-dai-5": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "This is an open-access article distributed under the terms of the Creative Commons Attribution License (CC BY). The use, distribution or reproduction in other forums is permitted, provided the original author(s) and the copyright owner(s) are credited…",
    "sourceCitation": "Morales-García, W. C., Sairitupa-Sanchez, L. Z., Morales-García, S. B., & Morales-García, M. (2024). Development and validation of a scale for dependence on artificial intelligence in university students. Frontiers in Education, 9, 1323898.",
    "sourceUrl": "https://doi.org/10.3389/feduc.2024.1323898",
    "sourceLocation": "TABLE 2 Descriptive statistics.（5項目のスペイン語および英語）",
    "anchors": {
      "min": 1,
      "max": 5,
      "labels": {
        "1": "Completely false for me",
        "5": "Describes me perfectly"
      },
      "notes": [
        "中間点のラベル文言は、開いた出版版本文からは確認できなかった。"
      ]
    },
    "items": [
      {
        "text": "Me siento desprotegido/a cuando no tengo acceso a la IA.",
        "reverse": false,
        "textOriginal": "I feel unprotected when I do not have access to AI."
      },
      {
        "text": "Me preocupa la idea de ser dejado/a atrás en mis tareas o proyectos si no uso la IA.",
        "reverse": false,
        "textOriginal": "I’m concerned about the idea of being left behind in my tasks or projects if I do not use AI."
      },
      {
        "text": "Hago todo lo posible por estar al día con la IA para impresionar o mantenerme relevante en mi ámbito.",
        "reverse": false,
        "textOriginal": "I do everything possible to stay updated with AI to impress or remain relevant in my field."
      },
      {
        "text": "Necesito constantemente validación o retroalimentación de los sistemas de IA para sentirme seguro/a en mis decisiones.",
        "reverse": false,
        "textOriginal": "I constantly need validation or feedback from AI systems to feel confident in my decisions."
      },
      {
        "text": "Siento temor de que la IA reemplace mis habilidades o capacidades actuales.",
        "reverse": false,
        "textOriginal": "I fear that AI might replace my current skills or abilities."
      }
    ]
  },
  "bartels-ewws-8": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "PLOS ONE 出版版（CC BY 4.0）。",
    "sourceCitation": "Bartels, A. L., Peterson, S. J., & Reina, C. S. (2019). Understanding well-being at work: Development and validation of the eudaimonic workplace well-being scale. PLOS ONE, 14(4), e0215957.",
    "sourceUrl": "https://doi.org/10.1371/journal.pone.0215957",
    "sourceLocation": "Appendix",
    "anchors": {
      "min": 1,
      "max": 5,
      "labels": {
        "1": "strongly disagree",
        "2": "disagree",
        "3": "neither agree nor disagree",
        "4": "agree",
        "5": "strongly agree"
      },
      "instructions": "DIRECTIONS: This portion of the survey consists of a number of statements that may describe how you feel within your workplace.\nPlease indicate your agreement with the following statements."
    },
    "items": [
      {
        "text": "Among the people I work with, I feel there is a sense of brotherhood/sisterhood",
        "reverse": false,
        "dimension": "Interpersonal dimension"
      },
      {
        "text": "I feel close to the people in my work environment",
        "reverse": false,
        "dimension": "Interpersonal dimension"
      },
      {
        "text": "I feel connected to others within the work environment",
        "reverse": false,
        "dimension": "Interpersonal dimension"
      },
      {
        "text": "I consider the people I work with to be my friends",
        "reverse": false,
        "dimension": "Interpersonal dimension"
      },
      {
        "text": "I am emotionally energized at work",
        "reverse": false,
        "dimension": "Intrapersonal dimension"
      },
      {
        "text": "I feel that I have a purpose at my work",
        "reverse": false,
        "dimension": "Intrapersonal dimension"
      },
      {
        "text": "My work is very important to me",
        "reverse": false,
        "dimension": "Intrapersonal dimension"
      },
      {
        "text": "I feel I am able to continually develop as a person in my job",
        "reverse": false,
        "dimension": "Intrapersonal dimension"
      }
    ]
  },
  "mandliya-wcs-12": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "Frontiers 出版版（CC BY）。",
    "sourceCitation": "Mandliya, A., & Pandey, J. (2023). Workplace compassion: Development of a scale. Frontiers in Psychology, 14, 1142309.",
    "sourceUrl": "https://doi.org/10.3389/fpsyg.2023.1142309",
    "sourceLocation": "Appendix A  Workplace compassion scale.",
    "anchors": {
      "min": 1,
      "max": 7,
      "labels": {
        "1": "Almost never true",
        "2": "Usually not true",
        "3": "Rarely true",
        "4": "Occasionally true",
        "5": "Often true",
        "6": "Usually true",
        "7": "Almost always true"
      },
      "instructions": "Below are statements describing how you might relate to other people at work. Please indicate how true the following statements are for you; using the 7-point response scale from almost never true to almost always true.\nThe term co-worker here signifies the respondent’s supervisor, subordinate, team member, or any other person who works in the same workplace/organization with the respondent (compassion giver)."
    },
    "items": [
      {
        "text": "I experience pain from people’s distress in my workplace.",
        "reverse": false,
        "dimension": "Empathizing"
      },
      {
        "text": "When I see someone in distress in my workplace, I try to act as quickly as possible.",
        "reverse": false,
        "dimension": "Acting"
      },
      {
        "text": "I recognize people’s feelings of distress without them having to tell me in my workplace.",
        "reverse": false,
        "dimension": "Noticing"
      },
      {
        "text": "I can feel the distress as my own when I see someone in my workplace experiencing it.",
        "reverse": false,
        "dimension": "Empathizing"
      },
      {
        "text": "I notice the feeling of discomfort experienced by people in my workplace.",
        "reverse": false,
        "dimension": "Noticing"
      },
      {
        "text": "I try to assess the prior circumstances leading to the person’s suffering in my workplace.",
        "reverse": false,
        "dimension": "Sensemaking"
      },
      {
        "text": "I feel the pain experienced by people in my workplace.",
        "reverse": false,
        "dimension": "Empathizing"
      },
      {
        "text": "I try to assess the outcomes of my actions toward the person’s distress in my workplace.",
        "reverse": false,
        "dimension": "Sensemaking"
      },
      {
        "text": "I initiate offering help to people in my workplace, when I hear the story of their pain.",
        "reverse": false,
        "dimension": "Acting"
      },
      {
        "text": "I notice my co-worker’s feelings of distress or pain without them having to tell me.",
        "reverse": false,
        "dimension": "Noticing"
      },
      {
        "text": "I try to understand the context of the person’s distress in my workplace.",
        "reverse": false,
        "dimension": "Sensemaking"
      },
      {
        "text": "When I see someone in my workplace in pain, I try to help them.",
        "reverse": false,
        "dimension": "Acting"
      }
    ]
  },
  "schaufeli-bat-23": {
    "published": true,
    "license": "CC BY 4.0（論文）。公式利用条件は非プロプライエタリ・無償・事前許諾不要（改変不可・指定文献の引用必須）",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "論文: distributed under the terms and conditions of the Creative Commons Attribution (CC BY) license (http://creativecommons.org/licenses/by/4.0/). 公式サイト: “The BAT is non-proprietary and may be used free of charge without requesting permission from the authors. Please note, however, that the instrument should not be modified, and the following publication should be cited: Schaufeli, W. B., Desart, S., & De Witte, H. (2020). Burnout Assessment Tool (BAT) – Development, validity and reliability. International Journal of Environmental Research and Public Health, 17, 9495”",
    "sourceCitation": "Schaufeli, W. B., Desart, S., & De Witte, H. (2020). Burnout Assessment Tool (BAT) – Development, validity and reliability. International Journal of Environmental Research and Public Health, 17, 9495.",
    "sourceUrl": "https://doi.org/10.3390/ijerph17249495",
    "sourceLocation": "公式英語質問票 “Work-related version of the BAT” の Core symptoms（23項目）。論文ライセンスは Appendix B も参照可。",
    "anchors": {
      "min": 1,
      "max": 5,
      "labels": {
        "1": "Never",
        "2": "Rarely",
        "3": "Sometimes",
        "4": "Often",
        "5": "Always"
      },
      "instructions": "The following statements are related to your work situation and how you experience this situation. Please state how often each statement applies to you."
    },
    "items": [
      {
        "text": "At work, I feel mentally exhausted",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "Everything I do at work requires a great deal of effort",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "After a day at work, I find it hard to recover my energy",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "At work, I feel physically exhausted",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "When I get up in the morning, I lack the energy to start a new day at work",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "I want to be active at work, but somehow I am unable to manage",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "When I exert myself at work, I quickly get tired",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "At the end of my working day, I feel mentally exhausted and drained",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "I struggle to find any enthusiasm for my work",
        "reverse": false,
        "dimension": "Mental distance"
      },
      {
        "text": "At work, I do not think much about what I am doing and I function on autopilot",
        "reverse": false,
        "dimension": "Mental distance"
      },
      {
        "text": "I feel a strong aversion towards my job",
        "reverse": false,
        "dimension": "Mental distance"
      },
      {
        "text": "I feel indifferent about my job",
        "reverse": false,
        "dimension": "Mental distance"
      },
      {
        "text": "I’m cynical about what my work means to others",
        "reverse": false,
        "dimension": "Mental distance"
      },
      {
        "text": "At work, I have trouble staying focused",
        "reverse": false,
        "dimension": "Cognitive impairment"
      },
      {
        "text": "At work I struggle to think clearly",
        "reverse": false,
        "dimension": "Cognitive impairment"
      },
      {
        "text": "I’m forgetful and distracted at work",
        "reverse": false,
        "dimension": "Cognitive impairment"
      },
      {
        "text": "When I’m working, I have trouble concentrating",
        "reverse": false,
        "dimension": "Cognitive impairment"
      },
      {
        "text": "I make mistakes in my work because I have my mind on other things",
        "reverse": false,
        "dimension": "Cognitive impairment"
      },
      {
        "text": "At work, I feel unable to control my emotions",
        "reverse": false,
        "dimension": "Emotional impairment"
      },
      {
        "text": "I do not recognize myself in the way I react emotionally at work",
        "reverse": false,
        "dimension": "Emotional impairment"
      },
      {
        "text": "During my work I become irritable when things don’t go my way",
        "reverse": false,
        "dimension": "Emotional impairment"
      },
      {
        "text": "I get upset or sad at work without knowing why",
        "reverse": false,
        "dimension": "Emotional impairment"
      },
      {
        "text": "At work I may overreact unintentionally",
        "reverse": false,
        "dimension": "Emotional impairment"
      }
    ],
    "unmodifiedRequired": true,
    "officialTermsUrl": "https://burnoutassessmenttool.be/",
    "questionnaireUrl": "https://burnoutassessmenttool.be/wp-content/uploads/2020/08/BAT-English.pdf"
  },
  "hadzibajramovic-bat-12": {
    "published": true,
    "license": "CC BY 4.0（短縮論文）。公式利用条件は BAT-23 と同一（改変不可・引用必須）",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "公式サイト: “The BAT is non-proprietary and may be used free of charge without requesting permission from the authors. Please note, however, that the instrument should not be modified, and the following publication should be cited: Schaufeli, W. B., Desart, S., & De Witte, H. (2020)… International Journal of Environmental Research and Public Health, 17, 9495”",
    "sourceCitation": "Schaufeli, W. B., Desart, S., & De Witte, H. (2020). Burnout Assessment Tool (BAT) – Development, validity and reliability. International Journal of Environmental Research and Public Health, 17, 9495.",
    "sourceUrl": "https://doi.org/10.3390/ijerph17249495",
    "sourceLocation": "公式英語質問票 Work-related version の * = Short version 12項目",
    "anchors": {
      "min": 1,
      "max": 5,
      "labels": {
        "1": "Never",
        "2": "Rarely",
        "3": "Sometimes",
        "4": "Often",
        "5": "Always"
      },
      "instructions": "The following statements are related to your work situation and how you experience this situation. Please state how often each statement applies to you."
    },
    "items": [
      {
        "text": "At work, I feel mentally exhausted",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "After a day at work, I find it hard to recover my energy",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "At work, I feel physically exhausted",
        "reverse": false,
        "dimension": "Exhaustion"
      },
      {
        "text": "I struggle to find any enthusiasm for my work",
        "reverse": false,
        "dimension": "Mental distance"
      },
      {
        "text": "I feel a strong aversion towards my job",
        "reverse": false,
        "dimension": "Mental distance"
      },
      {
        "text": "I’m cynical about what my work means to others",
        "reverse": false,
        "dimension": "Mental distance"
      },
      {
        "text": "At work, I have trouble staying focused",
        "reverse": false,
        "dimension": "Cognitive impairment"
      },
      {
        "text": "When I’m working, I have trouble concentrating",
        "reverse": false,
        "dimension": "Cognitive impairment"
      },
      {
        "text": "I make mistakes in my work because I have my mind on other things",
        "reverse": false,
        "dimension": "Cognitive impairment"
      },
      {
        "text": "At work, I feel unable to control my emotions",
        "reverse": false,
        "dimension": "Emotional impairment"
      },
      {
        "text": "I do not recognize myself in the way I react emotionally at work",
        "reverse": false,
        "dimension": "Emotional impairment"
      },
      {
        "text": "At work I may overreact unintentionally",
        "reverse": false,
        "dimension": "Emotional impairment"
      }
    ],
    "unmodifiedRequired": true,
    "officialTermsUrl": "https://burnoutassessmenttool.be/",
    "questionnaireUrl": "https://burnoutassessmenttool.be/wp-content/uploads/2020/08/BAT-English.pdf",
    "additionalCitation": "Hadžibajramović, E., Schaufeli, W., & De Witte, H. (2022). Shortening of the Burnout Assessment Tool (BAT)—from 23 to 12 items using content and Rasch analysis. BMC Public Health, 22, 560. doi:10.1186/s12889-022-12946-y"
  },
  "lee-baggley-bws-7": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "PLOS ONE 出版版（CC BY 4.0）。",
    "sourceCitation": "Lee-Baggley, D., Bakour, H., Howatt, B., Gilin, D., & Etezad, E. (2026). Belonging at Work Scale. PLOS ONE, 21(4), e0346786.",
    "sourceUrl": "https://doi.org/10.1371/journal.pone.0346786",
    "sourceLocation": "Table 1. Belonging at Work Scale Items.",
    "anchors": {
      "min": 1,
      "max": 10,
      "labels": {
        "1": "Low Inclusion “Never Feeling Included”",
        "10": "High Inclusion “always feeling included”"
      }
    },
    "items": [
      {
        "text": "Included in this workplace",
        "reverse": false
      },
      {
        "text": "Welcomed in this workplace",
        "reverse": false
      },
      {
        "text": "Safe in this workplace",
        "reverse": false
      },
      {
        "text": "Like you belong in this workplace",
        "reverse": false
      },
      {
        "text": "Respected in this workplace",
        "reverse": false
      },
      {
        "text": "Valued in this workplace",
        "reverse": false
      },
      {
        "text": "Heard or understood in this workplace",
        "reverse": false
      }
    ],
    "stem": "On a scale of 1 (low) to 10 (high), How would you rate your level of feeling of being:"
  },
  "customer-experience-scale-gahler-18": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "出版版第1頁に CC BY バッジ（CC および BY アイコン）。Crossref license URL は https://creativecommons.org/licenses/by/4.0/（2022-09-14、delay-in-days 0）。",
    "sourceCitation": "Gahler, M., Klein, J. F., & Paul, M. (2023). Customer experience: Conceptualization, measurement, and application in omnichannel environments. Journal of Service Research, 26(2), 191–211.",
    "sourceUrl": "https://doi.org/10.1177/10946705221126590",
    "sourceLocation": "Table 3. Psychometric Properties of the CX Scale.（本文）",
    "anchors": {
      "min": 1,
      "max": 7,
      "labels": {
        "1": "strongly disagree",
        "7": "strongly agree"
      },
      "notes": [
        "“Experience partner” is a placeholder and can be the brand, employee, or other customers."
      ]
    },
    "items": [
      {
        "text": "The contact with the experience partner induced good emotions.",
        "reverse": false,
        "dimension": "Affective"
      },
      {
        "text": "I had positive feelings during the contact with the experience partner.",
        "reverse": false,
        "dimension": "Affective"
      },
      {
        "text": "The contact with the experience partner put me in a good mood.",
        "reverse": false,
        "dimension": "Affective"
      },
      {
        "text": "The contact with the experience partner piqued my curiosity.",
        "reverse": false,
        "dimension": "Cognitive"
      },
      {
        "text": "I learned something beneficial during the contact with the experience partner.",
        "reverse": false,
        "dimension": "Cognitive"
      },
      {
        "text": "I got positive insights during the contact with the experience partner.",
        "reverse": false,
        "dimension": "Cognitive"
      },
      {
        "text": "My physical responses during the contact with the experience partner were pleasant.",
        "reverse": false,
        "dimension": "Physical"
      },
      {
        "text": "During the contact with the experience partner, I actively moved in a way I liked.",
        "reverse": false,
        "dimension": "Physical"
      },
      {
        "text": "During the contact with the experience partner, I was active in a way I liked.",
        "reverse": false,
        "dimension": "Physical"
      },
      {
        "text": "I established a personal relationship with the experience partner.",
        "reverse": false,
        "dimension": "Relational"
      },
      {
        "text": "I felt positively connected with the experience partner.",
        "reverse": false,
        "dimension": "Relational"
      },
      {
        "text": "The contact with the experience partner made me feel like I belonged to a community.",
        "reverse": false,
        "dimension": "Relational"
      },
      {
        "text": "The contact with the experience partner had a positive sensory appeal.",
        "reverse": false,
        "dimension": "Sensorial"
      },
      {
        "text": "The contact with the experience partner had a positive impact on my senses.",
        "reverse": false,
        "dimension": "Sensorial"
      },
      {
        "text": "The contact with the experience partner positively engaged my senses in a variety of ways.",
        "reverse": false,
        "dimension": "Sensorial"
      },
      {
        "text": "The contact with the experience partner was in line with my personal values.",
        "reverse": false,
        "dimension": "Symbolic"
      },
      {
        "text": "My personal beliefs were confirmed during the contact with the experience partner.",
        "reverse": false,
        "dimension": "Symbolic"
      },
      {
        "text": "The contact with the experience partner was in line with my self-image.",
        "reverse": false,
        "dimension": "Symbolic"
      }
    ]
  },
  "virtual-embodiment-questionnaire-agency": {
    "published": true,
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/",
    "licenseNotice": "This work is licensed under a Creative Commons Attribution 4.0 License. For more information, see https://creativecommons.org/licenses/by/4.0/",
    "sourceCitation": "Roth, D., & Latoschik, M. E. (2020). Construction of the Virtual Embodiment Questionnaire (VEQ). IEEE Transactions on Visualization and Computer Graphics, 26(12), 3546–3556.",
    "sourceUrl": "https://doi.org/10.1109/TVCG.2020.3023603",
    "sourceLocation": "Table 3. The Resulting Virtual Embodiment Questionnaire (VEQ).（VEQ Agency）",
    "anchors": {
      "min": 1,
      "max": 7,
      "labels": {
        "1": "strongly disagree",
        "4": "neither agree nor disagree",
        "7": "strongly agree"
      },
      "instructions": "Please read each statement and answer on a 1 to 7 scale indicating how much each statement applied to you during the experiment. There are no right or wrong answers. Please answer spontaneously and intuitively."
    },
    "items": [
      {
        "text": "The movements of the virtual body felt like they were my movements.",
        "reverse": false,
        "dimension": "Agency"
      },
      {
        "text": "I felt like I was controlling the movements of the virtual body.",
        "reverse": false,
        "dimension": "Agency"
      },
      {
        "text": "I felt like I was causing the movements of the virtual body.",
        "reverse": false,
        "dimension": "Agency"
      },
      {
        "text": "The movements of the virtual body were in sync with my own movements.",
        "reverse": false,
        "dimension": "Agency"
      }
    ]
  }
};
