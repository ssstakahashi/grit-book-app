import GritPage from './pages/GritPage';

export type TitleType = {
    titleNumber: number;
    op01: number;
    op02: number;
    op03: number;
    op04: number;
    op05: number;
    title: string;
};

export const titles: TitleType[] = [
    {
        titleNumber: 1,
        op01: 1,
        op02: 2,
        op03: 3,
        op04: 4,
        op05: 5,
        title: '私は挫折をしてもめげない。 簡単にはあきらめない。',
    },
    {
        titleNumber: 2,
        op01: 1,
        op02: 2,
        op03: 3,
        op04: 4,
        op05: 5,
        title: '私は努力家だ。',
    },
    {
        titleNumber: 3,
        op01: 1,
        op02: 2,
        op03: 3,
        op04: 4,
        op05: 5,
        title: 'いちど始めたことは、必ずやり遂げる。',
    },
    {
        titleNumber: 4,
        op01: 1,
        op02: 2,
        op03: 3,
        op04: 4,
        op05: 5,
        title: '私は動勉だ。絶対にあきらめない。',
    },
    {
        titleNumber: 5,
        op01: 1,
        op02: 2,
        op03: 3,
        op04: 4,
        op05: 5,
        title: '重要な課題を克服するために、挫折を乗り越えた経験験がある。',
    },
    {
        titleNumber: 6,
        op01: 5,
        op02: 4,
        op03: 3,
        op04: 2,
        op05: 1,
        title: '新しいアイデアやプロジェクトが出てくると、ついそちらに気を取られてしまう。',
    },
    {
        titleNumber: 7,
        op01: 5,
        op02: 4,
        op03: 3,
        op04: 2,
        op05: 1,
        title: '目標を設定しても、すぐべつの目標に乗り換えることが多い。',
    },
    {
        titleNumber: 8,
        op01: 5,
        op02: 4,
        op03: 3,
        op04: 2,
        op05: 1,
        title: '達成まで何力月もかかることに、ずっと集中して取り組むことがなかなかできない。',
    },
    {
        titleNumber: 9,
        op01: 5,
        op02: 4,
        op03: 3,
        op04: 2,
        op05: 1,
        title: '興味の対象が毎年のように変わる。',
    },
    {
        titleNumber: 10,
        op01: 5,
        op02: 4,
        op03: 3,
        op04: 2,
        op05: 1,
        title: 'アイデアやプロジェクトに夢中になっても、すぐに興味を失ってしまったことがある。',
    },
];

const App = () => {
    return <GritPage />;
};
export default App;
