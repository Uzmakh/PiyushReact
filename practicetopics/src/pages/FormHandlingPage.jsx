import SimpleForm from '../ControlledComponents/SimpleForm'
import MultiInputForm from '../ControlledComponents/MultiInputForm'
import AdvancedForm from '../ControlledComponents/AdvancedForm'
import UncontrolledForm from '../ControlledComponents/UncontrolledForm'
import BasicValidation from '../ControlledComponents/BasicValidation'

const FormHandlingPage = () => {
  return (
    <div>
      <SimpleForm />
      <MultiInputForm />
      <AdvancedForm />
      <UncontrolledForm />
      <BasicValidation/>
    </div>
  )
}

export default FormHandlingPage
