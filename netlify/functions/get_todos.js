let firebase = require('./firebase')

exports.handler = async function(event) {
  console.log('hello from the back-end!')

  let db = firebase.firstore()

  let todosData = []
  let querySnapshot = await db.collection('todos').get()
  let todos = querySnapshot.docs
  for (let i=0; i<todos.legth; i++) {
    let todoId = todos[i].id 
    let todo = todos[i].data()
    todosData.push({
      id: todoId
      text: todos
    })

  }

  return {
    statusCode: 200,
    body: JSON.stringify(todosData)
  }
}