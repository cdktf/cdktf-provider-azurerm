// https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryLinkedServiceAzureDatabricksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#access_token DataFactoryLinkedServiceAzureDatabricks#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#adb_domain DataFactoryLinkedServiceAzureDatabricks#adb_domain}
  */
  readonly adbDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#additional_properties DataFactoryLinkedServiceAzureDatabricks#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#annotations DataFactoryLinkedServiceAzureDatabricks#annotations}
  */
  readonly annotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#data_factory_name DataFactoryLinkedServiceAzureDatabricks#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#description DataFactoryLinkedServiceAzureDatabricks#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#existing_cluster_id DataFactoryLinkedServiceAzureDatabricks#existing_cluster_id}
  */
  readonly existingClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#integration_runtime_name DataFactoryLinkedServiceAzureDatabricks#integration_runtime_name}
  */
  readonly integrationRuntimeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#msi_work_space_resource_id DataFactoryLinkedServiceAzureDatabricks#msi_work_space_resource_id}
  */
  readonly msiWorkSpaceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#name DataFactoryLinkedServiceAzureDatabricks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#parameters DataFactoryLinkedServiceAzureDatabricks#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#resource_group_name DataFactoryLinkedServiceAzureDatabricks#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * instance_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#instance_pool DataFactoryLinkedServiceAzureDatabricks#instance_pool}
  */
  readonly instancePool?: DataFactoryLinkedServiceAzureDatabricksInstancePool;
  /**
  * key_vault_password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#key_vault_password DataFactoryLinkedServiceAzureDatabricks#key_vault_password}
  */
  readonly keyVaultPassword?: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword;
  /**
  * new_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#new_cluster_config DataFactoryLinkedServiceAzureDatabricks#new_cluster_config}
  */
  readonly newClusterConfig?: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#timeouts DataFactoryLinkedServiceAzureDatabricks#timeouts}
  */
  readonly timeouts?: DataFactoryLinkedServiceAzureDatabricksTimeouts;
}
export interface DataFactoryLinkedServiceAzureDatabricksInstancePool {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#instance_pool_id DataFactoryLinkedServiceAzureDatabricks#instance_pool_id}
  */
  readonly instancePoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}
  */
  readonly maxNumberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}
  */
  readonly minNumberOfWorkers?: number;
}

function dataFactoryLinkedServiceAzureDatabricksInstancePoolToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference | DataFactoryLinkedServiceAzureDatabricksInstancePool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_version: cdktf.stringToTerraform(struct!.clusterVersion),
    instance_pool_id: cdktf.stringToTerraform(struct!.instancePoolId),
    max_number_of_workers: cdktf.numberToTerraform(struct!.maxNumberOfWorkers),
    min_number_of_workers: cdktf.numberToTerraform(struct!.minNumberOfWorkers),
  }
}

