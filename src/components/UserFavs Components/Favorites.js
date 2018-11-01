import React, {Component} from 'react';
import axios from 'axios';
import DeleteBtn from '../DeleteBtn';


class Favorites extends Component{
    constructor(){
        super()

        this.state = {
            favorites: []
        }
    }

    componentDidMount(){
        axios.get(`/api/favorites/${this.props.user_id}`).then(res => {
            console.log(res.data)
            this.setState({
                favorites: res.data
            })
        })
    }

    deleteFavorite(id){
        console.log(id)
        axios.delete(`/api/delete-favorite/${id}`).then(res=> this.setState({
            favorites: res.data
        }))
    }

    render(){
        console.log(this.state.favorites)
        let userFavs = this.state.favorites.map((favorites, id)=>{
            return(
                <div key={id} className='display-favorites'>
                <p>{favorites.name}</p>
                <DeleteBtn times={2} dialog={['Delete Favorite?', 'Are You Sure?']}action={()=> this.deleteFavorite(favorites.id)}/>
                <a href={'https://www.google.com/maps/place/'+ favorites.name}><button>Go To Restaurant</button></a>
                </div>
            )
        })
        return(
            <div className='user-favorites-list'>
                        <h1>Here are your current favorite restaurants</h1>
                {userFavs}
            </div>
        )
    }
}


export default Favorites