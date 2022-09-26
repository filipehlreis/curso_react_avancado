export type TechIcon = {
  title: string
  icon: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type landingPageFullProps = {
  data: {
    attributes: landingPageProps
  }
}

export type landingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
}
