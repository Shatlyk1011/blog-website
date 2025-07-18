interface Project {
  title: string
  description: string
  href?: string
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
]

export default projectsData