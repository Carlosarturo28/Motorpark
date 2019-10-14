import React from "react";
import Title from "../../components/Title";
import Header from '../../components/Header'
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

class EditVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      brand: "",
      model: "",
      year: 2019,
      plate: "",
      color: "",
      id: 0,
      deleted: false,
      isLoading: false,
      isLoadingDelete: false
    };
  }

  componentDidMount = async () => {
    const { item } = this.props.location.state;
    let options = [];
    const brands = await api.getBrands();
    for (let i = 0; i < brands.data.length; i += 1) {
      options.push({ value: brands.data[i].id, label: brands.data[i].name });
    }
    this.setState({
      brand: item.brand,
      model: item.model,
      year: item.year,
      plate: item.plate,
      color: item.color,
      id: item.id,
      brands: options
    });
  };

redirectToHome = () => {
    this.props.history.push(`/`)
  }

  deleteVehicle = async () => {
      const id = this.state.id;
    this.setState({ isLoadingDelete: true });
    try {
      await api.deleteVehicle(id);
      toast.success("Car deleted!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        onClose: this.redirectToHome,
        pauseOnHover: true,
        draggable: true
      });
      this.setState({ isLoadingDelete: false, deleted: true });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  updateVehicle = async () => {
    const id = this.state.id;
    this.setState({ isLoading: true });
    const data = {
      brand: this.state.brand,
      model: this.state.model,
      year: this.state.year,
      plate: this.state.plate,
      color: this.state.color
    };
    try {
      await api.updateVehicle(data, id);
      toast.success("Car updated!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log("error: ", error);
    }
  };

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
            <Title title="Edit car information" />
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
                placeholder={this.state.brand}
                options={this.state.brands}
                onChange={value => this.setState({ brand: value.label })}
              />
            </InputContainer>
            <InputContainer>
              <Label>Model:</Label>
              <InputText
                value={this.state.model}
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
                value={this.state.year}
                onChange={text => this.setState({ year: text.target.value })}
                type="text"
                name="year"
              />
            </InputContainer>
            <InputContainer>
              <Label>Plate:</Label>
              <InputText
                value={this.state.plate.toUpperCase()}
                onChange={text => this.setState({ plate: text.target.value })}
                type="text"
                name="plate"
              />
            </InputContainer>
          </DoubleInput>
          <InputContainer>
            <Label>Color:</Label>
            <InputText
              value={this.state.color}
              onChange={text => this.setState({ color: text.target.value })}
              type="text"
              name="color"
            />
          </InputContainer>
          <UpdateButton onClick={() => this.updateVehicle()}>
            {this.state.isLoading ? (
              <Bounce color="white" size={16} speed={1} animating={true} />
            ) : (
              "Update information"
            )}
          </UpdateButton>
          <UpdateButton delete onClick={() => this.deleteVehicle()}>
            {this.state.isLoadingDelete ? (
              <Bounce color="white" size={16} speed={1} animating={true} />
            ) : (
              "Delete car"
            )}
          </UpdateButton>
        </Content>
      </Container>
    );
  }
}

export default EditVehicle;
