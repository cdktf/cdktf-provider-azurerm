// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationSoftwareUpdateConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#automation_account_id AutomationSoftwareUpdateConfiguration#automation_account_id}
  */
  readonly automationAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#duration AutomationSoftwareUpdateConfiguration#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#id AutomationSoftwareUpdateConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#name AutomationSoftwareUpdateConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#non_azure_computer_names AutomationSoftwareUpdateConfiguration#non_azure_computer_names}
  */
  readonly nonAzureComputerNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#virtual_machine_ids AutomationSoftwareUpdateConfiguration#virtual_machine_ids}
  */
  readonly virtualMachineIds?: string[];
  /**
  * linux block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#linux AutomationSoftwareUpdateConfiguration#linux}
  */
  readonly linux?: AutomationSoftwareUpdateConfigurationLinux;
  /**
  * post_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#post_task AutomationSoftwareUpdateConfiguration#post_task}
  */
  readonly postTask?: AutomationSoftwareUpdateConfigurationPostTask;
  /**
  * pre_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#pre_task AutomationSoftwareUpdateConfiguration#pre_task}
  */
  readonly preTask?: AutomationSoftwareUpdateConfigurationPreTask;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#schedule AutomationSoftwareUpdateConfiguration#schedule}
  */
  readonly schedule: AutomationSoftwareUpdateConfigurationSchedule;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#target AutomationSoftwareUpdateConfiguration#target}
  */
  readonly target?: AutomationSoftwareUpdateConfigurationTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#timeouts AutomationSoftwareUpdateConfiguration#timeouts}
  */
  readonly timeouts?: AutomationSoftwareUpdateConfigurationTimeouts;
  /**
  * windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#windows AutomationSoftwareUpdateConfiguration#windows}
  */
  readonly windows?: AutomationSoftwareUpdateConfigurationWindows;
}
export interface AutomationSoftwareUpdateConfigurationLinux {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#classifications_included AutomationSoftwareUpdateConfiguration#classifications_included}
  */
  readonly classificationsIncluded: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#excluded_packages AutomationSoftwareUpdateConfiguration#excluded_packages}
  */
  readonly excludedPackages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#included_packages AutomationSoftwareUpdateConfiguration#included_packages}
  */
  readonly includedPackages?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#reboot AutomationSoftwareUpdateConfiguration#reboot}
  */
  readonly reboot?: string;
}

export function automationSoftwareUpdateConfigurationLinuxToTerraform(struct?: AutomationSoftwareUpdateConfigurationLinuxOutputReference | AutomationSoftwareUpdateConfigurationLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classifications_included: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classificationsIncluded),
    excluded_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPackages),
    included_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPackages),
    reboot: cdktf.stringToTerraform(struct!.reboot),
  }
}


export function automationSoftwareUpdateConfigurationLinuxToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationLinuxOutputReference | AutomationSoftwareUpdateConfigurationLinux): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classifications_included: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classificationsIncluded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedPackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reboot: {
      value: cdktf.stringToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSoftwareUpdateConfigurationLinuxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationLinux | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classificationsIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationsIncluded = this._classificationsIncluded;
    }
    if (this._excludedPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPackages = this._excludedPackages;
    }
    if (this._includedPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPackages = this._includedPackages;
    }
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSoftwareUpdateConfigurationLinux | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classificationsIncluded = undefined;
      this._excludedPackages = undefined;
      this._includedPackages = undefined;
      this._reboot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classificationsIncluded = value.classificationsIncluded;
      this._excludedPackages = value.excludedPackages;
      this._includedPackages = value.includedPackages;
      this._reboot = value.reboot;
    }
  }

  // classifications_included - computed: false, optional: false, required: true
  private _classificationsIncluded?: string[]; 
  public get classificationsIncluded() {
    return this.getListAttribute('classifications_included');
  }
  public set classificationsIncluded(value: string[]) {
    this._classificationsIncluded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsIncludedInput() {
    return this._classificationsIncluded;
  }

  // excluded_packages - computed: false, optional: true, required: false
  private _excludedPackages?: string[]; 
  public get excludedPackages() {
    return this.getListAttribute('excluded_packages');
  }
  public set excludedPackages(value: string[]) {
    this._excludedPackages = value;
  }
  public resetExcludedPackages() {
    this._excludedPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPackagesInput() {
    return this._excludedPackages;
  }

  // included_packages - computed: false, optional: true, required: false
  private _includedPackages?: string[]; 
  public get includedPackages() {
    return this.getListAttribute('included_packages');
  }
  public set includedPackages(value: string[]) {
    this._includedPackages = value;
  }
  public resetIncludedPackages() {
    this._includedPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPackagesInput() {
    return this._includedPackages;
  }

  // reboot - computed: false, optional: true, required: false
  private _reboot?: string; 
  public get reboot() {
    return this.getStringAttribute('reboot');
  }
  public set reboot(value: string) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }
}
export interface AutomationSoftwareUpdateConfigurationPostTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#parameters AutomationSoftwareUpdateConfiguration#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#source AutomationSoftwareUpdateConfiguration#source}
  */
  readonly source?: string;
}

