// https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface NetappAccountConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  /** active_directory block */
  readonly activeDirectory?: NetappAccountActiveDirectory[];
  /** timeouts block */
  readonly timeouts?: NetappAccountTimeouts;
}
export interface NetappAccountActiveDirectory {
  readonly dnsServers: string[];
  readonly domain: string;
  readonly organizationalUnit?: string;
  readonly password: string;
  readonly smbServerName: string;
  readonly username: string;
}
export interface NetappAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class NetappAccount extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: NetappAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_netapp_account',
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
    this._activeDirectory = config.activeDirectory;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory?: NetappAccountActiveDirectory[];
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public set activeDirectory(value: NetappAccountActiveDirectory[] | undefined) {
    this._activeDirectory = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetappAccountTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: NetappAccountTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      active_directory: this._activeDirectory,
      timeouts: this._timeouts,
    };
  }
}
