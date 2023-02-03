export function createTodo(data) {
    let newData = {
        title : data.todoTitle,
        isCompleted : data.completed,
        category : data.chosenCategory,
        author: {
            firstName : data.user.first,
            lastName : data.user.last
        }
    }
        if(newData.isCompleted){
            newData.icon = `✅`;
        }else{
            newData.icon = `⏳`;
        }
    return newData;
}