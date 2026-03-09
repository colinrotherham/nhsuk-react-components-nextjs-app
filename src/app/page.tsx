import {
  ActionLink,
  BackLink,
  BodyText,
  Button,
  Card,
  CardAction,
  CardDescription,
  CardGroup,
  CardGroupItem,
  CardHeading,
  CardImage,
  CardLink,
  CharacterCount,
  Checkboxes,
  CheckboxesItem,
  Col,
  Container,
  ContentsList,
  ContentsListItem,
  DateInput,
  DateInputDay,
  DateInputMonth,
  DateInputYear,
  Details,
  DetailsSummary,
  DetailsText,
  DoAndDontList,
  DoAndDontListItem,
  ErrorSummary,
  ErrorSummaryList,
  ErrorSummaryListItem,
  ErrorSummaryTitle,
  Fieldset,
  FileUpload,
  Footer,
  FooterContent,
  FooterCopyright,
  FooterList,
  FooterListItem,
  FooterMeta,
  Form,
  Header,
  HeaderAccount,
  HeaderAccountItem,
  HeaderNavigation,
  HeaderNavigationItem,
  HeaderSearch,
  Heading,
  InsetText,
  Legend,
  NavAZ,
  NavAZLinkItem,
  NotificationBanner,
  NotificationBannerHeading,
  NotificationBannerLink,
  NotificationBannerTitle,
  Pagination,
  PaginationLink,
  PaginationItem,
  Panel,
  PanelTitle,
  PasswordInput,
  Radios,
  RadiosItem,
  Row,
  Select,
  SelectOption,
  SkipLink,
  SummaryList,
  SummaryListAction,
  SummaryListKey,
  SummaryListRow,
  SummaryListValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  TabsContents,
  TabsList,
  TabsListItem,
  TabsTitle,
  Tag,
  Textarea,
  TextInput,
  WarningCallout,
  WarningCalloutHeading,
} from 'nhsuk-react-components';

