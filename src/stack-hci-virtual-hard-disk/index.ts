// https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackHciVirtualHardDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#block_size_in_bytes StackHciVirtualHardDisk#block_size_in_bytes}
  */
  readonly blockSizeInBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#custom_location_id StackHciVirtualHardDisk#custom_location_id}
  */
  readonly customLocationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#disk_file_format StackHciVirtualHardDisk#disk_file_format}
  */
  readonly diskFileFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#disk_size_in_gb StackHciVirtualHardDisk#disk_size_in_gb}
  */
  readonly diskSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#dynamic_enabled StackHciVirtualHardDisk#dynamic_enabled}
  */
  readonly dynamicEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#hyperv_generation StackHciVirtualHardDisk#hyperv_generation}
  */
  readonly hypervGeneration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#id StackHciVirtualHardDisk#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#location StackHciVirtualHardDisk#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#logical_sector_in_bytes StackHciVirtualHardDisk#logical_sector_in_bytes}
  */
  readonly logicalSectorInBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#name StackHciVirtualHardDisk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#physical_sector_in_bytes StackHciVirtualHardDisk#physical_sector_in_bytes}
  */
  readonly physicalSectorInBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#resource_group_name StackHciVirtualHardDisk#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#storage_path_id StackHciVirtualHardDisk#storage_path_id}
  */
  readonly storagePathId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#tags StackHciVirtualHardDisk#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#timeouts StackHciVirtualHardDisk#timeouts}
  */
  readonly timeouts?: StackHciVirtualHardDiskTimeouts;
}
export interface StackHciVirtualHardDiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#create StackHciVirtualHardDisk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#delete StackHciVirtualHardDisk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#read StackHciVirtualHardDisk#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#update StackHciVirtualHardDisk#update}
  */
  readonly update?: string;
}

