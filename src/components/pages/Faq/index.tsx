import { PageTitle } from '@/components/common/PageTitle'
import { QuestionIcon } from '@/components/icon/QuestionIcon'
import { Box, Center, Flex, Space, Text } from '@mantine/core'
import { FC } from 'react'

const faqLists = [
  {
    question: '1.GPAはどのくらい必要ですか？',
    answer:
      'GPAについては人それぞれです。4.0に近い人から0.5付近の人までいます。ゼミ選考においてはあまりGPAは関係ないと言えます。',
  },
  {
    question: '2.ゼミは忙しいですか？',
    answer:
      '他のゼミと比べると忙しいです。ゼミの時間の他にサブゼミというゼミに向けた準備時間が必要になります。また、最終ゼミ前（一月中旬～二月中旬）はとくに忙しいです。',
  },
  {
    question: '3.未経験でもついていけますか？',
    answer: 'はい。ほとんどの人が未経験の状態でスタートなので安心してください。',
  },
  {
    question: '4.ゼミ生のほとんどがIT系の企業に就職しますか？',
    answer:
      '3割はIT系ですが他はさまざまです。ただ、IT企業ではなくてもIT人材として就職する割合はかなり高いです。ITがわかる文系の人材が社会では求められるため、需要は高いです。',
  },
  {
    question: '5.ゼミ生同士、また、授業はどんな雰囲気？',
    answer:
      'それぞれ個性が違うため互いを補い合えます。多様性のあるメンバーでそれぞれのカラーがあり、たくさんの意見が飛び交う授業です。',
  },
  {
    question: '6.部活と両立できますか？',
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

      <div className='flex flex-wrap'>
        <Center className='invisible md:visible absolute left-1/2'>
          <div className='h-[68vh] border border-gray-800' />
        </Center>
        {faqLists.map((faq, index) => (
          <Box key={index} className='w-full md:w-1/2 p-2'>
            <div className='bg-white py-2 h-48'>
              <Text size='md' className='font-bold mb-2'>
                {faq.question}
              </Text>
              <Text className='text-gray-600'>{faq.answer}</Text>
            </div>
          </Box>
        ))}
      </div>
    </div>
  )
}
