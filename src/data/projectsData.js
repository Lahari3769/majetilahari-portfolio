export const projectsData = {
  "mcq-generator": {
    title: "MCQ Generator – Multi-Modal GenAI System",

    problem: `
Educators and content creators struggle to generate high-quality,
context-aware MCQs from diverse content formats such as PDFs, images,
audio recordings, and videos.
    `,

    solution: `
Designed an end-to-end multi-modal Generative AI system that converts
text, documents, images, audio, and video into structured MCQs with
answers and explanations.
    `,

    whyGenAI: `
Traditional rule-based systems fail to understand context and intent.
LLMs enable semantic understanding, adaptive difficulty, and explanation
generation, making them ideal for educational content generation.
    `,

    architecture: [
      "Input ingestion layer for text, image, audio, and video",
      "OCR & Speech-to-Text preprocessing",
      "Validation & filtering layer for educational relevance",
      "LLM-based MCQ generation pipeline",
      "Post-processing and formatting for UI display"
    ],

    highlights: [
      "Built modular pipelines per input type for maintainability",
      "Implemented guardrails to block non-educational content",
      "Dynamic MCQ count based on input complexity",
      "Error-handling and fallback logic across pipelines"
    ],

    techStack: [
      "Python",
      "Streamlit",
      "Mistral LLM",
      "OCR",
      "Whisper",
      "MoviePy"
    ],

    impact: `
Reduced manual MCQ creation time by over 80% and enabled educators
to reuse existing content across multiple formats.
    `,

    learnings: [
      "Designing multi-modal pipelines",
      "Handling noisy real-world inputs",
      "Prompt structuring for consistent outputs",
      "Balancing creativity vs correctness in LLMs"
    ],

    enhancements: [
      "Difficulty-level tuning",
      "Instructor feedback loop",
      "Question taxonomy classification"
    ],

    whyGreatFirstProject: `
This project demonstrates system thinking, real-world problem solving,
and the ability to build production-style GenAI pipelines rather than
toy demos.
    `
  }
};