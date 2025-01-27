function calculateNumbers(var1, var2) {
    // Verificar se os parâmetros são números válidos
    if (typeof var1 !== 'number' || typeof var2 !== 'number') {
        throw new Error('Os parâmetros devem ser números');
    }

    return {
        soma: var1 + var2,
        subtracao: var1 - var2,
        multiplicacao: var1 * var2,
        divisao: var2 !== 0 ? var1 / var2 : 'Não é possível dividir por zero'
    };
}