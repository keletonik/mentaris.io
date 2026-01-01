import { Metadata } from 'next';
import BlogPostTemplate from '@/components/blog-post-template';

export const metadata: Metadata = {
  title: 'What AI Can and Can\'t Do for Small Businesses in 2026 | Mentaris',
  description: 'A practical guide to understanding where AI delivers real value for small businesses and where the hype falls short.',
};

export default function BlogPost() {
  return (
    <BlogPostTemplate
      title="What AI Can and Can't Do for Small Businesses in 2026"
      category="AI Strategy"
      date="1 January 2026"
      readTime="10 min read"
      author="Caspar Tavitian"
    >
      <p className="lead">
        There's a lot of noise around AI right now. Every software vendor is slapping "AI-powered" onto their product pages, LinkedIn is full of people claiming AI will replace entire industries, and somewhere a consultant is charging $50,000 to tell a company they should "leverage generative AI for competitive advantage."
      </p>

      <p>
        Meanwhile, actual business owners are trying to figure out what any of this means for their operations.
      </p>

      <p>
        After spending the past two years implementing AI solutions for small and mid-sized businesses, we've developed a pretty clear picture of what works and what doesn't. This isn't theory — it's based on real implementations, real results, and real failures.
      </p>

      <h2>Where AI Actually Delivers Value</h2>

      <h3>Document-Heavy Work</h3>

      <p>
        If your business deals with lots of documents — contracts, invoices, reports, applications, compliance paperwork — AI can genuinely help. Modern language models are remarkably good at:
      </p>

      <ul>
        <li>Extracting specific information from unstructured documents</li>
        <li>Summarising long reports into key points</li>
        <li>Identifying inconsistencies or missing information</li>
        <li>Converting between formats (turning meeting notes into action items, for example)</li>
        <li>Answering questions about document contents</li>
      </ul>

      <p>
        One of our clients — a compliance consulting firm — was spending roughly 15 hours per week just reading through client submissions to identify missing documentation. An AI system now handles the initial review, flagging specific gaps and even drafting the follow-up emails requesting missing items. The task that took 15 hours now takes about 2 hours of human review.
      </p>

      <p>
        This works because the task is well-defined (check if specific documents exist and contain required information), the stakes for errors are manageable (a human still reviews the output), and the volume is high enough to justify the setup cost.
      </p>

      <h3>Customer Communication at Scale</h3>

      <p>
        Answering the same questions repeatedly is exhausting and expensive. AI handles this well when:
      </p>

      <ul>
        <li>The questions are relatively predictable</li>
        <li>The answers exist somewhere in your documentation</li>
        <li>Customers don't require highly personalised responses</li>
        <li>You have a clear escalation path for complex issues</li>
      </ul>

      <p>
        A trades business we worked with implemented an AI assistant that handles initial customer inquiries — checking availability, providing quotes for standard services, answering questions about processes. It doesn't try to handle complaints or complex negotiations. When something falls outside its scope, it hands off to a human with full context.
      </p>

      <p>
        The result: about 60% of inquiries are now handled without human intervention, and customer response time dropped from hours to seconds for routine questions.
      </p>

      <h3>Data Analysis and Reporting</h3>

      <p>
        If you're sitting on data but lack the resources to analyse it properly, AI can help bridge the gap. This doesn't mean AI replaces analysts — it means AI can:
      </p>

      <ul>
        <li>Generate regular reports automatically</li>
        <li>Spot patterns and anomalies in data sets</li>
        <li>Answer ad-hoc questions about your data without requiring SQL knowledge</li>
        <li>Translate complex data into plain-language summaries</li>
      </ul>

      <p>
        A retail client had years of sales data they'd never properly analysed because they didn't have a dedicated analyst. Now they can ask questions like "which products had the biggest margin improvement last quarter?" and get answers in seconds, with the AI explaining its reasoning.
      </p>

      <h3>Content Drafting (With Human Editing)</h3>

      <p>
        AI is genuinely useful for first drafts. Proposals, reports, email templates, documentation — anything where you're starting from a blank page. The key word is "draft." AI output needs editing. Always. But starting from a 70%-complete draft is much faster than starting from nothing.
      </p>

      <p>
        Where this works particularly well:
      </p>

      <ul>
        <li>Standardised documents that follow a template (proposals, reports, summaries)</li>
        <li>Internal documentation (processes, guides, training materials)</li>
        <li>Content that needs to be adapted for different audiences</li>
        <li>Translation and localisation</li>
      </ul>

      <h2>Where AI Falls Short</h2>

      <h3>Anything Requiring Genuine Expertise</h3>

      <p>
        AI can sound very confident while being completely wrong. This is fine for low-stakes tasks where a human reviews the output. It's dangerous for anything requiring specialised knowledge that the reviewer doesn't have.
      </p>

      <p>
        If you're using AI to draft a legal contract, someone with legal expertise needs to review it. If AI is providing financial advice, someone qualified needs to verify it. The AI doesn't know what it doesn't know, and it won't tell you when it's making things up.
      </p>

      <p>
        We've seen businesses try to use AI as a replacement for professional advice. It doesn't work. AI is a tool for professionals to work faster — not a replacement for professional judgment.
      </p>

      <h3>Tasks Requiring Judgment Calls</h3>

      <p>
        AI can process information and identify patterns, but it can't make judgment calls that require understanding context, relationships, and unwritten rules.
      </p>

      <p>
        Should you fire that underperforming employee? Is this client relationship worth saving? Should you take that risky project? These decisions require understanding nuances that AI simply can't access.
      </p>

      <h3>Creative Work (With Caveats)</h3>

      <p>
        Despite the hype, AI isn't creative. It can combine and remix existing patterns — which looks like creativity on the surface — but it can't generate genuinely novel ideas. It can write passable copy, but not copy that makes people stop scrolling. It can generate images, but not images that communicate something new.
      </p>

      <p>
        For routine creative tasks (social media filler, basic product descriptions), AI is fine. For work that needs to stand out or communicate something specific, you still need humans.
      </p>

      <h3>Anything Requiring Your Business's Specific Knowledge</h3>

      <p>
        AI models are trained on general knowledge. They don't know your specific products, your customer relationships, your internal processes, or your company culture. Getting AI to work effectively usually requires significant customisation — training it on your data, building integrations with your systems, and ongoing refinement.
      </p>

      <p>
        Off-the-shelf AI tools often disappoint because they can't access the context that makes responses actually useful. "Use ChatGPT to answer customer questions" sounds great until you realise it doesn't know your product specifications, your return policy, or your pricing.
      </p>

      <h2>The Real Question</h2>

      <p>
        Instead of asking "should we use AI?" the better question is: "What specific task is consuming too much time, and can AI help?"
      </p>

      <p>
        Start with the problem, not the technology. Identify processes that are:
      </p>

      <ul>
        <li>High-volume (done many times)</li>
        <li>Relatively predictable (similar inputs, similar outputs)</li>
        <li>Currently expensive in terms of time or money</li>
        <li>Tolerant of some errors (or have human review built in)</li>
      </ul>

      <p>
        That's where AI delivers value. Everything else is probably hype — at least for now.
      </p>

      <h2>Next Steps</h2>

      <p>
        If you're trying to figure out where AI might fit in your business, we offer a free 30-minute assessment. No pitch, no pressure — just a conversation about your operations and where AI might actually help.
      </p>
    </BlogPostTemplate>
  );
}
