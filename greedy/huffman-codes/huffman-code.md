Huffman-codes

**Fixed length coding & variable length coding**
Suppose we are going to store some data with only 6 different characters appear

 ------------------------ | a   | b   | c   | d   | e    | f      
 Fixed-length codeword    | 000 | 001 | 010 | 011 | 100  | 101    
 Variable-length codeword | 0   | 101 | 100 | 111 | 1101 | 1100 

**Prefix codes**  
Why the Variable-length codewords look like that above?  
We consider here only codes in which no codeword is also a prefix of some other
codeword. Such codes are called prefix codes.
Although we won’t prove it here, a
prefix code can always achieve the optimal data compression among any character
code, and so we suffer no loss of generality by restricting our attention to prefix
codes.

Huffman invented a greedy algorithm that constructs an optimal prefix code called
a **Huffman code**.


![16-5](./16-5.jpg?raw=true)