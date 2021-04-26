const chooseIconSrc = (icon) =>
  process.env.REACT_APP_DEV === "true"
    ? icon
    : `${process.env.REACT_APP_BUILD_PATH}${icon}`;

export default chooseIconSrc;
