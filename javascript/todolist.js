let input = prompt("what do u want to do")
const list =['study for an hour', 'read a book']
while(input !== 'quit'){
    // putting '' is imp as they are not defined and as they are string values
if(input === 'list'){
       for(i=0;i<list.length;i++){
        console.log(list[i])
       }
    }
       else if(input === 'new') {
        const newlist= prompt("what do u want to add")
        list.push(newlist)
       }
       else if(input === 'delete'){
        const index= prompt('enter a index that u want to delete')
        const deleted = list.splice(index, 1)
        console.log(deleted)
       }
       input = prompt("what would u like to do?")
    }
console.log("okay, quit the app")