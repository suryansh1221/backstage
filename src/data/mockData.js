export const mockPosts = [
  {
    id: 1,
    type: 'your-submission',
    author: {
      name: 'Ava Johnson',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop',
      timestamp: '1s'
    },
    content: 'Today challenge workout completed - feeling stronger already',
    media: {
      type: 'video',
      // Uses local mockup thumbnail that mirrors the design
      thumbnail: '/mockup-dashboard.png',
      url: '#'
    },
    reactions: {
      pray: { emoji: '🙏', count: 0 },
      love: { emoji: '😍', count: 18 }
    },
    comments: 10
  },
  {
    id: 2,
    type: 'pinned',
    isPinned: true,
    author: {
      name: 'Noah Kim',
      avatar: 'https://images.unsplash.com/photo-1520975958225-1d61f33a2f4a?w=150&h=150&fit=crop',
      timestamp: '3 hrs ago'
    },
    content: 'This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger - one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.',
    instructions: [
      { step: 1, text: 'Minimum 20 minutes of sit-up' },
      { step: 2, text: 'Mention Intensity' },
      { step: 3, text: 'Upload Media (Optional)' }
    ],
    reactions: {
      pray: { emoji: '🙏', count: 0 },
      love: { emoji: '😍', count: 18 }
    },
    comments: 10
  },
  {
    id: 3,
    type: 'community',
    author: {
      name: 'Mia Patel',
      avatar: null,
      initials: 'M',
      timestamp: '1 hrs ago'
    },
    content: 'Completed today challenge workout, one step closer to my goal.',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop'
    },
    reactions: {
      pray: { emoji: '🙏', count: 0 },
      love: { emoji: '😍', count: 18 }
    },
    comments: 10
  },
  {
    id: 4,
    type: 'community',
    author: {
      name: 'Lucas Garcia',
      avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=150&h=150&fit=crop',
      timestamp: '2 day ago'
    },
    content: 'Today challenge workout completed - feeling stronger already',
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517964603305-11c0f6f66012?w=800&h=600&fit=crop'
    },
    reactions: {
      pray: { emoji: '🙏', count: 0 },
      love: { emoji: '😍', count: 18 }
    },
    comments: 10
  },
  {
    id: 5,
    type: 'community',
    author: {
      name: 'Zoe Chen',
      avatar: null,
      initials: 'Z',
      timestamp: '1d'
    },
    content: 'Taking part in the workout challenge and staying consistent.',
    badge: {
      text: 'Silver Pass',
      label: 'Posted in'
    },
    media: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop'
    },
    reactions: {
      pray: { emoji: '🙏', count: 0 },
      love: { emoji: '😍', count: 18 }
    },
    comments: 10
  }
];

export const participantStats = {
  count: '85+',
  message: 'participants already completed'
};
