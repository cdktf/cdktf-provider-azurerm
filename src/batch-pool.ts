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

export function batchPoolAutoScaleToTerraform(struct?: BatchPoolAutoScaleOutputReference | BatchPoolAutoScale): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BatchPoolAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationInterval) {
      hasAnyValues = true;
      internalValueResult.evaluationInterval = this._evaluationInterval;
    }
    if (this._formula) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationInterval = undefined;
      this._formula = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationInterval = value.evaluationInterval;
      this._formula = value.formula;
    }
  }

  // evaluation_interval - computed: false, optional: true, required: false
  private _evaluationInterval?: string; 
  public get evaluationInterval() {
    return this.getStringAttribute('evaluation_interval');
  }
  public set evaluationInterval(value: string) {
    this._evaluationInterval = value;
  }
  public resetEvaluationInterval() {
    this._evaluationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationIntervalInput() {
    return this._evaluationInterval;
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
    return this._formula;
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

export function batchPoolCertificateToTerraform(struct?: BatchPoolCertificate): any {
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

export function batchPoolContainerConfigurationContainerRegistriesToTerraform(struct?: BatchPoolContainerConfigurationContainerRegistries): any {
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

export function batchPoolContainerConfigurationToTerraform(struct?: BatchPoolContainerConfigurationOutputReference | BatchPoolContainerConfiguration): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BatchPoolContainerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerImageNames) {
      hasAnyValues = true;
      internalValueResult.containerImageNames = this._containerImageNames;
    }
    if (this._containerRegistries) {
      hasAnyValues = true;
      internalValueResult.containerRegistries = this._containerRegistries;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolContainerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerImageNames = undefined;
      this._containerRegistries = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerImageNames = value.containerImageNames;
      this._containerRegistries = value.containerRegistries;
      this._type = value.type;
    }
  }

  // container_image_names - computed: false, optional: true, required: false
  private _containerImageNames?: string[]; 
  public get containerImageNames() {
    return this.getListAttribute('container_image_names');
  }
  public set containerImageNames(value: string[]) {
    this._containerImageNames = value;
  }
  public resetContainerImageNames() {
    this._containerImageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageNamesInput() {
    return this._containerImageNames;
  }

  // container_registries - computed: false, optional: true, required: false
  private _containerRegistries?: BatchPoolContainerConfigurationContainerRegistries[]; 
  public get containerRegistries() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('container_registries') as any;
  }
  public set containerRegistries(value: BatchPoolContainerConfigurationContainerRegistries[]) {
    this._containerRegistries = value;
  }
  public resetContainerRegistries() {
    this._containerRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistriesInput() {
    return this._containerRegistries;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export function batchPoolFixedScaleToTerraform(struct?: BatchPoolFixedScaleOutputReference | BatchPoolFixedScale): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BatchPoolFixedScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resizeTimeout) {
      hasAnyValues = true;
      internalValueResult.resizeTimeout = this._resizeTimeout;
    }
    if (this._targetDedicatedNodes) {
      hasAnyValues = true;
      internalValueResult.targetDedicatedNodes = this._targetDedicatedNodes;
    }
    if (this._targetLowPriorityNodes) {
      hasAnyValues = true;
      internalValueResult.targetLowPriorityNodes = this._targetLowPriorityNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolFixedScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resizeTimeout = undefined;
      this._targetDedicatedNodes = undefined;
      this._targetLowPriorityNodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resizeTimeout = value.resizeTimeout;
      this._targetDedicatedNodes = value.targetDedicatedNodes;
      this._targetLowPriorityNodes = value.targetLowPriorityNodes;
    }
  }

  // resize_timeout - computed: false, optional: true, required: false
  private _resizeTimeout?: string; 
  public get resizeTimeout() {
    return this.getStringAttribute('resize_timeout');
  }
  public set resizeTimeout(value: string) {
    this._resizeTimeout = value;
  }
  public resetResizeTimeout() {
    this._resizeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeTimeoutInput() {
    return this._resizeTimeout;
  }

  // target_dedicated_nodes - computed: false, optional: true, required: false
  private _targetDedicatedNodes?: number; 
  public get targetDedicatedNodes() {
    return this.getNumberAttribute('target_dedicated_nodes');
  }
  public set targetDedicatedNodes(value: number) {
    this._targetDedicatedNodes = value;
  }
  public resetTargetDedicatedNodes() {
    this._targetDedicatedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDedicatedNodesInput() {
    return this._targetDedicatedNodes;
  }

  // target_low_priority_nodes - computed: false, optional: true, required: false
  private _targetLowPriorityNodes?: number; 
  public get targetLowPriorityNodes() {
    return this.getNumberAttribute('target_low_priority_nodes');
  }
  public set targetLowPriorityNodes(value: number) {
    this._targetLowPriorityNodes = value;
  }
  public resetTargetLowPriorityNodes() {
    this._targetLowPriorityNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLowPriorityNodesInput() {
    return this._targetLowPriorityNodes;
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

export function batchPoolIdentityToTerraform(struct?: BatchPoolIdentityOutputReference | BatchPoolIdentity): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BatchPoolIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identityIds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identityIds = value.identityIds;
      this._type = value.type;
    }
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
    return this._identityIds;
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
    return this._type;
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

export function batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules): any {
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

export function batchPoolNetworkConfigurationEndpointConfigurationToTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfiguration): any {
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

export function batchPoolNetworkConfigurationToTerraform(struct?: BatchPoolNetworkConfigurationOutputReference | BatchPoolNetworkConfiguration): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BatchPoolNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicAddressProvisioningType) {
      hasAnyValues = true;
      internalValueResult.publicAddressProvisioningType = this._publicAddressProvisioningType;
    }
    if (this._publicIps) {
      hasAnyValues = true;
      internalValueResult.publicIps = this._publicIps;
    }
    if (this._subnetId) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._endpointConfiguration) {
      hasAnyValues = true;
      internalValueResult.endpointConfiguration = this._endpointConfiguration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicAddressProvisioningType = undefined;
      this._publicIps = undefined;
      this._subnetId = undefined;
      this._endpointConfiguration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicAddressProvisioningType = value.publicAddressProvisioningType;
      this._publicIps = value.publicIps;
      this._subnetId = value.subnetId;
      this._endpointConfiguration = value.endpointConfiguration;
    }
  }

  // public_address_provisioning_type - computed: false, optional: true, required: false
  private _publicAddressProvisioningType?: string; 
  public get publicAddressProvisioningType() {
    return this.getStringAttribute('public_address_provisioning_type');
  }
  public set publicAddressProvisioningType(value: string) {
    this._publicAddressProvisioningType = value;
  }
  public resetPublicAddressProvisioningType() {
    this._publicAddressProvisioningType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAddressProvisioningTypeInput() {
    return this._publicAddressProvisioningType;
  }

  // public_ips - computed: false, optional: true, required: false
  private _publicIps?: string[]; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[]) {
    this._publicIps = value;
  }
  public resetPublicIps() {
    this._publicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps;
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
    return this._subnetId;
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: BatchPoolNetworkConfigurationEndpointConfiguration[]; 
  public get endpointConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('endpoint_configuration') as any;
  }
  public set endpointConfiguration(value: BatchPoolNetworkConfigurationEndpointConfiguration[]) {
    this._endpointConfiguration = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration;
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

export function batchPoolStartTaskResourceFileToTerraform(struct?: BatchPoolStartTaskResourceFile): any {
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

export function batchPoolStartTaskUserIdentityAutoUserToTerraform(struct?: BatchPoolStartTaskUserIdentityAutoUserOutputReference | BatchPoolStartTaskUserIdentityAutoUser): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BatchPoolStartTaskUserIdentityAutoUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elevationLevel) {
      hasAnyValues = true;
      internalValueResult.elevationLevel = this._elevationLevel;
    }
    if (this._scope) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolStartTaskUserIdentityAutoUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elevationLevel = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elevationLevel = value.elevationLevel;
      this._scope = value.scope;
    }
  }

  // elevation_level - computed: false, optional: true, required: false
  private _elevationLevel?: string; 
  public get elevationLevel() {
    return this.getStringAttribute('elevation_level');
  }
  public set elevationLevel(value: string) {
    this._elevationLevel = value;
  }
  public resetElevationLevel() {
    this._elevationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elevationLevelInput() {
    return this._elevationLevel;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

export function batchPoolStartTaskUserIdentityToTerraform(struct?: BatchPoolStartTaskUserIdentityOutputReference | BatchPoolStartTaskUserIdentity): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BatchPoolStartTaskUserIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userName) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._autoUser?.internalValue) {
      hasAnyValues = true;
      internalValueResult.autoUser = this._autoUser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolStartTaskUserIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userName = undefined;
      this._autoUser.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userName = value.userName;
      this._autoUser.internalValue = value.autoUser;
    }
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // auto_user - computed: false, optional: true, required: false
  private _autoUser = new BatchPoolStartTaskUserIdentityAutoUserOutputReference(this as any, "auto_user", true);
  public get autoUser() {
    return this._autoUser;
  }
  public putAutoUser(value: BatchPoolStartTaskUserIdentityAutoUser) {
    this._autoUser.internalValue = value;
  }
  public resetAutoUser() {
    this._autoUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUserInput() {
    return this._autoUser.internalValue;
  }
}
export interface BatchPoolStartTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#command_line BatchPool#command_line}
  */
  readonly commandLine: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#common_environment_properties BatchPool#common_environment_properties}
  */
  readonly commonEnvironmentProperties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#environment BatchPool#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#max_task_retry_count BatchPool#max_task_retry_count}
  */
  readonly maxTaskRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#task_retry_maximum BatchPool#task_retry_maximum}
  */
  readonly taskRetryMaximum?: number;
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

export function batchPoolStartTaskToTerraform(struct?: BatchPoolStartTaskOutputReference | BatchPoolStartTask): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line: cdktf.stringToTerraform(struct!.commandLine),
    common_environment_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.commonEnvironmentProperties),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    max_task_retry_count: cdktf.numberToTerraform(struct!.maxTaskRetryCount),
    task_retry_maximum: cdktf.numberToTerraform(struct!.taskRetryMaximum),
    wait_for_success: cdktf.booleanToTerraform(struct!.waitForSuccess),
    resource_file: cdktf.listMapper(batchPoolStartTaskResourceFileToTerraform)(struct!.resourceFile),
    user_identity: batchPoolStartTaskUserIdentityToTerraform(struct!.userIdentity),
  }
}

