const emptyScoreStamp = {
    offset: 0,
    score: {
        home: 0,
        away: 0
    }
};

export const scoreStamps = Array(50000).fill(emptyScoreStamp).map(
    ((acc) => () => {
            const scoreChanged = Math.random() > 0.9999;
            const homeScoreChange = scoreChanged && Math.random() > 0.55 ? 1 : 0;
            const awayScoreChange = scoreChanged && !homeScoreChange ? 1 : 0;
            return {
                offset: acc.offset += Math.floor(Math.random() * 3) + 1,
                score: {
                    home: acc.score.home += homeScoreChange,
                    away: acc.score.away += awayScoreChange
                }
            };
        }
    )(emptyScoreStamp)
);

export const getScore = (offset: number) : {home: number, away: number} => {
    const res = scoreStamps.find((scoreStamp) => scoreStamp.offset === offset);
    console.log(emptyScoreStamp)
    return res ? res.score : {home: null, away: null};
};

console.log(getScore(1222))
