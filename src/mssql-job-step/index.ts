/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MssqlJobStepConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#id MssqlJobStep#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#initial_retry_interval_seconds MssqlJobStep#initial_retry_interval_seconds}
  */
  readonly initialRetryIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}
  */
  readonly jobCredentialId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#job_id MssqlJobStep#job_id}
  */
  readonly jobId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#job_step_index MssqlJobStep#job_step_index}
  */
  readonly jobStepIndex: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#job_target_group_id MssqlJobStep#job_target_group_id}
  */
  readonly jobTargetGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#maximum_retry_interval_seconds MssqlJobStep#maximum_retry_interval_seconds}
  */
  readonly maximumRetryIntervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#name MssqlJobStep#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#retry_attempts MssqlJobStep#retry_attempts}
  */
  readonly retryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#retry_interval_backoff_multiplier MssqlJobStep#retry_interval_backoff_multiplier}
  */
  readonly retryIntervalBackoffMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#sql_script MssqlJobStep#sql_script}
  */
  readonly sqlScript: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#timeout_seconds MssqlJobStep#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * output_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#output_target MssqlJobStep#output_target}
  */
  readonly outputTarget?: MssqlJobStepOutputTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#timeouts MssqlJobStep#timeouts}
  */
  readonly timeouts?: MssqlJobStepTimeouts;
}
export interface MssqlJobStepOutputTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#job_credential_id MssqlJobStep#job_credential_id}
  */
  readonly jobCredentialId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#mssql_database_id MssqlJobStep#mssql_database_id}
  */
  readonly mssqlDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#schema_name MssqlJobStep#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#table_name MssqlJobStep#table_name}
  */
  readonly tableName: string;
}

