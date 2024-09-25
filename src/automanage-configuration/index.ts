// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomanageConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}
  */
  readonly automationAccountEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}
  */
  readonly bootDiagnosticsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}
  */
  readonly defenderForCloudEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}
  */
  readonly guestConfigurationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#id AutomanageConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#location AutomanageConfiguration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#log_analytics_enabled AutomanageConfiguration#log_analytics_enabled}
  */
  readonly logAnalyticsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#name AutomanageConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}
  */
  readonly statusChangeAlertEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * antimalware block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#antimalware AutomanageConfiguration#antimalware}
  */
  readonly antimalware?: AutomanageConfigurationAntimalware;
  /**
  * azure_security_baseline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#azure_security_baseline AutomanageConfiguration#azure_security_baseline}
  */
  readonly azureSecurityBaseline?: AutomanageConfigurationAzureSecurityBaseline;
  /**
  * backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#backup AutomanageConfiguration#backup}
  */
  readonly backup?: AutomanageConfigurationBackup;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#timeouts AutomanageConfiguration#timeouts}
  */
  readonly timeouts?: AutomanageConfigurationTimeouts;
}
export interface AutomanageConfigurationAntimalwareExclusions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#extensions AutomanageConfiguration#extensions}
  */
  readonly extensions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#paths AutomanageConfiguration#paths}
  */
  readonly paths?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#processes AutomanageConfiguration#processes}
  */
  readonly processes?: string;
}

export function automanageConfigurationAntimalwareExclusionsToTerraform(struct?: AutomanageConfigurationAntimalwareExclusionsOutputReference | AutomanageConfigurationAntimalwareExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extensions: cdktf.stringToTerraform(struct!.extensions),
    paths: cdktf.stringToTerraform(struct!.paths),
    processes: cdktf.stringToTerraform(struct!.processes),
  }
}


