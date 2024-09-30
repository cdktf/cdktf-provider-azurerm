// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningInferenceClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}
  */
  readonly clusterPurpose?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#description MachineLearningInferenceCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#id MachineLearningInferenceCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}
  */
  readonly kubernetesClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#location MachineLearningInferenceCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}
  */
  readonly machineLearningWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#name MachineLearningInferenceCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#tags MachineLearningInferenceCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#identity MachineLearningInferenceCluster#identity}
  */
  readonly identity?: MachineLearningInferenceClusterIdentity;
  /**
  * ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#ssl MachineLearningInferenceCluster#ssl}
  */
  readonly ssl?: MachineLearningInferenceClusterSsl;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#timeouts MachineLearningInferenceCluster#timeouts}
  */
  readonly timeouts?: MachineLearningInferenceClusterTimeouts;
}
export interface MachineLearningInferenceClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#identity_ids MachineLearningInferenceCluster#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#type MachineLearningInferenceCluster#type}
  */
  readonly type: string;
}

export function machineLearningInferenceClusterIdentityToTerraform(struct?: MachineLearningInferenceClusterIdentityOutputReference | MachineLearningInferenceClusterIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function machineLearningInferenceClusterIdentityToHclTerraform(struct?: MachineLearningInferenceClusterIdentityOutputReference | MachineLearningInferenceClusterIdentity): any {
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

export class MachineLearningInferenceClusterIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningInferenceClusterIdentity | undefined {
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

  public set internalValue(value: MachineLearningInferenceClusterIdentity | undefined) {
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

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[]; 
  public get identityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('identity_ids'));
  }
  public set identityIds(value: string[]) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityIdsInput() {
    return this._identityIds;
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
export interface MachineLearningInferenceClusterSsl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#cert MachineLearningInferenceCluster#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#cname MachineLearningInferenceCluster#cname}
  */
  readonly cname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#key MachineLearningInferenceCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#leaf_domain_label MachineLearningInferenceCluster#leaf_domain_label}
  */
  readonly leafDomainLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#overwrite_existing_domain MachineLearningInferenceCluster#overwrite_existing_domain}
  */
  readonly overwriteExistingDomain?: boolean | cdktf.IResolvable;
}

export function machineLearningInferenceClusterSslToTerraform(struct?: MachineLearningInferenceClusterSslOutputReference | MachineLearningInferenceClusterSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    cname: cdktf.stringToTerraform(struct!.cname),
    key: cdktf.stringToTerraform(struct!.key),
    leaf_domain_label: cdktf.stringToTerraform(struct!.leafDomainLabel),
    overwrite_existing_domain: cdktf.booleanToTerraform(struct!.overwriteExistingDomain),
  }
}


export function machineLearningInferenceClusterSslToHclTerraform(struct?: MachineLearningInferenceClusterSslOutputReference | MachineLearningInferenceClusterSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cname: {
      value: cdktf.stringToHclTerraform(struct!.cname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leaf_domain_label: {
      value: cdktf.stringToHclTerraform(struct!.leafDomainLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_existing_domain: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteExistingDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLearningInferenceClusterSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MachineLearningInferenceClusterSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._cname !== undefined) {
      hasAnyValues = true;
      internalValueResult.cname = this._cname;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._leafDomainLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafDomainLabel = this._leafDomainLabel;
    }
    if (this._overwriteExistingDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteExistingDomain = this._overwriteExistingDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningInferenceClusterSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._cname = undefined;
      this._key = undefined;
      this._leafDomainLabel = undefined;
      this._overwriteExistingDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._cname = value.cname;
      this._key = value.key;
      this._leafDomainLabel = value.leafDomainLabel;
      this._overwriteExistingDomain = value.overwriteExistingDomain;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // cname - computed: false, optional: true, required: false
  private _cname?: string; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // leaf_domain_label - computed: false, optional: true, required: false
  private _leafDomainLabel?: string; 
  public get leafDomainLabel() {
    return this.getStringAttribute('leaf_domain_label');
  }
  public set leafDomainLabel(value: string) {
    this._leafDomainLabel = value;
  }
  public resetLeafDomainLabel() {
    this._leafDomainLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafDomainLabelInput() {
    return this._leafDomainLabel;
  }

  // overwrite_existing_domain - computed: false, optional: true, required: false
  private _overwriteExistingDomain?: boolean | cdktf.IResolvable; 
  public get overwriteExistingDomain() {
    return this.getBooleanAttribute('overwrite_existing_domain');
  }
  public set overwriteExistingDomain(value: boolean | cdktf.IResolvable) {
    this._overwriteExistingDomain = value;
  }
  public resetOverwriteExistingDomain() {
    this._overwriteExistingDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingDomainInput() {
    return this._overwriteExistingDomain;
  }
}
export interface MachineLearningInferenceClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#create MachineLearningInferenceCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#delete MachineLearningInferenceCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#read MachineLearningInferenceCluster#read}
  */
  readonly read?: string;
}

export function machineLearningInferenceClusterTimeoutsToTerraform(struct?: MachineLearningInferenceClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function machineLearningInferenceClusterTimeoutsToHclTerraform(struct?: MachineLearningInferenceClusterTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MachineLearningInferenceClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MachineLearningInferenceClusterTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MachineLearningInferenceClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster azurerm_machine_learning_inference_cluster}
*/
export class MachineLearningInferenceCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_machine_learning_inference_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MachineLearningInferenceCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MachineLearningInferenceCluster to import
  * @param importFromId The id of the existing MachineLearningInferenceCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MachineLearningInferenceCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_machine_learning_inference_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/machine_learning_inference_cluster azurerm_machine_learning_inference_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningInferenceClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningInferenceClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_inference_cluster',
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
    this._clusterPurpose = config.clusterPurpose;
    this._description = config.description;
    this._id = config.id;
    this._kubernetesClusterId = config.kubernetesClusterId;
    this._location = config.location;
    this._machineLearningWorkspaceId = config.machineLearningWorkspaceId;
    this._name = config.name;
    this._tags = config.tags;
    this._identity.internalValue = config.identity;
    this._ssl.internalValue = config.ssl;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_purpose - computed: false, optional: true, required: false
  private _clusterPurpose?: string; 
  public get clusterPurpose() {
    return this.getStringAttribute('cluster_purpose');
  }
  public set clusterPurpose(value: string) {
    this._clusterPurpose = value;
  }
  public resetClusterPurpose() {
    this._clusterPurpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPurposeInput() {
    return this._clusterPurpose;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // kubernetes_cluster_id - computed: false, optional: false, required: true
  private _kubernetesClusterId?: string; 
  public get kubernetesClusterId() {
    return this.getStringAttribute('kubernetes_cluster_id');
  }
  public set kubernetesClusterId(value: string) {
    this._kubernetesClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterIdInput() {
    return this._kubernetesClusterId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // machine_learning_workspace_id - computed: false, optional: false, required: true
  private _machineLearningWorkspaceId?: string; 
  public get machineLearningWorkspaceId() {
    return this.getStringAttribute('machine_learning_workspace_id');
  }
  public set machineLearningWorkspaceId(value: string) {
    this._machineLearningWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningWorkspaceIdInput() {
    return this._machineLearningWorkspaceId;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new MachineLearningInferenceClusterIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: MachineLearningInferenceClusterIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl = new MachineLearningInferenceClusterSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: MachineLearningInferenceClusterSsl) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MachineLearningInferenceClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MachineLearningInferenceClusterTimeouts) {
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
      cluster_purpose: cdktf.stringToTerraform(this._clusterPurpose),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_cluster_id: cdktf.stringToTerraform(this._kubernetesClusterId),
      location: cdktf.stringToTerraform(this._location),
      machine_learning_workspace_id: cdktf.stringToTerraform(this._machineLearningWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      identity: machineLearningInferenceClusterIdentityToTerraform(this._identity.internalValue),
      ssl: machineLearningInferenceClusterSslToTerraform(this._ssl.internalValue),
      timeouts: machineLearningInferenceClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_purpose: {
        value: cdktf.stringToHclTerraform(this._clusterPurpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      kubernetes_cluster_id: {
        value: cdktf.stringToHclTerraform(this._kubernetesClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_learning_workspace_id: {
        value: cdktf.stringToHclTerraform(this._machineLearningWorkspaceId),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      identity: {
        value: machineLearningInferenceClusterIdentityToHclTerraform(this._identity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineLearningInferenceClusterIdentityList",
      },
      ssl: {
        value: machineLearningInferenceClusterSslToHclTerraform(this._ssl.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MachineLearningInferenceClusterSslList",
      },
      timeouts: {
        value: machineLearningInferenceClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MachineLearningInferenceClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
