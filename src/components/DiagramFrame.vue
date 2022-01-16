<template>
  <div class="frame">
    <div class="header flex">
      <div class="left">
        <slot></slot>
      </div>
      <div class="right">
        <diagram-title :context="title"/>
      </div>
    </div>
    <div>
      <a target="_blank" href="https://zenuml.com" class="float-right clearfix text-xs">ZenUML.com</a>
      <button id="show-modal" @click="showModal=true">Show Modal</button>
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div v-show="showModal" class="fixed z-40 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!--
            Background overlay, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
          <div class="z-40 inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6">
            <div>
              <h3 slot="header">ZenUML Help</h3>
              <div slot="body">
                <div class="relative bg-white pb-32 overflow-hidden">
                  <div class="relative">
                    <div class="lg:mx-auto lg:max-w-7xl lg:px-8">
                      <div class="px-4 max-w-7xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
                        <div>
                          <h2 class="text-lg leading-6 font-medium text-gray-900">Builtin Icons</h2>
                          <p class="text-sm text-gray-500">Use <span class="rounded inline-block bg-gray-400 px-1"> <code class="text-xs text-white">@Actor TheParticipant</code> </span> to define the type of the participant.</p>
                          <ul role="list" class="mt-3 grid grid-cols-4 gap-5 sm:gap-6 sm:grid-cols-6 lg:grid-cols-8">
                            <li v-for="type in standardTypes" :key="type" class="col-span-1 flex flex-col shadow-sm rounded-md">
                              <div class="h-12 flex items-center justify-center bg-gray-50 text-white text-sm font-medium rounded-t-md">
                                <img v-if="!!icon" :src="icon(type)" class="object-contain h-8 w-8 m-auto" :alt="`icon for ${type}`">
                              </div>
                              <div class="flex items-center justify-center border-t border-r border-b border-gray-200 bg-white rounded-b-md">
                                <div class="px-2 py-2 text-xs">
                                  <span class="text-gray-900 font-medium hover:text-gray-600">@{{type}}</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <hr class="mt-4">
                          <ul role="list" class="mt-3 grid grid-cols-4 gap-5 sm:gap-6 sm:grid-cols-6 lg:grid-cols-8">
                            <li v-for="type in awsServices" :key="type" class="col-span-1 flex flex-col shadow-sm rounded-md">
                              <div class="h-12 flex items-center justify-center bg-gray-50 text-white text-sm font-medium rounded-t-md">
                                <img v-if="!!icon" :src="icon(type)" class="object-contain h-8 w-8 m-auto" :alt="`icon for ${type}`">
                              </div>
                              <div class="flex items-center justify-center border-t border-r border-b border-gray-200 bg-white rounded-b-md">
                                <div class="px-2 py-2 text-xs">
                                  <span class="text-gray-900 font-medium hover:text-gray-600">@{{type}}</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <hr class="mt-4">
                          <ul role="list" class="mt-3 grid grid-cols-4 gap-5 sm:gap-6 sm:grid-cols-6 lg:grid-cols-8">
                            <li v-for="type in azureServices" :key="type" class="col-span-1 flex flex-col shadow-sm rounded-md">
                              <div class="h-12 flex items-center justify-center bg-gray-50 text-white text-sm font-medium rounded-t-md">
                                <img v-if="!!icon" :src="icon(type)" class="object-contain h-8 w-8 m-auto" :alt="`icon for ${type}`">
                              </div>
                              <div class="flex items-center justify-center border-t border-r border-b border-gray-200 bg-white rounded-b-md">
                                <div class="px-2 py-2 text-xs">
                                  <span class="text-gray-900 font-medium hover:text-gray-600">@{{type}}</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <hr class="mt-4">
                          <ul role="list" class="mt-3 grid grid-cols-4 gap-5 sm:gap-6 sm:grid-cols-6 lg:grid-cols-8">
                            <li v-for="type in googleServices" :key="type" class="col-span-1 flex flex-col shadow-sm rounded-md">
                              <div class="h-12 flex items-center justify-center bg-gray-50 text-white text-sm font-medium rounded-t-md">
                                <img v-if="!!icon" :src="icon(type)" class="object-contain h-8 w-8 m-auto" :alt="`icon for ${type}`">
                              </div>
                              <div class="flex items-center justify-center border-t border-r border-b border-gray-200 bg-white rounded-b-md">
                                <div class="px-2 py-2 text-xs">
                                  <span class="text-gray-900 font-medium hover:text-gray-600">@{{type}}</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-24">
                    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                        <div>
                          <div>
            <span class="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
              <!-- Heroicon name: outline/sparkles -->
              <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
                          </div>
                          <div class="mt-6">
                            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Better understand your customers</h2>
                            <p class="mt-4 text-lg text-gray-500">Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.</p>
                            <div class="mt-6">
                              <a href="#" class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"> Get started </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                        <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                          <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg" alt="Customer profile user interface" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <span slot="footer">by ZenUML</span>
            </div>
            <div class="mt-5 sm:mt-6">
              <button @click="showModal = false" type="button" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                Go back to dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <seq-diagram/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import DiagramTitle from "@/components/DiagramTitle";
