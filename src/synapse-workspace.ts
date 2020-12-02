// https://www.terraform.io/docs/providers/azurerm/r/synapse_workspace.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface SynapseWorkspaceConfig extends TerraformMetaArguments {
  readonly aadAdmin?: SynapseWorkspaceAadAdmin[];
  readonly location: string;
  readonly managedVirtualNetworkEnabled?: boolean;
  readonly name: string;
  readonly resourceGroupName: string;
  readonly sqlAdministratorLogin: string;
  readonly sqlAdministratorLoginPassword: string;
  readonly storageDataLakeGen2FilesystemId: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: SynapseWorkspaceTimeouts;
}
export interface SynapseWorkspaceAadAdmin {
  readonly login?: string;
  readonly objectId?: string;
  readonly tenantId?: string;
}
export class SynapseWorkspaceIdentity extends ComplexComputedList {

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface SynapseWorkspaceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class SynapseWorkspace extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SynapseWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_synapse_workspace',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._aadAdmin = config.aadAdmin;
    this._location = config.location;
    this._managedVirtualNetworkEnabled = config.managedVirtualNetworkEnabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sqlAdministratorLogin = config.sqlAdministratorLogin;
    this._sqlAdministratorLoginPassword = config.sqlAdministratorLoginPassword;
    this._storageDataLakeGen2FilesystemId = config.storageDataLakeGen2FilesystemId;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aad_admin - computed: true, optional: true, required: false
  private _aadAdmin?: SynapseWorkspaceAadAdmin[]
  public get aadAdmin(): SynapseWorkspaceAadAdmin[] {
    return this.interpolationForAttribute('aad_admin') as any; // Getting the computed value is not yet implemented
  }
  public set aadAdmin(value: SynapseWorkspaceAadAdmin[]) {
    this._aadAdmin = value;
  }
  public resetAadAdmin() {
    this._aadAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadAdminInput() {
    return this._aadAdmin
  }

  // connectivity_endpoints - computed: true, optional: false, required: false
  public connectivityEndpoints(key: string): string {
    return new StringMap(this, 'connectivity_endpoints').lookup(key);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new SynapseWorkspaceIdentity(this, 'identity', index);
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

  // managed_resource_group_name - computed: true, optional: false, required: false
  public get managedResourceGroupName() {
    return this.getStringAttribute('managed_resource_group_name');
  }

  // managed_virtual_network_enabled - computed: false, optional: true, required: false
  private _managedVirtualNetworkEnabled?: boolean;
  public get managedVirtualNetworkEnabled() {
    return this.getBooleanAttribute('managed_virtual_network_enabled');
  }
  public set managedVirtualNetworkEnabled(value: boolean ) {
    this._managedVirtualNetworkEnabled = value;
  }
  public resetManagedVirtualNetworkEnabled() {
    this._managedVirtualNetworkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedVirtualNetworkEnabledInput() {
    return this._managedVirtualNetworkEnabled
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

  // sql_administrator_login - computed: false, optional: false, required: true
  private _sqlAdministratorLogin: string;
  public get sqlAdministratorLogin() {
    return this.getStringAttribute('sql_administrator_login');
  }
  public set sqlAdministratorLogin(value: string) {
    this._sqlAdministratorLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAdministratorLoginInput() {
    return this._sqlAdministratorLogin
  }

  // sql_administrator_login_password - computed: false, optional: false, required: true
  private _sqlAdministratorLoginPassword: string;
  public get sqlAdministratorLoginPassword() {
    return this.getStringAttribute('sql_administrator_login_password');
  }
  public set sqlAdministratorLoginPassword(value: string) {
    this._sqlAdministratorLoginPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlAdministratorLoginPasswordInput() {
    return this._sqlAdministratorLoginPassword
  }

  // storage_data_lake_gen2_filesystem_id - computed: false, optional: false, required: true
  private _storageDataLakeGen2FilesystemId: string;
  public get storageDataLakeGen2FilesystemId() {
    return this.getStringAttribute('storage_data_lake_gen2_filesystem_id');
  }
  public set storageDataLakeGen2FilesystemId(value: string) {
    this._storageDataLakeGen2FilesystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDataLakeGen2FilesystemIdInput() {
    return this._storageDataLakeGen2FilesystemId
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
  private _timeouts?: SynapseWorkspaceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SynapseWorkspaceTimeouts ) {
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
      aad_admin: this._aadAdmin,
      location: this._location,
      managed_virtual_network_enabled: this._managedVirtualNetworkEnabled,
      name: this._name,
      resource_group_name: this._resourceGroupName,
      sql_administrator_login: this._sqlAdministratorLogin,
      sql_administrator_login_password: this._sqlAdministratorLoginPassword,
      storage_data_lake_gen2_filesystem_id: this._storageDataLakeGen2FilesystemId,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
