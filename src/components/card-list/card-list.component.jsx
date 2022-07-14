import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ( { monsters } ) => {;
    <div className='card-List'>
        {monsters.map((monster) => {
            return<Card key={monster.id} monster={monster}/>
            })}
            
        </div>
    }

export default CardList;