import {FC, useState} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import { Modal, Button, Form } from 'react-bootstrap';
import { FeedsWidget4 } from '../../../../../_metronic/partials/widgets';

const Step2: FC = () => {
 
 
  
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-gray-900'>Détails du Capitain</h2>

        <div className='text-gray-500 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

     

      <div className='mb-10 fv-row'>
      <label className='fs-6 fw-bold form-label required'>Nom du Capitaine</label>


        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='accountName'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='accountName' />
        </div>
      </div>
        <div className='fv-row mb-10'>
        <label className='fs-6 fw-bold form-label required'>Adresse Email</label>

        <Field name='businessEmail' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessEmail' />
        </div>
      </div>
      <div className='mb-10 fv-row'>
      <label className='fs-6 fw-bold form-label required'>Numéro de Téléphone</label>

        <Field
          type='number'
          className='form-control form-control-lg form-control-solid'
          name='accountName'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='accountName' />
        </div>
      </div>
      <div className='mb-10 fv-row'>
      <label className='fs-6 fw-bold form-label required'>Pseudo dans le Jeu</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='accountName'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='accountName' />
        </div>
      </div>
   


    </div>
  )
}

export {Step2}