export default function Home() {
  return (
    <>
      <SkipLink />

      <Header
        service={{
          text: 'Manage patients',
          href: '/',
        }}
      >
        <HeaderSearch
          placeholder="Name or NHS number"
          visuallyHiddenLabel="Search patients by name or NHS number"
        />
        <HeaderAccount>
          <HeaderAccountItem href="#" icon>
            Florence Nightingale
          </HeaderAccountItem>
          <HeaderAccountItem>
            Regional Manager, Hull and East Yorkshire Hospitals NHS Trust
          </HeaderAccountItem>
          <HeaderAccountItem href="#">Change role</HeaderAccountItem>
          <HeaderAccountItem formProps={{ action: '/log-out', method: 'post' }}>
            Log out
          </HeaderAccountItem>
        </HeaderAccount>
        <HeaderNavigation>
          <HeaderNavigationItem href="#">Home</HeaderNavigationItem>
          <HeaderNavigationItem href="#">Create user</HeaderNavigationItem>
          <HeaderNavigationItem href="#">Find user</HeaderNavigationItem>
        </HeaderNavigation>
      </Header>

      <Container>
        <BackLink href="/test">Back</BackLink>

        <main className="nhsuk-main-wrapper" id="maincontent">
          <Row>
            <Col width="two-thirds">
              <CardGroup>
                <CardGroupItem width="one-half">
                  <Card clickable>
                    <CardHeading size="m">
                      <CardLink href="#">Introduction to care and support</CardLink>
                    </CardHeading>
                    <CardDescription>
                      A quick guide for people who have care and support needs and their carers
                    </CardDescription>
                  </Card>
                </CardGroupItem>
                <CardGroupItem width="one-half">
                  <Card clickable>
                    <CardHeading size="m">
                      <CardLink href="#">Help from social services and charities</CardLink>
                    </CardHeading>
                    <CardDescription>
                      Includes helplines, needs assessments, advocacy and reporting abuse
                    </CardDescription>
                  </Card>
                </CardGroupItem>
              </CardGroup>

              <ActionLink href="/test">Example action link 1</ActionLink>

              <br />

              <ActionLink href="/test">Example action link 2</ActionLink>

              <Form noValidate>
                <ErrorSummary disableAutoFocus>
                  <ErrorSummaryTitle>There is a problem</ErrorSummaryTitle>
                  <ErrorSummaryList>
                    <ErrorSummaryListItem href="#address-line-1">
                      Enter address line 1
                    </ErrorSummaryListItem>
                  </ErrorSummaryList>
                </ErrorSummary>

                <Fieldset>
                  <Legend size="l" isPageHeading>
                    What is your address?
                  </Legend>
                  <TextInput
                    label="Address line 1"
                    id="address-line-1"
                    name="addressLine1"
                    autoComplete="address-line1"
                    error="Enter address line 1"
                  />
                  <TextInput
                    label="Address line 2 (optional)"
                    id="address-line-2"
                    name="addressLine2"
                    autoComplete="address-line2"
                  />
                  <TextInput
                    label="Town or city"
                    id="address-town"
                    name="addressTown"
                    autoComplete="address-level2"
                    className="nhsuk-u-width-two-thirds"
                  />
                  <TextInput
                    label="Postcode"
                    id="address-postcode"
                    name="addressPostcode"
                    autoComplete="postal-code"
                    width="10"
                  />
                </Fieldset>

                <Textarea
                  label="Can you provide more detail?"
                  labelProps={{ size: 'l' }}
                  hint="Do not include personal information, like your name, date of birth or NHS number"
                  id="more-detail"
                  name="example"
                  rows={5}
                />

                <CharacterCount
                  label="Can you provide more detail?"
                  labelProps={{ size: 'l' }}
                  hint="Do not include personal information like your name, date of birth or NHS number"
                  id="more-detail-count"
                  name="example"
                  maxLength={200}
                  rows={5}
                />

                <FileUpload label="Upload a file" labelProps={{ size: 'l' }} id="file-upload" />

                <PasswordInput label="Password" labelProps={{ size: 'l' }} id="password" />

                <Checkboxes
                  legend="What is your nationality?"
                  legendProps={{ size: 'l' }}
                  hint="If you have more than 1 nationality, select all options that are relevant to you"
                  name="nationality"
                  id="nationality"
                >
                  <CheckboxesItem value="british">British</CheckboxesItem>
                  <CheckboxesItem value="irish">Irish</CheckboxesItem>
                  <CheckboxesItem value="other">Citizen of another country</CheckboxesItem>
                </Checkboxes>

                <DateInput
                  hint="For example, 15 3 1984"
                  legend="What is your date of birth?"
                  legendProps={{ size: 'l' }}
                  id="date-of-birth"
                  error="Date of birth must include a day"
                >
                  <DateInputDay />
                  <DateInputMonth error={false} />
                  <DateInputYear error={false} />
                </DateInput>

                <Radios
                  legend="Have you changed your name?"
                  legendProps={{ size: 'l' }}
                  hint="This includes changing your last name or spelling your name differently"
                  name="example"
                  id="standard-example"
                >
                  <RadiosItem value="yes">Yes</RadiosItem>
                  <RadiosItem value="no" defaultChecked>
                    No
                  </RadiosItem>
                </Radios>

                <Select
                  label="Label text goes here"
                  labelProps={{ size: 'l' }}
                  id="select-option"
                  defaultValue="2"
                >
                  <SelectOption value="1">NHS.UK frontend option 1</SelectOption>
                  <SelectOption value="2">NHS.UK frontend option 2</SelectOption>
                  <SelectOption value="3" disabled>
                    NHS.UK frontend option 3
                  </SelectOption>
                </Select>

                <div className="nhsuk-button-group">
                  <Button href="/">Save and continue</Button>
                </div>
              </Form>

              <ContentsList>
                <ContentsListItem current>What is AMD?</ContentsListItem>
                <ContentsListItem href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/">
                  Symptoms
                </ContentsListItem>
                <ContentsListItem href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/">
                  Getting diagnosed
                </ContentsListItem>
                <ContentsListItem href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/">
                  Treatments
                </ContentsListItem>
                <ContentsListItem href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/">
                  Living with AMD
                </ContentsListItem>
              </ContentsList>

              <Details>
                <DetailsSummary>Where can I find my NHS number?</DetailsSummary>
                <DetailsText>
                  <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
                  <p>
                    You can find your NHS number on any document sent to you by the NHS. This may
                    include:
                  </p>
                  <ul>
                    <li>prescriptions</li>
                    <li>test results</li>
                    <li>hospital referral letters</li>
                    <li>appointment letters</li>
                    <li>your NHS medical card</li>
                  </ul>
                  <p>Ask your GP practice for help if you can&apos;t find your NHS number.</p>
                </DetailsText>
              </Details>

              <Details expander>
                <DetailsSummary>Where can I find my NHS number?</DetailsSummary>
                <DetailsText>
                  <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
                  <p>
                    You can find your NHS number on any document sent to you by the NHS. This may
                    include:
                  </p>
                  <ul>
                    <li>prescriptions</li>
                    <li>test results</li>
                    <li>hospital referral letters</li>
                    <li>appointment letters</li>
                    <li>your NHS medical card</li>
                  </ul>
                  <p>Ask your GP practice for help if you can&apos;t find your NHS number.</p>
                </DetailsText>
              </Details>

              <DoAndDontList listType="do">
                <DoAndDontListItem>
                  cover blisters that are likely to burst with a soft plaster or dressing
                </DoAndDontListItem>
                <DoAndDontListItem>
                  wash your hands before touching a burst blister
                </DoAndDontListItem>
                <DoAndDontListItem>
                  allow the fluid in a burst blister to drain before covering it with a plaster or
                  dressing
                </DoAndDontListItem>
              </DoAndDontList>

              <DoAndDontList listType="dont">
                <DoAndDontListItem>burst a blister yourself</DoAndDontListItem>
                <DoAndDontListItem>peel the skin off a burst blister</DoAndDontListItem>
                <DoAndDontListItem>pick at the edges of the remaining skin</DoAndDontListItem>
                <DoAndDontListItem>
                  wear the shoes or use the equipment that caused your blister until it heals
                </DoAndDontListItem>
              </DoAndDontList>

              <InsetText>
                <p>
                  You can report any suspected side effect to the{' '}
                  <a href="https://yellowcardmhra.gov.uk/" title="External website">
                    UK safety scheme
                  </a>
                  .
                </p>
              </InsetText>

              <NavAZ>
                <NavAZLinkItem href="#A">A</NavAZLinkItem>
                <NavAZLinkItem href="#B">B</NavAZLinkItem>
                <NavAZLinkItem href="#C">C</NavAZLinkItem>
                <NavAZLinkItem href="#D">D</NavAZLinkItem>
                <NavAZLinkItem href="#E">E</NavAZLinkItem>
                <NavAZLinkItem href="#F">F</NavAZLinkItem>
                <NavAZLinkItem href="#G">G</NavAZLinkItem>
                <NavAZLinkItem href="#H">H</NavAZLinkItem>
                <NavAZLinkItem href="#I">I</NavAZLinkItem>
                <NavAZLinkItem href="#J">J</NavAZLinkItem>
                <NavAZLinkItem href="#K">K</NavAZLinkItem>
                <NavAZLinkItem href="#L">L</NavAZLinkItem>
                <NavAZLinkItem href="#M">M</NavAZLinkItem>
                <NavAZLinkItem href="#N">N</NavAZLinkItem>
                <NavAZLinkItem href="#O">O</NavAZLinkItem>
                <NavAZLinkItem href="#P">P</NavAZLinkItem>
                <NavAZLinkItem href="#Q">Q</NavAZLinkItem>
                <NavAZLinkItem href="#R">R</NavAZLinkItem>
                <NavAZLinkItem href="#S">S</NavAZLinkItem>
                <NavAZLinkItem href="#T">T</NavAZLinkItem>
                <NavAZLinkItem href="#U">U</NavAZLinkItem>
                <NavAZLinkItem href="#V">V</NavAZLinkItem>
                <NavAZLinkItem href="#W">W</NavAZLinkItem>
                <NavAZLinkItem href="#X">X</NavAZLinkItem>
                <NavAZLinkItem href="#Y">Y</NavAZLinkItem>
                <NavAZLinkItem href="#Z">Z</NavAZLinkItem>
              </NavAZ>

              <NotificationBanner title="Upcoming maintenance">
                <NotificationBannerHeading>
                  The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.
                </NotificationBannerHeading>
              </NotificationBanner>

              <NotificationBanner success disableAutoFocus>
                <NotificationBannerTitle>Patient record updated</NotificationBannerTitle>
                <p>
                  Contact{' '}
                  <NotificationBannerLink href="#">
                    example@department.nhs.uk
                  </NotificationBannerLink>{' '}
                  if you think there&#39;s a problem.
                </p>
              </NotificationBanner>

              <Panel>
                <PanelTitle headingLevel="h2">Booking complete</PanelTitle>
                We have sent you a confirmation email
              </Panel>

              <Panel interruption>
                <PanelTitle headingLevel="h2" size="l">
                  Jodie Brown had a COVID-19 vaccine less than 3 months ago
                </PanelTitle>
                <BodyText>They had a COVID-19 vaccine on 25 September 2025.</BodyText>
                <BodyText>
                  For most people, the minimum recommended gap between COVID-19 vaccine doses is 3
                  months.
                </BodyText>
                <div className="nhsuk-button-group">
                  <Button href="/" reverse>
                    Continue anyway
                  </Button>
                  <a href="#">Cancel</a>
                </div>
              </Panel>

              <SummaryList noBorder>
                <SummaryListRow>
                  <SummaryListKey>Name</SummaryListKey>
                  <SummaryListValue>Sarah Philips</SummaryListValue>
                  <SummaryListAction href="#" visuallyHiddenText="name">
                    Change
                  </SummaryListAction>
                </SummaryListRow>
                <SummaryListRow>
                  <SummaryListKey>Date of birth</SummaryListKey>
                  <SummaryListValue>5 January 1978</SummaryListValue>
                  <SummaryListAction href="#" visuallyHiddenText="date of birth">
                    Change
                  </SummaryListAction>
                </SummaryListRow>
                <SummaryListRow>
                  <SummaryListKey>Contact information</SummaryListKey>
                  <SummaryListValue>
                    72 Guild Street
                    <br />
                    London
                    <br />
                    SE23 6FH
                  </SummaryListValue>
                  <SummaryListAction href="#" visuallyHiddenText="contact information">
                    Change
                  </SummaryListAction>
                </SummaryListRow>
                <SummaryListRow>
                  <SummaryListKey>Contact details</SummaryListKey>
                  <SummaryListValue>
                    <p>07700 900457</p>
                    <p>sarah.phillips@example.com</p>
                  </SummaryListValue>
                  <SummaryListAction href="#" visuallyHiddenText="contact details">
                    Change
                  </SummaryListAction>
                </SummaryListRow>
              </SummaryList>

              <Table caption="Skin symptoms and possible causes">
                <TableHead>
                  <TableRow>
                    <TableCell>Skin Symptoms</TableCell>
                    <TableCell>Possible cause</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Blisters on lips or around the mouth</TableCell>
                    <TableCell>cold sores</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Itchy, dry, cracked, sore</TableCell>
                    <TableCell>eczema</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Itchy blisters</TableCell>
                    <TableCell>shingles, chickenpox</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Tabs>
                <TabsTitle>Contents</TabsTitle>
                <TabsList>
                  <TabsListItem id="past-day">Past day</TabsListItem>
                  <TabsListItem id="past-week">Past week</TabsListItem>
                  <TabsListItem id="past-month">Past month</TabsListItem>
                </TabsList>

                <TabsContents id="past-day">
                  <div>Past day contents go here</div>
                </TabsContents>

                <TabsContents id="past-week">
                  <div>Past week contents go here</div>
                </TabsContents>

                <TabsContents id="past-month">
                  <div>Past month contents go here</div>
                </TabsContents>
              </Tabs>

              <WarningCallout>
                <WarningCalloutHeading>School, nursery or work</WarningCalloutHeading>
                <p>
                  Stay away from school, nursery or work until all the spots have crusted over. This
                  is usually 5 days after the spots first appeared.
                </p>
              </WarningCallout>

              <Card feature>
                <CardHeading size="m">Flu: Follow-up requested</CardHeading>
                <BodyText>
                  Sarah Philips (Mum) would like to speak to a member of the team about other
                  options for their child&apos;s vaccination.
                </BodyText>
                <Button href="#" secondary>
                  Record a new consent response
                </Button>
                <Heading headingLevel="h3" size="s">
                  Consent responses
                </Heading>
                <Card clickable>
                  <CardHeading headingLevel="h4">
                    <CardLink href="#">Sarah Philips (Mum)</CardLink>
                  </CardHeading>
                  <SummaryList>
                    <SummaryListRow>
                      <SummaryListKey>Name</SummaryListKey>
                      <SummaryListValue>Sarah Philips</SummaryListValue>
                    </SummaryListRow>
                    <SummaryListRow>
                      <SummaryListKey>Date</SummaryListKey>
                      <SummaryListValue>25 August 2025 at 4:04 pm</SummaryListValue>
                    </SummaryListRow>
                    <SummaryListRow noBorder>
                      <SummaryListKey>Response</SummaryListKey>
                      <SummaryListValue>
                        <Tag modifier="orange">Follow up requested</Tag>
                      </SummaryListValue>
                    </SummaryListRow>
                  </SummaryList>
                </Card>
              </Card>

              <Card>
                <CardHeading size="m">Regional Manager</CardHeading>
                <CardAction href="#/delete">Delete</CardAction>
                <CardAction href="#/withdraw">Withdraw</CardAction>
                <SummaryList>
                  <SummaryListRow>
                    <SummaryListKey>Name</SummaryListKey>
                    <SummaryListValue>Karen Francis</SummaryListValue>
                    <SummaryListAction href="#" visuallyHiddenText="name">
                      Change
                    </SummaryListAction>
                  </SummaryListRow>
                  <SummaryListRow>
                    <SummaryListKey>Date of birth</SummaryListKey>
                    <SummaryListValue>15 March 1984</SummaryListValue>
                    <SummaryListAction href="#" visuallyHiddenText="date of birth">
                      Change
                    </SummaryListAction>
                  </SummaryListRow>
                  <SummaryListRow>
                    <SummaryListKey>Contact information</SummaryListKey>
                    <SummaryListValue>
                      73 Roman Rd
                      <br />
                      Leeds
                      <br />
                      LS2 5ZN
                    </SummaryListValue>
                    <SummaryListAction href="#" visuallyHiddenText="contact information">
                      Change
                    </SummaryListAction>
                  </SummaryListRow>
                  <SummaryListRow>
                    <SummaryListKey>Contact details</SummaryListKey>
                    <SummaryListValue>
                      <BodyText>07700 900362</BodyText>
                      <BodyText>karen.francis@example.com</BodyText>
                    </SummaryListValue>
                    <SummaryListAction href="#" visuallyHiddenText="contact details">
                      Add
                    </SummaryListAction>
                    <SummaryListAction href="#" visuallyHiddenText="contact details">
                      Change
                    </SummaryListAction>
                  </SummaryListRow>
                  <SummaryListRow>
                    <SummaryListKey>Medicines</SummaryListKey>
                    <SummaryListValue>
                      <BodyText>Isotretinoin capsules (Roaccutane)</BodyText>
                      <BodyText>Isotretinoin gel (Isotrex)</BodyText>
                      <BodyText>Pepto-Bismol (bismuth subsalicylate)</BodyText>
                    </SummaryListValue>
                    <SummaryListAction href="#" visuallyHiddenText="medicines">
                      Add
                    </SummaryListAction>
                    <SummaryListAction href="#" visuallyHiddenText="medicines">
                      Change
                    </SummaryListAction>
                  </SummaryListRow>
                </SummaryList>
              </Card>

              <Card cardType="emergency">
                <CardHeading size="m">Call 999 or go to A&E now if:</CardHeading>
                <ul>
                  <li>
                    you&apos;re coughing up more than just a few spots or streaks of blood – this
                    could be a sign of serious bleeding in your lungs
                  </li>
                  <li>
                    you have severe difficulty breathing – you&apos;re gasping, choking or not able
                    to get words out
                  </li>
                </ul>
                <ActionLink href="#" reverse>
                  Find your nearest A&E
                </ActionLink>
              </Card>

              <Card>
                <CardImage
                  src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg"
                  alt=""
                />
                <CardHeading size="m">
                  <CardLink href="https://digital.nhs.uk/blog/design-matters/2025/why-we-are-reinvesting-in-the-nhs-prototype-kit">
                    Why we are reinvesting in the NHS prototype kit
                  </CardLink>
                </CardHeading>
                <BodyText className="nhsuk-body-s nhsuk-u-secondary-text-colour nhsuk-u-margin-bottom-0">
                  <span className="nhsuk-u-visually-hidden">Published on: </span>21 July 2025
                </BodyText>
                <BodyText className="nhsuk-body-s nhsuk-u-font-weight-bold">
                  NHS England Design Matters blog
                </BodyText>
                <CardDescription>
                  Frankie Roberto and Mike Gallagher explain why we revived the NHS prototype kit,
                  the benefits of prototyping in code and how digital teams in the NHS can get
                  started using it.
                </CardDescription>
              </Card>

              <Pagination>
                <PaginationItem href="/section/treatments" labelText="Treatments" previous />
                <PaginationItem href="/section/symptoms" labelText="Symptoms" next />
              </Pagination>

              <Pagination>
                <PaginationLink href="/results?page=1" previous />
                <PaginationItem href="/results?page=1" number={1} />
                <PaginationItem href="/results?page=2" number={2} current />
                <PaginationItem href="/results?page=3" number={3} />
                <PaginationLink href="/results?page=3" next />
              </Pagination>
            </Col>
          </Row>
        </main>
      </Container>

      <Footer columns="3">
        <FooterList width="one-quarter">
          <FooterListItem href="#">About us</FooterListItem>
          <FooterListItem href="#">Give us feedback</FooterListItem>
          <FooterListItem href="#">Accessibility statement</FooterListItem>
        </FooterList>

        <FooterList width="one-quarter">
          <FooterListItem href="#">Cookies</FooterListItem>
          <FooterListItem href="#">Privacy policy</FooterListItem>
          <FooterListItem href="#">Terms and conditions</FooterListItem>
        </FooterList>

        <FooterContent width="one-half">
          <BodyText size="s" className="nhsuk-u-margin-bottom-6">
            <strong>Manchester University NHS Foundation Trust (MFT)</strong> was formed on 1st
            October 2017 following the merger of Central Manchester University Hospitals NHS
            Foundation Trust (CMFT) and University Hospital of South Manchester NHS Foundation Trust
            (UHSM).
          </BodyText>
        </FooterContent>

        <FooterContent width="full">
          <BodyText size="s">
            Cobbett House, Manchester University NHS Foundation Trust, Oxford Road, Manchester, M13
            9WL
          </BodyText>
        </FooterContent>

        <FooterMeta>
          <FooterCopyright>© 2025 – Manchester University NHS Foundation Trust</FooterCopyright>
        </FooterMeta>
      </Footer>
    </>
  );
}