export function automanageConfigurationAntimalwareExclusionsToHclTerraform(struct?: AutomanageConfigurationAntimalwareExclusionsOutputReference | AutomanageConfigurationAntimalwareExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extensions: {
      value: cdktf.stringToHclTerraform(struct!.extensions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.stringToHclTerraform(struct!.paths),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    processes: {
      value: cdktf.stringToHclTerraform(struct!.processes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomanageConfigurationAntimalwareExclusionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomanageConfigurationAntimalwareExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._processes !== undefined) {
      hasAnyValues = true;
      internalValueResult.processes = this._processes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomanageConfigurationAntimalwareExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extensions = undefined;
      this._paths = undefined;
      this._processes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extensions = value.extensions;
      this._paths = value.paths;
      this._processes = value.processes;
    }
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions?: string; 
  public get extensions() {
    return this.getStringAttribute('extensions');
  }
  public set extensions(value: string) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string; 
  public get paths() {
    return this.getStringAttribute('paths');
  }
  public set paths(value: string) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // processes - computed: false, optional: true, required: false
  private _processes?: string; 
  public get processes() {
    return this.getStringAttribute('processes');
  }
  public set processes(value: string) {
    this._processes = value;
  }
  public resetProcesses() {
    this._processes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processesInput() {
    return this._processes;
  }
}
export interface AutomanageConfigurationAntimalware {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#real_time_protection_enabled AutomanageConfiguration#real_time_protection_enabled}
  */
  readonly realTimeProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#scheduled_scan_day AutomanageConfiguration#scheduled_scan_day}
  */
  readonly scheduledScanDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#scheduled_scan_enabled AutomanageConfiguration#scheduled_scan_enabled}
  */
  readonly scheduledScanEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#scheduled_scan_time_in_minutes AutomanageConfiguration#scheduled_scan_time_in_minutes}
  */
  readonly scheduledScanTimeInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#scheduled_scan_type AutomanageConfiguration#scheduled_scan_type}
  */
  readonly scheduledScanType?: string;
  /**
  * exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#exclusions AutomanageConfiguration#exclusions}
  */
  readonly exclusions?: AutomanageConfigurationAntimalwareExclusions;
}

export function automanageConfigurationAntimalwareToTerraform(struct?: AutomanageConfigurationAntimalwareOutputReference | AutomanageConfigurationAntimalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    real_time_protection_enabled: cdktf.booleanToTerraform(struct!.realTimeProtectionEnabled),
    scheduled_scan_day: cdktf.numberToTerraform(struct!.scheduledScanDay),
    scheduled_scan_enabled: cdktf.booleanToTerraform(struct!.scheduledScanEnabled),
    scheduled_scan_time_in_minutes: cdktf.numberToTerraform(struct!.scheduledScanTimeInMinutes),
    scheduled_scan_type: cdktf.stringToTerraform(struct!.scheduledScanType),
    exclusions: automanageConfigurationAntimalwareExclusionsToTerraform(struct!.exclusions),
  }
}


export function automanageConfigurationAntimalwareToHclTerraform(struct?: AutomanageConfigurationAntimalwareOutputReference | AutomanageConfigurationAntimalware): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    real_time_protection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.realTimeProtectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduled_scan_day: {
      value: cdktf.numberToHclTerraform(struct!.scheduledScanDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheduled_scan_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.scheduledScanEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scheduled_scan_time_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.scheduledScanTimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheduled_scan_type: {
      value: cdktf.stringToHclTerraform(struct!.scheduledScanType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusions: {
      value: automanageConfigurationAntimalwareExclusionsToHclTerraform(struct!.exclusions),
      isBlock: true,
      type: "list",
      storageClassType: "AutomanageConfigurationAntimalwareExclusionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomanageConfigurationAntimalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomanageConfigurationAntimalware | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realTimeProtectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.realTimeProtectionEnabled = this._realTimeProtectionEnabled;
    }
    if (this._scheduledScanDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledScanDay = this._scheduledScanDay;
    }
    if (this._scheduledScanEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledScanEnabled = this._scheduledScanEnabled;
    }
    if (this._scheduledScanTimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledScanTimeInMinutes = this._scheduledScanTimeInMinutes;
    }
    if (this._scheduledScanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledScanType = this._scheduledScanType;
    }
    if (this._exclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusions = this._exclusions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomanageConfigurationAntimalware | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realTimeProtectionEnabled = undefined;
      this._scheduledScanDay = undefined;
      this._scheduledScanEnabled = undefined;
      this._scheduledScanTimeInMinutes = undefined;
      this._scheduledScanType = undefined;
      this._exclusions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realTimeProtectionEnabled = value.realTimeProtectionEnabled;
      this._scheduledScanDay = value.scheduledScanDay;
      this._scheduledScanEnabled = value.scheduledScanEnabled;
      this._scheduledScanTimeInMinutes = value.scheduledScanTimeInMinutes;
      this._scheduledScanType = value.scheduledScanType;
      this._exclusions.internalValue = value.exclusions;
    }
  }

  // real_time_protection_enabled - computed: false, optional: true, required: false
  private _realTimeProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get realTimeProtectionEnabled() {
    return this.getBooleanAttribute('real_time_protection_enabled');
  }
  public set realTimeProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._realTimeProtectionEnabled = value;
  }
  public resetRealTimeProtectionEnabled() {
    this._realTimeProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realTimeProtectionEnabledInput() {
    return this._realTimeProtectionEnabled;
  }

  // scheduled_scan_day - computed: false, optional: true, required: false
  private _scheduledScanDay?: number; 
  public get scheduledScanDay() {
    return this.getNumberAttribute('scheduled_scan_day');
  }
  public set scheduledScanDay(value: number) {
    this._scheduledScanDay = value;
  }
  public resetScheduledScanDay() {
    this._scheduledScanDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledScanDayInput() {
    return this._scheduledScanDay;
  }

  // scheduled_scan_enabled - computed: false, optional: true, required: false
  private _scheduledScanEnabled?: boolean | cdktf.IResolvable; 
  public get scheduledScanEnabled() {
    return this.getBooleanAttribute('scheduled_scan_enabled');
  }
  public set scheduledScanEnabled(value: boolean | cdktf.IResolvable) {
    this._scheduledScanEnabled = value;
  }
  public resetScheduledScanEnabled() {
    this._scheduledScanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledScanEnabledInput() {
    return this._scheduledScanEnabled;
  }

  // scheduled_scan_time_in_minutes - computed: false, optional: true, required: false
  private _scheduledScanTimeInMinutes?: number; 
  public get scheduledScanTimeInMinutes() {
    return this.getNumberAttribute('scheduled_scan_time_in_minutes');
  }
  public set scheduledScanTimeInMinutes(value: number) {
    this._scheduledScanTimeInMinutes = value;
  }
  public resetScheduledScanTimeInMinutes() {
    this._scheduledScanTimeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledScanTimeInMinutesInput() {
    return this._scheduledScanTimeInMinutes;
  }

  // scheduled_scan_type - computed: false, optional: true, required: false
  private _scheduledScanType?: string; 
  public get scheduledScanType() {
    return this.getStringAttribute('scheduled_scan_type');
  }
  public set scheduledScanType(value: string) {
    this._scheduledScanType = value;
  }
  public resetScheduledScanType() {
    this._scheduledScanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledScanTypeInput() {
    return this._scheduledScanType;
  }

  // exclusions - computed: false, optional: true, required: false
  private _exclusions = new AutomanageConfigurationAntimalwareExclusionsOutputReference(this, "exclusions");
  public get exclusions() {
    return this._exclusions;
  }
  public putExclusions(value: AutomanageConfigurationAntimalwareExclusions) {
    this._exclusions.internalValue = value;
  }
  public resetExclusions() {
    this._exclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionsInput() {
    return this._exclusions.internalValue;
  }
}
export interface AutomanageConfigurationAzureSecurityBaseline {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#assignment_type AutomanageConfiguration#assignment_type}
  */
  readonly assignmentType?: string;
}

export function automanageConfigurationAzureSecurityBaselineToTerraform(struct?: AutomanageConfigurationAzureSecurityBaselineOutputReference | AutomanageConfigurationAzureSecurityBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignment_type: cdktf.stringToTerraform(struct!.assignmentType),
  }
}


export function automanageConfigurationAzureSecurityBaselineToHclTerraform(struct?: AutomanageConfigurationAzureSecurityBaselineOutputReference | AutomanageConfigurationAzureSecurityBaseline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignment_type: {
      value: cdktf.stringToHclTerraform(struct!.assignmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomanageConfigurationAzureSecurityBaselineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomanageConfigurationAzureSecurityBaseline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignmentType = this._assignmentType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomanageConfigurationAzureSecurityBaseline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignmentType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignmentType = value.assignmentType;
    }
  }

  // assignment_type - computed: false, optional: true, required: false
  private _assignmentType?: string; 
  public get assignmentType() {
    return this.getStringAttribute('assignment_type');
  }
  public set assignmentType(value: string) {
    this._assignmentType = value;
  }
  public resetAssignmentType() {
    this._assignmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentTypeInput() {
    return this._assignmentType;
  }
}
export interface AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}
  */
  readonly durationType?: string;
}

export function automanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationToTerraform(struct?: AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference | AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    duration_type: cdktf.stringToTerraform(struct!.durationType),
  }
}


export function automanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationToHclTerraform(struct?: AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference | AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration_type: {
      value: cdktf.stringToHclTerraform(struct!.durationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._durationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationType = this._durationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._durationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._durationType = value.durationType;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // duration_type - computed: false, optional: true, required: false
  private _durationType?: string; 
  public get durationType() {
    return this.getStringAttribute('duration_type');
  }
  public set durationType(value: string) {
    this._durationType = value;
  }
  public resetDurationType() {
    this._durationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationTypeInput() {
    return this._durationType;
  }
}
export interface AutomanageConfigurationBackupRetentionPolicyDailySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}
  */
  readonly retentionTimes?: string[];
  /**
  * retention_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#retention_duration AutomanageConfiguration#retention_duration}
  */
  readonly retentionDuration?: AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration;
}

export function automanageConfigurationBackupRetentionPolicyDailyScheduleToTerraform(struct?: AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference | AutomanageConfigurationBackupRetentionPolicyDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_times: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retentionTimes),
    retention_duration: automanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationToTerraform(struct!.retentionDuration),
  }
}


export function automanageConfigurationBackupRetentionPolicyDailyScheduleToHclTerraform(struct?: AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference | AutomanageConfigurationBackupRetentionPolicyDailySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_times: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retentionTimes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retention_duration: {
      value: automanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationToHclTerraform(struct!.retentionDuration),
      isBlock: true,
      type: "list",
      storageClassType: "AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomanageConfigurationBackupRetentionPolicyDailySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionTimes = this._retentionTimes;
    }
    if (this._retentionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDuration = this._retentionDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomanageConfigurationBackupRetentionPolicyDailySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionTimes = undefined;
      this._retentionDuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionTimes = value.retentionTimes;
      this._retentionDuration.internalValue = value.retentionDuration;
    }
  }

  // retention_times - computed: false, optional: true, required: false
  private _retentionTimes?: string[]; 
  public get retentionTimes() {
    return this.getListAttribute('retention_times');
  }
  public set retentionTimes(value: string[]) {
    this._retentionTimes = value;
  }
  public resetRetentionTimes() {
    this._retentionTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionTimesInput() {
    return this._retentionTimes;
  }

  // retention_duration - computed: false, optional: true, required: false
  private _retentionDuration = new AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDurationOutputReference(this, "retention_duration");
  public get retentionDuration() {
    return this._retentionDuration;
  }
  public putRetentionDuration(value: AutomanageConfigurationBackupRetentionPolicyDailyScheduleRetentionDuration) {
    this._retentionDuration.internalValue = value;
  }
  public resetRetentionDuration() {
    this._retentionDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration.internalValue;
  }
}
export interface AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#count AutomanageConfiguration#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#duration_type AutomanageConfiguration#duration_type}
  */
  readonly durationType?: string;
}

export function automanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationToTerraform(struct?: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference | AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    duration_type: cdktf.stringToTerraform(struct!.durationType),
  }
}


export function automanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationToHclTerraform(struct?: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference | AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration_type: {
      value: cdktf.stringToHclTerraform(struct!.durationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._durationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.durationType = this._durationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._durationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._durationType = value.durationType;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // duration_type - computed: false, optional: true, required: false
  private _durationType?: string; 
  public get durationType() {
    return this.getStringAttribute('duration_type');
  }
  public set durationType(value: string) {
    this._durationType = value;
  }
  public resetDurationType() {
    this._durationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationTypeInput() {
    return this._durationType;
  }
}
export interface AutomanageConfigurationBackupRetentionPolicyWeeklySchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#retention_times AutomanageConfiguration#retention_times}
  */
  readonly retentionTimes?: string[];
  /**
  * retention_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#retention_duration AutomanageConfiguration#retention_duration}
  */
  readonly retentionDuration?: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration;
}

export function automanageConfigurationBackupRetentionPolicyWeeklyScheduleToTerraform(struct?: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference | AutomanageConfigurationBackupRetentionPolicyWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_times: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retentionTimes),
    retention_duration: automanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationToTerraform(struct!.retentionDuration),
  }
}


export function automanageConfigurationBackupRetentionPolicyWeeklyScheduleToHclTerraform(struct?: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference | AutomanageConfigurationBackupRetentionPolicyWeeklySchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_times: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retentionTimes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retention_duration: {
      value: automanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationToHclTerraform(struct!.retentionDuration),
      isBlock: true,
      type: "list",
      storageClassType: "AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomanageConfigurationBackupRetentionPolicyWeeklySchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionTimes = this._retentionTimes;
    }
    if (this._retentionDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDuration = this._retentionDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomanageConfigurationBackupRetentionPolicyWeeklySchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionTimes = undefined;
      this._retentionDuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionTimes = value.retentionTimes;
      this._retentionDuration.internalValue = value.retentionDuration;
    }
  }

  // retention_times - computed: false, optional: true, required: false
  private _retentionTimes?: string[]; 
  public get retentionTimes() {
    return this.getListAttribute('retention_times');
  }
  public set retentionTimes(value: string[]) {
    this._retentionTimes = value;
  }
  public resetRetentionTimes() {
    this._retentionTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionTimesInput() {
    return this._retentionTimes;
  }

  // retention_duration - computed: false, optional: true, required: false
  private _retentionDuration = new AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDurationOutputReference(this, "retention_duration");
  public get retentionDuration() {
    return this._retentionDuration;
  }
  public putRetentionDuration(value: AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleRetentionDuration) {
    this._retentionDuration.internalValue = value;
  }
  public resetRetentionDuration() {
    this._retentionDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration.internalValue;
  }
}
export interface AutomanageConfigurationBackupRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#retention_policy_type AutomanageConfiguration#retention_policy_type}
  */
  readonly retentionPolicyType?: string;
  /**
  * daily_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#daily_schedule AutomanageConfiguration#daily_schedule}
  */
  readonly dailySchedule?: AutomanageConfigurationBackupRetentionPolicyDailySchedule;
  /**
  * weekly_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#weekly_schedule AutomanageConfiguration#weekly_schedule}
  */
  readonly weeklySchedule?: AutomanageConfigurationBackupRetentionPolicyWeeklySchedule;
}

export function automanageConfigurationBackupRetentionPolicyToTerraform(struct?: AutomanageConfigurationBackupRetentionPolicyOutputReference | AutomanageConfigurationBackupRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_policy_type: cdktf.stringToTerraform(struct!.retentionPolicyType),
    daily_schedule: automanageConfigurationBackupRetentionPolicyDailyScheduleToTerraform(struct!.dailySchedule),
    weekly_schedule: automanageConfigurationBackupRetentionPolicyWeeklyScheduleToTerraform(struct!.weeklySchedule),
  }
}


export function automanageConfigurationBackupRetentionPolicyToHclTerraform(struct?: AutomanageConfigurationBackupRetentionPolicyOutputReference | AutomanageConfigurationBackupRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.retentionPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    daily_schedule: {
      value: automanageConfigurationBackupRetentionPolicyDailyScheduleToHclTerraform(struct!.dailySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "AutomanageConfigurationBackupRetentionPolicyDailyScheduleList",
    },
    weekly_schedule: {
      value: automanageConfigurationBackupRetentionPolicyWeeklyScheduleToHclTerraform(struct!.weeklySchedule),
      isBlock: true,
      type: "list",
      storageClassType: "AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomanageConfigurationBackupRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomanageConfigurationBackupRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicyType = this._retentionPolicyType;
    }
    if (this._dailySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailySchedule = this._dailySchedule?.internalValue;
    }
    if (this._weeklySchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklySchedule = this._weeklySchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomanageConfigurationBackupRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retentionPolicyType = undefined;
      this._dailySchedule.internalValue = undefined;
      this._weeklySchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retentionPolicyType = value.retentionPolicyType;
      this._dailySchedule.internalValue = value.dailySchedule;
      this._weeklySchedule.internalValue = value.weeklySchedule;
    }
  }

  // retention_policy_type - computed: false, optional: true, required: false
  private _retentionPolicyType?: string; 
  public get retentionPolicyType() {
    return this.getStringAttribute('retention_policy_type');
  }
  public set retentionPolicyType(value: string) {
    this._retentionPolicyType = value;
  }
  public resetRetentionPolicyType() {
    this._retentionPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyTypeInput() {
    return this._retentionPolicyType;
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule = new AutomanageConfigurationBackupRetentionPolicyDailyScheduleOutputReference(this, "daily_schedule");
  public get dailySchedule() {
    return this._dailySchedule;
  }
  public putDailySchedule(value: AutomanageConfigurationBackupRetentionPolicyDailySchedule) {
    this._dailySchedule.internalValue = value;
  }
  public resetDailySchedule() {
    this._dailySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule.internalValue;
  }

  // weekly_schedule - computed: false, optional: true, required: false
  private _weeklySchedule = new AutomanageConfigurationBackupRetentionPolicyWeeklyScheduleOutputReference(this, "weekly_schedule");
  public get weeklySchedule() {
    return this._weeklySchedule;
  }
  public putWeeklySchedule(value: AutomanageConfigurationBackupRetentionPolicyWeeklySchedule) {
    this._weeklySchedule.internalValue = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule.internalValue;
  }
}
export interface AutomanageConfigurationBackupSchedulePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#schedule_policy_type AutomanageConfiguration#schedule_policy_type}
  */
  readonly schedulePolicyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#schedule_run_days AutomanageConfiguration#schedule_run_days}
  */
  readonly scheduleRunDays?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#schedule_run_frequency AutomanageConfiguration#schedule_run_frequency}
  */
  readonly scheduleRunFrequency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#schedule_run_times AutomanageConfiguration#schedule_run_times}
  */
  readonly scheduleRunTimes?: string[];
}

export function automanageConfigurationBackupSchedulePolicyToTerraform(struct?: AutomanageConfigurationBackupSchedulePolicyOutputReference | AutomanageConfigurationBackupSchedulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule_policy_type: cdktf.stringToTerraform(struct!.schedulePolicyType),
    schedule_run_days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scheduleRunDays),
    schedule_run_frequency: cdktf.stringToTerraform(struct!.scheduleRunFrequency),
    schedule_run_times: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scheduleRunTimes),
  }
}


