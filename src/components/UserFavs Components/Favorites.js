import React, {Component} from 'react';
import axios from 'axios';


class Favorites extends Component{
    constructor(){
        super()

        this.state = {
            favorites: []
        }
    }

    componentDidMount(){
        axios.get('/api/favorites', res => {
            this.setState({
                favorites: res.data
            })
        })
    }

    deleteFavorite(id){
        axios.delete(`/api/delete-favorite/${id}`).then(res => this.setState({
            favorites: res.data
        }))
    }

    render(){
        return(
            <div>
            <h4>
                This is the Favorites Component
            </h4>
            {this.state.favorites}
            </div>
        )
    }
}

export default Favorites