// https://www.terraform.io/docs/providers/azurerm/r/batch_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#account_name BatchPool#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#display_name BatchPool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#id BatchPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}
  */
  readonly maxTasksPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#metadata BatchPool#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#name BatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}
  */
  readonly nodeAgentSkuId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#resource_group_name BatchPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}
  */
  readonly stopPendingResizeOperation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#vm_size BatchPool#vm_size}
  */
  readonly vmSize: string;
  /**
  * auto_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#auto_scale BatchPool#auto_scale}
  */
  readonly autoScale?: BatchPoolAutoScale;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#certificate BatchPool#certificate}
  */
  readonly certificate?: BatchPoolCertificate[] | cdktf.IResolvable;
  /**
  * container_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#container_configuration BatchPool#container_configuration}
  */
  readonly containerConfiguration?: BatchPoolContainerConfiguration;
  /**
  * fixed_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#fixed_scale BatchPool#fixed_scale}
  */
  readonly fixedScale?: BatchPoolFixedScale;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#identity BatchPool#identity}
  */
  readonly identity?: BatchPoolIdentity;
  /**
  * network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#network_configuration BatchPool#network_configuration}
  */
  readonly networkConfiguration?: BatchPoolNetworkConfiguration;
  /**
  * start_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#start_task BatchPool#start_task}
  */
  readonly startTask?: BatchPoolStartTask;
  /**
  * storage_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#storage_image_reference BatchPool#storage_image_reference}
  */
  readonly storageImageReference: BatchPoolStorageImageReference;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#timeouts BatchPool#timeouts}
  */
  readonly timeouts?: BatchPoolTimeouts;
}
export interface BatchPoolAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#evaluation_interval BatchPool#evaluation_interval}
  */
  readonly evaluationInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#formula BatchPool#formula}
  */
  readonly formula: string;
}

export function batchPoolAutoScaleToTerraform(struct?: BatchPoolAutoScaleOutputReference | BatchPoolAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationInterval = this._evaluationInterval;
    }
    if (this._formula !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#id BatchPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#store_location BatchPool#store_location}
  */
  readonly storeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#store_name BatchPool#store_name}
  */
  readonly storeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#visibility BatchPool#visibility}
  */
  readonly visibility?: string[];
}

