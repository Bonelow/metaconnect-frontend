import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import Base from "../layouts/base";
import Card from "../components/Card";
import Column from "../components/Column";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { accountUpdateName } from "../reducers/_account";
import { fonts, colors } from "../styles";

const StyledWrapper = styled(Column)`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h2`
  margin: 20px 0;
`;

const StyledDescription = styled.p`
  font-size: ${fonts.size.h4};
  margin: 40px 0;
`;

const StyledRedLine = styled.div`
  background: rgb(${colors.red});
  width: 62px;
  height: 3px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: auto;
  margin: 20px 0;
  padding: 12px 20px;
`;

class Home extends Component {
  state = {
    name: ""
  };
  updateName = ({ target }) => {
    const input = target.value;
    const name = !!input ? "@" + input.replace(/[\s@]/gi, "") : "";
    this.setState({ name });
  };
  onSubmit = () => {
    const name = this.state.name.replace(/@/gi, "");
    this.props.accountUpdateName(name);
    window.browserHistory.push("/dashboard");
  };
  render = () => (
    <Base>
      <StyledWrapper maxWidth={400}>
        <StyledTitle>MetaConnect</StyledTitle>
        <StyledRedLine />
        <StyledDescription>
          A meta connection to start your journey using Ethereum
        </StyledDescription>
        <Card>
          <Form onSubmit={this.onSubmit}>
            <Input
              label="👩‍🚀 Username:"
              placeholder="@carlosmatos"
              type="text"
              color={"lightGrey"}
              shadow={false}
              value={this.state.name}
              onChange={this.updateName}
            />
            <StyledButton color="red" textTransform="uppercase" type="submit">
              {"Start 🚀"}
            </StyledButton>
          </Form>
        </Card>
      </StyledWrapper>
    </Base>
  );
}

Home.propTypes = {
  accountUpdateName: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    accountUpdateName
  }
)(Home);
