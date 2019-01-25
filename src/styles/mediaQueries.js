const size = {
  phoneLarge: 375,
  tablet: 768,
  desktop: 1024,
}

export const device = {
  phoneLarge: `only screen and (min-device-width: ${
    size.phoneLarge
  }px) and (max-device-width: ${size.tablet - 1}px)`,
  tablet: `only screen and (min-device-width: ${
    size.tablet
  }px) and (max-device-width: ${size.desktop - 1}px)`,
  desktop: `only screen and (min-width: ${size.desktop}px)`,
}
