import {FC, useState} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import { Button, Form, Modal } from 'react-bootstrap';
import { FeedsWidget4 } from '../../../../../_metronic/partials/widgets';

const Step1: FC = () => {
  const [teamMembers, setTeamMembers] = useState<{ name: string }[]>([]);
  const [show, setShow] = useState(false);
const [inputValue, setInputValue] = useState('');
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
 };
 const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
 };

 
 const addMember = (memberName: string) => {

   setTeamMembers([...teamMembers, { name: memberName }]);
   setShow(false)
  
 };
 
  return (
    // <div className='w-100'>
    //   <div className='pb-10 pb-lg-15'>
    //     <h2 className='fw-bolder d-flex align-items-center text-gray-900'>
    //     Étape 1: Informations sur l'Équipe
    //               <i
    //         className='fas fa-exclamation-circle ms-2 fs-7'
    //         data-bs-toggle='tooltip'
    //         title='Billing is issued based on your selected account type'
    //       ></i>
    //     </h2>

    //     <div className='text-gray-500 fw-bold fs-6'>
    //       If you need more info, please check out
    //       <a href='/dashboard' className='link-primary fw-bolder'>
    //         {' '}
    //         Help Page
    //       </a>
    //       .
    //     </div>
    //   </div>

      
    // </div>
<div className='fv-row col-lg-12'>
        
          <div className='col-lg-12 '>
            <Field
           onClick={handleShow}
              type='radio'
              className='btn-check'
              name='accountType'
              value='personal'
              
              id='kt_create_account_form_account_type_personal'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
              htmlFor='kt_create_account_form_account_type_personal'
            >
              <KTIcon iconName='add-item' className='fs-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-gray-900 fw-bolder d-block fs-4 mb-2'>   Ajouter un Nouveux membre</span>
                
              </span>
            </label>
          </div>

        

          <div className='text-danger mt-2'>
            <ErrorMessage name='accountType' />
          </div>
          <Modal show={show} onHide={handleClose}>
 <Modal.Header closeButton>
   <Modal.Title>Add Member</Modal.Title>
 </Modal.Header>
 <Modal.Body>
   <Form>
     <Form.Group controlId="formBasicEmail" >
       <Form.Label className='fs-6 fw-bold'>Nom du Membre</Form.Label>
       <Form.Control type="text" placeholder="Enter member name" value={inputValue} onChange={handleInputChange} />
       <Form.Label className='fs-6 fw-bold'>Adresse Email</Form.Label>
       <Form.Control type="text" placeholder="Enter member name" value={inputValue} onChange={handleInputChange1} />
       <Form.Label className='fs-6 fw-bold' >Adresse Email</Form.Label>
       <Form.Control type="file" placeholder="Enter member name"  />
       <Form.Label className='fs-6 fw-bold' >Rôle du Joueur</Form.Label>
       <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
     </Form.Group>
     {/* <Form.Group controlId="formBasicEmail">
    </Form.Group>   
      <Form.Group controlId="formBasicEmail">
       <Form.Label>Adresse Email</Form.Label>
       <Form.Control type="text" placeholder="Enter member name" value={inputValue} onChange={handleInputChange} />
     </Form.Group>
     <Form.Group controlId="formBasicEmail">
       <Form.Label c>Adresse Email</Form.Label>
       <Form.Control type="file" placeholder="Enter member name" value={inputValue} onChange={handleInputChange} />
     </Form.Group> */}
     {/* <Form.Group controlId="formBasicEmail">
     
     <Form.Label >Rôle du Joueur</Form.Label>

            <div className='col-12'>
              <Field as='select' name='cardExpiryYear' className='form-select'>
                <option></option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>

              </Field>
              <div className='text-danger mt-2'>
                <ErrorMessage name='cardExpiryYear' />
              </div>
            </div>
         
     </Form.Group> */}
    
   </Form>
 </Modal.Body>
 <Modal.Footer>
   <Button variant="secondary" onClick={handleClose}>
     Close
   </Button>
   <Button variant="danger" onClick={() => addMember(inputValue)}>
     Add
   </Button>
 </Modal.Footer>
</Modal>

 <form>

 {teamMembers.map((member, index) => (
  teamMembers.length > 0 ? (
  <div key={index}>
    <FeedsWidget4 className='mb-5 mb-xl-8' memberName={member.name} />
  </div> )
  : (
    <p>No team members added yet.</p>
  
 )))}
   
   
   
   </form>


    
         
        </div>
  
  )
}

export {Step1}
