const icons = {
  github: '/assets/icons/github.svg',
  linkedin: '/assets/icons/linkedin.svg',
  metamask: '/assets/icons/metamask.svg',
  ethereum: '/assets/icons/ethereum.svg'
}

// eslint-disable-next-line react/prop-types
const SocialIcon = ({ Icon }) => {
  return (
    <button className="flex p-4 justify-center items-center gap-[10px] rounded-[19px] border border-[#DFDFDF] bg-white">
      <img src={icons[Icon]} alt="" />
    </button>
  )
}

export default SocialIcon