// https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnEndpointCustomDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#cdn_endpoint_id CdnEndpointCustomDomain#cdn_endpoint_id}
  */
  readonly cdnEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#host_name CdnEndpointCustomDomain#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#name CdnEndpointCustomDomain#name}
  */
  readonly name: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#timeouts CdnEndpointCustomDomain#timeouts}
  */
  readonly timeouts?: CdnEndpointCustomDomainTimeouts;
}
export interface CdnEndpointCustomDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#create CdnEndpointCustomDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#delete CdnEndpointCustomDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html#read CdnEndpointCustomDomain#read}
  */
  readonly read?: string;
}

function cdnEndpointCustomDomainTimeoutsToTerraform(struct?: CdnEndpointCustomDomainTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html azurerm_cdn_endpoint_custom_domain}
*/
export class CdnEndpointCustomDomain extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cdn_endpoint_custom_domain.html azurerm_cdn_endpoint_custom_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnEndpointCustomDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CdnEndpointCustomDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cdn_endpoint_custom_domain',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cdnEndpointId = config.cdnEndpointId;
    this._hostName = config.hostName;
    this._name = config.name;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdn_endpoint_id - computed: false, optional: false, required: true
  private _cdnEndpointId: string;
  public get cdnEndpointId() {
    return this.getStringAttribute('cdn_endpoint_id');
  }
  public set cdnEndpointId(value: string) {
    this._cdnEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnEndpointIdInput() {
    return this._cdnEndpointId
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName: string;
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CdnEndpointCustomDomainTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CdnEndpointCustomDomainTimeouts ) {
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
      cdn_endpoint_id: cdktf.stringToTerraform(this._cdnEndpointId),
      host_name: cdktf.stringToTerraform(this._hostName),
      name: cdktf.stringToTerraform(this._name),
      timeouts: cdnEndpointCustomDomainTimeoutsToTerraform(this._timeouts),
    };
  }
}