export function automationSoftwareUpdateConfigurationPostTaskToTerraform(struct?: AutomationSoftwareUpdateConfigurationPostTaskOutputReference | AutomationSoftwareUpdateConfigurationPostTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function automationSoftwareUpdateConfigurationPostTaskToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationPostTaskOutputReference | AutomationSoftwareUpdateConfigurationPostTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSoftwareUpdateConfigurationPostTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationPostTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSoftwareUpdateConfigurationPostTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._source = value.source;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface AutomationSoftwareUpdateConfigurationPreTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#parameters AutomationSoftwareUpdateConfiguration#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#source AutomationSoftwareUpdateConfiguration#source}
  */
  readonly source?: string;
}

export function automationSoftwareUpdateConfigurationPreTaskToTerraform(struct?: AutomationSoftwareUpdateConfigurationPreTaskOutputReference | AutomationSoftwareUpdateConfigurationPreTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function automationSoftwareUpdateConfigurationPreTaskToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationPreTaskOutputReference | AutomationSoftwareUpdateConfigurationPreTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSoftwareUpdateConfigurationPreTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationPreTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSoftwareUpdateConfigurationPreTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._source = value.source;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#day AutomationSoftwareUpdateConfiguration#day}
  */
  readonly day: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#occurrence AutomationSoftwareUpdateConfiguration#occurrence}
  */
  readonly occurrence: number;
}

export function automationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceToTerraform(struct?: AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference | AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
  }
}


export function automationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference | AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    occurrence: {
      value: cdktf.numberToHclTerraform(struct!.occurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._occurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrence = this._occurrence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._occurrence = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._occurrence = value.occurrence;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // occurrence - computed: false, optional: false, required: true
  private _occurrence?: number; 
  public get occurrence() {
    return this.getNumberAttribute('occurrence');
  }
  public set occurrence(value: number) {
    this._occurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceInput() {
    return this._occurrence;
  }
}
export interface AutomationSoftwareUpdateConfigurationSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#advanced_month_days AutomationSoftwareUpdateConfiguration#advanced_month_days}
  */
  readonly advancedMonthDays?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#advanced_week_days AutomationSoftwareUpdateConfiguration#advanced_week_days}
  */
  readonly advancedWeekDays?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#description AutomationSoftwareUpdateConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#expiry_time AutomationSoftwareUpdateConfiguration#expiry_time}
  */
  readonly expiryTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#expiry_time_offset_minutes AutomationSoftwareUpdateConfiguration#expiry_time_offset_minutes}
  */
  readonly expiryTimeOffsetMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#frequency AutomationSoftwareUpdateConfiguration#frequency}
  */
  readonly frequency: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#interval AutomationSoftwareUpdateConfiguration#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#is_enabled AutomationSoftwareUpdateConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#next_run AutomationSoftwareUpdateConfiguration#next_run}
  */
  readonly nextRun?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#next_run_offset_minutes AutomationSoftwareUpdateConfiguration#next_run_offset_minutes}
  */
  readonly nextRunOffsetMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#start_time AutomationSoftwareUpdateConfiguration#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#start_time_offset_minutes AutomationSoftwareUpdateConfiguration#start_time_offset_minutes}
  */
  readonly startTimeOffsetMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#time_zone AutomationSoftwareUpdateConfiguration#time_zone}
  */
  readonly timeZone?: string;
  /**
  * monthly_occurrence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#monthly_occurrence AutomationSoftwareUpdateConfiguration#monthly_occurrence}
  */
  readonly monthlyOccurrence?: AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence;
}

export function automationSoftwareUpdateConfigurationScheduleToTerraform(struct?: AutomationSoftwareUpdateConfigurationScheduleOutputReference | AutomationSoftwareUpdateConfigurationSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_month_days: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.advancedMonthDays),
    advanced_week_days: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advancedWeekDays),
    description: cdktf.stringToTerraform(struct!.description),
    expiry_time: cdktf.stringToTerraform(struct!.expiryTime),
    expiry_time_offset_minutes: cdktf.numberToTerraform(struct!.expiryTimeOffsetMinutes),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    interval: cdktf.numberToTerraform(struct!.interval),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    next_run: cdktf.stringToTerraform(struct!.nextRun),
    next_run_offset_minutes: cdktf.numberToTerraform(struct!.nextRunOffsetMinutes),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    start_time_offset_minutes: cdktf.numberToTerraform(struct!.startTimeOffsetMinutes),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    monthly_occurrence: automationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceToTerraform(struct!.monthlyOccurrence),
  }
}


