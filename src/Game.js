var game = function() {
    var score = 0
    var rolls = new Array()
    var currentRoll = 0
    // 全中
    var isStrike = function (frameIndex) {
        return (rolls[frameIndex] === 10)
    }
    // 全中奖励2球
    var strikeBonus = function (frameIndex) {
        return rolls[frameIndex + 1] + rolls[frameIndex + 2]
    }
    // 补中
    var isSpare = function (frameIndex) {
        return (rolls[frameIndex] + rolls[frameIndex+1] === 10)
    }
    this.roll = function (pins) {
        rolls[currentRoll++] = pins
    }
    this.score = function () {
        var score = 0
        var frameIndex = 0
        for (var frame = 0;frame < 10;frame ++) {
            if (isStrike(frameIndex)) {
                score += 10 + strikeBonus(frameIndex)
                frameIndex ++
            } else if (isSpare(frameIndex)) {
                score += 10 + rolls[frameIndex + 2]
                frameIndex += 2
            } else {
                score += rolls[frameIndex] + rolls[frameIndex + 1]
                frameIndex += 2
            }

        }
        return score
    }
}