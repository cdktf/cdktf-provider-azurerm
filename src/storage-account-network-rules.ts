// https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountNetworkRulesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#bypass StorageAccountNetworkRulesA#bypass}
  */
  readonly bypass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#default_action StorageAccountNetworkRulesA#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#ip_rules StorageAccountNetworkRulesA#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#resource_group_name StorageAccountNetworkRulesA#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#storage_account_id StorageAccountNetworkRulesA#storage_account_id}
  */
  readonly storageAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#storage_account_name StorageAccountNetworkRulesA#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#virtual_network_subnet_ids StorageAccountNetworkRulesA#virtual_network_subnet_ids}
  */
  readonly virtualNetworkSubnetIds?: string[];
  /**
  * private_link_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#private_link_access StorageAccountNetworkRulesA#private_link_access}
  */
  readonly privateLinkAccess?: StorageAccountNetworkRulesPrivateLinkAccessA[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#timeouts StorageAccountNetworkRulesA#timeouts}
  */
  readonly timeouts?: StorageAccountNetworkRulesTimeouts;
}
export interface StorageAccountNetworkRulesPrivateLinkAccessA {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#endpoint_resource_id StorageAccountNetworkRulesA#endpoint_resource_id}
  */
  readonly endpointResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#endpoint_tenant_id StorageAccountNetworkRulesA#endpoint_tenant_id}
  */
  readonly endpointTenantId?: string;
}

function storageAccountNetworkRulesPrivateLinkAccessAToTerraform(struct?: StorageAccountNetworkRulesPrivateLinkAccessA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoint_resource_id: cdktf.stringToTerraform(struct!.endpointResourceId),
    endpoint_tenant_id: cdktf.stringToTerraform(struct!.endpointTenantId),
  }
}

export interface StorageAccountNetworkRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#create StorageAccountNetworkRulesA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#delete StorageAccountNetworkRulesA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#read StorageAccountNetworkRulesA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html#update StorageAccountNetworkRulesA#update}
  */
  readonly update?: string;
}

function storageAccountNetworkRulesTimeoutsToTerraform(struct?: StorageAccountNetworkRulesTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html azurerm_storage_account_network_rules}
*/
export class StorageAccountNetworkRulesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_account_network_rules";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_account_network_rules.html azurerm_storage_account_network_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAccountNetworkRulesAConfig
  */
  public constructor(scope: Construct, id: string, config: StorageAccountNetworkRulesAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_network_rules',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bypass = config.bypass;
    this._defaultAction = config.defaultAction;
    this._ipRules = config.ipRules;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountId = config.storageAccountId;
    this._storageAccountName = config.storageAccountName;
    this._virtualNetworkSubnetIds = config.virtualNetworkSubnetIds;
    this._privateLinkAccess = config.privateLinkAccess;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass - computed: true, optional: true, required: false
  private _bypass?: string[];
  public get bypass() {
    return this.getListAttribute('bypass');
  }
  public set bypass(value: string[]) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass
  }

  // default_action - computed: false, optional: false, required: true
  private _defaultAction: string;
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_rules - computed: true, optional: true, required: false
  private _ipRules?: string[];
  public get ipRules() {
    return this.getListAttribute('ip_rules');
  }
  public set ipRules(value: string[]) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // storage_account_id - computed: true, optional: true, required: false
  private _storageAccountId?: string;
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  public resetStorageAccountId() {
    this._storageAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId
  }

  // storage_account_name - computed: true, optional: true, required: false
  private _storageAccountName?: string;
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // virtual_network_subnet_ids - computed: true, optional: true, required: false
  private _virtualNetworkSubnetIds?: string[];
  public get virtualNetworkSubnetIds() {
    return this.getListAttribute('virtual_network_subnet_ids');
  }
  public set virtualNetworkSubnetIds(value: string[]) {
    this._virtualNetworkSubnetIds = value;
  }
  public resetVirtualNetworkSubnetIds() {
    this._virtualNetworkSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdsInput() {
    return this._virtualNetworkSubnetIds
  }

  // private_link_access - computed: false, optional: true, required: false
  private _privateLinkAccess?: StorageAccountNetworkRulesPrivateLinkAccessA[];
  public get privateLinkAccess() {
    return this.interpolationForAttribute('private_link_access') as any;
  }
  public set privateLinkAccess(value: StorageAccountNetworkRulesPrivateLinkAccessA[] ) {
    this._privateLinkAccess = value;
  }
  public resetPrivateLinkAccess() {
    this._privateLinkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkAccessInput() {
    return this._privateLinkAccess
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageAccountNetworkRulesTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageAccountNetworkRulesTimeouts ) {
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
      bypass: cdktf.listMapper(cdktf.stringToTerraform)(this._bypass),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      ip_rules: cdktf.listMapper(cdktf.stringToTerraform)(this._ipRules),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._virtualNetworkSubnetIds),
      private_link_access: cdktf.listMapper(storageAccountNetworkRulesPrivateLinkAccessAToTerraform)(this._privateLinkAccess),
      timeouts: storageAccountNetworkRulesTimeoutsToTerraform(this._timeouts),
    };
  }
}
