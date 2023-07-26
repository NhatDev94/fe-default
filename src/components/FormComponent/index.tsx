import { useEffect } from 'react'
import { Form, FormInstance } from 'antd'
import UploadComponent from '../UploadComponent'
import { ColumnsItemInterface } from '../../interfaces'
import Input from './Input'
import { DatePicker } from '..'

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
    switch (col?.formItem?.type) {
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
      case 'date':
        return <DatePicker />
      default:
        return <Input placeholder={`Please enter ${col?.title?.toLowerCase()}...`} />
    }
  }

  return (
    <div className=''>
      <Form
        initialValues={values}
        form={form}
      >
        {
          columns?.map((col: ColumnsItemInterface, index: number) => {
            return (
              <div className='' key={index}>
                <h4 className='w-full capitalize font-semibold'>
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
      </Form>
    </div>
  )
}

export default FormComponent
