// https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorDataCollectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#description MonitorDataCollectionRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#id MonitorDataCollectionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#kind MonitorDataCollectionRule#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#location MonitorDataCollectionRule#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#resource_group_name MonitorDataCollectionRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#tags MonitorDataCollectionRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * data_flow block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#data_flow MonitorDataCollectionRule#data_flow}
  */
  readonly dataFlow: MonitorDataCollectionRuleDataFlow[] | cdktf.IResolvable;
  /**
  * data_sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#data_sources MonitorDataCollectionRule#data_sources}
  */
  readonly dataSources?: MonitorDataCollectionRuleDataSources;
  /**
  * destinations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}
  */
  readonly destinations: MonitorDataCollectionRuleDestinations;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#timeouts MonitorDataCollectionRule#timeouts}
  */
  readonly timeouts?: MonitorDataCollectionRuleTimeouts;
}
export interface MonitorDataCollectionRuleDataFlow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}
  */
  readonly destinations: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
}

export function monitorDataCollectionRuleDataFlowToTerraform(struct?: MonitorDataCollectionRuleDataFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinations),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
  }
}

export class MonitorDataCollectionRuleDataFlowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinations = undefined;
      this._streams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinations = value.destinations;
      this._streams = value.streams;
    }
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations?: string[]; 
  public get destinations() {
    return this.getListAttribute('destinations');
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
  }

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }
}

export class MonitorDataCollectionRuleDataFlowList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataFlow[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataFlowOutputReference {
    return new MonitorDataCollectionRuleDataFlowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesExtension {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#extension_json MonitorDataCollectionRule#extension_json}
  */
  readonly extensionJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#extension_name MonitorDataCollectionRule#extension_name}
  */
  readonly extensionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#input_data_sources MonitorDataCollectionRule#input_data_sources}
  */
  readonly inputDataSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
}

export function monitorDataCollectionRuleDataSourcesExtensionToTerraform(struct?: MonitorDataCollectionRuleDataSourcesExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension_json: cdktf.stringToTerraform(struct!.extensionJson),
    extension_name: cdktf.stringToTerraform(struct!.extensionName),
    input_data_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inputDataSources),
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
  }
}

