console.log(document.getElementById('id1').matches('.box'));
console.log(document.getElementById('id1').matches('.class'));

console.log(document.getElementById('sp1').closest('.box'));
console.log(document.getElementById('sp1').closest('#sp1'));

console.log(document.getElementById('id1').contains(document.getElementById('sp1')));