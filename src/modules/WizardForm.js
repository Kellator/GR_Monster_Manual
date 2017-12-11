import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import WizardFormFourthPage from './WizardFormFourthPage';
import WizardFormFifthPage from './WizardFormFifthPage';
import WizardFormSixthPage from './WizardFormSixthPage';
import WizardFormSeventhPage from './WizardFormSeventhPage';


class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
    // console.log(props);
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    let instructionState = this.state;
    // console.log(this.props);
    return (
      <div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} instructionState={ instructionState }/>}
        {page === 2 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            instructionState={ instructionState }
          />
        )}
        {page === 3 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            instructionState={ instructionState }
          />
        )}        
        {page === 4 && (
          <WizardFormFourthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            instructionState={ instructionState }
          />
        )}
        {page === 5 && (
          <WizardFormFifthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            instructionState={ instructionState }
          />
        )}
        {page === 6 && (
          <WizardFormSixthPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            instructionState={ instructionState }
          />
        )}
        {page === 7 && (
          <WizardFormSeventhPage
            previousPage={this.previousPage}
            onSubmit={this.props.createCardSubmit}
            instructionState={ instructionState }
          />
        )}
      </div>
    )
  }
}

export default WizardForm