import SeqDiagram from "@/components/SeqDiagram";
// import Modal from "@/components/tutorial/Modal";

const iconPath = {
  actor:      require('../assets/actor.svg'),
  boundary:   require('../assets/Robustness_Diagram_Boundary.svg'),
  control:    require('../assets/Robustness_Diagram_Control.svg'),
  database:   require('../assets/database.svg'),
  entity:     require('../assets/Robustness_Diagram_Entity.svg'),
  // AWS service
  cloudwatch:             require('../assets/Architecture-Service-Icons_09172021/Arch_Management-Governance/16/Arch_Amazon-CloudWatch_16.svg'),
  cloudfront:             require('../assets/Architecture-Service-Icons_09172021/Arch_Networking-Content-Delivery/16/Arch_Amazon-CloudFront_16.svg'),
  cognito:                require('../assets/Architecture-Service-Icons_09172021/Arch_Security-Identity-Compliance/16/Arch_Amazon-Cognito_16.svg'),
  dynamodb:               require('../assets/Architecture-Service-Icons_09172021/Arch_Database/16/Arch_Amazon-DynamoDB_16.svg'),
  ebs:                    require('../assets/Architecture-Service-Icons_09172021/Arch_Storage/16/Arch_Amazon-Elastic-Block-Store_16.svg'),
  ec2:                    require('../assets/Architecture-Service-Icons_09172021/Arch_Compute/16/Arch_Amazon-EC2_16.svg'),
  ecs:                    require('../assets/Architecture-Service-Icons_09172021/Arch_Compute/16/Arch_Amazon-Elastic-Container-Service_16.svg'),
  efs:                    require('../assets/Architecture-Service-Icons_09172021/Arch_Storage/16/Arch_Amazon-Elastic-File-System_16.svg'),
  elasticache:            require('../assets/Architecture-Service-Icons_09172021/Arch_Database/16/Arch_Amazon-ElastiCache_16.svg'),
  elasticbeantalk:        require('../assets/Architecture-Service-Icons_09172021/Arch_Compute/16/Arch_AWS-Elastic-Beanstalk_16.svg'),
  elasticfilesystem:      require('../assets/Architecture-Service-Icons_09172021/Arch_Storage/16/Arch_Amazon-Elastic-File-System_16.svg'),
  glacier:                require('../assets/Architecture-Service-Icons_09172021/Arch_Storage/16/Arch_Amazon-Simple-Storage-Service-Glacier_16.svg'),
  iam:                    require('../assets/Architecture-Service-Icons_09172021/Arch_Security-Identity-Compliance/16/Arch_AWS-Identity-and-Access-Management_16.svg'),
  kinesis:                require('../assets/Architecture-Service-Icons_09172021/Arch_Analytics/Arch_16/Arch_Amazon-Kinesis_16.svg'),
  lambda:                 require('../assets/Architecture-Service-Icons_09172021/Arch_Compute/16/Arch_AWS-Lambda_16.svg'),
  lightsail:              require('../assets/Architecture-Service-Icons_09172021/Arch_Compute/16/Arch_Amazon-Lightsail_16.svg'),
  rds:                    require('../assets/Architecture-Service-Icons_09172021/Arch_Database/16/Arch_Amazon-RDS_16.svg'),
  redshift:               require('../assets/Architecture-Service-Icons_09172021/Arch_Analytics/Arch_16/Arch_Amazon-Redshift_16.svg'),
  s3:                     require('../assets/Architecture-Service-Icons_09172021/Arch_Storage/16/Arch_Amazon-Simple-Storage-Service_16.svg'),
  sns:                    require('../assets/Architecture-Service-Icons_09172021/Arch_App-Integration/Arch_16/Arch_Amazon-Simple-Notification-Service_16.svg'),
  sqs:                    require('../assets/Architecture-Service-Icons_09172021/Arch_App-Integration/Arch_16/Arch_Amazon-Simple-Queue-Service_16.svg'),
  sagemaker:              require('../assets/Architecture-Service-Icons_09172021/Arch_Machine-Learning/16/Arch_Amazon-SageMaker_16.svg'),
  vpc:                    require('../assets/Architecture-Service-Icons_09172021/Arch_Networking-Content-Delivery/16/Arch_Amazon-Virtual-Private-Cloud_16.svg'),
  // Azure services
  azureactivedirectory:   require('../assets/Azure_Public_Service_Icons/Icons/Identity/10221-icon-service-Azure-Active-Directory.svg'),
  azurebackup:            require('../assets/Azure_Public_Service_Icons/Icons/Azure Stack/10108-icon-service-Infrastructure-Backup.svg'),
  azurecdn:               require('../assets/Azure_Public_Service_Icons/Icons/App Services/00056-icon-service-CDN-Profiles.svg'),
  azuredatafactory:       require('../assets/Azure_Public_Service_Icons/Icons/Databases/10126-icon-service-Data-Factory.svg'),
  azuredevops:            require('../assets/Azure_Public_Service_Icons/Icons/DevOps/10261-icon-service-Azure-DevOps.svg'),
  azurefunction:          require('../assets/Azure_Public_Service_Icons/Icons/Compute/10029-icon-service-Function-Apps.svg'),
  azuresql:               require('../assets/Azure_Public_Service_Icons/Icons/Databases/02390-icon-service-Azure-SQL.svg'),
  cosmosdb:               require('../assets/Azure_Public_Service_Icons/Icons/Databases/10121-icon-service-Azure-Cosmos-DB.svg'),
  logicapps:              require('../assets/Azure_Public_Service_Icons/Icons/Integration/10201-icon-service-Logic-Apps.svg'),
  virtualmachine:         require('../assets/Azure_Public_Service_Icons/Icons/Compute/10021-icon-service-Virtual-Machine.svg'),
  // GCP services
  bigtable:               require('../assets/google-cloud-icons/bigtable/bigtable.svg'),
  bigquery:               require('../assets/google-cloud-icons/bigquery/bigquery.svg'),
  cloudcdn:               require('../assets/google-cloud-icons/cloud_cdn/cloud_cdn.svg'),
  clouddns:               require('../assets/google-cloud-icons/cloud_dns/cloud_dns.svg'),
  cloudinterconnect:      require('../assets/google-cloud-icons/cloud_interconnect/cloud_interconnect.svg'),
  cloudloadbalancing:     require('../assets/google-cloud-icons/cloud_load_balancing/cloud_load_balancing.svg'),
  cloudsql:               require('../assets/google-cloud-icons/cloud_sql/cloud_sql.svg'),
  cloudstorage:           require('../assets/google-cloud-icons/cloud_storage/cloud_storage.svg'),
  datalab:                require('../assets/google-cloud-icons/datalab/datalab.svg'),
  dataproc:               require('../assets/google-cloud-icons/dataproc/dataproc.svg'),
  googleiam:              require('../assets/google-cloud-icons/identity_and_access_management/identity_and_access_management.svg'),
  googlesecurity:         require('../assets/google-cloud-icons/security/security.svg'),
  googlevpc:              require('../assets/google-cloud-icons/virtual_private_cloud/virtual_private_cloud.svg'),
  pubsub:                 require('../assets/google-cloud-icons/pubsub/pubsub.svg'),
  securityscanner:        require('../assets/google-cloud-icons/cloud_security_scanner/cloud_security_scanner.svg'),
  stackdriver:            require('../assets/google-cloud-icons/stackdriver/stackdriver.svg'),
  visionapi:              require('../assets/google-cloud-icons/cloud_vision_api/cloud_vision_api.svg'),
}

