// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#account_name BatchPool#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#display_name BatchPool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#id BatchPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#inter_node_communication BatchPool#inter_node_communication}
  */
  readonly interNodeCommunication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#license_type BatchPool#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#max_tasks_per_node BatchPool#max_tasks_per_node}
  */
  readonly maxTasksPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#metadata BatchPool#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#name BatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#node_agent_sku_id BatchPool#node_agent_sku_id}
  */
  readonly nodeAgentSkuId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#os_disk_placement BatchPool#os_disk_placement}
  */
  readonly osDiskPlacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#resource_group_name BatchPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}
  */
  readonly stopPendingResizeOperation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#target_node_communication_mode BatchPool#target_node_communication_mode}
  */
  readonly targetNodeCommunicationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#vm_size BatchPool#vm_size}
  */
  readonly vmSize: string;
  /**
  * auto_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#auto_scale BatchPool#auto_scale}
  */
  readonly autoScale?: BatchPoolAutoScale;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#certificate BatchPool#certificate}
  */
  readonly certificate?: BatchPoolCertificate[] | cdktf.IResolvable;
  /**
  * container_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#container_configuration BatchPool#container_configuration}
  */
  readonly containerConfiguration?: BatchPoolContainerConfiguration;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#data_disks BatchPool#data_disks}
  */
  readonly dataDisks?: BatchPoolDataDisks[] | cdktf.IResolvable;
  /**
  * disk_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#disk_encryption BatchPool#disk_encryption}
  */
  readonly diskEncryption?: BatchPoolDiskEncryption[] | cdktf.IResolvable;
  /**
  * extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#extensions BatchPool#extensions}
  */
  readonly extensions?: BatchPoolExtensions[] | cdktf.IResolvable;
  /**
  * fixed_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#fixed_scale BatchPool#fixed_scale}
  */
  readonly fixedScale?: BatchPoolFixedScale;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#identity BatchPool#identity}
  */
  readonly identity?: BatchPoolIdentity;
  /**
  * mount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#mount BatchPool#mount}
  */
  readonly mount?: BatchPoolMount[] | cdktf.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#network_configuration BatchPool#network_configuration}
  */
  readonly networkConfiguration?: BatchPoolNetworkConfiguration;
  /**
  * node_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#node_placement BatchPool#node_placement}
  */
  readonly nodePlacement?: BatchPoolNodePlacement[] | cdktf.IResolvable;
  /**
  * start_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#start_task BatchPool#start_task}
  */
  readonly startTask?: BatchPoolStartTask;
  /**
  * storage_image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#storage_image_reference BatchPool#storage_image_reference}
  */
  readonly storageImageReference: BatchPoolStorageImageReference;
  /**
  * task_scheduling_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#task_scheduling_policy BatchPool#task_scheduling_policy}
  */
  readonly taskSchedulingPolicy?: BatchPoolTaskSchedulingPolicy[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#timeouts BatchPool#timeouts}
  */
  readonly timeouts?: BatchPoolTimeouts;
  /**
  * user_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#user_accounts BatchPool#user_accounts}
  */
  readonly userAccounts?: BatchPoolUserAccounts[] | cdktf.IResolvable;
  /**
  * windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#windows BatchPool#windows}
  */
  readonly windows?: BatchPoolWindows[] | cdktf.IResolvable;
}
export interface BatchPoolAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#evaluation_interval BatchPool#evaluation_interval}
  */
  readonly evaluationInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#formula BatchPool#formula}
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