export class MonitorDataCollectionRuleDataSourcesExtensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensionJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionJson = this._extensionJson;
    }
    if (this._extensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionName = this._extensionName;
    }
    if (this._inputDataSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDataSources = this._inputDataSources;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensionJson = undefined;
      this._extensionName = undefined;
      this._inputDataSources = undefined;
      this._name = undefined;
      this._streams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extensionJson = value.extensionJson;
      this._extensionName = value.extensionName;
      this._inputDataSources = value.inputDataSources;
      this._name = value.name;
      this._streams = value.streams;
    }
  }

  // extension_json - computed: false, optional: true, required: false
  private _extensionJson?: string; 
  public get extensionJson() {
    return this.getStringAttribute('extension_json');
  }
  public set extensionJson(value: string) {
    this._extensionJson = value;
  }
  public resetExtensionJson() {
    this._extensionJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionJsonInput() {
    return this._extensionJson;
  }

  // extension_name - computed: false, optional: false, required: true
  private _extensionName?: string; 
  public get extensionName() {
    return this.getStringAttribute('extension_name');
  }
  public set extensionName(value: string) {
    this._extensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionNameInput() {
    return this._extensionName;
  }

  // input_data_sources - computed: false, optional: true, required: false
  private _inputDataSources?: string[]; 
  public get inputDataSources() {
    return this.getListAttribute('input_data_sources');
  }
  public set inputDataSources(value: string[]) {
    this._inputDataSources = value;
  }
  public resetInputDataSources() {
    this._inputDataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataSourcesInput() {
    return this._inputDataSources;
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

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }
}

export class MonitorDataCollectionRuleDataSourcesExtensionList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesExtension[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesExtensionOutputReference {
    return new MonitorDataCollectionRuleDataSourcesExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesPerformanceCounter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#counter_specifiers MonitorDataCollectionRule#counter_specifiers}
  */
  readonly counterSpecifiers: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#sampling_frequency_in_seconds MonitorDataCollectionRule#sampling_frequency_in_seconds}
  */
  readonly samplingFrequencyInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
}

export function monitorDataCollectionRuleDataSourcesPerformanceCounterToTerraform(struct?: MonitorDataCollectionRuleDataSourcesPerformanceCounter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_specifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.counterSpecifiers),
    name: cdktf.stringToTerraform(struct!.name),
    sampling_frequency_in_seconds: cdktf.numberToTerraform(struct!.samplingFrequencyInSeconds),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
  }
}

export class MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesPerformanceCounter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counterSpecifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterSpecifiers = this._counterSpecifiers;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._samplingFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingFrequencyInSeconds = this._samplingFrequencyInSeconds;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesPerformanceCounter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counterSpecifiers = undefined;
      this._name = undefined;
      this._samplingFrequencyInSeconds = undefined;
      this._streams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counterSpecifiers = value.counterSpecifiers;
      this._name = value.name;
      this._samplingFrequencyInSeconds = value.samplingFrequencyInSeconds;
      this._streams = value.streams;
    }
  }

  // counter_specifiers - computed: false, optional: false, required: true
  private _counterSpecifiers?: string[]; 
  public get counterSpecifiers() {
    return this.getListAttribute('counter_specifiers');
  }
  public set counterSpecifiers(value: string[]) {
    this._counterSpecifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get counterSpecifiersInput() {
    return this._counterSpecifiers;
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

  // sampling_frequency_in_seconds - computed: false, optional: false, required: true
  private _samplingFrequencyInSeconds?: number; 
  public get samplingFrequencyInSeconds() {
    return this.getNumberAttribute('sampling_frequency_in_seconds');
  }
  public set samplingFrequencyInSeconds(value: number) {
    this._samplingFrequencyInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingFrequencyInSecondsInput() {
    return this._samplingFrequencyInSeconds;
  }

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }
}

export class MonitorDataCollectionRuleDataSourcesPerformanceCounterList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesPerformanceCounter[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference {
    return new MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesSyslog {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#facility_names MonitorDataCollectionRule#facility_names}
  */
  readonly facilityNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#log_levels MonitorDataCollectionRule#log_levels}
  */
  readonly logLevels: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams?: string[];
}

export function monitorDataCollectionRuleDataSourcesSyslogToTerraform(struct?: MonitorDataCollectionRuleDataSourcesSyslog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    facility_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.facilityNames),
    log_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logLevels),
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
  }
}

export class MonitorDataCollectionRuleDataSourcesSyslogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesSyslog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._facilityNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.facilityNames = this._facilityNames;
    }
    if (this._logLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevels = this._logLevels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesSyslog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._facilityNames = undefined;
      this._logLevels = undefined;
      this._name = undefined;
      this._streams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._facilityNames = value.facilityNames;
      this._logLevels = value.logLevels;
      this._name = value.name;
      this._streams = value.streams;
    }
  }

  // facility_names - computed: false, optional: false, required: true
  private _facilityNames?: string[]; 
  public get facilityNames() {
    return this.getListAttribute('facility_names');
  }
  public set facilityNames(value: string[]) {
    this._facilityNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityNamesInput() {
    return this._facilityNames;
  }

  // log_levels - computed: false, optional: false, required: true
  private _logLevels?: string[]; 
  public get logLevels() {
    return this.getListAttribute('log_levels');
  }
  public set logLevels(value: string[]) {
    this._logLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelsInput() {
    return this._logLevels;
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

  // streams - computed: true, optional: true, required: false
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  public resetStreams() {
    this._streams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }
}

export class MonitorDataCollectionRuleDataSourcesSyslogList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesSyslog[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesSyslogOutputReference {
    return new MonitorDataCollectionRuleDataSourcesSyslogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSourcesWindowsEventLog {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}
  */
  readonly streams: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#x_path_queries MonitorDataCollectionRule#x_path_queries}
  */
  readonly xPathQueries: string[];
}

export function monitorDataCollectionRuleDataSourcesWindowsEventLogToTerraform(struct?: MonitorDataCollectionRuleDataSourcesWindowsEventLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.streams),
    x_path_queries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xPathQueries),
  }
}

