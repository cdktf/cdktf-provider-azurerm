// https://www.terraform.io/docs/providers/azurerm/r/data_azurerm_batch_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataAzurermBatchPoolConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** certificate block */
  readonly certificate?: DataAzurermBatchPoolCertificate[];
  /** network_configuration block */
  readonly networkConfiguration?: DataAzurermBatchPoolNetworkConfiguration[];
  /** start_task block */
  readonly startTask?: DataAzurermBatchPoolStartTask[];
  /** timeouts block */
  readonly timeouts?: DataAzurermBatchPoolTimeouts;
}
export class DataAzurermBatchPoolAutoScale extends ComplexComputedList {

  // evaluation_interval - computed: true, optional: false, required: true
  public get evaluationInterval() {
    return this.getStringAttribute('evaluation_interval');
  }

  // formula - computed: true, optional: false, required: true
  public get formula() {
    return this.getStringAttribute('formula');
  }
}
export class DataAzurermBatchPoolContainerConfigurationContainerRegistries extends ComplexComputedList {

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // registry_server - computed: true, optional: false, required: true
  public get registryServer() {
    return this.getStringAttribute('registry_server');
  }

  // user_name - computed: true, optional: false, required: true
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}
export class DataAzurermBatchPoolContainerConfiguration extends ComplexComputedList {

  // container_registries - computed: true, optional: false, required: true
  public get containerRegistries() {
    return 'not implemented' as any;
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAzurermBatchPoolFixedScale extends ComplexComputedList {

  // resize_timeout - computed: true, optional: false, required: true
  public get resizeTimeout() {
    return this.getStringAttribute('resize_timeout');
  }

  // target_dedicated_nodes - computed: true, optional: false, required: true
  public get targetDedicatedNodes() {
    return this.getNumberAttribute('target_dedicated_nodes');
  }

  // target_low_priority_nodes - computed: true, optional: false, required: true
  public get targetLowPriorityNodes() {
    return this.getNumberAttribute('target_low_priority_nodes');
  }
}
export class DataAzurermBatchPoolStorageImageReference extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // offer - computed: true, optional: false, required: true
  public get offer() {
    return this.getStringAttribute('offer');
  }

  // publisher - computed: true, optional: false, required: true
  public get publisher() {
    return this.getStringAttribute('publisher');
  }

  // sku - computed: true, optional: false, required: true
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // version - computed: true, optional: false, required: true
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
export interface DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules {
}
export interface DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration {
  /** network_security_group_rules block */
  readonly networkSecurityGroupRules?: DataAzurermBatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[];
}
export interface DataAzurermBatchPoolNetworkConfiguration {
  readonly subnetId?: string;
  /** endpoint_configuration block */
  readonly endpointConfiguration?: DataAzurermBatchPoolNetworkConfigurationEndpointConfiguration[];
}
export interface DataAzurermBatchPoolStartTask {
  readonly commandLine: string;
  readonly environment?: { [key: string]: string };
  readonly maxTaskRetryCount?: number;
  readonly waitForSuccess?: boolean;
}
export interface DataAzurermBatchPoolTimeouts {
  readonly read?: string;
}

// Resource

export class DataAzurermBatchPool extends TerraformDataSource {

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
    this._networkConfiguration = config.networkConfiguration;
    this._startTask = config.startTask;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this._accountName;
  }
  public set accountName(value: string) {
    this._accountName = value;
  }

  // auto_scale - computed: true, optional: false, required: true
  public autoScale(index: string) {
    return new DataAzurermBatchPoolAutoScale(this, 'auto_scale', index);
  }

  // container_configuration - computed: true, optional: false, required: true
  public containerConfiguration(index: string) {
    return new DataAzurermBatchPoolContainerConfiguration(this, 'container_configuration', index);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // fixed_scale - computed: true, optional: false, required: true
  public fixedScale(index: string) {
    return new DataAzurermBatchPoolFixedScale(this, 'fixed_scale', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_tasks_per_node - computed: true, optional: false, required: true
  public get maxTasksPerNode() {
    return this.getNumberAttribute('max_tasks_per_node');
  }

  // metadata - computed: true, optional: false, required: true
  public metadata(key: string): string {
    return new StringMap(this, 'metadata').lookup(key);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // node_agent_sku_id - computed: true, optional: false, required: true
  public get nodeAgentSkuId() {
    return this.getStringAttribute('node_agent_sku_id');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // storage_image_reference - computed: true, optional: false, required: true
  public storageImageReference(index: string) {
    return new DataAzurermBatchPoolStorageImageReference(this, 'storage_image_reference', index);
  }

  // vm_size - computed: true, optional: false, required: true
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: DataAzurermBatchPoolCertificate[];
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: DataAzurermBatchPoolCertificate[] | undefined) {
    this._certificate = value;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration?: DataAzurermBatchPoolNetworkConfiguration[];
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public set networkConfiguration(value: DataAzurermBatchPoolNetworkConfiguration[] | undefined) {
    this._networkConfiguration = value;
  }

  // start_task - computed: false, optional: true, required: false
  private _startTask?: DataAzurermBatchPoolStartTask[];
  public get startTask() {
    return this._startTask;
  }
  public set startTask(value: DataAzurermBatchPoolStartTask[] | undefined) {
    this._startTask = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataAzurermBatchPoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataAzurermBatchPoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      certificate: this._certificate,
      network_configuration: this._networkConfiguration,
      start_task: this._startTask,
      timeouts: this._timeouts,
    };
  }
}