export function stackHciVirtualHardDiskTimeoutsToTerraform(struct?: StackHciVirtualHardDiskTimeouts | cdktf.IResolvable): any {
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


export function stackHciVirtualHardDiskTimeoutsToHclTerraform(struct?: StackHciVirtualHardDiskTimeouts | cdktf.IResolvable): any {
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

export class StackHciVirtualHardDiskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackHciVirtualHardDiskTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StackHciVirtualHardDiskTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk azurerm_stack_hci_virtual_hard_disk}
*/
export class StackHciVirtualHardDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_stack_hci_virtual_hard_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackHciVirtualHardDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackHciVirtualHardDisk to import
  * @param importFromId The id of the existing StackHciVirtualHardDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackHciVirtualHardDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_stack_hci_virtual_hard_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/stack_hci_virtual_hard_disk azurerm_stack_hci_virtual_hard_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackHciVirtualHardDiskConfig
  */
  public constructor(scope: Construct, id: string, config: StackHciVirtualHardDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stack_hci_virtual_hard_disk',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.23.0',
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
    this._blockSizeInBytes = config.blockSizeInBytes;
    this._customLocationId = config.customLocationId;
    this._diskFileFormat = config.diskFileFormat;
    this._diskSizeInGb = config.diskSizeInGb;
    this._dynamicEnabled = config.dynamicEnabled;
    this._hypervGeneration = config.hypervGeneration;
    this._id = config.id;
    this._location = config.location;
    this._logicalSectorInBytes = config.logicalSectorInBytes;
    this._name = config.name;
    this._physicalSectorInBytes = config.physicalSectorInBytes;
    this._resourceGroupName = config.resourceGroupName;
    this._storagePathId = config.storagePathId;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_size_in_bytes - computed: false, optional: true, required: false
  private _blockSizeInBytes?: number; 
  public get blockSizeInBytes() {
    return this.getNumberAttribute('block_size_in_bytes');
  }
  public set blockSizeInBytes(value: number) {
    this._blockSizeInBytes = value;
  }
  public resetBlockSizeInBytes() {
    this._blockSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInBytesInput() {
    return this._blockSizeInBytes;
  }

  // custom_location_id - computed: false, optional: false, required: true
  private _customLocationId?: string; 
  public get customLocationId() {
    return this.getStringAttribute('custom_location_id');
  }
  public set customLocationId(value: string) {
    this._customLocationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customLocationIdInput() {
    return this._customLocationId;
  }

  // disk_file_format - computed: false, optional: true, required: false
  private _diskFileFormat?: string; 
  public get diskFileFormat() {
    return this.getStringAttribute('disk_file_format');
  }
  public set diskFileFormat(value: string) {
    this._diskFileFormat = value;
  }
  public resetDiskFileFormat() {
    this._diskFileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFileFormatInput() {
    return this._diskFileFormat;
  }

  // disk_size_in_gb - computed: false, optional: false, required: true
  private _diskSizeInGb?: number; 
  public get diskSizeInGb() {
    return this.getNumberAttribute('disk_size_in_gb');
  }
  public set diskSizeInGb(value: number) {
    this._diskSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInGbInput() {
    return this._diskSizeInGb;
  }

  // dynamic_enabled - computed: false, optional: true, required: false
  private _dynamicEnabled?: boolean | cdktf.IResolvable; 
  public get dynamicEnabled() {
    return this.getBooleanAttribute('dynamic_enabled');
  }
  public set dynamicEnabled(value: boolean | cdktf.IResolvable) {
    this._dynamicEnabled = value;
  }
  public resetDynamicEnabled() {
    this._dynamicEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicEnabledInput() {
    return this._dynamicEnabled;
  }

  // hyperv_generation - computed: false, optional: true, required: false
  private _hypervGeneration?: string; 
  public get hypervGeneration() {
    return this.getStringAttribute('hyperv_generation');
  }
  public set hypervGeneration(value: string) {
    this._hypervGeneration = value;
  }
  public resetHypervGeneration() {
    this._hypervGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervGenerationInput() {
    return this._hypervGeneration;
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

  // logical_sector_in_bytes - computed: false, optional: true, required: false
  private _logicalSectorInBytes?: number; 
  public get logicalSectorInBytes() {
    return this.getNumberAttribute('logical_sector_in_bytes');
  }
  public set logicalSectorInBytes(value: number) {
    this._logicalSectorInBytes = value;
  }
  public resetLogicalSectorInBytes() {
    this._logicalSectorInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalSectorInBytesInput() {
    return this._logicalSectorInBytes;
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

  // physical_sector_in_bytes - computed: false, optional: true, required: false
  private _physicalSectorInBytes?: number; 
  public get physicalSectorInBytes() {
    return this.getNumberAttribute('physical_sector_in_bytes');
  }
  public set physicalSectorInBytes(value: number) {
    this._physicalSectorInBytes = value;
  }
  public resetPhysicalSectorInBytes() {
    this._physicalSectorInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalSectorInBytesInput() {
    return this._physicalSectorInBytes;
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

  // storage_path_id - computed: false, optional: true, required: false
  private _storagePathId?: string; 
  public get storagePathId() {
    return this.getStringAttribute('storage_path_id');
  }
  public set storagePathId(value: string) {
    this._storagePathId = value;
  }
  public resetStoragePathId() {
    this._storagePathId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePathIdInput() {
    return this._storagePathId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackHciVirtualHardDiskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackHciVirtualHardDiskTimeouts) {
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
      block_size_in_bytes: cdktf.numberToTerraform(this._blockSizeInBytes),
      custom_location_id: cdktf.stringToTerraform(this._customLocationId),
      disk_file_format: cdktf.stringToTerraform(this._diskFileFormat),
      disk_size_in_gb: cdktf.numberToTerraform(this._diskSizeInGb),
      dynamic_enabled: cdktf.booleanToTerraform(this._dynamicEnabled),
      hyperv_generation: cdktf.stringToTerraform(this._hypervGeneration),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      logical_sector_in_bytes: cdktf.numberToTerraform(this._logicalSectorInBytes),
      name: cdktf.stringToTerraform(this._name),
      physical_sector_in_bytes: cdktf.numberToTerraform(this._physicalSectorInBytes),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_path_id: cdktf.stringToTerraform(this._storagePathId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: stackHciVirtualHardDiskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_size_in_bytes: {
        value: cdktf.numberToHclTerraform(this._blockSizeInBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_location_id: {
        value: cdktf.stringToHclTerraform(this._customLocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_file_format: {
        value: cdktf.stringToHclTerraform(this._diskFileFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size_in_gb: {
        value: cdktf.numberToHclTerraform(this._diskSizeInGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_enabled: {
        value: cdktf.booleanToHclTerraform(this._dynamicEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hyperv_generation: {
        value: cdktf.stringToHclTerraform(this._hypervGeneration),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_sector_in_bytes: {
        value: cdktf.numberToHclTerraform(this._logicalSectorInBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_sector_in_bytes: {
        value: cdktf.numberToHclTerraform(this._physicalSectorInBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_path_id: {
        value: cdktf.stringToHclTerraform(this._storagePathId),
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
      timeouts: {
        value: stackHciVirtualHardDiskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackHciVirtualHardDiskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
