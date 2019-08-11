function getParitialVisibilityGutter(
  responsive,
  partialVisbile,
  serverSideDeviceType,
  clientSideDeviceType
) {
  let gutter = 0;
  const deviceType = clientSideDeviceType || serverSideDeviceType;
  if (partialVisbile && deviceType) {
    gutter = responsive[deviceType].paritialVisibilityGutter;
  }
  return gutter;
}

function getWidthFromDeviceType(deviceType, responsive) {
  let itemWidth;
  if (responsive[deviceType]) {
    const { items } = responsive[deviceType];
    itemWidth = (100 / items).toFixed(1);
  }
  return itemWidth;
}

function getItemClientSideWidth(props, slidesToShow, containerWidth) {
  return Math.round(
    containerWidth / (slidesToShow + (props.centerMode ? 1 : 0))
  );
}

export {
  getWidthFromDeviceType,
  getParitialVisibilityGutter,
  getItemClientSideWidth
};
