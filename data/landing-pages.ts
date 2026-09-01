export const landingPages = [
  { region: 'suwon', course: 'opic' },
  { region: 'suwon', course: 'toeic-speaking' },
  { region: 'suwon', course: 'gtelp' },
  { region: 'bundang', course: 'ielts' },
  { region: 'bundang', course: 'toefl' },
  { region: 'bundang', course: 'english-writing' },
  { region: 'songdo', course: 'ielts' },
  { region: 'songdo', course: 'toefl' },
  { region: 'songdo', course: 'international-school' },
] as const

export function isLandingPage(region: string, course: string) {
  return landingPages.some((page) => page.region === region && page.course === course)
}
