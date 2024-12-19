// https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricCapacityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#administration_members FabricCapacity#administration_members}
  */
  readonly administrationMembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#id FabricCapacity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#location FabricCapacity#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#name FabricCapacity#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#resource_group_name FabricCapacity#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#tags FabricCapacity#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#sku FabricCapacity#sku}
  */
  readonly sku: FabricCapacitySku;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#timeouts FabricCapacity#timeouts}
  */
  readonly timeouts?: FabricCapacityTimeouts;
}
export interface FabricCapacitySku {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#name FabricCapacity#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#tier FabricCapacity#tier}
  */
  readonly tier: string;
}

export function fabricCapacitySkuToTerraform(struct?: FabricCapacitySkuOutputReference | FabricCapacitySku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tier: cdktf.stringToTerraform(struct!.tier),
  }
}


export function fabricCapacitySkuToHclTerraform(struct?: FabricCapacitySkuOutputReference | FabricCapacitySku): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricCapacitySkuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FabricCapacitySku | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricCapacitySku | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._tier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._tier = value.tier;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }
}
export interface FabricCapacityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#create FabricCapacity#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#delete FabricCapacity#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#read FabricCapacity#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#update FabricCapacity#update}
  */
  readonly update?: string;
}

export function fabricCapacityTimeoutsToTerraform(struct?: FabricCapacityTimeouts | cdktf.IResolvable): any {
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


export function fabricCapacityTimeoutsToHclTerraform(struct?: FabricCapacityTimeouts | cdktf.IResolvable): any {
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

export class FabricCapacityTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricCapacityTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricCapacityTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity azurerm_fabric_capacity}
*/
export class FabricCapacity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_fabric_capacity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricCapacity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricCapacity to import
  * @param importFromId The id of the existing FabricCapacity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricCapacity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_fabric_capacity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.14.0/docs/resources/fabric_capacity azurerm_fabric_capacity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricCapacityConfig
  */
  public constructor(scope: Construct, id: string, config: FabricCapacityConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_fabric_capacity',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.14.0',
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
    this._administrationMembers = config.administrationMembers;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._sku.internalValue = config.sku;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administration_members - computed: false, optional: true, required: false
  private _administrationMembers?: string[]; 
  public get administrationMembers() {
    return cdktf.Fn.tolist(this.getListAttribute('administration_members'));
  }
  public set administrationMembers(value: string[]) {
    this._administrationMembers = value;
  }
  public resetAdministrationMembers() {
    this._administrationMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrationMembersInput() {
    return this._administrationMembers;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // sku - computed: false, optional: false, required: true
  private _sku = new FabricCapacitySkuOutputReference(this, "sku");
  public get sku() {
    return this._sku;
  }
  public putSku(value: FabricCapacitySku) {
    this._sku.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FabricCapacityTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FabricCapacityTimeouts) {
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
      administration_members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._administrationMembers),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      sku: fabricCapacitySkuToTerraform(this._sku.internalValue),
      timeouts: fabricCapacityTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administration_members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._administrationMembers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      sku: {
        value: fabricCapacitySkuToHclTerraform(this._sku.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricCapacitySkuList",
      },
      timeouts: {
        value: fabricCapacityTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricCapacityTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}