import React from "react";

export default class StateProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kota : 'Semarang'
        }
    }

render () {
    return (
        <div class="text-center">
            { <h2>{this.state.kota}</h2> /*> yang ini untuk menampilkan kota Semarang */}
        {<button onClick={() => this.setState({kota: "Malang"})}>Ganti kota</button> 
        /*{yang {kota ...}agar bisa dirubah selain semarang itu nyambung ke yg paling atas} */}
        </div>
    )
}
}