// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArcKubernetesClusterExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#cluster_id ArcKubernetesClusterExtension#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#configuration_protected_settings ArcKubernetesClusterExtension#configuration_protected_settings}
  */
  readonly configurationProtectedSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#configuration_settings ArcKubernetesClusterExtension#configuration_settings}
  */
  readonly configurationSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#extension_type ArcKubernetesClusterExtension#extension_type}
  */
  readonly extensionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#id ArcKubernetesClusterExtension#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#name ArcKubernetesClusterExtension#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#release_namespace ArcKubernetesClusterExtension#release_namespace}
  */
  readonly releaseNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#release_train ArcKubernetesClusterExtension#release_train}
  */
  readonly releaseTrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#target_namespace ArcKubernetesClusterExtension#target_namespace}
  */
  readonly targetNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#version ArcKubernetesClusterExtension#version}
  */
  readonly version?: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#identity ArcKubernetesClusterExtension#identity}
  */
  readonly identity: ArcKubernetesClusterExtensionIdentity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#timeouts ArcKubernetesClusterExtension#timeouts}
  */
  readonly timeouts?: ArcKubernetesClusterExtensionTimeouts;
}
export interface ArcKubernetesClusterExtensionIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#type ArcKubernetesClusterExtension#type}
  */
  readonly type: string;
}

export function arcKubernetesClusterExtensionIdentityToTerraform(struct?: ArcKubernetesClusterExtensionIdentityOutputReference | ArcKubernetesClusterExtensionIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function arcKubernetesClusterExtensionIdentityToHclTerraform(struct?: ArcKubernetesClusterExtensionIdentityOutputReference | ArcKubernetesClusterExtensionIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ArcKubernetesClusterExtensionIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArcKubernetesClusterExtensionIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArcKubernetesClusterExtensionIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
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
export interface ArcKubernetesClusterExtensionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#create ArcKubernetesClusterExtension#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#delete ArcKubernetesClusterExtension#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#read ArcKubernetesClusterExtension#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#update ArcKubernetesClusterExtension#update}
  */
  readonly update?: string;
}

export function arcKubernetesClusterExtensionTimeoutsToTerraform(struct?: ArcKubernetesClusterExtensionTimeouts | cdktf.IResolvable): any {
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


export function arcKubernetesClusterExtensionTimeoutsToHclTerraform(struct?: ArcKubernetesClusterExtensionTimeouts | cdktf.IResolvable): any {
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

export class ArcKubernetesClusterExtensionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArcKubernetesClusterExtensionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ArcKubernetesClusterExtensionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension azurerm_arc_kubernetes_cluster_extension}
*/
export class ArcKubernetesClusterExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_arc_kubernetes_cluster_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArcKubernetesClusterExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArcKubernetesClusterExtension to import
  * @param importFromId The id of the existing ArcKubernetesClusterExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArcKubernetesClusterExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_arc_kubernetes_cluster_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/arc_kubernetes_cluster_extension azurerm_arc_kubernetes_cluster_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArcKubernetesClusterExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: ArcKubernetesClusterExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_arc_kubernetes_cluster_extension',
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
    this._identity.internalValue = config.identity;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identity - computed: false, optional: false, required: true
  private _identity = new ArcKubernetesClusterExtensionIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: ArcKubernetesClusterExtensionIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ArcKubernetesClusterExtensionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArcKubernetesClusterExtensionTimeouts) {
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
      identity: arcKubernetesClusterExtensionIdentityToTerraform(this._identity.internalValue),
      timeouts: arcKubernetesClusterExtensionTimeoutsToTerraform(this._timeouts.internalValue),
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
      identity: {
        value: arcKubernetesClusterExtensionIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArcKubernetesClusterExtensionIdentityList",
      },
      timeouts: {
        value: arcKubernetesClusterExtensionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArcKubernetesClusterExtensionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
