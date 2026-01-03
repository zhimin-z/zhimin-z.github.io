# The CS Department's Existential Crisis: When AI Makes Your Curriculum Obsolete Before Students Graduate

## A Note on Perspective

I'm writing this as someone wrestling with difficult questions about the future of CS education, not someone who claims to have all the answers. I might be wrong about the pace of change, the extent to which AI will transform our field, or the best path forward. Many CS educators are already pioneering innovative approaches—this post synthesizes observations and raises questions for discussion, not prescriptions. I welcome pushback, alternative perspectives, and constructive criticism.

## A Tale of Two Debuggers

Boris Cherny, the creator of Claude Code—arguably the most powerful AI coding assistant in existence—recently faced a memory leak problem in his own product. His brain, honed by over a decade of engineering experience, immediately switched into "expert mode." He knew exactly what to do: connect the profiler, run the app, pause threads, manually inspect heap memory allocations. This was his bread and butter.

Meanwhile, a junior colleague simply threw the dump file at Claude and said: "Help me do a heap dump and see if there's anything weird."

Claude solved it in one shot. Not only found the problem, but submitted the fix.

At that moment, Boris realized something terrifying: **fresh graduates were using his own tool better than he could**. They had no historical baggage. They didn't know that debugging was supposed to be hard. They simply assumed this was AI's job.

This phenomenon has a name in business literature: "Innovator's Dilemma". In personal development, I'd call it the Curse of Expertise. You become so proficient at old-world skills that you can't let go of your old ticket to board the new ship.

If the curse of expertise can hobble a world-class engineer in months, how should CS departments think about the skills we teach over four years?

## Acknowledgment: Many Educators Are Already Leading This Change

Before proceeding, I want to recognize that many CS educators are already pioneering these approaches. Faculty at institutions worldwide are integrating AI tools into their curricula, redesigning courses around real-world projects, and grappling with exactly these questions. Stanford University, for instance, launched ["The Modern Software Developer"](https://themodernsoftware.dev) course last fall that directly addresses AI-augmented software development. Programs experimenting with AI-augmented learning, project-based assessment, and industry collaboration are emerging across the educational landscape.

This post isn't claiming to have discovered these challenges—rather, I'm synthesizing observations from educators, practitioners, and researchers who are navigating this transition in real time. The question isn't whether change is needed (many already recognize this), but how we scale these innovations and address the institutional, pedagogical, and equity challenges that come with transformation.

## The Productivity Gap and the 2,000-Hour Mastery Challenge

Steve Yegge, a legendary programmer with 30+ years of experience who built critical infrastructure at both Amazon and Google, recently made a claim that sounds hyperbolic until you think about it: engineers who haven't touched AI coding for a year are already "dinosaur-level." World-class traditional engineers who don't embrace AI could be at intern level within a year.

The performance gap he's seeing isn't marginal—it's 10x. Two engineers with identical titles and responsibilities, one using AI agents, one not. **The AI-augmented engineer produces ten times the output**.

And here's Andrej Karpathy, the former director of AI at Tesla, one of the founding members of OpenAI, confessing on Twitter: "I've never felt so behind." The man who helped build the foundations of modern AI feels like current AI coding is "alien technology," and that his accumulated experience might actually be a hindrance.

If Karpathy is struggling, what does that mean for the computer science student who just spent four years learning data structures and algorithms the traditional way?

But here's the crucial insight Yegge offers: it takes about 2,000 hours—roughly a year of full-time practice—to truly master AI-augmented work.

This isn't about learning prompts or memorizing syntax. It's about developing intuition for what AI can and cannot do, learning to predict its behavior, understanding when to trust it and when to double-check. As Yegge puts it: "If you treat it like a person, it will absolutely delete your production database."

The research he cites suggests you need at least a year working with AI before you genuinely "trust" it—and that trust isn't emotional. It's predictive. You can anticipate what it will do next.

2,000 hours is almost exactly one academic year of full-time study. If universities took AI mastery seriously, they could produce graduates who are genuinely fluent in human-AI collaboration.

Instead, most CS departments are still debating whether to allow ChatGPT on exams.

## The Invisible Revolution

Zhenyu Luo, a prominent Chinese media entrepreneur and host of the influential annual "Time's Friend" New Year's Eve speech (think China's equivalent of a TED talk meets a State of the Union address, watched by millions), made an observation in his 2026 address that crystallizes the challenge facing higher education: every previous technological revolution had visible social landscapes. Steam engines brought factory chimneys. Internal combustion engines brought highways full of cars. Computers brought office towers full of people staring at screens.

