# Minimax

### O algoritmo Minimax é uma estratégia de tomada de decisão usada em jogos de soma zero, onde dois jogadores competem diretamente um contra o outro, como xadrez, damas e tic-tac-toe. O objetivo do Minimax é determinar a melhor jogada para um jogador, assumindo que o oponente também está jogando de forma otimizada.

O algoritmo Minimax funciona através da construção de uma árvore de busca, que representa todas as possíveis sequências de jogadas e estados do jogo. A árvore é explorada em profundidade, avaliando os estados finais do jogo e atribuindo a eles uma pontuação de acordo com a situação do jogo para o jogador em questão.

Para ilustrar o funcionamento do Minimax, vamos considerar um exemplo simples de tic-tac-toe. A seguir, temos o tabuleiro inicial do jogo:
```
   |   |
-----------
   |   |
-----------
   |   |
```
O jogador "X" é o maximizador, e o jogador "O" é o minimizador. O algoritmo Minimax irá construir a árvore de busca, explorando todas as possíveis jogadas até o final do jogo. Em cada estado final do jogo, uma pontuação é atribuída:
```
   | X |
-----------
   | O |
-----------
   |   |
```
Nesse estado, se "X" vencer, a pontuação seria +1. Se "O" vencer, a pontuação seria -1. Se o jogo terminar em empate, a pontuação seria 0.
```
 X | X |
-----------
 O | O |
-----------
   |   |
```
Nesse estado, se "X" vencer, a pontuação seria +1. Se "O" vencer, a pontuação seria -1. Se o jogo terminar em empate, a pontuação seria 0.

O algoritmo Minimax continuaria a expandir a árvore de busca até o final do jogo para todas as sequências possíveis de jogadas. Em seguida, ele atribuiria uma pontuação a cada estado final e faria a retropropagação dessas pontuações para os nós pais, atualizando as pontuações com base nas escolhas do jogador e do oponente.

No final, o algoritmo Minimax retornaria a jogada que leva ao estado com a pontuação máxima para o jogador maximizador, assumindo que o oponente também joga de forma otimizada.

Esse é apenas um exemplo simples de como o algoritmo Minimax funciona. Em jogos mais complexos, como o xadrez, a árvore de busca é muito maior e a avaliação dos estados finais é mais complexa. No entanto, o princípio básico do Minimax permanece o mesmo: buscar o estado final que maximiza a pontuação para o jogador maximizador, levando em consideração que o oponente também está jogando de forma otimizada.
