// https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#account_name BatchPool#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#display_name BatchPool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#max_tasks_per_node BatchPool#max_tasks_per_node}
  */
  readonly maxTasksPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#metadata BatchPool#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#name BatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#node_agent_sku_id BatchPool#node_agent_sku_id}
  */
  readonly nodeAgentSkuId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#resource_group_name BatchPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}
  */
  readonly stopPendingResizeOperation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#vm_size BatchPool#vm_size}
  */
  readonly vmSize: string;
  /**
  * auto_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#auto_scale BatchPool#auto_scale}
  */
  readonly autoScale?: BatchPoolAutoScale;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#certificate BatchPool#certificate}
  */
  readonly certificate?: BatchPoolCertificate[];
  /**
  * container_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#container_configuration BatchPool#container_configuration}
  */
  readonly containerConfiguration?: BatchPoolContainerConfiguration;
  /**
  * fixed_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#fixed_scale BatchPool#fixed_scale}
  */
  readonly fixedScale?: BatchPoolFixedScale;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#identity BatchPool#identity}
  */
  readonly identity?: BatchPoolIdentity;
  /**
  * network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#network_configuration BatchPool#network_configuration}
  */
  readonly networkConfiguration?: BatchPoolNetworkConfiguration;
  /**
  * start_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#start_task BatchPool#start_task}
  */
  readonly startTask?: BatchPoolStartTask;
  /**
  * storage_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#storage_image_reference BatchPool#storage_image_reference}
  */
  readonly storageImageReference: BatchPoolStorageImageReference;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#timeouts BatchPool#timeouts}
  */
  readonly timeouts?: BatchPoolTimeouts;
}
export interface BatchPoolAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#evaluation_interval BatchPool#evaluation_interval}
  */
  readonly evaluationInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#formula BatchPool#formula}
  */
  readonly formula: string;
}

function batchPoolAutoScaleToTerraform(struct?: BatchPoolAutoScaleOutputReference | BatchPoolAutoScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_interval: cdktf.stringToTerraform(struct!.evaluationInterval),
    formula: cdktf.stringToTerraform(struct!.formula),
  }
}

export class BatchPoolAutoScaleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // evaluation_interval - computed: false, optional: true, required: false
  private _evaluationInterval?: string | undefined; 
  public get evaluationInterval() {
    return this.getStringAttribute('evaluation_interval');
  }
  public set evaluationInterval(value: string | undefined) {
    this._evaluationInterval = value;
  }
  public resetEvaluationInterval() {
    this._evaluationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIntervalInput() {
    return this._evaluationInterval
  }

  // formula - computed: false, optional: false, required: true
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula
  }
}
export interface BatchPoolCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#id BatchPool#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#store_location BatchPool#store_location}
  */
  readonly storeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#store_name BatchPool#store_name}
  */
  readonly storeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#visibility BatchPool#visibility}
  */
  readonly visibility?: string[];
}

function batchPoolCertificateToTerraform(struct?: BatchPoolCertificate): any {
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

export interface BatchPoolContainerConfigurationContainerRegistries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#password BatchPool#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#registry_server BatchPool#registry_server}
  */
  readonly registryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#user_name BatchPool#user_name}
  */
  readonly userName?: string;
}

function batchPoolContainerConfigurationContainerRegistriesToTerraform(struct?: BatchPoolContainerConfigurationContainerRegistries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry_server: cdktf.stringToTerraform(struct!.registryServer),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}

export interface BatchPoolContainerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#container_image_names BatchPool#container_image_names}
  */
  readonly containerImageNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#container_registries BatchPool#container_registries}
  */
  readonly containerRegistries?: BatchPoolContainerConfigurationContainerRegistries[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#type BatchPool#type}
  */
  readonly type?: string;
}

