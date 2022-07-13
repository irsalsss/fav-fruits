import { Avatar as AvatarAntd } from 'antd';
import clsx from 'clsx';

const Avatar = ({
  src,
  size,
  text,
  avatarColor,
  wrapperClassname,
  onClick
}) => (
  <div
    role="button"
    tabIndex={-1}
    onClick={onClick}
    className={clsx("relative max-w-max", wrapperClassname)}
  >
    <AvatarAntd
      style={{ backgroundColor: avatarColor }}
      src={src}
      size={size}
    >
      {text}
    </AvatarAntd>
  </div>
);

Avatar.defaultProps = {
  src: null,
  text: '',
  size: 32,
  avatarColor: '#0047B3',
  src: null,
  onClick: null,
  wrapperClassname: '',
};

export default Avatar;
