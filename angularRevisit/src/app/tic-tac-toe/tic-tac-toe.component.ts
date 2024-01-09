import { Component } from '@angular/core';
enum Player {
  None = '',
  X = 'X',
  O = 'O'
}
@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {
  board: Player[] = new Array(9).fill(Player.None)
  playerWon = { [Player.X]: 0, [Player.O]: 0 };
  playerName: Player = Player.X;
  gameOver: boolean = false;
  draw: boolean = false;


  makeMove(i: number): void {
    if (!this.gameOver && !this.board[i]) {
      this.board[i] = this.playerName;
      this.checkWinner();
      this.playerName = this.playerName == Player.X ? Player.O : Player.X
      //mimic  computer playing
      //if player to play is O i.e computer then mimic computer
      //this.playerName == Player.O? this.mimicComputer(): undefined;
    }
  }
//to mimic computer starts
  getUsedPos():number[]{
    let unsedPositionArr=[]
    for (let i =0;i<this.board.length;i++){
      if (this.board[i] == Player.None){
        unsedPositionArr.push(i)
      }
    }
    return unsedPositionArr
  }
  getRandomPos(new_list:number[]):number{
    let pos = 1;
    const randomIndex = Math.floor(Math.random() * new_list.length);
    return new_list[randomIndex];
  }
  mimicComputer(){
    //select unused i and get one random and call 
    let pos = this.getRandomPos(this.getUsedPos())
    console.log(pos)
    setTimeout(()=>{
       this.makeMove(pos)
    },800)

  }
  //to mimic computer ends


  checkWinner(): void {
    const winningPositions: number[][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]


    for (const [a, b, c] of winningPositions) {
      if (this.board[a] != Player.None && this.board[a] == this.board[b] && this.board[b] == this.board[c]) {

        this.board[a] == Player.X ? this.playerWon[Player.X] += 1 : this.playerWon[Player.O] += 1
        this.gameOver = true;
        //this.reset()
        break;
      }

    }
    let leftPlaces = 0;
    for (const i of this.board) {
      if (i == Player.None) {
        leftPlaces += 1;
      }
    }
    if (leftPlaces == 0) {
      this.reset();
    }


  }

  reset(): void {
    this.board = new Array(9).fill(Player.None)
    this.gameOver = false;
    this.playerName = Player.X;
    this.draw = false;

  }

}
