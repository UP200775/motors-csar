import pegassi from '../../assets/images/Pegassi-Logo.png'
import zentorno from '../../assets/images/zentorno.jpg'

export const NewCar = () => {
  return (
    <article className="bg-SoftOrange w-[360px]">
      <div className='flex pl-5 items-center'>
        <img className='w-[50px] h-[50px]' src={pegassi} alt="" />

        <div className='pl-5'>
          <h1>Zentorno</h1>
          <h6 className='text-[13px]'>Disponible</h6>
        </div>
        <h1>$40,000</h1>
      </div>
      <div>
        <img src={zentorno} className='w-[360px] h-[200px] p-1'/>
      </div>

      <div>
        
      </div>
    </article>
  )
}
