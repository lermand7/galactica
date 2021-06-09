import React from "react";
import axios from 'axios';
import "./Contact.css";

class Contact extends React.Component
{
    state = {
        name: '',
        names: []
    };
    
    componentDidMount = () => {
        this.getNames();
    };

    getNames = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.setState({ names: data });
                console.log('Data has been received!');
            })
            .catch((error) => {
                alert(error);
            });
        }

        handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    submit = (event) => {
        event.preventDefault();

        if(this.state.name)
        {
            const payload = {
                name: this.state.name,
            };
    
            axios({
                url: '/api/save',
                method: 'POST',
                data: payload
            })
            .then(() => {
                console.log('Data has been sent to the server');
                this.resetUserInputs();
                this.getNames();
            })
            .catch(() => {
                console.log('Internal server error');
            });;
        }
        else
        {
            alert("Név nélkül nehéz lesz.")
        }
    };

    resetUserInputs = () => {
        this.setState({
            name: '',
        });
    };

    displayNames = (names) => {

        if (!names.length){ return(
            <span>Még senki :(</span>
        )
        };

        return names.map((name, index) => (
            <p key={index}>{name.name}</p>
            ));
    };

    render() {

        console.log('State: ', this.state);

        return(
            <>
                <div className="contact-div-wrapper">
                    <div className="more">
                        <h2>És még sok más...</h2>
                    </div>
                    <h1>Kapcsolat</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <p><i className="fa fa-copyright"></i>Lejer Armand</p>
                                    <p>lermand77@gmail.com</p>
                                    <h2 className="form-text">Jelezd, hogy itt jártál, így látom az adatbázist akcióban ;)</h2>

                                    <form onSubmit={this.submit}>
                                        <button>ELKÜLD</button>
                                        <div className="form-input">
                                            <input 
                                                type="text"
                                                name="name"
                                                placeholder="Név"
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </form>
                                </th>
                                <th>
                                    <div className="names">
                                        <h2>Itt voltak:</h2>
                                        {this.displayNames(this.state.names)}
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default Contact;