export default {
  name: "DiagramFrame",
  data() {
    return {
      showModal: true
    }
  },
  computed: {
    ...mapGetters(['rootContext']),
    standardTypes() {
      return [
        'Actor', 'Boundary', 'Control', 'Database', 'Entity',
      ]
    },
    awsServices() {
      return [
        'CloudWatch', 'CloudFront', 'Cognito', 'DynamoDB', 'EBS', 'EC2', 'ECS',
        'EFS', 'ElastiCache', 'ElasticBeantalk', 'ElasticFileSystem', 'Glacier',
        'IAM', 'Kinesis', 'Lambda', 'LightSail', 'RDS', 'Redshift', 'S3', 'SNS',
        'SQS', 'Sagemaker', 'VPC',
      ]
    },
    azureServices() {
      return [
        'AzureActiveDirectory', 'AzureBackup', 'AzureCDN', 'AzureDataFactory',
        'AzureDevOps', 'AzureFunction', 'AzureSQL', 'CosmosDB', 'LogicApps', 'VirtualMachine',
      ]
    },
    googleServices() {
      return [
        'BigTable', 'BigQuery', 'CloudCDN', 'CloudDNS', 'CloudInterconnect', 'CloudLoadBalancing',
        'CloudSQL', 'CloudStorage', 'DataLab', 'DataProc', 'GoogleIAM', 'GoogleSecurity',
        'GoogleVPC', 'PubSub', 'SecurityScanner', 'StackDriver', 'VisionAPI'
      ]
    },
    title() {
      if(!this.rootContext) {
        console.error('`rootContext` is empty. Please make sure `store` is properly configured.')
      }
      return this.rootContext?.title()
    }
  },
  methods: {
    icon(type) {
      return iconPath[type?.toLowerCase()]
    }
  },
  components: {
    // Modal,
    DiagramTitle,
    SeqDiagram
  },
}
</script>

<style scoped>
.frame {
  display: inline-block;
  border: #E6E6E6 1px solid;
  border-radius: 3px;
}
.header {
  border-bottom: #E6E6E6 1px solid;
  margin-bottom: 4px;
  padding: 4px;
}


</style>
