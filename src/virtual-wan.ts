// https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualWanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#allow_branch_to_branch_traffic VirtualWan#allow_branch_to_branch_traffic}
  */
  readonly allowBranchToBranchTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#allow_vnet_to_vnet_traffic VirtualWan#allow_vnet_to_vnet_traffic}
  */
  readonly allowVnetToVnetTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#disable_vpn_encryption VirtualWan#disable_vpn_encryption}
  */
  readonly disableVpnEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#location VirtualWan#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#name VirtualWan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#office365_local_breakout_category VirtualWan#office365_local_breakout_category}
  */
  readonly office365LocalBreakoutCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#resource_group_name VirtualWan#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#tags VirtualWan#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#type VirtualWan#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#timeouts VirtualWan#timeouts}
  */
  readonly timeouts?: VirtualWanTimeouts;
}
export interface VirtualWanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#create VirtualWan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#delete VirtualWan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#read VirtualWan#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html#update VirtualWan#update}
  */
  readonly update?: string;
}

function virtualWanTimeoutsToTerraform(struct?: VirtualWanTimeoutsOutputReference | VirtualWanTimeouts): any {
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

export class VirtualWanTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html azurerm_virtual_wan}
*/
export class VirtualWan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_virtual_wan";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/virtual_wan.html azurerm_virtual_wan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualWanConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualWanConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_virtual_wan',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowBranchToBranchTraffic = config.allowBranchToBranchTraffic;
    this._allowVnetToVnetTraffic = config.allowVnetToVnetTraffic;
    this._disableVpnEncryption = config.disableVpnEncryption;
    this._location = config.location;
    this._name = config.name;
    this._office365LocalBreakoutCategory = config.office365LocalBreakoutCategory;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_branch_to_branch_traffic - computed: false, optional: true, required: false
  private _allowBranchToBranchTraffic?: boolean | cdktf.IResolvable | undefined; 
  public get allowBranchToBranchTraffic() {
    return this.getBooleanAttribute('allow_branch_to_branch_traffic') as any;
  }
  public set allowBranchToBranchTraffic(value: boolean | cdktf.IResolvable | undefined) {
    this._allowBranchToBranchTraffic = value;
  }
  public resetAllowBranchToBranchTraffic() {
    this._allowBranchToBranchTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBranchToBranchTrafficInput() {
    return this._allowBranchToBranchTraffic
  }

  // allow_vnet_to_vnet_traffic - computed: false, optional: true, required: false
  private _allowVnetToVnetTraffic?: boolean | cdktf.IResolvable | undefined; 
  public get allowVnetToVnetTraffic() {
    return this.getBooleanAttribute('allow_vnet_to_vnet_traffic') as any;
  }
  public set allowVnetToVnetTraffic(value: boolean | cdktf.IResolvable | undefined) {
    this._allowVnetToVnetTraffic = value;
  }
  public resetAllowVnetToVnetTraffic() {
    this._allowVnetToVnetTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVnetToVnetTrafficInput() {
    return this._allowVnetToVnetTraffic
  }

  // disable_vpn_encryption - computed: false, optional: true, required: false
  private _disableVpnEncryption?: boolean | cdktf.IResolvable | undefined; 
  public get disableVpnEncryption() {
    return this.getBooleanAttribute('disable_vpn_encryption') as any;
  }
  public set disableVpnEncryption(value: boolean | cdktf.IResolvable | undefined) {
    this._disableVpnEncryption = value;
  }
  public resetDisableVpnEncryption() {
    this._disableVpnEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVpnEncryptionInput() {
    return this._disableVpnEncryption
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._location
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
    return this._name
  }

  // office365_local_breakout_category - computed: false, optional: true, required: false
  private _office365LocalBreakoutCategory?: string | undefined; 
  public get office365LocalBreakoutCategory() {
    return this.getStringAttribute('office365_local_breakout_category');
  }
  public set office365LocalBreakoutCategory(value: string | undefined) {
    this._office365LocalBreakoutCategory = value;
  }
  public resetOffice365LocalBreakoutCategory() {
    this._office365LocalBreakoutCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get office365LocalBreakoutCategoryInput() {
    return this._office365LocalBreakoutCategory
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
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VirtualWanTimeouts | undefined; 
  private __timeoutsOutput = new VirtualWanTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VirtualWanTimeouts | undefined) {
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
      allow_branch_to_branch_traffic: cdktf.booleanToTerraform(this._allowBranchToBranchTraffic),
      allow_vnet_to_vnet_traffic: cdktf.booleanToTerraform(this._allowVnetToVnetTraffic),
      disable_vpn_encryption: cdktf.booleanToTerraform(this._disableVpnEncryption),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      office365_local_breakout_category: cdktf.stringToTerraform(this._office365LocalBreakoutCategory),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      timeouts: virtualWanTimeoutsToTerraform(this._timeouts),
    };
  }
}
