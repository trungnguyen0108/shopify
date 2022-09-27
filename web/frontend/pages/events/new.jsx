import { Layout, Page, Card, FormLayout, TextField, ChoiceList, Badge, TextContainer, Select, Stack, Subheading, Button, ButtonGroup, Collapsible, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useState, useCallback } from 'react';

export default function Events() {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('')
  const [selected, setSelected] = useState(['hidden']);

  const handleChange = useCallback((value) => setSelected(value), []);
  // const breadcrumbs = [{ content: "QR codes", url: "/" }];
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

  const options = [
    { label: 'Choose...' },
    { label: 'Tân Bình', value: 'Tân Bình' },
    { label: 'Add new location...' },
  ];


  const eventDetails = (
    <Layout.AnnotatedSection
      title="Event details"
      description="Please provide some basic information about your event, including name, date, and the location."
    >
      <Card sectioned>
        <FormLayout>
          <ChoiceList
            title="Event type"
            choices={[
              {
                label: 'One time',
                value: 'One time',
                helpText:
                  'A one time event, such as a concert.',
              },
              {
                label: 'Multi date',
                value: 'Multi date',
                helpText:
                  'Sell tickets to individual days or timeslots, such as a tour, or class.',
              },
              {
                label: <TextContainer>Recurring <Badge><strong>BETA</strong></Badge></TextContainer>,
                value: 'Recurring',
                helpText:
                  'An event that repeats based on a schedule.',
              },
            ]}
            selected={selected}
            onChange={handleChange}
          />

          <TextField
            value={email}
            // onChange={handleEmailChange}
            label="Event name"
            type="text"
            autoComplete="email"
            placeholder="e.g. World Tour"
            helpText={
              <span>
                This will be used to name the product in Shopify.
              </span>
            }
          />

          <Select
            requiredIndicator="true"
            label="Location"
            options={options}
            // onChange={handleSelectChange}
            labelAction={{ content: 'Add new location' }}
            value={selected}
            helpText={
              <span>
                Choose an existing location from your account, or click 'Add new location' above.
              </span>
            }
          />
        </FormLayout>
      </Card>
    </Layout.AnnotatedSection>
  )

  const dates = (
    <Layout.AnnotatedSection
      title="Dates"
      description="For tours, or other multi-date events, add them here."
    >
      <Card>
        <Card.Section>
          <Stack distribution="leading" alignment="center">
            <Stack.Item fill>
              <Subheading>OCTOBER 4, 2022 9:00 AM +07 - 12:00 PM AT --</Subheading>
            </Stack.Item>
            <Stack.Item>
              <ButtonGroup>
                <Button plain>Cancel</Button>
                <Button plain destructive>Delete</Button>
              </ButtonGroup>
            </Stack.Item>
          </Stack>
        </Card.Section>

        <Card.Section>
          <Collapsible
            open={open}
            id="basic-collapsible"
            transition={{ duration: '500ms', timingFunction: 'ease-in-out' }}
            expandOnPrint
          >
            <FormLayout>
              <FormLayout.Group condensed>
                <TextField
                  label="Start date"
                  // value={value}
                  // onChange={handleChange}
                  autoComplete="off"
                />
                <TextField
                  label="Start time"
                  // value={value}
                  // onChange={handleChange}
                  autoComplete="off"
                />
                <TextField
                  label="Event duration "
                  // value={value}
                  // onChange={handleChange}
                  autoComplete="off"
                />
              </FormLayout.Group>
            </FormLayout>
          </Collapsible>
        </Card.Section>
      </Card>


    </Layout.AnnotatedSection>
  )

  return (
    <Page
      title="New event"
    >
      <TitleBar
        title="New event"
        actionGroups={actionGroups}
      />

      <Layout>
        {eventDetails}
        {dates}
      </Layout>
    </Page>
  );
}
