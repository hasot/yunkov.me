import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'
import { IoPizzaOutline } from 'react-icons/io5'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  > svg {
    transform: rotate(140deg);
    transition: 200ms ease;
    margin-right: 8px;
  }
  &:hover > svg {
    transform: rotate(180deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <IoPizzaOutline />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Dmitry Yunkov
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo;