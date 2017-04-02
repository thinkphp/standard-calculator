var Math = {

    SQRT: function( n ) {

             if(n == 1) return 1;

             var EPS = 0.00001

             var an, 
                 anplus1;

                 an = parseFloat(n / 2.0); 

                 anplus1 = ( an + parseFloat ( n / an)  ) / 2.0  

                 while( (anplus1 > an ? anplus1 - an : an - anplus1) >= EPS ) {

                        an = anplus1

                        anplus1 = ( an + parseFloat( n / an) ) / 2  
                 }
           
           return anplus1
    },

    SQR: function( n ) {

         return n * n
    },

    Fact: function( n  ) {

          if(n == 0) return 1;

          else return n * Math.Fact(n - 1) 
    }
}

                var curr = '', 
                    operand1 = '', 
                    operator = '', 
                    operand2 = ''

                function btn0() {

                    if( operator ) {

                        operand2 += '0'

                    } else {

                        operand1 += '0'
                    }

                    output(curr + '0') 
               
                } 

                function btn1() {
                
                    if( operator ) {

                        operand2 += '1'
 
                    } else {

                        operand1 += '1'
                    }

                     output(curr + '1') 
                }

                function btn2() {

                    if( operator ) {

                        operand2 += '2'

                    } else {

                        operand1 += '2'
                    }

                    output(curr + '2') 
               
                } 

                function btn3() {

                    if( operator ) {

                        operand2 += '3'

                    } else {

                        operand1 += '3'
                    }

                    output(curr + '3') 
               
                } 

                function btn4() {

                    if( operator ) {

                        operand2 += '4'

                    } else {

                        operand1 += '4'
                    }

                    output(curr + '4') 
               
                } 

                function btn5() {

                    if( operator ) {

                        operand2 += '5'

                    } else {

                        operand1 += '5'
                    }

                    output(curr + '5') 
               
                } 

                function btn6() {

                    if( operator ) {

                        operand2 += '6'

                    } else {

                        operand1 += '6'
                    }

                    output(curr + '6') 
               
                } 

                function btn7() {

                    if( operator ) {

                        operand2 += '7'

                    } else {

                        operand1 += '7'
                    }

                    output(curr + '7') 
               
                } 

                function btn8() {

                    if( operator ) {

                        operand2 += '8'

                    } else {

                        operand1 += '8'
                    }

                    output(curr + '8') 
               
                } 


                function btn9() {

                    if( operator ) {

                        operand2 += '9'

                    } else {

                        operand1 += '9'
                    }

                    output(curr + '9') 
               
                } 


                function btnSum() {

                     operator = '+'

                     output(curr + operator) 
                }             

                function btnMul() {

                     operator = '*'

                     output(curr + operator) 
                }             

                function btnSub() {

                     operator = '-'

                     output(curr + operator) 
                }             

                function btnDiv() {

                     operator = '/'

                     output(curr + operator) 
                }             

                function btnEql() {

                     var result = compute( parseFloat(operand1, 10), operator, parseFloat(operand2, 10) )

                     output( parseFloat(result).toString( 10 ) ) 

                     operand1 = curr
                     operator = ''
                     operand2 = ''  
                }             

                function btnSqrt() {

                     output( Math.SQRT( parseFloat(operand1) ).toString( 10 ) ) 

                     operand1 = curr
                     operator = ''
                     operand2 = ''  

                }             

                function btnSqr() {
 
                     var r = Math.SQR( parseFloat(operand1) );

                     output( ( r ).toString( 10 )  ) 

                     operand1 = curr
                     operator = ''
                     operand2 = ''  

                }             

                function btnFact() {
 
                     var r = Math.Fact( parseFloat(operand1) );

                     output( ( r ).toString( 10 )  ) 

                     operand1 = curr
                     operator = ''
                     operand2 = ''  

                }             

                function compute(a, op, b) {
 
                     a = a || 0  
                     b = b || 0

                     switch( op ) {

                            case '+':
                            return a + b

                            case '-':
                            return a - b

                            case '*':
                            return a * b

                            case '/':
                            return a / b
                     }
                }


                function output( x ) {

                    $('output').innerHTML = x

                    curr = x 
                }

                function btnClr() {

                     operand1 = ''
                     operator = ''
                     operand2 = ''
                     curr = ''
                     output('')                     
                }             


                var $ = function(id){ return document.getElementById(id) }
                var ids = ['0', '1', '2' ,'3', '4', '5', '6', '7', '8', '9','Clr', 'Eql', 'Sum', 'Sub', 'Mul', 'Div','Sqrt', 'Sqr','Fact']

                ids.map(function(id){
                    $('btn'+id).onclick = window['btn' + id]
                }) 
