// https://www.terraform.io/docs/providers/azurerm/r/bastion_host.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BastionHostConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  /** ip_configuration block */
  readonly ipConfiguration?: BastionHostIpConfiguration[];
  /** timeouts block */
  readonly timeouts?: BastionHostTimeouts;
}
export interface BastionHostIpConfiguration {
  readonly name: string;
  readonly publicIpAddressId: string;
  readonly subnetId: string;
}

function bastionHostIpConfigurationToTerraform(struct?: BastionHostIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_ip_address_id: cdktf.stringToTerraform(struct!.publicIpAddressId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface BastionHostTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function bastionHostTimeoutsToTerraform(struct?: BastionHostTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BastionHost extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BastionHostConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bastion_host',
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
    this._tags = config.tags;
    this._ipConfiguration = config.ipConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

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

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration?: BastionHostIpConfiguration[];
  public get ipConfiguration() {
    return this.interpolationForAttribute('ip_configuration') as any;
  }
  public set ipConfiguration(value: BastionHostIpConfiguration[] ) {
    this._ipConfiguration = value;
  }
  public resetIpConfiguration() {
    this._ipConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BastionHostTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BastionHostTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      ip_configuration: cdktf.listMapper(bastionHostIpConfigurationToTerraform)(this._ipConfiguration),
      timeouts: bastionHostTimeoutsToTerraform(this._timeouts),
    };
  }
}
