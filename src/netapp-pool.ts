// https://www.terraform.io/docs/providers/azurerm/r/netapp_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetappPoolConfig extends TerraformMetaArguments {
  readonly accountName: string;
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly serviceLevel: string;
  readonly sizeInTb: number;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: NetappPoolTimeouts;
}
export interface NetappPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetappPool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetappPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceLevel = config.serviceLevel;
    this._sizeInTb = config.sizeInTb;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
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

  // service_level - computed: false, optional: false, required: true
  private _serviceLevel: string;
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }
  public set serviceLevel(value: string) {
    this._serviceLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLevelInput() {
    return this._serviceLevel
  }

  // size_in_tb - computed: false, optional: false, required: true
  private _sizeInTb: number;
  public get sizeInTb() {
    return this.getNumberAttribute('size_in_tb');
  }
  public set sizeInTb(value: number) {
    this._sizeInTb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInTbInput() {
    return this._sizeInTb
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetappPoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetappPoolTimeouts ) {
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
      account_name: this._accountName,
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      service_level: this._serviceLevel,
      size_in_tb: this._sizeInTb,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