export class MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDataSourcesWindowsEventLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._streams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams;
    }
    if (this._xPathQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPathQueries = this._xPathQueries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSourcesWindowsEventLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._streams = undefined;
      this._xPathQueries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._streams = value.streams;
      this._xPathQueries = value.xPathQueries;
    }
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

  // streams - computed: false, optional: false, required: true
  private _streams?: string[]; 
  public get streams() {
    return this.getListAttribute('streams');
  }
  public set streams(value: string[]) {
    this._streams = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams;
  }

  // x_path_queries - computed: false, optional: false, required: true
  private _xPathQueries?: string[]; 
  public get xPathQueries() {
    return this.getListAttribute('x_path_queries');
  }
  public set xPathQueries(value: string[]) {
    this._xPathQueries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xPathQueriesInput() {
    return this._xPathQueries;
  }
}

export class MonitorDataCollectionRuleDataSourcesWindowsEventLogList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDataSourcesWindowsEventLog[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference {
    return new MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDataSources {
  /**
  * extension block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#extension MonitorDataCollectionRule#extension}
  */
  readonly extension?: MonitorDataCollectionRuleDataSourcesExtension[] | cdktf.IResolvable;
  /**
  * performance_counter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#performance_counter MonitorDataCollectionRule#performance_counter}
  */
  readonly performanceCounter?: MonitorDataCollectionRuleDataSourcesPerformanceCounter[] | cdktf.IResolvable;
  /**
  * syslog block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#syslog MonitorDataCollectionRule#syslog}
  */
  readonly syslog?: MonitorDataCollectionRuleDataSourcesSyslog[] | cdktf.IResolvable;
  /**
  * windows_event_log block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#windows_event_log MonitorDataCollectionRule#windows_event_log}
  */
  readonly windowsEventLog?: MonitorDataCollectionRuleDataSourcesWindowsEventLog[] | cdktf.IResolvable;
}

export function monitorDataCollectionRuleDataSourcesToTerraform(struct?: MonitorDataCollectionRuleDataSourcesOutputReference | MonitorDataCollectionRuleDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extension: cdktf.listMapper(monitorDataCollectionRuleDataSourcesExtensionToTerraform, true)(struct!.extension),
    performance_counter: cdktf.listMapper(monitorDataCollectionRuleDataSourcesPerformanceCounterToTerraform, true)(struct!.performanceCounter),
    syslog: cdktf.listMapper(monitorDataCollectionRuleDataSourcesSyslogToTerraform, true)(struct!.syslog),
    windows_event_log: cdktf.listMapper(monitorDataCollectionRuleDataSourcesWindowsEventLogToTerraform, true)(struct!.windowsEventLog),
  }
}

export class MonitorDataCollectionRuleDataSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDataSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extension = this._extension?.internalValue;
    }
    if (this._performanceCounter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceCounter = this._performanceCounter?.internalValue;
    }
    if (this._syslog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog?.internalValue;
    }
    if (this._windowsEventLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsEventLog = this._windowsEventLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDataSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extension.internalValue = undefined;
      this._performanceCounter.internalValue = undefined;
      this._syslog.internalValue = undefined;
      this._windowsEventLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extension.internalValue = value.extension;
      this._performanceCounter.internalValue = value.performanceCounter;
      this._syslog.internalValue = value.syslog;
      this._windowsEventLog.internalValue = value.windowsEventLog;
    }
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new MonitorDataCollectionRuleDataSourcesExtensionList(this, "extension", false);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: MonitorDataCollectionRuleDataSourcesExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // performance_counter - computed: false, optional: true, required: false
  private _performanceCounter = new MonitorDataCollectionRuleDataSourcesPerformanceCounterList(this, "performance_counter", false);
  public get performanceCounter() {
    return this._performanceCounter;
  }
  public putPerformanceCounter(value: MonitorDataCollectionRuleDataSourcesPerformanceCounter[] | cdktf.IResolvable) {
    this._performanceCounter.internalValue = value;
  }
  public resetPerformanceCounter() {
    this._performanceCounter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceCounterInput() {
    return this._performanceCounter.internalValue;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog = new MonitorDataCollectionRuleDataSourcesSyslogList(this, "syslog", false);
  public get syslog() {
    return this._syslog;
  }
  public putSyslog(value: MonitorDataCollectionRuleDataSourcesSyslog[] | cdktf.IResolvable) {
    this._syslog.internalValue = value;
  }
  public resetSyslog() {
    this._syslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog.internalValue;
  }

  // windows_event_log - computed: false, optional: true, required: false
  private _windowsEventLog = new MonitorDataCollectionRuleDataSourcesWindowsEventLogList(this, "windows_event_log", false);
  public get windowsEventLog() {
    return this._windowsEventLog;
  }
  public putWindowsEventLog(value: MonitorDataCollectionRuleDataSourcesWindowsEventLog[] | cdktf.IResolvable) {
    this._windowsEventLog.internalValue = value;
  }
  public resetWindowsEventLog() {
    this._windowsEventLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsEventLogInput() {
    return this._windowsEventLog.internalValue;
  }
}
export interface MonitorDataCollectionRuleDestinationsAzureMonitorMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
}

export function monitorDataCollectionRuleDestinationsAzureMonitorMetricsToTerraform(struct?: MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference | MonitorDataCollectionRuleDestinationsAzureMonitorMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDestinationsAzureMonitorMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinationsAzureMonitorMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface MonitorDataCollectionRuleDestinationsLogAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#name MonitorDataCollectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#workspace_resource_id MonitorDataCollectionRule#workspace_resource_id}
  */
  readonly workspaceResourceId: string;
}

export function monitorDataCollectionRuleDestinationsLogAnalyticsToTerraform(struct?: MonitorDataCollectionRuleDestinationsLogAnalytics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    workspace_resource_id: cdktf.stringToTerraform(struct!.workspaceResourceId),
  }
}

