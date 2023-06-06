// https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomanageConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#automation_account_enabled AutomanageConfiguration#automation_account_enabled}
  */
  readonly automationAccountEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#boot_diagnostics_enabled AutomanageConfiguration#boot_diagnostics_enabled}
  */
  readonly bootDiagnosticsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#defender_for_cloud_enabled AutomanageConfiguration#defender_for_cloud_enabled}
  */
  readonly defenderForCloudEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#guest_configuration_enabled AutomanageConfiguration#guest_configuration_enabled}
  */
  readonly guestConfigurationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#id AutomanageConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#location AutomanageConfiguration#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#name AutomanageConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#resource_group_name AutomanageConfiguration#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#status_change_alert_enabled AutomanageConfiguration#status_change_alert_enabled}
  */
  readonly statusChangeAlertEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#tags AutomanageConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * antimalware block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#antimalware AutomanageConfiguration#antimalware}
  */
  readonly antimalware?: AutomanageConfigurationAntimalware;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#timeouts AutomanageConfiguration#timeouts}
  */
  readonly timeouts?: AutomanageConfigurationTimeouts;
}
export interface AutomanageConfigurationAntimalwareExclusions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#extensions AutomanageConfiguration#extensions}
  */
  readonly extensions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#paths AutomanageConfiguration#paths}
  */
  readonly paths?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#processes AutomanageConfiguration#processes}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#real_time_protection_enabled AutomanageConfiguration#real_time_protection_enabled}
  */
  readonly realTimeProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#scheduled_scan_day AutomanageConfiguration#scheduled_scan_day}
  */
  readonly scheduledScanDay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#scheduled_scan_enabled AutomanageConfiguration#scheduled_scan_enabled}
  */
  readonly scheduledScanEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#scheduled_scan_time_in_minutes AutomanageConfiguration#scheduled_scan_time_in_minutes}
  */
  readonly scheduledScanTimeInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#scheduled_scan_type AutomanageConfiguration#scheduled_scan_type}
  */
  readonly scheduledScanType?: string;
  /**
  * exclusions block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#exclusions AutomanageConfiguration#exclusions}
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
export interface AutomanageConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#create AutomanageConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#delete AutomanageConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#read AutomanageConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration#update AutomanageConfiguration#update}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration azurerm_automanage_configuration}
*/
export class AutomanageConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_automanage_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/automanage_configuration azurerm_automanage_configuration} Resource
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
        providerVersion: '3.59.0',
        providerVersionConstraint: '~> 3.10'
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
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._statusChangeAlertEnabled = config.statusChangeAlertEnabled;
    this._tags = config.tags;
    this._antimalware.internalValue = config.antimalware;
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      status_change_alert_enabled: cdktf.booleanToTerraform(this._statusChangeAlertEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      antimalware: automanageConfigurationAntimalwareToTerraform(this._antimalware.internalValue),
      timeouts: automanageConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
