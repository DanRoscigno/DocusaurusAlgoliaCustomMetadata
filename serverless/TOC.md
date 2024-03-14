# Table of content

## Index

+ [Release Notes](./release_notes.md)
+ Introduction to CelerData Cloud
  + [What is CelerData Cloud?](./get_started/what_is_celerdata.md)
  + [What is Software edition in CelerData Cloud?](./account_and_organization/software_edition.md)
  + [Organize data objects](./account_and_organization/organize_data_objects.md)
+ Quick Start
  + [Sign up for CelerData Cloud](./get_started/signup.md)
  + [Connect to CelerData Cloud](./get_started/connect.md)
  + [Load data from cloud storage](./quickstart/loading_from_cloud_storage.md)
  + [Load data from Apache Kafka/Confluent Cloud](./quickstart/loading_from_confluent_cloud.md)
+ Warehouses
  + [Overview of warehouse](./warehouses/warehouse_overview.md)
  + [Manage warehouses](./warehouses/manage_warehouses.md)
  + [Best practices of warehouse](./warehouses/warehouse_best_practice.md)
+ Catalog, database, table, view, and MV
  + Table Type
    + [Table types](./catalog_database_table_view_MV/table_types/table_types.md)
    + [Duplicate Key table](./catalog_database_table_view_MV/table_types/duplicate_key_table.md)
    + [Aggregate table](./catalog_database_table_view_MV/table_types/aggregate_table.md)
    + [Unique Key table](./catalog_database_table_view_MV/table_types/unique_key_table.md)
    + [Primary Key table](./catalog_database_table_view_MV/table_types/primary_key_table.md)
  + [Logical views](./query_accelerate/view.md)
  + Asynchronous materialized views
    + [Overview](./query_accelerate/Materialized_view.md)
    + Use cases
      + [Data modeling](./query_accelerate/data_modeling_with_materialized_views.md)
      + [Query rewrite](./query_accelerate/query_rewrite_with_materialized_views.md)
      + [Data lake query acceleration](./query_accelerate/data_lake_query_acceleration_with_materialized_views.md)
    + Usage
      + [CREATE MATERIALIZED VIEW](./sql-reference/sql-statements/data-definition/CREATE_MATERIALIZED_VIEW.md)
      + [ALTER MATERIALIZED VIEW](./sql-reference/sql-statements/data-definition/ALTER_MATERIALIZED_VIEW.md)
      + [DROP MATERIALIZED VIEW](./sql-reference/sql-statements/data-definition/DROP_MATERIALIZED_VIEW.md)
      + [SHOW MATERIALIZED VIEWS](./sql-reference/sql-statements/data-manipulation/SHOW_MATERIALIZED_VIEW.md)
      + [information_schema.materialized_views](./reference/information_schema/materialized_views.md)
      + [Troubleshooting](./query_accelerate/troubleshooting_asynchronous_materialized_views.md)
+ Data Loading
  + [Batch load data from Amazon S3](./loading/loading_from_s3.md)
  + [Load streaming data from Confluent Cloud](./loading/loading_from_confluent_cloud.md)
  + [Load data from a local file system](./loading/loading_from_local.md)
+ Query Data Lakes
  + Catalog
    + [Overview](./query_data/catalog_overview.md)
    + [Default catalog](./query_data/default_catalog.md)
    + [Hive catalog](./query_data/hive_catalog.md)
    + [Iceberg catalog](./query_data/iceberg_catalog.md)
    + [Tabular catalog](./query_data/tabular_catalog.md)
    + [Hudi catalog](./query_data/hudi_catalog.md)
    + [Delta Lake catalog](./query_data/deltalake_catalog.md)
    + [Unified catalog](./query_data/unified_catalog.md)
+ Data Management
  + Access Control
    + [Overview of access control](./security/data_access_control/privilege_overview.md)
    + [Privileges](./security/data_access_control/privilege_item.md)
    + [Manage user privileges](./security/data_access_control/manage_users.md)
  + [Connect with a Private Link](./security/private_link.md)
