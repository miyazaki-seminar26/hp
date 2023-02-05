import { ArrowButton } from '@/components/common/ArrowButton'
import { PageTitle } from '@/components/common/PageTitle'
import {
  Anchor,
  Badge,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Group,
  Image,
  MediaQuery,
  Space,
  Table,
  Text,
} from '@mantine/core'
import { FC } from 'react'

const TopMainVisual: FC = () => {
  return (
    <div className='w-full md:flex'>
      <div>
        <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
          <Text
            size='lg'
            className='sm:hidden leading-relaxed border-gray-400 border-b-2 inline-block pl-4 pr-20'
            weight='bold'
          >
            経済✖️ITを活かした
            <br />
            新しい人材へ
          </Text>
        </MediaQuery>

        <MediaQuery largerThan='md' styles={{ display: 'hidden' }}>
          <Text
            size='xl'
            className='hidden sm:inline-block leading-relaxed border-gray-400 border-b-2 pl-4 pr-20'
            weight='bold'
          >
            経済✖️ITを活かした
            <br />
            新しい人材へ
          </Text>
        </MediaQuery>

        <Text lh={2.5} className='pl-4'>
          なぜ文系のわたしたちが IT を学ぶのか。
          <br /> IT を駆使した新しい人材を目指し、
          <br />
          日々活動しています。
        </Text>
      </div>

      <Container mr={{ sm: '42%', md: '44%', xl: '46%' }}>
        <div className='hidden md:inline-block absolute -z-10'>
          <Image src='/top/right-top-visual.svg' alt='right-top-visual' className='w-[36vw]' />
        </div>

        <div className='md:hidden block -mt-12'>
          <Image src='/top/sp-top-visual.svg' alt='sp-top-visual' />
        </div>
      </Container>
    </div>
  )
}

const elements = [
  {
    left: '指導教員',
    right: '宮崎 耕',
  },
  {
    left: '演習(ゼミ)紹介',
    right: <Anchor href='https://www.econ.doshisha.ac.jp/teacher/miyazaki.html'>情報システムの研究</Anchor>,
  },
]

const cardLists = [
  {
    title: 'それって当たり前ですか？',
    href: '',
    description:
      '普段気にしない当たり前を再認識することによって、ITを活用した革新的なことを生み出すためのノウハウを学ぶ。',
    image: '/card/common.jpg',
    status: '取り組み中',
  },
  {
    title: 'HOW TO',
    href: '',
    description:
      '初学者が大半ながらも、どうやってwebサイトを作成するのかを1から考え、それに26期生自身のオリジナリティを付け加える。',
    image: '/card/hp.jpg',
    status: '取り組み中',
  },
]

const MemberLists = [
  {
    name: 'イケメン担当：仁くん',
    image: '1.jpg',
  },
  {
    name: 'ムードメーカー：いろは',
    image: '2.jpg',
  },
]

export const Home: FC = () => {
  const rows = elements.map((element) => {
    return (
      <tr>
        <td>{element.left}</td>
        <td>{element.right}</td>
      </tr>
    )
  })
  return (
    <div className='w-full'>
      <TopMainVisual />
      <Space h={120} />
      <div className='text-center'>
        <Text weight='bold' size='lg'>
          宮崎ゼミとは
        </Text>
        <Text>同志社大学 経済学部が所属する、情報システムの研究をするゼミナールです。</Text>

        <Space h={20} />

        <Center>
          <Table fontSize='md' withColumnBorders className='max-w-md'>
            <tbody>{rows}</tbody>
          </Table>
        </Center>
      </div>

      <Space h={40} />
      <PageTitle title='PROJECT' />
      <Space h={20} />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-sm sm:max-w-none'>
        {cardLists.map((item) => {
          return (
            <Anchor href={item.href} variant='text' className='hover:shadow-sm'>
              <Card radius='md' withBorder>
                <Card.Section>
                  <Image src={item.image} height={200} alt='Norway' />
                </Card.Section>
                <Group position='apart' mt='md' mb='xs'>
                  <Text weight='bold'>{item.title}</Text>
                  <Badge color='blue' variant='light'>
                    {item.status}
                  </Badge>
                </Group>
                <Text size='sm' color='dimmed'>
                  {item.description}
                </Text>
                <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
                  詳しく見る
                </Button>
              </Card>
            </Anchor>
          )
        })}
      </div>

      <Space h={40} />
      <PageTitle title='ABOUT US' />
      <Flex pt={12} gap={20}>
        {MemberLists.map((item) => {
          return (
            <div className=''>
              <Image src={`/members/${item.image}`} alt={item.name} width={80} height={80} />
              <Text className='text-center' size='sm' pt={4}>
                {item.name}
              </Text>
            </div>
          )
        })}
        <Space w={100} />
        <div className='flex items-center justify-center flex-col'>
          <Text>その他のメンバーetc</Text>
          <ArrowButton href='/about-us' />
        </div>
      </Flex>

      <Space h={40} />
      <PageTitle title='FAQ（よくある質問）' />
      <Flex pt={12} gap={20}>
        <Text>ゼミ選びに迷う学生のために、よく来る質問に答えました。</Text>
        <ArrowButton href='/faq' />
      </Flex>

      <Space h={80} />
    </div>
  )
}
