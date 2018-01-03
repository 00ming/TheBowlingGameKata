TestCase("GameTest", {
    "test ": function() {
        function rollMany (roll,pins) {
            for(var i = 0;i < roll;i ++) {
                g.roll(pins)
            }
        }
        var g = new game();
        rollMany(20,0)
        assertEquals(0, g.score());
    },
    "test all one": function() {
        function rollMany (roll,pins) {
            for(var i = 0;i < roll;i ++) {
                g.roll(pins)
            }
        }
        var g = new game();
        rollMany(20,1)
        assertEquals(20, g.score());
    },
    "test profect game": function() {
        function rollMany (roll,pins) {
            for(var i = 0;i < roll;i ++) {
                g.roll(pins)
            }
        }
        var g = new game();
        rollMany(12,10)
        assertEquals(300, g.score());
    },
    "test one strike": function() {
        function rollMany (roll,pins) {
            for(var i = 0;i < roll;i ++) {
                g.roll(pins)
            }
        }
        var g = new game();
        g.roll(10)
        g.roll(3)
        g.roll(4)
        rollMany(17,0)
        assertEquals(24, g.score());
    },
    "test one spare": function() {
        function rollMany (roll,pins) {
            for(var i = 0;i < roll;i ++) {
                g.roll(pins)
            }
        }
        var g = new game()
        g.roll(3)
        g.roll(7)
        g.roll(7)
        rollMany(17,0)
        assertEquals(24, g.score());
    },
});
