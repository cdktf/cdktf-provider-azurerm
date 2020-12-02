// https://www.terraform.io/docs/providers/azurerm/r/virtual_hub_security_partner_provider.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface VirtualHubSecurityPartnerProviderConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly securityProviderName: string;
  readonly tags?: { [key: string]: string };
  readonly virtualHubId?: string;
  /** timeouts block */
  readonly timeouts?: VirtualHubSecurityPartnerProviderTimeouts;
}
export interface VirtualHubSecurityPartnerProviderTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class VirtualHubSecurityPartnerProvider extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VirtualHubSecurityPartnerProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_hub_security_partner_provider',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._securityProviderName = config.securityProviderName;
    this._tags = config.tags;
    this._virtualHubId = config.virtualHubId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // security_provider_name - computed: false, optional: false, required: true
  private _securityProviderName: string;
  public get securityProviderName() {
    return this.getStringAttribute('security_provider_name');
  }
  public set securityProviderName(value: string) {
    this._securityProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProviderNameInput() {
    return this._securityProviderName
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

  // virtual_hub_id - computed: false, optional: true, required: false
  private _virtualHubId?: string;
  public get virtualHubId() {
    return this.getStringAttribute('virtual_hub_id');
  }
  public set virtualHubId(value: string ) {
    this._virtualHubId = value;
  }
  public resetVirtualHubId() {
    this._virtualHubId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHubIdInput() {
    return this._virtualHubId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualHubSecurityPartnerProviderTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VirtualHubSecurityPartnerProviderTimeouts ) {
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
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      security_provider_name: this._securityProviderName,
      tags: this._tags,
      virtual_hub_id: this._virtualHubId,
      timeouts: this._timeouts,
    };
  }
}
