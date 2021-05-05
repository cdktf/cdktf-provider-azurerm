// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_batch_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermBatchPoolConfig extends cdktf.TerraformMetaArguments {
  readonly accountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** certificate block */
  readonly certificate?: DataAzurermBatchPoolCertificate[];
  /** start_task block */
  readonly startTask?: DataAzurermBatchPoolStartTask[];
  /** timeouts block */
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
  readonly id: string;
  readonly storeLocation: string;
  readonly storeName?: string;
  readonly visibility?: string[];
}

function dataAzurermBatchPoolCertificateToTerraform(struct?: DataAzurermBatchPoolCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    store_location: cdktf.stringToTerraform(struct!.storeLocation),
    store_name: cdktf.stringToTerraform(struct!.storeName),
    visibility: cdktf.listMapper(cdktf.stringToTerraform)(struct!.visibility),
  }
}

export interface DataAzurermBatchPoolStartTask {
  readonly commandLine: string;
  readonly environment?: { [key: string]: string };
  readonly maxTaskRetryCount?: number;
  readonly waitForSuccess?: boolean;
}

function dataAzurermBatchPoolStartTaskToTerraform(struct?: DataAzurermBatchPoolStartTask): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command_line: cdktf.stringToTerraform(struct!.commandLine),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    max_task_retry_count: cdktf.numberToTerraform(struct!.maxTaskRetryCount),
    wait_for_success: cdktf.booleanToTerraform(struct!.waitForSuccess),
  }
}

export interface DataAzurermBatchPoolTimeouts {
  readonly read?: string;
}

function dataAzurermBatchPoolTimeoutsToTerraform(struct?: DataAzurermBatchPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


// Resource

export class DataAzurermBatchPool extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _accountName: string;
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
  private _name: string;
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
  private _resourceGroupName: string;
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
  private _certificate?: DataAzurermBatchPoolCertificate[];
  public get certificate() {
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: DataAzurermBatchPoolCertificate[] ) {
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
  private _startTask?: DataAzurermBatchPoolStartTask[];
  public get startTask() {
    return this.interpolationForAttribute('start_task') as any;
  }
  public set startTask(value: DataAzurermBatchPoolStartTask[] ) {
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
  private _timeouts?: DataAzurermBatchPoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataAzurermBatchPoolTimeouts ) {
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
      start_task: cdktf.listMapper(dataAzurermBatchPoolStartTaskToTerraform)(this._startTask),
      timeouts: dataAzurermBatchPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
