import React from "react";
import { useParams } from "react-router-dom";
import {
  Wrap,
  Heading,
  Flex,
  Box,
  Image,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchArtistInfo } from "../api";
import Albums from "../components/Albums";
import Tracks from "../components/Tracks";

export default function Detail() {
  const { artist_url } = useParams();

  // FETCH ARTIST INFO
  const artistInfoData = useQuery(
    ["info", artist_url],
    () => fetchArtistInfo(artist_url),
    {
      select: (data) => data.data.artist,
      retry: false,
    }
  );

  const artistInfo = artistInfoData?.data;

  return (
    <Wrap p={5}>
      <Box
        role={"group"}
        p={5}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        w={"full"}
      >
        <Box
          p={5}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
        >
          <Flex>
            <Image
              rounded={"lg"}
              width={20}
              height={20}
              objectFit={"cover"}
              src={artistInfo?.image[1]["#text"]}
            />
            <Box p={5}>
              <Heading fontSize={30} fontFamily={"body"} fontWeight={700}>
                {artistInfo?.name}
              </Heading>
              <Divider py={1} />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Flex>
        <Box
          role={"group"}
          p={5}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          w={"full"}
        >
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700} m={3}>
            TOP ALBUMS
          </Heading>

          <Divider my={3}/>

          <Albums />
        </Box>

        <Box
          role={"group"}
          p={5}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          w={"full"}
        >
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={700} m={3}>
            TOP TRACKS
          </Heading>

          <Divider my={3}/>

          <Tracks />
        </Box>
      </Flex>
    </Wrap>
  );
}
