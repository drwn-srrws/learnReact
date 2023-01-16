import Image from "../Image/Image";
const WelcomePlaylist = ({ link, name }) => (
  <div>
    <div>
      <Image image={link} />
    </div>
    <div>{name}</div> <div>123</div>
  </div>
);
export default WelcomePlaylist;
