import { PageTitle } from '@/components/common/PageTitle'
import { QuestionIcon } from '@/components/icon/QuestionIcon'
import { Accordion, Anchor, Space, Text, Title } from '@mantine/core'
import { FC } from 'react'

const faqLists = [
  {
    question: 'どんな人がゼミにいるか',
    answer: '肉体派や頭脳派、酒豪からカフェ巡り系女子まで個性豊かなメンバーがそろっています。',
  },
  {
    question: '男女比',
    answer: '5：2ぐらいだと思います。現役生52名のうち20名が女性です。現3回生は男：女＝15：9です',
  },
  {
    question: '縦・横のつながりはあるか',
    answer: 'あります。',
  },
  {
    question: '進路実績',
    answer: '主な就職先と人数は下記の資料(経済学部２年次演習クラス紹介掲載のPowerPoint)をご覧ください。',
    link: 'https://doshishaacjp-my.sharepoint.com/:p:/g/personal/ji-keijm_mail_doshisha_ac_jp/EWNiSYopXStOpjPm_QZtuEcBobQy9EIs9U6B4ajidV5cuQ?e=p93UZV',
  },
  {
    question: 'どれくらい忙しいか',
    answer:
      '他のゼミに比べると忙しいです。ゼミの時間の他にサブゼミというゼミに向けた準備時間が必要になります。また、最終ゼミ前（一月中旬～二月中旬）はとくに忙しいです。',
  },
  {
    question: 'ゼミ内で仲が悪いなどはあるか',
    answer: 'やる気次第。実際に両立している人はいます。',
  },
  {
    question: '7.どのような行事がありますか？',
    answer: '海外合宿、EVE祭出店、パーティー、運動会、ハロウィン仮装、花見、枝見、遠足、などなど、、、',
  },
  {
    question: '8.養うことができるスキルは？',
    answer:
      'エンジニアと会社を繋げるための架け橋になれます。また、プレゼンスキル、グループで活動するスキル、Webサイトを作るスキル、リーダー経験など、さまざまな経験を通してたくさんの力が身につきます。',
  },
  {
    question: '9.倍率はどのくらいですか？',
    answer: '年によって違いますが、過去：最高4倍、最低0.5倍です。',
  },
  {
    question: '10.ゼミは週何回ありますか？',
    answer: 'ゼミ自体は週1回ですが、関連科目という、技術をメインで学ぶ講義も週に1回あります。',
  },
  {
    question: '11.関連科目は絶対に履修しなければいけない？',
    answer: 'ゼミに合格すると自動的に関連科目も登録されます。履修していない人は見たことがないので絶対なのでしょう。',
  },
  {
    question: '12.ゼミの男女比は？',
    answer: '3対1くらい、男の子の方が少し多いけれど、女の子も意欲的に授業に取り組んでいます！',
  },
]

export const FAQ: FC = () => {
  return (
    <div className='w-full'>
      <PageTitle title='FAQ（よくある質問）' withSeminar />
      <QuestionIcon />

      <Space h={40} className='relative' />

      <Title>ゼミの概要</Title>
      <Accordion
        defaultValue='customization'
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {faqLists.map((faq, index) => (
          <Accordion.Item value={faq.question} key={index}>
            <Accordion.Control>
              <Text size='md' className='font-bold'>
                {faq.question}
              </Text>
            </Accordion.Control>

            <Accordion.Panel>
              <Text className='text-gray-600'>{faq.answer}</Text>
              {faq.link && <Anchor size='sm'>{faq.link}</Anchor>}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}
