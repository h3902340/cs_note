import { Component } from '@angular/core';

@Component({
    selector: 'app-matrix-generator',
    templateUrl: './matrix-generator.component.html',
    styleUrls: ['./matrix-generator.component.css']
})
export class MatrixGeneratorComponent {
    public matrixString = '';
    public inverseString = '';
    private readonly valueRange = 20;
    private matrix: number[][] = [];
    public determinant: number = 0;
    public generateMatrix(dimension: number) {
        this.determinant = 0;
        let lcm: number = 0;
        while (this.determinant == 0 || Math.abs(this.determinant) > 25 || lcm == 0 || lcm > 180) {
            lcm = 0;
            this.matrix = [];
            let singleDigitCount = Math.floor(dimension * dimension * .6);
            singleDigitCount = Math.floor(Math.random() * (dimension * dimension - singleDigitCount)) + singleDigitCount;
            for (let j = 0; j < dimension; j++) {
                let row: number[] = [];
                for (let i = 0; i < dimension; i++) {
                    let isSingleDigit: boolean = false;
                    if (singleDigitCount > 0) {
                        if (singleDigitCount == (dimension - j) * dimension + dimension - i) {
                            isSingleDigit = true;
                        } else {
                            isSingleDigit = Math.random() > .5 ? true : false;
                        }
                    }
                    let integer = 0;
                    if (isSingleDigit) {
                        integer = Math.floor(Math.random() * 18) - 9;
                        singleDigitCount--;
                    } else {
                        integer = Math.floor(Math.random() * this.valueRange * 2) - this.valueRange;
                    }
                    row.push(integer);
                }
                this.matrix.push(row);
            }
            let isContainOne: boolean = false;
            for (let i = 0; i < dimension; i++) {
                for (let j = 0; j < dimension; j++) {
                    if (this.matrix[i][j] == 1) {
                        isContainOne = true;
                        break;
                    }
                }
            }
            if (!isContainOne) {
                this.matrix[Math.floor(Math.random() * (dimension - 1))][Math.floor(Math.random() * (dimension - 1))] = 1;
            }
            for (let i = 0; i < dimension; i++) {
                for (let j = 0; j < dimension; j++) {
                    if (this.matrix[i][j] == 0) continue;
                    if (lcm == 0) {
                        lcm = Math.abs(this.matrix[i][j]);
                    } else {
                        lcm = Math.abs(this.matrix[i][j]) * lcm / this.getGCD(Math.abs(this.matrix[i][j]), lcm);
                    }
                }
            }
            this.determinant = this.calculateDeterminant(this.matrix);
        }

        this.matrixString = this.getMatrixString(this.matrix);
    }

    private getMatrixString(matrix: number[][]): string {
        let matrixString = '<math xmlns = "http://www.w3.org/1998/Math/MathML"><mrow><mo>[</mo><mtable>';
        for (let j = 0; j < matrix.length; j++) {
            matrixString += '<mtr>';
            for (let i = 0; i < matrix[j].length; i++) {
                matrixString += `<mtd><mn>${matrix[j][i]}</mn></mtd>`;
            }
            matrixString += '</mtr>';
        }
        matrixString += '</mtable><mo>]</mo></mrow></math>';
        return matrixString;
    }

    private getGCD(a: number, b: number): number {
        if (a > b) {
            let r = a % b;
            if (r == 0) {
                return b;
            }
            return this.getGCD(b, r);
        } else {
            let r = b % a;
            if (r == 0) {
                return a;
            }
            return this.getGCD(a, r);
        }
    }

    private calculateDeterminant(matrix: number[][]) {
        if (matrix.length == 1) {
            return matrix[0][0];
        }
        let output: number = 0;
        for (let i = 0; i < matrix.length; i++) {
            let subMatrix: number[][] = [];
            for (let j = 1; j < matrix.length; j++) {
                let subMatrixRow: number[] = [];
                for (let k = 0; k < matrix.length; k++) {
                    if (k == i) continue;
                    subMatrixRow.push(matrix[j][k]);
                }
                subMatrix.push(subMatrixRow);
            }
            output += (i % 2 == 0 ? 1 : -1) * matrix[0][i] * this.calculateDeterminant(subMatrix);
        }
        return output;
    }

    public solveInverse() {
        // using my algorithm
        if (this.matrix.length == 2) {
            let col1 = [this.matrix[1][1], -this.matrix[1][0]];
            let product1 = this.matrix[0][0] * col1[0] + this.matrix[0][1] * col1[1];
            let col2 = [this.matrix[0][1], -this.matrix[0][0]];
            let product2 = this.matrix[1][0] * col2[0] + this.matrix[1][1] * col2[1];
            let lcm = this.getGCD(product1, product2);
            col1[0] *= lcm / product1;
            col1[1] *= lcm / product1;
            col2[0] *= lcm / product2;
            col2[1] *= lcm / product2;
        }
    }
}
