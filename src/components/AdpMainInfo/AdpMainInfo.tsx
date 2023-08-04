import Image from 'next/image'
const AdpMainInfo = ({
  title,
  id,
  img,
}: {
  title: string
  id: number
  img: string
}) => {
  return (
    <div data-testid='adp-main-info'>
      <div className='h-80 w-full relative mb-8'>
        <Image
          src={img}
          alt={title}
          style={{
            objectFit: 'cover',
          }}
          fill
        />
      </div>
      <div className='flex flex-col gap-2 pb-8 text-center'>
        <p className='mb-4'>
          <span className='font-semibold mr-2'>Title:</span>
          {title}
        </p>
        <p>
          <span className='font-semibold mr-2'>Album Id:</span>
          {id}
        </p>
      </div>
    </div>
  )
}

export default AdpMainInfo
