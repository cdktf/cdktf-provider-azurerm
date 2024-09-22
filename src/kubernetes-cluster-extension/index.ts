// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#cluster_id KubernetesClusterExtension#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#configuration_protected_settings KubernetesClusterExtension#configuration_protected_settings}
  */
  readonly configurationProtectedSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#configuration_settings KubernetesClusterExtension#configuration_settings}
  */
  readonly configurationSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#extension_type KubernetesClusterExtension#extension_type}
  */
  readonly extensionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#id KubernetesClusterExtension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#release_namespace KubernetesClusterExtension#release_namespace}
  */
  readonly releaseNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#release_train KubernetesClusterExtension#release_train}
  */
  readonly releaseTrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#target_namespace KubernetesClusterExtension#target_namespace}
  */
  readonly targetNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}
  */
  readonly version?: string;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#plan KubernetesClusterExtension#plan}
  */
  readonly plan?: KubernetesClusterExtensionPlan;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#timeouts KubernetesClusterExtension#timeouts}
  */
  readonly timeouts?: KubernetesClusterExtensionTimeouts;
}
export interface KubernetesClusterExtensionAksAssignedIdentity {
}

export function kubernetesClusterExtensionAksAssignedIdentityToTerraform(struct?: KubernetesClusterExtensionAksAssignedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterExtensionAksAssignedIdentityToHclTerraform(struct?: KubernetesClusterExtensionAksAssignedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterExtensionAksAssignedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KubernetesClusterExtensionAksAssignedIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExtensionAksAssignedIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class KubernetesClusterExtensionAksAssignedIdentityList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterExtensionAksAssignedIdentityOutputReference {
    return new KubernetesClusterExtensionAksAssignedIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterExtensionPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#name KubernetesClusterExtension#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#product KubernetesClusterExtension#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#promotion_code KubernetesClusterExtension#promotion_code}
  */
  readonly promotionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#publisher KubernetesClusterExtension#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#version KubernetesClusterExtension#version}
  */
  readonly version?: string;
}

export function kubernetesClusterExtensionPlanToTerraform(struct?: KubernetesClusterExtensionPlanOutputReference | KubernetesClusterExtensionPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    product: cdktf.stringToTerraform(struct!.product),
    promotion_code: cdktf.stringToTerraform(struct!.promotionCode),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function kubernetesClusterExtensionPlanToHclTerraform(struct?: KubernetesClusterExtensionPlanOutputReference | KubernetesClusterExtensionPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promotion_code: {
      value: cdktf.stringToHclTerraform(struct!.promotionCode),
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

export class KubernetesClusterExtensionPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterExtensionPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._promotionCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.promotionCode = this._promotionCode;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterExtensionPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._product = undefined;
      this._promotionCode = undefined;
      this._publisher = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._product = value.product;
      this._promotionCode = value.promotionCode;
      this._publisher = value.publisher;
      this._version = value.version;
    }
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

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // promotion_code - computed: false, optional: true, required: false
  private _promotionCode?: string; 
  public get promotionCode() {
    return this.getStringAttribute('promotion_code');
  }
  public set promotionCode(value: string) {
    this._promotionCode = value;
  }
  public resetPromotionCode() {
    this._promotionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionCodeInput() {
    return this._promotionCode;
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
export interface KubernetesClusterExtensionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#create KubernetesClusterExtension#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#delete KubernetesClusterExtension#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#read KubernetesClusterExtension#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#update KubernetesClusterExtension#update}
  */
  readonly update?: string;
}

export function kubernetesClusterExtensionTimeoutsToTerraform(struct?: KubernetesClusterExtensionTimeouts | cdktf.IResolvable): any {
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


export function kubernetesClusterExtensionTimeoutsToHclTerraform(struct?: KubernetesClusterExtensionTimeouts | cdktf.IResolvable): any {
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

export class KubernetesClusterExtensionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterExtensionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KubernetesClusterExtensionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension azurerm_kubernetes_cluster_extension}
*/
export class KubernetesClusterExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_kubernetes_cluster_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesClusterExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesClusterExtension to import
  * @param importFromId The id of the existing KubernetesClusterExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesClusterExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_kubernetes_cluster_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/kubernetes_cluster_extension azurerm_kubernetes_cluster_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_kubernetes_cluster_extension',
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
    this._clusterId = config.clusterId;
    this._configurationProtectedSettings = config.configurationProtectedSettings;
    this._configurationSettings = config.configurationSettings;
    this._extensionType = config.extensionType;
    this._id = config.id;
    this._name = config.name;
    this._releaseNamespace = config.releaseNamespace;
    this._releaseTrain = config.releaseTrain;
    this._targetNamespace = config.targetNamespace;
    this._version = config.version;
    this._plan.internalValue = config.plan;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aks_assigned_identity - computed: true, optional: false, required: false
  private _aksAssignedIdentity = new KubernetesClusterExtensionAksAssignedIdentityList(this, "aks_assigned_identity", false);
  public get aksAssignedIdentity() {
    return this._aksAssignedIdentity;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // configuration_protected_settings - computed: false, optional: true, required: false
  private _configurationProtectedSettings?: { [key: string]: string }; 
  public get configurationProtectedSettings() {
    return this.getStringMapAttribute('configuration_protected_settings');
  }
  public set configurationProtectedSettings(value: { [key: string]: string }) {
    this._configurationProtectedSettings = value;
  }
  public resetConfigurationProtectedSettings() {
    this._configurationProtectedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationProtectedSettingsInput() {
    return this._configurationProtectedSettings;
  }

  // configuration_settings - computed: false, optional: true, required: false
  private _configurationSettings?: { [key: string]: string }; 
  public get configurationSettings() {
    return this.getStringMapAttribute('configuration_settings');
  }
  public set configurationSettings(value: { [key: string]: string }) {
    this._configurationSettings = value;
  }
  public resetConfigurationSettings() {
    this._configurationSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSettingsInput() {
    return this._configurationSettings;
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // extension_type - computed: false, optional: false, required: true
  private _extensionType?: string; 
  public get extensionType() {
    return this.getStringAttribute('extension_type');
  }
  public set extensionType(value: string) {
    this._extensionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionTypeInput() {
    return this._extensionType;
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

  // release_namespace - computed: true, optional: true, required: false
  private _releaseNamespace?: string; 
  public get releaseNamespace() {
    return this.getStringAttribute('release_namespace');
  }
  public set releaseNamespace(value: string) {
    this._releaseNamespace = value;
  }
  public resetReleaseNamespace() {
    this._releaseNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNamespaceInput() {
    return this._releaseNamespace;
  }

  // release_train - computed: true, optional: true, required: false
  private _releaseTrain?: string; 
  public get releaseTrain() {
    return this.getStringAttribute('release_train');
  }
  public set releaseTrain(value: string) {
    this._releaseTrain = value;
  }
  public resetReleaseTrain() {
    this._releaseTrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseTrainInput() {
    return this._releaseTrain;
  }

  // target_namespace - computed: true, optional: true, required: false
  private _targetNamespace?: string; 
  public get targetNamespace() {
    return this.getStringAttribute('target_namespace');
  }
  public set targetNamespace(value: string) {
    this._targetNamespace = value;
  }
  public resetTargetNamespace() {
    this._targetNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespaceInput() {
    return this._targetNamespace;
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

  // plan - computed: false, optional: true, required: false
  private _plan = new KubernetesClusterExtensionPlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
  public putPlan(value: KubernetesClusterExtensionPlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesClusterExtensionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesClusterExtensionTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      configuration_protected_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._configurationProtectedSettings),
      configuration_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._configurationSettings),
      extension_type: cdktf.stringToTerraform(this._extensionType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      release_namespace: cdktf.stringToTerraform(this._releaseNamespace),
      release_train: cdktf.stringToTerraform(this._releaseTrain),
      target_namespace: cdktf.stringToTerraform(this._targetNamespace),
      version: cdktf.stringToTerraform(this._version),
      plan: kubernetesClusterExtensionPlanToTerraform(this._plan.internalValue),
      timeouts: kubernetesClusterExtensionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_protected_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configurationProtectedSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      configuration_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configurationSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      extension_type: {
        value: cdktf.stringToHclTerraform(this._extensionType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_namespace: {
        value: cdktf.stringToHclTerraform(this._releaseNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_train: {
        value: cdktf.stringToHclTerraform(this._releaseTrain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_namespace: {
        value: cdktf.stringToHclTerraform(this._targetNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: kubernetesClusterExtensionPlanToHclTerraform(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterExtensionPlanList",
      },
      timeouts: {
        value: kubernetesClusterExtensionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesClusterExtensionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