function batchPoolContainerConfigurationToTerraform(struct?: BatchPoolContainerConfigurationOutputReference | BatchPoolContainerConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_image_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerImageNames),
    container_registries: cdktf.listMapper(batchPoolContainerConfigurationContainerRegistriesToTerraform)(struct!.containerRegistries),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class BatchPoolContainerConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // container_image_names - computed: false, optional: true, required: false
  private _containerImageNames?: string[] | undefined; 
  public get containerImageNames() {
    return this.getListAttribute('container_image_names');
  }
  public set containerImageNames(value: string[] | undefined) {
    this._containerImageNames = value;
  }
  public resetContainerImageNames() {
    this._containerImageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageNamesInput() {
    return this._containerImageNames
  }

  // container_registries - computed: false, optional: true, required: false
  private _containerRegistries?: BatchPoolContainerConfigurationContainerRegistries[] | undefined; 
  public get containerRegistries() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('container_registries') as any;
  }
  public set containerRegistries(value: BatchPoolContainerConfigurationContainerRegistries[] | undefined) {
    this._containerRegistries = value;
  }
  public resetContainerRegistries() {
    this._containerRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistriesInput() {
    return this._containerRegistries
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface BatchPoolFixedScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#resize_timeout BatchPool#resize_timeout}
  */
  readonly resizeTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#target_dedicated_nodes BatchPool#target_dedicated_nodes}
  */
  readonly targetDedicatedNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#target_low_priority_nodes BatchPool#target_low_priority_nodes}
  */
  readonly targetLowPriorityNodes?: number;
}

function batchPoolFixedScaleToTerraform(struct?: BatchPoolFixedScaleOutputReference | BatchPoolFixedScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resize_timeout: cdktf.stringToTerraform(struct!.resizeTimeout),
    target_dedicated_nodes: cdktf.numberToTerraform(struct!.targetDedicatedNodes),
    target_low_priority_nodes: cdktf.numberToTerraform(struct!.targetLowPriorityNodes),
  }
}

export class BatchPoolFixedScaleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resize_timeout - computed: false, optional: true, required: false
  private _resizeTimeout?: string | undefined; 
  public get resizeTimeout() {
    return this.getStringAttribute('resize_timeout');
  }
  public set resizeTimeout(value: string | undefined) {
    this._resizeTimeout = value;
  }
  public resetResizeTimeout() {
    this._resizeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeTimeoutInput() {
    return this._resizeTimeout
  }

  // target_dedicated_nodes - computed: false, optional: true, required: false
  private _targetDedicatedNodes?: number | undefined; 
  public get targetDedicatedNodes() {
    return this.getNumberAttribute('target_dedicated_nodes');
  }
  public set targetDedicatedNodes(value: number | undefined) {
    this._targetDedicatedNodes = value;
  }
  public resetTargetDedicatedNodes() {
    this._targetDedicatedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDedicatedNodesInput() {
    return this._targetDedicatedNodes
  }

  // target_low_priority_nodes - computed: false, optional: true, required: false
  private _targetLowPriorityNodes?: number | undefined; 
  public get targetLowPriorityNodes() {
    return this.getNumberAttribute('target_low_priority_nodes');
  }
  public set targetLowPriorityNodes(value: number | undefined) {
    this._targetLowPriorityNodes = value;
  }
  public resetTargetLowPriorityNodes() {
    this._targetLowPriorityNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLowPriorityNodesInput() {
    return this._targetLowPriorityNodes
  }
}
export interface BatchPoolIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#identity_ids BatchPool#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#type BatchPool#type}
  */
  readonly type: string;
}

function batchPoolIdentityToTerraform(struct?: BatchPoolIdentityOutputReference | BatchPoolIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class BatchPoolIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: false, required: true
  private _identityIds?: string[]; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#access BatchPool#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#priority BatchPool#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#source_address_prefix BatchPool#source_address_prefix}
  */
  readonly sourceAddressPrefix: string;
}

function batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    priority: cdktf.numberToTerraform(struct!.priority),
    source_address_prefix: cdktf.stringToTerraform(struct!.sourceAddressPrefix),
  }
}

export interface BatchPoolNetworkConfigurationEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#backend_port BatchPool#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#frontend_port_range BatchPool#frontend_port_range}
  */
  readonly frontendPortRange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#name BatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#protocol BatchPool#protocol}
  */
  readonly protocol: string;
  /**
  * network_security_group_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#network_security_group_rules BatchPool#network_security_group_rules}
  */
  readonly networkSecurityGroupRules?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[];
}

function batchPoolNetworkConfigurationEndpointConfigurationToTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_port: cdktf.numberToTerraform(struct!.backendPort),
    frontend_port_range: cdktf.stringToTerraform(struct!.frontendPortRange),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    network_security_group_rules: cdktf.listMapper(batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToTerraform)(struct!.networkSecurityGroupRules),
  }
}

