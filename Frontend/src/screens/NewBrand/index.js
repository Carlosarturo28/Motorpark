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
  Space,
  InputContainer,
  UpdateButton
} from "./style";

class NewBrand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      isLoading: false
    };
  }

  redirectToHome = () => {
    this.props.history.push(`/`)
  }

  addBrand = async () => {
    this.setState({ isLoading: true });
    const data = {
      name: this.state.brand
    }
    try {
      await api.addBrand(data);
      toast.success("Brand added!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        onClose: this.redirectToHome,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      this.setState({ isLoading: false, brand: '' });
    } catch (error) {
      console.log("error: ", error);
    }
  };


  validateInfo = () => {
    const { brand } = this.state
    if(brand !== ''){
      this.addBrand()
    } else {
      toast.error("You must add a brand name!", {
        position: "top-right",
        autoClose: 1500,
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
            <Title title="Add new brand" />
          </Space>
            <InputContainer>
              <Label>Brand name:</Label>
              <InputText
                placeholder='Brand name to add'
                onChange={text => this.setState({ brand: text.target.value })}
                type="text"
                name="brand"
              />
            </InputContainer>
          <UpdateButton onClick={() => this.validateInfo()}>
            {this.state.isLoading ? (
              <Bounce color="white" size={16} speed={1} animating={true} />
            ) : (
              "Add new brand"
            )}
          </UpdateButton>
        </Content>
      </Container>
    );
  }
}

export default NewBrand;
