// https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBatchPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#account_name DataAzurermBatchPool#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#name DataAzurermBatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#resource_group_name DataAzurermBatchPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#timeouts DataAzurermBatchPool#timeouts}
  */
  readonly timeouts?: DataAzurermBatchPoolTimeouts;
}
export class DataAzurermBatchPoolAutoScale extends cdktf.ComplexComputedList {

  // evaluation_interval - computed: true, optional: false, required: false
  public get evaluationInterval() {
    return this.getStringAttribute('evaluation_interval');
  }

  // formula - computed: true, optional: false, required: false
  public get formula() {
    return this.getStringAttribute('formula');
  }
}
export class DataAzurermBatchPoolCertificate extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // store_location - computed: true, optional: false, required: false
  public get storeLocation() {
    return this.getStringAttribute('store_location');
  }

  // store_name - computed: true, optional: false, required: false
  public get storeName() {
    return this.getStringAttribute('store_name');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getListAttribute('visibility');
  }
}
export class DataAzurermBatchPoolContainerConfigurationContainerRegistries extends cdktf.ComplexComputedList {

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // registry_server - computed: true, optional: false, required: false
  public get registryServer() {
    return this.getStringAttribute('registry_server');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}
export class DataAzurermBatchPoolContainerConfiguration extends cdktf.ComplexComputedList {

  // container_image_names - computed: true, optional: false, required: false
  public get containerImageNames() {
    return this.getListAttribute('container_image_names');
  }

  // container_registries - computed: true, optional: false, required: false
  public get containerRegistries() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('container_registries') as any;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAzurermBatchPoolFixedScale extends cdktf.ComplexComputedList {

  // resize_timeout - computed: true, optional: false, required: false
  public get resizeTimeout() {
    return this.getStringAttribute('resize_timeout');
  }

  // target_dedicated_nodes - computed: true, optional: false, required: false
  public get targetDedicatedNodes() {
    return this.getNumberAttribute('target_dedicated_nodes');
  }

  // target_low_priority_nodes - computed: true, optional: false, required: false
  public get targetLowPriorityNodes() {
    return this.getNumberAttribute('target_low_priority_nodes');
  }
}
export class DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules extends cdktf.ComplexComputedList {

  // access - computed: true, optional: false, required: false
  public get access() {
    return this.getStringAttribute('access');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // source_address_prefix - computed: true, optional: false, required: false
  public get sourceAddressPrefix() {
    return this.getStringAttribute('source_address_prefix');
  }
}
export class DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration extends cdktf.ComplexComputedList {

  // backend_port - computed: true, optional: false, required: false
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }

