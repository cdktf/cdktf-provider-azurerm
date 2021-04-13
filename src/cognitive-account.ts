// https://www.terraform.io/docs/providers/azurerm/r/cognitive_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitiveAccountConfig extends cdktf.TerraformMetaArguments {
  readonly customSubdomainName?: string;
  readonly kind: string;
  readonly location: string;
  readonly name: string;
  readonly qnaRuntimeEndpoint?: string;
  readonly resourceGroupName: string;
  readonly skuName: string;
  readonly tags?: { [key: string]: string };
  /** network_acls block */
  readonly networkAcls?: CognitiveAccountNetworkAcls[];
  /** timeouts block */
  readonly timeouts?: CognitiveAccountTimeouts;
}
export interface CognitiveAccountNetworkAcls {
  readonly defaultAction: string;
  readonly ipRules?: string[];
  readonly virtualNetworkSubnetIds?: string[];
}

function cognitiveAccountNetworkAclsToTerraform(struct?: CognitiveAccountNetworkAcls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipRules),
    virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.virtualNetworkSubnetIds),
  }
}

export interface CognitiveAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function cognitiveAccountTimeoutsToTerraform(struct?: CognitiveAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CognitiveAccount extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CognitiveAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cognitive_account',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customSubdomainName = config.customSubdomainName;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._qnaRuntimeEndpoint = config.qnaRuntimeEndpoint;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._networkAcls = config.networkAcls;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_subdomain_name - computed: false, optional: true, required: false
  private _customSubdomainName?: string;
  public get customSubdomainName() {
    return this.getStringAttribute('custom_subdomain_name');
  }
  public set customSubdomainName(value: string ) {
    this._customSubdomainName = value;
  }
  public resetCustomSubdomainName() {
    this._customSubdomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSubdomainNameInput() {
    return this._customSubdomainName
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind: string;
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
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

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
  }

  // qna_runtime_endpoint - computed: false, optional: true, required: false
  private _qnaRuntimeEndpoint?: string;
  public get qnaRuntimeEndpoint() {
    return this.getStringAttribute('qna_runtime_endpoint');
  }
  public set qnaRuntimeEndpoint(value: string ) {
    this._qnaRuntimeEndpoint = value;
  }
  public resetQnaRuntimeEndpoint() {
    this._qnaRuntimeEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qnaRuntimeEndpointInput() {
    return this._qnaRuntimeEndpoint
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // network_acls - computed: false, optional: true, required: false
  private _networkAcls?: CognitiveAccountNetworkAcls[];
  public get networkAcls() {
    return this.interpolationForAttribute('network_acls') as any;
  }
  public set networkAcls(value: CognitiveAccountNetworkAcls[] ) {
    this._networkAcls = value;
  }
  public resetNetworkAcls() {
    this._networkAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAclsInput() {
    return this._networkAcls
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CognitiveAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CognitiveAccountTimeouts ) {
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
      custom_subdomain_name: cdktf.stringToTerraform(this._customSubdomainName),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      qna_runtime_endpoint: cdktf.stringToTerraform(this._qnaRuntimeEndpoint),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku_name: cdktf.stringToTerraform(this._skuName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      network_acls: cdktf.listMapper(cognitiveAccountNetworkAclsToTerraform)(this._networkAcls),
      timeouts: cognitiveAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
