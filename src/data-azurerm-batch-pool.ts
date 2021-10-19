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
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#certificate DataAzurermBatchPool#certificate}
  */
  readonly certificate?: DataAzurermBatchPoolCertificate[];
  /**
  * start_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#start_task DataAzurermBatchPool#start_task}
  */
  readonly startTask?: DataAzurermBatchPoolStartTask;
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
export interface DataAzurermBatchPoolCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#id DataAzurermBatchPool#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#store_location DataAzurermBatchPool#store_location}
  */
  readonly storeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#store_name DataAzurermBatchPool#store_name}
  */
  readonly storeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#visibility DataAzurermBatchPool#visibility}
  */
  readonly visibility?: string[];
}

function dataAzurermBatchPoolCertificateToTerraform(struct?: DataAzurermBatchPoolCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    store_location: cdktf.stringToTerraform(struct!.storeLocation),
    store_name: cdktf.stringToTerraform(struct!.storeName),
    visibility: cdktf.listMapper(cdktf.stringToTerraform)(struct!.visibility),
  }
}

export interface DataAzurermBatchPoolStartTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#command_line DataAzurermBatchPool#command_line}
  */
  readonly commandLine: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#environment DataAzurermBatchPool#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#max_task_retry_count DataAzurermBatchPool#max_task_retry_count}
  */
  readonly maxTaskRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#wait_for_success DataAzurermBatchPool#wait_for_success}
  */
  readonly waitForSuccess?: boolean | cdktf.IResolvable;
}

function dataAzurermBatchPoolStartTaskToTerraform(struct?: DataAzurermBatchPoolStartTaskOutputReference | DataAzurermBatchPoolStartTask): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line: cdktf.stringToTerraform(struct!.commandLine),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    max_task_retry_count: cdktf.numberToTerraform(struct!.maxTaskRetryCount),
    wait_for_success: cdktf.booleanToTerraform(struct!.waitForSuccess),
  }
}

export class DataAzurermBatchPoolStartTaskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // command_line - computed: false, optional: false, required: true
  private _commandLine?: string; 
  public get commandLine() {
    return this.getStringAttribute('command_line');
  }
  public set commandLine(value: string) {
    this._commandLine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandLineInput() {
    return this._commandLine
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get environment() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('environment') as any;
  }
  public set environment(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // max_task_retry_count - computed: false, optional: true, required: false
  private _maxTaskRetryCount?: number | undefined; 
  public get maxTaskRetryCount() {
    return this.getNumberAttribute('max_task_retry_count');
  }
  public set maxTaskRetryCount(value: number | undefined) {
    this._maxTaskRetryCount = value;
  }
  public resetMaxTaskRetryCount() {
    this._maxTaskRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskRetryCountInput() {
    return this._maxTaskRetryCount
  }

  // wait_for_success - computed: false, optional: true, required: false
  private _waitForSuccess?: boolean | cdktf.IResolvable | undefined; 
  public get waitForSuccess() {
    return this.getBooleanAttribute('wait_for_success') as any;
  }
  public set waitForSuccess(value: boolean | cdktf.IResolvable | undefined) {
    this._waitForSuccess = value;
  }
  public resetWaitForSuccess() {
    this._waitForSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSuccessInput() {
    return this._waitForSuccess
  }
}
export interface DataAzurermBatchPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/batch_pool.html#read DataAzurermBatchPool#read}
  */
  readonly read?: string;
}

function dataAzurermBatchPoolTimeoutsToTerraform(struct?: DataAzurermBatchPoolTimeoutsOutputReference | DataAzurermBatchPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermBatchPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    this._certificate = config.certificate;
    this._startTask = config.startTask;
    this._timeouts = config.timeouts;
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
    return this._accountName
  }

  // auto_scale - computed: true, optional: false, required: false
  public autoScale(index: string) {
    return new DataAzurermBatchPoolAutoScale(this, 'auto_scale', index);
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
    return this._name
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
    return this._resourceGroupName
  }

  // storage_image_reference - computed: true, optional: false, required: false
  public storageImageReference(index: string) {
    return new DataAzurermBatchPoolStorageImageReference(this, 'storage_image_reference', index);
  }

  // vm_size - computed: true, optional: false, required: false
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: DataAzurermBatchPoolCertificate[] | undefined; 
  public get certificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: DataAzurermBatchPoolCertificate[] | undefined) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // start_task - computed: false, optional: true, required: false
  private _startTask?: DataAzurermBatchPoolStartTask | undefined; 
  private __startTaskOutput = new DataAzurermBatchPoolStartTaskOutputReference(this as any, "start_task", true);
  public get startTask() {
    return this.__startTaskOutput;
  }
  public putStartTask(value: DataAzurermBatchPoolStartTask | undefined) {
    this._startTask = value;
  }
  public resetStartTask() {
    this._startTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTaskInput() {
    return this._startTask
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermBatchPoolTimeouts | undefined; 
  private __timeoutsOutput = new DataAzurermBatchPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataAzurermBatchPoolTimeouts | undefined) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      certificate: cdktf.listMapper(dataAzurermBatchPoolCertificateToTerraform)(this._certificate),
      start_task: dataAzurermBatchPoolStartTaskToTerraform(this._startTask),
      timeouts: dataAzurermBatchPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
