import Head from 'next/head';
import dynamic from 'next/dynamic'
import NavBar from '../navbar.js';
import { Box, Container } from '@chakra-ui/react';
import VoxelDogLoader from '../gltf-loader'
import Footer from '../footer.js';

const LazyVoxelDog = dynamic(() => import('../gltf-model'), {
    ssr: false,
    loading: () => <VoxelDogLoader />
})
const Main = ({ children, router }) => {

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Dmitry Yunkov - Homepage</title>
                <meta name="description" content="Dmitry Yunkov personal website" />
                <meta name="og:title" property="og:title" content="Dmitry Yunkov - Homepage" />
            </Head>

            <NavBar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                <LazyVoxelDog />
                {children}
                <Footer />
            </Container>
        </Box>)
}

export default Main;