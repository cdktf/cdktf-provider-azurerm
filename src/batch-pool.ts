// https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchPoolConfig extends cdktf.TerraformMetaArguments {
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

function batchPoolAutoScaleToTerraform(struct?: BatchPoolAutoScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    evaluation_interval: cdktf.stringToTerraform(struct!.evaluationInterval),
    formula: cdktf.stringToTerraform(struct!.formula),
  }
}

export interface BatchPoolCertificate {
  readonly id: string;
  readonly storeLocation: string;
  readonly storeName?: string;
  readonly visibility?: string[];
}

function batchPoolCertificateToTerraform(struct?: BatchPoolCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    store_location: cdktf.stringToTerraform(struct!.storeLocation),
    store_name: cdktf.stringToTerraform(struct!.storeName),
    visibility: cdktf.listMapper(cdktf.stringToTerraform)(struct!.visibility),
  }
}

export interface BatchPoolContainerConfigurationContainerRegistries {
  readonly password?: string;
  readonly registryServer?: string;
  readonly userName?: string;
}

function batchPoolContainerConfigurationContainerRegistriesToTerraform(struct?: BatchPoolContainerConfigurationContainerRegistries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry_server: cdktf.stringToTerraform(struct!.registryServer),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}

export interface BatchPoolContainerConfiguration {
  readonly containerImageNames?: string[];
  readonly containerRegistries?: BatchPoolContainerConfigurationContainerRegistries[];
  readonly type?: string;
}

function batchPoolContainerConfigurationToTerraform(struct?: BatchPoolContainerConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_image_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerImageNames),
    container_registries: cdktf.listMapper(batchPoolContainerConfigurationContainerRegistriesToTerraform)(struct!.containerRegistries),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface BatchPoolFixedScale {
  readonly resizeTimeout?: string;
  readonly targetDedicatedNodes?: number;
  readonly targetLowPriorityNodes?: number;
}

function batchPoolFixedScaleToTerraform(struct?: BatchPoolFixedScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resize_timeout: cdktf.stringToTerraform(struct!.resizeTimeout),
    target_dedicated_nodes: cdktf.numberToTerraform(struct!.targetDedicatedNodes),
    target_low_priority_nodes: cdktf.numberToTerraform(struct!.targetLowPriorityNodes),
  }
}

export interface BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules {
  readonly access: string;
  readonly priority: number;
  readonly sourceAddressPrefix: string;
}

function batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    priority: cdktf.numberToTerraform(struct!.priority),
    source_address_prefix: cdktf.stringToTerraform(struct!.sourceAddressPrefix),
  }
}

export interface BatchPoolNetworkConfigurationEndpointConfiguration {
  readonly backendPort: number;
  readonly frontendPortRange: string;
  readonly name: string;
  readonly protocol: string;
  /** network_security_group_rules block */
  readonly networkSecurityGroupRules?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[];
}

function batchPoolNetworkConfigurationEndpointConfigurationToTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_port: cdktf.numberToTerraform(struct!.backendPort),
    frontend_port_range: cdktf.stringToTerraform(struct!.frontendPortRange),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    network_security_group_rules: cdktf.listMapper(batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToTerraform)(struct!.networkSecurityGroupRules),
  }
}

export interface BatchPoolNetworkConfiguration {
  readonly publicIps?: string[];
  readonly subnetId: string;
  /** endpoint_configuration block */
  readonly endpointConfiguration?: BatchPoolNetworkConfigurationEndpointConfiguration[];
}

function batchPoolNetworkConfigurationToTerraform(struct?: BatchPoolNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    public_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.publicIps),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    endpoint_configuration: cdktf.listMapper(batchPoolNetworkConfigurationEndpointConfigurationToTerraform)(struct!.endpointConfiguration),
  }
}

export interface BatchPoolStartTaskResourceFile {
  readonly autoStorageContainerName?: string;
  readonly blobPrefix?: string;
  readonly fileMode?: string;
  readonly filePath?: string;
  readonly httpUrl?: string;
  readonly storageContainerUrl?: string;
}

function batchPoolStartTaskResourceFileToTerraform(struct?: BatchPoolStartTaskResourceFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_storage_container_name: cdktf.stringToTerraform(struct!.autoStorageContainerName),
    blob_prefix: cdktf.stringToTerraform(struct!.blobPrefix),
    file_mode: cdktf.stringToTerraform(struct!.fileMode),
    file_path: cdktf.stringToTerraform(struct!.filePath),
    http_url: cdktf.stringToTerraform(struct!.httpUrl),
    storage_container_url: cdktf.stringToTerraform(struct!.storageContainerUrl),
  }
}

export interface BatchPoolStartTaskUserIdentityAutoUser {
  readonly elevationLevel?: string;
  readonly scope?: string;
}

function batchPoolStartTaskUserIdentityAutoUserToTerraform(struct?: BatchPoolStartTaskUserIdentityAutoUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    elevation_level: cdktf.stringToTerraform(struct!.elevationLevel),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export interface BatchPoolStartTaskUserIdentity {
  readonly userName?: string;
  /** auto_user block */
  readonly autoUser?: BatchPoolStartTaskUserIdentityAutoUser[];
}

function batchPoolStartTaskUserIdentityToTerraform(struct?: BatchPoolStartTaskUserIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
    auto_user: cdktf.listMapper(batchPoolStartTaskUserIdentityAutoUserToTerraform)(struct!.autoUser),
  }
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

function batchPoolStartTaskToTerraform(struct?: BatchPoolStartTask): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command_line: cdktf.stringToTerraform(struct!.commandLine),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    max_task_retry_count: cdktf.numberToTerraform(struct!.maxTaskRetryCount),
    wait_for_success: cdktf.booleanToTerraform(struct!.waitForSuccess),
    resource_file: cdktf.listMapper(batchPoolStartTaskResourceFileToTerraform)(struct!.resourceFile),
    user_identity: cdktf.listMapper(batchPoolStartTaskUserIdentityToTerraform)(struct!.userIdentity),
  }
}

