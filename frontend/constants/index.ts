import { Interview } from "@/types";

// Lista de tópicos possíveis para conversas com a AI
export const mappings = [
  "Música",
  "Filmes e Séries",
  "Esportes",
  "Cultura",
  "Viagens",
  "Comida e Gastronomia",
  "Tecnologia",
  "Negócios",
  "História",
  "Ciência",
  "Moda",
  "Arte",
  "Amizades e Relacionamentos",
  "Saúde e Bem-estar",
  "Animais",
  "Educação",
  "Jogos",
  "Meio Ambiente",
  "Futuro e Inovação",
  "Hobbies"
];


import cover1 from "@/public/cover1.png";
import cover2 from "@/public/cover2.png";
import cover3 from "@/public/cover3.png";
import cover4 from "@/public/cover4.png";
import cover5 from "@/public/cover5.png";
import cover6 from "@/public/cover6.png";
import cover7 from "@/public/cover7.png";
import cover8 from "@/public/cover8.png";
import cover9 from "@/public/cover9.png";

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    image: cover1,
    role: "English Conversation Practice",
    type: "conversation",
    techstack: ["Travel", "Business", "Sports", "Technology", "Food", "Friendship"],
    icon: "🗽", // EUA
    level: "Junior",
    questions: [
      "Hi! What's your name?",
      "Where are you from?",
      "What do you like to do in your free time?",
      "Have you ever traveled abroad? Where to?",
      "What's your favorite type of food?"
    ],
    finalized: false,
    createAt: "2025-08-11T12:00:00Z"
  },
  {
    id: "2",
    userId: "user1",
    image: cover2,
    role: "Práctica de conversación en Español",
    type: "conversation",
    techstack: ["Viajes", "Negocios", "Deportes", "Tecnología", "Comida", "Amistades"],
    icon: "💃", // Espanha
    level: "Junior",
    questions: [
      "¡Hola! ¿Cómo te llamas?",
      "¿De dónde eres?",
      "¿Qué te gusta hacer en tu tiempo libre?",
      "¿Has viajado alguna vez a otro país? ¿A dónde?",
      "¿Cuál es tu comida favorita?"
    ],
    finalized: false,
    createAt: "2025-08-11T12:10:00Z"
  },
  {
    id: "3",
    userId: "user1",
    image: cover3,
    role: "Pratica di conversazione in Italiano",
    type: "conversation",
    techstack: ["Viaggi", "Affari", "Sport", "Tecnologia", "Cibo", "Amicizia"],
    icon: "🍕", // Itália
    level: "Junior",
    questions: [
      "Ciao! Come ti chiami?",
      "Di dove sei?",
      "Cosa ti piace fare nel tempo libero?",
      "Hai mai viaggiato all'estero? Dove?",
      "Qual è il tuo cibo preferito?"
    ],
    finalized: false,
    createAt: "2025-08-11T12:20:00Z"
  },
  {
    id: "4",
    userId: "user1",
    image: cover4,
    role: "Pratique de conversation en Français",
    type: "conversation",
    techstack: ["Voyage", "Affaires", "Sports", "Technologie", "Cuisine", "Amitié"],
    icon: "🗼", // França
    level: "Junior",
    questions: [
      "Bonjour! Comment tu t'appelles?",
      "D'où viens-tu?",
      "Qu'est-ce que tu aimes faire pendant ton temps libre?",
      "As-tu déjà voyagé à l'étranger? Où?",
      "Quel est ton plat préféré?"
    ],
    finalized: false,
    createAt: "2025-08-11T12:30:00Z"
  },
  {
    id: "5",
    userId: "user1",
    image: cover5,
    role: "Nihongo no kaiwa renshū (Japanese conversation practice)",
    type: "conversation",
    techstack: ["Ryokō", "Bijinesu", "Supōtsu", "Gijutsu", "Tabemono", "Yūjō"],
    icon: "🏯", // Japão
    level: "Junior",
    questions: [
      "Konnichiwa! Onamae wa nan desu ka?",
      "Doko kara kimashita ka?",
      "Hima na toki ni nani o shimasu ka?",
      "Kaisai ryokō o shita koto ga arimasu ka? Doko ni ikimashita ka?",
      "Suki na tabemono wa nan desu ka?"
    ],
    finalized: false,
    createAt: "2025-08-11T12:40:00Z"
  },
  {
    id: "6",
    userId: "user1",
    image: cover6,
    role: "Deutsch Gesprächspraxis",
    type: "conversation",
    techstack: ["Reisen", "Geschäft", "Sport", "Technologie", "Essen", "Freundschaft"],
    icon: "🍺", // Alemanha
    level: "Junior",
    questions: [
      "Hallo! Wie heißt du?",
      "Woher kommst du?",
      "Was machst du gern in deiner Freizeit?",
      "Bist du schon mal ins Ausland gereist? Wohin?",
      "Was ist dein Lieblingsessen?"
    ],
    finalized: false,
    createAt: "2025-08-11T12:50:00Z"
  },
  {
    id: "7",
    userId: "user1",
    image: cover7,
    role: "Практика разговорного русского (Russian conversation practice)",
    type: "conversation",
    techstack: ["Путешествия", "Бизнес", "Спорт", "Технологии", "Еда", "Дружба"],
    icon: "🏰", // Rússia
    level: "Junior",
    questions: [
      "Привет! Как тебя зовут?",
      "Откуда ты?",
      "Что ты любишь делать в свободное время?",
      "Ты когда-нибудь путешествовал за границу? Куда?",
      "Какое твое любимое блюдо?"
    ],
    finalized: false,
    createAt: "2025-08-11T13:00:00Z"
  },
  {
    id: "8",
    userId: "user1",
    image: cover8,
    role: "普通话会话练习 (Mandarin Chinese conversation practice)",
    type: "conversation",
    techstack: ["旅行", "商业", "运动", "科技", "食物", "友谊"],
    icon: "🐉", // China
    level: "Junior",
    questions: [
      "你好！你叫什么名字？",
      "你来自哪里？",
      "你在空闲时间喜欢做什么？",
      "你去过国外旅行吗？去了哪里？",
      "你最喜欢的食物是什么？"
    ],
    finalized: false,
    createAt: "2025-08-11T13:10:00Z"
  },
  {
    id: "9",
    userId: "user1",
    image: cover9,
    role: "Norsk samtaleøvelse (Norwegian conversation practice)",
    type: "conversation",
    techstack: ["Reise", "Forretning", "Sport", "Teknologi", "Mat", "Vennskap"],
    icon: "🏔", // Noruega
    level: "Junior",
    questions: [
      "Hei! Hva heter du?",
      "Hvor kommer du fra?",
      "Hva liker du å gjøre på fritiden?",
      "Har du noen gang reist til utlandet? Hvor?",
      "Hva er din favorittmat?"
    ],
    finalized: false,
    createAt: "2025-08-11T13:20:00Z"
  }
];
