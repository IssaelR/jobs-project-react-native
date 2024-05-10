import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = () => ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(companyLogo)
            ? companyLogo
            : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305"
          }}
          sytle={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
         <Text style={styles.companyName}>{companyName}</Text>
         <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            stlye={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
         </View>
      </View>

    </View>
  )
}

export default Company