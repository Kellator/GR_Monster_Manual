import React, { Component } from 'react';
import Grid from 'material-ui-next/Grid';
import { setPage } from '../../redux/actions/DatabaseActions';
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
    this.props.getPage(this.state.page);
  }
  nextPage() {
    this.props.getPage(this.state.page + 1);
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.props.getPage(this.state.page -1 );
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    console.log(this.props);
    const { onSubmit } = this.props
    const { page } = this.state
    let pageNumber = this.state.page;
    return (
      <Grid container justify="center" 
        className="" id="creature-entry-form"
      >
        {/* <div className="div-opaque-color stat-container" id="creature-entry-form"> */}
          {page === 1 && (<WizardFormFirstPage onSubmit={this.nextPage} pageNumber={ pageNumber }/>)}
          {page === 2 && (
            <WizardFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
              pageNumber={ pageNumber }
            />
          )}
          {page === 3 && (
            <WizardFormThirdPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
              pageNumber={ pageNumber }
            />
          )}        
          {page === 4 && (
            <WizardFormFourthPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
              pageNumber={ pageNumber }
            />
          )}
          {page === 5 && (
            <WizardFormFifthPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
              pageNumber={ pageNumber }
            />
          )}
          {page === 6 && (
            <WizardFormSixthPage
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
              pageNumber={ pageNumber }
            />
          )}
          {page === 7 && (
            <WizardFormSeventhPage
              previousPage={this.previousPage}
              onSubmit={this.props.submit}
              pageNumber={ pageNumber }
            />
          )}
        {/* </div> */}
      </Grid>
    )
  }
}

export default WizardForm