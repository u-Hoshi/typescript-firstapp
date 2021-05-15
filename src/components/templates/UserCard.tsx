import { Box, Center, Image, Stack, Text, WrapItem } from "@chakra-ui/react";
import axios from "axios";
import { memo, VFC, useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";

type Props = {
  // imageUrl: string;
  id: number;
  userName: string;
  fullName: string;
  onClick: (id: number) => void;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { id, userName, fullName, onClick } = props;

  const [img, setImg] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        setImg(res.data.message);
      })
      .catch(() => {
        console.log("errだよ");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <WrapItem>
      <Box
        w="260px"
        h="260px"
        bg="white"
        borderRadius="10px"
        shadow="mg"
        p={4}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={() => onClick(id)}
      >
        <Stack textAlign="center">
          {loading ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            <Image
              boxSize="160px"
              borderRadius="full"
              m="auto"
              src={img}
              alt="プロフィール画像"
            />
          )}
          <Text fontSize="lg" fontWeight="bold">
            {userName}
          </Text>
          <Text fontSize="sm" color="gray">
            {fullName}
          </Text>
        </Stack>
      </Box>
    </WrapItem>
  );
});
