// eslint-disable-next-line react/prop-types
const Button = ({ title }) => {
  return(
    <button className="flex w-[191px] p-[19px] justify-center items-center gap-[10px] rounded-[8px] bg-[#13143C]">
      <p className="text-white font-[18px]">{title}</p>
    </button>
  )
}

export default Button