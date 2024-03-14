---
sidebar_position: 1
---

# Release Notes

## January 2024

- Supports deploying classic clusters on Azure.

## November 2023

- Supports a new AWS region, Europe (Frankfurt) (region code: `eu-central-1`). See [Supported cloud platforms and regions](/get_started/cloud_platforms_and_regions.md).
- Enhanced user awareness of attribute changes in Free Developer Tier clusters.
- Optimized users' experience with the SQL Editor.
- Other improvements and optimizations.

## October 2023

- Supports continuing to use or create a Free Developer Tier cluster after the free trial period ends.
- Supports using one email address to create multiple accounts. To use this feature, contact us at <a href="mailto:cloud-support@celerdata.com">cloud-support@celerdata.com</a>.
- Supports running scripts via Terraform.
- Improved the alert system to reduce redundant warnings pushed to users, and optimized alert messages.
- Other improvements and optimizations.

## August 2023

- Supports querying the CCU usage and billing information for clusters by using [OpenAPI](/API/access_API.md).
- Supports viewing and downloading CCU usage and billing information for all billing periods in the billing dashboard of the CelerData Cloud Private console.
- Supports downloading invoices and receipts for all billing periods in the billing dashboard of CelerData Cloud Private console.
- Brings the [Terraform provider](https://registry.terraform.io/providers/CelerData/celerdatabyoc/latest) for cloud API. Users now can create clusters by using Terraform.
- Supports creating a Tabular catalog by using the SQL editor of the CelerData Cloud Private console.
- Supports subscribing to CelerData Cloud Private on AWS Marketplace.

## June 2023

- Supports two more AWS regions: Europe (Ireland) (eu-west-1) and US West (Oregon) (us-west-2). See [Supported cloud platforms and regions](/get_started/cloud_platforms_and_regions.md).
- Improved the notification system to reduce redundant warnings pushed to users.
- Optimize users' experience with the SQL Editor.
- Other improvements and optimizations.

## May 2023

- Added a notification center where you can view four types of notifications:
  - Warning: cluster exceptions, security violations, and overdue payments
  - Error: system faults and operation failures
  - Info: default messages such as new releases, logins and logouts, role and privilege changes, training courses, and feedback to issues of your concern, as well as other custom messages
  - Success: operations that are successfully completed
- Supports SSO login. For more information, see [Use SAML SSO](/security/cloud_access_control/use_sso.md)).
- Supports scheduled suspend and auto suspend on idle. For more information, see [Suspend and resume a CelerData cluster](/cluster_management/suspend_resume_cluster.md).
- Supports audit logs. For more information, see [View audit logs](/cluster_management/open_cluster.md#view-audit-logs).
- Added an alarm system. For more information, see [Alarm](/alarm.md).
- Supports displaying cluster history, including operations performed to create, suspend, resume, and scale clusters.
- Offers guidance on the CelerData Cloud Private UI to help you choose your suitable instance type and node count according to your specific use case.
- Offers a free developer tier. For more information, see [Use Free Developer Tier](/get_started/free_developer_tier.md).
- Offers a free trial for learning and POC. For more information, see [Use Free Trial](/get_started/free_trial.md).
- Supports scaling FEs.
- Supports displaying the reasons for query failures.
- Added new features in the SQL Editor:
  - Displaying materialized views
  - Providing sample data to help you with a quick start
  - Providing a guided method to load data from cloud storage
- Supports full backups for clusters.
- Updated [Terms of Service](https://celerdata.com/celerdata-terms-of-use), [Privacy Statement](https://celerdata.com/celerdata-privacy-policy), and [Cookie Policy](https://celerdata.com/celerdata-cookie-policy).
- Other improvements and optimizations.

## January 2023

- Supports creating and managing Hive, Iceberg, Hudi, and Delta Lake catalogs in CelerData.
- Supports selecting an existing VPC and subnet when you choose Quick deployment.
- Supports suspending and resuming a cluster. You are not charged for your suspended clusters. Charges are resumed after you resume the clusters.
- Optimized the CelerData Cloud Private UI to power optimal Bring Your Own Cloud experience, and allowed enabling the query history and query profile features by default.

## December 2022

- Optimized the SQL Editor to support selecting catalogs.
- Improved the experience of changing cluster configurations.
- Supports load balancer and SSL connection for CelerData clusters.
- Supports resetting passwords and displaying the public IP endpoints and private endpoints of VPCs, and reusing the names of clusters whose deployments failed.

## November 2022

- Added role-based access control (RBAC) to the CelerData platform.
- Provided audit logs to track operations on the CelerData platform.
- Supports deploying clusters in public subnets.
- Supports deploying clusters by using AWS CloudFormation, which is fast and easy to use.
- Provided instance profiles and empowered LakeHouse, Broker Load, and backup and restore to implement RBAC on different data sources.

## September 2022

- Supports reusing deployment credentials, data credentials, and network configurations.
- Supports releasing clusters if you do not need them.
- Supports reviewing cluster cost details before deployment.
- Supports creating, scaling in/out, and scaling up/down a cluster.
- Supports managing multiple users within a single cluster.
- Provided an overview, monitoring information, and query profiles of each cluster and supports the SQL Editor feature.
- Provided usage and billing details on the CelerData Cloud Private UI.
