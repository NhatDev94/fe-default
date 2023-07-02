import { useEffect, useRef, useState } from 'react'
import { FormInstance, Upload, message } from 'antd'
import { ColumnsItemInterface } from '../../interfaces'

interface InitValueInterface {
    uid?: number | string,
    name?: string,
    url?: string,
}

interface UploadPropsInterface {
    col: ColumnsItemInterface,
    form: FormInstance,
    initialValues?: InitValueInterface,
}

const MAX_SIZE = 2
const MAX_COUNT = 5

const UploadComponent = (props: UploadPropsInterface) => {
    const limitSize: any = useRef()
    const limitCount: any = useRef()

    const { col, form, initialValues } = props
    const [files, setFiles] = useState<any[]>([])

    useEffect(() => {
        if (initialValues) {
            const files = [{
                name: initialValues?.name,
                uid: initialValues?.uid || -1,
                url: initialValues?.url
            }]
            setFiles(files || [])
        }
    }, [initialValues])

    const validateSize = (size: number) => {
        if (size > MAX_SIZE * 1024 * 1024) {
            return false
        }
        return true
    }

    const validateCount = (count: number) => {
        if (count > MAX_COUNT) {
            return false
        }
        return true
    }

    const handleChange = async (value: any) => {
        clearTimeout(limitSize?.current)
        clearTimeout(limitCount?.current)
        const {file, fileList} = value
        const allowCount = validateCount(fileList?.length)
        if (!allowCount) {
            limitCount.current = setTimeout(() => {
                message.error('So luong file khong duoc qua ' + MAX_COUNT)
            }, 100)
            return
        }
        const allowSize = validateSize(file?.size)
        if (!allowSize) {
            limitSize.current = setTimeout(() => {
                message.error('File khong duoc phep vuot qua ' + MAX_SIZE + 'MB')
            }, 100)
            return
        }
        if (file?.url) return
        const reader = new FileReader()
        reader.onload = (e: ProgressEvent<FileReader>) => {
            file.url = e.target?.result
        }
        reader.readAsDataURL(file)
        setFiles([...files, file])

        setTimeout(() => {
            // phai bo code vao settimeout moi lay dc url
            const newFiles = [...files, file]?.map((item: any) => {
                return {
                    uid: item?.uid,
                    name: item?.name?.replaceAll(' ', ''),
                    url: item?.url,
                    size: item?.size,
                    lastModified: item?.lastModified,
                    type: item?.type
                }
            })
            form.setFieldsValue({ [col?.name]: newFiles })
        }, 50)
    }

    const handleRemove = (value: any) => {
        const data = form.getFieldValue([col?.name])
        const newData = data?.filter((item: any) => item?.uid !== value?.uid)
        setFiles(newData)
        form.setFieldsValue({ [col?.name]: newData })
    }

    return (
        <Upload
            className='w-full h-14 '
            customRequest={() => {
                return true
            }}
            beforeUpload={() => false}
            name={col?.name}
            fileList={files}
            listType='picture'
            multiple={true}
            onChange={handleChange}
            onRemove={handleRemove}
        >
            <div className='w-full h-full px-4 py-1 border border-black/10 rounded-sm'>Upload File</div>
        </Upload>
    )
}

export default UploadComponent
