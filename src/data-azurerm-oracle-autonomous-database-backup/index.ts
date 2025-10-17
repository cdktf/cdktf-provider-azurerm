/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermOracleAutonomousDatabaseBackupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backup#autonomous_database_id DataAzurermOracleAutonomousDatabaseBackup#autonomous_database_id}
  */
  readonly autonomousDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backup#name DataAzurermOracleAutonomousDatabaseBackup#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backup#timeouts DataAzurermOracleAutonomousDatabaseBackup#timeouts}
  */
  readonly timeouts?: DataAzurermOracleAutonomousDatabaseBackupTimeouts;
}
export interface DataAzurermOracleAutonomousDatabaseBackupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backup#read DataAzurermOracleAutonomousDatabaseBackup#read}
  */
  readonly read?: string;
}

export function dataAzurermOracleAutonomousDatabaseBackupTimeoutsToTerraform(struct?: DataAzurermOracleAutonomousDatabaseBackupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermOracleAutonomousDatabaseBackupTimeoutsToHclTerraform(struct?: DataAzurermOracleAutonomousDatabaseBackupTimeouts | cdktf.IResolvable): any {
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

export class DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermOracleAutonomousDatabaseBackupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermOracleAutonomousDatabaseBackupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backup azurerm_oracle_autonomous_database_backup}
*/
export class DataAzurermOracleAutonomousDatabaseBackup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_oracle_autonomous_database_backup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseBackup to import
  * @param importFromId The id of the existing DataAzurermOracleAutonomousDatabaseBackup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseBackup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_oracle_autonomous_database_backup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backup azurerm_oracle_autonomous_database_backup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermOracleAutonomousDatabaseBackupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermOracleAutonomousDatabaseBackupConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_oracle_autonomous_database_backup',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.49.0',
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
    this._autonomousDatabaseId = config.autonomousDatabaseId;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic - computed: true, optional: false, required: false
  public get automatic() {
    return this.getBooleanAttribute('automatic');
  }

  // autonomous_database_backup_ocid - computed: true, optional: false, required: false
  public get autonomousDatabaseBackupOcid() {
    return this.getStringAttribute('autonomous_database_backup_ocid');
  }

  // autonomous_database_id - computed: false, optional: false, required: true
  private _autonomousDatabaseId?: string; 
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseIdInput() {
    return this._autonomousDatabaseId;
  }

  // autonomous_database_ocid - computed: true, optional: false, required: false
  public get autonomousDatabaseOcid() {
    return this.getStringAttribute('autonomous_database_ocid');
  }

  // database_backup_size_in_tbs - computed: true, optional: false, required: false
  public get databaseBackupSizeInTbs() {
    return this.getNumberAttribute('database_backup_size_in_tbs');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // provisioning_state - computed: true, optional: false, required: false
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }

  // restorable - computed: true, optional: false, required: false
  public get restorable() {
    return this.getBooleanAttribute('restorable');
  }

  // retention_period_in_days - computed: true, optional: false, required: false
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }

  // time_available_til - computed: true, optional: false, required: false
  public get timeAvailableTil() {
    return this.getStringAttribute('time_available_til');
  }

  // time_ended - computed: true, optional: false, required: false
  public get timeEnded() {
    return this.getStringAttribute('time_ended');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermOracleAutonomousDatabaseBackupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermOracleAutonomousDatabaseBackupTimeouts) {
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
      autonomous_database_id: cdktf.stringToTerraform(this._autonomousDatabaseId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataAzurermOracleAutonomousDatabaseBackupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autonomous_database_id: {
        value: cdktf.stringToHclTerraform(this._autonomousDatabaseId),
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
      timeouts: {
        value: dataAzurermOracleAutonomousDatabaseBackupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermOracleAutonomousDatabaseBackupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
