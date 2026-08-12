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
    id: 'beyond-classroom',
    chapter: '03',
    title: 'Beyond the Classroom',
    detail: 'Some of the best lessons happened outside of it.',
    description: 'Taking part in activities beyond academics gave me opportunities to connect with different people, work as part of a team, and step outside my comfort zone. Each experience taught me something new and became a meaningful part of my growth throughout my student journey.',
    image: '',
    art: 'hitern',
    gallery: [
      { label: 'Teamwork', caption: 'Learning and contributing together', image: './assets/flower3-classroom-2.jpg' },
      { label: 'Communication', caption: 'Connecting through shared activities', image: './assets/flower3-classroom-3.jpg' },
      { label: 'New Experiences', caption: 'Stepping outside my comfort zone', image: './assets/flower3-classroom-4.jpg' },
      { label: 'Growth', caption: 'Building confidence with others', image: './assets/flower3-classroom-5.jpg' },
      { label: 'Teamwork', caption: 'Growing through every experience', image: './assets/flower3-classroom-7.jpg' },
      { label: 'New Experiences', caption: 'Making memories beyond the classroom', image: './assets/flower3-classroom-8.jpg' }
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
