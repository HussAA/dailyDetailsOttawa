import React from "react"
import styled from "@emotion/styled"

const LeftHalf = styled.div`
  min-height: 410px;
  box-sizing: border-box;
  justify-content: space-between;
`

const Title = styled.div`
  min-height: 260px;
  align-items: center;
  font-family: sans-serif;
`
const SecondTitle = styled.span`
  font-size: 32px !important;
  font-family: sans-serif;
  font-weight: bold;
`
const LeftText = styled.div`
  background: #202020;
  min-height: 150px;
  padding: 20px;
  color: lightgray;
  font-family: sans-serif;
`

const SectionHeading = styled.div`
  margin-top: 6rem !important;
  font-size: 35pt;
  color: black;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 25pt;
  }
`
const SectionDescription = styled.div`
  font-size: 12pt;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #6e6e6e;
  margin-bottom: 70px;
  margin-left: 23px;
  margin-right: 23px;
`

const AboutUs = () => {
  return (
    <>
      <SectionHeading>WHO WE ARE</SectionHeading>
      <SectionDescription>
        Daily Details Ottawa is a small auto detailing business providing the
        best quality services related to Exterior & Interior.
      </SectionDescription>
      <div className="max-w-screen-lg mx-auto px-12 sm:px-16 lg:px-10">
        <div className="flex flex-wrap -mx-4">
          <LeftHalf className="w-full md:w-5/12">
            <Title className="flex">
              <div className="text-base/7">
                ABOUT US <br /> <SecondTitle>#1 in Ottawa</SecondTitle>
              </div>
            </Title>

            <LeftText className="flex">
              <div>
                We have a variety of packages that will fit your needs
                perfectly. We pride ourselves on using our professional-grade
                products to deliver an exceptional look to your vehicle.
              </div>
            </LeftText>
          </LeftHalf>

          <div className="w-full md:w-7/12 carpic" />
        </div>
      </div>
    </>
  )
}

export default AboutUs
