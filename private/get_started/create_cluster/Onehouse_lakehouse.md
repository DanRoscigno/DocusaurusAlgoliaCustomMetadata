# Onehouse lakehouse on AWS

To integrate CelerData with Onehouse on AWS there are some Onehouse requirements that you should consider when preparing to deploy CelerData.

Onehouse requires an AWS VPC with the following resources:

- Public/Private Subnets
- NAT Gateway
- At least 2 Availability Zones

The "new VPC" AWS CloudFormation template doesn't adhere to the Onehouse requirements. To deploy CelerData and Onehouse on AWS create an AWS PVC using the Onehouse requirements, and then deploy CelerData into that AWS VPC.

## More information

- [Onehouse requirements](https://docs.onehouse.ai/docs/product/connect-cloud-provider/aws/prerequisites)
- [CelerData on AWS](./create_cluster_aws.md)