  // frontend_port_range - computed: true, optional: false, required: false
  public get frontendPortRange() {
    return this.getStringAttribute('frontend_port_range');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_security_group_rules - computed: true, optional: false, required: false
  public get networkSecurityGroupRules() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('network_security_group_rules') as any;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export class DataAzurermBatchPoolNetworkConfiguration extends cdktf.ComplexComputedList {

  // endpoint_configuration - computed: true, optional: false, required: false
  public get endpointConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('endpoint_configuration') as any;
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataAzurermBatchPoolStartTaskResourceFile extends cdktf.ComplexComputedList {

  // auto_storage_container_name - computed: true, optional: false, required: false
  public get autoStorageContainerName() {
    return this.getStringAttribute('auto_storage_container_name');
  }

  // blob_prefix - computed: true, optional: false, required: false
  public get blobPrefix() {
    return this.getStringAttribute('blob_prefix');
  }

  // file_mode - computed: true, optional: false, required: false
  public get fileMode() {
    return this.getStringAttribute('file_mode');
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }

  // storage_container_url - computed: true, optional: false, required: false
  public get storageContainerUrl() {
    return this.getStringAttribute('storage_container_url');
  }
}
export class DataAzurermBatchPoolStartTaskUserIdentityAutoUser extends cdktf.ComplexComputedList {

  // elevation_level - computed: true, optional: false, required: false
  public get elevationLevel() {
    return this.getStringAttribute('elevation_level');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export class DataAzurermBatchPoolStartTaskUserIdentity extends cdktf.ComplexComputedList {

  // auto_user - computed: true, optional: false, required: false
  public get autoUser() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('auto_user') as any;
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}
export class DataAzurermBatchPoolStartTask extends cdktf.ComplexComputedList {

  // command_line - computed: true, optional: false, required: false
  public get commandLine() {
    return this.getStringAttribute('command_line');
  }

  // common_environment_properties - computed: true, optional: false, required: false
  public get commonEnvironmentProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('common_environment_properties') as any;
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('environment') as any;
  }

  // max_task_retry_count - computed: true, optional: false, required: false
  public get maxTaskRetryCount() {
    return this.getNumberAttribute('max_task_retry_count');
  }

  // resource_file - computed: true, optional: false, required: false
  public get resourceFile() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_file') as any;
  }

  // task_retry_maximum - computed: true, optional: false, required: false
  public get taskRetryMaximum() {
    return this.getNumberAttribute('task_retry_maximum');
  }

  // user_identity - computed: true, optional: false, required: false
  public get userIdentity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_identity') as any;
  }

  // wait_for_success - computed: true, optional: false, required: false
  public get waitForSuccess() {
    return this.getBooleanAttribute('wait_for_success') as any;
  }
}
export class DataAzurermBatchPoolStorageImageReference extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // offer - computed: true, optional: false, required: false
  public get offer() {
    return this.getStringAttribute('offer');
  }

  // publisher - computed: true, optional: false, required: false
  public get publisher() {
    return this.getStringAttribute('publisher');
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAzurermBatchPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#read DataAzurermBatchPool#read}
  */
  readonly read?: string;
}

export function dataAzurermBatchPoolTimeoutsToTerraform(struct?: DataAzurermBatchPoolTimeoutsOutputReference | DataAzurermBatchPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermBatchPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermBatchPoolTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermBatchPoolTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html azurerm_batch_pool}
*/
export class DataAzurermBatchPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_batch_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html azurerm_batch_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermBatchPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermBatchPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_batch_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // auto_scale - computed: true, optional: false, required: false
  public autoScale(index: string) {
    return new DataAzurermBatchPoolAutoScale(this, 'auto_scale', index);
  }

  // certificate - computed: true, optional: false, required: false
  public certificate(index: string) {
    return new DataAzurermBatchPoolCertificate(this, 'certificate', index);
  }

  // container_configuration - computed: true, optional: false, required: false
  public containerConfiguration(index: string) {
    return new DataAzurermBatchPoolContainerConfiguration(this, 'container_configuration', index);
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fixed_scale - computed: true, optional: false, required: false
  public fixedScale(index: string) {
    return new DataAzurermBatchPoolFixedScale(this, 'fixed_scale', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_tasks_per_node - computed: true, optional: false, required: false
  public get maxTasksPerNode() {
    return this.getNumberAttribute('max_tasks_per_node');
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
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
    return this._name;
  }

  // network_configuration - computed: true, optional: false, required: false
  public networkConfiguration(index: string) {
    return new DataAzurermBatchPoolNetworkConfiguration(this, 'network_configuration', index);
  }

  // node_agent_sku_id - computed: true, optional: false, required: false
  public get nodeAgentSkuId() {
    return this.getStringAttribute('node_agent_sku_id');
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
    return this._resourceGroupName;
  }

  // start_task - computed: true, optional: false, required: false
  public startTask(index: string) {
    return new DataAzurermBatchPoolStartTask(this, 'start_task', index);
  }

  // storage_image_reference - computed: true, optional: false, required: false
  public storageImageReference(index: string) {
    return new DataAzurermBatchPoolStorageImageReference(this, 'storage_image_reference', index);
  }

  // vm_size - computed: true, optional: false, required: false
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermBatchPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermBatchPoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermBatchPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