export interface BatchPoolNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#public_address_provisioning_type BatchPool#public_address_provisioning_type}
  */
  readonly publicAddressProvisioningType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#public_ips BatchPool#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#subnet_id BatchPool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * endpoint_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#endpoint_configuration BatchPool#endpoint_configuration}
  */
  readonly endpointConfiguration?: BatchPoolNetworkConfigurationEndpointConfiguration[];
}

function batchPoolNetworkConfigurationToTerraform(struct?: BatchPoolNetworkConfigurationOutputReference | BatchPoolNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_address_provisioning_type: cdktf.stringToTerraform(struct!.publicAddressProvisioningType),
    public_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.publicIps),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    endpoint_configuration: cdktf.listMapper(batchPoolNetworkConfigurationEndpointConfigurationToTerraform)(struct!.endpointConfiguration),
  }
}

export class BatchPoolNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // public_address_provisioning_type - computed: false, optional: true, required: false
  private _publicAddressProvisioningType?: string | undefined; 
  public get publicAddressProvisioningType() {
    return this.getStringAttribute('public_address_provisioning_type');
  }
  public set publicAddressProvisioningType(value: string | undefined) {
    this._publicAddressProvisioningType = value;
  }
  public resetPublicAddressProvisioningType() {
    this._publicAddressProvisioningType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressProvisioningTypeInput() {
    return this._publicAddressProvisioningType
  }

  // public_ips - computed: false, optional: true, required: false
  private _publicIps?: string[] | undefined; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[] | undefined) {
    this._publicIps = value;
  }
  public resetPublicIps() {
    this._publicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: BatchPoolNetworkConfigurationEndpointConfiguration[] | undefined; 
  public get endpointConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('endpoint_configuration') as any;
  }
  public set endpointConfiguration(value: BatchPoolNetworkConfigurationEndpointConfiguration[] | undefined) {
    this._endpointConfiguration = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration
  }
}
export interface BatchPoolStartTaskResourceFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#auto_storage_container_name BatchPool#auto_storage_container_name}
  */
  readonly autoStorageContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#blob_prefix BatchPool#blob_prefix}
  */
  readonly blobPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#file_mode BatchPool#file_mode}
  */
  readonly fileMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#file_path BatchPool#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#http_url BatchPool#http_url}
  */
  readonly httpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#storage_container_url BatchPool#storage_container_url}
  */
  readonly storageContainerUrl?: string;
}

function batchPoolStartTaskResourceFileToTerraform(struct?: BatchPoolStartTaskResourceFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#elevation_level BatchPool#elevation_level}
  */
  readonly elevationLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#scope BatchPool#scope}
  */
  readonly scope?: string;
}

function batchPoolStartTaskUserIdentityAutoUserToTerraform(struct?: BatchPoolStartTaskUserIdentityAutoUserOutputReference | BatchPoolStartTaskUserIdentityAutoUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elevation_level: cdktf.stringToTerraform(struct!.elevationLevel),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export class BatchPoolStartTaskUserIdentityAutoUserOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // elevation_level - computed: false, optional: true, required: false
  private _elevationLevel?: string | undefined; 
  public get elevationLevel() {
    return this.getStringAttribute('elevation_level');
  }
  public set elevationLevel(value: string | undefined) {
    this._elevationLevel = value;
  }
  public resetElevationLevel() {
    this._elevationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elevationLevelInput() {
    return this._elevationLevel
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string | undefined; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string | undefined) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }
}
export interface BatchPoolStartTaskUserIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#user_name BatchPool#user_name}
  */
  readonly userName?: string;
  /**
  * auto_user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#auto_user BatchPool#auto_user}
  */
  readonly autoUser?: BatchPoolStartTaskUserIdentityAutoUser;
}

function batchPoolStartTaskUserIdentityToTerraform(struct?: BatchPoolStartTaskUserIdentityOutputReference | BatchPoolStartTaskUserIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
    auto_user: batchPoolStartTaskUserIdentityAutoUserToTerraform(struct!.autoUser),
  }
}

export class BatchPoolStartTaskUserIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string | undefined; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string | undefined) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName
  }

  // auto_user - computed: false, optional: true, required: false
  private _autoUser?: BatchPoolStartTaskUserIdentityAutoUser | undefined; 
  private __autoUserOutput = new BatchPoolStartTaskUserIdentityAutoUserOutputReference(this as any, "auto_user", true);
  public get autoUser() {
    return this.__autoUserOutput;
  }
  public putAutoUser(value: BatchPoolStartTaskUserIdentityAutoUser | undefined) {
    this._autoUser = value;
  }
  public resetAutoUser() {
    this._autoUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUserInput() {
    return this._autoUser
  }
}
export interface BatchPoolStartTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#command_line BatchPool#command_line}
  */
  readonly commandLine: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#environment BatchPool#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#max_task_retry_count BatchPool#max_task_retry_count}
  */
  readonly maxTaskRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#wait_for_success BatchPool#wait_for_success}
  */
  readonly waitForSuccess?: boolean | cdktf.IResolvable;
  /**
  * resource_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#resource_file BatchPool#resource_file}
  */
  readonly resourceFile?: BatchPoolStartTaskResourceFile[];
  /**
  * user_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#user_identity BatchPool#user_identity}
  */
  readonly userIdentity: BatchPoolStartTaskUserIdentity;
}

function batchPoolStartTaskToTerraform(struct?: BatchPoolStartTaskOutputReference | BatchPoolStartTask): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line: cdktf.stringToTerraform(struct!.commandLine),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    max_task_retry_count: cdktf.numberToTerraform(struct!.maxTaskRetryCount),
    wait_for_success: cdktf.booleanToTerraform(struct!.waitForSuccess),
    resource_file: cdktf.listMapper(batchPoolStartTaskResourceFileToTerraform)(struct!.resourceFile),
    user_identity: batchPoolStartTaskUserIdentityToTerraform(struct!.userIdentity),
  }
}

export class BatchPoolStartTaskOutputReference extends cdktf.ComplexObject {
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

  // resource_file - computed: false, optional: true, required: false
  private _resourceFile?: BatchPoolStartTaskResourceFile[] | undefined; 
  public get resourceFile() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_file') as any;
  }
  public set resourceFile(value: BatchPoolStartTaskResourceFile[] | undefined) {
    this._resourceFile = value;
  }
  public resetResourceFile() {
    this._resourceFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFileInput() {
    return this._resourceFile
  }

  // user_identity - computed: false, optional: false, required: true
  private _userIdentity?: BatchPoolStartTaskUserIdentity; 
  private __userIdentityOutput = new BatchPoolStartTaskUserIdentityOutputReference(this as any, "user_identity", true);
  public get userIdentity() {
    return this.__userIdentityOutput;
  }
  public putUserIdentity(value: BatchPoolStartTaskUserIdentity) {
    this._userIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentityInput() {
    return this._userIdentity
  }
}
export interface BatchPoolStorageImageReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#id BatchPool#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#offer BatchPool#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#publisher BatchPool#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#sku BatchPool#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#version BatchPool#version}
  */
  readonly version?: string;
}

function batchPoolStorageImageReferenceToTerraform(struct?: BatchPoolStorageImageReferenceOutputReference | BatchPoolStorageImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class BatchPoolStorageImageReferenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // id - computed: false, optional: true, required: false
  private _id?: string | undefined; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // offer - computed: false, optional: true, required: false
  private _offer?: string | undefined; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string | undefined) {
    this._offer = value;
  }
  public resetOffer() {
    this._offer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher?: string | undefined; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string | undefined) {
    this._publisher = value;
  }
  public resetPublisher() {
    this._publisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string | undefined; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string | undefined) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku
  }

  // version - computed: false, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }
}
export interface BatchPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#create BatchPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#delete BatchPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#read BatchPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#update BatchPool#update}
  */
  readonly update?: string;
}