export function batchPoolCertificateToTerraform(struct?: BatchPoolCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class BatchPoolCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BatchPoolCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._storeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeLocation = this._storeLocation;
    }
    if (this._storeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeName = this._storeName;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._storeLocation = undefined;
      this._storeName = undefined;
      this._visibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._storeLocation = value.storeLocation;
      this._storeName = value.storeName;
      this._visibility = value.visibility;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // store_location - computed: false, optional: false, required: true
  private _storeLocation?: string; 
  public get storeLocation() {
    return this.getStringAttribute('store_location');
  }
  public set storeLocation(value: string) {
    this._storeLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeLocationInput() {
    return this._storeLocation;
  }

  // store_name - computed: false, optional: true, required: false
  private _storeName?: string; 
  public get storeName() {
    return this.getStringAttribute('store_name');
  }
  public set storeName(value: string) {
    this._storeName = value;
  }
  public resetStoreName() {
    this._storeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeNameInput() {
    return this._storeName;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string[]; 
  public get visibility() {
    return cdktf.Fn.tolist(this.getListAttribute('visibility'));
  }
  public set visibility(value: string[]) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}

export class BatchPoolCertificateList extends cdktf.ComplexList {
  public internalValue? : BatchPoolCertificate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BatchPoolCertificateOutputReference {
    return new BatchPoolCertificateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolContainerConfigurationContainerRegistries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#password BatchPool#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#registry_server BatchPool#registry_server}
  */
  readonly registryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#user_name BatchPool#user_name}
  */
  readonly userName?: string;
}

export function batchPoolContainerConfigurationContainerRegistriesToTerraform(struct?: BatchPoolContainerConfigurationContainerRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry_server: cdktf.stringToTerraform(struct!.registryServer),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}

export class BatchPoolContainerConfigurationContainerRegistriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BatchPoolContainerConfigurationContainerRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._registryServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryServer = this._registryServer;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolContainerConfigurationContainerRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._registryServer = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._registryServer = value.registryServer;
      this._userName = value.userName;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // registry_server - computed: false, optional: true, required: false
  private _registryServer?: string; 
  public get registryServer() {
    return this.getStringAttribute('registry_server');
  }
  public set registryServer(value: string) {
    this._registryServer = value;
  }
  public resetRegistryServer() {
    this._registryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryServerInput() {
    return this._registryServer;
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
}

export class BatchPoolContainerConfigurationContainerRegistriesList extends cdktf.ComplexList {
  public internalValue? : BatchPoolContainerConfigurationContainerRegistries[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BatchPoolContainerConfigurationContainerRegistriesOutputReference {
    return new BatchPoolContainerConfigurationContainerRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolContainerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#container_image_names BatchPool#container_image_names}
  */
  readonly containerImageNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#container_registries BatchPool#container_registries}
  */
  readonly containerRegistries?: BatchPoolContainerConfigurationContainerRegistries[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#type BatchPool#type}
  */
  readonly type?: string;
}

export function batchPoolContainerConfigurationToTerraform(struct?: BatchPoolContainerConfigurationOutputReference | BatchPoolContainerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolContainerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerImageNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImageNames = this._containerImageNames;
    }
    if (this._containerRegistries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRegistries = this._containerRegistries?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolContainerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerImageNames = undefined;
      this._containerRegistries.internalValue = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerImageNames = value.containerImageNames;
      this._containerRegistries.internalValue = value.containerRegistries;
      this._type = value.type;
    }
  }

  // container_image_names - computed: false, optional: true, required: false
  private _containerImageNames?: string[]; 
  public get containerImageNames() {
    return cdktf.Fn.tolist(this.getListAttribute('container_image_names'));
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
  private _containerRegistries = new BatchPoolContainerConfigurationContainerRegistriesList(this, "container_registries", false);
  public get containerRegistries() {
    return this._containerRegistries;
  }
  public putContainerRegistries(value: BatchPoolContainerConfigurationContainerRegistries[] | cdktf.IResolvable) {
    this._containerRegistries.internalValue = value;
  }
  public resetContainerRegistries() {
    this._containerRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistriesInput() {
    return this._containerRegistries.internalValue;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#resize_timeout BatchPool#resize_timeout}
  */
  readonly resizeTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}
  */
  readonly targetDedicatedNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}
  */
  readonly targetLowPriorityNodes?: number;
}

export function batchPoolFixedScaleToTerraform(struct?: BatchPoolFixedScaleOutputReference | BatchPoolFixedScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolFixedScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resizeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizeTimeout = this._resizeTimeout;
    }
    if (this._targetDedicatedNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDedicatedNodes = this._targetDedicatedNodes;
    }
    if (this._targetLowPriorityNodes !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#identity_ids BatchPool#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#type BatchPool#type}
  */
  readonly type: string;
}

export function batchPoolIdentityToTerraform(struct?: BatchPoolIdentityOutputReference | BatchPoolIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityIds = this._identityIds;
    }
    if (this._type !== undefined) {
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
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#access BatchPool#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#priority BatchPool#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#source_address_prefix BatchPool#source_address_prefix}
  */
  readonly sourceAddressPrefix: string;
}

export function batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    priority: cdktf.numberToTerraform(struct!.priority),
    source_address_prefix: cdktf.stringToTerraform(struct!.sourceAddressPrefix),
  }
}

export class BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._sourceAddressPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressPrefix = this._sourceAddressPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._priority = undefined;
      this._sourceAddressPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._priority = value.priority;
      this._sourceAddressPrefix = value.sourceAddressPrefix;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // source_address_prefix - computed: false, optional: false, required: true
  private _sourceAddressPrefix?: string; 
  public get sourceAddressPrefix() {
    return this.getStringAttribute('source_address_prefix');
  }
  public set sourceAddressPrefix(value: string) {
    this._sourceAddressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressPrefixInput() {
    return this._sourceAddressPrefix;
  }
}

export class BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList extends cdktf.ComplexList {
  public internalValue? : BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference {
    return new BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolNetworkConfigurationEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#backend_port BatchPool#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#frontend_port_range BatchPool#frontend_port_range}
  */
  readonly frontendPortRange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#name BatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#protocol BatchPool#protocol}
  */
  readonly protocol: string;
  /**
  * network_security_group_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#network_security_group_rules BatchPool#network_security_group_rules}
  */
  readonly networkSecurityGroupRules?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[] | cdktf.IResolvable;
}

export function batchPoolNetworkConfigurationEndpointConfigurationToTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class BatchPoolNetworkConfigurationEndpointConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BatchPoolNetworkConfigurationEndpointConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendPort = this._backendPort;
    }
    if (this._frontendPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendPortRange = this._frontendPortRange;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._networkSecurityGroupRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSecurityGroupRules = this._networkSecurityGroupRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolNetworkConfigurationEndpointConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendPort = undefined;
      this._frontendPortRange = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._networkSecurityGroupRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendPort = value.backendPort;
      this._frontendPortRange = value.frontendPortRange;
      this._name = value.name;
      this._protocol = value.protocol;
      this._networkSecurityGroupRules.internalValue = value.networkSecurityGroupRules;
    }
  }

  // backend_port - computed: false, optional: false, required: true
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort;
  }

  // frontend_port_range - computed: false, optional: false, required: true
  private _frontendPortRange?: string; 
  public get frontendPortRange() {
    return this.getStringAttribute('frontend_port_range');
  }
  public set frontendPortRange(value: string) {
    this._frontendPortRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendPortRangeInput() {
    return this._frontendPortRange;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // network_security_group_rules - computed: false, optional: true, required: false
  private _networkSecurityGroupRules = new BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList(this, "network_security_group_rules", false);
  public get networkSecurityGroupRules() {
    return this._networkSecurityGroupRules;
  }
  public putNetworkSecurityGroupRules(value: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[] | cdktf.IResolvable) {
    this._networkSecurityGroupRules.internalValue = value;
  }
  public resetNetworkSecurityGroupRules() {
    this._networkSecurityGroupRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityGroupRulesInput() {
    return this._networkSecurityGroupRules.internalValue;
  }
}

export class BatchPoolNetworkConfigurationEndpointConfigurationList extends cdktf.ComplexList {
  public internalValue? : BatchPoolNetworkConfigurationEndpointConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BatchPoolNetworkConfigurationEndpointConfigurationOutputReference {
    return new BatchPoolNetworkConfigurationEndpointConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}
  */
  readonly publicAddressProvisioningType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#public_ips BatchPool#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#subnet_id BatchPool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * endpoint_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#endpoint_configuration BatchPool#endpoint_configuration}
  */
  readonly endpointConfiguration?: BatchPoolNetworkConfigurationEndpointConfiguration[] | cdktf.IResolvable;
}

export function batchPoolNetworkConfigurationToTerraform(struct?: BatchPoolNetworkConfigurationOutputReference | BatchPoolNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicAddressProvisioningType !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAddressProvisioningType = this._publicAddressProvisioningType;
    }
    if (this._publicIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIps = this._publicIps;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._endpointConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointConfiguration = this._endpointConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicAddressProvisioningType = undefined;
      this._publicIps = undefined;
      this._subnetId = undefined;
      this._endpointConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicAddressProvisioningType = value.publicAddressProvisioningType;
      this._publicIps = value.publicIps;
      this._subnetId = value.subnetId;
      this._endpointConfiguration.internalValue = value.endpointConfiguration;
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
    return cdktf.Fn.tolist(this.getListAttribute('public_ips'));
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
  private _endpointConfiguration = new BatchPoolNetworkConfigurationEndpointConfigurationList(this, "endpoint_configuration", false);
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }
  public putEndpointConfiguration(value: BatchPoolNetworkConfigurationEndpointConfiguration[] | cdktf.IResolvable) {
    this._endpointConfiguration.internalValue = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration.internalValue;
  }
}
export interface BatchPoolStartTaskResourceFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#auto_storage_container_name BatchPool#auto_storage_container_name}
  */
  readonly autoStorageContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#blob_prefix BatchPool#blob_prefix}
  */
  readonly blobPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#file_mode BatchPool#file_mode}
  */
  readonly fileMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#file_path BatchPool#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#http_url BatchPool#http_url}
  */
  readonly httpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#storage_container_url BatchPool#storage_container_url}
  */
  readonly storageContainerUrl?: string;
}

export function batchPoolStartTaskResourceFileToTerraform(struct?: BatchPoolStartTaskResourceFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class BatchPoolStartTaskResourceFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BatchPoolStartTaskResourceFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoStorageContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoStorageContainerName = this._autoStorageContainerName;
    }
    if (this._blobPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobPrefix = this._blobPrefix;
    }
    if (this._fileMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileMode = this._fileMode;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._httpUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUrl = this._httpUrl;
    }
    if (this._storageContainerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainerUrl = this._storageContainerUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolStartTaskResourceFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoStorageContainerName = undefined;
      this._blobPrefix = undefined;
      this._fileMode = undefined;
      this._filePath = undefined;
      this._httpUrl = undefined;
      this._storageContainerUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoStorageContainerName = value.autoStorageContainerName;
      this._blobPrefix = value.blobPrefix;
      this._fileMode = value.fileMode;
      this._filePath = value.filePath;
      this._httpUrl = value.httpUrl;
      this._storageContainerUrl = value.storageContainerUrl;
    }
  }

  // auto_storage_container_name - computed: false, optional: true, required: false
  private _autoStorageContainerName?: string; 
  public get autoStorageContainerName() {
    return this.getStringAttribute('auto_storage_container_name');
  }
  public set autoStorageContainerName(value: string) {
    this._autoStorageContainerName = value;
  }
  public resetAutoStorageContainerName() {
    this._autoStorageContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStorageContainerNameInput() {
    return this._autoStorageContainerName;
  }

  // blob_prefix - computed: false, optional: true, required: false
  private _blobPrefix?: string; 
  public get blobPrefix() {
    return this.getStringAttribute('blob_prefix');
  }
  public set blobPrefix(value: string) {
    this._blobPrefix = value;
  }
  public resetBlobPrefix() {
    this._blobPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobPrefixInput() {
    return this._blobPrefix;
  }

  // file_mode - computed: false, optional: true, required: false
  private _fileMode?: string; 
  public get fileMode() {
    return this.getStringAttribute('file_mode');
  }
  public set fileMode(value: string) {
    this._fileMode = value;
  }
  public resetFileMode() {
    this._fileMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileModeInput() {
    return this._fileMode;
  }

  // file_path - computed: false, optional: true, required: false
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  public resetFilePath() {
    this._filePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // http_url - computed: false, optional: true, required: false
  private _httpUrl?: string; 
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }
  public set httpUrl(value: string) {
    this._httpUrl = value;
  }
  public resetHttpUrl() {
    this._httpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUrlInput() {
    return this._httpUrl;
  }

  // storage_container_url - computed: false, optional: true, required: false
  private _storageContainerUrl?: string; 
  public get storageContainerUrl() {
    return this.getStringAttribute('storage_container_url');
  }
  public set storageContainerUrl(value: string) {
    this._storageContainerUrl = value;
  }
  public resetStorageContainerUrl() {
    this._storageContainerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerUrlInput() {
    return this._storageContainerUrl;
  }
}

export class BatchPoolStartTaskResourceFileList extends cdktf.ComplexList {
  public internalValue? : BatchPoolStartTaskResourceFile[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BatchPoolStartTaskResourceFileOutputReference {
    return new BatchPoolStartTaskResourceFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolStartTaskUserIdentityAutoUser {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#elevation_level BatchPool#elevation_level}
  */
  readonly elevationLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#scope BatchPool#scope}
  */
  readonly scope?: string;
}

export function batchPoolStartTaskUserIdentityAutoUserToTerraform(struct?: BatchPoolStartTaskUserIdentityAutoUserOutputReference | BatchPoolStartTaskUserIdentityAutoUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolStartTaskUserIdentityAutoUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elevationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.elevationLevel = this._elevationLevel;
    }
    if (this._scope !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#user_name BatchPool#user_name}
  */
  readonly userName?: string;
  /**
  * auto_user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#auto_user BatchPool#auto_user}
  */
  readonly autoUser?: BatchPoolStartTaskUserIdentityAutoUser;
}

export function batchPoolStartTaskUserIdentityToTerraform(struct?: BatchPoolStartTaskUserIdentityOutputReference | BatchPoolStartTaskUserIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolStartTaskUserIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._autoUser?.internalValue !== undefined) {
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
  private _autoUser = new BatchPoolStartTaskUserIdentityAutoUserOutputReference(this, "auto_user");
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#command_line BatchPool#command_line}
  */
  readonly commandLine: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#common_environment_properties BatchPool#common_environment_properties}
  */
  readonly commonEnvironmentProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}
  */
  readonly taskRetryMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#wait_for_success BatchPool#wait_for_success}
  */
  readonly waitForSuccess?: boolean | cdktf.IResolvable;
  /**
  * resource_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#resource_file BatchPool#resource_file}
  */
  readonly resourceFile?: BatchPoolStartTaskResourceFile[] | cdktf.IResolvable;
  /**
  * user_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#user_identity BatchPool#user_identity}
  */
  readonly userIdentity: BatchPoolStartTaskUserIdentity;
}

export function batchPoolStartTaskToTerraform(struct?: BatchPoolStartTaskOutputReference | BatchPoolStartTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_line: cdktf.stringToTerraform(struct!.commandLine),
    common_environment_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonEnvironmentProperties),
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolStartTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandLine = this._commandLine;
    }
    if (this._commonEnvironmentProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonEnvironmentProperties = this._commonEnvironmentProperties;
    }
    if (this._taskRetryMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskRetryMaximum = this._taskRetryMaximum;
    }
    if (this._waitForSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForSuccess = this._waitForSuccess;
    }
    if (this._resourceFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFile = this._resourceFile?.internalValue;
    }
    if (this._userIdentity?.internalValue !== undefined) {
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
      this._taskRetryMaximum = undefined;
      this._waitForSuccess = undefined;
      this._resourceFile.internalValue = undefined;
      this._userIdentity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLine = value.commandLine;
      this._commonEnvironmentProperties = value.commonEnvironmentProperties;
      this._taskRetryMaximum = value.taskRetryMaximum;
      this._waitForSuccess = value.waitForSuccess;
      this._resourceFile.internalValue = value.resourceFile;
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

  // common_environment_properties - computed: false, optional: true, required: false
  private _commonEnvironmentProperties?: { [key: string]: string }; 
  public get commonEnvironmentProperties() {
    return this.getStringMapAttribute('common_environment_properties');
  }
  public set commonEnvironmentProperties(value: { [key: string]: string }) {
    this._commonEnvironmentProperties = value;
  }
  public resetCommonEnvironmentProperties() {
    this._commonEnvironmentProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonEnvironmentPropertiesInput() {
    return this._commonEnvironmentProperties;
  }

  // task_retry_maximum - computed: false, optional: true, required: false
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
    return this.getBooleanAttribute('wait_for_success');
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
  private _resourceFile = new BatchPoolStartTaskResourceFileList(this, "resource_file", false);
  public get resourceFile() {
    return this._resourceFile;
  }
  public putResourceFile(value: BatchPoolStartTaskResourceFile[] | cdktf.IResolvable) {
    this._resourceFile.internalValue = value;
  }
  public resetResourceFile() {
    this._resourceFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFileInput() {
    return this._resourceFile.internalValue;
  }

  // user_identity - computed: false, optional: false, required: true
  private _userIdentity = new BatchPoolStartTaskUserIdentityOutputReference(this, "user_identity");
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#id BatchPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#offer BatchPool#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#publisher BatchPool#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#sku BatchPool#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#version BatchPool#version}
  */
  readonly version?: string;
}

export function batchPoolStorageImageReferenceToTerraform(struct?: BatchPoolStorageImageReferenceOutputReference | BatchPoolStorageImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolStorageImageReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#create BatchPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#delete BatchPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#read BatchPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool#update BatchPool#update}
  */
  readonly update?: string;
}

export function batchPoolTimeoutsToTerraform(struct?: BatchPoolTimeoutsOutputReference | BatchPoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool azurerm_batch_pool}
*/
export class BatchPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_batch_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool azurerm_batch_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchPoolConfig
  */
  public constructor(scope: Construct, id: string, config: BatchPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_batch_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.15.1',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._displayName = config.displayName;
    this._id = config.id;
    this._maxTasksPerNode = config.maxTasksPerNode;
    this._metadata = config.metadata;
    this._name = config.name;
    this._nodeAgentSkuId = config.nodeAgentSkuId;
    this._resourceGroupName = config.resourceGroupName;
    this._stopPendingResizeOperation = config.stopPendingResizeOperation;
    this._vmSize = config.vmSize;
    this._autoScale.internalValue = config.autoScale;
    this._certificate.internalValue = config.certificate;
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
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
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
    return this.getBooleanAttribute('stop_pending_resize_operation');
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
  private _autoScale = new BatchPoolAutoScaleOutputReference(this, "auto_scale");
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
  private _certificate = new BatchPoolCertificateList(this, "certificate", false);
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: BatchPoolCertificate[] | cdktf.IResolvable) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // container_configuration - computed: false, optional: true, required: false
  private _containerConfiguration = new BatchPoolContainerConfigurationOutputReference(this, "container_configuration");
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
  private _fixedScale = new BatchPoolFixedScaleOutputReference(this, "fixed_scale");
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
  private _identity = new BatchPoolIdentityOutputReference(this, "identity");
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
  private _networkConfiguration = new BatchPoolNetworkConfigurationOutputReference(this, "network_configuration");
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
  private _startTask = new BatchPoolStartTaskOutputReference(this, "start_task");
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
  private _storageImageReference = new BatchPoolStorageImageReferenceOutputReference(this, "storage_image_reference");
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
  private _timeouts = new BatchPoolTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      max_tasks_per_node: cdktf.numberToTerraform(this._maxTasksPerNode),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      node_agent_sku_id: cdktf.stringToTerraform(this._nodeAgentSkuId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      stop_pending_resize_operation: cdktf.booleanToTerraform(this._stopPendingResizeOperation),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      auto_scale: batchPoolAutoScaleToTerraform(this._autoScale.internalValue),
      certificate: cdktf.listMapper(batchPoolCertificateToTerraform)(this._certificate.internalValue),
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
