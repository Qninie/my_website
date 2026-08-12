// Replace each image value with a URL based on import.meta.env.BASE_URL when adding local assets.
export const memories = [
  {
    id: 'beginning',
    chapter: '01',
    title: 'Where It All Began',
    detail: 'Curiosity was where it all started',
    description: 'I started my journey without knowing exactly where it would lead. Through university projects, new experiences, and plenty of learning along the way, I gradually discovered my interest in creating digital experiences that bring creativity and technology together. Looking back at where I started reminds me how much I’ve grown — and how much more there is to explore.',
    image: '',
    art: 'beginning',
    gallery: [
      { label: 'Then', caption: 'Where it started', image: './assets/flower1-then.jpg' },
      { label: 'Now', caption: 'Still learning, still growing.', image: './assets/flower1-now.jpg' }
    ],
    tree: { x: 50, y: 29 },
    position: { x: 50, y: 12 }
  },
  {
    id: 'proud-moment',
    chapter: '02',
    title: 'A Proud Moment',
    detail: 'Performance · Dean’s List · A full-circle journey',
    description: 'Since Semester 1, I have taken part as both a dancer and singer in MAJIS and ISSNITE. MAJIS is a celebratory gathering that recognises Dean’s List students, while ISSNITE is our faculty’s farewell celebration for final-semester students. I began by contributing as a performer, then attended my final MAJIS in Semester 5 to celebrate my Semester 4 Dean’s List achievement. Later, I returned to ISSNITE in a senior role—a full-circle moment that showed how much I had grown in confidence, experience and responsibility.',
    image: '',
    art: 'internship',
    gallery: [
      { label: 'The Beginning', caption: 'Taking part as a dancer and singer', image: './assets/flower2-performer.jpg' },
      { label: 'A Milestone', caption: 'My final MAJIS', image: './assets/flower2-deans-list.jpg' },
      { label: 'Full Circle', caption: 'Returning to ISSNITE in a senior role', image: './assets/flower2-senior.jpg' }
    ],
    tree: { x: 65, y: 43 },
    position: { x: 88, y: 48 }
  },
  {
    id: 'beyond-screen',
    chapter: '03',
    title: 'Beyond the Screen',
    detail: 'The people, places and small joys that keep me grounded',
    description: 'Beyond studying, designing and building, I value the small experiences that help me recharge and stay grounded. I unwind at places such as Aquaria KLCC, enjoy music and concerts, and treasure time with my university friends. Taking on different part-time jobs—including working as a food-tasting promoter—has helped me become more independent, adaptable and confident when meeting people. Whether I am spending time close to nature, caring for my lovely hamster Mario, or photographing scenes that catch my eye, these moments reflect the person I am beyond the screen.',
    image: '',
    art: 'hitern',
    gallery: [
      { label: 'A Quiet Reset', caption: 'Taking time to unwind at Aquaria KLCC', image: './assets/flower3-aquaria.jpg' },
      { label: 'Music & Memories', caption: 'Experiencing IVE in concert', image: './assets/flower3-concert.jpg' },
      { label: 'My People', caption: 'Making memories with my university friends', image: './assets/flower3-friends.jpg' },
      { label: 'Learning by Doing', caption: 'Working as a food-tasting promoter', image: './assets/flower3-part-time.jpg' },
      { label: 'Close to Nature', caption: 'Slowing down and enjoying the outdoors', image: './assets/flower3-nature.jpg' },
      { label: 'Little Companion', caption: 'Spending time with my lovely hamster, Mario', image: './assets/flower3-mario.jpg' },
      { label: 'Through My Eyes', caption: 'Capturing scenes that inspire me', image: './assets/flower3-photography.jpg' }
    ],
    tree: { x: 51, y: 58 },
    position: { x: 50, y: 86 }
  },
  {
    id: 'what-drives-me',
    chapter: '04',
    title: 'What Drives Me',
    detail: 'Still learning. Still creating. Still growing.',
    description: 'I’m drawn to the process of turning an idea into something people can actually see, use and enjoy. I love learning through experimentation, improving through feedback, and watching an idea gradually become a real experience.',
    image: '',
    art: 'achievement',
    gallery: [
      { label: 'What Drives Me', caption: 'Turning ideas into experiences', image: './assets/flower4.png' },
      { label: 'Design in Progress', caption: 'Bringing an idea to life in Figma', image: './assets/flower4-design-process.jpeg' }
    ],
    tree: { x: 35, y: 43 },
    position: { x: 12, y: 50 }
  }
];
