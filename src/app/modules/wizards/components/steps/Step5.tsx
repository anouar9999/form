import {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'

const Step5: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-gray-900'>Your Are Done!</h2>

        <div className='text-gray-500 fw-bold fs-6'>
          If you need more info, please
          <Link to='/auth/login' className='link-primary fw-bolder'>
            {' '}
            Sign In
          </Link>
          .
        </div>
      </div>

      <div className='mb-0'>
      <>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckDefault"
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
    accepter les termes et conditions.

    </label>
  </div>
  <div className='pt-6'>

  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckChecked"
    
    />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    onsentement à la collecte et au traitement des données personnelles.
    </label>
  </div>
</>


        
      </div>
    </div>
  )
}

export {Step5}
