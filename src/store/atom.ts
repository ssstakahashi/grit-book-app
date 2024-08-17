import { atom } from 'jotai';
import { titles, TitleType } from '../App';

export type ResultType = {
    // titleNumber: number;
    radio0: string;
    radio1: string;
    radio2: string;
    radio3: string;
    radio4: string;
    radio5: string;
    radio6: string;
    radio7: string;
    radio8: string;
    radio9: string;
    score: number;
};

export const initialResult = {
    radio0: "",
    radio1: "",
    radio2: "",
    radio3: "",
    radio4: "",
    radio5: "",
    radio6: "",
    radio7: "",
    radio8: "",
    radio9: "",
    score: 0,
};

export const resultAtom = atom<ResultType>(initialResult);

export const resultSelector = atom(null, (get, set) => {
    const result = get(resultAtom);
    console.log(result);
    let score = 0;
    for (let i = 0; i <= 9; i++) {
        const title = titles[i] as TitleType;
        const radioValue = result[`radio${i}` as keyof ResultType];
        if (radioValue) {
            score += Number(title[radioValue as keyof TitleType]);
        }
    }
    console.log(score);
    score = Math.round(score * 1000) / 1000 / 5;

    set(resultAtom, { ...result, score: score });
});