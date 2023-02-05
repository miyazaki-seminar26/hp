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
    question: '2.どのような行事がありますか？',
    answer: '海外合宿、EVE祭出店、パーティー、運動会、ハロウィン仮装、花見、枝見、遠足など',
  },
  {
    question: '7.ゼミ生のほとんどがIT系の企業に就職しますか？',
    answer:
      '３割はIT系ですが他はさまざまです。ただ、IT企業ではなくてもIT人材として就職する割合はかなり高いです。ITがわかる文系の人材が社会では求められるため、需要は高いです。',
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