export function mssqlJobStepOutputTargetToTerraform(struct?: MssqlJobStepOutputTargetOutputReference | MssqlJobStepOutputTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_credential_id: cdktf.stringToTerraform(struct!.jobCredentialId),
    mssql_database_id: cdktf.stringToTerraform(struct!.mssqlDatabaseId),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function mssqlJobStepOutputTargetToHclTerraform(struct?: MssqlJobStepOutputTargetOutputReference | MssqlJobStepOutputTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.jobCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mssql_database_id: {
      value: cdktf.stringToHclTerraform(struct!.mssqlDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MssqlJobStepOutputTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MssqlJobStepOutputTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCredentialId = this._jobCredentialId;
    }
    if (this._mssqlDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssqlDatabaseId = this._mssqlDatabaseId;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MssqlJobStepOutputTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobCredentialId = undefined;
      this._mssqlDatabaseId = undefined;
      this._schemaName = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobCredentialId = value.jobCredentialId;
      this._mssqlDatabaseId = value.mssqlDatabaseId;
      this._schemaName = value.schemaName;
      this._tableName = value.tableName;
    }
  }

  // job_credential_id - computed: false, optional: false, required: true
  private _jobCredentialId?: string; 
  public get jobCredentialId() {
    return this.getStringAttribute('job_credential_id');
  }
  public set jobCredentialId(value: string) {
    this._jobCredentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCredentialIdInput() {
    return this._jobCredentialId;
  }

  // mssql_database_id - computed: false, optional: false, required: true
  private _mssqlDatabaseId?: string; 
  public get mssqlDatabaseId() {
    return this.getStringAttribute('mssql_database_id');
  }
  public set mssqlDatabaseId(value: string) {
    this._mssqlDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlDatabaseIdInput() {
    return this._mssqlDatabaseId;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface MssqlJobStepTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#create MssqlJobStep#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#delete MssqlJobStep#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#read MssqlJobStep#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#update MssqlJobStep#update}
  */
  readonly update?: string;
}

export function mssqlJobStepTimeoutsToTerraform(struct?: MssqlJobStepTimeouts | cdktf.IResolvable): any {
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


export function mssqlJobStepTimeoutsToHclTerraform(struct?: MssqlJobStepTimeouts | cdktf.IResolvable): any {
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

export class MssqlJobStepTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MssqlJobStepTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MssqlJobStepTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step azurerm_mssql_job_step}
*/
export class MssqlJobStep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_mssql_job_step";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MssqlJobStep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MssqlJobStep to import
  * @param importFromId The id of the existing MssqlJobStep that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MssqlJobStep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_mssql_job_step", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/mssql_job_step azurerm_mssql_job_step} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MssqlJobStepConfig
  */
  public constructor(scope: Construct, id: string, config: MssqlJobStepConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_mssql_job_step',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.31.0',
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
    this._initialRetryIntervalSeconds = config.initialRetryIntervalSeconds;
    this._jobCredentialId = config.jobCredentialId;
    this._jobId = config.jobId;
    this._jobStepIndex = config.jobStepIndex;
    this._jobTargetGroupId = config.jobTargetGroupId;
    this._maximumRetryIntervalSeconds = config.maximumRetryIntervalSeconds;
    this._name = config.name;
    this._retryAttempts = config.retryAttempts;
    this._retryIntervalBackoffMultiplier = config.retryIntervalBackoffMultiplier;
    this._sqlScript = config.sqlScript;
    this._timeoutSeconds = config.timeoutSeconds;
    this._outputTarget.internalValue = config.outputTarget;
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

  // initial_retry_interval_seconds - computed: false, optional: true, required: false
  private _initialRetryIntervalSeconds?: number; 
  public get initialRetryIntervalSeconds() {
    return this.getNumberAttribute('initial_retry_interval_seconds');
  }
  public set initialRetryIntervalSeconds(value: number) {
    this._initialRetryIntervalSeconds = value;
  }
  public resetInitialRetryIntervalSeconds() {
    this._initialRetryIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialRetryIntervalSecondsInput() {
    return this._initialRetryIntervalSeconds;
  }

  // job_credential_id - computed: false, optional: false, required: true
  private _jobCredentialId?: string; 
  public get jobCredentialId() {
    return this.getStringAttribute('job_credential_id');
  }
  public set jobCredentialId(value: string) {
    this._jobCredentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCredentialIdInput() {
    return this._jobCredentialId;
  }

  // job_id - computed: false, optional: false, required: true
  private _jobId?: string; 
  public get jobId() {
    return this.getStringAttribute('job_id');
  }
  public set jobId(value: string) {
    this._jobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobIdInput() {
    return this._jobId;
  }

  // job_step_index - computed: false, optional: false, required: true
  private _jobStepIndex?: number; 
  public get jobStepIndex() {
    return this.getNumberAttribute('job_step_index');
  }
  public set jobStepIndex(value: number) {
    this._jobStepIndex = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStepIndexInput() {
    return this._jobStepIndex;
  }

  // job_target_group_id - computed: false, optional: false, required: true
  private _jobTargetGroupId?: string; 
  public get jobTargetGroupId() {
    return this.getStringAttribute('job_target_group_id');
  }
  public set jobTargetGroupId(value: string) {
    this._jobTargetGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTargetGroupIdInput() {
    return this._jobTargetGroupId;
  }

  // maximum_retry_interval_seconds - computed: false, optional: true, required: false
  private _maximumRetryIntervalSeconds?: number; 
  public get maximumRetryIntervalSeconds() {
    return this.getNumberAttribute('maximum_retry_interval_seconds');
  }
  public set maximumRetryIntervalSeconds(value: number) {
    this._maximumRetryIntervalSeconds = value;
  }
  public resetMaximumRetryIntervalSeconds() {
    this._maximumRetryIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryIntervalSecondsInput() {
    return this._maximumRetryIntervalSeconds;
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

  // retry_attempts - computed: false, optional: true, required: false
  private _retryAttempts?: number; 
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }
  public set retryAttempts(value: number) {
    this._retryAttempts = value;
  }
  public resetRetryAttempts() {
    this._retryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAttemptsInput() {
    return this._retryAttempts;
  }

  // retry_interval_backoff_multiplier - computed: false, optional: true, required: false
  private _retryIntervalBackoffMultiplier?: number; 
  public get retryIntervalBackoffMultiplier() {
    return this.getNumberAttribute('retry_interval_backoff_multiplier');
  }
  public set retryIntervalBackoffMultiplier(value: number) {
    this._retryIntervalBackoffMultiplier = value;
  }
  public resetRetryIntervalBackoffMultiplier() {
    this._retryIntervalBackoffMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalBackoffMultiplierInput() {
    return this._retryIntervalBackoffMultiplier;
  }

  // sql_script - computed: false, optional: false, required: true
  private _sqlScript?: string; 
  public get sqlScript() {
    return this.getStringAttribute('sql_script');
  }
  public set sqlScript(value: string) {
    this._sqlScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlScriptInput() {
    return this._sqlScript;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // output_target - computed: false, optional: true, required: false
  private _outputTarget = new MssqlJobStepOutputTargetOutputReference(this, "output_target");
  public get outputTarget() {
    return this._outputTarget;
  }
  public putOutputTarget(value: MssqlJobStepOutputTarget) {
    this._outputTarget.internalValue = value;
  }
  public resetOutputTarget() {
    this._outputTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTargetInput() {
    return this._outputTarget.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MssqlJobStepTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MssqlJobStepTimeouts) {
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
      initial_retry_interval_seconds: cdktf.numberToTerraform(this._initialRetryIntervalSeconds),
      job_credential_id: cdktf.stringToTerraform(this._jobCredentialId),
      job_id: cdktf.stringToTerraform(this._jobId),
      job_step_index: cdktf.numberToTerraform(this._jobStepIndex),
      job_target_group_id: cdktf.stringToTerraform(this._jobTargetGroupId),
      maximum_retry_interval_seconds: cdktf.numberToTerraform(this._maximumRetryIntervalSeconds),
      name: cdktf.stringToTerraform(this._name),
      retry_attempts: cdktf.numberToTerraform(this._retryAttempts),
      retry_interval_backoff_multiplier: cdktf.numberToTerraform(this._retryIntervalBackoffMultiplier),
      sql_script: cdktf.stringToTerraform(this._sqlScript),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
      output_target: mssqlJobStepOutputTargetToTerraform(this._outputTarget.internalValue),
      timeouts: mssqlJobStepTimeoutsToTerraform(this._timeouts.internalValue),
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
      initial_retry_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._initialRetryIntervalSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      job_credential_id: {
        value: cdktf.stringToHclTerraform(this._jobCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_id: {
        value: cdktf.stringToHclTerraform(this._jobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_step_index: {
        value: cdktf.numberToHclTerraform(this._jobStepIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      job_target_group_id: {
        value: cdktf.stringToHclTerraform(this._jobTargetGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_retry_interval_seconds: {
        value: cdktf.numberToHclTerraform(this._maximumRetryIntervalSeconds),
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
      retry_attempts: {
        value: cdktf.numberToHclTerraform(this._retryAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_interval_backoff_multiplier: {
        value: cdktf.numberToHclTerraform(this._retryIntervalBackoffMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sql_script: {
        value: cdktf.stringToHclTerraform(this._sqlScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      output_target: {
        value: mssqlJobStepOutputTargetToHclTerraform(this._outputTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MssqlJobStepOutputTargetList",
      },
      timeouts: {
        value: mssqlJobStepTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MssqlJobStepTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
