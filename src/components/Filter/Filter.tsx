'use client'

const Filter = ({
  className,
  handleChange,
  numberOfResults,
}: {
  className?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  numberOfResults: number
}) => {
  return (
    <div
      data-testid='filter'
      className={`${className} w-full flex flex-col justify-around`}
    >
      <p className='flex items-center rounded-base text-white text-lg mb-2'>
        <span className='mr-2'>{numberOfResults}</span>
        Albums
      </p>
      <input
        onChange={handleChange}
        type='text'
        placeholder='Search'
        className='p-4 w-full rounded-lg text-gray-600'
      />
    </div>
  )
}

export default Filter