AI has no such landscape. It infiltrates invisibly, like water seeping through cracks. A supermarket in Beijing now uses AI to monitor whether employees change gloves on time. A concrete mixing plant in Daxing uses AI to replace the master craftsmen who spent decades learning the perfect mix ratios. A coal mine in Inner Mongolia replaced truck drivers with autonomous vehicles—not for cost savings, but because no human should work in -40°C conditions with near-zero visibility.

Li Feifei, the Stanford professor often called the "godmother of AI" and co-director of Stanford's Human-Centered AI Institute, argues that education must evolve: AI is rapidly proving that machines can replicate many skills we spend years teaching. This raises urgent questions about what educational institutions should prioritize—questions that CS departments, given our field's central role in this transformation, are uniquely positioned to address.

## The Tower of Babel: How AI Demolished the Learning Boundary

Before we ask what CS education should teach, we need to understand how fundamentally AI has transformed the act of learning itself.

There's a biblical story about the Tower of Babel—humanity united in building a tower to reach heaven, speaking one language, until God confused their tongues and scattered them. Today's AI is the reverse Tower of Babel. It's breaking down the recognition boundaries that separated novice from expert, student from professional, those who know from those who don't.

Consider my own experience during my PhD. When I encountered a problem in my research, I had to navigate a fragmented landscape of resources: Google search for general information, StackOverflow for specific coding questions, YouTube tutorials for visual explanations, technical papers for theoretical foundations. If those failed, I'd ask colleagues or wait for my supervisor's office hours. Each source required different skills to navigate. Each had its own language, its own norms, its own barriers to entry.

Since ChatGPT and similar AI assistants emerged, that entire ecosystem has collapsed into a single conversational interface. I rarely resort to external sources anymore unless the AI fails after exhausting all approaches. The AI doesn't just answer questions—it translates between domains, explains at whatever level I need, writes code I can test immediately, suggests approaches I hadn't considered. **The boundary between "things I can figure out" and "things I need help with" has blurred almost to invisibility**.

This isn't just convenience. It's a fundamental shift in how knowledge work happens. The bottleneck is no longer access to information or even understanding—it's knowing what problems are worth solving and having the agency to pursue them.

## The Collapsing Half-Life of CS Skills

What's the shelf life of a CS skill in the AI age?

The traditional answer was that CS programs train students for careers, not jobs. We give them foundational knowledge that remains relevant across decades. Learn computer science fundamentals, and you can adapt to any programming language, any framework, any paradigm shift.

That logic deserves reexamination. Many core computer science skills—from software development and algorithm implementation to system design, debugging, and code review—can now be significantly augmented or partially automated by AI tools. This extends beyond just programming: AI assists with data analysis and visualization, automates routine database operations, helps explain theoretical concepts, generates documentation, and even aids in research literature review. The traditional boundaries between tasks that require deep expertise versus those accessible to beginners are shifting.

This doesn't mean human expertise is obsolete. Cutting-edge research, complex system design, novel algorithmic innovation, and critical judgment about what problems are worth solving still require human insight. But the nature of what CS graduates need to know—and how they apply that knowledge—is evolving faster than traditional four-year curricula can adapt.

ChatGPT launched in late 2022. In just three years, we've seen companies hiring based on demonstrated ability to work effectively with AI tools rather than traditional credentials alone. **If even three-year skill projections have become unreliable, what does a four-year degree teach that remains relevant throughout?**

## When Tech Giants Stop Knocking on Campus

The answer, increasingly, might be: not much.

Consider Gabriel Petersson. He dropped out of high school and taught himself PhD-level AI using ChatGPT. Not by grinding through years of theory first—by diving into real problems and using AI to fill knowledge gaps on demand. OpenAI hired him. The company that builds the most advanced AI systems in the world looked at a high school dropout who learned through AI assistance and said: this is exactly who we want.

Gabriel's path represents a fundamental inversion of educational logic. Traditional education insists on "foundations first"—spend years mastering prerequisites before touching real problems. But in the AI age, **top-down learning is proving more efficient**: start with actual challenges, use AI to fill gaps contextually, master core skills through purposive exploration rather than prescribed curriculum. The university's knowledge monopoly has been broken.

