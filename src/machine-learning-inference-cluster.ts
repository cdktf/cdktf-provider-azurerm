// https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MachineLearningInferenceClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#cluster_purpose MachineLearningInferenceCluster#cluster_purpose}
  */
  readonly clusterPurpose?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#description MachineLearningInferenceCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#kubernetes_cluster_id MachineLearningInferenceCluster#kubernetes_cluster_id}
  */
  readonly kubernetesClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#location MachineLearningInferenceCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#machine_learning_workspace_id MachineLearningInferenceCluster#machine_learning_workspace_id}
  */
  readonly machineLearningWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#name MachineLearningInferenceCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#tags MachineLearningInferenceCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#identity MachineLearningInferenceCluster#identity}
  */
  readonly identity?: MachineLearningInferenceClusterIdentity;
  /**
  * ssl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#ssl MachineLearningInferenceCluster#ssl}
  */
  readonly ssl?: MachineLearningInferenceClusterSsl;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#timeouts MachineLearningInferenceCluster#timeouts}
  */
  readonly timeouts?: MachineLearningInferenceClusterTimeouts;
}
export interface MachineLearningInferenceClusterIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#identity_ids MachineLearningInferenceCluster#identity_ids}
  */
  readonly identityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#type MachineLearningInferenceCluster#type}
  */
  readonly type: string;
}

function machineLearningInferenceClusterIdentityToTerraform(struct?: MachineLearningInferenceClusterIdentityOutputReference | MachineLearningInferenceClusterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class MachineLearningInferenceClusterIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // identity_ids - computed: false, optional: true, required: false
  private _identityIds?: string[] | undefined; 
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }
  public set identityIds(value: string[] | undefined) {
    this._identityIds = value;
  }
  public resetIdentityIds() {
    this._identityIds = undefined;
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
export interface MachineLearningInferenceClusterSsl {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#cert MachineLearningInferenceCluster#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#cname MachineLearningInferenceCluster#cname}
  */
  readonly cname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#key MachineLearningInferenceCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#leaf_domain_label MachineLearningInferenceCluster#leaf_domain_label}
  */
  readonly leafDomainLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#overwrite_existing_domain MachineLearningInferenceCluster#overwrite_existing_domain}
  */
  readonly overwriteExistingDomain?: boolean | cdktf.IResolvable;
}

function machineLearningInferenceClusterSslToTerraform(struct?: MachineLearningInferenceClusterSslOutputReference | MachineLearningInferenceClusterSsl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class MachineLearningInferenceClusterSslOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string | undefined; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string | undefined) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert
  }

  // cname - computed: false, optional: true, required: false
  private _cname?: string | undefined; 
  public get cname() {
    return this.getStringAttribute('cname');
  }
  public set cname(value: string | undefined) {
    this._cname = value;
  }
  public resetCname() {
    this._cname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameInput() {
    return this._cname
  }

  // key - computed: false, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // leaf_domain_label - computed: false, optional: true, required: false
  private _leafDomainLabel?: string | undefined; 
  public get leafDomainLabel() {
    return this.getStringAttribute('leaf_domain_label');
  }
  public set leafDomainLabel(value: string | undefined) {
    this._leafDomainLabel = value;
  }
  public resetLeafDomainLabel() {
    this._leafDomainLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafDomainLabelInput() {
    return this._leafDomainLabel
  }

  // overwrite_existing_domain - computed: false, optional: true, required: false
  private _overwriteExistingDomain?: boolean | cdktf.IResolvable | undefined; 
  public get overwriteExistingDomain() {
    return this.getBooleanAttribute('overwrite_existing_domain') as any;
  }
  public set overwriteExistingDomain(value: boolean | cdktf.IResolvable | undefined) {
    this._overwriteExistingDomain = value;
  }
  public resetOverwriteExistingDomain() {
    this._overwriteExistingDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteExistingDomainInput() {
    return this._overwriteExistingDomain
  }
}
export interface MachineLearningInferenceClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#create MachineLearningInferenceCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#delete MachineLearningInferenceCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#read MachineLearningInferenceCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#update MachineLearningInferenceCluster#update}
  */
  readonly update?: string;
}

function machineLearningInferenceClusterTimeoutsToTerraform(struct?: MachineLearningInferenceClusterTimeoutsOutputReference | MachineLearningInferenceClusterTimeouts): any {
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

export class MachineLearningInferenceClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html azurerm_machine_learning_inference_cluster}
*/
export class MachineLearningInferenceCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_machine_learning_inference_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html azurerm_machine_learning_inference_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MachineLearningInferenceClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MachineLearningInferenceClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_machine_learning_inference_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterPurpose = config.clusterPurpose;
    this._description = config.description;
    this._kubernetesClusterId = config.kubernetesClusterId;
    this._location = config.location;
    this._machineLearningWorkspaceId = config.machineLearningWorkspaceId;
    this._name = config.name;
    this._tags = config.tags;
    this._identity = config.identity;
    this._ssl = config.ssl;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_purpose - computed: false, optional: true, required: false
  private _clusterPurpose?: string | undefined; 
  public get clusterPurpose() {
    return this.getStringAttribute('cluster_purpose');
  }
  public set clusterPurpose(value: string | undefined) {
    this._clusterPurpose = value;
  }
  public resetClusterPurpose() {
    this._clusterPurpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPurposeInput() {
    return this._clusterPurpose
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._kubernetesClusterId
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
    return this._location
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
    return this._machineLearningWorkspaceId
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: MachineLearningInferenceClusterIdentity | undefined; 
  private __identityOutput = new MachineLearningInferenceClusterIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: MachineLearningInferenceClusterIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: MachineLearningInferenceClusterSsl | undefined; 
  private __sslOutput = new MachineLearningInferenceClusterSslOutputReference(this as any, "ssl", true);
  public get ssl() {
    return this.__sslOutput;
  }
  public putSsl(value: MachineLearningInferenceClusterSsl | undefined) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: MachineLearningInferenceClusterTimeouts | undefined; 
  private __timeoutsOutput = new MachineLearningInferenceClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: MachineLearningInferenceClusterTimeouts | undefined) {
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
      cluster_purpose: cdktf.stringToTerraform(this._clusterPurpose),
      description: cdktf.stringToTerraform(this._description),
      kubernetes_cluster_id: cdktf.stringToTerraform(this._kubernetesClusterId),
      location: cdktf.stringToTerraform(this._location),
      machine_learning_workspace_id: cdktf.stringToTerraform(this._machineLearningWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      identity: machineLearningInferenceClusterIdentityToTerraform(this._identity),
      ssl: machineLearningInferenceClusterSslToTerraform(this._ssl),
      timeouts: machineLearningInferenceClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
