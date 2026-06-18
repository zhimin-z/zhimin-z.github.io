export const profile = {
  name: 'Zhimin (Jimmy) Zhao',
  cnName: '赵志民',
  email: 'z DOT zhao AT queensu DOT ca',
  title: "PhD Candidate",
  subtitle:
    "Working with Dr. Ahmed E. Hassan (ACM/IEEE/AAIA Fellow) at the intersection of AI and SE.",
  tags: ['AI4SE', 'SE4AI', 'LLMOps', 'MLOps', 'LLM4Code'],
  intro:
    "I work on making AI systems more reliable and software engineering more intelligent. Previously, I earned my Master's degree from CG@Penn and my Bachelor's degree from ISC@BIT.",
  links: {
    sail: 'https://sail.cs.queensu.ca',
    advisor: 'https://en.wikipedia.org/wiki/Ahmed_E._Hassan',
    penn: 'http://cg.cis.upenn.edu',
    bit: 'https://www.isclab.org.cn',
    lane: 'https://www.cis.upenn.edu/~shlane',
    luo: 'https://baike.baidu.com/item/%E7%BD%97%E6%A3%AE%E6%9E%97/10037772'
  }
}

export const brandNarrative = {
  kicker: 'AI + SE Researcher · Builder · Author',
  headline:
    'I build research, benchmarks, and open-source systems that make AI engineering more rigorous and software engineering more intelligent.',
  pillars: [
    {
      title: 'Evaluate AI for Software Engineering',
      text: 'Building benchmarks and empirical studies for foundation models, leaderboard operations, and real software engineering practice.'
    },
    {
      title: 'Operationalize Research into Systems',
      text: 'Turning ideas into interactive artifacts, open-source projects, and practical tooling that others can directly use and inspect.'
    },
    {
      title: 'Teach Complex AI Clearly',
      text: 'Writing books, tutorials, and essays that translate frontier AI topics into structured, usable knowledge.'
    }
  ]
}

export const quickNav = [
  { id: 'numbers', label: '📈 Contributions By Numbers' },
  { id: 'highlights', label: '🚀 Research Highlights' },
  { id: 'opensource', label: '🔧 Open Source' },
  { id: 'books', label: '📚 Books' },
  { id: 'papers', label: '📝 Papers' },
  { id: 'blogs', label: '📝 Blogs' },
  { id: 'demoreels', label: '🎬 Demo Reels' },
  { id: 'community', label: '💬 Community Services' },
  { id: 'education', label: '📖 Educations' },
  { id: 'honors', label: '🎖 Honors and Awards' },
  { id: 'teaching', label: '📐 Teaching Experience' },
  { id: 'work', label: '📊 Working Experience' }
]

export const byNumbers = [
  { label: 'Books', value: '4' },
  { label: 'Papers', value: '6' },
  { label: 'Teaching Roles', value: '3' },
  { label: 'Community Services', value: '10+' },
  { label: 'Years in Industry + Research', value: '10+' }
]

export const highlights = [
  {
    title: "SE Arena (FORGE'25)",
    desc: 'Interactive platform for evaluating foundation models in software engineering through community-driven pairwise comparisons and Elo-based ranking.',
    links: [
      { label: 'paper', url: 'https://conf.researchr.org/details/forge-2025/forge-2025-papers/6/SE-Arena-An-Interactive-Platform-for-Evaluating-Foundation-Models-in-Software-Engine' },
      { label: 'artifact', url: 'https://huggingface.co/spaces/SWE-Arena/SWE-Model-Arena' }
    ]
  },
  {
    title: "LBOps in Foundation Model Leaderboards (TSE'25)",
    desc: 'Exploratory study on workflows and smells in leaderboard operations.',
    links: [
      { label: 'paper', url: 'https://ieeexplore.ieee.org/document/10855627' },
      { label: 'code', url: 'https://github.com/zhimin-z/Foundation-Model-Leaderboard-Survey' }
    ]
  },
  {
    title: "ML Asset Management Challenges (EMSE'24)",
    desc: 'Empirical evidence on how teams manage machine learning assets in practice.',
    links: [
      { label: 'paper', url: 'https://link.springer.com/article/10.1007/s10664-024-10474-4' },
      { label: 'code', url: 'https://github.com/zhimin-z/Asset-Management-Topic-Modeling' }
    ]
  }
]

