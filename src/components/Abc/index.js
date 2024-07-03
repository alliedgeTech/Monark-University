import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
      <div className="abc-section mt-75">
        <div className="container">
          <div className="img-box d-flex align-items-center justify-content-center">
            <img className='d-lg-block d-none' src="https://ipsrsolutions.com/content/uploads/2022/07/Banner.png" alt="" />
            <img className='d-lg-none d-block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhNRTgRqaq1CtZ0XuBiTB2Z4WdOcUS0ykMWHYjsmJt675WqhZ1OHupeV6EpjnTY9YsqHg&usqp=CAU" alt="" />
          </div>
          <div className="three">
            <h1>Academic Bank of Credits</h1>
            <strong>Academic Bank of Credits (ABC) is the initiative of Ministry of Electronics and Information Technology (MeitY) and Ministry of Education (MoE). As per National Education Policy 2020, the Academic Bank of Credits (ABC) has been envisaged to facilitate the academic mobility of students with the freedom to study across the Higher Education Institutions in the country with an appropriate "credit transfer" mechanism from one programme to another, leading to attain a Degree/ Diploma/PG-diploma, etc., Considering the significance of this digital initiative, it is mandatory for all students to generate ABC IDs. All students are advised to visit www.abc.gov.in or www.digilocker.gov.in to generate ABC ID. Go through the following Help Manuals/User Manuals to generate ABC ID:</strong>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-12">
              <Link href='https://www.abc.gov.in/'>
                <h4 className='oswald'>Option A (www.abc.gov.in)</h4>
              </Link>
            </div>
            <div className="col-lg-6 col-12">
              <Link href='https://www.digilocker.gov.in/'>
                <h4 className='oswald'>Option B (www.digilocker.gov.in)</h4>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
