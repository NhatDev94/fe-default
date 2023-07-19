import { useEffect } from 'react'
import { Form, FormInstance, Input } from 'antd'
import UploadComponent from '../UploadComponent'
import { ColumnsItemInterface } from '../../interfaces/ColumnInterface'
import { CustomSelect } from '..'

import './index.css'

interface FormPropsInterface {
  values?: any,
  columns: ColumnsItemInterface[],
  form: FormInstance
}

const FormComponent = (props: FormPropsInterface) => {
  const { values, columns, form } = props

  useEffect(() => {
    form.setFieldsValue(values)
  }, [values, form])

  const renderInput = (col: ColumnsItemInterface) => {
    const placeholder = col?.formItem?.placeholder || `Please enter ${col?.title?.toLowerCase()}...`
    switch (col?.formItem?.type) {
      case 'custom-select':
        return (
          <CustomSelect
            placeholder={placeholder}
            optionList={col?.formItem?.optionList || []}
          />
        )
      case 'upload':
        return (
          <UploadComponent
            col={col}
            form={form}
            initialValues={values[col?.name]}
            multiple={col?.formItem?.multiple}
            handleUpload={col?.formItem?.handleUpload}
          />
        )
      default:
        return <Input placeholder={placeholder} />
    }
  }

  return (
    <div className=''>
      <Form
        initialValues={values}
        form={form}
      >
        <div className='w-full grid grid-cols-8 gap-x-2'>
          {
            columns?.map((col: ColumnsItemInterface, index: number) => {
              const colSpan = 'col-span-' + col?.formItem?.col || 8
              return (
                <div className={`${colSpan}`} key={index}>
                  <h4 className='w-full capitalize font-semibold text-xs mb-2'>
                    {col?.title}
                  </h4>
                  <Form.Item
                    name={col?.name}
                    rules={col?.formItem?.rules}
                  >
                    {renderInput(col)}
                  </Form.Item>
                </div>
              )
            })
          }
        </div>
      </Form>
    </div>
  )
}

export default FormComponent