export const books = [
  {
    badge: "Datawhale",
    title: '钥匙书：机器学习理论导引讲解 (Key Book: A Guide to Machine Learning Theory)',
    authors: 'Zhimin Zhao, Hao Zhan',
    venue: 'Datawhale, 2024.',
    links: [
      { label: 'online', url: 'https://datawhalechina.github.io/key-book' },
      { label: 'pdf', url: 'https://github.com/datawhalechina/key-book/releases/download/preview/key_book.pdf' }
    ]
  },
  {
    badge: "Tsinghua",
    title: '零基础AI实战指南：基于阿里云百炼的大模型应用开发 (Zero-to-Hero AI Practical Guide: LLM Application Development on Alibaba Cloud Bailian)',
    authors: 'Ruchun Jia, Zhimin Zhao, Shaochun Hao',
    venue: 'Tsinghua University Press, Under Writing, 2026.',
    links: [{ label: 'pdf [unpublished]', url: 'https://github.com/zhimin-z/aliyun_bailian' }]
  },
  {
    badge: "Tsinghua",
    title: '从DeepSeek到Manus：大模型与多智能体系统原理与实践 (From DeepSeek to Manus: Principles and Practice of Large Models and Multi-Agent Systems)',
    authors: 'Ruchun Jia, Zhimin Zhao',
    venue: 'Tsinghua University Press, Under Review, 2025.',
    links: [{ label: 'pdf [unpublished]', url: 'https://github.com/zhimin-z/deepseek_manus' }]
  },
  {
    badge: "Tsinghua",
    title: '生成式人工智能：核心原理与应用 (Generative Artificial Intelligence: Core Principles and Applications)',
    authors: 'Ruchun Jia, Qi Wang, Zhimin Zhao',
    venue: 'Tsinghua University Press, Under Review, 2025.',
    links: [{ label: 'pdf [unpublished]', url: 'https://github.com/qiwang067/genai_cn' }]
  }
]

export const papers = [
  {
    badge: "TOSEM",
    title: 'Towards Evaluation Engineering: An Empirical Study of ML Evaluation Harnesses in the Wild',
    authors: 'Zhimin Zhao, Zehao Wang, Abdul Ali Bangash, Bram Adams, Ahmed E. Hassan',
    venue: 'ACM Transactions on Software Engineering and Methodology, Under Review (2026). [CORE A*]',
    links: [{ label: 'paper', url: 'https://arxiv.org/abs/2605.24213' }]
  },
  {
    badge: "arXiv",
    title: 'Gradual Cognitive Externalization: From Modeling Cognition to Constituting It',
    authors: 'Zhimin Zhao',
    venue: 'arXiv preprint, 2026.',
    links: [{ label: 'paper', url: 'https://arxiv.org/abs/2604.04387' }]
  },
  {
    badge: "arXiv",
    title: 'Why Code, Why Now: An Information-Theoretic Perspective on the Limits of Machine Learning',
    authors: 'Zhimin Zhao',
    venue: 'arXiv preprint, 2026.',
    links: [{ label: 'paper', url: 'https://arxiv.org/abs/2602.13934' }]
  },
  {
    badge: "FORGE",
    title: 'SE Arena: An Interactive Platform for Evaluating Foundation Models in Software Engineering',
    authors: 'Zhimin Zhao',
    venue: 'ACM International Conference on AI Foundation Models and Software Engineering, 2025.',
    links: [
      { label: 'paper', url: 'https://conf.researchr.org/details/forge-2025/forge-2025-papers/6/SE-Arena-An-Interactive-Platform-for-Evaluating-Foundation-Models-in-Software-Engine' },
      { label: 'artifact', url: 'https://huggingface.co/spaces/SWE-Arena/SWE-Model-Arena' }
    ]
  },
  {
    badge: "TSE",
    title: 'On the Workflows and Smells of Leaderboard Operations (LBOps): An Exploratory Study of Foundation Model Leaderboards',
    authors: 'Zhimin Zhao, Abdul Ali Bangash, Filipe Roseiro Côgo, Bram Adams, Ahmed E. Hassan',
    venue: 'IEEE Transactions on Software Engineering, 2025.',
    links: [
      { label: 'paper', url: 'https://ieeexplore.ieee.org/document/10855627' },
      { label: 'code', url: 'https://github.com/zhimin-z/Foundation-Model-Leaderboard-Survey' }
    ]
  },
  {
    badge: "EMSE",
    title: 'What Slows Down FMware Development? An Empirical Study of Developer Challenges and Resolution Times',
    authors: 'Zitao Wang, Zhimin Zhao, Michael W. Godfrey',
    venue: 'Empirical Software Engineering, Under Rebuttal, 2025.',
    links: [{ label: 'paper', url: 'https://arxiv.org/abs/2510.11138' }, { label: 'code', url: 'https://github.com/Nick77666/FMware-replication-package' }]
  },
  {
    badge: "EMSE",
    title: 'The State of the SBOM Tools Ecosystem and their Prevalence in OSS: A Comparative Analysis of SPDX and CycloneDX',
    authors: 'Zhimin Zhao, Abdul Ali Bangash, Tongxu Ge, Bram Adams',
    venue: 'Empirical Software Engineering, Under Rebuttal, 2025.',
    links: [{ label: 'paper', url: 'https://arxiv.org/abs/2512.21781' }, { label: 'code', url: 'https://github.com/SAILResearch/wip-24-ali-sbom-emse' }]
  },
  {
    badge: "EMSE",
    title: 'An Empirical Study of Challenges in Machine Learning Asset Management',
    authors: 'Zhimin Zhao, Yihao Chen, Abdul Ali Bangash, Bram Adams, Ahmed E. Hassan',
    venue: 'Empirical Software Engineering, 2024.',
    links: [
      { label: 'paper', url: 'https://link.springer.com/article/10.1007/s10664-024-10474-4' },
      { label: 'code', url: 'https://github.com/zhimin-z/Asset-Management-Topic-Modeling' }
    ]
  }
]

