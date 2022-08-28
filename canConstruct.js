const canConstruct = (target, wordBank) => {
    if (target in wordBank) return true;
    if (target === '') return true;
    for (let word of wordBank){
        if(target.indexOf(word)===0){
        const suffix = target.slice(word.length);
        if (canConstruct(suffix, wordBank) ===true){
            return true;
        }
        //combination = [...wordCombination, word];
    }
}
    return false;
};

console.log(canConstruct("abcdef", ["abc", "def"]));
console.log(canConstruct("eeeeeeef", ['eee', 'eee']));