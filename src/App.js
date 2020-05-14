import React from "react";
import "./App.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";

class App extends React.Component {
    state = { data: {} };
    async componentDidMount() {
        const data = await fetchData();
        this.setState({
            data
        });
    }
    render() {
        return (
            <div className="App">
                <Cards data={this.state.data} />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;