This isn't an isolated case. In November 2025, Palantir—the $452 billion defense technology giant—graduated its first cohort of the "Meritocracy Fellowship." This wasn't a summer internship for college juniors. It was a four-month paid program for high school graduates who chose not to enroll in college at all.

The program attracted over 500 applicants and accepted only 22—teenagers with Ivy League-level test scores who either felt college wasn't compelling or didn't get into their dream schools. They learned U.S. history, studied foundations of Western civilization, and worked alongside Palantir's full-time employees solving real technical problems. Those who excelled were offered salaried positions at the company.

The program's tagline? "Skip the debt. Skip the indoctrination."

Palantir CEO Alex Karp didn't mince words: "Everything you learned at your school and college about how the world works is intellectually incorrect." He went further during an earnings call: "If you did not go to school, or you went to a school that's not that great, or you went to Harvard or Princeton or Yale, once you come to Palantir, you're a Palantirian—no one cares about the other stuff. This is by far the best credential in tech."

Palantir isn't alone. Back in 2020, Elon Musk announced Tesla was hiring for its AI team: "A PhD is definitely not required. Don't care if you even graduated high school. Educational background is irrelevant, but all must pass hardcore coding test."

In a 2014 interview with Auto Bild, Musk had already laid out his philosophy: "There's no need even to have a college degree at all, or even high school. If somebody graduated from a great university, that may be an indication that they will be capable of great things, but it's not necessarily the case. If you look at, say, people like Bill Gates or Larry Ellison, Steve Jobs, these guys didn't graduate from college, but if you had a chance to hire them, of course that would be a good idea."

What matters to Musk isn't credentials—it's "evidence of exceptional ability" and "a track record of exceptional achievement." Tesla's hiring process focuses on first-hand experience and hands-on expertise testing, not diplomas.

And the data suggests these companies mean it. According to workforce analytics from Revelio Labs, Tesla actually has a higher share of employees without college degrees than many traditional automakers and tech companies. The leadership's de-emphasis on credentials has permeated the broader organization.

Google, Apple, and Netflix have all publicly stated they no longer require college degrees for many positions. The trend is accelerating, not slowing.

There's a cold economic logic behind this trend that universities need to confront: **when you can train someone to AI fluency in a year for a fraction of the cost of a four-year degree, the traditional path stops making financial sense**. A company hires a motivated high school graduate, trains them to work effectively with AI tools in months, not years. The learning curve is steep but short—2,000 hours as Yegge suggests, roughly one year of intensive practice.

Compare this to the traditional path: four years of university education costing $50,000 to $200,000, much of which teaches skills that AI can now significantly augment or partially automate. From a company's perspective, why pay a premium salary to hire a CS graduate with four years of traditional training and student debt expectations, when you can hire a smart 18-year-old, train them in AI-augmented development for a fraction of the cost, and have a productive team member within a year?

If training someone to AI fluency costs a company perhaps $50,000-$100,000 in salary and resources over one year, versus hiring a graduate with $100,000+ in debt who expects a premium salary but needs to unlearn traditional habits, the economic incentive is clear. Companies don't just save money on the hire—they get employees without the "curse of expertise" who naturally adopt AI-first workflows.

This is why Palantir's fellowship isn't just ideological. It's economically rational.

## The Scaling Law Dilemma: Why Universities Can't Compete

But there's a deeper structural reason why CS higher education faces an existential crisis—one rooted in the fundamental nature of this generation of AI technology.

Modern AI is scaling law-driven. The more compute power you have, the more capable the model you can train. This isn't about clever algorithms or theoretical breakthroughs—it's about resources. And when it comes to resources, industry wins without question.

Consider what matters most in today's AI landscape: how to train better models, how to deploy trained models with cheaper pricing and lower latency, how to use served models effectively across different contexts. These aren't abstract theoretical problems. They're engineering challenges that require massive infrastructure, significant budgets, and practitioners who work with production systems daily.

Universities simply cannot compete. Most CS departments lack the compute clusters to train frontier models. They don't have the budget to run large-scale experiments. They can't hire enough faculty who've actually deployed AI systems at scale. Even if they could, by the time a curriculum gets designed, approved, and taught, the industry has moved three generations ahead.

**If a bachelor's degree can't provide knowledge or skills that high school graduates working at tech companies don't already have access to, why should anyone pursue such a degree for the job market?**

