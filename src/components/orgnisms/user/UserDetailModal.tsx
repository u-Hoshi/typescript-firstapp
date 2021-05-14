import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="none"
      autoFocus={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton pb={6} />
        <ModalBody mx={4}>
          <Stack p={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value="Hoshi" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value="u-Hoshi" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>email</FormLabel>
              <Input value="u-Hoshi@hoshi.com" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>TEl</FormLabel>
              <Input value="000-222-3333" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
