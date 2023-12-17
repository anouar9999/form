
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
  memberName: string
}

const FeedsWidget4: React.FC<Props> = ({className, memberName}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body pb-0'>
        {/* begin::Header */}
        <div className='d-flex align-items-center mb-5'>
          {/* begin::User */}
          <div className='d-flex align-items-center flex-grow-1'>
            {/* begin::Avatar */}
            <div className='symbol symbol-45px me-5'>
              <img src={toAbsoluteUrl('/media/avatars/300-7.jpg')} alt='' />
            </div>
            {/* end::Avatar */}

            {/* begin::Info */}
            <div className='d-flex flex-column'>
              <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                {memberName}
              </a>
              <span className='text-gray-500 fw-semibold'>Last week at 10:00 PM</span>
            </div>
            {/* end::Info */}
          </div>
          {/* end::User */}

          {/* begin::Menu */}
          <div className='my-0'>
            <button
              type='button'
              className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTIcon iconName='category' className='fs-2' />
            </button>
            <Dropdown1 />
          </div>
          {/* end::Menu */}
        </div>
        {/* end::Header */}

        {/* begin::Post */}
        <div className='mb-7'>
          {/* begin::Text */}
       
          {/* end::Text */}

          {/* begin::Toolbar */}
          
          {/* end::Toolbar */}
        </div>
        {/* end::Post */}

        {/* begin::Separator */}
       
        {/* end::Separator */}

        {/* begin::Reply input */}
      
        {/* edit::Reply input */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {FeedsWidget4}
