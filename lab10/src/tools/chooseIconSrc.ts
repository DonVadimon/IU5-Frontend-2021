const chooseIconSrc = (icon: string) =>
  process.env.REACT_APP_DEV === "true"
    ? icon
    : `${process.env.REACT_APP_LAB10_BUILD_PATH}${icon}`;

export default chooseIconSrc;
