// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageAccountNetworkRulesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#bypass StorageAccountNetworkRulesA#bypass}
  */
  readonly bypass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#default_action StorageAccountNetworkRulesA#default_action}
  */
  readonly defaultAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#id StorageAccountNetworkRulesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#ip_rules StorageAccountNetworkRulesA#ip_rules}
  */
  readonly ipRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#storage_account_id StorageAccountNetworkRulesA#storage_account_id}
  */
  readonly storageAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#virtual_network_subnet_ids StorageAccountNetworkRulesA#virtual_network_subnet_ids}
  */
  readonly virtualNetworkSubnetIds?: string[];
  /**
  * private_link_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#private_link_access StorageAccountNetworkRulesA#private_link_access}
  */
  readonly privateLinkAccess?: StorageAccountNetworkRulesPrivateLinkAccessA[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#timeouts StorageAccountNetworkRulesA#timeouts}
  */
  readonly timeouts?: StorageAccountNetworkRulesTimeouts;
}
export interface StorageAccountNetworkRulesPrivateLinkAccessA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#endpoint_resource_id StorageAccountNetworkRulesA#endpoint_resource_id}
  */
  readonly endpointResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#endpoint_tenant_id StorageAccountNetworkRulesA#endpoint_tenant_id}
  */
  readonly endpointTenantId?: string;
}

export function storageAccountNetworkRulesPrivateLinkAccessAToTerraform(struct?: StorageAccountNetworkRulesPrivateLinkAccessA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_resource_id: cdktf.stringToTerraform(struct!.endpointResourceId),
    endpoint_tenant_id: cdktf.stringToTerraform(struct!.endpointTenantId),
  }
}


export function storageAccountNetworkRulesPrivateLinkAccessAToHclTerraform(struct?: StorageAccountNetworkRulesPrivateLinkAccessA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.endpointTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountNetworkRulesPrivateLinkAccessAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): StorageAccountNetworkRulesPrivateLinkAccessA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointResourceId = this._endpointResourceId;
    }
    if (this._endpointTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointTenantId = this._endpointTenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountNetworkRulesPrivateLinkAccessA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointResourceId = undefined;
      this._endpointTenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointResourceId = value.endpointResourceId;
      this._endpointTenantId = value.endpointTenantId;
    }
  }

  // endpoint_resource_id - computed: false, optional: false, required: true
  private _endpointResourceId?: string; 
  public get endpointResourceId() {
    return this.getStringAttribute('endpoint_resource_id');
  }
  public set endpointResourceId(value: string) {
    this._endpointResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointResourceIdInput() {
    return this._endpointResourceId;
  }

  // endpoint_tenant_id - computed: true, optional: true, required: false
  private _endpointTenantId?: string; 
  public get endpointTenantId() {
    return this.getStringAttribute('endpoint_tenant_id');
  }
  public set endpointTenantId(value: string) {
    this._endpointTenantId = value;
  }
  public resetEndpointTenantId() {
    this._endpointTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTenantIdInput() {
    return this._endpointTenantId;
  }
}

export class StorageAccountNetworkRulesPrivateLinkAccessAList extends cdktf.ComplexList {
  public internalValue? : StorageAccountNetworkRulesPrivateLinkAccessA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): StorageAccountNetworkRulesPrivateLinkAccessAOutputReference {
    return new StorageAccountNetworkRulesPrivateLinkAccessAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StorageAccountNetworkRulesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#create StorageAccountNetworkRulesA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#delete StorageAccountNetworkRulesA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#read StorageAccountNetworkRulesA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#update StorageAccountNetworkRulesA#update}
  */
  readonly update?: string;
}

export function storageAccountNetworkRulesTimeoutsToTerraform(struct?: StorageAccountNetworkRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function storageAccountNetworkRulesTimeoutsToHclTerraform(struct?: StorageAccountNetworkRulesTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageAccountNetworkRulesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageAccountNetworkRulesTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageAccountNetworkRulesTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules azurerm_storage_account_network_rules}
*/
export class StorageAccountNetworkRulesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_storage_account_network_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageAccountNetworkRulesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageAccountNetworkRulesA to import
  * @param importFromId The id of the existing StorageAccountNetworkRulesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageAccountNetworkRulesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_storage_account_network_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/storage_account_network_rules azurerm_storage_account_network_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageAccountNetworkRulesAConfig
  */
  public constructor(scope: Construct, id: string, config: StorageAccountNetworkRulesAConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_account_network_rules',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bypass = config.bypass;
    this._defaultAction = config.defaultAction;
    this._id = config.id;
    this._ipRules = config.ipRules;
    this._storageAccountId = config.storageAccountId;
    this._virtualNetworkSubnetIds = config.virtualNetworkSubnetIds;
    this._privateLinkAccess.internalValue = config.privateLinkAccess;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass - computed: true, optional: true, required: false
  private _bypass?: string[]; 
  public get bypass() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass'));
  }
  public set bypass(value: string[]) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
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
    return this._defaultAction;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules?: string[]; 
  public get ipRules() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_rules'));
  }
  public set ipRules(value: string[]) {
    this._ipRules = value;
  }
  public resetIpRules() {
    this._ipRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules;
  }

  // storage_account_id - computed: false, optional: false, required: true
  private _storageAccountId?: string; 
  public get storageAccountId() {
    return this.getStringAttribute('storage_account_id');
  }
  public set storageAccountId(value: string) {
    this._storageAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountIdInput() {
    return this._storageAccountId;
  }

  // virtual_network_subnet_ids - computed: false, optional: true, required: false
  private _virtualNetworkSubnetIds?: string[]; 
  public get virtualNetworkSubnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('virtual_network_subnet_ids'));
  }
  public set virtualNetworkSubnetIds(value: string[]) {
    this._virtualNetworkSubnetIds = value;
  }
  public resetVirtualNetworkSubnetIds() {
    this._virtualNetworkSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkSubnetIdsInput() {
    return this._virtualNetworkSubnetIds;
  }

  // private_link_access - computed: false, optional: true, required: false
  private _privateLinkAccess = new StorageAccountNetworkRulesPrivateLinkAccessAList(this, "private_link_access", false);
  public get privateLinkAccess() {
    return this._privateLinkAccess;
  }
  public putPrivateLinkAccess(value: StorageAccountNetworkRulesPrivateLinkAccessA[] | cdktf.IResolvable) {
    this._privateLinkAccess.internalValue = value;
  }
  public resetPrivateLinkAccess() {
    this._privateLinkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkAccessInput() {
    return this._privateLinkAccess.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StorageAccountNetworkRulesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StorageAccountNetworkRulesTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bypass),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      id: cdktf.stringToTerraform(this._id),
      ip_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipRules),
      storage_account_id: cdktf.stringToTerraform(this._storageAccountId),
      virtual_network_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualNetworkSubnetIds),
      private_link_access: cdktf.listMapper(storageAccountNetworkRulesPrivateLinkAccessAToTerraform, true)(this._privateLinkAccess.internalValue),
      timeouts: storageAccountNetworkRulesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bypass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipRules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage_account_id: {
        value: cdktf.stringToHclTerraform(this._storageAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualNetworkSubnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      private_link_access: {
        value: cdktf.listMapperHcl(storageAccountNetworkRulesPrivateLinkAccessAToHclTerraform, true)(this._privateLinkAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageAccountNetworkRulesPrivateLinkAccessAList",
      },
      timeouts: {
        value: storageAccountNetworkRulesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StorageAccountNetworkRulesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
