export interface Project {
  title: string
  description: string
  href?: string
  figmaUrl?: string
  imgSrc?: string
  highlight?: boolean
}

const projectsData: Project[] = [
  {
    title: 'Portfolio website',
    description:
      'My freelance web portfolio. Explore my work to see examples of clean design, seamless user experiences, and optimized performance.',
    imgSrc: '/static/images/projects/website.png',
    href: 'https://shatlykabdullayev.com/?ref=blog',
    highlight: true,
  },
  {
    title: 'Edil Ozi',
    description: `Component Library for Developers. Open Source components you can copy and paste to your apps.`,
    imgSrc: '/static/images/projects/edil-ozi.png',
    href: 'https://github.com/Edil-ozi/edil-ozi',
  },
  {
    title: 'Fullstack Food Delivery Application',
    description: `Fullstack food ordering application build with Payload CMS and Next 14.`,
    imgSrc: '/static/images/projects/food-app.png',
    href: 'https://github.com/Shatlyk1011/food-delivery-app',
    figmaUrl: 'https://www.figma.com/design/Br44bFbR9vLmNzTNTmilvp/%D0%A1%D0%A1Client',
  },
  {
    title: 'Agency Website',
    description: `Adaptive and stylish landing page with modern animations and interactive components`,
    imgSrc: '/static/images/projects/agency.png',
    href: 'https://github.com/Edil-ozi/edil-ozi',
    figmaUrl: 'https://www.figma.com/design/65gFXT6dvNfDjkX5osjZbu',
  },
  {
    title: 'Check out my Instagram to see all my work',
    description: `Real World websites and many many more `,
    imgSrc: '/static/images/projects/more-works.png',
    href: 'https://www.instagram.com/devbyshat',
  },
]

export default projectsData
