import {
  ActionLink,
  BackLink,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardGroup,
  CardGroupItem,
  CardHeading,
  CardLink,
  CharacterCount,
  Checkboxes,
  CheckboxesItem,
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
  Footer,
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
  Panel,
  PanelTitle,
  Radios,
  RadiosItem,
  Select,
  SelectOption,
  SkipLink,
  SummaryList,
  SummaryListActions,
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

      <div className="nhsuk-width-container">
        <BackLink href="/test">Back</BackLink>

        <main className="nhsuk-main-wrapper" id="maincontent">
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-two-thirds">
              <CardGroup>
                <CardGroupItem width="one-half">
                  <Card clickable>
                    <CardContent>
                      <CardHeading className="nhsuk-heading-m">
                        <CardLink href="#">Introduction to care and support</CardLink>
                      </CardHeading>
                      <CardDescription>
                        A quick guide for people who have care and support needs and their carers
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CardGroupItem>
                <CardGroupItem width="one-half">
                  <Card clickable>
                    <CardContent>
                      <CardHeading className="nhsuk-heading-m">
                        <CardLink href="#">Help from social services and charities</CardLink>
                      </CardHeading>
                      <CardDescription>
                        Includes helplines, needs assessments, advocacy and reporting abuse
                      </CardDescription>
                    </CardContent>
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
                    className="nhsuk-input--width-10"
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
                  <RadiosItem value="no" checked>
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

                <div className="button-group">
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
                  <a href="https://yellowcard.mhra.gov.uk/" title="External website">
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

              <SummaryList noBorder>
                <SummaryListRow>
                  <SummaryListKey>Name</SummaryListKey>
                  <SummaryListValue>Sarah Philips</SummaryListValue>
                  <SummaryListActions>
                    <a href="#">
                      Change
                      <span className="nhsuk-u-visually-hidden"> name</span>
                    </a>
                  </SummaryListActions>
                </SummaryListRow>
                <SummaryListRow>
                  <SummaryListKey>Date of birth</SummaryListKey>
                  <SummaryListValue>5 January 1978</SummaryListValue>
                  <SummaryListActions>
                    <a href="#">
                      Change
                      <span className="nhsuk-u-visually-hidden"> date of birth</span>
                    </a>
                  </SummaryListActions>
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
                  <SummaryListActions>
                    <a href="#">
                      Change
                      <span className="nhsuk-u-visually-hidden"> contact information</span>
                    </a>
                  </SummaryListActions>
                </SummaryListRow>
                <SummaryListRow>
                  <SummaryListKey>Contact details</SummaryListKey>
                  <SummaryListValue>
                    <p>07700 900457</p>
                    <p>sarah.phillips@example.com</p>
                  </SummaryListValue>
                  <SummaryListActions>
                    <a href="#">
                      Change
                      <span className="nhsuk-u-visually-hidden"> contact details</span>
                    </a>
                  </SummaryListActions>
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

              <Pagination>
                <PaginationLink href="/section/treatments" previous>
                  Treatments
                </PaginationLink>
                <PaginationLink href="/section/symptoms" next>
                  Symptoms
                </PaginationLink>
              </Pagination>
            </div>
          </div>
        </main>
      </div>

      <Footer>
        <FooterList>
          <FooterListItem href="#">Home</FooterListItem>
          <FooterListItem href="#">Health A to Z</FooterListItem>
          <FooterListItem href="#">Live Well</FooterListItem>
          <FooterListItem href="#">Mental health</FooterListItem>
          <FooterListItem href="#">Care and support</FooterListItem>
          <FooterListItem href="#">Accessibility statement</FooterListItem>
          <FooterListItem href="#">Pregnancy</FooterListItem>
          <FooterListItem href="#">NHS services</FooterListItem>
          <FooterListItem href="#">Coronavirus (COVID-19)</FooterListItem>
        </FooterList>

        <FooterList>
          <FooterListItem href="#">NHS App</FooterListItem>
          <FooterListItem href="#">Find my NHS number</FooterListItem>
          <FooterListItem href="#">Your health records</FooterListItem>
          <FooterListItem href="#">About the NHS</FooterListItem>
          <FooterListItem href="#">Healthcare abroad</FooterListItem>
        </FooterList>

        <FooterList>
          <FooterListItem href="#">Give us feedback</FooterListItem>
          <FooterListItem href="#">Other NHS websites</FooterListItem>
          <FooterListItem href="#">Profile editor login</FooterListItem>
        </FooterList>

        <FooterMeta>
          <FooterListItem href="#">About us</FooterListItem>
          <FooterListItem href="#">Accessibility statement</FooterListItem>
          <FooterListItem href="#">Our policies</FooterListItem>
          <FooterListItem href="#">Cookies</FooterListItem>

          <FooterCopyright>© Crown Copyright</FooterCopyright>
        </FooterMeta>
      </Footer>
    </>
  );
}