To be clear, not every domain in CS faces the same threat. Quantum computing still requires cutting-edge physical knowledge and experimentation that contemporary AI can't easily replicate. Certain areas of theoretical computer science remain insulated. But for the vast majority of CS students headed into software engineering, data science, or AI engineering—the fields that employ most graduates—the traditional university value proposition is crumbling.

## The ROI Catastrophe for CS Degrees

These corporate signals arrive at exactly the moment when the financial case for a CS degree is collapsing.

Seven in ten Americans now say U.S. higher education is heading in the wrong direction, according to Pew Research Center data. Fifty-five percent give colleges poor ratings for preparing students for well-paying jobs.

The employment statistics are brutal. As of July 2025, 58% of students who graduated from college in the past year were still trying to find stable work—compared with just 25% of millennials and Gen Xers who faced the same situation when they graduated. Hiring for new graduates among the 15 biggest tech companies has fallen by over 50% since 2019.

And then there's the debt. The average Gen Zer now carries more than $94,000 in personal debt, compared with roughly $60,000 for millennials and $53,000 for Gen Xers.

Now do the math from a middle-class family's perspective.

You take out loans or drain savings to pay for four years of tuition—let's say $50,000 to $200,000 depending on the school. Your child graduates with a computer science degree. Meanwhile, a high school graduate who spent those four years mastering AI tools, contributing to open-source projects, and building a portfolio of real work is competing for the same jobs.

Who gets hired? According to Yegge's 10x productivity data, the AI-fluent high schooler might actually be more valuable than the traditionally-trained CS graduate. Certainly they're cheaper—no debt to service, no expectations of a salary premium for their degree.

At what point do rational families simply opt out?

This isn't hypothetical. The trends are already visible. College enrollment has been declining for years. More teenagers are questioning whether the investment makes sense. The Palantir fellowship received 500 applications in its first year—for just 22 spots. That's a 4.4% acceptance rate, comparable to Harvard's, except these students are being paid to learn rather than paying to learn.

If this pattern continues—if companies increasingly hire based on demonstrated AI fluency rather than credentials—the financial model of CS departments faces an existential threat. Tuition fees are a major revenue source for universities. What happens when the customers decide the product isn't worth the price?

## Beyond Code: The Social Scaffolding of CS Education

But wait. There's a critical dimension we've been overlooking in this entire analysis—one that reveals why CS education might be more essential than ever, even as its knowledge-transmission function diminishes.

We've spent thousands of words discussing how AI is devaluing knowledge acquisition. But universities have never been solely about knowledge. They serve another function that's easy to miss if you're too focused on curriculum: they're the bridge between adolescence and adulthood.

Consider the social reality: we don't allow people under 18 to fully participate in industry or broader society. We consider them developmentally immature—not ready for the autonomy, responsibility, and complexity of adult professional life. This isn't arbitrary. There's a genuine gap that needs bridging.

For generations, universities and colleges have been that bridge. They're the protected space where young adults learn not just Python or calculus, but how to collaborate with peers, interact with practitioners, navigate professional norms, manage deadlines without parental oversight, handle failure and criticism, and develop the social fluency that work demands.

This is tacit knowledge of a different kind—not domain expertise that AI can extract, but lived experience of being human among other humans. Learning when to speak up in a meeting and when to listen. Understanding how to disagree productively. Building the emotional regulation to handle setbacks. Developing the social antenna that tells you whether your team lead is annoyed or just tired.

**While AI is rapidly devaluing the knowledge-acquisition function of higher education, it barely touches this social-scaffolding function**. ChatGPT can teach you data structures. It cannot teach you how to read a room, navigate office politics, or build trust with colleagues over months of collaboration.

This suggests a radical reorientation of what higher education might prioritize.

If knowledge acquisition is becoming commoditized, universities could double down on what remains irreducibly human: helping students understand how society actually works, cultivating philosophical thinking about what kind of humans we want to be, and creating environments where young people can practice being functional adults before the stakes get real.

This could mean more courses on philosophy, ethics, social systems, psychology, history—not as ivory-tower abstractions, but as frameworks for understanding the human world students are about to enter. It could mean structured opportunities for collaboration on real problems where interpersonal dynamics matter as much as technical solutions. It could mean mentorship from practitioners who can model professional judgment, not just technical skill.

