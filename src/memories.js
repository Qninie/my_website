// Replace each image value with a URL based on import.meta.env.BASE_URL when adding local assets.
export const memories = [
  {
    id: 'beginning',
    chapter: '01',
    title: 'Where It All Began',
    detail: 'From curiosity to creating.',
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
      { label: 'A Milestone', caption: 'My final MAJIS · Semester 4 Dean’s List', image: './assets/flower2-deans-list.jpg' },
      { label: 'Full Circle', caption: 'Returning to ISSNITE in a senior role', image: './assets/flower2-senior.jpg' }
    ],
    tree: { x: 65, y: 43 },
    position: { x: 88, y: 48 }
  },
  {
    id: 'beyond-screen',
    chapter: '03',
    title: 'Beyond the Screen',
    detail: 'The person behind the work',
    description: 'A glimpse into the interests, small joys and experiences that shape who I am when I step away from designing and building.',
    image: '',
    art: 'hitern',
    tree: { x: 51, y: 58 },
    position: { x: 50, y: 86 }
  },
  {
    id: 'what-drives-me',
    chapter: '04',
    title: 'What Drives Me',
    detail: 'Creating, learning and growing',
    description: 'I enjoy turning ideas into thoughtful experiences, learning through each challenge and finding the balance between creativity, design and technology.',
    image: '',
    art: 'achievement',
    tree: { x: 35, y: 43 },
    position: { x: 12, y: 50 }
  }
];
