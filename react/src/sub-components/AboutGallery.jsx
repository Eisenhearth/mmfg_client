import React from 'react'

export default function AboutGallery() {
  return (
    <div className='grid grid-cols-3 items-center gap-2'>
        <div onClick={() => openLightboxOnSource(0)}>
            <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/278724191_136728568903615_7456226747815696017_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MwstRuIHoSEAX_QIk6T&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfCEggedXe-5dvrod-ym5yU8Y7o_PWALHl6NRpksnzBZLA&oe=644372EE"/>
        </div>
        
        <div onClick={() => openLightboxOnSource(1)}>
            <img src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/317823474_186087023967769_8927723608208314517_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-rhTYpzJZtcAX9Pdnvp&_nc_ht=scontent.fmnl4-4.fna&oh=00_AfBltDVvOOhQM4qt2jd5U4WyY7GSnUpif4ZyIpAd-GVGBQ&oe=6443135F"/>
        </div>
        <div onClick={() => openLightboxOnSource(2)}>
            <img src="https://scontent.fmnl4-5.fna.fbcdn.net/v/t39.30808-6/317732301_186087010634437_8512884557213726372_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qSrcXMPDRgYAX9-09GG&_nc_ht=scontent.fmnl4-5.fna&oh=00_AfDViRlRCDpCHzCHOb7HRaEVa6P-lbFmOyDshw9IMHXnLg&oe=64421968"/>
        </div>
        <div onClick={() => openLightboxOnSource(3)}>
            <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/317846815_186087003967771_4024815302526169222_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JtIaVGDBrfMAX8_ahtp&_nc_oc=AQniJJ4yD9iF34JBExTm97piVIc2AR0-UQGbD3rLJ3jcLtSR-3asUOszo9VgYvmxOJc&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfBh3bf5mt5AnW3tHlBwyUymF5w7mChTJufpe9pGxoZcDw&oe=644265C9"/>
        </div>
        <div onClick={() => openLightboxOnSource(4)}>
            <img src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/317950664_186086990634439_3599241966551380714_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=u8-GdL3FQs0AX8vChE2&_nc_ht=scontent.fmnl4-2.fna&oh=00_AfA8fTLFNJVDERWDGkAP8uFjemdHqWUZ9vYkElucqjMR5Q&oe=64428537"/>
        </div>
        <div onClick={() => openLightboxOnSource(5)}>
            <img src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/285938961_148153424427796_1046621040856778905_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Z2Shht9tYYQAX82dgwn&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfChTWUn6Ui9iUzBk7H-pEzCVNcT857SDlTtPyx_eJFXYQ&oe=64424F2F"/>
        </div>
    </div>
   
  )
}
