// https://www.terraform.io/docs/providers/azurerm/r/netapp_account.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappAccountConfig extends cdktf.TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
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

function netappAccountActiveDirectoryToTerraform(struct?: NetappAccountActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsServers),
    domain: cdktf.stringToTerraform(struct!.domain),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    password: cdktf.stringToTerraform(struct!.password),
    smb_server_name: cdktf.stringToTerraform(struct!.smbServerName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface NetappAccountTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function netappAccountTimeoutsToTerraform(struct?: NetappAccountTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class NetappAccount extends cdktf.TerraformResource {

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
    this._tags = config.tags;
    this._activeDirectory = config.activeDirectory;
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

  // active_directory - computed: false, optional: true, required: false
  private _activeDirectory?: NetappAccountActiveDirectory[];
  public get activeDirectory() {
    return this.interpolationForAttribute('active_directory') as any;
  }
  public set activeDirectory(value: NetappAccountActiveDirectory[] ) {
    this._activeDirectory = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetappAccountTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetappAccountTimeouts ) {
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
      active_directory: cdktf.listMapper(netappAccountActiveDirectoryToTerraform)(this._activeDirectory),
      timeouts: netappAccountTimeoutsToTerraform(this._timeouts),
    };
  }
}
