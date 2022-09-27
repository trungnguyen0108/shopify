import {
  Button,
  Card,
  Stack, Heading, ButtonGroup, TextContainer, Icon, TextStyle
} from "@shopify/polaris";
import {
  CircleCancelMinor
} from '@shopify/polaris-icons';

export function CardSectionHome({ heading, content, plainButton, baseButton }) {
  return (
    <Card.Section>
      <Stack distribution="leading" alignment="center">
        <Stack.Item>
          <div style={{ backgroundColor: "rgb(245, 246, 248)", height: "100%", padding: "1rem", borderRadius: "4px", }}>
            <Icon
              source={CircleCancelMinor}
              color="base"
              backdrop="true" />
          </div>
        </Stack.Item>
        <Stack.Item fill>
          <TextContainer>
            <Heading><TextStyle variation="strong">{heading}</TextStyle></Heading>
            <p>{content}</p>
          </TextContainer>
        </Stack.Item>
        <Stack.Item>
          <ButtonGroup>
            <Button plain>{plainButton}</Button>
            <Button>{baseButton}</Button>
          </ButtonGroup>
        </Stack.Item>
      </Stack>
    </Card.Section>
  )
}