export class BatchPoolStartTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BatchPoolStartTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLine) {
      hasAnyValues = true;
      internalValueResult.commandLine = this._commandLine;
    }
    if (this._commonEnvironmentProperties) {
      hasAnyValues = true;
      internalValueResult.commonEnvironmentProperties = this._commonEnvironmentProperties;
    }
    if (this._environment) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._maxTaskRetryCount) {
      hasAnyValues = true;
      internalValueResult.maxTaskRetryCount = this._maxTaskRetryCount;
    }
    if (this._taskRetryMaximum) {
      hasAnyValues = true;
      internalValueResult.taskRetryMaximum = this._taskRetryMaximum;
    }
    if (this._waitForSuccess) {
      hasAnyValues = true;
      internalValueResult.waitForSuccess = this._waitForSuccess;
    }
    if (this._resourceFile) {
      hasAnyValues = true;
      internalValueResult.resourceFile = this._resourceFile;
    }
    if (this._userIdentity?.internalValue) {
      hasAnyValues = true;
      internalValueResult.userIdentity = this._userIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolStartTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commandLine = undefined;
      this._commonEnvironmentProperties = undefined;
      this._environment = undefined;
      this._maxTaskRetryCount = undefined;
      this._taskRetryMaximum = undefined;
      this._waitForSuccess = undefined;
      this._resourceFile = undefined;
      this._userIdentity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLine = value.commandLine;
      this._commonEnvironmentProperties = value.commonEnvironmentProperties;
      this._environment = value.environment;
      this._maxTaskRetryCount = value.maxTaskRetryCount;
      this._taskRetryMaximum = value.taskRetryMaximum;
      this._waitForSuccess = value.waitForSuccess;
      this._resourceFile = value.resourceFile;
      this._userIdentity.internalValue = value.userIdentity;
    }
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
    return this._commandLine;
  }

  // common_environment_properties - computed: true, optional: true, required: false
  private _commonEnvironmentProperties?: { [key: string]: string } | cdktf.IResolvable; 
  public get commonEnvironmentProperties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('common_environment_properties') as any;
  }
  public set commonEnvironmentProperties(value: { [key: string]: string } | cdktf.IResolvable) {
    this._commonEnvironmentProperties = value;
  }
  public resetCommonEnvironmentProperties() {
    this._commonEnvironmentProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonEnvironmentPropertiesInput() {
    return this._commonEnvironmentProperties;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: { [key: string]: string } | cdktf.IResolvable; 
  public get environment() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('environment') as any;
  }
  public set environment(value: { [key: string]: string } | cdktf.IResolvable) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // max_task_retry_count - computed: true, optional: true, required: false
  private _maxTaskRetryCount?: number; 
  public get maxTaskRetryCount() {
    return this.getNumberAttribute('max_task_retry_count');
  }
  public set maxTaskRetryCount(value: number) {
    this._maxTaskRetryCount = value;
  }
  public resetMaxTaskRetryCount() {
    this._maxTaskRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTaskRetryCountInput() {
    return this._maxTaskRetryCount;
  }

  // task_retry_maximum - computed: true, optional: true, required: false
  private _taskRetryMaximum?: number; 
  public get taskRetryMaximum() {
    return this.getNumberAttribute('task_retry_maximum');
  }
  public set taskRetryMaximum(value: number) {
    this._taskRetryMaximum = value;
  }
  public resetTaskRetryMaximum() {
    this._taskRetryMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRetryMaximumInput() {
    return this._taskRetryMaximum;
  }

  // wait_for_success - computed: false, optional: true, required: false
  private _waitForSuccess?: boolean | cdktf.IResolvable; 
  public get waitForSuccess() {
    return this.getBooleanAttribute('wait_for_success') as any;
  }
  public set waitForSuccess(value: boolean | cdktf.IResolvable) {
    this._waitForSuccess = value;
  }
  public resetWaitForSuccess() {
    this._waitForSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSuccessInput() {
    return this._waitForSuccess;
  }

  // resource_file - computed: false, optional: true, required: false
  private _resourceFile?: BatchPoolStartTaskResourceFile[]; 
  public get resourceFile() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_file') as any;
  }
  public set resourceFile(value: BatchPoolStartTaskResourceFile[]) {
    this._resourceFile = value;
  }
  public resetResourceFile() {
    this._resourceFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFileInput() {
    return this._resourceFile;
  }

  // user_identity - computed: false, optional: false, required: true
  private _userIdentity = new BatchPoolStartTaskUserIdentityOutputReference(this as any, "user_identity", true);
  public get userIdentity() {
    return this._userIdentity;
  }
  public putUserIdentity(value: BatchPoolStartTaskUserIdentity) {
    this._userIdentity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentityInput() {
    return this._userIdentity.internalValue;
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

export function batchPoolStorageImageReferenceToTerraform(struct?: BatchPoolStorageImageReferenceOutputReference | BatchPoolStorageImageReference): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BatchPoolStorageImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._offer) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolStorageImageReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // offer - computed: false, optional: true, required: false
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  public resetOffer() {
    this._offer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  public resetPublisher() {
    this._publisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: true, required: false
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  public resetSku() {
    this._sku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
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

export function batchPoolTimeoutsToTerraform(struct?: BatchPoolTimeoutsOutputReference | BatchPoolTimeouts): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BatchPoolTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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
    this._autoScale.internalValue = config.autoScale;
    this._certificate = config.certificate;
    this._containerConfiguration.internalValue = config.containerConfiguration;
    this._fixedScale.internalValue = config.fixedScale;
    this._identity.internalValue = config.identity;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._startTask.internalValue = config.startTask;
    this._storageImageReference.internalValue = config.storageImageReference;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
  public set maxTasksPerNode(value: number) {
    this._maxTasksPerNode = value;
  }
  public resetMaxTasksPerNode() {
    this._maxTasksPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTasksPerNodeInput() {
    return this._maxTasksPerNode;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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
    return this._nodeAgentSkuId;
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

  // stop_pending_resize_operation - computed: false, optional: true, required: false
  private _stopPendingResizeOperation?: boolean | cdktf.IResolvable; 
  public get stopPendingResizeOperation() {
    return this.getBooleanAttribute('stop_pending_resize_operation') as any;
  }
  public set stopPendingResizeOperation(value: boolean | cdktf.IResolvable) {
    this._stopPendingResizeOperation = value;
  }
  public resetStopPendingResizeOperation() {
    this._stopPendingResizeOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopPendingResizeOperationInput() {
    return this._stopPendingResizeOperation;
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
    return this._vmSize;
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale = new BatchPoolAutoScaleOutputReference(this as any, "auto_scale", true);
  public get autoScale() {
    return this._autoScale;
  }
  public putAutoScale(value: BatchPoolAutoScale) {
    this._autoScale.internalValue = value;
  }
  public resetAutoScale() {
    this._autoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale.internalValue;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: BatchPoolCertificate[]; 
  public get certificate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: BatchPoolCertificate[]) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // container_configuration - computed: false, optional: true, required: false
  private _containerConfiguration = new BatchPoolContainerConfigurationOutputReference(this as any, "container_configuration", true);
  public get containerConfiguration() {
    return this._containerConfiguration;
  }
  public putContainerConfiguration(value: BatchPoolContainerConfiguration) {
    this._containerConfiguration.internalValue = value;
  }
  public resetContainerConfiguration() {
    this._containerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigurationInput() {
    return this._containerConfiguration.internalValue;
  }

  // fixed_scale - computed: false, optional: true, required: false
  private _fixedScale = new BatchPoolFixedScaleOutputReference(this as any, "fixed_scale", true);
  public get fixedScale() {
    return this._fixedScale;
  }
  public putFixedScale(value: BatchPoolFixedScale) {
    this._fixedScale.internalValue = value;
  }
  public resetFixedScale() {
    this._fixedScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedScaleInput() {
    return this._fixedScale.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new BatchPoolIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: BatchPoolIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new BatchPoolNetworkConfigurationOutputReference(this as any, "network_configuration", true);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: BatchPoolNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // start_task - computed: false, optional: true, required: false
  private _startTask = new BatchPoolStartTaskOutputReference(this as any, "start_task", true);
  public get startTask() {
    return this._startTask;
  }
  public putStartTask(value: BatchPoolStartTask) {
    this._startTask.internalValue = value;
  }
  public resetStartTask() {
    this._startTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTaskInput() {
    return this._startTask.internalValue;
  }

  // storage_image_reference - computed: false, optional: false, required: true
  private _storageImageReference = new BatchPoolStorageImageReferenceOutputReference(this as any, "storage_image_reference", true);
  public get storageImageReference() {
    return this._storageImageReference;
  }
  public putStorageImageReference(value: BatchPoolStorageImageReference) {
    this._storageImageReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageImageReferenceInput() {
    return this._storageImageReference.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BatchPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BatchPoolTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      max_tasks_per_node: cdktf.numberToTerraform(this._maxTasksPerNode),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      node_agent_sku_id: cdktf.stringToTerraform(this._nodeAgentSkuId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      stop_pending_resize_operation: cdktf.booleanToTerraform(this._stopPendingResizeOperation),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      auto_scale: batchPoolAutoScaleToTerraform(this._autoScale.internalValue),
      certificate: cdktf.listMapper(batchPoolCertificateToTerraform)(this._certificate),
      container_configuration: batchPoolContainerConfigurationToTerraform(this._containerConfiguration.internalValue),
      fixed_scale: batchPoolFixedScaleToTerraform(this._fixedScale.internalValue),
      identity: batchPoolIdentityToTerraform(this._identity.internalValue),
      network_configuration: batchPoolNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      start_task: batchPoolStartTaskToTerraform(this._startTask.internalValue),
      storage_image_reference: batchPoolStorageImageReferenceToTerraform(this._storageImageReference.internalValue),
      timeouts: batchPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
