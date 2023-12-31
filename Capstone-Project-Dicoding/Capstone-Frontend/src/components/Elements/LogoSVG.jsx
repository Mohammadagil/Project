import PropTypes from 'prop-types';

const LogoSVG = ({ socialMedia }) => {
  return (
    <ul className="menu menu-horizontal mt-0 rounded-box">
      {socialMedia.map((platform) => (
        <li key={platform.name}>
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
            data-tip={platform.name}
          >
            <img
              src={`/logo-sosmed/logo-${platform.name.toLowerCase()}.svg`}
              alt={platform.name}
              className="h-5 w-5"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

LogoSVG.propTypes = {
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LogoSVG;
