import React from "react";
import Title from "../../components/Title";
import Header from "../../components/Header";
import api from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-activity";
import "../../services/react-activity.css";
import {
  Container,
  Content,
  InputText,
  Label,
  DoubleInput,
  InputSelect,
  Space,
  Picture,
  InputContainer,
  UpdateButton
} from "./style";

class NewVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      brand: '',
      model: '',
      year: 1939,
      plate: '',
      color: '',
      id: 0,
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    let options = [];
    const brands = await api.getBrands();
    for (let i = 0; i < brands.data.length; i += 1) {
      options.push({ value: brands.data[i].id, label: brands.data[i].name });
    }
    this.setState({ brands: options });
  };

redirectToHome = () => {
    this.props.history.push(`/`)
  }

  addVehicle = async () => {
    this.setState({ isLoading: true });
    const data = {
      brand: this.state.brand,
      model: this.state.model,
      year: this.state.year,
      plate: this.state.plate,
      color: this.state.color
    };
    try {
      await api.addVehicle(data);
      toast.success("Car added!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        onClose: this.redirectToHome,
        pauseOnHover: true,
        draggable: true
      });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log("error: ", error);
    }
  };


  validateInfo = () => {
    const { brand, model, plate, color, year } = this.state
    if(brand !== '' && model !== '' && plate !== '' && color !== '' && year > 1940){
      this.addVehicle()
    } else {
      toast.error("All the fields must be filled!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }

  render() {
    return (
      <Container>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Header />
        <Content>
          <Space>
            <Title title="Add new car" />
          </Space>
          <Picture
            src={
              "https://images-na.ssl-images-amazon.com/images/I/41Y%2B5ZV5TOL._SS600_.jpg"
            }
          />
          <DoubleInput>
            <InputContainer>
              <Label>Brand:</Label>
              <InputSelect
                options={this.state.brands}
                onChange={value => this.setState({ brand: value.label })}
              />
            </InputContainer>
            <InputContainer>
              <Label>Model:</Label>
              <InputText
                placeholder='Model'
                onChange={text => this.setState({ model: text.target.value })}
                type="text"
                name="model"
              />
            </InputContainer>
          </DoubleInput>
          <DoubleInput>
            <InputContainer>
              <Label>Year:</Label>
              <InputText
                placeholder='Year'
                onChange={text => this.setState({ year: parseInt(text.target.value) })}
                type="text"
                name="year"
              />
            </InputContainer>
            <InputContainer>
              <Label>Plate:</Label>
              <InputText
                placeholder='Plate'
                value={this.state.plate}
                onChange={text => this.setState({ plate: text.target.value.toUpperCase() })}
                type="text"
                name="plate"
              />
            </InputContainer>
          </DoubleInput>
          <InputContainer>
            <Label>Color:</Label>
            <InputText
              placeholder='Color'
              onChange={text => this.setState({ color: text.target.value })}
              type="text"
              name="color"
            />
          </InputContainer>
          <UpdateButton onClick={() => this.validateInfo()}>
            {this.state.isLoading ? (
              <Bounce color="white" size={16} speed={1} animating={true} />
            ) : (
              "Add new car"
            )}
          </UpdateButton>
        </Content>
      </Container>
    );
  }
}

export default NewVehicle;
