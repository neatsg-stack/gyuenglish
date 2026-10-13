import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ConversionImageStack from '@/components/ConversionImageStack'
import { getCourse } from '@/data/courses'
import { expandedLandingPages, isLandingPage } from '@/data/landing-pages'
import { getLandingContent } from '@/data/landing-content'
import { getRegion } from '@/data/regions'
import { parseLandingSlug } from '@/data/search-intents'
import { SITE_URL } from '@/lib/site'

type Props = { params: Promise<{ region: string; course: string }> }

export function generateStaticParams() { return expandedLandingPages().map((page) => ({ region: page.region, course: page.course })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region: regionSlug, course: landingSlug } = await params
  const { courseSlug, intent } = parseLandingSlug(landingSlug)
  const region = getRegion(regionSlug); const course = getCourse(courseSlug)
  const content = getLandingContent(regionSlug, courseSlug, intent)
  if (!region || !course || !isLandingPage(regionSlug, landingSlug) || !content) return {}
  return { title:content.title, description:content.description, alternates:{canonical:`/${region.slug}/${landingSlug}`}, robots:{index:true,follow:true}, openGraph:{title:content.title,description:content.description,url:`${SITE_URL}/${region.slug}/${landingSlug}`,type:'article'} }
}

function JsonLd({ data }: { data: object }) { return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} /> }

export default async function RegionCoursePage({ params }: Props) {
  const { region: regionSlug, course: landingSlug } = await params
  const { courseSlug, intent } = parseLandingSlug(landingSlug)
  const region=getRegion(regionSlug); const course=getCourse(courseSlug)
  if(!region||!course||!isLandingPage(regionSlug,landingSlug)) notFound()
  const content=getLandingContent(regionSlug,courseSlug,intent); if(!content) notFound()
  const intentName=intent==='academy'?'학원':intent==='tutoring'?'과외':''
  const breadcrumbLd={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'홈',item:SITE_URL},{'@type':'ListItem',position:2,name:region.name,item:`${SITE_URL}/${region.slug}`},{'@type':'ListItem',position:3,name:`${course.name}${intentName}`,item:`${SITE_URL}/${region.slug}/${landingSlug}`}]}
  const faqLd={'@context':'https://schema.org','@type':'FAQPage',mainEntity:content.faq.map(item=>({'@type':'Question',name:item.q,acceptedAnswer:{'@type':'Answer',text:item.a}}))}
  return <main>
    <JsonLd data={breadcrumbLd}/><JsonLd data={faqLd}/>
    <ConversionImageStack courseSlug={courseSlug} courseName={course.name}/>
    <article className="seo-zone course-seo-zone seo-tail">
      <nav className="breadcrumb"><Link href="/">홈</Link> › <Link href={`/${region.slug}`}>{region.name}</Link> › {course.name}{intentName}</nav>
      <section className="seo-intro-section"><p className="seo-section-label">{region.name} {course.name}{intentName} 학습 정보</p><h1>{content.h1}</h1><p>{content.description}</p></section>
      {content.sections.map((section,index)=><section key={section.title} className={index%2===1?'soft-section prose-section seo-block':'prose-section seo-reading-section'}><div className="section-heading"><h2>{section.title}</h2></div>{section.paragraphs.map(p=><p key={p}>{p}</p>)}{section.bullets&&<ul className="seo-bullets">{section.bullets.map(b=><li key={b}>{b}</li>)}</ul>}</section>)}
      <section className="link-cloud-section"><div className="section-heading"><h2>함께 확인하면 좋은 영어수업</h2></div><div className="related-links chip-links">{content.related.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div></section>
      <section className="faq-section"><div className="section-heading"><h2>{region.name} {course.name}{intentName} 준비에서 자주 묻는 질문</h2></div>{content.faq.map(item=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
    </article>
  </main>
}
