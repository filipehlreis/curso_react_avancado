import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({ data }: LogoProps) => (
  <S.LogoWrapper
    src={`http://localhost:1337${data.attributes.url}`}
    alt={data.attributes.alternativeText}
  />
)

export default Logo
