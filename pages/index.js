import { Inter } from 'next/font/google'
import LibraryBlock from '@/components/LibraryBlock'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

const dataD3 = [
  { date: '2021-01-01', value: 10 },
  { date: '2021-01-02', value: 20 },
  { date: '2021-01-03', value: 30 },
  { date: '2021-01-04', value: 40 },
  { date: '2021-01-05', value: 50 },
  { date: '2021-01-06', value: 60 },
  { date: '2021-01-07', value: 70 }
];


export default function Home() {


  return (
    <main className={`flex flex-col gap-12 bg-[#F1F6F9] ${inter.className}`}>
      <Header/>
      <div className={'flex flex-col gap-12 mx-[32px]'}>
        <LibraryBlock data={dataD3} library='D3.js'/>
        <LibraryBlock data={''} library='Chart.js'/>
      </div>
    </main>
  )
}
