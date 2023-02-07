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
    name: '村田 彩葉',
    hobby: 'ダンス・ドラム・ディズニー',
    job: '大学の食堂',
    club: 'NEXUS',
    image: '2.jpg',
  },
  {
    name: '山本 新',
    hobby: '筋トレ・バド・ドライブ',
    job: 'PM・開発インターン',
    club: 'プログラミング研究会Tech.Uni・バドミントン同好会',
    image: '3.jpg',
  },
  {
    name: '髙坂　桃子',
    hobby: '音楽鑑賞・漫画鑑賞',
    job: 'カフェ',
    club: '軽音楽部(ジャズ)←部員募集中',
    image: '4.jpg',
  },
  {
    name: '曽谷　勇斗',
    hobby: 'マウンテンバイク・油絵',
    job: 'バー',
    club: 'ポーカー',
    image: '5.jpg',
  },
  {
    name: 'Mr.K',
    hobby: 'TikTokでお気に入りの女性を見ること',
    job: '探偵助手',
    club: '同志社学生放送局',
    image: '6.jpg',
  },
  {
    name: '中村　舞子',
    hobby: '🎸ギター🎸',
    job: 'タピオカ店員',
    club: 'NEXUS・FSS(軽音サークル)',
    image: '7.jpg',
  },
  {
    name: 'えかー',
    hobby: '勧誘',
    job: 'テレビ局の番組編集スタッフ',
    club: '同志社学生放送局',
    image: '8.jpg',
  },
  {
    name: '福宮　柚葉',
    hobby: '寝ること！',
    job: 'カフェ・塾講師',
    club: 'なしっ！',
    image: '9.jpg',
  },
  {
    name: '永井　まおこ',
    hobby: '美味しいパン探し',
    job: '歯科医院',
    club: 'SDA室サポートスタッフ',
    image: '10.jpg',
  },
  {
    name: '寺本　吾大',
    hobby: '服・アニメ鑑賞',
    job: 'UNIQLO',
    club: 'E.S.S',
    image: '11.jpg',
  },
  {
    name: '古木　響子',
    hobby: '香水探すの',
    job: 'ジムの受付',
    club: 'なし',
    image: '12.jpg',
  },
  {
    name: '新納　大基',
    hobby: '⚾・🎮・🏍',
    job: 'Bar・Hotel',
    club: '同志社大学体育会陸上競技部',
    image: '13.jpg',
  },
  {
    name: 'いけだ　よしと',
    hobby: 'サウナ',
    job: '居酒屋',
    club: 'なし',
    image: '14.jpg',
  },
  {
    name: '杉井　秀斗',
    hobby: '人を助けること',
    job: '焼🍖「石屋」・ホテルのフロント',
    club: 'お酒大好きクラブ',
    image: '15.jpg',
  },
  {
    name: '中村　有一朗',
    hobby: '野球・進撃の巨人',
    job: 'ほっともっと',
    club: 'パイシーズ(野球)',
    image: '16.jpg',
  },
  {
    name: '松原　颯也',
    hobby: '🏍・🍳',
    job: '銀のさら・焼🍖「弘」',
    club: '三つ葉キッカーズ',
    image: '17.jpg',
  },
  {
    name: '長田　了哉',
    hobby: 'ガジェット探し・美味しいご飯を食べる',
    job: 'ゲームデパッカー',
    club: 'うるまライオンズ',
    image: '18.jpg',
  },
  {
    name: 'れい',
    hobby: 'SEVENTEEN',
    job: '巫女',
    club: 'なし',
    image: '19.jpg',
  },
  {
    name: '岡崎　友香',
    hobby: 'アニメ・ゲーム・舞台鑑賞・散歩・可愛い服を着ること',
    job: 'カフェ・イベスタ',
    club: '同志社生協学生委員会(GI)',
    image: '20.jpg',
  },
  {
    name: '植村　裕斗',
    hobby: '洋楽を聴くこと',
    job: 'マクド',
    club: 'なし',
    image: '21.jpg',
  },
  {
    name: '🌞太陽🌞',
    hobby: 'サッカー観戦・服',
    job: 'エンジニア',
    club: 'Genius',
    image: '22.jpg',
  },
  {
    name: 'もり　だいき',
    hobby: '旅行',
    job: '居酒屋',
    club: 'P.S.(音楽サークル)',
    image: '23.jpg',
  },
  {
    name: 'ソヨン',
    hobby: '',
    job: '',
    club: '',
    image: '24.jpg',
  },
]

export const AboutUs: FC = () => {
  return (
    <div className='w-full'>
      <PageTitle title='ABOUT US' withSeminar />
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
      <Box className='bg-gray-100 rounded-md p-4 inline-block'>
        <Text size='lg' weight='bold'>
          宮崎ゼミを選んだ理由
        </Text>
        <List listStyleType='initial' withPadding size='md' className='p-2'>
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
