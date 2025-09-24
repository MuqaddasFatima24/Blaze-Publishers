export type Article = {
  title: string;
  date: string;
  description: string;
  slug: string;
  image: string;
  content: { heading: string | null; text: string }[];
};

export const articles: Article[] = [
  {
    title: "I Will Not Stop Speaking: Finding Strength in Your Own Voice",
    date: "2025-09-24",
    description:
      "Your voice matters. Discover why refusing to stay silent is the first step toward change, empowerment, and creating an impact.",
    slug: "i-will-not-stop-speaking",
    image: "/article2.jpg",
    content: [
      {
        heading: null,
        text: "In a world that often values silence over expression, finding the courage to raise one’s voice can feel both uncomfortable and risky. Many are told to conform, to stay quiet, and to let others make decisions for them. Yet, history and personal experience alike show us that true change never begins with silence. Choosing to speak - even when it feels daunting - is an act of strength and self-empowerment.",
      },
      {
        heading: "The Power of a Voice",
        text: "Every individual has a voice, and with it comes meaning and impact. You do not need to be a celebrity, a politician, or a public figure to make a difference. Often, the most powerful truths come from the quietest person in the room. Speaking up is not merely about being heard - it is a declaration of presence, dignity, and self-worth. It affirms identity and communicates that every perspective matters.",
      },
      {
        heading: "Speaking Against Injustice",
        text: "Silence has always been a shield for injustice. From civil rights struggles to movements for equality and freedom, history proves that progress is only achieved when people refuse to be silent. By speaking out, you do more than amplify your own voice; you inspire others who may feel the same but are too afraid to step forward. Each word becomes an act of defiance against unfairness, and each voice adds weight to collective change.",
      },
      {
        heading: "Overcoming the Fear of Silence",
        text: "The greatest barrier to speaking out is fear - fear of judgment, rejection, criticism, or failure. Many remain quiet thinking that silence protects them, but silence only protects the status quo. The truth is that when you give in to fear and remain silent, you hand over your power. When you choose to speak - even if your voice shakes - you begin to reclaim it. Courage is not the absence of fear but the choice to act in spite of it.",
      },
      {
        heading: "The Ripple Effect of Courage",
        text: "A single voice can create ripples that extend far beyond the moment. When you speak, you inspire others to find their own strength. One act of courage can become a catalyst for many. History’s greatest movements, breakthroughs, and innovations were not born from silence, but from voices that refused to be quiet. The ripple effect of one individual’s courage often shapes communities, nations, and even generations.",
      },
      {
        heading: "A Call to Action",
        text: "“I will not stop speaking” is more than just a phrase - it is a promise to oneself and to the world. It is a commitment to truth, authenticity, and responsibility. Your story, your experiences, and your perspective have value. The world does not need more silence; it needs voices that dare to challenge, to uplift, and to inspire. Speaking out is not about volume - it is about honesty and intention.",
      },
      {
        heading: "Conclusion",
        text: "Your voice is your power. The moment you decide to use it, you step into a life of authenticity, courage, and influence. Every voice has the potential to create change, and today, more than ever, the world needs yours. Refusing to be silent is not just an act of resistance - it is an act of existence. Speak, even if your voice trembles, because silence will never build the future, but courage will.",
      },
    ],
  },
  {
    title: "The Middle-Class Life: The Silent Strength of Everyday People",
    date: "2025-09-17",
    description:
      "Discover the hidden strength and resilience of the middle-class life. A reflection on dreams, sacrifices, and the unshakable backbone of society.",
    slug: "middle-class-life",
    image: "/article1.jpg",
    content: [
      {
        heading: null,
        text: "When conversations about success arise, the spotlight is usually on billionaires, innovators, and celebrities. Yet, in the background lies a quieter, more enduring force - the middle class. Their lives may not be glamorous, but their resilience, sacrifices, and determination form the backbone of every thriving society. To understand the strength of nations, we must first understand the strength of their middle class.",
      },
      {
        heading: "The Daily Balancing Act",
        text: "For middle-class families, life is a careful balancing act. Between mortgages, rent, tuition fees, healthcare expenses, and daily living costs, every paycheck is stretched thin. One unexpected emergency - a medical bill, job loss, or inflation spike - can threaten stability. Despite these pressures, the middle class continues to provide, save, and hope. This balance is not simply about survival; it reflects quiet dignity and perseverance.",
      },
      {
        heading: "The Aspirations: Dreams vs. Reality",
        text: "The middle-class dream is simple yet profound: owning a modest home, educating children, and living with security and dignity. However, rising costs of living, stagnant wages, and widening inequality often turn these dreams into uphill battles. Studies reveal that in many countries, the size of the middle class is shrinking, squeezed by economic pressures. Yet, the pursuit of these aspirations fuels progress, shaping the ambitions of the next generation.",
      },
      {
        heading: "Unsung Heroes Who Keep Society Running",
        text: "Teachers in classrooms, nurses in hospitals, shopkeepers in neighborhoods, office workers in cities, and small business owners in communities - these are the unsung heroes of society. They rarely make headlines, but without them, economies would collapse, and societies would lose their stability. They are the silent force behind every functioning system, the human foundation on which progress is built.",
      },
      {
        heading: "Economic Power: Why the Middle Class Matters",
        text: "Economists agree that a strong middle class is essential for sustainable growth. Middle-income households drive demand for goods and services, fuel small businesses, and anchor industries. They invest in education, support entrepreneurship, and generate stability through consistent consumption. When the middle class thrives, innovation flourishes, economies expand, and nations prosper. Conversely, when it falters, inequality deepens, and social cohesion weakens.",
      },
      {
        heading: "Beyond Numbers: The Emotional Journey",
        text: "Middle-class life is not defined only by budgets and balance sheets; it is also an emotional journey. It carries the pride of owning a first car or home, the joy of celebrating small milestones, and the relief of financial security after years of sacrifice. At the same time, it carries the stress of long work hours, the fear of instability, and the relentless drive to do better for the next generation. These emotions reveal the human strength behind the statistics.",
      },
      {
        heading: "Conclusion",
        text: "The middle class may not dominate headlines, but their impact is everywhere - in schools, hospitals, businesses, and homes. Their sacrifices sustain families, their resilience fuels economies, and their dreams shape the future. To celebrate the middle class is to celebrate the stability, courage, and hope that bind societies together. They are not ordinary people living ordinary lives; they are extraordinary in their silent strength.",
      },
    ],
  },
];
