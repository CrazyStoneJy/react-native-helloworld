const Person ={
  name: 'person',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    age: 'string',
    address: 'string',
    phone: 'string',
  }
}


module.exports = {
  schema: [Person],
}
