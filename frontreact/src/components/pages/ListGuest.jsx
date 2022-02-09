import React  from 'react'
import { useQuery } from 'react-query'
import { getAllGuest } from '../../services/GestServices';

const ListGuest = ({id}) => {
        
        const {data: guests, error, isLoading} = useQuery(["guests"], getAllGuest)

  return (
    <div className="row">
            <div className="col-md-4">Form Guest</div>
            <div className="col-md-4">
                    <h3>Guest List</h3>
                    <ul className="list-group">
                            {
                                    guests.map(guest =><li key={guest.id} className="list-group-item list-group-item-action">
                                            {guest.firstName}
                                    </li>)
                            }
                    </ul>
            </div>
    </div>
  )
}

export default ListGuest