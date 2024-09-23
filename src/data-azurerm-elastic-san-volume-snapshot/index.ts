// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_san_volume_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermElasticSanVolumeSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_san_volume_snapshot#id DataAzurermElasticSanVolumeSnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_san_volume_snapshot#name DataAzurermElasticSanVolumeSnapshot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_san_volume_snapshot#volume_group_id DataAzurermElasticSanVolumeSnapshot#volume_group_id}
  */
  readonly volumeGroupId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_san_volume_snapshot#timeouts DataAzurermElasticSanVolumeSnapshot#timeouts}
  */
  readonly timeouts?: DataAzurermElasticSanVolumeSnapshotTimeouts;
}
export interface DataAzurermElasticSanVolumeSnapshotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_san_volume_snapshot#read DataAzurermElasticSanVolumeSnapshot#read}
  */
  readonly read?: string;
}

export function dataAzurermElasticSanVolumeSnapshotTimeoutsToTerraform(struct?: DataAzurermElasticSanVolumeSnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermElasticSanVolumeSnapshotTimeoutsToHclTerraform(struct?: DataAzurermElasticSanVolumeSnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermElasticSanVolumeSnapshotTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermElasticSanVolumeSnapshotTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_san_volume_snapshot azurerm_elastic_san_volume_snapshot}
*/
export class DataAzurermElasticSanVolumeSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_elastic_san_volume_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermElasticSanVolumeSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermElasticSanVolumeSnapshot to import
  * @param importFromId The id of the existing DataAzurermElasticSanVolumeSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_san_volume_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermElasticSanVolumeSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_elastic_san_volume_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/data-sources/elastic_san_volume_snapshot azurerm_elastic_san_volume_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermElasticSanVolumeSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermElasticSanVolumeSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_elastic_san_volume_snapshot',
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
    this._id = config.id;
    this._name = config.name;
    this._volumeGroupId = config.volumeGroupId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_volume_size_in_gib - computed: true, optional: false, required: false
  public get sourceVolumeSizeInGib() {
    return this.getNumberAttribute('source_volume_size_in_gib');
  }

  // volume_group_id - computed: false, optional: false, required: true
  private _volumeGroupId?: string; 
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
  }
  public set volumeGroupId(value: string) {
    this._volumeGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupIdInput() {
    return this._volumeGroupId;
  }

  // volume_name - computed: true, optional: false, required: false
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermElasticSanVolumeSnapshotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermElasticSanVolumeSnapshotTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      volume_group_id: cdktf.stringToTerraform(this._volumeGroupId),
      timeouts: dataAzurermElasticSanVolumeSnapshotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      volume_group_id: {
        value: cdktf.stringToHclTerraform(this._volumeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermElasticSanVolumeSnapshotTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermElasticSanVolumeSnapshotTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
