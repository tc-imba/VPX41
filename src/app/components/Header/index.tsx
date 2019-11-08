import * as React from 'react';
import * as _ from 'lodash';
// import { TodoTextInput } from 'app/components/TodoTextInput';
// import { TodoModel } from 'app/models/TodoModel';
import {
  // Divider,
  Step,
  StepLabel,
  Stepper,
  Typography
} from '@material-ui/core';
import { ReportStep, REPORT_STEP_LABELS } from 'app/constants/steps';

export interface HeaderProps {
  activeStep: ReportStep;
}

export interface HeaderState {
  /* empty */
}

export class Header extends React.Component<HeaderProps, HeaderState> {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default Header;