In the AI age, where machines can outperform us on an ever-expanding range of cognitive tasks, the distinctly human capacities become more valuable, not less. The ability to understand our own intentions and values. The wisdom to know what goals are worth pursuing. The judgment to navigate ambiguous social situations. The integrity to act ethically when no one is watching.

These aren't skills you learn from a chatbot. They're developed through years of structured social experience—exactly what universities, at their best, have always provided.

The irony is that while we've been obsessing over whether CS curricula are teaching the right programming languages, we've been underselling higher education's most durable value proposition: it's the last structured developmental environment before full adulthood. A place where you can fail safely, experiment with identity, find your people, and figure out who you want to be—not just what you want to know.

The question isn't whether CS departments should continue to exist. It's whether they'll recognize which of their functions AI can replace and which it cannot—and restructure accordingly.

## From Code Monkey to AI Orchestrator: What CS Students Actually Need to Learn

But there's a pattern worth noticing—one that reveals where CS education might still add value.

At Conch Cement in Anhui Province—a major industrial region in eastern China—there's a worker named Pei Jun. His job used to be mixing concrete based on decades of accumulated tacit knowledge—the kind of expertise that exists only in an old master's head. Now AI has extracted his knowledge and taken over his work.

Did Pei Jun become unemployed? No. He now trains AI algorithms and leads the company's digital transformation. He just got promoted to assistant director of the AI division.

Pei represents a new emerging category of workers—"Purple Collar"—neither white collar nor blue collar, but something in between. **AI doesn't push humans down. It elevates us—if we let it**. The tedious, repetitive, dangerous work gets automated. What remains is the distinctly human work: judgment, creativity, connection, responsibility.

The question for CS departments becomes: are we training traditional programmers for jobs that will be automated, or AI-augmented software engineers who can ride the AI wave?

Steve Yegge offers a clue about what this new role requires. He notes that even when you no longer write code yourself, you still need to understand how things work at a "language-agnostic" level. You need to grasp concepts like functions, objects, system architecture—not to implement them, but to direct AI systems that will.

**The real skill isn't coding anymore. It's orchestrating agents**. It's knowing when to use which AI model, how to decompose complex tasks, how to validate outputs. It's engineering at a higher level of abstraction.

But it's more than that. Yegge's collaborator Jeffrey Emanuel, who built an "agent mail" system for AI coordination, is a mathematician who taught himself engineering. He doesn't necessarily write code, but he understands how Cassandra works, how distributed systems behave, what the architectural tradeoffs are.

The implication: CS education isn't obsolete. But it might need to move up the abstraction stack. Perhaps the focus should shift toward teaching students to think like software architects and innovators, not like code monkeys.

Importantly, this doesn't mean abandoning fundamentals. When students tackle real problems with AI assistance, they learn algorithms, data structures, and systems concepts—but contextually, as needed to solve actual challenges. A student debugging a distributed system learns about concurrency and race conditions through necessity, not abstract lectures. One implementing a feature learns relevant algorithms by needing them, not memorizing them for exams. The fundamentals still get learned, but through purposive exploration rather than prescribed curriculum.

## From Toy Projects to Real Contributions: Cultivating Agency in CS Students

In my previous blog post, I suggested that CS students should adopt a "fake it until you make it" approach—contributing to real projects with AI assistance and learning everything on the fly. The more I think about this, the more I believe it should become the foundation of how we restructure CS education.

**This is fundamentally about cultivating agency**: teaching students to find real problems worth solving, propose solutions, and build implementations—whether as researchers, engineers, or entrepreneurs.

Consider the absurdity of current CS education. Students spend semesters building toy projects that no one will ever use: a simplified Twitter clone, a basic e-commerce site, a calculator with a GUI. They learn data structures by implementing binary trees that any library provides better. They prove they can sort algorithms on paper, then graduate and use sorted() for the rest of their careers.

What if, instead, we sent students to contribute to projects that matter?

Imagine a software engineering course where the final project isn't building yet another TODO app, but proposing and implementing an enhancement to Apache Airflow, Claude Code, or CUDA-Q. The student works with AI to understand the codebase, identify a genuine improvement, draft a proposal, implement the change, and submit a pull request.

Some PRs will be rejected. That's the point. The student learns how real software development works—the back-and-forth with maintainers, the need to understand not just code but community norms, the reality that most ideas need iteration before they're good enough.

This mirrors how professionals with agency operate—whether in research, industry, or startups: identify a need, propose a solution, build and iterate, handle setbacks. These are the skills that distinguish those who shape their fields from those who merely follow.