export class MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorDataCollectionRuleDestinationsLogAnalytics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._workspaceResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceResourceId = this._workspaceResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinationsLogAnalytics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._workspaceResourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._workspaceResourceId = value.workspaceResourceId;
    }
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

  // workspace_resource_id - computed: false, optional: false, required: true
  private _workspaceResourceId?: string; 
  public get workspaceResourceId() {
    return this.getStringAttribute('workspace_resource_id');
  }
  public set workspaceResourceId(value: string) {
    this._workspaceResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceResourceIdInput() {
    return this._workspaceResourceId;
  }
}

export class MonitorDataCollectionRuleDestinationsLogAnalyticsList extends cdktf.ComplexList {
  public internalValue? : MonitorDataCollectionRuleDestinationsLogAnalytics[] | cdktf.IResolvable

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
  public get(index: number): MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference {
    return new MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorDataCollectionRuleDestinations {
  /**
  * azure_monitor_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#azure_monitor_metrics MonitorDataCollectionRule#azure_monitor_metrics}
  */
  readonly azureMonitorMetrics?: MonitorDataCollectionRuleDestinationsAzureMonitorMetrics;
  /**
  * log_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#log_analytics MonitorDataCollectionRule#log_analytics}
  */
  readonly logAnalytics?: MonitorDataCollectionRuleDestinationsLogAnalytics[] | cdktf.IResolvable;
}

export function monitorDataCollectionRuleDestinationsToTerraform(struct?: MonitorDataCollectionRuleDestinationsOutputReference | MonitorDataCollectionRuleDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_monitor_metrics: monitorDataCollectionRuleDestinationsAzureMonitorMetricsToTerraform(struct!.azureMonitorMetrics),
    log_analytics: cdktf.listMapper(monitorDataCollectionRuleDestinationsLogAnalyticsToTerraform, true)(struct!.logAnalytics),
  }
}

export class MonitorDataCollectionRuleDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureMonitorMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMonitorMetrics = this._azureMonitorMetrics?.internalValue;
    }
    if (this._logAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalytics = this._logAnalytics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorDataCollectionRuleDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureMonitorMetrics.internalValue = undefined;
      this._logAnalytics.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureMonitorMetrics.internalValue = value.azureMonitorMetrics;
      this._logAnalytics.internalValue = value.logAnalytics;
    }
  }

  // azure_monitor_metrics - computed: false, optional: true, required: false
  private _azureMonitorMetrics = new MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference(this, "azure_monitor_metrics");
  public get azureMonitorMetrics() {
    return this._azureMonitorMetrics;
  }
  public putAzureMonitorMetrics(value: MonitorDataCollectionRuleDestinationsAzureMonitorMetrics) {
    this._azureMonitorMetrics.internalValue = value;
  }
  public resetAzureMonitorMetrics() {
    this._azureMonitorMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMonitorMetricsInput() {
    return this._azureMonitorMetrics.internalValue;
  }

  // log_analytics - computed: false, optional: true, required: false
  private _logAnalytics = new MonitorDataCollectionRuleDestinationsLogAnalyticsList(this, "log_analytics", false);
  public get logAnalytics() {
    return this._logAnalytics;
  }
  public putLogAnalytics(value: MonitorDataCollectionRuleDestinationsLogAnalytics[] | cdktf.IResolvable) {
    this._logAnalytics.internalValue = value;
  }
  public resetLogAnalytics() {
    this._logAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsInput() {
    return this._logAnalytics.internalValue;
  }
}
export interface MonitorDataCollectionRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#create MonitorDataCollectionRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#delete MonitorDataCollectionRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#read MonitorDataCollectionRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule#update MonitorDataCollectionRule#update}
  */
  readonly update?: string;
}