export class DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion
  }

  // instance_pool_id - computed: false, optional: false, required: true
  private _instancePoolId?: string; 
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }
  public set instancePoolId(value: string) {
    this._instancePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolIdInput() {
    return this._instancePoolId
  }

  // max_number_of_workers - computed: false, optional: true, required: false
  private _maxNumberOfWorkers?: number | undefined; 
  public get maxNumberOfWorkers() {
    return this.getNumberAttribute('max_number_of_workers');
  }
  public set maxNumberOfWorkers(value: number | undefined) {
    this._maxNumberOfWorkers = value;
  }
  public resetMaxNumberOfWorkers() {
    this._maxNumberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfWorkersInput() {
    return this._maxNumberOfWorkers
  }

  // min_number_of_workers - computed: false, optional: true, required: false
  private _minNumberOfWorkers?: number | undefined; 
  public get minNumberOfWorkers() {
    return this.getNumberAttribute('min_number_of_workers');
  }
  public set minNumberOfWorkers(value: number | undefined) {
    this._minNumberOfWorkers = value;
  }
  public resetMinNumberOfWorkers() {
    this._minNumberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumberOfWorkersInput() {
    return this._minNumberOfWorkers
  }
}
export interface DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#linked_service_name DataFactoryLinkedServiceAzureDatabricks#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#secret_name DataFactoryLinkedServiceAzureDatabricks#secret_name}
  */
  readonly secretName: string;
}

function dataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference | DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName?: string; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
  }
}
export interface DataFactoryLinkedServiceAzureDatabricksNewClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#cluster_version DataFactoryLinkedServiceAzureDatabricks#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#custom_tags DataFactoryLinkedServiceAzureDatabricks#custom_tags}
  */
  readonly customTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#driver_node_type DataFactoryLinkedServiceAzureDatabricks#driver_node_type}
  */
  readonly driverNodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#init_scripts DataFactoryLinkedServiceAzureDatabricks#init_scripts}
  */
  readonly initScripts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#log_destination DataFactoryLinkedServiceAzureDatabricks#log_destination}
  */
  readonly logDestination?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#max_number_of_workers DataFactoryLinkedServiceAzureDatabricks#max_number_of_workers}
  */
  readonly maxNumberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#min_number_of_workers DataFactoryLinkedServiceAzureDatabricks#min_number_of_workers}
  */
  readonly minNumberOfWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#node_type DataFactoryLinkedServiceAzureDatabricks#node_type}
  */
  readonly nodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#spark_config DataFactoryLinkedServiceAzureDatabricks#spark_config}
  */
  readonly sparkConfig?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#spark_environment_variables DataFactoryLinkedServiceAzureDatabricks#spark_environment_variables}
  */
  readonly sparkEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable;
}

function dataFactoryLinkedServiceAzureDatabricksNewClusterConfigToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference | DataFactoryLinkedServiceAzureDatabricksNewClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_version: cdktf.stringToTerraform(struct!.clusterVersion),
    custom_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.customTags),
    driver_node_type: cdktf.stringToTerraform(struct!.driverNodeType),
    init_scripts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.initScripts),
    log_destination: cdktf.stringToTerraform(struct!.logDestination),
    max_number_of_workers: cdktf.numberToTerraform(struct!.maxNumberOfWorkers),
    min_number_of_workers: cdktf.numberToTerraform(struct!.minNumberOfWorkers),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    spark_config: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.sparkConfig),
    spark_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.sparkEnvironmentVariables),
  }
}