export function automationSoftwareUpdateConfigurationScheduleToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationScheduleOutputReference | AutomationSoftwareUpdateConfigurationSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_month_days: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.advancedMonthDays),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    advanced_week_days: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advancedWeekDays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry_time: {
      value: cdktf.stringToHclTerraform(struct!.expiryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry_time_offset_minutes: {
      value: cdktf.numberToHclTerraform(struct!.expiryTimeOffsetMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    next_run: {
      value: cdktf.stringToHclTerraform(struct!.nextRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_run_offset_minutes: {
      value: cdktf.numberToHclTerraform(struct!.nextRunOffsetMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time_offset_minutes: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffsetMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monthly_occurrence: {
      value: automationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceToHclTerraform(struct!.monthlyOccurrence),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSoftwareUpdateConfigurationScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedMonthDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMonthDays = this._advancedMonthDays;
    }
    if (this._advancedWeekDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedWeekDays = this._advancedWeekDays;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expiryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryTime = this._expiryTime;
    }
    if (this._expiryTimeOffsetMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryTimeOffsetMinutes = this._expiryTimeOffsetMinutes;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._nextRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextRun = this._nextRun;
    }
    if (this._nextRunOffsetMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextRunOffsetMinutes = this._nextRunOffsetMinutes;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._startTimeOffsetMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffsetMinutes = this._startTimeOffsetMinutes;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._monthlyOccurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyOccurrence = this._monthlyOccurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSoftwareUpdateConfigurationSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedMonthDays = undefined;
      this._advancedWeekDays = undefined;
      this._description = undefined;
      this._expiryTime = undefined;
      this._expiryTimeOffsetMinutes = undefined;
      this._frequency = undefined;
      this._interval = undefined;
      this._isEnabled = undefined;
      this._nextRun = undefined;
      this._nextRunOffsetMinutes = undefined;
      this._startTime = undefined;
      this._startTimeOffsetMinutes = undefined;
      this._timeZone = undefined;
      this._monthlyOccurrence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedMonthDays = value.advancedMonthDays;
      this._advancedWeekDays = value.advancedWeekDays;
      this._description = value.description;
      this._expiryTime = value.expiryTime;
      this._expiryTimeOffsetMinutes = value.expiryTimeOffsetMinutes;
      this._frequency = value.frequency;
      this._interval = value.interval;
      this._isEnabled = value.isEnabled;
      this._nextRun = value.nextRun;
      this._nextRunOffsetMinutes = value.nextRunOffsetMinutes;
      this._startTime = value.startTime;
      this._startTimeOffsetMinutes = value.startTimeOffsetMinutes;
      this._timeZone = value.timeZone;
      this._monthlyOccurrence.internalValue = value.monthlyOccurrence;
    }
  }

  // advanced_month_days - computed: false, optional: true, required: false
  private _advancedMonthDays?: number[]; 
  public get advancedMonthDays() {
    return this.getNumberListAttribute('advanced_month_days');
  }
  public set advancedMonthDays(value: number[]) {
    this._advancedMonthDays = value;
  }
  public resetAdvancedMonthDays() {
    this._advancedMonthDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMonthDaysInput() {
    return this._advancedMonthDays;
  }

  // advanced_week_days - computed: false, optional: true, required: false
  private _advancedWeekDays?: string[]; 
  public get advancedWeekDays() {
    return this.getListAttribute('advanced_week_days');
  }
  public set advancedWeekDays(value: string[]) {
    this._advancedWeekDays = value;
  }
  public resetAdvancedWeekDays() {
    this._advancedWeekDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedWeekDaysInput() {
    return this._advancedWeekDays;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expiry_time - computed: true, optional: true, required: false
  private _expiryTime?: string; 
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string) {
    this._expiryTime = value;
  }
  public resetExpiryTime() {
    this._expiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime;
  }

  // expiry_time_offset_minutes - computed: false, optional: true, required: false
  private _expiryTimeOffsetMinutes?: number; 
  public get expiryTimeOffsetMinutes() {
    return this.getNumberAttribute('expiry_time_offset_minutes');
  }
  public set expiryTimeOffsetMinutes(value: number) {
    this._expiryTimeOffsetMinutes = value;
  }
  public resetExpiryTimeOffsetMinutes() {
    this._expiryTimeOffsetMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeOffsetMinutesInput() {
    return this._expiryTimeOffsetMinutes;
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // next_run - computed: true, optional: true, required: false
  private _nextRun?: string; 
  public get nextRun() {
    return this.getStringAttribute('next_run');
  }
  public set nextRun(value: string) {
    this._nextRun = value;
  }
  public resetNextRun() {
    this._nextRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRunInput() {
    return this._nextRun;
  }

  // next_run_offset_minutes - computed: false, optional: true, required: false
  private _nextRunOffsetMinutes?: number; 
  public get nextRunOffsetMinutes() {
    return this.getNumberAttribute('next_run_offset_minutes');
  }
  public set nextRunOffsetMinutes(value: number) {
    this._nextRunOffsetMinutes = value;
  }
  public resetNextRunOffsetMinutes() {
    this._nextRunOffsetMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRunOffsetMinutesInput() {
    return this._nextRunOffsetMinutes;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // start_time_offset_minutes - computed: false, optional: true, required: false
  private _startTimeOffsetMinutes?: number; 
  public get startTimeOffsetMinutes() {
    return this.getNumberAttribute('start_time_offset_minutes');
  }
  public set startTimeOffsetMinutes(value: number) {
    this._startTimeOffsetMinutes = value;
  }
  public resetStartTimeOffsetMinutes() {
    this._startTimeOffsetMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetMinutesInput() {
    return this._startTimeOffsetMinutes;
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

  // monthly_occurrence - computed: false, optional: true, required: false
  private _monthlyOccurrence = new AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrenceOutputReference(this, "monthly_occurrence");
  public get monthlyOccurrence() {
    return this._monthlyOccurrence;
  }
  public putMonthlyOccurrence(value: AutomationSoftwareUpdateConfigurationScheduleMonthlyOccurrence) {
    this._monthlyOccurrence.internalValue = value;
  }
  public resetMonthlyOccurrence() {
    this._monthlyOccurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyOccurrenceInput() {
    return this._monthlyOccurrence.internalValue;
  }
}
export interface AutomationSoftwareUpdateConfigurationTargetAzureQueryTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#tag AutomationSoftwareUpdateConfiguration#tag}
  */
  readonly tag: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#values AutomationSoftwareUpdateConfiguration#values}
  */
  readonly values: string[];
}

export function automationSoftwareUpdateConfigurationTargetAzureQueryTagsToTerraform(struct?: AutomationSoftwareUpdateConfigurationTargetAzureQueryTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function automationSoftwareUpdateConfigurationTargetAzureQueryTagsToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationTargetAzureQueryTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationTargetAzureQueryTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSoftwareUpdateConfigurationTargetAzureQueryTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
      this._values = value.values;
    }
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList extends cdktf.ComplexList {
  public internalValue? : AutomationSoftwareUpdateConfigurationTargetAzureQueryTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference {
    return new AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationSoftwareUpdateConfigurationTargetAzureQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#locations AutomationSoftwareUpdateConfiguration#locations}
  */
  readonly locations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#scope AutomationSoftwareUpdateConfiguration#scope}
  */
  readonly scope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#tag_filter AutomationSoftwareUpdateConfiguration#tag_filter}
  */
  readonly tagFilter?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#tags AutomationSoftwareUpdateConfiguration#tags}
  */
  readonly tags?: AutomationSoftwareUpdateConfigurationTargetAzureQueryTags[] | cdktf.IResolvable;
}

export function automationSoftwareUpdateConfigurationTargetAzureQueryToTerraform(struct?: AutomationSoftwareUpdateConfigurationTargetAzureQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locations),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
    tag_filter: cdktf.stringToTerraform(struct!.tagFilter),
    tags: cdktf.listMapper(automationSoftwareUpdateConfigurationTargetAzureQueryTagsToTerraform, true)(struct!.tags),
  }
}


export function automationSoftwareUpdateConfigurationTargetAzureQueryToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationTargetAzureQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag_filter: {
      value: cdktf.stringToHclTerraform(struct!.tagFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(automationSoftwareUpdateConfigurationTargetAzureQueryTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationTargetAzureQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locations !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tagFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagFilter = this._tagFilter;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSoftwareUpdateConfigurationTargetAzureQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locations = undefined;
      this._scope = undefined;
      this._tagFilter = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locations = value.locations;
      this._scope = value.scope;
      this._tagFilter = value.tagFilter;
      this._tags.internalValue = value.tags;
    }
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag_filter - computed: false, optional: true, required: false
  private _tagFilter?: string; 
  public get tagFilter() {
    return this.getStringAttribute('tag_filter');
  }
  public set tagFilter(value: string) {
    this._tagFilter = value;
  }
  public resetTagFilter() {
    this._tagFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AutomationSoftwareUpdateConfigurationTargetAzureQueryTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AutomationSoftwareUpdateConfigurationTargetAzureQueryTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class AutomationSoftwareUpdateConfigurationTargetAzureQueryList extends cdktf.ComplexList {
  public internalValue? : AutomationSoftwareUpdateConfigurationTargetAzureQuery[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference {
    return new AutomationSoftwareUpdateConfigurationTargetAzureQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationSoftwareUpdateConfigurationTargetNonAzureQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#function_alias AutomationSoftwareUpdateConfiguration#function_alias}
  */
  readonly functionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#workspace_id AutomationSoftwareUpdateConfiguration#workspace_id}
  */
  readonly workspaceId?: string;
}

export function automationSoftwareUpdateConfigurationTargetNonAzureQueryToTerraform(struct?: AutomationSoftwareUpdateConfigurationTargetNonAzureQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_alias: cdktf.stringToTerraform(struct!.functionAlias),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function automationSoftwareUpdateConfigurationTargetNonAzureQueryToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationTargetNonAzureQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_alias: {
      value: cdktf.stringToHclTerraform(struct!.functionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationTargetNonAzureQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAlias = this._functionAlias;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSoftwareUpdateConfigurationTargetNonAzureQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionAlias = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionAlias = value.functionAlias;
      this._workspaceId = value.workspaceId;
    }
  }

  // function_alias - computed: false, optional: true, required: false
  private _functionAlias?: string; 
  public get functionAlias() {
    return this.getStringAttribute('function_alias');
  }
  public set functionAlias(value: string) {
    this._functionAlias = value;
  }
  public resetFunctionAlias() {
    this._functionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAliasInput() {
    return this._functionAlias;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList extends cdktf.ComplexList {
  public internalValue? : AutomationSoftwareUpdateConfigurationTargetNonAzureQuery[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference {
    return new AutomationSoftwareUpdateConfigurationTargetNonAzureQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutomationSoftwareUpdateConfigurationTarget {
  /**
  * azure_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#azure_query AutomationSoftwareUpdateConfiguration#azure_query}
  */
  readonly azureQuery?: AutomationSoftwareUpdateConfigurationTargetAzureQuery[] | cdktf.IResolvable;
  /**
  * non_azure_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#non_azure_query AutomationSoftwareUpdateConfiguration#non_azure_query}
  */
  readonly nonAzureQuery?: AutomationSoftwareUpdateConfigurationTargetNonAzureQuery[] | cdktf.IResolvable;
}

export function automationSoftwareUpdateConfigurationTargetToTerraform(struct?: AutomationSoftwareUpdateConfigurationTargetOutputReference | AutomationSoftwareUpdateConfigurationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_query: cdktf.listMapper(automationSoftwareUpdateConfigurationTargetAzureQueryToTerraform, true)(struct!.azureQuery),
    non_azure_query: cdktf.listMapper(automationSoftwareUpdateConfigurationTargetNonAzureQueryToTerraform, true)(struct!.nonAzureQuery),
  }
}


export function automationSoftwareUpdateConfigurationTargetToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationTargetOutputReference | AutomationSoftwareUpdateConfigurationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_query: {
      value: cdktf.listMapperHcl(automationSoftwareUpdateConfigurationTargetAzureQueryToHclTerraform, true)(struct!.azureQuery),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationSoftwareUpdateConfigurationTargetAzureQueryList",
    },
    non_azure_query: {
      value: cdktf.listMapperHcl(automationSoftwareUpdateConfigurationTargetNonAzureQueryToHclTerraform, true)(struct!.nonAzureQuery),
      isBlock: true,
      type: "list",
      storageClassType: "AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSoftwareUpdateConfigurationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureQuery = this._azureQuery?.internalValue;
    }
    if (this._nonAzureQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonAzureQuery = this._nonAzureQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSoftwareUpdateConfigurationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureQuery.internalValue = undefined;
      this._nonAzureQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureQuery.internalValue = value.azureQuery;
      this._nonAzureQuery.internalValue = value.nonAzureQuery;
    }
  }

  // azure_query - computed: false, optional: true, required: false
  private _azureQuery = new AutomationSoftwareUpdateConfigurationTargetAzureQueryList(this, "azure_query", false);
  public get azureQuery() {
    return this._azureQuery;
  }
  public putAzureQuery(value: AutomationSoftwareUpdateConfigurationTargetAzureQuery[] | cdktf.IResolvable) {
    this._azureQuery.internalValue = value;
  }
  public resetAzureQuery() {
    this._azureQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureQueryInput() {
    return this._azureQuery.internalValue;
  }

  // non_azure_query - computed: false, optional: true, required: false
  private _nonAzureQuery = new AutomationSoftwareUpdateConfigurationTargetNonAzureQueryList(this, "non_azure_query", false);
  public get nonAzureQuery() {
    return this._nonAzureQuery;
  }
  public putNonAzureQuery(value: AutomationSoftwareUpdateConfigurationTargetNonAzureQuery[] | cdktf.IResolvable) {
    this._nonAzureQuery.internalValue = value;
  }
  public resetNonAzureQuery() {
    this._nonAzureQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonAzureQueryInput() {
    return this._nonAzureQuery.internalValue;
  }
}
export interface AutomationSoftwareUpdateConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#create AutomationSoftwareUpdateConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#delete AutomationSoftwareUpdateConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#read AutomationSoftwareUpdateConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#update AutomationSoftwareUpdateConfiguration#update}
  */
  readonly update?: string;
}

export function automationSoftwareUpdateConfigurationTimeoutsToTerraform(struct?: AutomationSoftwareUpdateConfigurationTimeouts | cdktf.IResolvable): any {
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


export function automationSoftwareUpdateConfigurationTimeoutsToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationTimeouts | cdktf.IResolvable): any {
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

export class AutomationSoftwareUpdateConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AutomationSoftwareUpdateConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
export interface AutomationSoftwareUpdateConfigurationWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#classifications_included AutomationSoftwareUpdateConfiguration#classifications_included}
  */
  readonly classificationsIncluded: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#excluded_knowledge_base_numbers AutomationSoftwareUpdateConfiguration#excluded_knowledge_base_numbers}
  */
  readonly excludedKnowledgeBaseNumbers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#included_knowledge_base_numbers AutomationSoftwareUpdateConfiguration#included_knowledge_base_numbers}
  */
  readonly includedKnowledgeBaseNumbers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#reboot AutomationSoftwareUpdateConfiguration#reboot}
  */
  readonly reboot?: string;
}

export function automationSoftwareUpdateConfigurationWindowsToTerraform(struct?: AutomationSoftwareUpdateConfigurationWindowsOutputReference | AutomationSoftwareUpdateConfigurationWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classifications_included: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classificationsIncluded),
    excluded_knowledge_base_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedKnowledgeBaseNumbers),
    included_knowledge_base_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedKnowledgeBaseNumbers),
    reboot: cdktf.stringToTerraform(struct!.reboot),
  }
}


export function automationSoftwareUpdateConfigurationWindowsToHclTerraform(struct?: AutomationSoftwareUpdateConfigurationWindowsOutputReference | AutomationSoftwareUpdateConfigurationWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classifications_included: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classificationsIncluded),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_knowledge_base_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedKnowledgeBaseNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_knowledge_base_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedKnowledgeBaseNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reboot: {
      value: cdktf.stringToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSoftwareUpdateConfigurationWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSoftwareUpdateConfigurationWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classificationsIncluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationsIncluded = this._classificationsIncluded;
    }
    if (this._excludedKnowledgeBaseNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedKnowledgeBaseNumbers = this._excludedKnowledgeBaseNumbers;
    }
    if (this._includedKnowledgeBaseNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedKnowledgeBaseNumbers = this._includedKnowledgeBaseNumbers;
    }
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSoftwareUpdateConfigurationWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classificationsIncluded = undefined;
      this._excludedKnowledgeBaseNumbers = undefined;
      this._includedKnowledgeBaseNumbers = undefined;
      this._reboot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classificationsIncluded = value.classificationsIncluded;
      this._excludedKnowledgeBaseNumbers = value.excludedKnowledgeBaseNumbers;
      this._includedKnowledgeBaseNumbers = value.includedKnowledgeBaseNumbers;
      this._reboot = value.reboot;
    }
  }

  // classifications_included - computed: false, optional: false, required: true
  private _classificationsIncluded?: string[]; 
  public get classificationsIncluded() {
    return this.getListAttribute('classifications_included');
  }
  public set classificationsIncluded(value: string[]) {
    this._classificationsIncluded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsIncludedInput() {
    return this._classificationsIncluded;
  }

  // excluded_knowledge_base_numbers - computed: false, optional: true, required: false
  private _excludedKnowledgeBaseNumbers?: string[]; 
  public get excludedKnowledgeBaseNumbers() {
    return this.getListAttribute('excluded_knowledge_base_numbers');
  }
  public set excludedKnowledgeBaseNumbers(value: string[]) {
    this._excludedKnowledgeBaseNumbers = value;
  }
  public resetExcludedKnowledgeBaseNumbers() {
    this._excludedKnowledgeBaseNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedKnowledgeBaseNumbersInput() {
    return this._excludedKnowledgeBaseNumbers;
  }

  // included_knowledge_base_numbers - computed: false, optional: true, required: false
  private _includedKnowledgeBaseNumbers?: string[]; 
  public get includedKnowledgeBaseNumbers() {
    return this.getListAttribute('included_knowledge_base_numbers');
  }
  public set includedKnowledgeBaseNumbers(value: string[]) {
    this._includedKnowledgeBaseNumbers = value;
  }
  public resetIncludedKnowledgeBaseNumbers() {
    this._includedKnowledgeBaseNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedKnowledgeBaseNumbersInput() {
    return this._includedKnowledgeBaseNumbers;
  }

  // reboot - computed: false, optional: true, required: false
  private _reboot?: string; 
  public get reboot() {
    return this.getStringAttribute('reboot');
  }
  public set reboot(value: string) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration azurerm_automation_software_update_configuration}
*/
export class AutomationSoftwareUpdateConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_automation_software_update_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationSoftwareUpdateConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationSoftwareUpdateConfiguration to import
  * @param importFromId The id of the existing AutomationSoftwareUpdateConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationSoftwareUpdateConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_automation_software_update_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_software_update_configuration azurerm_automation_software_update_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationSoftwareUpdateConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationSoftwareUpdateConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_software_update_configuration',
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
    this._automationAccountId = config.automationAccountId;
    this._duration = config.duration;
    this._id = config.id;
    this._name = config.name;
    this._nonAzureComputerNames = config.nonAzureComputerNames;
    this._virtualMachineIds = config.virtualMachineIds;
    this._linux.internalValue = config.linux;
    this._postTask.internalValue = config.postTask;
    this._preTask.internalValue = config.preTask;
    this._schedule.internalValue = config.schedule;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
    this._windows.internalValue = config.windows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation_account_id - computed: false, optional: false, required: true
  private _automationAccountId?: string; 
  public get automationAccountId() {
    return this.getStringAttribute('automation_account_id');
  }
  public set automationAccountId(value: string) {
    this._automationAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountIdInput() {
    return this._automationAccountId;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // non_azure_computer_names - computed: false, optional: true, required: false
  private _nonAzureComputerNames?: string[]; 
  public get nonAzureComputerNames() {
    return this.getListAttribute('non_azure_computer_names');
  }
  public set nonAzureComputerNames(value: string[]) {
    this._nonAzureComputerNames = value;
  }
  public resetNonAzureComputerNames() {
    this._nonAzureComputerNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonAzureComputerNamesInput() {
    return this._nonAzureComputerNames;
  }

  // virtual_machine_ids - computed: false, optional: true, required: false
  private _virtualMachineIds?: string[]; 
  public get virtualMachineIds() {
    return this.getListAttribute('virtual_machine_ids');
  }
  public set virtualMachineIds(value: string[]) {
    this._virtualMachineIds = value;
  }
  public resetVirtualMachineIds() {
    this._virtualMachineIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineIdsInput() {
    return this._virtualMachineIds;
  }

  // linux - computed: false, optional: true, required: false
  private _linux = new AutomationSoftwareUpdateConfigurationLinuxOutputReference(this, "linux");
  public get linux() {
    return this._linux;
  }
  public putLinux(value: AutomationSoftwareUpdateConfigurationLinux) {
    this._linux.internalValue = value;
  }
  public resetLinux() {
    this._linux.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxInput() {
    return this._linux.internalValue;
  }

  // post_task - computed: false, optional: true, required: false
  private _postTask = new AutomationSoftwareUpdateConfigurationPostTaskOutputReference(this, "post_task");
  public get postTask() {
    return this._postTask;
  }
  public putPostTask(value: AutomationSoftwareUpdateConfigurationPostTask) {
    this._postTask.internalValue = value;
  }
  public resetPostTask() {
    this._postTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postTaskInput() {
    return this._postTask.internalValue;
  }

  // pre_task - computed: false, optional: true, required: false
  private _preTask = new AutomationSoftwareUpdateConfigurationPreTaskOutputReference(this, "pre_task");
  public get preTask() {
    return this._preTask;
  }
  public putPreTask(value: AutomationSoftwareUpdateConfigurationPreTask) {
    this._preTask.internalValue = value;
  }
  public resetPreTask() {
    this._preTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTaskInput() {
    return this._preTask.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new AutomationSoftwareUpdateConfigurationScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: AutomationSoftwareUpdateConfigurationSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new AutomationSoftwareUpdateConfigurationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: AutomationSoftwareUpdateConfigurationTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AutomationSoftwareUpdateConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AutomationSoftwareUpdateConfigurationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // windows - computed: false, optional: true, required: false
  private _windows = new AutomationSoftwareUpdateConfigurationWindowsOutputReference(this, "windows");
  public get windows() {
    return this._windows;
  }
  public putWindows(value: AutomationSoftwareUpdateConfigurationWindows) {
    this._windows.internalValue = value;
  }
  public resetWindows() {
    this._windows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsInput() {
    return this._windows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automation_account_id: cdktf.stringToTerraform(this._automationAccountId),
      duration: cdktf.stringToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      non_azure_computer_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nonAzureComputerNames),
      virtual_machine_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualMachineIds),
      linux: automationSoftwareUpdateConfigurationLinuxToTerraform(this._linux.internalValue),
      post_task: automationSoftwareUpdateConfigurationPostTaskToTerraform(this._postTask.internalValue),
      pre_task: automationSoftwareUpdateConfigurationPreTaskToTerraform(this._preTask.internalValue),
      schedule: automationSoftwareUpdateConfigurationScheduleToTerraform(this._schedule.internalValue),
      target: automationSoftwareUpdateConfigurationTargetToTerraform(this._target.internalValue),
      timeouts: automationSoftwareUpdateConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
      windows: automationSoftwareUpdateConfigurationWindowsToTerraform(this._windows.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automation_account_id: {
        value: cdktf.stringToHclTerraform(this._automationAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_azure_computer_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nonAzureComputerNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      virtual_machine_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._virtualMachineIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      linux: {
        value: automationSoftwareUpdateConfigurationLinuxToHclTerraform(this._linux.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSoftwareUpdateConfigurationLinuxList",
      },
      post_task: {
        value: automationSoftwareUpdateConfigurationPostTaskToHclTerraform(this._postTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSoftwareUpdateConfigurationPostTaskList",
      },
      pre_task: {
        value: automationSoftwareUpdateConfigurationPreTaskToHclTerraform(this._preTask.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSoftwareUpdateConfigurationPreTaskList",
      },
      schedule: {
        value: automationSoftwareUpdateConfigurationScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSoftwareUpdateConfigurationScheduleList",
      },
      target: {
        value: automationSoftwareUpdateConfigurationTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSoftwareUpdateConfigurationTargetList",
      },
      timeouts: {
        value: automationSoftwareUpdateConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationSoftwareUpdateConfigurationTimeouts",
      },
      windows: {
        value: automationSoftwareUpdateConfigurationWindowsToHclTerraform(this._windows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSoftwareUpdateConfigurationWindowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
