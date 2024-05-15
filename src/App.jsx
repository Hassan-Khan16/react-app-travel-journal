import Navbar from './components/Navbar'
import Card from './components/Card'
import data from '../data'

function App() {
  const cardlist = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className='card-list'>
        {cardlist}
      </div>
    </div>
  )
}

export default App