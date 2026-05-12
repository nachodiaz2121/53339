// Generated from c:/Users/Patricia/ssl-antlr-calculator/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculatorParser}.
 */
public interface CalculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(CalculatorParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(CalculatorParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterStat(CalculatorParser.StatContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitStat(CalculatorParser.StatContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#decl}.
	 * @param ctx the parse tree
	 */
	void enterDecl(CalculatorParser.DeclContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#decl}.
	 * @param ctx the parse tree
	 */
	void exitDecl(CalculatorParser.DeclContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#assign}.
	 * @param ctx the parse tree
	 */
	void enterAssign(CalculatorParser.AssignContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#assign}.
	 * @param ctx the parse tree
	 */
	void exitAssign(CalculatorParser.AssignContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(CalculatorParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(CalculatorParser.ExprContext ctx);
}