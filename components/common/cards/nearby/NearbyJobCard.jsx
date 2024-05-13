import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

import { checkImageURL } from '../../../../utils'

const NearbyJobCard = ({ job, handleNavigate}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: checkImageURL(job.employer_logo)
          ? job.employer_logo
          : 'https://static.vecteezy.com/system/resources/thumbnails/022/014/063/small/missing-picture-page-for-website-design-or-mobile-app-design-no-image-available-icon-vector.jpg' }}          
          resizeMode="contain"
          style={styles.logoImage}
        />

      </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.jobName} numberOfLines={1}>
            {job.job_title}
          </Text>
          <Text style={styles.jobType}>{job.job_employment_type}</Text>
          <Text style={styles.companyName} numberOfLines={1}>{job.employer_name} </Text>
        </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard