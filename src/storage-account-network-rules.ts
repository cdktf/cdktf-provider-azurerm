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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

function storageAccountNetworkRulesTimeoutsToTerraform(struct?: StorageAccountNetworkRulesTimeoutsOutputReference | StorageAccountNetworkRulesTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class StorageAccountNetworkRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
  private _bypass?: string[] | undefined; 
  public get bypass() {
    return this.getListAttribute('bypass');
  }
  public set bypass(value: string[] | undefined) {
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
  private _defaultAction?: string; 
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
  private _ipRules?: string[] | undefined; 
  public get ipRules() {
    return this.getListAttribute('ip_rules');
  }
  public set ipRules(value: string[] | undefined) {
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
  private _resourceGroupName?: string | undefined; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string | undefined) {
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
  private _storageAccountId?: string | undefined; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string | undefined) {
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
  private _storageAccountName?: string | undefined; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string | undefined) {
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
  private _virtualNetworkSubnetIds?: string[] | undefined; 
  public get virtualNetworkSubnetIds() {
    return this.getListAttribute('virtual_network_subnet_ids');
  }
  public set virtualNetworkSubnetIds(value: string[] | undefined) {
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
  private _privateLinkAccess?: StorageAccountNetworkRulesPrivateLinkAccessA[] | undefined; 
  public get privateLinkAccess() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('private_link_access') as any;
  }
  public set privateLinkAccess(value: StorageAccountNetworkRulesPrivateLinkAccessA[] | undefined) {
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
  private _timeouts?: StorageAccountNetworkRulesTimeouts | undefined; 
  private __timeoutsOutput = new StorageAccountNetworkRulesTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: StorageAccountNetworkRulesTimeouts | undefined) {
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