export const blogs = [
  { badge: "Medium", title: 'Self-Improving AI: Real Progress, Hard Limits, Open Bets', venue: 'Medium, Jun 2026.', links: [{ label: 'blog', url: 'https://medium.com/@zhiminzhao/self-improving-ai-real-progress-hard-limits-open-bets-18254dce6173' }] },
  { badge: "Medium", title: 'Beyond Pattern Matching: How World Models Will Transform AI', venue: 'Medium, Jun 2026.', links: [{ label: 'blog', url: 'https://medium.com/@zhiminzhao/beyond-pattern-matching-how-world-models-will-transform-ai-bbd58b8a54ab' }] },
  { badge: "Medium", title: 'The Interface Tax: Why AI Is Abandoning the GUI', venue: 'Medium, Mar 2026.', links: [{ label: 'blog', url: 'https://medium.com/@zhiminzhao/why-the-best-ai-developer-tools-look-like-1975-71c73c9da7ec' }] },
  { badge: "Medium", title: 'Why "Vibe Coding" Took Over Programming, But Not the Rest of Software Engineering', venue: 'Medium, Mar 2026.', links: [{ label: 'blog', url: 'https://medium.com/@zhiminzhao/why-vibe-coding-took-over-programming-but-not-the-rest-of-software-engineering-0e42d631713d' }] },
  { badge: "Medium", title: 'The AGI Paradox: We Might Never Realize AGI, and Here is Why', venue: 'Medium, Feb 2026.', links: [{ label: 'blog', url: 'https://medium.com/@zhiminzhao/the-agi-paradox-we-might-never-realize-agi-and-here-is-why-2fe71a151684' }] },
  { badge: "Medium", title: 'When Code Becomes Cheaper Than Debugging: The Rise of Ephemeral Software', venue: 'Medium, Jan 2026.', links: [{ label: 'blog', url: 'https://medium.com/@zhiminzhao/when-code-becomes-cheaper-than-debugging-the-rise-of-ephemeral-software-78b210aadb9d' }] },
  { badge: "Medium", title: 'The Vanishing Middle: When Management Becomes the Bottleneck', venue: 'Medium, Jan 2026.', links: [{ label: 'blog', url: 'https://medium.com/@zhiminzhao/the-vanishing-middle-when-management-becomes-the-bottleneck-a079ac08ffd3' }] },
  { badge: "Medium", title: 'The Missing Rung: Why CS Graduates Are Facing an Invisible Crisis and What to Do About It', venue: 'Medium, Dec 2025.', links: [{ label: 'blog', url: 'https://medium.com/@zhiminzhao/the-missing-rung-why-cs-graduates-are-facing-an-invisible-crisis-and-what-to-do-about-it-f279a629b1df' }] },
  { badge: "Medium", title: 'The Curse of Expertise in CS Education: Why AI-Fluent High Schoolers May Outperform Your Graduates', venue: 'Medium, Dec 2025.', links: [{ label: 'blog', url: 'https://medium.com/@zhiminzhao/the-cs-departments-existential-crisis-when-ai-makes-your-curriculum-obsolete-before-students-b637cc67e791' }] }
]