export function monitorDataCollectionRuleTimeoutsToTerraform(struct?: MonitorDataCollectionRuleTimeoutsOutputReference | MonitorDataCollectionRuleTimeouts | cdktf.IResolvable): any {
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

export class MonitorDataCollectionRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MonitorDataCollectionRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MonitorDataCollectionRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule azurerm_monitor_data_collection_rule}
*/
export class MonitorDataCollectionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_monitor_data_collection_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/monitor_data_collection_rule azurerm_monitor_data_collection_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorDataCollectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorDataCollectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_monitor_data_collection_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.32.0',
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
    this._description = config.description;
    this._id = config.id;
    this._kind = config.kind;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._dataFlow.internalValue = config.dataFlow;
    this._dataSources.internalValue = config.dataSources;
    this._destinations.internalValue = config.destinations;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // data_flow - computed: false, optional: false, required: true
  private _dataFlow = new MonitorDataCollectionRuleDataFlowList(this, "data_flow", false);
  public get dataFlow() {
    return this._dataFlow;
  }
  public putDataFlow(value: MonitorDataCollectionRuleDataFlow[] | cdktf.IResolvable) {
    this._dataFlow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFlowInput() {
    return this._dataFlow.internalValue;
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources = new MonitorDataCollectionRuleDataSourcesOutputReference(this, "data_sources");
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: MonitorDataCollectionRuleDataSources) {
    this._dataSources.internalValue = value;
  }
  public resetDataSources() {
    this._dataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources.internalValue;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new MonitorDataCollectionRuleDestinationsOutputReference(this, "destinations");
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: MonitorDataCollectionRuleDestinations) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MonitorDataCollectionRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MonitorDataCollectionRuleTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      data_flow: cdktf.listMapper(monitorDataCollectionRuleDataFlowToTerraform, true)(this._dataFlow.internalValue),
      data_sources: monitorDataCollectionRuleDataSourcesToTerraform(this._dataSources.internalValue),
      destinations: monitorDataCollectionRuleDestinationsToTerraform(this._destinations.internalValue),
      timeouts: monitorDataCollectionRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
