<template>
  <div  :id="entity.name"
        class="lifeline absolute mx-2 transform -translate-x-1/2 h-full"
        :class="classes"
        :style="{'paddingTop': top + 'px', left: expectedPos + 'px'} ">
    <div class="relative participant flex flex-col justify-center z-10"
         :class="{'selected': selected, 'border-transparent': !!icon}" @click="onSelect">
      <img v-if="!!icon" :src="icon" class="absolute left-1/2 transform -translate-x-1/2 -translate-y-full h-8" :alt="`icon for ${entity.name}`">
      <!-- Put in a div to give it a fixed height, because stereotype is dynamic. -->
      <div class="h-5 flex flex-col justify-center">
        {{expectedPos}}
        <label class="interface" v-if="entity.stereotype">«{{ entity.stereotype }}»</label>
        <label class="name">{{ entity.label || entity.name }}</label>
      </div>
    </div>
    <div class="line w0 mx-auto h-full w-px"></div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

const iconPath = {
  actor:      require('../../assets/actor.svg'),
  boundary:   require('../../assets/Robustness_Diagram_Boundary.svg'),
  control:    require('../../assets/Robustness_Diagram_Control.svg'),
  database:   require('../../assets/database.svg'),
  entity:     require('../../assets/Robustness_Diagram_Entity.svg'),
  // AWS service
  cloudwatch:             require('../../assets/Architecture-Service-Icons_09172021/Arch_Management-Governance/16/Arch_Amazon-CloudWatch_16.svg'),
  cloudfront:             require('../../assets/Architecture-Service-Icons_09172021/Arch_Networking-Content-Delivery/16/Arch_Amazon-CloudFront_16.svg'),
  cognito:                require('../../assets/Architecture-Service-Icons_09172021/Arch_Security-Identity-Compliance/16/Arch_Amazon-Cognito_16.svg'),
  dynamodb:               require('../../assets/Architecture-Service-Icons_09172021/Arch_Database/16/Arch_Amazon-DynamoDB_16.svg'),
  ebs:                    require('../../assets/Architecture-Service-Icons_09172021/Arch_Storage/16/Arch_Amazon-Elastic-Block-Store_16.svg'),
  ec2:                    require('../../assets/Architecture-Service-Icons_09172021/Arch_Compute/16/Arch_Amazon-EC2_16.svg'),
  ecs:                    require('../../assets/Architecture-Service-Icons_09172021/Arch_Compute/16/Arch_Amazon-Elastic-Container-Service_16.svg'),
  efs:                    require('../../assets/Architecture-Service-Icons_09172021/Arch_Storage/16/Arch_Amazon-Elastic-File-System_16.svg'),
  elasticache:            require('../../assets/Architecture-Service-Icons_09172021/Arch_Database/16/Arch_Amazon-ElastiCache_16.svg'),
  elasticbeantalk:        require('../../assets/Architecture-Service-Icons_09172021/Arch_Compute/16/Arch_AWS-Elastic-Beanstalk_16.svg'),
  elasticfilesystem:      require('../../assets/Architecture-Service-Icons_09172021/Arch_Storage/16/Arch_Amazon-Elastic-File-System_16.svg'),
  glacier:                require('../../assets/Architecture-Service-Icons_09172021/Arch_Storage/16/Arch_Amazon-Simple-Storage-Service-Glacier_16.svg'),
  iam:                    require('../../assets/Architecture-Service-Icons_09172021/Arch_Security-Identity-Compliance/16/Arch_AWS-Identity-and-Access-Management_16.svg'),
  kinesis:                require('../../assets/Architecture-Service-Icons_09172021/Arch_Analytics/Arch_16/Arch_Amazon-Kinesis_16.svg'),
  lambda:                 require('../../assets/Architecture-Service-Icons_09172021/Arch_Compute/16/Arch_AWS-Lambda_16.svg'),
  lightsail:              require('../../assets/Architecture-Service-Icons_09172021/Arch_Compute/16/Arch_Amazon-Lightsail_16.svg'),
  rds:                    require('../../assets/Architecture-Service-Icons_09172021/Arch_Database/16/Arch_Amazon-RDS_16.svg'),
  redshift:               require('../../assets/Architecture-Service-Icons_09172021/Arch_Analytics/Arch_16/Arch_Amazon-Redshift_16.svg'),
  s3:                     require('../../assets/Architecture-Service-Icons_09172021/Arch_Storage/16/Arch_Amazon-Simple-Storage-Service_16.svg'),
  sns:                    require('../../assets/Architecture-Service-Icons_09172021/Arch_App-Integration/Arch_16/Arch_Amazon-Simple-Notification-Service_16.svg'),
  sqs:                    require('../../assets/Architecture-Service-Icons_09172021/Arch_App-Integration/Arch_16/Arch_Amazon-Simple-Queue-Service_16.svg'),
  sagemaker:              require('../../assets/Architecture-Service-Icons_09172021/Arch_Machine-Learning/16/Arch_Amazon-SageMaker_16.svg'),
  vpc:                    require('../../assets/Architecture-Service-Icons_09172021/Arch_Networking-Content-Delivery/16/Arch_Amazon-Virtual-Private-Cloud_16.svg'),
  // Azure services
  azureactivedirectory:   require('../../assets/Azure_Public_Service_Icons/Icons/Identity/10221-icon-service-Azure-Active-Directory.svg'),
  azurebackup:            require('../../assets/Azure_Public_Service_Icons/Icons/Azure Stack/10108-icon-service-Infrastructure-Backup.svg'),
  azurecdn:               require('../../assets/Azure_Public_Service_Icons/Icons/App Services/00056-icon-service-CDN-Profiles.svg'),
  azuredatafactory:       require('../../assets/Azure_Public_Service_Icons/Icons/Databases/10126-icon-service-Data-Factory.svg'),
  azuredevops:            require('../../assets/Azure_Public_Service_Icons/Icons/DevOps/10261-icon-service-Azure-DevOps.svg'),
  azurefunction:          require('../../assets/Azure_Public_Service_Icons/Icons/Compute/10029-icon-service-Function-Apps.svg'),
  azuresql:               require('../../assets/Azure_Public_Service_Icons/Icons/Databases/02390-icon-service-Azure-SQL.svg'),
  cosmosdb:               require('../../assets/Azure_Public_Service_Icons/Icons/Databases/10121-icon-service-Azure-Cosmos-DB.svg'),
  logicapps:              require('../../assets/Azure_Public_Service_Icons/Icons/Integration/10201-icon-service-Logic-Apps.svg'),
  virtualmachine:         require('../../assets/Azure_Public_Service_Icons/Icons/Compute/10021-icon-service-Virtual-Machine.svg'),
  // GCP services
  bigtable:               require('../../assets/google-cloud-icons/bigtable/bigtable.svg'),
  bigquery:               require('../../assets/google-cloud-icons/bigquery/bigquery.svg'),
  cloudcdn:               require('../../assets/google-cloud-icons/cloud_cdn/cloud_cdn.svg'),
  clouddns:               require('../../assets/google-cloud-icons/cloud_dns/cloud_dns.svg'),
  cloudinterconnect:      require('../../assets/google-cloud-icons/cloud_interconnect/cloud_interconnect.svg'),
  cloudloadbalancing:     require('../../assets/google-cloud-icons/cloud_load_balancing/cloud_load_balancing.svg'),
  cloudsql:               require('../../assets/google-cloud-icons/cloud_sql/cloud_sql.svg'),
  cloudstorage:           require('../../assets/google-cloud-icons/cloud_storage/cloud_storage.svg'),
  datalab:                require('../../assets/google-cloud-icons/datalab/datalab.svg'),
  dataproc:               require('../../assets/google-cloud-icons/dataproc/dataproc.svg'),
  googleiam:              require('../../assets/google-cloud-icons/identity_and_access_management/identity_and_access_management.svg'),
  googlesecurity:         require('../../assets/google-cloud-icons/security/security.svg'),
  googlevpc:              require('../../assets/google-cloud-icons/virtual_private_cloud/virtual_private_cloud.svg'),
  pubsub:                 require('../../assets/google-cloud-icons/pubsub/pubsub.svg'),
  securityscanner:        require('../../assets/google-cloud-icons/cloud_security_scanner/cloud_security_scanner.svg'),
  stackdriver:            require('../../assets/google-cloud-icons/stackdriver/stackdriver.svg'),
  visionapi:              require('../../assets/google-cloud-icons/cloud_vision_api/cloud_vision_api.svg'),
}
export default {
  name: 'life-line',
  props: ['entity', 'context'],
  data: () => {
    return {
      translateX: 0
    }
  },
  computed: {
    ...mapGetters(['firstInvocations', 'onLifelineMounted', 'posCal']),
    ...mapState(['participantPositionsTracker']),

    expectedPos() {
      console.log('expectedPos calculated', this.participantPositionsTracker)
      return this.posCal.getPosition(this.entity.name) - 8
    },
    icon() {
      return iconPath[this.entity.type?.toLowerCase()]
    },
    classes() {
      if (this.entity.type) {
        return ['icon', this.entity.type.toLowerCase()]
      }
      return []
    },
    selected() {
      return true
    },
    top() {
      if (this.firstInvocationIsCreation) {
        return this.firstInvocations[this.entity.name].top - 3 - this.$el?.offsetTop
      }
      return 0
    },
    firstInvocationIsCreation() {
      return this.firstInvocations[this.entity.name] && this.firstInvocations[this.entity.name].type === 'creation'
    }
  },
  methods: {
    onSelect() {
      this.$store.commit('onSelect', this.entity.name)
    }
  },
  mounted() {
  },
  updated() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .lifeline .line {
    background: linear-gradient(to bottom, transparent 50%, #223049 50%);
    background-size: 1px 20px;
  }

</style>