And here's the crucial shift in assessment: we grade the trajectory, not the destination.

Instead of closed-book exams testing whether students memorized the proof of the Fundamental Theorem of Calculus, we evaluate their conversation logs with AI. Did they ask good questions? Did they recognize when the AI was hallucinating? Did they persist through dead ends? Did they synthesize insights from multiple sources?

Instead of exam scores, we look at pull request histories. Not just whether the PR was merged, but the quality of the student's engagement with feedback. Did they understand the maintainer's concerns? Did they iterate effectively? Did they learn from rejection?

This isn't as radical as it sounds. It's how apprenticeship worked for millennia before we industrialized education. Master craftsmen didn't give journeymen written tests. They watched them work, evaluated their judgment, assessed whether they were ready for independence.

## Addressing the "True Understanding" Objection

I can already hear the objections from CS faculty: "But how will we maintain quality control? How do we ensure students actually learn the fundamentals? Won't they just become dependent on AI without understanding what they're doing?"

These concerns sound reasonable but miss a deeper reality: the division of expertise is already the norm in every professional field.

A surgeon doesn't manufacture their own scalpels. An architect doesn't smelt their own steel. A lawyer doesn't write their own legal research databases. We've long accepted that professionals can achieve excellence while depending on tools and infrastructure they don't fully understand.

What we're seeing with AI is an acceleration of this division. The question isn't whether specialization will increase—it will. The question is what kind of specialization we should cultivate.

The students who learn to excel with AI will outperform those who resist it. This isn't speculation; it's already observable. Yegge's 10x productivity gap isn't theoretical. Companies are already seeing it in performance reviews. The engineers who embraced AI agents are shipping features at rates that make their traditionally-minded colleagues look like they're standing still.

Some educators worry that students who learn with AI will lack "true understanding." But what does "true understanding" mean when AI can explain most concepts on demand, demonstrate algorithms step-by-step, and help identify many errors in real-time?

Perhaps "true understanding" in the AI age isn't about storing information in your head. It's about knowing what questions to ask, recognizing when answers don't make sense, and integrating insights across domains. These are precisely the skills that real-world project work develops—and that rote memorization and exam preparation do not.

The uncomfortable truth is that exam-oriented learning has already proven inefficient for adapting to fast-evolving industry demands—and that was before AI assistants became ubiquitous. Now, with AI tools available to everyone, the gap between academic preparation and workplace reality has become a chasm.

Some people will excel at using AI and outcompete those who resist it due to bias against progressive technology. This isn't a prediction; it's already happening. The only question is whether CS education will help students get on the right side of this divide, or leave them stranded on the wrong one.

## Escaping the Commodity Trap: Cultivating Uniqueness and Agency

Luo Zhenyu offers another lens on this challenge for CS students. He poses a question to parents anxious about their children's future: What kind of person is unafraid of change?

His answer: someone with uniqueness. In an AI age, standardized skills are precisely what gets automated most easily. The more human data AI has to learn from in a domain, the more effectively it can replace human workers there.

**The mission of future education should be helping each person "invent a profession that only they are most qualified for."**

This sounds abstract, but he gives concrete examples. A young man named Cao Dezhi, neither a top-tier university graduate nor a traditional success story, created a niche business making miniature 3D models of people's demolished childhood homes—a "micro-scene designer." At 30, he's essentially invented his own profession.

For education, this suggests we need to flip our assumptions. The old logic: follow the crowd to safety. Pick popular majors. Do what everyone else does. The new logic: escape uniformity. Cultivate distinctiveness. Accumulate unique experiences.

A teacher named Li Rui, a former star math instructor in China's competitive tutoring industry, has started a new kind of training program. He teaches children to use AI not through memorizing prompts, but by giving them real tasks with real deadlines. He commissioned a group of kids to design 34 promotional images for an actual marketing campaign. The pressure of real deliverables forced creative problem-solving that no curriculum could teach.