export const demoReels = [
  { title: 'Demo Reels', url: 'https://www.youtube.com/watch?v=zFPO7Nr4bM8&list=PLisQsVOIdMfRj7WicZocqBoOFMjJmJjZP' }
]

export const openSource = [
  { title: 'Engineered AI', role: 'Initiator', kind: 'organization', desc: 'An open collective developing engineering practices, benchmarks, and reusable systems for building reliable AI-powered software.', url: 'https://github.com/Engineering4AI' },
  { title: 'AI4Scientist', role: 'Initiator', kind: 'organization', desc: 'An open effort exploring how AI agents and foundation models accelerate scientific discovery across disciplines.', url: 'https://github.com/AI4Scientist' },
  { title: 'Software Engineering Arena', role: 'Initiator', kind: 'organization', desc: 'An interactive platform for evaluating foundation models in software engineering through community-driven pairwise comparisons and Elo-based ranking.', url: 'https://github.com/SE-Arena/Software-Engineer-Arena' },
  { title: 'Learn World Model', role: 'Initiator', kind: 'tutorial', desc: 'A hands-on tutorial for understanding and building world models, covering the core concepts, architectures, and training techniques behind model-based agents and video generation.', url: 'https://github.com/datawhalechina/learn-world-model' },
  { title: 'Solo Entrepreneur', role: 'Initiator', kind: 'organization', desc: 'A community initiative building open tools, playbooks, and shared infrastructure for independent founders operating at AI-native scale.', url: 'https://github.com/Solo-Entrepreneur' },
  { title: 'Learn Auto Research', role: 'Initiator', kind: 'tutorial', desc: 'A hands-on open-source project for learning how to build and run AI-powered automated research workflows end to end.', url: 'https://github.com/AI4Scientist/learn-auto-research' },
  { title: 'Awesome AI Leaderboards', role: 'Initiator', kind: 'project', desc: 'A curated list of AI leaderboards, development tools, and evaluation organizations compiled from a comprehensive survey of the leaderboard ecosystem.', url: 'https://github.com/SAILResearch/awesome-foundation-model-leaderboards' },
  { title: 'AnyCLI', role: 'Initiator', kind: 'project', desc: 'A unified registry and capability-dispatch layer that lets AI agents discover, install, and safely invoke CLI tools through a single standardized interface.', url: 'https://github.com/datawhalechina/anycli' },
  { title: 'Hello Claw', role: 'Initiator', kind: 'tutorial', desc: 'A comprehensive tutorial for adopting and customizing OpenClaw, an AI command-line assistant, covering both practical usage and technical implementation from scratch.', url: 'https://github.com/datawhalechina/hello-claw' },
  { title: 'Easy-Pocket', role: 'Initiator', kind: 'tutorial', desc: 'An interactive tutorial for PocketFlow, teaching developers to build chatbots, RAG systems, agents, and workflows using minimal LLM application framework abstractions.', url: 'https://github.com/datawhalechina/easy-pocket' },
  { title: 'EthicalML', role: 'Maintainer', kind: 'organization', desc: 'A community building open-source tools and curated resources for responsible, production-grade machine learning.', url: 'https://github.com/EthicalML' }
]

