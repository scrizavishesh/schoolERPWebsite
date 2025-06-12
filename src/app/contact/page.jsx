"use client"; // Enable client-side hooks like Formik

import Image from "next/image";
import GetInTouch from "@/components/GetInTouch";

import { useFormik } from "formik";
import * as Yup from "yup";
import { 
  Button, 
  styled 
} from "@mui/material";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

import address from   "../../../public/address 2.svg";
import hours from     "../../../public/timer.svg";
import phoneIcon from "../../../public/phone1.svg";
import insta from     "../../../public/insta.svg";
import photo from     "../../../public/photo.svg";
import twitter from   "../../../public/twitter.svg";
import facebook from  "../../../public/facebook.svg";
import design4 from   "../../../public/design4.png";
import MenuPage from "@/components/MenuPaga";
import Link from "next/link";

const contatDetails = [
    {
      image: address,
      title: "Our Address",
      subtitle:
        "Logix Park (Supreme Work), A-4-5, A Block, Sector 16, Noida, UP - 201301",
    },
    {
      image: hours,
      title: "Hours of Operation",
      subtitle: "Mon - Fri: 10.00 am to 7.00pm",
    },
    { image: phoneIcon, title: "Contact", subtitle: "+91 - 9116011899" },
  ];
  
  const websiteLinks = [
    { imgSrc: insta, url: "https://instagram.com" },
    { imgSrc: photo, url: "https://photos.google.com" },
    { imgSrc: facebook, url: "https://facebook.com" },
    { imgSrc: twitter, url: "https://twitter.com" },
  ];

  const handleSubmit=()=>{}
  

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Phone number is required"),
  subject: Yup.string().required("Subject is required"),
});

