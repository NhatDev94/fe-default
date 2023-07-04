import classNames from 'classnames'
import {ImageInterface} from '../../interfaces'

interface PropsInterface {
    images?: ImageInterface[]
}

const PostMediaCreate = (props: PropsInterface) => {
    const { images } = props
    const length = images?.length || 0

    return (
        <div className=' rounded-lg overflow-hidden'>
            <div
                className={classNames('overflow-hidden', {
                    'h-[320px] max-h-[320px]': length === 1,
                    'w-full h-[160px] max-h-[160px]': length > 1,
                    'flex items-center': length === 2
                })}
            >
                <div className={`h-full overflow-hidden ${length !== 2 ? 'w-full' : 'w-1/2 max-w-[50%]'}`}>
                    <img src={images && images[0]?.url} alt='image' className='w-full h-full object-cover' />
                </div>
                {
                    length === 2 && (
                        <div className='w-1/2 max-w-[50%] h-full overflow-hidden'>
                            <img src={images && images[1]?.url} alt='image' className='w-full h-full object-cover' />
                        </div>
                    )
                }
            </div>

            {
                length > 2 && (
                    <div className='max-h-[160px] flex items-center justify-center overflow-hidden'>
                        <div className='w-1/3 max-w-[33.33%] h-full overflow-hidden'>
                            <img src={images && images[1]?.url} alt='image' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-1/3 max-w-[33.33%] h-full overflow-hidden'>
                            <img src={images && images[2]?.url} alt='image' className='w-full h-full object-cover' />
                        </div>
                        <div className='w-1/3 max-w-[33.33%] h-full overflow-hidden'>
                            <img src={images && images[3]?.url} alt='image' className='w-full h-full object-cover' />
                        </div>
                    </div>

                )
            }
        </div >
    )
}

export default PostMediaCreate
