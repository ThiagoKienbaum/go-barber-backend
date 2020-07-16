function soma(a, b) {
    return a + b;
}

test('if i call soma function with 4 and 5 it shouçd return 9', () => {
    const result = soma(4, 5);

    expect(result).toBe(9);
});
