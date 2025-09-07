export interface Memory {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  imageUrl?: string;
  type: 'memory' | 'dream' | 'special';
  x: number;
  y: number;
  size: number;
  glowColor: string;
}

export const memories: Memory[] = [
  {
    id: 'memory-1',
    title: 'Our First Date',
    description: 'The moment I knew you were special. Your laugh, your smile, the way you made me feel like I was the only person in the world.',
    date: 'March 15, 2023',
    location: 'That little café on Main Street',
    imageUrl: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg',
    type: 'memory',
    x: 15,
    y: 20,
    size: 28,
    glowColor: '#ff69b4'
  },
  {
    id: 'memory-2',
    title: 'First "I Love You"',
    description: 'Under the starlit sky, with your hand in mine, when those three words changed everything between us.',
    date: 'May 22, 2023',
    location: 'The park where we used to walk',
    imageUrl: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
    type: 'memory',
    x: 75,
    y: 25,
    size: 32,
    glowColor: '#ff1493'
  },
  {
    id: 'memory-3',
    title: 'Weekend Getaway',
    description: 'Just you and me, away from the world. Every sunset felt like a promise of forever.',
    date: 'August 10, 2023',
    location: 'That cozy cabin by the lake',
    imageUrl: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
    type: 'memory',
    x: 30,
    y: 60,
    size: 26,
    glowColor: '#ff69b4'
  },
  {
    id: 'memory-4',
    title: 'Dancing in the Rain',
    description: 'When the storm caught us, but we turned it into our own magical moment. Pure joy with you.',
    date: 'September 3, 2023',
    location: 'Downtown, caught in the rain',
    imageUrl: 'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg',
    type: 'memory',
    x: 85,
    y: 70,
    size: 30,
    glowColor: '#ff1493'
  },
  {
    id: 'memory-5',
    title: 'Your Birthday Surprise',
    description: 'Seeing your face light up when you realized what I had planned. Your happiness is my happiness.',
    date: 'October 18, 2023',
    location: 'Our favorite restaurant',
    imageUrl: 'https://images.pexels.com/photos/1043458/pexels-photo-1043458.jpeg',
    type: 'memory',
    x: 50,
    y: 40,
    size: 28,
    glowColor: '#ff69b4'
  }
];

export const dreams: Memory[] = [
  {
    id: 'dream-1',
    title: 'Paris Together',
    description: 'Walking hand in hand down the Champs-Élysées, sharing croissants and dreams under the Eiffel Tower.',
    date: 'Summer 2024',
    location: 'Paris, France',
    imageUrl: 'https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg',
    type: 'dream',
    x: 20,
    y: 80,
    size: 24,
    glowColor: '#9966ff'
  },
  {
    id: 'dream-2',
    title: 'Our First Home',
    description: 'A cozy place where we can build our life together, with a garden where we can watch sunrises.',
    date: '2025',
    location: 'Wherever our hearts lead us',
    imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    type: 'dream',
    x: 70,
    y: 85,
    size: 26,
    glowColor: '#6666ff'
  },
  {
    id: 'dream-3',
    title: 'Growing Old Together',
    description: 'Sitting on our porch at 80, still holding hands, still laughing at each other\'s jokes.',
    date: 'Forever',
    location: 'Wherever we are together',
    imageUrl: 'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg',
    type: 'dream',
    x: 60,
    y: 15,
    size: 30,
    glowColor: '#9966ff'
  }
];

export const specialStar: Memory = {
  id: 'special-anniversary',
  title: '💖 Our Anniversary 💖',
  description: 'Every day with you feels like a celebration, but today marks another year of our beautiful journey together. Thank you for being my everything.',
  date: 'March 15, 2024',
  location: 'In my heart, always',
  imageUrl: 'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg',
  type: 'special',
  x: 50,
  y: 50,
  size: 40,
  glowColor: '#ffd700'
};