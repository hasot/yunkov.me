import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoPrint } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Hello, I&apos;m a front-end developer based in Georgia!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Dmitry Yunkov
                    </Heading>
                    <p>Digital surfer ( Developer )</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/yunkov.png"
                            alt="Profile image"
                            borderRadius="full"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I’m a front end developer. As well I have all the necessary knowledge of basic
                    relevant technologies. My core skills are JavaScript, Typesctipts, ReactJS. When
                    not online, I love travel a lot with my friend. I have been more 5 countries
                    and uncountable cities for last year. I also do various sports from basketball
                    to various extreme sports. Currently, I'am working in a great Overgear team and get
                    a lot of new experience every day
                </Paragraph>
                {/* <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/works"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        My portfolio
                    </Button>
                </Box> */}
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1993</BioYear>
                    Born in Beloyarsky (Белоярский ХМАО), Russia.
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Completed the Bachelor&apos;s Program in the Information technology of
                    communication systems at Southern Federal University (former Rostov State University)
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Worked at <Link
                        as={NextLink}
                        href="https://www.nosota.com/"
                        passHref
                        target="_blank"
                    >
                        Nosota
                    </Link> as a full-stack developer(Angular, Typescript, Java)! Rostov-on-Don, Russia
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Worked at <Link
                        as={NextLink}
                        href="https://www.motorsport.com/"
                        passHref
                        target="_blank"
                    >
                        Motorsport.com
                    </Link> as a front-end developer (ReactJS, Javascript) ! Rostov-on-Don, Russia
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Worked at <Link
                        as={NextLink}
                        href="https://bcs.ru/"
                        passHref
                        target="_blank"
                    >
                        FG BCS
                    </Link> as a front-end developer (ReactJS, Typescript)! Moscow, Russia
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Remote remotely Worked at <Link
                        as={NextLink}
                        href="https://inno.tech/"
                        passHref
                        target="_blank"
                    >
                        Innotech
                    </Link> as a front-end developer (ReactJS, Typescript, Storybook, Jest)! Moscow, Russia
                </BioSection>
                <BioSection>
                    <BioYear>2022 to present</BioYear><br />
                    Working remotely at <Link
                        as={NextLink}
                        href="https://overgear.com/"
                        passHref
                        target="_blank"
                    >
                        Overgear
                    </Link> as a front-end developer (ReactJS, Typescript, Storybook, Jes, GraphQL)! Nicosia, Cyprus
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    bascketball,
                    music,
                    traveling,
                    a lot of food
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/hasot" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @hasot
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/yunkovv" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                                @yunkovv
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/dmitry-yunkov-a2a97683/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoLinkedin />}
                            >
                                @Dmitry Yunkov
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://instagram.com/yunkovv" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                            >
                                @yunkovv
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/resume.pdf" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoPrint />}
                            >
                                Dmitry Yunkov CV
                            </Button>
                        </Link>
                    </ListItem>
                </List>
                {/* <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/posts"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        Popular posts
                    </Button>
                </Box> */}
            </Section>
        </Container>
    </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'