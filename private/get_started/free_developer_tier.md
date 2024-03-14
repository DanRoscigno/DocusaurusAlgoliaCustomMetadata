# Use Free Developer Tier

This topic provides a detailed overview of the Free Developer Tier, including its restrictions, creation process, and unlocking mechanism. The Free Developer Tier package is designed to provide you with an affordable and accessible way to use CelerData services. By understanding and complying with the package's limitations, you can take advantage of CelerData's benefits without incurring any charges.

Note that the Free Developer Tier only exempts you from your CCU usage charges, which are billed at USD 0.5 per CCU by CelerData. You still need to pay your cloud provider for the infrastructure used to run your Free Developer Tier cluster.

## Create a Free Developer Tier cluster

You are allowed to create only one Free Developer Tier cluster per account. If you already have a Free Developer Tier cluster within your CelerData cloud account, you must unlock or release it before you can create a new Free Developer Tier cluster again.

A Free Developer Tier cluster consists of the following components:

- One FE
  - Up to 4 CPU cores
  - Up to 16-GB RAM
- One BE
  - Up to 4 CPU cores
  - Up to 16-GB RAM

## Scaling restrictions

Scaling is not allowed for Free Developer Tier clusters.

You must first unlock your Free Developer Tier cluster before you can scale it. Once unlocked, your Free Developer Tier cluster will be treated as a regular cluster and charged at a specific fee rate.

When you attempt to scale your Free Developer Tier cluster, CelerData prompts you to unlock the cluster before you can continue. For more information, see [Scale a CelerData cluster](../cluster_management/scale_cluster.md).

## Billing concerns

A Free Developer Tier cluster is not included in the billing process, and its CCU consumption will always be 0. As such, no charges will ever be incurred while you are using your Free Developer Tier cluster.
