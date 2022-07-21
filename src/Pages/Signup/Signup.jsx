import React from 'react'
import {
	FormControl,
	FormLabel,
	FormHelperText,
	Input,
	Box,
	Container,
	Heading,
	Text,
	Button,
	Checkbox,
	Spacer,
	Link,
	Flex,
	Select,
} from "@chakra-ui/react";
import { GoogleButton } from "react-google-button";
const Signup = () => {
	return (
		<Box
			bgColor="rgb(250,252,253)"
			style={{ border: "1px solid blue" }}>
			<Flex p={5} mt={40} bgColor="white" direction="">
				<Container
					mr={0}
					style={{
						width: "20rem",
						// border: "1px solid black",
					}}>
					<Flex
						direction="column"
						justify="space-between"
						style={{
							// border: "1px solid black",
							height: "100%",
						}}>
						<Box>
							<Box mt={20} p={7}>
								<img
									src="https://app.hellobonsai.com/assets/logos/bonsai-0fe7c417d79806408d8117d5a0ca871f0be3afb1104d54b53f59f53cbda2f28b.svg"
									alt="logo"
								/>
							</Box>
							<Box mr={5} ml={2}>
								<Text>
									Join 500,000+ freelancers
									and agencies using Bonsai.
								</Text>
							</Box>
						</Box>

						<Box p={5} mb={20}>
							<q>
								Anyone doing #freelance work
								should use @bonsaiinc for
								contracts/payment. It's amazing
								and saves boatloads of time.
							</q>
							<p>
								Nathanael Smith, Product
								Designer
							</p>
						</Box>
					</Flex>
				</Container>

				<Container p={0} ml={0} maxW="container.sm">
					<Box
						bgColor="white"
						p={20}
						style={
							{
								// border: "5px solid red",
								// marginTop: "100px",
							}
						}>
						<Text
							style={{
								fontWeight: "700",
								fontFamily: "sans-serif",
							}}
							color="rgb(41,42,45)"
							fontSize="3xl"
							mb={10}>
							Try Bonsai free with your Workflow
							today
						</Text>
						<GoogleButton
							// w={10}
							style={{
								width: "100%",
								marginBottom: "40px",
								backgroundColor: "white",
								color: "black",
							}}
						/>
						<hr
							style={{
								border: "1px solid black",
							}}
						/>
						<br />
						<br />
						{/* <Button></Button> */}
						<FormControl>
							<FormLabel color="rgb(171,170,170)">
								EMAIL{" "}
							</FormLabel>
							<Input
								type="email"
								placeholder="your@email.com"
								required
							/>

							<FormLabel
								color="rgb(171,170,170)"
								mt={5}>
								FULL NAME
							</FormLabel>
							<Input
								type="text"
								placeholder="Jane Smith"
							/>
							<FormLabel
								color="rgb(171,170,170)"
								mt={5}>
								PASSWORD
							</FormLabel>
							<Input
								mb={5}
								type="password"
								placeholder="**********"
								required
							/>

							<Flex>
								<Box>
									<Select
										placeholder="India"
										name=""
										id=""
										class="">
										<option value="">
											Please select
										</option>
										<option value="Afghanistan">
											Afghanistan
										</option>
										<option value="Albania">
											Albania
										</option>
										<option value="Algeria">
											Algeria
										</option>
										<option value="American Samoa">
											American Samoa
										</option>
										<option value="Andorra">
											Andorra
										</option>
										<option value="Angola">
											Angola
										</option>
										<option value="Anguilla">
											Anguilla
										</option>
										<option value="Antarctica">
											Antarctica
										</option>
										<option value="Antigua and Barbuda">
											Antigua and
											Barbuda
										</option>
										<option value="Argentina">
											Argentina
										</option>
										<option value="Armenia">
											Armenia
										</option>
										<option value="Aruba">
											Aruba
										</option>
										<option value="Australia">
											Australia
										</option>
										<option value="Austria">
											Austria
										</option>
										<option value="Azerbaijan">
											Azerbaijan
										</option>
										<option value="Bahamas">
											Bahamas
										</option>
										<option value="Bahrain">
											Bahrain
										</option>
										<option value="Bangladesh">
											Bangladesh
										</option>
										<option value="Barbados">
											Barbados
										</option>
										<option value="Belarus">
											Belarus
										</option>
										<option value="Belgium">
											Belgium
										</option>
										<option value="Belize">
											Belize
										</option>
										<option value="Benin">
											Benin
										</option>
										<option value="Bermuda">
											Bermuda
										</option>
										<option value="Bhutan">
											Bhutan
										</option>
										<option value="Bolivia">
											Bolivia
										</option>
										<option value="Bosnia and Herzegovina">
											Bosnia and
											Herzegovina
										</option>
										<option value="Botswana">
											Botswana
										</option>
										<option value="Bouvet Island">
											Bouvet Island
										</option>
										<option value="Brazil">
											Brazil
										</option>
										<option value="British Indian Ocean Territory">
											British Indian
											Ocean
											Territory
										</option>
										<option value="Brunei Darussalam">
											Brunei
											Darussalam
										</option>
										<option value="Bulgaria">
											Bulgaria
										</option>
										<option value="Burkina Faso">
											Burkina Faso
										</option>
										<option value="Burundi">
											Burundi
										</option>
										<option value="Cambodia">
											Cambodia
										</option>
										<option value="Cameroon">
											Cameroon
										</option>
										<option value="Canada">
											Canada
										</option>
										<option value="Cape Verde">
											Cape Verde
										</option>
										<option value="Cayman Islands">
											Cayman Islands
										</option>
										<option value="Central African Republic">
											Central
											African
											Republic
										</option>
										<option value="Chad">
											Chad
										</option>
										<option value="Chile">
											Chile
										</option>
										<option value="China">
											China
										</option>
										<option value="Christmas Island">
											Christmas
											Island
										</option>
										<option value="Cocos Islands">
											Cocos Islands
										</option>
										<option value="Colombia">
											Colombia
										</option>
										<option value="Comoros">
											Comoros
										</option>
										<option value="Congo">
											Congo
										</option>
										<option value="Congo, Democratic Republic of the">
											Congo,
											Democratic
											Republic of
											the
										</option>
										<option value="Cook Islands">
											Cook Islands
										</option>
										<option value="Costa Rica">
											Costa Rica
										</option>
										<option value="Cote d'Ivoire">
											Cote d'Ivoire
										</option>
										<option value="Croatia">
											Croatia
										</option>
										<option value="Cuba">
											Cuba
										</option>
										<option value="Cyprus">
											Cyprus
										</option>
										<option value="Czech Republic">
											Czech Republic
										</option>
										<option value="Denmark">
											Denmark
										</option>
										<option value="Djibouti">
											Djibouti
										</option>
										<option value="Dominica">
											Dominica
										</option>
										<option value="Dominican Republic">
											Dominican
											Republic
										</option>
										<option value="Ecuador">
											Ecuador
										</option>
										<option value="Egypt">
											Egypt
										</option>
										<option value="El Salvador">
											El Salvador
										</option>
										<option value="Equatorial Guinea">
											Equatorial
											Guinea
										</option>
										<option value="Eritrea">
											Eritrea
										</option>
										<option value="Estonia">
											Estonia
										</option>
										<option value="Ethiopia">
											Ethiopia
										</option>
										<option value="Falkland Islands">
											Falkland
											Islands
										</option>
										<option value="Faroe Islands">
											Faroe Islands
										</option>
										<option value="Fiji">
											Fiji
										</option>
										<option value="Finland">
											Finland
										</option>
										<option value="France">
											France
										</option>
										<option value="French Guiana">
											French Guiana
										</option>
										<option value="French Polynesia">
											French
											Polynesia
										</option>
										<option value="Gabon">
											Gabon
										</option>
										<option value="Gambia">
											Gambia
										</option>
										<option value="Georgia">
											Georgia
										</option>
										<option value="Germany">
											Germany
										</option>
										<option value="Ghana">
											Ghana
										</option>
										<option value="Gibraltar">
											Gibraltar
										</option>
										<option value="Greece">
											Greece
										</option>
										<option value="Greenland">
											Greenland
										</option>
										<option value="Grenada">
											Grenada
										</option>
										<option value="Guadeloupe">
											Guadeloupe
										</option>
										<option value="Guam">
											Guam
										</option>
										<option value="Guatemala">
											Guatemala
										</option>
										<option value="Guinea">
											Guinea
										</option>
										<option value="Guinea-Bissau">
											Guinea-Bissau
										</option>
										<option value="Guyana">
											Guyana
										</option>
										<option value="Haiti">
											Haiti
										</option>
										<option value="Heard Island and McDonald Islands">
											Heard Island
											and McDonald
											Islands
										</option>
										<option value="Honduras">
											Honduras
										</option>
										<option value="Hong Kong">
											Hong Kong
										</option>
										<option value="Hungary">
											Hungary
										</option>
										<option value="Iceland">
											Iceland
										</option>
										<option value="India">
											India
										</option>
										<option value="Indonesia">
											Indonesia
										</option>
										<option value="Iran">
											Iran
										</option>
										<option value="Iraq">
											Iraq
										</option>
										<option value="Ireland">
											Ireland
										</option>
										<option value="Israel">
											Israel
										</option>
										<option value="Italy">
											Italy
										</option>
										<option value="Jamaica">
											Jamaica
										</option>
										<option value="Japan">
											Japan
										</option>
										<option value="Jordan">
											Jordan
										</option>
										<option value="Kazakhstan">
											Kazakhstan
										</option>
										<option value="Kenya">
											Kenya
										</option>
										<option value="Kiribati">
											Kiribati
										</option>
										<option value="Kuwait">
											Kuwait
										</option>
										<option value="Kyrgyzstan">
											Kyrgyzstan
										</option>
										<option value="Laos">
											Laos
										</option>
										<option value="Latvia">
											Latvia
										</option>
										<option value="Lebanon">
											Lebanon
										</option>
										<option value="Lesotho">
											Lesotho
										</option>
										<option value="Liberia">
											Liberia
										</option>
										<option value="Libya">
											Libya
										</option>
										<option value="Liechtenstein">
											Liechtenstein
										</option>
										<option value="Lithuania">
											Lithuania
										</option>
										<option value="Luxembourg">
											Luxembourg
										</option>
										<option value="Macao">
											Macao
										</option>
										<option value="Macedonia">
											Macedonia
										</option>
										<option value="Madagascar">
											Madagascar
										</option>
										<option value="Malawi">
											Malawi
										</option>
										<option value="Malaysia">
											Malaysia
										</option>
										<option value="Maldives">
											Maldives
										</option>
										<option value="Mali">
											Mali
										</option>
										<option value="Malta">
											Malta
										</option>
										<option value="Marshall Islands">
											Marshall
											Islands
										</option>
										<option value="Martinique">
											Martinique
										</option>
										<option value="Mauritania">
											Mauritania
										</option>
										<option value="Mauritius">
											Mauritius
										</option>
										<option value="Mayotte">
											Mayotte
										</option>
										<option value="Mexico">
											Mexico
										</option>
										<option value="Micronesia">
											Micronesia
										</option>
										<option value="Moldova">
											Moldova
										</option>
										<option value="Monaco">
											Monaco
										</option>
										<option value="Mongolia">
											Mongolia
										</option>
										<option value="Montserrat">
											Montserrat
										</option>
										<option value="Morocco">
											Morocco
										</option>
										<option value="Mozambique">
											Mozambique
										</option>
										<option value="Myanmar">
											Myanmar
										</option>
										<option value="Namibia">
											Namibia
										</option>
										<option value="Nauru">
											Nauru
										</option>
										<option value="Nepal">
											Nepal
										</option>
										<option value="Netherlands">
											Netherlands
										</option>
										<option value="Netherlands Antilles">
											Netherlands
											Antilles
										</option>
										<option value="New Caledonia">
											New Caledonia
										</option>
										<option value="New Zealand">
											New Zealand
										</option>
										<option value="Nicaragua">
											Nicaragua
										</option>
										<option value="Niger">
											Niger
										</option>
										<option value="Nigeria">
											Nigeria
										</option>
										<option value="Norfolk Island">
											Norfolk Island
										</option>
										<option value="North Korea">
											North Korea
										</option>
										<option value="Norway">
											Norway
										</option>
										<option value="Oman">
											Oman
										</option>
										<option value="Pakistan">
											Pakistan
										</option>
										<option value="Palau">
											Palau
										</option>
										<option value="Palestinian Territory">
											Palestinian
											Territory
										</option>
										<option value="Panama">
											Panama
										</option>
										<option value="Papua New Guinea">
											Papua New
											Guinea
										</option>
										<option value="Paraguay">
											Paraguay
										</option>
										<option value="Peru">
											Peru
										</option>
										<option value="Philippines">
											Philippines
										</option>
										<option value="Pitcairn">
											Pitcairn
										</option>
										<option value="Poland">
											Poland
										</option>
										<option value="Portugal">
											Portugal
										</option>
										<option value="Puerto Rico">
											Puerto Rico
										</option>
										<option value="Qatar">
											Qatar
										</option>
										<option value="Romania">
											Romania
										</option>
										<option value="Russian Federation">
											Russian
											Federation
										</option>
										<option value="Rwanda">
											Rwanda
										</option>
										<option value="Saint Helena">
											Saint Helena
										</option>
										<option value="Saint Kitts and Nevis">
											Saint Kitts
											and Nevis
										</option>
										<option value="Saint Lucia">
											Saint Lucia
										</option>
										<option value="Saint Pierre and Miquelon">
											Saint Pierre
											and Miquelon
										</option>
										<option value="Saint Vincent and the Grenadines">
											Saint Vincent
											and the
											Grenadines
										</option>
										<option value="Samoa">
											Samoa
										</option>
										<option value="San Marino">
											San Marino
										</option>
										<option value="Sao Tome and Principe">
											Sao Tome and
											Principe
										</option>
										<option value="Saudi Arabia">
											Saudi Arabia
										</option>
										<option value="Senegal">
											Senegal
										</option>
										<option value="Serbia and Montenegro">
											Serbia and
											Montenegro
										</option>
										<option value="Seychelles">
											Seychelles
										</option>
										<option value="Sierra Leone">
											Sierra Leone
										</option>
										<option value="Singapore">
											Singapore
										</option>
										<option value="Slovakia">
											Slovakia
										</option>
										<option value="Slovenia">
											Slovenia
										</option>
										<option value="Solomon Islands">
											Solomon
											Islands
										</option>
										<option value="Somalia">
											Somalia
										</option>
										<option value="South Africa">
											South Africa
										</option>
										<option value="South Georgia">
											South Georgia
										</option>
										<option value="South Korea">
											South Korea
										</option>
										<option value="Spain">
											Spain
										</option>
										<option value="Sri Lanka">
											Sri Lanka
										</option>
										<option value="Sudan">
											Sudan
										</option>
										<option value="Suriname">
											Suriname
										</option>
										<option value="Svalbard and Jan Mayen">
											Svalbard and
											Jan Mayen
										</option>
										<option value="Swaziland">
											Swaziland
										</option>
										<option value="Sweden">
											Sweden
										</option>
										<option value="Switzerland">
											Switzerland
										</option>
										<option value="Syrian Arab Republic">
											Syrian Arab
											Republic
										</option>
										<option value="Taiwan">
											Taiwan
										</option>
										<option value="Tajikistan">
											Tajikistan
										</option>
										<option value="Tanzania">
											Tanzania
										</option>
										<option value="Thailand">
											Thailand
										</option>
										<option value="Timor-Leste">
											Timor-Leste
										</option>
										<option value="Togo">
											Togo
										</option>
										<option value="Tokelau">
											Tokelau
										</option>
										<option value="Tonga">
											Tonga
										</option>
										<option value="Trinidad and Tobago">
											Trinidad and
											Tobago
										</option>
										<option value="Tunisia">
											Tunisia
										</option>
										<option value="Turkey">
											Turkey
										</option>
										<option value="Turkmenistan">
											Turkmenistan
										</option>
										<option value="Tuvalu">
											Tuvalu
										</option>
										<option value="Uganda">
											Uganda
										</option>
										<option value="Ukraine">
											Ukraine
										</option>
										<option value="United Arab Emirates">
											United Arab
											Emirates
										</option>
										<option value="United Kingdom">
											United Kingdom
										</option>
										<option value="United States">
											United States
										</option>
										<option value="United States Minor Outlying Islands">
											United States
											Minor Outlying
											Islands
										</option>
										<option value="Uruguay">
											Uruguay
										</option>
										<option value="Uzbekistan">
											Uzbekistan
										</option>
										<option value="Vanuatu">
											Vanuatu
										</option>
										<option value="Vatican City">
											Vatican City
										</option>
										<option value="Venezuela">
											Venezuela
										</option>
										<option value="Vietnam">
											Vietnam
										</option>
										<option value="Virgin Islands, British">
											Virgin
											Islands,
											British
										</option>
										<option value="Virgin Islands, U.S.">
											Virgin
											Islands, U.S.
										</option>
										<option value="Wallis and Futuna">
											Wallis and
											Futuna
										</option>
										<option value="Western Sahara">
											Western Sahara
										</option>
										<option value="Yemen">
											Yemen
										</option>
										<option value="Zambia">
											Zambia
										</option>
										<option value="Zimbabwe">
											Zimbabwe
										</option>
									</Select>
								</Box>
								<Box>
									<Select
										id="currency"
										name="currency">
										<option>INR</option>
										<option value="AFN">
											Afghan Afghani
										</option>
										<option value="ALL">
											Albanian Lek
										</option>
										<option value="DZD">
											Algerian Dinar
										</option>
										<option value="AOA">
											Angolan Kwanza
										</option>
										<option value="ARS">
											Argentine Peso
										</option>
										<option value="AMD">
											Armenian Dram
										</option>
										<option value="AWG">
											Aruban Florin
										</option>
										<option value="AUD">
											Australian
											Dollar
										</option>
										<option value="AZN">
											Azerbaijani
											Manat
										</option>
										<option value="BSD">
											Bahamian
											Dollar
										</option>
										<option value="BHD">
											Bahraini Dinar
										</option>
										<option value="BDT">
											Bangladeshi
											Taka
										</option>
										<option value="BBD">
											Barbadian
											Dollar
										</option>
										<option value="BYR">
											Belarusian
											Ruble
										</option>
										<option value="BEF">
											Belgian Franc
										</option>
										<option value="BZD">
											Belize Dollar
										</option>
										<option value="BMD">
											Bermudan
											Dollar
										</option>
										<option value="BTN">
											Bhutanese
											Ngultrum
										</option>
										<option value="BTC">
											Bitcoin
										</option>
										<option value="BOB">
											Bolivian
											Boliviano
										</option>
										<option value="BAM">
											Bosnia-Herzegovina
											Convertible
											Mark
										</option>
										<option value="BWP">
											Botswanan Pula
										</option>
										<option value="BRL">
											Brazilian Real
										</option>
										<option value="GBP">
											British Pound
											Sterling
										</option>
										<option value="BND">
											Brunei Dollar
										</option>
										<option value="BGN">
											Bulgarian Lev
										</option>
										<option value="BIF">
											Burundian
											Franc
										</option>
										<option value="KHR">
											Cambodian Riel
										</option>
										<option value="CAD">
											Canadian
											Dollar
										</option>
										<option value="CVE">
											Cape Verdean
											Escudo
										</option>
										<option value="KYD">
											Cayman Islands
											Dollar
										</option>
										<option value="XOF">
											CFA Franc
											BCEAO
										</option>
										<option value="XAF">
											CFA Franc BEAC
										</option>
										<option value="XPF">
											CFP Franc
										</option>
										<option value="CLP">
											Chilean Peso
										</option>
										<option value="CNY">
											Chinese Yuan
										</option>
										<option value="COP">
											Colombian Peso
										</option>
										<option value="KMF">
											Comorian Franc
										</option>
										<option value="CDF">
											Congolese
											Franc
										</option>
										<option value="CRC">
											Costa Rican
											ColÃ³n
										</option>
										<option value="HRK">
											Croatian Kuna
										</option>
										<option value="CUC">
											Cuban
											Convertible
											Peso
										</option>
										<option value="CZK">
											Czech Republic
											Koruna
										</option>
										<option value="DKK">
											Danish Krone
										</option>
										<option value="DJF">
											Djiboutian
											Franc
										</option>
										<option value="DOP">
											Dominican Peso
										</option>
										<option value="XCD">
											East Caribbean
											Dollar
										</option>
										<option value="EGP">
											Egyptian Pound
										</option>
										<option value="ERN">
											Eritrean Nakfa
										</option>
										<option value="EEK">
											Estonian Kroon
										</option>
										<option value="ETB">
											Ethiopian Birr
										</option>
										<option value="EUR">
											Euro
										</option>
										<option value="FKP">
											Falkland
											Islands Pound
										</option>
										<option value="FJD">
											Fijian Dollar
										</option>
										<option value="GMD">
											Gambian Dalasi
										</option>
										<option value="GEL">
											Georgian Lari
										</option>
										<option value="DEM">
											German Mark
										</option>
										<option value="GHS">
											Ghanaian Cedi
										</option>
										<option value="GIP">
											Gibraltar
											Pound
										</option>
										<option value="GRD">
											Greek Drachma
										</option>
										<option value="GTQ">
											Guatemalan
											Quetzal
										</option>
										<option value="GNF">
											Guinean Franc
										</option>
										<option value="GYD">
											Guyanaese
											Dollar
										</option>
										<option value="HTG">
											Haitian Gourde
										</option>
										<option value="HNL">
											Honduran
											Lempira
										</option>
										<option value="HKD">
											Hong Kong
											Dollar
										</option>
										<option value="HUF">
											Hungarian
											Forint
										</option>
										<option value="ISK">
											Icelandic
											KrÃ³na
										</option>
										<option value="INR">
											Indian Rupee
										</option>
										<option value="IDR">
											Indonesian
											Rupiah
										</option>
										<option value="IRR">
											Iranian Rial
										</option>
										<option value="IQD">
											Iraqi Dinar
										</option>
										<option value="ILS">
											Israeli New
											Sheqel
										</option>
										<option value="ITL">
											Italian Lira
										</option>
										<option value="JMD">
											Jamaican
											Dollar
										</option>
										<option value="JPY">
											Japanese Yen
										</option>
										<option value="JOD">
											Jordanian
											Dinar
										</option>
										<option value="KZT">
											Kazakhstani
											Tenge
										</option>
										<option value="KES">
											Kenyan
											Shilling
										</option>
										<option value="KWD">
											Kuwaiti Dinar
										</option>
										<option value="KGS">
											Kyrgystani Som
										</option>
										<option value="LAK">
											Laotian Kip
										</option>
										<option value="LVL">
											Latvian Lats
										</option>
										<option value="LBP">
											Lebanese Pound
										</option>
										<option value="LSL">
											Lesotho Loti
										</option>
										<option value="LRD">
											Liberian
											Dollar
										</option>
										<option value="LYD">
											Libyan Dinar
										</option>
										<option value="LTL">
											Lithuanian
											Litas
										</option>
										<option value="MOP">
											Macanese
											Pataca
										</option>
										<option value="MKD">
											Macedonian
											Denar
										</option>
										<option value="MGA">
											Malagasy
											Ariary
										</option>
										<option value="MWK">
											Malawian
											Kwacha
										</option>
										<option value="MYR">
											Malaysian
											Ringgit
										</option>
										<option value="MVR">
											Maldivian
											Rufiyaa
										</option>
										<option value="MRO">
											Mauritanian
											Ouguiya
										</option>
										<option value="MUR">
											Mauritian
											Rupee
										</option>
										<option value="MXN">
											Mexican Peso
										</option>
										<option value="MDL">
											Moldovan Leu
										</option>
										<option value="MNT">
											Mongolian
											Tugrik
										</option>
										<option value="MAD">
											Moroccan
											Dirham
										</option>
										<option value="MZM">
											Mozambican
											Metical
										</option>
										<option value="MMK">
											Myanmar Kyat
										</option>
										<option value="NAD">
											Namibian
											Dollar
										</option>
										<option value="NPR">
											Nepalese Rupee
										</option>
										<option value="ANG">
											Netherlands
											Antillean
											Guilder
										</option>
										<option value="TWD">
											New Taiwan
											Dollar
										</option>
										<option value="NZD">
											New Zealand
											Dollar
										</option>
										<option value="NIO">
											Nicaraguan
											CÃ³rdoba
										</option>
										<option value="NGN">
											Nigerian Naira
										</option>
										<option value="KPW">
											North Korean
											Won
										</option>
										<option value="NOK">
											Norwegian
											Krone
										</option>
										<option value="OMR">
											Omani Rial
										</option>
										<option value="PKR">
											Pakistani
											Rupee
										</option>
										<option value="PAB">
											Panamanian
											Balboa
										</option>
										<option value="PGK">
											Papua New
											Guinean Kina
										</option>
										<option value="PYG">
											Paraguayan
											Guarani
										</option>
										<option value="PEN">
											Peruvian Nuevo
											Sol
										</option>
										<option value="PHP">
											Philippine
											Peso
										</option>
										<option value="PLN">
											Polish Zloty
										</option>
										<option value="QAR">
											Qatari Rial
										</option>
										<option value="RON">
											Romanian Leu
										</option>
										<option value="RUB">
											Russian Ruble
										</option>
										<option value="RWF">
											Rwandan Franc
										</option>
										<option value="SVC">
											Salvadoran
											ColÃ³n
										</option>
										<option value="WST">
											Samoan Tala
										</option>
										<option value="SAR">
											Saudi Riyal
										</option>
										<option value="RSD">
											Serbian Dinar
										</option>
										<option value="SCR">
											Seychellois
											Rupee
										</option>
										<option value="SLL">
											Sierra Leonean
											Leone
										</option>
										<option value="SGD">
											Singapore
											Dollar
										</option>
										<option value="SKK">
											Slovak Koruna
										</option>
										<option value="SBD">
											Solomon
											Islands Dollar
										</option>
										<option value="SOS">
											Somali
											Shilling
										</option>
										<option value="ZAR">
											South African
											Rand
										</option>
										<option value="KRW">
											South Korean
											Won
										</option>
										<option value="XDR">
											Special
											Drawing Rights
										</option>
										<option value="LKR">
											Sri Lankan
											Rupee
										</option>
										<option value="SHP">
											St. Helena
											Pound
										</option>
										<option value="SDG">
											Sudanese Pound
										</option>
										<option value="SRD">
											Surinamese
											Dollar
										</option>
										<option value="SZL">
											Swazi
											Lilangeni
										</option>
										<option value="SEK">
											Swedish Krona
										</option>
										<option value="CHF">
											Swiss Franc
										</option>
										<option value="SYP">
											Syrian Pound
										</option>
										<option value="STD">
											São Tomé and
											Príncipe Dobra
										</option>
										<option value="TJS">
											Tajikistani
											Somoni
										</option>
										<option value="TZS">
											Tanzanian
											Shilling
										</option>
										<option value="THB">
											Thai Baht
										</option>
										<option value="TOP">
											Tongan pa'anga
										</option>
										<option value="TTD">
											Trinidad &
											Tobago Dollar
										</option>
										<option value="TND">
											Tunisian Dinar
										</option>
										<option value="TRY">
											Turkish Lira
										</option>
										<option value="TMT">
											Turkmenistani
											Manat
										</option>
										<option value="UGX">
											Ugandan
											Shilling
										</option>
										<option value="UAH">
											Ukrainian
											Hryvnia
										</option>
										<option value="AED">
											United Arab
											Emirates
											Dirham
										</option>
										<option value="UYU">
											Uruguayan Peso
										</option>
										<option value="USD">
											US Dollar
										</option>
										<option value="UZS">
											Uzbekistan Som
										</option>
										<option value="VUV">
											Vanuatu Vatu
										</option>
										<option value="VEF">
											Venezuelan
											BolÃ­var
										</option>
										<option value="VND">
											Vietnamese
											Dong
										</option>
										<option value="YER">
											Yemeni Rial
										</option>
										<option value="ZMK">
											Zambian Kwacha
										</option>
									</Select>
								</Box>
							</Flex>
						</FormControl>

						<Box style={{ textAlign: "center" }}>
							<p
								style={{
									color: "rgb(219,213,212)",
								}}>
								By creating an acoount,you
								accept our
							</p>
							<Link color="rgb(134,134,135)">
								Terms and Conditions
							</Link>
						</Box>

						<Button
							mt={5}
							color="white"
							style={{ width: "100%" }}
							bgColor="rgb(1,175,134)">
							Create Free Account
						</Button>
						<Box mt={7} style={{ textAlign: "center" }}>
							<p
								style={{
									color: "rgb(219,213,212)",
								}}>
								Already have an account?
							</p>
						</Box>

						<Button
							mt={7}
							style={{ width: "100%" }}
							colorScheme="teal"
							variant="outline">
							Login
						</Button>
					</Box>
				</Container>
			</Flex>
		</Box>
	);
};

export default Signup