+ Billing and Usage
  + [Understand usage and billing](./billing_and_usage/understand_usage_and_billing.md)
+ Account and Organization
  + [Organization and account](./account_and_organization/organization_and_account.md)
+ Integration
  + [Authenticate to AWS resources](./integration/authenticate_to_aws.md)
  + BI tools
    + [Hex](./integration/BI_integrations/Hex.md)
    + [Querybook](./integration/BI_integrations/Querybook.md)
    + [Apache Superset](./integration/BI_integrations/Superset.md)
    + [Tableau Desktop](./integration/BI_integrations/Tableau_Desktop.md)
  + IDE tools
    + [DataGrip](./integration/IDE_integrations/DataGrip.md)
    + [DBeaver](./integration/IDE_integrations/DBeaver.md)
+ Query Acceleration
  + [CBO](./query_accelerate/cbo.md)
  + [Colocate join](./query_accelerate/colocate_join.md)
  + Indexing
    + [Bitmap indexing](./query_accelerate/bitmap_indexing.md)
    + [Bloomfilter indexing](./query_accelerate/bloomfilter_indexing.md)
  + Data Deduplication
    + [Use Bitmap for exact count distinct](./query_accelerate/bitmap_deduplication.md)
    + [Use HLL for approximate count distinct](./query_accelerate/hll_deduplication.md)
  + [Lateral join](./query_accelerate/lateral_join.md)
+ Reference
  + [AWS IAM policies](./aws/aws_iam_policies.md)
  + Information Schema
    + [Overview](./reference/information_schema/information_schema.md)  
    + [be_bvars](./reference/information_schema/be_bvars.md)                                      
    + [be_cloud_native_compactions](./reference/information_schema/be_cloud_native_compactions.md)
    + [be_compactions](./reference/information_schema/be_compactions.md)                          
    + [character_sets](./reference/information_schema/character_sets.md)                          
    + [collations](./reference/information_schema/collations.md)                                  
    + [column_privileges](./reference/information_schema/column_privileges.md)                    
    + [columns](./reference/information_schema/columns.md)                                        
    + [engines](./reference/information_schema/engines.md)                                        
    + [events](./reference/information_schema/events.md)                                          
    + [global_variables](./reference/information_schema/global_variables.md)                      
    + [key_column_usage](./reference/information_schema/key_column_usage.md)                      
    + [load_tracking_logs](./reference/information_schema/load_tracking_logs.md)                  
    + [loads](./reference/information_schema/loads.md)                                            
    + [materialized_views](./reference/information_schema/materialized_views.md)                  
    + [partitions](./reference/information_schema/partitions.md)                                  
    + [pipe_files](./reference/information_schema/pipe_files.md)                                  
    + [pipes](./reference/information_schema/pipes.md)                                            
    + [referential_constraints](./reference/information_schema/referential_constraints.md)        
    + [routines](./reference/information_schema/routines.md)                                      
    + [schema_privileges](./reference/information_schema/schema_privileges.md)                    
    + [schemata](./reference/information_schema/schemata.md)                                      
    + [session_variables](./reference/information_schema/session_variables.md)                    
    + [statistics](./reference/information_schema/statistics.md)                                  
    + [table_constraints](./reference/information_schema/table_constraints.md)                    
    + [table_privileges](./reference/information_schema/table_privileges.md)                      
    + [tables](./reference/information_schema/tables.md)                                          
    + [tables_config](./reference/information_schema/tables_config.md)                            
    + [task_runs](./reference/information_schema/task_runs.md)                                    
    + [tasks](./reference/information_schema/tasks.md)                                            
    + [triggers](./reference/information_schema/triggers.md)                                      
    + [user_privileges](./reference/information_schema/user_privileges.md)                        
    + [views](./reference/information_schema/views.md)                                            