export const community = [
  'Web Chair, Agentic Software Engineering (KDD 2026), Workshops Track',
  'PC Member, Mining Software Repositories (MSR 2026), Mining Challenge Track',
  'Reviewer, ICSE, FSE, ASE, IEEE TSE, ACM TOSEM, and EMSE',
  'Member, <a href="https://github.com/datawhalechina">Datawhale</a>, authoring and maintaining open-source educational materials on machine learning; invited to publish technical surveys <a href="https://mp.weixin.qq.com/s/yP1zkKSnVf6MtikHmzhV_w">AGI Panorama: A Survey of Artificial General Intelligence</a> and <a href="https://mp.weixin.qq.com/s/oPyYUf7bu5D1zUIOwKHKUw">A Beginner-Friendly Survey on World Models</a> on Datawhale\'s official channel',
  'Member, <a href="https://github.com/EthicalML">Institute for Ethical AI & Machine Learning</a>',
  'Invited Speaker, <a href="https://www.linkedin.com/posts/susie-hsing-47b649353_ai-innovation-wellington-ugcPost-7449768087387541504-AnW2/">AI Innovation Programme</a>, Victoria University of Wellington, on "From Chatbot to Agentic Peer" (Apr 2026)',
  'Invited Speaker, <a href="https://github.com/datawhalechina">Datawhale</a> "Programmers Meet Up" online talk, on "Distilling Anxiety: AI\'s Impact on Software Engineers, Career Repositioning, and Interview Strategy" (Apr 2025)'
]

export const education = [
  {
    period: '2021 - (now)',
    text: "Ph.D. Candidate in Computer Science, Queen's University, Canada. Supervisor: Dr. Ahmed E. Hassan.",
    url: 'https://www.queensu.ca'
  },
  {
    period: '2014 - 2016',
    text: 'M.S.E. in Computer Graphics and Game Technology, University of Pennsylvania, USA. Supervisor: Dr. Stephane Lane.',
    url: 'https://www.upenn.edu'
  },
  {
    period: '2010 - 2014',
    text: 'B.Eng. in Information Countermeasure Technology, Beijing Institute of Technology, China. Supervisor: Dr. Senlin Luo.',
    url: 'https://english.bit.edu.cn'
  }
]

export const honors = [
  'Datawhale Industry Certifications: <a href="/certificates/Fine-tune Engineer.png" target="_blank">Fine-tuning Engineer</a> · <a href="/certificates/Prompt Engineer.png" target="_blank">Prompt Engineer</a> · <a href="/certificates/Agent Engineer.png" target="_blank">Agent Engineer</a> · <a href="/certificates/LLM Engineer.png" target="_blank">LLM Engineer</a> · <a href="/certificates/Model Development Engineer.png" target="_blank">Model Development Engineer</a> · <a href="/certificates/AI Coding.png" target="_blank">AI+Coding</a> · <a href="/certificates/Data Analysis.png" target="_blank">AI+Data Analysis</a>',
  '2024 Platinum Prize, Poster Track, Software Engineering for Machine Learning Applications (SEMLA)',
  '2020 Outstanding Mentor, American Top Education Elite Plan, Harbour Education',
  '2016 Shortlisted, Chunhui Cup Oversea Students Innovation and Entrepreneurship Competition, Ministry of Education & Ministry of Science and Technology, China',
  '2014 Excellent Graduate, Beijing Institute of Technology',
  '2013 Meritorious Prize, Mathematical Contest in Modeling (MCM)'
]

export const teaching = {
  queens: [
    { text: 'Teaching Assistant, CISC 322 Software Architecture, 2024' },
    { text: 'Teaching Assistant, CISC 834 Topics in Computer Science: MLOps and Release Engineering, 2023' }
  ],
  penn: [
    { text: 'Teaching Assistant, CIS 4210/5210 Artificial Intelligence, 2016' }
  ]
}

export const work = [
  { period: 'Feb 2025 - Present', text: 'Research Intern, Huawei Canada, Toronto, Canada. Supervisor: Dr. Gustavo Ansaldi Oliva.' },
  { period: 'Apr 2026 - Present', text: 'Technical Advisor, IRMO Robotics (BUAA National Key R&D Program Commercialization), Hangzhou, China.' },
  { period: 'Feb 2022 - Jul 2022', text: 'Research Intern, Huawei 2012 Lab, Hangzhou, China. Supervisor: Dr. Xin Xia.' },
  { period: 'Jan 2021 - Jul 2021', text: 'Visiting Scholar, Beijing Institute of Technology, Beijing, China. Supervisor: Dr. Hui Liu.' },
  { period: 'Jul 2019 - Dec 2020', text: 'Mentor, Harbour Education, Beijing, China.' },
  { period: 'Dec 2018 - Jul 2019', text: 'Software Engineer, Method Studios, Santa Monica, USA.' },
  { period: 'Sep 2017 - Dec 2018', text: 'Software Engineer, Visual Concepts, Simi Valley, USA.' },
  { period: 'May 2016 - Dec 2016', text: 'Unity Developer, Imagination Vent, San Diego, USA.' }
]