export function batchPoolAutoScaleToHclTerraform(struct?: BatchPoolAutoScaleOutputReference | BatchPoolAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_interval: {
      value: cdktf.stringToHclTerraform(struct!.evaluationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formula: {
      value: cdktf.stringToHclTerraform(struct!.formula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#id BatchPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#store_location BatchPool#store_location}
  */
  readonly storeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#store_name BatchPool#store_name}
  */
  readonly storeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#visibility BatchPool#visibility}
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
    visibility: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.visibility),
  }
}


export function batchPoolCertificateToHclTerraform(struct?: BatchPoolCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_location: {
      value: cdktf.stringToHclTerraform(struct!.storeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_name: {
      value: cdktf.stringToHclTerraform(struct!.storeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.visibility),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#password BatchPool#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}
  */
  readonly registryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#user_name BatchPool#user_name}
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
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function batchPoolContainerConfigurationContainerRegistriesToHclTerraform(struct?: BatchPoolContainerConfigurationContainerRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_server: {
      value: cdktf.stringToHclTerraform(struct!.registryServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identity_id: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
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
      this._userAssignedIdentityId = undefined;
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
      this._userAssignedIdentityId = value.userAssignedIdentityId;
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

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#container_image_names BatchPool#container_image_names}
  */
  readonly containerImageNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#container_registries BatchPool#container_registries}
  */
  readonly containerRegistries?: BatchPoolContainerConfigurationContainerRegistries[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#type BatchPool#type}
  */
  readonly type?: string;
}

export function batchPoolContainerConfigurationToTerraform(struct?: BatchPoolContainerConfigurationOutputReference | BatchPoolContainerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_image_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerImageNames),
    container_registries: cdktf.listMapper(batchPoolContainerConfigurationContainerRegistriesToTerraform, false)(struct!.containerRegistries),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function batchPoolContainerConfigurationToHclTerraform(struct?: BatchPoolContainerConfigurationOutputReference | BatchPoolContainerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_image_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerImageNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    container_registries: {
      value: cdktf.listMapperHcl(batchPoolContainerConfigurationContainerRegistriesToHclTerraform, false)(struct!.containerRegistries),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolContainerConfigurationContainerRegistriesList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface BatchPoolDataDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#caching BatchPool#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#disk_size_gb BatchPool#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#lun BatchPool#lun}
  */
  readonly lun: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#storage_account_type BatchPool#storage_account_type}
  */
  readonly storageAccountType?: string;
}

export function batchPoolDataDisksToTerraform(struct?: BatchPoolDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching: cdktf.stringToTerraform(struct!.caching),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    lun: cdktf.numberToTerraform(struct!.lun),
    storage_account_type: cdktf.stringToTerraform(struct!.storageAccountType),
  }
}


export function batchPoolDataDisksToHclTerraform(struct?: BatchPoolDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching: {
      value: cdktf.stringToHclTerraform(struct!.caching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_account_type: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caching !== undefined) {
      hasAnyValues = true;
      internalValueResult.caching = this._caching;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._storageAccountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountType = this._storageAccountType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caching = undefined;
      this._diskSizeGb = undefined;
      this._lun = undefined;
      this._storageAccountType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caching = value.caching;
      this._diskSizeGb = value.diskSizeGb;
      this._lun = value.lun;
      this._storageAccountType = value.storageAccountType;
    }
  }

  // caching - computed: false, optional: true, required: false
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  public resetCaching() {
    this._caching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // disk_size_gb - computed: false, optional: false, required: true
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // storage_account_type - computed: false, optional: true, required: false
  private _storageAccountType?: string; 
  public get storageAccountType() {
    return this.getStringAttribute('storage_account_type');
  }
  public set storageAccountType(value: string) {
    this._storageAccountType = value;
  }
  public resetStorageAccountType() {
    this._storageAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountTypeInput() {
    return this._storageAccountType;
  }
}

export class BatchPoolDataDisksList extends cdktf.ComplexList {
  public internalValue? : BatchPoolDataDisks[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolDataDisksOutputReference {
    return new BatchPoolDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolDiskEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#disk_encryption_target BatchPool#disk_encryption_target}
  */
  readonly diskEncryptionTarget: string;
}

export function batchPoolDiskEncryptionToTerraform(struct?: BatchPoolDiskEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_encryption_target: cdktf.stringToTerraform(struct!.diskEncryptionTarget),
  }
}


export function batchPoolDiskEncryptionToHclTerraform(struct?: BatchPoolDiskEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_encryption_target: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolDiskEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolDiskEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskEncryptionTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionTarget = this._diskEncryptionTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolDiskEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskEncryptionTarget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskEncryptionTarget = value.diskEncryptionTarget;
    }
  }

  // disk_encryption_target - computed: false, optional: false, required: true
  private _diskEncryptionTarget?: string; 
  public get diskEncryptionTarget() {
    return this.getStringAttribute('disk_encryption_target');
  }
  public set diskEncryptionTarget(value: string) {
    this._diskEncryptionTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionTargetInput() {
    return this._diskEncryptionTarget;
  }
}

export class BatchPoolDiskEncryptionList extends cdktf.ComplexList {
  public internalValue? : BatchPoolDiskEncryption[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolDiskEncryptionOutputReference {
    return new BatchPoolDiskEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolExtensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#auto_upgrade_minor_version BatchPool#auto_upgrade_minor_version}
  */
  readonly autoUpgradeMinorVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#automatic_upgrade_enabled BatchPool#automatic_upgrade_enabled}
  */
  readonly automaticUpgradeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#name BatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#protected_settings BatchPool#protected_settings}
  */
  readonly protectedSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#provision_after_extensions BatchPool#provision_after_extensions}
  */
  readonly provisionAfterExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#publisher BatchPool#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#settings_json BatchPool#settings_json}
  */
  readonly settingsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#type BatchPool#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#type_handler_version BatchPool#type_handler_version}
  */
  readonly typeHandlerVersion?: string;
}

export function batchPoolExtensionsToTerraform(struct?: BatchPoolExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade_minor_version: cdktf.booleanToTerraform(struct!.autoUpgradeMinorVersion),
    automatic_upgrade_enabled: cdktf.booleanToTerraform(struct!.automaticUpgradeEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    protected_settings: cdktf.stringToTerraform(struct!.protectedSettings),
    provision_after_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.provisionAfterExtensions),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    settings_json: cdktf.stringToTerraform(struct!.settingsJson),
    type: cdktf.stringToTerraform(struct!.type),
    type_handler_version: cdktf.stringToTerraform(struct!.typeHandlerVersion),
  }
}


export function batchPoolExtensionsToHclTerraform(struct?: BatchPoolExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_upgrade_minor_version: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgradeMinorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_upgrade_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.automaticUpgradeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protected_settings: {
      value: cdktf.stringToHclTerraform(struct!.protectedSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provision_after_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.provisionAfterExtensions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings_json: {
      value: cdktf.stringToHclTerraform(struct!.settingsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_handler_version: {
      value: cdktf.stringToHclTerraform(struct!.typeHandlerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgradeMinorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgradeMinorVersion = this._autoUpgradeMinorVersion;
    }
    if (this._automaticUpgradeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUpgradeEnabled = this._automaticUpgradeEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectedSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedSettings = this._protectedSettings;
    }
    if (this._provisionAfterExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionAfterExtensions = this._provisionAfterExtensions;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._settingsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsJson = this._settingsJson;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeHandlerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeHandlerVersion = this._typeHandlerVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoUpgradeMinorVersion = undefined;
      this._automaticUpgradeEnabled = undefined;
      this._name = undefined;
      this._protectedSettings = undefined;
      this._provisionAfterExtensions = undefined;
      this._publisher = undefined;
      this._settingsJson = undefined;
      this._type = undefined;
      this._typeHandlerVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoUpgradeMinorVersion = value.autoUpgradeMinorVersion;
      this._automaticUpgradeEnabled = value.automaticUpgradeEnabled;
      this._name = value.name;
      this._protectedSettings = value.protectedSettings;
      this._provisionAfterExtensions = value.provisionAfterExtensions;
      this._publisher = value.publisher;
      this._settingsJson = value.settingsJson;
      this._type = value.type;
      this._typeHandlerVersion = value.typeHandlerVersion;
    }
  }

  // auto_upgrade_minor_version - computed: false, optional: true, required: false
  private _autoUpgradeMinorVersion?: boolean | cdktf.IResolvable; 
  public get autoUpgradeMinorVersion() {
    return this.getBooleanAttribute('auto_upgrade_minor_version');
  }
  public set autoUpgradeMinorVersion(value: boolean | cdktf.IResolvable) {
    this._autoUpgradeMinorVersion = value;
  }
  public resetAutoUpgradeMinorVersion() {
    this._autoUpgradeMinorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeMinorVersionInput() {
    return this._autoUpgradeMinorVersion;
  }

  // automatic_upgrade_enabled - computed: false, optional: true, required: false
  private _automaticUpgradeEnabled?: boolean | cdktf.IResolvable; 
  public get automaticUpgradeEnabled() {
    return this.getBooleanAttribute('automatic_upgrade_enabled');
  }
  public set automaticUpgradeEnabled(value: boolean | cdktf.IResolvable) {
    this._automaticUpgradeEnabled = value;
  }
  public resetAutomaticUpgradeEnabled() {
    this._automaticUpgradeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpgradeEnabledInput() {
    return this._automaticUpgradeEnabled;
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

  // protected_settings - computed: false, optional: true, required: false
  private _protectedSettings?: string; 
  public get protectedSettings() {
    return this.getStringAttribute('protected_settings');
  }
  public set protectedSettings(value: string) {
    this._protectedSettings = value;
  }
  public resetProtectedSettings() {
    this._protectedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedSettingsInput() {
    return this._protectedSettings;
  }

  // provision_after_extensions - computed: false, optional: true, required: false
  private _provisionAfterExtensions?: string[]; 
  public get provisionAfterExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('provision_after_extensions'));
  }
  public set provisionAfterExtensions(value: string[]) {
    this._provisionAfterExtensions = value;
  }
  public resetProvisionAfterExtensions() {
    this._provisionAfterExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionAfterExtensionsInput() {
    return this._provisionAfterExtensions;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // settings_json - computed: false, optional: true, required: false
  private _settingsJson?: string; 
  public get settingsJson() {
    return this.getStringAttribute('settings_json');
  }
  public set settingsJson(value: string) {
    this._settingsJson = value;
  }
  public resetSettingsJson() {
    this._settingsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsJsonInput() {
    return this._settingsJson;
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

  // type_handler_version - computed: false, optional: true, required: false
  private _typeHandlerVersion?: string; 
  public get typeHandlerVersion() {
    return this.getStringAttribute('type_handler_version');
  }
  public set typeHandlerVersion(value: string) {
    this._typeHandlerVersion = value;
  }
  public resetTypeHandlerVersion() {
    this._typeHandlerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeHandlerVersionInput() {
    return this._typeHandlerVersion;
  }
}

export class BatchPoolExtensionsList extends cdktf.ComplexList {
  public internalValue? : BatchPoolExtensions[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolExtensionsOutputReference {
    return new BatchPoolExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolFixedScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#node_deallocation_method BatchPool#node_deallocation_method}
  */
  readonly nodeDeallocationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#resize_timeout BatchPool#resize_timeout}
  */
  readonly resizeTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#target_dedicated_nodes BatchPool#target_dedicated_nodes}
  */
  readonly targetDedicatedNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#target_low_priority_nodes BatchPool#target_low_priority_nodes}
  */
  readonly targetLowPriorityNodes?: number;
}

export function batchPoolFixedScaleToTerraform(struct?: BatchPoolFixedScaleOutputReference | BatchPoolFixedScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_deallocation_method: cdktf.stringToTerraform(struct!.nodeDeallocationMethod),
    resize_timeout: cdktf.stringToTerraform(struct!.resizeTimeout),
    target_dedicated_nodes: cdktf.numberToTerraform(struct!.targetDedicatedNodes),
    target_low_priority_nodes: cdktf.numberToTerraform(struct!.targetLowPriorityNodes),
  }
}


export function batchPoolFixedScaleToHclTerraform(struct?: BatchPoolFixedScaleOutputReference | BatchPoolFixedScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_deallocation_method: {
      value: cdktf.stringToHclTerraform(struct!.nodeDeallocationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resize_timeout: {
      value: cdktf.stringToHclTerraform(struct!.resizeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_dedicated_nodes: {
      value: cdktf.numberToHclTerraform(struct!.targetDedicatedNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_low_priority_nodes: {
      value: cdktf.numberToHclTerraform(struct!.targetLowPriorityNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._nodeDeallocationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDeallocationMethod = this._nodeDeallocationMethod;
    }
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
      this._nodeDeallocationMethod = undefined;
      this._resizeTimeout = undefined;
      this._targetDedicatedNodes = undefined;
      this._targetLowPriorityNodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeDeallocationMethod = value.nodeDeallocationMethod;
      this._resizeTimeout = value.resizeTimeout;
      this._targetDedicatedNodes = value.targetDedicatedNodes;
      this._targetLowPriorityNodes = value.targetLowPriorityNodes;
    }
  }

  // node_deallocation_method - computed: false, optional: true, required: false
  private _nodeDeallocationMethod?: string; 
  public get nodeDeallocationMethod() {
    return this.getStringAttribute('node_deallocation_method');
  }
  public set nodeDeallocationMethod(value: string) {
    this._nodeDeallocationMethod = value;
  }
  public resetNodeDeallocationMethod() {
    this._nodeDeallocationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDeallocationMethodInput() {
    return this._nodeDeallocationMethod;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#identity_ids BatchPool#identity_ids}
  */
  readonly identityIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#type BatchPool#type}
  */
  readonly type: string;
}

export function batchPoolIdentityToTerraform(struct?: BatchPoolIdentityOutputReference | BatchPoolIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function batchPoolIdentityToHclTerraform(struct?: BatchPoolIdentityOutputReference | BatchPoolIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface BatchPoolMountAzureBlobFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#account_key BatchPool#account_key}
  */
  readonly accountKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#account_name BatchPool#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#blobfuse_options BatchPool#blobfuse_options}
  */
  readonly blobfuseOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#container_name BatchPool#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#identity_id BatchPool#identity_id}
  */
  readonly identityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}
  */
  readonly relativeMountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#sas_key BatchPool#sas_key}
  */
  readonly sasKey?: string;
}

export function batchPoolMountAzureBlobFileSystemToTerraform(struct?: BatchPoolMountAzureBlobFileSystemOutputReference | BatchPoolMountAzureBlobFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_key: cdktf.stringToTerraform(struct!.accountKey),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    blobfuse_options: cdktf.stringToTerraform(struct!.blobfuseOptions),
    container_name: cdktf.stringToTerraform(struct!.containerName),
    identity_id: cdktf.stringToTerraform(struct!.identityId),
    relative_mount_path: cdktf.stringToTerraform(struct!.relativeMountPath),
    sas_key: cdktf.stringToTerraform(struct!.sasKey),
  }
}


export function batchPoolMountAzureBlobFileSystemToHclTerraform(struct?: BatchPoolMountAzureBlobFileSystemOutputReference | BatchPoolMountAzureBlobFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_key: {
      value: cdktf.stringToHclTerraform(struct!.accountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blobfuse_options: {
      value: cdktf.stringToHclTerraform(struct!.blobfuseOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_id: {
      value: cdktf.stringToHclTerraform(struct!.identityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.relativeMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sas_key: {
      value: cdktf.stringToHclTerraform(struct!.sasKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolMountAzureBlobFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchPoolMountAzureBlobFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKey = this._accountKey;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._blobfuseOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobfuseOptions = this._blobfuseOptions;
    }
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._identityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityId = this._identityId;
    }
    if (this._relativeMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeMountPath = this._relativeMountPath;
    }
    if (this._sasKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasKey = this._sasKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolMountAzureBlobFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountKey = undefined;
      this._accountName = undefined;
      this._blobfuseOptions = undefined;
      this._containerName = undefined;
      this._identityId = undefined;
      this._relativeMountPath = undefined;
      this._sasKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountKey = value.accountKey;
      this._accountName = value.accountName;
      this._blobfuseOptions = value.blobfuseOptions;
      this._containerName = value.containerName;
      this._identityId = value.identityId;
      this._relativeMountPath = value.relativeMountPath;
      this._sasKey = value.sasKey;
    }
  }

  // account_key - computed: false, optional: true, required: false
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  public resetAccountKey() {
    this._accountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

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

  // blobfuse_options - computed: false, optional: true, required: false
  private _blobfuseOptions?: string; 
  public get blobfuseOptions() {
    return this.getStringAttribute('blobfuse_options');
  }
  public set blobfuseOptions(value: string) {
    this._blobfuseOptions = value;
  }
  public resetBlobfuseOptions() {
    this._blobfuseOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobfuseOptionsInput() {
    return this._blobfuseOptions;
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // identity_id - computed: false, optional: true, required: false
  private _identityId?: string; 
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }
  public set identityId(value: string) {
    this._identityId = value;
  }
  public resetIdentityId() {
    this._identityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdInput() {
    return this._identityId;
  }

  // relative_mount_path - computed: false, optional: false, required: true
  private _relativeMountPath?: string; 
  public get relativeMountPath() {
    return this.getStringAttribute('relative_mount_path');
  }
  public set relativeMountPath(value: string) {
    this._relativeMountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeMountPathInput() {
    return this._relativeMountPath;
  }

  // sas_key - computed: false, optional: true, required: false
  private _sasKey?: string; 
  public get sasKey() {
    return this.getStringAttribute('sas_key');
  }
  public set sasKey(value: string) {
    this._sasKey = value;
  }
  public resetSasKey() {
    this._sasKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasKeyInput() {
    return this._sasKey;
  }
}
export interface BatchPoolMountAzureFileShare {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#account_key BatchPool#account_key}
  */
  readonly accountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#account_name BatchPool#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#azure_file_url BatchPool#azure_file_url}
  */
  readonly azureFileUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}
  */
  readonly relativeMountPath: string;
}

export function batchPoolMountAzureFileShareToTerraform(struct?: BatchPoolMountAzureFileShare | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_key: cdktf.stringToTerraform(struct!.accountKey),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    azure_file_url: cdktf.stringToTerraform(struct!.azureFileUrl),
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    relative_mount_path: cdktf.stringToTerraform(struct!.relativeMountPath),
  }
}


export function batchPoolMountAzureFileShareToHclTerraform(struct?: BatchPoolMountAzureFileShare | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_key: {
      value: cdktf.stringToHclTerraform(struct!.accountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_file_url: {
      value: cdktf.stringToHclTerraform(struct!.azureFileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_options: {
      value: cdktf.stringToHclTerraform(struct!.mountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.relativeMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolMountAzureFileShareOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolMountAzureFileShare | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKey = this._accountKey;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._azureFileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureFileUrl = this._azureFileUrl;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._relativeMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeMountPath = this._relativeMountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolMountAzureFileShare | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountKey = undefined;
      this._accountName = undefined;
      this._azureFileUrl = undefined;
      this._mountOptions = undefined;
      this._relativeMountPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountKey = value.accountKey;
      this._accountName = value.accountName;
      this._azureFileUrl = value.azureFileUrl;
      this._mountOptions = value.mountOptions;
      this._relativeMountPath = value.relativeMountPath;
    }
  }

  // account_key - computed: false, optional: false, required: true
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

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

  // azure_file_url - computed: false, optional: false, required: true
  private _azureFileUrl?: string; 
  public get azureFileUrl() {
    return this.getStringAttribute('azure_file_url');
  }
  public set azureFileUrl(value: string) {
    this._azureFileUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileUrlInput() {
    return this._azureFileUrl;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // relative_mount_path - computed: false, optional: false, required: true
  private _relativeMountPath?: string; 
  public get relativeMountPath() {
    return this.getStringAttribute('relative_mount_path');
  }
  public set relativeMountPath(value: string) {
    this._relativeMountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeMountPathInput() {
    return this._relativeMountPath;
  }
}

export class BatchPoolMountAzureFileShareList extends cdktf.ComplexList {
  public internalValue? : BatchPoolMountAzureFileShare[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolMountAzureFileShareOutputReference {
    return new BatchPoolMountAzureFileShareOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolMountCifsMount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#password BatchPool#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}
  */
  readonly relativeMountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#source BatchPool#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#user_name BatchPool#user_name}
  */
  readonly userName: string;
}

export function batchPoolMountCifsMountToTerraform(struct?: BatchPoolMountCifsMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    password: cdktf.stringToTerraform(struct!.password),
    relative_mount_path: cdktf.stringToTerraform(struct!.relativeMountPath),
    source: cdktf.stringToTerraform(struct!.source),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function batchPoolMountCifsMountToHclTerraform(struct?: BatchPoolMountCifsMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_options: {
      value: cdktf.stringToHclTerraform(struct!.mountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.relativeMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolMountCifsMountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolMountCifsMount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._relativeMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeMountPath = this._relativeMountPath;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolMountCifsMount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountOptions = undefined;
      this._password = undefined;
      this._relativeMountPath = undefined;
      this._source = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountOptions = value.mountOptions;
      this._password = value.password;
      this._relativeMountPath = value.relativeMountPath;
      this._source = value.source;
      this._userName = value.userName;
    }
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // relative_mount_path - computed: false, optional: false, required: true
  private _relativeMountPath?: string; 
  public get relativeMountPath() {
    return this.getStringAttribute('relative_mount_path');
  }
  public set relativeMountPath(value: string) {
    this._relativeMountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeMountPathInput() {
    return this._relativeMountPath;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class BatchPoolMountCifsMountList extends cdktf.ComplexList {
  public internalValue? : BatchPoolMountCifsMount[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolMountCifsMountOutputReference {
    return new BatchPoolMountCifsMountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolMountNfsMount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#mount_options BatchPool#mount_options}
  */
  readonly mountOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#relative_mount_path BatchPool#relative_mount_path}
  */
  readonly relativeMountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#source BatchPool#source}
  */
  readonly source: string;
}

export function batchPoolMountNfsMountToTerraform(struct?: BatchPoolMountNfsMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: cdktf.stringToTerraform(struct!.mountOptions),
    relative_mount_path: cdktf.stringToTerraform(struct!.relativeMountPath),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function batchPoolMountNfsMountToHclTerraform(struct?: BatchPoolMountNfsMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_options: {
      value: cdktf.stringToHclTerraform(struct!.mountOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.relativeMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolMountNfsMountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolMountNfsMount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._relativeMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeMountPath = this._relativeMountPath;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolMountNfsMount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountOptions = undefined;
      this._relativeMountPath = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountOptions = value.mountOptions;
      this._relativeMountPath = value.relativeMountPath;
      this._source = value.source;
    }
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string; 
  public get mountOptions() {
    return this.getStringAttribute('mount_options');
  }
  public set mountOptions(value: string) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // relative_mount_path - computed: false, optional: false, required: true
  private _relativeMountPath?: string; 
  public get relativeMountPath() {
    return this.getStringAttribute('relative_mount_path');
  }
  public set relativeMountPath(value: string) {
    this._relativeMountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeMountPathInput() {
    return this._relativeMountPath;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class BatchPoolMountNfsMountList extends cdktf.ComplexList {
  public internalValue? : BatchPoolMountNfsMount[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolMountNfsMountOutputReference {
    return new BatchPoolMountNfsMountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolMount {
  /**
  * azure_blob_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#azure_blob_file_system BatchPool#azure_blob_file_system}
  */
  readonly azureBlobFileSystem?: BatchPoolMountAzureBlobFileSystem;
  /**
  * azure_file_share block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#azure_file_share BatchPool#azure_file_share}
  */
  readonly azureFileShare?: BatchPoolMountAzureFileShare[] | cdktf.IResolvable;
  /**
  * cifs_mount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#cifs_mount BatchPool#cifs_mount}
  */
  readonly cifsMount?: BatchPoolMountCifsMount[] | cdktf.IResolvable;
  /**
  * nfs_mount block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#nfs_mount BatchPool#nfs_mount}
  */
  readonly nfsMount?: BatchPoolMountNfsMount[] | cdktf.IResolvable;
}

export function batchPoolMountToTerraform(struct?: BatchPoolMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_blob_file_system: batchPoolMountAzureBlobFileSystemToTerraform(struct!.azureBlobFileSystem),
    azure_file_share: cdktf.listMapper(batchPoolMountAzureFileShareToTerraform, true)(struct!.azureFileShare),
    cifs_mount: cdktf.listMapper(batchPoolMountCifsMountToTerraform, true)(struct!.cifsMount),
    nfs_mount: cdktf.listMapper(batchPoolMountNfsMountToTerraform, true)(struct!.nfsMount),
  }
}


export function batchPoolMountToHclTerraform(struct?: BatchPoolMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_blob_file_system: {
      value: batchPoolMountAzureBlobFileSystemToHclTerraform(struct!.azureBlobFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolMountAzureBlobFileSystemList",
    },
    azure_file_share: {
      value: cdktf.listMapperHcl(batchPoolMountAzureFileShareToHclTerraform, true)(struct!.azureFileShare),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolMountAzureFileShareList",
    },
    cifs_mount: {
      value: cdktf.listMapperHcl(batchPoolMountCifsMountToHclTerraform, true)(struct!.cifsMount),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolMountCifsMountList",
    },
    nfs_mount: {
      value: cdktf.listMapperHcl(batchPoolMountNfsMountToHclTerraform, true)(struct!.nfsMount),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolMountNfsMountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolMountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolMount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureBlobFileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobFileSystem = this._azureBlobFileSystem?.internalValue;
    }
    if (this._azureFileShare?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureFileShare = this._azureFileShare?.internalValue;
    }
    if (this._cifsMount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cifsMount = this._cifsMount?.internalValue;
    }
    if (this._nfsMount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfsMount = this._nfsMount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolMount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureBlobFileSystem.internalValue = undefined;
      this._azureFileShare.internalValue = undefined;
      this._cifsMount.internalValue = undefined;
      this._nfsMount.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureBlobFileSystem.internalValue = value.azureBlobFileSystem;
      this._azureFileShare.internalValue = value.azureFileShare;
      this._cifsMount.internalValue = value.cifsMount;
      this._nfsMount.internalValue = value.nfsMount;
    }
  }

  // azure_blob_file_system - computed: false, optional: true, required: false
  private _azureBlobFileSystem = new BatchPoolMountAzureBlobFileSystemOutputReference(this, "azure_blob_file_system");
  public get azureBlobFileSystem() {
    return this._azureBlobFileSystem;
  }
  public putAzureBlobFileSystem(value: BatchPoolMountAzureBlobFileSystem) {
    this._azureBlobFileSystem.internalValue = value;
  }
  public resetAzureBlobFileSystem() {
    this._azureBlobFileSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobFileSystemInput() {
    return this._azureBlobFileSystem.internalValue;
  }

  // azure_file_share - computed: false, optional: true, required: false
  private _azureFileShare = new BatchPoolMountAzureFileShareList(this, "azure_file_share", false);
  public get azureFileShare() {
    return this._azureFileShare;
  }
  public putAzureFileShare(value: BatchPoolMountAzureFileShare[] | cdktf.IResolvable) {
    this._azureFileShare.internalValue = value;
  }
  public resetAzureFileShare() {
    this._azureFileShare.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileShareInput() {
    return this._azureFileShare.internalValue;
  }

  // cifs_mount - computed: false, optional: true, required: false
  private _cifsMount = new BatchPoolMountCifsMountList(this, "cifs_mount", false);
  public get cifsMount() {
    return this._cifsMount;
  }
  public putCifsMount(value: BatchPoolMountCifsMount[] | cdktf.IResolvable) {
    this._cifsMount.internalValue = value;
  }
  public resetCifsMount() {
    this._cifsMount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cifsMountInput() {
    return this._cifsMount.internalValue;
  }

  // nfs_mount - computed: false, optional: true, required: false
  private _nfsMount = new BatchPoolMountNfsMountList(this, "nfs_mount", false);
  public get nfsMount() {
    return this._nfsMount;
  }
  public putNfsMount(value: BatchPoolMountNfsMount[] | cdktf.IResolvable) {
    this._nfsMount.internalValue = value;
  }
  public resetNfsMount() {
    this._nfsMount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsMountInput() {
    return this._nfsMount.internalValue;
  }
}

export class BatchPoolMountList extends cdktf.ComplexList {
  public internalValue? : BatchPoolMount[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolMountOutputReference {
    return new BatchPoolMountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#access BatchPool#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#priority BatchPool#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#source_address_prefix BatchPool#source_address_prefix}
  */
  readonly sourceAddressPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#source_port_ranges BatchPool#source_port_ranges}
  */
  readonly sourcePortRanges?: string[];
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
    source_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourcePortRanges),
  }
}


export function batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToHclTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourcePortRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._sourcePortRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePortRanges = this._sourcePortRanges;
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
      this._sourcePortRanges = undefined;
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
      this._sourcePortRanges = value.sourcePortRanges;
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

  // source_port_ranges - computed: true, optional: true, required: false
  private _sourcePortRanges?: string[]; 
  public get sourcePortRanges() {
    return this.getListAttribute('source_port_ranges');
  }
  public set sourcePortRanges(value: string[]) {
    this._sourcePortRanges = value;
  }
  public resetSourcePortRanges() {
    this._sourcePortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortRangesInput() {
    return this._sourcePortRanges;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#backend_port BatchPool#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#frontend_port_range BatchPool#frontend_port_range}
  */
  readonly frontendPortRange: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#name BatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#protocol BatchPool#protocol}
  */
  readonly protocol: string;
  /**
  * network_security_group_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#network_security_group_rules BatchPool#network_security_group_rules}
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
    network_security_group_rules: cdktf.listMapper(batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToTerraform, true)(struct!.networkSecurityGroupRules),
  }
}


export function batchPoolNetworkConfigurationEndpointConfigurationToHclTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_port: {
      value: cdktf.numberToHclTerraform(struct!.backendPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frontend_port_range: {
      value: cdktf.stringToHclTerraform(struct!.frontendPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_security_group_rules: {
      value: cdktf.listMapperHcl(batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToHclTerraform, true)(struct!.networkSecurityGroupRules),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#accelerated_networking_enabled BatchPool#accelerated_networking_enabled}
  */
  readonly acceleratedNetworkingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#dynamic_vnet_assignment_scope BatchPool#dynamic_vnet_assignment_scope}
  */
  readonly dynamicVnetAssignmentScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#public_address_provisioning_type BatchPool#public_address_provisioning_type}
  */
  readonly publicAddressProvisioningType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#public_ips BatchPool#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#subnet_id BatchPool#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * endpoint_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#endpoint_configuration BatchPool#endpoint_configuration}
  */
  readonly endpointConfiguration?: BatchPoolNetworkConfigurationEndpointConfiguration[] | cdktf.IResolvable;
}

export function batchPoolNetworkConfigurationToTerraform(struct?: BatchPoolNetworkConfigurationOutputReference | BatchPoolNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerated_networking_enabled: cdktf.booleanToTerraform(struct!.acceleratedNetworkingEnabled),
    dynamic_vnet_assignment_scope: cdktf.stringToTerraform(struct!.dynamicVnetAssignmentScope),
    public_address_provisioning_type: cdktf.stringToTerraform(struct!.publicAddressProvisioningType),
    public_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.publicIps),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    endpoint_configuration: cdktf.listMapper(batchPoolNetworkConfigurationEndpointConfigurationToTerraform, true)(struct!.endpointConfiguration),
  }
}


export function batchPoolNetworkConfigurationToHclTerraform(struct?: BatchPoolNetworkConfigurationOutputReference | BatchPoolNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerated_networking_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.acceleratedNetworkingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dynamic_vnet_assignment_scope: {
      value: cdktf.stringToHclTerraform(struct!.dynamicVnetAssignmentScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_address_provisioning_type: {
      value: cdktf.stringToHclTerraform(struct!.publicAddressProvisioningType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.publicIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_configuration: {
      value: cdktf.listMapperHcl(batchPoolNetworkConfigurationEndpointConfigurationToHclTerraform, true)(struct!.endpointConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolNetworkConfigurationEndpointConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._acceleratedNetworkingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedNetworkingEnabled = this._acceleratedNetworkingEnabled;
    }
    if (this._dynamicVnetAssignmentScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicVnetAssignmentScope = this._dynamicVnetAssignmentScope;
    }
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
      this._acceleratedNetworkingEnabled = undefined;
      this._dynamicVnetAssignmentScope = undefined;
      this._publicAddressProvisioningType = undefined;
      this._publicIps = undefined;
      this._subnetId = undefined;
      this._endpointConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratedNetworkingEnabled = value.acceleratedNetworkingEnabled;
      this._dynamicVnetAssignmentScope = value.dynamicVnetAssignmentScope;
      this._publicAddressProvisioningType = value.publicAddressProvisioningType;
      this._publicIps = value.publicIps;
      this._subnetId = value.subnetId;
      this._endpointConfiguration.internalValue = value.endpointConfiguration;
    }
  }

  // accelerated_networking_enabled - computed: false, optional: true, required: false
  private _acceleratedNetworkingEnabled?: boolean | cdktf.IResolvable; 
  public get acceleratedNetworkingEnabled() {
    return this.getBooleanAttribute('accelerated_networking_enabled');
  }
  public set acceleratedNetworkingEnabled(value: boolean | cdktf.IResolvable) {
    this._acceleratedNetworkingEnabled = value;
  }
  public resetAcceleratedNetworkingEnabled() {
    this._acceleratedNetworkingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingEnabledInput() {
    return this._acceleratedNetworkingEnabled;
  }

  // dynamic_vnet_assignment_scope - computed: false, optional: true, required: false
  private _dynamicVnetAssignmentScope?: string; 
  public get dynamicVnetAssignmentScope() {
    return this.getStringAttribute('dynamic_vnet_assignment_scope');
  }
  public set dynamicVnetAssignmentScope(value: string) {
    this._dynamicVnetAssignmentScope = value;
  }
  public resetDynamicVnetAssignmentScope() {
    this._dynamicVnetAssignmentScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicVnetAssignmentScopeInput() {
    return this._dynamicVnetAssignmentScope;
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

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
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
export interface BatchPoolNodePlacement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#policy BatchPool#policy}
  */
  readonly policy?: string;
}

export function batchPoolNodePlacementToTerraform(struct?: BatchPoolNodePlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function batchPoolNodePlacementToHclTerraform(struct?: BatchPoolNodePlacement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolNodePlacementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolNodePlacement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolNodePlacement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}

export class BatchPoolNodePlacementList extends cdktf.ComplexList {
  public internalValue? : BatchPoolNodePlacement[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolNodePlacementOutputReference {
    return new BatchPoolNodePlacementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolStartTaskContainerRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#password BatchPool#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#registry_server BatchPool#registry_server}
  */
  readonly registryServer: string;
  /**
  * The User Assigned Identity to use for Container Registry access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#user_name BatchPool#user_name}
  */
  readonly userName?: string;
}

export function batchPoolStartTaskContainerRegistryToTerraform(struct?: BatchPoolStartTaskContainerRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry_server: cdktf.stringToTerraform(struct!.registryServer),
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function batchPoolStartTaskContainerRegistryToHclTerraform(struct?: BatchPoolStartTaskContainerRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry_server: {
      value: cdktf.stringToHclTerraform(struct!.registryServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identity_id: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolStartTaskContainerRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolStartTaskContainerRegistry | cdktf.IResolvable | undefined {
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
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolStartTaskContainerRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._registryServer = undefined;
      this._userAssignedIdentityId = undefined;
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
      this._userAssignedIdentityId = value.userAssignedIdentityId;
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

  // registry_server - computed: false, optional: false, required: true
  private _registryServer?: string; 
  public get registryServer() {
    return this.getStringAttribute('registry_server');
  }
  public set registryServer(value: string) {
    this._registryServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryServerInput() {
    return this._registryServer;
  }

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
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

export class BatchPoolStartTaskContainerRegistryList extends cdktf.ComplexList {
  public internalValue? : BatchPoolStartTaskContainerRegistry[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolStartTaskContainerRegistryOutputReference {
    return new BatchPoolStartTaskContainerRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolStartTaskContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#image_name BatchPool#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#run_options BatchPool#run_options}
  */
  readonly runOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#working_directory BatchPool#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#registry BatchPool#registry}
  */
  readonly registry?: BatchPoolStartTaskContainerRegistry[] | cdktf.IResolvable;
}

export function batchPoolStartTaskContainerToTerraform(struct?: BatchPoolStartTaskContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_name: cdktf.stringToTerraform(struct!.imageName),
    run_options: cdktf.stringToTerraform(struct!.runOptions),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
    registry: cdktf.listMapper(batchPoolStartTaskContainerRegistryToTerraform, true)(struct!.registry),
  }
}


export function batchPoolStartTaskContainerToHclTerraform(struct?: BatchPoolStartTaskContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_options: {
      value: cdktf.stringToHclTerraform(struct!.runOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_directory: {
      value: cdktf.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.listMapperHcl(batchPoolStartTaskContainerRegistryToHclTerraform, true)(struct!.registry),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolStartTaskContainerRegistryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolStartTaskContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolStartTaskContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._runOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOptions = this._runOptions;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    if (this._registry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolStartTaskContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageName = undefined;
      this._runOptions = undefined;
      this._workingDirectory = undefined;
      this._registry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageName = value.imageName;
      this._runOptions = value.runOptions;
      this._workingDirectory = value.workingDirectory;
      this._registry.internalValue = value.registry;
    }
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // run_options - computed: false, optional: true, required: false
  private _runOptions?: string; 
  public get runOptions() {
    return this.getStringAttribute('run_options');
  }
  public set runOptions(value: string) {
    this._runOptions = value;
  }
  public resetRunOptions() {
    this._runOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOptionsInput() {
    return this._runOptions;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // registry - computed: false, optional: true, required: false
  private _registry = new BatchPoolStartTaskContainerRegistryList(this, "registry", false);
  public get registry() {
    return this._registry;
  }
  public putRegistry(value: BatchPoolStartTaskContainerRegistry[] | cdktf.IResolvable) {
    this._registry.internalValue = value;
  }
  public resetRegistry() {
    this._registry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry.internalValue;
  }
}

export class BatchPoolStartTaskContainerList extends cdktf.ComplexList {
  public internalValue? : BatchPoolStartTaskContainer[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolStartTaskContainerOutputReference {
    return new BatchPoolStartTaskContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolStartTaskResourceFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#auto_storage_container_name BatchPool#auto_storage_container_name}
  */
  readonly autoStorageContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#blob_prefix BatchPool#blob_prefix}
  */
  readonly blobPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#file_mode BatchPool#file_mode}
  */
  readonly fileMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#file_path BatchPool#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#http_url BatchPool#http_url}
  */
  readonly httpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#storage_container_url BatchPool#storage_container_url}
  */
  readonly storageContainerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#user_assigned_identity_id BatchPool#user_assigned_identity_id}
  */
  readonly userAssignedIdentityId?: string;
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
    user_assigned_identity_id: cdktf.stringToTerraform(struct!.userAssignedIdentityId),
  }
}


export function batchPoolStartTaskResourceFileToHclTerraform(struct?: BatchPoolStartTaskResourceFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_storage_container_name: {
      value: cdktf.stringToHclTerraform(struct!.autoStorageContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blob_prefix: {
      value: cdktf.stringToHclTerraform(struct!.blobPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_mode: {
      value: cdktf.stringToHclTerraform(struct!.fileMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_url: {
      value: cdktf.stringToHclTerraform(struct!.httpUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_container_url: {
      value: cdktf.stringToHclTerraform(struct!.storageContainerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_assigned_identity_id: {
      value: cdktf.stringToHclTerraform(struct!.userAssignedIdentityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._userAssignedIdentityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssignedIdentityId = this._userAssignedIdentityId;
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
      this._userAssignedIdentityId = undefined;
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
      this._userAssignedIdentityId = value.userAssignedIdentityId;
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

  // user_assigned_identity_id - computed: false, optional: true, required: false
  private _userAssignedIdentityId?: string; 
  public get userAssignedIdentityId() {
    return this.getStringAttribute('user_assigned_identity_id');
  }
  public set userAssignedIdentityId(value: string) {
    this._userAssignedIdentityId = value;
  }
  public resetUserAssignedIdentityId() {
    this._userAssignedIdentityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedIdentityIdInput() {
    return this._userAssignedIdentityId;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}
  */
  readonly elevationLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#scope BatchPool#scope}
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


export function batchPoolStartTaskUserIdentityAutoUserToHclTerraform(struct?: BatchPoolStartTaskUserIdentityAutoUserOutputReference | BatchPoolStartTaskUserIdentityAutoUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elevation_level: {
      value: cdktf.stringToHclTerraform(struct!.elevationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#user_name BatchPool#user_name}
  */
  readonly userName?: string;
  /**
  * auto_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#auto_user BatchPool#auto_user}
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


export function batchPoolStartTaskUserIdentityToHclTerraform(struct?: BatchPoolStartTaskUserIdentityOutputReference | BatchPoolStartTaskUserIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_user: {
      value: batchPoolStartTaskUserIdentityAutoUserToHclTerraform(struct!.autoUser),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolStartTaskUserIdentityAutoUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#command_line BatchPool#command_line}
  */
  readonly commandLine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#common_environment_properties BatchPool#common_environment_properties}
  */
  readonly commonEnvironmentProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#task_retry_maximum BatchPool#task_retry_maximum}
  */
  readonly taskRetryMaximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#wait_for_success BatchPool#wait_for_success}
  */
  readonly waitForSuccess?: boolean | cdktf.IResolvable;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#container BatchPool#container}
  */
  readonly container?: BatchPoolStartTaskContainer[] | cdktf.IResolvable;
  /**
  * resource_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#resource_file BatchPool#resource_file}
  */
  readonly resourceFile?: BatchPoolStartTaskResourceFile[] | cdktf.IResolvable;
  /**
  * user_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#user_identity BatchPool#user_identity}
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
    container: cdktf.listMapper(batchPoolStartTaskContainerToTerraform, true)(struct!.container),
    resource_file: cdktf.listMapper(batchPoolStartTaskResourceFileToTerraform, true)(struct!.resourceFile),
    user_identity: batchPoolStartTaskUserIdentityToTerraform(struct!.userIdentity),
  }
}


export function batchPoolStartTaskToHclTerraform(struct?: BatchPoolStartTaskOutputReference | BatchPoolStartTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_line: {
      value: cdktf.stringToHclTerraform(struct!.commandLine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_environment_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonEnvironmentProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    task_retry_maximum: {
      value: cdktf.numberToHclTerraform(struct!.taskRetryMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for_success: {
      value: cdktf.booleanToHclTerraform(struct!.waitForSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container: {
      value: cdktf.listMapperHcl(batchPoolStartTaskContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolStartTaskContainerList",
    },
    resource_file: {
      value: cdktf.listMapperHcl(batchPoolStartTaskResourceFileToHclTerraform, true)(struct!.resourceFile),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolStartTaskResourceFileList",
    },
    user_identity: {
      value: batchPoolStartTaskUserIdentityToHclTerraform(struct!.userIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolStartTaskUserIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
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
      this._container.internalValue = undefined;
      this._resourceFile.internalValue = undefined;
      this._userIdentity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commandLine = value.commandLine;
      this._commonEnvironmentProperties = value.commonEnvironmentProperties;
      this._taskRetryMaximum = value.taskRetryMaximum;
      this._waitForSuccess = value.waitForSuccess;
      this._container.internalValue = value.container;
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

  // container - computed: false, optional: true, required: false
  private _container = new BatchPoolStartTaskContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: BatchPoolStartTaskContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#id BatchPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#offer BatchPool#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#publisher BatchPool#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#sku BatchPool#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#version BatchPool#version}
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


export function batchPoolStorageImageReferenceToHclTerraform(struct?: BatchPoolStorageImageReferenceOutputReference | BatchPoolStorageImageReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface BatchPoolTaskSchedulingPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#node_fill_type BatchPool#node_fill_type}
  */
  readonly nodeFillType?: string;
}

export function batchPoolTaskSchedulingPolicyToTerraform(struct?: BatchPoolTaskSchedulingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_fill_type: cdktf.stringToTerraform(struct!.nodeFillType),
  }
}


export function batchPoolTaskSchedulingPolicyToHclTerraform(struct?: BatchPoolTaskSchedulingPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_fill_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeFillType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolTaskSchedulingPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolTaskSchedulingPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeFillType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeFillType = this._nodeFillType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolTaskSchedulingPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeFillType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeFillType = value.nodeFillType;
    }
  }

  // node_fill_type - computed: true, optional: true, required: false
  private _nodeFillType?: string; 
  public get nodeFillType() {
    return this.getStringAttribute('node_fill_type');
  }
  public set nodeFillType(value: string) {
    this._nodeFillType = value;
  }
  public resetNodeFillType() {
    this._nodeFillType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFillTypeInput() {
    return this._nodeFillType;
  }
}

export class BatchPoolTaskSchedulingPolicyList extends cdktf.ComplexList {
  public internalValue? : BatchPoolTaskSchedulingPolicy[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolTaskSchedulingPolicyOutputReference {
    return new BatchPoolTaskSchedulingPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#create BatchPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#delete BatchPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#read BatchPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#update BatchPool#update}
  */
  readonly update?: string;
}

export function batchPoolTimeoutsToTerraform(struct?: BatchPoolTimeouts | cdktf.IResolvable): any {
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


export function batchPoolTimeoutsToHclTerraform(struct?: BatchPoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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
export interface BatchPoolUserAccountsLinuxUserConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#gid BatchPool#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#ssh_private_key BatchPool#ssh_private_key}
  */
  readonly sshPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#uid BatchPool#uid}
  */
  readonly uid?: number;
}

export function batchPoolUserAccountsLinuxUserConfigurationToTerraform(struct?: BatchPoolUserAccountsLinuxUserConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    ssh_private_key: cdktf.stringToTerraform(struct!.sshPrivateKey),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function batchPoolUserAccountsLinuxUserConfigurationToHclTerraform(struct?: BatchPoolUserAccountsLinuxUserConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_private_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolUserAccountsLinuxUserConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolUserAccountsLinuxUserConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._sshPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKey = this._sshPrivateKey;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolUserAccountsLinuxUserConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._sshPrivateKey = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._sshPrivateKey = value.sshPrivateKey;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // ssh_private_key - computed: false, optional: true, required: false
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  public resetSshPrivateKey() {
    this._sshPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class BatchPoolUserAccountsLinuxUserConfigurationList extends cdktf.ComplexList {
  public internalValue? : BatchPoolUserAccountsLinuxUserConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolUserAccountsLinuxUserConfigurationOutputReference {
    return new BatchPoolUserAccountsLinuxUserConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolUserAccountsWindowsUserConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#login_mode BatchPool#login_mode}
  */
  readonly loginMode: string;
}

export function batchPoolUserAccountsWindowsUserConfigurationToTerraform(struct?: BatchPoolUserAccountsWindowsUserConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_mode: cdktf.stringToTerraform(struct!.loginMode),
  }
}


export function batchPoolUserAccountsWindowsUserConfigurationToHclTerraform(struct?: BatchPoolUserAccountsWindowsUserConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_mode: {
      value: cdktf.stringToHclTerraform(struct!.loginMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolUserAccountsWindowsUserConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolUserAccountsWindowsUserConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMode = this._loginMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolUserAccountsWindowsUserConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loginMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loginMode = value.loginMode;
    }
  }

  // login_mode - computed: false, optional: false, required: true
  private _loginMode?: string; 
  public get loginMode() {
    return this.getStringAttribute('login_mode');
  }
  public set loginMode(value: string) {
    this._loginMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginModeInput() {
    return this._loginMode;
  }
}

export class BatchPoolUserAccountsWindowsUserConfigurationList extends cdktf.ComplexList {
  public internalValue? : BatchPoolUserAccountsWindowsUserConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolUserAccountsWindowsUserConfigurationOutputReference {
    return new BatchPoolUserAccountsWindowsUserConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolUserAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#elevation_level BatchPool#elevation_level}
  */
  readonly elevationLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#name BatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#password BatchPool#password}
  */
  readonly password: string;
  /**
  * linux_user_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#linux_user_configuration BatchPool#linux_user_configuration}
  */
  readonly linuxUserConfiguration?: BatchPoolUserAccountsLinuxUserConfiguration[] | cdktf.IResolvable;
  /**
  * windows_user_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#windows_user_configuration BatchPool#windows_user_configuration}
  */
  readonly windowsUserConfiguration?: BatchPoolUserAccountsWindowsUserConfiguration[] | cdktf.IResolvable;
}

export function batchPoolUserAccountsToTerraform(struct?: BatchPoolUserAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elevation_level: cdktf.stringToTerraform(struct!.elevationLevel),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    linux_user_configuration: cdktf.listMapper(batchPoolUserAccountsLinuxUserConfigurationToTerraform, true)(struct!.linuxUserConfiguration),
    windows_user_configuration: cdktf.listMapper(batchPoolUserAccountsWindowsUserConfigurationToTerraform, true)(struct!.windowsUserConfiguration),
  }
}


export function batchPoolUserAccountsToHclTerraform(struct?: BatchPoolUserAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elevation_level: {
      value: cdktf.stringToHclTerraform(struct!.elevationLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linux_user_configuration: {
      value: cdktf.listMapperHcl(batchPoolUserAccountsLinuxUserConfigurationToHclTerraform, true)(struct!.linuxUserConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolUserAccountsLinuxUserConfigurationList",
    },
    windows_user_configuration: {
      value: cdktf.listMapperHcl(batchPoolUserAccountsWindowsUserConfigurationToHclTerraform, true)(struct!.windowsUserConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BatchPoolUserAccountsWindowsUserConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolUserAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolUserAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elevationLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.elevationLevel = this._elevationLevel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._linuxUserConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxUserConfiguration = this._linuxUserConfiguration?.internalValue;
    }
    if (this._windowsUserConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsUserConfiguration = this._windowsUserConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolUserAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elevationLevel = undefined;
      this._name = undefined;
      this._password = undefined;
      this._linuxUserConfiguration.internalValue = undefined;
      this._windowsUserConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elevationLevel = value.elevationLevel;
      this._name = value.name;
      this._password = value.password;
      this._linuxUserConfiguration.internalValue = value.linuxUserConfiguration;
      this._windowsUserConfiguration.internalValue = value.windowsUserConfiguration;
    }
  }

  // elevation_level - computed: false, optional: false, required: true
  private _elevationLevel?: string; 
  public get elevationLevel() {
    return this.getStringAttribute('elevation_level');
  }
  public set elevationLevel(value: string) {
    this._elevationLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elevationLevelInput() {
    return this._elevationLevel;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // linux_user_configuration - computed: false, optional: true, required: false
  private _linuxUserConfiguration = new BatchPoolUserAccountsLinuxUserConfigurationList(this, "linux_user_configuration", false);
  public get linuxUserConfiguration() {
    return this._linuxUserConfiguration;
  }
  public putLinuxUserConfiguration(value: BatchPoolUserAccountsLinuxUserConfiguration[] | cdktf.IResolvable) {
    this._linuxUserConfiguration.internalValue = value;
  }
  public resetLinuxUserConfiguration() {
    this._linuxUserConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxUserConfigurationInput() {
    return this._linuxUserConfiguration.internalValue;
  }

  // windows_user_configuration - computed: false, optional: true, required: false
  private _windowsUserConfiguration = new BatchPoolUserAccountsWindowsUserConfigurationList(this, "windows_user_configuration", false);
  public get windowsUserConfiguration() {
    return this._windowsUserConfiguration;
  }
  public putWindowsUserConfiguration(value: BatchPoolUserAccountsWindowsUserConfiguration[] | cdktf.IResolvable) {
    this._windowsUserConfiguration.internalValue = value;
  }
  public resetWindowsUserConfiguration() {
    this._windowsUserConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsUserConfigurationInput() {
    return this._windowsUserConfiguration.internalValue;
  }
}

export class BatchPoolUserAccountsList extends cdktf.ComplexList {
  public internalValue? : BatchPoolUserAccounts[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolUserAccountsOutputReference {
    return new BatchPoolUserAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchPoolWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#enable_automatic_updates BatchPool#enable_automatic_updates}
  */
  readonly enableAutomaticUpdates?: boolean | cdktf.IResolvable;
}

export function batchPoolWindowsToTerraform(struct?: BatchPoolWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_automatic_updates: cdktf.booleanToTerraform(struct!.enableAutomaticUpdates),
  }
}


export function batchPoolWindowsToHclTerraform(struct?: BatchPoolWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_automatic_updates: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutomaticUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchPoolWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchPoolWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutomaticUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticUpdates = this._enableAutomaticUpdates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchPoolWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAutomaticUpdates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAutomaticUpdates = value.enableAutomaticUpdates;
    }
  }

  // enable_automatic_updates - computed: false, optional: true, required: false
  private _enableAutomaticUpdates?: boolean | cdktf.IResolvable; 
  public get enableAutomaticUpdates() {
    return this.getBooleanAttribute('enable_automatic_updates');
  }
  public set enableAutomaticUpdates(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticUpdates = value;
  }
  public resetEnableAutomaticUpdates() {
    this._enableAutomaticUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticUpdatesInput() {
    return this._enableAutomaticUpdates;
  }
}

export class BatchPoolWindowsList extends cdktf.ComplexList {
  public internalValue? : BatchPoolWindows[] | cdktf.IResolvable

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
  public get(index: number): BatchPoolWindowsOutputReference {
    return new BatchPoolWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool azurerm_batch_pool}
*/
export class BatchPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_batch_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BatchPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BatchPool to import
  * @param importFromId The id of the existing BatchPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BatchPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_batch_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/batch_pool azurerm_batch_pool} Resource
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
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._displayName = config.displayName;
    this._id = config.id;
    this._interNodeCommunication = config.interNodeCommunication;
    this._licenseType = config.licenseType;
    this._maxTasksPerNode = config.maxTasksPerNode;
    this._metadata = config.metadata;
    this._name = config.name;
    this._nodeAgentSkuId = config.nodeAgentSkuId;
    this._osDiskPlacement = config.osDiskPlacement;
    this._resourceGroupName = config.resourceGroupName;
    this._stopPendingResizeOperation = config.stopPendingResizeOperation;
    this._targetNodeCommunicationMode = config.targetNodeCommunicationMode;
    this._vmSize = config.vmSize;
    this._autoScale.internalValue = config.autoScale;
    this._certificate.internalValue = config.certificate;
    this._containerConfiguration.internalValue = config.containerConfiguration;
    this._dataDisks.internalValue = config.dataDisks;
    this._diskEncryption.internalValue = config.diskEncryption;
    this._extensions.internalValue = config.extensions;
    this._fixedScale.internalValue = config.fixedScale;
    this._identity.internalValue = config.identity;
    this._mount.internalValue = config.mount;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._nodePlacement.internalValue = config.nodePlacement;
    this._startTask.internalValue = config.startTask;
    this._storageImageReference.internalValue = config.storageImageReference;
    this._taskSchedulingPolicy.internalValue = config.taskSchedulingPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._userAccounts.internalValue = config.userAccounts;
    this._windows.internalValue = config.windows;
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

  // inter_node_communication - computed: false, optional: true, required: false
  private _interNodeCommunication?: string; 
  public get interNodeCommunication() {
    return this.getStringAttribute('inter_node_communication');
  }
  public set interNodeCommunication(value: string) {
    this._interNodeCommunication = value;
  }
  public resetInterNodeCommunication() {
    this._interNodeCommunication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interNodeCommunicationInput() {
    return this._interNodeCommunication;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
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

  // os_disk_placement - computed: false, optional: true, required: false
  private _osDiskPlacement?: string; 
  public get osDiskPlacement() {
    return this.getStringAttribute('os_disk_placement');
  }
  public set osDiskPlacement(value: string) {
    this._osDiskPlacement = value;
  }
  public resetOsDiskPlacement() {
    this._osDiskPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskPlacementInput() {
    return this._osDiskPlacement;
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

  // target_node_communication_mode - computed: false, optional: true, required: false
  private _targetNodeCommunicationMode?: string; 
  public get targetNodeCommunicationMode() {
    return this.getStringAttribute('target_node_communication_mode');
  }
  public set targetNodeCommunicationMode(value: string) {
    this._targetNodeCommunicationMode = value;
  }
  public resetTargetNodeCommunicationMode() {
    this._targetNodeCommunicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNodeCommunicationModeInput() {
    return this._targetNodeCommunicationMode;
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

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new BatchPoolDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: BatchPoolDataDisks[] | cdktf.IResolvable) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // disk_encryption - computed: false, optional: true, required: false
  private _diskEncryption = new BatchPoolDiskEncryptionList(this, "disk_encryption", false);
  public get diskEncryption() {
    return this._diskEncryption;
  }
  public putDiskEncryption(value: BatchPoolDiskEncryption[] | cdktf.IResolvable) {
    this._diskEncryption.internalValue = value;
  }
  public resetDiskEncryption() {
    this._diskEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionInput() {
    return this._diskEncryption.internalValue;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions = new BatchPoolExtensionsList(this, "extensions", false);
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: BatchPoolExtensions[] | cdktf.IResolvable) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
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

  // mount - computed: false, optional: true, required: false
  private _mount = new BatchPoolMountList(this, "mount", false);
  public get mount() {
    return this._mount;
  }
  public putMount(value: BatchPoolMount[] | cdktf.IResolvable) {
    this._mount.internalValue = value;
  }
  public resetMount() {
    this._mount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount.internalValue;
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

  // node_placement - computed: false, optional: true, required: false
  private _nodePlacement = new BatchPoolNodePlacementList(this, "node_placement", false);
  public get nodePlacement() {
    return this._nodePlacement;
  }
  public putNodePlacement(value: BatchPoolNodePlacement[] | cdktf.IResolvable) {
    this._nodePlacement.internalValue = value;
  }
  public resetNodePlacement() {
    this._nodePlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePlacementInput() {
    return this._nodePlacement.internalValue;
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

  // task_scheduling_policy - computed: false, optional: true, required: false
  private _taskSchedulingPolicy = new BatchPoolTaskSchedulingPolicyList(this, "task_scheduling_policy", false);
  public get taskSchedulingPolicy() {
    return this._taskSchedulingPolicy;
  }
  public putTaskSchedulingPolicy(value: BatchPoolTaskSchedulingPolicy[] | cdktf.IResolvable) {
    this._taskSchedulingPolicy.internalValue = value;
  }
  public resetTaskSchedulingPolicy() {
    this._taskSchedulingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskSchedulingPolicyInput() {
    return this._taskSchedulingPolicy.internalValue;
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

  // user_accounts - computed: false, optional: true, required: false
  private _userAccounts = new BatchPoolUserAccountsList(this, "user_accounts", false);
  public get userAccounts() {
    return this._userAccounts;
  }
  public putUserAccounts(value: BatchPoolUserAccounts[] | cdktf.IResolvable) {
    this._userAccounts.internalValue = value;
  }
  public resetUserAccounts() {
    this._userAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccountsInput() {
    return this._userAccounts.internalValue;
  }

  // windows - computed: false, optional: true, required: false
  private _windows = new BatchPoolWindowsList(this, "windows", false);
  public get windows() {
    return this._windows;
  }
  public putWindows(value: BatchPoolWindows[] | cdktf.IResolvable) {
    this._windows.internalValue = value;
  }
  public resetWindows() {
    this._windows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      inter_node_communication: cdktf.stringToTerraform(this._interNodeCommunication),
      license_type: cdktf.stringToTerraform(this._licenseType),
      max_tasks_per_node: cdktf.numberToTerraform(this._maxTasksPerNode),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      node_agent_sku_id: cdktf.stringToTerraform(this._nodeAgentSkuId),
      os_disk_placement: cdktf.stringToTerraform(this._osDiskPlacement),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      stop_pending_resize_operation: cdktf.booleanToTerraform(this._stopPendingResizeOperation),
      target_node_communication_mode: cdktf.stringToTerraform(this._targetNodeCommunicationMode),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      auto_scale: batchPoolAutoScaleToTerraform(this._autoScale.internalValue),
      certificate: cdktf.listMapper(batchPoolCertificateToTerraform, true)(this._certificate.internalValue),
      container_configuration: batchPoolContainerConfigurationToTerraform(this._containerConfiguration.internalValue),
      data_disks: cdktf.listMapper(batchPoolDataDisksToTerraform, true)(this._dataDisks.internalValue),
      disk_encryption: cdktf.listMapper(batchPoolDiskEncryptionToTerraform, true)(this._diskEncryption.internalValue),
      extensions: cdktf.listMapper(batchPoolExtensionsToTerraform, true)(this._extensions.internalValue),
      fixed_scale: batchPoolFixedScaleToTerraform(this._fixedScale.internalValue),
      identity: batchPoolIdentityToTerraform(this._identity.internalValue),
      mount: cdktf.listMapper(batchPoolMountToTerraform, true)(this._mount.internalValue),
      network_configuration: batchPoolNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      node_placement: cdktf.listMapper(batchPoolNodePlacementToTerraform, true)(this._nodePlacement.internalValue),
      start_task: batchPoolStartTaskToTerraform(this._startTask.internalValue),
      storage_image_reference: batchPoolStorageImageReferenceToTerraform(this._storageImageReference.internalValue),
      task_scheduling_policy: cdktf.listMapper(batchPoolTaskSchedulingPolicyToTerraform, true)(this._taskSchedulingPolicy.internalValue),
      timeouts: batchPoolTimeoutsToTerraform(this._timeouts.internalValue),
      user_accounts: cdktf.listMapper(batchPoolUserAccountsToTerraform, true)(this._userAccounts.internalValue),
      windows: cdktf.listMapper(batchPoolWindowsToTerraform, true)(this._windows.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inter_node_communication: {
        value: cdktf.stringToHclTerraform(this._interNodeCommunication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_tasks_per_node: {
        value: cdktf.numberToHclTerraform(this._maxTasksPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_agent_sku_id: {
        value: cdktf.stringToHclTerraform(this._nodeAgentSkuId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_disk_placement: {
        value: cdktf.stringToHclTerraform(this._osDiskPlacement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_pending_resize_operation: {
        value: cdktf.booleanToHclTerraform(this._stopPendingResizeOperation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_node_communication_mode: {
        value: cdktf.stringToHclTerraform(this._targetNodeCommunicationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_size: {
        value: cdktf.stringToHclTerraform(this._vmSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_scale: {
        value: batchPoolAutoScaleToHclTerraform(this._autoScale.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolAutoScaleList",
      },
      certificate: {
        value: cdktf.listMapperHcl(batchPoolCertificateToHclTerraform, true)(this._certificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolCertificateList",
      },
      container_configuration: {
        value: batchPoolContainerConfigurationToHclTerraform(this._containerConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolContainerConfigurationList",
      },
      data_disks: {
        value: cdktf.listMapperHcl(batchPoolDataDisksToHclTerraform, true)(this._dataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolDataDisksList",
      },
      disk_encryption: {
        value: cdktf.listMapperHcl(batchPoolDiskEncryptionToHclTerraform, true)(this._diskEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolDiskEncryptionList",
      },
      extensions: {
        value: cdktf.listMapperHcl(batchPoolExtensionsToHclTerraform, true)(this._extensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolExtensionsList",
      },
      fixed_scale: {
        value: batchPoolFixedScaleToHclTerraform(this._fixedScale.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolFixedScaleList",
      },
      identity: {
        value: batchPoolIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolIdentityList",
      },
      mount: {
        value: cdktf.listMapperHcl(batchPoolMountToHclTerraform, true)(this._mount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolMountList",
      },
      network_configuration: {
        value: batchPoolNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolNetworkConfigurationList",
      },
      node_placement: {
        value: cdktf.listMapperHcl(batchPoolNodePlacementToHclTerraform, true)(this._nodePlacement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolNodePlacementList",
      },
      start_task: {
        value: batchPoolStartTaskToHclTerraform(this._startTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolStartTaskList",
      },
      storage_image_reference: {
        value: batchPoolStorageImageReferenceToHclTerraform(this._storageImageReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolStorageImageReferenceList",
      },
      task_scheduling_policy: {
        value: cdktf.listMapperHcl(batchPoolTaskSchedulingPolicyToHclTerraform, true)(this._taskSchedulingPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolTaskSchedulingPolicyList",
      },
      timeouts: {
        value: batchPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchPoolTimeouts",
      },
      user_accounts: {
        value: cdktf.listMapperHcl(batchPoolUserAccountsToHclTerraform, true)(this._userAccounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolUserAccountsList",
      },
      windows: {
        value: cdktf.listMapperHcl(batchPoolWindowsToHclTerraform, true)(this._windows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchPoolWindowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
