import {FC} from 'react'
import {Field, ErrorMessage} from 'formik'

const Step3: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-gray-900'>Informations sur l'Équipe</h2>

        <div className='text-gray-500 fw-bold fs-6'>
          If you need more info, please check out
          <a href='/dashboard' className='link-primary fw-bolder'>
            {' '}
            Help Page
          </a>
          .
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='fs-6 fw-bold form-label required'>Nom de l'Équipe</label>

        <Field name='businessName'  type='text' className='form-control form-control-lg form-control-solid'  />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessName' />
        </div>
      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='fs-6 fw-bold form-label required'>Logo de l'Équipe</span>
        </label>

        {/* <Field
          name='businessDescriptor'
          as='file'
          className='form-control form-control-lg form-control-solid'
        /> */}
        <div className="mb-3">
  <input className="form-control" type="file" id="formFile"/>
</div>
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessDescriptor' />
        </div>

        <div className='form-text'>
          Customers will see this shortened version of your statement descriptor
        </div>
      </div>

      {/* <div className='fv-row mb-10'>
        <label className='form-label required'>Corporation Type</label>

        <Field
          as='select'
          name='businessType'
          className='form-select form-select-lg form-select-solid'
        >
          <option></option>
          <option value='1'>S Corporation</option>
          <option value='1'>C Corporation</option>
          <option value='2'>Sole Proprietorship</option>
          <option value='3'>Non-profit</option>
          <option value='4'>Limited Liability</option>
          <option value='5'>General Partnership</option>
        </Field>
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessType' />
        </div>
      </div> */}

      <div className='fv-row mb-10'>
        <label className='fs-6 fw-bold form-label required'>Description de l'Équipe</label>

        <Field
          as='textarea'
          name='businessDescription'
          className='form-control form-control-lg form-control-solid'
          rows={3}
        ></Field>
      </div>

      {/* <div className='fv-row mb-0'>
        <label className='fs-6 fw-bold form-label required'>Contact Email</label>

        <Field name='businessEmail' className='form-control form-control-lg form-control-solid' />
        <div className='text-danger mt-2'>
          <ErrorMessage name='businessEmail' />
        </div>
      </div> */}
    </div>
  )
}

export {Step3}