Some innovative schools are taking this further. The Kechuang Academy in Shenzhen (China's tech hub, often called the "Silicon Valley of the East") and Chuangzhi Academy in Shanghai are running programs where students "start a company" upon enrollment. The goal isn't credentials—it's bringing a real product to market. Market research, prototyping, manufacturing, launch. Education as cultivating agency through purposive action.

But Luo makes what I consider his most profound observation about the human-AI difference—one that's particularly relevant for CS students.

AI's capabilities come from training data—the accumulated record of human experience. Near the center of human civilization, where data is abundant, AI is incredibly powerful. But at the edges? In the darkness of the unknown? AI stumbles.

What humans have that AI lacks is willpower—the ability to conceive of a destination in the unknown darkness and set off toward it without evidence that the journey will succeed.

Zhang Qian, the Han Dynasty explorer who first opened the Silk Road two millennia ago. Columbus sailing west. Magellan circumnavigating the globe. What these heroes share isn't knowledge or skill. It's the capacity for what Kant called judgment "subjectively justified but objectively groundless." They departed before they had proof they'd arrive.

This capacity for visionary commitment can't be extracted from training data because, by definition, it ventures beyond where data exists.

**Cultivating agency, initiative, and the capacity for purposive action might matter more than any specific technical skill**. The CS graduates who will thrive aren't those with the most knowledge—AI has more—but those who can identify problems worth solving that no one else sees, envision solutions that don't yet exist, rally resources and people to build something new, and persist through uncertainty when there's no guarantee of success.

This is agency at its core—whether expressed through scientific research, engineering innovation, or entrepreneurial ventures. And it's what CS education should prioritize above all else.

## The Path Forward: A Roadmap for CS Education

So where does this leave CS education? While I'm synthesizing observations from educators, practitioners, and researchers rather than speaking as a faculty member myself, these patterns suggest several directions CS departments might consider:

**First**, accept that the credentialing monopoly is breaking. If universities don't teach AI fluency, someone else will—and might do it better. Palantir's fellowship is just the beginning.

**Second**, restructure around the 2,000-hour milestone. If genuine AI mastery requires roughly a year of intensive practice, universities could build this into their programs. Not as an elective. Not as an add-on. As a core requirement that shapes everything else.

**Third**, replace toy projects with real contributions. Stop assigning homework that nobody will ever use. Send students to contribute to open-source projects, propose enhancements to production systems, tackle open problems in mathematics and science. Grade by pull request quality and conversation trajectory, not exam performance.

**Fourth**, cultivate uniqueness rather than uniformity. The assembly-line model of CS education—everyone takes the same courses, passes the same exams, gets the same credentials—produces exactly the standardized programmers AI can most easily replace. Help students discover and develop what makes them irreplaceable.

**Fifth**, acknowledge the ROI crisis honestly. If families are taking on six figures of debt for CS degrees that tech giants no longer require, something is broken. Departments need to either deliver value that justifies the cost, or adjust the cost to match the value they deliver.

**Sixth**, preserve what truly matters in CS research. Research universities have a crucial additional mission: pushing the frontiers of knowledge. While industry leads in AI engineering applications, basic research requires the long-term, uncertain work that companies won't fund. This is academia's irreplaceable contribution. The challenge for CS research in the AI age is maintaining focus on genuine scientific breakthrough. The most impactful work will likely come from fundamental questions about computation and intelligence that have no immediate commercial application, theoretical foundations that might take decades to bear fruit, interdisciplinary collaboration that bridges CS with other sciences, and critical evaluation of AI systems' societal impacts and limitations. Be ruthless about distinguishing genuine scientific inquiry from academic busywork. The world doesn't need more papers about fine-tuned models. The departments that thrive will be those that resist the pressure to chase short-term trends and instead ask the hard questions that only patient, rigorous academic inquiry can address.

But these six propositions only scratch the surface. The real challenges lie in implementation.

### The Faculty Transition Crisis

Who will teach these new skills when most professors don't have AI fluency themselves?

This is perhaps the most critical barrier to transformation. CS faculty built careers on traditional methods—algorithms on whiteboards, manual coding, formal proofs. Many are experiencing their own "curse of expertise." They know they should embrace AI tools, but decades of muscle memory make it hard.

**This suggests faculty development at scale might be necessary**: sabbaticals focused on AI tool mastery rather than just research, pair teaching arrangements where AI-fluent industry practitioners co-teach with traditional faculty, hiring AI-native faculty (recent graduates or industry veterans) even if they lack traditional publications, and incentive structures that reward teaching innovation alongside research output.

Some faculty will resist. Some will thrive. Departments need to be honest about this and create transition paths that respect expertise while demanding evolution.

### Institutional Constraints: The Accreditation Problem

How do we implement radical changes within existing accreditation requirements?

CS departments don't operate in a vacuum. They face ABET accreditation requiring specific learning outcomes, credit hours, and assessment methods; university policies on grading, degree requirements, and faculty workload; legal constraints around accessibility and student privacy; and alumni and donor expectations shaped by traditional program models.

Several pragmatic paths forward exist. Start with pilot programs—one section, one course—to prove the model works before scaling. Map new methods to existing outcomes, demonstrating that PR-based assessment does measure algorithm understanding, just differently than exams. Partner with accreditors like ABET, who are aware of industry changes and can become allies in evolution rather than obstacles. Use research to build the case by collecting data on student outcomes, employer satisfaction, and long-term career success.

Change won't happen overnight. But it can happen systematically.

### Assessment Standardization: The Grading Problem

How do we grade PR quality fairly when projects vary wildly in difficulty?

You can't grade a PR to Linux kernel the same as a PR to a beginner-friendly project. Standardization seems impossible.

Rubrics can focus on process rather than outcome, grading the quality of problem identification, proposal clarity, and response to feedback regardless of project complexity. Harder projects can be weighted differently, similar to difficulty multipliers in diving competitions. Portfolio assessment can evaluate growth across multiple PRs over a semester rather than assigning individual grades to each contribution. Peer review can be incorporated, with students reviewing each other's PRs to develop critical evaluation skills.

Yes, this is messier than exam scores. But exam scores measure the wrong things.

### The Transition Period: Managing the Shift

How do we get from here to there without destroying value?

You can't flip CS education overnight. Current students enrolled expecting traditional instruction. Faculty need retraining time. Infrastructure takes years to build.

One possible approach: start with pilot programs and faculty development in early years, gradually expand successful models while being transparent with students about what they're getting. The timeline and specifics would depend on each institution's context and resources. What's critical is that departments don't sell traditional degrees as AI-ready if they're not.

## The New Role of CS Faculty

Think about senior software architects at major tech companies. They don't write much code anymore. But they're invaluable because they validate architectural decisions that junior engineers propose, catch edge cases that less experienced developers miss, understand system trade-offs that no documentation fully captures, and guide team judgment on what's worth building versus what constitutes technical debt.

This is the model for CS faculty in the AI age.

Not gatekeepers of knowledge that AI can access more efficiently. Not trainers of skills that AI can perform more consistently. But mentors and architects of student development—people who guide students to find problems worth solving, validate whether proposed solutions are sound, teach professional judgment that goes beyond code, model agency and purposive action, and create environments where students can safely develop their capacity to shape their fields.

The professor-student relationship isn't dead. But it's transformed. Students now have silicon partners (AI) that never sleep, never forget, and might know more about any specific algorithm. **What students need from professors isn't information transfer—it's wisdom, judgment, and mentorship in developing agency**.

The question is whether CS faculty are humble enough to learn this new role—and brave enough to admit how much of traditional teaching might need to change.

## What If This Analysis Is Wrong?

Before concluding, I should acknowledge genuine uncertainties in this analysis:

**The 10x productivity claim needs validation.** Yegge's observations are compelling, but they're not peer-reviewed longitudinal studies. The productivity gap might be narrower, context-dependent, or temporary as AI tools mature.

**Infrastructure constraints matter.** My analysis assumes reliable Internet access and sufficient compute to run AI models. In regions with limited connectivity, unstable networks, or insufficient hardware to run even lightweight models, traditional knowledge and offline problem-solving skills remain essential. This isn't just about developing countries—rural areas, fieldwork environments, and secure facilities without Internet access all need professionals who can work without AI assistance.

**Faculty transition is harder than I'm crediting.** Retraining an entire discipline's professorate at scale while maintaining research productivity and institutional stability might take longer than a decade—or face insurmountable resistance.

I don't have definitive answers to these uncertainties. That's why I'm framing this as questions for discussion, not conclusions set in stone. I hope this post sparks conversation among CS educators, students, and industry practitioners about how we navigate this transition together.

## Conclusion

The IT industry is evolving rapidly. The question isn't whether CS education will be transformed—it's whether CS departments will help shape that transformation thoughtfully and inclusively.

**The departments that thrive will be those that recognize: we're not in the business of teaching programming. We're in the business of cultivating technologists with agency—people who can identify problems worth solving, envision solutions, and rally AI tools to build them**.

That's a mission worth preserving. But it requires transformation, not preservation of the status quo.
