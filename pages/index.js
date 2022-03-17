import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Text, Button} from "@chakra-ui/react"


const Banner = ({Purpose, Title1, Title2, desc1, desc2, linkName, buttonText, imageurl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
     <Image src={imageurl} width={500} height={300} alt="banner"/>
     <Box p="5">
       <Text color="gray.500" fontSize="sm" fontWeight="medium">{Purpose}</Text>
       <Text fontSize="3xl" fontWeight="bold">{Title1} <br /> {Title2}</Text>
       <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1} <br /> {desc2}</Text>
       <Button fontSize="xl" bg="blue.300">
       <Link href={linkName}>{buttonText}</Link>
       </Button>
     </Box>
  </Flex>
)


export default function Home() {
  return (
    <Box>
    <h1>hello world</h1>
    <Banner 
         Purpose="Rent a Home"
         Title1="Rental Homes for"
         Title2="Everyone"
         desc1="Explore Apartments, Villas, Homes"
         desc2="and More"
         buttonText="Explore REnting"
         linkName="/search?purpose=for-rent"
         imageurl="https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?k=20&m=1272128530&s=612x612&w=0&h=Hj8rZE5IWhiV3tCPr9hk7K7_jJ4iR1L_lBABCHqgQR8="
          />

          <Flex flexWrap="wrap">
            {/* fetch the properties and map here */}
          </Flex>

    <Banner 
         Purpose="Buy a Home"
         Title1="Find Buy and Own Your"
         Title2="DReam Home"
         desc1="Explore Apartments, Villas, Homes"
         desc2="and More"
         buttonText="Explore Buying"
         linkName="/search?purpose=for-rent"
         imageurl="https://media.istockphoto.com/photos/house-picture-id531712331?k=20&m=531712331&s=612x612&w=0&h=B0M3gHypsX4vTvLBGVGrFYQ2Bgd49cse8YhO0BigRfQ="
          />
          {/* fetch the properties and map here */}
    </Box>
  )
}
