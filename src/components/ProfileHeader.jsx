import Button from "./Button";
import SocialIcon from "./SocialIcon";

const ProfileHeader = () => {
  return (
    <div className="max-w-[1051px] h-[456px] bg-white m-10 rounded-[29px] p-[42px] inline-flex items-end gap-[249px]">
      <div className="flex flex-col items-start gap-5">
        {/* Contains the image, name, @, description and social media */}
        <img
          className="rounded-[39px] w-[100px] h-[100px]"
          src="/assets/images/pexels-daniel-torobekov-4890259.jpg"
          alt=""
        />
        <div className="flex flex-col items-start gap-2">
          <div className="font-bold text-[#13143C] text-[24px]">MetaMask</div>
          <div className="flex flex-col items-start gap-2">
            <div className="font-normal text-[#13143C] text-[16px]">
              @metaMask
            </div>
            <div className="font-normal text-[#13143C] text-[18px] break-words max-w-[289px]">
              MetaMask brings Ethereum to your web browser
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          {/* Social media icons in row */}
          <SocialIcon Icon="github" />
          <SocialIcon Icon="linkedin" />
          <SocialIcon Icon="metamask" />
          <SocialIcon Icon="ethereum" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-[96px]">
        <div className="flex flex-col items-start gap-2">
          <div className="flex w-[414px] items-center gap-4">
            <p className="text-[#13143C] font-[18px]">6/8 Organizations</p>
            <img className="w-8 h-8" src="/assets/icons/info.svg" alt="" />
          </div>
          <div className="flex items-start h-[13px]">
            <div className="w-[331px] self-stretch h-full bg-[#F17A37] progressBarFill"></div>
            <div className="w-[83px] h-full bg-[#DFDFDF] progressBar"></div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-[14px] w-full">
          <p className="font-bold">
            <span className="font-black">4K</span> Followers
          </p>
          <Button title="Follow" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
