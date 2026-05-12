// Generated from Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
const serializedATN = [4,1,11,34,2,0,7,0,2,1,7,1,2,2,7,2,1,0,4,0,8,8,0,11,
0,12,0,9,1,0,1,0,1,1,1,1,1,1,1,1,4,1,18,8,1,11,1,12,1,19,1,1,1,1,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,3,2,32,8,2,1,2,0,0,3,0,2,4,0,0,35,0,7,1,0,0,0,2,
13,1,0,0,0,4,31,1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,8,9,1,0,0,0,9,7,1,0,0,0,
9,10,1,0,0,0,10,11,1,0,0,0,11,12,5,0,0,1,12,1,1,0,0,0,13,14,5,1,0,0,14,15,
5,9,0,0,15,17,5,2,0,0,16,18,3,4,2,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,
0,0,0,19,20,1,0,0,0,20,21,1,0,0,0,21,22,5,3,0,0,22,3,1,0,0,0,23,24,5,4,0,
0,24,25,5,10,0,0,25,32,5,10,0,0,26,32,5,5,0,0,27,28,5,6,0,0,28,32,5,7,0,
0,29,30,5,8,0,0,30,32,5,10,0,0,31,23,1,0,0,0,31,26,1,0,0,0,31,27,1,0,0,0,
31,29,1,0,0,0,32,5,1,0,0,0,3,9,19,31];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'accion'", "'{'", "'}'", "'moverArchivo'", 
                            "'usarEscaneoProfundo'", "'retornar'", "'resultado'", 
                            "'notificar'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "NOMBRE", "STRING", "WS" ];
    static ruleNames = [ "dsl", "accion", "comando" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	dsl() {
	    let localctx = new DslContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_dsl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.accion();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 11;
	        this.match(CalculatorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_accion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this.match(CalculatorParser.T__0);
	        this.state = 14;
	        this.match(CalculatorParser.NOMBRE);
	        this.state = 15;
	        this.match(CalculatorParser.T__1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.comando();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 368) !== 0));
	        this.state = 21;
	        this.match(CalculatorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_comando);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.match(CalculatorParser.T__3);
	            this.state = 24;
	            this.match(CalculatorParser.STRING);
	            this.state = 25;
	            this.match(CalculatorParser.STRING);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.match(CalculatorParser.T__4);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 27;
	            this.match(CalculatorParser.T__5);
	            this.state = 28;
	            this.match(CalculatorParser.T__6);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 29;
	            this.match(CalculatorParser.T__7);
	            this.state = 30;
	            this.match(CalculatorParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.T__0 = 1;
CalculatorParser.T__1 = 2;
CalculatorParser.T__2 = 3;
CalculatorParser.T__3 = 4;
CalculatorParser.T__4 = 5;
CalculatorParser.T__5 = 6;
CalculatorParser.T__6 = 7;
CalculatorParser.T__7 = 8;
CalculatorParser.NOMBRE = 9;
CalculatorParser.STRING = 10;
CalculatorParser.WS = 11;

CalculatorParser.RULE_dsl = 0;
CalculatorParser.RULE_accion = 1;
CalculatorParser.RULE_comando = 2;

class DslContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_dsl;
    }

	EOF() {
	    return this.getToken(CalculatorParser.EOF, 0);
	};

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterDsl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitDsl(this);
		}
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_accion;
    }

	NOMBRE() {
	    return this.getToken(CalculatorParser.NOMBRE, 0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAccion(this);
		}
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_comando;
    }

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.STRING);
	    } else {
	        return this.getToken(CalculatorParser.STRING, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitComando(this);
		}
	}


}




CalculatorParser.DslContext = DslContext; 
CalculatorParser.AccionContext = AccionContext; 
CalculatorParser.ComandoContext = ComandoContext; 