const ContactUs = () => {
    const formik=useFormik({
        initialValues:{
          name:"",
          email:"",
          phone:"",
          subject:"",
          message:""
        },
        validationSchema:validationSchema,
        onSubmit:handleSubmit
      })
    
      const {values,touched,errors,handleBlur,handleChange}=formik

  return (
    <ContactUsMainContainer>
      <MenuPage title="Contact Us" subtitle="Home" />
      <SecondSection>
        <ContactDetailsSection>
          <DetailsLeftSection>
            <GetInTouchText>Get in Touch</GetInTouchText>
            <DetailsText>
              Contact us for innovative solutions, expert support, and seamless
              collaboration.
            </DetailsText>
            <ContactDetails>
              {contatDetails &&
                contatDetails.map((curDetail, index) => (
                  <ContactDetailsOne key={index}>
                  <Images src={curDetail.image} alt="" />
                  <ContactFirstDetails>
                    <CurDetailTitle>{curDetail.title}</CurDetailTitle>
                    
                    {curDetail.title === "Our Address" ? (
                      <CurDetailSubTitle
                        as="a"
                   
                        href={`https://www.google.com/maps?q=${encodeURIComponent(
                          curDetail.subtitle
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", cursor: "pointer" }}
                      >
                        {curDetail.subtitle}
                      </CurDetailSubTitle>
                    ) : (
                      <CurDetailSubTitle>{curDetail.subtitle}</CurDetailSubTitle>
                    )}
                     
                  </ContactFirstDetails>
                </ContactDetailsOne>
                
                ))}
            </ContactDetails>
            <LeftLastSection>
              <CustomerCareButton startIcon={<ArrowDownwardOutlinedIcon />}>
                Customer Care
              </CustomerCareButton>
              <OuterLinks>
                {websiteLinks &&
                  websiteLinks.map((curLink, index) => (
                    <SocialLinks
                      href={curLink.url}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={curLink.imgSrc} alt="" />
                    </SocialLinks>
                  ))}
              </OuterLinks>
            </LeftLastSection>
          </DetailsLeftSection>
          <ContactDetailsRightSection>
            <RightSectionForm onSubmit={formik.handleSubmit} action="">
              <FormInputFields>
                <FormLabelFields htmlFor="name">Name <span style={{color:'red'}}>*</span> </FormLabelFields>
                <FormInput
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="name"
                  placeholder="Enter name"
                />
                {
                  touched.name && errors.name && (
                    <p style={{color:"red",fontSize:"12px"}}>{errors.name}</p>
                  )
                }
              </FormInputFields>
              <FormInputFields>
                <FormLabelFields htmlFor="name">
                  Email Address <span style={{color:'red'}}>*</span> 
                </FormLabelFields>
                <FormInput
                  type="email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  placeholder="Enter email"

                />
                {
                  touched.email && errors.email && (
                    <p style={{color:"red",fontSize:"12px"}}>{errors.email}</p>
                  )
                }
              </FormInputFields>
              <FormInputFields>
                <FormLabelFields htmlFor="name">Phone<span style={{color:'red'}}>*</span> </FormLabelFields>
                <FormInput
                  type="number"
                  name="phone"
                  id="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  placeholder="Enter phone"
                />
                {
                  touched.phone && errors.phone && (
                    <p style={{color:"red",fontSize:"12px"}}>{errors.phone}</p>
                  )
                }
              </FormInputFields>
              <FormInputFields>
                <FormLabelFields htmlFor="subject">Subject <span style={{color:'red'}}>*</span> </FormLabelFields>
                <FormInput
                  type="text"
                  name="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  onBlur={formik.handleBlur}
                  id="subject"
                  placeholder="Enter subject"
                />
                {
                  touched.subject && errors.subject && (
                    <p style={{color:"red",fontSize:"12px"}}>{errors.subject}</p>
                  )
                }
              </FormInputFields>
              <FormInputFields>
                <FormLabelFields htmlFor="message">Message</FormLabelFields>
                <FormTextArea
                  name="message"
                  id="message"
                  placeholder="Enter message"
                />
              </FormInputFields>
              <SubmitButton>Submit</SubmitButton>
            </RightSectionForm>
          </ContactDetailsRightSection>
        </ContactDetailsSection>
        
      </SecondSection>
<GetInTouch/>
      {/* <FooterPart /> */}
    </ContactUsMainContainer>
  );
};

export default ContactUs;


const ContactUsMainContainer = styled("div")`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: 'Sora';


  @media (max-width: 1100px) {
 

  }

  @media (max-width: 600px) {

  }
`;
const DetailsText = styled("p")`
  color: #333931;
  font: 400 17px "Sora";

    @media (max-width: 1100px) {
    font: 400 24px "Sora";
  }

  @media (max-width: 600px) {
    font: 400 18px "Sora";

  }
`;
const CurDetailSubTitle = styled("p")`
  color: #333931;
  font: 700 19px "Epilogue";
  line-height:32px;

   @media (max-width: 1100px) {
    font: 400 20px "Sora";
  }

  @media (max-width: 600px) {
    font: 400 16px "Sora";
  }
`;
const CurDetailTitle = styled("h4")`
  font: 600 15px "Epilogue";
  color: #0e2a46;
  line-height: 22px;


   @media (max-width: 1100px) {
    font: 600 28px "Sora";
  }

  @media (max-width: 600px) {
    font: 600 20px "Epilogue";
  }
`;
const ContactDetailsOne = styled("div")`
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 10px;

   @media (max-width: 1100px) {
   gap: 28px;
  }

  @media (max-width: 600px) {
    gap: 25px;
  }
`;
const ContactFirstDetails = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;

   @media (max-width: 1100px) {
   gap: 15px;
  }


  @media (max-width: 600px) {
    gap: 10px;
  }
`;
const GetInTouchText = styled("h2")`
  color: #0e2a46;
  font: 700 40px "Epilogue";

   @media (max-width: 1100px) {
    font: 700 30px "Epilogue";
  }


  @media (max-width: 600px) {
    font: 700 20px "Epilogue";
  }
`;
const ContactDetails = styled("div")`
  width: 100%;
  height: auto;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 25px;

   @media (max-width: 1100px) {
  height: 400px;
  }


  @media (max-width: 600px) {
    height: auto;
  }
`;
const DetailsLeftSection = styled("div")`
  width: 100%;
  height: 100%;


  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;

 @media (max-width: 1100px) {
    gap: 30px;
  }

  
  @media (max-width: 600px) {
    gap: 25px;
  }
`;

const ContactDetailsSection = styled("div")`
  width: 1100px;
  height: auto;

  background: linear-gradient(to bottom left, #f2f2f2 75%, #04857a 20%);
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width:1100px){

    margin: 20px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to top left, #04857a 20%, #f2f2f2 75%);
  }

  @media (max-width: 600px) {
  width: 900px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(to top left, #04857a 20%, #f2f2f2 75%);
  }
`;
const LeftLastSection = styled("div")`
  width: 100%;
  display: flex;
  max-width: 100%;

  justify-content: space-between;
  align-items: center;
`;
const SecondSection = styled("div")`
  width: 98%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:40px;


  background-image: url(${design4});
  background-repeat: no-repeat;
  background-position: right 3rem;

 @media (max-width:1100px) {
    width:100vw ;
   background-image:none;


  }

  @media (max-width: 600px) {

      width:100vw !important;
  }


  @media (max-width: 400px) {


}
   
`;
const CustomerCareButton = styled(Button)`
  text-transform: capitalize;
  font: 400 13px "Sora";
  color: #ffffff;

    @media (max-width: 1100px) {
    font: 400 22px "Sora";
    color: #000000;
  }

  @media (max-width: 600px) {

    font: 400 12px "Sora";
    color: #000000;
  }
`;
const OuterLinks = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const ContactDetailsRightSection = styled("div")`
  width: 100%;
  height: 100%;
  max-width: 100%;

  padding: 50px;
`;
const RightSectionForm = styled("form")`
  width: 100%;
  height: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  gap: 12px;

   @media (max-width: 1100px) {
    gap: 45px;
  }

  @media (max-width: 600px) {
    gap: 32px;
  }
`;
const FormInputFields = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;

   @media (max-width: 1100px) {
    gap: 24px;
  }

  @media (max-width: 600px) {
    gap: 16px;
  }
`;
const FormLabelFields = styled("label")`
  font: 400 18px "Epilogue";
  color: #0e2a46;

   @media (max-width: 1100px) {
    font: 500 25px "Epilogue";
  }

  @media (max-width: 600px) {
    font: 500 23px "Epilogue";
  }
`;

const FormInput = styled("input")`
  font: 400 14px "Sora";
  color: #4d5756;
  background-color: #ffffff;
  height: 48px;
  border: none;
  border-radius: 5px;
  padding-left: 12px;

   
  &:focus{
  outline: none;
  border: none;
  };

    @media (max-width: 1100px) {
    font: 400 15px "Sora";
    height: 70px;
  }

  @media (max-width: 600px) {
    font: 400 15px "Sora";
    height: 70px;
  }
`;
const FormTextArea = styled("textarea")`
  font: 400 14px "Sora";
  color: #4d5756;
  background-color: #ffffff;
  height: 120px;
  border: none;
  border-radius: 5px;
  padding: 8px;

   @media (max-width: 1100px) {
    font: 400 24px "Sora";
    height: 220px;
 
  }

  @media (max-width: 600px) {
    font: 400 20px "Sora";
    height: 190px;
  }
`;
const SubmitButton = styled("button")`
  font: 400 15px "Sora";
  color: #ffffff;
  background-color: #04857a;
  width: 193px;
  height: 50px;
  border: none;
  border-radius: 5px;
  padding: 8px;
  cursor: pointer !important;

  transition: background-color 0.2s ease;


 &:hover{
    background-color:rgb(6, 65, 60);
 }

   @media (max-width: 1100px) {
    font: 400 24px "Sora";
    width: 40%;
    height: 70px;
  }

  @media (max-width: 600px) {
    font: 400 24px "Sora";
    width: 40%;
    height: 70px;
  }
`;

const Images=styled(Image)`

 transition: transform 0.2s ease;
cursor:pointer;
 &:hover{
 transform:scale(1.2)
 }
`


const SocialLinks=styled(Link)`


 transition: transform 0.2s ease;
cursor:pointer;

 &:hover{
 transform:scale(1.2)
 }
`
// FooterPart is imported
