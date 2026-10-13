import Image from 'next/image'

const imageCounts = {
  conversation: 17,
  bType: 28,
} as const

export default function ConversionImageStack({ courseSlug, courseName }: { courseSlug: string; courseName: string }) {
  const isConversation = courseSlug === 'english-conversation'
  const folder = isConversation ? 'english-conversation' : 'b-type'
  const count = isConversation ? imageCounts.conversation : imageCounts.bType
  const label = isConversation ? '영어회화 수업 안내' : `${courseName} 수업 안내`

  return (
    <section className="conversion-image-zone" aria-label={label}>
      <div className="conversion-image-stack">
        {Array.from({ length: count }, (_, index) => {
          const number = index + 1
          return (
            <Image
              key={number}
              src={`/images/${folder}/${number}.png`}
              alt={`${label} ${number}`}
              width={1080}
              height={1300}
              sizes="(max-width: 760px) 100vw, 760px"
              priority={number <= 2}
              loading={number <= 2 ? undefined : 'lazy'}
              className="conversion-source-image"
            />
          )
        })}
      </div>
    </section>
  )
}
