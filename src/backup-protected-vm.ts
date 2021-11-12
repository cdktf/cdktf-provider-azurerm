// https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupProtectedVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#backup_policy_id BackupProtectedVm#backup_policy_id}
  */
  readonly backupPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#exclude_disk_luns BackupProtectedVm#exclude_disk_luns}
  */
  readonly excludeDiskLuns?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#include_disk_luns BackupProtectedVm#include_disk_luns}
  */
  readonly includeDiskLuns?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#recovery_vault_name BackupProtectedVm#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#resource_group_name BackupProtectedVm#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#source_vm_id BackupProtectedVm#source_vm_id}
  */
  readonly sourceVmId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#tags BackupProtectedVm#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#timeouts BackupProtectedVm#timeouts}
  */
  readonly timeouts?: BackupProtectedVmTimeouts;
}
export interface BackupProtectedVmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#create BackupProtectedVm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#delete BackupProtectedVm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#read BackupProtectedVm#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html#update BackupProtectedVm#update}
  */
  readonly update?: string;
}

function backupProtectedVmTimeoutsToTerraform(struct?: BackupProtectedVmTimeoutsOutputReference | BackupProtectedVmTimeouts): any {
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

export class BackupProtectedVmTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html azurerm_backup_protected_vm}
*/
export class BackupProtectedVm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_backup_protected_vm";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/backup_protected_vm.html azurerm_backup_protected_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupProtectedVmConfig
  */
  public constructor(scope: Construct, id: string, config: BackupProtectedVmConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_protected_vm',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupPolicyId = config.backupPolicyId;
    this._excludeDiskLuns = config.excludeDiskLuns;
    this._includeDiskLuns = config.includeDiskLuns;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceVmId = config.sourceVmId;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_policy_id - computed: false, optional: false, required: true
  private _backupPolicyId?: string; 
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

  // exclude_disk_luns - computed: false, optional: true, required: false
  private _excludeDiskLuns?: number[] | undefined; 
  public get excludeDiskLuns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exclude_disk_luns') as any;
  }
  public set excludeDiskLuns(value: number[] | undefined) {
    this._excludeDiskLuns = value;
  }
  public resetExcludeDiskLuns() {
    this._excludeDiskLuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDiskLunsInput() {
    return this._excludeDiskLuns
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_disk_luns - computed: false, optional: true, required: false
  private _includeDiskLuns?: number[] | undefined; 
  public get includeDiskLuns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('include_disk_luns') as any;
  }
  public set includeDiskLuns(value: number[] | undefined) {
    this._includeDiskLuns = value;
  }
  public resetIncludeDiskLuns() {
    this._includeDiskLuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDiskLunsInput() {
    return this._includeDiskLuns
  }

  // recovery_vault_name - computed: false, optional: false, required: true
  private _recoveryVaultName?: string; 
  public get recoveryVaultName() {
    return this.getStringAttribute('recovery_vault_name');
  }
  public set recoveryVaultName(value: string) {
    this._recoveryVaultName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryVaultNameInput() {
    return this._recoveryVaultName
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

  // source_vm_id - computed: false, optional: false, required: true
  private _sourceVmId?: string; 
  public get sourceVmId() {
    return this.getStringAttribute('source_vm_id');
  }
  public set sourceVmId(value: string) {
    this._sourceVmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmIdInput() {
    return this._sourceVmId
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BackupProtectedVmTimeouts | undefined; 
  private __timeoutsOutput = new BackupProtectedVmTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BackupProtectedVmTimeouts | undefined) {
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
      exclude_disk_luns: cdktf.listMapper(cdktf.numberToTerraform)(this._excludeDiskLuns),
      include_disk_luns: cdktf.listMapper(cdktf.numberToTerraform)(this._includeDiskLuns),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_vm_id: cdktf.stringToTerraform(this._sourceVmId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: backupProtectedVmTimeoutsToTerraform(this._timeouts),
    };
  }
}
