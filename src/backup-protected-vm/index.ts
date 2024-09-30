// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupProtectedVmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#backup_policy_id BackupProtectedVm#backup_policy_id}
  */
  readonly backupPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#exclude_disk_luns BackupProtectedVm#exclude_disk_luns}
  */
  readonly excludeDiskLuns?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#id BackupProtectedVm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#include_disk_luns BackupProtectedVm#include_disk_luns}
  */
  readonly includeDiskLuns?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#protection_state BackupProtectedVm#protection_state}
  */
  readonly protectionState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#recovery_vault_name BackupProtectedVm#recovery_vault_name}
  */
  readonly recoveryVaultName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#resource_group_name BackupProtectedVm#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#source_vm_id BackupProtectedVm#source_vm_id}
  */
  readonly sourceVmId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#timeouts BackupProtectedVm#timeouts}
  */
  readonly timeouts?: BackupProtectedVmTimeouts;
}
export interface BackupProtectedVmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#create BackupProtectedVm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#delete BackupProtectedVm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#read BackupProtectedVm#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#update BackupProtectedVm#update}
  */
  readonly update?: string;
}

export function backupProtectedVmTimeoutsToTerraform(struct?: BackupProtectedVmTimeouts | cdktf.IResolvable): any {
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


export function backupProtectedVmTimeoutsToHclTerraform(struct?: BackupProtectedVmTimeouts | cdktf.IResolvable): any {
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

export class BackupProtectedVmTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupProtectedVmTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BackupProtectedVmTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm azurerm_backup_protected_vm}
*/
export class BackupProtectedVm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_backup_protected_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BackupProtectedVm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupProtectedVm to import
  * @param importFromId The id of the existing BackupProtectedVm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupProtectedVm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_backup_protected_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/backup_protected_vm azurerm_backup_protected_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupProtectedVmConfig
  */
  public constructor(scope: Construct, id: string, config: BackupProtectedVmConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_backup_protected_vm',
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
    this._backupPolicyId = config.backupPolicyId;
    this._excludeDiskLuns = config.excludeDiskLuns;
    this._id = config.id;
    this._includeDiskLuns = config.includeDiskLuns;
    this._protectionState = config.protectionState;
    this._recoveryVaultName = config.recoveryVaultName;
    this._resourceGroupName = config.resourceGroupName;
    this._sourceVmId = config.sourceVmId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_policy_id - computed: false, optional: true, required: false
  private _backupPolicyId?: string; 
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }
  public resetBackupPolicyId() {
    this._backupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyIdInput() {
    return this._backupPolicyId;
  }

  // exclude_disk_luns - computed: false, optional: true, required: false
  private _excludeDiskLuns?: number[]; 
  public get excludeDiskLuns() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('exclude_disk_luns')));
  }
  public set excludeDiskLuns(value: number[]) {
    this._excludeDiskLuns = value;
  }
  public resetExcludeDiskLuns() {
    this._excludeDiskLuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDiskLunsInput() {
    return this._excludeDiskLuns;
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

  // include_disk_luns - computed: false, optional: true, required: false
  private _includeDiskLuns?: number[]; 
  public get includeDiskLuns() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('include_disk_luns')));
  }
  public set includeDiskLuns(value: number[]) {
    this._includeDiskLuns = value;
  }
  public resetIncludeDiskLuns() {
    this._includeDiskLuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDiskLunsInput() {
    return this._includeDiskLuns;
  }

  // protection_state - computed: true, optional: true, required: false
  private _protectionState?: string; 
  public get protectionState() {
    return this.getStringAttribute('protection_state');
  }
  public set protectionState(value: string) {
    this._protectionState = value;
  }
  public resetProtectionState() {
    this._protectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionStateInput() {
    return this._protectionState;
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
    return this._recoveryVaultName;
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

  // source_vm_id - computed: true, optional: true, required: false
  private _sourceVmId?: string; 
  public get sourceVmId() {
    return this.getStringAttribute('source_vm_id');
  }
  public set sourceVmId(value: string) {
    this._sourceVmId = value;
  }
  public resetSourceVmId() {
    this._sourceVmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVmIdInput() {
    return this._sourceVmId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupProtectedVmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupProtectedVmTimeouts) {
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
      backup_policy_id: cdktf.stringToTerraform(this._backupPolicyId),
      exclude_disk_luns: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludeDiskLuns),
      id: cdktf.stringToTerraform(this._id),
      include_disk_luns: cdktf.listMapper(cdktf.numberToTerraform, false)(this._includeDiskLuns),
      protection_state: cdktf.stringToTerraform(this._protectionState),
      recovery_vault_name: cdktf.stringToTerraform(this._recoveryVaultName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      source_vm_id: cdktf.stringToTerraform(this._sourceVmId),
      timeouts: backupProtectedVmTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_policy_id: {
        value: cdktf.stringToHclTerraform(this._backupPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_disk_luns: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludeDiskLuns),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_disk_luns: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._includeDiskLuns),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      protection_state: {
        value: cdktf.stringToHclTerraform(this._protectionState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_vault_name: {
        value: cdktf.stringToHclTerraform(this._recoveryVaultName),
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
      source_vm_id: {
        value: cdktf.stringToHclTerraform(this._sourceVmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: backupProtectedVmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupProtectedVmTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