export function automanageConfigurationBackupSchedulePolicyToHclTerraform(struct?: AutomanageConfigurationBackupSchedulePolicyOutputReference | AutomanageConfigurationBackupSchedulePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.schedulePolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_run_days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scheduleRunDays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule_run_frequency: {
      value: cdktf.stringToHclTerraform(struct!.scheduleRunFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_run_times: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scheduleRunTimes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomanageConfigurationBackupSchedulePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomanageConfigurationBackupSchedulePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedulePolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulePolicyType = this._schedulePolicyType;
    }
    if (this._scheduleRunDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleRunDays = this._scheduleRunDays;
    }
    if (this._scheduleRunFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleRunFrequency = this._scheduleRunFrequency;
    }
    if (this._scheduleRunTimes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleRunTimes = this._scheduleRunTimes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomanageConfigurationBackupSchedulePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schedulePolicyType = undefined;
      this._scheduleRunDays = undefined;
      this._scheduleRunFrequency = undefined;
      this._scheduleRunTimes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schedulePolicyType = value.schedulePolicyType;
      this._scheduleRunDays = value.scheduleRunDays;
      this._scheduleRunFrequency = value.scheduleRunFrequency;
      this._scheduleRunTimes = value.scheduleRunTimes;
    }
  }

  // schedule_policy_type - computed: false, optional: true, required: false
  private _schedulePolicyType?: string; 
  public get schedulePolicyType() {
    return this.getStringAttribute('schedule_policy_type');
  }
  public set schedulePolicyType(value: string) {
    this._schedulePolicyType = value;
  }
  public resetSchedulePolicyType() {
    this._schedulePolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulePolicyTypeInput() {
    return this._schedulePolicyType;
  }

  // schedule_run_days - computed: false, optional: true, required: false
  private _scheduleRunDays?: string[]; 
  public get scheduleRunDays() {
    return this.getListAttribute('schedule_run_days');
  }
  public set scheduleRunDays(value: string[]) {
    this._scheduleRunDays = value;
  }
  public resetScheduleRunDays() {
    this._scheduleRunDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRunDaysInput() {
    return this._scheduleRunDays;
  }

  // schedule_run_frequency - computed: false, optional: true, required: false
  private _scheduleRunFrequency?: string; 
  public get scheduleRunFrequency() {
    return this.getStringAttribute('schedule_run_frequency');
  }
  public set scheduleRunFrequency(value: string) {
    this._scheduleRunFrequency = value;
  }
  public resetScheduleRunFrequency() {
    this._scheduleRunFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRunFrequencyInput() {
    return this._scheduleRunFrequency;
  }

  // schedule_run_times - computed: false, optional: true, required: false
  private _scheduleRunTimes?: string[]; 
  public get scheduleRunTimes() {
    return this.getListAttribute('schedule_run_times');
  }
  public set scheduleRunTimes(value: string[]) {
    this._scheduleRunTimes = value;
  }
  public resetScheduleRunTimes() {
    this._scheduleRunTimes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRunTimesInput() {
    return this._scheduleRunTimes;
  }
}
export interface AutomanageConfigurationBackup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#instant_rp_retention_range_in_days AutomanageConfiguration#instant_rp_retention_range_in_days}
  */
  readonly instantRpRetentionRangeInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#policy_name AutomanageConfiguration#policy_name}
  */
  readonly policyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#time_zone AutomanageConfiguration#time_zone}
  */
  readonly timeZone?: string;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#retention_policy AutomanageConfiguration#retention_policy}
  */
  readonly retentionPolicy?: AutomanageConfigurationBackupRetentionPolicy;
  /**
  * schedule_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#schedule_policy AutomanageConfiguration#schedule_policy}
  */
  readonly schedulePolicy?: AutomanageConfigurationBackupSchedulePolicy;
}

export function automanageConfigurationBackupToTerraform(struct?: AutomanageConfigurationBackupOutputReference | AutomanageConfigurationBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instant_rp_retention_range_in_days: cdktf.numberToTerraform(struct!.instantRpRetentionRangeInDays),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    retention_policy: automanageConfigurationBackupRetentionPolicyToTerraform(struct!.retentionPolicy),
    schedule_policy: automanageConfigurationBackupSchedulePolicyToTerraform(struct!.schedulePolicy),
  }
}


export function automanageConfigurationBackupToHclTerraform(struct?: AutomanageConfigurationBackupOutputReference | AutomanageConfigurationBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instant_rp_retention_range_in_days: {
      value: cdktf.numberToHclTerraform(struct!.instantRpRetentionRangeInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_policy: {
      value: automanageConfigurationBackupRetentionPolicyToHclTerraform(struct!.retentionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "AutomanageConfigurationBackupRetentionPolicyList",
    },
    schedule_policy: {
      value: automanageConfigurationBackupSchedulePolicyToHclTerraform(struct!.schedulePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "AutomanageConfigurationBackupSchedulePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomanageConfigurationBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomanageConfigurationBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instantRpRetentionRangeInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.instantRpRetentionRangeInDays = this._instantRpRetentionRangeInDays;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._retentionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPolicy = this._retentionPolicy?.internalValue;
    }
    if (this._schedulePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulePolicy = this._schedulePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomanageConfigurationBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instantRpRetentionRangeInDays = undefined;
      this._policyName = undefined;
      this._timeZone = undefined;
      this._retentionPolicy.internalValue = undefined;
      this._schedulePolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instantRpRetentionRangeInDays = value.instantRpRetentionRangeInDays;
      this._policyName = value.policyName;
      this._timeZone = value.timeZone;
      this._retentionPolicy.internalValue = value.retentionPolicy;
      this._schedulePolicy.internalValue = value.schedulePolicy;
    }
  }

  // instant_rp_retention_range_in_days - computed: false, optional: true, required: false
  private _instantRpRetentionRangeInDays?: number; 
  public get instantRpRetentionRangeInDays() {
    return this.getNumberAttribute('instant_rp_retention_range_in_days');
  }
  public set instantRpRetentionRangeInDays(value: number) {
    this._instantRpRetentionRangeInDays = value;
  }
  public resetInstantRpRetentionRangeInDays() {
    this._instantRpRetentionRangeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantRpRetentionRangeInDaysInput() {
    return this._instantRpRetentionRangeInDays;
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new AutomanageConfigurationBackupRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: AutomanageConfigurationBackupRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // schedule_policy - computed: false, optional: true, required: false
  private _schedulePolicy = new AutomanageConfigurationBackupSchedulePolicyOutputReference(this, "schedule_policy");
  public get schedulePolicy() {
    return this._schedulePolicy;
  }
  public putSchedulePolicy(value: AutomanageConfigurationBackupSchedulePolicy) {
    this._schedulePolicy.internalValue = value;
  }
  public resetSchedulePolicy() {
    this._schedulePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulePolicyInput() {
    return this._schedulePolicy.internalValue;
  }
}
export interface AutomanageConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#create AutomanageConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#delete AutomanageConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#read AutomanageConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#update AutomanageConfiguration#update}
  */
  readonly update?: string;
}

export function automanageConfigurationTimeoutsToTerraform(struct?: AutomanageConfigurationTimeouts | cdktf.IResolvable): any {
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


export function automanageConfigurationTimeoutsToHclTerraform(struct?: AutomanageConfigurationTimeouts | cdktf.IResolvable): any {
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

export class AutomanageConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomanageConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AutomanageConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration azurerm_automanage_configuration}
*/
export class AutomanageConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_automanage_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomanageConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomanageConfiguration to import
  * @param importFromId The id of the existing AutomanageConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomanageConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_automanage_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automanage_configuration azurerm_automanage_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomanageConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AutomanageConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automanage_configuration',
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
    this._automationAccountEnabled = config.automationAccountEnabled;
    this._bootDiagnosticsEnabled = config.bootDiagnosticsEnabled;
    this._defenderForCloudEnabled = config.defenderForCloudEnabled;
    this._guestConfigurationEnabled = config.guestConfigurationEnabled;
    this._id = config.id;
    this._location = config.location;
    this._logAnalyticsEnabled = config.logAnalyticsEnabled;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._statusChangeAlertEnabled = config.statusChangeAlertEnabled;
    this._tags = config.tags;
    this._antimalware.internalValue = config.antimalware;
    this._azureSecurityBaseline.internalValue = config.azureSecurityBaseline;
    this._backup.internalValue = config.backup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_enabled - computed: false, optional: true, required: false
  private _automationAccountEnabled?: boolean | cdktf.IResolvable; 
  public get automationAccountEnabled() {
    return this.getBooleanAttribute('automation_account_enabled');
  }
  public set automationAccountEnabled(value: boolean | cdktf.IResolvable) {
    this._automationAccountEnabled = value;
  }
  public resetAutomationAccountEnabled() {
    this._automationAccountEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountEnabledInput() {
    return this._automationAccountEnabled;
  }

  // boot_diagnostics_enabled - computed: false, optional: true, required: false
  private _bootDiagnosticsEnabled?: boolean | cdktf.IResolvable; 
  public get bootDiagnosticsEnabled() {
    return this.getBooleanAttribute('boot_diagnostics_enabled');
  }
  public set bootDiagnosticsEnabled(value: boolean | cdktf.IResolvable) {
    this._bootDiagnosticsEnabled = value;
  }
  public resetBootDiagnosticsEnabled() {
    this._bootDiagnosticsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiagnosticsEnabledInput() {
    return this._bootDiagnosticsEnabled;
  }

  // defender_for_cloud_enabled - computed: false, optional: true, required: false
  private _defenderForCloudEnabled?: boolean | cdktf.IResolvable; 
  public get defenderForCloudEnabled() {
    return this.getBooleanAttribute('defender_for_cloud_enabled');
  }
  public set defenderForCloudEnabled(value: boolean | cdktf.IResolvable) {
    this._defenderForCloudEnabled = value;
  }
  public resetDefenderForCloudEnabled() {
    this._defenderForCloudEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defenderForCloudEnabledInput() {
    return this._defenderForCloudEnabled;
  }

  // guest_configuration_enabled - computed: false, optional: true, required: false
  private _guestConfigurationEnabled?: boolean | cdktf.IResolvable; 
  public get guestConfigurationEnabled() {
    return this.getBooleanAttribute('guest_configuration_enabled');
  }
  public set guestConfigurationEnabled(value: boolean | cdktf.IResolvable) {
    this._guestConfigurationEnabled = value;
  }
  public resetGuestConfigurationEnabled() {
    this._guestConfigurationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestConfigurationEnabledInput() {
    return this._guestConfigurationEnabled;
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

  // log_analytics_enabled - computed: false, optional: true, required: false
  private _logAnalyticsEnabled?: boolean | cdktf.IResolvable; 
  public get logAnalyticsEnabled() {
    return this.getBooleanAttribute('log_analytics_enabled');
  }
  public set logAnalyticsEnabled(value: boolean | cdktf.IResolvable) {
    this._logAnalyticsEnabled = value;
  }
  public resetLogAnalyticsEnabled() {
    this._logAnalyticsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsEnabledInput() {
    return this._logAnalyticsEnabled;
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

  // status_change_alert_enabled - computed: false, optional: true, required: false
  private _statusChangeAlertEnabled?: boolean | cdktf.IResolvable; 
  public get statusChangeAlertEnabled() {
    return this.getBooleanAttribute('status_change_alert_enabled');
  }
  public set statusChangeAlertEnabled(value: boolean | cdktf.IResolvable) {
    this._statusChangeAlertEnabled = value;
  }
  public resetStatusChangeAlertEnabled() {
    this._statusChangeAlertEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusChangeAlertEnabledInput() {
    return this._statusChangeAlertEnabled;
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

  // antimalware - computed: false, optional: true, required: false
  private _antimalware = new AutomanageConfigurationAntimalwareOutputReference(this, "antimalware");
  public get antimalware() {
    return this._antimalware;
  }
  public putAntimalware(value: AutomanageConfigurationAntimalware) {
    this._antimalware.internalValue = value;
  }
  public resetAntimalware() {
    this._antimalware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antimalwareInput() {
    return this._antimalware.internalValue;
  }

  // azure_security_baseline - computed: false, optional: true, required: false
  private _azureSecurityBaseline = new AutomanageConfigurationAzureSecurityBaselineOutputReference(this, "azure_security_baseline");
  public get azureSecurityBaseline() {
    return this._azureSecurityBaseline;
  }
  public putAzureSecurityBaseline(value: AutomanageConfigurationAzureSecurityBaseline) {
    this._azureSecurityBaseline.internalValue = value;
  }
  public resetAzureSecurityBaseline() {
    this._azureSecurityBaseline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSecurityBaselineInput() {
    return this._azureSecurityBaseline.internalValue;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new AutomanageConfigurationBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: AutomanageConfigurationBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AutomanageConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AutomanageConfigurationTimeouts) {
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
      automation_account_enabled: cdktf.booleanToTerraform(this._automationAccountEnabled),
      boot_diagnostics_enabled: cdktf.booleanToTerraform(this._bootDiagnosticsEnabled),
      defender_for_cloud_enabled: cdktf.booleanToTerraform(this._defenderForCloudEnabled),
      guest_configuration_enabled: cdktf.booleanToTerraform(this._guestConfigurationEnabled),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      log_analytics_enabled: cdktf.booleanToTerraform(this._logAnalyticsEnabled),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      status_change_alert_enabled: cdktf.booleanToTerraform(this._statusChangeAlertEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      antimalware: automanageConfigurationAntimalwareToTerraform(this._antimalware.internalValue),
      azure_security_baseline: automanageConfigurationAzureSecurityBaselineToTerraform(this._azureSecurityBaseline.internalValue),
      backup: automanageConfigurationBackupToTerraform(this._backup.internalValue),
      timeouts: automanageConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automation_account_enabled: {
        value: cdktf.booleanToHclTerraform(this._automationAccountEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      boot_diagnostics_enabled: {
        value: cdktf.booleanToHclTerraform(this._bootDiagnosticsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      defender_for_cloud_enabled: {
        value: cdktf.booleanToHclTerraform(this._defenderForCloudEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_configuration_enabled: {
        value: cdktf.booleanToHclTerraform(this._guestConfigurationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      log_analytics_enabled: {
        value: cdktf.booleanToHclTerraform(this._logAnalyticsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      status_change_alert_enabled: {
        value: cdktf.booleanToHclTerraform(this._statusChangeAlertEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      antimalware: {
        value: automanageConfigurationAntimalwareToHclTerraform(this._antimalware.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomanageConfigurationAntimalwareList",
      },
      azure_security_baseline: {
        value: automanageConfigurationAzureSecurityBaselineToHclTerraform(this._azureSecurityBaseline.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomanageConfigurationAzureSecurityBaselineList",
      },
      backup: {
        value: automanageConfigurationBackupToHclTerraform(this._backup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomanageConfigurationBackupList",
      },
      timeouts: {
        value: automanageConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomanageConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
