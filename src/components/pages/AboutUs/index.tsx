import { PageTitle } from '@/components/common/PageTitle'
import { Box, List, Space, Text } from '@mantine/core'
import Image from 'next/image'
import { FC } from 'react'

const MemberLists = [
  {
    name: '徳本 仁',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '1.jpg',
  },
  {
    name: '杉田 彩葉',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '2.jpg',
  },
  {
    name: '山本 新',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '3.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '4.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '5.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '6.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '7.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '8.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '9.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '10.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '11.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '12.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '13.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '14.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '15.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '16.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '17.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '18.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '19.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '20.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '21.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '22.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '23.jpg',
  },
  {
    name: '松本 美咲',
    hobby: '散歩',
    job: 'スーパーのレジ打ち',
    club: 'なし',
    image: '24.jpg',
  },
]

export const AboutUs: FC = () => {
  return (
    <div className='w-full'>
      <PageTitle title='ABOUT US' />
      <Space h={40} />
      <Box className='bg-gray-100 rounded-md px-4 py-2 inline-block'>
        <Text size='lg' weight='bold'>
          Member
        </Text>
        <Text>26期生の宮崎ゼミメンバー24名に以下の4つを質問しました！</Text>
        <List listStyleType='number' withPadding>
          <List.Item>名前</List.Item>
          <List.Item>趣味/好きなもの</List.Item>
          <List.Item>バイト</List.Item>
          <List.Item>サークル・部活・クラブ活動</List.Item>
        </List>
      </Box>
      <Space h={40} />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {MemberLists.map((member, index) => (
          <div key={index} className='w-full flex items-center justify-center flex-col'>
            <Image
              src={`/members/${member.image}`}
              alt={member.name}
              width={100}
              height={100}
              className='object-cover rounded-t-md'
            />
            <List listStyleType='number' size='sm' spacing={-2}>
              <List.Item>
                <Text weight='bold'>{member.name}</Text>
              </List.Item>
              <List.Item>{member.hobby}</List.Item>
              <List.Item>{member.job}</List.Item>
              <List.Item>{member.club}</List.Item>
            </List>
          </div>
        ))}
        <Space h={40} />
      </div>
      <Box className='bg-gray-100 rounded-md px-4 py-2 inline-block'>
        <Text size='lg' weight='bold'>
          宮崎ゼミを選んだ理由
        </Text>
        <List listStyleType='initial' withPadding size='md'>
          <List.Item>経済の勉強をしたくなかったから</List.Item>
          <List.Item>プログラミングをしてみたくなったから</List.Item>
          <List.Item>おもしろそう！</List.Item>
          <List.Item>知っている先輩がいたから</List.Item>
          <List.Item>
            WEBアプリ開発を高校卒業からやっていて、大学のゼミの中で方向性が一致するものが宮崎ゼミだったから
          </List.Item>
          <List.Item>
            ふざけてエントリーシートを書いたら思ったより良い物をでっち上げることが出来てしまい、
            捨てるのが勿体なくてそのまま応募してしまったから（サンクコストバイアス）
          </List.Item>
          <List.Item>変な人、個性強めな人が多そう、楽しそう！（楽しいよン）</List.Item>
          <List.Item>ITは今の時代に必要だと思ったから</List.Item>
          <List.Item>授業形式が独特でおもしろそうだったから</List.Item>
          <List.Item>人をうまいこと使うため </List.Item>
          <List.Item>宮崎先生の演説に感化された</List.Item>
          <List.Item>海外研修行が魅力的だと思ったから </List.Item>
          <List.Item>宮崎先生の性格とゼミの雰囲気が気に入ったから</List.Item>
          <List.Item>ITとかパソコン系の勉強がしたかったから</List.Item>
          <List.Item>新しい知識を得るため</List.Item>
          <List.Item>経済学部であるにも関わらず自分が興味のあるITが学べると思ったから</List.Item>
        </List>
      </Box>
      <Space h={80} />
    </div>
  )
}
