// отфильтровать машины дешевле 35.000 с помощью filter
// отфильтровать машины дороже 35.000 с помощь forEach
let cars = [
    {
      name: 'BMW',
      color: 'white',
      model: 'M4 Competition',
      price: 80000,
      year: 2020
    },
    {
      name: 'Gentra',
      color: 'black',
      model: '2',
      price: 15000,
      year: 2022
    },
    {
      name: 'Kia',
      color: 'white',
      model: 'K5',
      price: 42000,
      year: 2023
    },
    {
      name: 'Matiz',
      color: 'red',
      model: 'best',
      price: '6000',
      year: 2011
    },
    {
      name: 'Malibu',
      color: 'gray',
      model: "2",
      price: 37000
    },
    {
      name: 'Nexia-3',
      color: 'blue',
      model: "3",
      price: 12000
    }
  ]
  
  let cheap = cars.filter(item => item.price <= 35000)
  let expensive = []
  let expensiveFilter = cars.forEach(item => {
    if(item.price >= 35000) {
      expensive.push(item)
    }
  })

  console.log('Cheap', cheap);
  console.log('Expensive', expensive);
