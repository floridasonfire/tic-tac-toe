describe('Player', function() {
  it("returns the player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function() {
  it("returns the player's mark", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.xcoordinate).to.equal(1);
  });

  it("returns the player's mark", function() {
    var testSpace = new Space(1,2);
    expect(testSpace.ycoordinate).to.equal(2);
  });

  it("lets a player mark a space", function() {
      var testPlayer = new Player("X")
      var testSpace = new Space(1,2);
      testSpace.mark_by(testPlayer)
      expect(testSpace.markBy).to.equal(testPlayer);
   });
});

describe('Board', function() {
  it("creates 9 spaces when it is initialized", function() {
    var testBoard = new Board()
    expect(testBoard.boardArray.length).to.equal(9)
  });
});

describe('Game', function() {
  it("initializes two players", function() {
    var player1 = new Player("X");
    var player2 = new Player("O");
  })
})
