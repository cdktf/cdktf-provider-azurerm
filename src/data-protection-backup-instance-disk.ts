// https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProtectionBackupInstanceDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#backup_policy_id DataProtectionBackupInstanceDisk#backup_policy_id}
  */
  readonly backupPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#disk_id DataProtectionBackupInstanceDisk#disk_id}
  */
  readonly diskId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#location DataProtectionBackupInstanceDisk#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#name DataProtectionBackupInstanceDisk#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#snapshot_resource_group_name DataProtectionBackupInstanceDisk#snapshot_resource_group_name}
  */
  readonly snapshotResourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#vault_id DataProtectionBackupInstanceDisk#vault_id}
  */
  readonly vaultId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#timeouts DataProtectionBackupInstanceDisk#timeouts}
  */
  readonly timeouts?: DataProtectionBackupInstanceDiskTimeouts;
}
export interface DataProtectionBackupInstanceDiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#create DataProtectionBackupInstanceDisk#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#delete DataProtectionBackupInstanceDisk#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#read DataProtectionBackupInstanceDisk#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html#update DataProtectionBackupInstanceDisk#update}
  */
  readonly update?: string;
}

function dataProtectionBackupInstanceDiskTimeoutsToTerraform(struct?: DataProtectionBackupInstanceDiskTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html azurerm_data_protection_backup_instance_disk}
*/
export class DataProtectionBackupInstanceDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_protection_backup_instance_disk";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_protection_backup_instance_disk.html azurerm_data_protection_backup_instance_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProtectionBackupInstanceDiskConfig
  */
  public constructor(scope: Construct, id: string, config: DataProtectionBackupInstanceDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_protection_backup_instance_disk',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupPolicyId = config.backupPolicyId;
    this._diskId = config.diskId;
    this._location = config.location;
    this._name = config.name;
    this._snapshotResourceGroupName = config.snapshotResourceGroupName;
    this._vaultId = config.vaultId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_policy_id - computed: false, optional: false, required: true
  private _backupPolicyId: string;
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyIdInput() {
    return this._backupPolicyId
  }

  // disk_id - computed: false, optional: false, required: true
  private _diskId: string;
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }
  public set diskId(value: string) {
    this._diskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId
  }

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

  // snapshot_resource_group_name - computed: false, optional: false, required: true
  private _snapshotResourceGroupName: string;
  public get snapshotResourceGroupName() {
    return this.getStringAttribute('snapshot_resource_group_name');
  }
  public set snapshotResourceGroupName(value: string) {
    this._snapshotResourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotResourceGroupNameInput() {
    return this._snapshotResourceGroupName
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId: string;
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataProtectionBackupInstanceDiskTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataProtectionBackupInstanceDiskTimeouts ) {
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
      backup_policy_id: cdktf.stringToTerraform(this._backupPolicyId),
      disk_id: cdktf.stringToTerraform(this._diskId),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      snapshot_resource_group_name: cdktf.stringToTerraform(this._snapshotResourceGroupName),
      vault_id: cdktf.stringToTerraform(this._vaultId),
      timeouts: dataProtectionBackupInstanceDiskTimeoutsToTerraform(this._timeouts),
    };
  }
}
