export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type landingPageProps = {
  data: {
    attributes: {
      logo: LogoProps
    }
  }
}