export interface BatchPoolStorageImageReference {
  readonly id?: string;
  readonly offer?: string;
  readonly publisher?: string;
  readonly sku?: string;
  readonly version?: string;
}

function batchPoolStorageImageReferenceToTerraform(struct?: BatchPoolStorageImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface BatchPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function batchPoolTimeoutsToTerraform(struct?: BatchPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BatchPool extends cdktf.TerraformResource {

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
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_tasks_per_node - computed: false, optional: true, required: false
  private _maxTasksPerNode?: number;
  public get maxTasksPerNode() {
    return this.getNumberAttribute('max_tasks_per_node');
  }
  public set maxTasksPerNode(value: number ) {
    this._maxTasksPerNode = value;
  }
  public resetMaxTasksPerNode() {
    this._maxTasksPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTasksPerNodeInput() {
    return this._maxTasksPerNode
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // node_agent_sku_id - computed: false, optional: false, required: true
  private _nodeAgentSkuId: string;
  public get nodeAgentSkuId() {
    return this.getStringAttribute('node_agent_sku_id');
  }
  public set nodeAgentSkuId(value: string) {
    this._nodeAgentSkuId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAgentSkuIdInput() {
    return this._nodeAgentSkuId
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

  // stop_pending_resize_operation - computed: false, optional: true, required: false
  private _stopPendingResizeOperation?: boolean;
  public get stopPendingResizeOperation() {
    return this.getBooleanAttribute('stop_pending_resize_operation');
  }
  public set stopPendingResizeOperation(value: boolean ) {
    this._stopPendingResizeOperation = value;
  }
  public resetStopPendingResizeOperation() {
    this._stopPendingResizeOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopPendingResizeOperationInput() {
    return this._stopPendingResizeOperation
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize: string;
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale?: BatchPoolAutoScale[];
  public get autoScale() {
    return this.interpolationForAttribute('auto_scale') as any;
  }
  public set autoScale(value: BatchPoolAutoScale[] ) {
    this._autoScale = value;
  }
  public resetAutoScale() {
    this._autoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: BatchPoolCertificate[];
  public get certificate() {
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: BatchPoolCertificate[] ) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // container_configuration - computed: false, optional: true, required: false
  private _containerConfiguration?: BatchPoolContainerConfiguration[];
  public get containerConfiguration() {
    return this.interpolationForAttribute('container_configuration') as any;
  }
  public set containerConfiguration(value: BatchPoolContainerConfiguration[] ) {
    this._containerConfiguration = value;
  }
  public resetContainerConfiguration() {
    this._containerConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigurationInput() {
    return this._containerConfiguration
  }

  // fixed_scale - computed: false, optional: true, required: false
  private _fixedScale?: BatchPoolFixedScale[];
  public get fixedScale() {
    return this.interpolationForAttribute('fixed_scale') as any;
  }
  public set fixedScale(value: BatchPoolFixedScale[] ) {
    this._fixedScale = value;
  }
  public resetFixedScale() {
    this._fixedScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedScaleInput() {
    return this._fixedScale
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration?: BatchPoolNetworkConfiguration[];
  public get networkConfiguration() {
    return this.interpolationForAttribute('network_configuration') as any;
  }
  public set networkConfiguration(value: BatchPoolNetworkConfiguration[] ) {
    this._networkConfiguration = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration
  }

  // start_task - computed: false, optional: true, required: false
  private _startTask?: BatchPoolStartTask[];
  public get startTask() {
    return this.interpolationForAttribute('start_task') as any;
  }
  public set startTask(value: BatchPoolStartTask[] ) {
    this._startTask = value;
  }
  public resetStartTask() {
    this._startTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTaskInput() {
    return this._startTask
  }

  // storage_image_reference - computed: false, optional: false, required: true
  private _storageImageReference: BatchPoolStorageImageReference[];
  public get storageImageReference() {
    return this.interpolationForAttribute('storage_image_reference') as any;
  }
  public set storageImageReference(value: BatchPoolStorageImageReference[]) {
    this._storageImageReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageImageReferenceInput() {
    return this._storageImageReference
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchPoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BatchPoolTimeouts ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      max_tasks_per_node: cdktf.numberToTerraform(this._maxTasksPerNode),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      node_agent_sku_id: cdktf.stringToTerraform(this._nodeAgentSkuId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      stop_pending_resize_operation: cdktf.booleanToTerraform(this._stopPendingResizeOperation),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      auto_scale: cdktf.listMapper(batchPoolAutoScaleToTerraform)(this._autoScale),
      certificate: cdktf.listMapper(batchPoolCertificateToTerraform)(this._certificate),
      container_configuration: cdktf.listMapper(batchPoolContainerConfigurationToTerraform)(this._containerConfiguration),
      fixed_scale: cdktf.listMapper(batchPoolFixedScaleToTerraform)(this._fixedScale),
      network_configuration: cdktf.listMapper(batchPoolNetworkConfigurationToTerraform)(this._networkConfiguration),
      start_task: cdktf.listMapper(batchPoolStartTaskToTerraform)(this._startTask),
      storage_image_reference: cdktf.listMapper(batchPoolStorageImageReferenceToTerraform)(this._storageImageReference),
      timeouts: batchPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
