const Case = Array.prototype.slice.call(document.getElementsByClassName("case"))
let tour = 0
let Table = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]

]
Case.forEach(element => {
    const svg = element.childNodes[0]
    const id = element.id

    element.onclick = () =>{
        if (tour == 0){
            croix(element, svg)
            tour = 1

            Table[Math.floor((id -1) / 3)][(id-1) % 3] = 1
            setTimeout(() => {
                victoire("croix")
            }, 10)
            
        }
     else {
        rond(element, svg)
        tour = 0

        Table[Math.floor((id -1) / 3)][(id-1) % 3] = 0
        setTimeout(() => {
            victoire("rond")
        }, 10)
       
     }
     
    }
})


const croix =(element, svg) => {
    const taille = element.offsetWidth

    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line")
    line1.setAttribute("x1",taille * 0.2)
    line1.setAttribute("x2",taille * 0.8)
    line1.setAttribute("y1",taille * 0.2)
    line1.setAttribute("y2",taille * 0.8)
    line1.setAttribute("stroke", "white")
    line1.setAttribute("stroke-width", "4")
    

    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line")
    line2.setAttribute("x1",taille * 0.2)
    line2.setAttribute("x2",taille * 0.8)
    line2.setAttribute("y1",taille * 0.8)
    line2.setAttribute("y2",taille * 0.2)
    line2.setAttribute("stroke", "white")
    line2.setAttribute("stroke-width", "4")
    
    svg.appendChild(line1)
    svg.appendChild(line2)
}

const rond =(element, svg) => {
    const taille = element.offsetWidth

    const rond = document.createElementNS("http://www.w3.org/2000/svg","circle")
    rond.setAttribute("cx", taille * 0.5)
    rond.setAttribute("cy", taille * 0.5)
    rond.setAttribute("r", taille * 0.35)
    rond.setAttribute("stroke", "white")
    rond.setAttribute("stroke-width", "4")
    rond.setAttribute("fill", "rgba(0, 0, 0, 0)")

    svg.appendChild(rond)

}

const victoire = (rondOuCroix) =>{
    if(Table[0][0] != undefined && Table[0][0] == Table[0][1] && Table[0][1] == Table[0] [2]){
        alert("victoire" + rondOuCroix)
        reinitialisation ()
    }
    else if (Table[1][0] != undefined && Table[1] [0] == Table[1][1] && Table[1][1] == Table[1][2] ){
        alert("victoire" + rondOuCroix)
        reinitialisation ()
    }
    else if (Table[2][0] != undefined && Table[2] [0] == Table[2][1] && Table[2][1] == Table[2][2] ){
        alert("victoire" + rondOuCroix)
        reinitialisation ()
    }
    else if (Table[0][0] != undefined && Table[0] [0] == Table[1][0] && Table[1][0] == Table[2][0] ){
        alert("victoire" + rondOuCroix)
        reinitialisation ()
    }
    else if (Table[0][1] != undefined && Table[0] [1] == Table[1][1] && Table[1][1] == Table[2][1] ){
        alert("victoire" + rondOuCroix)
        reinitialisation ()
    }
    else if (Table[0][2] != undefined && Table[0] [2] == Table[1][2] && Table[1][2] == Table[2][0] ){
        alert("victoire" + rondOuCroix)
        reinitialisation ()
    }
    else if (Table[0][0] != undefined && Table[0] [0] == Table[1][1] && Table[1][1] == Table[2][0] ){
        alert("victoire" + rondOuCroix)
        reinitialisation ()
    }
    else if (Table[0][2] != undefined && Table[0] [2] == Table[1][1] && Table[1][1] == Table[2][0] ){
        alert("victoire" + rondOuCroix)
        reinitialisation ()
    }
}

const reinitialisation = () => {
    Table= [
        [undefined, undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
    ]

    Case.forEach(element => {
        const svg = element.childNodes[0]
        svg.innerHTML = ""
    })
}