import { titles } from '../App';
import { initialResult, resultAtom, resultSelector } from '../store/atom';
import { useAtom } from 'jotai';

const GritPage = () => {
    const [result, setResult] = useAtom(resultAtom);
    const [, setScore] = useAtom(resultSelector);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setScore();
    };
    const onClick_clear = () => {
        const clearedResult = { ...initialResult, score: 0 };
        setResult(clearedResult);
    };
    return (
        <div className="p-8">
            <div
                className="
                font-OpenSans 
                flex 
                flex-col 
                justify-center 
                items-center
            "
            >
                <h2 className="text-2xl font-bold">
                    「やり抜く力」をはかるグリット·スケール
                </h2>
                <p className="text-sm">
                    当てはまる箇所を選択してください。算出された数値（１０点満点）があなたのグリット·スコアとなります。
                </p>
                <div>
                    <ul className="text-sm text-left">
                        <li>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '180px',
                                }}
                            >
                                まったく当てはまらない:
                            </span>{' '}
                            <span>1</span>
                        </li>
                        <li>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '180px',
                                }}
                            >
                                あまり当てはまらない:
                            </span>{' '}
                            <span>2</span>
                        </li>
                        <li>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '180px',
                                }}
                            >
                                いくらか当てはまる:
                            </span>{' '}
                            <span>3</span>
                        </li>
                        <li>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '180px',
                                }}
                            >
                                かなり当てはまる:
                            </span>{' '}
                            4
                        </li>
                        <li>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '180px',
                                }}
                            >
                                非常に当てはまる:
                            </span>{' '}
                            5
                        </li>
                    </ul>
                </div>
            </div>

            <table className="font-OpenSans w-full text-sm border border-gray-300 divide-y divide-gray-300">
                <thead>
                    <tr>
                        <th align="center"></th>
                        <th align="center" className="border-r">
                            項目
                        </th>
                        <th align="center">1</th>
                        <th align="center">2</th>
                        <th align="center">3</th>
                        <th align="center">4</th>
                        <th align="center">5</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-300">
                    {titles.map((x, index) => {
                        return (
                            <tr key={x.titleNumber} style={{ height: '40px' }}>
                                <td
                                    align="center"
                                    style={{
                                        width: '32px',
                                        padding: '0 12px',
                                    }}
                                >
                                    {x.titleNumber}
                                </td>
                                <td className="w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4 border-l border-r px-2 py-1">
                                    {x.title}
                                </td>
                                <td className="check-button" align="center">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className=""
                                            name={`radio${index}`}
                                            value={'op01'}
                                            checked={
                                                // @ts-ignore
                                                result[`radio${index}`] ===
                                                    'op01' || false
                                            }
                                            onChange={() => {
                                                setResult({
                                                    ...result,
                                                    [`radio${index}`]: 'op01',
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setResult({
                                                        ...result,
                                                        [`radio${index}`]:
                                                            'op01',
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                                <td className="check-button" align="center">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className=""
                                            name={`radio${index}`}
                                            value={'op02'}
                                            checked={
                                                // @ts-ignore
                                                result[`radio${index}`] ===
                                                    'op02' || false
                                            }
                                            onChange={() => {
                                                setResult({
                                                    ...result,
                                                    [`radio${index}`]: 'op02',
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setResult({
                                                        ...result,
                                                        [`radio${index}`]:
                                                            'op02',
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                                <td className="check-button" align="center">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className=""
                                            name={`radio${index}`}
                                            value={'op03'}
                                            checked={
                                                // @ts-ignore
                                                result[`radio${index}`] ===
                                                    'op03' || false
                                            }
                                            onChange={() => {
                                                setResult({
                                                    ...result,
                                                    [`radio${index}`]: 'op03',
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setResult({
                                                        ...result,
                                                        [`radio${index}`]:
                                                            'op03',
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                                <td className="check-button" align="center">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className=""
                                            name={`radio${index}`}
                                            value={'op04'}
                                            checked={
                                                // @ts-ignore
                                                result[`radio${index}`] ===
                                                    'op04' || false
                                            }
                                            onChange={() => {
                                                setResult({
                                                    ...result,
                                                    [`radio${index}`]: 'op04',
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setResult({
                                                        ...result,
                                                        [`radio${index}`]:
                                                            'op04',
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                                <td className="check-button" align="center">
                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className=""
                                            name={`radio${index}`}
                                            value={'op05'}
                                            checked={
                                                // @ts-ignore
                                                result[`radio${index}`] ===
                                                    'op05' || false
                                            }
                                            onChange={() => {
                                                setResult({
                                                    ...result,
                                                    [`radio${index}`]: 'op05',
                                                });
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setResult({
                                                        ...result,
                                                        [`radio${index}`]:
                                                            'op05',
                                                    });
                                                }
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="mt-12">
                <div className="buttonArea space-x-4 text-center">
                    <button
                        type="submit"
                        className="bg-red-500 text-white px-4 py-2 rounded-md w-1/4"
                        onClick={onClick_clear}
                    >
                        リセット
                    </button>
                    <input
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md w-1/4"
                        onClick={(e) =>
                            onSubmit(
                                e as unknown as React.FormEvent<HTMLFormElement>,
                            )
                        }
                        value="確定"
                    />
                </div>

                <div className="text-center mt-12">
                    <h2>
                        あたたのグリット・スコアは、{result.score}
                        点です！！
                    </h2>
                </div>
            </div>
        </div>
    );
};
export default GritPage;
