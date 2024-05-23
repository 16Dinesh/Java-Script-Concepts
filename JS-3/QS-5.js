let game = [['x',null,'o'],[null,'X',null],['o','null','O']]

// game
// (3) [Array(3), Array(3), Array(3)]0: (3) ['x', null, 'o']1: (3) [null, 'X', null]2: (3) ['o', 'null', 'O']length: 3[[Prototype]]: Array(0)
// game [0][1].pop()
// VM968:1 Uncaught TypeError: Cannot read properties of null (reading 'pop')
//     at <anonymous>:1:13
// (anonymous) @ VM968:1
// game [0][1]
// null
// game [0][1] = 'O'
// 'O'
// game
// (3) [Array(3), Array(3), Array(3)]0: (3) ['x', 'O', 'o']1: (3) [null, 'X', null]2: (3) ['o', 'null', 'O']length: 3[[Prototype]]: Array(0)