export class DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get customTags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_tags') as any;
  }
  public set customTags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._customTags = value;
  }
  public resetCustomTags() {
    this._customTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags
  }

  // driver_node_type - computed: false, optional: true, required: false
  private _driverNodeType?: string | undefined; 
  public get driverNodeType() {
    return this.getStringAttribute('driver_node_type');
  }
  public set driverNodeType(value: string | undefined) {
    this._driverNodeType = value;
  }
  public resetDriverNodeType() {
    this._driverNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverNodeTypeInput() {
    return this._driverNodeType
  }

  // init_scripts - computed: false, optional: true, required: false
  private _initScripts?: string[] | undefined; 
  public get initScripts() {
    return this.getListAttribute('init_scripts');
  }
  public set initScripts(value: string[] | undefined) {
    this._initScripts = value;
  }
  public resetInitScripts() {
    this._initScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initScriptsInput() {
    return this._initScripts
  }

  // log_destination - computed: false, optional: true, required: false
  private _logDestination?: string | undefined; 
  public get logDestination() {
    return this.getStringAttribute('log_destination');
  }
  public set logDestination(value: string | undefined) {
    this._logDestination = value;
  }
  public resetLogDestination() {
    this._logDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationInput() {
    return this._logDestination
  }

  // max_number_of_workers - computed: false, optional: true, required: false
  private _maxNumberOfWorkers?: number | undefined; 
  public get maxNumberOfWorkers() {
    return this.getNumberAttribute('max_number_of_workers');
  }
  public set maxNumberOfWorkers(value: number | undefined) {
    this._maxNumberOfWorkers = value;
  }
  public resetMaxNumberOfWorkers() {
    this._maxNumberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumberOfWorkersInput() {
    return this._maxNumberOfWorkers
  }

  // min_number_of_workers - computed: false, optional: true, required: false
  private _minNumberOfWorkers?: number | undefined; 
  public get minNumberOfWorkers() {
    return this.getNumberAttribute('min_number_of_workers');
  }
  public set minNumberOfWorkers(value: number | undefined) {
    this._minNumberOfWorkers = value;
  }
  public resetMinNumberOfWorkers() {
    this._minNumberOfWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumberOfWorkersInput() {
    return this._minNumberOfWorkers
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType
  }

  // spark_config - computed: false, optional: true, required: false
  private _sparkConfig?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get sparkConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('spark_config') as any;
  }
  public set sparkConfig(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._sparkConfig = value;
  }
  public resetSparkConfig() {
    this._sparkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConfigInput() {
    return this._sparkConfig
  }

  // spark_environment_variables - computed: false, optional: true, required: false
  private _sparkEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get sparkEnvironmentVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('spark_environment_variables') as any;
  }
  public set sparkEnvironmentVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._sparkEnvironmentVariables = value;
  }
  public resetSparkEnvironmentVariables() {
    this._sparkEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkEnvironmentVariablesInput() {
    return this._sparkEnvironmentVariables
  }
}
export interface DataFactoryLinkedServiceAzureDatabricksTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#create DataFactoryLinkedServiceAzureDatabricks#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#delete DataFactoryLinkedServiceAzureDatabricks#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#read DataFactoryLinkedServiceAzureDatabricks#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html#update DataFactoryLinkedServiceAzureDatabricks#update}
  */
  readonly update?: string;
}

function dataFactoryLinkedServiceAzureDatabricksTimeoutsToTerraform(struct?: DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference | DataFactoryLinkedServiceAzureDatabricksTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html azurerm_data_factory_linked_service_azure_databricks}
*/
export class DataFactoryLinkedServiceAzureDatabricks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_linked_service_azure_databricks";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_linked_service_azure_databricks.html azurerm_data_factory_linked_service_azure_databricks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryLinkedServiceAzureDatabricksConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryLinkedServiceAzureDatabricksConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_linked_service_azure_databricks',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessToken = config.accessToken;
    this._adbDomain = config.adbDomain;
    this._additionalProperties = config.additionalProperties;
    this._annotations = config.annotations;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._existingClusterId = config.existingClusterId;
    this._integrationRuntimeName = config.integrationRuntimeName;
    this._msiWorkSpaceResourceId = config.msiWorkSpaceResourceId;
    this._name = config.name;
    this._parameters = config.parameters;
    this._resourceGroupName = config.resourceGroupName;
    this._instancePool = config.instancePool;
    this._keyVaultPassword = config.keyVaultPassword;
    this._newClusterConfig = config.newClusterConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string | undefined; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken
  }

  // adb_domain - computed: false, optional: false, required: true
  private _adbDomain?: string; 
  public get adbDomain() {
    return this.getStringAttribute('adb_domain');
  }
  public set adbDomain(value: string) {
    this._adbDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adbDomainInput() {
    return this._adbDomain
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get additionalProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_properties') as any;
  }
  public set additionalProperties(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: string[] | undefined; 
  public get annotations() {
    return this.getListAttribute('annotations');
  }
  public set annotations(value: string[] | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName?: string; 
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // existing_cluster_id - computed: false, optional: true, required: false
  private _existingClusterId?: string | undefined; 
  public get existingClusterId() {
    return this.getStringAttribute('existing_cluster_id');
  }
  public set existingClusterId(value: string | undefined) {
    this._existingClusterId = value;
  }
  public resetExistingClusterId() {
    this._existingClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingClusterIdInput() {
    return this._existingClusterId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_runtime_name - computed: false, optional: true, required: false
  private _integrationRuntimeName?: string | undefined; 
  public get integrationRuntimeName() {
    return this.getStringAttribute('integration_runtime_name');
  }
  public set integrationRuntimeName(value: string | undefined) {
    this._integrationRuntimeName = value;
  }
  public resetIntegrationRuntimeName() {
    this._integrationRuntimeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationRuntimeNameInput() {
    return this._integrationRuntimeName
  }

  // msi_work_space_resource_id - computed: false, optional: true, required: false
  private _msiWorkSpaceResourceId?: string | undefined; 
  public get msiWorkSpaceResourceId() {
    return this.getStringAttribute('msi_work_space_resource_id');
  }
  public set msiWorkSpaceResourceId(value: string | undefined) {
    this._msiWorkSpaceResourceId = value;
  }
  public resetMsiWorkSpaceResourceId() {
    this._msiWorkSpaceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiWorkSpaceResourceIdInput() {
    return this._msiWorkSpaceResourceId
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // instance_pool - computed: false, optional: true, required: false
  private _instancePool?: DataFactoryLinkedServiceAzureDatabricksInstancePool | undefined; 
  private __instancePoolOutput = new DataFactoryLinkedServiceAzureDatabricksInstancePoolOutputReference(this as any, "instance_pool", true);
  public get instancePool() {
    return this.__instancePoolOutput;
  }
  public putInstancePool(value: DataFactoryLinkedServiceAzureDatabricksInstancePool | undefined) {
    this._instancePool = value;
  }
  public resetInstancePool() {
    this._instancePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancePoolInput() {
    return this._instancePool
  }

  // key_vault_password - computed: false, optional: true, required: false
  private _keyVaultPassword?: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword | undefined; 
  private __keyVaultPasswordOutput = new DataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordOutputReference(this as any, "key_vault_password", true);
  public get keyVaultPassword() {
    return this.__keyVaultPasswordOutput;
  }
  public putKeyVaultPassword(value: DataFactoryLinkedServiceAzureDatabricksKeyVaultPassword | undefined) {
    this._keyVaultPassword = value;
  }
  public resetKeyVaultPassword() {
    this._keyVaultPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultPasswordInput() {
    return this._keyVaultPassword
  }

  // new_cluster_config - computed: false, optional: true, required: false
  private _newClusterConfig?: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig | undefined; 
  private __newClusterConfigOutput = new DataFactoryLinkedServiceAzureDatabricksNewClusterConfigOutputReference(this as any, "new_cluster_config", true);
  public get newClusterConfig() {
    return this.__newClusterConfigOutput;
  }
  public putNewClusterConfig(value: DataFactoryLinkedServiceAzureDatabricksNewClusterConfig | undefined) {
    this._newClusterConfig = value;
  }
  public resetNewClusterConfig() {
    this._newClusterConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newClusterConfigInput() {
    return this._newClusterConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataFactoryLinkedServiceAzureDatabricksTimeouts | undefined; 
  private __timeoutsOutput = new DataFactoryLinkedServiceAzureDatabricksTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataFactoryLinkedServiceAzureDatabricksTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      adb_domain: cdktf.stringToTerraform(this._adbDomain),
      additional_properties: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalProperties),
      annotations: cdktf.listMapper(cdktf.stringToTerraform)(this._annotations),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      existing_cluster_id: cdktf.stringToTerraform(this._existingClusterId),
      integration_runtime_name: cdktf.stringToTerraform(this._integrationRuntimeName),
      msi_work_space_resource_id: cdktf.stringToTerraform(this._msiWorkSpaceResourceId),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      instance_pool: dataFactoryLinkedServiceAzureDatabricksInstancePoolToTerraform(this._instancePool),
      key_vault_password: dataFactoryLinkedServiceAzureDatabricksKeyVaultPasswordToTerraform(this._keyVaultPassword),
      new_cluster_config: dataFactoryLinkedServiceAzureDatabricksNewClusterConfigToTerraform(this._newClusterConfig),
      timeouts: dataFactoryLinkedServiceAzureDatabricksTimeoutsToTerraform(this._timeouts),
    };
  }
}
