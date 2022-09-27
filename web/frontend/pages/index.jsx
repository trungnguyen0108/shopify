import { TitleBar, useNavigate } from "@shopify/app-bridge-react";
import {
  Button,
  Card,
  Layout,
  Page,
  Banner,
  List,
  Stack, Heading, DisplayText, ButtonGroup, TextContainer, Icon, TextStyle, Link, CalloutCard, FooterHelp
} from "@shopify/polaris";
import {
  CircleCancelMinor
} from '@shopify/polaris-icons';

export default function HomePage() {

  const navigate = useNavigate()

  const bannerHome = (
    <Banner
      title="Trial Mode"
      status="warning"
      action={{ content: 'View plans', url: '' }}
    >
      <p className="text-red-500">
        You are currently on a trial plan. Trials include unlimited test orders, and 5 real orders.
      </p>
      <List type="bullet">
        <List.Item><b>Real orders:</b> 0 used out of 5</List.Item>
      </List>
    </Banner>
  )

  const CardSection = ({ title, content, plainButton, baseButton }) => (
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
            <Heading><TextStyle variation="strong">{title}</TextStyle></Heading>
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

  const cardStarted = (
    <Card title={
      <Stack distribution="equalSpacing">
        <Heading><DisplayText size="small">Getting started</DisplayText></Heading>
        <Heading>
          <ButtonGroup>
            <Button plain>Ask a question</Button>;
            <Button plain>Read the guide</Button>;
          </ButtonGroup>
        </Heading>
      </Stack>
    }>
      <Card.Section>
        <TextContainer>
          <Banner>
            <p><b>Welcome!</b> Thanks for trying Event Ticketing. Here are some short and sweet steps to start selling tickets on Shopify.</p>
          </Banner>
        </TextContainer>

      </Card.Section>
      <CardSection
        title="Create your first event"
        content="Concert, tour, festival, conference, bake sale... you name it!"
        plainButton="Read Guide"
        baseButton="Create event"
      ></CardSection>
      <CardSection
        title="Design your tickets"
        content="Set up branded PDF and Apple wallet tickets."
        plainButton="Read Guide"
        baseButton="Create design"
      ></CardSection>
      <CardSection
        title="Place a test order"
        content="Experience how the customer purchases and downloads their tickets."
        plainButton="Read Guide"
        baseButton="Create order"
      ></CardSection>
      <CardSection
        title="Scan a ticket"
        content="Scan tickets using the camera built into your phone, or rent laser scanners."
        plainButton="Read Guide"
        baseButton="Download app"
      ></CardSection>
      <Card.Section>
        <TextContainer>
          <Heading>Bonus points</Heading>
          <p><Link>Integrate with Shopify email and SMS notifications</Link> so customers can download tickets directly.</p>
          <p><Link>Customize how tickets are displayed on the purchase complete page.</Link></p>
        </TextContainer>
      </Card.Section>
    </Card>
  )

  const cardDownApp = (
    <CalloutCard
      title="Install the check in app"
      illustration="https://gm-shopify-app.s3.amazonaws.com/RoundedIcon.png"
      primaryAction={{ content: 'Download on the App Store' }}
      secondaryAction={{ content: 'How to use the app' }}
    >
      <TextContainer>
        <p>Check in guests by name, or scan their barcode using either the built-in camera barcode scanner or laser barcode scanners (rental required). Fully offline capable, with realtime online sync, and battle tested for large events.</p>
        <Banner>
          <Heading>Your access code to log in is&nbsp;
            <TextStyle variation="code">
              <TextStyle variation="strong">perbpnss</TextStyle>
            </TextStyle>
            &nbsp;and your PIN # is&nbsp;
            <TextStyle variation="code">
              <TextStyle variation="strong">9413</TextStyle>
            </TextStyle>
          </Heading>
        </Banner>
        <p style={{ display: "flex" }}>
          <a href="https://apps.apple.com/vn/app/guest-manager-check-in/id1460267612" target="_blank" style={{ marginRight: 1 + "rem" }}>
            <img src="https://gm-shopify-app.s3.us-east-1.amazonaws.com/app-store-button.svg" />
          </a>
          <a href="https://apps.apple.com/vn/app/guest-manager-check-in/id1460267612" target="_blank">
            <img src="https://gm-shopify-app.s3.us-east-1.amazonaws.com/app-store-mac-button.svg" />
          </a>
        </p>
        <p>
          <TextStyle variation="subdued">Available for iOS and macOS. Android being considered - interested? Get in touch.</TextStyle>
        </p>
      </TextContainer>
    </CalloutCard>
  )

  const cardRentScanners = (
    <CalloutCard
      title="Rent ticket scanners for your event"
      illustration="//cdn0.guestmanager.com/packs/media/shopify/components/overview-rent-66e23295c563631770fa818a0300ca4b.jpg"
      primaryAction={{ content: 'Learn more, pricing' }}
      secondaryAction={{ content: 'Request quote' }}
    >
      <TextContainer>
        <p>Speed up your event check in with Honeywell laser barcode scanners, shipped to your door, directly from us. Laser scanners are not required - you may use the built-in camera scanner on any iOS device instead. We recommend renting laser scanners for events larger than 500 attendees.</p>
        <p>
          <TextStyle variation="subdued">Available in the USA.</TextStyle>
        </p>
      </TextContainer>
    </CalloutCard>
  )

  const pageFooter = (
    <>
      <Layout.Section oneThird>
        <Card title="What's new">
          <Card.Section>
            <Stack spacing="loose" vertical>
              <p>
                Features, fixes, and improvements.
              </p>
              <Stack distribution="trailing">
                <ButtonGroup>
                  <Button>Go to release notes</Button>
                </ButtonGroup>
              </Stack>
            </Stack>
          </Card.Section>
        </Card>
      </Layout.Section>
      <Layout.Section oneThird>
        <Card title="Get help">
          <Card.Section>
            <Stack spacing="loose" vertical>
              <p>
                Quick, helpful support!
              </p>
              <Stack distribution="trailing">
                <ButtonGroup>
                  <Button>Help Docs</Button>
                  <Button primary>Chat with us</Button>
                </ButtonGroup>
              </Stack>
            </Stack>
          </Card.Section>
        </Card>
      </Layout.Section>
      <Layout.Section oneThird>
        <Card title="Feature requests">
          <Card.Section>
            <Stack spacing="loose" vertical>
              <p>
                Can the app be better? Let me know,
              </p>
              <Stack distribution="trailing">
                <ButtonGroup>
                  <Button>Submit request</Button>
                </ButtonGroup>
              </Stack>
            </Stack>
          </Card.Section>
        </Card>
      </Layout.Section>
    </>
  )

  const footerHelp = (
    <FooterHelp>
      Get help{' '}
      <Link>
        using this app.
      </Link>
    </FooterHelp>
  )

  const actionGroups = [
    {
      title: 'Help',
      actions: [{
        content: 'Chat with us', url: '/',
      }, {
        content: 'Give Feedback', url: '/',
      }, {
        content: 'FAQ', url: '/',
      }, {
        content: 'How to\'s', url: '/',
      }, {
        content: 'Getting Started Guide', url: '/'
      }
      ]
    }];

  return (
    <Page
      title="Setup"
      primaryAction={{
        content: "Create event",
        onAction: () => navigate("/events/new")
      }}
    >
      <TitleBar
        title="Setup"
        actionGroups={actionGroups}
      />

      <Layout>
        <Layout.Section fullWidth>
          <div style={{ marginBottom: 2 + 'rem' }}>
            {bannerHome}
          </div>
          {cardStarted}
          {cardDownApp}
          {cardRentScanners}
        </Layout.Section>
        {pageFooter}
        <Layout.Section>
          {footerHelp}
        </Layout.Section>
      </Layout>
    </Page>
  );
}
