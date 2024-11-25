import { useState } from 'react';
import NavBar from '../components/NavBar'
import AddEmployee from './AddEmployee';
import Table from './Table';

const ManageEmployees = () => {
    const totalSteps = 2;
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      };
    
      const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
      };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
              return <Table nextStep={nextStep}/>;
            case 2:
              return <AddEmployee nextStep={nextStep} prevStep={prevStep}/>;
            default:
              return null;
          }
    }
    return (
        <div>
            <NavBar />
            {renderStep()}
        </div>
    )
}

export default ManageEmployees