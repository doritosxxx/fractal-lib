import Complex from "complex.js";
import FractalComplexFunction from ".";
import { prec, pm } from '../../../functions';

class FractalComplexFunctionChaos extends FractalComplexFunction {
	name:string = "Chaos"

	invoke(x: number): Complex {
		return new Complex(Math.cos(x), this.z*Math.sin(x)).exp().mul( x, 0 )
	}

	toString(): string {
		const z = this.z
		return `f(x)=xe^(cos(x)${pm(prec(z))}sin(x)i)`
	}

}

export default FractalComplexFunctionChaos;