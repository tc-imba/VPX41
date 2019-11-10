import * as React from 'react';
import * as _ from 'lodash';
// import { TodoTextInput } from 'app/components/TodoTextInput';
// import { TodoModel } from 'app/models/TodoModel';
import {
  // Divider,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import {
  ReportStep,
  REPORT_STEP_TYPES,
  REPORT_STEP_LABELS,
  REPORT_STEP_URL
} from 'app/constants/steps';

export interface HeaderProps {
  activeStep: ReportStep;
}

export interface HeaderState {
  /* empty */
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  handleBack() {
    if (this.props.activeStep > 0) {
      // this.props..push(REPORT_STEP_URL[this.props.activeStep - 1]);
    }
  }

  handleNext() {
    if (this.props.activeStep < REPORT_STEP_TYPES.length - 1) {
      // window.location.href = REPORT_STEP_URL[this.props.activeStep + 1];
    }
  }

  render() {
    return (
      <div>
        <Typography align={'center'} variant={'h4'}>
          UM-SJTU-JI Physics Lab (VP141/241) Report Generator
        </Typography>
        {/*<Divider component={'hr'}/>*/}
        <Stepper activeStep={this.props.activeStep} alternativeLabel={true}>
          {_.map(REPORT_STEP_LABELS, (label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {
            this.props.activeStep === 0 ?
              <Button disabled>Back</Button> :
              <Button
                component={Link}
                to={REPORT_STEP_URL[this.props.activeStep - 1]}
              >
                Back
              </Button>
          }
          {
            this.props.activeStep === REPORT_STEP_TYPES.length - 1 ?
              <Button disabled variant={'contained'} color={'primary'}>
                Next
              </Button> :
              <Button
                variant={'contained'}
                color={'primary'}
                component={Link}
                to={REPORT_STEP_URL[this.props.activeStep + 1]}
              >
                Next
              </Button>
          }
        </div>
      </div>
    );
  }
}

export default Header;
