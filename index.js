"use strict";
exports.__esModule = true;
exports.getScore = exports.scoreStamps = void 0;
var emptyScoreStamp = {
    offset: 0,
    score: {
        home: 0,
        away: 0
    }
};
exports.scoreStamps = Array(50000).fill(emptyScoreStamp).map((function (acc) { return function () {
    var scoreChanged = Math.random() > 0.9999;
    var homeScoreChange = scoreChanged && Math.random() > 0.55 ? 1 : 0;
    var awayScoreChange = scoreChanged && !homeScoreChange ? 1 : 0;
    return {
        offset: acc.offset += Math.floor(Math.random() * 3) + 1,
        score: {
            home: acc.score.home += homeScoreChange,
            away: acc.score.away += awayScoreChange
        }
    };
}; })(emptyScoreStamp));
var getScore = function (offset) {
    var res = exports.scoreStamps.find(function (scoreStamp) { return scoreStamp.offset === offset; });
    console.log(emptyScoreStamp);
    return res ? res.score : { home: null, away: null };
};
exports.getScore = getScore;
console.log((0, exports.getScore)(1222));
