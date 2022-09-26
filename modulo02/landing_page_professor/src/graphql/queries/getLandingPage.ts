const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      data {
        id
        attributes {
          alternativeText
          url
        }
      }
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        data {
          attributes {
            alternativeText
            url
          }
        }
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        data {
          attributes {
            alternativeText
            url
          }
        }
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      data {
        attributes {
          ...logo
          ...header
          ...sectionAboutProject
          ...sectionTech
        }
      }
    }
  }
`
export default GET_LANDING_PAGE