function batchPoolTimeoutsToTerraform(struct?: BatchPoolTimeoutsOutputReference | BatchPoolTimeouts): any {
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

export class BatchPoolTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html azurerm_batch_pool}
*/
export class BatchPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_batch_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html azurerm_batch_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchPoolConfig
  */
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
    this._identity = config.identity;
    this._networkConfiguration = config.networkConfiguration;
    this._startTask = config.startTask;
    this._storageImageReference = config.storageImageReference;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
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
  private _maxTasksPerNode?: number | undefined; 
  public get maxTasksPerNode() {
    return this.getNumberAttribute('max_tasks_per_node');
  }
  public set maxTasksPerNode(value: number | undefined) {
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
  private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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

  // node_agent_sku_id - computed: false, optional: false, required: true
  private _nodeAgentSkuId?: string; 
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

  // stop_pending_resize_operation - computed: false, optional: true, required: false
  private _stopPendingResizeOperation?: boolean | cdktf.IResolvable | undefined; 
  public get stopPendingResizeOperation() {
    return this.getBooleanAttribute('stop_pending_resize_operation') as any;
  }
  public set stopPendingResizeOperation(value: boolean | cdktf.IResolvable | undefined) {
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
  private _vmSize?: string; 
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
  private _autoScale?: BatchPoolAutoScale | undefined; 
  private __autoScaleOutput = new BatchPoolAutoScaleOutputReference(this as any, "auto_scale", true);
  public get autoScale() {
    return this.__autoScaleOutput;
  }
  public putAutoScale(value: BatchPoolAutoScale | undefined) {
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
  private _certificate?: BatchPoolCertificate[] | undefined; 
  public get certificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: BatchPoolCertificate[] | undefined) {
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
  private _containerConfiguration?: BatchPoolContainerConfiguration | undefined; 
  private __containerConfigurationOutput = new BatchPoolContainerConfigurationOutputReference(this as any, "container_configuration", true);
  public get containerConfiguration() {
    return this.__containerConfigurationOutput;
  }
  public putContainerConfiguration(value: BatchPoolContainerConfiguration | undefined) {
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
  private _fixedScale?: BatchPoolFixedScale | undefined; 
  private __fixedScaleOutput = new BatchPoolFixedScaleOutputReference(this as any, "fixed_scale", true);
  public get fixedScale() {
    return this.__fixedScaleOutput;
  }
  public putFixedScale(value: BatchPoolFixedScale | undefined) {
    this._fixedScale = value;
  }
  public resetFixedScale() {
    this._fixedScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedScaleInput() {
    return this._fixedScale
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: BatchPoolIdentity | undefined; 
  private __identityOutput = new BatchPoolIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: BatchPoolIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration?: BatchPoolNetworkConfiguration | undefined; 
  private __networkConfigurationOutput = new BatchPoolNetworkConfigurationOutputReference(this as any, "network_configuration", true);
  public get networkConfiguration() {
    return this.__networkConfigurationOutput;
  }
  public putNetworkConfiguration(value: BatchPoolNetworkConfiguration | undefined) {
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
  private _startTask?: BatchPoolStartTask | undefined; 
  private __startTaskOutput = new BatchPoolStartTaskOutputReference(this as any, "start_task", true);
  public get startTask() {
    return this.__startTaskOutput;
  }
  public putStartTask(value: BatchPoolStartTask | undefined) {
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
  private _storageImageReference?: BatchPoolStorageImageReference; 
  private __storageImageReferenceOutput = new BatchPoolStorageImageReferenceOutputReference(this as any, "storage_image_reference", true);
  public get storageImageReference() {
    return this.__storageImageReferenceOutput;
  }
  public putStorageImageReference(value: BatchPoolStorageImageReference) {
    this._storageImageReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageImageReferenceInput() {
    return this._storageImageReference
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchPoolTimeouts | undefined; 
  private __timeoutsOutput = new BatchPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BatchPoolTimeouts | undefined) {
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
      auto_scale: batchPoolAutoScaleToTerraform(this._autoScale),
      certificate: cdktf.listMapper(batchPoolCertificateToTerraform)(this._certificate),
      container_configuration: batchPoolContainerConfigurationToTerraform(this._containerConfiguration),
      fixed_scale: batchPoolFixedScaleToTerraform(this._fixedScale),
      identity: batchPoolIdentityToTerraform(this._identity),
      network_configuration: batchPoolNetworkConfigurationToTerraform(this._networkConfiguration),
      start_task: batchPoolStartTaskToTerraform(this._startTask),
      storage_image_reference: batchPoolStorageImageReferenceToTerraform(this._storageImageReference),
      timeouts: batchPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
