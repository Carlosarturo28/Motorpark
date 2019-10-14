import React from "react";
import Title from "../../components/Title";
import Header from "../../components/Header";
import Card from "../../components/Card";
import api from "../../services/api";
import { Bounce } from "react-activity";
import { FaSearch } from "react-icons/fa";
import "../../services/react-activity.css";
import {
  Container,
  Content,
  SearchButton,
  Inline,
  InputText,
  Message,
  AddButton,
  Button,
  LinkTo
} from "./style";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleList: [],
      brandList: [],
      isLoading: false,
      search: '',
      error: ''
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      const vehicles = await api.getVehicles();
      if(vehicles.data.length > 0){
      this.setState({ vehicleList: vehicles.data.reverse() });
      this.setState({ isLoading: false });
      } else {
        this.setState({error: 'No cars available :('})
        this.setState({ isLoading: false });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

    searchFilter = async text => {
      if(text !== ''){
      this.setState({ isLoading: true });
      try {
      const filteredVehicle = await api.searchVehicle(text)
      if(!filteredVehicle.ok){
        this.setState({error: filteredVehicle.data, vehicleList: []})
        this.setState({ isLoading: false });
      } else {
      this.setState({ vehicleList: filteredVehicle.data.reverse() });
      this.setState({ isLoading: false });
      }
    } catch (error) {
        console.log('error: ', error)
      }
      } else {
      this.setState({ isLoading: true });
      try {
      const vehicles = await api.getVehicles();
      this.setState({ vehicleList: vehicles.data.reverse() });
      this.setState({ isLoading: false });
    } catch (error) {
        console.log('error: ', error)
      }
      }
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Inline>
            <Title title="Our cars" />
            <SearchButton>
              <InputText
                placeholder='Search by brand...'
                onChange={text => this.setState({ search: text.target.value })}
                type="text"
                name="search"
              />
              <Button onClick={() => this.searchFilter(this.state.search)}>
              <FaSearch color="#999" size="17px" />
              </Button>
            </SearchButton>
          </Inline>
          <LinkTo to='/add-vehicle'>
          <AddButton>+ Add car</AddButton>
          </LinkTo>

          {this.state.vehicleList.length > 0 ? this.state.isLoading ? (
            <Bounce color="white" size={16} speed={1} animating={true} />
          ) : ( 
            this.state.vehicleList
              .map(item => (
                <Card
                  key={item.id}
                  brand={item.brand}
                  color={item.color}
                  year={item.year}
                  plate={item.plate}
                  model={item.model}
                  item={item}
                />
              ))) : <Message>{this.state.error}</Message>
          }
        <LinkTo to='/add-brand'>
        <Message>Need to add a brand?</Message>
        </LinkTo>
        </Content>
      </Container>
    );
  }
}

export default App;
