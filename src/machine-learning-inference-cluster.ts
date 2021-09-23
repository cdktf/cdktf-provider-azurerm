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
  readonly identity?: MachineLearningInferenceClusterIdentity[];
  /**
  * ssl block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/machine_learning_inference_cluster.html#ssl MachineLearningInferenceCluster#ssl}
  */
  readonly ssl?: MachineLearningInferenceClusterSsl[];
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

function machineLearningInferenceClusterIdentityToTerraform(struct?: MachineLearningInferenceClusterIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identityIds),
    type: cdktf.stringToTerraform(struct!.type),
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

function machineLearningInferenceClusterSslToTerraform(struct?: MachineLearningInferenceClusterSsl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    cname: cdktf.stringToTerraform(struct!.cname),
    key: cdktf.stringToTerraform(struct!.key),
    leaf_domain_label: cdktf.stringToTerraform(struct!.leafDomainLabel),
    overwrite_existing_domain: cdktf.booleanToTerraform(struct!.overwriteExistingDomain),
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

function machineLearningInferenceClusterTimeoutsToTerraform(struct?: MachineLearningInferenceClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
  private _clusterPurpose?: string;
  public get clusterPurpose() {
    return this.getStringAttribute('cluster_purpose');
  }
  public set clusterPurpose(value: string ) {
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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _kubernetesClusterId: string;
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
  private _location: string;
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
  private _machineLearningWorkspaceId: string;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _identity?: MachineLearningInferenceClusterIdentity[];
  public get identity() {
    return this.interpolationForAttribute('identity') as any;
  }
  public set identity(value: MachineLearningInferenceClusterIdentity[] ) {
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
  private _ssl?: MachineLearningInferenceClusterSsl[];
  public get ssl() {
    return this.interpolationForAttribute('ssl') as any;
  }
  public set ssl(value: MachineLearningInferenceClusterSsl[] ) {
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
  private _timeouts?: MachineLearningInferenceClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: MachineLearningInferenceClusterTimeouts ) {
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
      identity: cdktf.listMapper(machineLearningInferenceClusterIdentityToTerraform)(this._identity),
      ssl: cdktf.listMapper(machineLearningInferenceClusterSslToTerraform)(this._ssl),
      timeouts: machineLearningInferenceClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
