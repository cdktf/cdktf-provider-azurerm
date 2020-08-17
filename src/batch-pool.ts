// https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BatchPoolConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly displayName?: string;
  readonly maxTasksPerNode?: number;
  readonly metadata?: { [key: string]: string };
  readonly name: string;
  readonly nodeAgentSkuId: string;
  readonly resourceGroupName: string;
  readonly stopPendingResizeOperation?: boolean;
  readonly vmSize: string;
  /** auto_scale block */
  readonly autoScale?: BatchPoolAutoScale[];
  /** certificate block */
  readonly certificate?: BatchPoolCertificate[];
  /** container_configuration block */
  readonly containerConfiguration?: BatchPoolContainerConfiguration[];
  /** fixed_scale block */
  readonly fixedScale?: BatchPoolFixedScale[];
  /** network_configuration block */
  readonly networkConfiguration?: BatchPoolNetworkConfiguration[];
  /** start_task block */
  readonly startTask?: BatchPoolStartTask[];
  /** storage_image_reference block */
  readonly storageImageReference: BatchPoolStorageImageReference[];
  /** timeouts block */
  readonly timeouts?: BatchPoolTimeouts;
}
export interface BatchPoolAutoScale {
  readonly evaluationInterval?: string;
  readonly formula: string;
}
export interface BatchPoolCertificate {
  readonly id: string;
  readonly storeLocation: string;
  readonly storeName?: string;
  readonly visibility?: string[];
}
export interface BatchPoolContainerConfigurationContainerRegistries {
  readonly password?: string;
  readonly registryServer?: string;
  readonly userName?: string;
}
export interface BatchPoolContainerConfiguration {
  readonly containerRegistries?: BatchPoolContainerConfigurationContainerRegistries[];
  readonly type?: string;
}
export interface BatchPoolFixedScale {
  readonly resizeTimeout?: string;
  readonly targetDedicatedNodes?: number;
  readonly targetLowPriorityNodes?: number;
}
export interface BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules {
  readonly access: string;
  readonly priority: number;
  readonly sourceAddressPrefix: string;
}
export interface BatchPoolNetworkConfigurationEndpointConfiguration {
  readonly backendPort: number;
  readonly frontendPortRange: string;
  readonly name: string;
  readonly protocol: string;
  /** network_security_group_rules block */
  readonly networkSecurityGroupRules?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[];
}
export interface BatchPoolNetworkConfiguration {
  readonly subnetId: string;
  /** endpoint_configuration block */
  readonly endpointConfiguration?: BatchPoolNetworkConfigurationEndpointConfiguration[];
}
export interface BatchPoolStartTaskResourceFile {
  readonly autoStorageContainerName?: string;
  readonly blobPrefix?: string;
  readonly fileMode?: string;
  readonly filePath?: string;
  readonly httpUrl?: string;
  readonly storageContainerUrl?: string;
}
export interface BatchPoolStartTaskUserIdentityAutoUser {
  readonly elevationLevel?: string;
  readonly scope?: string;
}
export interface BatchPoolStartTaskUserIdentity {
  readonly userName?: string;
  /** auto_user block */
  readonly autoUser?: BatchPoolStartTaskUserIdentityAutoUser[];
}
export interface BatchPoolStartTask {
  readonly commandLine: string;
  readonly environment?: { [key: string]: string };
  readonly maxTaskRetryCount?: number;
  readonly waitForSuccess?: boolean;
  /** resource_file block */
  readonly resourceFile?: BatchPoolStartTaskResourceFile[];
  /** user_identity block */
  readonly userIdentity: BatchPoolStartTaskUserIdentity[];
}
export interface BatchPoolStorageImageReference {
  readonly id?: string;
  readonly offer?: string;
  readonly publisher?: string;
  readonly sku?: string;
  readonly version?: string;
}
export interface BatchPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class BatchPool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BatchPoolConfig) {
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
    this._displayName = config.displayName;
    this._maxTasksPerNode = config.maxTasksPerNode;
    this._metadata = config.metadata;
    this._name = config.name;
    this._nodeAgentSkuId = config.nodeAgentSkuId;
    this._resourceGroupName = config.resourceGroupName;
    this._stopPendingResizeOperation = config.stopPendingResizeOperation;
    this._vmSize = config.vmSize;
    this._autoScale = config.autoScale;
    this._certificate = config.certificate;
    this._containerConfiguration = config.containerConfiguration;
    this._fixedScale = config.fixedScale;
    this._networkConfiguration = config.networkConfiguration;
    this._startTask = config.startTask;
    this._storageImageReference = config.storageImageReference;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_tasks_per_node - computed: false, optional: true, required: false
  private _maxTasksPerNode?: number;
  public get maxTasksPerNode() {
    return this._maxTasksPerNode;
  }
  public set maxTasksPerNode(value: number | undefined) {
    this._maxTasksPerNode = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // node_agent_sku_id - computed: false, optional: false, required: true
  private _nodeAgentSkuId: string;
  public get nodeAgentSkuId() {
    return this._nodeAgentSkuId;
  }
  public set nodeAgentSkuId(value: string) {
    this._nodeAgentSkuId = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // stop_pending_resize_operation - computed: false, optional: true, required: false
  private _stopPendingResizeOperation?: boolean;
  public get stopPendingResizeOperation() {
    return this._stopPendingResizeOperation;
  }
  public set stopPendingResizeOperation(value: boolean | undefined) {
    this._stopPendingResizeOperation = value;
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize: string;
  public get vmSize() {
    return this._vmSize;
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale?: BatchPoolAutoScale[];
  public get autoScale() {
    return this._autoScale;
  }
  public set autoScale(value: BatchPoolAutoScale[] | undefined) {
    this._autoScale = value;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: BatchPoolCertificate[];
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: BatchPoolCertificate[] | undefined) {
    this._certificate = value;
  }

  // container_configuration - computed: false, optional: true, required: false
  private _containerConfiguration?: BatchPoolContainerConfiguration[];
  public get containerConfiguration() {
    return this._containerConfiguration;
  }
  public set containerConfiguration(value: BatchPoolContainerConfiguration[] | undefined) {
    this._containerConfiguration = value;
  }

  // fixed_scale - computed: false, optional: true, required: false
  private _fixedScale?: BatchPoolFixedScale[];
  public get fixedScale() {
    return this._fixedScale;
  }
  public set fixedScale(value: BatchPoolFixedScale[] | undefined) {
    this._fixedScale = value;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration?: BatchPoolNetworkConfiguration[];
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public set networkConfiguration(value: BatchPoolNetworkConfiguration[] | undefined) {
    this._networkConfiguration = value;
  }

  // start_task - computed: false, optional: true, required: false
  private _startTask?: BatchPoolStartTask[];
  public get startTask() {
    return this._startTask;
  }
  public set startTask(value: BatchPoolStartTask[] | undefined) {
    this._startTask = value;
  }

  // storage_image_reference - computed: false, optional: false, required: true
  private _storageImageReference: BatchPoolStorageImageReference[];
  public get storageImageReference() {
    return this._storageImageReference;
  }
  public set storageImageReference(value: BatchPoolStorageImageReference[]) {
    this._storageImageReference = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchPoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BatchPoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: this._accountName,
      display_name: this._displayName,
      max_tasks_per_node: this._maxTasksPerNode,
      metadata: this._metadata,
      name: this._name,
      node_agent_sku_id: this._nodeAgentSkuId,
      resource_group_name: this._resourceGroupName,
      stop_pending_resize_operation: this._stopPendingResizeOperation,
      vm_size: this._vmSize,
      auto_scale: this._autoScale,
      certificate: this._certificate,
      container_configuration: this._containerConfiguration,
      fixed_scale: this._fixedScale,
      network_configuration: this._networkConfiguration,
      start_task: this._startTask,
      storage_image_reference: this._storageImageReference,
      timeouts: this._timeouts,
    };
  }
}
