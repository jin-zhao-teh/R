let a = e
e = function(d,b) {
    let n = JSON.parse(d.data)
        n.correct = n.targets
        n.incorrect = 0
        d.data = n
    a(d,b)
}